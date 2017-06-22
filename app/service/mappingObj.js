export const mapping = {
	"listing": {
		"properties": {
			"avatar": {
				"type": "string",
				"index": "not_analyzed"
			},
			"created-on": {
				"type": "date",
				"format": "strict_date_optional_time||epoch_millis"
			},
			"language": {
				"type": "string"
			},
			"owner": {
				"type": "string"
			},
			"repo": {
				"type": "string"
			},
			"stars": {
				"type": "integer"
			},
			"tags": {
				"type": "string",
				"index": "not_analyzed"
			},
			"url": {
				"type": "string"
			}
		}
	}
};
