<template>
  <section class="modal auth">
    <section class="set auth">
      <section class="content auth">
        <section class="panel">
          <h2>S'inscrire</h2>
          <form action="" method="POST">
            <div>
              <input type="text" title="registerName" name="registerName" placeholder="Pseudo">
            </div>
            <div>
              <input type="email" title="registerEmail" name="registerEmail" placeholder="Email">
            </div>
            <div>
              <input type="password" title="registerPassword" name="registerPassword" placeholder="Mot de passe">
            </div>
            <div>
              <input type="password" title="registerVerifPassword" name="registerVerifPassword" placeholder="Confirmer le mot de passe">
            </div>
            <div class="special">
              <label class="file-select">
                <div class="select-button">
                  <svg width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg>
                  <span>Votre Avatar</span>
                </div>
                <input type="file"/>
              </label>
            </div>
            <button type="submit">S'inscrire</button>
          </form>
        </section>
        <hr>
        <section class="panel">
          <h2>Se connecter</h2>
          <form action="" method="POST">
            <div>
              <input type="email" title="loginEmail" name="loginEmail" placeholder="Email">
            </div>
            <div>
              <input type="password" title="loginPassword" name="loginPassword" placeholder="Mot de passe">
            </div>

            <a href="#">Avez vous oublié votre mot de passe?</a>

            <button type="submit">Se connecter</button>
          </form>
        </section>
      </section>
    </section>
  </section>
</template>
