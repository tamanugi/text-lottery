<script lang="ts">
  import { takeRandom, shuffle } from '$lib/utils';
  import { fade } from 'svelte/transition';
  import { lotteryItemStore } from '$lib/store';
  import LotteryItems from '$lib/compoents/molecules/LotteryItems.svelte';
  import Button from '$lib/compoents/atoms/Button.svelte';
  import { cubicOut } from 'svelte/easing';

  let result = null;
  let loading = false;
  function lottery() {
    result = null;
    loading = true;

    setTimeout(() => {
      result = true;
      loading = false;
    }, 100);
  }

  function lotteryAnimation(node, option) {
    let items = $lotteryItemStore.filter((item) => item.enabled && item.text);

    items = shuffle(items);

    return {
      duration: 2000,
      easing: cubicOut,
      tick: (t) => {
        const i = ~~(t * 100) % items.length;
        node.textContent = items[i].text;
      }
    };
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
    <div in:lotteryAnimation class="mt-10 text-6xl text-indigo-500" />
  {/if}
</div>

<style>
</style>
