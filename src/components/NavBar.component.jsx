import React from "react";
import CustomButton from "./forms/CustomButton.component";
import { ReactComponent as Logo } from "../assets/logo.svg";

const NavBar = () => {
	return (
		<nav class="relative mx-auto  px-12 shadow">
			<div className="flex items-center justify-between">
				<div className="pt-2 w-20">
					<Logo />{" "}
				</div>
				{/* <!--menu items--> */}
				<div className="md:flex space-x-6">
					<div class="form-check form-switch">
						<input
							class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
							type="checkbox"
							role="switch"
							id="flexSwitchCheckDefault"
						></input>
					</div>

					{/* Value display */}
					<div className="flex flex-row space-x-6 px-12 border-x-2">
						<div className="">
							<h2 className="text-xs text-textSecColor">CASH BALANCE</h2>
							<p className="text-sm font-bold">#8.0089084</p>
						</div>
						<div className="">
							<h2 className="text-xs text-textSecColor">CASH BALANCE</h2>
							<p className="text-sm font-bold">#8.0089084</p>
						</div>
						<div className="">
							<h2 className="text-xs text-textSecColor">CASH BALANCE</h2>
							<p className="text-sm font-bold">#8.0089084</p>
						</div>
					</div>

					<div className="flex flex-row items-center pl-6 justify-center ">
						{/* <!--Button--> */}
						{/* <CustomButton>Button</CustomButton>{" "} */}
						<CustomButton
							className="
      px-3
      py-1.5
      text-white
	  text-xs
      font-normal
      bg-black
      rounded
      hover:bg-black-400
    "
						>
							DEMO
						</CustomButton>
					</div>
				</div>

				{/* <!-- right items --> */}
			</div>
		</nav>
	);
};

export default NavBar;
