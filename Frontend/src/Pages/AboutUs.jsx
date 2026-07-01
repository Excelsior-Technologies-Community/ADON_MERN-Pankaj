import React, { useEffect, useState } from "react";
import AboutHero from "../Components/AboutComponents/AboutHero";
import WhoWeAre from "../Components/AboutComponents/WhoWeAre";
import Stats from "../Components/AboutComponents/Stats";
import MissionVision from "../Components/AboutComponents/MissionVision";
import WhyChoose from "../Components/AboutComponents/WhyChoose";
import Process from "../Components/AboutComponents/Process";
import TeamPreview from "../Components/AboutComponents/TeamPreview";
import CTA from "../Components/AboutComponents/CTA";
import axios from "axios";
import toast from "react-hot-toast";

function AboutUs() {
  const [loading, setLoading] = useState(false);
  const [about, setAbout] = useState(true);

  useEffect(() => {
    getAbout();
  }, []);

  const getAbout = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get("http://localhost:5000/api/about");

      setAbout(data.about);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load About");
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <div className="py-40 text-center text-3xl">Loading...</div>;
  }

  return (
    <>
      <AboutHero about={about} />

      <WhoWeAre about={about} />

      <Stats about={about} />
      <MissionVision about={about} />

      <WhyChoose />
      <Process />
      <TeamPreview />
      <CTA />
    </>
  );
}

export default AboutUs;
