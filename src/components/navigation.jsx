import React from "react";
import { useState } from "react";
import { ContactModal } from "./contactModal";


export const Navigation = (props) => {
  const [modalOpen, setModalOpen] = useState(false); // Add modalOpen state
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <img src="img/logo-winpi.png" className="navbar-brand page-scroll" alt="" href="#page-top" />{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <img src="img/logo-winpi.png" className="page-scroll img-logo" alt="" href="#page-top" />{" "}
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#header" className="page-scroll">
                Chúng tôi làm gì?
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Về chúng tôi
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
                Dự án
              </a>
            </li>
            <li>
              <button onClick={() => { setModalOpen(true) }} className="btn btn-custom-lh btn-lg">
                Liên hệ
              </button>
            </li>
          </ul>
        </div>
      </div>
      {modalOpen && (
        <ContactModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        ></ContactModal>
      )}
    </nav>
  );
};
