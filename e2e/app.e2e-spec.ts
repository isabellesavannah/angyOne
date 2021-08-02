import { AngyOnePage } from './app.po';

describe('angy-one App', function() {
  let page: AngyOnePage;

  beforeEach(() => {
    page = new AngyOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
