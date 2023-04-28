import React, { useState } from 'react';
import './MyComponent.css'; // Import the CSS file

function MyComponent() {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle GET request
  const handleGet = async () => {
    const response = await fetch('http://localhost:8080/data');
    const result = await response.json();
    setData(result);
  };

  // Function to handle POST request for login
  const handleLogin = async () => {
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: username,
        password: password
      })
    });
    const result = await response.text(); // Get response as string
    console.log(result);
    if (result==="ok") {
        window.alert("Zalogowano pomyślnie");
    }
    else window.alert("Nie udało się zalogować");
  };


  return (
    <div className="container">
      <button className="button" onClick={handleGet}>Get Data</button>
      <input
        type="text"
        placeholder="email"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="input"
      />
      <button className="button" onClick={handleLogin}>Login</button>
      {data && <pre className="pre">{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default MyComponent;
