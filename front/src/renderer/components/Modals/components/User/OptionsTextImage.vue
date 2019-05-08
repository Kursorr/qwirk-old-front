<template>
  <section>
    <h2 class="titleSection">Texte & images</h2>

    <section class="somethinghere" id="showStuffs">
      <h2 class="information">Affiche les images, vidéos et lolcats</h2>
      <ul>
        <li class="param-content">
          <section class="param">
            <p>Lorsqu'ils sont envoyés comme liens dans le salon</p>
            <div class="checkbox-grey">
              <input type="checkbox" value="1" class="checkboxNone" id="room"
                     name="room"><label for="room" class="labelCircle"></label>
              <div class="checkboxDiv"></div>
            </div>
          </section>
        </li>
        <li class="param-content">
          <section class="param">
            <p>Lorsqu'ils sont envoyés directement dans Qwirk</p>
            <div class="checkbox-grey">
              <input type="checkbox" value="1" class="checkboxNone" id="qwirkSend"
                     name="qwirkSend"><label for="qwirkSend" class="labelCircle"></label>
              <div class="checkboxDiv"></div>
            </div>
          </section>
          <p class="section-description">
            Les images plus lourdes que 10MB ne seront pas prévisualisées.
          </p>
        </li>
      </ul>
    </section>

    <section class="somethinghere" id="linkPreview">
      <h2 class="information">Prévisualisation de lien</h2>
      <ul>
        <li class="param-content">
          <section class="param">
            <p>Afficher des informations sur le site web envoyé dans le salon</p>
            <div class="checkbox-grey">
              <input type="checkbox" value="1" class="checkboxNone" id="showInfoWebsite"
                     name="showInfoWebsite"><label for="showInfoWebsite" class="labelCircle"></label>
              <div class="checkboxDiv"></div>
            </div>
          </section>
        </li>
      </ul>
    </section>

    <section class="somethinghere" id="emojiscvrt">
      <h2 class="information">émojis</h2>
      <ul>
        <li class="param-content">
          <section class="param">
            <p>Montrer les réactions émoji sur les messages</p>
            <div class="checkbox-grey">
              <input type="checkbox" value="1" class="checkboxNone" id="displayEmo"
                     name="displayEmo"><label for="displayEmo" class="labelCircle"></label>
              <div class="checkboxDiv"></div>
            </div>
          </section>
        </li>
        <li class="param-content">
          <section class="param">
            <p>Convertir automatiquement les émoticônes dans vos messages emoji</p>
            <div class="checkbox-grey">
              <input type="checkbox" value="1" class="checkboxNone" id="convertEmoOnTchat"
                     name="convertEmoOnTchat"><label for="convertEmoOnTchat" class="labelCircle"></label>
              <div class="checkboxDiv"></div>
            </div>
          </section>
          <p class="section-description">
            Par exemple, quand vous tapez :-) Qwirk le convertira en <img src="../../../../../renderer/assets/emoji.png" alt="emoji" id="emojiExample">
          </p>
        </li>
      </ul>
    </section>
  </section>
</template>
