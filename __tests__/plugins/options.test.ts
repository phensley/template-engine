import {
  currencyOptions,
  datetimeOptions,
  decimalOptions,
  intervalOptions
} from '../../src/plugins/options';

test('decimal options', () => {
  expect(decimalOptions([])).toEqual({});
  expect(decimalOptions(['style:short'])).toEqual({ style: 'short' });
  expect(decimalOptions(['style:standard'])).toEqual({ style: 'decimal' });
  expect(decimalOptions(['style:unknown'])).toEqual({});

  expect(decimalOptions(['group'])).toEqual({ group: true });
  expect(decimalOptions(['group:false'])).toEqual({ group: false });
  expect(decimalOptions(['grouping:false'])).toEqual({ group: false });
  expect(decimalOptions(['no-group'])).toEqual({ group: false });
  expect(decimalOptions(['no-grouping'])).toEqual({ group: false });

  expect(decimalOptions(['round:ceil'])).toEqual({ round: 'ceiling' });
  expect(decimalOptions(['round:truncate'])).toEqual({ round: 'down' });
  expect(decimalOptions(['round:half-up'])).toEqual({ round: 'half-up' });
  expect(decimalOptions(['round:unknown'])).toEqual({});

  expect(decimalOptions(['minint:1'])).toEqual({ minimumIntegerDigits: 1 });
  expect(decimalOptions(['minimumIntegerDigits:1000'])).toEqual({ minimumIntegerDigits: 50 });

  expect(decimalOptions(['minsig:3'])).toEqual({ minimumSignificantDigits: 3 });
  expect(decimalOptions(['maximumSignificantDigits:7'])).toEqual({ maximumSignificantDigits: 7 });

  expect(decimalOptions(['maxfrac:2'])).toEqual({ maximumFractionDigits: 2 });
  expect(decimalOptions(['minimumFractionDigits:5'])).toEqual({ minimumFractionDigits: 5 });
  expect(decimalOptions(['minFrac:2'])).toEqual({ minimumFractionDigits: 2 });
});

test('currency options', () => {
  expect(currencyOptions(['style:short'])).toEqual({ style: 'short' });
  expect(currencyOptions(['style:standard'])).toEqual({ style: 'symbol' });
  expect(currencyOptions(['style:unknown'])).toEqual({});

  expect(currencyOptions(['symbol:narrow'])).toEqual({ symbolWidth: 'narrow' });
  expect(currencyOptions(['symbol:unknown'])).toEqual({});

  expect(currencyOptions(['group:false'])).toEqual({ group: false });
});

test('datetime options', () => {
  expect(datetimeOptions([])).toEqual({});
  expect(datetimeOptions(['date'])).toEqual({ date: 'short' });
  expect(datetimeOptions(['time'])).toEqual({ time: 'short' });
  expect(datetimeOptions(['short'])).toEqual({ datetime: 'short' });
  expect(datetimeOptions(['yMMMd'])).toEqual({ skeleton: 'yMMMd' });

  expect(datetimeOptions(['date:full'])).toEqual({ date: 'full' });
  expect(datetimeOptions(['time:full'])).toEqual({ time: 'full' });
  expect(datetimeOptions(['datetime:full'])).toEqual({ datetime: 'full' });

  expect(datetimeOptions(['context:begin-sentence'])).toEqual({ context: 'begin-sentence' });

  expect(datetimeOptions(['skeleton:hmsv'])).toEqual({ skeleton: 'hmsv' });

  expect(datetimeOptions(['wrapper:full'])).toEqual({ wrap: 'full' });
});

test('interval options', () => {
  expect(intervalOptions([])).toEqual({});
  expect(intervalOptions(['yMMMd'])).toEqual({ skeleton: 'yMMMd' });
  expect(intervalOptions(['skeleton:yMMMd'])).toEqual({ skeleton: 'yMMMd' });

  expect(intervalOptions(['date:yMMMd'])).toEqual({ date: 'yMMMd' });
  expect(intervalOptions(['time:Bh'])).toEqual({ time: 'Bh' });

  expect(intervalOptions(['context:begin-sentence'])).toEqual({ context: 'begin-sentence' });

  // ignore bare properties
  expect(intervalOptions(['context'])).toEqual({});
});
