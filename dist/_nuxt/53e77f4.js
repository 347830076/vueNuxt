(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{190:function(e,t,r){"use strict";r.r(t);r(30);var n=r(3),o=(r(32),r(172)),l=r.n(o).a.create({baseURL:"https://conduit.productionready.io"}),c=function(data){return l({method:"POST",url:"/api/users/login",data:data})},m=function(data){return l({method:"POST",url:"/api/users",data:data})},d=r(189),v={middleware:"notAuthenticated",name:"LoginIndex",components:{},data:function(){return{user:{email:"347830076@qq.com",password:"yu839833",username:""},errors:{}}},computed:{isLogin:function(){return"login"===this.$route.name}},watch:{},created:function(){},mounted:function(){},methods:{onSubmit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,console.log(e.isLogin),!e.isLogin){t.next=8;break}return t.next=5,c({user:e.user});case 5:t.t0=t.sent,t.next=11;break;case 8:return t.next=10,m({user:e.user});case 10:t.t0=t.sent;case 11:r=t.t0,data=r.data,console.log("data =>",data),e.$store.commit("setUser",data.user),d.set("user",data.user),window.location.href="http://www.baidu.com",t.next=24;break;case 19:t.prev=19,t.t1=t.catch(0),console.log("请求失败",t.t1),console.dir(t.t1),e.errors=t.t1.response.data.errors;case 24:case"end":return t.stop()}}),t,null,[[0,19]])})))()}}},f=r(22),component=Object(f.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[e._v(e._s(e.isLogin?"Sign in":"Sign up"))]),e._v(" "),r("p",{staticClass:"text-xs-center"},[e.isLogin?r("nuxt-link",{attrs:{to:"/register"}},[e._v("Need an account?")]):r("nuxt-link",{attrs:{to:"/login"}},[e._v("Have an account?")])],1),e._v(" "),r("ul",{staticClass:"error-messages"},[e._l(e.errors,(function(t,n){return e._l(t,(function(t,o){return r("li",{key:o},[e._v("\n                    "+e._s(n)+"  "+e._s(t)+"\n                ")])}))}))],2),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e.isLogin?e._e():r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Name",required:""},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password",minlength:"8",required:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[e._v("\n            "+e._s(e.isLogin?"Sign in":"Sign up")+"\n          ")])])])])])])}),[],!1,null,"2d5b0740",null);t.default=component.exports}}]);