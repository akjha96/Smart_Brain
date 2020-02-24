import React, { Fragment, Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitRegister = () => {
    fetch("https://secure-garden-77301.herokuapp.com/register", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <Fragment>
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80 ">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="ph0 mh0 fw6 f1">Register</legend>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6" htmlFor="yourName">
                    Your name
                  </label>
                  <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" required type="text" name="yourName" id="yourName" onChange={this.onNameChange} />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6" htmlFor="email-address">
                    Email address
                  </label>
                  <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" required type="email" name="email-address" id="email-address" onChange={this.onEmailChange} />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                  <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" required type="password" name="password" id="password" onChange={this.onPasswordChange} />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6" htmlFor="confirmPassword">
                    Comfirm Password
                  </label>
                  <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" required type="password" name="confirmPassword" id="confirmPassword" />
                </div>
              </fieldset>
              <div className="mt3">
                <input onClick={this.onSubmitRegister} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up" />
              </div>
            </div>
          </main>
        </article>
      </Fragment>
    );
  }
}

export default Register;
