import RibsApi from "ribs-api";

class RibsAjax {
  constructor(whereLoadTag, LinksToTriggerTag, baseUrl = '', progressBarTag = 'none') {
    this.whereLoadTag = document.querySelector(whereLoadTag);
    this.LinksToTriggerTag = document.querySelector(LinksToTriggerTag);
    this.api = new RibsApi(baseUrl);
    this.progressBarTag = progressBarTag !== 'none' ? document.querySelector(progressBarTag) : 'none';

    if (!this.whereLoadTag || !this.progressBarTag || !this.LinksToTriggerTag) {
      console.error('divWhereLoad or progressBar or whereLoadTag not found in DOM');
    }

    this.addClickEventOnLinks();
  }

  /**
   * method to add click event listener on all link element in this.LinksToTriggerTag element
   * that has no ribs-no-ajax class
   */
  addClickEventOnLinks() {
    const links = this.LinksToTriggerTag.querySelectorAll('a:not(.ribs-no-ajax)');
    links.forEach((element) => {
      element.addEventListener('click', event => this.triggerLinkClick(event))
    });
  }

  /**
   * method to trigger click on a link triggered
   * @param event
   */
  triggerLinkClick(event) {
    event.preventDefault();
    const href = event.currentTarget.href;

    this.api.get(href, 'html')
      .then(data => {
        this.whereLoadTag.innerHTML = data;
      });
  }
}

export default RibsAjax;