import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    
<div className="footer">
	<div className="container-fluid">
		<ul className="list list-inline links">
			<li className="list-inline-item"><a href="/terms-and-conditions"className="border-effect transition">Terms & Conditions</a></li>
			<li className="list-inline-item"><a href="/privacy-policy"className="border-effect transition">Privacy Policy</a></li>
			<li className="list-inline-item"><a href="/contact-us"className="border-effect transition">Contact Us</a></li>
		</ul>
	</div>
	
	
<div className="copyright">
	<div className="container-fluid d-flex align-items-center">
		<p className="mb-0 font-16">© Company Name 2021. All rights reserved</p>
		<p className="mb-0 font-13 ml-auto">Do not sell my personal information</p>
	</div>
</div>
	
</div>

    </>
  );
};

export default Footer;
