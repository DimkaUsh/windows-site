import './slider';
import popups from './modules/popups.js';
import tabs from './modules/tabs.js';

window.addEventListener('DOMContentLoaded', () => {
  popups();
  /* Glazing tabs */
  const TAB_GLAZING_NAMES = ['tree', 'aluminum', 'plastic', 'french', 'rise'];
  const glazingContent = document.querySelectorAll('.glazing_content');
  const tabGlazingBtns = document.querySelectorAll('.slider_btn');
  const activeGlazingTabClass = 'active';
  tabs(TAB_GLAZING_NAMES, glazingContent, tabGlazingBtns, activeGlazingTabClass);
  /* Decoration tabs */
  const TABS_DECORATION_NAMES = ['internal', 'external', 'rising', 'roof'];
  const decorationContent = document.querySelectorAll('.decoration_card');
  const tabDecorationBtns = document.querySelectorAll('.decoration_btn');
  const activeDecoratioTabClass = 'after_click';
  tabs(TABS_DECORATION_NAMES, decorationContent, tabDecorationBtns, activeDecoratioTabClass);
});
