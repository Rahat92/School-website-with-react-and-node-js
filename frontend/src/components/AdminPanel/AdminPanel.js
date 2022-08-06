import React from 'react';

const AdminPanel = () => {
    return (
        <div>
            <form>
                <label htmlFor='updateName'>Your name: </label>
                <input id='updateName' type='text' name = 'name' placeholder = 'update Your Name here' />
            </form>
        </div>
    );
};

export default AdminPanel;