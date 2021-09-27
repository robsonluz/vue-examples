<template>
  <div>
    <section class="section">
        <h1 class="title">Carrousel com imagem de fundo</h1>
    </section>

    <b-carousel>
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <section :class="`hero is-medium is-${carousel.color}`" :style="{ backgroundImage: 'url(' + carousel.fundo + ')' }">
                <div class="hero-body has-text-centered">
                    <h1 class="title">{{carousel.text}}</h1>
                    <h2 class="subtitle">{{carousel.text}}</h2>
                </div>
            </section>
        </b-carousel-item>
    </b-carousel>


  </div>
</template>


<script>
export default {
    data(){
        return {
            carousels: [
                { text: 'Slide 1', color: 'primary', fundo: require('@/assets/fundo.jpg') },
                { text: 'Slide 2', color: 'primary', fundo: require('@/assets/fundo.jpg') },
                { text: 'Slide 3', color: 'primary', fundo: require('@/assets/fundo.jpg') },
                { text: 'Slide 4', color: 'primary', fundo: require('@/assets/fundo.jpg') },
                { text: 'Slide 5', color: 'primary', fundo: require('@/assets/fundo.jpg') }
            ]
        }
    }
}
</script>