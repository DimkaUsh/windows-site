const openPopup = (POPUP_NAMES, changeDisplay, comparisonDataName) => {
  const btnsOpenPopup = document.querySelectorAll('.btn-open-popup');

  const addOpenPopup = (el, popup) => {
    el.addEventListener('click', (e) => {
      if (e.target) {
        e.preventDefault();
        document.body.style.overflow = 'hidden';
        changeDisplay(popup, 'block');
      }
    });
  };

  //add open popup for button
  btnsOpenPopup.forEach((btn) => {
    const popup = comparisonDataName(POPUP_NAMES, btn);
    addOpenPopup(btn, popup);
  });
};

export default openPopup;
