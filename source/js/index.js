import RibsApi from 'ribs-api';

const api = new RibsApi('', 'cors');
const main = document.querySelector('main');

api.get('test.html', 'html').then(data => {
  main.innerHTML = data;
});

