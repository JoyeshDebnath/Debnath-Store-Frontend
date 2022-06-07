import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
const Footer = () => {
	return (
		<footer id="footer">
			<div className="leftFooter">
				<h4>Download My app</h4>
				<p>Download app for Ios and Android </p>
				<img src={playStore} alt="play store" />
				<img src={appStore} alt="app  store" />
			</div>

			<div className="midFooter">
				<h1>Gharwa Tailors</h1>
				<p> High Quality is the first priority</p>
				<p>CopyRights 2022 &copy; Joyesh</p>
			</div>
			<div className="rightFooter">
				<h3>Follow me </h3>
				<a href="#">Instagram</a>
				<a href="#">FaceBook</a>
				<a href="#">LinkedIN</a>
			</div>
		</footer>
	);
};

export default Footer;
