if(!self.define){let e,a={};const s=(s,c)=>(s=new URL(s+".js",c).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let n={};const t=e=>s(e,r),d={module:{uri:r},exports:n,require:t};a[r]=Promise.all(c.map((e=>d[e]||t(e)))).then((e=>(i(...e),n)))}}define(["./workbox-946f13af"],(function(e){"use strict";importScripts("fallback-RvEK4AiOkRAb-0iaEC1GY.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/RvEK4AiOkRAb-0iaEC1GY/_buildManifest.js",revision:"e7e7ecd225db2b21eafbf8bda7423b70"},{url:"/_next/static/RvEK4AiOkRAb-0iaEC1GY/_middlewareManifest.js",revision:"60ed9523f510025b6e688aada2df4cec"},{url:"/_next/static/RvEK4AiOkRAb-0iaEC1GY/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0f1ac474-0f3c790bad473156.js",revision:"0f3c790bad473156"},{url:"/_next/static/chunks/123-5206b85b92b5079a.js",revision:"5206b85b92b5079a"},{url:"/_next/static/chunks/190-f118b40da8a172d9.js",revision:"f118b40da8a172d9"},{url:"/_next/static/chunks/252f366e-8408baa410283bb4.js",revision:"8408baa410283bb4"},{url:"/_next/static/chunks/398-703d2cf4fe8c786d.js",revision:"703d2cf4fe8c786d"},{url:"/_next/static/chunks/411-3ba7af2b9c58408e.js",revision:"3ba7af2b9c58408e"},{url:"/_next/static/chunks/483.0f39c829e4649006.js",revision:"0f39c829e4649006"},{url:"/_next/static/chunks/545f34e4-610e8c2f5bb54e5f.js",revision:"610e8c2f5bb54e5f"},{url:"/_next/static/chunks/591.6da7ee1b6eda3808.js",revision:"6da7ee1b6eda3808"},{url:"/_next/static/chunks/6728d85a.a904853d0f96ac45.js",revision:"a904853d0f96ac45"},{url:"/_next/static/chunks/733-e7d84bed7ed356fa.js",revision:"e7d84bed7ed356fa"},{url:"/_next/static/chunks/776.c264b32451343d05.js",revision:"c264b32451343d05"},{url:"/_next/static/chunks/7f0c75c1.401fc313de65ace4.js",revision:"401fc313de65ace4"},{url:"/_next/static/chunks/95b64a6e-4470c5dce1ae8019.js",revision:"4470c5dce1ae8019"},{url:"/_next/static/chunks/framework-8957c350a55da097.js",revision:"8957c350a55da097"},{url:"/_next/static/chunks/main-fe2571b533e00a9f.js",revision:"fe2571b533e00a9f"},{url:"/_next/static/chunks/pages/_app-c141cb8417aa901c.js",revision:"c141cb8417aa901c"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"2280fa386d040b66"},{url:"/_next/static/chunks/pages/_offline-35e53a8c237536c1.js",revision:"35e53a8c237536c1"},{url:"/_next/static/chunks/pages/cancel-f1392cbd7bc1dce7.js",revision:"f1392cbd7bc1dce7"},{url:"/_next/static/chunks/pages/checkout-f783ccdab5f84071.js",revision:"f783ccdab5f84071"},{url:"/_next/static/chunks/pages/index-29d9b39f90cd3c92.js",revision:"29d9b39f90cd3c92"},{url:"/_next/static/chunks/pages/product-details/%5Bid%5D-c174a55c328b8eb4.js",revision:"c174a55c328b8eb4"},{url:"/_next/static/chunks/pages/products-0dac6acf2fb511fc.js",revision:"0dac6acf2fb511fc"},{url:"/_next/static/chunks/pages/profile-7caa959257754e5a.js",revision:"7caa959257754e5a"},{url:"/_next/static/chunks/pages/profile/change-password-46761059413fa649.js",revision:"46761059413fa649"},{url:"/_next/static/chunks/pages/profile/my-orders-036658b73a1d6016.js",revision:"036658b73a1d6016"},{url:"/_next/static/chunks/pages/profile/order/%5Bid%5D-16a03967d974f4f8.js",revision:"16a03967d974f4f8"},{url:"/_next/static/chunks/pages/profile/update-profile-fb0cd70c36227a88.js",revision:"fb0cd70c36227a88"},{url:"/_next/static/chunks/pages/success-a85858950c02d881.js",revision:"a85858950c02d881"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-7f5c67ce8cd0b884.js",revision:"7f5c67ce8cd0b884"},{url:"/_next/static/css/4b8dd71ba3e71b60.css",revision:"4b8dd71ba3e71b60"},{url:"/_next/static/css/57c7b3b230bcb230.css",revision:"57c7b3b230bcb230"},{url:"/_next/static/css/5bb3938accc20385.css",revision:"5bb3938accc20385"},{url:"/_next/static/css/5e7d52f43501a287.css",revision:"5e7d52f43501a287"},{url:"/_next/static/css/636ca8be26d6b1d1.css",revision:"636ca8be26d6b1d1"},{url:"/_next/static/css/766976acf3b9d9df.css",revision:"766976acf3b9d9df"},{url:"/_next/static/css/823af335c263d14e.css",revision:"823af335c263d14e"},{url:"/_next/static/css/b723abe9ff092ebe.css",revision:"b723abe9ff092ebe"},{url:"/_next/static/css/cb40e32d18a8bcce.css",revision:"cb40e32d18a8bcce"},{url:"/_next/static/css/de9f8bef4c4d0fa1.css",revision:"de9f8bef4c4d0fa1"},{url:"/_next/static/css/f54dbc1eb35a1b1a.css",revision:"f54dbc1eb35a1b1a"},{url:"/_next/static/css/ff5ed69c1b017000.css",revision:"ff5ed69c1b017000"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/banner1.582d3541.png",revision:"9ee7aa69746779001043c9c3a9568c40"},{url:"/_next/static/media/banner2.27b9d70b.png",revision:"88e9fa05c5b21ce93117c38778932d85"},{url:"/_next/static/media/footer1.5e255b68.svg",revision:"dcc2a1a546ac593b77ed15dda15ffabb"},{url:"/_next/static/media/footer2.096e8606.svg",revision:"eaa33f0b422727cb5e35b3f1bc13a16a"},{url:"/_next/static/media/footer3.c74b3195.svg",revision:"472990ea6cb6796b1d53a2cfd49f0c01"},{url:"/_next/static/media/footer4.43770078.svg",revision:"dc0c8996f67801d593dc8426752be19d"},{url:"/_next/static/media/footer5.548af0e0.svg",revision:"b1a70e6f1206f87c0e7ef6473ec07a70"},{url:"/_next/static/media/footer6.1c190d13.svg",revision:"9685bf2a23cbd42f2f2fa68cd8b63d09"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/_offline",revision:"RvEK4AiOkRAb-0iaEC1GY"},{url:"/apple-touch-icon.png",revision:"6acaef21a9aa90846c0369686caaa7aa"},{url:"/favicon.ico",revision:"672ffefe56e2162f099accb463422fe8"},{url:"/icons/icon-192x192.png",revision:"b980eb887a430bfaf063c2ecdc9ac985"},{url:"/icons/icon-256x256.png",revision:"326a94ab42b26c051ef51a393eee2695"},{url:"/icons/icon-384x384.png",revision:"af8a2e78576df0c26ad9298ebf7d334d"},{url:"/icons/icon-512x512.png",revision:"fc6d157632c6eece51e4b359c0706592"},{url:"/icons/maskable.png",revision:"724fe3df16e1557689e223c65f323e99"},{url:"/images/banner-menu_z2nhti.png",revision:"d537f589a89c8428c2cf608cc91ca855"},{url:"/images/banner/banner1.png",revision:"9ee7aa69746779001043c9c3a9568c40"},{url:"/images/banner/banner1.webp",revision:"cb7fc19425d914a5fdb4d88ea3ed2c79"},{url:"/images/banner/banner2.png",revision:"88e9fa05c5b21ce93117c38778932d85"},{url:"/images/banner/banner2.webp",revision:"80dcc4c988fdf0869571fb150303daa2"},{url:"/images/banner/footerBanner.png",revision:"99f91bfbbd61e882a5f86a28b4437f92"},{url:"/images/banner/header-bg.png",revision:"5c796874e28efea6507658bc97997e09"},{url:"/images/categories/category-1.svg",revision:"f4b6aa3bbb4b6fef475449c726cc4ba8"},{url:"/images/categories/category-10.svg",revision:"a37b94baebaad29ea615848f064438b1"},{url:"/images/categories/category-2.svg",revision:"6d91e730f46c79c08fc81bfd200185eb"},{url:"/images/categories/category-3.svg",revision:"3521b5afe8d85674f5c550547a5ef5d5"},{url:"/images/categories/category-4.svg",revision:"d53e04dc95232077b6e1ab4ee655454d"},{url:"/images/categories/category-5.svg",revision:"154a2a0c8efb7c2835f0cd7b7395132c"},{url:"/images/categories/category-6.svg",revision:"0d94e3c1eaaad279c347130fbf552a49"},{url:"/images/categories/category-7.svg",revision:"9b1ed31a2219a5a0222eab8177f59542"},{url:"/images/categories/category-8.svg",revision:"5a9242dc0e05b8c18856b9b541bf0c21"},{url:"/images/categories/category-9.svg",revision:"2095d5c92d159d43ca678cf573bf7766"},{url:"/images/categories/icon-1.svg",revision:"dcc2a1a546ac593b77ed15dda15ffabb"},{url:"/images/categories/icon-4.svg",revision:"dc0c8996f67801d593dc8426752be19d"},{url:"/images/dealsOfDay/dealofDay1.png",revision:"01abbd6509297144f05fe41fdf69f91e"},{url:"/images/dealsOfDay/dealofDay2.png",revision:"0ed6a574181bf7c1eb13e549fbbba0cd"},{url:"/images/dealsOfDay/dealofDay3.png",revision:"09f583e89ed9b80c2fa9eae99317c997"},{url:"/images/dealsOfDay/dealofDay4.png",revision:"6b8760d2d392f0b9d82a513327a61afe"},{url:"/images/default/user.jpeg",revision:"6e1f9690755b53dc02b2839542ecaaae"},{url:"/images/drawer/babycare.webp",revision:"e5360632a2db4c6b3fa78bb42009c021"},{url:"/images/drawer/beauty.webp",revision:"ce7999731d8fbef08d3ed5342065d53e"},{url:"/images/drawer/biscuits.webp",revision:"b721c714055b339e2500ffcca3293366"},{url:"/images/drawer/breakfast.webp",revision:"60e382402fd50f8a8286e0a06031c55d"},{url:"/images/drawer/cooking.webp",revision:"68c1697eaf82bdb23732574a7d857533"},{url:"/images/drawer/drinks.webp",revision:"354c04f3ee1e91cb4f549c7ec3a1973a"},{url:"/images/drawer/honey.webp",revision:"8e5d2a8161094c625b8406224ce6abb5"},{url:"/images/drawer/jam.webp",revision:"f891a90d15a9324cb8f47b9e644a2583"},{url:"/images/drawer/milk.webp",revision:"4d0cf4e769889b8c4a6c7150e8763ac5"},{url:"/images/drawer/organic.webp",revision:"56f8d2924a0d02f542aa71cccf21bbf8"},{url:"/images/drawer/petcare.webp",revision:"061860add429219a9638d966a6924deb"},{url:"/images/drawer/sauce.webp",revision:"30d0616ae1c2e70975154ce4fa68996f"},{url:"/images/drawer/seafood.webp",revision:"0a4de3073a78f27feea47bea8d6beaca"},{url:"/images/drawer/snack.webp",revision:"08891d15afdc4c944bdc835c8e6cb8e7"},{url:"/images/drawer/sports.webp",revision:"f8f581198dfef4afa8ae6fa71e1a0fc2"},{url:"/images/drawer/tools.webp",revision:"2c51a502a45be9e63f105b0c13b68978"},{url:"/images/drawer/vagetables.webp",revision:"4de47a0e4f90d808e07a2a8aac6a666c"},{url:"/images/footer/footer1.svg",revision:"dcc2a1a546ac593b77ed15dda15ffabb"},{url:"/images/footer/footer2.svg",revision:"eaa33f0b422727cb5e35b3f1bc13a16a"},{url:"/images/footer/footer3.svg",revision:"472990ea6cb6796b1d53a2cfd49f0c01"},{url:"/images/footer/footer4.svg",revision:"dc0c8996f67801d593dc8426752be19d"},{url:"/images/footer/footer5.svg",revision:"b1a70e6f1206f87c0e7ef6473ec07a70"},{url:"/images/footer/footer6.svg",revision:"9685bf2a23cbd42f2f2fa68cd8b63d09"},{url:"/images/icons/appStore.jpg",revision:"cca5cf3070a03c0a6d0c3604e7bc62fc"},{url:"/images/icons/call.svg",revision:"1ac3a8afd9bd79bb870a5d21e167b20b"},{url:"/images/icons/email.svg",revision:"e928aacc84ab4291306e73e5b41f62e1"},{url:"/images/icons/location.svg",revision:"2304fa9fea9d00bd78cb32bf0d08d7bd"},{url:"/images/icons/payment-methods.png",revision:"882624d8b99b33cb20c4d3348479e537"},{url:"/images/icons/playStore.jpg",revision:"a360ed2828065887d004072592e38f0e"},{url:"/images/illustrates/error.jpg",revision:"3259a371149f39cdb73b1bc58dc7d2c0"},{url:"/images/illustrates/no-result.svg",revision:"508b2439b4b83ce579e826c9c625b675"},{url:"/images/illustrates/success.jpg",revision:"b43de5b6dc96f86d7c7e01500f47456c"},{url:"/images/loading-min.jpg",revision:"11eba5e720642d0941a202daffc64fa9"},{url:"/images/loading.gif",revision:"d5e762f6704b8341a4c2caccadc4b2cb"},{url:"/images/logos/MBeBAZAR.png",revision:"c9ec50a2b5c3515a6dd2895284c7d99f"},{url:"/images/social/facebook.svg",revision:"101cb55521f687bdc80923ba670ccef5"},{url:"/images/social/instagram.svg",revision:"d9f9f7d20210c2c531d092353322c9ba"},{url:"/images/social/pinterest.svg",revision:"62d12027bf463a66c5e91d87316a7732"},{url:"/images/social/twitter.svg",revision:"d3f0e23ef8e389d7827673f21361cb08"},{url:"/images/social/youtube.svg",revision:"43ad899ac0f9152882c3adf8034d9cca"},{url:"/manifest.json",revision:"f511c42865b1b46fac5c69e5a4522117"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
