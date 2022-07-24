const generateSTYLES = () => {
  return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
  body {
    background: #fcad03;
    color: #fff;
    font-family: "Open Sans", sans-serif;
    max-height: 700px;
    overflow: hidden;
  }
  .c {
    text-align: center;
    display: block;
    position: relative;
    width: 80%;
    margin: 100px auto;
  }
  ._404 {
    font-size: 220px;
    position: relative;
    display: inline-block;
    z-index: 2;
    height: 250px;
    letter-spacing: 15px;
  }
  
  ._2 {
    text-align: center;
    display: block;
    position: relative;
    font-size: 20px;
  }
  
 
  .right {
    float: right;
    width: 60%;
  }
  
  hr {
    padding: 0;
    border: none;
    border-top: 5px solid #fff;
    color: #fff;
    text-align: center;
    margin: 0px auto;
    width: 420px;
    height: 10px;
    z-index: -10;
  }
  
  hr:after {
    display: inline-block;
    position: relative;
    top: -0.75em;
    font-size: 2em;
    padding: 0 0.2em;
    background: #33cc99;
  }
  
  
   </style>`;
};

const generateHTML = (pageName) => {
  return `
   
 
  <div class='c'>
      <div class='_404'>404 :(</div>
      <hr>
    <br><br>
      <div class='_2'><i>Dear User,
      <br> Please complete your task before going to ${pageName}</i></div>
  </div>
   `;
};

switch (window.location.hostname) {
  case "www.youtube.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("YOUTUBE");
    break;
  case "www.facebook.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("FACEBOOK");
    break;
  case "www.netflix.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("NETFLIX");
    break;
  case "www.roblox.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("ROBLOX");
    break;
  case "discord.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("DISCORD");
    break;
  case "www.instagram.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("Instagram");
    break;
    case "www.primevideo.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("AmazonPrime");
      break;
}
