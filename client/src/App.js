import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

import './App.css';

function App() {
	return (
		<Routes>
			<Route element={<SignIn />} path="/signin" />
			<Route element={<SignUp />} path="/signup" />
		</Routes>
	);
}

export default App;
