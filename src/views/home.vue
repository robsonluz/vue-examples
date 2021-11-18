<template>
  <div class="">
    <section class="section">
        <h1 class="title">Página inicial</h1>
    </section>

    <hr style="width: 200px">
<b-input type="text"/>
             <date-pick v-model="data"
                         :format="'YYYY-MM-DD'"
                         :displayFormat="'DD/MM/YYYY'"
                         >

             </date-pick>
            <button @click="teste">Teste</button>
  </div>
</template>

<script>
    import DatePick from 'vue-date-pick';
    import 'vue-date-pick/dist/vueDatePick.css';
    export default {
        components: {DatePick},
        data() {
            return {
                data: '2019-01-24'
            }
        },
        methods:{
          teste() {
            console.log('data:', this.data);
          }
        }
        
    }
</script>  