import { useState, useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*-_+=[]{}~`';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  const LoginForm = () => {
    navigate('/');
};
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 bg-dark text-light">
        <h1 className="text-center mb-4">Password Generator</h1>

        <div className="input-group mb-3">
          <input
            type="text"
            value={password}
            className="form-control"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="btn btn-primary"
          >
            Copy
          </button>
        </div>

        <div className="mb-3">
          <label className="form-label">Length: {length}</label>
          <input
            type="range"
            className="form-range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <div className="form-check form-switch">
          <input
            type="checkbox"
            className="form-check-input"
            id="numberInput"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label className="form-check-label" htmlFor="numberInput">
            Include Numbers
          </label>
        </div>

        <div className="form-check form-switch mt-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="characterInput"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label className="form-check-label" htmlFor="characterInput">
            Include Special Characters
          </label>
        </div>
      </div>
      <button className='btn btn-primary'  style={{marginTop:"20px",fontSize:"20px"}}onClick={LoginForm}>Back</button>
    </div>
  );
}

export default App;
