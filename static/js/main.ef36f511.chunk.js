(this.webpackJsonpemployee=this.webpackJsonpemployee||[]).push([[0],{1:function(e){e.exports=JSON.parse('[{"id":1,"first":"Harry","last":"Potter","position":"Master Wizard, CEO","email":"Potter.H@iwand.com","cell":"(625)-245-9070"},{"id":2,"first":"Hermione","last":"Granger","position":"CEO","email":"Granger.H@iwand.com","cell":"(414)-577-0876"},{"id":3,"first":"Ron","last":"Weasley","position":"Product Manager","email":"Weasley.R@iwand.com","cell":"(651)-765-7432"},{"id":4,"first":"Rubeus","last":"Hagrid","position":"Manager","email":"Hagrid.R@iwand.com","cell":"(612)-291-7846"},{"id":5,"first":"Lord","last":"Voldemort","position":"Janitor","email":"He-who-shall-not-be-named@no-magmail.com","cell":"(784)-467-2459"},{"id":6,"first":"Jessica","last":"Castanon","position":"Herbology Manager","email":"Castanon.J@owl.com","cell":"(864)-358-6785"},{"id":7,"first":"Luna","last":"Lovegood","position":"Marketing Assistant","email":"Lovegood.L@iwand.com","cell":"(779)-250-0643"},{"id":8,"first":"Severus","last":"Snape","position":"Office Manager","email":"Snape@owl.com","cell":"(865)-246-3790"},{"id":9,"first":"Albus","last":"Dumbledor","position":"CEO","email":"ElderWand@iwand.com","cell":"(612)-935-3678"},{"id":10,"first":"Neville","last":"Longbottom","position":"CFO","email":"LongBottom@owl.com","cell":"(763)-935-5674"}]')},10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(5),s=a(6),o=a(7),m=a(2),u=a(8),d=a(9);var h=function(e){return r.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)};var f=function(e){return r.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)};var p=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return r.a.createElement("div",{className:t},e.children)};var E=function(e){return r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",null,e.searchtype," Search")),r.a.createElement("div",{className:"card-body"}),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group",style:{padding:"22px"}},r.a.createElement("label",{htmlFor:"search"},e.searchtype," Search Users by First Name"),r.a.createElement("input",{onChange:e.handleInputChange,value:e.value,searchtype:e.searchtype,name:"search",type:"text",className:"form-control",placeholder:"Search Users",id:"search"}))))},v=a(1);a(15);var b=function(e){console.log(e);var t=v.filter((function(t){return t.first.toLowerCase().includes(e.search.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",{className:"text-center table-title"},"User Directory"),t.length>0?r.a.createElement("table",{className:"table table-bordered table-sm",cellSpacing:"0",width:"100%"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col",onClick:function(){return e.sortBy("first")}},"First Name ",r.a.createElement("i",{class:"fa fa-sort","aria-hidden":"true"})),r.a.createElement("th",{scope:"col",onClick:function(){return e.sortBy("last")}},"Last Name ",r.a.createElement("i",{class:"fa fa-sort","aria-hidden":"true"})),r.a.createElement("th",{scope:"col",onClick:function(){return e.sortBy("position")}},"Position ",r.a.createElement("i",{class:"fa fa-sort","aria-hidden":"true"})),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"Phone"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement("b",null,e.first)),r.a.createElement("td",null,e.last),r.a.createElement("td",null,e.position),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.cell))})))):r.a.createElement("h2",null,"No Results"))},g=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).sortBy=function(e){n.setState({results:v.sort((function(t,a){return t[e]>a[e]?1:-1}))})},n.searchUsersFirst=function(){var e=n.state.search.trim(),t=v.filter((function(t){return t.first===e}));n.setState({result:t})},n.handleInputChange=function(e){var t=e.target.value,a=e.target.name;n.setState(Object(i.a)({},a,t))},n.handleFormSubmit=function(e){e.preventDefault(),n.searchUsersFirst()},n.state={result:v,search:""},n.sortBy=n.sortBy.bind(Object(m.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.searchUsersFirst()}},{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement(f,null,r.a.createElement(p,{size:"md-12"},r.a.createElement(E,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}))),r.a.createElement(f,null,r.a.createElement(p,{size:"md-12"},r.a.createElement("hr",null),r.a.createElement(b,{search:this.state.search,sortBy:this.sortBy}))))}}]),a}(n.Component);var y=function(){return r.a.createElement(g,null)};c.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.ef36f511.chunk.js.map