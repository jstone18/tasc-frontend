/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

// const Navbar = () => {
//   return (
//     <div className="nav-bar">
//       <div className="ui secondary pointing menu navbar">
//         <Link to='/' className="active item">Dashboard</Link>
//         <Link to='/students' className=" item">Students</Link>
//         <Link to='/rooms' className=" item">Rooms</Link>
//       </div>
//     </div>
//   )
// }

class Navbar extends Component {
	componentDidMount() {
		var elem = document.querySelector(".sidenav");
		M.Sidenav.init(elem, {
			edge: "left",
			inDuration: 250
		});
	}
	render() {
		return (
			<div>
				{/* Main Nav */}
				<nav style={{ marginTop: "30px" }} className="blue">
					<div className="nav-wrapper">
						<a href="#" data-target="slide-out" className="sidenav-trigger">
							<i className="material-icons">menu</i>
						</a>
						<ul className="left hide-on-med-and-down">
							<li>
								<Link to="/" className="active item">
									Dashboard
									<i className="material-icons left">home</i>
								</Link>
							</li>
							<li>
								<Link to="/students" className=" item">
									Students
									<i className="material-icons left">person</i>
								</Link>
							</li>
							<li>
								<Link to="/rooms" className=" item">
									Rooms
									<i className="material-icons left">person</i>
								</Link>
							</li>
						</ul>
					</div>
				</nav>

				{/* Mobile Nav */}
				<ul id="slide-out" className="sidenav">
					<li />
					<li>
						<Link to="/" className="waves-effect">
							Dashboard
							<i className="material-icons left">home</i>
						</Link>
					</li>
					<li>
						<Link to="/students" className=" waves-effect">
							Students
							<i className="material-icons left">person</i>
						</Link>
					</li>
					<li>
						<div className="divider" />
					</li>
					<li>
						<a className="subheader">Subheader</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Navbar;
