import MirinnesState from './context/MirinnesState';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Intro from './pages/intro/Intro';
import Home from './pages/home/Home';
function App() {
	// Context

	return (
		<MirinnesState>
			<Router>
				<Switch>
					<Route exact path='/' component={Intro} />
					<Route exact path='/home' component={Home} />
				</Switch>
			</Router>
		</MirinnesState>
	);
}

export default App;
