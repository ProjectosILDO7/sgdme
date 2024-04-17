import{_ as N,P as Q,bm as q,r as k,j as x,o as A,S as n,G as g,H as V,I as f,J as l,bn as B,V as _,M as E,aW as r,$ as s,W as b,K as v}from"./index.9b6e026f.js";import{Q as S}from"./QForm.fa2fb28e.js";import{Q as M}from"./QPage.dd70dd7a.js";import{a as F,b as T}from"./QLayout.09699cc6.js";import{u as j}from"./useNotify.054ef273.js";import{u as L}from"./userApi.446ff058.js";import{u as R}from"./use-quasar.3743795d.js";import{b as W,i as D}from"./inputVisual.14accdd7.js";const G={name:"form-categoria",setup(){const{post:m,getById:a,update:y,remove:e,uploadImage:w}=L(),{notifyError:d,notifySuccess:o}=j(),i="escolas",C=Q(),U=R(),I=q(),u=k({nome:"",numero:"",num_decreto:"",provincia:"",municipio:"",natureza_escola:"",tipo_escola:"",salas_professores:"",salas_alunos:""}),c=x(()=>I.params.id);A(()=>{c.value&&z(i,c.value)});const P=async t=>{try{U.dialog({title:"Confirma\xE7\xE3o",message:`tens a certeza que pretendes eliminar a ${t.nome} ?`,cancel:!0,persistent:!0}).onOk(async()=>{n.show({message:"Apagando informa\xE7\xE3o da escola..."}),await e(i,t.id),C.push({name:"escolas"}),o("Escola apagada com sucesso")})}catch(p){d(p.message)}finally{n.hide()}},z=async(t,p)=>{try{n.show({message:"Carregando informa\xE7\xF5es"}),u.value=await a(t,p)}catch(h){d(h.message)}finally{n.hide()}};return{form:u,isUpdate:c,table:i,deletarItem:P,addItems:async()=>{try{c.value?(n.show({message:"Actualiza\xE7\xE3o em processamento"}),await y(i,u.value),o("Escola actualizada com sucesso")):(n.show({message:"Cadastro em processamento"}),await m(i,u.value),o("Escola cadastrada com sucesso"))}catch(t){d(t.message)}finally{n.hide(),C.push({name:"escolas"})}},btnConfig:W,inputConfig:D}}},H={class:"col-12 text-body3 text-center q-mt-lg"},J={class:"col-md-6 col-sm-6 col-xs-10 q-gutter-y-sm"};function K(m,a,y,e,w,d){return g(),V(F,null,{default:f(()=>[l(T,null,{default:f(()=>[l(M,{padding:""},{default:f(()=>[l(S,{class:"row justify-center",onSubmit:B(e.addItems,["prevent"])},{default:f(()=>[_("p",H,E(e.isUpdate?"Actualizar dados da escola":"Cadastro de Escolas"),1),_("div",J,[l(r,s({modelValue:e.form.nome,"onUpdate:modelValue":a[0]||(a[0]=o=>e.form.nome=o),label:"Nome da escola",class:"col-12",rules:[o=>o&&o.length>0||"Porfavor digite o nome da escola"]},{...e.inputConfig}),null,16,["modelValue","rules"]),l(r,s({modelValue:e.form.numero,"onUpdate:modelValue":a[1]||(a[1]=o=>e.form.numero=o),label:"N\xBA da escola",class:"col-6",rules:[o=>o&&o.length>0||"Porfavor digite o n\xBA da escola"]},{...e.inputConfig}),null,16,["modelValue","rules"]),l(r,s({modelValue:e.form.num_decreto,"onUpdate:modelValue":a[2]||(a[2]=o=>e.form.num_decreto=o),label:"N\xBA do decreto",class:"col-6",rules:[o=>o&&o.length>0||"Porfavor digite o n\xBA do decreto de cria\xE7\xE3o"]},{...e.inputConfig}),null,16,["modelValue","rules"]),l(r,s({modelValue:e.form.provincia,"onUpdate:modelValue":a[3]||(a[3]=o=>e.form.provincia=o),label:"Provincia",class:"col-6",rules:[o=>o&&o.length>0||"Porfavor informe o nome da prov\xEDncia"]},{...e.inputConfig}),null,16,["modelValue","rules"]),l(r,s({modelValue:e.form.municipio,"onUpdate:modelValue":a[4]||(a[4]=o=>e.form.municipio=o),label:"Munic\xEDpio",class:"col-6",rules:[o=>o&&o.length>0||"Porfavor informe o nome do munic\xEDpio"]},{...e.inputConfig}),null,16,["modelValue","rules"]),l(r,s({modelValue:e.form.natureza_escola,"onUpdate:modelValue":a[5]||(a[5]=o=>e.form.natureza_escola=o),label:"Natureza da escola",class:"col-6",rules:[o=>o&&o.length>0||"Porfavor informe a natureza da escola"]},{...e.inputConfig}),null,16,["modelValue","rules"]),l(r,s({modelValue:e.form.tipo_escola,"onUpdate:modelValue":a[6]||(a[6]=o=>e.form.tipo_escola=o),label:"Tipo de escola",class:"col-6",rules:[o=>o&&o.length>0||"Porfavor informe o tipo de escola"]},{...e.inputConfig}),null,16,["modelValue","rules"]),l(r,s({modelValue:e.form.salas_professores,"onUpdate:modelValue":a[7]||(a[7]=o=>e.form.salas_professores=o),label:"Total de salas de professores",class:"col-6",rules:[o=>o&&o.length>0||"N\xBA total de salas de professores"]},{...e.inputConfig}),null,16,["modelValue","rules"]),l(r,s({modelValue:e.form.salas_alunos,"onUpdate:modelValue":a[8]||(a[8]=o=>e.form.salas_alunos=o),label:"Total de salas de alunos",class:"col-6",rules:[o=>o&&o.length>0||"N\xBA total de salas de alunos"]},{...e.inputConfig}),null,16,["modelValue","rules"]),l(b,s({type:"submit",icon:e.isUpdate?"mdi-file-edit-outline":"mdi-content-save-all",color:"info",class:"full-width",label:e.isUpdate?"Actualizar escola":"Cadastrar escola"},{...e.btnConfig}),null,16,["icon","label"]),m.$q.platform.is.mobile&&e.isUpdate?(g(),V(b,{key:0,onClick:a[9]||(a[9]=o=>e.deletarItem(e.form)),icon:"mdi-delete-empty",color:"secondary",class:"full-width",label:"Apagar escola"})):v("",!0),m.$q.platform.is.mobile?(g(),V(b,s({key:1,icon:"mdi-format-list-bulleted",class:"full-width q-pa-sm",label:"Lista de escolas",to:{name:"escolas"}},{...e.btnConfig}),null,16)):v("",!0)])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})}var so=N(G,[["render",K],["__scopeId","data-v-df0acec0"]]);export{so as default};
