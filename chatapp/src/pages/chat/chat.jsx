import React, { useContext, useState } from 'react'
import './chat.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import ChatBox from '../../components/ChatBox/ChatBox'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import { AppContext } from '../../context/AppContext'
const chat = () => {

  const {chatData,userData} = useContext(AppContext);
  const [loading,setLoading]= useState(true);

  return (
    <div className='chat'>
      {
        loading
      }
      <div className="chat-container">
        <LeftSidebar />
        <ChatBox/>
        <RightSidebar/>
      </div>
    </div>
  )
}

export default chat