import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Home(){
	return(
		<>
		<div className="main ">
		
			<div className="carousel-wrapper">
					<Carousel infiniteLoop useKeyboardArrows autoPlay>
						<div>
							<img src="../img/S1.jpg" />
							
						</div>
						<div>
							<img src="../img/S2.jpg" />
							
						</div>
						<div>
							<img src="../img/S3.jpg" />
							
						</div>
						
					</Carousel>
			</div>
			
			
			<div className="Border ">
				<h1 className="Center">WELCOME TO JAGDAMBA TRAILERS</h1>
				<p className="Center">Jagdamba Trailers is a leading Manufacturers of Tip Trailers, Tippers, Flat 	Bed Trailers, Sidewall Trailers, Semi Low Bed Trailers and various Semi-Trailers. Our Trailers 	and Tippers are manufactured strictly as per CMVR and loaded with several value-added features 		which add into the ease of operation and result in maximum profit.
				</p>
			
				<p className="Center">
					Brand Jagdamba has already become very popular in Trailer and Tipper Industry in a very short span of time due to its Heavy Duty performance and prompt after sales services.
				</p>
				
				<p className="Center">
					We have installed a state of the art Plant and Machinery capable to manufacture all kinds of application Trailers and Tippers with a capacity of 200 Trailers/month. Our Trailers and Tippers are giving outstanding performance at various places in different applications. Our expertise in R&D and innovation make us stand apart from other Trailer and Tipper manufacturers.
				</p>
				<h3 className="Center">
					We are an ISO 9001, 14001 & 45001 Certified Company. Our all Trailer models are iCAT approved.
				</h3>
					
			</div> {/*}End---welcome{*/}
			
			<img className="w-10" src="../img/S1.jpg"/>
			
			<div className="container">
				<h1 className="Center">OUR SPECIALTY & SERVICES</h1>
				
				<div className="Border">
					<h1 className="Center">WELCOME TO JAGDAMBA TRAILERS</h1>
					<p className="Center">
						Jagdamba Trailers is a leading Manufacturers of Tip Trailers, Tippers, Flat Bed Trailers, Sidewall Trailers, Semi Low Bed Trailers and various Semi-Trailers. Our Trailers and Tippers are manufactured strictly as per CMVR and loaded with several value-added features which add into the ease of operation and result in maximum profit.
					</p>
			
					<p className="Center">
						Brand Jagdamba has already become very popular in Trailer and Tipper Industry in a very short span of time due to its Heavy Duty performance and prompt after sales services.
					</p>
					
					<p className="Center">
						We have installed a state of the art Plant and Machinery capable to manufacture all kinds of application Trailers and Tippers with a capacity of 200 Trailers/month. Our Trailers and Tippers are giving outstanding performance at various places in different applications. Our expertise in R&D and innovation make us stand apart from other Trailer and Tipper manufacturers.
					</p>
					<h3 className="Center">
						We are an ISO 9001, 14001 & 45001 Certified Company. Our all Trailer models are iCAT approved.
					</h3>
				
				</div>
			</div>
			
			<div className="bg-img">
				<div>
					<div className="col-md-6">
						<div className="col-w ">
							<p className="fs-25 pd-l">IDEA AND INNOVATION</p>
							<p className="fs-40 Center">World class Infrastructure<br/>
								with modern machineries
							</p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="Center">
							<button className="button">CORPORATE BROCHURE</button>
						</div>
					</div>
				</div>
			
			</div>
			
			
			<div className="Center container">
				
				<h1 classNAme="Center">OUR DISCERNING CUSTOMERS</h1>
				
				
				<div className="d-flex p-5">
					<div className="flex">
						<img className="w-95" src="../img/b1.png" />
					</div>
					<div className="flex">
						<img className="w-95" src="../img/b2.png" />
					</div>
					<div className="flex">
						<img className="w-95" src="../img/b3.png" />
					</div>
					<div className="flex">
						<img className="w-95" src="../img/b4.png" />
					</div>
				</div>
				<div className="d-flex">
					<div className="flex">
						<img className="w-95" src="../img/b5.png" />
					</div>
					<div className="flex">
						<img className="w-95" src="../img/b6.png" />
					</div>
					<div className="flex">
						<img className="w-95" src="../img/b7.png" />
					</div>
					<div className="flex">
						<img className="w-95" src="../img/b8.png" />
					</div>
				</div>
				<div className="d-flex">
					<div className="flex">
						<img className="w-25 p-5" src="../img/b9.png" />
						<img className="w-25 p-5" src="../img/b10.png" />
					</div>
					
				</div>
			</div>
			
			<div className="bg-colb Center">
				<img className="w-25 m-15 p-15" src="../img/a1.png" />
				
				<p className="p-20">
					Jagdamba Trailers is a leading Manufacturers of Tip Trailers, Tippers, Flat Bed Trailers, Sidewall Trailers, Semi Low Bed Trailers and various Semi-Trailers.<br/> Our Trailers and Tippers are manufactured strictly as per CMVR and loaded with several value-added features which add into <br/>the ease of operation and result in maximum profit.
				</p>
					<div className="Center p-20">
						<a href="#"> <FaFacebookF/> Facebook</a>&nbsp; &nbsp;
						<a href="#"> <FaTwitter/> Twitter</a>&nbsp; &nbsp;
						<a href="#"><FaLinkedinIn/> Linkedin</a>
					</div>
					
					<hr/>
					
					<p className="p-14">© 2018 All rights Reserved. Design by <a href="#">Code fusion Infotech</a></p>
					
					
					
			</div>
		</div>
		
		</>
		
	);
}

export default Home;