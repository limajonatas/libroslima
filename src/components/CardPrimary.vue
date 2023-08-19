<template>
  <q-card
    class="card-primary"
    :class="[
      { 'card-primary-dark': $q.dark.isActive },
      { 'card-primary-light': styleBackground.modoLight },
    ]"
  >
    <q-card-section class="q-pa-sm">
      <q-img :height="image_height" class="rounded-borders" :src="image">
        <template v-slot:error>
          <div
            class="absolute-full flex flex-center row q-gutter-x-sm card-primary__error-image"
          >
            <q-icon name="error" size="lg" />
            <div class="column">
              <span class="text-subtitle1">Ops!</span>
              <span class="text-caption">
                Não foi possível carregar a imagem</span
              >
            </div>
          </div>
        </template>
      </q-img>
      <div
        class="card-primary__card-caption text-white absolute-bottom column items-center q-ma-sm"
      >
        <slot name="content" />
      </div>
    </q-card-section>
    <q-card-actions align="right" class="q-pa-md absolute-top">
      <slot name="actions" />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStyleBackground } from 'src/stores/style-background';
export default defineComponent({
  name: 'CardPrimary',
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
.card-primary {
  &__card-caption {
    background: rgba(0, 0, 0, 0.708);
    border-radius: 0 0 4px 4px;
  }
  background-color: $primary;
  &__error-image {
    background: rgba(251, 251, 251, 0.16);
    color: rgba(255, 255, 255, 0.5);
  }
}
.card-primary-dark {
  background-color: $dark-secondary;
}
.card-primary-light {
  background-color: $secondary;
}
</style>
