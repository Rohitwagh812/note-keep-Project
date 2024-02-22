
let notelist = document.querySelector('.notelist');



document.querySelector('#btn').addEventListener("click", () => {
  document.querySelectorAll(".note").forEach((note) => {
    note.remove()
  })
})


document.querySelector('#createnotebutton').addEventListener('click', () => {

  console.log('button clicked');

  let note = {
    title: document.querySelector('#createNotetitle').value,
    content: document.querySelector('#createnotcontent').value
}
console.log(note);

localStorage.setItem('note', JSON.stringify(note))


renderNoteToList(note)

})

const renderNoteToList = (note) => {
  let noteDiv = document.createElement('div');
  noteDiv.classList.add('note');

  let noteTitle = document.createElement('h4');

  let noteContent =document.createElement('p');

  let divF = document.createElement('div');
  divF.className = 'divf';
  let deleteButton = document.createElement('button');
  deleteButton.className = 'deleteButton' ;
  let timediv = document.createElement('div');
  timediv.className = 'time';
  timediv.innerText = new Date().toLocaleString();
 
  let timed = document.createElement('div');
  timed.className = 'timed';

  deleteButton.addEventListener('click', () => {
    noteDiv.remove();
  })

  deleteButton.innerText = 'Delete';

  noteTitle.innerText = note.title;
  noteContent.innerText =note.content;
  noteDiv.appendChild(noteTitle);
  noteDiv.appendChild(noteContent);
  divF.appendChild(deleteButton)
  divF.appendChild(timed);
  timed.appendChild(timediv);
  noteDiv.appendChild(divF);
  // noteDiv.appendChild(dateDiv);
  notelist.appendChild(noteDiv);


  document.querySelector('#createNotetitle').value = ''
  document.querySelector('#createnotcontent').value =''

}
