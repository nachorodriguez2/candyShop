(this["webpackJsonpgithub-finder"]=this["webpackJsonpgithub-finder"]||[]).push([[0],{31:function(e,t,a){e.exports=a(81)},41:function(e,t,a){e.exports=a.p+"static/media/carro.4d5bbfc1.gif"},42:function(e,t,a){var n={"./barra.jpg":43,"./bears.jpg":44,"./bombones.jpg":45,"./caramelos.jpg":46,"./chicles.jpg":47,"./choc.jpg":48,"./fruits.jpg":49,"./gomas.jpg":50,"./gomitas.jpg":51,"./grageas.jpg":52,"./gum.jpg":53,"./gummies.jpg":54,"./marocs.jpg":55,"./mellows.jpg":56,"./paleta.jpg":57,"./pastillas.jpg":58,"./seeds.jpg":59,"./worms.jpg":60};function c(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=o,e.exports=c,c.id=42},43:function(e,t,a){e.exports=a.p+"static/media/barra.fac1d74e.jpg"},44:function(e,t,a){e.exports=a.p+"static/media/bears.f3624cae.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/bombones.f9992c01.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/caramelos.bba58594.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/chicles.46e497b5.jpg"},48:function(e,t,a){e.exports=a.p+"static/media/choc.e26fa1f8.jpg"},49:function(e,t,a){e.exports=a.p+"static/media/fruits.d800073e.jpg"},50:function(e,t,a){e.exports=a.p+"static/media/gomas.6cfa7eba.jpg"},51:function(e,t,a){e.exports=a.p+"static/media/gomitas.8de71b97.jpg"},52:function(e,t,a){e.exports=a.p+"static/media/grageas.9c504d97.jpg"},53:function(e,t,a){e.exports=a.p+"static/media/gum.6ee6f186.jpg"},54:function(e,t,a){e.exports=a.p+"static/media/gummies.519752c3.jpg"},55:function(e,t,a){e.exports=a.p+"static/media/marocs.416a36bd.jpg"},56:function(e,t,a){e.exports=a.p+"static/media/mellows.d6b0c683.jpg"},57:function(e,t,a){e.exports=a.p+"static/media/paleta.27f7a0b7.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/pastillas.54709a0a.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/seeds.bce9c8d4.jpg"},60:function(e,t,a){e.exports=a.p+"static/media/worms.f6da94d7.jpg"},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(28),r=a.n(o),i=a(13),s=a(6),l=function(){return c.a.createElement("nav",null,c.a.createElement("ul",{className:"lista"},c.a.createElement("li",null,c.a.createElement(i.b,{style:{textDecoration:"none"},to:"/candyShop"},"HOME"," ")),c.a.createElement("li",null,c.a.createElement(i.b,{style:{textDecoration:"none"},to:"/shop"},"SHOP"," ")),c.a.createElement("li",null,c.a.createElement(i.b,{style:{textDecoration:"none"},to:"/checkOut"},"CHECK-OUT"))))},m=function(){return c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"imagenPrincipal"}),c.a.createElement("div",{className:"texto"},c.a.createElement("i",{className:"fas fa-candy-cane"}),c.a.createElement("h1",null,"Bienvenido a la tienda ",c.a.createElement("br",null)," virtual de CandyMarket"),c.a.createElement("p",null,"En la seccion 'SHOP' encontrar\xe1 nuestros productos seleccionados")))},d=a(9),p=a(10),u=a(12),g=a(11),h=a(7),b=function(e){Object(u.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={name:"",value:"",comprado:!1,cssForm:"item",costo:"",cantVendidos:0},a.compra=a.compra.bind(Object(h.a)(a)),a.handleChange=a.handleChange.bind(Object(h.a)(a)),a}return Object(p.a)(n,[{key:"handleChange",value:function(e){var t="unidad"===this.props.data.cantidad?e.target.value*this.props.data.precio:e.target.value*this.props.data.precio/1e3;this.setState({name:e.target.name,value:e.target.value,costo:t})}},{key:"compra",value:function(e){var t=this;if(e.preventDefault(),""!==this.state.value&&this.state.value>0){var a;if(null===localStorage.key(0))a=1;else a=Object.keys(localStorage).length+1;var n={id:a,item:this.state.name,cantidad:this.state.value,tipoVenta:this.props.data.cantidad,total:this.state.costo};localStorage.setItem("".concat(a),JSON.stringify(n)),this.setState((function(e){return{value:"",costo:"",comprado:!0,cssForm:"item-comprado",cantVendidos:e.cantVendidos+1}})),setTimeout((function(){t.setState({cssForm:"item"})}),2e3)}}},{key:"render",value:function(){return c.a.createElement("div",{className:this.state.cssForm},c.a.createElement("div",{className:"foto-contenedor"},c.a.createElement("img",{id:"imgItem",src:"item-comprado"===this.state.cssForm?a(41):a(42)("./".concat(this.props.data.nombre,".jpg"))}),this.state.comprado&&c.a.createElement("i",{className:"far fa-check-circle icon"},"Comprado!")),c.a.createElement("div",{className:"descripcion"},c.a.createElement("h5",null,this.props.data.nombre.toUpperCase()),c.a.createElement("p",null,"Precio por"," ","unidad"===this.props.data.cantidad?"unidad":"kilo"," - $"," ",this.props.data.precio)),c.a.createElement("form",{onSubmit:this.compra},c.a.createElement("input",{type:"number",name:this.props.data.nombre,id:"cantidad",step:"unidad"===this.props.data.cantidad?"1":"50",value:this.state.value,onChange:this.handleChange,placeholder:"Cantidad..."}),c.a.createElement("label",null,"unidad"===this.props.data.cantidad?"unidad":"gramos"),c.a.createElement("p",null,"Total: ",this.state.costo),c.a.createElement("button",{className:"boton",type:"submit"},"Comprar!"),c.a.createElement("br",null)))}}]),n}(n.Component),f=[{nombre:"barra",cantidad:"unidad",precio:40},{nombre:"bears",cantidad:"peso",precio:1e3},{nombre:"bombones",cantidad:"unidad",precio:20},{nombre:"caramelos",cantidad:"peso",precio:350},{nombre:"chicles",cantidad:"peso",precio:200},{nombre:"choc",cantidad:"peso",precio:2e3},{nombre:"fruits",cantidad:"peso",precio:750},{nombre:"gomas",cantidad:"peso",precio:700},{nombre:"gomitas",cantidad:"peso",precio:700},{nombre:"grageas",cantidad:"peso",precio:1200},{nombre:"gum",cantidad:"unidad",precio:4},{nombre:"gummies",cantidad:"peso",precio:700},{nombre:"marocs",cantidad:"unidad",precio:50},{nombre:"mellows",cantidad:"peso",precio:1e3},{nombre:"paleta",cantidad:"unidad",precio:45},{nombre:"pastillas",cantidad:"peso",precio:400},{nombre:"seeds",cantidad:"peso",precio:500},{nombre:"worms",cantidad:"peso",precio:450}],v=(a(61),function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={},e}return Object(p.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"container text-center"},c.a.createElement("h1",{className:"titulo-shop"},"Shop",c.a.createElement("br",null),"Eleg\xed tus productos y pagalos en el Check-Out"),c.a.createElement("div",{className:"listaProductos"},f.map((function(e){return c.a.createElement(b,{data:e,key:e})}))))}}]),a}(n.Component));var E=function(e){return c.a.createElement("ul",{className:"justify-content-center list-group list-group-horizontal mb-2",id:e.data.id},c.a.createElement("li",{className:"list-group-item"},e.data.item.toUpperCase()),c.a.createElement("li",{className:"list-group-item"},"unidad"===e.data.tipoVenta?1==e.data.cantidad?e.data.cantidad+" unidad":e.data.cantidad+" unidades":e.data.cantidad+" gramos"),c.a.createElement("li",{className:"list-group-item"},"Total: $ ",e.data.total),c.a.createElement("svg",{className:"bi bi-x text-danger",width:"1.5em",height:"1.5em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",onClick:function(){return e.eliminarItem(e.data.id)}},c.a.createElement("path",{fillRule:"evenodd",d:"M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z",clipRule:"evenodd"}),c.a.createElement("path",{fillRule:"evenodd",d:"M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z",clipRule:"evenodd"})))},j=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={data:[],total:""},e.eliminarItem=e.eliminarItem.bind(Object(h.a)(e)),e}return Object(p.a)(a,[{key:"eliminarItem",value:function(e){localStorage.removeItem(e);for(var t=Object.keys(localStorage),a=(t=t.sort()).map((function(e){return JSON.parse(localStorage.getItem(e))})),n=t.map((function(e){return JSON.parse(localStorage.getItem(e))})),c=0,o=0;o<n.length;o++)c+=n[o].total;this.setState({data:a,total:c})}},{key:"componentDidMount",value:function(){for(var e=Object.keys(localStorage),t=(e=e.sort()).map((function(e){return JSON.parse(localStorage.getItem(e))})),a=e.map((function(e){return JSON.parse(localStorage.getItem(e))})),n=0,c=0;c<a.length;c++)n+=a[c].total;this.setState({data:t,total:n})}},{key:"render",value:function(){var e=this,t=this.state.data.map((function(t){return c.a.createElement(E,{key:t.id,eliminarItem:e.eliminarItem,data:t})}));return c.a.createElement("div",null,c.a.createElement("div",{className:"mt-5 mb-4"},t),0===this.state.total?c.a.createElement("div",{className:"text-center mt-5"},c.a.createElement("h2",{className:"mt-2 mb-4"},"Tu bolsa de caramelos est\xe1 vac\xeda..."),c.a.createElement("h3",{className:"mt-2 mb-4"},"Volv\xe9 a la secci\xf3n de shop para comprar"),c.a.createElement("svg",{className:"bi bi-bag text-center",width:"10em",height:"10em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{"fill-rule":"evenodd",d:"M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z","clip-rule":"evenodd"}),c.a.createElement("path",{d:"M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z"}))):c.a.createElement("h4",{className:"text-center"},"Total: ",this.state.total))}}]),a}(n.Component),x=function(){return c.a.createElement(i.a,null,c.a.createElement("div",{className:"contenedor"},c.a.createElement(l,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/candyShop",component:m}),c.a.createElement(s.a,{exact:!0,path:"/shop",component:v}),c.a.createElement(s.a,{exact:!0,path:"/checkOut",component:j}))))};a(79),a(80);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(x,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.a61db396.chunk.js.map