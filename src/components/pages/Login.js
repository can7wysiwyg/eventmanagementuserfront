import axios from "axios";
import { useState } from "react";

function Login() {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleValues = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault()

    const res = await axios.post('/user/login', {...values})
    localStorage.setItem("token", res.data.accesstoken);
    if (res.data.msg) {
     alert(res.data.msg)
    } else {
      window.location.href = "/";
    }

  }

  return (
    <>
      <div className="container  ">
        <div>
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <form onSubmit={handleSubmit} className="form" style={{ marginTop: "5rem" }}>
                <div>
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleValues}
                    placeholder="your email"
                  />
                </div>

                <div>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleValues}
                    placeholder="your password"
                  />
                </div>
                <button className="btn btn-secondary">login now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
