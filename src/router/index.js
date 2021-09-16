import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/home.vue';
import Contato from '@/views/contato.vue';
import Fundo from '@/views/fundo.vue';
import CarrouselImagem from '@/views/carrousel-imagem.vue';
import Icones from '@/views/icones.vue';

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
        path: '/icones',
        name: 'Icones',
        component: Icones,
        meta: {  }
    }             
]

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes
});

export default router;
