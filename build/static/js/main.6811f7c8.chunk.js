(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{15:function(e,t,a){},25:function(e,t,a){e.exports=a(38)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),s=(a(30),a(1)),o=a(2),i=a(5),u=a(4),m=a(6),d=(a(31),a(32),a(15),a(8)),h=a(11),b=new(function(){function e(){Object(s.a)(this,e)}return Object(o.a)(e,[{key:"registerSuccessfulLogin",value:function(e,t){console.log("Authentication successful"),sessionStorage.setItem("authenticatedUser",e)}},{key:"logout",value:function(){sessionStorage.removeItem("authenticatedUser")}},{key:"isUserLoggedIn",value:function(){return null!==sessionStorage.getItem("authenticatedUser")}}]),e}()),p=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return b.isUserLoggedIn()?r.a.createElement(h.b,this.props):r.a.createElement(h.a,{to:"/login"})}}]),t}(n.Component),E=a(24),g=a(14),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={username:"mohammad",password:"",loginFailed:!1,loginSuccssed:!1},a.handleNameChange=a.handleNameChange.bind(Object(g.a)(a)),a.loginClicked=a.loginClicked.bind(Object(g.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleNameChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"loginClicked",value:function(){"user"!==this.state.username&&"mohammad"!==this.state.username||"pass"!==this.state.password?(this.setState({loginSuccssed:!1}),this.setState({loginFailed:!0})):(b.registerSuccessfulLogin(this.state.username,this.state.password),this.props.history.push("/welcome/".concat(this.state.username)))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},this.state.loginFailed&&r.a.createElement("div",{className:"alert alert-warning"},"Invalid Credentials"),r.a.createElement("div",{className:"username"},r.a.createElement("label",{className:"usernameLabel"},"Username  : "),r.a.createElement("input",{type:"text",value:this.state.username,onChange:this.handleNameChange,className:"usernameInput",name:"username"})),r.a.createElement("div",{className:"password"},r.a.createElement("label",{className:"passwordLabel"},"Password : "),r.a.createElement("input",{type:"password",value:this.state.password,onChange:this.handleNameChange,className:"passwordInput",name:"password"})),this.state.loginFailed&&r.a.createElement("div",null,r.a.createElement("h6",null,"Invalid Credential")),r.a.createElement("div",{className:"loginBtn"},r.a.createElement("button",{type:"submit",className:"a",onClick:this.loginClicked},"LOGIN")))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={todos:[{id:1,content:"get a job",done:!1,targetDate:new Date},{id:2,content:"get a gf",done:!1,targetDate:new Date},{id:3,content:"fuck her in the ass",done:!1,targetDate:new Date}]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Todos List"),r.a.createElement("table",{className:"jumbotron bg-dark container"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"id"),r.a.createElement("th",null,"Content"),r.a.createElement("th",null,"Is Done?"),r.a.createElement("th",null,"Target Date"))),r.a.createElement("tbody",null,this.state.todos.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.content),r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox"})),r.a.createElement("td",null,e.targetDate.toString()),r.a.createElement("td",null,r.a.createElement("button",{className:"editBtn"},"Edit")),r.a.createElement("td",null,r.a.createElement("span",null," ")),r.a.createElement("td",null,r.a.createElement("button",{className:"delBtn"},"Delete")))})))))}}]),t}(n.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=b.isUserLoggedIn();return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(d.b,{to:"/"},"ToDo Apllication")),r.a.createElement("ul",{className:"navbar-nav"},e&&r.a.createElement("li",{className:"nav-link"},r.a.createElement(d.b,{className:"nav-link",to:"/todos"},"ToDos"))),r.a.createElement("ul",{className:"navbar-nav navbar-collapse justify-content-end"},!e&&r.a.createElement("li",{className:"nav-link"},r.a.createElement(d.b,{className:"nav-link",to:"/register"},"Register")),!e&&r.a.createElement("li",{className:"nav-link"},r.a.createElement(d.b,{className:"nav-link",to:"/login"},"Login")),e&&r.a.createElement("li",{className:"nav-link"},r.a.createElement(d.b,{className:"nav-link",to:"/logout",onClick:b.logout},"Logout"))))))}}]),t}(n.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ToDoApp"},r.a.createElement(d.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/",exact:!0,component:k}),r.a.createElement(h.b,{path:"/register",component:N}),r.a.createElement(h.b,{path:"/login",component:v}),r.a.createElement(p,{path:"/welcome/:name",component:C}),r.a.createElement(p,{path:"/todos",component:j}),r.a.createElement(p,{path:"/logout",component:D}),r.a.createElement(h.b,{component:y})),r.a.createElement(w,null))))}}]),t}(n.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{to:"/register"},"Register"),r.a.createElement(d.b,{to:"/login"},"Login"))}}]),t}(n.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Register"))}}]),t}(n.Component);function y(){return r.a.createElement("div",null,r.a.createElement("h2",null,"An error occurred!"),r.a.createElement(d.b,{to:"/"},"Go to Home Page"))}var C=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},"WELCOM ",this.props.match.params.name))}}]),t}(n.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("span",{className:"text-muted"},"All Rights Reserves @Mohammad Amani"))}}]),t}(n.Component),D=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"You are Logged Out"),r.a.createElement("div",{className:"jumbotron bg-dark"},"Thanks for Using ToDo :)"))}}]),t}(n.Component),L=f,I=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(L,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.6811f7c8.chunk.js.map