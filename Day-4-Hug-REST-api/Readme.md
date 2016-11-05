# Hug base mindful quote API
GET a single, or multiple tips throughout the day to remind you to pause and relax.

### Automatically generated documentation:
```
{
    "404": "The API call you tried to make was not defined. Here's a definition of the API to help you get going :)",
    "documentation": {
        "overview": "First hug API (local and HTTP access)",
        "handlers": {
            "/messages": {
                "GET": {
                    "usage": "retrieve list of all messages if qty is 0",
                    "outputs": {
                        "format": "JSON (Javascript Serialized Object Notation)",
                        "content_type": "application/json"
                    },
                    "inputs": {
                        "qty": {
                            "type": "A Whole number"
                        }
                    }
                }
            },
            "/message": {
                "GET": {
                    "usage": "retrieve a single, random message list of all messages",
                    "examples": [
                        "http://localhost:8000/message"
                    ],
                    "outputs": {
                        "format": "JSON (Javascript Serialized Object Notation)",
                        "content_type": "application/json"
                    }
                }
            },
            "/new_message": {
                "POST": {
                    "outputs": {
                        "format": "JSON (Javascript Serialized Object Notation)",
                        "content_type": "application/json"
                    }
                }
            }
        }
    }
}
```