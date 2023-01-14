import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';

const url =
  'http://zimauserservice-env.eu-west-2.elasticbeanstalk.com/api/v1/userapi/auth/register';
var body = {
  firstName: 'Ayobami',
  lastName: 'Fadeni',
  email: 'seyilegend1709@gmail.com',
  platform: 'BRAND_SELLER',
  gender: 'MALE',
  password: 'String1@',
  phoneNumber: 'String1@',
  countryCode: 'NG',
};

function App() {
  React.useEffect(() => {
    axios.post(url, body).then((response) => console.log(response));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
