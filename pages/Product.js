import Head from "next/head";
import Header from "../component/Header";
import Image from "next/image";
import styles from "../styles/product.module.css";
import { product_details, browser_pet_product } from "../Constant/Array";

const Product = () => {
  return (
    <>
      <Head>
        <title>Product</title>
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
      <div style={{ marginBottom: -17 }}>
        <Header />
      </div>
      {product_details.map((item, index) => {
        return (
          <>
            {index === 1 ? (
              <div
                className="row"
                style={{
                  backgroundColor: "#EDB506",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="col-1">
                  <button
                    // onClick={() => setCurrentSlider(index, "Previous")}
                    style={{
                      mixBlendMode: "multiply",
                      backgroundColor: "white",
                      borderWidth: 0,
                      marginLeft: 40,
                    }}
                  >
                    <Image src={require("../assets/Images/Left.png")} />
                  </button>
                </div>
                <div
                  className="col-7"
                  style={{
                    paddingTop: 50,
                    paddingBottom: 50,
                    paddingRight: 450,
                  }}
                >
                  <span className={styles.title_here_text}>{item.name}</span>
                  <br />
                  <p className={styles.subtitle_text}>{item.sub_title}</p>
                </div>
                <div className="col-3">
                  <Image src={item.img} />
                </div>
                <div className="col-1">
                  <button
                    // onClick={() => setCurrentSlider(index, "Previous")}
                    style={{
                      mixBlendMode: "multiply",
                      backgroundColor: "white",
                      borderWidth: 0,
                      marginLeft: 10,
                    }}
                  >
                    <Image src={require("../assets/Images/Right.png")} />
                  </button>
                </div>
              </div>
            ) : null}
          </>
        );
      })}

      <div className="row" style={{ marginTop: 40 }}>
        <div className="col-1"></div>
        <div className="col-10">
          <span className={styles.browser_text}>Browse pet and products</span>
        </div>
        <div className="col-1"></div>
      </div>

      {browser_pet_product.map((outItem, outIndex) => {
        return (
          <>
            <div className="row" style={{ marginTop: 10, marginBottom: 10 }}>
              <div className="col-1"></div>
              <div className="col-10">
                <span className={styles.outerItem_title}>{outItem.name}</span>
              </div>
              <div className="col-1"></div>
            </div>
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <div className="row">
                  {outItem.sub_array.map((inItem) => {
                    return (
                      <div className="col-3">
                        <div className={styles.backgroundimage_div}>
                          <Image
                            src={inItem.img}
                            className={styles.image_product}
                          />
                        </div>
                        <span>{inItem.name}</span>
                        <span>{inItem.subtitle}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-1"></div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default Product;
