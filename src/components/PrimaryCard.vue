<template>
  <q-card
    class="primary-card"
    :class="[
      { 'primary-card-dark': $q.dark.isActive },
      { 'primary-card-light': styleBackground.modoLight },
    ]"
  >
    <q-card-section class="q-pa-sm">
      <q-img :height="image_height" class="rounded-borders" :src="image">
        <div
          class="primary-card__card-caption absolute-bottom column items-center"
        >
          <slot name="content" />
        </div>
        <template v-slot:error>
          <div class="absolute-full flex flex-center bg-negative text-white">
            Cannot load image
          </div>
        </template>
      </q-img>
    </q-card-section>
    <q-card-actions align="right" class="q-pa-md absolute-top">
      <slot name="actions" />
    </q-card-actions>
    {{ styleBackground.modoLight }}
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStyleBackground } from 'src/stores/style-background';
export default defineComponent({
  name: 'PageName',
  props: {
    image: {
      type: String,
      default: 'https://cdn.quasar.dev/img/parallax2.jpg',
    },
    image_height: {
      type: String,
      default: '300px',
    },
  },
  setup() {
    const styleBackground = useStyleBackground();
    return {
      styleBackground,
    };
  },
  components: {},
});
</script>
<style lang="scss" scoped>
.primary-card {
  &__card-caption {
    background: rgba(0, 0, 0, 0.708);
  }
  background-color: $primary;
}
.primary-card-dark {
  background-color: $dark-secondary;
}
.primary-card-light {
  background-color: $secondary;
}
</style>
