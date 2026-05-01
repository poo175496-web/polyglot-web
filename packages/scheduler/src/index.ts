export interface SchedulerBlueprint {
  algorithm: 'rule-based' | 'fsrs';
  reviewFirst: boolean;
  retryWrongCards: boolean;
}

export const schedulerBlueprint: SchedulerBlueprint = {
  algorithm: 'rule-based',
  reviewFirst: true,
  retryWrongCards: true,
};
