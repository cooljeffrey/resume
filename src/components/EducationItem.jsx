import React from "react";
import PropTypes from "prop-types";
import SectionItem from "./SectionItem.jsx";

class EducationItem extends SectionItem {
    render() {
        return (
            <div className="item">
                <h3 className="title">
                    <i className="fa fa-graduation-cap" />
                    {" "}
                    {this.props.item.major}
                    {" "}
                </h3>
                <h4 className="university">
                    {" "}
                    {this.props.item.institute}
                    {" "}
                    <span className="year">
                        {" "}
                        {"(" +
                            this.props.item.startTime +
                            "-" +
                            this.props.item.endTime +
                            ")"}
                    </span>
                </h4>
            </div>
        );
    }
}

EducationItem.propTypes = {
    item: PropTypes.shape({
        startTime: PropTypes.string,
        endTime: PropTypes.string,
        institute: PropTypes.string,
        major: PropTypes.string,
        degree: PropTypes.string,
        instituteLocation: PropTypes.shape({
            country: PropTypes.string,
            city: PropTypes.string
        })
    })
};

EducationItem.defaultProps = {};

export default EducationItem;
