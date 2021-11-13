import React from 'react';

const Input = (props) => {

    return (
        <div className="items">
            <label>
                <span>Username</span>
                <input type="text" value={props.username} onChange={(e) => props.setUserName(e.target.value)}/>
            </label>
            <label>
                <span>Password</span>
                <input type="password" value={props.password} onChange={(e) => props.setPassword(e.target.value)} />
            </label>
        </div>
    )
}

export default Input;