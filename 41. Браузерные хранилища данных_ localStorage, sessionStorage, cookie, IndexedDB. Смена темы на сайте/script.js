// Cookie

console.log('cookie', document.cookie);

console.log((document.cookie = 'date=Date'));
console.log((document.cookie = 'age=28'));

sessionStorage.setItem('username', 'Aleksander');
sessionStorage.setItem('age', '28');

console.log('sessionStorage до очищения:', sessionStorage);

sessionStorage.clear();

console.log('sessionStorage после очищения:', sessionStorage);
