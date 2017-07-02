import { PageGithubPage } from './app.po';

describe('page-github App', () => {
  let page: PageGithubPage;

  beforeEach(() => {
    page = new PageGithubPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
