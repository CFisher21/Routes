const http = require('http');
routes = require('./routes')
const port = 3000

const server = http.createServer(function(req, res) {
    console.log('the url is: ' + req.url)
    switch(req.url) {
        /* Path 1 */
         case '/':
            routes.homePage('views/index.html', res);
             break;

        /* Path 2 */ 
         case '/about':
            routes.aboutPage('views/about.html', res)
             break;

        /* Path 3 */
         case '/contact':
            routes.contactPage('views/contact.html', res)
            break;

        /* Path 4 */
         case '/shop':
            routes.shopPage('views/shop.html', res)
             break;

        /* Path 5 */   
         case '/checkout':
            routes.checkoutPage('views/checkout.html', res)
             break;

        /* Path 6 */
        case '/reviews':
            routes.reviewsPage('views/reviews.html', res)
             break;
      
        /* Default */     
         default:
            routes.fourofourPage('views/404.html', res)
             break;
     }
})
    

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})

