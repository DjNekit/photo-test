"use client";
import React from "react";
import MarqueeSec from "./MarqueeSec";
import Button from "./Button";
import { footerList } from "@/data/data";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

//import motion
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/motion/animations";

const Footer = () => {
  return (
    <footer>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <MarqueeSec />

        <div className="border-t border-neutral-900">
          <div className="container py-6">
            <motion.div
              variants={fadeInUp}
              className="flex items-center flex-wrap gap-3 justify-end"
            >
              <SocialIcons />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
