import React from "react";
import CustomButton from "./forms/CustomButton.component";

const TradeLog = () => {
	return (
		<div className="flex flex-col w-full space-y-2">
			<div className="bg-white flex-row p-2">
				<h2 className="text-sm text-textSecColor font-bold">Trade Log</h2>
			</div>

			{/* Table display */}

			<div className="w-full bg-white px-10 py-4 h-80">
				<table class="table-fixed w-full border-separate border-spacing-y-4">
					<thead className="">
						<tr className="text-textSecColor ">
							<th className="text-left text-sm">Security</th>
							<th className="text-center text-sm">Board</th>
							<th className="text-right text-sm">Order Type</th>
							<th className="text-right text-sm">Matched Price</th>
							<th className="text-right text-sm">Quantity</th>
							<th className="text-right text-sm">Date</th>
							<th className="text-right text-sm">Time</th>
						</tr>
					</thead>
					<tbody className="">
						<tr className="hover:bg-bgRegisterColor   border-t border-gray-400 group ">
							<td className="text-left text-sm">SoyBeans(SSBS)</td>
							<td className="text-center text-sm">X-Traded</td>
							<td className="text-right text-sm">Buy</td>
							<td className="text-right text-sm">1792.3</td>
							<td className="text-right text-sm">1792</td>
							<td className="text-right text-sm">17 Oct 2020</td>
							<td className="text-right text-sm">07:38</td>
						</tr>
						<tr className="hover:bg-bgRegisterColor   border-t border-gray-400 group ">
							<td className="text-left text-sm">SoyBeans(SSBS)</td>
							<td className="text-center text-sm">X-Traded</td>
							<td className="text-right text-sm">Buy</td>
							<td className="text-right text-sm">1792.3</td>
							<td className="text-right text-sm">1792</td>
							<td className="text-right text-sm">17 Oct 2020</td>
							<td className="text-right text-sm">07:38</td>
						</tr>
						<tr className="hover:bg-bgRegisterColor   border-t border-gray-400 group ">
							<td className="text-left text-sm">SoyBeans(SSBS)</td>
							<td className="text-center text-sm">X-Traded</td>
							<td className="text-right text-sm">Buy</td>
							<td className="text-right text-sm">1792.3</td>
							<td className="text-right text-sm">1792</td>
							<td className="text-right text-sm">17 Oct 2020</td>
							<td className="text-right text-sm">07:38</td>
						</tr>
						<tr className="hover:bg-bgRegisterColor   border-t border-gray-400 group ">
							<td className="text-left text-sm">SoyBeans(SSBS)</td>
							<td className="text-center text-sm">X-Traded</td>
							<td className="text-right text-sm">Buy</td>
							<td className="text-right text-sm">1792.3</td>
							<td className="text-right text-sm">1792</td>
							<td className="text-right text-sm">17 Oct 2020</td>
							<td className="text-right text-sm">07:38</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TradeLog;
