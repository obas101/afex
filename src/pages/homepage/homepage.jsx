import React from "react";
import NavBar from "../../components/NavBar.component";

// component import
import BaseSideBar from "../../components/BaseSidebar";
import BaseSideLinks from "../../components/BaseSideLinks";
import BaseFeeds from "../../components/BaseLiveFeeds";
import NavMenu from "../../components/NavMenu";
import ProductTable from "../../components/ProductTable";
import TradeLog from "../../components/TradeLog";

const Homepage = () => {
	return (
		<div>
			<NavBar />
			<div className="pt-2 bg-bgRegisterColor">
				<div id="main-content" className="flex gap-2">
					<BaseSideBar />
					<BaseSideLinks />
					<div className="flex flex-col w-full gap-2">
						<NavMenu />
						<ProductTable />
						<TradeLog />
					</div>
				</div>

				<div className="fixed bottom-0">
					<BaseFeeds />
				</div>
			</div>
		</div>
	);
};

export default Homepage;
