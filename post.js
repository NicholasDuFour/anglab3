"use strict";

const post = {
  bindings: {
    posts: "<",
  },
  template: `
  <section ng-repeat="item in $ctrl.posts">
      <h4> {{ item.title }} </h4>
          <p> {{ item.thought }}</p>
          <hr>
  </section>`,

}

angular
  .module("app")
  .component("post", post)
