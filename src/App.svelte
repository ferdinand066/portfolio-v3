<script lang="ts">
  import About from "$lib/components/section/About.svelte";
  import Hero from "$lib/components/section/Hero.svelte";
  import Navbar from "$lib/components/section/Navbar.svelte";
  import Projects from "$lib/components/section/Projects.svelte";
  import Skills from "$lib/components/section/Skills.svelte";
  import ThemeProvider from "$lib/components/section/ThemeProvider.svelte";
</script>

<ThemeProvider>
  <main class="min-h-screen bg-white dark:bg-slate-950">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
  </main>
</ThemeProvider>

<style>
  :global(body) {
    @apply antialiased;
  }
</style>