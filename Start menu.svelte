<script>
  import { openApp } from "../../WindowManager.js";
  import apps from "../../config/apps.js";
</script>

<div class="menu">
  {#each apps as app}
    <div class="tile" on:click={() => openApp(app.id, app.component)}>
      <img src={app.icon}>
      <span>{app.name}</span>
    </div>
  {/each}
</div>
