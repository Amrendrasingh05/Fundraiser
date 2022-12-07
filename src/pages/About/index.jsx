import React from "react"

import Header from '../Common/header.component'
import Footer from '../Common/footer.component'
import about_slide1 from '../../assets/images/about_slide1.jpg'
import about_slide2 from '../../assets/images/about_slide2.jpg'
import about_slide3 from '../../assets/images/about_slide3.jpg'
import about_img1 from '../../assets/images/about_img1.jpg'
import about_img2 from '../../assets/images/about_img2.jpg'
import about_row4 from '../../assets/images/about_row4.jpg'
import about_row6 from '../../assets/images/about_row6.jpg'
import about_row3 from '../../assets/images/about_row3.jpg'
import about_row5 from '../../assets/images/about_row5.png'
import home_banner_shape from '../../assets/images/home_banner_shape.svg'
import Eight from '../../assets/images/product/8.jpg';

import Nine from '../../assets/images/product/6.jpg';

import Nine1 from '../../assets/images/product/6.jpg';
import Nine2 from '../../assets/images/product/7.jpg';
import Nine3 from '../../assets/images/product/8.jpg';
import Nine4 from '../../assets/images/product/9.jpg';




const About = ({ history }) => {

  return (
    <>
    <Header/>


	<section className="home_banner mover about_slider_wrap">
	<div className="container-fluid">
		<img src={home_banner_shape} className="right_shape" alt=""/>
		<div className="left_blur_shape"></div>
		
		<div className="owl-carousel owl-theme about_slider">
			<div className="item"><img src={about_slide1} alt="" className="w-100"/></div>
			<div className="item"><img src={about_slide2} alt="" className="w-100"/></div>
			<div className="item"><img src={about_slide3} alt="" className="w100"/></div>
		</div>
		
  </div>
</section>



<section className="about_row2">
	<div className="container-fluid">
		<div className="row align-items-center">
			<div className="col-md-5 pl-5 pr-5">
				<p className="font-14 text-justify">
				<h2 className="hd font-w-600 font-30">Who we<span className="line_border">are</span></h2>
				CHARITIZE aims to provide a vehicle through which non-profit and charitable community-based organizations and clubs can meet their fundraising goals through online campaigns that are optimized for usability, efficiency, competition among fundraisers, and seamless integration of data and metrics.  We specialize in online fundraising logistics, product distribution and technical support.
				</p>
			</div>
			
			
			<div className="col-md-7" style={{"overflow":"hidden"}}>
				<div className="owl-carousel owl-theme about_slider2">
					<div className="item">
						<img src={Nine1} alt="" className="w-100"/>
					</div>
					
					<div className="item">
						<img src={Nine2} alt="" className="w-100"/>
					</div>	
					
					<div className="item">
						<img src={Nine3} alt="" className="w-100"/>
					</div>
					
					<div className="item">
						<img src={Nine4} alt="" className="w-100"/>
					</div>										
				</div>
			</div>
			
			
		</div>
	</div>
</section>



<section className="about_testimonials">
	<div className="container">
		<div className="owl-carousel owl-theme">
			<div className="item">
				<i className="ti ti-quote-left"></i>
				<p className="font-14 mt-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
				<br></br>
<br></br>
			<strong>UI Soup</strong></p>
			</div>
			
			<div className="item">
				<i className="ti ti-quote-left"></i>
				<p className="font-14 mt-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
				<br></br>
<br></br>
			<strong>UI Soup</strong></p>
			</div>
			
			<div className="item">
				<i className="ti ti-quote-left"></i>
				<p className="font-14 mt-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
				<br></br>
<br></br>
			<strong>UI Soup</strong></p>
			</div>
			
			<div className="item">
				<i className="ti ti-quote-left"></i>
				<p className="font-14 mt-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
				<br></br>
<br></br>
			<strong>UI Soup</strong></p>
			</div>
		</div>
	</div>
</section>



<section className="pt-3 pb-3 res-padding0">
	<div className="container-fluid">
		<img src={about_row3} className="w-100 wow fadeInUp" alt="" />
	</div>
</section>


<section className="about_row3">
	<div className="container">
		<p className="font-16">
			It became clear the best way to help these kids was to help their coaches and organizers fundraise with no effort, so we created the Double Good Social Fundraising platform with the goal of changing their experience. Using the Double Good app, teams sell popcorn for just four days by sharing a link with friends and family, and keep 50% of the sales. Double Good then ships made-to-order popcorn directly to buyers, so there’s no paperwork or product to handle.

		</p>
	</div>
</section>




<section className="about_row4 pb-0 mover">
	<div className="container">
		<div className="row align-items-center">
			<div className="col-md-6 position-relative">
			<span className="rounded-circle circle2 ele" style={{"top":"-60px"}}></span>
				<div className="box p-5">
					<p className="font-16 mb-0 text-justify">
						In 2017, Double Good’s commitment to helping kids took on additional meaning with the launch of the Double Good Kids Foundation, which provides equipment, education, and experience for kids with special needs. The Foundation has sponsored the Exceptional Athlete Gala at the USASF Worlds Championships in Disney World; provided surfboards and life jackets for Surfers Healing, a surf camp for children with autism; and funded Elementary Science Olympiad For All, an adaptation of Science Olympiad games to include children with disabilities. <br></br>
<br></br>
The company’s success is measured by how much they give back, and so far Double Good has helped organizations raise over 90 million dollars.					</p>
				</div>
		  </div>
			
			
			<div className="col-md-6 wow fadeInRight">
				<div className="img ele">
					<img src={Nine} className="w-100 transition" alt="" />
					<a href={null}>Watch Today Show</a>				</div>
			</div>
			
		</div>
	</div>
</section>



<section className="about_row5 mover">
	<div className="container">
		<div className="row align-items-center">
			<div className="col-md-6 wow fadeInLeft res-hide">
				<img src={Eight }className="ele res-full" alt="" width={500} />
			</div>
			
			<div className="col-md-6">
				<h2 className="hd"><strong>Black Girls Cheer <br></br> The <span className="line_border">Movie</span></strong></h2>
				<br></br>

				<p className="font-16">We filmed a documentary that explores the creation of an organization that’s purpose is to help young black girls see themselves represented in the cheerleading community and empower them to be themselves.
</p>

<br></br>

<a href={null} className="btn btn-dark btn-lg">Explore More</a>

			</div>
			
		</div>
	</div>
</section>	



<section className="wow fadeInUp about_row6">
	<div className="container-fluid">
		<h2 className="hd font-32 text-center text-uppercase"><strong>Discover opportunities at CIGAR FOR CHARITY</strong></h2>
		<br></br>
<br></br>
		<img src={about_row6}  alt="" style={{"boxShadow":"0px 10px 100px rgba(0, 0, 0, 0.24)",
"borderRadius": "10px"}} className="w-100" />

<br></br>
<br></br>
<br></br>


<div className="d-flex">
	<a href='/career' className="btn btn-dark btn-lg m-auto">CAREERS</a>
</div>
	</div>
</section>

    <Footer/>
    </>
  )
}

export default About
