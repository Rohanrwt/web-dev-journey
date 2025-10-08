//document.getElementById('count-el').innerText = 5

let count = 0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('entries')

function increment() {
  count += 1;
  countEl.textContent = count;
}

function decrement() {
  count -= 1;
  countEl.textContent = count;
}

function reset() {
  count = 0;
  countEl.textContent = count;
}

function save() {
  let countStr = count + ' - '
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0
}

