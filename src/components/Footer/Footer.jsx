import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "Tentang Kami",
  },

  // {
  //   path: "#",
  //   display: "Privacy Policy",
  // },

  {
    path: "/cars",
    display: "Pilihan Mobil",
  },
  // {
  //   path: "/blogs",
  //   display: "Blog",
  // },

  {
    path: "/contact",
    display: "Kontak",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="6" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    Go <br /> Rental
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Kami adalah penyedia jasa rental mobil terpercaya, dan menyediakan
              berbagai macam jenis mobil terlengkap dan terbaru yang dapat
              disesuaikan dengan kebutuhan pelanggan. Dengan harga sewa yang
              terjangkau, Anda dapat menyewa mobil-mobil terbaru.
            </p>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4 ">
              <h5 className="footer__link-title">Link</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Kantor Pusat</h5>
              <p className="office__info">Kedung Halang 31, Bogor, Indonesia</p>
              <p className="office__info">Phone: +62 81319146063</p>

              <p className="office__info">Email: anggaar3112@gmail.com</p>

              <p className="office__info">Waktu Buka: 10.00 - 19.00</p>
            </div>
          </Col>

          {/* <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col> */}

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                TheSecretStuff. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
