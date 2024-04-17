import{_ as L,r as u,G as i,H as d,I as s,J as o,aR as P,V as e,T as y,L as l,M as n,aQ as K,q as C,W as r,aS as $,bj as J,F as X,O as Z,P as ee,o as oe,R as B,U as M,aW as se,$ as N,Q as te,K as x,X as V,Y as ae,Z as le}from"./index.9b6e026f.js";import{Q as ne}from"./QSpace.1e9c00dd.js";import{Q as ce,a as F}from"./QTable.fefda4d9.js";import{Q as A}from"./QTooltip.0ae175a9.js";import{a as v,Q as h}from"./QMenu.095f5cf5.js";import{Q as b}from"./QItemLabel.1b5bf3c5.js";import{Q as S}from"./QList.1b4506e2.js";import{Q as ie}from"./QBtnDropdown.641bb6ef.js";import{Q as de}from"./QPageSticky.b8b6576a.js";import{Q as re}from"./QPage.dd70dd7a.js";import{a as me,b as _e}from"./QLayout.09699cc6.js";import{C as w}from"./ClosePopup.c3e826b1.js";import{u as ue}from"./userApi.446ff058.js";import{u as fe}from"./useNotify.054ef273.js";import{u as z}from"./use-quasar.3743795d.js";import{f as ge}from"./formatCurrency.6090a7ed.js";import{b as he,i as pe}from"./inputVisual.14accdd7.js";import{s as be}from"./vue-json-excel.esm.8de2651d.js";import"./QSelect.b4606625.js";import"./rtl.b51694b1.js";import"./use-fullscreen.bfe633e1.js";import"./selection.db7c3400.js";const ye=[{name:"img_url",label:"Imagem",align:"left",field:"img_url",sortable:!0},{name:"nome",label:"Nome completo",align:"left",field:"nome",sortable:!0},{name:"num_bilhete",label:"N\xBA do bilhete",align:"left",field:"num_bilhete",sortable:!0},{name:"num_agente",label:"N\xBA de agente",align:"left",field:"num_agente",sortable:!0},{name:"habilitacao",label:"Habilita\xE7\xE3o",align:"left",field:"habilitacao",sortable:!0},{name:"actions",label:"Op\xE7\xF5es",align:"left",field:"actions"}],xe={name:"modalDetail",props:{itens:{type:Object},show:{type:Boolean,required:!0}},setup(t,{emit:f}){const a=u([]);return z(),{handClose:()=>{f("closeModal")},funcionarios:a,formatCurrency:ge}}},ve={class:"text-h6"},Ce={class:"row q-gutter-y-sm"},we={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-6"},ke={class:"text-body1"},Qe={class:"text-blue-grey-5"},De={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-6"},qe={class:"text-body1"},Ne={class:"text-blue-grey-5"},Ae={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-6"},Ie={class:"text-body1"},Ee={class:"text-blue-grey-5"},Pe={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-6"},Be={class:"text-body1"},Me={class:"text-blue-grey-5"},Ve={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-6"},Fe={class:"text-body1"},Se={class:"text-blue-grey-5"},Le={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-6"},ze={class:"text-body1"},Te={class:"text-blue-grey-5"},Oe={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-6"},Ye={class:"text-body1"},He={class:"text-blue-grey-5"},Re={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-6"},Ue={class:"text-body1"},We={class:"text-blue-grey-5"},je={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-6"},Ge={class:"text-body1"},Ke={class:"text-blue-grey-5"},$e={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-6"},Je={class:"text-body1"},Xe={class:"text-blue-grey-5"},Ze={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-6"},eo={class:"text-body1"},oo={class:"text-blue-grey-5"},so={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-6"},to={class:"text-body1"},ao={class:"text-blue-grey-5"},lo={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-6"},no={class:"text-body1"},co={class:"text-green-10"},io={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-6"},ro={class:"text-body1"},mo={class:"text-green-10"},_o={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-6"},uo={class:"text-body1"},fo={class:"text-blue-grey-5"},go={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-6"},ho={class:"text-body1"},po={class:"text-blue-grey-5"},bo={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-6"},yo={class:"text-body1"},xo={class:"text-blue-grey-5"},vo={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-6"},Co={class:"text-body1"},wo={class:"text-blue-grey-5"},ko={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-6"},Qo={class:"text-body1"},Do={class:"text-blue-grey-5"},qo={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-6"},No={class:"text-body1"},Ao={class:"text-blue-grey-5"},Io={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-6"},Eo={class:"text-body1"},Po={class:"text-blue-grey-5"},Bo={class:"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-6"},Mo={class:"text-body1"},Vo={class:"text-blue-grey-5"},Fo={class:"col-xs-12 col-sm-12 col-12"},So={class:"text-body1"},Lo={class:"text-red-5"};function zo(t,f,a,g,k,Q){return i(),d(J,{"model-value":a.show,persistent:"","full-width":t.$q.platform.mobile},{default:s(()=>[o($,{style:{width:"700px","max-width":"80vw"}},{default:s(()=>[o(P,null,{default:s(()=>[e("div",ve,[o(y,{icon:"mdi-account-details"}),l(" Mais detalhes ")])]),_:1}),o(P,{class:"q-pt-none"},{default:s(()=>[e("div",Ce,[e("div",we,[e("span",ke,[l("Nome completo: "),e("span",Qe,n(a.itens.nome),1)])]),e("div",De,[e("span",qe,[l("Nome do pai: "),e("span",Ne,n(a.itens.nome_pai),1)])]),e("div",Ae,[e("span",Ie,[l("Nome da ma\xEA: "),e("span",Ee,n(a.itens.nome_mae),1)])]),e("div",Pe,[e("span",Be,[l("N\xBA do Bilhete: "),e("span",Me,n(a.itens.num_bilhete),1)])]),e("div",Ve,[e("span",Fe,[l("Data de emiss\xE3o: "),e("span",Se,n(a.itens.data_emissao),1)])]),e("div",Le,[e("span",ze,[l("Data de validade: "),e("span",Te,n(a.itens.data_caducidade),1)])]),e("div",Oe,[e("span",Ye,[l("Data de nascimento: "),e("span",He,n(a.itens.data_nascimento),1)])]),e("div",Re,[e("span",Ue,[l("Prov\xEDncia: "),e("span",We,n(a.itens.provincia),1)])]),e("div",je,[e("span",Ge,[l("Munic\xEDpio: "),e("span",Ke,n(a.itens.municipio),1)])]),e("div",$e,[e("span",Je,[l("Comuna: "),e("span",Xe,n(a.itens.comuna),1)])]),e("div",Ze,[e("span",eo,[l("Localidade/Bairro: "),e("span",oo,n(a.itens.localidade),1)])]),e("div",so,[e("span",to,[l("Categoria: "),e("span",ao,n(a.itens.categorias.categoria),1)])]),e("div",lo,[e("span",no,[l("Vencimento Base: "),e("span",co,n(g.formatCurrency(a.itens.salario_base)),1)])]),e("div",io,[e("span",ro,[l("Vencimento Liquido: "),e("span",mo,n(g.formatCurrency(a.itens.salario_liquido)),1)])]),e("div",_o,[e("span",uo,[l("Habilita\xE7\xE3o Liter\xE1: "),e("span",fo,n(a.itens.habilitacao),1)])]),e("div",go,[e("span",ho,[l("\xC1rea de forma\xE7\xE3o: "),e("span",po,n(a.itens.area_formacao),1)])]),e("div",bo,[e("span",yo,[l("Instituto onde se formou: "),e("span",xo,n(a.itens.instituto_formacao),1)])]),e("div",vo,[e("span",Co,[l("N\xBA de agente: "),e("span",wo,n(a.itens.num_agente),1)])]),e("div",ko,[e("span",Qo,[l("Escola onde foi colocado: "),e("span",Do,n(a.itens.escolas.nome),1)])]),e("div",qo,[e("span",No,[l("G\xEAnero: "),e("span",Ao,n(a.itens.genero),1)])]),e("div",Io,[e("span",Eo,[l("Data de in\xEDcio de fun\xE7\xF5es: "),e("span",Po,n(a.itens.data_inicio_funcao),1)])]),e("div",Bo,[e("span",Mo,[l("Total de tempo em servi\xE7o: "),e("span",Vo,n(new Date().getFullYear()-new Date(a.itens.data_inicio_funcao).getFullYear()),1)])]),e("div",Fo,[e("span",So,[l("Total de tempo em falta para reforma: "),e("span",Lo,n(35-(new Date().getFullYear()-new Date(a.itens.data_inicio_funcao).getFullYear()))+" Anos",1)])])])]),_:1}),o(K,{align:"right",class:"bg-white text-teal"},{default:s(()=>[C(o(r,{flat:"",label:"OK",onClick:g.handClose},null,8,["onClick"]),[[w]])]),_:1})]),_:1})]),_:1},8,["model-value","full-width"])}var To=L(xe,[["render",zo]]);const Oo={"Nome completo":"nome","Nome do Pai":"nome_pai","Nome da ma\xEA":"nome_mae","N\xBA do bilhete":"num_bilhete","Data de emiss\xE3o":"data_emissao","Data de validade":"data_caducidade","Data de nascimento":"data_nascimento",Prov\u00EDncia:"provincia",Munic\u00EDpio:"municipio",Comuna:"comuna","Localidade/Bairro":"localidade",Categorias:"categorias.categoria",Habilita\u00E7\u00E3o:"habilitacao","\xC1rea de forma\xE7\xE3o":"area_formacao","Instituto onde se formou":"instituto_formacao","N\xBA de agente":"num_agente","N\xBA de agente":"num_agente","Escola onde colocado":"escolas.nome"};const Yo=X({components:{detalhesComponent:To,DownloadExcel:be},setup(){const t=u([]),f=u(""),{remove:a,getFuncionariosWithCategoriasAndEscolas:g}=ue(),k=Z(),Q=ee(),D="sgdme",p=u(!1),c=z(),m=u([]),T=u(!1),O=u(""),I="funcionarios",{notifyError:Y,notifySuccess:H}=fe(),E=u([]),R=_=>{m.value=_,p.value=!0},U=()=>{p.value=!1},W=async _=>{try{c.dialog({title:"Confirma\xE7\xE3o",message:`tens a certeza que pretendes eliminar ${_.nome} ?`,cancel:!0,persistent:!0}).onOk(async()=>{c.loading.show({message:"Apagando dados do funcion\xE1rios..."}),await a(I,_.id),q(),H("Dados do funcion\xE1rio apagado com sucesso")})}catch(G){Y(G.message)}finally{c.loading.hide()}},j=_=>{Q.push({name:"form-funcionario",params:{id:_.id}})};oe(()=>{q()});const q=async()=>{try{E.value=await g(I)}catch(_){console.log(_)}finally{}};return{columns:ye,alterarItem:j,deletarItem:W,funcionarios:t,storage:D,token:k,detalhes:R,card:T,itensDetails:f,itens:m,handleShowDetail:p,btnConfig:he,inputConfig:pe,fields:Oo,listarFuncionariosComCategoria:q,funcionarioCategoriasAndEscolas:E,filter:O,closeModal:U}}}),Ho={key:0,class:"row"},Ro=["src"],Uo={class:"row text-body3 text-h5 flex-center q-pa-lg bg-secondary text-white"},Wo=["src"],jo={class:"secondary"};function Go(t,f,a,g,k,Q){const D=B("download-excel"),p=B("detalhes-component");return i(),d(me,null,{default:s(()=>[o(_e,null,{default:s(()=>[o(re,{padding:""},{default:s(()=>[t.$q.platform.is.desktop?(i(),M("div",Ho,[o(ce,{rows:t.funcionarioCategoriasAndEscolas,flat:"",bordered:"",columns:t.columns,"row-key":"id",class:"col-12","virtual-scroll":""},{top:s(()=>[o(se,N({dense:"",type:"text",label:"Pesquisar",modelValue:t.filter,"onUpdate:modelValue":f[0]||(f[0]=c=>t.filter=c)},{...t.inputConfig}),{prepend:s(()=>[o(te,{name:"mdi-magnify"})]),_:1},16,["modelValue"]),o(ne),t.$q.platform.is.desktop?(i(),d(r,N({key:0,icon:"mdi-plus",label:"Cadastrar novo funcionario",to:{name:"form-funcionario"}},{...t.btnConfig}),null,16)):x("",!0),o(D,{data:t.funcionarioCategoriasAndEscolas,fields:t.fields,worksheet:"funcionarios",name:"Funcionarios.xls",class:"q-ml-md"},{default:s(()=>[o(r,N({icon:"mdi-file-excel",label:"Exportar uma lista"},{...t.btnConfig}),null,16)]),_:1},8,["data","fields"])]),"body-cell-img_url":s(c=>[o(F,{props:c,class:"text-center"},{default:s(()=>[c.row.img_url?(i(),d(y,{key:0},{default:s(()=>[e("img",{src:c.row.img_url},null,8,Ro)]),_:2},1024)):(i(),d(y,{key:1,color:"secondary","text-color":"white",icon:"mdi-image-off",class:"flex-center"}))]),_:2},1032,["props"])]),"body-cell-actions":s(c=>[o(F,{props:c,class:"q-gutter-x-sm text-center"},{default:s(()=>[o(r,{icon:"mdi-eye-outline",color:"grey",dense:"",size:"sm",onClick:m=>t.detalhes(c.row)},{default:s(()=>[o(A,null,{default:s(()=>[l("Ver detalhes")]),_:1})]),_:2},1032,["onClick"]),o(r,{icon:"mdi-pencil-outline",color:"info",dense:"",size:"sm",onClick:m=>t.alterarItem(c.row)},{default:s(()=>[o(A,null,{default:s(()=>[l("Alterar")]),_:1})]),_:2},1032,["onClick"]),o(r,{icon:"mdi-delete-outline",color:"negative",dense:"",size:"sm",onClick:m=>t.deletarItem(c.row)},{default:s(()=>[o(A,null,{default:s(()=>[l("Apagar")]),_:1})]),_:2},1032,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])])):x("",!0),t.$q.platform.is.mobile&&t.funcionarioCategoriasAndEscolas!=""?(i(),d(S,{key:1,bordered:""},{default:s(()=>[e("div",Uo,[o(r,{flat:"",icon:"mdi-account-tie",label:"Funcion\xE1rios"})]),o(V),(i(!0),M(le,null,ae(t.funcionarioCategoriasAndEscolas,c=>(i(),d(v,{key:c.id,class:"q-mb-sm q-mt-sm"},{default:s(()=>[o(h,{avatar:""},{default:s(()=>[c.img_url?(i(),d(y,{key:0},{default:s(()=>[e("img",{src:c.img_url},null,8,Wo)]),_:2},1024)):(i(),d(y,{key:1,color:"grey","text-color":"white",icon:"mdi-image-off"}))]),_:2},1024),o(h,null,{default:s(()=>[o(b,null,{default:s(()=>[l(n(c.nome),1)]),_:2},1024),o(b,{caption:"",lines:"1"},{default:s(()=>[l("N\xBA de agente: "),e("strong",jo,n(c.num_agente),1)]),_:2},1024)]),_:2},1024),o(h,{side:"",top:""},{default:s(()=>[e("div",null,[o(ie,{flat:"","dropdown-icon":"mdi-dots-vertical","no-icon-animation":""},{default:s(()=>[o(S,null,{default:s(()=>[C((i(),d(v,{clickable:"",onClick:m=>t.alterarItem(c)},{default:s(()=>[o(h,null,{default:s(()=>[o(b,null,{default:s(()=>[o(r,{dense:"",flat:"",size:"sm","no-caps":"",icon:"mdi-file-edit",color:"green-10",label:"Alterar"})]),_:1})]),_:1})]),_:2},1032,["onClick"])),[[w]]),C((i(),d(v,{clickable:"",onClick:m=>t.detalhes(c)},{default:s(()=>[o(h,null,{default:s(()=>[o(b,null,{default:s(()=>[o(r,{dense:"",flat:"",size:"sm",label:"Mais detalhes",icon:"mdi-eye-outline",color:"blue-grey-8"})]),_:1})]),_:1})]),_:2},1032,["onClick"])),[[w]]),C((i(),d(v,{clickable:"",onClick:m=>t.deletarItem(c)},{default:s(()=>[o(h,null,{default:s(()=>[o(b,null,{default:s(()=>[o(r,{dense:"",flat:"",size:"sm",label:"Apagar",icon:"mdi-delete-circle-outline",color:"red-8"})]),_:1})]),_:1})]),_:2},1032,["onClick"])),[[w]])]),_:2},1024)]),_:2},1024)])]),_:2},1024),o(V)]),_:2},1024))),128))]),_:1})):x("",!0),t.$q.platform.is.mobile?(i(),d(de,{key:2,class:"margin-bottom",position:"bottom-right",offset:[18,18]},{default:s(()=>[o(r,{fab:"",icon:"mdi-plus",color:"primary",to:{name:"form-funcionario"}})]),_:1})):x("",!0),o(p,{show:t.handleShowDetail,itens:t.itens,onCloseModal:t.closeModal},null,8,["show","itens","onCloseModal"])]),_:1})]),_:1})]),_:1})}var ps=L(Yo,[["render",Go],["__scopeId","data-v-1104fee2"]]);export{ps as default};
