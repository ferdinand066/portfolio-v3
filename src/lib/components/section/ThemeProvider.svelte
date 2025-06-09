<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import { onMount } from 'svelte';
  // import { browser } from '$app/environment';

  let systemTheme: 'dark' | 'light' = 'light';

  $: if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add($theme);
  }
</script>

<slot /> 