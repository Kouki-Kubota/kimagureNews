<template>
  <v-app>
    

    <v-main>
      <HelloWorld/>
      <div v-for="item in items" :key="item">
        <Card/>
      </div>
      <Header/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Header from './components/Header';
import Card from './components/Card';
export default {
  name: 'App',

  components: {
    HelloWorld,
    Header,
    Card
  },

  data: () => ({
    items: [
      0,1,2,3
    ]
  }),
};
</script>
