<template>
  <q-card
    class="card-secondary"
    :class="[
      {'card-secondary-content-align-right': contentAlignRight},
      { 'card-secondary-with-image': image },
      { 'card-secondary-dark': $q.dark.isActive },
      { 'card-secondary-light': styleBackground.modoLight },
    ]"
  >
    <q-card-section class="row items-center justify-center q-pa-sm">
      <slot name="content" />
    </q-card-section>
    <q-card-section class="full-width q-pa-none" v-if="image">
      <q-img
        class="rounded-borders card-secondary__image"
        fit="cover"
        :src="image"
      >
        <template v-slot:error>
          <div
            class="absolute-full flex flex-center column card-secondary__error-image"
          >
            <q-icon name="error" size="lg" />
            <span class="text-caption text-center">
              Não foi possível carregar a imagem</span
            >
          </div>
        </template>
      </q-img>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStyleBackground } from 'src/stores/style-background';

export default defineComponent({
  name: 'CardSecondary',
  props: {
    image: {
      type: String,
    },
    contentAlignRight: {
      type: Boolean,
      default: false,
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
.card-secondary {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: $primary;

  &__image {
    height: 100%;
  }

  &__error-image {
    background: rgba(251, 251, 251, 0.16);
    color: rgba(255, 255, 255, 0.5);
  }
}
.card-secondary-with-image {
  /* when there is an image, the content is 60% of the card */
  & > *:first-child {
    flex: 0 0 60%;
  }
}

.card-secondary-content-align-right {
  flex-direction: row-reverse; /* Reverse the order of flex items */

}

.card-secondary-dark {
  background-color: $dark-secondary;
}
.card-secondary-light {
  background-color: $secondary;
}
</style>
