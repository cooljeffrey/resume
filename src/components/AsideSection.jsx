import React, { Component } from "react";
import PropTypes from "prop-types";

import SectionItem from "./SectionItem.jsx";
import InfoList from "./InfoList.jsx";
import SkillSet from "./SkillSet.jsx";
import EducationItem from "./EducationItem.jsx";
import LanguageItem from "./LanguageItem.jsx";

class AsideSection extends Component {
    render() {
        let itemsDOM = "";

        if (this.props.type && this.props.type === "info") {
            itemsDOM = <InfoList items={this.props.items} />;
        } else if (this.props.type && this.props.type === "skills") {
            itemsDOM = <SkillSet items={this.props.items} />;
        } else if (this.props.type && this.props.type === "education") {
            itemsDOM = Array.isArray(this.props.items)
                ? this.props.items.map((item, index) => (
                      <EducationItem key={index} item={item} />
                  ))
                : "";
        } else if (this.props.type && this.props.type === "languages") {
            itemsDOM = Array.isArray(this.props.items)
                ? this.props.items.map((item, index) => (
                      <LanguageItem key={index} item={item} />
                  ))
                : "";
            itemsDOM = (
                <ul className="list-unstyled">
                    {itemsDOM}
                </ul>
            );
        } else {
            itemsDOM = Array.isArray(this.props.items)
                ? this.props.items.map((item, index) => (
                      <SectionItem key={index} item={item} />
                  ))
                : "";
        }

        return (
            <aside className={this.props.type + " aside section"}>
                <div className="section-inner">
                    <h2 className="heading">{this.props.title}</h2>
                    <div className="content">
                        {this.props.content}
                        {itemsDOM}
                    </div>
                </div>
            </aside>
        );
    }
}

AsideSection.propTypes = {
    type: PropTypes.oneOf(["info", "skills", "education", "languages"]),
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
    content: PropTypes.string
};

AsideSection.defaultProps = { type: "info", items: [] };

export default AsideSection;
