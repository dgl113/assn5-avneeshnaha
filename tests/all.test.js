import path from 'path';

describe('all tests', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.goto(URL, {
      waitUntil: 'networkidle2',
    });
  });

  beforeEach(async () => {
    await page.reload({
      waitUntil: 'networkidle2',
    });
  });

  it('case1', async () => {
    await page.evaluate(
      'let item1 = new OrderItem(5,"Short (236ml)","Blonde Roast Coffee")'
    );
    const v = await page.evaluate('item1.quantity');
    expect(v).toEqual(5);
  });

  it('case2', async () => {
    await page.evaluate(
      'let item1 = new OrderItem(5,"Short (236ml)","Blonde Roast Coffee")'
    );
    const v = await page.evaluate('item1.size');
    expect(v).toEqual('Short (236ml)');
  });

  it('case3', async () => {
    await page.evaluate(
      'let item1 = new OrderItem(5,"Short (236ml)","Blonde Roast Coffee")'
    );
    const v = await page.evaluate('item1.description');
    expect(v).toEqual('Blonde Roast Coffee');
  });

  it('case4', async () => {
    await page.evaluate(
      'let item1 = new OrderItem(5,"Short (236ml)","Blonde Roast Coffee")'
    );
    const v = await page.evaluate('item1.cost()');
    expect(v).toBeCloseTo(14.95);
  });

  it('case5', async () => {
    await page.evaluate(
      'let item1 = new OrderItem(6,"Tall (354ml)","Medium Roast Coffee")'
    );
    const v = await page.evaluate('item1.cost()');
    expect(v).toBeCloseTo(19.14);
  });

  it('case6', async () => {
    await page.evaluate(
      'let item1 = new OrderItem(7,"Grande (473ml)","Dark Roast Coffee")'
    );
    const v = await page.evaluate('item1.cost()');
    expect(v).toBeCloseTo(24.43);
  });

  it('case7', async () => {
    await page.evaluate(
      'let item1 = new OrderItem(8,"Venti (591ml)","Earl Grey Tea")'
    );
    const v = await page.evaluate('item1.cost()');
    expect(v).toBeCloseTo(28);
  });

  it('case8', async () => {
    await page.evaluate(
      'let item1 = new OrderItem(9,"Short (236ml)","English Breakfast Tea")'
    );
    const v = await page.evaluate('item1.cost()');
    expect(v).toBeCloseTo(25.65);
  });

  it('case9', async () => {
    await page.evaluate(
      'let item1 = new OrderItem(1,"Venti (591ml)","Blonde Roast Coffee")'
    );
    const v = await page.evaluate('item1.cost()');
    expect(v).toBeCloseTo(3.99);
  });

  it('caseX', async () => {
    await page.evaluate(
      'let item1 = new OrderItem(2,"Short (236ml)","Medium Roast Coffee")'
    );
    const v = await page.evaluate('item1.cost()');
    expect(v).toBeCloseTo(5.98);
  });
});
