import VueSelector from "testcafe-vue-selectors"

const landingPage = VueSelector('landing-page')
const auth = VueSelector('auth')

fixture("userParams")
  .page("../../../../dist/electron/index.html")

test('should...', async t => {
  await t.typeText(auth.find('input[name=loginEmail]'), 'PseudoTest@test.com')
    .typeText(auth.find('input[name=loginPassword]'), 'PseudoPassword')
    .click(auth.find('.connect'))
    .navigateTo('#/landing-page')
    .click(landingPage.find('.settings'))
    .wait(2000)
});
