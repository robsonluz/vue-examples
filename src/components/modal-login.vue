<template>
    <form action="">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Login</p>
                <button
                    type="button"
                    class="delete"
                    @click="$emit('close')"/>
            </header>
            <section class="modal-card-body">
                <b-field label="E-mail">
                    <b-input
                        type="email"
                        :value="email"
                        placeholder="Seu e-mail"
                        required>
                    </b-input>
                </b-field>

                <b-field label="Senha">
                    <b-input
                        type="password"
                        :value="password"
                        password-reveal
                        placeholder="Sua senha"
                        required>
                    </b-input>
                </b-field>

                <b-checkbox>Lembrar-me</b-checkbox>
            </section>
            <footer class="modal-card-foot">
                <b-button
                    label="Cancelar"
                    @click="$emit('close')" />
                <b-button
                    label="Entrar"
                    type="is-primary" />
                <b-button
                    label="Entrar com o google"
                    @click="google()"
                    type="is-primary" />                    
            </footer>
        </div>
    </form>
</template>

<script>
//import firebase from 'firebase/compat/app';
//import "firebase/auth"

//import * as firebase from 'firebase/app'; 
//import 'firebase/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export default {
    props: ['email', 'password', 'canCancel'],
    methods: {
      google() {
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
                  console.log('resposta do login');
                  console.log('logado', response);
                  //self.duvidas = response.data;
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
                        console.log('logado', responseLogin);
                      });
                    });
                  }
                  
                });

            }).catch((error) => {
                console.log(error);
            });
      }
    }
}
</script>