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
  margin-top: 14px;
  text-align: center;
`;

const SectionWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
  color: white;
`;

const ResumeSection = (props) => {
  return (
    <SectionWrapper>
      <Row className="animated zoomIn">
        <Col span={2} style={{ textAlign: "right" }}>
          {props.icon && (
            <Avatar
              className="animated pulse infinite"
              size={140}
              style={{
                backgroundImage: `url(${props.icon})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                boxShadow: "0px 0px 35px rgba(1, 1, 1, 1)",
              }}
            />
          )}
          <ResumeHeading>{props.heading}</ResumeHeading>
        </Col>

        <Col offset={2} span={17}>
          <Section>{props.children}</Section>
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default ResumeSection;
