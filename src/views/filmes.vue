<template>
    <section class="section">
      <h1 class="title">Filmes</h1>

      <div class="columns">
          <div v-for="(filme, index) in filmes" :key="index" class="column is-4">
            
            <h1 class="title">{{filme.titulo}}</h1>
            <img v-if="filme.fotoCapa" :src="filme.fotoCapa">
            <p>Valor: {{filme.valor}}</p>
            <b-button type="is-primary" @click="adicionarCarrinho(filme)">Adicionar ao carrinho</b-button>
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
        },

        methods: {
          adicionarCarrinho(filme) {
            var self = this;
            var item = {
              filme: filme.id
            }
            //Chama a api para criar o usuário
            this.axios.post('item-pedido-create/', item).then((response) => {
              console.log(response);

              //Mostra a mensagem de sucesso
              self.$buefy.dialog.alert('Filme adicionado com sucesso!')

              //Navega para o MeusPedidos
              self.$router.push({ name: 'MeusPedidos', force:true });
            })            
          }
        }
        
        
        
    }
</script>  