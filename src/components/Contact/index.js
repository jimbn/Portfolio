import React from "react";
import axios from 'axios';

import './style.css';
import { render } from "@testing-library/react";


function Contact () {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
      }
    
      handleSubmit(e){
        e.preventDefault();
        axios({
          method: "POST",
          url:"http://localhost:3002/send",
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success') {
            alert("Message Sent.");
            this.resetForm()
          } else if (response.data.status === 'fail') {
            alert("Message failed to send.")
          }
        })
      };
      resetForm(){
        this.setState({name: '', email: '', message: ''})
      };
    
render(){
    return (
     <>
     <div className="contact">
         <h1>Contact</h1>
     </div>
     <div className='formstyle'>
            <form>
                <div >
                    <label htmlFor="name" className="">Name:</label>
                    <input type="text" name="name" />
                </div>
                <div >
                    <label htmlFor="email">Email address:</label>
                    <input type="text"name="email" />
                </div>
                <div >
                    <label htmlFor="message" className="form-label">Message: </label>
                    <input type="textbox" name="message" />
                </div>
                <div >
                    <button type="submit">Send Message</button>
                </div>
            </form>
        </div>
     </>
    );
}
onNameChange(event) {
    this.setState({name: event.target.value})
}

onEmailChange(event) {
    this.setState({email: event.target.value})
}

onMessageChange(event) {
    this.setState({message: event.target.value})
}
};

export default Contact;