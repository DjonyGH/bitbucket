import React from 'react';

const Users = (props) => {
    return(
        <div className='users-table__row'>
            <div className='users-table__col'>
                {props.name}
            </div>
            <div className='users-table__col'>
                {props.id}
            </div>
            <div className='users-table__col'>
                {props.phone}
            </div>         
            <div className='users-table__col'>
                {props.age}
            </div>                  
        </div>
    )
}


export default Users;