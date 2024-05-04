import React, { useState, useEffect } from "react";
import "../css/Home.css";
import Product from "../All Product/Product1/Product";
import Product2 from "../All Product/Product2/Product";
import Product3 from "../All Product/Product3/Product";
import Product4 from "../All Product/Product4/Product";
import Product5 from "../All Product/Product5/Product";
import Product6 from "../All Product/Product6/Product";
import Product7 from "../All Product/Product7/Product";
import Product8 from "../All Product/Product8/Product";
import Product9 from "../All Product/Product9/Product";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://m.media-amazon.com/images/I/717RUPA1bDL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71j8damPo5L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61EmOCMKRxL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71glVo8PM0L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg",
  ];

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000); // Change 3000 to the desired interval in milliseconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImage]);

  return (
    <div className="home">
      <div className="home__container">
        <div className="image__container">
          <Link to="https://github.com/lightdarkmaster"><img className="home__image" src={images[currentImage]} alt="home" /></Link>
        </div>

        <div className="home__row">
          <Product />
          <Product2 />
          <Product3 />
          <Product5 />
        </div>

        <div className="home__row">
          <Product4 />
          <Product6 />
          <Product7 />
        </div>

        <div className="home__row">
          <Product9
            title="Oral-B CrossAction All In One Toothbrush, Soft, Deep Plaque Removal, 4 count"
            price={299.0}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v10._SY304_CB573698005_.jpg"
            rating={5}
          />

          <Product9
            title="Amazon Basics Easy Grip Workout Dumbbell, Neoprene Coated, Various Sets and Weights available"
            price={8999.0}
            image="https://m.media-amazon.com/images/I/81Y26toqdTL._AC_SY200_.jpg"
            rating={4}
          />

          <Product9
            title="Watch Ultra 2 GPS + Cellular 49mm Titanium Case with Blue/Black Trail Loop - M/L with AppleCare+ (2 Years)"
            price={48987}
            image="https://m.media-amazon.com/images/I/71yKLO4EBbL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />

          <Product9
            title="Galaxy S23 Ultra 5G SM-S918B/DS 256GB 12GB RAM, 200 MP Camera, NGP Wireless Charger Included – Green"
            price={89987}
            image="https://m.media-amazon.com/images/I/71lMeBh52wL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product8 />
        </div>
      </div>
    </div>
  );
}

export default Home;