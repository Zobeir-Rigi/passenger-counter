let count = 0;
let countE1 =document.getElementById("count-el");
let saveE1 = document.getElementById("save-el");

function increment() {
  count +=1;
  countE1.innerText = count;
}

function save() {
  countstr = count + "-";
  saveE1.textcontent += countstr;

  countE1.textContent= 0;
  count = 0;
}
