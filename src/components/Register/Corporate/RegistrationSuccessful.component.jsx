import React from "react";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import woman from "../../../assets/Clipped.svg";
import step4 from "../../../assets/Steps4.svg";

const RegistrationSuccessful = () => {
	return (
		<div className="h-screen bg-bgRegisterColor">
			<div className="h-screen flex flex-col justify-center items-center">
				<div className="">
					<Logo />{" "}
				</div>

				<div className="w-96 h-100 bg-white px-8 py-6 space-y-4 flex flex-col items-center justify-center">
					<div className="w-44">
						<img src={woman} alt="" />
					</div>

					<div className="text-center py-2">
						<h1 className="font-bold text-xl">Registration Complete</h1>
						<h2 className=" mt-2 text-xs">
							Dear [fName]. Your registration is now complete. You may proceed
							to your dashboard and start trading commodities.{" "}
						</h2>
					</div>

					<div className="text-center mt-50">
						<span className="text-red-600 font-bold text-sm">
							GO TO DASHBOARD
						</span>
					</div>
				</div>

				<div className="text-center py-4">
					<p className="text-xs font-bold my-6">4/4</p>
					<img className="max-w-xs" src={step4} alt="" />
				</div>
			</div>
		</div>
	);
};

export default RegistrationSuccessful;
