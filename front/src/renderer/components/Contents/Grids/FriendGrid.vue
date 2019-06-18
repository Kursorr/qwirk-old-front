<template>
  <section class="view">
    <section class="table-header">
      <section class="table-header-col name">Nom</section>
      <div class="separator"></div>
      <section class="table-header-col serverStatus">Status</section>
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
          <button class="action video-call"></button>
          <button class="action voice-call"></button>
          <button class="action remove"></button>
        </section>
      </section>
    </section>
  </section>
</template>

<style lang="scss" scoped>
  .name {
    width: 200px;
  }

  .serverStatus {
    width: 140px;
    margin-left: 20px;
  }

  .common {
    width: 200px;
    margin-left: 20px;
  }

  .table-line {
    height: 62px;
    display: flex;
    flex-direction: row;
    padding: 2px 12px 0 12px;
    font-weight: 500;
    font-size: 16px;
    overflow: hidden;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      background-color: #414449;

      > .table-line-actions {
        visibility: visible;
      }
    }

    .table-line-name {
      color: hsla(0, 0%, 100%, .6);
      display: flex;
      align-items: center;

      .avatar {
        background: url(https://cdn.discordapp.com/icons/85154866468487168/3c688e03576b5d129a527efc237ba24e.webp) no-repeat;
        background-size: 30px;
        /* Need to be removed */
      }

      .tag-name {
        display: flex;
        align-items: center;
        width: 160px;
      }
    }

    .table-line-common {
      display: flex;
      align-items: center;
      margin-left: 162px;

      .avatar-group {
        height: 30px;
        width: 30px;
        background-image: url(https://cdn.discordapp.com/icons/85154866468487168/3c688e03576b5d129a527efc237ba24e.webp);
        border-radius: 50%;
        background-size: 30px 30px;
      }
    }

    .table-line-actions {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      visibility: hidden;

      button.action {
        height: 36px;
        width: 36px;
        background-color: #2f3136;

        &.voice-call {
          background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHBvbHlnb24gcG9pbnRzPSIwIDAgMjQgMCAyNCAyNCAwIDI0Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNy41LDEwLjUgQzguOTQsMTMuMzMgMTAuNjY5MTI4MSwxNS4wNSAxMy40OTkxMjgxLDE2LjUgTDE1LjQxLDE1LjE4IEMxNS42OCwxNC45MSAxNi4wOCwxNC44MiAxNi40MywxNC45NCBDMTcuNTUsMTUuMzEgMTguNzYsMTUuNTEgMjAsMTUuNTEgQzIwLjU1LDE1LjUxIDIxLDE1Ljk2IDIxLDE2LjUxIEwyMSwyMCBDMjEsMjAuNTUgMjAuNTUsMjEgMjAsMjEgQzEwLjYxLDIxIDIuNzkzOTk5MDcsMTMuNjQwNDQ0OSAzLDQgQzMuMDExNzQ5OTQsMy40NTAxMjU3MyAzLjQ1LDMgNCwzIEw3LjUsMyBDOC4wNSwzIDguNSwzLjQ1IDguNSw0IEM4LjUsNS4yNSA4LjcsNi40NSA5LjA3LDcuNTcgQzkuMTgsNy45MiA5LjEsOC4zMSA4LjgyLDguNTkgTDcuNSwxMC41IFoiLz4KICA8L2c+Cjwvc3ZnPgo=");
          background-repeat: no-repeat;
          background-position: 6px;

          &:hover {
            background-color: #4F545C;
          }
        }

        &.video-call {
          background-image: url('https://discordapp.com/assets/f67374a8fd6b116362596d65cc516747.svg');
          background-repeat: no-repeat;
          background-position: 6px;

          &:hover {
            background-color: #4F545C;
          }
        }

        &.remove {
          background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMCAxMmMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNC00IDEuNzktNCA0IDEuNzkgNCA0IDR6bTAgMmMtMi42NyAwLTggMS4zNC04IDR2MmgxNnYtMmMwLTIuNjYtNS4zMy00LTgtNHptOS4zMDczOTk5LTMuNTA2NjMzM2wxLjY3MjQzMjYtMS42NzI0MzI1NWMuMTI0NTk2LS4xMjQ1OTYwNi4zOTY3NS0uMzk2NzUwMS0uMDA0MDIwMi0uNzk3NTIwMzctLjQwMDc3MDMtLjQwMDc3MDI4LS42NzY5MDA2LS4xMzI1OTI1LS44MDE0OTY3LS4wMDc5OTY0M2wtMS42NzI0MzI1IDEuNjcyNDMyNTItMS42MzY4MjEtMS42MzY4MjFjLS4xMjM2OTY0LS4xMjM2OTY0Ni0uNDI5NzE5MS0uNDI5NzE5MTctLjgzNDQ2NTctLjAyNDk3MjY1LS40MDQ3NDY1LjQwNDc0NjUzLS4wOTk1MDM5LjcxMTU0OTQuMDI0MTkyNS44MzUyNDU4NWwxLjYzNjgyMSAxLjYzNjgyMTAzLTEuNjI1ODI3MyAxLjYyNTgyNzNjLS4xMjM2OTY1LjEyMzY5NjUtLjQzODU5ODkuNDQ2NTUxNC0uMDM3ODI4Ni44NDczMjE3LjQwMDc3MDMuNDAwNzcwMi42NzkyMjgyLjEyMjMxMjMuODAyOTI0Ny0uMDAxMzg0MmwxLjY2NjI0OC0xLjY2NjI0OCAxLjY1NDAxNzQgMS42NTQwMTczYy4xMjQxNDYyLjEyNDE0NjMuNDE5OTIxNi40MTgzNjE0LjgyNDY2ODIuMDEzNjE0OS40MDQ3NDY1LS40MDQ3NDY2LjEwOTc1MTItLjY5OTc0MTgtLjAxNDM5NS0uODIzODg4MWwtMS42NTQwMTc0LTEuNjU0MDE3M3oiLz4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMCIvPgogIDwvZz4KPC9zdmc+");
          background-repeat: no-repeat;
          background-position: 6px;

          &:hover {
            background-color: #DC4242;
          }
        }
      }
    }

    .table-line-name,
    .table-line-status {
      display: flex;
      align-items: center;
    }

    .table-line-status {
      margin-left: 80px;
    }
  }

  div.status {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: red;
    border-color: transparent;
  }
</style>

