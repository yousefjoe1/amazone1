import React, { useContext } from "react";
import { TheConext } from "../../App";
import Product from "../Product/Product";
import "./home.css";

const Home = (props) => {
  let TheCons = useContext(TheConext);
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-img"
          src="https://www.arageek.com/wp-content/uploads/2019/04/nstatt_181019_3042_8781.0.jpg"
          alt="the-logo"
        />
        <div className="home-row">
          <Product
            func={props.func}
            id={1}
            title="the title :Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, obcaecati."
            price={19.22}
            src={
              "https://assets-prd.ignimgs.com/2021/09/28/screenshot-215-1632854263562.png"
            }
            rating={4}
          />
          <Product
            func={props.func}
            id={2}
            title="the title :Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, obcaecati."
            price={23.22}
            src={
              "https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/12/Echo-Show-15-vs-Echo-Show-10-920x613.jpeg"
            }
            rating={2}
          />
          <Product
            func={props.func}
            id={3}
            title="Hynix Laptop 2GB DDR2 RAM, Mehta Infocom Solution | ID: 11466380112"
            price={22.22}
            src={
              "https://www.bhphotovideo.com/images/images2500x2500/asus_dual_gtx1070_8g_geforce_gtx_1070_8gb_1276902.jpg"
            }
            rating={3}
          />
        </div>

        <div className="home-row">
          <Product
            func={props.func}
            id={4}
            title="the title :Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, obcaecati."
            price={23.22}
            src={
              "https://static.toiimg.com/thumb/msid-71349166,width-1070,height-580,imgsize-168723,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
            }
            rating={2}
          />
          <Product
            func={props.func}
            id={5}
            title="the title :Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, obcaecati."
            price={22.22}
            src={
              "https://corporate.oriflame.com/about-oriflame/product-philosophy/-/media/2E279B139BD74617958EDE0360D641FC.ashx"
            }
            rating={3}
          />
        </div>

        <div className="home-row">
          <Product
            func={props.func}
            id={6}
            title="the title :Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, obcaecati."
            price={22.22}
            src={
              "https://www.zon.tools/wp-content/uploads/3D-ImagesInfographics.jpg"
            }
            rating={4}
          />
          <Product
            func={props.func}
            id={7}
            title="the title :Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, obcaecati."
            price={35.56}
            src={
              "https://images.hindustantimes.com/tech/rf/image_size_960x540/HT/p2/2019/12/26/Pictures/_d855df7a-27a5-11ea-a3f7-989b44b77166.png"
            }
            rating={5}
          />
          <Product
            func={props.func}
            id={8}
            title="the title :Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, obcaecati."
            price={42.66}
            src={
              "https://media1.popsugar-assets.com/files/thumbor/i4WFRZjRR0ouOZbClIePLtJPGa4/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/08/10/123/n/1922441/6e99c5815f31faf3e16fc4.15276199_/i/coolest-amazon-products-found-on-tiktok-2020.jpg"
            }
            rating={2}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
