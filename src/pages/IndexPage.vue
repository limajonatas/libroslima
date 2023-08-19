<template>
  <q-page padding class="q-gutter-y-md">
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
    <card-secondary
      content-align-right
      image="https://odgraph.com.br/wp-content/uploads/2020/03/maquete-de-uma-capa-de-livro_117023-1303.jpg"
    >
      <template v-slot:content>
        <div class="text-h6">
          Minha Coleção jasfvnangojv anhjsfvjans ahjkbna nhajknjvn
        </div>
      </template>
    </card-secondary>

    <card-primary
      image="https://cdn.quasar.dev/img/parallax2.jpg"
      @click="teste"
    >
      <template v-slot:content>
        <div class="text-h6">Take The Risk</div>
        <div class="text-subtitle1 q-pa-none">Ben Cason</div>
        <div>
          Página atual: 10<br />
          Tempo de leitura: 1h
        </div>
      </template>
      <template v-slot:actions>
        <q-btn round @click.stop color="primary" icon="star" />
        <q-btn round color="primary" icon="open_in_new" />
        <q-btn round color="primary" icon="show_chart" />
      </template>
    </card-primary>
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
    CardPrimary: defineAsyncComponent(
      () => import('../components/CardPrimary.vue')
    ),
    CardSecondary: defineAsyncComponent(
      () => import('../components/CardSecondary.vue')
    ),
  },
});
</script>
