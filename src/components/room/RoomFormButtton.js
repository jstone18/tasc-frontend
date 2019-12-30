import React, { Component } from "react";
import NewRoom from "./RoomCreateForm";

class ShowFormButton extends Component {
	state = {
		showForm: false
	};

	showForm = () => {
		this.setState({
			showForm: !this.state.showForm
		});
	};

	render() {
		return (
			<>
				<div className="form-show-button">
					<button className="positive ui button" onClick={this.showForm}>
						Add Room
					</button>
				</div>
				<div>{this.state.showForm && <div>{<NewRoom />}</div>}</div>
			</>
		);
	}
}

export default ShowFormButton;
