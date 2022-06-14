import changeDisplay from './popups/changeDisplay.js';
import comparisonDataName from './popups/comparisonDataName';
import closePopup from './popups/closePopup.js';
import openPopup from './popups/openPopup.js';

const popup = () => {
  const POPUP_NAMES = [
    'popup',
    'popup_calc_end',
    'popup_calc_profile',
    'popup_calc',
    'popup_engineer',
  ];

  const showPopupByTime = (selector, time) => {
    const popup = document.querySelector(`.${selector}`);
    setTimeout(() => {
      changeDisplay(popup, 'block');
      document.body.style.overflow = 'hidden';
    }, time);
  };

  openPopup(POPUP_NAMES, changeDisplay, comparisonDataName);
  closePopup(POPUP_NAMES, changeDisplay, comparisonDataName);

  showPopupByTime(POPUP_NAMES[0], 600);
};

export default popup;
