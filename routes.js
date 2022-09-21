const fs = require('fs');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};
const myEmitter = new MyEmitter();

myEmitter.addListener('route', (level, msg) => {
    const d = new Date();
    console.log(d.toLocaleString() + ' * ' + level.toUpperCase() + ' * ' + msg)
})

function homePage(path, res) {
    displayFile(path, res)
    myEmitter.emit('route', 'information', 'the home page was visited')
}

function aboutPage(path, res) {
    displayFile(path, res)
    myEmitter.emit('route', 'information', 'the about page was visited')
}

function contactPage(path, res) {
    displayFile(path, res)
    myEmitter.emit('route', 'information', 'the contact page was visited')
}

function shopPage(path, res) {
    displayFile(path, res)
    myEmitter.emit('route', 'information', 'the shop page was visited')
}

function checkoutPage(path, res) {
    displayFile(path, res)
    myEmitter.emit('route', 'information', 'the checkout page was visited')
}

function reviewsPage(path, res) {
    displayFile(path, res)
    myEmitter.emit('route', 'information', 'the review page was visited')
}

/*Did not want to use displayFile here because it would log the statuscode as 200 not 404 */
function fourofourPage(path, res)  {
    fs.readFile(path, function(error, data){
        if (error) {
            console.log(error)
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
         res.writeHead(404, {'Content-Type': 'text/html' });
         console.log('HTTP Status Code:', res.statusCode);
         console.log('Read Failed');
         res.write(data)
        }
         res.end()
         myEmitter.emit('route', 'information', 'we ran into an error')
    })
}

function displayFile(path, res) {
    fs.readFile(path, function(error, data){
        if (error) {
            console.log(error)
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
         res.writeHead(200, {'Content-Type': 'text/html' });
         console.log('HTTP Status Code:', res.statusCode);
         console.log('Read Succesful');
         res.write(data)
        }
         res.end()
    })
}

module.exports = {
    homePage, aboutPage, contactPage, shopPage, checkoutPage, reviewsPage, fourofourPage
}

