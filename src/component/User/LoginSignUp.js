import React, { useRef, useState } from "react";
import "./LoginSignUp.css";
import Loader from "../layout/Loader/Loader";
import { MdEmail } from "react-icons/md";
import { AiFillUnlock } from "react-icons/ai";
import { Link } from "react-router-dom";
const LoginSignUp = () => {
	const loginTab = useRef(null);
	const registerTab = useRef(null);
	const switcherTab = useRef(null);

	// usestates
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	//siwytch tabs
	const switchTabs = (e, tab) => {
		//for login
		if (tab === "login") {
			switcherTab.current.classList.add("shiftToNeutral");
			switcherTab.current.classList.remove("shiftToRight");
			registerTab.current.classList.remove("shiftToNeutralForm");
			loginTab.current.classList.remove("shiftToLeft");
		}
		// for register
		if (tab === "register") {
			switcherTab.current.classList.add("shiftToRight");
			switcherTab.current.classList.remove("shiftToNeutral");
			registerTab.current.classList.remove("shiftToNeutralForm");
			loginTab.current.classList.remove("shiftToLeft");
		}
	};

	// Login submit
	const loginSubmit = () => {
		console.log("Form Sumbitted ");
	};

	//login sumbit
	return (
		<>
			<div className="LoginSignUpContainer">
				<div className="LoginSignUpBox">
					<div>
						<div className="login_sign_up_toggle">
							<p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
							<p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
						</div>
						<button ref={switcherTab}>Switch </button>
					</div>
					<form className="loginForm" ref={loginTab} onClick={loginSubmit}>
						<div className="loginEmail">
							<MdEmail />
							<input
								type="email"
								placeholder="Enter Email"
								required
								value={loginEmail}
								onChange={(e) => setLoginEmail(e.target.value)}
							/>
						</div>
						<div className="loginPassword">
							<AiFillUnlock />
							<input
								ttype="password"
								placeholder="Enter Password"
								required
								value={loginPassword}
								onChange={(e) => setLoginPassword(e.target.value)}
							/>
						</div>
						{/* HiOutlineLightBulb */}
						<Link to="/password/forget"> ForgetPassword?</Link>
						<input type="submit" value="login" className="loginBtn" />
					</form>
				</div>
			</div>
		</>
	);
};

export default LoginSignUp;
