import React from "react";

const CustomButton = ({ children, ...otherProps }) => {
	return (
		<div>
			<a {...otherProps}>{children}</a>
		</div>
	);
};

export default CustomButton;
