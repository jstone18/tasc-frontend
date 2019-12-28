import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudents } from "../redux/actions/students";

import StudentsList from "./StudentsList";

class StudentsContainer extends Component {
	render() {
		return (
			<div className="ui segment" id="student-list-segment">
				<div className="list-header">
					<h2>Students List</h2>
				</div>
				<StudentsList students={this.props.students} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		students: state.students
	};
};

export default connect(mapStateToProps, { fetchStudents })(StudentsContainer);
