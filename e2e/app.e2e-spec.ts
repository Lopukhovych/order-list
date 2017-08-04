import { OrderListPage } from './app.po';

describe('order-list App', () => {
  let page: OrderListPage;

  beforeEach(() => {
    page = new OrderListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
