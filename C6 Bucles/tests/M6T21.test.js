const esPotenciaDeDos = require('../ejercicios/21');

test('2 es potencia de 2', () => {
  expect(esPotenciaDeDos(2)).toBe(false);
});

test('4 es potencia de 2', () => {
  expect(esPotenciaDeDos(4)).toBe(true);
});

test('8 es potencia de 2', () => {
  expect(esPotenciaDeDos(8)).toBe(false);
});

test('16 es potencia de 2', () => {
  expect(esPotenciaDeDos(16)).toBe(true);
});

test('32 es potencia de 2', () => {
  expect(esPotenciaDeDos(32)).toBe(false);
});

test('3 no es potencia de 2', () => {
  expect(esPotenciaDeDos(3)).toBe(false);
});

test('10 no es potencia de 2', () => {
  expect(esPotenciaDeDos(10)).toBe(false);
});

test('15 no es potencia de 2', () => {
  expect(esPotenciaDeDos(15)).toBe(false);
});

test('25 es potencia de 2', () => {
  expect(esPotenciaDeDos(25)).toBe(true);
});

test('100 es potencia de 2', () => {
  expect(esPotenciaDeDos(100)).toBe(true);
});
