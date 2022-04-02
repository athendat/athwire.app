"use strict";(self.webpackChunkath=self.webpackChunkath||[]).push([[827],{9827:($,d,r)=>{r.r(d),r.d(d,{ReportsModule:()=>j});var h=r(5357),Z=r(2455),a=r(3075),A=r(9646),O=r(7579),T=r(2722),M=r(5700),y=r(5439),b=r(508),t=r(5e3),g=r(1135),Y=r(4004),C=r(2340),F=r(520);const I=C.N.API_URL;let u=(()=>{class n{constructor(e){this._httpClient=e,this._monthOperations=new g.X(null),this._pagination=new g.X(null)}get monthOperations$(){return this._monthOperations.asObservable()}get pagination$(){return this._pagination.asObservable()}getMonthOperations(e){return this._httpClient.get(`${I}/invoices/month-operations/${e}`).pipe((0,Y.U)(o=>{const s=class S{constructor(i){Object.assign(this,i)}static fill(i){const e=[];for(let o=1;o<13;o++)e.push({_id:o,month:o});for(const o of i){const s=e.findIndex(c=>c.month===o.month);e[s]=o}return e}}.fill(o.monthOperations);return this._monthOperations.next(s),o.monthOperations}))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(F.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var R=r(1927),v=r(5303),U=r(5245),f=r(7322),J=r(7531),l=r(6856),p=r(9808),E=r(7423),m=r(2181),x=r(4847);function k(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"div",36),t.TgZ(2,"div",37),t._uU(3),t.qZA(),t.TgZ(4,"div",32),t._uU(5),t.qZA(),t.TgZ(6,"div",38),t._uU(7),t.qZA(),t.TgZ(8,"div",38),t._uU(9),t.qZA(),t.qZA(),t.BQk()),2&n){const e=i.$implicit,o=t.oxw(3);t.xp6(3),t.hij(" ",o.monthByIndex(e.month)," "),t.xp6(2),t.hij(" ",e.totalInvoices," "),t.xp6(2),t.hij(" ",e.totalCanceled," "),t.xp6(2),t.hij(" ",e.totalAmount," ")}}function B(n,i){if(1&n&&(t.ynx(0),t.YNc(1,k,10,4,"ng-container",35),t.BQk()),2&n){const e=i.ngIf,o=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e)("ngForTrackBy",o.trackByFn)}}function Q(n,i){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",21),t.TgZ(2,"div",22),t._uU(3,"Reporte de Operaciones del Mes"),t.qZA(),t.TgZ(4,"div",23),t.TgZ(5,"button",24),t._UZ(6,"mat-icon",25),t.qZA(),t.TgZ(7,"mat-menu",null,26),t.TgZ(9,"button",27),t.NdJ("click",function(){return t.CHM(e),t.oxw().exportAsExcelFile()}),t._uU(10,"Exportar a excel"),t.qZA(),t.TgZ(11,"button",27),t.NdJ("click",function(){return t.CHM(e),t.oxw().exportAsCsvFile()}),t._uU(12,"Exportar a csv"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",28),t.TgZ(14,"div",29),t.TgZ(15,"div"),t._uU(16," Mes "),t.qZA(),t.TgZ(17,"div",30),t.TgZ(18,"div",31),t._uU(19," Remesas "),t.qZA(),t.qZA(),t.TgZ(20,"div",32),t._uU(21," Canceladas "),t.qZA(),t.TgZ(22,"div",33),t._uU(23," Dinero Depositado "),t.qZA(),t.qZA(),t.YNc(24,B,2,2,"ng-container",34),t.ALo(25,"async"),t.qZA(),t.BQk()}if(2&n){const e=t.MAs(8),o=t.oxw();t.xp6(5),t.Q6J("matMenuTriggerFor",e),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:dots-vertical"),t.xp6(12),t.Q6J("mat-sort-header","no"),t.xp6(6),t.Q6J("ngIf",t.lcZ(25,4,o.monthOperations$))}}function q(n,i){1&n&&(t.TgZ(0,"div",39),t._uU(1,"A\xfan no se ha generado ning\xfan estado cuenta!"),t.qZA())}const D={parse:{dateInput:"YYYY"},display:{dateInput:"YYYY",monthYearLabel:"YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"YYYY"}},L=[{path:"",component:(()=>{class n{constructor(e,o,s){this._reportService=e,this._changeDetectorRef=o,this._fileSaverService=s,this.monthOperations=[],this.monthOperations$=(0,A.of)([]),this._unsubscribeAll=new O.x,this.date=new a.NI(y())}ngOnInit(){this.monthOperations$=this._reportService.monthOperations$}ngAfterViewInit(){}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}setMonthAndYear(e,o){const s=this.date.value;this._reportService.getMonthOperations(e.year()).pipe((0,T.R)(this._unsubscribeAll)).subscribe(),s.year(e.year()),this.date.setValue(s),o.close()}exportAsExcelFile(){this._fileSaverService.exportAsExcelFile(this.monthOperations,"statements")}exportAsCsvFile(){this._fileSaverService.exportAsCsvFile(this.monthOperations,"statements")}trackByFn(e,o){return o.id||e}monthByIndex(e){return["Enero","febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"][e-1]}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u),t.Y36(t.sBO),t.Y36(R.m))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ath-month-operations"]],features:[t._Bn([{provide:b.sG,useValue:D}])],decls:28,vars:9,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-wrap","p-6","sm:flex-row","flex-0","sm:items-center","sm:justify-between","pb-22","sm:pt-12","sm:pb-28","sm:px-10","bg-mine-50","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex-wrap","items-center","hidden","font-medium","sm:flex"],[1,"whitespace-nowrap","text-primary-700"],[1,"flex","sm:hidden"],[1,"inline-flex","items-center","-ml-1.5","text-secondary","font-medium",3,"routerLink"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","flex-shrink-0","mt-6","sm:mt-0","sm:ml-4"],["appearance","fill"],["matInput","",3,"matDatepicker","formControl"],["matSuffix","",3,"for"],["startView","multi-year","panelClass","example-month-picker",3,"yearSelected"],["dp",""],[1,"flex-auto","p-6","-mt-16","bg-mine-200","shadow","sm:p-10","rounded-t-2xl"],[1,"w-full","p-8","md:p-16","shadow","rounded-2xl","bg-card","print:w-auto","print:rounded-none","print:shadow-none","print:bg-transparent"],[4,"ngIf","ngIfElse"],["noMonthOperations",""],[1,"flex","items-center","justify-between","mb-5"],[1,"text-2xl","font-semibold","leading-tight"],[1,"-mr-3"],["mat-icon-button","",3,"matMenuTriggerFor"],[1,"icon-size-5",3,"svgIcon"],["listMonthOperationsMenu","matMenu"],["mat-menu-item","",3,"click"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","month-operations-grid","md:px-8","text-md","text-secondary","bg-mine-50","dark:bg-black","dark:bg-opacity-5"],[1,"justify-center","text-center","hidden","truncate","sm:flex"],[1,"text-center","truncate",3,"mat-sort-header"],[1,"text-center","hidden","sm:block"],[1,"text-center"],[4,"ngIf"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","month-operations-grid","md:px-8"],[1,"truncate"],[1,"hidden","text-center","sm:block"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","sm:p-16"]],template:function(e,o){if(1&e){const s=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div"),t.TgZ(4,"div",3),t.TgZ(5,"div"),t.TgZ(6,"a",4),t._uU(7,"Operaciones del Mes"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"div",5),t.TgZ(9,"a",6),t._UZ(10,"mat-icon",7),t.TgZ(11,"span",8),t._uU(12,"Regresar"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",9),t.TgZ(14,"h2",10),t._uU(15," Reporte de Operaciones del Mes "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",11),t.TgZ(17,"mat-form-field",12),t._UZ(18,"input",13),t._UZ(19,"mat-datepicker-toggle",14),t.TgZ(20,"mat-datepicker",15,16),t.NdJ("yearSelected",function(N){t.CHM(s);const w=t.MAs(21);return o.setMonthAndYear(N,w)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"div",17),t.TgZ(23,"div",18),t.YNc(24,Q,26,6,"ng-container",19),t.ALo(25,"async"),t.YNc(26,q,2,0,"ng-template",null,20,t.W1O),t.qZA(),t.qZA(),t.qZA()}if(2&e){const s=t.MAs(21),c=t.MAs(27);t.xp6(9),t.Q6J("routerLink","./.."),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:chevron-left"),t.xp6(8),t.Q6J("matDatepicker",s)("formControl",o.date),t.xp6(1),t.Q6J("for",s),t.xp6(5),t.Q6J("ngIf",t.lcZ(25,7,o.monthOperations$).length>0)("ngIfElse",c)}},directives:[v.PQ,h.yS,U.Hw,f.KE,J.Nt,l.hl,a.Fj,a.JJ,a.oH,l.nW,f.R9,l.Mq,p.O5,E.lW,m.p6,m.VK,m.OP,x.YE,x.nU,p.sg],pipes:[p.Ov],encapsulation:2,data:{animation:M.p},changeDetection:0}),n})(),resolve:{monthOperations:(()=>{class n{constructor(e){this._monthOperationsService=e}resolve(e,o){return this._monthOperationsService.getMonthOperations(new Date(Date.now()).getFullYear())}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(u))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}];let j=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[h.Bz.forChild(L),v.ZD,Z.m]]}),n})()}}]);