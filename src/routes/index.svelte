<script lang="ts">
  import LotteryButton from '$lib/compoents/LotteryButton.svelte';
  import LotteryItemInput from '$lib/compoents/LotteryItemInput.svelte';
  import { takeRandom } from '$lib/utils';
  import { fade } from 'svelte/transition';

  let inputsText = 'item1\nitem2\nitem3';

  let result = null;
  let loading = false;
  function lottery() {
    result = null;
    loading = true;

    setTimeout(() => {
      loading = true;
      const splited = inputsText.split('\n');
      result = takeRandom(splited);
      loading = false;
    }, 300);
  }
</script>

<div class="flex justify-center items-center flex-col">
  <LotteryItemInput bind:value={inputsText} />
  <div class="mt-5">
    <LotteryButton on:click={lottery} text="抽選する" disabledText="抽選中..." disabled={loading} />
  </div>

  {#if result}
    <div in:fade class="mt-10 text-6xl text-indigo-500">
      {result}
    </div>
  {/if}
</div>

<style>
</style>
