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
              // backgroundColor: "white",
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
                // style={{ backgroundColor: "white" }}
                className={styles.seaech_Image}
              />
            </div>
            <input placeholder="Search" className={styles.search_inpute} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FindDoctor;
