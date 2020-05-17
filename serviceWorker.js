console.log('Hello from the service worker');

const cacheName = 'v1';

const cacheAssets =[
    '/bchart.png',
    'blog-details.html',
    'blog-grid.html',
    'blog-list.html',
    'cart.html',
    'cart1.jpg',
    'catagory.html',
    'change-password.html',
    'checkout-bank.html',
    'checkout-cash.html',
    'checkout-credit-card.html',
    'checkout-payment.html',
    'checkout-paypal.html',
    'checkout.html',
    'css/animate.css',
    'css/bootstrap.min.css',
    'css/default/lineicons.min.css',
    'css/font-awesome.min.css',
    'css/jquery.animatedheadline.css',
    'css/owl.carousel.min.css',
    'edit-profile.html',
    'flash-sale.html',
    // 'fonts/LineIcons.eot',
    // 'fonts/LineIcons.svg',
    // 'fonts/LineIcons.ttf',
    // 'fonts/LineIcons.woff',
    // 'fonts/fontawesome-webfont.eot',
    // 'fonts/fontawesome-webfont.eot_',
    // 'fonts/fontawesome-webfont.svg',
    // 'fonts/fontawesome-webfont.ttf',
    // 'fonts/fontawesome-webfont.woff',
    // 'fonts/fontawesome-webfont.woff2',
    'forget-password-success.html',
    'forget-password.html',
    'img/bg-img/1.jpg',
    'img/bg-img/10.jpg',
    'img/bg-img/11.jpg',
    'img/bg-img/12.jpg',
    'img/bg-img/12.png',
    'img/bg-img/13.jpg',
    'img/bg-img/14.jpg',
    'img/bg-img/15.jpg',
    'img/bg-img/16.jpg',
    'img/bg-img/17.jpg',
    'img/bg-img/18.jpg',
    'img/bg-img/19.jpg',
    'img/bg-img/2.jpg',
    'img/bg-img/20.jpg',
    'img/bg-img/21.jpg',
    'img/bg-img/22.jpg',
    'img/bg-img/23.jpg',
    'img/bg-img/24.jpg',
    'img/bg-img/3.jpg',
    'img/bg-img/4.jpg',
    'img/bg-img/5.jpg',
    'img/bg-img/6.jpg',
    'img/bg-img/7.jpg',
    'img/bg-img/8.jpg',
    'img/bg-img/9.jpg',
    'img/core-img/curve.png',
    'img/core-img/curve2.png',
    'img/core-img/dot-blue.png',
    'img/core-img/dot.png',
    'img/core-img/favicon.ico',
    'img/core-img/logo-small.png',
    'img/core-img/logo-white.png',
    'img/product/1.jpg',
    'img/product/10.jpg',
    'img/product/11.jpg',
    'img/product/12.jpg',
    'img/product/13.jpg',
    'img/product/2.jpg', 
    'img/product/3.jpg',
    'img/product/4.jpg',
    'img/product/5.jpg',
    'img/product/6.jpg',
    'img/product/7.jpg',
    'img/product/8.jpg',
    'img/product/9.jpg',
    'intro.html',
    'js/bootstrap.min.js',
    'js/default/active.js',
    'js/default/dark-mode-switch.js',
    'js/default/jquery.passwordstrength.js',
    'js/jarallax-video.min.js',
    'js/jarallax.min.js',
    'js/jquery.animatedheadline.min.js',
    'js/jquery.counterup.min.js',
    'js/jquery.easing.min.js',
    'js/jquery.min.js',
    'js/owl.carousel.min.js',
    'js/popper.min.js',
    'js/waypoints.min.js',
    'js/wow.min.js',
    'language.html',
    'login.html',
    'logo.png',
    'logo0.jpg',
    'message.html',
    'my-order.html',
    'notification-details.html',
    'notifications.html',
    'pages.html',
    'payment-success.html',
    'privacy-policy.html',
    'profile.html',
    'register.html',
    'settings.html',
    'shop-grid.html',
    'shop-list.html',
    'shopping.png',
    'single-product.html',
    'style.css',
    'sub-catagory.html',
    'support.html',
    'wishlist-grid.html',
    'wishlist-list.html',
    'android-chrome-192x192.png',
    'android-chrome-256x256.png',
    'favicon.ico',
    'favicon/android-chrome-192x192.png',
    'favicon/android-chrome-256x256.png',
    'favicon/apple-touch-icon.png',
    'favicon/browserconfig.xml',
    'favicon/favicon-16x16.png',
    'favicon/favicon-32x32.png',
    'favicon/favicon.ico',
    'favicon/mstile-150x150.png',
    'favicon/safari-pinned-tab.svg',
    'favicon/site.webmanifest'
]

self.addEventListener('install',(event) =>{
    console.log('service worker installed')
    event.waitUntil(
        caches
        .open('client')
        .then( cache =>{
            // return cache.add( 
            //     console.log('catching files');
            //     cache.
            // )
            console.log('catching the assets');
            cache.addAll(cacheAssets);
        })
        .then( () => self.skipWaiting())
    )
})

// Call Activate Event
self.addEventListener('activate',()=>{
    console.log('Service worker activated');
})

this.addEventListener('fetch',(event)=>{
    // console.log(event.reaqwerty40uest)
    event.respondWith(
        fetch(event.request)
        .catch(error => caches.match(event.request))
    )
})