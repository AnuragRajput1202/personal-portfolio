import React from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../../hoc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faVialVirus } from '@fortawesome/free-solid-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};
const Experience = () => {
  return (
    <div id='experience'>
      <motion.div variants={textVariant()}>
        <p className='lg:text-[30px] sm:text-[26px] min-[380px]:20px text-[16px] text-[#ABB2BF] ubuntu m-0'>WHAT I HAVE DONE SO FAR...</p>
        <h2 className='lg:text-[80px] sm:text-[60px] min-[380px]:50px text-[40px] text-white ubuntu m-0'>Work Experience</h2>
      </motion.div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work poppins"
          contentStyle={{ background: 'black', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  black' }}
          date="October, 2023 - present"
          iconStyle={{ background: '#282C33', color: 'white' }}
          icon={<FontAwesomeIcon icon={faNodeJs} />}
        >
          <h3 className="vertical-timeline-element-title">JavaScript Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Accenture, Pune</h4>
          <ul className='list-disc text-[#ABB2BF]'>
            <li>Major work revolves around developing scalable RESTful API using Node.js, Express, and MongoDB, handling multiple requests per second</li>
            <li>Integrated seamless and secured login process for client using JWT authentication</li>
            <li>Developed a middleware function to validate the user requests which has significantly reduced the number of run-time errors</li>
            <li>Maintain and establish new features to existing systems as per client's requirements.</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work poppins"
          contentStyle={{ background: 'black', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  black' }}
          date="April, 2023 - October, 2023"
          iconStyle={{ background: '#282C33', color: 'white' }}
          icon={<FontAwesomeIcon icon={faVialVirus} />}
        >
          <h3 className="vertical-timeline-element-title">Automation Test Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Accenture, Pune</h4>
          <ul className='list-disc text-[#ABB2BF]'>
            <li>Experienced in developing and executing manual and automated tests using Python, Pytest framework and TOSCA automation tool</li>
            <li>Experienced writing Test Plans, defining Test Scenarios and Test cases and maintaning test scripts</li>
            <li>Fluent in SQL queries, which helped in performing backend testing for data integrity</li>
            <li>Experienced analyzing bugs, working with dev team and track the bugs until closure.</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work poppins"
          contentStyle={{ background: 'black', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  black' }}
          date="September-2022, March, 2023"
          iconStyle={{ background: '#282C33', color: 'white' }}
          icon={<FontAwesomeIcon icon={faDatabase} />}
        >
          <h3 className="vertical-timeline-element-title">PL/SQL-Support</h3>
          <h4 className="vertical-timeline-element-subtitle">Accenture, Pune</h4>
          <ul className='list-disc text-[#ABB2BF]'>
            <li>Undergone training in the domain Oracle-PL/SQL and got the opportunity to work on real time project.</li>
            <li>Collaborated with the dev-team to rewrite stored procedures and triggers for an Oracle version upgrade.</li>
            <li>Optimized database performance through redesigning indexes and ensuring data integrity, significantly improving query response time.</li>
            <li>Diagnosed and resolved database errors which helped in elevating system uptime.</li>
            <li>Helped in analyzing data and generating reports.</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default SectionWrapper(Experience, '#experience')
