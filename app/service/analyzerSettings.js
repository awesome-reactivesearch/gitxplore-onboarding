export const settings = {
	"analysis": {
		"analyzer": {
			"autosuggest_analyzer": {
				"filter": [
					"lowercase",
					"asciifolding",
					"autosuggest_filter"
				],
				"tokenizer": "standard",
				"type": "custom"
			},
			"body_analyzer": {
				"filter": [
					"lowercase",
					"asciifolding",
					"stop",
					"snowball",
					"word_delimiter"
				],
				"tokenizer": "standard",
				"type": "custom"
			},
			"ngram_analyzer": {
				"filter": [
					"lowercase",
					"asciifolding",
					"ngram_filter"
				],
				"tokenizer": "standard",
				"type": "custom"
			},
			"standard_analyzer": {
				"filter": [
					"lowercase",
					"asciifolding"
				],
				"tokenizer": "standard",
				"type": "custom"
			},
			"whitespace_analyzer": {
				"filter": [
					"lowercase",
					"asciifolding"
				],
				"tokenizer": "whitespace",
				"type": "whitespace"
			}
		},
		"filter": {
			"autosuggest_filter": {
				"max_gram": "20",
				"min_gram": "1",
				"token_chars": [
					"letter",
					"digit",
					"punctuation",
					"symbol"
				],
				"type": "edge_ngram"
			},
			"ngram_filter": {
				"max_gram": "6",
				"min_gram": "2",
				"token_chars": [
					"letter",
					"digit",
					"punctuation",
					"symbol"
				],
				"type": "ngram"
			}
		}
	}
}
