import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { cardData } from "../FakeData";
import Navigation from "../Navigation/Navigation";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div className="homePage">
      <Navigation></Navigation>
      {/* <div className="homePage__cardContainer">
        {cardData.map((x) => (
          <div>
            <img src={x.img} alt="" />
          </div>
        ))}
      </div> */}
      <div className="homePage__cardContainer">
        <Row>
          {cardData.map((x) => (
            <Col lg={6} xl={3} className="cardBox">
              <div className="Card mb-xs-5 my-md-5">
                <img src={x.img} alt="" />
                <h3>{x.title}</h3>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
