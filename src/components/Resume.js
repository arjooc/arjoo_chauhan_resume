import React from "react";
import styled from "styled-components";
import { Row, Avatar, Col, Card, Progress, Icon, InputNumber } from "antd";
import "antd/dist/antd.css";
import "../index.scss";
import Experience from "../../src/assets/images/experience-icon.png";
import MyProfilePic from "../../src/assets/images/my_profile.jpg";
import Education from "../../src/assets/images/education-icon.png";
import Skill from "../../src/assets/images/skill-icon.png";
import HandBackground from "../../src/assets/images/hand_background.jpg";
import interest from "../../src/assets/images/interest.png";
import ResumeSection from "./templates/ResumeSection";

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

  .header {
    width: 100vw;
    min-height: 885px;
    position: fixed;
    top: -5%;
    background-image: url(${HandBackground});
    background-position: center;
    background-size: cover;
  }

  @media screen and (max-width: 700px) {
    .header {
      width: 100%;
      min-height: 276px;
      position: fixed;
      left: 6%;
      top: 24%;
      background-position: center center;
      background-size: contain;
    }
  }
`;

const ResumeSections = styled.div`
  color: white;
  position: fixed;
  padding-left: 100px;
  bottom: -15%;
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

const ResumeIcon = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  bottom: 2%;
  position: fixed;
  width: 100%;
  padding: 0 30%;
  #On-hover-show-Text {
    color: white;
    display: none;
  }

  #hover-div-section:hover #On-hover-show-Text {
    display: block;
  }

  text-hover-style {
    font-size: 15px;
  }
`;

class Another extends React.Component {
  state = {
    visibleScrollAbout: false,
    visibleScrollEducation: false,
    visibleScrollskills: false,
    visibleScrollexperience: false,
    visibleScrollmore: false
  };

  componentDidMount() {
    document.addEventListener("scroll", this.toggleSectionVisibility);
  }

  toggleSectionVisibility = () => {
    const scrollAmount = window.pageYOffset;
    switch (true) {
      case scrollAmount > 500 && scrollAmount < 1100:
        this.setState({
          visibleScrollAbout: true,
          visibleScrollEducation: false,
          visibleScrollskills: false,
          visibleScrollexperience: false,
          visibleScrollmore: false
        });
        break;

      case scrollAmount > 1100 && scrollAmount < 1700:
        this.setState({
          visibleScrollEducation: true,
          visibleScrollAbout: false,
          visibleScrollskills: false,
          visibleScrollexperience: false,
          visibleScrollmore: false
        });
        break;

      case scrollAmount > 1700 && scrollAmount < 2300:
        this.setState({
          visibleScrollskills: true,
          visibleScrollAbout: false,
          visibleScrollEducation: false,

          visibleScrollexperience: false,
          visibleScrollmore: false
        });
        break;

      case scrollAmount > 2300 && scrollAmount < 3000:
        this.setState({
          visibleScrollexperience: true,
          visibleScrollAbout: false,
          visibleScrollEducation: false,
          visibleScrollskills: false,
          visibleScrollmore: false
        });
        break;

      case scrollAmount > 3000 && scrollAmount < 4000:
        this.setState({
          visibleScrollmore: true,
          visibleScrollAbout: false,
          visibleScrollEducation: false,
          visibleScrollskills: false,
          visibleScrollexperience: false
        });
        break;

      default:
        this.setState({
          visibleScrollAbout: false,
          visibleScrollEducation: false,
          visibleScrollskills: false,
          visibleScrollexperience: false,
          visibleScrollmore: false
        });
        break;
    }
  };

  render() {
    return (
      <>
        <Row>
          <Col>
            <ResumeHeader>
              <div className="header" />
              <Avatar className="animated pulse infinite my-pic" size={250} />
            </ResumeHeader>
          </Col>
        </Row>
        <Row>
          <Col
            span={7}
            offset={9}
            style={{ padding: 20, boxShadow: "inset 0px 0px 65px 0px #1890ff" }}
          >
            <div style={{ fontSize: 40, color: "white", textAlign: "center" }}>
              I am Arjoo Chauhan
            </div>
            <div style={{ fontSize: 32, color: "white", textAlign: "center" }}>
              React Developer
            </div>
            <div style={{ fontSize: 32, color: "white", textAlign: "center" }}>
              <a
                href="https://drive.google.com/file/d/1AJ4lixhrMKiHgB5kfE-e4d1sVj-hnJss/view?usp=sharing"
                target="_blank"
              >
                Click to view my Resume
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={7}>
            <ResumeIcon>
              <span id="hover-div-section">
                <Icon type="github" className="animated flip   delay-2s " />
                <span id="On-hover-show-Text">
                  <p className="text-hover-style">
                    <a href="https://github.com/arjooc" target="_blank">
                      arjooc
                    </a>
                  </p>
                </span>
              </span>

              <span id="hover-div-section">
                <Icon type="facebook" className="animated flip   delay-2s " />
                <span id="On-hover-show-Text">
                  <p className="text-hover-style">
                    <a href="https://www.facebook.com/zoo3097" target="_blank">
                      arjooc
                    </a>
                  </p>
                </span>
              </span>
              <span id="hover-div-section">
                <Icon type="instagram" className="animated flip  delay-3s " />
                <span id="On-hover-show-Text">
                  <p className="text-hover-style">
                    <a
                      href="https://www.instagram.com/zoo3097/"
                      target="_blank"
                    >
                      arjooc
                    </a>
                  </p>
                </span>
              </span>
              {/* <span id="hover-div-section">
                <Icon type="skype" className="animated flip delay-4s " />
                <span id="On-hover-show-Text">
                  <p className="text-hover-style">Arjoo Chauhan</p>
                </span>
              </span> */}
              <span id="hover-div-section">
                <Icon type="phone" className="animated flip delay-5s " />
                <span id="On-hover-show-Text">
                  <p className="text-hover-style">+91 6362836717</p>
                </span>
              </span>
              <span id="hover-div-section">
                <Icon type="mail" className="animated flip delay-1s " />
                <span id="On-hover-show-Text">
                  <p className="text-hover-style">arjoochauhan44@gmail.com</p>
                </span>
              </span>
            </ResumeIcon>
          </Col>
        </Row>

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
                    marginRight: 20
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
                    transform: "skewy(-15deg)"
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
                    marginRight: 20
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
                    margin: 11
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
                    marginRight: 20
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
                    margin: 13
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

          {this.state.visibleScrollexperience && (
            <ResumeSection icon={Experience} heading="Experience">
              <div>
                <div>
                  <span
                    style={{
                      color: "#0096ec",
                      fontSize: 33,
                      marginRight: 20
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
                      transform: "skewy(-15deg)"
                    }}
                  >
                    {" "}
                    MAR 2019 - APR 2019
                  </span>

                  <p style={{ fontSize: 27 }}>
                    A website to read/write blogs and book/create events.
                    Created component from scratch for Partner Module and made
                    activity listing page with filters for Play Platform.
                    Technologies worked on​ - React, HTML, CSS, Javascript
                    College
                  </p>
                </div>

                <div>
                  <span
                    style={{
                      color: "#0096ec",
                      fontSize: 33,
                      marginRight: 20
                    }}
                  >
                    -- Projects
                  </span>
                  <span
                    style={{
                      backgroundColor: "#1890ff",
                      color: "white",
                      fontSize: 13,
                      padding: 2,
                      transform: "skewy(-6deg)",
                      margin: 11
                    }}
                  >
                    {" "}
                    MAR 2019 - APR 2019
                  </span>
                  <p style={{ fontSize: 27 }}>
                    Based on simple screen content sharing which can later be
                    used for references at any time Technologies worked on​ -
                    Raspberry Pi, Python, S-FTP protocol.
                  </p>
                  <p style={{ fontSize: 27 }}>
                    Self Driving car — Mini Project​ ( MAR 2018) The car was
                    built using 4 motors which were used to drive the car in the
                    needed motion. Voice Inputs are given using an android
                    application which drives the car in the required direction.
                    Technologies worked on​ - Arduino
                  </p>
                </div>
              </div>
            </ResumeSection>
          )}

          {this.state.visibleScrollskills && (
            <ResumeSection icon={Skill} heading="Skills">
              <div>
                <span
                  style={{
                    color: "#0096ec",
                    fontSize: 32,
                    marginRight: 16
                  }}
                >
                  Backend Technologies:
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: 28
                  }}
                >
                  {" "}
                  C/C++, Regex
                </span>
              </div>
              <div style={{ paddingTop: 30 }}>
                <span
                  style={{
                    color: "#0096ec",
                    fontSize: 32,
                    marginRight: 16
                  }}
                >
                  {" "}
                  Frontend Technologies:
                </span>
                <span style={{ color: "white", fontSize: 28 }}>
                  ReactJS, Javascript, HTML, CSS, Responsive Web Design, Styled
                  Components, Antd, Bootstrap, Flexbox, SASS...(meant to keep
                  increasing..){" "}
                </span>
              </div>

              <div style={{ paddingTop: 30 }}>
                <span
                  style={{
                    color: "#0096ec",
                    fontSize: 32,
                    marginRight: 16
                  }}
                >
                  Hardware Design:
                </span>
                <span style={{ color: "white", fontSize: 28 }}>
                  Verilog, VHDL, MATLAB Modules: Raspberry Pi, Arduino UNO
                </span>
              </div>

              <div style={{ paddingTop: 30 }}>
                <span
                  style={{
                    color: "#0096ec",
                    fontSize: 32,
                    marginRight: 16
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

          {this.state.visibleScrollmore && (
            <ResumeSection icon={interest} heading="Hobbies">
              <div style={{ color: "white", fontSize: 28 }}>
                Calligraphy , Drawing Dancing , Indoor and Outdoor games like
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
                  width: 190
                }}
              >
                Achievements
              </div>
              <div style={{ color: "white", fontSize: 28 }}>
                <span> - Played Kho-Kho regionals.</span>
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
