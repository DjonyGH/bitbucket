import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Users from './components/Users';
import './css/users.css';

import users from './components/users.json'

console.log('users = ', users);

class App extends React.Component{
    constructor() {
        super();

        this.state = {
            'users': users
        }         
    }


    render() {
        return (
            <div className='users'> 
                <h2 className='title'>Пользователи</h2>               
                <hr />
                <div className='users-table'>
                    <div className='users-table__row'>
                        <div className='users-table__col--title'>
                            Name              
                        </div>
                        <div className='users-table__col--title'>
                            ID   
                        </div>
                        <div className='users-table__col--title'>
                            PHONE
                        </div>         
                        <div className='users-table__col--title'>
                            AGE
                        </div>
                    </div>  
                    {
                        this.state.users.map((user, i) => {
                            return(
                                <Users
                                key = {i}
                                name = {user.name}
                                id = {user.id}
                                phone = {user.phone}
                                age = {user.age}
                                />
                            )
                        })
                    }
                </div>                
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
)