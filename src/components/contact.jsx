import { useState } from "react";
import React from "react";
import { Modal } from "antd";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const handleSuccessModalClose = () => {
    setSuccessModalVisible(false);
    props.onClose();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    // Create a new FormData object and append the form data
    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("Message", message);

    // Send the form data to the specified URL
    fetch(
      "https://script.google.com/macros/s/AKfycbzfWr0zcd-D1CfTxl_1lfp3gaVKAfCfxrNqmjsIW7vOJQPKQQ8OPsmy-dTnjfN5lzxN/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        clearState();
        setSuccessModalVisible(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <div id="footer">
          <div id="contact">
            <div className="container">
              <div className="col-md-8">
                <div className="row">
                  <div className="section-title">
                    <h2>CÔNG TY CỔ PHẦN WINPI HOLDING</h2>
                    <p>
                      Kết nối ngay với Winpi Branding
                    </p>
                  </div>
                  <form
                    name="sentMessage"
                    className="sentMessage"
                    onSubmit={handleSubmit}
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Họ và tên*"
                            required
                            value={name}
                            onChange={handleChange}
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Địa chỉ Email*"
                            required
                            value={email}
                            onChange={handleChange}
                          />
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows="4"
                        placeholder="Yêu cầu*"
                        required
                        value={message}
                        onChange={handleChange}
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                    <div id="success"></div>
                    <div className="form-group-submit">
                      <button type="submit" className="btn btn-custom btn-submit btn-lg">
                        Gửi yêu cầu
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-3 col-md-offset-1 contact-info">
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-map-marker"></i> Address
                    </span>
                    {props.data ? props.data.address : "loading"}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-phone"></i> Phone
                    </span>{" "}
                    {props.data ? props.data.phone : "loading"}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-envelope-o"></i> Email
                    </span>{" "}
                    {props.data ? props.data.email : "loading"}
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="social">
                    <ul>
                      Kết nối với Winpi Branding
                      <li>
                        <a href={props.data ? props.data.facebook : "/"}>
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={successModalVisible}
        onCancel={handleSuccessModalClose}
        footer={null}
        destroyOnClose={true}
      >
        <div className="success-modal-content">
          <h3>Đăng ký thành công!</h3>
          <p>Cảm ơn bạn vì đã gửi yêu cầu. Chúng tôi sẽ liên hệ lại sớm nhất</p>
          <button
            type="button"
            className="btn btn-custom btn-lg"
            onClick={handleSuccessModalClose}
          >
            Đóng
          </button>
        </div>
      </Modal>
    </>
  );
};
