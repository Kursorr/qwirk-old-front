<template>
  <section class="modal">
    <section class="set">
      <section class="menu">
        <h1 class="title">Paramètres Utilisateur</h1>
        <button class="tab">Compte</button>
        <button class="tab">Son et voix</button>
        <button class="tab">Autres</button>
      </section>

      <section class="content">
        <section class="settings">
          <form action="/editUser/:id" method="POST">
            <label for="username">Votre pseudo :</label>
            <input type="text" name="username" id="username">

            <label for="email">Votre adresse mail :</label>
            <input type="email" name="email" id="email">

            <label for="actualPassword">Mot de passe actuel :</label>
            <input type="password" name="actualPassword" id="actualPassword">

            <label for="newPassword">Votre nouveau mot de passe :</label>
            <input type="password" name="newPassword" id="newPassword">

            <input id="file" type="file" accept="image/*" style="display:none">

            <label>Votre avatar</label>
            <img alt="Avatar in setting" src="http://i0.wp.com/marioasselin.com/wp-content/plugins/buddypress/bp-core/images/mystery-man.jpg">

            <button type="submit">Enregistrer les informations</button>
          </form>
        </section>
        <section class="settings voice">
          Voice settings
        </section>
        <section class="settings other">
          Other settings
        </section>
        <section class="buttons">
          <button class="success">Terminer</button>
          <button class="danger">Se déconnecter</button>
        </section>
      </section>
    </section>
  </section>
</template>
