document.querySelector(".table.table-striped").innerHTML =
  "<button type='button' class='two_hundred'>Finally 200% Scores</button>";
document.querySelector(".table.table-striped").style.display = "flex";
document.querySelector(".table.table-striped").style.justifyContent = "center";
two_hundred = document.querySelector(".two_hundred");
two_hundred.style.margin = "30px";
two_hundred.style.padding = "10px";

two_hundred.addEventListener("click", (event) => {
  scores_table = document.querySelectorAll(".panel.panel-default table")[1];
  len_table = scores_table.tBodies[0].rows.length;
  for (let i = 1; i <= len_table; i++) {
    row = scores_table.querySelector(`tbody tr:nth-child(${i})`);
    for (let j = 2; j <= 5; j++) {
      num = row.querySelector(`td:nth-child(${j})`);
      if (num.textContent != " ") num.textContent = "200.0";
    }
  }
});

progess_arr = document.querySelectorAll(".project_progress_percentage");

progess_arr[0].addEventListener("click", (event) => {
  progess_arr[0].textContent = "200.0% done";
});
progess_arr[1].addEventListener("click", (event) => {
  progess_arr[1].textContent = "200.0% done";
});
progess_arr[2].addEventListener("click", (event) => {
  progess_arr[2].textContent = "200.0% done";
});
meme_num = 0;
memes = [
  "https://i.kym-cdn.com/entries/icons/facebook/000/021/807/ig9OoyenpxqdCQyABmOQBZDI0duHk2QZZmWg2Hxd4ro.jpg",
  "https://i.imgflip.com/1x13g6.jpg",
  "https://img.devrant.com/devrant/rant/r_151383_J3feX.jpg",
  "https://i.redd.it/hdkhnmfs73551.png",
  "https://i.redd.it/l06qwcmi0ph21.jpg",
  "https://pics.me.me/0-jquerv-you-guys-always-act-like-youre-better-than-42227367.png",
  "https://i.redd.it/gsjs7ia2h0861.png",
  "https://memegenerator.net/img/instances/66154520/jquery-is-the-path-to-the-dark-side-jquery-leads-to-anger-anger-leads-to-hate-hate-leads-to-sufferin.jpg",
  "https://pics.me.me/trying-to-debug-thatold-jquery-project-youve-bee-handed-my-36642519.png",
];

meme_panel = document.querySelectorAll(".panel.panel-default")[1];
meme_panel.addEventListener("click", (event) => {
  meme_tittle_html =
    "<button type='button' class='left_meme'><-</button><h1>Memes!</h1><button type='button' class='right_meme'>-></button>";
  meme_tittle = meme_panel.querySelector(".panel-heading");
  meme_tittle.innerHTML = meme_tittle_html;

  meme_panel.querySelector(".right_meme").addEventListener("click", (event) => {
    meme_num++;
    meme_body_html = `<img src=${memes[meme_num]} alt='meme'>`;
  });

  meme_panel.querySelector(".left_meme").addEventListener("click", (event) => {
    meme_num--;
    meme_body_html = `<img src=${memes[meme_num]} alt='meme'>`;
  });
  meme_tittle.style.cssText =
    "display: flex; justify-content: space-between; align-items: center";
  meme_tittle.querySelector("h1").style.cssText = "padding: 0; margin:0";
  meme_body_html = `<img src=${memes[meme_num]} alt='meme'>`;
  meme_panel.querySelector(".panel-body").innerHTML = meme_body_html;
  meme_img_css = "width: 100%;";
  meme_panel.querySelector("img").style.cssText = meme_img_css;
});

mytop_html =
  "<h1>Give me my 200% Challenge</h1><h3>Objective</h3><p>Get 200.0% at Holberton School</p><h4>Extra Points for:</h4><ul><li>Re-design of the Intranet</li><li>Creative use of technologies</li><li>Different ways to manipulate and use the DOM</li></ul><h4>Technologies Allow:</h4><ul><li>Vanilla JS</li><li>jQuery</li></ul><p><strong>Deadline: </strong>February 12 at 2:30pm</p><strong>#IGotMy200%</strong>";
mytop = document.querySelector("#layout-bars");
mytop.innerHTML = "<h3>Give me my 200% Challenge</h3>";
mytop.style.cssText = "display: flex; justify-content: center";
mytop.addEventListener("click", (event) => {
  mytop.innerHTML = mytop_html;
  mytop.style.cssText = "display: block;";
  mytop.style.margin = "60px";
});
