import React from "react";
import './LoginBox.css'
import Input from './Input';
import Button from "./Button";
import Dropdown from "./Dropdown";
function LoginBox() {
    return (
        <div className="box1">
            <h1>log in</h1>
            <div className="box">
                <Input label={'Full Name'} type={"text"} />
                <Input label={'Email'} type={"email"} />
                <Input label={'Mobile'} type={'number'} />
                <Dropdown />
                <Button />
            </div>
        </div>
    )
}
export default LoginBox