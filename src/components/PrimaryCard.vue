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
          <div
            class="absolute-full flex flex-center column primary-card__error-image"
          >
            <q-icon name="error" size="lg" />
            <span class="text-h6">Ops!</span>
            <span> Não foi possível carregar a imagem</span>
          </div>
        </template>
      </q-img>
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
  &__error-image {
    background: rgba(251, 251, 251, 0.16);
  }
}
.primary-card-dark {
  background-color: $dark-secondary;
}
.primary-card-light {
  background-color: $secondary;
}
</style>
