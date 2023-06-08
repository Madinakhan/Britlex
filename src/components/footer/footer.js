import React from 'react';
import "./footer.scss"
import logo from "./logo.png"

export default class Footer extends React.PureComponent{
    render(){
        return(
            <div className='footer'>
                <img src={logo} />
                <p>Terms and Conditions • Privacy Policy • Cookie Policy</p>
            </div>
        );
    }
}
