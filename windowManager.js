import { writable } from "svelte/store";

export const windows = writable([]);

export function openApp(appId, component) {
  windows.update(wins => {
    const exists = wins.find(w => w.appId === appId);
    if (exists) {
      // bring to front
      return wins.map(w => ({
        ...w,
        z: w.appId === appId ? 999 : w.z - 1
      }));
    }

    return [
      ...wins,
      {
        appId,
        component,
        x: 100,
        y: 100,
        width: 800,
        height: 500,
        z: 999
      }
    ];
  });
}

export function closeApp(appId) {
  windows.update(w => w.filter(a => a.appId !== appId));
}
