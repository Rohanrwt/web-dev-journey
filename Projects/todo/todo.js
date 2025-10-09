

const btnEl = document.getElementById('btn-el')
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')
let text = [];

btnEl.addEventListener('click', () => {
  const inputValue = inputEl.value.trim();
  if (inputValue === '') return;

  const li = document.createElement('li')
  li.textContent = inputValue;
  ulEl.appendChild(li);
  inputEl.value = '';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.style.marginLeft = '10px';
  deleteBtn.style.cursor = 'pointer';
  li.appendChild(deleteBtn)

  deleteBtn.addEventListener('click', () => {
    ulEl.removeChild(li);
  })

  li.addEventListener('click', () => {
    li.style.textDecoration = 
      li.style.textDecoration === 'line-through' ? 'none' : 'line-through';
  })
})


/* 💡 What It Does:
1. Takes the value from your input field.
2. Creates a new <li> element.
3. Adds it to your <ul>.
4. Clears the input box after adding. */