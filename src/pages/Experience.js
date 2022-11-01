import React from "react";
import "../styles/Experience.css"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import ListGroup from 'react-bootstrap/ListGroup';


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline animate='true' lineColor="#ced4da">
        
        <VerticalTimelineElement

          className="vertical-timeline-element--work"
          contentStyle={{ background: '#023E7D', color: '#e9ecef' }}
          contentArrowStyle={{ borderRight: '7px solid  #023E7D' }}
          date="2014-2016"
          dateStyle={{color: 'black'}}
          iconStyle={{ background: "#5C677D", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Deputy Salt Lake Coutny Sheriffs Office
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Salt Lake City, UT
          </h4>
          <p>
            Correctional officer. Supervised units of 64 inmates. Providing saftey and security. 
            Recieved BCO and SFO Utah POST certifications.
          </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016-2019"
          contentStyle={{ background: '#023E7D', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #023E7D' }}
          iconStyle={{ background: "#5C677D", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Police Officer- West Valley City
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            West Valley City, UT
          </h4>
          <p>
            Police Officer. Recieved SFO, LEO, and CIT certifications.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="February 2019 - May 2019 Full Time"
          contentStyle={{ background: '#023E7D', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #023E7D' }}
          iconStyle={{ background: "#5C677D", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University Of Utah- DevPoint Labs
          </h3>
          <p> Professional Web Developer Certificate</p>
          <a href="https://www.devpointlabs.com/" target="_blank">DevPoint Labs</a>
          <ul>
            Skills
            <ol>
              JavaScript | HTML CSS | React | Git | Ruby On Rails | API 
              | Deploy | Full Stack Applications
            </ol>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2020 - Present"
          contentStyle={{ background: '#023E7D', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #023E7D' }}
          iconStyle={{ background: "#5C677D", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Technical Specialist Manager (software)- RizePoint
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Cottonwood Heights, UT
          </h4>
          <p>
            Supervise a team that provides technical support to RizePoints orginizations. 
            Use SQL daily to query database and trouble shoot bugs. 
            QA bug fixes using manual and automated testing.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="September 2022 - Present"
          contentStyle={{ background: '#023E7D', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #023E7D' }}
          iconStyle={{ background: "#5C677D", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Web Developer Intership- RizePoint
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Cottonwood Heights, UT
          </h4>
          <ul>
            <ol>
              Maintained compnay websites. 
            </ol>
            <ol>
              Contributed to redesign and build for new site.
            </ol>
            <ol>
              Published- Blogs, News Reports, Case Studies
            </ol>

          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
