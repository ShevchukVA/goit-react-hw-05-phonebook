(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{1:function(t,e,a){t.exports={list:"ContactList_list__MeHxy",item:"ContactList_item__3du25",button:"ContactList_button__38CjL",text:"ContactList_text__TnYb1",enter:"ContactList_enter__2FjWt",enterActive:"ContactList_enterActive__CbS__",exit:"ContactList_exit__3I1v8",exitActive:"ContactList_exitActive__V8KY6"}},11:function(t,e,a){t.exports={text:"Logo_text__ILZiI",appear:"Logo_appear__2C5lg",appearActive:"Logo_appearActive__3p4h8"}},15:function(t,e,a){t.exports={alert:"Notification_alert__3WB6D",enter:"Notification_enter__1zZI8",enterActive:"Notification_enterActive__3t0u2",exit:"Notification_exit__1cTii",exitActive:"Notification_exitActive__3mb30"}},2:function(t,e,a){t.exports={container:"ContactForm_container__2bwTF",label:"ContactForm_label__3ByIX",input:"ContactForm_input__VGnWs",button:"ContactForm_button__Rhv_N"}},21:function(t,e,a){t.exports=a(28)},28:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),o=a(5),r=a.n(o),i=a(19),l=a(8),s=a(9),u=a(13),m=a(12),_=a(31),p=a(30),f=a(18),h=a(2),v=a.n(h),b=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var a=e.target,n=a.name,c=a.value;t.setState(Object(f.a)({},n,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(t.state),t.setState({name:"",number:""})},t}return Object(s.a)(a,[{key:"render",value:function(){var t=this.state,e=t.name,a=t.number;return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.handleSubmit,className:v.a.container},c.a.createElement("label",{className:v.a.label},"Name",c.a.createElement("input",{className:v.a.input,type:"name",name:"name",value:e,autoComplete:"off",onChange:this.handleChange})),c.a.createElement("label",{className:v.a.label},"Number",c.a.createElement("input",{className:v.a.input,type:"tel",name:"number",value:a,autoComplete:"off",onChange:this.handleChange})),c.a.createElement("button",{type:"submit",className:v.a.button},"Add contact")))}}]),a}(n.Component),C=a(32),d=a(1),x=a.n(d),E=function(t){var e=t.contacts,a=t.onRemoveContact;return c.a.createElement(c.a.Fragment,null,c.a.createElement(C.a,{component:"ul",className:x.a.list},e.map((function(t){var e=t.id,n=t.name,o=t.number;return c.a.createElement(p.a,{key:e,classNames:x.a,timeout:250},c.a.createElement("li",{className:x.a.item},c.a.createElement("p",{className:x.a.text},n,":"),c.a.createElement("p",{className:x.a.text},o),c.a.createElement("button",{className:x.a.button,type:"button",onClick:function(){return a(e)}},"X")))}))))},N=a(7),g=a.n(N),F=function(t){var e=t.value,a=t.onChangeFilter;return c.a.createElement("div",{className:g.a.box},c.a.createElement("p",{className:g.a.text},"Find contacts by name"),c.a.createElement("input",{className:g.a.input,type:"text",value:e,onChange:function(t){return a(t.target.value)}}))},A=a(11),y=a.n(A),S=function(){return c.a.createElement("h1",{className:y.a.text},"Phonebook")},L=a(15),O=a.n(L),j=function(t){var e=t.alert;return c.a.createElement(p.a,{in:e,classNames:O.a,timeout:250,unmountOnExit:!0},c.a.createElement("div",{className:O.a.alert},c.a.createElement("h3",null,"Contact already exist!")))},w=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:"",alert:!1},t.handleAddContact=function(e){var a=e.name,n=e.number,c={id:Object(_.a)(),name:a,number:n},o=t.state.contacts.map((function(t){return t.name.toLowerCase()}));if(""===a||""===n)return c;o.includes(a.toLowerCase())?(t.setState({alert:!0}),setTimeout((function(){t.setState({alert:!1})}),2500)):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[c])}}))},t.handleRemoveContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilterContacts=function(e){t.setState({filter:e})},t.handleShowFilterContact=function(){var e=t.state,a=e.contacts,n=e.filter;return a.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))},t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,a=t.filter,n=t.alert,o=this.handleShowFilterContact();return c.a.createElement("div",null,c.a.createElement(p.a,{in:!0,appear:!0,timeout:500,classNames:y.a,unmountOnExit:!0},c.a.createElement(S,null)),c.a.createElement(j,{alert:n}),c.a.createElement(b,{onAddContact:this.handleAddContact}),c.a.createElement(p.a,{in:e.length>0,timeout:250,classNames:g.a,unmountOnExit:!0},c.a.createElement(F,{value:a,onChangeFilter:this.handleFilterContacts})),c.a.createElement(p.a,{in:e.length>0,timeout:250,classNames:x.a,unmountOnExit:!0},c.a.createElement(E,{contacts:o,onRemoveContact:this.handleRemoveContact})))}}]),a}(n.Component);r.a.render(c.a.createElement(w,null),document.getElementById("root"))},7:function(t,e,a){t.exports={box:"Filter_box__3dHUz",text:"Filter_text__38FID",input:"Filter_input__1sgt9",enter:"Filter_enter__ZIuM2",enterActive:"Filter_enterActive__FxMDo",exit:"Filter_exit__lbgHH",exitActive:"Filter_exitActive__15_5e"}}},[[21,1,2]]]);
//# sourceMappingURL=main.2cac55f7.chunk.js.map