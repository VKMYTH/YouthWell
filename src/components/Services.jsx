import React from 'react';
import { motion } from 'framer-motion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import MentalHealthQuiz from './MentalHealthQuiz';
import serviceImg1 from "../assets/service1.webp";
import serviceImg2 from "../assets/service2.webp";
import serviceImg3 from "../assets/service3.webp";
import serviceImg4 from "../assets/service4.webp";
import {fadeIn} from "../utilis/animationVariants"
import GuidedJournals from './GuidedJournals';
import CopingToolkit from './CopingToolkit'; 
import AffirmationSpinner from './AffirmationSpinner';


const Services = () => {
    return (
        <div className='bg-[#f7f8fc]' id="services">
            <div className='pt-28 px-4 container mx-auto'>
                <motion.div 
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='space-y-5 text-center'
                >
                    <h2 className='text-center text-4xl font-bold font-secondary text-heroBg'>
                        Tools to Support Your Mental Health Journey
                    </h2>
                    <p className='md:w-1/2 mx-auto'>
                        At YouthWell, we offer accessible, evidence-backed digital tools designed to help you manage stress, anxiety, and emotional challenges all tailored for teens.
                    </p>
                </motion.div>

                {/* React Tabs */}
                <div className='py-12 md:w-4/5 mx-auto'>
                    <Tabs>
                        <motion.TabList 
                           variants={fadeIn("up", 0.2)}
                           initial="hidden"
                           whileInView={"show"}
                           viewport={{ once: false, amount: 0.7 }}
                            className="flex flex-wrap justify-between items-center md:gap-8 gap-4"
                        >
                            <Tab>Mental Health Self-Assessments</Tab>
                            <Tab>Guided Journals</Tab>
                            <Tab>Coping Toolkit</Tab>
                            <Tab>Self-Confidence</Tab>
                        </motion.TabList>

                        <TabPanel>
                        <div className='flex flex-col gap-8 mt-8 bg-white rounded-lg p-8 md:p-12 font-secondary'>
                            <motion.h3
                                variants={fadeIn("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                                className="text-3xl font-semibold text-blue-600 mb-4"
                            >
                                Mental Health Self-Assessments
                            </motion.h3>
                            <MentalHealthQuiz />
                        </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='flex flex-col gap-8 mt-8 bg-white rounded-lg p-8 md:p-12 font-secondary'>
                                <motion.h3
                                variants={fadeIn("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                                className="text-3xl font-semibold text-blue-600 mb-4"
                                >
                                Guided Journaling
                                </motion.h3>
                                <GuidedJournals />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <motion.div
                                variants={fadeIn("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                                className="flex flex-col gap-8 mt-8 bg-white rounded-lg p-8 md:p-12 font-secondary"
                            >
                                <h3 className="text-3xl font-semibold text-primary mb-4">Coping Strategies Toolkit</h3>
                                <p className="mb-6 text-gray-700">
                                Discover practical, science-backed strategies to help you regulate emotions, reduce stress, and manage difficult moments. These tools are designed with teens in mind and can be used any time, anywhere.
                                </p>
                                <CopingToolkit />
                            </motion.div>
                        </TabPanel>
                        <TabPanel>
                            <motion.div
                                variants={fadeIn("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                                className='flex flex-col md:flex-row gap-8 mt-8'
                            >
                                <div className="md:w-full">
                                <AffirmationSpinner />
                                </div>
                            </motion.div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Services;
