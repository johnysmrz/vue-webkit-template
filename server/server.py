from flask import Flask, Response, send_from_directory
import json
from functools import wraps
from uuid import uuid4
import os.path
import time


app = Flask(__name__)

def jsonify(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        response = f(*args, **kwargs)
        response = json.dumps(response)
        return Response(response, content_type='application/json')
    return wrapper


@app.route("/api/")
@jsonify
def hello():
    time.sleep(1) #testing delay
    LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque sapien non urna scelerisque, eget interdum odio posuere. Duis placerat urna justo, sit amet vestibulum dolor pellentesque in. Maecenas sed placerat nibh. Phasellus ultrices mauris et leo aliquam, sit amet mattis velit feugiat. Aenean nisi ex, scelerisque ac commodo eu, suscipit ac ligula. In hac habitasse platea dictumst. Donec in sollicitudin augue. Aliquam vel dapibus velit, in dignissim orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla neque nulla, luctus ac ipsum eget, dictum vehicula massa. Suspendisse tincidunt et dolor aliquam suscipit.'
    return [
        {'id': str(uuid4()), 'title': 'title1', 'text': LIPSUM, 'slug': 'title-one'},
        {'id': str(uuid4()), 'title': 'title2', 'text': LIPSUM, 'slug': 'title-two'},
        {'id': str(uuid4()), 'title': 'title3', 'text': LIPSUM, 'slug': 'title-three'},
        {'id': str(uuid4()), 'title': 'title4', 'text': LIPSUM, 'slug': 'title-four'},
        {'id': str(uuid4()), 'title': 'title5', 'text': LIPSUM, 'slug': 'title-five'}
    ]


@app.route('/', defaults={'path': 'index.html'})
@app.route('/<path:path>')
def send_js(path):
    if os.path.isfile('../dist/%s' % path):
        return send_from_directory('../dist/', path)
    else:
        return send_from_directory('../dist/', 'index.html')


if __name__ == '__main__':
      app.run(host='0.0.0.0', port=8081)