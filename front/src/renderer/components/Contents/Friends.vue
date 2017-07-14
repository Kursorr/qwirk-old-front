<template>
  <section class="global">
    <section class="bar">
      <section class="filters">
        <a href="#" class="filt add">Ajouter un ami</a>
        <div class="separator"></div>
        <a href="#" class="filt">Tous</a>
        <a href="#" class="filt">En ligne</a>
        <a href="#" class="filt">En attente</a>
        <div class="separator"></div>
        <a href="#" class="filt">Bloqué</a>
      </section>
    </section>
    <section class="view">
      <section class="table-header">
        <section class="table-header-col name">Nom</section>
        <div class="separator"></div>
        <section class="table-header-col status">Status</section>
        <div class="separator"></div>
        <section class="table-header-col common">Groupe en commun</section>
        <div class="separator"></div>
      </section>

      <section class="table-content">
        <section class="table-line">
          <section class="table-line-name">
            <section class="avatar"></section>
            <section class="tag-name">
              <span class="pseudo">Ravaniss</span>
              <span class="tag">#2495</span>
            </section>
          </section>

          <section class="table-line-status">
            <div class="status"></div>
          </section>

          <section class="table-line-common">
            <a href="#">
              <div class="avatar-group"></div>
            </a>
          </section>

          <section class="table-line-actions">
            <button class="action voice-call"></button>
            <button class="action remove"></button>
          </section>
        </section>
      </section>

    </section>
  </section>
</template>
