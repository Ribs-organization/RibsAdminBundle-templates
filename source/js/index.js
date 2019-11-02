import RibsAjax from './RibsAjax';
import "../scss/style.scss";

const ribsAjax = new RibsAjax('main', 'nav#left-nav', '#loader');

ribsAjax.loadPage('pages/dashboard.html');
