import React from "react"
import { Link } from "react-router-dom"

import Header from '../Common/header.component'



const Home = ({ history }) => {


  return (
    <>
    <Header/>

    <section className="home_banner mover virtual_fundraising_banner mover career">
	<div className="container">
		<img src="../assets/images/home_banner_shape.svg" className="right_shape" alt="" />
		<div className="left_blur_shape"></div>		
		
		<br></br>

	<div className="form_wrap position-relative">
		<span className="rounded-circle rounded-circle-blur circle1"></span>
		<span className="rounded-circle rounded-circle-blur circle2"></span>
		
		<div className="inner_banner wow fadeInUp">
			<h1 className="hd text-center font-w-500">Career <br></br>
				Opportunities</h1>
		</div>
		
		
		
		
		<br className="res-hide"></br>

<br className="res-hide"></br>
<br></br>
<br></br>

		<h2 style={{"position":"relative", "zIndex":"100"}} className="font-32">Current Job Openings</h2><br></br>
		
		
		<h3> Maintenance</h3>
		<div className="job mb-3">			
			<a href="#" className="link">Current Job Openings Maintenance Maintenance Technician - 1st Shift (5 a.m. - 1:30 p.m.)</a><br></br>
			<p className="font-16 font-w-500"> Burr Ridge, IL</p>	
		</div>
		
		<div className="job mb-3">			
			<a href="#" className="link">Current Job Openings Maintenance Maintenance Technician - 1st Shift (5 a.m. - 1:30 p.m.)</a><br></br>
			<p className="font-16 font-w-500"> Burr Ridge, IL</p>	
		</div>
		
		
		<div className="job mb-3">			
			<a href="#" className="link">Current Job Openings Maintenance Maintenance Technician - 1st Shift (5 a.m. - 1:30 p.m.)</a><br></br>
			<p className="font-16 font-w-500"> Burr Ridge, IL</p>	
		</div>
						
						<br></br>

		
		<h3> Promotion</h3>
		<div className="job mb-3">			
			<a href="#" className="link">Current Job Openings Maintenance Maintenance Technician - 1st Shift (5 a.m. - 1:30 p.m.)</a><br></br>
			<p className="font-16 font-w-500"> Burr Ridge, IL</p>	
		</div>
		
		<div className="job mb-3">			
			<a href="#" className="link">Current Job Openings Maintenance Maintenance Technician - 1st Shift (5 a.m. - 1:30 p.m.)</a><br></br>
			<p className="font-16 font-w-500"> Burr Ridge, IL</p>	
		</div>
		
		
		<div className="job mb-3">			
			<a href="#" className="link">Current Job Openings Maintenance Maintenance Technician - 1st Shift (5 a.m. - 1:30 p.m.)</a><br></br>
			<p className="font-16 font-w-500"> Burr Ridge, IL</p>	
		</div>
						
						<br></br>

		<h3> Promotion Tech</h3>
		<div className="job mb-3">			
			<a href="#" className="link">Current Job Openings Maintenance Maintenance Technician - 1st Shift (5 a.m. - 1:30 p.m.)</a><br></br>
			<p className="font-16 font-w-500"> Burr Ridge, IL</p>	
		</div>
		
		<div className="job mb-3">			
			<a href="#" className="link">Current Job Openings Maintenance Maintenance Technician - 1st Shift (5 a.m. - 1:30 p.m.)</a><br></br>
			<p className="font-16 font-w-500"> Burr Ridge, IL</p>	
		</div>
		
		
		<div className="job mb-3">			
			<a href="#" className="link">Current Job Openings Maintenance Maintenance Technician - 1st Shift (5 a.m. - 1:30 p.m.)</a><br></br>
			<p className="font-16 font-w-500"> Burr Ridge, IL</p>	
		</div>
						
						
		
		
	</div>
		
  </div>  
</section>
    </>
  )
}

export default Home
