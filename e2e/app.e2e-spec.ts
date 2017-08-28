import { ComponentServiceDemoPage } from './app.po';

describe('component-service-demo App', () => {
  let page: ComponentServiceDemoPage;

  beforeEach(() => {
    page = new ComponentServiceDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
