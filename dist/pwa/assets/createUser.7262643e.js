import{_ as p,O as g,P as h,r as y,G as V,H as w,I as r,S as d,J as a,bn as _,V as c,aW as t,Q as n,W as m}from"./index.9b6e026f.js";import{Q as b}from"./QForm.fa2fb28e.js";import{Q as P}from"./QPage.dd70dd7a.js";import{a as Q,b as U}from"./QLayout.09699cc6.js";import{u as q}from"./useNotify.054ef273.js";import"./use-quasar.3743795d.js";const x={name:"form-login",setup(){const{register:i}=g(),{notifyError:l,notifySuccess:u}=q(),o=h(),s=y({email:"",password:"",name:"",phone:"",photoURL:""});return{form:s,createUser:async()=>{try{d.show({message:"Criando conta"}),await i(s.value),o.push({name:"email-confirmation",query:{email:s.value.email}}),u("conta criada com sucesso")}catch(e){l(e.message)}finally{d.hide()}}}}},v=c("p",{class:"col-12 text-h5 text-center q-mt-lg"},"Criar uma conta",-1),C={class:"col-md-4 col-sm-6 col-xs-10 q-gutter-y-sm"};function S(i,l,u,o,s,f){return V(),w(Q,null,{default:r(()=>[a(U,null,{default:r(()=>[a(P,{padding:""},{default:r(()=>[a(b,{class:"row justify-center",onSubmit:_(o.createUser,["prevent"])},{default:r(()=>[v,c("div",C,[a(t,{outlined:"",modelValue:o.form.name,"onUpdate:modelValue":l[0]||(l[0]=e=>o.form.name=e),label:"Nome da Institui\xE7\xE3o",class:"col-12","lazy-rules":"",rules:[e=>e&&e.length>0||"Porfavor digite seu nome"]},{prepend:r(()=>[a(n,{name:"mdi-account"})]),_:1},8,["modelValue","rules"]),a(t,{outlined:"",modelValue:o.form.email,"onUpdate:modelValue":l[1]||(l[1]=e=>o.form.email=e),label:"E-mail",class:"col-12","lazy-rules":"",rules:[e=>e&&e.length>0||"Porfavor digite seu e-mail"]},{prepend:r(()=>[a(n,{name:"mdi-email"})]),_:1},8,["modelValue","rules"]),a(t,{outlined:"",modelValue:o.form.phone,"onUpdate:modelValue":l[2]||(l[2]=e=>o.form.phone=e),label:"Telemovel",class:"col-12","lazy-rules":"",rules:[e=>e&&e.length>0||"Porfavor digite seu e-mail"]},{prepend:r(()=>[a(n,{name:"mdi-phone-dial"})]),_:1},8,["modelValue","rules"]),a(t,{outlined:"",modelValue:o.form.password,"onUpdate:modelValue":l[3]||(l[3]=e=>o.form.password=e),label:"Senha",type:"password",class:"col-12",rules:[e=>e!==null&&e!==""||"Porfavor digite sua senha",e=>e>0&&e>=6||"A sua senha deve ter maior ou igual a 6 caracteres"]},{prepend:r(()=>[a(n,{name:"mdi-key-chain"})]),_:1},8,["modelValue","rules"]),a(m,{type:"submit",label:"Criar conta",class:"full-width q-mt-lg",color:"primary","no-caps":"",icon:"mdi-account-tie"}),a(m,{to:{name:"resetPassword"},flat:"",label:"Esqueci minha senha",class:"full-width q-mt-md",color:"primary","no-caps":""}),a(m,{to:{name:"loginPage"},flat:"",label:"J\xE1 tenho uma conta",class:"full-width q-mt-md",color:"primary","no-caps":""})])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}var A=p(x,[["render",S]]);export{A as default};
