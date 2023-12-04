import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - ClubHub"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            
Welcome to our Club Hub, a bustling center where the heartbeat of our vibrant community comes to life through a myriad of exciting events. Each club brings its unique flair, offering everything from adrenaline-pumping sports competitions to captivating cultural showcases. Whether you're a sports enthusiast, an art lover, or someone seeking new experiences, there's something here for everyone.
            <p className="text-justify mt-2">
            At the heart of our Club Hub is a commitment to creating connections and fostering shared passions. Dive into the rich tapestry of events hosted by our clubs, and you'll discover not just activities but opportunities to forge lasting friendships and build a community that celebrates diversity and creativity. Join us on this journey of exploration, where every event is a chance to learn, connect, and revel in the collective spirit that defines our Club Hub.
            </p>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
