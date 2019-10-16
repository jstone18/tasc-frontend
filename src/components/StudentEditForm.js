/* eslint-disable eqeqeq */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateStudent } from '../redux/actions/students'
import { getRooms } from '../redux/actions/rooms'

class EditStudent extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      first_name: props.student.first_name,
      last_name: props.student.last_name,
      age: props.student.age,
      room_id: props.student.room_id,
      dob: props.student.dob, 
      street_address: props.student.street_address,
      city: props.student.city,
      state: props.student.state,
      allergies: props.student.allergies,
      medications: props.student.medications,
      dr_name: props.student.dr_name,
      dr_phone: props.student.dr_phone,
      contact1_name: props.student.contact1_name,
      contact1_phone: props.student.contact1_phone,
      contact1_relationship: props.student.contact1_relationship,
      contact2_name: props.student.contact2_name,
      contact2_phone: props.student.contact2_phone,
      contact2_relationship: props.student.contact2_relationship,
      contact3_name: props.student.contact3_name,
      contact3_phone: props.student.contact3_phone,
      contact3_relationship: props.student.contact3_relationship,
      rooms: props.student.rooms
    }
  }

  componentDidMount() {
    this.props.getRooms()
  }

  handleInputChange= event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  update = event => {
    event.preventDefault()

    this.props.updateStudent(this.state, this.props.student.id, this.props.history)
  }

  render() {
    let roomsList = this.props.rooms.length > 0
      && this.props.rooms.map((room, i) => {
        return (
          <option key={i} value={room.id}>{room.title}</option>
        )
      })
    return (
      <>
        <div id="students-header">
        <h1>
          UPDATE STUDENT PROFILE
        </h1>
        </div>
        <div className="ui segment">
          <div className="ui one column centered grid">
            <div className="column">

            {/* Personal Info Fields */}
              <h3>
                PERSONAL INFO
              </h3>
              <div className="ui divider form-header">
              </div>
              <div className="ui equal width form">         
                <form onSubmit={this.update}>
                  <div className="fields">
                    <div className="required field">
                      <label>First Name:</label>
                      <input
                        required 
                        type="text" 
                        name="first_name" 
                        placeholder="First Name" 
                        onChange={this.handleInputChange}
                        value={this.state.first_name}
                      />
                    </div>
                    <div className="required field">
                      <label>Last Name:</label>
                      <input 
                        required
                        type="text" 
                        name="last_name" 
                        placeholder="Last Name" 
                        onChange={this.handleInputChange}
                        value={this.state.last_name}
                      />
                    </div>
                  </div>
                  <div className="fields">
                    <div className="field">
                      <label>Date of Birth:</label>
                      <input 
                        type="date"
                        name="dob"
                        placeholder="mm/dd/yyyy"
                        onChange={this.handleInputChange}
                        value={this.state.dob}
                      />
                    </div>
                    <div className="required field">
                      <label>Age:</label>
                      <input 
                        required 
                        type="number" 
                        name="age" 
                        placeholder="Age" 
                        onChange={this.handleInputChange}
                        value={this.state.age}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>Street Address:</label>
                    <input
                      type="text" 
                      name="street_address" 
                      placeholder="Street Adress" 
                      onChange={this.handleInputChange}
                      value={this.state.street_address}
                    />
                  </div>
                  <div className="fields">
                    <div className="field">
                      <label>City:</label>
                      <input 
                        type="text" 
                        name="city" 
                        placeholder="City" 
                        onChange={this.handleInputChange}
                        value={this.state.city}
                      />
                    </div>
                    <div className="four wide field">
                      <label>State:</label>
                      <input 
                        type="text" 
                        name="state" 
                        placeholder="ST" 
                        onChange={this.handleInputChange}
                        value={this.state.state}
                      />
                    </div>
                    <div className="field">
                      <label>Zip:</label>
                      <input  
                        type="text" 
                        name="zip" 
                        placeholder="Zipcode" 
                        onChange={this.handleInputChange}
                        value={this.state.zip}
                      />
                    </div> 
                  </div>

                  {/* Medical Info Fields */}
                    <h3>MEDICAL INFO</h3>
                    <div className="ui divider form-header">
                    </div>
                    <div className="field">
                      <label>Allergies (seperate w/ commas):</label>
                      <input
                        type="text" 
                        name="allergies" 
                        placeholder="Peanuts, Fish, Mango, etc..." 
                        onChange={this.handleInputChange}
                        value={this.state.allergies}
                      />
                    </div>
                    <div className="field">
                      <label>Medications (seperate w/ commas):</label>
                      <input
                        type="text" 
                        name="medications" 
                        placeholder="Medications" 
                        onChange={this.handleInputChange}
                        value={this.state.medications}
                      />
                    </div>
                    <div className="fields">
                      <div className="field">
                        <label>Doctor Name:</label>
                          <input
                            type="text" 
                            name="dr_name" 
                            placeholder="Dr. Name" 
                            onChange={this.handleInputChange}
                            value={this.state.dr_name}
                          />
                      </div>
                      <div className="field">
                        <label>Doctor Phone #:</label>
                          <input
                            type="tel" 
                            name="dr_phone" 
                            placeholder="555-555-5555" 
                            onChange={this.handleInputChange}
                            value={this.state.dr_phone}
                          />
                      </div>
                    </div>

                  {/* Emergency Contacts Fields */}
                    <h3>EMEGENCY CONTACTS</h3>
                    <div className="ui divider form-header">
                    </div>
                    <div className="ui equal width grid">
                      <div className="column">
                        <h4>Contact #1</h4>
                        <div className="field">
                          <label>Name:</label>
                          <input  
                            type="text" 
                            name="contact1_name" 
                            placeholder="Name" 
                            onChange={this.handleInputChange}
                            value={this.state.contact1_name}
                          />
                        </div>
                        <div className="field">
                          <label>Phone #:</label>
                          <input  
                            type="tel" 
                            name="contact1_phone" 
                            placeholder="555-5555-5555" 
                            onChange={this.handleInputChange}
                            value={this.state.contact1_phone}
                          />
                        </div>
                        <div className="field">
                          <label>Relationship:</label>
                          <input  
                            type="tel" 
                            name="contact1_relationship" 
                            placeholder="Mother, Father, Grandparent, etc..." 
                            onChange={this.handleInputChange}
                            value={this.state.contact1_relationship}
                          />
                        </div>
                      </div>
                      <div className="column">
                        <h4>Contact #2</h4>
                        <div className="field">
                          <label>Name:</label>
                          <input  
                            type="text" 
                            name="contact2_name" 
                            placeholder="Name" 
                            onChange={this.handleInputChange}
                            value={this.state.contact2_name}
                          />
                        </div>
                        <div className="field">
                          <label>Phone #:</label>
                          <input  
                            type="tel" 
                            name="contact2_phone" 
                            placeholder="555-5555-5555" 
                            onChange={this.handleInputChange}
                            value={this.state.contact2_phone}
                          />
                        </div>
                        <div className="field">
                          <label>Relationship:</label>
                          <input  
                            type="tel" 
                            name="contact2_relationship" 
                            placeholder="Mother, Father, Grandparent, etc..." 
                            onChange={this.handleInputChange}
                            value={this.state.contact2_relationship}
                          />
                        </div>
                      </div>
                      <div className="column">
                        <h4>Contact #3</h4>
                        <div className="field">
                          <label>Name:</label>
                          <input  
                            type="text" 
                            name="contact3_name" 
                            placeholder="Name" 
                            onChange={this.handleInputChange}
                            value={this.state.contact3_name}
                          />
                        </div>
                        <div className="field">
                          <label>Phone #:</label>
                          <input  
                            type="tel" 
                            name="contact3_phone" 
                            placeholder="555-5555-5555" 
                            onChange={this.handleInputChange}
                            value={this.state.contact3_phone}
                          />
                        </div>
                        <div className="field">
                          <label>Relationship:</label>
                          <input  
                            type="tel" 
                            name="contact3_relationship" 
                            placeholder="Mother, Father, Grandparent, etc..." 
                            onChange={this.handleInputChange}
                            value={this.state.contact3_relationship}
                          />
                        </div>
                      </div>
                    </div>

                  {/* Room Info Dropdown */}
                    <h3>ROOM INFO</h3>
                    <div className="ui divider form-header">
                    </div>
                    <br/>
                    <div className="four wide field">
                      <select className="ui dropdown"
                              name="room_id" 
                              value={this.state.room_id}
                              onChange={this.handleInputChange}>
                        { roomsList }
                      </select>
                    </div>
                    <br/>
                    <br/>
                  <button className="ui primary button" type="submit">Update Profile</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id
  const student = state.students.filter(student => student.id == id)[0]
  const rooms = state.rooms
  return {
    student,
    rooms
  };
};

export default connect(mapStateToProps, { updateStudent, getRooms
 })(EditStudent);