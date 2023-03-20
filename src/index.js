import './index.html';
import './style.css';
import ru from './assets/ru.json'
const obj1 = {
  name: 'Jenya',
  age: 25,
}
const langs = {
  ru: ru
}
for (let key in obj1){
  console.log(obj1[key])
}
console.log(navigator.language)
console.log(obj1.name, 1)
console.log(langs.ru);

