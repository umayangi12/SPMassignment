import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser2 } from "../../redux/actions/authActions2";
import "./Dashboard.css";

class Dashboard2 extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <div>
          <button
            style={{ marginLeft: "90%", marginTop: "2.5%" }}
            onClick={this.onLogoutClick}
            className="btn btn-lg btn-warning "
          >
            Logout
          </button>
          <center>
            <h1 className="backw12">Pharmacist Dashboard</h1>
          </center>
          <img className="backw2" src="./student.jpg" />
          <img className="backwo2" src="./student.jpg" />
          <nav class="navbar navbar-expand-lg  hn311 nav">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <button className="btn btn-success">
                      <a
                        href="#"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Pharmacy
                      </a>{" "}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="mern">
            <div
              className="row"
              style={{ marginTop: "6%", marginBottom: "2%", marginLeft: "37%" }}
            >
              <div className="col">
                <div class="card" style={{ width: "18rem" }}>
                  <img src="./notes.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Add Pharmacy</h5>
                    <p></p>
                    <a href="#" class="btn btn-primary">
                      Click Here
                    </a>
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard2.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser2 })(Dashboard2);
