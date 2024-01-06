import { Modal } from "antd";
import { useState } from "react";
import React from "react";

const initialState = {
    name: "",
    email: "",
    message: "",
};

export const ContactModal = (props) => {
    const [{ name, email, message }, setState] = useState(initialState);
    const [successModalVisible, setSuccessModalVisible] = useState(false);

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

    const handleSuccessModalClose = () => {
        setSuccessModalVisible(false);
        props.onClose();
    };

    return (
        <>
            <Modal
                open={props.open}
                onCancel={props.onClose}
                footer={null}
                destroyOnClose={true}
                className="lien-he"
            >
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2>Kết nối ngay với Winpi Branding</h2>
                            <p>
                                Với bề dày kinh nghiệm uy tín, dội ngũ chuyên gia của chúng tôi đã sẵn sàng cùng bạn thiết kế nhận diện thương hiệu tuyệt vời
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
            </Modal>
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