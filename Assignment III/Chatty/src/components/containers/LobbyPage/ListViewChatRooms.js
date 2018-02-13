import React from 'react';

const ListViewChatRooms = ({ children }) => {
    return (
        <div className="chatroomsActiveList">
            <p id="ListViewChatroomHeading">CHATROOMS ACTIVE</p>
            <ul className='listViewChatroom'>{children}</ul>
        </div>
    );
};

export default ListViewChatRooms;
