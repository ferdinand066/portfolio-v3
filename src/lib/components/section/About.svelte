<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";

  const bio = `I'm a passionate full-stack developer with a focus on creating modern, scalable applications. 
  With expertise in mobile development using Flutter, web development with React, and backend services in Go, 
  I bring a comprehensive approach to software development.`;

  let showContent = false;
  let showTech = false;

  onMount(() => {
    // Trigger animations after a small delay to ensure smooth transition
    setTimeout(() => {
      showContent = true;
      setTimeout(() => {
        showTech = true;
      }, 500);
    }, 100);
  });
</script>

<section id="about" class="py-20">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto space-y-8 about-content">
      {#if showContent}
        <div in:fade={{ duration: 500 }}>
          <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-50">About Me</h2>
        </div>
        <div in:fly={{ y: 20, duration: 500, delay: 200 }}>
          <p class="text-lg text-slate-600 dark:text-slate-300">
            {bio}
          </p>
        </div>
        <div in:fly={{ y: 20, duration: 500, delay: 400 }}>
          <Button variant="default">
            <a href="/files/[Revisied] CV - Ferdinand Gunawan.pdf" download>Download CV</a>
          </Button>
        </div>
      {/if}
    </div>
  </div>
</section> 