"use strict";

const postForm = {
  bindings: {
    onSubmit: "&",
  },

  template: `
  <form ng-hide="" ng-submit="$ctrl.onSubmit({newPost: $ctrl.newPost});" >
    <input type="text" placeholder="title" ng-model="$ctrl.newPost.title"><br>
    <input type="text" placeholder="thought" ng-model="$ctrl.newPost.thought"><br>
    <button>Submit</button>
  </form>
  `,
}



angular
  .module("app")
  .component("postForm", postForm)
