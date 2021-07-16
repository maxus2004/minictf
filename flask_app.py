from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__)

@app.route('/')
def mainPage():
    return 'lolol'

def cezar(text,rot):
    result = ""
    for char in list(text):
        if char==' ':
            result += ' '
        elif (ord(char)>1000):
            result += chr((ord(char) + rot-1071) % 32 + 1071)
        else:
            result += chr((ord(char) + rot-97) % 26 + 97)
    return result

@app.route('/task1', methods=['GET','POST'])
def task1():
    text='хеллоу ворлд'
    rot=3
    
    correct = False
    if request.method=='POST':
        answer = request.form['answer']
        if answer == text:
            return "правильно"
    return render_template('task1.html', rot=rot, encrypted=cezar(text,rot))

if __name__ == '__main__':
    app.run()