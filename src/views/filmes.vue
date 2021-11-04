<template>
    <section class="section">
        <h1 class="title">Filmes</h1>

    <div class="columns">
        <div v-for="(filme, index) in filmes" :key="index" class="column is-4">
          
          <h1 class="title">{{filme.titulo}}</h1>
          <img v-if="filme.fotoCapa" :src="filme.fotoCapa">
        </div>
    </div>

    </section>
</template>


<script>
    export default {
        data() {
            return {
                filmes: []
            }
        },
        
        created() {
          var self = this;
          this.axios.get('filmes/').then((response) => {
            self.filmes = response.data;
          })
        }
        
        
        
    }
</script>  