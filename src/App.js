import "./App.css";
import Homepage from "./pages/homepage/homepage";
import { Route, Routes } from "react-router-dom";
import CompanyInfo from "./components/Register/Corporate/CompanyInfo.component";
import LoginDetails from "./components/Register/Corporate/LoginDetails.component";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
				<Route path="register/corporate/1" element={<CompanyInfo />}></Route>
				<Route path="register/corporate/2" element={<LoginDetails />}></Route>
			</Routes>
		</div>
	);
}

export default App;
