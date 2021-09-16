<template>
  <div>
    <section class="section">
        <h1 class="title">Exemplo de imagens de fundo</h1>
    </section>

    <section class="has-bg-img hero" :style="{ backgroundImage: 'url(' + require('@/assets/fundo.jpg') + ')' }">
      <div class="hero-body">
        <p class="title has-text-white">
          Utilizando section hero com imagem de fundo
        </p>
        <p class="subtitle has-text-white">
          Primary subtitle
        </p>
      </div>
    </section>


  </div>
</template>
