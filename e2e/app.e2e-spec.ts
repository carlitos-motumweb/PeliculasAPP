import { PeliculasAPPPage } from './app.po';

describe('peliculas-app App', () => {
  let page: PeliculasAPPPage;

  beforeEach(() => {
    page = new PeliculasAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
