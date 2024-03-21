<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      navLinks: [
        { href: '#', text: 'Donna' },
        { href: '#', text: 'Uomo' },
        { href: '#', text: 'Bambino' }
      ],
      footerIcons: [
        { href: '#', class: 'fa-regular fa-user' },
        { href: '#', class: 'fa-regular fa-heart' },
        { href: '#', class: 'fa-solid fa-bag-shopping' }
      ]
    }
  }
}
</script>

<template>
  <header>
    <!-- Navbar -->
    <nav class="container">
      <!-- Nav Links -->
      <ul class="nav_links">
        <li v-for="link in navLinks"><a :href="link.href">{{ link.text }}</a></li>
      </ul>
      <!-- Logo -->
      <img width="135" class="logo_boolando" src="/img/boolean-logo.png" alt="logo boolando">
      <!-- Nav Icons -->
      <div class="nav_icons">
        <a v-for="icon in footerIcons" :href="icon.href"><i :class="icon.class"></i></a>
      </div>
    </nav>
  </header>
</template>

<style></style>
