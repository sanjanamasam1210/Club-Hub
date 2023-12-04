import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
          Reach out to us anytime. We're here to assist you with any inquiries, concerns, or feedback you may have.
          </p>
          <p className="mt-3">
            <BiMailSend /> : sanjanamasam1210@gmail.com | paduruakshayareddy@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 9398001023 | 99494 33335
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
