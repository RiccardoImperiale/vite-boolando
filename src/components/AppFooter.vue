<script>

export default {
  name: 'AppFooter'
}
</script>

<template>
  <footer>
    <div class="container">
      <div class="site_info">
        <h4>Boolando s.r.l</h4>
        <div class="info_links">
          <a href="#">Informazioni legali</a>
          <a href="#">Informative sulla privacy</a>
          <a href="#">Diritto di recesso</a>
        </div>
      </div>
      <div class="socials">
        <span>Trovaci anche su</span>
        <div class="social_links">
          <a href="#"><i class="fa-brands fa-square-x-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
          <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-square-pinterest"></i></a>
          <a href="#"><i class="fa-brands fa-square-youtube"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #1A1A1A;
  margin-top: 5rem;
  padding: 2rem 0;
  color: white;

  .container {
    display: flex;
    justify-content: space-between;
  }

  .site_info h4 {
    font-size: .8rem;
  }

  .info_links,
  .social_links {
    margin-top: .5rem;
  }

  .site_info a,
  .socials a {
    font-size: .8rem;
    margin-right: .5rem;
  }

  .socials {
    display: flex;
    flex-direction: column;
  }

  .fa-brands {
    font-size: 1.3rem;
  }
}
</style>
