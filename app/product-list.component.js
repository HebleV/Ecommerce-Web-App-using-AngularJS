 angular.module('homeyantra')
.component('tvList', {    
     templateUrl: 'productlists.html',
     controller: function productListController($scope) {
         this.tvs = [
         {
            Id: Math.floor(Math.random()*10000 +1),
             name: 'Videocon 102 cm (40 inches) Full HD LED TV',
             description: 'Display resolution:  Full HD with 1920 X1080 Resolution.',
             price: 30000,
             img: 'images/one.jpg'
         }, {
             Id: Math.floor(Math.random()*10000 +1),
             name: 'Panasonic 127 cm (50 inches) Full HD LED TV',
             description: 'Display resolution:  Full HD with 1920 X1080 Resolution.',
             price: 24999,
             img: 'images/two.jpg'
         }, {
             Id:Math.floor(Math.random()*10000 +1),
             name: 'Onida 80 cm (32 inches) HD Ready Smart LED TV',
             description: 'Display resolution:  HD Ready with 1366 x 768 Resolution',
             price: 26999,
             img: 'images/three.jpg'
         },
         {
             Id:Math.floor(Math.random()*10000 +1),
             name: 'Vu 80cm (32 inch) HD Ready LED TV',
             description: 'Staying in at home is fun and therapeutic when you have this HD Ready LED TV as your source of entertainment. This TV’s AmpliFi Speakers Technology audio enhancements create detail-rich sound.',
             price: 12999,
             img: 'images/four.jpg'
         },
         {
             Id:Math.floor(Math.random()*10000 +1),
             name: 'Micromax 81cm (32 inch) HD Ready LED TV',
             description: 'Experience vividness and ultimate clarity without worrying about your electricity bills going up.',
             price: 22899,
             img: 'images/five.jpg'
         },
         {
             Id:Math.floor(Math.random()*10000 +1),
             name: 'Kodak 102cm (40 inch) Full HD LED TV',
             description: 'Now you can play games, watch movies directly from your USB drive or just watch on-air programs in rich detail with the Kodak 40FHDX900S LED TV',
             price: 20999,
             img: 'images/six.jpg'
         },
         {
             Id:Math.floor(Math.random()*10000 +1),
             name: 'Samsung 80cm (32 inch) HD Ready LED TV',
             description: 'Offering clear HD picture quality, and equipped with two 10W speakers, this 32-inch Samsung Series 4 TV set is designed to enhance your TV-viewing experience',
             price: 19999,
             img: 'images/seven.jpg'
         },
         ];
         this.orderProp = 'price';
     }
 });