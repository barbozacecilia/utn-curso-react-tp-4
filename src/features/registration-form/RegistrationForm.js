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
                <div className="leftSide">{this.state.language ===  T.EN ? T.ES.BIENVENIDA : T.EN.WELCOME}</div>
                    <h1>{this.state.title}</h1>
                    <button onClick={this.handleClick}>{this.state.language ===  T.ES ? T.ES.BUTTON : T.EN.BUTTON} </button>
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
                                {this.state.language ===  T.ES ? T.ES.PHONE_NUMBER : T.EN.PHONE_NUMBER}
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
                    </form>
                </div>
                </div>
            </>
        )
    }
}

export default RegistrationForm;
