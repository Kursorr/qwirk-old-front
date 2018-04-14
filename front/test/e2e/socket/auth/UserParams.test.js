import VueSelector from "testcafe-vue-selectors"

const landingPage = VueSelector('landing-page')
const auth = VueSelector('auth')

fixture("userParams")
  .page("../../../../dist/electron/index.html")

test('should not edit user profile because only pseudo is present', async t => {
  await t.typeText(auth.find('input[name=loginEmail]'), 'PseudoTest@test.com')
    .typeText(auth.find('input[name=loginPassword]'), 'PseudoPassword')
    .click(auth.find('.connect'))
    .navigateTo('#/landing-page')
    .click(landingPage.find('.settings'))
    .click(landingPage.find('.connect'))
    .typeText(landingPage.find('input[name=pseudo]'), 'PseudoTest')
    .click(landingPage.find('.success'))
    .wait(2000)
});

test('should not edit user profile because only email is present', async t => {
  await t.typeText(auth.find('input[name=loginEmail]'), 'PseudoTest@test.com')
    .typeText(auth.find('input[name=loginPassword]'), 'PseudoPassword')
    .click(auth.find('.connect'))
    .navigateTo('#/landing-page')
    .click(landingPage.find('.settings'))
    .click(landingPage.find('.connect'))
    .typeText(landingPage.find('input[name=email]'), 'NewEmailTest@test.com')
    .click(landingPage.find('.success'))
    .wait(2000)
});

test('should not edit user profile because only password is present', async t => {
  await t.typeText(auth.find('input[name=loginEmail]'), 'PseudoTest@test.com')
    .typeText(auth.find('input[name=loginPassword]'), 'PseudoPassword')
    .click(auth.find('.connect'))
    .navigateTo('#/landing-page')
    .click(landingPage.find('.settings'))
    .click(landingPage.find('.connect'))
    .typeText(landingPage.find('input[name=password]'), 'pass')
    .click(landingPage.find('.success'))
    .wait(2000)
});

test('should not edit user profile because only newPassword is present', async t => {
  await t.typeText(auth.find('input[name=loginEmail]'), 'PseudoTest@test.com')
    .typeText(auth.find('input[name=loginPassword]'), 'PseudoPassword')
    .click(auth.find('.connect'))
    .navigateTo('#/landing-page')
    .click(landingPage.find('.settings'))
    .click(landingPage.find('.connect'))
    .click(landingPage.find('.specialA'))
    .typeText(landingPage.find('input[name=newPassword]'), 'NnewPasswordm')
    .click(landingPage.find('.success'))
    .wait(2000)
});

test('should not edit user profile because password is absent', async t => {
  await t.typeText(auth.find('input[name=loginEmail]'), 'PseudoTest@test.com')
    .typeText(auth.find('input[name=loginPassword]'), 'PseudoPassword')
    .click(auth.find('.connect'))
    .navigateTo('#/landing-page')
    .click(landingPage.find('.settings'))
    .click(landingPage.find('.connect'))
    .click(landingPage.find('.specialA'))
    .typeText(landingPage.find('input[name=pseudo]'), 'PseudoTest')
    .typeText(landingPage.find('input[name=email]'), 'PseudoTest@test.com')
    .click(landingPage.find('.success'))
    .wait(2000)
});

test('should not edit user profile with wrong password', async t => {
  await t.typeText(auth.find('input[name=loginEmail]'), 'PseudoTest@test.com')
    .typeText(auth.find('input[name=loginPassword]'), 'PseudoPassword')
    .click(auth.find('.connect'))
    .navigateTo('#/landing-page')
    .click(landingPage.find('.settings'))
    .click(landingPage.find('.connect'))
    .click(landingPage.find('.specialA'))
    .typeText(landingPage.find('input[name=pseudo]'), 'PseudoTest')
    .typeText(landingPage.find('input[name=email]'), 'PseudoTest@test.com')
    .typeText(landingPage.find('input[name=password]'), 'PseudoPass')
    .click(landingPage.find('.success'))
    .wait(2000)
});

test('should edit user profile', async t => {
  await t.typeText(auth.find('input[name=loginEmail]'), 'PseudoTest@test.com')
    .typeText(auth.find('input[name=loginPassword]'), 'PseudoPassword')
    .click(auth.find('.connect'))
    .navigateTo('#/landing-page')
    .click(landingPage.find('.settings'))
    .click(landingPage.find('.connect'))
    .click(landingPage.find('.specialA'))
    .typeText(landingPage.find('input[name=pseudo]'), 'fail')
    .typeText(landingPage.find('input[name=email]'), 'fail@test.com')
    .typeText(landingPage.find('input[name=password]'), 'PseudoPassword')
    .typeText(landingPage.find('input[name=newPassword]'), 'FailPassword')
    .click(landingPage.find('.success'))
    .wait(2000)
});

test('should edit user profil (pseudo only)', async t => {
  await t.typeText(auth.find('input[name=loginEmail]'), 'fail@test.com')
    .typeText(auth.find('input[name=loginPassword]'), 'FailPassword')
    .click(auth.find('.connect'))
    .navigateTo('#/landing-page')
    .click(landingPage.find('.settings'))
    .click(landingPage.find('.connect'))
    .click(landingPage.find('.specialA'))
    .typeText(landingPage.find('input[name=pseudo]'), 'PseudoTest')
    .typeText(landingPage.find('input[name=email]'), 'fail@test.com')
    .typeText(landingPage.find('input[name=password]'), 'FailPassword')
    .click(landingPage.find('.success'))
    .wait(2000)
});

test('should edit user profil (email only)', async t => {
  await t.typeText(auth.find('input[name=loginEmail]'), 'fail@test.com')
    .typeText(auth.find('input[name=loginPassword]'), 'FailPassword')
    .click(auth.find('.connect'))
    .navigateTo('#/landing-page')
    .click(landingPage.find('.settings'))
    .click(landingPage.find('.connect'))
    .click(landingPage.find('.specialA'))
    .typeText(landingPage.find('input[name=pseudo]'), 'PseudoTest')
    .typeText(landingPage.find('input[name=email]'), 'PseudoTest@test.com')
    .typeText(landingPage.find('input[name=password]'), 'FailPassword')
    .click(landingPage.find('.success'))
    .wait(2000)
});

test('should edit user profil (password only)', async t => {
  await t.typeText(auth.find('input[name=loginEmail]'), 'PseudoTest@test.com')
    .typeText(auth.find('input[name=loginPassword]'), 'FailPassword')
    .click(auth.find('.connect'))
    .navigateTo('#/landing-page')
    .click(landingPage.find('.settings'))
    .click(landingPage.find('.connect'))
    .click(landingPage.find('.specialA'))
    .typeText(landingPage.find('input[name=pseudo]'), 'PseudoTest')
    .typeText(landingPage.find('input[name=email]'), 'PseudoTest@test.com')
    .typeText(landingPage.find('input[name=password]'), 'FailPassword')
    .typeText(landingPage.find('input[name=newPassword]'), 'newSuperMegaPassword')
    .click(landingPage.find('.success'))
    .wait(2000)
});

test('should back up old profile data', async t => {
  await t.typeText(auth.find('input[name=loginEmail]'), 'PseudoTest@test.com')
    .typeText(auth.find('input[name=loginPassword]'), 'newSuperMegaPassword')
    .click(auth.find('.connect'))
    .navigateTo('#/landing-page')
    .click(landingPage.find('.settings'))
    .click(landingPage.find('.connect'))
    .click(landingPage.find('.specialA'))
    .typeText(landingPage.find('input[name=pseudo]'), 'PseudoTest')
    .typeText(landingPage.find('input[name=email]'), 'PseudoTest@test.com')
    .typeText(landingPage.find('input[name=password]'), 'newSuperMegaPassword')
    .typeText(landingPage.find('input[name=newPassword]'), 'PseudoPassword')
    .click(landingPage.find('.success'))
    .wait(2000)
});
