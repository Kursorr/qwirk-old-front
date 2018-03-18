import VueSelector from "testcafe-vue-selectors";

const auth = VueSelector('auth')

fixture("App")
  .page("../../dist/electron/index.html")

test("write on auth (inscription) inputs", async t => {
  await t.typeText(auth.find('input[name=registerName]'), 'superTest')
  await t.typeText(auth.find('input[name=registerEmail]'), 'superTest')
  await t.wait(5000)
})
