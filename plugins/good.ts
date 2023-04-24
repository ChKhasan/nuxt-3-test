import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      good: (msg: string) => `Hello ${msg}!`,
    },
  };
});
