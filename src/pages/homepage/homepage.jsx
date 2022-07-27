import React from "react";
import NavBar from "../../components/NavBar.component";

// component import
import BaseSideBar from "../../components/BaseSidebar";
import BaseSideLinks from "../../components/BaseSideLinks";
import BaseFeeds from "../../components/BaseLiveFeeds";
import NavMenu from "../../components/NavMenu";

const Homepage = () => {
	return (
		<div>
			<NavBar />
			<div className="pt-2 bg-bgRegisterColor">
				<div id="main-content" className="flex gap-2">
					<BaseSideBar />
					<BaseSideLinks />
					<NavMenu />
				</div>

				<div className="absolute bottom-0">
					<BaseFeeds />
				</div>
			</div>
		</div>
	);
};

export default Homepage;
