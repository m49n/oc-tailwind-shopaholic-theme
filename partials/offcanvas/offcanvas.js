import Helper from '@lovata/popup-helper';

export default new class NavigationDrawer {
  constructor() {
    this.offcanvasControllerBtn = '_offcanvas-switch';
    this.offcanvasBtnSelector = 'offcanvas-close';

    this.offcanvasWrapperSelector = 'offcanvas';
    this.offcanvasOpenNavSelector = 'offcanvas-open';

    this.handler();
  }

  handler() {
    $(document).on('click', `.${this.offcanvasControllerBtn}`, ({ currentTarget }) => {
      const isOpen = $(currentTarget).hasClass(this.offcanvasBtnSelector);
      const wrapper = $(`.${this.offcanvasWrapperSelector}`);
      const modal = document.querySelector(`.${this.offcanvasWrapperSelector}`);
      const openBtn = document.querySelector(`.${this.offcanvasControllerBtn}`);
      const focusTarget = isOpen ? $(`.${this.offcanvasControllerBtn}`)[0] : openBtn;
      const scrollCounter = $(document).scrollTop();

      Helper.overlayHandler(!isOpen, focusTarget, modal);
      Helper.setBodyScrollState(isOpen);

      $(`.${this.offcanvasControllerBtn}`).toggleClass(this.offcanvasBtnSelector);
      wrapper.toggleClass(this.offcanvasOpenNavSelector);
      //wrapper.css({ 'height': 'calc((100vh - 100%) + ' + scrollCounter + 'px)' });

      Helper.focusTrapManager(!isOpen, modal);
    });


  }
}();
