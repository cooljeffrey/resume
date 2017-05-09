import React from "react";
import PropTypes from "prop-types";

import SectionItem from "./SectionItem.jsx";

class IndustryItem extends SectionItem {
    render() {
        return (
            <div className="item">
                <h3 className="title">
                    {this.props.item.industryName + " - "}
                    <span className="place" />
                    <span className="year">
                        {this.props.item.industryYears} years
                    </span>
                </h3>
                <p>
                    {this.props.item.industryDetails}
                </p>
            </div>
        );
    }
}

IndustryItem.propTypes = {
    industryName: PropTypes.string,
    industryYears: PropTypes.string,
    industryDetails: PropTypes.string
};

IndustryItem.defaultProps = {};

export default IndustryItem;
