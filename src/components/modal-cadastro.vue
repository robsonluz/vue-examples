<template>
    <form action="">
        <div class="modal-card" style="width: 400px">
            <header class="modal-card-head">
                <p class="modal-card-title">Cadastro</p>
                <button
                    type="button"
                    class="delete"
                    @click="$emit('close')"/>
            </header>
            <section class="modal-card-body">
                <b-field label="Nome">
                    <b-input
                        type="text"
                        v-model="usuario.nome"
                        placeholder="Seu nome completo"
                        required>
                    </b-input>
                </b-field>              
                <b-field label="E-mail">
                    <b-input
                        type="email"
                        v-model="usuario.email"
                        placeholder="Seu e-mail"
                        required>
                    </b-input>
                </b-field>
                <b-field label="Telefone">
                    <b-input
                        type="text"
                        v-model="usuario.telefone"
                        placeholder="Seu telefone para contato"
                        required>
                    </b-input>
                </b-field>                 

                <b-field label="Senha">
                    <b-input
                        type="password"
                        v-model="usuario.senha"
                        password-reveal
                        placeholder="Sua senha"
                        required>
                    </b-input>
                </b-field>

            </section>
            <footer class="modal-card-foot">
                <b-button
                    label="Cancelar"
                    @click="$emit('close')" />
                <b-button
                    label="Cadastrar"
                    type="is-primary"
                    @click="cadastrar()" />
            </footer>
        </div>
    </form>
</template>

<script>
export default {
    props: ['canCancel'],
    data(){
        return {
            usuario: {
              nome: '',
              email: '',
              telefone: '',
              senha: ''
            }
        }
    },  
    methods: {
      cadastrar() {
          var self = this;
          //Chama a api para criar o usuário
          this.axios.post('usuarios-create/', this.usuario).then((response) => {
            console.log(response);
            //Fecha o modal
            self.$emit('close');

            //Mostra a mensagem de sucesso
            this.$buefy.dialog.alert('Cadastro realizado com sucesso!')
          })        
      }
    }  
}
</script>