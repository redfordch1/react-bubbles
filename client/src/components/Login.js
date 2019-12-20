import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
	const [ credentials, setCredentials ] = useState({ username: 'Lambda School', password: 'i<3Lambda4' });

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post('/login', credentials)
			.then((res) => {
				localStorage.setItem('token', res.data.payload);
				props.history.push('/protected');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	return (
		<div>
			<h1>Welcome to the Bubble App!</h1>
			<form onSubmit={handleSubmit}>
				<input onChange={handleChange} name='username' placeholder='Enter Username' />
				<input onChange={handleChange} name='password' placeholder='Enter Password' />
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};

export default Login;
