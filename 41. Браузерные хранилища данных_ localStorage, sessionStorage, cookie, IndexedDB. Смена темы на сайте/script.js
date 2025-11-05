// Cookie

//write cookie

console.log((document.cookie = 'date=Date'));
console.log((document.cookie = 'age=28'));

// document.cookie = 'date of birth=february 24, 1995';

// Если в значении имени или значения есть спецсимволы (напр. пробелы), для правильного отображения нужно использовать функцию encodeURICimponent

document.cookie = `${encodeURIComponent('date of birth')}=${encodeURIComponent(
  'february 24, 1995'
)}`;

// const setCookie = (name, value) => {
//   document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
// };

const setCookie = (name, value, options = {}) => {
  let newEntryBoy = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  const optionsAsString = Object.entries(options)
    .map((entry) => entry.join('='))
    .join('; ');

  if (optionsAsString) {
    newEntryBoy += `; ${optionsAsString}`;
  }

  document.cookie = newEntryBoy;
};

const deleteCookie = (name) => {
  setCookie(name, '', { 'max-age': -1 });
};

const getCookie = (name) => {
  for (const entryStr of document.cookie.split('; ')) {
    const [entryName, entryValue] = entryStr.split('=');
    if (decodeURIComponent(entryName) === name) {
      return decodeURIComponent(entryValue) || entryValue;
    }
  }
};

setCookie('date of birth1', 'february 25, 2005');

//delete cookie

deleteCookie('age');

//read cookie

console.log(document.cookie);

console.log('Age:', getCookie('age'));
console.log('Date of birth:', getCookie('date of birth'));
console.log('Date of birth1:', getCookie('date of birth1'));

// sessionStorage

sessionStorage.setItem('username', 'Aleksander');
sessionStorage.setItem('age', '28');

sessionStorage.setItem(
  'user',
  JSON.stringify({ username: 'Aleksander', age: 28, isDeveloper: true })
);

console.log('username:', sessionStorage.getItem('username'));
console.log('age:', sessionStorage.getItem('age'));
console.log('user:', sessionStorage.getItem('user'));
console.log('user:', JSON.parse(sessionStorage.getItem('user')));

// sessionStorage.removeItem('username');

// console.log('sessionStorage до очищения:', sessionStorage);

// sessionStorage.clear();

// console.log('sessionStorage после очищения:', sessionStorage);
