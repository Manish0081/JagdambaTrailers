import { Outlet, Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


function Nav(){
	return(
	<>
		<div className="bg-color">
			<div className="col-md-6">
				<div className="Center">
					<a href="#"> <FaPhoneAlt/>  +91-8770424760</a> &nbsp; &nbsp;
					<a href="#"> <FaEnvelopeOpen/>  gyan@jagdambatrailers.com</a>
				</div>
			</div>
			<div className="col-md-6">
				<div className="Center">
					<a href="#"> <FaFacebookF/> Facebook</a>&nbsp; &nbsp;
					<a href="#"> <FaTwitter/>  Twitter</a>&nbsp; &nbsp;
					<a href="#"><FaLinkedinIn /> Linkedin</a>&nbsp; &nbsp;
					<a href="#"> <FaInstagramSquare/> Instagram</a>
				</div>
			</div>
			<div className="clearfix"></div>
		</div>
			
			
			<div className="container">
				<div className="col-md-3">
					<div className="Center">
						<img className="w-100 m-15" src="../img/a1.png" />
					</div>
					
				</div>
				<div className="col-md-9">
					<div className="nav Center">
						<ul>
							<li>
								<Link to="/Home">HOME</Link>
							</li>
							<li>
								<Link to="/About">ABOUT</Link>
							</li>
							<li>
								<Link to="#">PRODUCT</Link>
							</li>
							<li>
								<Link to="/Gallary">GALLERY</Link>
							</li>
							<li>
								<Link to="/Media">MEDIA</Link>
							</li>
							<li>
								<Link to="/Contact">CONTACT US</Link>
							</li>
							<li>
								<a id="En" href="#">ENQUERY NOW</a>
							</li>
						</ul>
					</div>
					<Outlet />
				</div>
				<div className="clearfix"></div>
			</div>	
	</>
	);
	
}
export default Nav;