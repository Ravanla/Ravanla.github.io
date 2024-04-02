var posts=["2024/03/27/2024-03-27-My-First-Post/","2024/03/26/2024-03-26-hello-world/","2024/03/28/2024-03-28-传盛打工/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };