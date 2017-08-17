import { ConsumeRestAngularPage } from './app.po';

describe('consume-rest-angular App', () => {
  let page: ConsumeRestAngularPage;

  beforeEach(() => {
    page = new ConsumeRestAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
