import React, { Component } from "react";
import PropTypes from "prop-types";

import Section from "./Section.jsx";
import AsideSection from "./AsideSection.jsx";

class ContentContainer extends Component {
	render() {
		const profile = this.props.profile;

		let infoListItems = [];
		infoListItems.push({
			cssClass: "fa fa-map-marker",
			title: "Location",
			value: profile.location.city + ", " + profile.location.country
		});

		infoListItems.push({
			cssClass: "fa fa-envelope-o",
			title: "Email",
			value: profile.contacts.email
		});

		infoListItems.push({
			cssClass: "fa fa-link",
			title: "Website",
			value: profile.contacts.website
		});

		return (
			<div className="container sections-wrapper">
				<div className="row">
					<div className="primary col-md-8 col-sm-12 col-xs-12">
						<Section
							type="about"
							title="About Me"
							content={profile.summary}
						/>
						<Section
							type="experience"
							title="Professional Experience"
							items={profile.workHistory}
						/>
						<Section
							type="industry"
							title="Industries Worked In"
							items={profile.industries}
						/>
					</div>
					<div className="secondary col-md-4 col-sm-12 col-xs-12">
						<AsideSection type="info" items={infoListItems} />
						<AsideSection
							type="skills"
							title="Skills"
							items={profile.skills}
						/>
						<AsideSection
							type="education"
							title="Education"
							items={profile.education}
						/>
						<AsideSection
							type="languages"
							title="Languages"
							items={profile.languages}
						/>
					</div>
				</div>
			</div>
		);
	}
}

ContentContainer.propTypes = {
	profile: PropTypes.object
};

ContentContainer.defaultProps = {};

export default ContentContainer;
