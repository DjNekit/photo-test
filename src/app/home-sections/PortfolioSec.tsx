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
        <Gallery images={[
          {
            id: '1',
            src: '/images/portfolio-img-1.png',
            alt: '',
            width: 200,
            height: 200,
          },
          {
            id: '2',
            src: '/images/portfolio-img-2.png',
            alt: '',
            width: 200,
            height: 200,
          },
          {
            id: '3',
            src: '/images/portfolio-img-3.png',
            alt: '',
            width: 200,
            height: 200,
          },
          {
            id: '4',
            src: '/images/portfolio-img-4.png',
            alt: '',
            width: 200,
            height: 200,
          },
          {
            id: '5',
            src: '/images/portfolio-img-5.png',
            alt: '',
            width: 200,
            height: 200,
          },
          {
            id: '6',
            src: '/images/portfolio-img-6.png',
            alt: '',
            width: 200,
            height: 200,
          },
          {
            id: '7',
            src: '/images/portfolio-img-13.jpg',
            alt: '',
            width: 200,
            height: 200,
          },
        ]}/> 
      </motion.div>
    </section>
  );
};

export default PortfolioSec;
