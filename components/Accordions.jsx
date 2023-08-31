"use client";
import { useState } from "react";
import { Accordion, Item } from "react-bootstrap";

const Accordions = ({ accordionData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div>
      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          className="accordion1"
          activeKey={activeIndex === index ? "0" : null}>
          <Accordion.Item eventKey="0" className="bg-white">
            <Accordion.Header
              className="accordion-header bg-white"
              onClick={() => handleClick(index)}>
              <div className="d-flex justify-content">
                <div>
                  <h6 className="p-l15">{item.title}</h6>
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body className="accordion-body1">
              <div className="row">
                <div className="col-lg-8 col-sm-12">
                  <ul>
                    {item.description.map((desc, i) => (
                      <li className="p-t10" key={i}>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
};

export default Accordions;
