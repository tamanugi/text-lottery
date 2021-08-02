<script lang="ts">
  export let checked: boolean;
</script>

<div
  class="bg-white border-2 shadow rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-indigo-500"
>
  <input type="checkbox" class="opacity-0 absolute" bind:checked />
  <svg class=" fill-current hidden w-4 h-4 text-indigo-500 pointer-events-none" viewBox="0 0 20 20"
    ><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg
  >
</div>

<style>
  input:checked + svg {
    display: block;
  }
</style>
