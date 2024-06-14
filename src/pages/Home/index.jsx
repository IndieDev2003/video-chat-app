import React, {useState, useCallback} from "react";
import { useNavigate } from "react-router";

const Homepage =()=>{

    const [value,setValue]= useState();

    const navigate =useNavigate()
    
    const handleJoinRoom =useCallback(()=>{
        navigate(`/room/${value}`);
    },[navigate,value])


    return(
      <div>
          <input value={value} onChange={(e)=>setValue(e.target.value)} type="text" placeholder='Enter Room Code' />
          <button onClick={handleJoinRoom}>Join Room</button>
      </div>
    );
}

export default Homepage;