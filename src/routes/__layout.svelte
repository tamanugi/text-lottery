<script>
  import { onMount } from 'svelte';

  import '../app.postcss';

  let mounted = false;
  onMount(() => {
    mounted = true;
  });
</script>

{#if mounted}
  <main class="w-2/3 mx-auto mt-10">
    <h1 class="text-4xl text-center mb-10">テキストくじ</h1>
    <slot />
  </main>
{/if}
