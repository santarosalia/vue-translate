describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8888')
    cy.get('#username').type('mdc@kakao.com')
    cy.get('#password').type('1q2w3e4r!')
    cy.get('#app > div.login-wrap > div.login-wrap-inner > div:nth-child(2) > div.login > form > div.btn-area > button > span').click()

    cy.get('#app > div.home > div.fc-sidebar-layout > div > ul > li:nth-child(3) > a').click()
    cy.get('#app > div.home > div.fc-content-layout > div > div > div.content-body > div.pc-grid-wrap > div > div > div > div.ag-root-wrapper-body.ag-layout-normal.ag-focus-managed > div.ag-root.ag-unselectable.ag-layout-normal > div.ag-body-viewport.ag-layout-normal.ag-row-no-animation > div.ag-center-cols-clipper > div > div > div.ag-row.ag-row-no-focus.ag-row-even.ag-row-level-0.rowClass.ag-row-position-absolute.ag-row-first > div:nth-child(9) > div > span > span > button').click()

    cy.wait(10000)

    cy.document().then((doc)=>{
      // Array.from(doc.all).forEach((el)=>cy.log(el.innerText))
      // cy.log(Array.from(doc.all).length)
      const data = {}
      Array.from(doc.body.querySelectorAll('*')).forEach((el)=>{
        if (el.innerText) {
          el.innerText.split('\n').forEach((text)=>{
            data[text] = text
          });
        }
        
      })
      cy.writeFile('./src/locales/ko.json',data,'utf-8')

    })
    
    

    
  })
})

