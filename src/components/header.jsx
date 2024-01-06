import React, { useState } from "react";
import { CheckCircleOutlined } from '@ant-design/icons';
import { ContactModal } from "./contactModal";

export const Header = (props) => {
  const [modalOpen, setModalOpen] = useState(false); // Add modalOpen state
  return (
    <header id="header" className="header-title">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-6 intro-text">
                <p className="so-huu">
                  {props.data ? props.data.title : "Loading"}
                </p>
                <p className="paragraph-container">
                  <CheckCircleOutlined /> {props.data ? props.data.paragraph : "Loading"}
                </p>
                <p className="paragraph-container">
                  <CheckCircleOutlined /> {props.data ? props.data.paragraph2 : "Loading"}
                </p>
                <p className="paragraph-container">
                  <CheckCircleOutlined /> {props.data ? props.data.paragraph3 : "Loading"}
                </p>
                <p className="paragraph-container">
                  <CheckCircleOutlined /> {props.data ? props.data.paragraph4 : "Loading"}
                </p>
                <p className="paragraph-container">
                  <CheckCircleOutlined /> {props.data ? props.data.paragraph5 : "Loading"}
                </p>
                <button onClick={() => { setModalOpen(true) }} className="btn btn-custom btn-lg">
                  Tư vấn ngay
                </button>
              </div>
              <div className="col-md-6 intro-8000"></div>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <ContactModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        ></ContactModal>
      )}
    </header>
  );
};