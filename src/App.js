import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      userCode: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      role: "",
      password: "",
      reEnterPassword: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    // get our form data out of state
    const { userId, userCode, firstName, lastName, email, phone } = this.state;
    const password = document.getElementById("password").value;
    const rePassword = document.getElementById("re-enter-password").value;
    const messageElement = document.getElementById('message');
    // <label class="col-md-12 col-form-label text-center alert alert-danger mt-2 collapse.show" id="message">Saved Successfully!</label>
    messageElement.classList.remove('collapse.show');
    messageElement.classList.add('collapse');
    if(password === rePassword) {
      // axios.post('https://c7kfbjspdb.execute-api.us-east-1.amazonaws.com/dev/users', { userId, userCode, firstName, lastName, email, phone })
      axios.post('https://9mt9q2vjjd.execute-api.us-east-2.amazonaws.com/dev/users', { userId, userCode, firstName, lastName, email, phone })
        .then((result) => {
          console.log(result);
          messageElement.innerText = "Saved Successfully!";
          messageElement.classList.remove('collapse');
          messageElement.classList.add('collapse.show');
        });
    } else {
      messageElement.innerText = "Passwords Do NOT match.";
      messageElement.classList.remove('collapse');
      messageElement.classList.add('collapse.show');
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md bg-light sticky-top col-md-12">
          <a className="navbar-brand" href="http://localhost:3000">
            <i><img src="quadyster-logo.png" alt="image" className="quadyster-logo" /></i>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item text-center mb-1 mt-1">
                <a className="nav-link" href="#">
                  <i className="fa fa-home fa-2x blue-font "></i>
                  <br/>
                  <i className="nav-text">Home</i>
                </a>
              </li>
              <li className="nav-item text-center mb-1 mt-1">
                <a className="nav-link" href="#">
                  <i className="fa fa-user fa-2x red-font"></i>
                  <br/>
                  <i className="nav-text">Users</i>
                </a>
              </li>
              <li className="nav-item text-center mb-1 mt-1">
                <a className="nav-link" href="#">
                  <i className="fa fa-globe fa-2x DimGray-font gray-center"></i>
                  <br/>
                  <i className="nav-text">Portals</i>
                </a>
              </li>
              <li className="nav-item text-center mb-1 mt-1">
                <a className="nav-link" href="#">
                  <i className="fa fa-tasks fa-2x DarkCyan-font"></i>
                  <br/>
                  <i className="nav-text">Opportunities</i>
                </a>
              </li>
              <li className="nav-item text-center mb-1 mt-1">
                <a className="nav-link" href="#">
                  <i className="fa fa-bullseye fa-2x DarkCyan-font"></i>
                  <br/>
                  <i className="nav-text">New Opportunity</i>
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 text-center mb-1 mt-1">
              <a>
                <img src="girl.png" alt="Avatar" className="avatar" />
                <br/>
                <i>User Name</i>
              </a>
            </form>
          </div>
        </nav>

        <div className="row">
          <div className="col"></div>
          <div className="col-8">
            <form onSubmit={this.onSubmit}>
              <div className="form-group row">
                <label className="col-md-12 col-form-label text-center alert alert-danger collapse mt-2" id="message"></label>
              </div>
              <div className="form-group row">
                <label htmlFor="user-id" className="col-md-2 col-form-label text-right">User Id</label>
                <div className="col-md-10">
                  <input type="text" className="form-control" id="user-id" placeholder="User Id" name="userId" value={this.state.userId} onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="code" className="col-md-2 col-form-label text-right">Code</label>
                <div className="col-md-10">
                  <input type="text" className="form-control" id="code" placeholder="Code" name="userCode" value={this.state.userCode} onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="first-name" className="col-md-2 col-form-label text-right">First Name</label>
                <div className="col-md-10">
                  <input type="text" className="form-control" id="first-name" placeholder="First Name" name="firstName" value={this.state.firstName}
                    onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="last-name" className="col-md-2 col-form-label text-right">Last Name</label>
                <div className="col-md-10">
                  <input type="text" className="form-control" id="last-name" placeholder="Last Name" name="lastName" value={this.state.lastName}
                    onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="email" className="col-md-2 col-form-label text-right">Email</label>
                <div className="col-md-10">
                  <input type="email" className="form-control" id="email" placeholder="sample@email.com" name="email" value={this.state.email}
                    onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="phone" className="col-md-2 col-form-label text-right">Phone</label>
                <div className="col-md-10">
                  <input type="text" className="form-control" id="phone" placeholder="000-000-0000" name="phone" value={this.state.phone} onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="role" className="col-md-2 col-form-label text-right">Role</label>
                <div className="col-md-10">
                  <select id="role" name="role" className="form-control" value={this.state.role} onChange={this.handleInputChange}>
                    <option value=""></option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="password" className="col-md-2 col-form-label text-right">Password</label>
                <div className="col-md-10">
                  <input type="password" className="form-control" id="password" placeholder="" name="password" value={this.state.password}
                    onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="re-enter-password" className="col-md-2 col-form-label text-right">Re-enter Password</label>
                <div className="col-md-10">
                  <input type="password" className="form-control" id="re-enter-password" placeholder="" name="reEnterPassword" value={this.state.reEnterPassword}
                    onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12 text-center">
                  <button type="submit" className="btn btn-outline-primary">Save</button>
                  <button type="button" className="btn btn-outline-secondary">Change Password</button>
                  <button type="button" className="btn btn-outline-danger">Delete User</button>
                  <button type="button" className="btn btn-outline-info">User List</button>
                </div>
              </div>
            </form>

          </div>
          <div className="col"></div>
        </div>

      </div>
    );
  }
}

export default App;
