import {DashboardPage} from './dashboard.po';


describe('protractor-tutorial - Public page', () => {
  let page: DashboardPage;

  beforeEach(() => {
    page = new DashboardPage();
  });


  it('Spinner should appear on dashboard page', () => {
    page.navigateTo();
    expect(page.getPageSpinner()).toBeTruthy('Spinner is not on the page');
  });

});
