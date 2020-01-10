import React from 'react';
import './songsName.styles.scss';
import {removeFromPlaylist, orderUp, orderDown} from '../../redux/playlistQueue/playlistQueue.actions';
import { connect } from 'react-redux';


var getYoutubeTitle = require('get-youtube-title');




class SongsName extends React.Component {

        state = {
            title: 'Loading Title'
        }
    

    removeSongHandler = () => {
        return this.props.removeSong(this.props.index)
    }

   
    
    render() {
        getYoutubeTitle(this.props.url, (err, title) => {
            this.setState({title})
          })
        return (
            <div className = 'playlist-song'>
                <div style = {{paddingRight: '5px'}}>
                    <span style = {{color: 'white', textAlign: "justify", fontSize: 14}}>
                        {this.state.title}
                    </span>
                </div>
                <div className = 'buttons-wrapper'>
                    <div className = "close-button" onClick = {() => this.props.orderUp(this.props.index)}>
                        <img style = {{height: '100%', width: '100%', color: 'white'}} src = {require('../../assets/up.png')} alt = "remove"/>
                    </div>
                    <div className = "close-button" onClick = {() => this.removeSongHandler()}>
                        <img style = {{height: '100%', width: '100%', color: 'white'}} src = {require('../../assets/close.png')} alt = "remove"/>
                    </div>
                    <div className = "close-button" onClick = {() => this.props.orderDown(this.props.index)} >
                        <img style = {{height: '100%', width: '100%', color: 'white'}} src = {require('../../assets/down.png')} alt = "remove"/>
                    </div>
                </div>
            </div>
        )
    }
}

const MapDispatchToProps = dispatch => ({
    removeSong: (value) => dispatch(removeFromPlaylist(value)),
    orderUp: (value) => dispatch(orderUp(value)),
    orderDown: (value) => dispatch(orderDown(value))
})

export default connect(null,MapDispatchToProps)(SongsName);