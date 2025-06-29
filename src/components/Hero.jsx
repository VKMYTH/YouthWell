import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { fadeIn } from "../utilis/animationVariants";

const Hero = () => {
    return (
        <section className="bg-heroBg text-white flex items-center pt-28 md:h-screen" id="home">
            <div className='container mx-auto flex flex-col md:flex-row-reverse items-center justify-between p-8 overflow-y-hidden gap-12 h-full'>
                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="md:w-1/2 h-full"
                >
                    <img
                        src={heroImg}
                        alt="Hero"
                        className="w-full object-cover"
                    />
                </motion.div>

                <div
                    className="md:w-1/2"
                >
                    <motion.h1
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug">
                        Your Mind Matters. We're Here to Help.
                    </motion.h1>
                    <motion.p
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-lg mb-12 md:pr-8">
                        At YouthWell Digital Clinic, we believe no one should face their struggles alone. 
                        Whether you're feeling overwhelmed, anxious, or just need someone to talk to, 
                        our platform offers a safe, judgment-free space with real support that's designed specifically for teens and young adults. 
                        Access mental health resources, self-help tools, and compassionate care, all from the comfort of your own space.
                    </motion.p>
                    <motion.button
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="bg-blue-600 text-white py-3.5 px-8 font-medium rounded hover:bg-blue-700 flex gap-1 items-center"
                        onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                        >
                        <span>Get Started</span>
                        <IoArrowForwardCircleSharp className='size-6' />
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
