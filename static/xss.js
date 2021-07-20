function send(){
    text = document.getElementById('textInput').value
    name = document.getElementById('nameInput').value
    
    if(name=='')name='имя'
    if(text=='')text='офигенный сайт'
    
    text = text.replace(/[<>]/g, '"')
    
    name = name.replace(/[‘’“”]/g, '"')
    
    comment = '<div class="comment"><div class="text">'+text+'</div><div class="name">'+name+'</div></div>'
    document.getElementById('comments').innerHTML+=comment
}

function answer(){
    alert('Ответ: пожилая мышь')
}