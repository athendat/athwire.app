"use strict";(self.webpackChunkath=self.webpackChunkath||[]).push([[768],{7768:(j,u,s)=>{s.r(u),s.d(u,{StatementsModule:()=>N});var c=s(5357),Z=s(2455),f=s(3075),h=s(6087),m=s(4847),A=s(9646),T=s(7579),x=s(2722),l=s(5620);const y=(0,l.P1)(n=>n.statements,n=>n.statements);var C=s(5700),t=s(5e3),b=s(2755),F=s(7967),U=s(1927),v=s(5303),_=s(5245),r=s(9808),k=s(7423),d=s(2181);function q(n,i){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",34),t.NdJ("click",function(){const g=t.CHM(e).$implicit;return t.oxw(3).viewStatement(g._id)}),t.TgZ(2,"div",35),t._uU(3),t.qZA(),t.TgZ(4,"div",36),t._uU(5),t.qZA(),t.TgZ(6,"div",29),t._uU(7),t.ALo(8,"date"),t.qZA(),t.TgZ(9,"div",29),t._uU(10),t.ALo(11,"currency"),t.qZA(),t.TgZ(12,"div",30),t._uU(13),t.ALo(14,"currency"),t.qZA(),t.TgZ(15,"div",31),t._uU(16),t.ALo(17,"currency"),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=i.$implicit;t.xp6(3),t.hij(" ",e.accountName," "),t.xp6(2),t.hij(" ",e.no," "),t.xp6(2),t.hij(" ",t.lcZ(8,6,e.emitDate)," "),t.xp6(3),t.hij(" ",t.lcZ(11,8,e.initBalance)," "),t.xp6(3),t.hij(" ",t.lcZ(14,10,e.endBalance)," "),t.xp6(3),t.hij(" ",t.lcZ(17,12,e.operations.length)," ")}}function E(n,i){if(1&n&&(t.ynx(0),t.YNc(1,q,18,14,"ng-container",33),t.BQk()),2&n){const e=i.ngIf,o=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e)("ngForTrackBy",o.trackByFn)}}function I(n,i){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",16),t.TgZ(2,"div",17),t._uU(3,"Registro de Estados de Cuentas"),t.qZA(),t.TgZ(4,"div",18),t.TgZ(5,"button",19),t._UZ(6,"mat-icon",20),t.qZA(),t.TgZ(7,"mat-menu",null,21),t.TgZ(9,"button",22),t.NdJ("click",function(){return t.CHM(e),t.oxw().exportAsExcelFile()}),t._uU(10,"Exportar a excel"),t.qZA(),t.TgZ(11,"button",22),t.NdJ("click",function(){return t.CHM(e),t.oxw().exportAsCsvFile()}),t._uU(12,"Exportar a csv"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",23),t.TgZ(14,"div",24),t.TgZ(15,"div"),t._uU(16," Nombre de la cuenta "),t.qZA(),t.TgZ(17,"div",25),t.TgZ(18,"div",26),t._uU(19," Consecutivo "),t.qZA(),t.qZA(),t.TgZ(20,"div",27),t.TgZ(21,"div",28),t._uU(22," Fecha de emisi\xf3n "),t.qZA(),t.qZA(),t.TgZ(23,"div",29),t._uU(24," Balance inicial "),t.qZA(),t.TgZ(25,"div",30),t._uU(26," Balance final "),t.qZA(),t.TgZ(27,"div",31),t._uU(28," Cantidad de operaciones "),t.qZA(),t.qZA(),t.YNc(29,E,2,2,"ng-container",32),t.ALo(30,"async"),t.qZA(),t.BQk()}if(2&n){const e=t.MAs(8),o=t.oxw();t.xp6(5),t.Q6J("matMenuTriggerFor",e),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:dots-vertical"),t.xp6(12),t.Q6J("mat-sort-header","no"),t.xp6(3),t.Q6J("mat-sort-header","emitDate"),t.xp6(8),t.Q6J("ngIf",t.lcZ(30,5,o.statements$))}}function M(n,i){1&n&&(t.TgZ(0,"div",37),t._uU(1,"A\xfan no se ha generado ning\xfan estado cuenta!"),t.qZA())}let Q=(()=>{class n{constructor(e,o,a,g,p,Y){this._statementsService=e,this._athConfirmationService=o,this._changeDetectorRef=a,this._fileSaverService=g,this._router=p,this.store=Y,this.statements=[],this.statements$=(0,A.of)([]),this.searchInputControl=new f.NI,this._unsubscribeAll=new T.x}ngOnInit(){this.statements$=this.store.select(y),this.statements$.pipe((0,x.R)(this._unsubscribeAll)).subscribe(e=>{this.statements=e,this._changeDetectorRef.markForCheck()}),this._statementsService.pagination$.pipe((0,x.R)(this._unsubscribeAll)).subscribe(e=>{this.pagination=e,this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}viewStatement(e){this._router.navigateByUrl(`/statements/${e}`)}exportAsExcelFile(){this._fileSaverService.exportAsExcelFile(this.statements,"statements")}exportAsCsvFile(){this._fileSaverService.exportAsCsvFile(this.statements,"statements")}trackByFn(e,o){return o.id||e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(b.k),t.Y36(F.C),t.Y36(t.sBO),t.Y36(U.m),t.Y36(c.F0),t.Y36(l.yh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ath-statements"]],viewQuery:function(e,o){if(1&e&&(t.Gf(h.NW,5),t.Gf(m.YE,5)),2&e){let a;t.iGM(a=t.CRH())&&(o._paginator=a.first),t.iGM(a=t.CRH())&&(o._sort=a.first)}},decls:23,vars:6,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-wrap","p-6","sm:flex-row","flex-0","sm:items-center","sm:justify-between","pb-22","sm:pt-12","sm:pb-28","sm:px-10","bg-mine-50","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"whitespace-nowrap","text-primary-700"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","flex-shrink-0","mt-6","sm:mt-0","sm:ml-4"],[1,"flex-auto","p-6","-mt-16","bg-mine-200","shadow","sm:p-10","rounded-t-2xl"],[1,"w-full","p-8","md:p-16","shadow","rounded-2xl","bg-card","print:w-auto","print:rounded-none","print:shadow-none","print:bg-transparent"],[4,"ngIf","ngIfElse"],["noStatements",""],[1,"flex","items-center","justify-between","mb-5"],[1,"text-2xl","font-semibold","leading-tight"],[1,"-mr-3"],["mat-icon-button","",3,"matMenuTriggerFor"],[1,"icon-size-5",3,"svgIcon"],["listStatementsMenu","matMenu"],["mat-menu-item","",3,"click"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","statements-grid","md:px-8","text-md","text-secondary","bg-mine-50","dark:bg-black","dark:bg-opacity-5"],[1,"justify-center","hidden","truncate","sm:flex"],[1,"text-center","truncate",3,"mat-sort-header"],[1,"justify-center","hidden","text-center","sm:flex"],[1,"text-center",3,"mat-sort-header"],[1,"hidden","text-center","sm:block"],[1,"text-center"],[1,"hidden","text-center","lg:block"],[4,"ngIf"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","statements-grid","md:px-8",3,"click"],[1,"truncate"],[1,"text-center","hidden","sm:block"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","sm:p-16"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div"),t.TgZ(4,"div",3),t.TgZ(5,"div"),t.TgZ(6,"a",4),t._uU(7,"Estados de Cuentas"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"div",5),t.TgZ(9,"a",6),t._UZ(10,"mat-icon",7),t.TgZ(11,"span",8),t._uU(12,"Regresar"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",9),t.TgZ(14,"h2",10),t._uU(15," Registro de Estados de Cuentas "),t.qZA(),t.qZA(),t.qZA(),t._UZ(16,"div",11),t.qZA(),t.TgZ(17,"div",12),t.TgZ(18,"div",13),t.YNc(19,I,31,7,"ng-container",14),t.ALo(20,"async"),t.YNc(21,M,2,0,"ng-template",null,15,t.W1O),t.qZA(),t.qZA(),t.qZA()),2&e){const a=t.MAs(22);t.xp6(9),t.Q6J("routerLink","./.."),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:chevron-left"),t.xp6(9),t.Q6J("ngIf",t.lcZ(20,4,o.statements$).length>0)("ngIfElse",a)}},directives:[v.PQ,c.yS,_.Hw,r.O5,k.lW,d.p6,d.VK,d.OP,m.YE,m.nU,r.sg],pipes:[r.Ov,r.uU,r.H9],encapsulation:2,data:{animation:C.p},changeDetection:0}),n})();var B=s(4063),R=s(8850);const J=[{path:"",component:Q,resolve:{statements:(()=>{class n{constructor(e){this.store=e}resolve(e,o){return this.store.dispatch((0,R.uQ)())}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(l.yh))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}},{path:":statementId",component:B.N}];let N=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.Bz.forChild(J),v.ZD,Z.m]]}),n})()}}]);