import { AlsoRannPage } from './app.po';

describe('also-rann App', () => {
  let page: AlsoRannPage;

  beforeEach(() => {
    page = new AlsoRannPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
