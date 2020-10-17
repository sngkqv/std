import React from 'react';
import SingleUser from './SingleUserRow';

export default function UsersTable(props) {
    return <div className="container">
                                                                                     
    
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Gender</th>
            <th>DateOfBirth</th>
            <th>Email</th>
            <th>Bio</th>
            <th>Qualifications</th>
            <th>Block/Spam User</th>
            <th>Delete User</th>

          </tr>
        </thead>
        <tbody>
            {props.users.map((item, index)=>{
               return <SingleUser user = {item} key={index}/>
            })}
        </tbody>
      </table>
    </div>
  </div>;
}