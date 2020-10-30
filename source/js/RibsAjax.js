import RibsApi from "ribs-api";

class RibsAjax {
  /**
   * constructor
   * @param whereLoadTag
   * @param LinksToTriggerTag
   * @param baseUrl
   * @param progressBarTag
   */
  constructor(whereLoadTag, LinksToTriggerTag, progressBarTag = 'none', baseUrl = '') {
    this.whereLoadTag = document.querySelector(whereLoadTag);
    this.LinksToTriggerClassString = LinksToTriggerTag;
    this.LinksToTriggerTag = document.querySelector(LinksToTriggerTag);
    this.api = new RibsApi(baseUrl, 'external');
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
    let links = [];
    if (this.LinksToTriggerTag.tagName.toLowerCase() === 'a') {
      links = document.querySelectorAll(`a:not(.ribs-no-ajax)${this.LinksToTriggerClassString}`);
    } else {
      links = this.LinksToTriggerTag.querySelectorAll('a:not(.ribs-no-ajax)');
    }

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

    this.loadPage(href);
  }

  /**
   * method to show progress bar tag
   */
  showProgressBar() {
    if (this.progressBarTag !== 'none' && this.progressBarTag) {
      this.progressBarTag.classList.add('active');
    }
  }

  /**
   * method to hide progress bar tag
   */
  hideProgressBar() {
    if (this.progressBarTag !== 'none' && this.progressBarTag) {
      this.progressBarTag.classList.remove('active');
    }
  }

  /**
   * method to load a specific page by call this url
   * @param pageUrl
   */
  loadPage(pageUrl) {
    this.showProgressBar();
    this.api.get(pageUrl, 'html')
      .then(data => {
        this.whereLoadTag.innerHTML = data;
        this.hideProgressBar();
      });
  }
}

export default RibsAjax;
