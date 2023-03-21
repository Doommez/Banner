import ru from '../assets/Localizations/ru.json';
import fr from '../assets/Localizations/fr.json';
import zh from '../assets/Localizations/zh.json';
import ja from '../assets/Localizations/ja.json';
import nl from '../assets/Localizations/nl.json';
import es from '../assets/Localizations/es.json';
import en from '../assets/Localizations/en.json';

export const useLang = (atrTranslate) => {

  const langs = {
    ru,
    fr,
    zh,
    ja,
    nl,
    es,
    en,
  };

  const allLangs = Object.keys(langs);

  const url = new URL(window.location.href);

  function checkLanguage() {
    const langSystem = (navigator.language || navigator.userLanguage).substring(0, 2);
    let langParam = url.searchParams.get('lang')
    switch (true) {
      case allLangs.includes(langParam):
        setURL(langParam)
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
      url.searchParams.set('lang', lang)
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
    }
  }

  function setAttr(str, currentLanguage) {
    return str.dataset.lang = currentLanguage;
  }

  function changeLanguage(currentLanguage) {
    const translateField = document.querySelectorAll(`[${atrTranslate}]`);
    const changePrice = setPrice();
    translateField.forEach((str) => {
      const field = str.dataset.translate;
      const packageCurrentLanguage = langs[currentLanguage];
      if (field.includes('{{price}}')) {
        packageCurrentLanguage[field] = changePrice(field, packageCurrentLanguage[field]);
      }
      str.innerHTML = packageCurrentLanguage[field];
      setAttr(str, currentLanguage);
    })
  }

  checkLanguage();
}

