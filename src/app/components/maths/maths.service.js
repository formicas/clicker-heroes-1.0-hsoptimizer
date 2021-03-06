'use strict';

export default {
  'linear': {
    'unit': n => n,
    'sum': n => n * (n + 1) / 2},
  'linear10': {
    'unit': n => Math.ceil(n / 10),
    'sum': n => Math.ceil(n * (n + 1) / 20)},
  'constant': {
    'unit': () => 1,
    'sum': n => n + 1},
  'exponential': {
    'unit': n => Math.pow(2, n),
    'sum': n => Math.pow(2, n + 1) - 1},
  'polynomial1_5': {
    'unit': n => Math.ceil(Math.pow(n, 1.5)),
    // Using approximation from Euler-Maclaurin formula:
    // https://en.wikipedia.org/wiki/Euler%E2%80%93Maclaurin_formula#The_formula
    // Inspired by;
    // http://math.stackexchange.com/questions/1393811/sum-of-1-5-powers-of-natural-numbers
    // return Infinity when n = 0, it should be 0, can be added as an 'exception'
    // return 2 when n = 1, it should be 1, can be added as an 'exception'
    'sumApprox': n => n === 0 ? 0 : Math.ceil(2 * Math.pow(n, 2.5) / 5 + Math.pow(n, 1.5) / 2 + Math.pow(n, 0.5) / 8 + Math.pow(n, - 1.5) / 1920)},
  'sum': fn => n => {
      let sum = 0;
      for (let i = 0; i <= n; i++) {
        sum += fn(i);
      }
      return sum;
    }
}
