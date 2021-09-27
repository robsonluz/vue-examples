<template>
    <div>
        <b-navbar style="background-color: #FF0000">
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
                <b-navbar-item href="#/contato">
                    Contato
                </b-navbar-item>
            </template>

            <template #end>
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>Cadastro</strong>
                        </a>
                        <a class="button is-light" @click="isLoginModalActive = true">
                            Login
                        </a>
                    </div>
                </b-navbar-item>
            </template>        
        </b-navbar>

        <b-modal
            v-model="isLoginModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-label="Login"
            aria-modal>
            <template #default="props">
                <modal-login @close="props.close"></modal-login>
            </template>
        </b-modal>        
    </div>
    
</template>
<script>
import ModalLogin from './modal-login.vue'

export default {
    data(){
        return {
            isLoginModalActive: false
        }
    },
    components: {
        'modal-login': ModalLogin
    }
}
</script>

<style>
  a.navbar-item {background:none!important; border-bottom: 3px solid #ffffff}
  a.navbar-item:hover {border-bottom: 3px solid #000000}
</style>
