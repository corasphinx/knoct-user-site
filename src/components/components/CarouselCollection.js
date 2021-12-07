import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return <div {...props} />;
  }
}

export default class Responsive extends Component {
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };
    return (
      <div className="nft">
        <Slider {...settings}>
          <CustomSlide className="itm" index={1}>
            <div className="nft_coll">
              <div className="nft_wrap">
                <span>
                  <img
                    src="./img/KnoctLogo.png"
                    className="lazy img-fluid"
                    alt=""
                  />
                </span>
              </div>
              <div className="nft_coll_pp">
                <span onClick={() => window.open("/home", "_self")}>
                  <img className="lazy" src="./img/meta.png" alt="" />
                </span>
                <i className="fa fa-check" />
              </div>
              <div className="nft_coll_info">
                <span onClick={() => window.open("/home", "_self")}>
                  <h4>Meta</h4>
                </span>
                <span>id: 127187</span>
                <div>
                  <span>Require Update</span>
                </div>
              </div>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={2}>
            <div className="nft_coll">
              <div className="nft_wrap">
                <span>
                  <img
                    src="./img/KnoctLogo.png"
                    className="lazy img-fluid"
                    alt=""
                  />
                </span>
              </div>
              <div className="nft_coll_pp">
                <span onClick={() => window.open("/#", "_self")}>
                  <img className="lazy" src="./img/discord.jpg" alt="" />
                </span>
                <i className="fa fa-check" />
              </div>
              <div className="nft_coll_info">
                <span onClick={() => window.open("/#", "_self")}>
                  <h4>Discord</h4>
                </span>
                <span>id: wn2123fe</span>
              </div>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={3}>
            <div className="nft_coll">
              <div className="nft_wrap">
                <span>
                  <img
                    src="./img/KnoctLogo.png"
                    className="lazy img-fluid"
                    alt=""
                  />
                </span>
              </div>
              <div className="nft_coll_pp">
                <span onClick={() => window.open("/#", "_self")}>
                  <img className="lazy" src="./img/snapchat.jpg" alt="" />
                </span>
                <i className="fa fa-check" />
              </div>
              <div className="nft_coll_info">
                <span onClick={() => window.open("/#", "_self")}>
                  <h4>Snapchat</h4>
                </span>
                <span>id: 142323</span>
              </div>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={4}>
            <div className="nft_coll">
              <div className="nft_wrap">
                <span>
                  <img
                    src="./img/KnoctLogo.png"
                    className="lazy img-fluid"
                    alt=""
                  />
                </span>
              </div>
              <div className="nft_coll_pp">
                <span onClick={() => window.open("/#", "_self")}>
                  <img className="lazy" src="./img/instagram.png" alt="" />
                </span>
                <i className="fa fa-check" />
              </div>
              <div className="nft_coll_info">
                <span onClick={() => window.open("/#", "_self")}>
                  <h4>Instagram</h4>
                </span>
                <span>id: 121323</span>
              </div>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={5}>
            <div className="nft_coll">
              <div className="nft_wrap">
                <span>
                  <img
                    src="./img/KnoctLogo.png"
                    className="lazy img-fluid"
                    alt=""
                  />
                </span>
              </div>
              <div className="nft_coll_pp">
                <span onClick={() => window.open("/#", "_self")}>
                  <img className="lazy" src="./img/telegram.png" alt="" />
                </span>
                <i className="fa fa-check" />
              </div>
              <div className="nft_coll_info">
                <span onClick={() => window.open("/#", "_self")}>
                  <h4>Telegram</h4>
                </span>
                <span>id: v2312</span>
              </div>
            </div>
          </CustomSlide>

          {/* <CustomSlide className="itm" index={6}>
            <div className="nft_coll">
              <div className="nft_wrap">
                <span>
                  <img
                    src="./img/collections/coll-6.jpg"
                    className="lazy img-fluid"
                    alt=""
                  />
                </span>
              </div>
              <div className="nft_coll_pp">
                <span onClick={() => window.open("/#", "_self")}>
                  <img
                    className="lazy"
                    src="./img/author/author-6.jpg"
                    alt=""
                  />
                </span>
                <i className="fa fa-check" />
              </div>
              <div className="nft_coll_info">
                <span onClick={() => window.open("/#", "_self")}>
                  <h4>Papercut</h4>
                </span>
                <span>ERC-42</span>
              </div>
            </div>
          </CustomSlide>*/}
        </Slider>
      </div>
    );
  }
}
