from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__)

@app.route('/')
def mainPage():
    return 'lolol'

def cezar(text,rot):
   result = ""
   for i in range(len(text)):
      char = text[i]
      if (char.isupper()):
         result += chr((ord(char) + s-65) % 26 + 65)
      else:
         result += chr((ord(char) + s - 97) % 26 + 97)
      return result

@app.route('/task1', methods=['GET','POST'])
def task1():
    text='хеллоу ворлд'
    rot=3
    
    correct = False
    if request.method='POST':
        answer = request.form['answer']
        if answer = text:
            return "правильно"
    return render_template('task1.html', rot=rot, encrypted=cezar(text,rot))

if __name__ == '__main__':
    app.run()