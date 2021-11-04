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

                <b-field label="Cidade">
                    <b-select v-model="usuario.cidade" placeholder="Selecione uma cidade" expanded="true">
                        <option
                            v-for="cidade in cidades"
                            :value="cidade.id"
                            :key="cidade.id">
                            {{ cidade.nome }}
                        </option>
                    </b-select>
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
              senha: '',
              cidade: null
            },
            cidades: []
        }
    },  
    created() {
      var self = this;
      //Chama a api para criar o usuário
      this.axios.get('cidades/').then((response) => {
        self.cidades = response.data;
      })  
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
            self.$buefy.dialog.alert('Cadastro realizado com sucesso!')
          })        
      }
    }  
}
</script>