// import React, { useRef, useState, useEffect } from "react";
// import "./LoginSignUp.css";
// import FaceIcon from "@mui/icons-material/Face";
// import Loader from "../layout/Loader/Loader";
// import { MdEmail } from "react-icons/md";
// import { AiFillUnlock } from "react-icons/ai";
// import AttachmentIcon from "@mui/icons-material/Attachment";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { clearErrors, login } from "../../actions/userAction";
// import { useAlert } from "react-alert";

// const LoginSignUp = ({ history }) => {
// 	const dispatch = useDispatch();
// 	const alert = useAlert();
// 	const { error, loading, isAuthenticated } = useSelector(
// 		(state) => state.user
// 	);

// 	const loginTab = useRef(null);
// 	const registerTab = useRef(null);
// 	const switcherTab = useRef(null);

// 	// usestates
// 	const [loginEmail, setLoginEmail] = useState("");
// 	const [loginPassword, setLoginPassword] = useState("");
// 	// user object usestate
// 	const [user, setUser] = useState({
// 		name: "",
// 		email: "",
// 		password: "",
// 	});
// 	const { name, email, password } = user;
// 	const [avatar, setAvatar] = useState(""); //avatar set
// 	const [avatarPreview, setAvatarPreview] = useState("/profile.png");
// 	// Login submit
// 	const loginSubmit = (e) => {
// 		e.preventDefault();
// 		dispatch(login(loginEmail, loginPassword));
// 		console.log("login Form Sumbitted ");
// 	};
// 	// regeister submit handler below
// 	const registerSubmit = (e) => {
// 		e.preventDefault();
// 		const myForm = new FormData();
// 		myForm.set("name", name);
// 		myForm.set("email", email);
// 		myForm.set("password", password);
// 		myForm.set("avatar", avatar);
// 		console.log("sign up form submitted ");
// 	};

// 	// registerDataChange

// 	const registerDataChange = (e) => {
// 		if (e.target.name === "avatar") {
// 			const reader = new FileReader();
// 			reader.onload = () => {
// 				if (reader.readyState === 2) {
// 					//done state
// 					setAvatarPreview(reader.result);
// 					setAvatar(reader.result);
// 				}
// 			};
// 			reader.readAsDataURL(e.target.files[0]);
// 		} else {
// 			setUser({ ...user, [e.target.name]: e.target.value });
// 		}
// 	};
// 	// useEffect
// 	useEffect(() => {
// 		if (error) {
// 			alert.error(error);
// 			dispatch(clearErrors());
// 		} //if errors

// 		if (isAuthenticated) {
// 			history.push("/account");
// 		}
// 	}, [dispatch, error, alert, history, isAuthenticated]);

// 	const switchTabs = (e, tab) => {
// 		//For login
// 		if (tab === "login") {
// 			switcherTab.current.classList.add("shiftToNeutral");
// 			switcherTab.current.classList.remove("shiftToRight");

// 			registerTab.current.classList.remove("shiftToNeutralForm");
// 			loginTab.current.classList.remove("shiftToLeft");
// 		}
// 		//For register
// 		if (tab === "register") {
// 			switcherTab.current.classList.add("shiftToRight");
// 			switcherTab.current.classList.remove("shiftToNeutral");

// 			registerTab.current.classList.add("shiftToNeutralForm");
// 			loginTab.current.classList.add("shiftToLeft");
// 		}
// 	};

// 	//login sumbit
// 	return (
// 		<>
// 			{loading ? (
// 				<Loader />
// 			) : (
// 				<>
// 					<div className="LoginSignUpContainer">
// 						<div className="LoginSignUpBox">
// 							<div>
// 								<div className="login_signUp_toggle">
// 									<p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
// 									<p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
// 								</div>
// 								<button ref={switcherTab}> </button>
// 							</div>
// 							<form className="loginForm" ref={loginTab} onClick={loginSubmit}>
// 								<div className="loginEmail">
// 									<MdEmail />
// 									<input
// 										type="email"
// 										placeholder="Enter Email"
// 										required
// 										value={loginEmail}
// 										onChange={(e) => setLoginEmail(e.target.value)}
// 									/>
// 								</div>
// 								<div className="loginPassword">
// 									<AiFillUnlock />
// 									<input
// 										ttype="password"
// 										placeholder="Enter Password"
// 										required
// 										value={loginPassword}
// 										onChange={(e) => setLoginPassword(e.target.value)}
// 									/>
// 								</div>
// 								{/* HiOutlineLightBulb */}
// 								<Link to="/password/forget"> ForgetPassword?</Link>
// 								<input type="submit" value="login" className="loginBtn" />
// 							</form>
// 							{/*
// 					<form
// 						className="signUpForm"
// 						ref={registerTab}
// 						encType="multipart/form-data"
// 						onSubmit={registerSubmit}
// 					>
// 						<div className="signUpName">
// 							<FaceIcon />
// 							<input
// 								type="text"
// 								placeholder="Enter Name"
// 								required
// 								value={name}
// 								onchange={registerDataChange}
// 							/>
// 						</div>
// 						<div className="signUpEmail">
// 							<MdEmail />
// 							<input
// 								type="email"
// 								placeholder="Enter Email"
// 								required
// 								value={email}
// 								onChange={registerDataChange}
// 							/>
// 						</div>
// 						<div className="registerPassword">
// 							<AiFillUnlock />
// 							<input
// 								ttype="password"
// 								placeholder="Enter Password"
// 								required
// 								value={password}
// 								onChange={registerDataChange}
// 							/>
// 						</div>
// 						<div id="registerImage">
// 							<img src={avatarPreview} alt="Avatar Preview" />
// 							<input
// 								type="file"
// 								name="avatar"
// 								accept="image/*"
// 								onChange={registerDataChange}
// 							/>
// 						</div>
// 						<input
// 							type="submit"
// 							value="Register"
// 							className="signUpBtn"
// 							// disabled={loading ? true : false}
// 						/>
// 					</form> */}
// 							<form
// 								className="signUpForm"
// 								ref={registerTab}
// 								encType="multipart/form-data"
// 								onSubmit={registerSubmit}
// 							>
// 								<div className="signUpName">
// 									<FaceIcon />
// 									<input
// 										type="text"
// 										placeholder="Name"
// 										required
// 										name="name"
// 										value={name}
// 										onChange={registerDataChange}
// 									/>
// 								</div>
// 								<div className="signUpEmail">
// 									<MdEmail />
// 									<input
// 										type="email"
// 										placeholder="Email"
// 										required
// 										name="email"
// 										value={email}
// 										onChange={registerDataChange}
// 									/>
// 								</div>
// 								<div className="signUpPassword">
// 									<AiFillUnlock />
// 									<input
// 										type="password"
// 										placeholder="Password"
// 										required
// 										name="password"
// 										value={password}
// 										onChange={registerDataChange}
// 									/>
// 								</div>

// 								<div id="registerImage">
// 									<img src={avatarPreview} alt="Avatar Preview" />
// 									<input
// 										type="file"
// 										name="avatar"
// 										accept="image/*"
// 										onChange={registerDataChange}
// 									/>
// 								</div>
// 								<input type="submit" value="Register" className="signUpBtn" />
// 							</form>
// 						</div>
// 					</div>
// 				</>
// 			)}
// 		</>
// 	);
// };

// export default LoginSignUp;
import React, { Fragment, useRef, useState, useEffect } from "react";
import "./LoginSignUp.css";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "../../actions/userAction";
import { useAlert } from "react-alert";

const LoginSignUp = ({ history, location }) => {
	const dispatch = useDispatch();
	const alert = useAlert();

	const { error, loading, isAuthenticated } = useSelector(
		(state) => state.user
	);

	const loginTab = useRef(null);
	const registerTab = useRef(null);
	const switcherTab = useRef(null);

	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	});

	const { name, email, password } = user;

	const [avatar, setAvatar] = useState("/Profile.png");
	const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

	const loginSubmit = (e) => {
		e.preventDefault();
		dispatch(login(loginEmail, loginPassword));
	};

	const registerSubmit = (e) => {
		e.preventDefault();

		const myForm = new FormData();

		myForm.set("name", name);
		myForm.set("email", email);
		myForm.set("password", password);
		myForm.set("avatar", avatar);
		dispatch(register(myForm));
	};

	const registerDataChange = (e) => {
		if (e.target.name === "avatar") {
			const reader = new FileReader();

			reader.onload = () => {
				if (reader.readyState === 2) {
					setAvatarPreview(reader.result);
					setAvatar(reader.result);
				}
			};

			reader.readAsDataURL(e.target.files[0]);
		} else {
			setUser({ ...user, [e.target.name]: e.target.value });
		}
	};

	const redirect = location.search ? location.search.split("=")[1] : "/account";

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}

		if (isAuthenticated) {
			history.push(redirect);
		}
	}, [dispatch, error, alert, history, isAuthenticated, redirect]);

	const switchTabs = (e, tab) => {
		if (tab === "login") {
			switcherTab.current.classList.add("shiftToNeutral");
			switcherTab.current.classList.remove("shiftToRight");

			registerTab.current.classList.remove("shiftToNeutralForm");
			loginTab.current.classList.remove("shiftToLeft");
		}
		if (tab === "register") {
			switcherTab.current.classList.add("shiftToRight");
			switcherTab.current.classList.remove("shiftToNeutral");

			registerTab.current.classList.add("shiftToNeutralForm");
			loginTab.current.classList.add("shiftToLeft");
		}
	};

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					<div className="LoginSignUpContainer">
						<div className="LoginSignUpBox">
							<div>
								<div className="login_signUp_toggle">
									<p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
									<p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
								</div>
								<button ref={switcherTab}></button>
							</div>
							<form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
								<div className="loginEmail">
									<MailOutlineIcon />
									<input
										type="email"
										placeholder="Email"
										required
										value={loginEmail}
										onChange={(e) => setLoginEmail(e.target.value)}
									/>
								</div>
								<div className="loginPassword">
									<LockOpenIcon />
									<input
										type="password"
										placeholder="Password"
										required
										value={loginPassword}
										onChange={(e) => setLoginPassword(e.target.value)}
									/>
								</div>
								<Link to="/password/forgot">Forget Password ?</Link>
								<input type="submit" value="Login" className="loginBtn" />
							</form>
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
									<MailOutlineIcon />
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
									<LockOpenIcon />
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
			)}
		</>
	);
};

export default LoginSignUp;
