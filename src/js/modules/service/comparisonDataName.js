const comparisonDataName = (arrElNames, btn) => {
  let result = null;
  arrElNames.forEach((ElName) => {
    if (btn.getAttribute('data-btn') === ElName) {
      result = document.querySelector(`.${ElName}`);
    }
  });
  return result;
};

export default comparisonDataName;
