# Messenger Bot - Quake-Notify
Experimental Messenger bot that tells you about earthquakes around San Francisco, CA. Built following the quick start guide by Facebook for creating Messenger apps, here [https://developers.facebook.com/docs/messenger-platform/guides/quick-start](https://developers.facebook.com/docs/messenger-platform/guides/quick-start).

# The only functions
This bot is still a baby 🐣 and doesn't know how to do much.

# quake 🙌
If a user sends `quake` (lowercase) to the bot, the bot will respond with information about earthquakes within 100km of San Fancisco, CA. Data from the USGS [http://earthquake.usgs.gov/fdsnws/event/1/#methods](http://earthquake.usgs.gov/fdsnws/event/1/#methods)

# generic
If a user sends `generic`, the bot will respond with `This is so Generic`.

## Echo
Based on the test response from the guide, when a user sends any message, the response will simply be an echo of what was sent.

## Attachments?
If a message has Attachments (media) the bot will respond with a verification that it indeed, had an attachment.
