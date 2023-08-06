<template>
  <q-page padding >
    <!-- alternar dark mode -->

    <q-toggle
      v-model="$q.dark.isActive"
      label="Dark mode"
      color="primary"
      dense
    />
    <q-toggle
      v-model="styleBackground.modoLight"
      label="light mode"
      color="primary"
      dense
    />



    <primary-card image="https://cdn.quar.dev/img/parallax2.jpg" @click="teste">
      <template v-slot:content>
        <text>
          Teste
      </text>
    </template>
    <template v-slot:actions>
      <q-btn round @click.stop color="primary" icon="star" />
      <q-btn round color="primary" icon="open_in_new" />
      <q-btn round color="primary" icon="show_chart" />
    </template>
    </primary-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';
import { useStyleBackground } from 'src/stores/style-background';
export default defineComponent({
  name: 'IndexPage',
  setup() {
    const styleBackground = useStyleBackground();
    return {
      teste: () => {
        console.log('teste');
      },

      styleBackground,
    };
  },
  components: {
    PrimaryCard: defineAsyncComponent(
      () => import('../components/PrimaryCard.vue')
    ),
  },
});
</script>
