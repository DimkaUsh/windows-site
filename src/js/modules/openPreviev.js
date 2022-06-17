import changeDisplay from './service/changeDisplay';

const openPreviev = () => {
  const previews = document.querySelectorAll('.preview');
  const overlay = document.querySelector('.overlay');

  function onClickPreview(target, overlay) {
    overlay.innerHTML = `<img class="preview big" src="assets/img/our_works/big_img/${target.getAttribute(
      'data-img',
    )}.png" alt="window">`;
    changeDisplay(overlay, 'flex');
  }

  overlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('overlay')) {
      changeDisplay(overlay, '');
    }
  });

  previews.forEach((preview) => {
    preview.addEventListener('click', (e) => {
      const target = e.target;
      onClickPreview(target, overlay);
    });
  });
};

export default openPreviev;
