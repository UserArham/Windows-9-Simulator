<script>
  export let x;
  export let y;
  export let width;
  export let height;
  export let z;
  export let title;
  export let onClose;

  let dragging = false;
  let resizing = false;
  let offsetX = 0;
  let offsetY = 0;

  function mousedown(e) {
    dragging = true;
    offsetX = e.clientX - x;
    offsetY = e.clientY - y;
  }
  function mousemove(e) {
    if (dragging) {
      x = e.clientX - offsetX;
      y = e.clientY - offsetY;
    }
  }
  function mouseup() {
    dragging = false;
    resizing = false;
  }
</script>

<div class="window" style="top:{y}px; left:{x}px; width:{width}px; height:{height}px; z-index:{z}"
     on:mousemove={mousemove}
     on:mouseup={mouseup}>

  <div class="title" on:mousedown={mousedown}>
    <span>{title}</span>
    <button on:click={onClose}>×</button>
  </div>

  <div class="content">
    <slot></slot>
  </div>
</div>

<style>
.window {
  position: absolute;
  background: #181818;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
  color: white;
  display: flex;
  flex-direction: column;
}
.title {
  background: #202020;
  font-size: 14px;
  padding: 4px 8px;
  cursor: move;
  display: flex;
  justify-content: space-between;
}
.content {
  flex: 1;
  background: #202020;
}
</style>
