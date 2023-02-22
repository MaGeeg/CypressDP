
const status200Site = '#200siteAnchor'
const status305Site = '#305siteAnchor'
const status404Site = '#404siteAnchor'
const status500Site = '#500siteAnchor'


class StatusCodesPage {
    checkStatusCode200() {
        cy.get(status200Site).invoke('attr', 'href').then((myHref) =>{ 
            cy.request(myHref).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.eq('200 OK')
            });
        });
    }

    checkStatusCode305() {
        cy.get(status305Site).invoke('attr', 'href').then((myHref) =>{ 
            cy.request({
                url: myHref,
                followRedirect: false, 
            }).then((response) => {
                expect(response.status).to.eq(305);
                expect(response.body).to.eq('305 Use Proxy')
            });
        });
    }
    
    checkStatusCode404() {
        cy.get(status404Site).invoke('attr', 'href').then((myHref) =>{ 
            cy.request({
                url: myHref,                
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(404);
                expect(response.body).to.eq('404 Not Found')
            });
        });
    }

    checkStatusCode500() {
        cy.get(status500Site).invoke('attr', 'href').then((myHref) =>{ 
            cy.request({
                url: myHref,                
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(500);
                expect(response.body).to.eq('500 Internal Server Error')
            });
        });
    }   
}
export default StatusCodesPage;