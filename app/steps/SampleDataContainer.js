import React, { Component } from "react";
import data from "../service/sampleData";

export default class SampleDataContainer extends Component {
	renderData() {
		return data.map((row, index) => (
			<tr key={index}>
				<td>{row.name}</td>
				<td>{row.owner}</td>
				<td>{row.fullname}</td>
				<td>{row.description}</td>
				<td>{row.avatar}</td>
				<td>{row.url}</td>
				<td>{row.pushed}</td>
				<td>{row.created}</td>
				<td>{row.size}</td>
				<td>{row.stars}</td>
				<td>{row.forks}</td>
				<td>[{row.topics.join(', ')}]</td>
				<td>{row.language}</td>
				<td>{row.watchers}</td>
			</tr>
		))
	}

	render() {
		return (
			<section className="single-step">
				<h2>Indexing GitHub Dataset</h2>
				<p>
					Every good app starts with data. We have prepared a sample GitHub dataset to be indexed in our app a part of which looks like this.
					Hit the <strong>Next</strong> button at the bottom of the screen.
				</p>
				<div className="table-container">
					<table className="highlight responsive-table">
						<thead>
							<tr>
								<th>name</th>
								<th>owner</th>
								<th>fullname</th>
								<th>description</th>
								<th>avatar</th>
								<th>url</th>
								<th>pushed</th>
								<th>created</th>
								<th>size</th>
								<th>stars</th>
								<th>forks</th>
								<th>topics</th>
								<th>language</th>
								<th>watchers</th>
							</tr>
						</thead>
						<tbody>
							{this.renderData()}
						</tbody>
					</table>
				</div>

				<button className="btn btn-primary pos-static submit-btn" onClick={() => this.props.nextStep()}>
					Next
				</button>
			</section>
		);
	}
}
