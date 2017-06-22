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
}

.card-layout .card-title {
	padding: 2px;
	color: #3cb371;
}

.card-layout .card-stars {
	padding: 2px;
	font-weight: bold;
}

.rbc-resultcard {
	height: calc(100% - 1vh);
}

.rbc-resultcard .rbc-resultcard-container {
	box-shadow: none;
	padding: 5px;
}

.rbc-resultcard .rbc-resultcard-item {
	margin: 5px;
	min-height: auto;
	max-width: 400px;
	border-radius: 5px;
}

.rbc-resultcard .rbc-resultcard-item div {
	display: flex;
}

.rbc-resultcard .rbc-resultcard-item:hover {
	border: 1px solid #3cb371;
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

@media all and (max-width: 768px) {
	.rbc-resultcard .rbc-resultcard-item__image {
		min-width: 100px;
		min-height: 100px;
		max-width: 130px;
		max-height: 130px;
		margin: 10px;
	}

	.rbc-resultcard .rbc-resultcard-item {
		margin: 5px;
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
