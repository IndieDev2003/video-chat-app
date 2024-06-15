import React from "react";
import {useParams} from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

import './index.css'

const Room = ()=>{


    const {roomId} =useParams();

    const myMeeting =async(element)=>{
        const appID =2077116150;
        const serverSecret ='598125eccb87d41a9a49b5290b4a1572' ;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret,roomId,Date.now,"Cat");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container:element,
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall,
                
            }
        })
        

    }
    return(
        <div>
            <div ref={(myMeeting)}/>
        </div>
    );
}

export default Room;