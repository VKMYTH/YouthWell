import React from 'react';
import { BsFillChatQuoteFill } from 'react-icons/bs';
import review1 from '../assets/review1.webp';
import review2 from '../assets/review2.webp';
import {motion} from "framer-motion"

import {fadeIn} from "../utilis/animationVariants"

const testimonials = [
  {
    name: 'Emily R.',
    location: 'Austin, TX',
    review: 'YouthWell helped me feel seen when I was going through anxiety. The self-assessments gave me clarity, and the chatbot is always there when I need support. It honestly feels like someone understands me.',
    image: review1,
  },
  {
    name: 'Tyler J.',
    location: 'Seattle, WA',
    review: 'As a high school student, balancing everything felt impossible. The AI assistant made it easy to get quick advice and resources without judgment. I feel less alone, and way more empowered.',
    image: review2,
  },
];


const Testimonial = () => {
  return (
    <div className='bg-[#f7f8fc] py-12' id='testimonial'>
      <div className='container mx-auto px-8 pt-20 pb-12'>
        <motion.div 
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className='text-center mb-20'>
          <h2 className='text-4xl font-bold mb-3'>Real Stories from Real Teens</h2>
          <p className='text-lg md:w-1/2 mx-auto'>
            Discover how YouthWell is helping teens across the country take charge of their mental wellness one step at a time.
          </p>
        </motion.div>
        
        <div className='flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8'>
          {testimonials.map((testimonial, index) => (
            <motion.div 
            variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
            key={index} className='bg-white rounded-lg p-6 shadow-lg flex-1 relative'>
              <div className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2'>
                <BsFillChatQuoteFill className='w-12 h-12 text-primary' />
              </div>
              <div className='flex flex-col space-y-3 mb-4'>
              <p className='text-lg mb-2'>{testimonial.review}</p>
                
                <div className='flex gap-1'>
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s image`}
                  className='w-16 h-16 rounded-full object-cover mr-4'
                />
                  <div>
                  <p className='font-semibold'>{testimonial.name}</p>
                  <p className='text-gray-600'>{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
