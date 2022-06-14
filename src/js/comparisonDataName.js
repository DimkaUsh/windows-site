const comparisonDataName = (POPUP_NAMES, btn) => {
  let popup = null;
  POPUP_NAMES.forEach((popupName) => {
    if (btn.getAttribute('data-btn') === popupName) {
      popup = document.querySelector(`.${popupName}`);
    }
  });
  return popup;
};

export default comparisonDataName;
