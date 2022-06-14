import changeDisplay from './popups/changeDisplay.js';
import comparisonDataName from './popups/comparisonDataName';
import closePopup from './popups/closePopup.js';
import openPopup from './popups/openPopup.js';

const popup = () => {
  const POPUP_NAMES = [
    'popup_calc_end',
    'popup_calc_profile',
    'popup_calc',
    'popup_engineer',
    'popup',
  ];

  openPopup(POPUP_NAMES, changeDisplay, comparisonDataName);
  closePopup(POPUP_NAMES, changeDisplay, comparisonDataName);
};

export default popup;
