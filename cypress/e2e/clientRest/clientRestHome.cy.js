//stała url żeby nie pisac jej za każdym razem
const url= 'https://jsonplaceholder.typicode.com/posts/1'


describe('my homework module 6', () =>{
    it('should test json placeholder API', function(){
        
        // wywołujemy cypress do testów API - metoda domyślna GET
        cy.request(url).then((response) => {
            const body = JSON.stringify(response.body)
            expect(response.status).to.eq(200)
            cy.log(body)
        })
    })    
    
    // request z metodą POST
    // it('should test json placeholder API', function(){    
    //     cy.request(
    //         {
    //             method: 'POST',
    //             url: url,
    //             body: JSON.stringify({
    //                 title: 'foo',
    //                 body: 'bar',
    //                 userId: 1        
    //             }),
    //             headers:{'Content-type': 'application/json'}
    //         })
    //         // sprawdzamy za pomocą then czy wszystko sie utworzyło
    //     .then((response) => {
    //         const body = JSON.stringify(response.body)
    //         cy.log(body)
    //     })
    // })

    // request z metodą PUT
    it('should test json placeholder API', function(){    
        cy.request(
            {
                //const url= 'https://jsonplaceholder.typicode.com/posts/1'
                method: 'PUT',
                url: url,
                body: JSON.stringify({
                    title: 'sunt aut facere',
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

        
    //request z metodą DELETE
    it('should test json placeholder API', function(){    
        cy.request(
            {
                //const url= 'https://jsonplaceholder.typicode.com/posts/1'
                method: 'DELETE',
                url: url,
                body: JSON.stringify({
                    title: 'sunt aut facere',
                    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
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
        
    

    // it('should connect to jsp and update post', function() {
    //     cy.request('DELETE', url).then((response)=>{
    //         const body = JSON.stringify(response.body)
    //         expect(response.status).to.eq(200)
    //         expect(body).to.have.length(0)
    //     })        
    // })
        
})