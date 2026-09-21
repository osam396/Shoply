import { CreditCardFormat } from './credit-card-format';

describe('CreditCardFormatTsPipe', () => {
  it('create an instance', () => {
    const pipe = new CreditCardFormat();
    expect(pipe).toBeTruthy();
  });
});
