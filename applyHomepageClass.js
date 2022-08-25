document.addEventListener('DOMContentLoaded', () => {
  const className = 'overflow-hidden';
  const homepageId = '27136762';

  const setPageHeight = () => {
    const pathname = window.location.pathname;
    const htmlWithHomepage = $(`html:has(body[data-page-id="${homepageId}"])`);

    if (htmlWithHomepage.length > 0 && pathname === '/') {
      const page = $(`.page[data-id="${homepageId}"]`);
      if (page.length > 0) {
        // console.log('Page exists, let us mess with it')
        page[0].style.height = window.innerHeight + 'px';
        page[0].style.minHeight = 'auto';
      }
    }
  };

  const checkAndApplyHomepageClass = () => {
    const pathname = window.location.pathname;
    const htmlWithHomepage = $(`html:has(body[data-page-id="${homepageId}"])`);
    // console.log('Html with Homepage length', htmlWithHomepage?.length);
    if (htmlWithHomepage.length > 0 && pathname === '/') {
      // console.log('Homepage, add the class');
      htmlWithHomepage[0]?.classList.add(className);
    } else {
      // console.log('No homepage!, Remove the class');
      $('html')[0]?.classList.remove(className);
    }
  };

  checkAndApplyHomepageClass();
  setPageHeight();

  window.addEventListener('resize', setPageHeight);

  Cargo.Event.on("add_history", function () {
    console.log('History changed, new page');
    console.log('Window pathname', window.location.pathname);
    checkAndApplyHomepageClass();
    setPageHeight();
  });
});
