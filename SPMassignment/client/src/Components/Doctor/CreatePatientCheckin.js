import Axios from "axios";
import React, { Component } from "react";
import "./Allcss.css";
import swal from "@sweetalert/with-react";

export default class CreatePatientCheckin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paname: "",
      diagnose: "",
      ddate: "",
      phone: "",
      dname: "",
      med1: "",
      med2: "",
      med3: "",
      med4: "",
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
    const { paname, diagnose, ddate, phone, dname, med1, med2, med3, med4 } =
      this.state;
    const data = {
      paname: paname,
      diagnose: diagnose,
      ddate: ddate,
      phone: phone,
      dname: dname,
      med1: med1,
      med2: med2,
      med3: med3,
      med4: med4,
    };
    console.log(data);

    //phone number validation
    const ph = /^[0-9\b]+$/;
    if (!ph.test(String(phone)) || phone.length != 10) {
      swal(
        "Invalid Contact Number !",
        "contact number should be valid pattern",
        "error"
      );

    } else if (
      paname.length === 0 ||
      diagnose.length === 0 ||
      ddate.length === 0 ||
      phone.length === 0 ||
      dname.length === 0 ||
      med1.length === 0 ||
      med2.length === 0 ||
      med3.length === 0 ||
      med4.length === 0
    ) {
      swal("Please fill all the details");
    } else {
      Axios.post("/pcheck/save", data).then((res) => {
        let path = "/HPC";
        if (res.data.success) {
          alert("Details saved Successfully");
          this.props.history.push(path);
          this.setState({
            paname: "",
            diagnose: "",
            ddate: "",
            phone: "",
            dname: "",
            med1: "",
            med2: "",
            med3: "",
            med4: "",
          });
        }
      });
    }
  };
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg nav" >
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ">
                <li class="nav-item">
                  <div>
                    <button className="btn btn-success">
                      <a
                        href="/HPC"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        All Details
                      </a>
                    </button>

                    <button className="btn btn-success">
                      <a
                        href="/dashboard1"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Dashboard
                      </a>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="card2" style={{ marginLeft: "15%" }}>
          <div className="card" style={{ width: "65rem" }}>
            <div class="card-body">
              <form>
                <br />
                <center>
                  <h1 className="anm">Patient Check-ins</h1>
                </center>
                <br />
                <br />
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Patient Name</lable>
                  <input
                    type="text"
                    className="form-control"
                    name="paname"
                    placeholder="Enter patient's name"
                    value={this.state.paname}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Diagnose</lable>
                  <input
                    type="text"
                    className="form-control"
                    name="diagnose"
                    placeholder="Enter type of diagnose"
                    value={this.state.diagnose}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Date</lable>
                  <input
                    type="date"
                    className="form-control"
                    name="ddate"
                    placeholder="Choose date"
                    value={this.state.ddate}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Phone number</lable>
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                    placeholder="Enter your mobile"
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Doctor's Name</lable>
                  <input
                    type="text"
                    className="form-control"
                    name="dname"
                    placeholder="Choose date"
                    value={this.state.dname}
                    onChange={this.handleInputChange}
                  />
                </div>
                <h3>Prescriptions</h3>
                <div
                  className="form-group col-md-6"
                  style={{ marginBottom: "15px", marginLeft: "-1.5%" }}
                >
                  <lable style={{ marginBottom: "5px" }}>Panadol</lable>
                  <select
                    name="med1"
                    onChange={this.handleInputChange}
                    value={this.state.med1}
                    defaultValue="Select option"
                    className="form-control"
                  >
                    <option defaultValue>Select option</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div
                  className="form-group col-md-6"
                  style={{ marginBottom: "15px", marginLeft: "-1.5%" }}
                >
                  <lable style={{ marginBottom: "5px" }}>Asprin</lable>
                  <select
                    name="med2"
                    onChange={this.handleInputChange}
                    value={this.state.med2}
                    defaultValue="Select option"
                    className="form-control"
                  >
                    <option defaultValue>Select option</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div
                  className="form-group col-md-6"
                  style={{ marginBottom: "15px", marginLeft: "-1.5%" }}
                >
                  <lable style={{ marginBottom: "5px" }}>Ibuproten</lable>
                  <select
                    name="med3"
                    onChange={this.handleInputChange}
                    value={this.state.med3}
                    defaultValue="Select option"
                    className="form-control"
                  >
                    <option defaultValue>Select option</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <lable style={{ marginBottom: "5px" }}>Other</lable>
                  <textarea
                    type="text"
                    className="form-control"
                    name="med4"
                    placeholder="Other"
                    value={this.state.med4}
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
                  &nbsp; Save
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
