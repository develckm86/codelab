
async function load(id, file) {
  const res = await fetch(file);
  document.getElementById(id).innerHTML = await res.text();
}
load("header", "./template/header.html");
load("footer", "./template/footer.html");
load("aside", "./template/aside.html");

const offcanvasElementList = document.querySelectorAll('.offcanvas')
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))
