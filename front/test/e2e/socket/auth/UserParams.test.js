import VueSelector from "testcafe-vue-selectors"

const userParams = VueSelector('userParams')

fixture("Register")
  .page("../../../../dist/electron/index.html")

test("Should auth the user", async t => {
  await t.typeText(auth.find('input[name=loginEmail]'), 'PseudoTest@test.com')
  await t.typeText(auth.find('input[name=loginPassword]'), 'PseudoPassword')
  await t.click(auth.find('.connect'))
  await t.wait(2000)
  await t.click(userParams.find('.settings'))
  await t.wait(5000)
})
