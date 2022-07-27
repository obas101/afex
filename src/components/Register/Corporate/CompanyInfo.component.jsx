import React from "react";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import CustomButton from "../../forms/CustomButton.component";

const CompanyInfo = () => {
	return (
		<div className="h-screen bg-bgRegisterColor">
			<div className="h-screen flex flex-col justify-center items-center">
				<div className="">
					<Logo />{" "}
				</div>

				<div className="w-96 h-100 bg-white px-8 py-6 space-y-4">
					<div className="text-center py-2">
						<h1 className="font-bold text-xl">Register new account</h1>
						<h2 className="font-bold text-xs">
							Sign up for an account and start trading today
						</h2>
					</div>
					<div className="flex flex-col">
						<p className="text-xs font-medium">
							Select select the category that best describes you
						</p>
						<div className="flex flex-row mt-2">
							<CustomButton
								className="px-8
      py-2
      text-black
    border
    border-black-400
    mr-2
      font-normal
      bg-white
      hover:bg-black
      hover:text-white
    
      "
							>
								Individual
							</CustomButton>
							<CustomButton
								className="px-8
      py-2
      text-black
    border
    border-black-400
    mr-2
      font-normal
      bg-white
      hover:bg-black
      hover:text-white
    
      "
							>
								Corporate
							</CustomButton>
						</div>
					</div>
					{/* Company name */}
					<div>
						<p className="text-xs font-medium">Company name</p>

						{/* email address */}

						<div className="mt-3">
							<input
								type="text"
								class=" form-control block w-full px-4 py-3 text-sm text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								placeholder="Enter your email"
							/>
						</div>
					</div>

					{/* type of business and date  */}
					<div className="flex flex-row">
						<div>
							<p className="text-xs font-medium">Type of Business</p>

							{/* email address */}

							<div className="mt-3 mr-6">
								<input
									type="text"
									class=" form-control block w-full px-4 py-3 text-sm text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									placeholder="Select Type of Business"
								/>
							</div>
						</div>

						{/* date of incorporation */}
						<div>
							<p className="text-xs font-medium">Date of Incorporation</p>

							{/* email address */}

							<div className="mt-3">
								<input
									type="text"
									class=" form-control block w-full px-4 py-3 text-sm text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
									placeholder="Select Date"
								/>
							</div>
						</div>
					</div>
					<div className="text-center py-3">
						<span className="text-red-600 font-bold text-sm">NEXT STEP</span>
					</div>
				</div>

				<div className="text-center py-4">
					<p className="text-xs font-bold">1/4</p>
				</div>
			</div>
		</div>
	);
};

export default CompanyInfo;
