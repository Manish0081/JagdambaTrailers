import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function About(){
	return(<>
		<div className="container abc">
			<h1>This is About......</h1>
			<img className="w-10" src="../img/s8.jpg"/>
			
			<p>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit am
			</p>
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
	</>);
}
export default About;