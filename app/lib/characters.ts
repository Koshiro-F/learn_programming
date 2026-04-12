/**
 * スターレイルキャラクター画像の管理
 */

export const characters = [
  '/starrail/boothil01.webp',
  '/starrail/anaikusu01.webp',
  '/starrail/fainon01.webp',
  '/starrail/hanabi01.webp',
  '/starrail/hotaru01.webp',
  '/starrail/jeido01.webp',
  '/starrail/myurion01.webp',
  '/starrail/anaikusu02.webp',
  '/starrail/pam01.webp',
  '/starrail/reishio01.webp',
  '/starrail/robin01.webp',
  '/starrail/sei01.webp',
  '/starrail/shinazu01.webp',
  '/starrail/teiun01.webp',
  '/starrail/triby01.webp',
  '/starrail/anaikusu03.webp',
] as const;

/**
 * 指定したインデックスのキャラクター画像を取得（循環）
 */
export function getCharacterByIndex(index: number): string {
  return characters[index % characters.length];
}

/**
 * 複数のランダムキャラクターを取得（重複なし）
 */
export function getRandomCharacters(count: number): string[] {
  const shuffled = [...characters].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, characters.length));
}
