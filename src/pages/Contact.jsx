import React from "react";
import Typewriter from "typewriter-effect";
import "../styles/Contact.css"

function Contact() {
  return (
    <div className="contact">
    
      <div className="my-text">
        <h1>
      <Typewriter
  
  onInit={(typewriter)=> {

  typewriter

  .typeString("Nice to See you in this page")
   
  .pauseFor(1000)
  .deleteAll()
  .typeString("Fell free to conatct me")
  .start();
  }}
  /></h1>
  <p>I am intertsted in a work opputiont or intershep</p>
      </div>
     
      <form> 

      
       <input type="text" name="name"  placeholder="Name" className="in-item" required/>
      <input type="email" name="email"  placeholder="Email" className="in-item" required/>
      <input type="text" name="subject"  placeholder="Subject" className="in-item" required/>
      <textarea placeholder="Message" name="message" className="in-item" required></textarea>
      <input type="submit" value="SEND" className="send-btn" />
 </form>


 
</div>
  );
}

export default Contact;
