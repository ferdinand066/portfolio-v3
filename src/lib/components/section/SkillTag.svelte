<script lang="ts">
  export let skill: string;
  export let className = '';
</script>

<span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-sm cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors {className}">
  {skill}
</span> 