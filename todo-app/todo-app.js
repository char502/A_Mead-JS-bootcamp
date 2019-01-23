const ps = document.querySelectorAll("p");

ps.forEach(function(item) {
  //   console.log(item.textContent.includes("the"));

  if (item.textContent.includes("the".toLowerCase())) {
    item.remove();
  }
});
