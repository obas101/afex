import React from "react";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import CustomButton from "../../forms/CustomButton.component";

const LoginDetails = () => {
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

					{/* Company name */}
					<div>
						<p className="text-xs font-medium">Company Email</p>

						{/* email address */}

						<div className="mt-3">
							<input
								type="text"
								class=" form-control block w-full px-4 py-3 text-sm text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								placeholder="Enter email"
							/>
						</div>
					</div>

					{/* password */}
					<div>
						<p className="text-xs font-medium">Password</p>

						{/* email address */}

						<div className="mt-3">
							<input
								type="text"
								class=" form-control block w-full px-4 py-3 text-sm text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								placeholder="Enter your password"
							/>
						</div>
					</div>

					{/* confirm password */}
					<div>
						<p className="text-xs font-medium">Confirm Password</p>

						{/* email address */}

						<div className="mt-3">
							<input
								type="text"
								class=" form-control block w-full px-4 py-3 text-sm text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								placeholder="Confirm your password"
							/>
						</div>
					</div>

					<div className="text-center py-3">
						<span className="text-red-600 font-bold text-sm">NEXT STEP</span>
					</div>
				</div>

				<div className="text-center py-4">
					<p className="text-xs font-bold">2/4</p>
				</div>
			</div>
		</div>
	);
};

export default LoginDetails;
