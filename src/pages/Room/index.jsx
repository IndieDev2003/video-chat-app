import React from "react";
import {useParams} from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

import './index.css'

const Room = ()=>{

    const {roomId} =useParams();

    const myMeeting =async(elem)=>{
        const appID ='';
        
    }
    return(
        <h1>Room Page {roomId}</h1>
    );
}

export default Room;