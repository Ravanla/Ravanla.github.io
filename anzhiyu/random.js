var posts=["2024/03/27/2024-03-27-My-First-Post/","2024/03/28/2024-03-28-传盛工作/","2024/04/15/2024-04-15-宏模版/","2024/03/26/2024-03-26-hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };