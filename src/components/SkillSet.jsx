import React, { Component } from "react";

import AnimatedBar from "./AnimatedBar.jsx";

class SkillSet extends Component {
  render() {
    let itemsDOM = "";

    itemsDOM = Array.isArray(this.props.items)
      ? this.props.items.map(item => (
          <div className="item">
            <h3 className="level-title">
              {item.title}
              <span
                className="level-label"
                data-toggle="tooltip"
                data-placement="left"
                data-animation="true"
                title={item.tips}
              >
                {item.level}
              </span>
            </h3>
            <AnimatedBar value={item.rating} target={100} />
          </div>
        ))
      : "";

    return (
      <div className="intro">
        <div className="skillset">
          {itemsDOM}
        </div>
      </div>
    );
  }
}
export default SkillSet;
