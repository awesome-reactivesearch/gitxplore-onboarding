import React, { Component } from "react";
import data from "../service/sampleData";

export default class SampleDataContainer extends Component {
	renderData() {
		return data.map((row, index) => (
			<tr key={index}>
				<td>{row.repo}</td>
				<td>[{row.tags.join(', ')}]</td>
				<td>{row.owner}</td>
				<td>{row.url}</td>
				<td>{row.stars}</td>
				<td>{row.language}</td>
				<td>{row['created-on']}</td>
				<td>{row.avatar}</td>
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
								<th>repo</th>
								<th>tags</th>
								<th>owner</th>
								<th>url</th>
								<th>stars</th>
								<th>language</th>
								<th>created-on</th>
								<th>avatar</th>
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
