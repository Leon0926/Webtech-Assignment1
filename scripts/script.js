const notesArray = [
{
    title:"note one",
    body:"this is my first note"
}
];


function clickDarkTheme()
{
    document.body.classList.toggle("darkMode")
}

darkTheme.addEventListener("click",clickDarkTheme, {once:false});

function clickCancel()
{

    document.getElementById("noteArea").style.display ='none';
    document.getElementById("save").style.display ='none';
    document.getElementById("cancel").style.display ='none';

    
}

cancel.addEventListener("click",clickCancel, {once:false})

function clickNewNote()
{
    document.getElementById("noteArea").style.display = 'block';
    document.getElementById("save").style.display = 'block';
    document.getElementById("cancel").style.display = 'block';

    if(document.getElementById("noteArea").value !== '')
    {
        document.getElementById("noteArea").value = ''
    }
}

newNote.addEventListener("click", clickNewNote,)

function clickSave()
{
    noteName = prompt('Please enter desired note name: ')
    notesArray.push({title:noteName, body:document.getElementById("noteArea").value})

    var asideNavList = document.getElementById('asideNavList')
    var newNote = document.createElement('li')
    var buttonInList = document.createElement('button')
    buttonInList.appendChild(document.createTextNode(noteName))
    newNote.appendChild(buttonInList)
    asideNavList.appendChild(newNote)
}

save.addEventListener("click", clickSave)

function clickAsideNote(clicked)
{
    for (let i = 0; i < notesArray.length; i++) {
        if(notesArray[i].title == (clicked.target.innerText)){
            console.log('ok')
            document.getElementById('noteArea').value = notesArray[i].body
            
        }
    }
}

asideNavList.addEventListener("click",clickAsideNote)
