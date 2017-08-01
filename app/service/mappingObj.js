export const mapping = {
	"listing": {
		"properties": {
			"avatar": {
				"type": "string",
				"index": "not_analyzed"
			},
			"created": {
				"type": "date",
				"format": "date_time_no_millis"
			},
			"description": {
				"type": "string",
				"analyzer": "ngram_analyzer",
				"search_analyzer": "standard"
			},
			"forks": {
				"type": "integer"
			},
			"fullname": {
				"type": "string",
				"index": "not_analyzed"
			},
			"language": {
				"type": "string",
				"fields": {
					"raw": {
						"type": "string",
						"index": "not_analyzed"
					}
				},
				"analyzer": "autosuggest_analyzer",
				"search_analyzer": "standard"
			},
			"name": {
				"type": "string",
				"fields": {
					"raw": {
						"type": "string",
						"index": "not_analyzed"
					}
				},
				"analyzer": "ngram_analyzer",
				"search_analyzer": "standard"
			},
			"owner": {
				"type": "string",
				"fields": {
					"raw": {
						"type": "string",
						"index": "not_analyzed"
					}
				},
				"analyzer": "ngram_analyzer",
				"search_analyzer": "standard"
			},
			"pushed": {
				"type": "date",
				"format": "date_time_no_millis"
			},
			"size": {
				"type": "integer"
			},
			"stars": {
				"type": "integer"
			},
			"topics": {
				"type": "string",
				"fields": {
					"raw": {
						"type": "string",
						"index": "not_analyzed"
					}
				},
				"analyzer": "autosuggest_analyzer",
				"search_analyzer": "standard"
			},
			"url": {
				"type": "string",
				"index": "not_analyzed"
			},
			"watchers": {
				"type": "integer"
			}
		}
	},
	"~logs": {
		"_ttl": {
			"enabled": true
		},
		"dynamic_templates": [
			{
				"for_string": {
					"mapping": {
						"fielddata": {
							"format": "disabled"
						}
					},
					"match": "*",
					"match_mapping_type": "string"
				}
			}
		]
	},
	"_default_": {
		"dynamic_templates": [
			{
				"for_string": {
					"mapping": {
						"fielddata": {
							"format": "disabled"
						}
					},
					"match": "*",
					"match_mapping_type": "string"
				}
			}
		]
	},
	".percolator": {
		"_ttl": {
			"enabled": true
		},
		"dynamic_templates": [
			{
				"for_string": {
					"mapping": {
						"fielddata": {
							"format": "disabled"
						}
					},
					"match": "*",
					"match_mapping_type": "string"
				}
			}
		],
		"properties": {
			"mode": {
				"type": "string",
				"index": "not_analyzed",
				"fielddata": {
					"format": "disabled"
				}
			},
			"query": {
				"type": "object",
				"enabled": false
			},
			"type": {
				"type": "string",
				"index": "not_analyzed",
				"fielddata": {
					"format": "disabled"
				}
			}
		}
	}
};
