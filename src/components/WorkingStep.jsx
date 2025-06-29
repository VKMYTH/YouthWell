import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/animationVariants';

const WorkingStep = () => {
  return (
    <div className='relative bg-cover bg-center bg-working-img py-12'>
      <div className='absolute inset-0 bg-heroBg bg-opacity-90'></div>
      <div className='relative container mx-auto px-8 py-20'>
        <motion.div
         variants={fadeIn("up", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.7 }}
          className='text-center text-white mb-20'
        >
          <h2 className='text-3xl font-bold mb-4'>About YouthWell</h2>
          <p className='text-lg md:w-1/2 mx-auto'>
            At YouthWell, we believe that everyone deserves a safe space to grow, heal, and thrive. We’re a digital mental health clinic designed for teens and young adults, offering personalized tools and resources to help you navigate life’s challenges with confidence.
          </p>
        </motion.div>
        
        <div className='flex flex-col md:w-4/5 mx-auto md:flex-row gap-8'>
          <motion.div
           variants={fadeIn("up", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.7 }}
            className='relative bg-white text-center rounded-lg p-6 flex-1'
          >
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center text-xl font-bold'>
              1
            </div>
            <h3 className='text-lg font-medium mt-8'>Accessibility</h3>
            <p className='my-2'>
              Mental health support that fits into your life, not the other way around.
            </p>
          </motion.div>
          
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='relative bg-white text-center rounded-lg p-6 flex-1'
          >
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center text-xl font-bold'>
              2
            </div>
            <h3 className='text-lg font-medium mt-8'>Empowerment</h3>
            <p className='my-2'>
              Tools that put you in control of your wellness journey.
            </p>
          </motion.div>
          
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='relative bg-white text-center rounded-lg p-6 flex-1'
          >
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center text-xl font-bold'>
              3
            </div>
            <h3 className='text-lg font-medium mt-8'>Community</h3>
            <p className='my-2'>
              A growing network of youth who believe in mental strength through self-awareness and support.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorkingStep;
