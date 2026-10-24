/**
 * Pure calculation and validation logic for SEO & AEO metrics
 */

export interface MetricComparison {
  previous: number;
  current: number;
  unit?: string;
  format?: 'number' | 'percentage' | 'compact';
}

/**
 * Calculates absolute delta and percentage change between two values.
 */
export function calculateMetricChange(previous: number, current: number): {
  absoluteChange: number;
  percentageChange: number;
  trend: 'positive' | 'negative' | 'neutral';
} {
  const absoluteChange = current - previous;
  const percentageChange = previous === 0 ? 0 : (absoluteChange / previous) * 100;
  
  return {
    absoluteChange: Number(absoluteChange.toFixed(2)),
    percentageChange: Number(percentageChange.toFixed(1)),
    trend: absoluteChange > 0 ? 'positive' : absoluteChange < 0 ? 'negative' : 'neutral'
  };
}

/**
 * Specifically handles Search Console average position change.
 * In search rankings, a lower numerical value represents an improvement (e.g., 10 -> 5.8).
 */
export function calculatePositionImprovement(previous: number, current: number): {
  numericalDelta: number;
  improved: boolean;
  explanation: string;
} {
  const numericalDelta = Number((previous - current).toFixed(1));
  const improved = current < previous;
  return {
    numericalDelta,
    improved,
    explanation: improved
      ? `Improved by ${numericalDelta} positions (rank moved closer to position 1)`
      : `Shifted back by ${Math.abs(numericalDelta)} positions`
  };
}

/**
 * Computes AEO snapshot visibility percentage.
 */
export function calculateAeoVisibility(observedCount: number, totalSampled: number): {
  rate: number;
  label: string;
} {
  if (totalSampled <= 0) {
    return { rate: 0, label: '0%' };
  }
  const rate = Number(((observedCount / totalSampled) * 100).toFixed(1));
  return {
    rate,
    label: `${rate}%`
  };
}

/**
 * Formats large metrics cleanly (e.g. 745000 -> 745K, 29600000 -> 29.6M).
 */
export function formatMetricValue(value: number, type: 'clicks' | 'impressions' | 'ctr' | 'position'): string {
  switch (type) {
    case 'clicks':
      return value >= 1000000 ? `${(value / 1000000).toFixed(1)}M` : value >= 1000 ? `${Math.round(value / 1000)}K` : `${value}`;
    case 'impressions':
      return value >= 1000000 ? `${(value / 1000000).toFixed(1)}M` : value >= 1000 ? `${Math.round(value / 1000)}K` : `${value}`;
    case 'ctr':
      return `${value.toFixed(1)}%`;
    case 'position':
      return value.toFixed(1);
  }
}
