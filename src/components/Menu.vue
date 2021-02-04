<template>
  <v-row >
<v-menu
      transition="slide-x-transition"
      bottom
      right
>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="light-green lighten-5"
          color="teal lighten-1"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <div class="menu-content" id="hanberger-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-row>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Favolite' },
        { title: 'Sport' },
        { title: 'Tech' },
        { title: 'Others' },
      ],
    }),
  }
</script>

<style scoped>

</style>