import VueSelector from "testcafe-vue-selectors"

const auth = VueSelector('auth')

fixture("Auth")
  .page("../../../../dist/electron/index.html")

test("Should auth the user", async t => {
  await t.typeText(auth.find('input[name=loginEmail]'), 'kiki@kiki.dur')
  await t.typeText(auth.find('input[name=loginPassword]'), 'root')
  await t.click(auth.find('.connect'))
  await t.wait(2000)
})

test("Should not auth the user", async t => {
  await t.typeText(auth.find('input[name=loginEmail]'), 'fausseaddressemail@gmail.com')
  await t.typeText(auth.find('input[name=loginPassword]'), 'fauxcode')
  await t.click(auth.find('.connect'))
  await t.wait(2000)
})
