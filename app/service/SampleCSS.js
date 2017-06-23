export const SampleCSS = `body {
	height: 100vh;
}

header {
	background-color: #3cb371;
	color: #fff;
	display: flex;
	flex-direction: column;
	padding-left: 10px;
}

header .title {
	display: flex;
	align-items: baseline;
	justify-content: center;
}

header .title h3 {
	font-family: 'Monoton', cursive;
}

header .title h6 {
	font-family: 'Raleway', sans-serif;
}

.footer {
	font-family: 'Raleway', sans-serif;
	text-align: center;
}

.footer .go-green {
	color: #3cb371;
}

.rbc-base {
	display: flex;
	height: 100%;
	flex-direction: column;
}

.rbc-resultstats {
	padding: 10px;
}

.rc-slider-mark-text {
	color: #fff;
	width: 25% !important;
	margin-left: -15% !important;
}

.search-params {
	display: flex;
	width: 80%;
	align-self: center;
}

.search-params .search-filters {
	display: flex;
	flex: 1.7;
}

.search-params .rbc-categorysearch {
	flex: 1;
	background-color: #3cb371;
	box-shadow: none;
}

.search-params .rbc-categorysearch .rbc-title {
	color: #fff;
}

.search-params .rbc-rangeslider {
	background-color: #3cb371;
	box-shadow: none;
	flex: 1;
}

.search-params .rbc-rangeslider .rbc-title {
	color: #fff;
}

.search-params .rbc-multidropdownlist {
	background-color: #3cb371;
	box-shadow: none;
	flex: 1;
	padding-top: 10px;
	z-index: 2;
}

.search-params .rbc-multidropdownlist .rbc-title {
	color: #fff;
}

.card-layout {
	padding: 10px;
	margin: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.card-layout .card-tags {
	display: flex;
	width: 200px;
	flex-wrap: wrap;
	font-weight: bold;
	justify-content: center;
	flex-direction: row !important;
}

.card-layout .card-tags .card-tag {
	padding: 0 2px;
}

.card-layout .card-title {
	padding: 2px;
	width: 200px;
	display: inline-block !important;
	color: #3cb371;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: center;
}

.card-layout .card-title:hover {
	color: #008000;
}

.card-layout .card-stars {
	font-size: 18px;
	padding: 10px;
	margin: 10px;
	font-weight: bold;
	background-color: #3cb371;
	color: #fff;
	border-radius: 10px;
	flex-direction: row !important;
}

.card-layout .card-stars:hover {
	background-color: #008000;
}

.card-layout .card-stars .fa-star {
	margin-right: 10px;
	margin-top: 2px;
}

.card-layout a {
	text-decoration: none;
	color: #3cb371;
}

.card-layout a:hover {
	color: #008000;
}

.rbc-resultcard {
	height: calc(100% - 1vh);
}

.rbc-resultcard .rbc-resultcard-container {
	box-shadow: none;
	padding: 5px;
}

.rbc-resultcard .rbc-resultcard-item {
	margin: 15px;
	min-height: auto;
	max-width: 400px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.rbc-resultcard .rbc-resultcard-item div {
	display: flex;
	align-items: center;
	justify-content: center;
}

.rbc-resultcard .rbc-resultcard-item:hover {
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.rbc-resultcard .rbc-resultcard-item__image {
	flex: 1;
	min-width: 130px;
	margin-left: 20px;
}

.rbc-pagination {
	text-align: center;
}

@media all and (max-width: 1200px) {
	.search-params {
		width: 85%;
	}
}

@media all and (max-width: 900px) {
	.search-params {
		flex-direction: column;
	}
}

@media all and (max-width: 800px) {
	.rbc-resultcard .rbc-resultcard-item__image {
		min-width: 100px;
		min-height: 100px;
		max-width: 130px;
		max-height: 130px;
		margin: 10px;
	}

	.rbc-resultcard .rbc-resultcard-item {
		margin: 10px;
		max-width: 250px;
	}

	.rbc-resultcard .rbc-resultcard-item div {
		flex-direction: column;
		align-items: center;
	}
}

@media all and (max-width: 480px) {
	.search-filters {
		flex-direction: column;
	}
}
`;
