import{_ as se,r as n,bm as le,j as f,o as ce,G as i,U as s,K as d,V as e,M as l,L as M,J,X as H,aT as re,aU as de}from"./index.9b6e026f.js";import{h as ue}from"./html2pdf.f9313edb.js";import"./userApi.446ff058.js";import{u as _e}from"./use-quasar.3743795d.js";import{h as m}from"./moment.40bc58bf.js";import"./num2words.52f8f1da.js";import{f as me}from"./formatCurrency.6090a7ed.js";import"./_commonjsHelpers.2cf1d77b.js";const ve={setup(){const u=n(null),v=le(),D=_e(),o=n(""),b=n(""),p=n(""),C=n(""),S=n(""),P=n(""),g=n(""),I=n(""),O=n(null),z=new Date().toJSON().slice(0,4),w=n(""),_=n(),k=n(""),L=n(""),y=/(\b\w+a\b|\b\w+ão\b|\b\w+ões\b)$/,R=/^[E]/i,V=/^[H]/i,E=/^[BCKHNMUZ]/i,F=/(\b\w+a\b)/i,G=/(\b\w+o\b)/i,j=/(\b\w+e\b|\b\w+l)/i,Y=/(\b\w+o\b|\b\w+os\b|\b\w+ei\b)$/,x=/(\b\w+e\b|\b\w+es\b)$/,K=/(\b\w+E\b|\b\w+S\b|\b\w+e\b|\b\w+s\b)$/,T=()=>{try{D.loading.show();const h=window.document.getElementById("elemento-para-pdf");ue().from(h).set({margin:.89,filename:"Testifica\xE7\xE3o.pdf",html2canvas:{scale:2},jsPDF:{unit:"in",format:"letter",orientation:"portrait"}}).toPdf().get("pdf").then(r=>{const X=r.internal.getNumberOfPages();for(let N=1;N<=X;N++){r.setPage(N);const A=r.internal.pageSize.width,U=.55,ee=.55,oe=(A-U)/2,te=.3,B=8,ae=.51,ne=A-B-.1,ie=r.internal.pageSize.height-.6;r.addImage("../../../../../../public/icons/ensigna.jpg","PNG",oe,te,U,ee),r.setFontSize(10),r.setTextColor(150),r.addImage("../../../../../../public/icons/RodapeIMG.png","PNG",ne,ie,B,ae)}const Z=new Blob([r.output("blob")],{type:"application/pdf"}),$=URL.createObjectURL(Z);u.value=$})}catch(h){console.log(h.message)}finally{D.loading.hide()}},a=f(()=>JSON.parse(v.params.dados)),c=f(()=>JSON.parse(v.params.addInfo)),Q=f(()=>v.params.model2),q=f(()=>v.params.model),W=f(()=>converterParaExtenso(a.value[0].salario_base));return ce(()=>{if(T(),m.updateLocale("pt-br",{months:["Janeiro","Fevereiro","Mar\xE7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]}),O.value=m().format("D [de] MMMM [de] YYYY"),C.value=m(a.value[0].data_nascimento).format("D [de] MMMM [de] YYYY"),k.value=m(c.value.calendary).format("D [de] MMMM [de] YYYY"),S.value=m(a.value[0].data_emissao).format("D [de] MMMM [de] YYYY"),P.value=m(a.value[0].data_inicio_funcao).format("D [de] MMMM [de] YYYY"),y.test(a.value[0].comuna)?(o.value="da",console.log(a.value[0].comuna)):Y.test(a.value[0].comuna)?o.value="do":x.test(a.value[0].comuna)&&(o.value="de"),V.test(c.value.provincia)&&F.test(c.value.provincia)?_.value="da":E.test(c.value.provincia)&&F.test(c.value.provincia)?_.value="de":E.test(c.value.provincia)&&G.test(c.value.provincia)?_.value="do":(E.test(c.value.provincia)&&j.test(c.value.provincia),_.value="de"),R.test(c.value.escola_id)?w.value="na":w.value="no",y.test(a.value[0].municipio)?b.value="da":Y.test(a.value[0].municipio)?b.value="do":x.test(a.value[0].municipio)&&(b.value="de"),y.test(a.value[0].provincia)?p.value="da":Y.test(a.value[0].provincia)?p.value="do":x.test(a.value[0].provincia)&&(p.value="de"),K.test(a.value[0].instituto_formacao)?I.value="no":I.value="na",a.value[0].habilitacao=="licenciada"||a.value[0].habilitacao=="licenciado")g.value="a licenciatura";else{const h=/(\b\w+o\b)$/,r=/(\b\w+e\b)$/;h.test(a.value[0].habilitacao)&&(g.value="o "+a.value[0].habilitacao),r.test(a.value[0].habilitacao)&&(g.value="a "+a.value[0].habilitacao)}}),{salarioPorExtenso:L,pdfSrc:u,gerarPDF:T,dataNascimento:C,dataEmissao:S,dataInicioFuncao:P,artigoComuna:o,artigoMunicipio:b,artigoProvincia:p,artigoComHabiltacao:g,artigoInstituicao:I,addInfo:c,dados:a,data:O,model2:Q,model:q,dateNowYear:z,artigoQantecedEscola:w,artigoQueAntecedeDonomeDaProvincia:_,formatCurrency:me,moedaPorExtenso:W,dataDeFeria:k}}},t=u=>(re("data-v-227477ba"),u=u(),de(),u),be=["src"],pe={style:{display:"none"}},he={id:"elemento-para-pdf",class:"StyleFontDocument alignTextJustify"},fe={class:"row",style:{"line-height":"1.5"}},ge={class:"col-4 text-center"},Me={class:"col-12 text-center",style:{"line-height":"1.5"}},De={key:0},Ie=t(()=>e("b",null,"O Director Municipal",-1)),we=[Ie],ye={key:0},Ee=t(()=>e("b",null,"Na ausencia do Director Municipal",-1)),Ye=[Ee],xe=t(()=>e("br",null,null,-1)),Ne=t(()=>e("br",null,null,-1)),Ce={key:0,class:"q-pa-md"},Se=t(()=>e("br",null,null,-1)),Pe={key:0},Oe=t(()=>e("br",null,null,-1)),ke={key:0,class:"text-small"},Fe=t(()=>e("div",{class:"col-4 text-center"},"Rep\xFAblica de Angola",-1)),Te=t(()=>e("div",{class:"col-4 text-center"},null,-1)),Ae={class:"row"},Ue={class:"col-12 text-center"},Be={class:"row"},Je={class:"col-12 text-center"},He=t(()=>e("br",null,null,-1)),ze=t(()=>e("br",null,null,-1)),Le=t(()=>e("br",null,null,-1)),Re=t(()=>e("br",null,null,-1)),Ve={class:"top-subtitle"},Ge={class:"col-12",style:{"line-height":"1.5"}},je=t(()=>e("br",null,null,-1)),Ke={class:"StyleFontDocument"},Qe={class:"col-12 text-center"},qe=t(()=>e("br",null,null,-1)),We=t(()=>e("br",null,null,-1)),Xe={class:"col-12 text-center",style:{"line-height":"1.5"}},Ze=t(()=>e("br",null,null,-1)),$e=t(()=>e("br",null,null,-1)),eo=t(()=>e("br",null,null,-1)),oo={key:0},to=t(()=>e("b",null,"O Director Municipal",-1)),ao=[to],no={key:0},io=t(()=>e("b",null,"Na ausencia do Director Municipal",-1)),so=[io],lo=t(()=>e("br",null,null,-1)),co=t(()=>e("br",null,null,-1)),ro={key:0,class:"q-pa-md"},uo=t(()=>e("br",null,null,-1)),_o={key:0},mo=t(()=>e("br",null,null,-1)),vo={key:0,class:"text-small"};function bo(u,v,D,o,b,p){return i(),s("div",null,[o.pdfSrc?(i(),s("iframe",{key:0,src:o.pdfSrc,style:{width:"100%",height:"800px"}},null,8,be)):d("",!0),e("div",pe,[e("div",he,[e("div",fe,[e("div",ge,[e("div",Me,[e("b",null,[o.model=="Director Municipal"?(i(),s("span",De,we)):d("",!0)]),e("b",null,[o.model=="Director Interino"?(i(),s("span",ye,Ye)):d("",!0)]),xe,Ne,o.model=="Director Municipal"?(i(),s("span",Ce,l(o.addInfo.directoMunicipal),1)):d("",!0),Se,e("b",null,[o.model=="Director Interino"?(i(),s("span",Pe,l(o.addInfo.directoMunicipal_interino),1)):d("",!0),Oe]),e("p",null,[e("b",null,[o.model=="Director Interino"?(i(),s("span",ke," ("+l(o.addInfo.directoMunicipal_interino_funcao)+") ",1)):d("",!0)])])])]),Fe,Te]),e("div",Ae,[e("div",Ue,[e("b",null,"Direc\xE7\xE3o Municipal da Educa\xE7\xE3o "+l(o.artigoMunicipio)+" "+l(o.addInfo.municipio),1)])]),e("div",Be,[e("div",Je,[He,ze,e("b",null,"GUIA M\xC9DICA N\xBA_______/"+l(o.dateNowYear),1),Le,Re,e("span",Ve," Vai apresentar-se ao "+l(o.addInfo.hospital),1)]),e("div",Ge,[je,e("pre",Ke,[M(`   Nome do benefici\xE1rio:
   Situa\xE7\xE3o:
   Categoria:
   Provimentos mensais do agregado familiar
   Kz
   `),J(H,{size:"2px",color:"black",inset:"",class:"line-mais-tope"}),M(`
   Elementos referentes ao benefici\xE1rio:
   `),e("p",null,[J(H)]),M(`
            `)])]),e("div",Qe,[qe,We,M(" DIREC\xC7\xC3O MUNICIPAL DA EDUCA\xC7\xC3O NO "+l(o.addInfo.municipio)+", "+l(o.data)+". ",1)]),e("div",Xe,[Ze,$e,eo,e("b",null,[o.model=="Director Municipal"?(i(),s("span",oo,ao)):d("",!0)]),e("b",null,[o.model=="Director Interino"?(i(),s("span",no,so)):d("",!0)]),lo,co,o.model=="Director Municipal"?(i(),s("span",ro,l(o.addInfo.directoMunicipal),1)):d("",!0),uo,e("b",null,[o.model=="Director Interino"?(i(),s("span",_o,l(o.addInfo.directoMunicipal_interino),1)):d("",!0),mo]),e("p",null,[e("b",null,[o.model=="Director Interino"?(i(),s("span",vo," ("+l(o.addInfo.directoMunicipal_interino_funcao)+") ",1)):d("",!0)])])])])])])])}var yo=se(ve,[["render",bo],["__scopeId","data-v-227477ba"]]);export{yo as default};