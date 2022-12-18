import Image from "next/image";
import styles from "../styles/header.module.css";
import Head from "next/head";
const Header = () => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="row" style={{ paddingTop: 10, paddingBottom: 20 }}>
        <div className="col-2"></div>
        <div className="col-1">
          <Image
            src={require("../assets/Images/Header_Logo.png")}
            style={{ float: "right" }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className={styles.inpute_box_div}>
                  <Image
                    src={require("../assets/Images/Search.png")}
                    className={styles.searchbar_img}
                  />

                  <input
                    placeholder="Search for pets, products and more"
                    className={styles.searchbar_inpute}
                  />
                </div>
              </div>
            </div>
            {/* <div className="col-2"></div> */}
            <div className="col-6">
              <button className={styles.viewcard_button_div}>
                <Image src={require("../assets/Images/ViewCard.png")} />
                <span className={styles.viewCars_text}>View Card</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <hr className={styles.border_hr} />
    </div>
  );
};

export default Header;
