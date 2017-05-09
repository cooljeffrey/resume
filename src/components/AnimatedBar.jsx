import React, { Component } from "react";
import PropTypes from "prop-types";
import { Motion, spring } from "react-motion";
import VisibilitySensor from "react-visibility-sensor";

class AnimatedBar extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, value: props.value };
    this.visibilityChanged = this.visibilityChanged.bind(this);
  }
  
  /**
   * On the event that the bar visibility changed
   * @param  {Boolean} isVisible is the div below the bar visible ?
   * 
   */
  visibilityChanged(isVisible) {
    if (isVisible !== this.state.visible) {
      this.setState({ visible: isVisible });
    }
  }

  render() {
    const fromValue = this.state.visible ? 0 : 0;
    const toValue = this.state.visible ? this.props.value : 0;
    return (
      <Motion
        defaultStyle={{ x: fromValue }}
        style={{
          x: spring(toValue, {
            stiffness: 60,
            damping: 15,
            precision: 1
          })
        }}
      >
        {interpolatingStyle => (
          <div className="level-bar">
            <div
              className="level-bar-inner"
              data-level={interpolatingStyle.x + "%"}
              style={{
                width: interpolatingStyle.x / this.props.target * 100 + "%"
              }}
            />
            <VisibilitySensor
              onChange={this.visibilityChanged}
              intervalCheck={false}
              scrollCheck={true}
            />
          </div>
        )}
      </Motion>
    );
  }
}

AnimatedBar.propTypes = {
  value: PropTypes.number,
  target: PropTypes.number
};

AnimatedBar.defaultProps = {
  value: 0,
  target: 100
};

export default AnimatedBar;
