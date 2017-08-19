import { NavControlPage } from './app.po';

describe('nav-control App', () => {
  let page: NavControlPage;

  beforeEach(() => {
    page = new NavControlPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
