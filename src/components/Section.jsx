import React, { Component } from "react";
import PropTypes from "prop-types";

import SectionItem from "./SectionItem.jsx";
import WorkItem from "./WorkItem.jsx";
import IndustryItem from "./IndustryItem.jsx";

class Section extends Component {
    render() {
        let itemsDOM = "";

        if (this.props.type && this.props.type === "industry") {
            itemsDOM = Array.isArray(this.props.items)
                ? this.props.items.map((item, index) => (
                      <IndustryItem key={index} item={item} />
                  ))
                : "";
        } else if (this.props.type && this.props.type === "experience") {
            itemsDOM = Array.isArray(this.props.items)
                ? this.props.items.map((item, index) => (
                      <WorkItem key={index} item={item} />
                  ))
                : "";
        } else {
            itemsDOM = Array.isArray(this.props.items)
                ? this.props.items.map((item, index) => (
                      <SectionItem key={index} item={item} />
                  ))
                : "";
        }

        return (
            <section className={this.props.type + " section"}>
                <div className="section-inner">
                    <h2 className="heading">{this.props.title}</h2>
                    <div className="content">
                        {this.props.content}
                        {itemsDOM}
                    </div>
                </div>
            </section>
        );
    }
}

Section.propTypes = {
    type: PropTypes.oneOf(["about", "industry", "experience", "general"]),
    items: PropTypes.arrayOf(PropTypes.object)
};

Section.defaultProps = { type: "general", items: [] };

export default Section;
