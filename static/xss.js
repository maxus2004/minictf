function send(){
    text = document.getElementById('textInput').value
    name = document.getElementById('nameInput').value
    
    alert(text=='')
    
    //text = text.replace(/[<>]/g, '"')
    
    
    comment = '<div class="comment"><div class="text">'+text+'</div><div class="name">'+name+'</div></div>'
    document.getElementById('comments').innerHTML+=comment
}