import React from "react";
import PropTypes from "prop-types";
import SectionItem from "./SectionItem.jsx";

class WorkItem extends SectionItem {
    render() {
        let place = "";
        if (this.props.item.companyWebUrl) {
            place = (
                <a href={this.props.item.companyWebUrl} target="_blank">
                    {this.props.item.companyName}
                </a>
            );
        } else {
            place = this.props.item.companyName;
        }

        return (
            <div className="item">
                <h3 className="title">
                    {this.props.item.positionTitle} -
                    <span className="place">
                        {place}
                    </span>
                    <span className="year">
                        (
                        {this.props.item.startTime}
                        {" "}
                        -
                        {" "}
                        {this.props.item.endTime}
                        )
                    </span>
                </h3>
                <p>
                    {this.props.item.workDetails}
                </p>
            </div>
        );
    }
}

WorkItem.propTypes = {
    item: PropTypes.shape({
        startTime: PropTypes.string,
        endTime: PropTypes.string,
        companyName: PropTypes.string,
        companyWebUrl: PropTypes.string,
        workLocation: PropTypes.shape({
            country: PropTypes.string,
            city: PropTypes.string
        }),
        positionTitle: PropTypes.string,
        workDetails: PropTypes.string,
        supervisorName: PropTypes.string,
        skillsInvolved: PropTypes.arrayOf(PropTypes.string)
    })
};

WorkItem.defaultProps = {};

export default WorkItem;
