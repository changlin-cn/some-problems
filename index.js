var app = new Vue({
  el: "#menu",
  data: {
    pages: [
      {
        path: "./ ",
        name: "home"
      },
      {
        path: "./baiduIME.html",
        name: "BaiduIME"
      }
    ]
  },
  template: `<ul>
        <li v-for="page in pages"><a v-bind:href="page.path">{{page.name}}</li>
    </ul>`
});
