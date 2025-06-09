// import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Theme = 'dark' | 'light';

function createThemeStore() {
  // Get initial theme from localStorage or system preference
  const initialTheme = (localStorage.getItem('theme') as Theme) || 'light';

  const { subscribe, set } = writable<Theme>(initialTheme);

  return {
    subscribe,
    set: (theme: Theme) => {
      localStorage.setItem('theme', theme);
      set(theme);
    }
  };
}

export const theme = createThemeStore(); 