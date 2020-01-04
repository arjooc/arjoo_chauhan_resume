import React from "react";
import styled from "styled-components";
import { Row, Avatar, Col, Progress } from "antd";

const Section = styled.div`
  text-align: justify;
`;

const ResumeHeading = styled.div`
  background-color: #1890ff;
  font-size: 32px;
  padding: 2px;
  transform: skewy(-6deg);
  width: 165px;
  margin: 10px;
  text-align: center;
  float: right;
`;

const SectionWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
  color: white;

  .shadow {
    box-shadow: inset 0px 0px 65px 0px #1890ff;
    padding: 10px 50px;
  }
`;

const ResumeSection = props => {
  return (
    <SectionWrapper>
      <Row className="animated zoomIn">
        <Col span={2} offset={3} style={{ textAlign: "right" }}>
          {props.icon && (
            <Avatar
              className="animated pulse infinite"
              size={140}
              style={{
                backgroundImage: `url(${props.icon})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                boxShadow: "0px 0px 35px rgba(1, 1, 1, 1)"
              }}
            />
          )}
          <ResumeHeading>{props.heading}</ResumeHeading>
        </Col>

        <Col offset={1} span={14} className="shadow">
          <Section>{props.children}</Section>
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default ResumeSection;
