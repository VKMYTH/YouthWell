import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/animationVariants';

const features = [
  {
    title: 'Instant Answers',
    description: 'Get immediate responses to your questions about mental health resources, self-care strategies, or platform navigation.',
  },
  {
    title: '24/7 Availability',
    description: 'The YouthWell AI Assistant is always online, ensuring support is available any time you need it.',
  },
  {
    title: 'Emotionally Aware Responses',
    description: 'Designed with empathy, the chatbot uses calming language and thoughtful replies to create a safe space.',
  },
  {
    title: 'Human Handoff Support',
    description: 'Need extra help? The bot can seamlessly connect you with a live support team member when needed.',
  },
];

const ChatbotOverview = () => {
  const handleScrollToContact = () => {
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='bg-[#f7f8fc] pt-32' id='pricing'>
      <div className='container mx-auto px-8'>
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.7 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl font-bold mb-3'>Meet Your AI Companion in the Bottom-Right Corner</h2>
          <p className='text-lg mb-12 md:w-3/5 mx-auto'>
            YouthWell’s AI-powered assistant offers supportive, on-demand guidance to help you navigate your mental health journey with confidence and compassion. Simply click on the icon in the bottom-right corner to chat to your youthwell assistant.
          </p>
        </motion.div>

        <div className='flex flex-col md:w-5/6 mx-auto md:flex-row gap-8 flex-wrap'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', index * 0.1)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='bg-white rounded-lg p-6 flex-1 shadow-md min-w-[280px]'
            >
              <h3 className='text-xl font-semibold text-primary mb-3'>{feature.title}</h3>
              <p className='text-gray-700'>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className='text-center mt-16'>
          <button
            onClick={handleScrollToContact}
            className='bg-primary hover:bg-primary/90 text-white px-6 py-3 text-lg rounded'
          >
            Chat With Us Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotOverview;
