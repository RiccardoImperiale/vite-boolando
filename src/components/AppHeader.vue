<script>

export default {
  name: 'AppHeader'
}
</script>

<template>
  <header>
    <!-- Navbar -->
    <nav class="container">
      <!-- Nav Links  -->
      <ul class="nav_links">
        <li><a href="#">Donna</a></li>
        <li><a href="#">Uomo</a></li>
        <li><a href="#">Bambini</a></li>
      </ul>
      <!-- Logo -->
      <img width="135" class="logo_boolando" src="/img/boolean-logo.png" alt="logo boolando">
      <!-- Nav Icons -->
      <div class="nav_icons">
        <a href="#"><i class="fa-regular fa-user"></i></a>
        <a href="#"><i class="fa-regular fa-heart"></i></a>
        <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #FF6900;
  box-shadow: 0 1px 10px rgb(179, 179, 179);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;


  & nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }

  .nav_links {
    display: flex;
    gap: 1rem;
    font-size: .9rem;
    font-weight: 800;
  }

  .nav_icons a {
    margin-left: .5rem;
  }

}
</style>
