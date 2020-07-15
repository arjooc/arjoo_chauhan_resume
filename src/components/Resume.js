import React from "react";
import styled from "styled-components";
import { Avatar, Progress } from "antd";
import "antd/dist/antd.css";
import "../index.css";
import Experience from "../../src/assets/images/experience-icon.png";
import MyProfilePic from "../../src/assets/images/my_profile.jpg";
import Education from "../../src/assets/images/education-icon.png";
import Skill from "../../src/assets/images/skill-icon.png";
import interest from "../../src/assets/images/interest.png";
import ResumeSection from "./templates/ResumeSection";

const Profile = styled.div`
  margin-left: 35%;
`;

const ResumeHeader = styled.div`
  display: flex;
  align-items: baseline;

  justify-content: space-evenly;
  padding: 50px;
  width: 100%;

  .my-pic {
    background-image: url(${MyProfilePic});
    background-position: center;
    background-size: cover;
    opacity: 0.8;
    box-shadow: 0px 0px 35px rgba(1, 1, 1, 1);
  }
`;

const ResumeSections = styled.div`
  color: white;
  position: fixed;
  padding-left: 100px;
  bottom: -9%;
  scroll-snap-type: y mandatory;
  scroll-snap-points-y: repeat(300px);

  .about span {
    color: white;
    font-size: 24px;
  }

  h3 {
    color: #0096ec;
    font-size: 40px;
  }
  .ant-progress-text {
    color: white;
  }

  .progress {
    text-shadow: 2px 2px rgba(1, 1, 1, 1);
    border-radius: 50px;
    box-shadow: inset 0px 0px 65px 0px #000;
  }
`;

class Another extends React.Component {
  state = {
    visibleScrollAbout: false,
    visibleScrollEducation: false,
    visibleScrollskills: false,
    visibleScrollexperience: false,
    visibleScrollmore: false,
  };

  componentDidMount() {
    document.addEventListener("scroll", this.toggleSectionVisibility);
  }

  toggleSectionVisibility = () => {
    const scrollAmount = window.pageYOffset;
    switch (true) {
      case scrollAmount > 450 && scrollAmount < 1100:
        this.setState({
          visibleScrollAbout: true,
          visibleScrollEducation: false,
          visibleScrollskills: false,
          visibleScrollexperience: false,
          visibleScrollmore: false,
        });
        break;

      case scrollAmount > 1100 && scrollAmount < 1700:
        this.setState({
          visibleScrollEducation: true,
          visibleScrollAbout: false,
          visibleScrollskills: false,
          visibleScrollexperience: false,
          visibleScrollmore: false,
        });
        break;

      case scrollAmount > 1700 && scrollAmount < 2300:
        this.setState({
          visibleScrollskills: true,
          visibleScrollAbout: false,
          visibleScrollEducation: false,

          visibleScrollexperience: false,
          visibleScrollmore: false,
        });
        break;

      case scrollAmount > 2300 && scrollAmount < 3000:
        this.setState({
          visibleScrollexperience: true,
          visibleScrollAbout: false,
          visibleScrollEducation: false,
          visibleScrollskills: false,
          visibleScrollmore: false,
        });
        break;

      case scrollAmount > 3000 && scrollAmount < 4000:
        this.setState({
          visibleScrollmore: true,
          visibleScrollAbout: false,
          visibleScrollEducation: false,
          visibleScrollskills: false,
          visibleScrollexperience: false,
        });
        break;

      default:
        this.setState({
          visibleScrollAbout: false,
          visibleScrollEducation: false,
          visibleScrollskills: false,
          visibleScrollexperience: false,
          visibleScrollmore: false,
        });
        break;
    }
  };

  render() {
    return (
      <>
        <Profile>
          <ResumeHeader>
            {/* <div className="header" /> */}
            <Avatar className="animated pulse infinite my-pic" size={250} />
          </ResumeHeader>
          <div style={{ fontSize: 40, color: "white", textAlign: "center" }}>
            I am Arjoo Chauhan
          </div>
          <div style={{ fontSize: 32, color: "white", textAlign: "center" }}>
            UX/UI Developer
          </div>
        </Profile>

        <ResumeSections>
          {this.state.visibleScrollAbout && (
            <ResumeSection heading="About Me" icon={MyProfilePic}>
              <div className="about">
                <h3>
                  Birth Date: <span>30th Oct 2019</span>
                </h3>
              </div>

              <div className="about">
                <h3>- Objectives</h3>
                <span>
                  To enhance my knowledge and secure a challenging position
                  within an organization that promotes a path for success while
                  providing a stable work environment. Make sure that my
                  professional goals align with the organization goals.
                </span>
              </div>
            </ResumeSection>
          )}

          {this.state.visibleScrollEducation && (
            <ResumeSection icon={Education} heading="Education">
              <div>
                <span
                  style={{
                    color: "#0096ec",
                    fontSize: 30,
                    marginRight: 20,
                  }}
                >
                  2015 - 2019
                </span>
                <span
                  style={{
                    backgroundColor: "#1890ff",
                    color: "white",
                    fontSize: 17,
                    padding: 2,
                    transform: "skewy(-15deg)",
                  }}
                >
                  {" "}
                  7.2/10 (CGPA)
                </span>

                <p style={{ fontSize: 32 }}>
                  H.K.B.K College of Engineering​ ​/ B.E.(EC), BANGALORE
                </p>
              </div>

              <div>
                <span
                  style={{
                    color: "#0096ec",
                    fontSize: 30,
                    marginRight: 20,
                  }}
                >
                  2014 - 2015
                </span>
                <span
                  style={{
                    backgroundColor: "#1890ff",
                    color: "white",
                    fontSize: 17,
                    padding: 2,
                    transform: "skewy(-6deg)",
                    margin: 11,
                  }}
                >
                  {" "}
                  7.2/10 (CGPA)
                </span>
                <p style={{ fontSize: 32 }}>
                  KendriyaVidyalayaNo.1​, BANGALORE
                </p>
              </div>

              <div>
                <span
                  style={{
                    color: "#0096ec",
                    fontSize: 30,
                    marginRight: 20,
                  }}
                >
                  2012 - 2013
                </span>
                <span
                  style={{
                    backgroundColor: "#1890ff",
                    color: "white",
                    fontSize: 17,
                    padding: 2,
                    transform: "skewy(-6deg)",
                    margin: 13,
                  }}
                >
                  {" "}
                  8.6/10 (CGPA)
                </span>
                <p style={{ fontSize: 32 }}>
                  KendriyaVidyalayaNo.1​, BANGALORE
                </p>
              </div>
            </ResumeSection>
          )}

          {this.state.visibleScrollskills && (
            <ResumeSection icon={Skill} heading="Skills">
              <div style={{ paddingTop: 30 }}>
                <span
                  style={{
                    color: "#0096ec",
                    fontSize: 32,
                  }}
                >
                  {" "}
                  Web Designer:  
                </span>
                <span style={{ color: "white", fontSize: 28 }}>
                  ​Interface Design, User Experience Design, wireframing,
                  Design  Thinking, User Interface 
                </span>
                <br></br>

                <span
                  style={{
                    color: "#0096ec",
                    fontSize: 30,
                    marginRight: 10,
                  }}
                >
                  -UX technology​:
                </span>
                <span style={{ color: "white", fontSize: 28 }}>
                  Adobe illustrator, Adobe XD, Figma. 
                </span>
                <br></br>

                <span
                  style={{
                    color: "#0096ec",
                    fontSize: 30,
                    marginRight: 10,
                  }}
                >
                  -UI technology​:
                </span>
                <span style={{ color: "white", fontSize: 28 }}>
                  - ReactJS , Javascript , HTML, CSS , Responsive web design , 
                  Styled components , Antd , Bootstrap, Flexbox, SASS, 
                  Tailwind...(meant to keep increasing..) 
                </span>
                <br></br>
              </div>

              <div style={{ paddingTop: 30 }}>
                <span
                  style={{
                    color: "#0096ec",
                    fontSize: 32,
                    marginRight: 16,
                  }}
                >
                  Tools:
                </span>
                <span style={{ color: "white", fontSize: 28 }}>
                  Git and Github, VsCode, Documentation and Presentation Tools
                </span>
              </div>

              <div style={{ paddingTop: 40 }}>
                <span style={{ marginRight: 50 }}>
                  {" "}
                  <Progress
                    type="dashboard"
                    percent={90}
                    width={100}
                    className="progress"
                  />
                </span>
                <span style={{ marginRight: 50 }}>
                  {" "}
                  <Progress
                    type="dashboard"
                    percent={90}
                    width={100}
                    className="progress"
                  />
                </span>
                <span style={{ marginRight: 50 }}>
                  {" "}
                  <Progress
                    type="dashboard"
                    percent={65}
                    width={100}
                    className="progress"
                  />
                </span>
                <span>
                  {" "}
                  <Progress
                    type="dashboard"
                    percent={55}
                    width={100}
                    className="progress"
                  />
                </span>
              </div>
              <div>
                <span style={{ marginLeft: 30, fontWeight: "bold" }}>HTML</span>
                <span style={{ marginLeft: 120, fontWeight: "bold" }}>CSS</span>
                <span style={{ marginLeft: 110, fontWeight: "bold" }}>
                  Javascript
                </span>
                <span style={{ marginLeft: 90, fontWeight: "bold" }}>
                  React.js
                </span>
              </div>
            </ResumeSection>
          )}

          {this.state.visibleScrollexperience && (
            <ResumeSection icon={Experience} heading="Experience">
              <div>
                <div>
                  <span
                    style={{
                      color: "#0096ec",
                      fontSize: 30,
                      marginRight: 20,
                    }}
                  >
                    -- Decathlon UK
                  </span>
                  <span
                    style={{
                      backgroundColor: "#1890ff",
                      color: "white",
                      fontSize: 13,
                      padding: 2,
                      transform: "skewy(-15deg)",
                    }}
                  >
                    {" "}
                    MAR 2019 - APR 2019
                  </span>

                  <p style={{ fontSize: 20 }}>
                    A website to read/write blogs and book/create events.
                    Created component from scratch for Partner Module and made
                    activity listing page with filters for Play Platform.
                    Technologies worked on​ - React, HTML, CSS, Javascript
                  </p>
                </div>

                <div>
                  <span
                    style={{
                      color: "#0096ec",
                      fontSize: 30,
                      marginRight: 20,
                    }}
                  >
                    --Pet Projects
                  </span>
                  <span
                    style={{
                      backgroundColor: "#1890ff",
                      color: "white",
                      fontSize: 13,
                      padding: 2,
                      transform: "skewy(-6deg)",
                      margin: 11,
                    }}
                  >
                    {" "}
                    Jan 2020 to July 2020
                  </span>
                  <p style={{ fontSize: 20 }}>
                    1. "My resume ":- You are looking at it :)
                    <br></br>
                    Technologies worked on​ - Reactjs,javacript,css,antd,html.
                  </p>
                  <p style={{ fontSize: 20 }}>
                    2. "A to Z cleaning " :- Its an App design , which will help
                    you to interact to have laundry orders near to your place
                    <br></br>
                    Technologies worked on​ - Figma software
                  </p>
                  <p style={{ fontSize: 20 }}>
                    3. 2-D vector Design
                    <br></br>
                    Technologies worked on​ - Adobe illustration
                  </p>
                </div>
                <div>
                  <span
                    style={{
                      color: "#0096ec",
                      fontSize: 30,
                      marginRight: 20,
                    }}
                  >
                    -- College Projects
                  </span>
                  <span
                    style={{
                      backgroundColor: "#1890ff",
                      color: "white",
                      fontSize: 13,
                      padding: 2,
                      transform: "skewy(-6deg)",
                      margin: 11,
                    }}
                  >
                    {" "}
                    2018 to 2019
                  </span>

                  <p style={{ fontSize: 20 }}>
                    4. Based on simple screen content sharing which can later be
                    used for references at any time
                    <br></br>
                    Technologies worked on​ - Raspberry Pi, Python, S-FTP
                    protocol.
                  </p>
                  <p style={{ fontSize: 20 }}>
                    5.Self Driving car — Mini Project​ ( MAR 2018) The car was
                    built using 4 motors which were used to drive the car in the
                    needed motion. Voice Inputs are given using an android
                    application which drives the car in the required direction.
                    <br></br>
                    Technologies worked on​ - Arduino
                  </p>
                </div>
              </div>
            </ResumeSection>
          )}

          {this.state.visibleScrollmore && (
            <ResumeSection icon={interest} heading="Hobbies and Achievements">
              <div
                style={{
                  backgroundColor: "#1890ff",
                  color: "white",
                  fontSize: 30,
                  marginTop: 30,
                  marginBottom: 20,
                  transform: "skewy(-6deg)",
                  textAlign: "center",
                  width: 190,
                }}
              >
                Hobbies
              </div>
              <div style={{ color: "white", fontSize: 28 }}>
                Calligraphy , Drawing , Dancing , Indoor and Outdoor games like
                Kho-Kho, Badminton, Carrom, Pool, etc.
              </div>
              <div
                style={{
                  backgroundColor: "#1890ff",
                  color: "white",
                  fontSize: 30,
                  marginTop: 30,
                  marginBottom: 20,
                  transform: "skewy(-6deg)",
                  textAlign: "center",
                  width: 190,
                }}
              >
                Achievements
              </div>
              <div style={{ color: "white", fontSize: 28 }}>
                <span> - Played Kho-Kho regionals.</span>
                <br></br>
                <span>
                  - Secured 1st position in Fashion show, Dancing, Drawing and
                  Treasure Hunt
                </span>
              </div>
            </ResumeSection>
          )}
        </ResumeSections>

        <div style={{ height: 4000 }}></div>
      </>
    );
  }
}

export default Another;
