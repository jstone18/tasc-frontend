import React, { Component } from "react";
import { connect } from "react-redux";
import { createRoom } from "../../redux/actions/rooms";

class NewRoom extends Component {
	state = {
		title: ""
	};

	handleChange = event => {
		this.setState({
			title: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		this.props.createRoom(this.state);
		this.setState({
			title: ""
		});
	};

	render() {
		return (
			<div className="ui segment student-form">
				<div class="row">
					<form class="col s12" onSubmit={this.handleSubmit}>
						<div class="row">
							<div class="input-field col s6" id="student-search">
								<i class="material-icons prefix">account_circle</i>
								<input
									id="icon_prefix"
									type="text"
									class="validate"
									value={this.state.title}
									onChange={this.handleChange}
								/>
								<label for="icon_prefix">Room Title</label>
							</div>
						</div>
					</form>
					<button className="negative ui button" type="submit">
						Create Room
					</button>
				</div>
			</div>
		);
	}
}

export default connect(null, { createRoom })(NewRoom);
