import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  // {
  //   url: "#",
  //   icon: "ri-facebook-line",
  // },
  {
    url: "https://www.instagram.com/anggaaarya",
    icon: "ri-instagram-line",
  },
  // {
  //   url: "#",
  //   icon: "ri-linkedin-line",
  // },
  {
    url: "https://twitter.com/thesecretstufff",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  const sentMail = (event) => {
    event.preventDefault();
    const form = event.target;
    window.open(
      `mailto:anggaar3112@gmail.com?subject=${
        form.subject.value
      }&body=${`hi im from ${form.mail.value}, %0D%0D ${form.body.value}
      `}`
    );
  };

  return (
    <Helmet title="Contact">
      <CommonSection title="Kontak" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Untuk Menghubungi Kami</h6>

              <Form onSubmit={(event) => sentMail(event)}>
                <FormGroup className="contact__form">
                  <Input placeholder="Nama" type="text" name="subject" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" name="mail" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    name="body"
                    placeholder="Kirim Pesan"
                    className="textarea"></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Informasi Kontak</h6>
                <p className="section__description mb-0">
                  Kedung Halang 31, Bogor, Indonesia
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+6281319146063</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">
                    anggaaarya@gmail.com
                  </p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <a
                      href={item.url}
                      key={index}
                      target="_blank"
                      className="social__link-icon">
                      <i class={item.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
