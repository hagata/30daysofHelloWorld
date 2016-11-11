# Define a conversation

a conversation can exist as an object with a series of messages
each message will contain a user and a message string.
order of the conversation is important and must be maintained.
each message should contain a number

# displaying the conversation
The conversation will be displayed in order.
Each message will display the @user's name

## handling input
Conversations can be divided into blocks of narrative content, followed by
a prompt for user input.
user input can be handled on a continue/not continue basis, true or false

continuing a conversation will extend the conversation and continue the
narrative of ordered messages.

breaking the conversation,
Look for a decision tree within the conversation "sets"
if no more conversation sets exist, break from this conversation


# Hierarchy

Story > set: number> narrative block > message

# Sketch of the conversation model:
```
class Story {
    constructor(name, sets){}

    nextSet(){}
    nextNarrative(/*if end of set, nextSet*/){}
    loadNarrative(){}
    leadMessage(/*if endOfNarrativeBlock ? this.promptUser*/){}
    promptUser(...options){}
}

let conversations = [{
    Story: { // instance of Story.
        name: "storyname",
        sets: [{
            setID: 0,
            narratives: [{
                narrative: {
                    messages: [{
                        "user": "username",
                        "message": "lorem ipsum dollar etc.",
                        endOfNarrativeBlock: false // if true, break, prompt user.
                    }]
                },
            }],
        }],
    }
}]
```
