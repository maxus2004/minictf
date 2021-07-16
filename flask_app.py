from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__)

@app.route('/')
def mainPage():
    return 'lolol'

@app.route('/task1', methods=['GET','POST'])
def task1():
    if request.method='POST':
        answer = request.form['answer']
        
    return render_template('task1.html', rot=2, encrypted='лололоо', completed=False)

if __name__ == '__main__':
    app.run()