dirs = {
    "server": {
        "user_data": {
            "passwords.json": '{\n"admin":"суперпуперкрутойпароль",\n"prodavets":"passwwworddd",\n"uborshik":"daytezarplatu"\n}',
            "credit_cards.txt": "2674677656770557\n2674677656770557\n2674677656770557\n"
        },
        "index.html": "index html file\n nothing here",
        "style.css": "styleeee",
        "script.js": "alert('LOL')"
    }

}

function getDir(path) {
    directory = dirs
    for (part of path.split('/')) {
        directory = directory[part]
    }
    return directory
}


dir = 'server'
function changed(console) {
    text = console.value
    if (text[text.length-1] == '\n') {
        line = text.substring(
            text.trim().lastIndexOf('\n')
            +dir.substring(dir.lastIndexOf('/')+1).length+2).trim()
        if (line == '') {} else if (line == 'ls') {
            for (file in getDir(dir)) {
                console.value += file+'\n'
            }
        } else if (line.startsWith('cd')) {
            newdir = line.substring(2).trim()
            if (newdir == '..') {
                dir = 'server'
            } else if (getDir(dir)[newdir] != null) {
                if ((typeof getDir(dir)[newdir]) == 'string') {
                    console.value += 'Not a directory\n'
                } else {
                    dir = dir+'/'+newdir
                }
            } else {
                console.value += 'Unknown directory\n'
            }
        } else if (line.startsWith('cat')) {
            filename = line.substring(3).trim()
            if (getDir(dir)[filename] == null) {
                console.value += 'file not found'
            } else if ((typeof getDir(dir)[filename]) == 'string') {
                console.value += getDir(dir)[filename]+'\n'
            } else {
                console.value += 'not a file\n'
            }
        } else {
            console.value += 'unknown command: '+line+'\n'
        }
        console.value += dir.substring(dir.lastIndexOf('/')+1)+'> '
        console.scrollTop = console.scrollHeight

    }
}