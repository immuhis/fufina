import { formatCurrency, slugify } from '@/lib/utils';

describe('utils', () => {
  it('formats currency in euros', () => {
    expect(formatCurrency(12345)).toBe('€123.45');
  });

  it('slugifies titles', () => {
    expect(slugify('Aurora Silk Midi Dress')).toBe('aurora-silk-midi-dress');
  });
});
