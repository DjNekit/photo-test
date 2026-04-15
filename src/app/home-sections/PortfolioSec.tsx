"use client";
import React from "react";
import Title from "@/components/Title";
import { portfolioSectionItems } from "@/data/data";
import PortfolioCard from "@/components/PortfolioCard";

//import motion
import { motion } from "motion/react";
import { staggerContainer } from "@/motion/animations";
import Gallery from '@/components/Gallery';
import Divider from '@/components/Divider';
import { portfolioImages } from '@/config/portfolio';

const PortfolioSec = () => {
  return (
    <section className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <Title
          title="Portfolio"
          subtitle="Explore My photography work."
        />
        <Divider />
        <Gallery images={portfolioImages}/> 
      </motion.div>
    </section>
  );
};

export default PortfolioSec;
