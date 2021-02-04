<template>
  <v-app>
<<<<<<< HEAD
    

    <v-main>
      <HelloWorld/>
      <div v-for="item in items" :key="item">
        <Card/>
      </div>
=======
    <v-main>
      <HelloWorld/>
      <div v-for="item in items" :key="item" ><Card/></div>
>>>>>>> sub1
      <Header/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
<<<<<<< HEAD
import Header from './components/Header';
import Card from './components/Card';
=======
/* import Menu from './components/Menu'; */
import Card from './components/Card';
import Header from './components/Header';

>>>>>>> sub1
export default {
  name: 'App',

  components: {
    HelloWorld,
<<<<<<< HEAD
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
=======
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


>>>>>>> sub1
