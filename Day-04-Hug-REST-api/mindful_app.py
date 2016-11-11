"""First hug API (local and HTTP access)"""
import hug
import random
import uuid
import logging

MINDFUL_MESSAGES = [
    {
        "id": uuid.uuid4().int,
        "message": "Stop, take 10 deep breathes while focusing on your breathing",
        "date_added": ""
    },
    {
        "id": uuid.uuid4().int,
        "message": "rest in stillness—to stop doing and focus on just being.",
        "date_added": ""
    },
    {
        "id": uuid.uuid4().int,
        "message": "Stop, time for a one minute meditation break",
        "date_added": ""
    },
    {
        "id": uuid.uuid4().int,
        "message": "Forget the past, ignore the future, and relax for a moment",
        "date_added": ""
    }
]

@hug.get(example="qty=2")
@hug.local()
def messages(qty: hug.types.number):
    """retrieve list of all messages if qty is 0"""
    if qty is 0:
        return MINDFUL_MESSAGES

    RESPONSE = []

    for x in range(0, qty):
        RESPONSE.append(MINDFUL_MESSAGES[random.randrange(0, len(MINDFUL_MESSAGES))])
    return RESPONSE

@hug.get()
@hug.local()
def message():
    """retrieve a single, random message list of all messages"""
    return MINDFUL_MESSAGES[random.randrange(0, len(MINDFUL_MESSAGES))]

@hug.post()
def new_message(body):
    newid = uuid.uuid4().int
    message = body['message']
    """This example shows how to read in post data w/ hug outside of its automatic param parsing"""
    newmsg = {
        "id": newid,
        "message": message,
        "date_added": ""
        }
    MINDFUL_MESSAGES.append(newmsg)
    return {
        "status" : 200,
        "body": newmsg
    }