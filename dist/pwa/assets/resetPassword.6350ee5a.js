import{_ as d,O as u,r as f,G as p,H as h,I as o,J as a,bn as _,V as i,aW as g,Q as y,W as n}from"./index.9b6e026f.js";import{Q as w}from"./QForm.fa2fb28e.js";import{Q as v}from"./QPage.dd70dd7a.js";import{a as b,b as Q}from"./QLayout.09699cc6.js";import{u as P}from"./useNotify.054ef273.js";import{u as x}from"./use-quasar.3743795d.js";const q={name:"form-login",setup(){const{sendEmailResetPassword:t}=u(),{notifyError:r,notifySuccess:m}=P(),e=x(),l=f({email:""});return{form:l,sendEmailResetPassword:t,resetPassword:async()=>{try{e.loading.show({message:"Porfavor aguarde..."}),await t(l.value),m("Solicitou uma nova senha, porfavor verifique sua caixa de email")}catch(s){r(s.message)}finally{e.loading.hide()}}}}},E=i("p",{class:"col-12 text-h5 text-center q-mt-lg"},"Redefinir senha",-1),V={class:"col-md-4 col-sm-6 col-xs-10 q-gutter-y-sm"},B=i("p",{class:"text-body1"}," Esqueceu sua senha? sem problema vamos resolver. Informe-nos seu E-mail de seguida inviar\xE9mos um link de redefini\xE7\xE3o da sua senha ",-1);function I(t,r,m,e,l,c){return p(),h(b,null,{default:o(()=>[a(Q,null,{default:o(()=>[a(v,{padding:""},{default:o(()=>[a(w,{class:"row justify-center",onSubmit:_(e.resetPassword,["prevent"])},{default:o(()=>[E,i("div",V,[B,a(g,{outlined:"",modelValue:e.form.email,"onUpdate:modelValue":r[0]||(r[0]=s=>e.form.email=s),label:"E-mail",class:"col-12","lazy-rules":"",rules:[s=>s&&s.length>0||"Porfavor digite seu e-mail"]},{prepend:o(()=>[a(y,{name:"mdi-email"})]),_:1},8,["modelValue","rules"]),a(n,{icon:"send",type:"submit",label:"Enviar",class:"full-width q-mt-lg",color:"primary","no-caps":""}),a(n,{to:{name:"loginPage"},flat:"",label:"J\xE1 tenho uma conta",class:"full-width q-mt-md",color:"primary","no-caps":""}),a(n,{to:{name:"createUser"},flat:"",label:"Criar uma conta",class:"full-width q-mt-md",color:"primary","no-caps":""})])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}var R=d(q,[["render",I]]);export{R as default};