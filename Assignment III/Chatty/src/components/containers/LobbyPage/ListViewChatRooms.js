import React from 'react';
import FontAwesome from 'react-fontawesome';

// Renders the list of chatrooms along with heading
// and an "add chatroom" button to add a new chatroom to list
class ListViewChatRooms extends React.Component {

    constructor(props, ctx) {
        super(props, ctx);
    }

    render() {
        return (
            <div className='chatroomsActiveList'>
                <div>
                    <span id='ListViewChatroomHeading'>CHATROOMS ACTIVE</span>
                    <span id='addRoomToolTip'>
                        <FontAwesome onClick={this.props.addchatroom} id='addRoomIcon' aria-hidden='false' name='plus'/>
                        <span className='toolTipText'>New chatroom</span>
                    </span>
                </div>
                <ul className='listViewChatroom'>{this.props.children}</ul>
            </div>
        );
    }
};

export default ListViewChatRooms;
