import React, { Component } from "react";
import CompanyInfo from "./CompanyInfo.component";

export class UserForm extends Component {
	state = {
		step: 1,
		firstName: "",
		lastName: "",
		email: "",
		companyName: "",
		businessType,
	};

	//proceed to next step

	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1,
		});
	};

	// previous step
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1,
		});
	};

	handleChange = (input) => (e) => {
		this.setState({ [input]: e.target.value });
	};
	render() {
		const { step } = this.state;
		const { firstName, lastName, email, companyName, businessType } =
			this.state;
		const values = { firstName, lastName, email, companyName, businessType };

		switch (step) {
			case 1:
				return (
					<CompanyInfo
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 2:
				return <h1>FormPersonalDetails</h1>;
			case 3:
				return <h1>FormPersonalDetails</h1>;
			case 4:
				return <h1>FormPersonalDetails</h1>;
		}
		return <div></div>;
	}
}

export default UserForm;
