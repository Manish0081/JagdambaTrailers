import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function Gallary(){
	return(
		<>
			<h1 className="pd-l">This Is Gallary...</h1>
			
			<div className="Center container">
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
		</>
	);
}

export default Gallary;