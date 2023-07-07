<template>
  <nav class="navbar navbar-dark bg-dark border-bottom border-secondary">
    <div class="container-fluid">
      <button
        class="navbar-toggler navBtn"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse m-auto big"
        style="width: 70%"
        id="navbarToggleExternalContent"
        data-bs-theme="dark"
      >
        <div class="container-fluid huge">
          <ul
            class="navbar-nav w-100 mb-3 p-auto d-flex flex-row justify-content-center"
          >
            <div class="nav-item d-flex justify-content-center">
              <router-link
                class="btn nav-link animate__animated animate__backOutUp animate animate__infinite infinite border-bottom"
                to="/"
                >Home</router-link
              >
            </div>
            <div class="nav-item">
              <div class="dropdown">
                <a
                  class="btn nav-link animate__animated animate__backOutUp animate animate__infinite infinite border-bottom"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About me
                </a>

                <ul class="dropdown-menu text-center">
                  <li class="nav-item border-bottom">
                    <router-link
                      class="btn nav-link animate__animated animate__backOutUp animate animate__infinite infinite"
                      to="/about"
                      >Me</router-link
                    >
                  </li>
                  <li class="nav-item border-bottom">
                    <router-link
                      class="btn nav-link animate__animated animate__backOutUp animate animate__infinite infinite"
                      to="/Projects-View"
                      >My Projects</router-link
                    >
                  </li>
                  <li class="nav-item border-bottom">
                    <router-link
                      class="btn nav-link animate__animated animate__backOutUp animate animate__infinite infinite"
                      to="/Testimonials"
                      >Testimonials</router-link
                    >
                  </li>
                  <li class="nav-item border-bottom">
                    <router-link
                      class="btn nav-link animate__animated animate__backOutUp animate animate__infinite infinite"
                      to="/Contact-View"
                      >ContactMe</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav-item">
              <div class="dropdown">
                <a
                  class="btn nav-link animate__animated animate__backOutUp animate animate__infinite infinite border-bottom"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resume
                </a>

                <ul class="dropdown-menu text-center">
                  <li class="nav-item border-bottom">
                    <router-link
                      class="btn nav-link animate__animated animate__backOutUp animate animate__infinite infinite"
                      to="/Skills-View"
                      >Skills</router-link
                    >
                  </li>
                  <li class="nav-item border-bottom">
                    <router-link
                      class="btn nav-link animate__animated animate__backOutUp animate animate__infinite infinite"
                      to="/Education-View"
                      >Education</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="collapse m-auto small"
      style="width: 70%"
      id="navbarToggleExternalContent"
      data-bs-theme="dark"
    >
      <div class="container-fluid small text-center">
        <ul class="navbar-nav p-auto d-flex justify-content-center">
          <li class="nav-item">
            <router-link
              class="btn nav-link animate__animated animate__backOutUp animate animate__infinite infinite border-bottom"
              to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <a
                class="btn nav-link animate__animated animate__backOutUp animate animate__infinite infinite border-bottom"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About me
              </a>

              <ul class="dropdown-menu text-center">
                <li class="nav-item border-bottom">
                  <router-link
                    class="btn nav-link animate__animated animate__backOutUp animate animate__infinite infinite"
                    to="/about"
                    >Me</router-link
                  >
                </li>
                <li class="nav-item border-bottom">
                  <router-link
                    class="btn nav-link animate__animated animate__backOutUp animate animate__infinite infinite"
                    to="/Projects-View"
                    >Projects</router-link
                  >
                </li>
                <li class="nav-item border-bottom">
                  <router-link
                    class="btn nav-link animate__animated animate__backOutUp animate animate__infinite infinite"
                    to="/Testimonials"
                    >Testimonials</router-link
                  >
                </li>
                <li class="nav-item border-bottom">
                  <router-link
                    class="btn nav-link animate__animated animate__backOutUp animate animate__infinite infinite"
                    to="/Contact-View"
                    >Contact</router-link
                  >
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <a
                class="btn nav-link animate__animated animate__backOutUp animate animate__infinite infinite border-bottom"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resume
              </a>

              <ul class="dropdown-menu text-center">
                <li class="nav-item border-bottom">
                  <router-link
                    class="btn nav-link animate__animated animate__backOutUp animate animate__infinite infinite"
                    to="/Skills-View"
                    >Skills</router-link
                  >
                </li>
                <li class="nav-item border-bottom">
                  <router-link
                    class="btn nav-link animate__animated animate__backOutUp animate animate__infinite infinite"
                    to="/Education-View"
                    >Education</router-link
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
/* 2E4F4F */
/* 0E8388 */
/* CBE4DE */
.huge {
  visibility: visible;
}

.small {
  display: none;
  visibility: hidden;
}
.navbar-nav {
  display: flex !important;
}
.dropdown-menu {
  position: absolute;
}
.animate__backOutUp {
  animation-play-state: paused;
}
.animate__animated .animate__backOutUp:target {
  display: inline-block;
  color: #cbe4de;
  animation-play-state: running;
  --animate-duration: 1s;
  /* animation-play-state: running; */
}
.animate__animated .animate__backOutUp:hover {
  color: #cbe4de;
}
.navBtn {
  border: none;
}
.navBtn:target {
  border: none !important;
}
.nav-item {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

@media screen and (max-width: 500px) {
  /* .container-fluid {
    margin-right: auto;
  } */

  .huge {
    visibility: hidden;
  }

  .small {
    display: flex;
    margin: auto;
    visibility: visible;
  }

  ul {
    margin: auto;
  }
}
</style>
