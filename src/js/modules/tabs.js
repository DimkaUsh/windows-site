import comparisonDataName from './service/comparisonDataName';
import changeDisplay from './service/changeDisplay.js';

const tabs = (TAB_NAMES, tabContent, tabBtns, tabBtnActiveClass) => {
  const changeTabContent = (tabBtn, content) => {
    tabBtn.addEventListener('click', (e) => {
      tabContent.forEach((content) => {
        changeDisplay(content, 'none');
      });

      tabBtns.forEach((tab) => {
        tab.classList.remove(tabBtnActiveClass);
      });

      if (e.target) {
        e.preventDefault();
        changeDisplay(content, 'block');
      }
      tabBtn.classList.add(tabBtnActiveClass);
    });
  };

  tabBtns.forEach((tabBtn) => {
    const content = comparisonDataName(TAB_NAMES, tabBtn);
    changeTabContent(tabBtn, content);
  });
};

export default tabs;
