import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/home.vue';
import Contato from '@/views/contato.vue';
import Fundo from '@/views/fundo.vue';
import CarrouselImagem from '@/views/carrousel-imagem.vue';
import CarrouselImagemFundo from '@/views/carrousel-imagem-fundo.vue';
import Icones from '@/views/icones.vue';
import DuvidasFrequentes from '@/views/duvidas-frequentes.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {  }
    },
    {
        path: '/contato',
        name: 'Contato',
        component: Contato,
        meta: {  }
    },
    {
        path: '/fundo',
        name: 'Fundo',
        component: Fundo,
        meta: {  }
    },
    {
        path: '/carrousel-imagem',
        name: 'CarrouselImagem',
        component: CarrouselImagem,
        meta: {  }
    },
    {
        path: '/carrousel-imagem-fundo',
        name: 'CarrouselImagemFundo',
        component: CarrouselImagemFundo,
        meta: {  }
    },    
    {
        path: '/icones',
        name: 'Icones',
        component: Icones,
        meta: {  }
    },
    {
        path: '/duvidas-frequentes',
        name: 'DuvidasFrequentes',
        component: DuvidasFrequentes,
        meta: {  }
    },             
]

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes
});

export default router;
