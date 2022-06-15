import comparisonDataName from './service/comparisonDataName';
import changeDisplay from './service/changeDisplay.js';

const tabs = () => {
  const TABS_NAMES = ['tree', 'aluminum', 'plastic', 'french', 'rise'];
  const glazingContent = document.querySelectorAll('.glazing_content');
  const tabBtns = document.querySelectorAll('.slider_btn');

  const changeGlazingContent = (tabBtn, content) => {
    tabBtn.addEventListener('click', (e) => {
      glazingContent.forEach((content) => {
        changeDisplay(content, 'none');
      });
      if (e.target) {
        e.preventDefault();
        changeDisplay(content, 'block');
      }
    });
  };

  tabBtns.forEach((tabBtn) => {
    const content = comparisonDataName(TABS_NAMES, tabBtn);
    changeGlazingContent(tabBtn, content);
  });
};

export default tabs;
