<script lang="ts">
  export let text;
  export let disabledText = null;
  export let disabled = false;
</script>

{#if !disabled}
  <button
    on:click
    type="button"
    class="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
  >
    {text}
  </button>
{:else}
  <button
    type="button"
    class="border border-gray-500 text-gray-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none"
    disabled
  >
    {disabledText || text}
  </button>
{/if}
