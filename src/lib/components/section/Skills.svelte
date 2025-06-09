<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";
  import SkillTag from "./SkillTag.svelte";

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Svelte", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Go", "PHP", "Laravel"]
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Firebase", "Supabase", "Redis"],
    },
    {
      title: "Mobile",
      skills: ["Flutter", "Dart", "Java", "Kotlin"]
    },
    {
      title: "DevOps",
      skills: ["Docker", "CI/CD"]
    }
  ];

  let showContent = false;
  let contentElement: HTMLElement;
  let hideTimeout: number;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === contentElement) {
            if (entry.isIntersecting) {
              clearTimeout(hideTimeout);
              showContent = true;
            } else {
              hideTimeout = window.setTimeout(() => {
                showContent = false;
              }, 300);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-50px 0px',
        threshold: [0, 0.1, 0.2]
      }
    );

    if (contentElement) observer.observe(contentElement);

    return () => {
      if (contentElement) observer.unobserve(contentElement);
      clearTimeout(hideTimeout);
    };
  });
</script>

<section id="skills" class="py-20">
  <div class="container mx-auto px-4">
    <div 
      class="max-w-4xl mx-auto"
      bind:this={contentElement}
    >
      {#if showContent}
        <div in:fade={{ duration: 500 }}>
          <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8">Skills & Tech Stack</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          {#each skillCategories as category, i}
            <div 
              in:fly={{ y: 20, duration: 500, delay: i * 200 }}
              class="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
            >
              <h3 class="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
                {category.title}
              </h3>
              <div class="flex flex-wrap gap-2">
                {#each category.skills as skill}
                  <SkillTag {skill} />
                {/each}
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</section> 