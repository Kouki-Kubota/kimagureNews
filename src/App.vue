<template>
  <v-app>
    <v-main>
      <HelloWorld/>
      <div v-for="item in items" :key="item" ><Card/></div>
      <Header/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
/* import Menu from './components/Menu'; */
import Card from './components/Card';
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Card,
    Header
  },
  el: '#card',
  data: () => ({
    items: [
      0,1,2,3
    ]
  }),
}
</script>


