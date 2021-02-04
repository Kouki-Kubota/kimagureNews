<template>
<v-container>
  <ul>
    <li>
      <v-card id="card" elevation="2">
      <v-card-title>例</v-card-title>
      <v-card-subtitle>ほにゃらら</v-card-subtitle>
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        max-height="150"
        max-width="250"
        src="https://picsum.photos/id/11/500/300"
      ></v-img>
      </v-card>
    </li>
  </ul>
    </v-container>
</template>

<script>
  /* export default {
    mounted() {
    const URL = "https://news.yahoo.co.jp/rss/categories/sports.xml";

    let xhr=new XMLHttpRequest();

    xhr.open(`GET`,URL);
    xhr.responseType=`document`;
    xhr.send();

    let rss_data = xhr.onload=()=>{
      rss_data=xhr.response;
    }
    //記事を取得
    let items= rss_data.getElementsByTagName(`item`);
    //記事のタイトルを取得
    let title=items[0].getElementsByTagName(`title`).textContent;
    let date=new Date(items[0].getElementsByTagName(`pubDate`).textContent);

    let content_text=items[0].getElementsByTagName(`content`).textContent; //contentの内容を取得
    let buffer_dom=document.createElement(`div`); //バッファ的な要素の作成
    buffer_dom.innerHTML=content_text; //contentの内容を元にバッファ要素にdomを構築
    let thumbnail=buffer_dom.getElementsByTagName(`img`)[0].src; //最初のimgタグのsrcを取得
  }
} */
      
</script>

<style scoped>
.card {
  max-width: 800px;
  min-height: 400px;
  margin: 0 auto;
}

li {
  list-style: none;
  margin-bottom: 20px;
}
</style>