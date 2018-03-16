<template>
  <section>
    <h2 class="titleSection">Vue d'ensemble du serveur</h2>
    <section class="principal">
      <form class="form" method="POST">
        <section class="logo">
          <section class="logo-ce">
            <section class="logo-group">
              <section class="bckg"></section>
              <section class="upload-file">Changer l'icône</section>
              <input type="file" class="file-input" accept=".jpg,.jpeg,.png,.gif">
            </section>
          </section>
          <section class="upload">
            <p class="section-description">We recommend an image of at least 512x512 for your server.</p>
            <button>
              <div>
                Upload Image
                <input type="file" class="file-input" accept=".jpg,.jpeg,.png,.gif">
              </div>
            </button>
          </section>
          <section class="name">
            <label for="group_name" class="information">Nom du groupe</label>
            <input type="text" name="group_name" id="group_name">
          </section>
        </section>

        <hr>

        <section class="afk">
          <section class="options">
            <section class="opt w">
              <label for="salonAfk" class="information">Salon AFK</label>
              <select name="salonAfk" id="salonAfk">
                <option value="none">Aucun salon AFK</option>
                <option value="general">General</option>
              </select>
            </section>
            <section class="opt w">
              <label for="delay" class="information">Délai avant inactivité</label>
              <select name="delay" id="delay">
                <option value="1min">1 minute</option>
                <option value="5mins">5 minutes</option>
                <option value="15mins">15 minutes</option>
                <option value="30mins">30 minutes</option>
                <option value="1h">1 heure</option>
              </select>
            </section>
          </section>
          <p class="section-description">Déplace automatiquement les membres dans ce salon après une certaine période d'inactivité et les rend muets.</p>
        </section>
      </form>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'Global'
  }
</script>
