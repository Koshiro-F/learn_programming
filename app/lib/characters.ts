/**
 * スターレイルキャラクター画像の管理
 */

export const characters = [
  '/starrail/boothil01.webp',
  '/starrail/hotaru01.webp',
  '/starrail/myurion01.webp',
  '/starrail/pam01.webp',
  '/starrail/reishio01.webp',
  '/starrail/robin01.webp',
  '/starrail/sei01.webp',
  '/starrail/shinazu01.webp',
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
