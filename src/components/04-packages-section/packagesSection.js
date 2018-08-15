import React, { Component } from 'react';
import "./packagesSection.css";

class PackagesSection extends Component {
	render() {
		// const {name, className, price, channels, channelsPrice, channelsNumber, ids} = this.props.groupsNames;
		const groupsNames = this.props.groupsNames;
		console.log(groupsNames)
		return (
			<div className="packages-section">
				<h3>Packages</h3>
				<div className="packages">
					<div className="channel-groups">
						{
							groupsNames.map((group, index)=>{
								console.log(group);
								return (
									<div key={index} className={`${group.className} group`} >
										<fieldset>
											<legend>
												<input type="checkbox"
															 id={group.ids}
															 name="channelGroup"
															 value={group.ids}
												/>
												<label htmlFor={group.className}> {group.name} </label>
												<p>${group.price}</p>
											</legend>
											{
												group.channels.map((channel, i)=>{
													return (
														<div key={i} className="channel">
															<div className="channel-name-row">
																<input type="checkbox"
																			 id={group.ids[i]}
																			 name="channel"
																			 value={group.ids[i]}
																/>
																<label htmlFor={group.ids[i]} 
																			 className="channel-number">
																			 {group.channelsNumber[i]}
																</label>
																<h4 	 className="channel-number">
																			 {group.channels[i]}
																</h4>
															</div>
															<p>{group.channelsPrice[i]}</p>
														</div>
													);
												})
											}
										</fieldset>
									</div>
								);
							})
						}
					</div>
				</div>
			</div>
		);
	}
}

export default PackagesSection;
