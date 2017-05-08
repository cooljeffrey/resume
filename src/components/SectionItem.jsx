import React, { Component } from "react";

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
export default SectionItem;
