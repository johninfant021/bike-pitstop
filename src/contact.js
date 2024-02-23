import contact_img from "./contact/contact.jpg";
import c1 from "./contact/c1.svg";
import c2 from "./contact/c2.svg";
import c3 from "./contact/c3.svg";
import c4 from "./contact/c4.svg";

import "./contact.css";
function Contact() {
  return (
    <body>
      <div className="head_contact">
        <div className="head_contact1">
          <h1 className="head1">contact us</h1>
          <p className="para1" style={{ fontWeight: "bold" }}>
            Support team ready to help{" "}
          </p>
          <p className="para2">
            We are a highly agile and nimble footed organization which believes
            in a collaborative approach to solve problems of the world. And that
            is why the culture of customer feedback and satisfaction ranks high
            on our agenda. We are happy to help you round the clock to the best
            of our ability.
          </p>
        </div>
        <div className="headcontact2">
          <img src={contact_img} alt="contact_image" className="cont_img" />
        </div>
      </div>
      <div className="content_contact_main">
        <div className="content_contact hove">
          <p className="contact1">Headquarter</p>
          <p className="contact2">Singapore</p>
          <p className="contact3">
            7 Temasek Boulevard #12-02A Suntec Tower One, 038987, Singapore
          </p>
        </div>
        <div className="content_contact hove">
          <p className="contact1">india office</p>
          <p className="contact2">india</p>
          <p className="contact3">D-188, Sector-10 NOIDA, Pin: 201301</p>
        </div>
        <div className="content_contact hove">
          <p className="contact1">uae office</p>
          <p className="contact2">UAE</p>
          <p className="contact3">
            Khalifa Industrial Zone (Kizad), Abu Dhabi, UAE
          </p>
        </div>
      </div>
      <div className="contact_side_main">
        <div className="side1">
          <img src={c1} alt="side content" className="side2" />
          <p className="contact1 color">Great Value</p>
          <p className="contact2 size">
            Most popular brands with widest range of selection at best prices.
          </p>
        </div>
        <div className="side1">
          <img src={c2} alt="side content" className="side2" />
          <p className="contact1 color">Nationwide Delivery</p>
          <p className="contact2 size">
            Over 20,000 pincodes serviceable across India.
          </p>
        </div>
        <div className="side1">
          <img src={c3} alt="side content" className="side2" />
          <p className="contact1 color">Secure Payment</p>
          <p className="contact2 size">
            Partnered with India's most popular and secure payment solutions.
          </p>
        </div>
        <div className="side1">
          <img src={c4} alt="side content" className="side2" />
          <p className="contact1 color">Buyer Protection</p>
          <p className="contact2 size">
            Committed to buyer interests to provide a smooth shopping
            experience.
          </p>
        </div>
      </div>
      <footer>
        <p>Developed by</p>
        <p>John Infant</p>
      </footer>
    </body>
  );
}
export default Contact;
