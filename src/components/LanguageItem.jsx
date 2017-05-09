import React from "react";
import PropTypes from "prop-types";
import SectionItem from "./SectionItem.jsx";

class LanguageItem extends SectionItem {
    render() {
        let total = (this.props.item.languageRating / 2.0).toFixed(1);
        let stars = [];
        let starsDOM = "";
        while (total >= 1) {
            stars.push(1);
            total--;
        }
        if (total !== 0) {
            stars.push(5);
        }
        starsDOM = stars.map(
            (star, index) =>
                star === 1
                    ? <i key={index} className="fa fa-star" />
                    : <i key={index} className="fa fa-star-half" />
        );

        return (
            <li className="item">
                <span className="title">
                    <strong>{this.props.item.languageName}:</strong>
                </span>
                <span className="level">
                    {this.props.item.languageLevel}

                    <br className="visible-xs" />
                    {starsDOM}
                </span>
            </li>
        );
    }
}

LanguageItem.propTypes = {
    item: PropTypes.shape({
        languageName: PropTypes.string,
        languageLevel: PropTypes.oneOf([
            "Native Speaker",
            "Professional",
            "Intermediate",
            "Beginner",
            "None"
        ]),
        languageRating: PropTypes.number.isRequired
    })
};

LanguageItem.defaultProps = { languageRating: 0 };

export default LanguageItem;
