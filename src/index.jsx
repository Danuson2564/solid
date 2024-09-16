/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import './assets/css/plugins/jsgrid-theme.css'
import './assets/css/plugins/jsgrid-theme.min.css'
import './assets/css/plugins/jsgrid.css'
import './assets/css/plugins/jsgrid.min.css'
import './assets/css/styles-rtl.css'
import './assets/css/styles.css'
import './assets/fonts/tabler-icons/tabler-icons.css'
import './assets/fonts/flag-icon-css/flag-icon.min.css'
import './assets/fonts/crypto-icons/cryptocoins-colors.css'
import './assets/fonts/crypto-icons/cryptocoins.css'

// import './assets/js/vendor.min.js'
// import './assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js'
// import './assets/libs/simplebar/dist/simplebar.min.js'
// import './assets/js/theme/app.horizontal.init.js'
// import './assets/js/theme/theme.js'
// import './assets/js/theme/app.min.js'
// import './assets/js/theme/sidebarmenu.js'
// import './assets/libs/apexcharts/dist/apexcharts.min.js'
// import './assets/js/dashboards/dashboard.js'

import App from './App';
console.log(`App`, App)
const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <App />, root);
