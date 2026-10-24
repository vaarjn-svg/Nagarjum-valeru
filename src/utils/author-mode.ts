/**
 * Author / CMS Mode State Management
 * Allows the author ("only me") to access the CMS Studio to update author images
 * and evidence, while keeping it completely invisible to public viewers.
 */

const STORAGE_KEY = 'nagarjun_portfolio_author_mode';

export function isAuthorModeActive(): boolean {
  if (typeof window === 'undefined') return false;
  
  // 1. Check URL query parameters: ?cms=true, ?cms=1, ?admin=true, ?author=1
  const searchParams = new URLSearchParams(window.location.search);
  const hasAuthorParam = 
    searchParams.get('cms') === 'true' || 
    searchParams.get('cms') === '1' ||
    searchParams.get('admin') === 'true' || 
    searchParams.get('admin') === '1' ||
    searchParams.get('author') === 'true' ||
    searchParams.get('author') === '1';

  if (hasAuthorParam) {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // ignore storage errors
    }
    return true;
  }

  // 2. Check localStorage
  try {
    const val = localStorage.getItem(STORAGE_KEY);
    return val === 'true';
  } catch {
    return false;
  }
}

export function setAuthorModeActive(active: boolean): void {
  if (typeof window === 'undefined') return;
  try {
    if (active) {
      localStorage.setItem(STORAGE_KEY, 'true');
    } else {
      localStorage.setItem(STORAGE_KEY, 'false');
      // Clean query params from URL so ?cms=1 doesn't re-trigger author mode
      const url = new URL(window.location.href);
      let changed = false;
      ['cms', 'admin', 'author'].forEach((p) => {
        if (url.searchParams.has(p)) {
          url.searchParams.delete(p);
          changed = true;
        }
      });
      if (changed) {
        window.history.replaceState({}, '', url.pathname + (url.search ? url.search : '') + url.hash);
      }
    }
  } catch {
    // ignore storage errors
  }
  window.dispatchEvent(new CustomEvent('author-mode-changed', { detail: { active } }));
}
