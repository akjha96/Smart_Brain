import React, { Fragment } from "react";

const Register = ({ onRouteChange }) => {
  return (
    <Fragment>
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main class="pa4 black-80 ">
          <form action="sign-up_submit" method="get" accept-charset="utf-8" className="measure">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
              <legend class="ph0 mh0 fw6 clip">Sign Up</legend>
              <div class="mt3">
                <label class="db fw4 lh-copy f6" htmlFor="yourName">
                  Your name
                </label>
                <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" required type="text" name="yourName" id="yourName" />
              </div>
              <div class="mt3">
                <label class="db fw4 lh-copy f6" htmlFor="email-address">
                  Email address
                </label>
                <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" required type="email" name="email-address" id="email-address" />
              </div>
              <div class="mt3">
                <label class="db fw4 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" required type="password" name="password" id="password" />
              </div>
              <div class="mt3">
                <label class="db fw4 lh-copy f6" htmlFor="confirmPassword">
                  Comfirm Password
                </label>
                <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" required type="password" name="confirmPassword" id="confirmPassword" />
              </div>
            </fieldset>
            <div class="mt3">
              <input onClick={() => onRouteChange("home")} class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up" />
            </div>
          </form>
        </main>
      </article>
    </Fragment>
  );
};

export default Register;
