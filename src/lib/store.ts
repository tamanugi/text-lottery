import { browser } from '$app/env';
import { writable } from 'svelte/store';

const KEY = 'textlottery-Rb7HJdjP';

function createStore() {
  const { subscribe, set, update } = writable<string>('');

  return {
    subscribe,
    set: (state) => {
      localStorage.setItem(KEY, state);
      set(state);
    },
    update,
    init: () => {
      const item = localStorage.getItem(KEY);
      if (item) {
        set(item);
      }
    }
  };
}

export const lotteryItemStore = createStore();
if (browser) {
  lotteryItemStore.init();
}
