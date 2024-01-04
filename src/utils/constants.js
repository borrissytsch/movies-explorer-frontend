import {getCSSNumVar} from './miscutils';

/* External config data: !!before webpack building add export prefix to all consts!! */
/* Debug/trace configuration flags */
export const dbgFlag = true;
export const dbgLayoutFlag = true;

/* Authentification & routes react config */
export const authRoutes = { signin: 'signin', signup: 'signup' , profile: 'profile' };
export const moviesRoutes = { movies: 'movies', savedMovies: 'saved-movies' };
export const authFormIds = { signin: 'inform', signup: 'regform' };
/* Auth forms' captions */
export const signPageCaptions = { inTitle: 'Рады видеть!', regTitle: 'Добро пожаловать!'
  , regNameLabel: 'Имя', btnEnterCaption: 'Войти', btnRegCaption: 'Зарегистрироваться'
  , tooltipErrCaption: 'Что-то пошло не так...', tooltipOkMsg: 'Вы успешно зарегистрировались'
  , regDoneCaption: 'Уже зарегистрированы?', lnkInCaption: 'Войти'
  , regNotCaption: 'Ещё не зарегистрированы?', lnkRegCaption: 'Регистрация'
};

/* Media queris config */
export const defaultScreenWidth4Match = 768;

/* React config vars */
export const projectOffset = getCSSNumVar('--project_top_offset');

/* Miscellaneous messaging/captions' consts */
export const msgSubmitButtonWait = 'Сохранение ...';
export const captionProfileButton = 'Сохранить';
export const captionCardButton = 'Создать';
export const captionConfirmButton = 'Да';

/* Test movies data 4 layout, before movies' server access obtained; can be removed from public/posters in production */
export const testCards = [
  { nameRU: '33 слова о дизайне'
  , image: `${dbgFlag && dbgLayoutFlag  ? window.location.origin : ''}/posters/poster_01.png`
  , movieId: null
  , owner: null
  , duration: '1ч42м'
  },
  { nameRU: '33 слова о дизайне'
  , image: `${dbgFlag && dbgLayoutFlag  ? window.location.origin : ''}/posters/poster_02.png`
  , movieId: null
  , owner: null
  , duration: '1ч42м'
  },
  { nameRU: '33 слова о дизайне'
  , image: `${dbgFlag && dbgLayoutFlag ? window.location.origin : ''}/posters/poster_03.png`
  , movieId: null
  , owner: null
  , duration: '1ч42м'
  },
  { nameRU: '33 слова о дизайне'
  , image: `${dbgFlag && dbgLayoutFlag ? window.location.origin : ''}/posters/poster_04.png`
  , movieId: null
  , owner: null
  , duration: '1ч42м'
  },
  { nameRU: '33 слова о дизайне'
  , image: `${dbgFlag && dbgLayoutFlag ? window.location.origin : ''}/posters/poster_05.png`
  , movieId: null
  , owner: null
  , duration: '1ч42м'
  },
  { nameRU: '33 слова о дизайне'
  , image: `${dbgFlag && dbgLayoutFlag ? window.location.origin : ''}/posters/poster_06.png`
  , movieId: null
  , owner: null
  , duration: '1ч42м'
},
  { nameRU: '33 слова о дизайне'
  , image: `${dbgFlag && dbgLayoutFlag ? window.location.origin : ''}/posters/poster_07.png`
  , movieId: null
  , owner: null
  , duration: '1ч42м'
  },
  { nameRU: '33 слова о дизайне'
  , image: `${dbgFlag && dbgLayoutFlag ? window.location.origin : ''}/posters/poster_08.png`
  , movieId: null
  , owner: null
  , duration: '1ч42м'
  },
  { nameRU: '33 слова о дизайне'
  , image: `${dbgFlag && dbgLayoutFlag ? window.location.origin : ''}/posters/poster_09.png`
  , movieId: null
  , owner: null
  , duration: '1ч42м'
  },
  { nameRU: '33 слова о дизайне'
  , image: `${dbgFlag && dbgLayoutFlag ? window.location.origin : ''}/posters/poster_10.png`
  , movieId: null
  , owner: null
  , duration: '1ч42м'
  },
  { nameRU: '33 слова о дизайне'
  , image: `${dbgFlag && dbgLayoutFlag ? window.location.origin : ''}/posters/poster_11.png`
  , movieId: null
  , owner: null
  , duration: '1ч42м'
  },
  { nameRU: '33 слова о дизайне'
  , image: `${dbgFlag && dbgLayoutFlag ? window.location.origin : ''}/posters/poster_12.png`
  , movieId: null
  , owner: null
  , duration: '1ч42м'
  },
  { nameRU: '33 слова о дизайне'
  , image: `${dbgFlag && dbgLayoutFlag ? window.location.origin : ''}/posters/poster_13.png`
  , movieId: null
  , owner: null
  , duration: '1ч42м'
  },
  { nameRU: '33 слова о дизайне'
  , image: `${dbgFlag && dbgLayoutFlag ? window.location.origin : ''}/posters/poster_14.png`
  , movieId: null
  , owner: null
  , duration: '1ч42м'
  },
  { nameRU: '33 слова о дизайне'
  , image: `${dbgFlag && dbgLayoutFlag ? window.location.origin : ''}/posters/poster_15.png`
  , movieId: null
  , owner: null
  , duration: '1ч42м'
  },
  { nameRU: '33 слова о дизайне'
  , image: `${dbgFlag && dbgLayoutFlag ? window.location.origin : ''}/posters/poster_16.png`
  , movieId: null
  , owner: null
  , duration: '1ч42м'
}];