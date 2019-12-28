import React, { Component } from "react";
import StudentCard from "../components/students/StudentCard";

class StudentsList extends Component {
	state = {
		sortedStudentRooms: null,
		sortedStudents: null,
		search: ""
	};

	// Sort Rooms
	sortRooms = studentRooms => {
		const sortedObjects = studentRooms.sort((studentA, studentB) => {
			let roomA = studentA.room.title;
			let roomB = studentB.room.title;

			if (roomA > roomB) {
				return 1;
			} else if (roomA < roomB) {
				return -1;
			} else {
				return 0;
			}
		});

		this.setState({
			sortedStudentRooms: sortedObjects
		});
	};

	// Sort Students
	sortStudents = students => {
		const sortedStudents = students.sort((studentA, studentB) => {
			let name1 = studentA.firstName;
			let name2 = studentB.firstName;

			if (name1 > name2) {
				return 1;
			} else if (name1 < name2) {
				return -1;
			} else {
				return 0;
			}
		});

		this.setState({
			sortedStudents: sortedStudents
		});
	};

	updateSearch = e => {
		this.setState({ search: e.target.value });
	};

	render() {
		if (this.props.students.length === 0) {
			return <p>There are currently no students.</p>;
		}

		const studentInfo =
			this.props.students ||
			this.state.sortedStudents ||
			this.state.sortedStudentRooms;

		const studentCard = studentInfo.map(student => {
			return (
				<StudentCard
					key={student.id}
					student={student}
					attendances={student.attendances}
				/>
			);
		});

		const filteredStudents = studentInfo.filter(
			student =>
				student.firstName
					.toLowerCase()
					.indexOf(this.state.search.toLowerCase()) !== -1
		);

		const filteredCard = filteredStudents.map(student => (
			<StudentCard
				key={student.id}
				student={student}
				attendances={student.attendances}
			/>
		));

		return (
			<>
				<div class="row">
					<form class="col s12">
						<div class="row">
							<div class="input-field col s6" id="student-search">
								<i class="material-icons prefix">account_circle</i>
								<input
									id="icon_prefix"
									type="text"
									class="validate"
									value={this.state.search}
									onChange={this.updateSearch}
								/>
								<label for="icon_prefix">Student Search</label>
							</div>
						</div>
					</form>
				</div>

				<div className="ui container" id="student-list">
					<table className="ui celled table">
						<thead>
							<tr>
								<th>
									Name{" "}
									<i
										className="caret square down icon"
										onClick={() => {
											this.sortStudents(this.props.students);
										}}></i>
								</th>
								<th>
									Room{" "}
									<i
										className="caret square down icon"
										onClick={() => {
											this.sortRooms(this.props.students);
										}}></i>
								</th>
								<th>Status</th>
							</tr>
						</thead>
						{this.state.search !== "" ? filteredCard : studentCard}
					</table>
				</div>
			</>
		);
	}
}
export default StudentsList;
