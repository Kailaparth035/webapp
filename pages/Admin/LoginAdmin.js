import React from "react";
import styles from "../../styles/loginAdmin.module.css";
import { useRouter } from "next/router";

function LoginAdmin() {
  const router = useRouter();
  return (
    <div className="container common_bg my-5 loginPage">
      <h1 className="Common_Heading text-center">Admin Login</h1>
      <div className="d-flex align-items-center justify-content-center">
        <div class="login-logo"></div>

        <div class={styles.box_div}>
          <div class="card-body login-card-body">
            <p class="login-box-msg">Sign in to start your session</p>

            <form method="post">
              <div class="input-group mb-3">
                <input type="email" class="form-control" placeholder="Email" />
              </div>
              <div class="input-group mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <div class="row">
                <div class="col-8">
                  <div class="icheck-primary">
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

                <div class="col-4">
                  <button
                    // type="submit"
                    class="btn btn-primary btn-block"
                    onClick={() => router.push("/Admin/Product")}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>

            <div class="social-auth-links text-center mb-3">
              <p>- OR -</p>
              <div className="col-12">
                <a href="#" class="btn btn-block btn-primary">
                  <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
                </a>
              </div>
              <div className="col-12" style={{ marginTop: 10 }}>
                <a href="#" class="btn btn-block btn-danger">
                  <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
                </a>
              </div>
            </div>

            <p class="mb-1">
              <a href="/Admin/ForgetPasswordAdmin">I forgot my password</a>
            </p>
            <p class="mb-0">
              <a href="register.html" class="text-center">
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
