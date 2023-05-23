{
  /* <div id="navbar-expand" class="navbar-expand">
          <img src="./assets/icons/menu.svg" alt="Menú hamburguesa" />
        </div>
      </nav>
      <nav class="navbar-mobile">
        <ul class="navbar-nav--mobile">
          <li class="navbar-item">
            <a href="/" class="navbar-link">Inicio</a>
          </li>
          <li class="navbar-item">
            <a href="./Products.html" class="navbar-link">Nuestros productos</a>
          </li>
          <li class="navbar-item">
            <a href="./pages/experience.html" class="navbar-link"
              >Experiencia Demeter</a
            >
          </li>
          <li class="navbar-item">
            <a href="./pages/contact.html" class="navbar-link">Contacto</a>
          </li>
        </ul>
      </nav> */
}

const navbarMobile = document.querySelector(".navbar-mobile");
const navbarExpand = document.getElementById("navbar-expand");

navbarExpand.addEventListener("click", () => {
  navbarMobile.classList.toggle("navbar-mobile--show");
});
