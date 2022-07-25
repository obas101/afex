import React from "react";
// import CustomButton from "./forms/CustomButton.component";
import { ReactComponent as Logo } from "../assets/logo.svg";

const NavBar = () => {
	return (
		<nav class="relative container mx-auto py-6">
			<div className="flex items-center justify-between">
				<div className="pt-2 w-20">
					<Logo />{" "}
				</div>
				{/* <!--menu items--> */}
				<div className="hidden md:flex space-x-6">
					<div class="form-check form-switch">
						<input
							class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
							type="checkbox"
							role="switch"
							id="flexSwitchCheckDefault"
						/>
						<label
							class="form-check-label inline-block text-gray-800"
							for="flexSwitchCheckDefault"
						>
							Default switch checkbox input
						</label>
					</div>

					<a class="hover:text-primaryColor font-medium">Demos</a>
					<a className="hover:text-primaryColor font-medium">About</a>
					<a className="hover:text-primaryColor font-medium">Blog</a>
					<a className="hover:text-primaryColor font-medium">Pages</a>
					<a className="hover:text-primaryColor font-medium">Contact</a>

					<div className="hidden md:block space-x-6">
						{/* <!--Login --> */}
						<a className="hover:text-primaryColor mt-3 font-medium">Login</a>
						{/* <!--Button--> */}
						{/* <CustomButton>Button</CustomButton>{" "} */}
						<button className="text-white-600 bg-black-600">DEMO</button>
					</div>
				</div>

				{/* <!-- right items --> */}
			</div>
		</nav>
	);
};

export default NavBar;
