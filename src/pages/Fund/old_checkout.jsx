import React, {  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/events";
import * as user_actions from "../../store/actions/user";


import arrowright from "../../assets/images/arrow-right.png";
import img6 from "../../assets/images/img6.png";


import { useParams } from "react-router-dom";


const Home = ({ history }) => {
  const dispatch = useDispatch();
  let { id } = useParams();
let CartsDAta = 0;
  const { prodocts } = useSelector((state) => state.product);
  const { event_id, loading,data } = useSelector((state) => state.event);
  const { user } = useSelector((state) => state.user);


console.log('cart',data);
const newDate = new Date();
newDate.setDate(newDate.getDate() + 14);

if(data.length>0){
	data.map((e,i)=>{
		CartsDAta =  CartsDAta+ (e['quantity']*e['product_id']['Price'])
	})
}
console.log("daaa",CartsDAta);

  const getCart = () => {
    dispatch(actions.getCartRequest({
      history
    }));
  };

  const getProfile = () => {
    dispatch(user_actions.getProfileData({
      history
    }));
  };

 

  useEffect(() => {
    getCart();

  }, []);

  useEffect(() => {
    getProfile();

  }, []);

  

  return (
    <>
     <div className="checkout">
	<div className="container">
		<div className="d-flex"><a href="/" className="btn back"><i className="fa fa-arrow-left" aria-hidden="true"></i> Back to home</a></div>
		<br/>

	
				
				
	<div className="row" style={{"overflow":"hidden"}}>
		<div className="col-md-7">
		<div className="progresscontainer">
				<h3 className="font-36">Checkout</h3>
				<ul className="list list-inline mt-4 mb-5">
					<li className="list-inline-item bar-circle active">
						<div className="d-flex align-items-center">
							<span className="rounded-circle d-flex align-items-center justify-content-center">01</span>
							<span className="ml-2 font-14 mr-2">Information</span>
							<img src={arrowright} alt="arrow"/>
						</div>
					</li>
					
					<li className="list-inline-item bar-circle">
						<div className="d-flex align-items-center">
							<span className="rounded-circle d-flex align-items-center justify-content-center">02</span>
							<span className="ml-2 font-14 mr-2">Payment</span>
							<img src={arrowright} alt="arrow"/>
						</div>
					</li>
					
					
					<li className="list-inline-item bar-circle">
						<div className="d-flex align-items-center">
							<span className="rounded-circle d-flex align-items-center justify-content-center">03</span>
							<span className="ml-2 font-14 mr-2">Checkout</span>
						</div>
					</li>
										
				</ul>
						<div className="form-container">
							<form className="form2">
								<div className="form-page p-0">      
									<h4 className="font-24 mb-3">Contact Information</h4>
									<div className="form-group">
									<input type="email" className="input form-control" defaultValue={user!=null?user[0].email:""} placeholder="E-mail *"/>
									</div>
									
								<div className="form-group">
									<input type="text" className="input form-control" defaultValue={user!=null?user[0].mobile:""} placeholder="Phone Number *"/>
									</div>	
									
									<br/>

									
								<h4 className="font-24 mb-3">Shipping Information</h4>
								
								<div className="row">
									<div className="col-sm-6 pr-1">
									<div className="form-group">
									<input type="text" className="input form-control" defaultValue={user!=null?user[0].firstName:""} placeholder="First Name*"/>
									</div>
									</div>
									
									<div className="col-sm-6 pl-1">
									<div className="form-group">
									<input type="text" className="input form-control"  defaultValue={user!=null?user[0].lastName:""} placeholder="Last Name*"/>
									</div>
									</div>
								</div>	
								
								
									<div className="form-group">
									<input type="text" className="input form-control" placeholder="Street Address*"/>
									</div>		
									
																	
									<div className="form-group">
									<input type="text" className="input form-control" placeholder="Apartment / Unit / Suite"/>
									</div>		
									
									
									<div className="row">
									<div className="col-sm-6 pr-1">
									<div className="form-group mb-0">
									<input type="text" className="input form-control" placeholder="ZipCode"/>
									</div>
									</div>
									
									{/* <div className="col-sm-6 pl-1 d-flex align-items-center">
										<div className="list-inline-item checkbox2">
										<input id="checkbox-1" className="checkbox-custom" name="checkbox-group" type="checkbox"/>
										<label htmlFor="checkbox-1" className="checkbox-custom-label">This is a gift</label>
									    </div>
									</div> */}
								</div>
								
								<br/>


						<div className="d-flex">
							<button className="btn btn_step back btn-lg ml-auto" data-nav="next">Checkout <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
						</div>
																	
								</div>
								
							
								<div className="form-page p-0"> 
									<div>
										<h4 className="font-24 mb-4">Payment Method</h4>   
									
									<a href="#" className="d-flex align-items-center res-full payment_method">
									<img src="../assets/images/picon1.png" className="mr-3" width="25"/>
									Debit / Credit Card</a>
									<a href="#" className="d-flex align-items-center res-full payment_method">
									<img src="../assets/images/picon2.png" className="mr-3"/>
									Net Banking</a>
									
									<a href="#" className="d-flex align-items-center res-full payment_method">
									<img src="../assets/images/picon2.png" className="mr-3"/>
									Other Payment Method</a>
									
									
									<br/>

									<div className="d-flex">
										<div className="list-inline-item checkbox2 m-auto">
										<input id="checkbox-2" className="checkbox-custom" name="checkbox-group" type="checkbox"/>
										<label htmlFor="checkbox-2" className="checkbox-custom-label">Save payment method for next time</label>
									    </div>
									</div>
									
									
									<br/>


						<div className="d-flex">
							<button className="btn back btn-lg">Checkout <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
						</div>

									</div>									 
								</div>
								
		
							</form>
						</div>
					
					</div>
		</div>
		
		<div className="col-md-5">
			<h4 className="font-24">Order Summary</h4>
			<p className="font-16" style={{"color":"#999999"}}>50% each will be benifit from this fundraiser</p>
			<img src={img6} className="w-100"/>
			
			<div className="d-flex align-items-center mt-2">
				<h4 className="font-22">Demo Store <p className="font-14" style={{"color":"#999999"}}>{new Date().getDate()+"/"+(parseInt(new Date().getMonth())+1)+"/"+new Date().getFullYear()}</p></h4>
				<h4 className="font-22 ml-auto">${CartsDAta}.00</h4>
			</div>
			
			<div className="d-flex align-items-center">
				<p className="font-16 mb-2">Subtotal</p>
				<p className="font-16 ml-auto mb-2">${CartsDAta}.00</p>
			</div>
			
			<div className="d-flex align-items-center">
				<p className="font-16 mb-2">Tax</p>
				<p className="font-16 ml-auto mb-2">${parseFloat((CartsDAta*18)/100)}</p>
			</div>
			
			{/* <div className="d-flex align-items-center">
				<p className="font-16 mb-2">Shipping</p>
				<p className="font-16 ml-auto mb-2">$10.00</p>
			</div> */}
			
			<div className="d-flex align-items-center">
				<p className="font-16 mb-2 font-w-500">Estimated delivery on { newDate.getDate()+"/"+(parseInt(newDate.getMonth())+1)+"/"+newDate.getFullYear()} </p>
			</div>
			
			<div className="d-flex align-items-center">
				<p className="font-16 mb-2">Total </p>
				<p className="font-16 ml-auto mb-2">${CartsDAta+parseFloat((CartsDAta*18)/100)}.00</p>
			</div>
			
			<br/>
	{/* <div className="list-inline-item checkbox2 m-auto">
										<input id="checkbox-3" className="checkbox-custom" name="checkbox-group" type="checkbox"/>
										<label htmlFor="checkbox-3" className="checkbox-custom-label font-14 font-w-500">Don’t display name publicly  in the supporter section</label>
									    </div> */}
			
			
		</div>
	</div>
				
		
		
	</div>
</div>
    </>
  );
};

export default Home;
