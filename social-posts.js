"use strict";
const socialPosts = {
  template: `
  <h1>My Thoughts</h1>
    <button ng-click="$ctrl.showForm(postForm);">New Thought</button>
    <section>
      <post-form on-submit="$ctrl.onSubmit(newPost);"></post-form>
      <post posts="$ctrl.posts"></post>
    </section>
  `,
  controller: function($element) {
    const vm = this;
    vm.posts = [
      {
      title: "Dog",
      thought: "Lorem ipsum woof woof.  Bow wow wow.  Doggo doin' me a post"
    },

    {
      title: "Pupper",
      thought: "Lorem ipsum.  Pupper is smol but a frand"
    }
  ];
    vm.onSubmit = (newPost) => {
      vm.posts.unshift({
        title: newPost.title,
        thought: newPost.thought
      });
      vm.newPost = {};
    }
  }
   // vm.showForm = (postForm) => {
   //   //this would show the form
      
   // }
   // vm.hideForm = () => {
   //
   // }
}

angular
  .module("app")
  .component("socialPosts", socialPosts)
