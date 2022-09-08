import React, { Component } from "react";
import axios from "axios";

export default class EditAppBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      pname: "",
      mobile: "",
      date: "",
      email: "",
      nicpass: "",
      area: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const { title, pname, mobile, date, email, nicpass, area } = this.state;

    const data = {
      title: title,
      pname: pname,
      mobile: mobile,
      date: date,
      email: email,
      nicpass: nicpass,
      area: area,
    };

    axios.put(`/appbooking/update/${id}`, data).then((res) => {
      let path = "/HAB";
      if (res.data.success) {
        alert("Appointment Updated Successfully");
        this.props.history.push(path);
        this.setState({
          title: "",
          pname: "",
          mobile: "",
          date: "",
          email: "",
          nicpass: "",
          area: "",
        });
      }
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/appbooking/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          title: res.data.post.title,
          pname: res.data.post.pname,
          mobile: res.data.post.mobile,
          date: res.data.post.date,
          email: res.data.post.email,
          nicpass: res.data.post.nicpass,
          area: res.data.post.area,
        });

        console.log(this.state.post);
      }
    });
  }

  render() {
    return (
      <div>
        <nav class="navbar b">
          <div class="container">
            <form class="d-flex nav1 " role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.handleSearchArea}
              ></input>
              &nbsp;
              <button class="btn btn-outline-warning " type="submit">
                Search
              </button>
            </form>
            <a class="navbar-brand" href="#"></a>
          </div>
        </nav>
        <div className="card2">
          <div className="card" style={{ width: "65rem" }}>
            <div class="card-body">
              <form>
                <br />
                <center>
                  <h1 className="anm"> Edit My Booking</h1>
                </center>
                <br />
                <br />

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Title</lable>
                  <select
                    name="title"
                    onChange={this.handleInputChange}
                    value={this.state.title}
                    defaultValue="Select Title"
                    className="form-control"
                  >
                    <option defaultValue>Mr</option>
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Mast</option>
                    <option>Dr</option>
                    <option>Prof</option>
                    <option>Baby</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Patient Name</lable>
                  <input
                    type="text"
                    className="form-control"
                    name="pname"
                    placeholder="Enter your name"
                    value={this.state.pname}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Mobile</lable>
                  <input
                    type="number"
                    className="form-control"
                    name="mobile"
                    placeholder="Enter your mobile"
                    value={this.state.mobile}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Date</lable>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    placeholder="Choose date"
                    value={this.state.date}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Email</lable>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="Enter your email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>NIC/Passport</lable>
                  <input
                    type="text"
                    className="form-control"
                    name="nicpass"
                    placeholder="Enter your NIC or Passport"
                    value={this.state.nicpass}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Area</lable>
                  <input
                    type="text"
                    className="form-control"
                    name="area"
                    placeholder="Enter your area"
                    value={this.state.area}
                    onChange={this.handleInputChange}
                  />
                </div>
              </form>
              <br></br>
              <center>
                <a
                  className="btn btn-warning btn-lg text-dark"
                  type="submit"
                  style={{ marginTop: "15px" }}
                  onClick={this.onSubmit}
                >
                  <i className="far fa-check-square"></i>
                  &nbsp; Update
                </a>
              </center>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
