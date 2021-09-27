<template>
  <div>
    <section class="section">
        <h1 class="title">Carrousel com imagem</h1>
    </section>

    <b-carousel :indicator-inside="false">
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <b-image class="image" :src="carousel.imagem"></b-image>
        </b-carousel-item>
        <template #indicators="props">
            <b-image class="al image" :src="carousels[props.i].imagem" :title="props.i"></b-image>
        </template>        
    </b-carousel>


  </div>
</template>


<script>
export default {
    data(){
        return {
            carousels: [
                { imagem: require('@/assets/fundo.jpg') },
                { imagem: require('@/assets/fundo.jpg') },
                { imagem: require('@/assets/fundo.jpg') },
                { imagem: require('@/assets/fundo.jpg') },
                { imagem: require('@/assets/fundo.jpg') }
            ]
        }
    }
}
</script>

<style>
.is-active .al img {
    filter: grayscale(0%);
}
.al img {
    filter: grayscale(100%);
}
</style>