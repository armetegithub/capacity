(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,t,n){e.exports=n.p+"static/media/capacity_logo.11168314.svg"},20:function(e,t,n){e.exports=n.p+"static/media/startup.4a2c2d17.svg"},22:function(e,t,n){e.exports=n.p+"static/media/portada1.89436ec0.svg"},35:function(e,t,n){},39:function(e,t,n){e.exports=n.p+"static/media/start_up.ab9f6762.svg"},40:function(e,t,n){e.exports=n(81)},45:function(e,t,n){},46:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(36),o=n.n(c),s=(n(45),n(1)),i=n(2),l=n(4),u=n(3),m=n(5),d=(n(46),n(14)),p=n(19),h=n(6),f=n(11),v=n.n(f),j=function e(){var t=this;Object(s.a)(this,e),this.signup=function(e,n,a,r){return t.service.post("/signup",{username:e,password:n,email:a,comunidad:r}).then((function(e){return e.data}))},this.login=function(e,n){return console.log(e,n),t.service.post("/login",{username:e,password:n}).then((function(e){return e.data}))},this.loggedin=function(){return t.service.get("/currentUser").then((function(e){return e.data}))},this.logout=function(){return t.service.get("/logout").then((function(e){return e.data}))},this.service=v.a.create({baseURL:"".concat("https://ih-capacity.herokuapp.com/api","/auth"),withCredentials:!0})},E=n(17),g=n.n(E),b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleLogout=function(e){n.props.logout()},n.state={loggedInUser:null},n.service=new j,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(p.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){return this.state.loggedInUser?r.a.createElement("div",{className:"navbar-div"},r.a.createElement("nav",{className:"nav-style"},r.a.createElement(h.b,{to:"/"},r.a.createElement("img",{src:g.a,alt:"logo",width:"400px",class:"logo"})),r.a.createElement("ul",null,r.a.createElement("div",{className:"right-nav"},r.a.createElement("li",null,r.a.createElement(h.b,{to:"/account/user/".concat(this.state.loggedInUser._id)},"Perfil")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/foundations"},"Fundaciones")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/projects"},"Proyectos")),r.a.createElement("li",null,r.a.createElement("a",{onClick:this.handleLogout},"Logout")))))):r.a.createElement("div",{className:"navbar-div"},r.a.createElement("nav",{className:"nav-style"},r.a.createElement(h.b,{to:"#"},r.a.createElement("img",{src:g.a,alt:"logo",width:"400px",class:"logo"})),r.a.createElement("ul",null,r.a.createElement("div",{className:"right-nav"},r.a.createElement("li",null,r.a.createElement(h.b,{to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/login"},"Login"))))))}}]),t}(a.Component),O=n(8),y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.username,a=n.state.password,r=n.state.email,c=n.state.comunidad;n.service.signup(t,a,r,c).then((function(e){n.setState({username:"",password:"",email:"",comunidad:""}),n.props.getUser(e.user)})).catch((function(e){n.setState({username:t,password:a,email:r,comunidad:c,error:!0})}))},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(O.a)({},a,r))},n.state={username:"",password:"",email:"",comunidad:""},n.service=new j,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"cargar_provincias",value:function(){var e=["Andaluc\xeda","Arag\xf3n","Canarias","Cantabria","Castilla y Le\xf3n","Castilla-La Mancha","Catalu\xf1a","Ceuta","Comunidad Valenciana","Comunidad de Madrid","Extremadura","Galicia","Islas Baleares","La Rioja","Melilla","Navarra","Pa\xeds Vasco","Asturias","Murcia"];return e.sort(),e.map((function(e){return r.a.createElement("option",null,e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Bienvenido, Por favor, crea tu cuenta"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Elige tu comunidad aut\xf3noma: "),r.a.createElement("select",{name:"comunidad",value:this.state.comunidad,onChange:function(t){return e.handleChange(t)}},this.cargar_provincias())),r.a.createElement("input",{type:"submit",value:"Sign up"})),r.a.createElement("h1",null,this.state.error?"Error":""))}}]),t}(a.Component),C=(n(69),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.username,a=n.state.password;n.service.login(t,a).then((function(e){n.setState({username:t,password:a,error:!1}),n.props.getUser(e),n.props.history.push("/projects")})).catch((function(e){n.setState({username:t,password:a,error:!0})}))},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(O.a)({},a,r))},n.state={username:"",password:""},n.service=new j,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log("Dentro de login"),r.a.createElement("div",{className:"container-form"},r.a.createElement("h3",null,"Welcome to Capacity"),r.a.createElement("form",{className:"form-style-9",onSubmit:this.handleFormSubmit},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("h1",null,this.state.error?"Error":""))}}]),t}(a.Component)),S=(n(70),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),n.props.unfollowproject()},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(O.a)({},a,r))},n.state={loggedInUser:"",id:"",succeed:"",error:!1,allprojects:[]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"despliegue"},r.a.createElement("p",null,this.props.project.project_type),r.a.createElement(h.b,{to:"/projects/".concat(this.props.project._id)},r.a.createElement("h1",null,this.props.project.name)),r.a.createElement(h.b,{to:"/projects/".concat(this.props.project._id)},r.a.createElement("img",{src:this.props.project.imageURL,width:"300px"})),r.a.createElement(h.b,{to:"/projects/".concat(this.props.project._id)},r.a.createElement("p",null,this.props.project.info))))}}]),t}(a.Component)),w=(n(71),n(18),n(22)),P=n.n(w),N=function(e){function t(e){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"cabecera-portada"},r.a.createElement("h1",null,"Bienvenidos a Capacity"),r.a.createElement("h2",null,"\xbfEst\xe1s listo para poner al m\xe1ximo tus capacidades?"),r.a.createElement("img",{src:P.a,alt:"portada",width:"600px",class:"portada"})))}}]),t}(a.Component),k=function(e){function t(e){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchProjects().then((function(t){return console.log(e.props)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"contents"},r.a.createElement(N,null),r.a.createElement("h3",null,"\xdaLTIMOS PROYECTOS"),r.a.createElement("div",{className:"contenedor"},this.props.projects.map((function(e){return r.a.createElement(S,{project:e,key:e._id})}))))}}]),t}(a.Component),U=function e(){var t=this;Object(s.a)(this,e),this.allProjects=function(){return t.service.get("/").then((function(e){return e.data}))},this.subscribeProject=function(e,n){return console.log(n),t.service.post("/subscribe/".concat(e),n).then((function(e){return e.data}))},this.deleteProject=function(e,n){return t.service.post("/delete/".concat(n,"/").concat(e)).then((function(e){return e.data}))},this.editProject=function(e,n){return t.service.put("/edit/".concat(e),n).then((function(e){return e.data}))},this.oneProject=function(e){return t.service.get("/".concat(e)).then((function(e){return e.data}))},this.addProject=function(e){console.log(e),t.service.post("/addproject",e).then((function(e){return e.data}))},this.service=v.a.create({baseURL:"".concat("https://ih-capacity.herokuapp.com/api","/projects"),withCredentials:!0})},F=(n(72),n(73),function(e){function t(e){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search-container"},r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{onChange:function(t){return e.props.filterProjects(t)},className:"search-input",type:"text"}),r.a.createElement("span",null)))}}]),t}(a.Component)),I=(a.Component,function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSearch=function(e){console.log(e)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchProjects().then((function(t){return console.log(e.props)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"contents"},r.a.createElement("h3",null,"PROYECTOS"),r.a.createElement("div",{className:"projects-search"},r.a.createElement(F,{filterProjects:function(t){return e.props.filterProjects(t)}})),r.a.createElement("div",{className:"contenedor"},this.props.projects.map((function(e){return r.a.createElement(S,{project:e,key:e._id})}))))}}]),t}(a.Component));var _=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"despliegue"},r.a.createElement(h.b,{to:"/foundations/".concat(e.foundation._id)},r.a.createElement("h1",null,e.foundation.name)),r.a.createElement(h.b,{to:"/foundations/".concat(e.foundation._id)},r.a.createElement("img",{src:e.foundation.imageURL,width:"300px"}))))},x=(n(74),n(35),n(75),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSearch=function(e){console.log(e)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchFoundations().then((function(t){return console.log(e.props)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"contents"},r.a.createElement("div",{className:"button"},r.a.createElement(h.b,{className:"button",to:"/addFoundation"},"Crear fundaci\xf3n")),r.a.createElement("h3",null,"Foundations"),r.a.createElement("div",{className:"contenedor"},this.props.foundations.map((function(e){return r.a.createElement(_,{foundation:e,key:e._id})}))))}}]),t}(a.Component)),L=function e(){var t=this;Object(s.a)(this,e),this.allFoundations=function(){return t.service.get("/").then((function(e){return e.data}))},this.addFoundation=function(e){console.log(e),t.service.post("/addFoundation",e).then((function(e){return e.data}))},this.oneFoundation=function(e){return t.service.get("/".concat(e)).then((function(e){return e.data}))},this.service=v.a.create({baseURL:"".concat("https://ih-capacity.herokuapp.com/api","/foundations"),withCredentials:!0})},A=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).subscribeProject=function(){n.services.subscribeProject(n.state.project._id,{newSuscriber:n.props.loggedInUser._id}).then((function(e){return n.setState({specificProject:e})})).catch((function(e){return console.log(e)}))},n.componentDidMount=function(){n.oneProject()},n.oneProject=function(){n.services.oneProject(n.props.match.params.id).then((function(e){n.setState({project:e})}),(function(){return console.log(n.getOwnerOfProject())})).catch((function(e){return console.log(e)}))},n.getOwnerOfProject=function(){var e=n.state.project.foundation,t=n.props.loggedInUser.foundations_created;return console.log(t.some((function(t){return t._id==e}))),t.some((function(t){return t._id==e}))},n.deleteProject=function(){var e=n.props.loggedInUser._id,t=n.state.project._id;n.services.deleteProject(t,e).then((function(e){return n.props.history.push("/projects")}))},n.state={project:null},n.services=new U,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Project"},this.state.project?r.a.createElement("div",{className:"detail-view"},r.a.createElement("h1",null,this.state.project.name),r.a.createElement("img",{src:this.state.project.imageURL}),r.a.createElement("p",null,this.state.project.info),r.a.createElement(h.b,{to:"/editproject/".concat(this.state.project._id)},"Editar"),r.a.createElement("button",{onClick:function(){return e.subscribeProject()}},"Inscribirse"),this.getOwnerOfProject()&&r.a.createElement("button",{onClick:function(){return e.deleteProject()}},"Eliminar proyecto")):console.log("No hay na"))}}]),t}(r.a.Component),D=(r.a.Component,function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){return n.oneFoundation()},n.oneFoundation=function(){n.services.oneFoundation(n.props.match.params.id).then((function(e){return n.setState({foundation:e})})).catch((function(e){return console.log(e)}))},n.state={foundation:null},n.services=new L,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.state.foundation),r.a.createElement("div",{className:"foundation"},r.a.createElement("div",{className:"button"},r.a.createElement(h.b,{to:"/addproject"},"Crear Nuevo Proyecto")),this.state.foundation?r.a.createElement("div",{className:"detail-view"},r.a.createElement("h1",null,this.state.foundation.name),r.a.createElement("img",{src:this.state.foundation.imageURL}),r.a.createElement("p",null,this.state.foundation.description)):console.log("No hay na"),r.a.createElement("div",{className:"despliegue-proyect"},this.state.foundation&&this.state.foundation.projects.map((function(e){return r.a.createElement("div",null,r.a.createElement(S,{project:e,key:e._id}))}))))}}]),t}(r.a.Component)),M=(n(76),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).foundationsService=new L,n.state={name:"",info:"",project_type:"",comunidad:""},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(O.a)({},a,r))},n.handleFormSubmit=function(e){e.preventDefault(),n.foundationsService.addFoundation(n.state)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"cargar_provincias",value:function(){var e=["Andaluc\xeda","Arag\xf3n","Canarias","Cantabria","Castilla y Le\xf3n","Castilla-La Mancha","Catalu\xf1a","Ceuta","Comunidad Valenciana","Comunidad de Madrid","Extremadura","Galicia","Islas Baleares","La Rioja","Melilla","Navarra","Pa\xeds Vasco","Asturias","Murcia"];return e.sort(),e.map((function(e){return r.a.createElement("option",null,e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"NewFoundation"},r.a.createElement("h1",null,"New Foundation Page"),r.a.createElement("form",{className:"form-style-9",onSubmit:this.handleFormSubmit},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Nombre de la fundaci\xf3n:"),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Describe tu fundaci\xf3n:"),r.a.createElement("textarea",{cols:"40",rows:"5",type:"text",name:"description",value:this.state.description,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Email de la fundaci\xf3n:"),r.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("label",null,"Elige tu comunidad aut\xf3noma: "),r.a.createElement("fieldset",null,r.a.createElement("select",{name:"comunidad",value:this.state.comunidad,onChange:function(t){return e.handleChange(t)}},this.cargar_provincias())),r.a.createElement("input",{type:"submit",value:"Crear nueva fundaci\xf3n"})))}}]),t}(r.a.Component)),R=n(20),B=n.n(R),T=(n(77),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).projectsService=new U,n.state={name:"",info:""},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(O.a)({},a,r))},n.handleFormSubmit=function(e){e.preventDefault(),n.projectsService.addProject(n.state)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"titulo"},r.a.createElement("h1",null,"Crear Nuevo Proyecto"),r.a.createElement("div",{className:"NewProject"},r.a.createElement("img",{src:B.a,alt:"startup_project",className:"portada"}),r.a.createElement("form",{className:"form-style-9",onSubmit:this.handleFormSubmit},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Nombre de la proyecto:"),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Describe tu proyecto:"),r.a.createElement("textarea",{cols:"40",rows:"5",type:"text",name:"info",value:this.state.description,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("input",{type:"submit",value:"Crear nuevo proyecto"}))))}}]),t}(r.a.Component)),V=n(39),W=n.n(V),G=(n(78),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),n.props.unfollowproject()},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(O.a)({},a,r))},n.state={loggedInUser:"",id:"",succeed:"",error:!1,allprojects:[]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"despliegue"},r.a.createElement("p",null,this.props.project.project_type),r.a.createElement(h.b,{to:"/projects/".concat(this.props.project._id)},r.a.createElement("h1",null,this.props.project.name)),r.a.createElement(h.b,{to:"/projects/".concat(this.props.project._id)},r.a.createElement("img",{src:this.props.project.imageURL,width:"300px"})),r.a.createElement(h.b,{to:"/projects/".concat(this.props.project._id)},r.a.createElement("p",null,this.props.project.info)),r.a.createElement("form",{onSubmit:function(t){return e.handleFormSubmit(t)}},r.a.createElement("input",{className:"button",type:"submit",value:"Dejar de Seguir"}))))}}]),t}(a.Component)),J=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={loggedInUser:null,subscribers:[]},n.service=new j,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchAllInfo()}},{key:"fetchAllInfo",value:function(){var e=this;v.a.get("http://localhost:3001/api/projects/projects/".concat(this.props.userInSession._id)).then((function(t){e.setState({subscribers:t.data})}))}},{key:"unfollowproject",value:function(e,t){var n=this;v.a.put("http://localhost:3001/api/projects/deletesubscriber/".concat(e),{SUBSCRIPTOR:t}).then((function(e){n.fetchAllInfo()})).catch((function(e){n.setState({error:!0})}))}},{key:"render",value:function(){var e=this;return console.log(this.props.userInSession),console.log(this.state.subscribers),r.a.createElement("div",{className:"user"},this.props.userInSession.username?r.a.createElement("div",{className:"user-detail-view"},r.a.createElement("h1",null,"Hola ",this.props.userInSession.username),r.a.createElement("h1",null,this.state.subscribers.name),r.a.createElement("img",{src:W.a,alt:"portadaprofile",class:"portada"}),r.a.createElement("h2",null,"Estas son tus fundaciones"),r.a.createElement("div",{className:"contenedor"},this.props.userInSession&&this.props.userInSession.foundations_created.map((function(e){return r.a.createElement(_,{foundation:e,key:e._id})}))),r.a.createElement("h2",null,"Estos son los proyectos a los que estas suscrito"),this.state.subscribers.map((function(t){return r.a.createElement("div",{className:"contenedor"},r.a.createElement(G,{unfollowproject:function(){return e.unfollowproject(t._id,e.props.userInSession._id)},project:t,key:t._id}))}))):console.log(this.state))}}]),t}(r.a.Component),Y=(n(79),n(80),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).projectsService=new U,n.state={name:null,info:null},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;console.log(a,r),a=""!==a?a:null,r=""!==r?r:null,n.setState(Object(O.a)({},a,r))},n.handleFormSubmit=function(e){e.preventDefault(),n.projectsService.editProject(n.props.match.params.id,n.state)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"titulo"},r.a.createElement("h1",null,"Edita tu proyecto"),r.a.createElement("div",{className:"editProject"},r.a.createElement("img",{src:B.a,alt:"startup_project",className:"portada"}),r.a.createElement("form",{className:"form-style-9",onSubmit:this.handleFormSubmit},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Edita el nombre de proyecto:"),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Edita la informaci\xf3n de tu proyecto:"),r.a.createElement("textarea",{cols:"40",rows:"5",type:"text",name:"info",value:this.state.description,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("input",{type:"submit",value:"Editar Proyecto"}))))}}]),t}(r.a.Component)),q=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){console.log(n.state.projectsAll)},n.filterProjects=function(e){var t=n.state.projectsAll.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));console.log(n.state.projectsAll),n.setState({projects:t})},n.getUser=function(e){n.setState({loggedInUser:e})},n.logout=function(){n.service.logout().then((function(){n.setState({loggedInUser:null})}))},n.fetchOneUser=function(){return n.UserService.oneService().then((function(e){n.setState({user:e})}))},n.fetchProjects=function(){return n.ProjectsService.allProjects().then((function(e){n.setState({projectsAll:e,projects:e})}))},n.fetchFoundations=function(){return n.FoundationsService.allFoundations().then((function(e){n.setState({foundations:e})}))},n.fetchOneFoundation=function(){return n.FoundationsService.oneFoundation().then((function(e){n.setState({foundation:e})}))},n.addFoundation=function(){return n.FoundationsService.addFoundation().then((function(e){n.setState({foundations:e})}))},n.addProject=function(){return n.ProjectsService.addProject().then((function(e){n.setState({projects:e})}))},n.editProject=function(){return n.ProjectsService.editProject().then((function(e){n.setState({projects:e})}))},n.state={loggedInUser:null,projects:[],projectsAll:[],foundations:[]},n.service=new j,n.ProjectsService=new U,n.FoundationsService=new L,n.fetchUser(),n.fetchProjects(),n.fetchFoundations(),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"fetchUser",value:function(){var e=this;return this.service.loggedin().then((function(t){e.setState({loggedInUser:t})})).catch((function(t){e.setState({loggedInUser:!1})}))}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(b,{className:"navbar",userInSession:this.state.loggedInUser,logout:this.logout})),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement(k,{fetchProjects:e.fetchProjects,projects:e.state.projects})}}),r.a.createElement(d.a,{exact:!0,path:"/projects",render:function(){return r.a.createElement(I,{fetchProjects:e.fetchProjects,projects:e.state.projects,filterProjects:e.filterProjects})}}),r.a.createElement(d.a,{exact:!0,path:"/foundations",render:function(){return r.a.createElement(x,{fetchFoundations:e.fetchFoundations,foundations:e.state.foundations})}}),r.a.createElement(d.a,{path:"/projects/:id",render:function(t){return r.a.createElement(A,Object.assign({},t,{loggedInUser:e.state.loggedInUser}))}}),r.a.createElement(d.a,{path:"/foundations/:id",render:function(e){return r.a.createElement(D,e)}}),r.a.createElement(d.a,{path:"/addFoundation",render:function(){return r.a.createElement(M,null)}}),r.a.createElement(d.a,{path:"/addproject",render:function(){return r.a.createElement(T,null)}}),r.a.createElement(d.a,{path:"/editproject/:id",render:function(e){return r.a.createElement(Y,e)}}),r.a.createElement(d.a,{path:"/account/:id",render:function(){return r.a.createElement(J,{userInSession:e.state.loggedInUser,getUser:e.getUser})}})))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(b,{userInSession:this.state.loggedInUser,logout:this.logout})),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement(k,{fetchProjects:e.fetchProjects,projects:e.state.projects})}}),r.a.createElement(d.a,{exact:!0,path:"/signup",render:function(){return r.a.createElement(y,{getUser:e.getUser})}}),r.a.createElement(d.a,{exact:!0,path:"/login",render:function(t){return r.a.createElement(C,Object.assign({getUser:e.getUser},t))}}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(h.a,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.72d28b8d.chunk.js.map