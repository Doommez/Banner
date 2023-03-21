import './index.html';
import './styles/style.css';
import './styles/textStyles.css'
import {useLang} from "./modules/useLang";

window.addEventListener('DOMContentLoaded', function() {
  useLang('data-translate');
});

