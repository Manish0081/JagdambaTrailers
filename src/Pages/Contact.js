import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function Contact(){
	return(
		<>
			<img className="w-10" src="../img/s9.jpg"/>
			
			<img className="w-10 m-10" src="../img/s11.png"/>
			
		
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
		</>
	);
}

export default Contact;