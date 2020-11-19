import React from 'react';
import './login.scss';

export default function Login() {
	return (
		<section className="Section">
			<h2 className="PageTitle">Login Form</h2>
            <label class="Label">username</label><br></br><br></br>
			<input class="Input" type="text" id="username"></input><br></br><br></br>
            <label class="Label">password</label><br></br><br></br>
            <input class="Input" type="text" id="password"></input><br></br><br></br>
            <a class="PasswordLink "href="#">Forgot your password</a><br></br><br></br>
            <button className="Button">log in</button>

		</section>
	);
}