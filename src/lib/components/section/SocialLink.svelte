<script lang="ts">
  export let href: string;
  export let icon: string;
  export let label: string;
  export let bgColor: string;
  export let hoverColor: string;
  export let textColor: string = 'text-white';
  export let isExternal: boolean = true;
</script>

<a 
  {href}
  target={isExternal ? "_blank" : undefined}
  rel={isExternal ? "noopener noreferrer" : undefined}
  class="group inline-flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg {bgColor} {textColor} hover:{hoverColor}"
>
  <div class="relative">
    <div class="absolute inset-0 bg-white/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
    <div class="relative flex items-center">
      <div class="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12">
        {@html icon}
      </div>
      <span class="font-medium">{label}</span>
    </div>
  </div>
</a> 