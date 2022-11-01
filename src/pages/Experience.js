import React from "react";
import "../styles/Experience.css"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

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
          <p>Developed the backend infrastructure for 3 projects.</p>
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
            Helped the team launch 2 major features by working both in the front
            end and back end.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019"
          contentStyle={{ background: '#023E7D', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #023E7D' }}
          iconStyle={{ background: "#5C677D", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University Of Utah- DevPoint Labs
          </h3>
          <p> Professional Web Developer Certificate</p>
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
           Technical Specialist Manager- RizePoint
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Cottonwood Heights, UT
          </h4>
          <p>
            Helped the team launch 2 major features by working both in the front
            end and back end.
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
