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
          <div class="bar">
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
          <div class="bar">
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
        <div class="bar">
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

<style lang="scss" scoped>
  div.bar {
    background: #4f545c;
    position: relative;
    top: 16px;
    height: 8px;
    border-radius: 4px;
    display: block;
    overflow: hidden;

    div.barFill {
      background: #7289da;
      height: 100%;
    }
  }

  section#inOut {
    display: flex;

    section.periph {
      width: 50%;
    }
  }

  section#vidParams {
    section#vid {
      display: flex;
      flex-direction: row;

      section#cam {
        margin-right: 20px;
      }

      section#cam, section#previsualisation {
        width: 50%;

        div#tryCam {
          height: 178px;
          width: 278px;
          border-radius: 5px;
          background-color: rgba(32, 34, 37, .3);
          border: 1px solid #202225;
          margin-top: 10px;
          display: flex;
          justify-content: center;
          align-items: center;

          button.connect {
            height: 40px;
          }
        }
      }
    }
  }

  div.grabber, div.track {
    position: absolute;
  }

  div.slider {
    width: 100%;
    height: 40px;
    position: relative;

    input.input-slider {
      display: none;
    }

    div.track {
      top: 0;
      right: 5px;
      bottom: 0;
      left: 5px;

      div.grabber {
        left: 0;
        width: 10px;
        height: 24px;
        margin-left: -5px;
        top: 50%;
        margin-top: -13px;
        border-radius: 3px;
        background-color: #FFF;
        border: 1px solid #dcddde;
        -webkit-box-shadow: 0 3px 1px 0 rgba(0, 0, 0, .05), 0 2px 2px 0 rgba(0, 0, 0, .1), 0 3px 3px 0 rgba(0, 0, 0, .05);
        box-shadow: 0 3px 1px 0 rgba(0, 0, 0, .05), 0 2px 2px 0 rgba(0, 0, 0, .1), 0 3px 3px 0 rgba(0, 0, 0, .05);
        cursor: ew-resize;
        position: absolute;

        span.elevation {
          -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .2);
          box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .2);
        }

        span.bubble {
          background-color: #72767d;
          position: absolute;
          pointer-espanvents: none;
          border-radius: 3px;
          top: -32px;
          left: -21px;
          width: 50px;
          height: 22px;
          line-height: 22px;
          text-align: center;
          font-weight: 600;
          font-size: 12px;
          color: #f6f6f7;
          opacity: 0;
          -webkit-transition: opacity .2s ease-out;
          transition: opacity .2s ease-out;
          pointer-events: none;

          &:before {
            left: 50%;
            border: 5px solid transparent;
            content: " ";
            width: 0;
            height: 0;
            margin-left: -5px;
            top: 100%;
          }
        }
        &:hover {
          span.bubble {
            opacity: 1;
          }
        }
      }
    }
  }

  span.bubble {
    &:before {
      position: absolute;
      pointer-events: none;
    }
  }
</style>
