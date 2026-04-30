export function applyProgressSyncResult(currentUnlockedUnit: number, syncedUnlockedUnit?: number | null) {
  if (typeof syncedUnlockedUnit !== 'number' || Number.isNaN(syncedUnlockedUnit)) {
    return currentUnlockedUnit;
  }

  return Math.max(currentUnlockedUnit, syncedUnlockedUnit);
}
