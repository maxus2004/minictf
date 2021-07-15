from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'lolol'

@app.route('/task1')
def index():
    return 'task 1'

if __name__ == '__main__':
    app.run()