//the basics of JSON
const input = document.querySelector('.text-store');
const button = document.querySelector('.ok-button');
const deleteAllButton = document.querySelector('.all-delete-button');
const myDiv = document.querySelector('.the-end');


let inside = '';//the important

let i = 0; //our count for class and we must save it

const countI = localStorage.getItem('Icount');

const myData = localStorage.getItem('mydata');

if(myData) {
  myDiv.innerHTML = myData;
  console.log(myDiv.innerHTML);
  inside = myDiv.innerHTML;

  i = countI;

  deleteAllButton.classList.add('all-delete-buttonyes');
}

function store () {
  if(input.value===""){
    return;
  }else{
    inside += `<p id ='text' class='text${i}'>${input.value.replace(/\n/g, '<br>')}</p>
    <button id='done-button' class="done-button${i}" onclick ="itDone(${i})">DONE</button>
    <button id ='delete-button' class="delete-button${i}" onclick = "deleteOne(${i})">DELETE</button>
    `;
  
    myDiv.innerHTML = inside;
  
    localStorage.setItem('mydata',inside);
  
    i++;
    localStorage.setItem('Icount', i);


    deleteAllButton.classList.add('all-delete-buttonyes');
  }

}

button.addEventListener('click', store);


//extra work

//add real new line
input.addEventListener('keydown', (event) => {
if (event.key === 'Enter') {
  const textarea = document.querySelector('.text-store'); // Replace '.js-todo-input' with the appropriate class selector for your textarea
  const currentValue = textarea.value;

  textarea.value = currentValue + '\n';

  event.preventDefault();
  
  }
});

//add function to delete all button

function deleteAll() {
  inside = '';
  localStorage.setItem('mydata',inside);
  myDiv.innerHTML = '';
  
  i = 0; //restart the is

  localStorage.setItem('Icount', i);


  deleteAllButton.classList.remove('all-delete-buttonyes');

}

deleteAllButton.addEventListener('click', deleteAll);


//add the function to delete button

function deleteOne(x) {
  document.querySelector(`.delete-button${x}`).remove();//removing the delete button
  document.querySelector(`.done-button${x}`).remove();//removing the done button 
  document.querySelector(`.text${x}`).remove();//removing the text

  //reformating the inside to save the chage
  inside = myDiv.innerHTML;


  //save it
  localStorage.setItem('mydata',inside);

  if (inside.trim() === '') {
    deleteAllButton.classList.remove('all-delete-buttonyes');
  }
}


//add function to done button

function itDone (x) {
  document.querySelector(`.text${x}`).classList.add('done');

  //reformating the inside to save the chage
  inside = myDiv.innerHTML;


  //save it
  localStorage.setItem('mydata',inside);
}