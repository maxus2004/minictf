from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def index():
    return 'lolol'

@app.route('/task1')
def index():
    return render_template('task1.html')

if __name__ == '__main__':
    app.run()