(this.webpackJsonpeverest=this.webpackJsonpeverest||[]).push([[0],{19:function(e,a,t){e.exports=t(30)},24:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),i=t.n(l),c=(t(24),t(4)),o=t(6);var s=function(){var e=Object(o.e)();return r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(c.b,{to:"/",className:"navbar-brand"},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/7/79/Mountain_icon_%28Noun_Project%29.svg",alt:"",style:{width:"64px",height:"64px"}})),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{class:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/productlist",className:"/productlist"===e.pathname?"nav-link active":"nav-link"},"Product List")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/productinfo",className:"/productinfo"===e.pathname?"nav-link active":"nav-link"},"Product Info")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/settings",className:"/settings"===e.pathname?"nav-link active":"nav-link"},"Settings")))))};var m=function(e){return r.a.createElement("div",{key:e.heading,className:"card mx-auto col-4"},r.a.createElement(c.b,{to:"/productinfo/"+e.id},r.a.createElement("img",{className:"card-img-top",src:e.image,alt:e.description,title:e.description}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},e.heading),r.a.createElement("p",{className:"card-text"},e.price))))},u=t(9);var d=function(e){return r.a.createElement("div",{class:"row"},u.map((function(e){return r.a.createElement(m,e)})))};var p=function(e){for(var a="",t=1;t<=5;t++)a+=e.rating>=t?'<i class="fas fa-star text-warning"></i>':'<i class="far fa-star"></i>';return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})},v=t(18);var g=function(e){return r.a.createElement("form",null,r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"formName"},"Email"),r.a.createElement("input",{type:"email",class:"form-control",id:"formName",placeholder:"name@example.com"})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"formRating"},"Rating..."),r.a.createElement("select",{class:"form-control",id:"formRating"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5"))),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"formReview"},"Your Review"),r.a.createElement("textarea",{class:"form-control",id:"formReview",rows:"3"})),r.a.createElement("button",{class:"btn btn-lg btn-primary",onClick:e.saveForm},"Save Review"))};var E=function(e){var a=Object(n.useState)(!1),t=Object(v.a)(a,2),l=t[0],i=t[1];return console.log("[ProductReviews] showForm=",l),r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),l?r.a.createElement(g,{saveForm:function(e){e.preventDefault(),i(!1)}}):r.a.createElement("div",{class:"d-flex justify-content-end"},r.a.createElement("button",{class:"btn btn-lg btn-secondary",onClick:function(){i(!0)}},r.a.createElement("i",{class:"fas fa-grin-stars"})," Review")),r.a.createElement("ul",{class:"list-group"},e.reviews.map((function(e){return r.a.createElement("li",{class:"list-group-item"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-8"},r.a.createElement("b",null,e.name)),r.a.createElement("div",{class:"col-4 pull-right"},r.a.createElement(p,{rating:e.rating}))),e.review)}))))};var f=function(e){var a=Object(o.f)().id;console.log("[ProductInfoPage] id=".concat(a),e);var t=u.filter((function(e){return e.id===a}))[0];return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-4"},r.a.createElement("img",{src:t.image,class:"img-thumbnail"})),r.a.createElement("div",{class:"col-8"},r.a.createElement("h1",null,t.heading),r.a.createElement("h2",null,t.price),r.a.createElement("h3",null,r.a.createElement(p,{rating:t.rating})),r.a.createElement("button",{class:"btn btn-lg btn-primary"},r.a.createElement("i",{class:"fas fa-cart-plus"}))),t.description),r.a.createElement(E,{id:t.id,reviews:t.reviews}))};var h=function(e){return r.a.createElement(r.a.Fragment,null,"[SettingsPage]")};var b=function(e){return r.a.createElement("div",{class:"footer"},"(c) 2020 The Everest Team")};var w=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement("div",{class:"container"},r.a.createElement(o.a,{exact:!0,path:["/","/productlist"],component:d}),r.a.createElement(o.a,{path:"/productinfo/:id",component:f}),r.a.createElement(o.a,{exact:!0,path:"/settings",component:h})),r.a.createElement(b,null)))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"id":"1203-2343","heading":"Bosch Refrigerator","description":"Keep your food fresh and close at hand with this 4-door Bosch refrigerator. The fridge\'s 21 cu ft. capacity provides plenty of room for all your groceries, while the FarmFresh system keeps the contents perfectly chilled. Its HomeConnect system connects to your home network for integration with Nest, Alexa, Fitbit, and more.","image":"https://multimedia.bbycastatic.ca/multimedia/products/1500x1500/136/13694/13694581.jpg","price":4599.99,"rating":4,"reviews":[{"name":"Fil","rating":4,"review":"Was awesome"},{"name":"Anant","rating":2,"review":"Broke after second use, returned."}]},{"id":"1203-2344","heading":"Graco SnugRide","description":"Enjoy added peace of mind with the Graco SnugRide SnugLock 35 infant car seat. You\'ll hear it click securely into place and know your child is safely strapped in. SnugLock technology offers almost effortless installation, while a positionable recline base has a level indicator to eliminate guesswork. Pair this seat with a Click Connect stroller for a complete travel system.","image":"https://multimedia.bbycastatic.ca/multimedia/products/500x500/133/13392/13392512.jpg","price":199.98,"rating":3,"reviews":[{"name":"Przemek","rating":4,"review":"Baby seemed happy"},{"name":"Sahar","rating":5,"review":"My kid loves it."},{"name":"Norma","rating":2,"review":"Okay but expensive"}]},{"id":"1203-2345","heading":"Bose Home Speaker 500","description":"It\u2019s powerfully simple. Fill any room with wall-to-wall stereo sound, while built-in voice control puts millions of songs at the tip of your tongue.","image":"https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/bose_home_speaker_500/product_silo_images/bose_home_speaker_500_triple_black_vpa_alexa_EC_hero.psd/jcr:content/renditions/cq5dam.web.600.600.png","price":399.99,"rating":5}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.e12ca720.chunk.js.map