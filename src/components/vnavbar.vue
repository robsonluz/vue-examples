<template>
    <div style="background-color: #AACCAA">
        <div class="container">

            <b-navbar style="background-color: #AACCAA" class="container" :centered="true" :shadow="true" :fixed-top="false" :transparent="true" :spaced="false">
                <template #brand>
                    <b-navbar-item tag="router-link" :to="{ path: '/' }">
                        <img
                            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                            alt="Lightweight UI components for Vue.js based on Bulma"
                        >
                    </b-navbar-item>
                </template>
                <template #start>
                    <b-navbar-item href="#/">
                        Home
                    </b-navbar-item>
                    <!--
                    <b-navbar-item href="#/fundo">
                        Imagem de fundo
                    </b-navbar-item>
                    <b-navbar-item href="#/carrousel-imagem-fundo">
                        Carrousel/Fundo
                    </b-navbar-item>   
                    <b-navbar-item href="#/carrousel-imagem">
                        Carrousel/Imagem
                    </b-navbar-item>                   
                    <b-navbar-item href="#/icones">
                        Ícones
                    </b-navbar-item>   
                    -->
                    <b-navbar-item href="#/filmes">
                        Filmes
                    </b-navbar-item>                                                      

                    <b-navbar-item v-if="currentUser" href="#/meus-pedidos">
                        Meus pedidos
                    </b-navbar-item>

                    <b-navbar-item href="#/duvidas-frequentes">
                        Dúvidas frequentes
                    </b-navbar-item>                      
                  
                </template>

                <template #end>
                    <template v-if="currentUser">
                      <b-navbar-item tag="div">
                          {{currentUser.username}}
                      </b-navbar-item>  
                      <b-navbar-item tag="div">
                          <div class="buttons">
                              <a class="button" @click="sair()">
                                  <strong>Sair</strong>
                              </a>
                          </div>
                      </b-navbar-item>                                        
                    </template>
                    <template v-else>
                      <b-navbar-item tag="div">
                          <div class="buttons">
                              <a class="button is-primary" @click="entrarCadastrar()">
                                  <strong>Entrar/Cadastrar</strong>
                              </a>
                          </div>
                      </b-navbar-item>                      
                    </template>

                </template>        
            </b-navbar>
        </div>
              
    </div>
    
</template>

<style>
  a.navbar-item {background:none!important; border-bottom: 3px solid #AACCAA}
</style>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export default {
    computed: {
      currentUser () {
        return this.$store.getters.currentUser
      }
    },  
    methods: {
      posLogin(response) {
        var self = this;
        console.log('resposta do login');
        console.log('logado', response);
        var data = response.data;
        if(data && data.id) {
          self.$store.dispatch('setCurrentUser', data);

          self.axios.get('currentusuario/').then((responseUsuario) => {
            console.log('usuario logado');
            console.log(responseUsuario.data);
            //Coloque aqui a rota para quem já está cadastrado
            self.$router.push({ name: 'Home', force:true, reload:true });
          }).catch(function (error) {
            console.log('nao existe usuario cadastrado', error)
            //Coloque aqui a sua rota de cadastro
            self.$router.push({ name: 'Cadastro', force:true, reload:true });
          })
        }
      },
      entrarCadastrar() {
        var provider = new GoogleAuthProvider();

        var self = this;
        const auth = getAuth();
        signInWithPopup(auth, provider).then((result) => {
            console.log(result.user);
            var pass = result.user.uid;
            var email = result.user.email;
            console.log(email, pass);

            const formData = new FormData();
            formData.append('username', email);
            formData.append('password', pass);
            
            self.axios.post('login/', formData).then((response) => {
              self.posLogin(response);
            }).catch(function (error) {
              console.log('error', error);
              if (error.response && error.response.data) {
                var user = {
                  username: email,
                  password: pass
                };
                self.axios.post('user-registration/', user).then((responseUr) => {
                  console.log(responseUr);
                  self.axios.post('login/', formData).then((responseLogin) => {
                    self.posLogin(responseLogin);
                  });
                });
              }
              
            });

        }).catch((error) => {
            console.log(error);
        });
      },
      sair() {      
        var self = this;
        this.axios.get('logout/').then((responseLogout) => {
          console.log('logout', responseLogout);
          self.$store.dispatch('setCurrentUser', null);
          self.$router.push({ name: 'Home', force:true, reload:true });
        });
      }
    }
}
</script>