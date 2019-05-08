<template>
  <section>
    <h2 class="titleSection">Paramètres vocaux</h2>
    <section class="somethinghere" id="inOut">
      <section class="periph" style="margin-right: 40px;">
        <section class="opt">
          <label for="entryPeriph" class="information">Périphérique d'entrée</label>
          <select name="entryPeriph" id="entryPeriph">
            <option value="default">Par défaut</option>
          </select>
        </section>
        <h2 class="information" style="margin-top:20px;">Volume d'entrée</h2>
        <div class="slider">
          <input type="number" class="input-slider" value="50" readonly="">
          <div class="track"></div>
          <div class="barr">
            <div class="barFill" style="width: 50%;"></div>
          </div>
          <div class="track">
            <div class="grabber" style="left: 50%;">
              <span class="bubble elevation">50%</span>
            </div>
          </div>
        </div>
      </section>
      <section class="periph">
        <section class="opt">
          <label for="entryPeriph" class="information">Périphérique de sortie</label>
          <select name="outPeriph" id="outPeriph">
            <option value="default">Par défaut</option>
          </select>
        </section>
        <h2 class="information" style="margin-top: 20px;">Volume de sortie</h2>
        <div class="slider">
          <input type="number" class="input-slider" value="50" readonly="">
          <div class="track"></div>
          <div class="barr">
            <div class="barFill" style="width: 50%;"></div>
          </div>
          <div class="track">
            <div class="grabber" style="left: 50%;">
              <span class="bubble elevation">50%</span>
            </div>
          </div>
        </div>
      </section>
    </section>

    <hr>

    <section class="somethinghere" id="activMicro">
      <h2 class="information">Activation du micro</h2>
      <div>
        <input checked id="no-analyze" name="security" type="radio">
        <section class="checkbox blue">
          <div>
            <label class="fake-checkbox" for="no-analyze"></label>
          </div>
          <div>
            <h3 class="sec-title">
              Détection de la voix
            </h3>
          </div>
        </section>
      </div>
      <div>
        <input checked id="analyze" name="security" type="radio">
        <section class="checkbox blue">
          <div>
            <label class="fake-checkbox" for="analyze"></label>
          </div>
          <div>
            <h3 class="sec-title">
              Appuyer-pour-parler
            </h3>
          </div>
        </section>
      </div>
    </section>
    <section class="somethinghere" id="vocSensibility">
      <h2 class="information">Sensibilité de la détection vocale</h2>
      <div class="slider">
        <input type="number" class="input-slider" value="50" readonly="">
        <div class="track"></div>
        <div class="barr">
          <div class="barFill" style="width: 50%;"></div>
        </div>
        <div class="track">
          <div class="grabber" style="left: 50%;">
            <span class="bubble elevation">50%</span>
          </div>
        </div>
      </div>
    </section>

    <hr>

    <section class="somethinghere" id="vidParams">
      <h2 class="titleSection">Paramètres vidéo</h2>
      <section class="somethinghere" id="vid">
        <section id="cam">
          <section class="opt">
            <label for="entryCam" class="information">Caméra</label>
            <select name="entryCam" id="entryCam">
              <option value="default">Par défaut</option>
            </select>
          </section>
        </section>
        <section id="previsualisation">
          <h2 class="information">Aperçu</h2>
          <div id="tryCam">
            <button class="connect">Test vidéo</button>
          </div>
        </section>
      </section>
    </section>
  </section>
</template>
