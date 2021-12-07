import React, { Component } from "react";
import styled from "styled-components";
import Clock from "./Clock";
import Slider from "react-slick";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
`;

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return <div {...props} />;
  }
}

export default class Responsive extends Component {
  /*  dummyData = [{
        deadline:"December, 30, 2021",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-1.jpg",
        previewImg: "./img/items/static-1.jpg",
        title: "Pinky Ocean",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-10.jpg",
        previewImg: "./img/items/static-2.jpg",
        title: "Deep Sea Phantasy",
        price: "0.06 ETH",
        bid: "1/22",
        likes: 80
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-11.jpg",
        previewImg: "./img/items/static-3.jpg",
        title: "Rainbow Style",
        price: "0.05 ETH",
        bid: "1/11",
        likes: 97
    },
    {
        deadline:"January, 1, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-12.jpg",
        previewImg: "./img/items/static-4.jpg",
        title: "Two Tigers",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./img/items/anim-4.webp",
        title: "The Truth",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"January, 15, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-2.jpg",
        previewImg: "./img/items/anim-2.webp",
        title: "Running Puppets",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-3.jpg",
        previewImg: "./img/items/anim-1.webp",
        title: "USA Wordmation",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-4.jpg",
        previewImg: "./img/items/anim-5.webp",
        title: "Loop Donut",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"January, 3, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-5.jpg",
        previewImg: "./img/items/anim-3.webp",
        title: "Lady Copter",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-7.jpg",
        previewImg: "./img/items/static-5.jpg",
        title: "Purple Planet",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-6.jpg",
        previewImg: "./img/items/anim-6.webp",
        title: "Oh Yeah!",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"January, 10, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-8.jpg",
        previewImg: "./img/items/anim-7.webp",
        title: "This is Our Story",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./img/items/static-6.jpg",
        title: "Pixel World",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline:"January, 10, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-12.jpg",
        previewImg: "./img/items/anim-8.webp",
        title: "I Believe I Can Fly",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    }]*/

  constructor(props) {
    super(props);
    this.state = {
      nfts: this.dummyData.slice(0, 8),
      height: 0
    };
    this.onImgLoad = this.onImgLoad.bind(this);
  }

  loadMore = () => {
    let nftState = this.state.nfts;
    let start = nftState.length;
    let end = nftState.length + 4;
    this.setState({
      nfts: [...nftState, ...this.dummyData.slice(start, end)]
    });
  };

  onImgLoad({ target: img }) {
    let currentHeight = this.state.height;
    if (currentHeight < img.offsetHeight) {
      this.setState({
        height: img.offsetHeight
      });
    }
  }
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
                    src="./img/collections/coll-1.jpg"
                    className="lazy img-fluid"
                    alt=""
                  />
                </span>
              </div>
              <div className="nft_coll_pp">
                <span onClick={() => window.open("/home", "_self")}>
                  <img
                    className="lazy"
                    src="./img/author/author-1.jpg"
                    alt=""
                  />
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
                    src="./img/collections/coll-2.jpg"
                    className="lazy img-fluid"
                    alt=""
                  />
                </span>
              </div>
              <div className="nft_coll_pp">
                <span onClick={() => window.open("/#", "_self")}>
                  <img
                    className="lazy"
                    src="./img/author/author-2.jpg"
                    alt=""
                  />
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
                    src="./img/collections/coll-3.jpg"
                    className="lazy img-fluid"
                    alt=""
                  />
                </span>
              </div>
              <div className="nft_coll_pp">
                <span onClick={() => window.open("/#", "_self")}>
                  <img
                    className="lazy"
                    src="./img/author/author-3.jpg"
                    alt=""
                  />
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
                    src="./img/collections/coll-4.jpg"
                    className="lazy img-fluid"
                    alt=""
                  />
                </span>
              </div>
              <div className="nft_coll_pp">
                <span onClick={() => window.open("/#", "_self")}>
                  <img
                    className="lazy"
                    src="./img/author/author-4.jpg"
                    alt=""
                  />
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
                    src="./img/collections/coll-5.jpg"
                    className="lazy img-fluid"
                    alt=""
                  />
                </span>
              </div>
              <div className="nft_coll_pp">
                <span onClick={() => window.open("/#", "_self")}>
                  <img
                    className="lazy"
                    src="./img/author/author-5.jpg"
                    alt=""
                  />
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
