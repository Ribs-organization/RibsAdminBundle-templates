import RibsAjax from './RibsAjax';

const ribsAjax = new RibsAjax('main', 'nav#left-nav', '#loader');

ribsAjax.loadPage('pages/dashboard.html');
