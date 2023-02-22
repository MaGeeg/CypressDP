//stała url żeby nie pisac jej za każdym razem
const url= 'https://jsonplaceholder.typicode.com/posts'


describe('my first cookie', () =>{
    it('should test json placeholder API', function(){
        //wywołujemy cypress do testów API
        cy.request(url).then((response) => {
            const body = JSON.stringify(response.body)
            expect(response.status).to.eq(200)
            cy.log(body)
        })
        cy.request(
            {
                method: 'POST',
                url: url,
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1        
                }),
                headers:{'Content-type': 'application/json'}
            })
            // sprawdzamy za pomocą then czy wszystko sie utworzyło
        .then((response) => {
            const body = JSON.stringify(response.body)
            cy.log(body)
        })
                
    })
})