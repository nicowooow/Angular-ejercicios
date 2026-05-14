import { ToCammelCasePipe } from './to-cammel-case-pipe';

describe('ToCammelCasePipe', () => {
  it('create an instance', () => {
    const pipe = new ToCammelCasePipe();
    expect(pipe).toBeTruthy();
  });
});
