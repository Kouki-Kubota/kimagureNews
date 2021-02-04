<template>
  <v-app>
        <v-app-bar
            app
            lime
        >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>きまぐれNews</v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
        >
            <v-list
            nav
            dense
            >
                <v-list-item-group>
                    <v-list-item
                    v-for="(menuItem, index) in menuItems"
                    :key="index"
                    >
                        <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
      </v-navigation-drawer>
  </v-app>
</template>
 
<script>
import constants from '.././common/constants'

export default {
  data () {
    return {
      drawer: false,
      menuItems:constants.menuItems
    }
  }
}
// ここまで追加
</script>
 
<style>

</style>