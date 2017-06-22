import React, { Component } from "react";
import renderHTML from "react-render-html";

const ReactivebaseMarkup = `
<pre style='color:#000000;background:#f1f0f0;'><span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>ReactiveBase</span>
<span style='color:#074726; '>&#xa0;</span><span style='color:#074726; '>   app</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"divgitxplore"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;credentials</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"pRT1OUQPM:4c3263ae-e543-4b4b-867a-a30014fae8d5"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;theme</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"rbc-green"</span><span style='color:#074726; '></span>
<span style='color:#a65700; '>></span>
</pre>
`;

const CategorySearchMarkup = `
<pre style='color:#000000;background:#f1f0f0;'><span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>CategorySearch</span>
<span style='color:#074726; '>&#xa0;</span><span style='color:#074726; '>   </span><span style='color:#074726; '>title</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"Repos"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;componentId</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"SearchSensor"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;appbaseField</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"repo"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;categoryField</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"language"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#074726; '>placeholder</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"Search Repos"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#074726; '>autocomplete</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{false}</span>
<span style='color:#a65700; '>/></span>
</pre>
`;

const RangeSliderMarkup = `
<pre style='color:#000000;background:#f1f0f0;'><span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>RangeSlider</span>
<span style='color:#074726; '>&#xa0;</span><span style='color:#074726; '>   </span><span style='color:#074726; '>title</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"Stars 🌠"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;componentId</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"RangeSliderSensor"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;appbaseField</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"stars"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;initialLoader</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"Loading data..."</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;showHistogram</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{false}</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;range</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{{</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:mediumseagreen; '>"start"</span><span style='color:#074726; '>: </span><span style='color:#8c0000; '>0</span><span style='color:#074726; '>,</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:mediumseagreen; '>"end"</span><span style='color:#074726; '>: </span><span style='color:#8c0000; '>70000</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;}}</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;defaultSelected</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{{</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:mediumseagreen; '>"start"</span><span style='color:#074726; '>: </span><span style='color:#8c0000; '>0</span><span style='color:#074726; '>,</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:mediumseagreen; '>"end"</span><span style='color:#074726; '>: </span><span style='color:#8c0000; '>70000</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;}}</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;stepValue</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{</span><span style='color:#8c0000; '>50</span><span style='color:#074726; '>}</span>
<span style='color:#a65700; '>/></span>
</pre>
`;

const MultiDropdownListMarkup = `
<pre style='color:#000000;background:#f1f0f0;'><span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>MultiDropdownList</span>
<span style='color:#074726; '>&#xa0;</span><span style='color:#074726; '>   componentId</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"TagSensor"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;appbaseField</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"tags"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#074726; '>title</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"Repo Tags"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;searchPlaceholder</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"Search Tags"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;initialLoader</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"Loading Tags..."</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;defaultSelected</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{[]}</span>
<span style='color:#a65700; '>/></span>
</pre>
`;

const ResultCardMarkup = `
<pre style='color:#000000;background:#f1f0f0;'><span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>ResultCard</span>
<span style='color:#074726; '>&#xa0;</span><span style='color:#074726; '>   componentId</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"SearchResult"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;appbaseField</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"repo"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#074726; '>title</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"Results"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;initialLoader</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"Loading data..."</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;noResults</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"Oops! Nothing found."</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;pagination</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{true}</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;onData</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{this</span><span style='color:#8c0000; '>.</span><span style='color:#074726; '>onData}</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;react</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{{</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;and: [</span><span style='color:mediumseagreen; '>"SearchSensor"</span><span style='color:#074726; '>, </span><span style='color:mediumseagreen; '>"TagSensor"</span><span style='color:#074726; '>, </span><span style='color:mediumseagreen; '>"RangeSliderSensor"</span><span style='color:#074726; '>]</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;}}</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;sortOptions</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{[</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;{</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#074726; '>label</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"Highest rated"</span><span style='color:#074726; '>,</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;appbaseField: </span><span style='color:mediumseagreen; '>"stars"</span><span style='color:#074726; '>,</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;sortBy: </span><span style='color:mediumseagreen; '>"desc"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;},</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;{</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#074726; '>label</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"Lowest rated"</span><span style='color:#074726; '>,</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;appbaseField: </span><span style='color:mediumseagreen; '>"stars"</span><span style='color:#074726; '>,</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;sortBy: </span><span style='color:mediumseagreen; '>"asc"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;},</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;{</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#074726; '>label</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"Most recent"</span><span style='color:#074726; '>,</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;appbaseField: </span><span style='color:mediumseagreen; '>"created-on"</span><span style='color:#074726; '>,</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;sortBy: </span><span style='color:mediumseagreen; '>"desc"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;},</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;{</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#074726; '>label</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"Least recent"</span><span style='color:#074726; '>,</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;appbaseField: </span><span style='color:mediumseagreen; '>"created-on"</span><span style='color:#074726; '>,</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;sortBy: </span><span style='color:mediumseagreen; '>"asc"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;}</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;]}</span>
<span style='color:#a65700; '>/></span>
</pre>
`;

export default class DemoComponents extends Component {
	render() {
		return (
			<section className="single-step">
				<h2>Building the GitXplore UI</h2>

				<div className="docs-wrapper">
					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(ReactivebaseMarkup)}
							</div>
						</div>
						<div className="right-col">
							<p><strong>ReactiveBase</strong> is the first component in a ReactiveSearch app, it connects the UI layer with the appbase.io DB service, where we indexed the GitHub dataset.</p>
							<p>You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/getting-started/ReactiveBase.html" target="_blank">here</a>.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(CategorySearchMarkup)}
							</div>
						</div>
						<div className="right-col">
							<img src="http://i.imgur.com/E3EVCey.png" />
							<p><strong>CategorySearch</strong> sensor component creates a category search UI widget with an autocomplete functionality. It is used for applying full-text search across one or more fields. You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/search-components/CategorySearch.html" target="_blank">here</a>.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(MultiDropdownListMarkup)}
							</div>
						</div>
						<div className="right-col">
							<img src="http://i.imgur.com/qKGRXSb.png" />
							<p><strong>MultiDropdownList</strong> sensor component creates a multiple select dropdown based list UI widget. It is used for filtering results based on the current selection from a list of items. You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/MultiDropdownList.html" target="_blank">here</a>.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(RangeSliderMarkup)}
							</div>
						</div>
						<div className="right-col">
							<img src="http://i.imgur.com/e6LC7hw.png" />
							<p><strong>RangeSlider</strong> creates a numeric range based UI component. We will use it to create a filter for the number of stars on repos. You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/RangeSlider.html" target="_blank">here</a>.</p>
						</div>
					</div>


					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(ResultCardMarkup)}
							</div>
						</div>
						<div className="right-col">
							<img src="http://i.imgur.com/VoWVKo5.png" />
							<p><strong>ResultCard</strong> renders the available listings based on the applied filters in a card format and comes with a built-in support for pagination. Notice the use of <code>react</code> prop for specifying how to filter the data. Also as an added bonus it lets us easily add sorting on the results via <code>sortOptions</code> prop.
								You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/search-components/ResultCard.html" target="_blank">here</a>.</p>
						</div>
					</div>
				</div>
				<button className="btn btn-primary pos-static submit-btn" onClick={() => this.props.nextStep()}>
					Next
				</button>
			</section>
		);
	}
}
