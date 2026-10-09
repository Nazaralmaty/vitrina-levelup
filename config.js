/* Витрина платформы · конфиг под лида. Единственный файл, который правится
   при клонировании витрины: имя, ссылки, тизер, тексты. Грузится ПЕРВЫМ. */
window.BRAND = {
  name: "Level Up",
  logo: "assets/brand-logo.png",
  logoWhite: "assets/brand-logo-white.png",
  whatsapp: "77073901201",   /* digits for wa.me; empty = Instagram only */
  instagram: "https://www.instagram.com/levelup.kz/",
  waText: "Здравствуйте! Посмотрел демо платформы для Level Up, хочу такую же.",
  video: true,   /* assets/teaser.mp4 — 34 s Forest English cut, ships with the template */
  teaser: '',    /* optional YouTube id; overrides nothing while video is true */
  texts: {
    ru: {
      startKicker: 'Демо-платформа',
      chipLessons: '{n} уроков',
      chipGames: '3 игры',
      chipCartoons: 'мультики',
      startSub: 'Так выглядит платформа для {name}: видеоуроки, задания, словарь и игры.',
      startCta: 'Смотреть демо',
      consentShort: 'Согласен, что прогресс хранится на этом телефоне',
      consentText: 'Это демо: аккаунта нет, в интернет не уходит ничего. Пройденные уроки лежат в браузере этого телефона и стираются кнопкой «Удалить мои данные» в профиле.',
      videoTitle: 'Здесь будет ваш видеоурок',
      videoSub: 'Снимем для вашей школы такие же мультики: ученик смотрит историю, а не правило. Формат показываем на примере одного тизера.',
      taskTitle: 'Задания под вашу программу',
      taskSub: 'Методологи соберут задания из ваших уроков — проверка, варианты и разбор ошибок. Считается отдельно.',
      taskCap: 'Наполним под вашу программу',
      wantSame: 'Хочу так же'
    },
    kk: {
      startKicker: 'Демо-платформа',
      chipLessons: '{n} сабақ',
      chipGames: '3 ойын',
      chipCartoons: 'мультфильмдер',
      startSub: '{name} үшін платформа осылай көрінеді: видеосабақ, тапсырма, сөздік және ойындар.',
      startCta: 'Демоны көру',
      consentShort: 'Прогресс осы телефонда сақталатынына келісемін',
      consentText: 'Бұл демо: аккаунт жоқ, интернетке ештеңе жіберілмейді. Өткен сабақтар осы телефонның браузерінде сақталады, профильдегі «Менің деректерімді өшіру» батырмасы бәрін өшіреді.',
      videoTitle: 'Мұнда сіздің видеосабағыңыз болады',
      videoSub: 'Сіздің мектебіңізге осындай мультфильмдер түсіреміз: оқушы ережені емес, оқиғаны көреді. Форматты бір тизер мысалында көрсетеміз.',
      taskTitle: 'Сіздің бағдарламаңызға тапсырмалар',
      taskSub: 'Әдіскерлер сіздің сабақтарыңыздан тапсырма жинайды — тексеру, нұсқалар және қателерді талдау. Жеке қызмет.',
      taskCap: 'Сіздің бағдарламаңызға бейімдейміз',
      wantSame: 'Маған да осындай керек'
    }
  }
};
window.bt = function (k) {
  var l = 'ru';
  try { l = (JSON.parse(localStorage.getItem('vitrina.' + (location.pathname.split('/')[1] || 'lead'))) || {}).lang || 'ru'; } catch (e) {}
  var v = (window.BRAND.texts[l] && window.BRAND.texts[l][k]) || window.BRAND.texts.ru[k];
  return String(v).replace('{name}', window.BRAND.name);
};
