import React from 'react';
import RoomListContainer from './roomListContainer.jsx';
import ChatroomContainer from './chatroomContainer.jsx';
import { Link, hashHistory } from 'react-router';

// ===============================================
// CSS Stylying
const noteStyle = {
  fontSize: 12,
  color: '#ff8370'
}
// ===============================================

const Dashboard = (props) => {

  if (props.user.username === undefined) {
    hashHistory.push('/signup');
  };

  return (
    <div className="container">
      <div className="row">

        {/* ----- RoomList ----- */}
        <div className="col-md-6">
          <div style={noteStyle}>Note: Three rooms are available for demo.  Click on Join Room button open chatroom.</div>
          <RoomListContainer />
        </div>

        {/* ----- ChatRoom ----- */}
        <div className="col-md-6">
          <div style={noteStyle}>Note: Afert joining the room, either wait for other players to join or start the coding challenging. </div>
          {props.currentRoom.name ? <ChatroomContainer /> : <div></div>}
        </div>

      </div>
    </div>
  );


}
export default Dashboard;