import React from "react";

const CustomButton = ({ children, ...otherProps }) => {
	return (
		<div>
			<a
				{...otherProps}
				className="
      p-3
      px-6
      pt-3
      py-4
      text-white
      font-medium
      bg-red-500
      rounded
      hover:bg-red-400
    "
			>
				{children}
			</a>
		</div>
	);
};

export default CustomButton;
