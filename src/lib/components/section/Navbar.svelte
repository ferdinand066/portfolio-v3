<script lang="ts">
  import ThemeToggle from './ThemeToggle.svelte';
  
  let isMenuOpen = false;

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' }
  ];

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav class="bg-white dark:bg-slate-900 shadow-sm border-b border-slate-200 dark:border-slate-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex items-center">
        <a href="/" class="text-xl font-bold text-slate-900 dark:text-slate-50">
          Ferdinand Gunawan
        </a>
      </div>

      <!-- Desktop menu -->
      <div class="hidden md:flex items-center space-x-8">
        {#each navItems as item}
          <a
            href={item.href}
            class="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
          >
            {item.label}
          </a>
        {/each}
        <ThemeToggle />
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden flex items-center space-x-4">
        <ThemeToggle />
        <button
          type="button"
          class="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-50"
          on:click={toggleMenu}
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {#if isMenuOpen}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            {:else}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            {/if}
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile menu -->
  {#if isMenuOpen}
    <div class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        {#each navItems as item}
          <a
            href={item.href}
            class="block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
            on:click={() => (isMenuOpen = false)}
          >
            {item.label}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</nav> 