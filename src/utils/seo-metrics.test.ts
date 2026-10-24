import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateMetricChange,
  calculatePositionImprovement,
  calculateAeoVisibility,
  formatMetricValue
} from './seo-metrics.ts';

test('calculateMetricChange computes clicks growth correctly (182K to 745K)', () => {
  const result = calculateMetricChange(182000, 745000);
  assert.equal(result.absoluteChange, 563000);
  // 563000 / 182000 = 309.34% -> 309.3%
  assert.equal(result.percentageChange, 309.3);
  assert.equal(result.trend, 'positive');
});

test('calculateMetricChange computes impressions growth correctly (857K to 29.6M)', () => {
  const result = calculateMetricChange(857000, 29600000);
  assert.equal(result.absoluteChange, 28743000);
  // 28743000 / 857000 = 3353.9%
  assert.equal(result.percentageChange, 3353.9);
  assert.equal(result.trend, 'positive');
});

test('calculateMetricChange handles CTR decline accurately (21.2% to 2.5%)', () => {
  const result = calculateMetricChange(21.2, 2.5);
  assert.equal(result.absoluteChange, -18.7);
  assert.equal(result.trend, 'negative');
});

test('calculatePositionImprovement correctly reports improvement for lower ranking number', () => {
  const result = calculatePositionImprovement(10, 5.8);
  assert.equal(result.improved, true);
  assert.equal(result.numericalDelta, 4.2);
  assert.match(result.explanation, /Improved by 4.2 positions/);
});

test('calculateAeoVisibility calculates 10 of 20 keywords as 50.0%', () => {
  const result = calculateAeoVisibility(10, 20);
  assert.equal(result.rate, 50.0);
  assert.equal(result.label, '50%');
});

test('formatMetricValue formats metrics for display', () => {
  assert.equal(formatMetricValue(745000, 'clicks'), '745K');
  assert.equal(formatMetricValue(29600000, 'impressions'), '29.6M');
  assert.equal(formatMetricValue(2.5, 'ctr'), '2.5%');
  assert.equal(formatMetricValue(5.8, 'position'), '5.8');
});
