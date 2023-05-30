import React, { useState, useEffect } from "react";
function SignUp() {
  const initialval = { name: "", email: "", password: "" };
  const [formvalues, setformvalues] = useState(initialval);
  const [formerrors, setformerrors] = useState({});
  const [issubmit, setissubmit] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });
    console.log(formvalues);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setformerrors(validate(formvalues));
    setissubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formerrors).length === 0 && issubmit) {
    }
  }, [formerrors]);

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!values.name) {
      errors.name = "name is required!";
    }

    if (!values.email) {
      errors.email = "email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "this is not a valid email!";
    }

    if (!values.password) {
      errors.password = "password is required!";
    } else if (values.password.length < 4) {
      errors.password = "password must be more than 4 character!";
    }
    return errors;
  };

  return (
    <div className="signup">
      <div>
        <img
          className="signupimg"
          src="https://png.pngtree.com/thumb_back/fh260/background/20201014/pngtree-wave-of-flowing-particles-over-grey-blurred-dots-vector-abstract-background-image_415418.jpg"
          alt=""
        />
      </div>

      <div className="valid-container">
        {Object.keys(formerrors).length === 0 && issubmit ? (
          <div className="note">Signed in successfully</div>
        ) : (
          issubmit
        )}

        <form onSubmit={handlesubmit}>
          <div className="validation">
            <input
              className="valid-input"
              type="text"
              placeholder="Name"
              name="name"
              value={formvalues.name}
              onChange={handlechange}
            />
            <p className="input-error">{formerrors.name}</p>

            <input
              className="valid-input"
              type="email"
              name="email"
              placeholder="Email"
              value={formvalues.email}
              onChange={handlechange}
            />
            <p className="input-error">{formerrors.email}</p>

            <input
              className="valid-input"
              type="password"
              name="password"
              placeholder="password"
              value={formvalues.password}
              onChange={handlechange}
            />
            <p className="input-error">{formerrors.password}</p>
            <button  className="valid-input" >submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
