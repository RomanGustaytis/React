import React from 'react';
import { MessageContext } from '../context/MessageContext';

const Aside = () => {
    return (
        <MessageContext.Consumer>
            {({ message, updateState }) => (
                <div className="asside">
                    <p>{message.welcome}</p>
                </div>
            )}
        </MessageContext.Consumer>
    )
}

export default Aside;