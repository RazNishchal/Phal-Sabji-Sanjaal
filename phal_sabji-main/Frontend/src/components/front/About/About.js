import './About.css'
const About = () => {
    return (
      <div className="container">
        <div className="aboutBox">
          <img src="./images/bodyImage.png" alt="" className="bodyImage" />
          <div className="text">
            <h3 className="title">About Us</h3>
            <center className="l1">
              We are an awesome team trying to make a change in the field of online fruits and vegetables business
            </center>
            <p></p>
            <center className="l2">
              We are PhalSabji Sanjaal. We deliver fresh vegetables and fruits. You can buy our products within a few
              minutes. Browse a product, add to cart, fill your address, and proceed with your order. We will deliver it
              within 2 hours. We aim to change the traditional way of shopping. You don't need to waste your time going to a local market, bargain with shopkeepers, and carry your bag. We aim to shorten the time
              between the farm and your table. We deliver local food, which is better, fresher, and tastier. Also, we
              aim to eliminate the middleman cost, which makes the vegetable prices higher. As a direct customer, you will get mediator-free pricing.
            </center>
          </div>
        </div>
  
        <div className="ourMissionBox">
          <h3 className="title">Our Mission</h3>
          <center className="body">
            To source a range of quality fruits from across Nepal and deliver them fresh to customers across all regions. We aspire to be the most trusted and preferred Nepalese fruit trading business, ensuring that our customers receive fresh fruits every day, every time, by enabling the fruits to reach from farms to different regions.
          </center>
        </div>
      </div>
    );
  };
  
  export default About;
  