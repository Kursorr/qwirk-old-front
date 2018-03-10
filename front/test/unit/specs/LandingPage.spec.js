// const assert = require('assert')
import Vue from 'vue'
import view from '../../../src/renderer/components/Modals/components/User/Security.vue'

describe('view', () => {
  // Inspecter l'objet d'options du composant
  it('a le hook `created`', () => {
    expect(view.created).to.be.a('function')
  })

  // Évaluer les résultats des fonctions dans
  // l'objet d'options du composant
  it('contient les données par défaut', () => {
    expect(view.data).to.be.a('function')
  })
})
