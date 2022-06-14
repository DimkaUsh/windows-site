const closePopup = (POPUP_NAMES, changeDisplay, comparisonDataName) => {
  const btnClosePopup = document.querySelectorAll('.btn-close-popup');

  const popupArr = POPUP_NAMES.map((name) => {
    return document.querySelector(`.${name}`);
  });

  const addClosePopup = (el, popup) => {
    if (el.classList.contains('btn-close-popup')) {
      el.addEventListener('click', () => {
        changeDisplay(popup, '');
        document.body.style.overflow = '';
      });
    } else {
      el.addEventListener('click', (e) => {
        if (e.target.classList.contains(el.classList)) {
          changeDisplay(el, '');
        }
        document.body.style.overflow = '';
      });
    }
  };

  //add close popup for button
  btnClosePopup.forEach((btn) => {
    const popup = comparisonDataName(POPUP_NAMES, btn);
    addClosePopup(btn, popup);
  });

  //add close popup for overlay
  popupArr.forEach((popup) => {
    addClosePopup(popup);
  });
};

export default closePopup;
