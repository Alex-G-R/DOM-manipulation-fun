const body = document.body;
//body.append("Hello world!");

const div = document.createElement('div');
body.append(div); //zawsze trzeba pojawić element
div.style.height = "200px";
div.style.width = "400px";
div.style.backgroundColor = "red";
div.style.fontFamily = "Tahoma";

const h1 = document.createElement('h1');
h1.innerText = "LOOK INTO CONSOLE :D";
div.append(h1);


const div2 = document.querySelector('.div1');
const spanHi = document.getElementById("span1");
const spanBye = document.getElementById("span2");

spanBye.remove(); // całkowicie kasuje kodzik
div2.append(spanBye); // pojawia kodzik

console.log(spanBye.getAttribute("id"));
console.log(spanHi.getAttribute("title"));
// mozna tak (gora) albo krócej (dół)
console.log(spanBye.id);
console.log(spanHi.title);

spanHi.removeAttribute("title");

console.log(spanBye.dataset)// customowe atrybuty? mozna je dodawac i sa giga cool
console.log(spanBye.dataset.position)//