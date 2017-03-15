import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Registration from './components/registration/Registration';

const RouterComponent = () => (
		<Router sceneStyle={{ paddingTop: 65, flexGrow: 1 }} >
			<Scene key="auth">
				<Scene 
				key="registration" 
				component={Registration} 
				hideNavBar
				/>
			</Scene>
		</Router>
	);

export default RouterComponent;
