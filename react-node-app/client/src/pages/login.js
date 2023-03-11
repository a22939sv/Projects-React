import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Login.css";

const Login = () => {
  return (
    <section className="vh-100">
      <div className="container py-4 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card login-card">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://img2.storyblok.com/367x574/filters:quality(100)/f/68177/363x569/57465e7b5f/noticia-glovo-mobile.png"
                    alt="login form"
                    className="img-fluid h-100 login-img"
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center justify-content-center mb-3 pb-1">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Logotip_de_Glovo.png/1200px-Logotip_de_Glovo.png"
                          alt="login form"
                          className="img-fluid w-50"
                        />
                      </div>

                      <h5 className="fw-normal login-h5 mb-3 pb-3">
                        Sign into your account
                      </h5>

                      <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example17">
                          Email
                        </label>
                        <input
                          type="email"
                          id="inputEmail"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example27">
                          Password
                        </label>
                        <input
                          type="password"
                          id="inputPassword"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                        >
                          Login
                        </button>
                      </div>

                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="login-p mb-5 pb-lg-2">
                        Don't have an account?{" "}
                        <a href="#!" className="login-a">
                          Register here
                        </a>
                      </p>
                      <a href="#!" className="small text-muted me-2">
                        Terms of use
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
