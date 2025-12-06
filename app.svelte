<script>
  import { windows } from "./WindowManager.js";
  import WindowFrame from "./lib/windows/WindowFrame.svelte";
</script>

{#each $windows as win (win.appId)}
  <WindowFrame
    {...win}
    onClose={() => closeApp(win.appId)}>
    <svelte:component this={win.component}/>
  </WindowFrame>
{/each}
