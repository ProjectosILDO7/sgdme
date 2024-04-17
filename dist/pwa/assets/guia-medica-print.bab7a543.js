import{_ as se,r as n,bm as le,j as f,o as ce,G as i,U as s,K as d,V as e,M as l,L as g,J,X as H,aT as re,aU as de}from"./index.a4d1c877.js";import{h as ue}from"./html2pdf.d2f60b38.js";import"./userApi.06ce55ee.js";import{u as _e}from"./use-quasar.0909d49a.js";import{h as m}from"./moment.40bc58bf.js";import"./num2words.21855ecc.js";import{f as me}from"./formatCurrency.6090a7ed.js";import"./_commonjsHelpers.2cf1d77b.js";const ve={setup(){const u=n(null),v=le(),D=_e(),o=n(""),b=n(""),h=n(""),C=n(""),S=n(""),P=n(""),M=n(""),I=n(""),O=n(null),z=new Date().toJSON().slice(0,4),w=n(""),_=n(),k=n(""),L=n(""),y=/(\b\w+a\b|\b\w+ão\b|\b\w+ões\b)$/,R=/^[E]/i,V=/^[H]/i,E=/^[BCKHNMUZ]/i,F=/(\b\w+a\b)/i,G=/(\b\w+o\b)/i,j=/(\b\w+e\b|\b\w+l)/i,Y=/(\b\w+o\b|\b\w+os\b|\b\w+ei\b)$/,x=/(\b\w+e\b|\b\w+es\b)$/,q=/(\b\w+E\b|\b\w+S\b|\b\w+e\b|\b\w+s\b)$/,T=()=>{try{D.loading.show();const p=window.document.getElementById("elemento-para-pdf");ue().from(p).set({margin:.89,filename:"Testifica\xE7\xE3o.pdf",html2canvas:{scale:2},jsPDF:{unit:"in",format:"letter",orientation:"portrait"}}).toPdf().get("pdf").then(r=>{const X=r.internal.getNumberOfPages();for(let N=1;N<=X;N++){r.setPage(N);const A=r.internal.pageSize.width,U=.55,ee=.55,oe=(A-U)/2,te=.3,B=8,ae=.51,ne=A-B-.1,ie=r.internal.pageSize.height-.6;r.addImage("../../../../../../public/icons/ensigna.jpg","PNG",oe,te,U,ee),r.setFontSize(10),r.setTextColor(150),r.addImage("../../../../../../public/icons/RodapeIMG.png","PNG",ne,ie,B,ae)}const Z=new Blob([r.output("blob")],{type:"application/pdf"}),$=URL.createObjectURL(Z);u.value=$})}catch(p){console.log(p.message)}finally{D.loading.hide()}},a=f(()=>JSON.parse(v.params.dados)),c=f(()=>JSON.parse(v.params.addInfo)),K=f(()=>v.params.model2),Q=f(()=>v.params.model),W=f(()=>converterParaExtenso(a.value[0].salario_base));return ce(()=>{if(T(),m.updateLocale("pt-br",{months:["Janeiro","Fevereiro","Mar\xE7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]}),O.value=m().format("D [de] MMMM [de] YYYY"),C.value=m(a.value[0].data_nascimento).format("D [de] MMMM [de] YYYY"),k.value=m(c.value.calendary).format("D [de] MMMM [de] YYYY"),S.value=m(a.value[0].data_emissao).format("D [de] MMMM [de] YYYY"),P.value=m(a.value[0].data_inicio_funcao).format("D [de] MMMM [de] YYYY"),y.test(a.value[0].comuna)?(o.value="da",console.log(a.value[0].comuna)):Y.test(a.value[0].comuna)?o.value="do":x.test(a.value[0].comuna)&&(o.value="de"),V.test(c.value.provincia)&&F.test(c.value.provincia)?_.value="da":E.test(c.value.provincia)&&F.test(c.value.provincia)?_.value="de":E.test(c.value.provincia)&&G.test(c.value.provincia)?_.value="do":(E.test(c.value.provincia)&&j.test(c.value.provincia),_.value="de"),R.test(c.value.escola_id)?w.value="na":w.value="no",y.test(a.value[0].municipio)?b.value="da":Y.test(a.value[0].municipio)?b.value="do":x.test(a.value[0].municipio)&&(b.value="de"),y.test(a.value[0].provincia)?h.value="da":Y.test(a.value[0].provincia)?h.value="do":x.test(a.value[0].provincia)&&(h.value="de"),q.test(a.value[0].instituto_formacao)?I.value="no":I.value="na",a.value[0].habilitacao=="licenciada"||a.value[0].habilitacao=="licenciado")M.value="a licenciatura";else{const p=/(\b\w+o\b)$/,r=/(\b\w+e\b)$/;p.test(a.value[0].habilitacao)&&(M.value="o "+a.value[0].habilitacao),r.test(a.value[0].habilitacao)&&(M.value="a "+a.value[0].habilitacao)}}),{salarioPorExtenso:L,pdfSrc:u,gerarPDF:T,dataNascimento:C,dataEmissao:S,dataInicioFuncao:P,artigoComuna:o,artigoMunicipio:b,artigoProvincia:h,artigoComHabiltacao:M,artigoInstituicao:I,addInfo:c,dados:a,data:O,model2:K,model:Q,dateNowYear:z,artigoQantecedEscola:w,artigoQueAntecedeDonomeDaProvincia:_,formatCurrency:me,moedaPorExtenso:W,dataDeFeria:k}}},t=u=>(re("data-v-73026877"),u=u(),de(),u),be=["src"],he={style:{display:"none"}},pe={id:"elemento-para-pdf",class:"StyleFontDocument alignTextJustify"},fe={class:"row",style:{"line-height":"1.5"}},ge={class:"col-4 text-center"},Me={class:"col-12 text-center",style:{"line-height":"1.5"}},De={key:0},Ie=t(()=>e("b",null,"O Director Municipal",-1)),we=[Ie],ye={key:0},Ee=t(()=>e("b",null,"Na ausencia do Director Municipal",-1)),Ye=[Ee],xe=t(()=>e("br",null,null,-1)),Ne=t(()=>e("br",null,null,-1)),Ce={key:0,class:"q-pa-md"},Se=t(()=>e("br",null,null,-1)),Pe={key:0},Oe=t(()=>e("br",null,null,-1)),ke={key:0,class:"text-small"},Fe=t(()=>e("div",{class:"col-4 text-center"},"Rep\xFAblica de Angola",-1)),Te=t(()=>e("div",{class:"col-4 text-center"},null,-1)),Ae={class:"row"},Ue={class:"col-12 text-center"},Be={class:"row"},Je={class:"col-12 text-center"},He=t(()=>e("br",null,null,-1)),ze=t(()=>e("br",null,null,-1)),Le=t(()=>e("br",null,null,-1)),Re=t(()=>e("br",null,null,-1)),Ve={class:"top-subtitle"},Ge={class:"col-12",style:{"line-height":"1.5"}},je=t(()=>e("br",null,null,-1)),qe={class:"StyleFontDocument"},Ke=t(()=>e("b",null,"Ildo Marques cuema",-1)),Qe={class:"col-12 text-center"},We=t(()=>e("br",null,null,-1)),Xe=t(()=>e("br",null,null,-1)),Ze={class:"col-12 text-center",style:{"line-height":"1.5"}},$e=t(()=>e("br",null,null,-1)),eo=t(()=>e("br",null,null,-1)),oo=t(()=>e("br",null,null,-1)),to={key:0},ao=t(()=>e("b",null,"O Director Municipal",-1)),no=[ao],io={key:0},so=t(()=>e("b",null,"Na ausencia do Director Municipal",-1)),lo=[so],co=t(()=>e("br",null,null,-1)),ro=t(()=>e("br",null,null,-1)),uo={key:0,class:"q-pa-md"},_o=t(()=>e("br",null,null,-1)),mo={key:0},vo=t(()=>e("br",null,null,-1)),bo={key:0,class:"text-small"};function ho(u,v,D,o,b,h){return i(),s("div",null,[o.pdfSrc?(i(),s("iframe",{key:0,src:o.pdfSrc,style:{width:"100%",height:"800px"}},null,8,be)):d("",!0),e("div",he,[e("div",pe,[e("div",fe,[e("div",ge,[e("div",Me,[e("b",null,[o.model=="Director Municipal"?(i(),s("span",De,we)):d("",!0)]),e("b",null,[o.model=="Director Interino"?(i(),s("span",ye,Ye)):d("",!0)]),xe,Ne,o.model=="Director Municipal"?(i(),s("span",Ce,l(o.addInfo.directoMunicipal),1)):d("",!0),Se,e("b",null,[o.model=="Director Interino"?(i(),s("span",Pe,l(o.addInfo.directoMunicipal_interino),1)):d("",!0),Oe]),e("p",null,[e("b",null,[o.model=="Director Interino"?(i(),s("span",ke," ("+l(o.addInfo.directoMunicipal_interino_funcao)+") ",1)):d("",!0)])])])]),Fe,Te]),e("div",Ae,[e("div",Ue,[e("b",null,"Direc\xE7\xE3o Municipal da Educa\xE7\xE3o "+l(o.artigoMunicipio)+" "+l(o.addInfo.municipio),1)])]),e("div",Be,[e("div",Je,[He,ze,e("b",null,"GUIA M\xC9DICA N\xBA_______/"+l(o.dateNowYear),1),Le,Re,e("span",Ve," Vai apresentar-se ao "+l(o.addInfo.hospital),1)]),e("div",Ge,[je,e("pre",qe,[g("   Nome do benefici\xE1rio: "),Ke,g(`
   Situa\xE7\xE3o:
   Categoria:
   Provimentos mensais do agregado familiar
   Kz
   `),J(H,{size:"2px",color:"black",inset:"",class:"line-mais-tope"}),g(`
   Elementos referentes ao benefici\xE1rio:
   `),e("p",null,[J(H)]),g(`
            `)])]),e("div",Qe,[We,Xe,g(" DIREC\xC7\xC3O MUNICIPAL DA EDUCA\xC7\xC3O NO "+l(o.addInfo.municipio)+", "+l(o.data)+". ",1)]),e("div",Ze,[$e,eo,oo,e("b",null,[o.model=="Director Municipal"?(i(),s("span",to,no)):d("",!0)]),e("b",null,[o.model=="Director Interino"?(i(),s("span",io,lo)):d("",!0)]),co,ro,o.model=="Director Municipal"?(i(),s("span",uo,l(o.addInfo.directoMunicipal),1)):d("",!0),_o,e("b",null,[o.model=="Director Interino"?(i(),s("span",mo,l(o.addInfo.directoMunicipal_interino),1)):d("",!0),vo]),e("p",null,[e("b",null,[o.model=="Director Interino"?(i(),s("span",bo," ("+l(o.addInfo.directoMunicipal_interino_funcao)+") ",1)):d("",!0)])])])])])])])}var Eo=se(ve,[["render",ho],["__scopeId","data-v-73026877"]]);export{Eo as default};
