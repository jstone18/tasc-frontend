import React from "react";
import RoomCard from "./RoomCard";

const RoomsList = ({ rooms, students }) => {
	const room = rooms.map(room => (
		<RoomCard key={room.id} room={room} students={students} />
	));

	return (
		<div className="ui segment">
			<div className="list-header">
				<h2>Rooms List</h2>
			</div>
			<table className="ui fixed single line celled table">
				<thead>
					<tr>
						<th className="four wide">Room Titile</th>
						<th>Room Assignments</th>
					</tr>
				</thead>
				{room}
			</table>
		</div>
	);
};

export default RoomsList;
