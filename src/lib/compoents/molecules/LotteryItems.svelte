<script lang="ts">
  import type { LotteryItem } from '$lib/store';
  import Checkbox from '$lib/compoents/atoms/Checkbox.svelte';
  import Button from '$lib/compoents/atoms/Button.svelte';
  import DeleteButton from '$lib/compoents/atoms/DeleteButton.svelte';
  import InputText from '$lib/compoents/atoms/InputText.svelte';

  export let items: LotteryItem[];

  const add = () => {
    items = [...items, { text: '', enabled: true }];
  };

  const remove = (item) => {
    items = items.filter((itm) => itm !== item);
  };
</script>

<div class="flex w-2/3 justify-center items-center flex-col gap-2 shadow py-5">
  {#each items as item}
    <div class="flex justify-center items-center ">
      <Checkbox bind:checked={item.enabled} />
      <InputText bind:value={item.text} />
      <DeleteButton class="text-red-400" on:click={() => remove(item)} />
    </div>
  {/each}

  <Button on:click={add}>
    <i class="fa fa-plus" />抽選アイテムを追加
  </Button>
</div>
