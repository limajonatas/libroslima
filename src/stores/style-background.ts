import { defineStore } from 'pinia';

export const useStyleBackground = defineStore('style-background', {
  state: () => ({
    modoLight: false,
  }),
});
