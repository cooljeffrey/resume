import React, { Component } from "react";
import PropTypes from "prop-types";

class SectionItem extends Component {
    render() {
        return (
            <div className="item">
                <h3 className="title">
                    {this.props.item.title}
                </h3>
                <p>
                    {this.props.item.details}
                </p>
            </div>
        );
    }
}

SectionItem.propTypes = PropTypes.shape({
    title: PropTypes.string,
    details: PropTypes.string
});

SectionItem.defaultProps = {};

export default SectionItem;
