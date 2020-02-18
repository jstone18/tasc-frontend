/* eslint-disable no-dupe-class-members */
import React, { Component } from "react";
import { connect } from "react-redux";
import { createStudent } from "../../redux/actions/students";
import { getRooms } from "../../redux/actions/rooms";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

class NewStudentForm extends Component {
	componentDidMount() {
		this.props.getRooms();
	}

	state = {
		firstName: "",
		lastName: "",
		age: "",
		room_id: 0,
		rooms: []
	};

	handleInputChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	submit = event => {
		event.preventDefault();

		this.props.createStudent(this.state, this.props.history);

		this.setState({
			firstName: "",
			lastName: "",
			age: 0,
			room_id: 0,
			rooms: []
		});
	};

	componentDidMount() {
		document.addEventListener("DOMContentLoaded", function() {
			var elems = document.querySelectorAll("select");
			// eslint-disable-next-line no-unused-vars
			var instances = M.FormSelect.init(elems);
		});
	}

	render() {
		let roomsList =
			this.props.rooms.length > 0 &&
			this.props.rooms.map((room, i) => {
				return (
					<option key={i} value={room.id}>
						{room.title}
					</option>
				);
			});

		return (
			<>
				<div className="ui segment" id="add-student-segment">
					<div className="list-header">
						<h2>Add a Student</h2>
					</div>

					<div class="row">
						<form class="col s12" onSubmit={this.submit}>
							<div class="row">
								<div class="input-field col s6">
									<input
										id="first_name"
										type="text"
										class="validate"
										name="firstName"
										onChange={this.handleInputChange}
										value={this.state.firstName}
									/>
									<label for="first_name">First Name</label>
								</div>
								<div class="input-field col s6">
									<input
										id="last_name"
										type="text"
										class="validate"
										name="lastName"
										onChange={this.handleInputChange}
										value={this.state.lastName}
									/>
									<label for="last_name">Last Name</label>
								</div>
							</div>
							<div class="row">
								<div class="input-field col s2">
									<input
										id="age"
										type="number"
										class="validate"
										name="age"
										onChange={this.handleInputChange}
										value={this.state.age}
									/>
									<label for="age">Age</label>
								</div>
							</div>
							<label>Room Assignment</label>
							<select
								className="ui required dropdown"
								name="room_id"
								value={this.state.room_id}
								onChange={this.handleInputChange}>
								{roomsList}
							</select>
							<br />
							<br />
							<button
								class="btn waves-effect waves-light"
								type="submit"
								name="action">
								Add Student
								<i class="material-icons left">add</i>
							</button>
						</form>
					</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		rooms: state.rooms
	};
};

export default connect(mapStateToProps, { createStudent, getRooms })(
	NewStudentForm
);
