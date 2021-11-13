import React, {useState} from 'react';
import './Login.css';
import Input from "./Input";
import Button from "./Button";

const Login = (props) => {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(password);

        if (username.length && password.length) {

            props.setIsAuthenticated(true);
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            return null;

        }

    }
    if (props.isAuthenticated || localStorage.getItem('username') && localStorage.getItem('password')) {
      
      return(
          <div className="login-wrapper">
              Welcome {localStorage.getItem('username')}
          </div>
      )
    }


  return(
      <div className="login-wrapper">
          <form onSubmit={handleSubmit}>
              <Input username={username} password={password} setUserName={setUserName} setPassword={setPassword} />
              <Button />
          </form>
      </div>
  )
}

export default Login;