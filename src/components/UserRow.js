import React from 'react';
import { Link } from 'react-router-dom';


const UserRow = (user) => (
    <div className="content-container">
        <Link name={user.node_id} className="list-item" to={`/user/${user.login}`}>
            <img src={user.avatar_url} className="list-item__avatar"/>
            <h3>{user.login}</h3>
            <object>
                <Link className="button" to="" onClick={() => {window.open(user.html_url,'_blank')}}>
                    Страница на git
                </Link>
            </object>
        </Link>
    </div>
    
);

export default UserRow;