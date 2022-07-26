import "./App.css";
import Homepage from "./pages/homepage/homepage";
import NavBar from "./components/NavBar.component";
import { Route, Routes } from "react-router-dom";

const Register = () => {
	<div>SOmehtoih register</div>;
};

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
				<Route path="register" element={<Register />}></Route>
			</Routes>
			<Homepage />
		</div>
	);
}

export default App;
