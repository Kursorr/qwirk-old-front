import VueSelector from "testcafe-vue-selectors"

const register = VueSelector('register')

fixture("Register")
  .page("../../../../dist/electron/index.html")
  .beforeEach(t => t.navigateTo('#/register'))

test("Should not register the user if pseudo is less than 2 characters", async t => {
  await t.typeText(register.find('input[name=registerName]'), 'P')
  await t.typeText(register.find('input[name=registerEmail]'), 'PseudoTeste@test.com')
  await t.typeText(register.find('input[name=registerPassword]'), 'PseudoPassword')
  await t.typeText(register.find('input[name=registerVerifPassword]'), 'PseudoPassword')
  await t.click(register.find('.connect'))
  await t.wait(2000)
})

test("Should not register the user with wrong email", async t => {
  await t.typeText(register.find('input[name=registerName]'), 'PseudoTest')
  await t.typeText(register.find('input[name=registerEmail]'), 'PseudoTest@test')
  await t.typeText(register.find('input[name=registerPassword]'), 'PseudoPassword')
  await t.typeText(register.find('input[name=registerVerifPassword]'), 'PseudoPassword')
  await t.click(register.find('.connect'))
  await t.wait(2000)
})

test("Should not register the user if registerPassword and registerVerifPassword are not equal", async t => {
  await t.typeText(register.find('input[name=registerName]'), 'PseudoTest')
  await t.typeText(register.find('input[name=registerEmail]'), 'PseudoTest@test.com')
  await t.typeText(register.find('input[name=registerPassword]'), 'PseudoPassword')
  await t.typeText(register.find('input[name=registerVerifPassword]'), 'PseudoPasswordI')
  await t.click(register.find('.connect'))
  await t.wait(2000)
})

test("Should register the new user", async t => {
  await t.typeText(register.find('input[name=registerName]'), 'PseudoTest')
  await t.typeText(register.find('input[name=registerEmail]'), 'PseudoTest@test.com')
  await t.typeText(register.find('input[name=registerPassword]'), 'PseudoPassword')
  await t.typeText(register.find('input[name=registerVerifPassword]'), 'PseudoPassword')
  await t.click(register.find('.connect'))
  await t.wait(2000)
})

test("Should not register the user because email already exist", async t => {
  await t.typeText(register.find('input[name=registerName]'), 'PseudoTest')
  await t.typeText(register.find('input[name=registerEmail]'), 'PseudoTest@test.com')
  await t.typeText(register.find('input[name=registerPassword]'), 'PseudoPassword')
  await t.typeText(register.find('input[name=registerVerifPassword]'), 'PseudoPassword')
  await t.click(register.find('.connect'))
  await t.wait(2000)
})
