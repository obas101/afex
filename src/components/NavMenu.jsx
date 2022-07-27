import React from "react";
import CustomButton from "./forms/CustomButton.component";

const NavMenu = () => {
	const buttonlinks = [
		{
			name: "X-Traded",
			link: "/",
		},
		{
			name: "OTC",
			link: "/",
		},
		{
			name: "Fo",
			link: "/",
		},
		{
			name: "Derivatives",
			link: "/",
		},
	];

	const buttonlinks2 = [
		{
			name: "All",
			link: "/",
		},
		{
			name: "SMAZ",
			link: "/",
		},
		{
			name: "SBBS",
			link: "/",
		},
		{
			name: "SPRIL",
			link: "/",
		},
		{
			name: "FETC",
			link: "/",
		},
		{
			name: "SGNG",
			link: "/",
		},
		{
			name: "SSGM",
			link: "/",
		},
	];

	return (
		<div className="flex bg-white p-2 flex-col max-h-24 w-full space-y-2">
			<div className="flex flex-row space-x">
				<h3 className="text-xs font-bold flex pt-2 pr-2">Board</h3>
				{buttonlinks.map((button, index) => (
					<CustomButton
						key={index}
						className="px-4 active:bg-red-600
      py-2
      text-black
      font-bold
    border
    border-black-400
    mr-2
      text-xs
      bg-bgGrey
      hover:bg-red-600
      hover:text-white
      rounded-full
    
      "
					>
						{button.name}
					</CustomButton>
				))}
			</div>

			{/* second row */}
			<div className="flex flex-row space-x">
				<h3 className="text-xs font-bold flex pt-2 pr-2">Product</h3>
				{buttonlinks2.map((button, index) => (
					<CustomButton
						key={index}
						className="px-4 active:bg-red-600
      py-2
      text-black
      font-bold
    border
    border-black-400
    mr-2
      text-xs
      bg-bgGrey
      hover:bg-red-600
      hover:text-white
      rounded-full
    
      "
					>
						{button.name}
					</CustomButton>
				))}
			</div>
		</div>
	);
};

export default NavMenu;
