<template>
  <section>
    <h2 class="titleSection">Invites</h2>
    <p class="section-description">Vous trouverez ici tout les liens d'invitation actif. Vous pouvez en révoquer ou en créer une nouvelle.</p>
    <section class="listing">
      <table>
        <tr>
          <th>Inviter</th>
          <th>Code d'invitation</th>
          <th class="text-right">Utilisations</th>
          <th class="text-right">Expire</th>
        </tr>
        <tr class="remove-invitation">
          <td>Suini</td>
          <td>BySDkq57</td>
          <td class="text-right">3</td>
          <td class="text-right">23:01:45</td>
        </tr>
      </table>
    </section>
  </section>
</template>

<style lang="scss" scoped>
  table {
    width: 95%;
    border-collapse: collapse;

    tr.remove-invitation {
      > td {
        padding: 20px 0;
        border: 1px solid transparent;
      }

      &:hover {
        cursor: pointer;
        background-color: #33363c;
        border-color: #2b2e32;
      }
    }

    tr {
      > th {
        padding-bottom: 20px;
      }
    }

    tr th, tr td {
      width: 25%;
      text-align: left;
    }

    th.text-right, td.text-right {
      width: 25%;
      text-align: right;
    }
  }
</style>
