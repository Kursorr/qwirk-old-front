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
            <p class="section-description">Nous recommandons une image d'au moins 512x512 pour votre serveur</p>
            <button>
              <div>
                Envoyer une image
                <input type="file" class="file-input" accept=".jpg,.jpeg,.png,.gif">
              </div>
            </button>
          </section>
          <section class="name">
            <label for="group_name" class="information">Nom du Serveur</label>
            <input type="text" name="group_name" id="group_name">
          </section>
        </section>

        <hr>

        <section class="afk">
          <section class="options">
            <section class="opt">
              <label for="salonAfk" class="information">Salon AFK</label>
              <select name="salonAfk" id="salonAfk">
                <option value="none">Aucun salon AFK</option>
                <option value="general">General</option>
              </select>
            </section>
            <section class="opt">
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

<style lang="scss" scoped>
  form {
    margin-top: 20px;

    section.logo {
      display: flex;
      align-items: center;

      p.section-description {
        margin: 0 15px;
        width: 195px;
      }

      button {
        color: #FFF;
        border: solid hsla(0, 0%, 100%, .3) 1px;
        -webkit-transition: color .17s ease, background-color .17s ease, border-color .17s ease;
        transition: color .17s ease, background-color .17s ease, border-color .17s ease;
        background-color: hsla(0, 0%, 100%, .0);
        margin: 10px 0 0 14px;

        &:hover {
          border-color: hsla(0, 0%, 100%, .6);
        }
      }

      section.upload input {
        opacity: 0;
        top: 0;
        left: 0;
        position: absolute;
      }

      section.name > input {
        color: #f6f6f7;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .3) 1px;
        padding: 10px;
        margin-top: 10px;

        &:focus {
          border-color: #7289da;
        }
      }
    }

    section.afk {
      section.options {
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;

        section.opt {
          display: flex;
          flex-direction: column;
          width: 250px;
        }
      }
    }
  }

  section.bckg {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .1), inset 0 0 120px rgba(0, 0, 0, .6);
    display: none;
  }

  section.logo-group:hover > section.upload-file,  section.logo-group:hover > section.bckg,
  section#entireForm > section.logo-ce > section.logo-group:hover > section.bckg,
  section#entireForm > section.logo-ce > section.logo-group:hover > section.upload-file {
    display: block;
  }

</style>
