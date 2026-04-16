export const ANSWER_HISTORY_STORAGE_KEY = 'fe_exam_answer_history_v1';

export interface AnswerHistoryItem {
  questionId: string;
  attempts: number;
  correctCount: number;
  lastIsCorrect: boolean;
  lastAnsweredAt: string;
}

export type AnswerHistoryMap = Record<string, AnswerHistoryItem>;

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
}

export function readAnswerHistory(): AnswerHistoryMap {
  if (!isBrowser()) return {};

  try {
    const raw = localStorage.getItem(ANSWER_HISTORY_STORAGE_KEY);
    if (!raw) return {};

    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== 'object') return {};

    return parsed as AnswerHistoryMap;
  } catch {
    return {};
  }
}

export function recordAnswer(questionId: string, isCorrect: boolean): AnswerHistoryMap {
  const history = readAnswerHistory();
  const prev = history[questionId];

  const nextItem: AnswerHistoryItem = {
    questionId,
    attempts: (prev?.attempts ?? 0) + 1,
    correctCount: (prev?.correctCount ?? 0) + (isCorrect ? 1 : 0),
    lastIsCorrect: isCorrect,
    lastAnsweredAt: new Date().toISOString(),
  };

  const nextHistory: AnswerHistoryMap = {
    ...history,
    [questionId]: nextItem,
  };

  if (isBrowser()) {
    localStorage.setItem(ANSWER_HISTORY_STORAGE_KEY, JSON.stringify(nextHistory));
  }

  return nextHistory;
}
