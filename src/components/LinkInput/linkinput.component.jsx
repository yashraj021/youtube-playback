import React, {Component} from 'react';
import './linkinput.styles.scss';

import {validateYouTubeUrl} from './constants';

class LinkInput extends Component {

    state = {
        inputField: ''
    }

    submitHandler = (event) => {
        if(event.key === 'Enter') {
            let isvalid = validateYouTubeUrl(this.state.inputField);
            console.log(isvalid)

            return true
        }
        else 
            return false
    } 

    

    render() {


        return (
            <div className = 'LinkInputWrapper'>
                <span className = "addingLink">
                    Add youtube link:
                </span>
                <input 
                    className = "inputBar" 
                    onChange = {(event) => this.setState({inputField: event.target.value})}
                    onKeyDown = {(event) => this.submitHandler(event)} 

                />
            </div>
        );
    }
}



export default LinkInput;