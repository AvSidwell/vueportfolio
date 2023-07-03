<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <button
        class="navbar-toggler mb-1 navBtn"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
      <div
        class="collapse" style="width: 100%;"
        id="navbarToggleExternalContent"
        data-bs-theme="dark"
      >
      <div class="container-fluid">
        <ul class="navbar-nav d-flex flex-row mb-3 cont p-auto justify-content-evenly">
          <li class="nav-item">
            <a class="nav-link  animate__animated animate__flash animate animate__infinite infinite" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link animate__animated animate__flash animate animate__infinite infinite" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link animate__animated animate__flash animate animate__infinite infinite" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link animate__animated animate__flash animate animate__infinite infinite" href="/Testimonials-View">Testimonials</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.animate__animated.animate__flash {
  /* --animate-duration: 5s; */
  animation-play-state: paused;
}
.animate__animated.animate__flash:focus {
  --animate-duration: 5s;
  animation-play-state: running;
}
.navBtn {
    border: none;
}
.navBtn::after {
    border: none !important;


}
.nav-item {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}

@media screen and (max-width: 300px){
    .container-fluid {
        .container-fluid {
            margin-right: auto;
        }
    }
    .navbar-nav {
        display: grid !important;
    }
}

</style>