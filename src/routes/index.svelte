<script lang="ts">
  import { takeRandom } from '$lib/utils';
  import { fade } from 'svelte/transition';
  import { lotteryItemStore } from '$lib/store';
  import LotteryItems from '$lib/compoents/molecules/LotteryItems.svelte';
  import Button from '$lib/compoents/atoms/Button.svelte';

  let result = null;
  let loading = false;
  function lottery() {
    result = null;
    loading = true;

    setTimeout(() => {
      loading = true;
      const items = $lotteryItemStore.filter((item) => item.enabled);
      result = takeRandom(items);
      loading = false;
    }, 500);
  }
</script>

<div class="flex justify-center items-center flex-col">
  <LotteryItems bind:items={$lotteryItemStore} />

  <div class="mt-5">
    <Button on:click={lottery} bind:disabled={loading}>
      抽選する
      <span slot="disabled">抽選中...</span>
    </Button>
  </div>

  {#if result}
    <div in:fade class="mt-10 text-6xl text-indigo-500">
      {result.text}
    </div>
  {/if}
</div>

<style>
</style>
