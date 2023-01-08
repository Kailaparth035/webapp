import React from "react";
import styles from "../../styles/loginAdmin.module.css";
import { useRouter } from "next/router";

function LoginAdmin() {
  const router = useRouter();
  return (
    <div className="container common_bg my-5 loginPage">
      <h1 className="Common_Heading text-center">Admin Login</h1>
      <div className="d-flex align-items-center justify-content-center">
        <div className="login-logo"></div>

        <div className={styles.box_div}>
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <div>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input
                      type="checkbox"
                      id="remember"
                      style={{
                        marginRight: 10,
                        width: 17,
                        height: 17,
                      }}
                    />
                    <label for="remember" style={{ alignSelf: "center" }}>
                      Remember Me
                    </label>
                  </div>
                </div>

                <div className="col-4">
                  <button
                    // type="submit"
                    className="btn btn-primary btn-block"
                    onClick={() => router.push("/Admin/Product")}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>

            <div className="social-auth-links text-center mb-3">
              <p>- OR -</p>
              <div className="col-12">
                <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
                </a>
              </div>
              <div className="col-12" style={{ marginTop: 10 }}>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
                </a>
              </div>
            </div>

            <p className="mb-1">
              <a href="/Admin/ForgetPasswordAdmin">I forgot my password</a>
            </p>
            <p className="mb-0">
              <a href="register.html" className="text-center">
                Register a new membership
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default LoginAdmin;
