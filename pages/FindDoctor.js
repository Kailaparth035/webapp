import React from "react";
import Head from "next/head";
import Header from "../component/Header";
import styles from "../styles/findDoctor.module.css";
import Image from "next/image";

const FindDoctor = () => {
  return (
    <>
      <Head>
        <title>FindDoctor</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className="row">
        <div className={styles.top_div}>
          <h1 className={styles.h1_top_text}>Your home for health</h1>
          <h2 className={styles.find_book_text}>Find and Book</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              marginTop: 30,
            }}
            className={styles.searchbar_div}
          >
            <button className={styles.location_button}>
              <span>Location</span>
            </button>
            <div className={styles.search_div}>
              <Image
                src={require("../assets/Images/Search.png")}
                className={styles.seaech_Image}
              />
            </div>
            <input
              placeholder="Search Doctore"
              className={styles.search_inpute}
            />
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{ backgroundColor: "#E6E6E6", paddingTop: 50 }}
      >
        <div className="col-1"></div>
        <div className="col-5" style={{ marginLeft: 60,marginTop:60 }}>
          <div className="row">
            <p className={styles.paragraph_style}>
              Safety of your data is our top priority.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image src={require("../assets/Images/Green_Right.png")} />
              <p className={styles.check_item1}>Multi-level security checks</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: -10,
              }}
            >
              <Image src={require("../assets/Images/Green_Right.png")} />
              <p className={styles.check_item1}> Multiple data backups</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: -12,
              }}
            >
              <Image src={require("../assets/Images/Green_Right.png")} />
              <p className={styles.check_item1}>
                Stringent data privacy policies
              </p>
            </div>
            <button className={styles.read_more_button}>
              <span className={styles.read_more_text}>Read more </span>
            </button>
          </div>
        </div>
        <div className="col-4">
          <Image
            src={require("../assets/Images/Doctore_Image.png")}
            style={{ float: "right", marginRight: 60 }}
          />
        </div>
        <div className="col-1"></div>
      </div>
    </>
  );
};

export default FindDoctor;
