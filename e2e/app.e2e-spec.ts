import { TestProjectPage } from './app.po';

describe('angular2-workshop App', () => {
  let page: TestProjectPage;

  beforeEach(() => {
    page = new TestProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
