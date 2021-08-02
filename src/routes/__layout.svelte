<script>
  import { onMount } from 'svelte';
  import '@fortawesome/fontawesome-free/js/fontawesome';
  import '@fortawesome/fontawesome-free/js/solid';
  import '@fortawesome/fontawesome-free/js/brands';
  import '../app.postcss';

  let mounted = false;
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>抽選ツール</title>
</svelte:head>

{#if mounted}
  <main class="w-2/3 mx-auto mt-10">
    <h1 class="text-4xl text-center mb-10">抽選ツール</h1>
    <slot />
  </main>

  <footer class="absolute bottom-0 w-full py-4 border-t-2 flex justify-center items-center">
    抽選ツール created by &nbsp;<a href="https://github.com/tamanugi">@tamanugi</a>
    &nbsp; | &nbsp;
    <a href="https://github.com/tamanugi/text-lottery" target="_blank"
      ><i class="fab fa-github" /></a
    >
  </footer>
{/if}
