import React  from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css'
import { DICT_CLASSNAME as dict, SERVICE_ID, TEMPLATE_ID, USER_ID} from '../../constants/Constant';


function  createMessage(message, className){
    var div = document.getElementById('form-result');
    var divMain = document.createElement('div');
    const class_name = className+"-msg"
    divMain.classList.add(class_name)
    var divIcon = document.createElement('i');
    divIcon.classList.add('fa');
    divIcon.classList.add(dict[class_name]);
    divMain.textContent=message;
    divMain.appendChild(divIcon);
    div.appendChild(divMain);
    setTimeout(() => {
        divMain.remove();
      }, 3000);

}

export function ContactForm(){
    const handleOnSubmit = (e) => {
        console.log(e.target)
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            createMessage('Message Sent Successfully','success')
                 
          }, (error) => {
            console.log(error.text);
            createMessage('Ooops, something went wrong','error')
          });
        e.target.reset()
      };
    return <div className="container mt-5">
    <h3>For any enquiries, get in touch:</h3>
    <form id="contactForm" onSubmit={handleOnSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="fw-bold">Name</label>
        <input type="text" className="form-control" id="name" name="name" required/>
      </div>
      <div className="form-group">
        <label htmlFor="email" className="fw-bold">Email</label>
        <input type="email" className="form-control" id="email" name="email" required/>
      </div>
      <div className="form-group">
        <label htmlFor="subject" className="fw-bold">Subject</label>
        <input type="text" className="form-control" id="subject" name="subject" required/>
      </div>
      <div className="form-group">
        <label htmlFor="message" className="fw-bold">Message</label>
        <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <div id="form-result">
    
    </div>
    
    
  </div>
}