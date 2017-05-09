import React, { Component } from "react";
import PropTypes from "prop-types";

class InfoList extends Component {
  render() {
    let itemsDOM = "";

    itemsDOM = Array.isArray(this.props.items)
      ? this.props.items.map(item => {
          if (item.cssClass.indexOf("link") >= 0) {
            return (
              <li>
                <i className={item.cssClass} />
                <span className="sr-only">
                  {item.title + ":"}
                </span>
                <a href={item.value}>{item.value}</a>
              </li>
            );
          } else {
            return (
              <li>
                <i className={item.cssClass} />
                <span className="sr-only">
                  {item.title + ":"}
                </span>
                {item.value}
              </li>
            );
          }
        })
      : "";

    return (
      <ul className="list-unstyled">
        {itemsDOM}
      </ul>
    );
  }
}

InfoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.string,
      cssClass: PropTypes.string
    })
  )
};

InfoList.defaultProps = [];

export default InfoList;
