import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer.js";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<div class="flex flex-col justify-center items-center md:overflow-hidden bg-bgprimary w-auto scroll-smooth">
			<Routes>
				<Route exact path="/" element={<Home />}></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
