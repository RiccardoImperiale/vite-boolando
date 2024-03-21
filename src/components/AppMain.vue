<script>

export default {
  name: 'AppMain'
}
</script>

<template>
  <main>
    <!-- Cards -->
    <div class="container cards_container">
      <!-- First Card  -->
      <div class="card">
        <div class="card_image first_card_image">
          <div class="heart">&hearts;</div>
          <div class="promo_badges">
            <div class="badge percentage">-50%</div>
            <div class="badge sustainability">Sostenibilità</div>
          </div>
        </div>
        <div class="card_text">
          <h5 class="brand">Levi's</h5>
          <h4>Relaxed fit tee unisex</h4>
          <div class="price">
            <span class="new_price">14,99 &euro;</span>
            <span class="old_price">29,99 &euro;</span>
          </div>
        </div>
      </div>
      <!-- Second Card  -->
      <div class="card">
        <div class="card_image second_card_image">
          <div class="heart">&hearts;</div>
          <div class="promo_badges">
            <div class="badge percentage">-30%</div>
            <!-- <div class="badge sustainability">Sostenibilità</div> -->
          </div>
        </div>
        <div class="card_text">
          <h5 class="brand">Guess</h5>
          <h4>Rose tee</h4>
          <div class="price">
            <span class="new_price">20,99 &euro;</span>
            <span class="old_price">29,99 &euro;</span>
          </div>
        </div>
      </div>
      <!-- Third Card  -->
      <div class="card">
        <div class="card_image third_card_image">
          <div class="heart">&hearts;</div>
          <div class="promo_badges">
            <div class="badge percentage">-30%</div>
            <!-- <div class="badge sustainability">Sostenibilità</div> -->
          </div>
        </div>
        <div class="card_text">
          <h5 class="brand">Come Zucchero Filato</h5>
          <h4>Voglia di colori pastello</h4>
          <div class="price">
            <span class="new_price">129,99 &euro;</span>
            <span class="old_price">184,99 &euro;</span>
          </div>
        </div>
      </div>
      <!-- Fourth Card  -->
      <div class="card">
        <div class="card_image fourth_card_image">
          <div class="heart">&hearts;</div>
          <div class="promo_badges">
            <div class="badge percentage">-50%</div>
            <div class="badge sustainability">Sostenibilità</div>
          </div>
        </div>
        <div class="card_text">
          <h5 class="brand">Levi's</h5>
          <h4>tee unisex</h4>
          <div class="price">
            <span class="new_price">14,99 &euro;</span>
            <span class="old_price">29,99 &euro;</span>
          </div>
        </div>
      </div>
      <!-- Fifth Card  -->
      <div class="card">
        <div class="card_image fifth_card_image">
          <div class="heart">&hearts;</div>
          <!-- <div class="promo_badges">
                    <div class="badge percentage">-50%</div>
                    <div class="badge sustainability">Sostenibilità</div>
                </div> -->
        </div>
        <div class="card_text">
          <h5 class="brand">Maya Deluxe</h5>
          <h4>Stripe Bodice</h4>
          <div class="price">
            <span class="new_price">99,99 &euro;</span>
            <!-- <span class="old_price">29,99 &euro;</span> -->
          </div>
        </div>
      </div>
      <!-- Sixth Card  -->
      <div class="card">
        <div class="card_image sixth_card_image">
          <div class="heart">&hearts;</div>
          <div class="promo_badges">
            <!-- <div class="badge percentage">-50%</div> -->
            <div class="badge sustainability">Sostenibilità</div>
          </div>
        </div>
        <div class="card_text">
          <h5 class="brand">Espirit</h5>
          <h4>Maglione - black</h4>
          <div class="price">
            <span class="new_price">29,99 &euro;</span>
            <!-- <span class="old_price">29,99 &euro;</span> -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  .cards_container {
    display: flex;
    justify-content: space-between;
    margin: 2rem auto;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .card {
    height: 700px;
    width: calc((100% / 12) * 4 - 1rem);
    margin-top: 5rem;
  }

  .card_image {
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
  }

  /* Card Images ------------------> */

  .first_card_image {
    background-image: url('/img/1.webp');
  }

  .first_card_image:hover {
    background-image: url('/img/1b.webp');
  }

  .second_card_image {
    background-image: url('/img/2.webp');
  }

  .second_card_image:hover {
    background-image: url('/img/2b.webp');
  }

  .third_card_image {
    background-image: url('/img/3.webp');
  }

  .third_card_image:hover {
    background-image: url('/img/3b.webp');
  }

  .fourth_card_image {
    background-image: url('/img/4.webp');
  }

  .fourth_card_image:hover {
    background-image: url('/img/4b.webp');
  }

  .fifth_card_image {
    background-image: url('/img/5.webp');
  }

  .fifth_card_image:hover {
    background-image: url('/img/5b.webp');
  }

  .sixth_card_image {
    background-image: url('/img/6.webp');
  }

  .sixth_card_image:hover {
    background-image: url('/img/6b.webp');
  }


  .heart {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1/1;
    width: 40px;
    background-color: white;
    top: 1rem;
    right: 0;
  }

  .heart:hover {
    color: red;
    cursor: pointer;
  }

  .promo_badges {
    display: flex;
    gap: .2rem;
    font-size: .8rem;
    color: white;
    font-weight: 800;
    position: absolute;
    bottom: 3rem;
  }

  .badge {
    padding: .45rem .75rem;
  }

  .percentage {
    background-color: red;
  }

  .sustainability {
    background-color: green;
  }

  /* Card Text ------------------------------> */

  .card_text {
    margin-top: .25rem;
  }

  & h4 {
    text-transform: uppercase;
  }

  & h5,
  .price {
    font-weight: 400;
    font-size: .8rem;
  }

  .new_price {
    font-weight: 600;
    color: red;
  }

  .old_price {
    text-decoration: line-through;
  }

}
</style>
