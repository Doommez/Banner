import './index.html';
import './styles/index.css'
import {useLang} from "./modules/useLang";
import {chooseSubscription} from "./modules/chooseSubscription";

window.addEventListener('DOMContentLoaded', function() {
  useLang('data-translate');
  chooseSubscription(
    '.container-packages',
    '.container-packages__package',
    'container-packages__package_active',
    '.actions__continue'
  )
});

