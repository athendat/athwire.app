"use strict";(self.webpackChunkath=self.webpackChunkath||[]).push([[764],{2764:(Ct,k,a)=>{a.r(k),a.d(k,{AccountsModule:()=>bt});var _=a(5357),M=a(2455),l=a(3075),U=a(6087),g=a(4847),x=a(9646),h=a(7579),S=a(9300),Z=a(6596),w=a(7078),I=a(5700),Y=a(7810),A=a(5736),t=a(5e3),d=a(8966),J=a(1927),v=a(5620),Q=a(5303),D=a(5245),T=a(7423),u=a(9808),m=a(2181);function O(e,c){if(1&e&&(t.ynx(0),t._uU(1),t.ALo(2,"number"),t.BQk()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,n.amount,"1.2-2")||""," ")}}function $(e,c){if(1&e&&(t.ynx(0),t._uU(1),t.ALo(2,"number"),t.BQk()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.hij(" -",t.xi3(2,1,n.amount,"1.2-2")||""," ")}}function B(e,c){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",36),t.NdJ("click",function(){const r=t.CHM(n).$implicit;return t.oxw(2).editOperation(r)}),t.TgZ(2,"div",32),t._uU(3),t.ALo(4,"date"),t.qZA(),t.TgZ(5,"div",33),t._uU(6),t.qZA(),t.TgZ(7,"div",33),t._uU(8),t.qZA(),t.TgZ(9,"div",34),t._uU(10),t.ALo(11,"number"),t.qZA(),t.TgZ(12,"div",34),t.YNc(13,O,3,4,"ng-container",37),t.qZA(),t.TgZ(14,"div",38),t.YNc(15,$,3,4,"ng-container",37),t.qZA(),t.TgZ(16,"div",32),t._uU(17),t.ALo(18,"number"),t.qZA(),t.qZA(),t.BQk()}if(2&e){const n=c.$implicit;t.xp6(3),t.hij(" ",t.xi3(4,7,n.date,"dd/MM/yyyy")," "),t.xp6(3),t.hij(" ",n.origin||""," "),t.xp6(2),t.hij(" ",n.destiny||""," "),t.xp6(2),t.hij(" ",t.xi3(11,10,n.initBalance,"1.2-2")||""," "),t.xp6(3),t.Q6J("ngIf","Cr\xe9dito"===n.operationType),t.xp6(2),t.Q6J("ngIf","D\xe9bito"===n.operationType),t.xp6(2),t.hij(" ",t.xi3(18,13,n.endBalance,"1.2-2")||""," ")}}function R(e,c){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",23),t.TgZ(2,"div",24),t._uU(3,"Registro de operaciones de la cuenta"),t.qZA(),t.TgZ(4,"div",25),t.TgZ(5,"button",26),t._UZ(6,"mat-icon",27),t.qZA(),t.TgZ(7,"mat-menu",null,28),t.TgZ(9,"button",29),t.NdJ("click",function(){return t.CHM(n),t.oxw().exportAsExcelFile()}),t._uU(10,"Exportar a excel"),t.qZA(),t.TgZ(11,"button",29),t.NdJ("click",function(){return t.CHM(n),t.oxw().exportAsCsvFile()}),t._uU(12,"Exportar a csv"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",30),t.TgZ(14,"div",31),t.TgZ(15,"div",32),t._uU(16," Fecha de la operaci\xf3n "),t.qZA(),t.TgZ(17,"div",33),t._uU(18," Origen de los fondos "),t.qZA(),t.TgZ(19,"div",33),t._uU(20," Destino de los fondos "),t.qZA(),t.TgZ(21,"div",34),t._uU(22," Saldo inicial "),t.qZA(),t.TgZ(23,"div",34),t._uU(24," Cr\xe9dito "),t.qZA(),t.TgZ(25,"div",34),t._uU(26," D\xe9bito "),t.qZA(),t.TgZ(27,"div",32),t._uU(28," Saldo final "),t.qZA(),t.qZA(),t.YNc(29,B,19,16,"ng-container",35),t.ALo(30,"async"),t.qZA(),t.BQk()}if(2&e){const n=t.MAs(8),o=t.oxw();t.xp6(5),t.Q6J("matMenuTriggerFor",n),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:dots-vertical"),t.xp6(23),t.Q6J("ngForOf",t.lcZ(30,4,o.operations$))("ngForTrackBy",o.trackByFn)}}function j(e,c){1&e&&(t.TgZ(0,"div",39),t._UZ(1,"mat-icon",40),t.TgZ(2,"div",41),t._uU(3,"A\xfan no se han registrado operaci\xf3n para esta cuenta!"),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("svgIcon","iconsmind:billing"))}let L=(()=>{class e{constructor(n,o,i){this._accountDialog=n,this._fileSaverService=o,this.store=i,this.account=null,this.account$=(0,x.of)(null),this.emptyAccount=A.AR,this.operations=[],this.searchInputControl=new l.NI,this.selectedAccount=null,this._unsubscribeAll=new h.x}ngOnInit(){this.account$=this.store.select(Z.bk),this.account$.pipe((0,S.h)(n=>null!==n)).subscribe(n=>{this.account=n}),this.operations$=this.store.select(Z.Cj)}ngAfterViewInit(){}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete(),this.store.dispatch((0,w.r6)()),this.store.dispatch((0,w.VD)())}createOperation(n){this.openDialog("add","90%",this.account,null,n)}editOperation(n){this.openDialog("edit","90%",this.account,n)}exportAsExcelFile(){this._fileSaverService.exportAsExcelFile(this.operations,"operations")}exportAsCsvFile(){this._fileSaverService.exportAsCsvFile(this.operations,"operations")}openDialog(n,o,i,r,s){this._accountDialog.open(Y.Q,{data:{account:i,operation:r,dialogMode:n,actionType:s},width:o,panelClass:"ath-dialog-panel"})}trackByFn(n,o){return o.id||n}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.uw),t.Y36(J.m),t.Y36(v.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ath-account-detail"]],viewQuery:function(n,o){if(1&n&&(t.Gf(U.NW,5),t.Gf(g.YE,5)),2&n){let i;t.iGM(i=t.CRH())&&(o._paginator=i.first),t.iGM(i=t.CRH())&&(o._sort=i.first)}},decls:50,vars:25,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-wrap","p-6","sm:flex-row","flex-0","sm:items-center","sm:justify-between","pb-22","sm:pt-12","sm:pb-28","sm:px-10","bg-mine-50","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"ml-1","text-primary-700","hover:underline",3,"routerLink"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-700"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"ml-1"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"mt-2","flex","flex-col"],[1,"font-medium"],[1,"flex","items-center","flex-shrink-0","mt-6","lg:mt-0","sm:ml-4","gap-x-4","justify-center"],["mat-button","",1,"rounded-sm","bg-primary-700",3,"click"],[1,"text-mine-900",3,"svgIcon"],[1,"ml-2","mr-1","text-lg","text-mine-900","hidden","md:block"],[1,"flex-auto","p-6","-mt-16","bg-mine-200","shadow","sm:p-10","rounded-t-2xl"],[1,"w-full","p-8","md:p-16","shadow","rounded-2xl","bg-card","print:w-auto","print:rounded-none","print:shadow-none","print:bg-transparent"],[4,"ngIf","ngIfElse"],["noOperations",""],[1,"flex","items-center","justify-between","mb-5"],[1,"text-2xl","font-semibold","leading-tight"],[1,"-mr-3"],["mat-icon-button","",3,"matMenuTriggerFor"],[1,"icon-size-5",3,"svgIcon"],["listOperationsMenu","matMenu"],["mat-menu-item","",3,"click"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","operations-grid","md:px-8","text-md","text-secondary","bg-mine-50","dark:bg-black","dark:bg-opacity-5"],[1,"text-center"],[1,"hidden","lg:block"],[1,"hidden","text-center","sm:block"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","operations-grid","md:px-8","cursor-pointer","hover:bg-primary-50",3,"click"],[4,"ngIf"],[1,"hidden","text-center","sm:block","text-red-500"],[1,"flex","flex-auto","flex-col","items-center","justify-center","h-full"],[1,"icon-size-24",3,"svgIcon"],[1,"mt-4","text-2xl","font-semibold","tracking-tight","text-secondary"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div"),t.TgZ(4,"div",3),t.TgZ(5,"div",4),t.TgZ(6,"a",5),t._uU(7,"Cuentas"),t.qZA(),t.qZA(),t.TgZ(8,"div",4),t._UZ(9,"mat-icon",6),t.TgZ(10,"a",7),t._uU(11),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"div",8),t.TgZ(13,"a",9),t._UZ(14,"mat-icon",6),t.TgZ(15,"span",10),t._uU(16,"Regresar"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div",11),t.TgZ(18,"h2",12),t._uU(19),t.ALo(20,"async"),t.qZA(),t.qZA(),t.TgZ(21,"div",13),t.TgZ(22,"span",14),t._uU(23),t.ALo(24,"async"),t.qZA(),t.TgZ(25,"span",14),t._uU(26),t.qZA(),t.TgZ(27,"span",14),t._uU(28),t.ALo(29,"number"),t.ALo(30,"async"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(31,"div",15),t.TgZ(32,"button",16),t.NdJ("click",function(){return o.createOperation("Cr\xe9dito")}),t._UZ(33,"mat-icon",17),t.TgZ(34,"span",18),t._uU(35,"Acreditar fondos"),t.qZA(),t.qZA(),t.TgZ(36,"button",16),t.NdJ("click",function(){return o.createOperation("D\xe9bito")}),t._UZ(37,"mat-icon",17),t.TgZ(38,"span",18),t._uU(39,"Retirar fondos"),t.qZA(),t.qZA(),t.TgZ(40,"button",16),t.NdJ("click",function(){return o.createOperation("Transfer")}),t._UZ(41,"mat-icon",17),t.TgZ(42,"span",18),t._uU(43,"Transferir fondos"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(44,"div",19),t.TgZ(45,"div",20),t.YNc(46,R,31,6,"ng-container",21),t.ALo(47,"async"),t.YNc(48,j,4,1,"ng-template",null,22,t.W1O),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.MAs(49);t.xp6(6),t.Q6J("routerLink","/accounts"),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:chevron-right"),t.xp6(2),t.Oqu(o.account.name),t.xp6(2),t.Q6J("routerLink","./.."),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:chevron-left"),t.xp6(5),t.hij(" ",t.lcZ(20,14,o.account$).name," "),t.xp6(4),t.hij("Moneda de la cuenta - ",t.lcZ(24,16,o.account$).currency,""),t.xp6(3),t.hij("Cantidad de operaciones - ",o.operations.length,""),t.xp6(2),t.hij("Balance de la cuenta - ",t.xi3(29,18,t.lcZ(30,21,o.account$).balance,"1.2-2"),""),t.xp6(5),t.Q6J("svgIcon","heroicons_outline:plus"),t.xp6(4),t.Q6J("svgIcon","heroicons_outline:minus"),t.xp6(4),t.Q6J("svgIcon","heroicons_outline:switch-horizontal"),t.xp6(5),t.Q6J("ngIf",t.lcZ(47,23,o.operations$).length>0)("ngIfElse",i)}},directives:[Q.PQ,_.yS,D.Hw,T.lW,u.O5,m.p6,m.VK,m.OP,g.YE,u.sg],pipes:[u.Ov,u.JJ,u.uU],encapsulation:2,data:{animation:I.p},changeDetection:0}),e})();var H=a(4787),f=a(2722),z=a(7489),V=a(8765),F=a(3238),N=a(7967),b=a(7322),G=a(7531),W=a(4107),X=a(508),K=a(2368);function P(e,c){1&e&&(t.TgZ(0,"h2",6),t._uU(1,"Agregar cuenta"),t.qZA())}function tt(e,c){1&e&&(t.TgZ(0,"h2",6),t._uU(1,"Editar cuenta"),t.qZA())}function nt(e,c){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El nombre de la cuenta es obligatorio. "),t.qZA())}function et(e,c){if(1&e&&(t.ynx(0),t.TgZ(1,"mat-option",16),t._uU(2),t.qZA(),t.BQk()),2&e){const n=c.$implicit;t.xp6(1),t.Q6J("value",n._id),t.xp6(1),t.AsE("",n.name," ",n.lastname,"")}}function ot(e,c){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Debe asignar un responsable a la cuenta. "),t.qZA())}function it(e,c){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Debe seleccionar la moneda de la cuenta. "),t.qZA())}function ct(e,c){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El monto del balance inicial es obligatorio. "),t.qZA())}function at(e,c){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El monto del balance inicial debe ser mayor que 0. "),t.qZA())}function rt(e,c){if(1&e&&(t.TgZ(0,"div",7),t.TgZ(1,"div",8),t.TgZ(2,"form",9),t.TgZ(3,"div",10),t.TgZ(4,"div",11),t.TgZ(5,"mat-form-field",12),t.TgZ(6,"mat-label"),t._uU(7,"Nombre de la cuenta"),t.qZA(),t._UZ(8,"input",13),t.YNc(9,nt,2,0,"mat-error",5),t.qZA(),t.qZA(),t.TgZ(10,"div",11),t.TgZ(11,"mat-form-field",12),t.TgZ(12,"mat-label"),t._uU(13,"Responsable de la cuenta"),t.qZA(),t.TgZ(14,"mat-select",14),t.YNc(15,et,3,3,"ng-container",15),t.ALo(16,"async"),t.qZA(),t.YNc(17,ot,2,0,"mat-error",5),t.qZA(),t.qZA(),t.TgZ(18,"div",11),t.TgZ(19,"mat-form-field",12),t.TgZ(20,"mat-label"),t._uU(21,"Moneda de la cuenta"),t.qZA(),t.TgZ(22,"mat-select",14),t.TgZ(23,"mat-option",16),t._uU(24,"USD"),t.qZA(),t.TgZ(25,"mat-option",16),t._uU(26,"EUR"),t.qZA(),t.TgZ(27,"mat-option",16),t._uU(28,"MXN"),t.qZA(),t.qZA(),t.YNc(29,it,2,0,"mat-error",5),t.qZA(),t.qZA(),t.TgZ(30,"div",11),t.TgZ(31,"mat-form-field",12),t.TgZ(32,"mat-label"),t._uU(33,"Balance inicial"),t.qZA(),t._UZ(34,"input",17),t.YNc(35,ct,2,0,"mat-error",5),t.YNc(36,at,2,0,"mat-error",5),t.qZA(),t.qZA(),t.TgZ(37,"div",11),t.TgZ(38,"div",18),t.TgZ(39,"span",19),t._uU(40,"Estado"),t.qZA(),t.TgZ(41,"mat-slide-toggle",20),t._uU(42),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const n=t.oxw();t.xp6(2),t.Q6J("formGroup",n.accountForm)("autocomplete","off"),t.xp6(6),t.Q6J("formControlName","name")("type","text"),t.xp6(1),t.Q6J("ngIf",n.accountForm.get("name").hasError("required")),t.xp6(5),t.Q6J("formControlName","owner"),t.xp6(1),t.Q6J("ngForOf",t.lcZ(16,21,n.users$)),t.xp6(2),t.Q6J("ngIf",n.accountForm.get("owner").hasError("required")),t.xp6(5),t.Q6J("formControlName","currency"),t.xp6(1),t.Q6J("value","USD"),t.xp6(2),t.Q6J("value","EUR"),t.xp6(2),t.Q6J("value","MXN"),t.xp6(2),t.Q6J("ngIf",n.accountForm.get("currency").hasError("required")),t.xp6(5),t.Q6J("formControlName","balance")("type","number")("min",0),t.xp6(1),t.Q6J("ngIf",n.accountForm.get("balance").hasError("required")),t.xp6(1),t.Q6J("ngIf",n.accountForm.get("balance").hasError("min")),t.xp6(5),t.Q6J("formControlName","active")("color","primary"),t.xp6(1),t.hij(" ",!0===n.accountForm.get("active").value?"Activo":"Inactivo"," ")}}const E=function(e){return{"cursor-not-allowed":e}};function st(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){return t.CHM(n),t.oxw(2).updateAccount()}),t._uU(1,"Actualizar"),t.qZA()}if(2&e){const n=t.oxw(2);t.Q6J("ngClass",t.VKq(2,E,n.accountForm.invalid))("disabled",n.accountForm.invalid)}}function lt(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){return t.CHM(n),t.oxw(2).createAccount()}),t._uU(1,"Agregar"),t.qZA()}if(2&e){const n=t.oxw(2);t.Q6J("ngClass",t.VKq(2,E,n.accountForm.invalid))("disabled",n.accountForm.invalid)}}function ut(e,c){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",21),t.TgZ(2,"button",22),t.NdJ("click",function(){return t.CHM(n),t.oxw().closeDialog()}),t._uU(3,"Cancelar"),t.qZA(),t.YNc(4,st,2,4,"button",23),t.YNc(5,lt,2,4,"button",23),t.qZA(),t.BQk()}if(2&e){const n=t.oxw();t.xp6(2),t.Q6J("color","warn"),t.xp6(2),t.Q6J("ngIf","edit"===n.data.dialogMode),t.xp6(1),t.Q6J("ngIf","add"===n.data.dialogMode)}}let mt=(()=>{class e{constructor(n,o,i,r,s,y,q){this.data=n,this._accountsService=o,this._changeDetectorRef=i,this._dialogRef=r,this._formBuilder=s,this._athConfirmationService=y,this.store=q,this.user$=(0,x.of)(null),this.users$=(0,x.of)([]),this._unsubscribeAll=new h.x,this.dialogMode=n.dialogMode,this.account=this.data.account}ngOnInit(){this.users$=this.store.select(V.Y),this.user$=this.store.select(H.dy),this.user$.pipe((0,f.R)(this._unsubscribeAll)).subscribe(n=>{this.user=n,this._changeDetectorRef.markForCheck()}),this.accountForm=this._formBuilder.group({_id:[null],active:[!0,[l.kI.required]],userId:[this.user._id,[l.kI.required]],currency:[null,[l.kI.required]],name:[null,[l.kI.required,l.kI.maxLength(250)]],owner:[null,[l.kI.required]],balance:[0,[l.kI.required,l.kI.min(0)]],operations:[null],createdAt:[null],updatedAt:[null]}),"edit"===this.dialogMode&&(this.accountForm.patchValue(this.account),this.accountForm.get("owner").patchValue(this.account.owner._id))}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDialog(){this._dialogRef.close()}createAccount(){let n=this.accountForm.getRawValue();n=(0,z.omit)(n,["_id","createdAt","updatedAt"]),n.userId=this.user._id,this._athConfirmationService.open({title:"Crear cuenta",message:"\xbfEst\xe1 seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().pipe((0,f.R)(this._unsubscribeAll)).subscribe(i=>{"confirmed"===i&&this._accountsService.createAccount(n).pipe((0,f.R)(this._unsubscribeAll)).subscribe(r=>{this._athConfirmationService.open({title:"Confirmaci\xf3n",message:r.message,icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this._changeDetectorRef.markForCheck(),this.closeDialog()},r=>{let s;console.warn(r),s=r.error?r.error.title:r.message,this._athConfirmationService.open({title:`${r.statusText}: ${r.status}`,message:s,icon:{show:!0,name:"heroicons_outline:exclamation-circle",color:"error"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1})})})}updateAccount(){const n=this.accountForm.getRawValue();this._athConfirmationService.open({title:"Actualizar cuenta",message:"\xbfEst\xe1 seguro que toda la informaci\xf3n es correcta?",icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._accountsService.updateAccount(n).pipe((0,f.R)(this._unsubscribeAll)).subscribe(r=>{this._athConfirmationService.open({title:"Confirmaci\xf3n",message:r.message,icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this.closeDialog(),this._changeDetectorRef.markForCheck()},r=>{let s;s=r.error?r.error.message:r.message,this._athConfirmationService.open({title:`${r.statusText}: ${r.status}`,message:s,icon:{show:!0,name:"heroicons_outline:exclamation-circle",color:"error"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1})})})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.WI),t.Y36(F.i),t.Y36(t.sBO),t.Y36(d.so),t.Y36(l.qu),t.Y36(N.C),t.Y36(v.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ath-account-dialog"]],decls:9,vars:4,consts:[[1,"relative","flex","flex-col","w-full","max-h-screen"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left"],["mat-dialog-title","",4,"ngIf"],[1,"flex","flex-col","items-center","flex-auto","w-full","px-8","pb-6"],["class","w-full overflow-hidden",4,"ngIf"],[4,"ngIf"],["mat-dialog-title",""],[1,"w-full","overflow-hidden"],[1,"flex","border-t"],[1,"flex","flex-col","w-full","pt-8",3,"formGroup","autocomplete"],[1,"grid","grid-cols-1","sm:grid-cols-2","gap-x-4"],[1,""],[1,"w-full"],["matInput","","require","",3,"formControlName","type"],["require","",3,"formControlName"],[4,"ngFor","ngForOf"],[3,"value"],["matInput","","require","",3,"formControlName","type","min"],[1,"flex","flex-col"],[1,"mb-4","font-medium"],[3,"formControlName","color"],[1,"flex","items-center","justify-between","w-full","px-8","py-4","bg-gray-50"],["mat-button","",1,"-ml-4","rounded-sm",3,"color","click"],["class","text-mine-900 rounded-sm bg-primary-700","mat-flat-button","",3,"ngClass","disabled","click",4,"ngIf"],["mat-flat-button","",1,"text-mine-900","rounded-sm","bg-primary-700",3,"ngClass","disabled","click"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.ynx(1),t.TgZ(2,"div",1),t.YNc(3,P,2,0,"h2",2),t.YNc(4,tt,2,0,"h2",2),t.qZA(),t.BQk(),t.TgZ(5,"div",3),t.ynx(6),t.YNc(7,rt,43,23,"div",4),t.BQk(),t.qZA(),t.YNc(8,ut,6,3,"ng-container",5),t.qZA()),2&n&&(t.xp6(3),t.Q6J("ngIf",!o.data.account._id&&"add"===o.dialogMode),t.xp6(1),t.Q6J("ngIf",o.data.account._id&&"edit"===o.dialogMode),t.xp6(3),t.Q6J("ngIf","view"!==o.dialogMode),t.xp6(1),t.Q6J("ngIf","view"!==o.data.dialogMode))},directives:[u.O5,d.uh,l._Y,l.JL,l.sg,b.KE,b.hX,G.Nt,l.Fj,l.JJ,l.u,b.TO,W.gD,u.sg,X.ey,K.Rr,T.lW,u.mk],pipes:[u.Ov],encapsulation:2,changeDetection:0}),e})();var gt=a(7238);function dt(e,c){1&e&&(t.ynx(0),t._UZ(1,"mat-icon",44),t.BQk()),2&e&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check"))}function pt(e,c){1&e&&(t.ynx(0),t._UZ(1,"mat-icon",45),t.BQk()),2&e&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:x"))}function _t(e,c){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",36),t.TgZ(2,"div",37),t._uU(3),t.qZA(),t.TgZ(4,"div",30),t._uU(5),t.qZA(),t.TgZ(6,"div",38),t._uU(7),t.ALo(8,"number"),t.qZA(),t.TgZ(9,"div",32),t._uU(10),t.ALo(11,"date"),t.qZA(),t.TgZ(12,"div",33),t.YNc(13,dt,2,1,"ng-container",24),t.YNc(14,pt,2,1,"ng-container",24),t.qZA(),t.TgZ(15,"div",39),t.TgZ(16,"button",40),t.NdJ("click",function(){const r=t.CHM(n).$implicit;return t.oxw(4).navigateToStatement(r._id)}),t._UZ(17,"mat-icon",21),t.qZA(),t.TgZ(18,"button",41),t.NdJ("click",function(){const r=t.CHM(n).$implicit;return t.oxw(4).navigateToAccount(r._id)}),t._UZ(19,"mat-icon",21),t.qZA(),t.TgZ(20,"button",42),t.NdJ("click",function(){const r=t.CHM(n).$implicit;return t.oxw(4).editAccount(r)}),t._UZ(21,"mat-icon",21),t.qZA(),t.TgZ(22,"button",43),t.NdJ("click",function(){const r=t.CHM(n).$implicit;return t.oxw(4).deleteAccount(r)}),t._UZ(23,"mat-icon",21),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&e){const n=c.$implicit;t.xp6(3),t.hij(" ",n.name," "),t.xp6(2),t.AsE(" ",n.owner.name," ",n.owner.lastname," "),t.xp6(2),t.AsE(" ",n.currency," ",t.xi3(8,12,n.balance,"1.2-2")," "),t.xp6(3),t.hij(" ",t.xi3(11,15,n.updatedAt,"dd/MM/yyyy")," "),t.xp6(3),t.Q6J("ngIf",n.active),t.xp6(1),t.Q6J("ngIf",!n.active),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:scale"),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:eye"),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:pencil"),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:trash")}}function ft(e,c){if(1&e&&(t.ynx(0),t.YNc(1,_t,24,18,"ng-container",35),t.BQk()),2&e){const n=c.ngIf,o=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",n)("ngForTrackBy",o.trackByFn)}}function xt(e,c){if(1&e&&(t.ynx(0),t.TgZ(1,"div",27),t.TgZ(2,"div",28),t.TgZ(3,"div",29),t._uU(4," Nombre de la cuenta "),t.qZA(),t.TgZ(5,"div",30),t._uU(6," Responsable "),t.qZA(),t.TgZ(7,"div",31),t._uU(8," Saldo contable "),t.qZA(),t.TgZ(9,"div",32),t._uU(10," Fecha de \xfaltimo movimiento "),t.qZA(),t.TgZ(11,"div",33),t._uU(12," Activa "),t.qZA(),t.TgZ(13,"div",34),t._uU(14," Acciones "),t.qZA(),t.qZA(),t.YNc(15,ft,2,2,"ng-container",24),t.ALo(16,"async"),t.qZA(),t.BQk()),2&e){const n=t.oxw(2);t.xp6(3),t.Q6J("mat-sort-header","name"),t.xp6(4),t.Q6J("mat-sort-header","balance"),t.xp6(8),t.Q6J("ngIf",t.lcZ(16,3,n.accounts$))}}function ht(e,c){if(1&e&&(t.ynx(0),t.YNc(1,xt,17,5,"ng-container",26),t.BQk()),2&e){const n=c.ngIf;t.oxw();const o=t.MAs(38);t.xp6(1),t.Q6J("ngIf",n)("ngIfElse",o)}}function Zt(e,c){1&e&&(t.TgZ(0,"div",46),t._uU(1,"A\xfan no ha creado ninguna cuenta!"),t.qZA())}let At=(()=>{class e{constructor(n,o,i,r,s,y,q){this._accountDialog=n,this._accountsService=o,this._athConfirmationService=i,this._changeDetectorRef=r,this._fileSaverService=s,this._router=y,this.store=q,this.accounts=[],this.emptyAccount=A.AR,this.searchInputControl=new l.NI,this.selectedAccount=null,this._unsubscribeAll=new h.x}ngOnInit(){this.accounts$=this.store.select(Z.L3)}ngAfterViewInit(){}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}createAccount(){this.openDialog(A.AR,"add","90%")}editAccount(n){this.openDialog(n,"edit","90%")}openDialog(n,o,i){this._accountDialog.open(mt,{data:{account:n,dialogMode:o},width:i,panelClass:"ath-dialog-panel"})}navigateToAccount(n){this._router.navigateByUrl(`/accounts/${n}`)}navigateToStatement(n){this._router.navigateByUrl(`/accounts/${n}/statement`)}exportAsExcelFile(){this._fileSaverService.exportAsExcelFile(this.accounts,"accounts")}exportAsCsvFile(){this._fileSaverService.exportAsCsvFile(this.accounts,"accounts")}deleteAccount(n){this._athConfirmationService.open({title:"Eliminar cuenta",message:`\xbfEst\xe1 seguro que desea eliminar el cuenta ${n.name}?`,icon:{show:!0,name:"heroicons_outline:question-mark-circle",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._accountsService.deleteAccount(n._id).subscribe(r=>{!r||(this._athConfirmationService.open({title:"Confirmaci\xf3n",message:`Cuenta ${n.name} eliminado correctamente`,icon:{show:!0,name:"heroicons_outline:check",color:"success"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1}),this._changeDetectorRef.markForCheck())},r=>{console.warn(r),this._athConfirmationService.open({title:`${r.statusText}: ${r.status}`,message:r.error.message,icon:{show:!0,name:"heroicons_outline:exclamation-circle",color:"error"},actions:{confirm:{show:!0,label:"Ok",color:"primary"},cancel:{show:!1}},dismissible:!1})})}),this._changeDetectorRef.markForCheck()}trackByFn(n,o){return o.id||n}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.uw),t.Y36(F.i),t.Y36(N.C),t.Y36(t.sBO),t.Y36(J.m),t.Y36(_.F0),t.Y36(v.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ath-accounts"]],viewQuery:function(n,o){if(1&n&&(t.Gf(U.NW,5),t.Gf(g.YE,5)),2&n){let i;t.iGM(i=t.CRH())&&(o._paginator=i.first),t.iGM(i=t.CRH())&&(o._sort=i.first)}},decls:39,vars:8,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-wrap","p-6","sm:flex-row","flex-0","sm:items-center","sm:justify-between","pb-22","sm:pt-12","sm:pb-28","sm:px-10","bg-mine-50","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"whitespace-nowrap","text-primary-700"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","flex-shrink-0","mt-6","sm:mt-0","sm:ml-4"],["mat-button","",1,"ml-4","rounded-sm","bg-primary-700",3,"click"],[1,"text-mine-900",3,"svgIcon"],[1,"ml-2","mr-1","text-lg","text-mine-900"],[1,"flex-auto","p-6","-mt-16","bg-mine-200","shadow","sm:p-10","rounded-t-2xl"],[1,"w-full","p-8","md:p-16","shadow","rounded-2xl","bg-card","print:w-auto","print:rounded-none","print:shadow-none","print:bg-transparent"],[1,"flex","items-center","justify-between","mb-5"],[1,"text-2xl","font-semibold","leading-tight"],[1,"-mr-3"],["mat-icon-button","",3,"matMenuTriggerFor"],[1,"icon-size-5",3,"svgIcon"],["listAccountsMenu","matMenu"],["mat-menu-item","",3,"click"],[4,"ngIf"],["noAccounts",""],[4,"ngIf","ngIfElse"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","accounts-grid","md:px-8","text-md","text-secondary","bg-mine-50","dark:bg-black","dark:bg-opacity-5"],[3,"mat-sort-header"],[1,"hidden","truncate","sm:block"],[1,"hidden","sm:block",3,"mat-sort-header"],[1,"hidden","text-center","md:block"],[1,"hidden","text-center","lg:block"],[1,"text-center"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","accounts-grid","md:px-8"],[1,"truncate"],[1,"hidden","text-center","sm:block"],[1,"flex","flex-col","justify-center","gap-1","sm:flex-row","flex-wrap"],["mat-stroked-button","","matTooltip","Estado de cuentas",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["mat-stroked-button","","matTooltip","Ver detalles",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["mat-stroked-button","","matTooltip","Editar",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],["mat-stroked-button","","matTooltip","Eliminar",1,"px-2","leading-6","min-w-10","min-h-7","h-7",3,"click"],[1,"text-green-400","icon-size-5",3,"svgIcon"],[1,"text-red-400","icon-size-5",3,"svgIcon"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div"),t.TgZ(4,"div",3),t.TgZ(5,"div"),t.TgZ(6,"a",4),t._uU(7,"Cuentas"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"div",5),t.TgZ(9,"a",6),t._UZ(10,"mat-icon",7),t.TgZ(11,"span",8),t._uU(12,"Regresar"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",9),t.TgZ(14,"h2",10),t._uU(15," Registro de cuentas "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",11),t.TgZ(17,"button",12),t.NdJ("click",function(){return o.createAccount()}),t._UZ(18,"mat-icon",13),t.TgZ(19,"span",14),t._uU(20,"Nueva"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"div",15),t.TgZ(22,"div",16),t.TgZ(23,"div",17),t.TgZ(24,"div",18),t._uU(25,"Registro de cuentas"),t.qZA(),t.TgZ(26,"div",19),t.TgZ(27,"button",20),t._UZ(28,"mat-icon",21),t.qZA(),t.TgZ(29,"mat-menu",null,22),t.TgZ(31,"button",23),t.NdJ("click",function(){return o.exportAsExcelFile()}),t._uU(32,"Exportar a excel"),t.qZA(),t.TgZ(33,"button",23),t.NdJ("click",function(){return o.exportAsCsvFile()}),t._uU(34,"Exportar a csv"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(35,ht,2,2,"ng-container",24),t.ALo(36,"async"),t.YNc(37,Zt,2,0,"ng-template",null,25,t.W1O),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.MAs(30);t.xp6(9),t.Q6J("routerLink","./.."),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:chevron-left"),t.xp6(8),t.Q6J("svgIcon","heroicons_outline:plus"),t.xp6(9),t.Q6J("matMenuTriggerFor",i),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:dots-vertical"),t.xp6(7),t.Q6J("ngIf",t.lcZ(36,6,o.accounts$))}},directives:[Q.PQ,_.yS,D.Hw,T.lW,m.p6,m.VK,m.OP,u.O5,g.YE,g.nU,u.sg,gt.gM],pipes:[u.Ov,u.JJ,u.uU],encapsulation:2,data:{animation:I.p},changeDetection:0}),e})();var vt=a(4063),p=a(7681),C=a(5497);const Tt=[{path:"",component:At,resolve:{accounts:p.$c,users:C.o}},{path:":accountId",component:L,resolve:{account:p.EW,accounts:p.$c,operations:p.$G,users:C.o}},{path:":accountId/statement",component:vt.N,resolve:{account:p.EW,users:C.o}}];let bt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[_.Bz.forChild(Tt),M.m]]}),e})()}}]);