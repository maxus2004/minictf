from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def mainPage():
    return 'lolol'

@app.route('/task1')
def task1():
    return render_template('task1.html', rot=2, encrypted='лололоо')

if __name__ == '__main__':
    app.run()