import React from "react";
import faker from "faker";
import { Link } from "react-router-dom";

class StudentCard extends React.Component {
	state = {
		vote: 0
	};

	handleCLick = () => {
		this.setState({
			vote: 1
		});
	};

	render() {
		const { student } = this.props;

		return (
			<tbody>
				<tr>
					<td data-label="Name">
						<Link to={`/students/${student.id}`}>
							<h4 className="ui image header">
								<img
									className="ui mini rounded image"
									src={faker.image.avatar()}
									alt=""
								/>
								<div className="content">
									{student.firstName} {student.lastName}
									<div className="sub header">Age: {student.age}</div>
								</div>
							</h4>
						</Link>
					</td>
					<td data-label="Room">{student.room.title}</td>
					<td data-label="Status">
						{student.attendances.length > 0 && !!student.attendances[0].checkIn
							? "Checked In"
							: "Checked Out"}
					</td>
				</tr>
			</tbody>
		);
	}
}

export default StudentCard;
