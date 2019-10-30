import RibsApi from 'ribs-api';
import RibsAjax from './RibsAjax';

const ribsAjax = new RibsAjax('main', 'nav#left-nav');

ribsAjax.loadPage('pages/dashboard.html');
