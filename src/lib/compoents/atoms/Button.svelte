<script lang="ts">
  export let disabled = false;

  $: enabled = !disabled;
  $: color = enabled ? 'indigo' : 'gray';
</script>

<button
  class={`border
  text-${color}-500 border-${color}-500
  rounded-md
  px-4 py-2 m-2
  transition duration-500 ease
  select-none
  hover:${enabled ? 'text-white' : 'text-gray-600'}
  hover:bg-${color}-500
  focus:outline-none focus:shadow-outline`}
  on:click
  {disabled}
>
  {#if enabled}
    <slot />
  {:else}
    <slot name="disabled" />
  {/if}
</button>
