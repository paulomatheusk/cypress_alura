describe('API ADOPET', () =>{
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzMjdhNTRmZC01NTkyLTQ3ZTItOGE0OC00NThkOTE5MDRjOWQiLCJhZG9wdGVyTmFtZSI6IlBhdWxvIEdhbGxvIiwiaWF0IjoxNzQzMDMxMTk5LCJleHAiOjE3NDMyOTAzOTl9.sksYskOYUPQARwbpoROZZnlsW7jjfRZP_2LfKDMh5t8`

    it('Mensagens API', () => { 
        cy.request({
        method: 'GET',
        url: 'https://adopet-api-i8qu.onrender.com/mensagem/327a54fd-5592-47e2-8a48-458d91904c9d',
        headers: { authorization }

    }).then((res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body).to.have.property('msg')
})

})
})
    