from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__)

@app.route('/')
def mainPage():
    return 'lolol'

def cezar(text,rot):
    

@app.route('/task1', methods=['GET','POST'])
def task1():
    correct = False
    if request.method='POST':
        answer = request.form['answer']
        if answer = text:
            return "правильно"
    return render_template('task1.html', rot=rot, encrypted=cezar(text,rot))

if __name__ == '__main__':
    app.run()