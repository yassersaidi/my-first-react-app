(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{61:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(18),c=a.n(s),r=(a(60),a(61),a(21)),o=a(22),l=a(27),d=a(26),m=a(78),h=a(74),j=a(79),u=a(77),b=a(1);var g=function(){return Object(b.jsx)(m.a,{bg:"primary",expand:"lg",variant:"dark",children:Object(b.jsxs)(h.a,{children:[Object(b.jsx)(m.a.Brand,{href:"#home",children:"SoCL"}),Object(b.jsx)(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(b.jsx)(m.a.Collapse,{id:"basic-navbar-nav",children:Object(b.jsxs)(j.a,{className:"me-auto",children:[Object(b.jsx)(j.a.Link,{href:"#home",children:"Home"}),Object(b.jsx)(j.a.Link,{href:"#link",children:"Link"}),Object(b.jsxs)(u.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(b.jsx)(u.a.Item,{href:"#action/3.1",children:"Action"}),Object(b.jsx)(u.a.Item,{href:"#action/3.2",children:"Another action"}),Object(b.jsx)(u.a.Item,{href:"#action/3.3",children:"Something"}),Object(b.jsx)(u.a.Divider,{}),Object(b.jsx)(u.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})})},p=a(80);var O=function(){return Object(b.jsx)(h.a,{className:"mt-2",children:Object(b.jsxs)(p.a,{variant:"primary",children:[Object(b.jsx)(p.a.Heading,{children:"Hey, nice to see you"}),Object(b.jsx)("p",{children:"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}),Object(b.jsx)("hr",{}),Object(b.jsx)("p",{className:"mb-0",children:"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."})]})})},x=a(75),v=a(54),y=a(76),f=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),n=t.call(this,e),console.log(e.dish),n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.dish,t=e.comments.map((function(e){return Object(b.jsxs)("li",{children:[Object(b.jsx)("div",{className:"comment-content",children:e.comment}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"comment-info",children:e.author}),Object(b.jsxs)("span",{className:"comment-info",children:[e.rating,"/5"]}),Object(b.jsx)("span",{className:"comment-info",children:e.date})]})]},e.id)}));return Object(b.jsxs)("div",{className:"menu-card h-100 w-100 col-lg-3 me-1 col-sm-12 col-md-4 flex-column justify-content-between",children:[Object(b.jsx)("div",{className:"menu-preview",style:{backgroundImage:"url("+e.image+")"}}),Object(b.jsxs)("div",{className:"menu-description p-1",children:[Object(b.jsxs)("div",{children:[e.label.length>0?Object(b.jsx)("span",{className:"menu-label",children:e.label}):"",Object(b.jsx)("span",{className:"menu-cat",children:e.category})]}),Object(b.jsxs)("div",{className:"d-flex justify-content-between align-content-center w-100 align-items-end mt-1",children:[Object(b.jsx)("span",{className:"menu-name",children:e.name}),Object(b.jsx)("span",{className:"menu-price",children:e.price})]}),Object(b.jsx)("div",{className:"menu-info d-flex justify-content-between w-100"}),Object(b.jsx)("div",{className:"menu-desc",children:Object(b.jsx)("p",{children:e.description})})]}),Object(b.jsxs)("div",{className:"comments",children:[Object(b.jsx)("span",{className:"review",children:"Reviews:"}),null!=e.comments?Object(b.jsx)("ul",{children:t}):"No Reviews"]})]})}}]),a}(n.Component),w=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={orderedDish:null},n}return Object(o.a)(a,[{key:"onOrder",value:function(e){this.setState({orderedDish:e})}},{key:"renderDish",value:function(e){return null!=e?Object(b.jsx)(f,{dish:this.state.orderedDish}):Object(b.jsx)("div",{})}},{key:"render",value:function(){var e=this,t=this.props.dishes.map((function(t){return Object(b.jsxs)("div",{className:"menu-card col-lg-3 me-1 col-sm-12 col-md-4 flex-column justify-content-between",children:[Object(b.jsx)("div",{style:{backgroundImage:"url("+t.image+")"}}),Object(b.jsx)("div",{className:"menu-preview",style:{backgroundImage:"url("+t.image+")"}}),Object(b.jsxs)("div",{className:"menu-description p-1",children:[Object(b.jsxs)("div",{children:[t.label.length>0?Object(b.jsx)("span",{className:"menu-label",children:t.label}):"",Object(b.jsx)("span",{className:"menu-cat",children:t.category})]}),Object(b.jsxs)("div",{className:"d-flex justify-content-between align-content-center w-100 align-items-end mt-1",children:[Object(b.jsx)("span",{className:"menu-name",children:t.name}),Object(b.jsx)("span",{className:"menu-price",children:t.price})]}),Object(b.jsx)("div",{className:"menu-info d-flex justify-content-between w-100"}),Object(b.jsx)("div",{className:"menu-desc",children:Object(b.jsx)("p",{children:t.description})}),Object(b.jsx)("div",{className:"menu-order w-100",children:Object(b.jsx)(x.a,{children:Object(b.jsx)(v.a,{variant:"success",onClick:function(){return e.onOrder(t)},children:"Read More"})})})]})]},t.id)}));return Object(b.jsxs)(h.a,{className:"position-relative",children:[Object(b.jsx)("div",{className:"full-menu position-absolute w-100 h-100"}),Object(b.jsx)(y.a,{className:"text-center justify-content-between align-items-center",children:t}),Object(b.jsx)("div",{children:this.renderDish(this.state.orderedDish)})]})}}]),a}(n.Component),N=[{id:0,name:"Uthappizza",image:"assets/images/uthappizza.png",category:"mains",label:"Hot",price:"4.99",description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}]},{id:1,name:"Zucchipakoda",image:"assets/images/zucchipakoda.png",category:"appetizer",label:"",price:"1.99",description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}]},{id:2,name:"Vadonut",image:"assets/images/vadonut.png",category:"appetizer",label:"New",price:"1.99",description:"A quintessential ConFusion experience, is it a vada or is it a donut?",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}]},{id:3,name:"ElaiCheese Cake",image:"assets/images/elaicheesecake.png",category:"dessert",label:"",price:"2.99",description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",comments:[{id:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}]}],k=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={dishes:N},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)("header",{className:"main-header",children:Object(b.jsx)(g,{})}),Object(b.jsx)(O,{}),Object(b.jsx)(w,{dishes:this.state.dishes})]})}}]),a}(n.Component),I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,81)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))};c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),I()}},[[67,1,2]]]);
//# sourceMappingURL=main.4dd08481.chunk.js.map