<script lang="ts">
  import { fade, fly } from "svelte/transition";

  const projects = [
    {
      title: 'HOKI Shop',
      description: 'A mobile marketplace for foreign workers to purchase essential vouchers and services needed for working in Taiwan.',
      thumbnail: '/projects/HOKI Shop.webp',
      technologies: ['Flutter', 'Riverpod'],
      links: {
        playStore: 'https://play.google.com/store/apps/details?id=com.hokishoptaiwan.app&hl=id',
        appStore: 'https://apps.apple.com/id/app/hoki-shop/id1550246409'
      }
    },
    {
      title: 'Tablelink Backoffice',
      description: 'A comprehensive backoffice system for managing all master data and configurations across the Tablelink application ecosystem.',
      thumbnail: '/projects/Tablelink.png',
      technologies: ['Go', 'Gin', 'React', 'Zustand', 'PostgreSQL', 'Redis'],
      links: {
        demo: 'https://dashboard.table.link/auth/login',
      }
    },
    {
      title: 'BIA Regina Caeli',
      description: 'A website for children attendance and child absence recording.',
      thumbnail: '/projects/BIA Regina Caeli.png',
      technologies: ['PHP', 'Laravel', 'React', 'Next.JS'],
      links: {
        demo: 'https://www.biareginacaeli.com',
      }
    }
    // Add more projects as needed
  ];
</script>

<section id="projects" class="py-20">
  <div class="max-w-6xl mx-auto px-4">
    <div in:fade={{ duration: 500 }}>
      <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-12 text-center">
        Featured Projects
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects as project, i}
        <div 
          in:fly={{ y: 20, duration: 500, delay: i * 200 }}
          class="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
        >
          <div class="aspect-w-16 aspect-h-9">
            <img
              src={project.thumbnail}
              alt={project.title}
              class="w-full object-cover aspect-video"
            />
          </div>
          
          <div class="p-6 flex flex-col justify-between">
            <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-2">
              {project.title}
            </h3>
            
            <p class="text-slate-600 dark:text-slate-300 mb-4">
              {project.description}
            </p>

            <div class="flex flex-wrap gap-2 mb-4">
              {#each project.technologies as tech}
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                  {tech}
                </span>
              {/each}
            </div>

            <div class="flex gap-4 items-end mt-auto">
              <!-- {#if project.links.github}
                <a
                  aria-label="GitHub"
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              {/if} -->
              
              {#if project.links.demo}
                <a
                  aria-label="Demo"
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              {/if}
              
              {#if project.links.appStore}
                <a
                  aria-label="App Store"
                  href={project.links.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </a>
              {/if}

              {#if project.links.playStore}
                <a
                  aria-label="Play Store"
                  href={project.links.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
                >
                  <svg class="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.463 11.463 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.78 10.78 0 0 0 1 18h22a10.78 10.78 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"/>
                  </svg>
                </a>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section> 