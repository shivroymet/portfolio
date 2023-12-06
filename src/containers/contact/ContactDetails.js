import "./ContactDetails.css"
import { Map } from "../../components/utils/Map"

export function ContactDetails() {
    return <div className="contact-container">
        <hr></hr>
        
            <div className="contact-details-container">
                <div className="contact-dt-em">
                <div className="contact-title">Address:</div>
                    <div>Brookline, MA 02445</div>
                    <div className="contact-title">Phone:</div>
                    <div>+1 (602) 582 7647</div>

                </div>
                <div className="contact-dt-em">
                <div className="contact-title">Hours:</div>
                    <div>9 AM - 6 PM<br/>(Mon - Fri)</div>

                </div>
             
                <div className="contact-dt-em-sm">
                        <a href="https://www.linkedin.com/in/royshivani/" className="mr-3 mb-3 linkedIn"> </a>
                        <a href="https://www.facebook.com/shivani.roy01" className="mr-3 mb-3 facebook"> </a>
                        <a href="https://www.linkedin.com/in/royshivani" className="mr-3 mb-3 instagram"> </a>
                        <a href="mailto:shivani.roy1@gmail.com" className="mr-3 mb-3 gmail"> </a>
                        <a href="https://github.com/shivroymet" className="mr-3 mb-3 git"> </a> 
                </div>
            </div>
            {/* ocation={{lat:42.3448547, lng:71.1161198}} */}
            <div>
                <Map lat={42.3448547} lng={-71.1161198}></Map>
            </div>
        </div>
}