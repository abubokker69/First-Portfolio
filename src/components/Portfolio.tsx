import "../styles/__Portfolio.scss";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { FaWindowClose } from "react-icons/fa";
import { navData } from "../data";
import { cardData } from "../data";
import { template } from "../data";
import { review } from "../data";
import logo from "../assets/icons/Subtract.svg";
import faccebook from "../assets/icons/Facebook - Negative.svg";
import twiter from "../assets/icons/Twitter - Negative.svg";
import instagram from "../assets/icons/Instagram - Negative.svg";
import linkedin from "../assets/icons/LinkedIn - Negative.svg";
import man1 from "../assets/images/Group 2.svg";
import man2 from "../assets/images/Group 7.svg";
import { TypeAnimation } from "react-type-animation";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Portfolio: React.FC = () => {
  const [nav, setNav] = useState(false);
  const [one, setOne] = useState<number>(80);
  const [two, setTwo] = useState<number>(95);
  const [three, setThree] = useState<number>(85);
  const [four, setFour] = useState<number>(50);
  return (
    <>
      <div className="container-wrap">
        <header>
          <div className="container-port">
            <div className="logo">
              <img src={logo} alt="" />
              <h1>
                <span>A</span>bu Bokker
              </h1>
            </div>
            <ul>
              {navData.map((data) => {
                return <li key={data.id}>{data.name}</li>;
              })}
              <button>Download CV</button>
            </ul>
            <div onClick={() => setNav(!nav)} className="menuicon">
              {nav ? <FaWindowClose size="30" /> : <HiMenu size="30" />}
            </div>
          </div>
          {nav && (
            <ul className="smallmenu">
              {navData.map((data) => {
                return <li key={data.id}>{data.name}</li>;
              })}
              <button>Download CV</button>
            </ul>
          )}
        </header>
        <section className="section-one">
          <div>
            <h5>Hi I am</h5>
            <h3>Muhammad Umair</h3>
            <h1>
              <TypeAnimation
                sequence={[
                  "UI & UX",
                  500,
                  "UI & UX", //  Continuing previous Text
                  500,
                  "UI & UX",
                  500,
                  "UI & UX",
                  500,
                  "UI & UX",
                  500,
                  "",
                  500,
                ]}
                style={{ fontSize: "1em" }}
                repeat={Infinity}
              />
            </h1>
            <h2>Designer</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              adipisci fuga aliquam quis corporis. Error recusandae deserunt
              ducimus officia facilis illo, ea placeat voluptatibus suscipit,
              quos, quasi harum repellat omnis?
            </p>
            <button>Hire Me</button>
          </div>
          <div className="right-one">
            <img src={man1} alt="" />
            <ul>
              <li>
                <img src={faccebook} alt="" />
              </li>
              <li>
                <img src={twiter} alt="" />
              </li>
              <li>
                <img src={instagram} alt="" />
              </li>
              <li>
                <img src={linkedin} alt="" />
              </li>
            </ul>
          </div>
        </section>
        <section className="section-two">
          <div className="left-two">
            <img src={man2} alt="" />
          </div>
          <div className="right-two">
            <h1>About Me </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra
            </p>
            <h5>UX</h5>
            <input type="range" name="" id="" value={one} />
            <h5>Website Design</h5>
            <input type="range" name="" id="" value={two} />
            <h5>App Design </h5>
            <input type="range" name="" id="" value={three} />
            <h5>Graphic Design </h5>
            <input type="range" name="" id="" value={four} />
          </div>
        </section>
        <section className="section-three">
          <div className="service">
            <h1>Services</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium
            </p>
          </div>
          <div className="service-wrap">
            {cardData.map((data, i) => {
              return (
                <div key={i} className="service-card">
                  <img src={data.img} alt="" />
                  <h2>{data.name}</h2>
                  <p>{data.para}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="section-four">
          <div className="demo">
            <h1>My Projects</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
              mauris est risus lectus. Phasellus consequat urna tellus
            </p>
          </div>
          <div className="button">
            <button className="button" id="all">All</button>
            <button className="button" id="ux">UI/UX</button>
            <button className="button" id="web">Web Design</button>
            <button className="button" id="app">App Design</button>
            <button className="button" id="graphics">Graphic Design</button>
          </div>
          <div className="template-wrap">
            {template.map((data, i) => {
              return (
                <div key={i} className="template-card  all ">
                  <img src={data.img} alt="" />
                  <h2>{data.name}</h2>
                  <p>{data.para}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="section-five">
          <div className="review">
            <h1>Testimonials</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {review.map((data, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="review-wrap">
                    <div className="images">
                      <img src={data.img} alt="" />
                    </div>
                    <div className="review-card">
                      <p>{data.para}</p>
                      <h2>{data.name}</h2>
                      <h3>{data.ceo}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
        <section className="section-six">
          <div className="contact">
            <h1>Lets Design Together</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium
            </p>
          </div>
          <div className="contact-btn">
            <input type="text" name="" id="" placeholder="Enter your email" />
            <button>Contact Me</button>
          </div>
        </section>
      </div>
      <footer className="footer">
        <div className="footer-logo">
          <img src={logo} alt="" />
          <h1>
            <span>A</span>bu Bokker
          </h1>
        </div>
        <ul className="footer-menu">
          {navData.map((data) => {
            return <li key={data.id}>{data.name}</li>;
          })}
        </ul>
        <ul className="footer-social">
          <li>
            <img src={faccebook} alt="" />
          </li>
          <li>
            <img src={twiter} alt="" />
          </li>
          <li>
            <img src={instagram} alt="" />
          </li>
          <li>
            <img src={linkedin} alt="" />
          </li>
        </ul>
        <p>
          © 2023 <span>Mumair</span> All Rights Reserved , Inc.
        </p>
      </footer>
    </>
  );
};

export default Portfolio;
