const test = require('node:test');
const assert = require('node:assert/strict');
const { calcularTotal } = require('./pedido');

test('Dos almuerzos', () => {
  assert.equal(calcularTotal(12000, 2), 24000);
});

test('Tres jugos', () => {
  assert.equal(calcularTotal(4000, 3), 12000);
});
