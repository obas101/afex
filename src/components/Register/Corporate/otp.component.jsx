import React from "react";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import steps3 from "../../../assets/Steps3.svg";
const OtpVerification = () => {
	return (
		<div className="h-screen bg-bgRegisterColor">
			<div className="h-screen flex flex-col justify-center items-center">
				<div className="">
					<Logo />{" "}
				</div>

				<div className="w-96 h-100 bg-white px-8 py-6 space-y-4">
					<div className="text-center py-2">
						<h1 className="font-bold text-xl">Account details</h1>
						<h2 className="font-bold text-xs">
							Sign up for an account and start trading today
						</h2>
					</div>

					{/* Company name */}
					<div>
						<p className="text-xs font-medium">
							Enter the 4-digit code that was sent to name@mymail.com
						</p>

						{/* code */}

						<div className="mt-3">
							<input
								type="text"
								class=" form-control block w-full px-4 py-3 text-sm text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								placeholder="Enter code"
							/>
						</div>
					</div>

					<div>
						<p className="text-xs text-">Resend Code</p>
						<p className="text-xs">Verify via Phone Call</p>
					</div>

					<div className="flex justify-between mt-50">
						<span className="text-black-600 font-bold text-sm">BACK</span>
						<span className="text-red-600 font-bold text-sm">NEXT STEP</span>
					</div>
				</div>

				<div className="text-center py-4">
					<p className="text-xs font-bold my-6">2/4</p>
					<img className="max-w-xs" src={steps3} alt="" />
				</div>
			</div>
		</div>
	);
};

export default OtpVerification;
