import React, { Component } from "react";
import renderHTML from "react-render-html";

const ReactivebaseMarkup = `
<pre style='color:#000000;background:#f1f0f0;'><span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>ReactiveBase</span>
<span style='color:#074726; '>&#xa0;</span><span style='color:#074726; '>   app</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"gitxplore-demo"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;credentials</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"N8227VFYe:02aaf653-7f03-4e16-883d-56b494788fae"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;theme</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"rbc-green"</span><span style='color:#074726; '></span>
<span style='color:#a65700; '>></span>
</pre>
`;

const CategorySearchMarkup = `
<pre style='color:#000000;background:#f1f0f0;'><span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>CategorySearch</span>
<span style='color:#074726; '>&#xa0;</span><span style='color:#074726; '>   componentId</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"repo"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;dataField</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{[</span><span style='color:mediumseagreen; '>"name"</span><span style='color:#074726; '>, </span><span style='color:mediumseagreen; '>"description"</span><span style='color:#074726; '>, </span><span style='color:mediumseagreen; '>"name.raw"</span><span style='color:#074726; '>, </span><span style='color:mediumseagreen; '>"fullname"</span><span style='color:#074726; '>, </span><span style='color:mediumseagreen; '>"owner"</span><span style='color:#074726; '>, </span><span style='color:mediumseagreen; '>"topics"</span><span style='color:#074726; '>]}</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;categoryField</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"language.raw"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;queryFormat</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"and"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#074726; '>placeholder</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"Search Repos"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;URLParams</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{true}</span>
<span style='color:#a65700; '>/></span>
</pre>
`;

const RangeSliderMarkup = `
<pre style='color:#000000;background:#f1f0f0;'><span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>RangeSlider</span>
<span style='color:#074726; '>&#xa0;</span><span style='color:#074726; '>   componentId</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"stars"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;dataField</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"stars"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#074726; '>title</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"Repo Stars"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;showHistogram</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{false}</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;range</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{{</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:mediumseagreen; '>"start"</span><span style='color:#074726; '>: </span><span style='color:#8c0000; '>0</span><span style='color:#074726; '>,</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:mediumseagreen; '>"end"</span><span style='color:#074726; '>: </span><span style='color:#8c0000; '>300000</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;}}</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;defaultSelected</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{{</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:mediumseagreen; '>"start"</span><span style='color:#074726; '>: </span><span style='color:#8c0000; '>0</span><span style='color:#074726; '>,</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:mediumseagreen; '>"end"</span><span style='color:#074726; '>: </span><span style='color:#8c0000; '>300000</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;}}</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;rangeLabels</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{{</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:mediumseagreen; '>"start"</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"0 Stars"</span><span style='color:#074726; '>,</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:mediumseagreen; '>"end"</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"300K Stars"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;}}</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;stepValue</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{</span><span style='color:#8c0000; '>100</span><span style='color:#074726; '>}</span>
<span style='color:#a65700; '>/></span>
</pre>
`;

const LanguageMarkup = `
<pre style='color:#000000;background:#f1f0f0;'><span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>MultiDropdownList</span>
<span style='color:#074726; '>&#xa0;</span><span style='color:#074726; '>   componentId</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"language"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;dataField</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"language.raw"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#074726; '>title</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"Language"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#074726; '>size</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{</span><span style='color:#8c0000; '>100</span><span style='color:#074726; '>}</span>
<span style='color:#a65700; '>/></span>
</pre>
`;

const TopicsMarkup = `
<pre style='color:#000000;background:#f1f0f0;'><span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>MultiDropdownList</span>
<span style='color:#074726; '>&#xa0;</span><span style='color:#074726; '>   componentId</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"topics"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;dataField</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"topics.raw"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#074726; '>title</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"Repo Topics"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;defaultSelected</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{this</span><span style='color:#8c0000; '>.</span><span style='color:#074726; '>state</span><span style='color:#8c0000; '>.</span><span style='color:#074726; '>topics}</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#074726; '>size</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{</span><span style='color:#8c0000; '>1000</span><span style='color:#074726; '>}</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;queryFormat</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"and"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;onValueChange</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{</span><span style='color:#074726; '>value</span><span style='color:#074726; '> </span><span style='color:#806030; '>=</span><span style='color:#a65700; '>></span> this<span style='color:#8c0000; '>.</span>resetTopic(value)}
/>
</pre>
`;

const resetTopicMarkup = `
<pre style='color:#000000;background:#f1f0f0;'>resetTopic(topics) {
    const nextTopics = topics || [];
    this<span style='color:mediumseagreen; '>.</span>setState({
        topics: nextTopics
    });
}
</pre>
`

const ResultCardMarkup = `
<pre style='color:#000000;background:#f1f0f0;'><span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>ResultCard</span>
<span style='color:#074726; '>&#xa0;</span><span style='color:#074726; '>   componentId</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"SearchResult"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;dataField</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"name"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;noResults</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"No results were found, try clearing all the filters."</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;pagination</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{true}</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#074726; '>size</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{</span><span style='color:#8c0000; '>6</span><span style='color:#074726; '>}</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;onData</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{(res) </span><span style='color:#806030; '>=</span><span style='color:#a65700; '>></span> this<span style='color:#8c0000; '>.</span>onData(res, this<span style='color:#8c0000; '>.</span>toggleTopic)}
    react={{
      and: ["repo", "topics", "stars", "description", "forks", "pushed", "created", "language"]
    }}
    sortOptions={[
      {
        label: "Best Match",
        dataField: "_score",
        sortBy: "desc"
      },
      {
        label: "Most Stars",
        dataField: "stars",
        sortBy: "desc"
      },
      {
        label: "Fewest Stars",
        dataField: "stars",
        sortBy: "asc"
      },
      {
        label: "Most Forks",
        dataField: "forks",
        sortBy: "desc"
      },
      {
        label: "Fewest Forks",
        dataField: "forks",
        sortBy: "asc"
      },
      {
        label: "A to Z",
        dataField: "owner<span style='color:#8c0000; '>.</span>raw",
        sortBy: "asc"
      },
      {
        label: "Z to A",
        dataField: "owner<span style='color:#8c0000; '>.</span>raw",
        sortBy: "desc"
      },
      {
        label: "Recently Updated",
        dataField: "pushed",
        sortBy: "desc"
      },
      {
        label: "Least Recently Updated",
        dataField: "pushed",
        sortBy: "asc"
      }
    ]}
/>
</pre>
`;

const lastActiveMarkup = `
<pre style='color:#000000;background:#f1f0f0;'><span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>SingleDropdownRange</span>
<span style='color:#074726; '>&#xa0;</span><span style='color:#074726; '>   componentId</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"pushed"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;dataField</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"pushed"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#074726; '>title</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"Last Active"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#074726; '>data</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{[</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;{</span><span style='color:mediumseagreen; '>"start"</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"now-1M"</span><span style='color:#074726; '>, </span><span style='color:mediumseagreen; '>"end"</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"now"</span><span style='color:#074726; '>, </span><span style='color:mediumseagreen; '>"label"</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"Last 30 days"</span><span style='color:#074726; '>},</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;{</span><span style='color:mediumseagreen; '>"start"</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"now-6M"</span><span style='color:#074726; '>, </span><span style='color:mediumseagreen; '>"end"</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"now"</span><span style='color:#074726; '>, </span><span style='color:mediumseagreen; '>"label"</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"Last 6 months"</span><span style='color:#074726; '>},</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;{</span><span style='color:mediumseagreen; '>"start"</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"now-1y"</span><span style='color:#074726; '>, </span><span style='color:mediumseagreen; '>"end"</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"now"</span><span style='color:#074726; '>, </span><span style='color:mediumseagreen; '>"label"</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"Last year"</span><span style='color:#074726; '>}</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;]}</span>
<span style='color:#a65700; '>/></span>
</pre>
`;

const createdMarkup = `
<pre style='color:#000000;background:#f1f0f0;'><span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>SingleDropdownRange</span>
<span style='color:#074726; '>&#xa0;</span><span style='color:#074726; '>   componentId</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"created"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;dataField</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"created"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#074726; '>title</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"Created"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#074726; '>data</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{[</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;{</span><span style='color:mediumseagreen; '>"start"</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"now-1y"</span><span style='color:#074726; '>, </span><span style='color:mediumseagreen; '>"end"</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"now"</span><span style='color:#074726; '>, </span><span style='color:mediumseagreen; '>"label"</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"Last year"</span><span style='color:#074726; '>},</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;{</span><span style='color:mediumseagreen; '>"start"</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"now-3y"</span><span style='color:#074726; '>, </span><span style='color:mediumseagreen; '>"end"</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"now"</span><span style='color:#074726; '>, </span><span style='color:mediumseagreen; '>"label"</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"Last 3 years"</span><span style='color:#074726; '>},</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;{</span><span style='color:mediumseagreen; '>"start"</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"now-10y"</span><span style='color:#074726; '>, </span><span style='color:mediumseagreen; '>"end"</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"now"</span><span style='color:#074726; '>, </span><span style='color:mediumseagreen; '>"label"</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"All time"</span><span style='color:#074726; '>},</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;]}</span>
<span style='color:#a65700; '>/></span>
</pre>
`;

const forksMarkup = `
<pre style='color:#000000;background:#f1f0f0;'><span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>RangeSlider</span>
<span style='color:#074726; '>&#xa0;</span><span style='color:#074726; '>   componentId</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"forks"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;dataField</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"forks"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#074726; '>title</span><span style='color:#806030; '>=</span><span style='color:mediumseagreen; '>"Repo Forks"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;showHistogram</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{false}</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;range</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{{</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:mediumseagreen; '>"start"</span><span style='color:#074726; '>: </span><span style='color:#8c0000; '>0</span><span style='color:#074726; '>,</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:mediumseagreen; '>"end"</span><span style='color:#074726; '>: </span><span style='color:#8c0000; '>180000</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;}}</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;defaultSelected</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{{</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:mediumseagreen; '>"start"</span><span style='color:#074726; '>: </span><span style='color:#8c0000; '>0</span><span style='color:#074726; '>,</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:mediumseagreen; '>"end"</span><span style='color:#074726; '>: </span><span style='color:#8c0000; '>180000</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;}}</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;rangeLabels</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{{</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:mediumseagreen; '>"start"</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"0 Forks"</span><span style='color:#074726; '>,</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:mediumseagreen; '>"end"</span><span style='color:#074726; '>: </span><span style='color:mediumseagreen; '>"180K Forks"</span><span style='color:#074726; '></span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;}}</span>
<span style='color:#074726; '>&#xa0;&#xa0;&#xa0;&#xa0;stepValue</span><span style='color:#806030; '>=</span><span style='color:#074726; '>{</span><span style='color:#8c0000; '>100</span><span style='color:#074726; '>}</span>
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
							<img src="http://i.imgur.com/bPsogk9.png" />
							<p><strong>CategorySearch</strong> sensor component creates a category search UI widget with an autocomplete functionality. It is used for applying full-text search across one or more fields. You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/search-components/CategorySearch.html" target="_blank">here</a>.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(LanguageMarkup)}
							</div>
						</div>
						<div className="right-col">
							<img src="http://i.imgur.com/zciMM8V.png" />
							<p><strong>MultiDropdownList</strong> sensor component creates a multiple select dropdown based list UI widget. It is used for filtering results based on the current selection from a list of items. You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/MultiDropdownList.html" target="_blank">here</a>.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(TopicsMarkup)}
							</div>
							<br />
							<div className="code-div">
								{renderHTML(resetTopicMarkup)}
							</div>
						</div>
						<div className="right-col">
							<img src="http://i.imgur.com/uijLnWa.png" />
							<p>Another <strong>MultiDropdownList</strong> sensor component for <code>topics</code>. You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/MultiDropdownList.html" target="_blank">here</a>.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(lastActiveMarkup)}
							</div>
						</div>
						<div className="right-col">
							<img src="http://i.imgur.com/Ljewqak.png" />
							<p><strong>SingleDropdownRange</strong> creates a dropdown UI component which can accept a range associated with a particular filter. Read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/SingleDropdownRange.html" target="_blank">here</a>.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(createdMarkup)}
							</div>
						</div>
						<div className="right-col">
							<img src="http://i.imgur.com/eXdC14l.png" />
							<p>Another <strong>SingleDropdownRange</strong> dropdown component. Read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/SingleDropdownRange.html" target="_blank">here</a>.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(RangeSliderMarkup)}
							</div>
						</div>
						<div className="right-col">
							<img src="http://i.imgur.com/2xMaJmu.png" />
							<p><strong>RangeSlider</strong> creates a numeric range based UI component. We will use it to create a filter for the number of stars on repos. You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/RangeSlider.html" target="_blank">here</a>.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(forksMarkup)}
							</div>
						</div>
						<div className="right-col">
							<img src="http://i.imgur.com/YSd1007.png" />
							<p>Another <strong>RangeSlider</strong> component for <code>forks</code>. You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/RangeSlider.html" target="_blank">here</a>.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(ResultCardMarkup)}
							</div>
						</div>
						<div className="right-col">
							<img src="http://i.imgur.com/YIaLAxt.png" />
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
