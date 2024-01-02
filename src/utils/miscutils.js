import { defaultScreenWidth4Match } from './constants';

/* Miscellaneous procedures (which haven't refed result) */
export const logPassLint = (
  msg,
  logPassFlag = false,
  msgLog = (msg2Log = msg, log2Flag = logPassFlag) => { if (log2Flag) console.log(msg2Log); },
) => msgLog(msg, logPassFlag);

export const getCSSNumVar = (varName) => eval(
  getComputedStyle(document.documentElement).getPropertyValue(varName).replaceAll('calc(', '(')
);

export const setCSSVar = (varName, value) => document.documentElement.style.setProperty(varName, value);

export const scrWidthMatch = (screenWidth = defaultScreenWidth4Match) => window.matchMedia(
  `(max-width: ${screenWidth}px)`
).matches;

export function setBurgerPageBackColor(moviesRestoreColor = '#202020', burgerPageBackColorVars = [
  '--movies_back_color', '--header_back_dark', '--footer_back_color', '--search_back_color', '--profile_back_color'
]) {
  burgerPageBackColorVars.forEach(elementBackColorVar => {
    setCSSVar(elementBackColorVar, moviesRestoreColor)
  });
}
