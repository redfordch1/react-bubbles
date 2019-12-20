import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Login from './components/Login';
import BubblePage from './components/BubblePage';
import './styles.scss';

const PrivateRouter = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => (localStorage.getItem('token') ? <Component {...props} /> : <Redirect to='/' />)}
		/>
	);
};

function App (){
	return (
		<Router>
			<div className='App'>
				<Switch>
					<PrivateRouter path='/protected' component={BubblePage} />
					<Route path='/' component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
