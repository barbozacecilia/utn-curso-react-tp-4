import React, {Component} from "react";
import './styles/RegistrationFormStyles.css';
import "./constants.js";
import {T} from "./constants";

class RegistrationForm extends Component {
    constructor() {
        super()
        this.state={
            language: T.ES
        }}
        handleClick =()=> {
            this.setState((prevState) => ({
                language: prevState.language === T.EN  ? T.ES: T.EN
            }))

        }


    render(){
        return (
            <>
                <div className="mainContainer">
                    <hr className="hrTop"/>
                    <div className="translateButtonContainer">
                        <button onClick={this.handleClick} className="translateButton">{this.state.language ===  T.ES ? T.ES.BUTTON : T.EN.BUTTON} </button>
                    </div>
                <div className="welcomeContainer">{this.state.language ===  T.ES ? T.ES.WELCOME : T.EN.WELCOME}</div>
                    <hr className="hrTop"/>
                    <h1 className="titleSignUp">
                        {this.state.language === T.ES ? T.ES.TITLE : T.EN.TITLE}
                    </h1>

                    <div className="formContainer">
                    <form >
                        <div className="inputContainer">
                            <label>
                                {this.state.language ===  T.ES ? T.ES.NAME : T.EN.NAME}
                            </label>
                            <input/>
                        </div>
                        <div className="inputContainer">
                            <label>
                                {this.state.language ===  T.ES ? T.ES.LAST_NAME : T.EN.LAST_NAME}

                            </label>
                            <input/>
                        </div>
                        <div className="inputContainer">
                            <label>
                                {this.state.language ===  T.ES ? T.ES.EMAIL : T.EN.EMAIL}
                            </label>
                            <input/>
                        </div>
                        <div className="inputContainer">
                            <label>
                                {this.state.language ===  T.ES ? T.ES.PHONE_NUMBER : T.EN.PHONE_NUMBER}
                            </label>
                            <input/>
                        </div>
                        <div className="inputContainer">
                            <label>
                                {this.state.language ===  T.ES ? T.ES.PASSWORD : T.EN.PASSWORD}
                            </label>
                        <input/>
                        </div>
                        <div className="inputContainer">
                            <label>
                                {this.state.language ===  T.ES ? T.ES.CONFIRM_PASSWORD : T.EN.CONFIRM_PASSWORD}
                            </label>
                            <input/>

                        </div>
                        <div className="buttonSignUpContainer">
                            <button className="buttonSignUp">{this.state.language === T.ES ? T.ES.BUTTON_SIGN_UP :T.EN.BUTTON_SIGN_UP}</button>
                        </div>
                    </form>
                </div>
                    <hr/>
                </div>
            </>
        )
    }
}

export default RegistrationForm;
