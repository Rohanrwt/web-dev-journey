//document.getElementById('count-el').innerText = 5

let count = 0;
let countEl = document.getElementById('count-el');

function increment() {
  count += 1;
  countEl.innerText = count;
}

function decrement() {
  count -= 1;
  countEl.innerText = count;
}

function reset() {
  count = 0;
  countEl.innerText = count;
}

function save() {
  let saveEl = document.getElementById('entry')
  //Append number with a dash
  saveEl.innerText += count + ' - ';
}