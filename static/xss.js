function send(){
    text = document.getElementById('textInput').value
    name = document.getElementById('nameInput').value
    
    
    comment = '<div class="text">'+text+'</div><div class="name">'+name+'</div>'
    document.getElementById('comments').innerHtml+=comment
}