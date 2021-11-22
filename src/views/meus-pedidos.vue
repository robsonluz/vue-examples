<template>
    <section class="section">
        <h1 class="title">Meus Pedidos</h1>
        <hr/>
        <div class="columns">

          <div v-for="(pedido, index) in pedidos" :key="index" class="column is-12">
              <h1 class="title">Pedido Nº {{pedido.id}}</h1>
              <p><b>Valor total:</b> {{pedido.valorTotal}}</p> 
              <p v-if="pedido.finalizado"><b>Situação:</b> Finalizado</p> 
              <p v-else><b>Situação:</b> Aberto</p> 


              <h2 class="subtitle mt-4 mb-4">Itens do Pedido</h2>
              <div class="columns">
                <div v-for="(item, indexFilme) in pedido.itens" :key="indexFilme" class="column is-4">
                  <h1 class="title">{{item.filme.titulo}}</h1>
                  <img v-if="item.filme.fotoCapa" :src="item.filme.fotoCapa">
                  <p><b>Valor:</b> {{item.valor}}</p> 
                  <b-button type="is-primary" @click="removerCarrinho(item)">Remover</b-button>

                </div>                
              </div>
              <hr/>
          </div>
            
        </div>

    </section>
</template>


<script>
    export default {
        data() {
            return {
                pedidos: []
            }
        },
        
        created() {
          this.loadPedidos();
        },

        methods: {
          loadPedidos() {
            var self = this;
            this.axios.get('pedidos/').then((response) => {
              console.log(response);
              self.pedidos = response.data;
            })

          },
          removerCarrinho(item) {
            var self = this;
            //Chama a api para criar o usuário
            this.axios.delete(`item-pedido-create/${item.id}`, item).then((response) => {
              console.log(response);
              //Mostra a mensagem de sucesso
              self.$buefy.dialog.alert('Filme removido com sucesso!')
              self.loadPedidos();
            })            
          }
        }        
        
    }
</script>  