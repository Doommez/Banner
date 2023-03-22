/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 91:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ 625:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/893b0a2c7def20249ea6.svg";

/***/ }),

/***/ 189:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/a760b96ec75330af9234.svg";

/***/ }),

/***/ 9:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/2643fc53f353d7189579.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/html-loader/dist/runtime/getUrl.js
var getUrl = __webpack_require__(91);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);
;// CONCATENATED MODULE: ./src/index.html
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(9), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(625), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(189), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = getUrl_default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = getUrl_default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = getUrl_default()(___HTML_LOADER_IMPORT_2___);
var code = "<!doctype html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"> <meta name=\"viewport\" content=\"width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1\"> <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"> <title>Banner</title> </head> <body> <div class=\"banner\"> <div class=\"banner__header header\"> <a href=\"#\" class=\"header__close\"></a> <a href=\"#\" class=\"header__restore\" data-translate=\"Restore\">Restore </a> </div> <div class=\"banner__content content\"> <div class=\"content__title\" data-translate=\"Unlimited Access<br>to All Features\"> Unlimited Access<br>to All Features </div> <div class=\"content__list list\"> <ul class=\"list__container-points container-points\"> <li class=\"container-points__point point\"> <img class=\"point__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"unlimitedDocs\"> <div class=\"point__text\" data-translate=\"Unlimited documents\"> Unlimited documents </div> </li> <li class=\"container-points__point point\"> <img class=\"point__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"export\"> <div class=\"point__text\" data-translate=\"Count mode\"> Count mode </div> </li> <li class=\"container-points__point point\"> <img class=\"point__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"no Ads\"> <div class=\"point__text\" data-translate=\"Text recognition (OCR)\">Text recognition (OCR) </div> </li> </ul> </div> <div class=\"content__subscriptions subscriptions\"> <ul class=\"subscriptions__container-packages container-packages\"> <li class=\"container-packages__package package\"> <a href=\"https://apple.com/\" title=\"Monthly\" class=\"container-packages__link\"> <div class=\"package__time\" data-translate=\"Monthly\"> Monthly </div> <div class=\"package__price\" data-translate=\"<strong>{{price}}</strong><br>per month\"> <strong>$9.99</strong><br>per month </div> <div class=\"package__alert\" data-translate=\"3 DAYS FREE\"> 3 DAYS FREE </div> <div class=\"package__month-price\" data-translate=\"{{price}}/month\"> $9.99 month </div> </a> </li> <li class=\"container-packages__package package benefit\"> <a href=\"https://google.com/\" title=\"Annually\" class=\"container-packages__link\"> <div class=\"package__time\" data-translate=\"Annually\"> Annually </div> <div class=\"package__benefit\" data-translate=\"-83%\"> -83% </div> <div class=\"package__price\" data-translate=\"<strong>{{price}}</strong><br>per year\"> <strong>$19.99</strong><br>per year </div> <div class=\"package__alert\" data-translate=\"MOST POPULAR\"> MOST POPULAR </div> <div class=\"package__month-price\" data-translate=\"{{price}}/month\"> 1.66 month </div> </a> </li> </ul> </div> <div class=\"content__actions actions\"> <button class=\"actions__continue\" data-translate=\"Continue\"> Continue </button> <a href=\"#\" class=\"actions__cancel\" data-translate=\"Auto-renewable. Cancel anytime.\"> Auto-rewable. Cancel anytime </a> </div> <div class=\"banner__footer footer\"> <a href=\"#\" class=\"footer__terms\" data-translate=\"Terms of Use\"> Terms of Use </a> <a href=\"#\" class=\"footer__privacy\" data-translate=\"Privacy Policy\"> Privacy Policy </a> </div> </div> </div> </body> </html> ";
// Exports
/* harmony default export */ const src = ((/* unused pure expression or super */ null && (code)));
;// CONCATENATED MODULE: ./src/assets/Localizations/ru.json
const ru_namespaceObject = JSON.parse('{"Unlimited Access<br>to All Features":"Неограниченный доступ<br>ко всем функциям","Unlimited documents":"Любое количество документов","Count mode":"Режим «Подсчет»","Text recognition (OCR)":"Распознавание текста (OCR)","Monthly":"1 месяц","<strong>{{price}}</strong><br>per month":"<strong>{{price}}</strong><br>в месяц","3 DAYS FREE":"3 ДНЯ БЕСПЛАТНО","{{price}}/month":"{{price}}/месяц","Annually":"1 ГОД","-83%":"-83%","<strong>{{price}}</strong><br>per year":"<strong>{{price}}</strong><br>в год","MOST POPULAR":"ПОПУЛЯРНОЕ","Continue":"Продолжить","Auto-renewable. Cancel anytime.":"Автопродление. Отмена в любое время.","Terms of Use":"Условия использования","Restore":"Восстановить","Privacy Policy":"Конфиденциальность"}');
;// CONCATENATED MODULE: ./src/assets/Localizations/fr.json
const fr_namespaceObject = JSON.parse('{"Unlimited Access<br>to All Features":"Accès illimité<br>à toutes les fonctionnalités","Unlimited documents":"Documents illimités","Count mode":"Mode décompte","Text recognition (OCR)":"Reconnaissance de texte (OCR)","Monthly":"Tous les mois","<strong>{{price}}</strong><br>per month":"<strong>{{price}}</strong><br>par mois","3 DAYS FREE":"3 JOURS GRATUITS","{{price}}/month":"{{price}}/mois","Annually":"Tous les ans","-83%":"-83%","<strong>{{price}}</strong><br>per year":"<strong>{{price}}</strong><br>par an","MOST POPULAR":"LE PLUS POPULAIRE","Continue":"Continuer","Auto-renewable. Cancel anytime.":"Renouvelable automatiquement. Annulez à tout moment.","Terms of Use":"Conditions d\'utilisation","Restore":"Restaurer","Privacy Policy":"Politique de confidentialité"}');
;// CONCATENATED MODULE: ./src/assets/Localizations/zh.json
const zh_namespaceObject = JSON.parse('{"Unlimited Access<br>to All Features":"无限制使用<br>所有功能","Unlimited documents":"文档无限制","Count mode":"计数模式","Text recognition (OCR)":"文本识别（OCR）","Monthly":"每月","<strong>{{price}}</strong><br>per month":"<strong>{{price}}</strong>每月<br>","3 DAYS FREE":"3日免费","{{price}}/month":"{{price}}/月","Annually":"包年","-83%":"-83%","<strong>{{price}}</strong><br>per year":"每年<strong>{{price}}</strong><br>","MOST POPULAR":"最热门","Continue":"继续","Auto-renewable. Cancel anytime.":"自动续订。可随时取消。","Terms of Use":"使用条款","Restore":"恢复","Privacy Policy":"隐私政策"}');
;// CONCATENATED MODULE: ./src/assets/Localizations/ja.json
const ja_namespaceObject = JSON.parse('{"Unlimited Access<br>to All Features":"全ての機能へ<br>無制限アクセス","Unlimited documents":"無制限のドキュメント","Count mode":"カウントモード","Text recognition (OCR)":"テキスト認識 (OCR)","Monthly":"月次","<strong>{{price}}</strong><br>per month":"<strong>{{price}}</strong><br>/月","3 DAYS FREE":"3日間無料","{{price}}/month":"{{price}}/か月","Annually":"年次","-83%":"-83%","<strong>{{price}}</strong><br>per year":"<strong>{{price}}</strong><br>/年","MOST POPULAR":"一番人気","Continue":"続行する","Auto-renewable. Cancel anytime.":"自動更新可能。いつでもキャンセル可能。","Terms of Use":"利用規約","Restore":"復元する","Privacy Policy":"プライバシーポリシー"}');
;// CONCATENATED MODULE: ./src/assets/Localizations/nl.json
const nl_namespaceObject = JSON.parse('{"Unlimited Access<br>to All Features":"Onbeperkte toegang<br>tot alle functies","Unlimited documents":"Onbeperkt aantal documenten","Count mode":"Aantal modus","Text recognition (OCR)":"Gratis tekstherkenning (OCR)","Monthly":"Maandelijks","<strong>{{price}}</strong><br>per month":"<strong>{{price}}</strong><br>per maand","3 DAYS FREE":"3 DAGEN GRATIS","{{price}}/month":"{{price}}/maand","Annually":"Jaarlijks","-83%":"-83%","<strong>{{price}}</strong><br>per year":"<strong>{{price}}</strong><br>per jaar","MOST POPULAR":"MEEST POPULAIR","Continue":"Doorgaan","Auto-renewable. Cancel anytime.":"Automatisch verlengbaar. Altijd annuleren.","Terms of Use":"Gebruiksvoorwaarden","Restore":"Herstellen","Privacy Policy":"Privacybeleid"}');
;// CONCATENATED MODULE: ./src/assets/Localizations/es.json
const es_namespaceObject = JSON.parse('{"Unlimited Access<br>to All Features":"Acceso ilimitado<br>a todas las funciones","Unlimited documents":"Documentos ilimitados","Count mode":"Modo de recuento","Text recognition (OCR)":"Reconocimiento de texto (OCR)","Monthly":"Mensual","<strong>{{price}}</strong><br>per month":"<strong>{{price}}</strong><br>por mes","3 DAYS FREE":"3 DÍAS GRATIS","{{price}}/month":"{{price}}/mes","Annually":"Anual","-83%":"-83%","<strong>{{price}}</strong><br>per year":"<strong>{{price}}</strong><br>por año","MOST POPULAR":"LO MÁS PEDIDO","Continue":"Continuar","Auto-renewable. Cancel anytime.":"Renovable automáticamente. Cancela cuando quieras.","Terms of Use":"Términos de uso","Restore":"Restablecer","Privacy Policy":"Política de privacidad"}');
;// CONCATENATED MODULE: ./src/assets/Localizations/en.json
const en_namespaceObject = JSON.parse('{"Unlimited Access<br>to All Features":"Unlimited Access<br>to All Features","Unlimited documents":"Unlimited documents","Count mode":"Count mode","Text recognition (OCR)":"Text recognition (OCR)","Monthly":"Monthly","<strong>{{price}}</strong><br>per month":"<strong>{{price}}</strong><br>per month","3 DAYS FREE":"3 DAYS FREE","{{price}}/month":"{{price}}/month","Annually":"Annually","-83%":"-83%","<strong>{{price}}</strong><br>per year":"<strong>{{price}}</strong><br>per year","MOST POPULAR":"MOST POPULAR","Continue":"Continue","Auto-renewable. Cancel anytime.":"Auto-renewable. Cancel anytime.","Terms of Use":"Terms of Use","Restore":"Restore","Privacy Policy":"Privacy Policy"}');
;// CONCATENATED MODULE: ./src/modules/useLang.js







const useLang = atrTranslate => {
  const langs = {
    ru: ru_namespaceObject,
    fr: fr_namespaceObject,
    zh: zh_namespaceObject,
    ja: ja_namespaceObject,
    nl: nl_namespaceObject,
    es: es_namespaceObject,
    en: en_namespaceObject
  };
  const allLangs = Object.keys(langs);
  const url = new URL(window.location.href);
  function checkLanguage() {
    const langSystem = (navigator.language || navigator.userLanguage).substring(0, 2);
    let langParam = url.searchParams.get('lang');
    switch (true) {
      case allLangs.includes(langParam):
        setURL(langParam);
        break;
      case allLangs.includes(langSystem):
        setURL(langSystem);
        break;
      default:
        setURL('en');
    }
  }
  function setURL(lang) {
    if (!url.searchParams.has('lang')) {
      url.searchParams.append('lang', lang);
    } else {
      url.searchParams.set('lang', lang);
    }
    history.pushState(null, null, url.href);
    changeLanguage(lang);
  }
  function setPrice() {
    const pricePerMonth = 9.99;
    const pricePerYear = 19.99;
    const bestPrice = 1.66;
    let firstCase = true;
    return (field, str) => {
      switch (field) {
        case "<strong>{{price}}</strong><br>per month":
          return str.replace('{{price}}', `$${pricePerMonth}`);
        case "{{price}}/month":
          const value = firstCase ? pricePerMonth : bestPrice;
          firstCase = !firstCase;
          return str.replace('{{price}}', `$${value}`);
        case "<strong>{{price}}</strong><br>per year":
          return str.replace('{{price}}', `$${pricePerYear}`);
        default:
          return str;
      }
    };
  }
  function setAttr(str, currentLanguage) {
    return str.dataset.lang = currentLanguage;
  }
  function changeLanguage(currentLanguage) {
    const translateField = document.querySelectorAll(`[${atrTranslate}]`);
    const changePrice = setPrice();
    translateField.forEach(str => {
      const field = str.dataset.translate;
      const packageCurrentLanguage = langs[currentLanguage];
      if (field.includes('{{price}}')) {
        packageCurrentLanguage[field] = changePrice(field, packageCurrentLanguage[field]);
      }
      str.innerHTML = packageCurrentLanguage[field];
      setAttr(str, currentLanguage);
    });
  }
  checkLanguage();
};
;// CONCATENATED MODULE: ./src/modules/chooseSubscription.js
const chooseSubscription = function (fieldSelector, subscriptionsSelector, activeClass, submitSubscriptionSelector) {
  let selectedFirstElement = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  let currentSubscription = null;
  const field = document.querySelector(fieldSelector);
  const subscriptions = document.querySelectorAll(subscriptionsSelector);
  const submitBtn = document.querySelector(submitSubscriptionSelector);
  let currentURL = null;
  function selectCurrentSubscription(subscriptions, index, activeClass) {
    subscriptions[index].classList.add(activeClass);
    currentSubscription = subscriptions[index];
    currentURL = currentSubscription.firstElementChild.href;
  }
  function setListenerSelectedSub(e) {
    e.preventDefault();
    subscriptions.forEach((subscription, index) => {
      if (subscription.contains(e.target)) {
        if (currentSubscription) {
          currentSubscription.classList.remove(activeClass);
        }
        selectCurrentSubscription(subscriptions, index, activeClass);
      }
    });
  }
  function goSubscription(e) {
    e.preventDefault();
    location.href = currentURL;
  }
  function setListeners() {
    field.addEventListener('click', setListenerSelectedSub);
    submitBtn.addEventListener('click', goSubscription);
  }
  function destroyListeners() {
    field.removeEventListener('click', setListenerSelectedSub);
    submitBtn.removeEventListener('click', goSubscription);
  }
  if (selectedFirstElement) {
    selectCurrentSubscription(subscriptions, 0, activeClass);
  }
  setListeners();
  return {
    destroyListeners
  };
};
;// CONCATENATED MODULE: ./src/index.js




window.addEventListener('DOMContentLoaded', function () {
  useLang('data-translate');
  chooseSubscription('.container-packages', '.container-packages__package', 'container-packages__package_active', '.actions__continue');
});
})();

/******/ })()
;