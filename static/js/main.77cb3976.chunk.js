(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={title:"App_title__35zdL",section:"App_section__3klgY"}},18:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactForm_form__31aeL",label:"ContactForm_label__1iSma",input:"ContactForm_input__3f0RX",button:"ContactForm_button__2sAVE"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(11),s=n.n(o),r=(n(18),n(13)),i=n(4),l=n(5),u=n(7),b=n(6),m=n(22),h=n(12),d=n(2),j=n.n(d),p=n(0),f=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(p.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:j.a.label,children:["Name",Object(p.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",className:j.a.input,placeholder:"Jon Jonson",value:e,onChange:this.handleChange,required:!0})]}),Object(p.jsxs)("label",{className:j.a.label,children:["Number",Object(p.jsx)("input",{className:j.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,placeholder:"111-11-11",value:n,onChange:this.handleChange})]}),Object(p.jsx)("button",{className:j.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),_=n(3),C=n.n(_),O=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:C.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsxs)("li",{className:C.a.item,children:[Object(p.jsxs)("p",{className:C.a.info,children:[a,": ",c]}),Object(p.jsx)("button",{className:C.a.button,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},v=n(9),x=n.n(v),g=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:x.a.label,children:["Find contacts by name",Object(p.jsx)("input",{className:x.a.input,type:"text",value:e,onChange:n})]})},N=n(10),y=n.n(N),S=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(m.a)(),name:n,number:a};t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts.")):t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(r.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t){this.state.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:y.a.title,children:"Phonebook"}),Object(p.jsx)(f,{onSubmit:this.addContact}),Object(p.jsx)("h2",{className:y.a.section,children:"Contacts"}),Object(p.jsx)(g,{value:t,onChange:this.changeFilter}),Object(p.jsx)(O,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={list:"ContactList_list__1ETbQ",item:"ContactList_item__Aab8n",button:"ContactList_button___t46Y"}},9:function(t,e,n){t.exports={label:"Filter_label__1VrEv",input:"Filter_input__3ZK6b"}}},[[20,1,2]]]);
//# sourceMappingURL=main.77cb3976.chunk.js.map