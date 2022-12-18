import Head from "next/head";
import React, { useMemo, useState, useEffect } from "react";
import styles from "../styles/index.module.css";
import Image from "next/image";
import Link from "next/link";
import options from "../CountryCodes.json";
import Select from "react-select";
import { useRouter } from "next/router";
// import countryList from "react-select-country-list";
import CountryCode from "../CountryCodes.json";

const index = () => {
  const [selectField, setSelectField] = useState("Login");
  const [reminder, setReminder] = useState(false);
  const [loginWithOtp, setLoginWithOtp] = useState(false);
  const [signInCheckBox, setSignInCheckBox] = useState(false);
  const [value, setValue] = useState("");

  // const options = useMemo(() => countryList().getData(), []);
  // console.log("options ::", options);

  // useEffect(() => {
  //   let temp = [];
  //   CountryCode.map((mapItem) => {
  //     temp.push({
  //       value: mapItem.label + mapItem.code,
  //       label: mapItem.label + mapItem.code,
  //     });
  //   });
  //   console.log("temp ::", temp);
  // }, []);

  const select_field = (key) => {
    // alert(key);
    setSelectField(key);
  };
  const changeHandler = (value) => {
    console.log(value);
    setValue(value.name);
  };

  const router = useRouter();
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="row" style={{ padding: 10 }}>
        <div className="col-2"></div>

        <div className="col-2">
          <Image src={require("../assets/Images/Header_Logo.png")} />
        </div>
      </div>

      <hr className={styles.border_hr}/>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-5">
          <div className="text_color">
            <Link
              href={"/"}
              className={`${styles.header_login_text} `}
              onClick={() => select_field("Login")}
              style={{ textDecoration: "none" }}
            >
              {selectField === "Login" ? (
                <span className={styles.selected_text}>Login</span>
              ) : (
                <span className={styles.unselected_text}>Login</span>
              )}
            </Link>
            <style jsx>{`
              .text_color {
              }
              Link {
                color: "red";
              }
            `}</style>
          </div>
        </div>
        <div className="col-5">
          <Link
            href={"/"}
            className={styles.header_signup_text}
            onClick={() => select_field("Sign_Up")}
            style={{ textDecoration: "none" }}
          >
            {selectField === "Sign_Up" ? (
              <span className={styles.selected_text}> Sign Up</span>
            ) : (
              <span className={styles.unselected_text}> Sign Up</span>
            )}
          </Link>
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
        <div className="col-4" style={{ alignSelf: "flex-end" }}>
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
                  <span className={styles.inpute_title_pass}>Password</span>
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
                    <div className={styles.forget_password_dive}>
                      <Link
                        href={"/"}
                        className={styles.forget_password_text}
                        onClick={() => alert("Forget Password?")}
                      >
                        Forget Password?
                      </Link>
                    </div>
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
                  <button
                    className={styles.login_button}
                    onClick={() => router.push("/Home")}
                  >
                    Login
                  </button>
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
                  <span className={styles.inpute_title_pass}>
                    Mobile Number
                  </span>
                  <div className="row">
                    <div className="col-4">
                      {/* <div> */}
                      <Select
                        options={CountryCode}
                        value={value}
                        onChange={changeHandler}
                        className={styles.dropdown}
                        placeholder="+91(In)"
                      />
                      {/* <Link
                          href={"/"}
                          style={{ textDecoration: "none" }}
                          className={styles.countrycode_ipute}
                        >
                          +91(In)
                        </Link> */}
                      {/* </div> */}
                    </div>
                    <div className="col-8">
                      <div className="row">
                        {/* <input
                          placeholder="Mobile Number"
                          className={styles.mobile_number_inpute}
                        /> */}
                        <input
                          placeholder="Full Name"
                          className={styles.inpute_email}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <span className={styles.inpute_title_pass}>Full Name</span>
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
