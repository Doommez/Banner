import './index.html';
import './style.css';
import {useLang} from "./modules/useLang";

window.addEventListener('DOMContentLoaded', function() {
  useLang('data-translate');
});

