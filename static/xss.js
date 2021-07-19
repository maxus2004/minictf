function send(){
    text = document.getElementById('textInput').value.replace(/[<>"']/g, '\\$&')
    name = document.getElementById('nameInput').value
    
    
    comment = '<div class="comment"><div class="text">'+text+'</div><div class="name">'+name+'</div></div>'
    document.getElementById('comments').innerHTML+=comment
}