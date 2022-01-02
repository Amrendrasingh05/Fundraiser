import React from "react"

import Header from '../Common/header.component'
import Footer from '../Common/footer.component'
import home_banner_shape from '../../assets/images/home_banner_shape.svg'


const Home = ({ history }) => {

  return (
    <>
    <Header/>

    <section class="home_banner mover virtual_fundraising_banner mover career">
	<div class="container">
		<img src={home_banner_shape} class="right_shape" alt="" />
		<div class="left_blur_shape"></div>		
		
		<br></br>

	<div class="form_wrap position-relative">
		<span class="rounded-circle rounded-circle-blur circle1"></span>
		<span class="rounded-circle rounded-circle-blur circle2"></span>
		
		<div class="inner_banner wow fadeInUp">
			<h1 class="hd text-center font-w-500">Privacy Notice for <br></br>
California Residents</h1>
		</div>
		
		<br class="res-hide"></br>
<br class="res-hide"></br>
<br></br>
<br></br>

<div class=" editor" style={{"position":"relative", "zIndex":"100"}}>
         
         	<p>This Privacy Policy governs the manner in which Visas Avenue Pvt Ltd collects, uses, maintains and discloses information collected from users (each, 
a “User”) of the www.visasavenue.com website (“Site”). This privacy policy applies to the Site and all products and services offered by Visas Avenue Pvt Ltd.</p>

<h5>Personal identification information</h5>
<p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the 
site, place an order, subscribe to the newsletter, fill out a form, and in connection with other activities, services, features or resources we make available on 
our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, credit card information. Users may, however, visit 
our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can 
always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.</p>

<h5>Non-personal identification information</h5>

<p>We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may 
include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system 
and the Internet service providers utilized and other similar information.</p>

<h5>Web browser cookies</h5>

<p>Our Site may use “cookies” to enhance User experience. User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes 
to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note 
that some parts of the Site may not function properly.</p>


<h5>How we use collected information</h5>

<p>Visas Avenue Pvt Ltd may collect and use Users personal information for the following purposes:</p>

<ul>
<li>
	<h4>To improve customer service</h4>
	<p>Information you provide helps us respond to your customer service requests and support needs more efficiently.</p>
</li>

<li>
	<h4>To personalize user experience</h4>
	<p>We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</p>
</li>

<li>
	<h4>To improve our Site</h4>
	<p>We may use feedback you provide to improve our products and services.</p>
</li>


<li>
	<h4>To process payments</h4>
	<p>We may use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this 
information with outside parties except to the extent necessary to provide the service.</p>
</li>

<li>
	<h4>To send periodic emails</h4>
	<p>We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, 
questions, and/or other requests. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, 
related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, they may do so by 
contacting us via our Site.</p>
</li>


</ul>



<h5>How we protect your information</h5>

<p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure 
or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>

<h5>Sharing your personal information</h5>

<p>We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to 
any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined 
above.</p>

<h5>Changes to this privacy policy</h5>

<p>Visas Avenue Pvt Ltd has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page 
and send you an email. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the 
personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of 
modifications.</p>
<p>

Your acceptance of these terms
By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site 
following the posting of changes to this policy will be deemed your acceptance of those changes.</p>


		 </div>
						
		
		
	</div>
		
  </div>  
</section>
    <Footer/>
    </>
  )
}

export default Home
