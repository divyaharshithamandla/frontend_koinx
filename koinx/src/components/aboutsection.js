import React from 'react';
import './aboutsection.css';

const AboutSection = () => {
  return (
    <div className="about-section">
        <h1>About Bitcoin</h1><br/>
      {/* What is Bitcoin Section */}
      <h3>What is Bitcoin?</h3>
      <p>
        Bitcoin is a decentralized digital currency that allows peer-to-peer transactions without the need for intermediaries, central banks, or administrators. It is based on blockchain technology and provides a secure, transparent, and tamper-proof system for transferring value across the globe.
      </p>
      
      {/* Lorem Ipsum Section */}
      <h3>Lorem Ipsum Dolor Sit Amet</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Phasellus pharetra euismod lacus. Proin non elit id lacus fermentum tristique vel ut ipsum. Curabitur venenatis urna non elit dictum, sed tincidunt orci fermentum. 
      </p>
      <p>
        Sed facilisis, justo eget cursus sagittis, velit elit congue purus, ac auctor risus neque ac justo. Integer eget sapien nec risus faucibus malesuada. Duis posuere lacus vel enim aliquam, id consequat nunc tincidunt. Nulla facilisi.
      </p>
      <p>
        Nam pharetra, felis sit amet venenatis ultricies, orci mi porttitor elit, in mollis libero lorem at libero. Suspendisse egestas purus vitae orci iaculis, quis viverra magna tempor. Ut at risus in nulla tempus cursus eu id mauris.
      </p>
      
      {/* Already Holding Bitcoin Section */}
      <h3>Already Holding Bitcoin?</h3>
      <div className="templates-container">
        {/* Template 1 */}
        <div className="template">
          <div className="template-image">
            {/* <img src="profit-calculator.jpeg" alt="Profit Calculator" /> */}
          </div>
          <div className="template-content">
            <h4>Calculate Your Profits</h4>
            <p>Analyze your Bitcoin investments and calculate the profits you have made so far.</p>
            <a className="template-button" >Click Now →</a>
          </div>
        </div>

        {/* Template 2 */}
        <div className="template">
          <div className="template-image">
            {/* <img src="tax-liability.jpeg" alt="Tax Liability Calculator" /> */}
          </div>
          <div className="template-content">
            <h4>Calculate Your Tax Liability</h4>
            <p>Determine the tax you owe on your Bitcoin holdings with ease.</p>
            <a className="template-button" >Click Now →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
