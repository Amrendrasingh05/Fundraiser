import React from "react"
import { Link } from "react-router-dom"

import Header from '../Common/header.component'
import Footer from '../Common/footer.component'

import home_banner_shape from '../../assets/images/home_banner_shape.svg'
import line from '../../assets/images/line.png'
import home_banner_image from '../../assets/images/home_banner_image.png'
import how_it_works_bg from '../../assets/images/how_it_works_bg.png'
import border_dashed from '../../assets/images/border_dashed.png'
import how_it_works1 from '../../assets/images/how_it_works1.png'
import how_it_works2 from '../../assets/images/how_it_works2.png'
import how_it_works3 from '../../assets/images/how_it_works3.png'
import how_it_works4 from '../../assets/images/how_it_works4.png'
import happy_family from '../../assets/images/happy_family.png'
import video1 from '../../assets/images/video1.png'
import video2 from '../../assets/images/video2.png'
import video3 from '../../assets/images/video3.png'
import home_row_5 from '../../assets/images/home_row_5.png'
import home_row_4 from '../../assets/images/home_row_4.jpg';
const Home = ({ history }) => {
	var sectionStyle = {
		backgroundImage: "url(" + { home_row_5 } + ") no-repeat top 20px right"
	  };

  return (
    <>
    <Header/>


    <section className="home_banner mover">
	<div className="container-fluid">
		<img src={home_banner_shape} className="right_shape" alt=""/>
		<div className="left_blur_shape"></div>
		
		<div className="row">
			<div className="col-md-8 position-relative" style={{marginLeft:'-30px'}}>
			<span className="rounded-circle circle1"></span>
			<span className="rounded-circle circle12"></span>
				<div className="box wow fadeIn">
					<span className="line"></span>
					<h1 className="hd"><strong className="line_border">Fundraise</strong> from anywhere.</h1>
					<p className="font-20 mt-3 mb-4">Fundraise with your team, sell ultra-premium cigars, and earn 50% profit. No fundraising minimums or fees.</p>					
					<Link to="/" className="btn btn-dark btn-lg">Get Started</Link>
					<img src={line} className="line2" alt=""/>
				</div>
			</div>
			
			<div className="col-md-4 wow fadeInRight res-hide">
				<img src={home_banner_image} className="ele "  alt="" style={{marginLeft:"-50px" ,marginTop:"-40px"}}/>
			</div>
		</div>
		
	</div>
</section>





<section className="how_it_works mt-5 wow fadeIn">
	<div className="container-fluid">
		<h2 className="hd text-center font-weight-bold" style={{position:"relative","zIndex":"100"}}>How It <span className="line_border">Works</span></h2>
		
		
<br class="res-hide"/> <br class="res-hide"/>
<img src={how_it_works_bg} className="shape" alt=""/>
<img src={border_dashed} className="ele res-hide" alt=""/>

<div className="d-flex">
		<ul className="how_do_we_do list list-inline mt-3 owl-carousel owl-theme ml-auto">
			<li className="list-inline-item">
				<div className="card shadow">
					<div className="icon">
						<span className="rounded-circle d-flex align-items-center justify-content-center" style={{background:"#FFDED4"}}>
							<img src={how_it_works1} alt=""/>
						</span>
					</div>
					
					<div className="info w-100 mt-3">
						<h4 className="hd font-20 mb-2 mt-0 text-uppercase">Start</h4>
						<p className="font-14 mb-0 mt-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
					</div>
				</div>
			</li>
			
			
			<li className="list-inline-item">
				<div className="card shadow">
					<div className="icon">
						<span className="rounded-circle d-flex align-items-center justify-content-center" style={{background:"#FFEED4"}}>
							<img src={how_it_works2} alt=""/>
						</span>
					</div>
					
					<div className="info w-100 mt-3">
						<h4 className="hd font-20 mb-2 mt-0 text-uppercase">SHARE</h4>
						<p className="font-14 mb-0 mt-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
					</div>
				</div>
			</li>
			
			<li className="list-inline-item">
				<div className="card shadow">
					<div className="icon">
						<span className="rounded-circle d-flex align-items-center justify-content-center" style={{background:"#D4F0FF"}}>
						<img src={how_it_works3} alt=""/>
						</span>
					</div>
					
					<div className="info w-100 mt-3">
						<h4 className="hd font-20 mb-2 mt-0 text-uppercase">SHOP</h4>
						<p className="font-14 mb-0 mt-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
					</div>
				</div>
			</li>
			
			<li className="list-inline-item">
				<div className="card shadow">
					<div className="icon">
						<span className="rounded-circle d-flex align-items-center justify-content-center" style={{background:"#FFD4D4"}}>
						<img src={how_it_works4} alt=""/>
						</span>
					</div>
					
					<div className="info w-100 mt-3">
						<h4 className="hd font-20 mb-2 mt-0 text-uppercase">success</h4>
						<p className="font-14 mb-0 mt-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
					</div>
				</div>
			</li>									

<li className="list-inline-item">
				<div className="card shadow">
					<div className="icon">
						<span className="rounded-circle d-flex align-items-center justify-content-center" style={{background:"#FFDED4"}}>
							<img src={how_it_works1} alt=""/>
						</span>
					</div>
					
					<div className="info w-100 mt-3">
						<h4 className="hd font-20 mb-2 mt-0 text-uppercase">Start</h4>
						<p className="font-14 mb-0 mt-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
					</div>
				</div>
			</li>
			
			
			<li className="list-inline-item">
				<div className="card shadow">
					<div className="icon">
						<span className="rounded-circle d-flex align-items-center justify-content-center" style={{background:"#FFEED4"}}>
							<img src={how_it_works2} alt=""/>
						</span>
					</div>
					
					<div className="info w-100 mt-3">
						<h4 className="hd font-20 mb-2 mt-0 text-uppercase">SHARE</h4>
						<p className="font-14 mb-0 mt-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
					</div>
				</div>
			</li>
			
			<li className="list-inline-item">
				<div className="card shadow">
					<div className="icon">
						<span className="rounded-circle d-flex align-items-center justify-content-center" style={{background:"#D4F0FF"}}>
						<img src={how_it_works3} alt=""/>
						</span>
					</div>
					
					<div className="info w-100 mt-3">
						<h4 className="hd font-20 mb-2 mt-0 text-uppercase">SHOP</h4>
						<p className="font-14 mb-0 mt-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
					</div>
				</div>
			</li>
			
			<li className="list-inline-item">
				<div className="card shadow">
					<div className="icon">
						<span className="rounded-circle d-flex align-items-center justify-content-center" style={{background:"#FFD4D4"}}>
						<img src={how_it_works4} alt=""/>
						</span>
					</div>
					
					<div className="info w-100 mt-3">
						<h4 className="hd font-20 mb-2 mt-0 text-uppercase">success</h4>
						<p className="font-14 mb-0 mt-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
					</div>
				</div>
			</li>	

		</ul>
		</div>
		
		<div className="clearfix"></div>
		<br></br>
<br></br>

		<div className="d-flex">
			<Link to="/" className="btn btn-org btn-lg m-auto" style={{position:"relative z-index:100"}}>Get Started</Link>
		</div>
		
		
	</div>
</section>




<br class="res-hide"/><br class="res-hide"/><br class="res-hide"/><br class="res-hide"/>


<section className="testimonial wow fadeIn">
	<div className="container-fluid">
		<h2 className="hd text-center"><strong>Our Testimonials</strong><br></br>
		 What Our Clients Are <span className="line_border">Saying</span></h2>
		 
		 
		 <br></br>
		<div className="slider_wrap position-relative mover res-full">
			<span className="rounded-circle circle1 ele"></span>
			<span className="rounded-circle circle2 ele"></span>
			<div className="owl-carousel owl-theme">
			<div className="card">
				<i className="ti ti-quote-left"></i>
				<p className="font-14 mt-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
			</div>
			
			<div className="card">
				<i className="ti ti-quote-left"></i>
				<p className="font-14 mt-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
			</div>
			
			<div className="card">
				<i className="ti ti-quote-left"></i>
				<p className="font-14 mt-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
			</div>
			
			<div className="card">
				<i className="ti ti-quote-left"></i>
				<p className="font-14 mt-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
			</div>
			
			
		</div>
		
		<img src={line} className="line2 ele" style={{bottom:"35px z-index:1000"}} alt=""/>
		
		</div>	
		 
	</div>
</section>





<section className="home_section4 mover">
	<div className="container-fluid pl-0 w-100">
		<h2 className="hd text-center font-weight-bold pr-5 pl-5">Every order is made-to-order</h2>
		
	<br></br>
<br></br><br></br>
<br></br>
<br></br>

	
		<div className="row">
			<div className="col-md-7 pr-0">
				<div className="left">
					<h2 className="hd hd-lg"><strong>Packed</strong> fresh, just for you.</h2>
					<p className="font-16 mt-4 mb-0">
						We don’t unpack the seal until an order is placed. Every single one of our 16 unique flavors are handcrafted in small batches and made to order so that you always receive the freshest packet with the perfect crunch. That’s because you deserve it. 
						<br></br>
<br></br>
	Made in Chicago.

					</p>
				</div>
			</div>
			
			
			<div className="col-md-5 pl-0">
				<div className="box wow fadeInRight">
					<img src={home_row_4} className="w-100 ele " alt=""/>
				</div>
			</div>
			
		</div>
		
	</div>
</section>



<section className="home_section5 mover" style={sectionStyle}>
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-5">
				<div className="box wow fadeInLeft">
					<img src={home_row_4} className="w-100 ele" alt=""/>
				</div>
			</div>
			
			<div className="col-md-7">
				<h2 className="hd hd-lg mt-4"><strong>50%</strong> of every <br></br>
dollar supports a cause.</h2>
				<p className="font-18 mt-4 mb-0 w-75">
						Whether you’re sending a gift, supporting a fundraiser, or just needed some self-indulgence time with a bag of your favorite flavor, We always gives back 50% of every dollar you spend. That’s how we Create Joy for others, together.
 </p>
			</div>
		</div>
	</div>
</section>



<section className="happy_family mover">
	<h2 className="hd text-center hd-lg" style={{fontSize:"48px", lineHeight:"70px"}} ><strong>Our Happy <span className="line_border">Family</span></strong><br></br>
 Join Us to Be a Part of Us </h2>
 <br></br>

 <div className="position-relative wow fadeInUp">
 	<img src={happy_family} className="w-100 ele" alt="" style={{position:"relative" ,zIndex:"100"}}/>
	<span className="rounded-circle circle1" style={{bottom:"-68px"}}></span>
	<span className="rounded-circle circle2" style={{right:"7%", top:"12px"}}></span>
 </div>
 
</section>


<section className="videos_section wow fadeIn">
	<div className="container-fluid">
		<h2 className="hd hd-lg text-center font-50 font-w-600">Watch the Videos</h2>
		<br></br>
<br></br>

		<div className="owl-carousel owl-theme videos_slider" style={{width:"75%", margin:"auto"}} alt="">
			<div className="box">
				<div className="img">
					<img src={video1} className="w-100 transition" alt="" />
					<span className="title">Mission</span>
				</div>
				
				<br></br>

					<a className="cursor d-flex align-items-center justify-content-center" data-fancybox="" href="https://www.youtube.com/watch?v=u38Qn-cYM7M&amplist=PLl-qccCaclBuLkirgDHVlUr5aCYA7mIYK">
						<span className="rounded-circle d-flex align-items-center justify-content-center mr-3 transition"><i className="ti ti-control-play"></i></span> 
							<span className="font-16 font-w-500">Play Now</span>
					</a>
				
			</div>
			
			<div className="box">
				<div className="img">
					<img src={video2} className="w-100 transition" alt=""/>
					<span className="title">History</span>
				</div>
				<br></br>

					<a className="cursor d-flex align-items-center justify-content-center" data-fancybox="" href="https://www.youtube.com/watch?v=u38Qn-cYM7M&amplist=PLl-qccCaclBuLkirgDHVlUr5aCYA7mIYK">
						<span className="rounded-circle d-flex align-items-center justify-content-center mr-3 transition"><i className="ti ti-control-play"></i></span> 
							<span className="font-16 font-w-500">Play Now</span>
					</a>
					
			</div>
			
			<div className="box">
				<div className="img">
					<img src={video3} className="w-100 transition" alt=""/>
					<span className="title">How It Made</span>
				</div>
				<br></br>

					<a className="cursor d-flex align-items-center justify-content-center" data-fancybox="" href="https://www.youtube.com/watch?v=u38Qn-cYM7M&amplist=PLl-qccCaclBuLkirgDHVlUr5aCYA7mIYK">
						<span className="rounded-circle d-flex align-items-center justify-content-center mr-3 transition"><i className="ti ti-control-play"></i></span> 
							<span className="font-16 font-w-500">Play Now</span>
					</a>
			</div>						
		</div>
	</div>
</section>

<br></br>



<section className="newsletter pb-0" style={{ background: "url({newsletter}) no-repeat top left"}}>
		<h2 className="hd text-center font-50"><strong>Get Our Newsletter</strong></h2>
		<p className="font-24 text-center">To join the worldwide community</p>
		
		<br></br>

		<div className="box">
				<div className="card w-50 m-auto form flex-row">
				<div className="form-group mb-0 not_icon no-radius border_" style={{width:"70%"}}> 
				<span className="placeholder" style={{color:"#31353B" ,fontWeight:"500"}}>Type your Email Address</span> 
				<input type="text" className="input form-control" style={{borderTop: "0px !important", borderRight: "0px !important" ,borderLeft:" 0px !important", borderImage: "initial !important" ,borderBottom: "1px solid rgba(0, 0, 0, 0.1)"}} name="email" placeholder="" required="" /> 
				</div>
				<button type="button" className="btn btn-org btn-lg ml-auto" style={{width:"30%"}}>Get Started</button>
			</div>
		</div>
		
</section>
    <Footer/>
    </>
  )
}

export default Home
