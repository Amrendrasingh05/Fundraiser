import React, { useState } from "react"

import Header from '../Common/header.component'
import Footer from '../Common/footer.component'

import home_banner_shape from '../../assets/images/home_banner_shape.svg'
import logo2 from '../../assets/images/logo2.png'

const Home = ({ history }) => {
   
    const [isopen,setIsopen] = useState(false);
    const toggleNumber = ()=>{
        setIsopen(true)
    }

    const closeNumber = ()=>{
        setIsopen(false)
    }
   

  return (
    <>
    <Header/>



    <section className="home_banner mover virtual_fundraising_banner mover career we-are-here">
	<div className="container">
		<img src={home_banner_shape} alt="" className="right_shape"/>
		<div className="left_blur_shape"></div>		
		
		<br></br>
<br></br>

	<div className="form_wrap position-relative">
		<span className="rounded-circle rounded-circle-blur circle1"></span>
		<span className="rounded-circle rounded-circle-blur circle2"></span>
		<div className="form_box position-relative">
			
			<h2 className="hd font-24 font-w-600">We're here for you!</h2>
			
			<img src={logo2} alt=""/>
			
			<br></br>
<br></br><br></br>


			<form className="form2 position-relative">
			
				<div className="form-group">
					<h4 className="title d-block font-18 font-w-600 mb-1">Email Address*</h4>
					<p className="font-14">If this is regarding an order, please provide the email used at the time of purchase</p>
					<input type="text" className="input form-control"/>
				</div>
				
				<div className="form-group">
					<h4 className="title d-block font-18 font-w-600 mb-1">Phone</h4>
					<p className="font-14">If you are an Organizer or Seller, please provide the number used to create your account</p>
					<div className="position-relative">
					<input type="text" className="input form-control"/>
					<div className={isopen==false?"dropdown ph_drop":"dropdown ph_drop show"}>
						<a href={null} className="cursor dropdown-toggle" data-toggle="dropdown" onClick={toggleNumber}>+91</a>
						<div className={isopen==false?"dropdown-menu ":"dropdown-menu show"} style={isopen==false?{}:{"position":"absolute","transform": "translate3d(0px, -247px, 0px)", "top": "0px", "left":"0px", "willChange":"transform"}}>
							<a href={null} className="cursor dropdown-item" onClick={closeNumber}>+21</a>
							<a href={null} className="cursor dropdown-item"onClick={closeNumber}>+22</a>
							<a href={null} className="cursor dropdown-item" onClick={closeNumber}>+23</a>
							<a  href={null} className="cursor dropdown-item" onClick={closeNumber}>+24</a>
							<a href={null} className="cursor dropdown-item" onClick={closeNumber}>+24</a>
							<a href={null} className="cursor dropdown-item" onClick={closeNumber}>+24</a>
							<a href={null} className="cursor dropdown-item" onClick={closeNumber}>+24</a>
						</div>
					</div>
					</div>
				</div>
				
				
				<div className="form-group">
					<h4 className="title d-block font-18 font-w-600 mb-1">Order Number</h4>
					<p className="font-14">If this is related to an order, please provide the order number</p>
					<input type="text" className="input form-control"/>
				</div>
				
				
				<div className="form-group">
					<h4 className="title d-block font-18 font-w-600 mb-1">How can we help?*</h4>
					<p className="font-14">Please select the type of support you need</p>
					<select className="select2"  data-minimum-results-for-search="Infinity">
						<option>Select Option</option>
						<option>Select Option1</option>
						<option>Select Option2</option>
					</select>
				</div>		
				
				
				
				<div className="form-group">
					<h4 className="title d-block font-18 font-w-600 mb-1">Subject*</h4>
					<p className="font-14">Please provide a brief description of your issue</p>
					<input type="text" className="input form-control"/>
				</div>			
				
				
				
				<div className="form-group">
					<h4 className="title d-block font-18 font-w-600 mb-1">Description*</h4>
					<p className="font-14">Please provide a detailed description of your issue, including order numbers, Event Codes, or EIN/Legal Entity Name when possible.</p>
					<textarea className="input form-control"></textarea>
				</div>	
				
	
				<br></br>
				
				<button className="btn btn-org btn-lg" style={{"width":"170px"}}>Submit</button>											
				
				
			</form>
			
		</div>
		
	</div>
		
  </div>  
</section>
    <Footer/>
    </>
  )
}

export default Home
