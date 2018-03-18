import Auth from '../../../src/renderer/components/Modals/Auth.vue'

const datas = Auth.data()

describe('Auth', _ => {
  it('should be en empty array (data.register)', done => {
    datas.register.pseudo.should.equal('')
    datas.register.email.should.equal('')
    datas.register.password.should.equal('')
    datas.register.confirm.should.equal('')
    datas.register.avatar.should.equal('')
    expect(datas.register.error).to.be.a('null')
    done()
  })

  it('should be an empty array (data.login)', done => {
    datas.login.email.should.equal('')
    datas.login.password.should.equal('')
    expect(datas.login.error).to.be.a('null')
    done()
  })

  it('should be an empty array (data.login)', done => {
    datas.login.email.should.equal('kiki@kiki.dur')
    datas.login.password.should.equal('root')
    expect(datas.login.error).to.be.a('null')
    done()
  })
})
