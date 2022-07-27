import React from "react";

// component import
import BaseSideBar from "../../components/BaseSidebar";
import BaseSideLinks from "../../components/BaseSideLinks";
import BaseFeeds from "../../components/BaseLiveFeeds";

const Homepage = () => {
	return (
		<div className="pt-2">
			<div id="main-content" className="flex gap-2">
				<BaseSideBar />
				<BaseSideLinks />
			</div>

			<div className="absolute bottom-0">
				<BaseFeeds />
			</div>
		</div>
	);
};

export default Homepage;
