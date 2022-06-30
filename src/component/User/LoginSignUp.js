import React, { useRef, useState } from "react";
import "./LoginSignUp.css";
import FaceIcon from "@mui/icons-material/Face";
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
	// user object usestate
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	});
	const { name, email, password } = user;
	const [avatar, setAvatar] = useState(""); //avatar set
	const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

	//siwytch tabs
	const switchTabs = (e, tab) => {
		//For login
		if (tab === "login") {
			switcherTab.current.classList.add("shiftToNeutral");
			switcherTab.current.classList.remove("shiftToRight");

			registerTab.current.classList.remove("shiftToNeutralForm");
			loginTab.current.classList.remove("shiftToLeft");
		}
		//For register
		if (tab === "register") {
			switcherTab.current.classList.add("shiftToRight");
			switcherTab.current.classList.remove("shiftToNeutral");

			registerTab.current.classList.add("shiftToNeutralForm");
			loginTab.current.classList.add("shiftToLeft");
		}
	};
	// Login submit
	const loginSubmit = () => {
		console.log("login Form Sumbitted ");
	};
	// regeister submit handler below
	const registerSubmit = (e) => {
		e.preventDefault();
		const myForm = new FormData();
		myForm.set("name", name);
		myForm.set("email", email);
		myForm.set("password", password);
		myForm.set("avatar", avatar);
		console.log("sign up form submitted ");
	};

	// registerDataChange

	const registerDataChange = (e) => {
		if (e.target.name === "avatar") {
			const reader = new FileReader();
			reader.onload = () => {
				if (reader.readyState === 2) {
					//done state
					setAvatarPreview(reader.result);
					setAvatar(reader.result);
				}
			};
			reader.readAsDataURL(e.target.files[0]);
		} else {
			setUser({ ...user, [e.target.name]: e.target.value });
		}
	};

	//login sumbit
	return (
		<>
			<div className="LoginSignUpContainer">
				<div className="LoginSignUpBox">
					<div>
						<div className="login_signUp_toggle">
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
					{/* 
					<form
						className="signUpForm"
						ref={registerTab}
						encType="multipart/form-data"
						onSubmit={registerSubmit}
					>
						<div className="signUpName">
							<FaceIcon />
							<input
								type="text"
								placeholder="Enter Name"
								required
								value={name}
								onchange={registerDataChange}
							/>
						</div>
						<div className="signUpEmail">
							<MdEmail />
							<input
								type="email"
								placeholder="Enter Email"
								required
								value={email}
								onChange={registerDataChange}
							/>
						</div>
						<div className="registerPassword">
							<AiFillUnlock />
							<input
								ttype="password"
								placeholder="Enter Password"
								required
								value={password}
								onChange={registerDataChange}
							/>
						</div>
						<div id="registerImage">
							<img src={avatarPreview} alt="Avatar Preview" />
							<input
								type="file"
								name="avatar"
								accept="image/*"
								onChange={registerDataChange}
							/>
						</div>
						<input
							type="submit"
							value="Register"
							className="signUpBtn"
							// disabled={loading ? true : false}
						/>
					</form> */}
					<form
						className="signUpForm"
						ref={registerTab}
						encType="multipart/form-data"
						onSubmit={registerSubmit}
					>
						<div className="signUpName">
							<FaceIcon />
							<input
								type="text"
								placeholder="Name"
								required
								name="name"
								value={name}
								onChange={registerDataChange}
							/>
						</div>
						<div className="signUpEmail">
							<MdEmail />
							<input
								type="email"
								placeholder="Email"
								required
								name="email"
								value={email}
								onChange={registerDataChange}
							/>
						</div>
						<div className="signUpPassword">
							<AiFillUnlock />
							<input
								type="password"
								placeholder="Password"
								required
								name="password"
								value={password}
								onChange={registerDataChange}
							/>
						</div>

						<div id="registerImage">
							<img src={avatarPreview} alt="Avatar Preview" />
							<input
								type="file"
								name="avatar"
								accept="image/*"
								onChange={registerDataChange}
							/>
						</div>
						<input type="submit" value="Register" className="signUpBtn" />
					</form>
				</div>
			</div>
		</>
	);
};

export default LoginSignUp;
