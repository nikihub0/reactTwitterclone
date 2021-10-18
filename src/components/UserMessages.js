import React from 'react';

const UserMessages = ({messages}) => {

    const userMsgs = messages.filter(msg => msg.userId.name);


    return (
        <h3>All messages of selected user...</h3>
    );
}

export default UserMessages;