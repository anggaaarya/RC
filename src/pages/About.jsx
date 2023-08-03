import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="Tentang Kami" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">GoRental</h2>

                <p className="section__description">
                  GoRental merupakan salah satu rental mobil terbaik di Bogor
                  yang menyediakan berbagai jenis mobil yang siap disewakan
                  dengan biaya rental yang terjangkau.
                </p>

                <p className="section__description">
                  GoRental menawarkan banyak pilihan mobil untuk disewakan,
                  mulai dari mobil keluarga, sedan, hingga mobil premium. Semua
                  armada mobil tentunya mobil berkualitas yang selalu terawat
                  dan siap digunakan kapanpun dan kemanapun. Kami juga didukung
                  driver handal dan profesional yang siap mengantarkan Anda ke
                  tujuan dengan nyaman dan aman. Untuk kebutuhan rental Anda,
                  percayakan saja kepada kami GoRental
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Untuk Info lebih?</h6>
                    <h4>+62813191496063</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <BecomeDriverSection /> */}

      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section> */}
    </Helmet>
  );
};

export default About;
