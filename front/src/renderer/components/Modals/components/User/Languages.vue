<template>
  <section>
    <h2 class="titleSection">Langue</h2>
    <section class="somethinghere">
      <h2 class="information">Sélectionnez une langue</h2>
      <section id="languageList">
        <ul>
          <li class="param-content">
            <section class="langueAndCheck">
              <label for="french">Français
                <div class="checkbox-green">
                  <input type="checkbox" value="1" class="checkboxNone" id="french"
                         name="french"><label for="french" class="labelCircle"></label>
                  <div class="checkboxDiv"></div>
                </div>
              </label>
            </section>
            <section class="drapAndLogo">
              <span class="section-description">Français</span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAvCAYAAABe1bwWAAAA0klEQVR42u3bPQrCQBRFYUuzsSSNdoIbyMrSJEJ+dpWAWoogmPGOEBh5Y6U25gycBbyvvrMKX7avc9WpQU3KfdLlevtZ513xjSY1qE7ls0MIslaVOe7fYWyVSkKYUjlgnpUzSqocMC+lHqYBxtR6mCMwpsHDOGBMd2DeBAwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAsEIYNXryTh2mBMbXsfONlLMNtZTiZT1QNTHFQSeyzxUb1alwQzKh6tQ0tHq2SfJj8Q3YaAAAAAElFTkSuQmCC" alt="french-drap" style="width:27px; height:18px;">
            </section>
          </li>
        </ul>
      </section>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'Languages'
  }
</script>
