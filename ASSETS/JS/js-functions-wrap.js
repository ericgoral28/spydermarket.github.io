fetch("/ASSETS/HTML/nav.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("nav").innerHTML = data;
  });

  fetch("/ASSETS/HTML/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });


  fetch("/ASSETS/HTML/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });