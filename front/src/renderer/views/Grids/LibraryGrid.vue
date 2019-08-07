<template>
  <section class="global">
    <section class="view">
      <section class="table-header">
        <section class="table-header-col nameGame">Nom</section>
        <div class="separator"></div>
        <section class="table-header-col platform">Plateforme</section>
        <div class="separator"></div>
        <section class="table-header-col lastTimegame">Joué pour la dernière fois</section>
        <div class="separator"></div>
      </section>

      <section class="table-content">
        <section class="game">
          <button class="action play">Jouer</button>
          <div class="game-image odyssey"></div>
          <section class="table-line game odyssey">
            <section class="table-line-name">
              <section class="game-avatar"></section>
              <section class="game-name">
                <span class="pseudo">Assassin's Creed Odyssey</span>
              </section>
            </section>

            <section class="table-line-platform">
              <div class="avatar-group">Steam</div>
            </section>
          </section>
        </section>

      </section>
    </section>
  </section>
</template>

<style lang="scss" scoped>
  .nameGame {
    width: 313px;
  }

  .platform {
    width: 220px;
    margin-left: 15px;
  }

  .lastTimegame {
    width: 220px;
    margin-left: 15px;
    color: #FFF;
  }

  .table-line-name {
    display: flex;
    align-items: center;

    .game-name {
      display: flex;
      align-items: center;
      width: 289px;
      color: #FFF;
    }
  }

  div.game-image:hover + .table-line.game,
  button.action.play:hover ~ .table-line.game {
    border-bottom: none !important;
  }

  .table-line-platform {
    display: flex;
    align-items: center;
    margin-left: 18px;
    color: hsla(0, 0%, 100%, .6);
  }

  .table-line-actions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .game {
    position: relative;

    &:hover {
      box-shadow: 0 2px 5px 0 rgba(0,0,0,.2);
      border-radius: 6px;
      background-color: rgba(79,84,92,.3);
    }

    .table-line.game {
      height: 62px;
      display: flex;
      flex-direction: row;
      padding: 2px 12px 0 12px;
      font-weight: 500;
      font-size: 16px;
      overflow: hidden;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    div.game-image {
      width: 100%;
      height: 62px;
      position: absolute;
      z-index: 9997;

      &:hover {
        opacity: 0.06;
        background-color: #414449;
      }
    }

    div.game-image.odyssey:hover {
      background: url("https://cdn.gearnuke.com/wp-content/uploads/2018/09/assassins-creed-odyssey-review-ps4-5-768x432.jpg") center;
    }

    .game-avatar {
      background: url(https://cdn.discordapp.com/game-assets/385538388419280896/841763b6a50ddd5dfbaa482932442e8d.webp?size=64) no-repeat;
      background-size: 30px;
      height: 30px;
      width: 30px;
      margin-right: 10px;
      margin-left: 8px;
    }
  }

  button.action.play {
    background-size: 24px;
    background: #2f3136 no-repeat 50%;
    height: 36px;
    border-radius: 3px;
    width: 125px;
    font-size: 12px;
    position: absolute;
    z-index: 9998;
    top: 12px;
    right: 25px;

    &:hover {
      background-color: #43b581;
    }

    &:hover + div.game-image {
      opacity: 0.06;
    }

    &:hover + div.game-image.odyssey {
      background: #414449 url("https://cdn.gearnuke.com/wp-content/uploads/2018/09/assassins-creed-odyssey-review-ps4-5-768x432.jpg") center;
    }
  }

  .table-line > .table-line-actions {
    button.action, button.action.play {
      background-size: 24px;
      background: #2f3136 no-repeat 50%;
      width: 36px;
      height: 36px;
      border-radius: 3px;
    }

    button.action.play {
      width: 125px;
      font-size: 12px;
    }
  }
</style>
