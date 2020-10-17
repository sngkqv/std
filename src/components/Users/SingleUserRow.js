import Axios from 'axios';
import React, { useEffect } from 'react';


export default function SingleUser(props) {

    useEffect(() => {
        timeStampToTime(parseInt(props.user.lastLoginTime))
      });

    const timeStampToTime = (ts) => {
        let unix_timestamp = ts
        var date = new Date(unix_timestamp * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        props.user.ts = formattedTime
    }

    const deleteUser = () =>{
        Axios.post("http://13.232.164.94:7001/studiendo/users/deleteUser/"+props.user.firebaseId, {})
        .then((res)=>{
            alert(res.data.data);
        }).catch((err)=>{
            console.error(err)
        })
    }

    const blockUser = () =>{
        Axios.post("http://13.232.164.94:7001/studiendo/users/blockUser/"+props.user.firebaseId, {})
        .then((res)=>{
            alert(res.data.data);
        }).catch((err)=>{
            console.error(err)
        })
    }

    return (<tr>
        <td>{props.user.firebaseId}</td>
        <td>{props.user.name}</td>
        <td>{props.user.mobileNo}</td>
        <td>{props.user.gender}</td>
        <td>{props.user.dateOfBirth}</td>
        <td>{props.user.email}</td>
        <td>{props.user.bio}</td>
        <td>{props.user.qualifications}</td>
        <td><button type="button" className="btn btn-warning" onClick={blockUser}>Block</button></td>
        <td><button type="button" className="btn btn-danger" onClick={deleteUser}>Delete</button></td>


    </tr>);
}