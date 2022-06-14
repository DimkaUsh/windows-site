import changeDisplay from './changeDisplay.js';
import comparisonDataName from './comparisonDataName';
import closePopup from './closePopup.js';
import openPopup from './openPopup.js';

const POPUP_NAMES = [
  'popup_calc_end',
  'popup_calc_profile',
  'popup_calc',
  'popup_engineer',
  'popup',
];

closePopup(POPUP_NAMES, changeDisplay, comparisonDataName);
openPopup(POPUP_NAMES, changeDisplay, comparisonDataName);
