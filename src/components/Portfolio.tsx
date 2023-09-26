import "../styles/__Portfolio.scss";
import { useEffect, useState } from "react";
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
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio: React.FC = () => {
  const [nav, setNav] = useState(false);
  const [one, setOne] = useState<number>(80);
  const [two, setTwo] = useState<number>(95);
  const [three, setThree] = useState<number>(85);
  const [four, setFour] = useState<number>(50);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const tabs_title = document.querySelectorAll(".tab-title");

    const toggleTab = (cls: string) => {
      document.querySelectorAll(".tabs .all").forEach((item) => {
        // @ts-ignore
        item.style.display = "none";
      });
      document.querySelectorAll(`.tabs .all.${cls}`).forEach((item) => {
        // @ts-ignore
        item.style.display = "block";
      });
    };

    tabs_title.forEach((el) => {
      el.addEventListener("click", () => {
        toggleTab(el.id);
      });
    });
  }, []);

  return (
    <>
      <div className="container-wrap" id="home">
        <header>
          <div className="container-port" data-aos="zoom-in">
            <div className="logo">
              <img src={logo} alt="" />
              <h1>
                <span>A</span>bu Bokker
              </h1>
            </div>
            <ul>
              {navData.map((data) => {
                return (
                  <li key={data.id}>
                    <a href={data.navigate}>{data.name}</a>
                  </li>
                );
              })}
              <button>
                <a href="/Abu Bokker CV.docx.pdf" download>
                  Download Me
                </a>
              </button>
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
              <button>
                <a href="file.txt" download>
                  Download Me
                </a>
              </button>
            </ul>
          )}
        </header>
        <section className="section-one">
          <div data-aos="fade-right">
            <h5>Hi I am</h5>
            <h3>Muhammad Bokker Molla</h3>
            <h1>
              <TypeAnimation
                sequence={[
                  "Web & App",
                  500,
                  "Web & App", //  Continuing previous Text
                  500,
                  "Web & App",
                  500,
                  "Web & App",
                  500,
                  "Web & App",
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
          <div className="right-one" data-aos="fade-left">
            <img src={man1} alt="" />
            <ul>
              <li>
                <a href="https://www.facebook.com/md.abubokker.69/">
                  <img src={faccebook} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={twiter} alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/abu_bokker69/">
                  <img src={instagram} alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/md-%C3%A4bu-bokker-8a9342180/">
                  <img src={linkedin} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="section-two" id="about">
          <div className="left-two" data-aos="fade-right">
            <img src={man2} alt="" />
          </div>
          <div className="right-two" data-aos="fade-left">
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
        <section className="section-three" id="service">
          <div className="service" data-aos="zoom-in">
            <h1>Services</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium
            </p>
          </div>
          <div className="service-wrap" data-aos="zoom-in-up">
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
        <section className="section-four" id="project" data-aos="zoom-in-down">
          <div className="demo">
            <h1>My Projects</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
              mauris est risus lectus. Phasellus consequat urna tellus
            </p>
          </div>
          <div className="tabs" data-aos="zoom-in-down">
            <div className="tabs-header">
              <div className="button">
                <button className="tab-title button" id="all">
                  All
                </button>
                <button className="tab-title button" id="ux">
                  UI/UX
                </button>
                <button className="tab-title button" id="wdesign">
                  Web Design
                </button>
                <button className="tab-title button" id="app-design">
                  App Design
                </button>
                <button className="tab-title button" id="graphics">
                  Graphic Design
                </button>
              </div>

              <div className="tabs-content template-wrap">
                {template.map((item) => (
                  <div
                    key={item.id}
                    className={`template-card all ${item.category}`}
                  >
                    <img src={item.img} alt="" />
                    <h2>{item.name}</h2>
                    <p>{item.para}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          className="section-five"
          id="tesmonials"
          data-aos="fade-down-left"
        >
          <div className="review" data-aos="zoom-in">
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
            data-aos="flip-up"
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
        <section className="section-six" id="contact">
          <div className="contact" data-aos="zoom-in">
            <h1>Lets Design Together</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium
            </p>
          </div>
          <div className="contact-btn" data-aos="fade-left">
            <input type="text" name="" id="" placeholder="Enter your email" />
            <button>Contact Me</button>
          </div>
        </section>
      </div>
      <footer className="footer" data-aos="zoom-in-up">
        <div className="footer-logo">
          <img src={logo} alt="" />
          <h1>
            <span>A</span>bu Bokker
          </h1>
        </div>
        <ul className="footer-menu">
          {navData.map((data) => {
            return (
              <li key={data.id}>
                {" "}
                <a href={data.navigate}>{data.name}</a>
              </li>
            );
          })}
        </ul>
        <ul className="footer-social">
          <li>
            <a href="https://www.facebook.com/md.abubokker.69/">
              <img src={faccebook} alt="" />
            </a>
          </li>
          <li>
            <img src={twiter} alt="" />
          </li>
          <li>
            <a href="https://www.instagram.com/abu_bokker69/">
              <img src={instagram} alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/md-%C3%A4bu-bokker-8a9342180/">
              <img src={linkedin} alt="" />
            </a>
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
