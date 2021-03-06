import React, { Component } from "react";
import PropTypes from "prop-types";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="intro-header has-img">
                    <div className="container">
                        <img
                            className="profile-image img-responsive pull-left"
                            src={this.props.headshot}
                            alt={this.props.name}
                        />
                        <div className="profile-content pull-left">
                            <h1 className="name">{this.props.name}</h1>
                            <h2 className="desc">{this.props.desc}</h2>
                            <ul className="social list-inline">
                                <li>
                                    <a href={this.props.linkedin}>
                                        <i className="fa fa-linkedin" />
                                    </a>
                                </li>
                                <li className="last-item">
                                    <a href={this.props.github}>
                                        <i className="fa fa-github-alt" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string,
    headshot: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string
};

Header.defaultProps = {};

export default Header;
