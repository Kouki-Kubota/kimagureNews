export default {
  
  /* let xhr=new XMLHttpRequest();
  
  xhr.open(`GET`,URL);
  xhr.responseType=`document`;
  xhr.send();
  
  xhr.onload=()=>{
    rss_data=xhr.response;
  } */
  mounted() {
  const URL = "https://news.yahoo.co.jp/rss/categories/sports.xml"
  
  fetch(URL, {
    method: "GET",
  }).then(response => response.text())
  .then(text => {
    rss_data=text;
  });
  //記事を取得
  items = rss_data.getElementsByTagName(`item`),
  //記事のタイトルを取得
  title = items[0].getElementsByTagName(`title`).textContent,
  date = new Date(items[0].getElementsByTagName(`pubDate`).textContent),
  
  content_text = items[0].getElementsByTagName(`content`).textContent,//contentの内容を取得
  buffer_dom = document.createElement(`div`),//バッファ的な要素の作成
  //buffer_dom.innerHTML=content_text, //contentの内容を元にバッファ要素にdomを構築
  thumbnail = buffer_dom.getElementsByTagName(`img`)[0].src //最初のimgタグのsrcを取得
  }
}

