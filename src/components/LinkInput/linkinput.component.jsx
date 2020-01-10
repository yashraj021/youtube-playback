import React, {Component} from 'react';
import './linkinput.styles.scss';
import {connect} from 'react-redux';
import {validateYouTubeUrl} from './constants';
import {addToPlaylist} from '../../redux/playlistQueue/playlistQueue.actions';

class LinkInput extends Component {

    state = {
        inputField: ''
    }

    submitHandler = (event) => {
        if(event.key === 'Enter') {
            let url = validateYouTubeUrl(this.state.inputField);
            if(url) {
                this.props.addToQueue(url[2])
                this.setState({
                    inputField: ''
                })

                return true
            }
            else {
                alert("Not a valid link.")
            }
        }
        
    } 

    render() {
        const { inputField } =this.state

        return (
            <div className = 'LinkInputWrapper'>
                <div className = 'add-link-wrapper'>
                    <span className = "addingLink">
                        Add YouTube link:
                    </span>
                </div>
                <input
                    type = 'text'
                    value = {inputField}
                    className = "inputBar" 
                    onChange = {(event) => this.setState({inputField: event.target.value})}
                    onKeyDown = {(event) => this.submitHandler(event)}
                    placeholder = 'e.g https://youtu.be/s_3ATmupvCQ'
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addToQueue: (value) => dispatch(addToPlaylist(value))
})


export default connect(null,mapDispatchToProps)(LinkInput);