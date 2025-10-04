const inputEl = document.querySelector('.js-input');
const task = document.querySelector('.task-list')

function addTask() {
   const inputValue = inputEl.value.trim();
   if (inputValue === '') return;

   // create Li
   const li = document.createElement('li');
   li.textContent = inputValue;

   // create button 
   const btn = document.createElement('button');
   btn.textContent = 'x'
   btn.style.background = 'white'

   // Remove li when button is clicked
   btn.addEventListener('click', () => {
    li.remove();
   })

   //add button inside li
   li.appendChild(btn);

   //add li inside ul
   task.appendChild(li);

   // clear input
   inputEl.value = ''
}