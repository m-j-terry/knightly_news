import NavBar from '../components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import routes from './routes';
// import Logo1 from '../components/Logo/Logo1'
// import Logo2 from '../components/Logo/Logo2'
const AppRouter = () => {
	return (
		<Router>
			<NavBar routes={routes} />	
			<Routes>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						element={<Component page={key} />}
					></Route>
				))}
			</Routes>
		</Router>
	);
};

export default AppRouter;
