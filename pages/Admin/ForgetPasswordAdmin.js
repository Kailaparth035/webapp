import React from "react";
import styles from "../../styles/forgetpasswordAdmin.module.css";

function ForgetPasswordAdmin() {
  return (
    <div className="container common_bg my-5 loginPage">
      <h1 className="Common_Heading text-center">Forget Password</h1>
      <div className="d-flex align-items-center justify-content-center">
        <div class={styles.box_div}>
          <div class="card-body">
            <p class="login-box-msg">
              You forgot your password? Here you can easily retrieve a new
              password.
            </p>
            <form action="recover-password.html" method="post">
              <div class="input-group mb-3">
                <input type="email" class="form-control" placeholder="Email" />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <button type="submit" class="btn btn-primary btn-block">
                    Request new password
                  </button>
                </div>
              </div>
            </form>
            <p class="mt-3 mb-1">
              <a href="/Admin/LoginAdmin">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordAdmin;
