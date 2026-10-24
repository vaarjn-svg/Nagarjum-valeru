/**
 * Utility to support persistent in-browser storage for uploaded original evidence files
 * and custom author photos.
 * Changes broadcast custom events so all UI instances sync immediately.
 */

const STORAGE_KEY_PREFIX = 'nv_evidence_asset_';
const AUTHOR_PHOTO_KEY = 'nv_custom_author_photo';
const AUTHOR_PRESET_KEY = 'nv_author_photo_preset';

export function saveUserEvidence(id: string, dataUrl: string): void {
  try {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}${id}`, dataUrl);
    window.dispatchEvent(new CustomEvent('evidence_asset_updated', { detail: { id } }));
  } catch (e) {
    console.warn('LocalStorage limit reached when saving evidence asset', e);
  }
}

export function getUserEvidence(id: string): string | null {
  try {
    return localStorage.getItem(`${STORAGE_KEY_PREFIX}${id}`);
  } catch {
    return null;
  }
}

export function clearUserEvidence(id: string): void {
  try {
    localStorage.removeItem(`${STORAGE_KEY_PREFIX}${id}`);
    window.dispatchEvent(new CustomEvent('evidence_asset_updated', { detail: { id } }));
  } catch {
    // Ignore
  }
}

export function clearAllUserEvidence(): void {
  try {
    Object.keys(localStorage)
      .filter(key => key.startsWith(STORAGE_KEY_PREFIX))
      .forEach(key => localStorage.removeItem(key));
    window.dispatchEvent(new CustomEvent('evidence_asset_updated', { detail: { all: true } }));
  } catch {
    // Ignore
  }
}

// Author Photo Management
export function saveAuthorPhoto(dataUrl: string): void {
  try {
    localStorage.setItem(AUTHOR_PHOTO_KEY, dataUrl);
    localStorage.setItem(AUTHOR_PRESET_KEY, 'custom');
    window.dispatchEvent(new CustomEvent('author_photo_updated', { detail: { photo: dataUrl, preset: 'custom' } }));
  } catch (e) {
    console.warn('LocalStorage limit reached when saving author photo', e);
  }
}

export function getAuthorPhoto(): string | null {
  try {
    return localStorage.getItem(AUTHOR_PHOTO_KEY);
  } catch {
    return null;
  }
}

export function clearAuthorPhoto(): void {
  try {
    localStorage.removeItem(AUTHOR_PHOTO_KEY);
    localStorage.setItem(AUTHOR_PRESET_KEY, 'color');
    window.dispatchEvent(new CustomEvent('author_photo_updated', { detail: { photo: null, preset: 'color' } }));
  } catch {
    // Ignore
  }
}

export function saveAuthorPreset(preset: 'color' | 'bw' | 'custom'): void {
  try {
    localStorage.setItem(AUTHOR_PRESET_KEY, preset);
    window.dispatchEvent(new CustomEvent('author_photo_updated', { detail: { preset } }));
  } catch {
    // Ignore
  }
}

export function getAuthorPreset(): 'color' | 'bw' | 'custom' {
  try {
    const saved = localStorage.getItem(AUTHOR_PRESET_KEY);
    if (saved === 'bw' || saved === 'custom') return saved;
    return 'color';
  } catch {
    return 'color';
  }
}
