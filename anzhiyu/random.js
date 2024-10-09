var posts=["2024/10/09/hello-world/","2024/10/09/new/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };