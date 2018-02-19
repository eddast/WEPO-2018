import React from 'react';
import FontAwesome from 'react-fontawesome';

// Renders a cell in user list view
// Has an icon indicating user is online and user name
class ListItemUsers extends React.Component {

    constructor(props, ctx) {
        super(props,ctx);
        this.state = {
            seesOptions: false
        }
    }

    getListItem() {
        return (
            <div className='row userListItem'>
                <span className='col-md-7'>
                    <FontAwesome id='onlineIcon' name='user'/>
                    <p id='userName'>{this.props.name}</p>
                </span>
                <span className='col-md-5' id='privateMessageToolTip'>
                    <FontAwesome onClick={() => this.setState({seesOptions: !this.state.seesOptions})} id='privateMessageIcon' name='ellipsis-h'/>
                    <span className='toolTipText'>Options</span>
                </span>
            </div>
        );
    }

    getOptions() {
        return (
            <div id='userOptions'>
                <div className='row'>
                    <div className='col-md-offset-2 col-md-2'>
                        <FontAwesome onClick={() => this.props.sendPrivateMessage(this.props.name)} id="privateMessageIcon" name="envelope"/>
                    </div>
                    <div className='col-md-offset-2 col-md-2'>
                        <FontAwesome onClick={() => this.setState({seesOptions: !this.state.seesOptions})} id='banIcon' name='times-circle'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-offset-2 col-md-2'>
                        <p className='optionsDescription'>Private Convo</p>
                    </div>
                    <div className='col-md-offset-2 col-md-2'>   
                        <p className='optionsDescription'>Hide options</p>
                    </div>
                </div>
            </div>
        );
    }

    getOptionsForAdmin() {
        console.log(this.props.kickOutUser)
        return (
            <div id='userOptions'>
                <div className='row'>
                    <div className='col-md-offset-1 col-md-1'>
                        <FontAwesome onClick={() => this.props.sendPrivateMessage(this.props.name)} id="privateMessageIcon" name="envelope"/>
                    </div>
                    <div className='col-md-offset-1 col-md-1'>
                        <FontAwesome onClick={() => alert('HAH ban!')} id='banIcon' name='ban'/>
                    </div>
                    <div className='col-md-offset-1 col-md-1'>
                        <FontAwesome onClick={() => this.props.kickOutUser(this.props.name, this.props.chatroom.name)} id='banIcon' name='sign-out'/>
                    </div>
                    <div className='col-md-offset-1 col-md-1'>
                        <FontAwesome onClick={() => this.setState({seesOptions: !this.state.seesOptions})} id='banIcon' name='times-circle'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-offset-1 col-md-1'>
                        <p className='optionsDescription'>Private Convo</p>
                    </div>
                    <div className='col-md-offset-1 col-md-1'>
                        <p className='optionsDescription'>Ban</p>
                    </div>
                    <div className='col-md-offset-1 col-md-1'>
                        <p className='optionsDescription'>Kick</p>
                    </div>
                    <div className='col-md-offset-1 col-md-1'>   
                        <p className='optionsDescription'>Hide options</p>
                    </div>
                </div>
            </div>
        );
    }

    isAdminOfChatrrom() {
        var chatroomOps = this.props.chatroom.ops;
        console.log(this.props.chatroom);

        if(chatroomOps[this.props.currentUser] !== undefined) {
            console.log(chatroomOps);
            return true;
        }

        return false;
    }

    render() {
        if(this.state.seesOptions) {
            if(this.isAdminOfChatrrom() && this.props.name !== this.props.currentUser) {
                return (
                    <li>
                        {this.getListItem()}
                        {this.getOptionsForAdmin()}
                    </li>
                );
            } else {
                return (
                    <li>
                        {this.getListItem()}
                        {this.getOptions()}
                    </li>
                );
            }
        }
        return (
            <li>
                {this.getListItem()}
            </li>
        );
    }
};

export default ListItemUsers;