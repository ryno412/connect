webpackJsonp([0],{0:function(e,exports,n){n(1),e.exports=n(298)},298:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var a=n(299),o=t(a),i=n(301),l=t(i);n(371),n(381);var p=n(383),r=t(p),s=n(422),c=t(s),d=n(457),u=t(d),f=n(464),m=t(f);o.default.module("app",[l.default,r.default,c.default,m.default]).config(["$locationProvider",function(e){"ngInject";e.html5Mode(!0).hashPrefix("!")}]).component("app",u.default)},383:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(299),o=t(a),i=n(384),l=t(i),p=n(414),r=t(p),s=n(416),c=t(s),d=o.default.module("app.common",[l.default,r.default,c.default]).name;exports.default=d},384:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(299),o=t(a),i=n(301),l=t(i),p=n(385),r=t(p),s=o.default.module("navbar",[l.default]).component("navbar",r.default).name;exports.default=s},385:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(386),o=t(a),i=n(387),l=t(i);n(408);var p={restrict:"E",bindings:{},template:o.default,controller:l.default};exports.default=p},386:function(e,exports){e.exports='<nav class="navbar">\n  <div class="logo" ui-sref="home">\n    <h1 class="logo-name"><a ui-sref="home">Connect</a></h1>\n  </div>\n  <div class="my-apps-drop-down">\n    <h2 class="my-apps-drop-down-heading">My Apps <i class="fa fa-chevron-down my-apps-arrow" aria-hidden="true"></i></h2>\n  </div>\n\n  <div ng-show="$ctrl.showAppDetails" class="app-details-nav">\n    <span class="nav-app-icon-default"></span>\n    <h2 class="nav-app-name">{{$ctrl.currentAppName}} <i class="fa fa-chevron-down nav-current-app-arrow" aria-hidden="true"></i></h2>\n  </div>\n\n  <div class="user-info">\n    <div class="user-name-and-co-container">\n      <a href="/coverage">Ryan Ford</a>\n      <h2 class="user-info-co-name">A Company LLC</h2>\n    </div>\n    <i class="fa fa-chevron-down user-info-arrow" aria-hidden="true"></i>\n    <span class="lg-help-icon"></span>\n  </div>\n\n</nav>\n<div class="control-bar">\n  <span class="bar-icons"></span>\n  <ul class="control-bar-sub-nav">\n    <li><a class="active" href="/">App Store</a></li>\n    <li><a href="/">Features</a></li>\n    <li><a href="/">TestFlight</a></li>\n    <li><a href="/">Activity</a></li>\n  </ul>\n</div>\n'},387:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(388),o=t(a),i=n(389),l=t(i),p=function(){function e(n){(0,o.default)(this,e),this.name="navbar",n.$watch("currentAppDetails",this.updateNavWithAppDetails.bind(this))}return(0,l.default)(e,[{key:"updateNavWithAppDetails",value:function(e){e?(this.showAppDetails=!0,this.currentAppName=e.name,this.currentAppIcon=e.icon):(this.showAppDetails=!1,this.currentAppName=null,this.currentAppIcon=null)}}]),e}();p.$inject=["$rootScope"],exports.default=p},408:function(e,exports,n){var t=n(409);"string"==typeof t&&(t=[[e.id,t,""]]);n(380)(t,{});t.locals&&(e.exports=t.locals)},409:function(e,exports,n){exports=e.exports=n(373)(),exports.push([e.id,"@import url(http://fonts.googleapis.com/css?family=Roboto);",""]),exports.push([e.id,".navbar{height:50px;padding:15px 25px;border-bottom:1px solid #e5e5e5;display:flex;flex-flow:row nowrap}.navbar .logo{display:inline-block;background:url("+n(410)+") no-repeat;background-size:134px 30px;text-indent:-9999px;width:140px;float:left;margin-right:5px}.navbar .logo .logo-name{margin:0;font-size:16px}.navbar .app-details-nav{display:block;margin:0 auto;width:300px;color:#4c4c4c}.navbar .app-details-nav .nav-app-name{font-size:18px;font-weight:300}.navbar .app-details-nav .nav-app-icon-default{display:inline-block;width:27px;height:29px;float:left;background:url("+n(411)+") no-repeat;margin:-5px 10px 0}.navbar .app-details-nav .nav-current-app-arrow{vertical-align:top;margin-top:5px;font-size:10px}.navbar .my-apps-drop-down-heading{margin-top:0;color:#08f;font-size:21px;font-weight:200;line-height:16px}.navbar .my-apps-drop-down-heading .my-apps-arrow{font-size:10px;color:#08f;vertical-align:top;margin-top:3px}.navbar .user-info{margin-left:auto}.navbar .user-info .user-name-and-co-container{font-size:14px;text-align:right;float:left;margin:-7px 7px 0 0}.navbar .user-info .user-info-co-name{font-size:14px;font-weight:300}.navbar .user-info .user-info-arrow{color:#08f;font-size:10px;vertical-align:top;position:relative;top:-3px}.navbar .user-info .lg-help-icon{display:inline-block;background:url("+n(412)+") no-repeat;width:36px;height:25px;background-size:26px;background-position-x:10px;border-left:1px solid #e5e5e5;margin-left:10px}.control-bar{background:#f5f5f5;height:45px;border-bottom:1px solid hsla(0,0%,90%,.5);padding:7px 20px 5px}.control-bar .bar-icons{background:url("+n(413)+") no-repeat;display:inline-block;width:100px;height:30px}.control-bar .control-bar-sub-nav{display:none;padding-top:5px;margin-left:5px}.control-bar .control-bar-sub-nav li{list-style:none;margin-right:30px}.control-bar .control-bar-sub-nav li a{padding-bottom:13px;color:#4c4c4c}.control-bar .control-bar-sub-nav li a.active{border-bottom:1px solid #4c4c4c;font-weight:500}.app-detail-page .control-bar .bar-icons{display:none}.app-detail-page .control-bar .control-bar-sub-nav{display:flex}.home-page .navbar{border-bottom:none}.home-page .navbar .my-apps-drop-down,.home-page .navbar .user-info{display:none}.home-page .navbar .logo{background-position:0 -15px}.home-page .control-bar{display:none}@media (max-width:500px){.navbar{flex-direction:column}}",""])},410:function(e,exports,n){e.exports=n.p+"aed67819dcca2df395742f618d013681.png"},411:function(e,exports,n){e.exports=n.p+"4d55c0d33bf955f3a219f46a6828db6f.png"},412:function(e,exports,n){e.exports=n.p+"c9574892c9c3dbc03cc4b67cc60095a4.png"},413:function(e,exports,n){e.exports=n.p+"59daf8a4e0fb559219a3c8b171e377b3.png"},414:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(299),o=t(a),i=n(415),l=t(i),p=o.default.module("user",[]).factory("User",l.default).name;exports.default=p},415:function(e,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){var e={},n=function(){return e},t=function(){return e.isSignedIn};return{getUser:n,isSignedIn:t}};exports.default=n},416:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(299),o=t(a),i=n(301),l=t(i),p=n(417),r=t(p),s=o.default.module("appicon",[l.default]).component("appicon",r.default).name;exports.default=s},417:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(418),o=t(a),i=n(419),l=t(i);n(420);var p={restrict:"E",bindings:{alt:"@alt",link:"@link",src:"@src",title:"@title"},template:o.default,controller:l.default};exports.default=p},418:function(e,exports){e.exports='<a ui-sref="{{$ctrl.link}}" class="app-icon-link">\n  <img class="icon-img" alt="{{$ctrl.alt}}" ng-src="{{$ctrl.src}}" />\n  <h2 class="title">{{$ctrl.title}}</h2>\n</a>\n\n'},419:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(388),o=t(a),i=function e(){(0,o.default)(this,e)};exports.default=i},420:function(e,exports,n){var t=n(421);"string"==typeof t&&(t=[[e.id,t,""]]);n(380)(t,{});t.locals&&(e.exports=t.locals)},421:function(e,exports,n){exports=e.exports=n(373)(),exports.push([e.id,".app-icon-link{text-decoration:none;display:inline-block}.app-icon-link .icon-img{width:145px;height:145px;margin-bottom:12px}.app-icon-link .title{color:#fff;font-size:20px;text-align:center;width:140px;font-weight:100;letter-spacing:1px}",""])},422:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(299),o=t(a),i=n(423),l=t(i),p=n(436),r=t(p),s=n(442),c=t(s),d=n(450),u=t(d),f=o.default.module("app.components",[l.default,r.default,c.default,u.default]).name;exports.default=f},423:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(299),o=t(a),i=n(301),l=t(i),p=n(424),r=t(p),s=o.default.module("home",[l.default]).config(["$stateProvider","$urlRouterProvider",function(e,n){"ngInject";n.otherwise("/"),e.state("home",{url:"/",component:"home"})}]).component("home",r.default).name;exports.default=s},424:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(425),o=t(a),i=n(426),l=t(i);n(434);var p={restrict:"E",template:o.default,controller:l.default};exports.default=p},425:function(e,exports){e.exports='\n<div class="home">\n  <div class="app-icon-container">\n    <ul class="icon-list">\n      <li class="icon-list-item" ng-repeat="icon in $ctrl.icons">\n        <appIcon\n          alt="{{icon.name}}"\n          link="{{icon.link}}"\n          src="{{icon.iconSrc}}"\n          title="{{icon.name}}">\n        </appIcon>\n      </li>\n    </ul>\n\n  </div>\n</div>\n'},426:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(388),o=t(a),i=n(427),l=t(i),p=n(428),r=t(p),s=n(429),c=t(s),d=n(430),u=t(d),f=n(431),m=t(f),h=n(432),v=t(h),g=n(433),b=t(g),x=function e(){(0,o.default)(this,e),this.icons=[{name:"My Apps",iconSrc:l.default,link:"myapps"},{name:"Anaylitics",iconSrc:r.default,link:"myapps"},{name:"Sales And Trends",iconSrc:c.default,link:"myapps"},{name:"Payments and Financial Reports",iconSrc:u.default,link:"myapps"},{name:"Users and Roles",iconSrc:m.default,link:"myapps"},{name:"Aggrements, Tax, and Banking",iconSrc:v.default,link:"myapps"},{name:"Resources and Help",iconSrc:b.default,link:"myapps"}],this.name="home"};exports.default=x},427:function(e,exports,n){e.exports=n.p+"12dfe6274443336261f481390f2c41f9.png"},428:function(e,exports,n){e.exports=n.p+"700fa71331f3e098dafa2004d12f2c58.png"},429:function(e,exports,n){e.exports=n.p+"6b4f8d6800d5e38721d7758a6f7054eb.png"},430:function(e,exports,n){e.exports=n.p+"a3c4ea2b5da03a93a9152fdb61c5b5a8.png"},431:function(e,exports,n){e.exports=n.p+"eacf74038fd0dc702aed33183e927e86.png"},432:function(e,exports,n){e.exports=n.p+"7d7e3d3451aefe9a95c6f46b7aa30317.png"},433:function(e,exports,n){e.exports=n.p+"6dcd12ab811feb3ec1df722eca5600e1.png"},434:function(e,exports,n){var t=n(435);"string"==typeof t&&(t=[[e.id,t,""]]);n(380)(t,{});t.locals&&(e.exports=t.locals)},435:function(e,exports,n){exports=e.exports=n(373)(),exports.push([e.id,".home .app-icon-container{width:80%;margin:120px auto 0}.home .icon-list{display:flex;flex-flow:row wrap;list-style:none;justify-content:flex-start}.home .icon-list .icon-list-item{width:150px;margin:0 30px 15px}",""])},436:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(299),o=t(a),i=n(301),l=t(i),p=n(437),r=t(p),s=o.default.module("about",[l.default]).config(["$stateProvider",function(e){"ngInject";e.state("about",{url:"/about",component:"about"})}]).component("about",r.default).name;exports.default=s},437:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(438),o=t(a),i=n(439),l=t(i);n(440);var p={restrict:"E",bindings:{},template:o.default,controller:l.default};exports.default=p},438:function(e,exports){e.exports="<navbar></navbar>\n<h1>{{ $ctrl.name }}</h1>\n<section>\n  About us.\n</section>\n"},439:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(388),o=t(a),i=function e(){(0,o.default)(this,e),this.name="about"};exports.default=i},440:function(e,exports,n){var t=n(441);"string"==typeof t&&(t=[[e.id,t,""]]);n(380)(t,{});t.locals&&(e.exports=t.locals)},441:function(e,exports,n){exports=e.exports=n(373)(),exports.push([e.id,".about{color:red}",""])},442:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(299),o=t(a),i=n(301),l=t(i),p=n(443),r=t(p),s=n(449),c=t(s),d=o.default.module("myapps",[l.default,c.default.name]).component("myapps",r.default).config(["$stateProvider",function(e){"ngInject";e.state("myapps",{url:"/my-apps",component:"myapps"})}]).name;exports.default=d},443:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(444),o=t(a),i=n(445),l=t(i);n(446);var p={restrict:"E",bindings:{},template:o.default,controller:l.default};exports.default=p},444:function(e,exports){e.exports='<div class="my-apps-container">\n  <ul class="my-apps-list">\n    <li ng-repeat="app in $ctrl.apps" class="app-list-item">\n      <a class="app-details-link" ng-href="/app-detail/{{app.id}}">\n        <span class="icon {{app.icon}}"></span>\n        <h2 class="app-name">{{app.name}}</h2>\n      </a>\n      <a ng-href="app-version/{{app.id}}" class="app-version-link">\n        <span class="circle"></span>\n        <span class="app-type">{{app.type}}</span>\n        <span class="app-version">{{app.version}}</span>\n        <span class="app-submission-state">{{app.submissionState}}</span>\n      </a>\n    </li>\n  </ul>\n</div>\n'},445:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(388),o=t(a),i=function e(n){var t=this;(0,o.default)(this,e),this.name="myapps",this.apps=[],n.fetchMyApps().then(function(e){if(!(e&&e.data&&Array.isArray(e.data)))throw new Error("No Apps in response");t.apps=e.data}).catch(function(e){console.log("E",e)})};i.$inject=["api"],exports.default=i},446:function(e,exports,n){var t=n(447);"string"==typeof t&&(t=[[e.id,t,""]]);n(380)(t,{});t.locals&&(e.exports=t.locals)},447:function(e,exports,n){exports=e.exports=n(373)(),exports.push([e.id,"@import url(http://fonts.googleapis.com/css?family=Roboto);",""]),exports.push([e.id,".my-apps-container{padding:0 30px}.my-apps-container .icon.default{width:164px;height:161px;display:inline-block;margin:0 auto;background:url("+n(448)+") no-repeat}.my-apps-container .app-list-item{float:left;width:25%;margin-right:10px;border-right:1px solid hsla(0,0%,90%,.5);text-align:center;list-style:none;padding:40px 20px}.my-apps-container .app-list-item:last-child{border-right:none}.my-apps-container .app-details-link{text-decoration:none}.my-apps-container .app-name{color:#4c4c4c;font-size:21px;font-weight:100;margin-top:10px;text-decoration:none}.my-apps-container .circle{width:10px;height:10px;border-radius:50%;background:#ff0;display:inline-block;margin-right:5px}.my-apps-container .app-version-link{font-size:12px;text-decoration:none;color:#4c4c4c}.my-apps-container .app-type{font-weight:700}",""])},448:function(e,exports,n){e.exports=n.p+"015e8018e91fcfb72887fc56b1a0dd91.png"},449:function(e,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=angular.module("api",[]);n.factory("api",["$http",function(e){var n={fetchMyApps:function(){return e.get("/api/api-my-app")},fetchAppDetail:function(n){return e.get("/api/app-details/"+n)}};return n}]),exports.default=n},450:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(299),o=t(a),i=n(301),l=t(i),p=n(451),r=t(p),s=o.default.module("appdetail",[l.default]).component("appdetail",r.default).config(["$stateProvider",function(e){"ngInject";e.state("app-detail",{url:"/app-detail/{id}",component:"appdetail"})}]).name;exports.default=s},451:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(452),o=t(a),i=n(453),l=t(i);n(454);var p={restrict:"E",bindings:{},template:o.default,controller:l.default};exports.default=p},452:function(e,exports){e.exports='<div class="app-details">\n  <div class="side-nav">\n    <h2 class="side-nav-heading">App Store Information</h2>\n    <ul class="app-store-nav">\n      <li class="app-store-nav-item"><a href="#" class="active">App Information</a></li>\n      <li class="app-store-nav-item"><a href="#">Pricing and Availability</a></li>\n    </ul>\n\n    <h3 class="app-store-type">{{$ctrl.currentAppDetails.type}}</h3>\n    <div class="app-submission-state">{{$ctrl.currentAppDetails.submissionState}}</div>\n    <div class="platform-link">\n      <a href="#">Version or Platform</a>\n    </div>\n  </div>\n\n  <div class="main-content">\n    <div class="heading-container section">\n      <h2 class="main-heading">App Information</h2>\n      <p class="app-info-content">This information is used for all platforms of this app. Any changes will be released with your next app version.</p>\n    </div>\n    <div class="locale-container section">\n      <h3 class="section-heading">Localizable Information</h3>\n      <div class="form-section">\n        <div class="wide-form-control">\n          <inputcontrol label="Name" controlname="name-control" myvalue="$ctrl.foo"/>\n        </div>\n        <div class="wide-form-control">\n          <inputcontrol label="Privacy Policy" controlname="policy-control" placeholder="http://example.com (optional)" myvalue="$ctrl.bar"/>\n        </div>\n      </div>\n    </div>\n\n    <div class="general-info-container section">\n      <h3 class="section-heading">General Information</h3>\n      <div class="form-section">\n        <div class="wide-form-control">\n          <label>Bundle Id</label>\n          <select class="custom-select">\n            <option>Bundle ID</option>\n            <option selected="selected">com.coolname.hero</option>\n            <option>something else</option>\n          </select>\n          <div class="bundle-info-container">\n            <dl class="inline-def">\n              <dt>Your bundle ID</dt>\n              <dd>com.coolname.hero</dd>\n            </dl>\n            <dl>\n              <dt>Skew</dt>\n              <dd>com.coolname.hero</dd>\n            </dl>\n          </div>\n        </div>\n        <div class="wide-form-control">\n          <dl class="lang-section">\n            <dt>Primary Language</dt>\n            <dd>English</dd>\n          </dl>\n          <label>Category</label>\n          <select class="custom-select cat-select">\n            <option>Category</option>\n            <option>Books</option>\n            <option>Business</option>\n            <option>Entertainment</option>\n          </select>\n          <select class="custom-select cat-select">\n            <option>Secondary (optional)</option>\n            <option>Books</option>\n            <option>Business</option>\n            <option>Entertainment</option>\n          </select>\n          <dl>\n            <dt>License Agreement</dt>\n            <dd><a href="#">Apple Standard License Agreement</a></dd>\n          </dl>\n          <dl>\n            <dt>Rating</dt>\n            <dd>No Rating</dd>\n          </dl>\n        </div>\n      </div>\n    </div>\n    <div class="additional-info-container section">\n      <h3 class="section-heading">Additional Information</h3>\n      <a href="#">View On App Store</a>\n    </div>\n  </div>\n</div>\n'},453:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(388),o=t(a),i=function e(n,t,a,i){var l=this;(0,o.default)(this,e),this.name="appdetail",this.foo="heyWhatsup",this.kook="kook",i.foo="yoFromController",this.bar="yolo",i.sayFoo=function(){alert(l.foo),alert(l.kook)},t.fetchAppDetail(n.id).then(function(e){if(!e||!e.data)throw new Error("No app details in response");l.currentAppDetails=e.data,a.currentAppDetails=l.currentAppDetails}).catch(function(e){console.log(e)}),i.$on("$destroy",function(){a.currentAppDetails=null})};i.$inject=["$stateParams","api","$rootScope","$scope"],exports.default=i},454:function(e,exports,n){var t=n(455);"string"==typeof t&&(t=[[e.id,t,""]]);n(380)(t,{});t.locals&&(e.exports=t.locals)},455:function(e,exports,n){exports=e.exports=n(373)(),exports.push([e.id,"@import url(http://fonts.googleapis.com/css?family=Roboto);",""]),exports.push([e.id,".app-details{display:flex;box-sizing:border-box}.app-details .section{padding:10px 20px 45px 10px;margin-bottom:20px;border-bottom:1px solid #e5e5e5}.app-details .section .section-heading{font-size:20px;font-weight:300;margin-bottom:20px;margin-top:0}.app-details .section dt{font-weight:500;font-size:14px;margin:15px 0 5px}.app-details .section dd{font-weight:200}.app-details .side-nav{flex:0 0 250px;padding:20px 0;border-right:1px solid #e5e5e5;overflow:hidden}.app-details .side-nav .app-store-type,.app-details .side-nav .side-nav-heading{font-size:11px;text-transform:uppercase;color:#bababa;margin-left:35px}.app-details .side-nav .app-store-nav{list-style:none}.app-details .side-nav .app-store-nav .app-store-nav-item a{padding:12px 40px;display:inline-block;font-size:14px;width:100%;color:#4c4c4c}.app-details .side-nav .app-store-nav .app-store-nav-item a.active{background:#00bfff;color:#fff}.app-details .side-nav .app-submission-state,.app-details .side-nav .platform-link{padding-left:40px}.app-details .side-nav .platform-link{margin-top:20px}.app-details .side-nav .app-store-type{margin-bottom:20px}.app-details .side-nav .app-submission-state{padding-bottom:20px;border-bottom:1px solid #e5e5e5;font-size:14px;text-overflow:ellipsis}.app-details .main-content{padding:25px;padding-right:0;flex:1 1}.app-details .main-content .app-info-content{color:#929292}.app-details .main-content .form-section{display:flex}.app-details .main-content .form-section .wide-form-control{width:50%;padding-right:25px;box-sizing:border-box}.app-details .main-content .form-section .wide-form-control+.wide-form-control{padding-left:25px;padding-right:0}.app-details .main-content .form-section .wide-form-control label{display:block;margin-bottom:10px;font-size:14px;font-weight:500}.app-details .main-content .lang-section dt{margin-top:0}.app-details .main-content .lang-section dd{margin-bottom:10px}.app-details .main-content .cat-select{margin-bottom:5px}.custom-select{width:100%;height:30px;background:#fff url("+n(456)+") 100% no-repeat!important;-webkit-appearance:none;-khtml-appearance:none;-moz-appearance:none;background-size:24px 16px!important;border:1px solid #d9d9d9;border-radius:3px;padding:2px 25px 2px 8px;margin-top:2px}",""])},456:function(e,exports,n){e.exports=n.p+"2e3c73b7fc9fa84c97b4802d41f963e9.png"},457:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(458),o=t(a),i=n(459),l=t(i);n(460);var p={template:o.default,controller:l.default,restrict:"E"};exports.default=p},458:function(e,exports){e.exports='<!-- Place all UI elements intended to be present across all routes in this file -->\n<navbar></navbar>\n<div class="app">\n  <div ui-view></div>\n</div>\n'},459:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(388),o=t(a),i=function e(n){(0,o.default)(this,e),this.name="app",n.onStart({},function(e){var n=e.$from().name+"-page",t=e.$to().name+"-page";angular.element(document.body).removeClass(n).addClass(t)})};i.$inject=["$transitions"],exports.default=i},460:function(e,exports,n){var t=n(461);"string"==typeof t&&(t=[[e.id,t,""]]);n(380)(t,{});t.locals&&(e.exports=t.locals)},461:function(e,exports,n){exports=e.exports=n(373)(),exports.push([e.id,"@import url(http://fonts.googleapis.com/css?family=Roboto);",""]),exports.push([e.id,"*{box-sizing:border-box}body,dd,dl,dt,h1,h2,h4,html,ol,p,ul{margin:0;padding:0}body,html{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;height:100%;color:#4c4c4c;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}h1{font-size:28px;margin:0 0 10px}h2{font-size:26px;margin-bottom:10px;font-weight:300}h3{font-size:18px;margin-bottom:8px;color:#888}p{margin-bottom:10px}a{color:#08f;text-decoration:none;font-weight:300}.app{height:100%}.home-page{background:#456878 url("+n(462)+") 100% 100% fixed}.help-icon{display:inline-block;width:15px;height:15px;position:relative;top:3px;background:url("+n(463)+") no-repeat;background-size:15px 30px}",""])},462:function(e,exports,n){e.exports=n.p+"c5f7e303386366a69a5c9ddef8e2c4f1.png"},463:function(e,exports,n){e.exports=n.p+"f020e158bffcb20ebef601fb40d84bfb.png"},464:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(299),o=t(a),i=n(465),l=t(i),p=o.default.module("app.directives",[l.default]).name;exports.default=p},465:function(e,exports,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=n(299),o=t(a),i=n(466),l=t(i),p=o.default.module("inputcontrolMod",[]).directive("inputcontrol",l.default).name;exports.default=p},466:function(e,exports,n){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),n(467);var t=function(){return{restrict:"AE",scope:{label:"@label",placeholder:"@placeholder",myvalue:"="},template:'<div class="input-control-container">\n      <label class="input-control-label" {{controlname}}">{{label}} <span class="help-icon"></span></label>\n      <input class="input-control" name="{{controlname}}" type="text" ng-model="myvalue" placeholder="{{placeholder}}" />\n      </div>',link:function(e,n,t){e.format="placeholder",e.controlname=t.controlname}}};exports.default=t},467:function(e,exports,n){var t=n(468);"string"==typeof t&&(t=[[e.id,t,""]]);n(380)(t,{});t.locals&&(e.exports=t.locals)},468:function(e,exports,n){exports=e.exports=n(373)(),exports.push([e.id,".input-control-container .input-control-label{display:block;margin-bottom:10px;font-size:14px;font-weight:500}.input-control-container .input-control{width:100%;padding:5px 8px;border-radius:3px;border:1px solid #d9d9d9}",""])}});
//# sourceMappingURL=app.bundle.js.map