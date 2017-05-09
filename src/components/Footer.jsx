import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container text-center">
                    <small className="copyright">
                        All rights reserved for contents by
                        ©<a href="http://cooljefrrey.com">
                            Jeffrey Yu
                        </a>
                    </small>
                </div>
                <div className="container text-center">
                    <small className="copyright">
                        Designed with <i className="fa fa-heart" /> by
                        <a
                            href="http://themes.3rdwavemedia.com"
                            target="_blank"
                        >
                            Xiaoying Riley
                        </a>
                        for developers
                    </small>
                </div>
            </footer>
        );
    }
}
