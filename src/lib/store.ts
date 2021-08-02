import { browser } from '$app/env';
import { writable } from 'svelte/store';

const KEY = 'textlottery-Rb7HJdjP';

export interface LotteryItem {
  text: string;
  enabled: boolean;
}

function createStore() {
  const { subscribe, set, update } = writable<LotteryItem[]>([]);

  return {
    subscribe,
    set: (state: LotteryItem[]) => {
      localStorage.setItem(KEY, JSON.stringify(state));
      set(state);
    },
    update,
    init: () => {
      const item = localStorage.getItem(KEY);
      if (item) {
        set(JSON.parse(item));
      }
    }
  };
}

export const lotteryItemStore = createStore();
if (browser) {
  lotteryItemStore.init();
}
