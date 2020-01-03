import React from "react";
import styled from "styled-components";
import { Row, Avatar, Col, Card, Progress, Icon, InputNumber } from "antd";
import "antd/dist/antd.css";
import "../index.scss";
import Experience from "../../src/assets/images/experience-icon.png";
import MyProfilePic from "../../src/assets/images/background_image.jpg";
import Education from "../../src/assets/images/education-icon.png";
import Skill from "../../src/assets/images/skill-icon.png";
import HandBackground from "../../src/assets/images/hand_background.jpg";
import GraduationCap from "../../src/assets/images/graduation.png";

const ResumeHeader = styled.div`
  display: flex;
  align-items: baseline;

  justify-content: space-evenly;
  padding: 50px;
  width: 100%;

  .hello {
    width: 100vw;
    min-height: 885px;
    position: fixed;
    top: -5%;

    background-position: center;
    background-size: cover;
  }

  @media screen and (max-width: 700px) {
    .hello {
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
  .ant-progress-text {
    color: white;
  }
`;

const ResumeIcon = styled.div`
  .flipIt:hover {
    -ms-transform: scale(1.5); /* IE 9 */
    -webkit-transform: scale(1.5); /* Safari 3-8 */
    transform: scale(1.5);
  }
`;

class Another extends React.Component {
  state = {
    detailsSection: "profile",
    visibleScrollAbout: "false",
    visibleScrollEducation: "false",
    visibleScrollskills: "false",
    visibleScrollexperience: "false",
    visibleScrollmore: "false"
    // visibleScrollMyName: "false"
  };

  componentDidMount() {
    // document.addEventListener("scroll", this.toggleVisibilityMyName);
    document.addEventListener("scroll", this.toggleVisibilityAbout);
    document.addEventListener("scroll", this.toggleVisibilitySkill);
    document.addEventListener("scroll", this.toggleVisibilityeducation);
    document.addEventListener("scroll", this.toggleVisibilityexperience);
    document.addEventListener("scroll", this.toggleVisibilitymore);
  }

  toggleVisibilityAbout = () => {
    if (window.pageYOffset > 800 && window.pageYOffset < 1200) {
      this.setState({
        visibleScrollAbout: true
      });
    } else {
      this.setState({
        visibleScrollAbout: false
      });
    }
  };

  toggleVisibilityeducation = () => {
    if (window.pageYOffset > 1300 && window.pageYOffset < 1700) {
      this.setState({
        visibleScrollEducation: true
      });
    } else {
      this.setState({
        visibleScrollEducation: false
      });
    }
  };

  toggleVisibilitySkill = () => {
    if (window.pageYOffset > 1800 && window.pageYOffset < 2200) {
      this.setState({
        visibleScrollskills: true
      });
    } else {
      this.setState({
        visibleScrollskills: false
      });
    }
  };

  toggleVisibilityexperience = () => {
    if (window.pageYOffset > 2300 && window.pageYOffset < 2600) {
      this.setState({
        visibleScrollexperience: true
      });
    } else {
      this.setState({
        visibleScrollexperience: false
      });
    }
  };

  toggleVisibilitymore = () => {
    if (window.pageYOffset > 2600 && window.pageYOffset > 3000) {
      this.setState({
        visibleScrollmore: true
      });
    } else {
      this.setState({
        visibleScrollmore: false
      });
    }
  };

  //   handleClick = () => {
  //     const { detailsSection } = this.state;
  //     this.setState({
  //       detailsSection: detailsSection
  //     });
  //   };

  scrollToSection = () => {
    window.scrollTo({
      behavior: "smooth",
      bottom: 0
    });
  };

  render() {
    const { detailsSection } = this.state;
    return (
      <>
        <Row>
          <Col>
            <ResumeHeader>
              <div
                className="hello"
                style={{
                  backgroundImage: `url(${HandBackground})`
                }}
              ></div>
              <Avatar
                onClick={() => this.scrollToSection()}
                className={`${detailsSection === "experience" &&
                  "animated pulse infinite"} flipIt`}
                size={detailsSection === "experience" ? 250 : 140}
                style={{
                  backgroundImage: `url(${Experience})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  border: "3px solid #cccccc",
                  boxShadow: "0px 0px 35px rgba(1, 1, 1, 1)"
                }}
              />
              <Avatar
                className={`${detailsSection === "education" &&
                  "animated pulse infinite"}`}
                size={detailsSection === "education" ? 250 : 140}
                style={{
                  backgroundImage: `url(${Education})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  boxShadow: "0px 0px 35px rgba(1, 1, 1, 1)"
                }}
              />
              <Avatar
                className={`${detailsSection === "profile" &&
                  "animated pulse infinite"}`}
                size={detailsSection === "profile" ? 250 : 140}
                style={{
                  backgroundImage: `url(${MyProfilePic})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  opacity: 0.8,
                  boxShadow: "0px 0px 35px rgba(1, 1, 1, 1)"
                }}
              />
              <Avatar
                className={`${detailsSection === "skills" &&
                  "animated pulse infinite"}`}
                size={detailsSection === "skills" ? 250 : 140}
                style={{
                  backgroundImage: `url(${Skill})`,
                  border: "3px solid #cccccc",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  boxShadow: "0px 0px 35px rgba(1, 1, 1, 1)"
                }}
              />
              <Avatar
                className={`${detailsSection === "more" &&
                  "animated pulse infinite"}`}
                size={detailsSection === "more" ? 250 : 140}
                style={{
                  backgroundColor: `#4eabf6`,
                  border: "3px solid #cccccc",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  boxShadow: "0px 0px 35px rgba(1, 1, 1, 1)"
                }}
              />
            </ResumeHeader>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ fontSize: 40, color: "white", textAlign: "center" }}>
              I am Arjoo Chauhan
            </div>
            <div style={{ fontSize: 32, color: "white", textAlign: "center" }}>
              {" "}
              React Developer
            </div>
            <ResumeIcon
              style={{
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                width: 500,
                fontSize: 30,
                marginLeft: 475
              }}
            >
              <span>
                <Icon type="github" className="animated flip  delay-1s " />
              </span>
              <span>
                <Icon type="facebook" className="animated flip   delay-2s " />
              </span>
              <span>
                <Icon type="instagram" className="animated flip  delay-3s " />
              </span>
              <span>
                <Icon type="skype" className="animated flip delay-4s " />
              </span>
              <span>
                <Icon type="phone" className="animated flip delay-5s " />
              </span>
              <span>
                <Icon type="mail" className="animated flip delay-1s " />
              </span>
            </ResumeIcon>
          </Col>
        </Row>
        <Row>
          <Col>
            <ResumeSections
              style={{
                color: "white",
                position: "fixed",
                paddingLeft: "100px",
                bottom: "30%"
              }}
            >
              {this.state.visibleScrollAbout && (
                <Row style={{ marginBottom: 75 }} className="animated zoomIn">
                  <Col span={9} style={{ paddingLeft: 200 }}>
                    <div
                      style={{
                        backgroundColor: "#1890ff",
                        color: "white",
                        fontSize: 20,
                        padding: 2,
                        transform: "skewy(-6deg)",
                        width: 140,
                        marginBottom: 25
                      }}
                    >
                      ABOUT ME
                    </div>
                    {/* transform: skewy(-6deg); */}
                    <div>
                      <span
                        style={{
                          color: "#1890ff",
                          marginRight: 15,
                          fontSize: 20
                        }}
                      >
                        Birth
                      </span>
                      <span style={{ color: "white" }}>30th Oct 2019</span>
                    </div>
                    <div>
                      <span
                        style={{
                          color: "#1890ff",
                          marginRight: 15,
                          fontSize: 20
                        }}
                      >
                        Instagram
                      </span>
                      <span style={{ color: "white" }}>zoo3097</span>
                    </div>
                    <div>
                      <span
                        style={{
                          color: "#1890ff",
                          marginRight: 15,
                          fontSize: 20
                        }}
                      >
                        Phone
                      </span>
                      <span style={{ color: "white" }}>6362836717</span>
                    </div>
                    <div>
                      <span
                        style={{
                          color: "#1890ff",
                          marginRight: 15,
                          fontSize: 20
                        }}
                      >
                        Mail
                      </span>
                      <span style={{ color: "white" }}>
                        arjoochauhan44@gamil.com
                      </span>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div
                      style={{
                        borderTop: "2px solid #0096ec",
                        borderBottom: "2px solid #0096ec"
                      }}
                    >
                      {/* <span
                        style={{
                        //   backgroundImage: `url(${MyProfilePic})`,
                        //   width: 250,
                        //   height: 250,
                          borderRight: "2px solid #0096ec"
                        }}
                      /> */}

                      <span>
                        <div>
                          <h3 style={{ color: "#0096ec", fontSize: 40 }}>
                            - Objectives
                          </h3>
                          <p style={{ fontSize: 20 }}>
                            To enhance my knowledge and secure a challenging
                            position within an organization that promotes a path
                            for success while providing a stable work
                            environment. Make sure that my professional goals
                            align with the organization goals.
                          </p>
                        </div>
                      </span>
                    </div>
                  </Col>
                </Row>
              )}

              {this.state.visibleScrollEducation && (
                <div style={{ marginLeft: 300 }} className="animated zoomIn">
                  <div
                    style={{
                      backgroundColor: "#1890ff",
                      color: "white",
                      fontSize: 20,
                      padding: 2,
                      transform: "skewy(-6deg)",
                      width: 100,
                      margin: 10
                    }}
                  >
                    Education
                  </div>

                  <div>
                    <span
                      style={{
                        color: "#0096ec",
                        fontSize: 25,
                        marginRight: 20
                      }}
                    >
                      2015 - 2019
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
                      7.2/10 (CGPA)
                    </span>

                    <p style={{ fontSize: 25 }}>
                      H.K.B.K College of Engineering​ ​/ B.E.(EC), BANGALORE
                    </p>
                  </div>

                  <div>
                    <span
                      style={{
                        color: "#0096ec",
                        fontSize: 25,
                        marginRight: 20
                      }}
                    >
                      2014 - 2015
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
                      7.2/10 (CGPA)
                    </span>
                    <p style={{ fontSize: 25 }}>
                      KendriyaVidyalayaNo.1​, BANGALORE
                    </p>
                  </div>

                  <div>
                    <span
                      style={{
                        color: "#0096ec",
                        fontSize: 25,
                        marginRight: 20
                      }}
                    >
                      2012 - 2013
                    </span>
                    <span
                      style={{
                        backgroundColor: "#1890ff",
                        color: "white",
                        fontSize: 10,
                        padding: 2,
                        transform: "skewy(-6deg)",
                        margin: 13
                      }}
                    >
                      {" "}
                      8.6/10 (CGPA)
                    </span>
                    <p style={{ fontSize: 25 }}>
                      KendriyaVidyalayaNo.1​, BANGALORE
                    </p>
                  </div>
                </div>
              )}

              {this.state.visibleScrollexperience && (
                <div
                  style={{ paddingLeft: 70, paddingRight: 50 }}
                  className="animated zoomIn"
                >
                  <div
                    style={{
                      backgroundColor: "#1890ff",
                      color: "white",
                      fontSize: 20,
                      padding: 2,
                      transform: "skewy(-6deg)",
                      width: 100,
                      margin: 10
                    }}
                  >
                    Experience
                  </div>

                  <div>
                    <span
                      style={{
                        color: "#0096ec",
                        fontSize: 25,
                        marginRight: 20
                      }}
                    >
                      -- Decathlon UK
                    </span>
                    <span
                      style={{
                        backgroundColor: "#1890ff",
                        color: "white",
                        fontSize: 10,
                        padding: 2,
                        transform: "skewy(-15deg)"
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
                      College
                    </p>
                  </div>

                  <div>
                    <span
                      style={{
                        color: "#0096ec",
                        fontSize: 25,
                        marginRight: 20
                      }}
                    >
                      -- Projects
                    </span>
                    <span
                      style={{
                        backgroundColor: "#1890ff",
                        color: "white",
                        fontSize: 10,
                        padding: 2,
                        transform: "skewy(-6deg)",
                        margin: 11
                      }}
                    >
                      {" "}
                      MAR 2019 - APR 2019
                    </span>
                    <p style={{ fontSize: 20 }}>
                      Based on simple screen content sharing which can later be
                      used for references at any time Technologies worked on​ -
                      Raspberry Pi, Python, S-FTP protocol.
                    </p>
                    <p style={{ fontSize: 20 }}>
                      Self Driving car — Mini Project​ ( MAR 2018) The car was
                      built using 4 motors which were used to drive the car in
                      the needed motion. Voice Inputs are given using an android
                      application which drives the car in the required
                      direction. Technologies worked on​ - Arduino
                    </p>
                  </div>
                </div>
              )}

              {this.state.visibleScrollskills && (
                <div
                  style={{ paddingLeft: 260, paddingRight: 70 }}
                  className="animated zoomIn"
                >
                  <div style={{ marginRight: 100 }}>
                    <div
                      style={{
                        backgroundColor: "#1890ff",
                        color: "white",
                        fontSize: 22,

                        marginBottom: 20,
                        transform: "skewy(-6deg)",
                        textAlign: "center",
                        width: 47
                      }}
                    >
                      {" "}
                      Skills
                    </div>
                    <div>
                      <span
                        style={{
                          color: "#0096ec",
                          fontSize: 20
                        }}
                      >
                        {" "}
                        Backend Technologies
                      </span>
                      <span
                        style={{
                          color: "white",
                          fontSize: 18
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
                          fontSize: 20
                        }}
                      >
                        {" "}
                        Frontend Technologies:
                      </span>
                      <span style={{ color: "white", fontSize: 18 }}>
                        {" "}
                        ReactJS, Javascript, HTML, CSS, Responsive Web Design,
                        Styled Components, Antd, Bootstrap, Flexbox,
                        SASS...(meant to keep increasing..){" "}
                      </span>
                    </div>

                    <div style={{ paddingTop: 30 }}>
                      <span
                        style={{
                          color: "#0096ec",
                          fontSize: 20
                        }}
                      >
                        Hardware Design{" "}
                      </span>
                      <span style={{ color: "white", fontSize: 18 }}>
                        Verilog, VHDL, MATLAB Modules: Raspberry Pi, Arduino UNO
                      </span>
                    </div>

                    <div style={{ paddingTop: 30 }}>
                      <span
                        style={{
                          color: "#0096ec",
                          fontSize: 20
                        }}
                      >
                        Tools
                      </span>
                      <span style={{ color: "white", fontSize: 18 }}>
                        Git and Github, VsCode, Documentation and Presentation
                        Tools
                      </span>
                    </div>
                  </div>
                  <div style={{ paddingTop: 40 }}>
                    <span style={{ marginRight: 50 }}>
                      {" "}
                      <Progress type="dashboard" percent={90} width={100} />
                    </span>
                    <span style={{ marginRight: 50 }}>
                      {" "}
                      <Progress type="dashboard" percent={90} width={100} />
                    </span>
                    <span style={{ marginRight: 50 }}>
                      {" "}
                      <Progress type="dashboard" percent={65} width={100} />
                    </span>
                    <span>
                      {" "}
                      <Progress type="dashboard" percent={55} width={100} />
                    </span>
                  </div>
                  <div>
                    <span style={{ marginRight: 120 }}>HTML</span>
                    <span style={{ marginRight: 120 }}>CSS</span>
                    <span style={{ marginRight: 120 }}>Javascript</span>
                    <span>React.js</span>
                  </div>
                </div>
              )}

              {this.state.visibleScrollmore && (
                <div className="animated zoomIn">
                  <div style={{ marginLeft: 222, marginBottom: 70 }}>
                    <div
                      style={{
                        backgroundColor: "#1890ff",
                        color: "white",
                        fontSize: 22,

                        marginBottom: 20,
                        transform: "skewy(-6deg)",
                        textAlign: "center",
                        width: 88
                      }}
                    >
                      ​Hobbies
                    </div>
                    <div style={{ color: "white", fontSize: 18 }}>
                      Calligraphy , Drawing Dancing , Indoor and Outdoor games
                      like Kho-Kho, Badminton, Carrom, Pool.
                    </div>
                    <div
                      style={{
                        backgroundColor: "#1890ff",
                        color: "white",
                        fontSize: 22,
                        marginTop: 30,
                        marginBottom: 20,
                        transform: "skewy(-6deg)",
                        textAlign: "center",
                        width: 140
                      }}
                    >
                      Achievements
                    </div>
                    <div style={{ color: "white", fontSize: 18 }}>
                      <span>- Played Kho-Kho regionals.</span>
                      <span>
                        -Secured 1st position in Fashion show, Dancing, Drawing
                        and Treasure Hunt
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </ResumeSections>
          </Col>
        </Row>
        <div style={{ height: 4000 }}></div>
      </>
    );
  }
}

export default Another;

// switch (selected) {
//     case 'Sport':
//       screenForMobile = (
//         <div>
//           <ActivityFilterWrapper>
//             <span
//               onClick={() => {
//                 this.handleClick('');
//               }}
//               role='presentation'
//               className='headerStyle'
//             >
//               <Icon type='left' />
//               Sport
//             </span>
//             <span className='styleForClear' role='presentation' onClick={this.handleClearSports}>
//               Clear
//             </span>
//           </ActivityFilterWrapper>
//           <Search
//             placeholder='input search'
//             onInput={this.onSearch}
//             style={{ width: 304 }}
//             className='styleForSearch'
//           />

//           <Checkbox.Group onChange={this.handleSportsTagsChange} style={{ display: 'block' }} value={sportLables}>
//             {allSports.map(item => (
//               <>
//                 <ActivityFilterWrapper className={`${filteredSportsLabels.indexOf(item.label) === -1 && 'hidden'}`}>
//                   <span className='labelStyle'>{item.label}</span>
//                   <span>
//                     <Checkbox value={item.label} />
//                   </span>
//                 </ActivityFilterWrapper>
//               </>
//             ))}
//           </Checkbox.Group>
//         </div>
//       );
//       break;
