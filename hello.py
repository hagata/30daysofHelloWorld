"""First hug API (local and HTTP access)"""
import hug


@hug.get(examples='name=Hug-Koala')
@hug.local()
def greeting(name: hug.types.text):
    """Greets the user"""
    return {'greeting': 'Hello, {0}, World!'.format(name)}

