import React, {useState} from 'react';

import {pics} from '../../constants';
import { AppWrap,MotionWrap } from '../../wrapper';
import {client} from '../../client';
import './Footer.scss';

const Footer = () =>{
    const [formData, setFormData] = useState({name:'', email:'', message:''});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [Loading, setLoading] = useState(false);

    const{name,email,message} = formData;

    const handleChangeInput = e => {
        const {name, value} =e.target;

        setFormData({...formData,[name]:value});
    }

    const handleSubmit =() => {
        setLoading(true);

        const contact = {
            _type:'contact',
            name:name,
            email:email,
            message:message,

        }

        client.create(contact)
        .then(() =>{
            setLoading(false);
            setIsFormSubmitted(true);
        }) 

    }


    return (
        <>
        <h2 className="head-text">Take a Coffee & Chat with me</h2>
        <div className="app__footer-cards">
            <div className="app__footer-card">
                <img src ={pics.email} alt ="email"/>
                <a href = "mailto:nileshjindal867@gmail.com" className="p-text">nileshjindal867@gmail.com</a>
            </div>
            <div className="app__footer-card">
                <img src ={pics.mobile} alt ="mobile"/>
                <a href = "tel:8708999382" className="p-text">8708999382</a>
            </div>
        </div>

        {!isFormSubmitted?
        <div className="app__footer-form app__flex">
            <div className="app__flex">
                <input type="text" className="p-text" placeholder="Your Name" name = "name" value ={name} onChange={handleChangeInput}/>
            </div>
            <div className="app__flex">
                <input className="p-email" type="email" placeholder="Your Email" name = "email" value ={email} onChange={handleChangeInput}/>
            </div>
            <div>
                <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name = "message"
                onChange={handleChangeInput}
        />
            </div>
            <button type ="button" className="p-text" onClick={handleSubmit}>{Loading? 'Sending':'Send Message'}</button>
        </div>
        :
        <div>
            <h3 className="head-text"> Thankyou for get in Touch!</h3>
        </div>}
        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, "app__footer"),
    "Contact",
    "app__whitebg"

);