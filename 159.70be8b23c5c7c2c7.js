"use strict";(self.webpackChunkath=self.webpackChunkath||[]).push([[159],{5736:(C,T,n)=>{n.d(T,{AR:()=>h,pT:()=>a,$w:()=>f,SX:()=>A,YK:()=>m});const h={_id:null,userId:null,active:!0,owner:null,currency:null,name:null,balance:0,createdAt:null,updatedAt:null},a={_id:null,userId:null,createdAt:null,accountId:null,transactionId:null,invoiceNo:0,amount:0,fincimexTax:0,sendfincimex:!1,remitter:void 0,beneficiary:void 0},f={_id:null,accountId:null,userId:null,reference:null,date:null,valueDate:null,description:null,origin:null,destiny:null,accountOrigin:null,accountDestiny:null,operationType:null,currency:null,initBalance:null,amount:null,endBalance:null},A={_id:null,active:!0,name:null,lastname:null,email:null,password:null,roles:[null]},m={_id:null,invoiceId:"",transactionId:0,reason:"",canceled:!1,fincimexResponse:""}},7810:(C,T,n)=>{n.d(T,{Q:()=>oe});var h=n(655),a=n(3075),f=n(8966),A=n(9646),m=n(7579),s=n(2722),c=n(4004),p=n(7489),v=n(9652),g=n(7078),D=n(6596),b=n(4787),M=n(5736),e=n(5e3),U=n(3238),F=n(7967),q=n(5620),x=n(9808),Z=n(7322),R=n(7531),O=n(6856),P=n(4107),B=n(508),k=n(7423);function w(o,_){1&o&&(e.TgZ(0,"h2",6),e._uU(1,"Agregar operaci\xf3n"),e.qZA())}function Q(o,_){1&o&&(e.TgZ(0,"h2",6),e._uU(1,"Editar operaci\xf3n"),e.qZA())}function J(o,_){1&o&&(e.TgZ(0,"h2",6),e._uU(1,"Transferir fondos"),e.qZA())}function N(o,_){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Seleccionar la fecha de la operaci\xf3n es obligatorio. "),e.qZA())}function L(o,_){1&o&&(e.ynx(0),e.TgZ(1,"div"),e.TgZ(2,"mat-form-field",12),e.TgZ(3,"mat-label"),e._uU(4,"Origen"),e.qZA(),e._UZ(5,"input",24),e.TgZ(6,"mat-hint"),e._uU(7,"Si la operaci\xf3n es un cr\xe9dito puede reflejar el origen de los fondos."),e.qZA(),e.qZA(),e.qZA(),e.BQk()),2&o&&(e.xp6(5),e.Q6J("formControlName","origin")("type","text"))}function K(o,_){1&o&&(e.ynx(0),e.TgZ(1,"div",11),e.TgZ(2,"mat-form-field",12),e.TgZ(3,"mat-label"),e._uU(4,"Destino"),e.qZA(),e._UZ(5,"input",24),e.TgZ(6,"mat-hint"),e._uU(7,"Si la operaci\xf3n es un D\xe9bito puede reflejar el destino de los fondos."),e.qZA(),e.qZA(),e.qZA(),e.BQk()),2&o&&(e.xp6(5),e.Q6J("formControlName","destiny")("type","text"))}function W(o,_){if(1&o&&(e.ynx(0),e.TgZ(1,"mat-option",27),e._uU(2),e.qZA(),e.BQk()),2&o){const t=_.$implicit;e.xp6(1),e.Q6J("value",t._id),e.xp6(1),e.Oqu(t.name)}}function Y(o,_){if(1&o&&(e.ynx(0),e.TgZ(1,"mat-option",27),e._uU(2),e.qZA(),e.BQk()),2&o){const t=_.$implicit;e.xp6(1),e.Q6J("value",t._id),e.xp6(1),e.Oqu(t.name)}}function S(o,_){if(1&o&&(e.ynx(0),e.TgZ(1,"div",11),e.TgZ(2,"mat-form-field",12),e.TgZ(3,"mat-label"),e._uU(4,"Cuenta de Origen"),e.qZA(),e.TgZ(5,"mat-select",25),e.YNc(6,W,3,2,"ng-container",26),e.ALo(7,"async"),e.qZA(),e.TgZ(8,"mat-hint"),e._uU(9,"Debe seleccionar la cuenta de origen de los fondos."),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"div",11),e.TgZ(11,"mat-form-field",12),e.TgZ(12,"mat-label"),e._uU(13,"Cuenta de destino"),e.qZA(),e.TgZ(14,"mat-select",25),e.YNc(15,Y,3,2,"ng-container",26),e.qZA(),e.TgZ(16,"mat-hint"),e._uU(17,"Debe seleccionar la cuenta de destino de los fondos."),e.qZA(),e.qZA(),e.qZA(),e.BQk()),2&o){const t=e.oxw(2);e.xp6(5),e.Q6J("formControlName","accountOrigin"),e.xp6(1),e.Q6J("ngForOf",e.lcZ(7,4,t.accounts$)),e.xp6(8),e.Q6J("formControlName","accountDestiny"),e.xp6(1),e.Q6J("ngForOf",t.accounts)}}function V(o,_){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El monto de la operaci\xf3n es obligatorio. "),e.qZA())}function $(o,_){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," El valor de la operaci\xf3n debe ser mayor que 0. "),e.qZA())}const j=function(o){return{"col-span-2 w-1/2":o}};function G(o,_){if(1&o&&(e.TgZ(0,"div",7),e.TgZ(1,"div",8),e.TgZ(2,"form",9),e.TgZ(3,"div",10),e.TgZ(4,"div",11),e.TgZ(5,"mat-form-field",12),e.TgZ(6,"mat-label"),e._uU(7,"Fecha de la operaci\xf3n"),e.qZA(),e._UZ(8,"input",13),e._UZ(9,"mat-datepicker-toggle",14),e._UZ(10,"mat-datepicker",15,16),e.YNc(12,N,2,0,"mat-error",5),e.qZA(),e.qZA(),e.TgZ(13,"div",11),e.TgZ(14,"mat-form-field",12),e.TgZ(15,"mat-label"),e._uU(16,"Fecha valor"),e.qZA(),e._UZ(17,"input",13),e._UZ(18,"mat-datepicker-toggle",14),e._UZ(19,"mat-datepicker",15,17),e.TgZ(21,"mat-hint"),e._uU(22,"Fecha en la que estar\xe1n disponibles los fondos."),e.qZA(),e.qZA(),e.qZA(),e.YNc(23,L,8,2,"ng-container",5),e.YNc(24,K,8,2,"ng-container",5),e.YNc(25,S,18,6,"ng-container",5),e.TgZ(26,"div",18),e.TgZ(27,"mat-form-field",12),e.TgZ(28,"mat-label"),e._uU(29,"Valor de la operaci\xf3n"),e.qZA(),e._UZ(30,"input",19),e.YNc(31,V,2,0,"mat-error",5),e.YNc(32,$,2,0,"mat-error",5),e.qZA(),e.qZA(),e.TgZ(33,"div",11),e.TgZ(34,"mat-form-field",12),e.TgZ(35,"mat-label"),e._uU(36,"Balance inicial"),e.qZA(),e._UZ(37,"input",20),e.qZA(),e.qZA(),e.TgZ(38,"div",11),e.TgZ(39,"mat-form-field",12),e.TgZ(40,"mat-label"),e._uU(41,"Balance final"),e.qZA(),e._UZ(42,"input",19),e.qZA(),e.qZA(),e.TgZ(43,"div",21),e.TgZ(44,"mat-form-field",22),e.TgZ(45,"mat-label"),e._uU(46,"Descripci\xf3n"),e.qZA(),e._UZ(47,"textarea",23),e.TgZ(48,"mat-hint"),e._uU(49,"Agregue cualquier comentario que considere necesario sobre esta operaci\xf3n."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o){const t=e.MAs(11),r=e.MAs(20),i=e.oxw();e.xp6(2),e.Q6J("formGroup",i.operationForm)("autocomplete","off"),e.xp6(6),e.Q6J("formControlName","date")("min",i.currentDate)("matDatepicker",t),e.xp6(1),e.Q6J("for",t),e.xp6(3),e.Q6J("ngIf",i.operationForm.get("date").hasError("required")),e.xp6(5),e.Q6J("formControlName","valueDate")("min",i.currentDate)("matDatepicker",r),e.xp6(1),e.Q6J("for",r),e.xp6(5),e.Q6J("ngIf","Credit"===i.actionType),e.xp6(1),e.Q6J("ngIf","Debit"===i.actionType),e.xp6(1),e.Q6J("ngIf","Transfer"===i.actionType),e.xp6(1),e.Q6J("ngClass",e.VKq(26,j,"Transfer"===i.actionType)),e.xp6(4),e.Q6J("formControlName","amount")("type","number")("min",0),e.xp6(1),e.Q6J("ngIf",i.operationForm.get("amount").hasError("required")),e.xp6(1),e.Q6J("ngIf",i.operationForm.get("amount").hasError("min")),e.xp6(5),e.Q6J("type","number")("min",0),e.xp6(5),e.Q6J("formControlName","endBalance")("type","number")("min",0),e.xp6(5),e.Q6J("formControlName","description")}}const E=function(o){return{"cursor-not-allowed":o}};function z(o,_){if(1&o){const t=e.EpF();e.TgZ(0,"button",31),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).createOperation()}),e._uU(1,"Agregar"),e.qZA()}if(2&o){const t=e.oxw(2);e.Q6J("ngClass",e.VKq(2,E,t.operationForm.invalid))("disabled",t.operationForm.invalid)}}function H(o,_){if(1&o){const t=e.EpF();e.TgZ(0,"button",31),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).updateOperation()}),e._uU(1,"Actualizar"),e.qZA()}if(2&o){const t=e.oxw(2);e.Q6J("ngClass",e.VKq(2,E,t.operationForm.invalid))("disabled",t.operationForm.invalid)}}function X(o,_){if(1&o){const t=e.EpF();e.TgZ(0,"button",31),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).transferFunds()}),e._uU(1,"Transferir"),e.qZA()}if(2&o){const t=e.oxw(2);e.Q6J("ngClass",e.VKq(2,E,t.operationForm.invalid))("disabled",t.operationForm.invalid)}}function ee(o,_){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",28),e.TgZ(2,"button",29),e.NdJ("click",function(){return e.CHM(t),e.oxw().closeDialog()}),e._uU(3,"Cancelar"),e.qZA(),e.YNc(4,z,2,4,"button",30),e.YNc(5,H,2,4,"button",30),e.YNc(6,X,2,4,"button",30),e.qZA(),e.BQk()}if(2&o){const t=e.oxw();e.xp6(2),e.Q6J("color","warn"),e.xp6(2),e.Q6J("ngIf","add"===t.dialogMode&&"Transfer"!==t.actionType),e.xp6(1),e.Q6J("ngIf","edit"===t.dialogMode&&"Transfer"!==t.actionType),e.xp6(1),e.Q6J("ngIf","Transfer"===t.actionType)}}const te=(0,v.kP)("1234567890abcdef",8);let oe=(()=>{class o{constructor(t,r,i,l,d,y,I){this.data=t,this._accountsService=r,this._athConfirmationService=i,this._changeDetectorRef=l,this._dialogRef=d,this._formBuilder=y,this.store=I,this.account$=(0,A.of)(null),this.accounts$=(0,A.of)([]),this.amountFieldState=!0,this.currentDate=new Date,this.operation=M.$w,this.user$=(0,A.of)(null),this._unsubscribeAll=new m.x,this.dialogMode=t.dialogMode,this.actionType=t.actionType,t.operation&&(this.operation=this.data.operation),"Transfer"!==this.actionType&&(this.amountFieldState=!1)}ngOnInit(){this.accounts$=this.store.select(D.L3),this.account$=this.store.select(D.bk),this.account$.pipe((0,s.R)(this._unsubscribeAll)).subscribe(t=>{this.account=t,this._changeDetectorRef.markForCheck()}),this.accounts$.pipe((0,s.R)(this._unsubscribeAll),(0,c.U)(t=>t.filter(r=>r._id!==this.account._id))).subscribe(t=>{this.accounts=t,this._changeDetectorRef.markForCheck()}),this.user$=this.store.select(b.dy),this.user$.pipe((0,s.R)(this._unsubscribeAll)).subscribe(t=>{this.user=t,this._changeDetectorRef.markForCheck()}),this.operationForm=this._formBuilder.group({_id:[null],accountId:[this.account._id,[a.kI.required]],userId:[this.user._id,[a.kI.required]],reference:[te(),[a.kI.required]],date:[{disabled:!0,value:this.currentDate},[a.kI.required]],valueDate:[{disabled:!0,value:null}],description:[null,[a.kI.maxLength(1e3)]],origin:[null],destiny:[null],accountOrigin:[{disabled:!0,value:null}],accountDestiny:[null],operationType:[null,[a.kI.required]],currency:[this.account.currency,[a.kI.required]],amount:[0,[a.kI.required,a.kI.min(0)]],initBalance:[{disabled:!0,value:this.account.balance},[a.kI.required,a.kI.min(0)]],endBalance:[{disabled:!0,value:this.account.balance},[a.kI.required,a.kI.min(0)]]}),"Transfer"!==this.actionType?this.operationForm.get("operationType").setValue(this.actionType):(this.operationForm.get("operationType").setValue("D\xe9bito"),this.operationForm.get("origin").setValue(this.account.name),this.operationForm.get("accountOrigin").setValue(this.account._id)),this.operationForm.get("accountDestiny").valueChanges.pipe((0,s.R)(this._unsubscribeAll)).subscribe(t=>{const r=this.accounts.find(i=>i._id===t);this.operationForm.get("destiny").setValue(r.name),this._changeDetectorRef.markForCheck()}),this.operationForm.get("operationType").valueChanges.pipe((0,s.R)(this._unsubscribeAll)).subscribe(t=>{this.operationForm.get("amount").enable();let r=this.operationForm.get("initBalance").value;const i=this.operationForm.get("amount").value;if("Cr\xe9dito"===t){const l=parseInt(r,10)+parseInt(i,10);this.operationForm.get("endBalance").setValue(l)}"D\xe9bito"===t&&this.operationForm.get("endBalance").setValue(r-=parseInt(i,10))}),this.operationForm.get("amount").valueChanges.pipe((0,s.R)(this._unsubscribeAll)).subscribe(t=>{const r=this.operationForm.get("operationType").value;let i=this.operationForm.get("initBalance").value;if("Cr\xe9dito"===r){const l=parseInt(i,10)+parseInt(t,10);this.operationForm.get("endBalance").setValue(l)}"D\xe9bito"===r&&this.operationForm.get("endBalance").setValue(i-=parseInt(t,10))}),"edit"===this.dialogMode&&this.operationForm.patchValue(this.operation)}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}createOperation(){let t=this.operationForm.getRawValue();t=(0,p.omit)(t,["_id"]),this._athConfirmationService.open({title:"Crear operaci\xf3n",message:"\xbfEst\xe1 seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,s.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._accountsService.createOperation(t).pipe((0,s.R)(this._unsubscribeAll)).subscribe(()=>{this._athConfirmationService.open({title:"Confirmaci\xf3n",message:"Operaci\xf3n agregada correctamente.",icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this._changeDetectorRef.markForCheck(),this.closeDialog()},l=>{let d;console.warn(l),d=l.error?l.error.title:l.message,this._athConfirmationService.open({title:`${l.statusText}: ${l.status}`,message:d,icon:{show:!0,name:"heroicons_outline:exclamation-circle",color:"error"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1})})})}updateOperation(){const t=this.operationForm.getRawValue();this._athConfirmationService.open({title:"Actualizar operaci\xf3n",message:"\xbfEst\xe1 seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._accountsService.updateAccount(t).pipe((0,s.R)(this._unsubscribeAll)).subscribe(()=>{this._athConfirmationService.open({title:"Confirmaci\xf3n",message:"Operaci\xf3n actualizada correctamente",icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this.closeDialog(),this._changeDetectorRef.markForCheck()},l=>{let d;this.closeDialog(),d=l.error?l.error.message:l.message})})}transferFunds(){const t=this.operationForm.getRawValue(),y=(0,h._T)(t,["_id","accountId","operationType"]);this._athConfirmationService.open({title:"Crear transferencia",message:"\xbfEst\xe1 seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,s.R)(this._unsubscribeAll)).subscribe(ne=>{"confirmed"===ne&&(this.store.dispatch((0,g.lB)({payload:y})),this.closeDialog())})}removeOperation(){const t=this.account;this._athConfirmationService.open({title:"Actualizar operaci\xf3n",message:"\xbfEst\xe1 seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._accountsService.updateAccount(t).pipe((0,s.R)(this._unsubscribeAll)).subscribe(()=>{this._athConfirmationService.open({title:"Confirmaci\xf3n",message:"Operaci\xf3n eliminada correctamente",icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this.closeDialog(),this._changeDetectorRef.markForCheck()},l=>{let d;d=l.error?l.error.message:l.message,this._athConfirmationService.open({title:`${l.statusText}: ${l.status}`,message:d,icon:{show:!0,name:"heroicons_outline:exclamation-circle",color:"error"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1})})})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f.WI),e.Y36(U.i),e.Y36(F.C),e.Y36(e.sBO),e.Y36(f.so),e.Y36(a.qu),e.Y36(q.yh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ath-account-operation-dialog"]],decls:10,vars:5,consts:[[1,"relative","flex","flex-col","w-full","max-h-screen"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],["mat-dialog-title","",4,"ngIf"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6"],["class","w-full overflow-hidden",4,"ngIf"],[4,"ngIf"],["mat-dialog-title",""],[1,"w-full","overflow-hidden"],[1,"flex","border-t"],[1,"flex","flex-col","w-full","pt-8",3,"formGroup","autocomplete"],[1,"grid","grid-cols-1","sm:grid-cols-2","gap-4"],[1,""],[1,"w-full"],["matInput","","require","",3,"formControlName","min","matDatepicker"],["matPrefix","",3,"for"],["touchUi","","disabled","false"],["date",""],["valueDate",""],[3,"ngClass"],["matInput","","require","",3,"formControlName","type","min"],["matInput","","formControlName","initBalance","require","",3,"type","min"],[1,"col-span-1","sm:col-span-2"],[1,"w-full","fuse-mat-textarea"],["matInput","",3,"formControlName"],["matInput","","require","",3,"formControlName","type"],["require","",3,"formControlName"],[4,"ngFor","ngForOf"],[3,"value"],[1,"flex","items-center","justify-between","w-full","px-8","py-4","bg-gray-50"],["mat-button","",1,"-ml-4","rounded-sm",3,"color","click"],["class","text-mine-900 rounded-sm bg-primary-700","mat-flat-button","",3,"ngClass","disabled","click",4,"ngIf"],["mat-flat-button","",1,"text-mine-900","rounded-sm","bg-primary-700",3,"ngClass","disabled","click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.ynx(1),e.TgZ(2,"div",1),e.YNc(3,w,2,0,"h2",2),e.YNc(4,Q,2,0,"h2",2),e.YNc(5,J,2,0,"h2",2),e.qZA(),e.BQk(),e.TgZ(6,"div",3),e.ynx(7),e.YNc(8,G,50,28,"div",4),e.BQk(),e.qZA(),e.YNc(9,ee,7,4,"ng-container",5),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngIf","add"===r.dialogMode&&"Transfer"!==r.actionType),e.xp6(1),e.Q6J("ngIf","edit"===r.dialogMode&&"Transfer"!==r.actionType),e.xp6(1),e.Q6J("ngIf","Transfer"===r.actionType),e.xp6(3),e.Q6J("ngIf","view"!==r.dialogMode),e.xp6(1),e.Q6J("ngIf","view"!==r.data.dialogMode))},directives:[x.O5,f.uh,a._Y,a.JL,a.sg,Z.KE,Z.hX,R.Nt,a.Fj,O.hl,a.JJ,a.u,O.nW,Z.qo,O.Mq,Z.TO,Z.bx,P.gD,x.sg,B.ey,x.mk,k.lW],pipes:[x.Ov],encapsulation:2,changeDetection:0}),o})()},7681:(C,T,n)=>{n.d(T,{$c:()=>A,EW:()=>m,$G:()=>s});var h=n(7078),a=n(5e3),f=n(5620);let A=(()=>{class c{constructor(u){this.store=u}resolve(u,v){return this.store.dispatch((0,h.vP)())}}return c.\u0275fac=function(u){return new(u||c)(a.LFG(f.yh))},c.\u0275prov=a.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})(),m=(()=>{class c{constructor(u){this.store=u}resolve(u,v){const g=u.params.accountId;if("new"!==g)return this.store.dispatch((0,h.Mx)({accountId:g}))}}return c.\u0275fac=function(u){return new(u||c)(a.LFG(f.yh))},c.\u0275prov=a.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})(),s=(()=>{class c{constructor(u){this.store=u}resolve(u,v){const g=u.params.accountId;if("new"!==g)return this.store.dispatch((0,h.vg)({accountId:g}))}}return c.\u0275fac=function(u){return new(u||c)(a.LFG(f.yh))},c.\u0275prov=a.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},9652:(C,T,n)=>{n.d(T,{kP:()=>f});let h=m=>crypto.getRandomValues(new Uint8Array(m)),f=(m,s=21)=>((m,s,c)=>{let p=(2<<Math.log(m.length-1)/Math.LN2)-1,u=-~(1.6*p*s/m.length);return(v=s)=>{let g="";for(;;){let D=c(u),b=u;for(;b--;)if(g+=m[D[b]&p]||"",g.length===v)return g}}})(m,s,h)}}]);