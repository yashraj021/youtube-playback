import React, {Component} from 'react';
import {connect} from 'react-redux';
import './youtubeArea.styles.scss';

import {removeFromPlaylist} from '../../redux/playlistQueue/playlistQueue.actions'

import YouTube from 'react-youtube';
import SongsName from '../SongsName/songsName.component';

const opts = {
    height: '650px',
    width: '1300px',
    playerVars: { 
        autoplay: 1
    }
};


class YoutubeArea extends Component {

    state = {
        songToPlay: null,
        index: 0,
        
    }

    renderYoutube = (index = 0) => {
        if(this.props.songsQueue.length > 0) {
            return (
                <YouTube
                    videoId= {this.props.songsQueue[index]}
                    opts = {opts}
                    onEnd = {() => {this.props.removeSong(index); this.renderYoutube()}}
                />
            )
        }
        return (
            <div className = 'No-video' >
                <span style = {{color: 'white'}}>
                    Please add video to playlist.
                </span>
            </div>
        )
    }

    renderSongs = () => {
        return this.props.songsQueue.map( (value,index) => 
            <SongsName 
                key = {index} 
                index = {index}
                currentSongIndex = {this.state.index}
                cb = {() => this.renderYoutube()} 
                url = {value}
            />
        )
    }

    render() {
        return (
            <div className = 'youtube-area-wrapper'>
                {
                   this.renderYoutube() 
                }
                <div className = 'playlist-area'>
                    <span>
                        Playlist
                    </span>
                    <div className = 'playlist-songs-area'>
                    {
                        this.renderSongs()
                    }
                    </div>
                </div>
            </div>
        )
    }
}

const MapStateToProps = state =>({
    songsQueue: state.playlistQueue.queueList
});

const MapDispatchToProps = dispatch => ({
    removeSong: (value) => dispatch(removeFromPlaylist(value))
})

export default connect(MapStateToProps, MapDispatchToProps)(YoutubeArea);