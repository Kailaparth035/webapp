import Head from "next/head";
import React from "react";
import styles from "../styles/index.module.css";
import Image from "next/image";
import { useState } from "react";

const index = () => {
  const [selectField, setSelectField] = useState("Login");
  const [reminder, setReminder] = useState(false);
  const [loginWithOtp, setLoginWithOtp] = useState(false);
  const [signInCheckBox, setSignInCheckBox] = useState(false);
  const select_field = (key) => {
    // alert(key);
    setSelectField(key);
  };
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="row" style={{ padding: 10 }}>
        <div className="col-2"></div>

        <div className="col-2">
          <Image src={require("../assets/Images/Header_Logo.png")} />
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col-1"></div>
        <div className="col-5">
          <button
            className={`${styles.header_login_text} `}
            onClick={() => select_field("Login")}
          >
            Logins
          </button>
        </div>
        <div className="col-5">
          <button
            className={styles.header_signup_text}
            onClick={() => select_field("Sign_Up")}
          >
            Sign Up
          </button>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <hr />
        </div>
        <div className="col-2"></div>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-4">
          {selectField === "Login" ? (
            <Image
              src={require("../assets/Images/Good_doggy_pana.png")}
              className={styles.image_div}
            />
          ) : (
            <Image
              src={require("../assets/Images/Dog_poop_amico.png")}
              className={styles.image_div}
            />
          )}
        </div>
        <div className="col-4">
          <div className={styles.inpute_div}>
            {selectField === "Login" ? (
              <>
                <div className="row">
                  <span className={styles.inpute_title_email}>
                    Mobile Number / Email ID
                  </span>
                  <input
                    placeholder="Mobile Number / Email ID"
                    className={styles.inpute_email}
                  />
                </div>
                <div className="row">
                  <span className={styles.inpute_title_mobile}>Password</span>
                  <input
                    placeholder="Password"
                    className={styles.inpute_email}
                  />
                </div>
                <div className="row">
                  <div className="col-1">
                    <button
                      className={styles.check_box}
                      onClick={() => setReminder(!reminder)}
                    >
                      {reminder ? (
                        <Image
                          src={require("../assets/Images/Check.png")}
                          className={styles.check_box_image}
                        />
                      ) : null}
                    </button>
                  </div>
                  <div className="col-6">
                    <div className={styles.check_box_text}>
                      <span>Remember me for 30 days</span>
                    </div>
                  </div>
                  <div className="col-5">
                    <button className={styles.forget_password_text}>
                      Forget Password?
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <button
                      className={styles.check_box}
                      onClick={() => setLoginWithOtp(!loginWithOtp)}
                    >
                      {loginWithOtp ? (
                        <Image
                          src={require("../assets/Images/Check.png")}
                          className={styles.check_box_image}
                        />
                      ) : null}
                    </button>
                  </div>
                  <div className="col-11">
                    <div className={styles.check_box_text}>
                      <span>Login with OTP instead of passwor</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <button className={styles.login_button}>Login</button>
                </div>
              </>
            ) : (
              <>
                <div className="row">
                  <span className={styles.inpute_title_email}>Full Name</span>
                  <input
                    placeholder="Full Name"
                    className={styles.inpute_email}
                  />
                </div>
                <div className="row">
                  <span className={styles.inpute_title_mobile}>
                    Mobile Number
                  </span>
                  <div className="row">
                    <div className="col-3">
                      <input
                        placeholder="+91(In)"
                        className={styles.countrycode_ipute}
                      />
                    </div>
                    <div className="col-9">
                      <input
                        placeholder="Mobile Number"
                        className={styles.mobile_number_inpute}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <span className={styles.inpute_title_mobile}>
                      Full Name
                    </span>
                    <input
                      placeholder="Full Name"
                      className={styles.inpute_email}
                    />
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <button
                        className={styles.check_box}
                        onClick={() => setSignInCheckBox(!signInCheckBox)}
                      >
                        {" "}
                        {signInCheckBox ? (
                          <Image
                            src={require("../assets/Images/Check.png")}
                            className={styles.check_box_image}
                          />
                        ) : null}
                      </button>
                    </div>
                    <div className="col-11">
                      <div className={styles.check_box_text}>
                        <span>
                          Receive relevant offers promotional communication from
                          Floofable By singing up, I agree to terms.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <button className={styles.login_button}>Sign Up</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
};
export default index;
