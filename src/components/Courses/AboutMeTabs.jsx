import Link from 'next/link';
import { CircularProgressbar } from "react-circular-progressbar";

import awardData from '../../data/awardsData';

const certificationData = [
  {
    id: 1,
    icon: 'assets/img/experience/edu-icon-1.png',
    title: '2018 CAL-ABOTA Trial Designer Of The Year'
  },
  {
    id: 2,
    icon: 'assets/img/experience/edu-icon-2.png',
    title: '2017 Trial Computer science of the Year'
  },
  {
    id: 3,
    icon: 'assets/img/experience/edu-icon-3.png',
    title: 'Martindale-Hubbell AV Rated In The'
  },
  {
    id: 4,
    icon: 'assets/img/experience/edu-icon-4.png',
    title: 'Super Designer’ Top 100 Designer in California'
  },
]

const whyProgramming = ['High Demand for Skills', 'Versatility of Skills', 'Innovation and Creativity', 'Problem-Solving Abilities', 'Remote Work Opportunities', 'Continuous Learning', 'Entrepreneurial Opportunities', 'Financial Rewards', 'Global Collaboration', 'Automation and Efficiency', 'Job Stability', 'Contribution to Society']
const experienceData = [
  {
    id: 1,
    img: 'https://res.cloudinary.com/dbirs4xam/image/upload/v1705950724/brainsees/html-icon_wwhphx.png',
    title: 'HTML',
    duration: '1.5',
    outlines: ['1: Introduction to HTML', '2: HTML Basic Tags', '3: HTML Text Formatting', '4: HTML Links and Navigation', '5: HTML Images', '6: HTML Forms', '7: HTML Tables', '8: HTML Multimedia', '9: HTML Semantic Elements', '10: HTML5 Features', '11: Responsive Web Design with HTML', 'Final Project: Build a Basic Website']
  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/dbirs4xam/image/upload/v1705950723/brainsees/css-icon_wbas26.png',
    title: 'CSS',
    duration: '2',
    outlines: ['1: Introduction to CSS', '2: CSS Selectors and Properties', '3: Layout and Positioning', '4: Responsive Design with CSS', '5: Transitions and Animations', '6: CSS Preprocessors', '7: CSS Frameworks', '8: CSS Best Practices and Optimization', '9: CSS3 Features', '10: CSS for Print and Other Media Types', 'Final Project: Responsive Website']
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/dbirs4xam/image/upload/v1705950723/brainsees/bootstrap-icon_wqoocy.png',
    title: 'Bootstrap',
    duration: '1',
    outlines: ['1: Introduction to Bootstrap', '2: Bootstrap Grid System', '3: Bootstrap Typography', '4: Bootstrap Components', '5: Bootstrap JavaScript Components', '6: Bootstrap Layout Components', '7: Customization and Theming', '8: Advanced Bootstrap Topics', 'Final Project: Responsive Website with Bootstrap']
  },
  {
    id: 4,
    img: 'https://res.cloudinary.com/dbirs4xam/image/upload/v1705950724/brainsees/mui-icon_o9rzlf.png',
    title: 'Material-UI',
    duration: '1',
    outlines: ['1: Introduction to Material-UI', '2: Material-UI Basics', '3: Material-UI Layout Components', '4: Material-UI Navigation Components', '5: Material-UI Form Components', '6: Material-UI Feedback Components', '7: Material-UI Data Display Components', '8: Material-UI Advanced Topics', '9: Material-UI Best Practices', '10: Real-world Application with Material-UI', 'Final Project: Material-UI Web Application']
  },
  {
    id: 5,
    img: 'https://res.cloudinary.com/dbirs4xam/image/upload/v1705950724/brainsees/tailwindcss-icon_ksbwdy.png',
    title: 'Tailwind CSS',
    duration: '1',
    outlines: ['1: Introduction to Tailwind CSS', '2: Basic Usage of Tailwind CSS', '3: Layout and Spacing', '4: Typography in Tailwind', '5: Backgrounds and Borders', '6: Components and UI Elements', '7: Forms and Inputs', '8: Animation and Transition Classes', '9: Dark Mode and Themes', '10: Optimization and Best Practices', 'Final Project: Tailwind CSS Website']
  },
  {
    id: 6,
    img: 'https://res.cloudinary.com/dbirs4xam/image/upload/v1705995104/reactfinal-icon_y3mu9i.png',
    title: 'React Js',
    duration: '3',
    outlines: ['1: Introduction to React.js', '2: JSX and Components', '3: State and Props Management', '4: React Router', '5: Hooks in React', '6: Forms and Controlled Components', '7: State Management with Context API', '8: Redux for State Management', '9: React Hooks Deep Dive', '10: Advanced Topics', '11: Testing in React', '12: React Performance Optimization', 'Final Project: Full-Stack React Application']
  },
  {
    id: 7,
    img: 'https://res.cloudinary.com/dbirs4xam/image/upload/v1705995174/typescript-icon_nwfd3e.png',
    title: 'TypeScript',
    duration: '1',
    outlines: ['1: Introduction to TypeScript', '2: TypeScript Basics', '3: Advanced Types in TypeScript', '4: Functions', '5: Modules and Namespaces', 'TypeScript and JavaScript Integration', '7: Decorators in TypeScript', '8: Asynchronous Programming in TypeScript', 'Final Project: TypeScript Application']
  },
  {
    id: 8,
    img: 'https://res.cloudinary.com/dbirs4xam/image/upload/v1705950724/brainsees/nextjs-icon_bswacd.png',
    title: 'Nextjs',
    duration: '3',
    outlines: ['1: Introduction to Next.js', '2: Pages and Routing in Next.js', '3: Data Fetching in Next.js', '4: Styling in Next.js', '5: Layouts and Components', '6: API Routes', '7: Authentication and Authorization', '8: Optimizations and Performance', '10: Testing and Debugging', 'Final Project: Next.js Web Application']
  },
  {
    id: 9,
    img: 'https://res.cloudinary.com/dbirs4xam/image/upload/v1705995953/uiux-icon_kzapyj.png',
    title: 'UI/UX Design',
    duration: '3',
    outlines: ['1: Introduction to UI/UX Design', '2: User-Centered Design (UCD)', '3: Information Architecture', '4: Wireframing and Prototyping', '5: UI Elements and Design Patterns', '6: Interaction Design', '7: Responsive and Mobile Design', '8: Design Handoff and Collaboration', 'Final Project: Comprehensive UI/UX Design Project']
  },
  {
    id: 10,
    img: 'https://res.cloudinary.com/dbirs4xam/image/upload/v1705950724/brainsees/nodejs-icon_lu4jh6.png',
    title: 'Node js',
    duration: '3',
    outlines: ['1: Introduction to Node.js', '2: Node.js Basics', '3: Asynchronous JavaScript in Node.js', '4: Express.js - Building Web Applications', '5: Working with Databases', '6: RESTful APIs with Node.js', '7: Authentication and Authorization', '8: Real-Time Applications with Socket.io', '9: Testing in Node.js']
  },
]

const AboutMeTabs = () => {
  return (
    <>
      <div className="aboutme-tabs-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <ul className="nav nav-tabs ab-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active ab-tab-item" id="programming-tab" data-bs-toggle="tab" data-bs-target="#programming" type="button" role="tab" aria-controls="programming" aria-selected="true">Programming</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link ab-tab-item" id="skills-tab" data-bs-toggle="tab" data-bs-target="#skills" type="button" role="tab" aria-controls="skills" aria-selected="false">Motion Graphics</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link ab-tab-item" id="awards-tab" data-bs-toggle="tab" data-bs-target="#awards" type="button" role="tab" aria-controls="awards" aria-selected="false">Digital Marketing</button>
                </li>
                {/* <li className="nav-item" role="presentation">
                  <button className="nav-link ab-tab-item" id="education-tab" data-bs-toggle="tab" data-bs-target="#education" type="button" role="tab" aria-controls="education" aria-selected="false">Education & Certification</button>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="tab-content mt-30" id="myTabContent">
            <div className="tab-pane fade active show" id="programming" role="tabpanel" aria-labelledby="programming-tab">
              <div className="about-skill__wrap">
                <h4 className="tab-pane-title mb-20"><b>Why</b> Progamming ?</h4>
                <p>Choosing programming as a career can be a strategic decision for various reasons, reflecting the dynamic and evolving nature of the technology industry. Here are some compelling reasons why programming makes for a promising career:</p>
                {
                  whyProgramming.map(item => <p>{` -> ${item}`}</p>)
                }
                <div className="row mt-70">
                  {
                    experienceData.map(item => (
                      <div key={item.id} className="col-xl-4 cl-lg-4">
                        <div className="experience-sm-item">
                          <div className="experience-company-image text-center">
                            <img width={150} height={150} src={item.img} alt="experience-img" />
                          </div>
                          <p>{item.title?.toUpperCase()}</p>
                          <span className="exp-duration mb-20"> Duration : {item.duration} weeks</span>
                          <h5 className="experience-title"><a>Course Outlines</a></h5>
                          {item.outlines.map(outline => <p>{outline}</p>)}
                          {/* <p>{item.content}</p> */}
                        </div>
                      </div>
                    ))
                  }

                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="skills" role="tabpanel" aria-labelledby="skills-tab">
              <h5 className='text-center'>Coming Soon</h5>
            </div>
            <div className="tab-pane fade" id="awards" role="tabpanel" aria-labelledby="awards-tab">
              <h5 className='text-center'>Coming Soon</h5>

            </div>

            {/* <div className="tab-pane fade" id="education" role="tabpanel" aria-labelledby="education-tab">
              <div className="about-education__wrap">
                <h4 className="tab-pane-title mb-20"><b>Diversity</b> of Experience</h4>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.</p>
                <div className="row mt-50">
                  {
                    certificationData.map(item => (
                      <div key={item.id} className="col-xl-3 col-lg-3 col-md-6">
                        <div className="edu-exp-item mb-30">
                          <div className="edu-exp-image mb-10">
                            <img src={item.icon} alt="edu-exp-icon" />
                          </div>
                          <h5 className="edu-exp-title mb-15"><a>{item.title}</a></h5>
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, </p>
                        </div>
                      </div>
                    ))
                  }

                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeTabs;