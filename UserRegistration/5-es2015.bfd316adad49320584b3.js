(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"kj/R":function(e,t,o){"use strict";o.r(t),o.d(t,"UserRegistrationModule",(function(){return O}));var r=o("ofXK"),n=o("3Pt+"),i=o("tyNb");const a=["anc@abc.com","xyz@123.com","abc@abc.com","123@abc.com","abc@xyz.com"];var l=o("fXoL"),c=o("1kSV");let b=(()=>{class e{constructor(e){this.modal=e}}return e.\u0275fac=function(t){return new(t||e)(l.Mb(c.a))},e.\u0275cmp=l.Gb({type:e,selectors:[["app-error-modal"]],decls:10,vars:1,consts:[[1,"modal-header"],["id","modal-title",1,"modal-title"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(e,t){1&e&&(l.Sb(0,"div",0),l.Sb(1,"h4",1),l.Bc(2,"Error"),l.Rb(),l.Rb(),l.Sb(3,"div",2),l.Bc(4),l.Rb(),l.Sb(5,"div",3),l.Sb(6,"button",4),l.ec("click",(function(){return t.modal.dismiss("cancel click")})),l.Bc(7,"Cancel"),l.Rb(),l.Sb(8,"button",5),l.ec("click",(function(){return t.modal.close("Ok click")})),l.Bc(9,"Ok"),l.Rb(),l.Rb()),2&e&&(l.zb(4),l.Dc(" ",t.message,"\n"))},encapsulation:2}),e})();var s=o("1G5W"),d=o("JIr8"),m=o("nYR2"),p=o("eIep"),u=o("XNiG"),f=o("EY2u"),g=o("K/R+");function v(e,t){1&e&&(l.Sb(0,"div"),l.Bc(1," This field is required. "),l.Rb())}function S(e,t){1&e&&(l.Sb(0,"div"),l.Bc(1," First Name and Last Name should be letters only. "),l.Rb())}function h(e,t){1&e&&(l.Sb(0,"div"),l.Bc(1," Phone Number should be a 11 digit numbers. "),l.Rb())}function R(e,t){1&e&&(l.Sb(0,"div"),l.Bc(1," Password must be alphanumeric and at least 8 characters long. "),l.Rb())}function N(e,t){if(1&e&&(l.Qb(0),l.zc(1,S,2,0,"div",2),l.zc(2,h,2,0,"div",2),l.zc(3,R,2,0,"div",2),l.Pb()),2&e){const e=l.gc(2);l.zb(1),l.lc("ngIf","firstName"===e.fieldName||"lastName"===e.fieldName),l.zb(1),l.lc("ngIf","phone"===e.fieldName),l.zb(1),l.lc("ngIf","password"===e.fieldName)}}function z(e,t){1&e&&(l.Sb(0,"div"),l.Bc(1," Enter a valid email. "),l.Rb())}function y(e,t){1&e&&(l.Sb(0,"div"),l.Bc(1," Email does not match. "),l.Rb())}function w(e,t){if(1&e&&(l.Sb(0,"div",1),l.zc(1,v,2,0,"div",2),l.zc(2,N,4,3,"ng-container",2),l.zc(3,z,2,0,"div",2),l.zc(4,y,2,0,"div",2),l.Rb()),2&e){const e=l.gc();l.zb(1),l.lc("ngIf",e.control.errors.required),l.zb(1),l.lc("ngIf",e.control.errors.pattern),l.zb(1),l.lc("ngIf",e.control.errors.email),l.zb(1),l.lc("ngIf",e.control.errors.emailMatch)}}let C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Gb({type:e,selectors:[["app-validation-error"]],inputs:{control:"control",fieldName:"fieldName"},decls:1,vars:1,consts:[["class","alert alert-danger",4,"ngIf"],[1,"alert","alert-danger"],[4,"ngIf"]],template:function(e,t){1&e&&l.zc(0,w,5,4,"div",0),2&e&&l.lc("ngIf",t.control.invalid&&(t.control.dirty||t.control.touched))},directives:[r.k],styles:[""]}),e})();function F(e,t){if(1&e){const e=l.Tb();l.Qb(0),l.Sb(1,"button",34),l.ec("click",(function(){l.tc(e);const o=t.$implicit;return l.gc().onTitleChange(o)})),l.Bc(2),l.Rb(),l.Pb()}if(2&e){const e=t.$implicit;l.zb(2),l.Cc(e.name)}}function k(e,t){1&e&&l.Ob(0)}function B(e,t){1&e&&l.Bc(0," Submit ")}function I(e,t){1&e&&(l.Nb(0,"span",35),l.Bc(1," Loading.. "))}const _=[{path:"",component:(()=>{class e{constructor(e,t,o,r){this.fb=e,this.modalService=t,this.userService=o,this.router=r,this.titleData=[{id:1,name:"Mr"},{id:2,name:"Mrs"},{id:3,name:"Prof"}],this.isSpinner=!1,this.isAlive$=new u.a,this.onTitleChange=e=>this.signupForm.get("title").setValue(e.name),this.getFormControl=e=>this.signupForm.get(e),this.onDropdownToggle=()=>{this.getFormControl("title").markAsTouched(),this.getFormControl("title").markAsDirty()},this.onSubmit=()=>{const{email:e}=this.signupForm.value;a.includes(e)?this.displayModal("Email exists."):(this.isSpinner=!0,this.userService.regiterUser(this.signupForm.value).pipe(Object(s.a)(this.isAlive$),Object(d.a)(()=>(this.displayModal("User registration failed."),f.a)),Object(m.a)(()=>this.isSpinner=!1),Object(p.a)(()=>this.userService.login().pipe(Object(d.a)(()=>{const{id:e,email:t}=this.userService.user.getValue();return this.displayModal(`The user with ID ${e} and email ${t} cannot be logged in`),f.a})))).subscribe(()=>this.router.navigate(["/usersummary"])))}}ngOnInit(){this.initializeForm()}ngOnDestroy(){this.isAlive$.next(),this.isAlive$.complete()}initializeForm(){this.signupForm=this.fb.group({title:["",[n.m.required]],firstName:["",[n.m.required,n.m.pattern("^[a-zA-Z ]*$")]],lastName:["",[n.m.required,n.m.pattern("^[a-zA-Z ]*$")]],email:["",[n.m.required,n.m.email]],confirmEmail:["",[n.m.required,e=>e.parent&&e.parent.get("email").value&&e.value&&e.parent.get("email").value!==e.value?{emailMatch:!0}:null]],dob:[null,[n.m.required]],phone:["",[n.m.required,,n.m.pattern("[0-9 ]{10}")]],password:["",[n.m.required,n.m.pattern("(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,})")]]})}displayModal(e){this.modalService.open(b).componentInstance.message=e}}return e.\u0275fac=function(t){return new(t||e)(l.Mb(n.b),l.Mb(c.g),l.Mb(g.a),l.Mb(i.a))},e.\u0275cmp=l.Gb({type:e,selectors:[["app-user-registration"]],decls:83,vars:15,consts:[[1,"container","mt-4","user-registration","p-4"],[3,"formGroup"],[2,"text-align","center"],[1,"text","text-danger"],[1,"row","mb-4"],[1,"col-4"],["ngbDropdown","",1,"user-registration__dropdown"],["id","dropdownBasic1","ngbDropdownToggle","",1,"btn","user-registration__dropdown__label",3,"click"],["ngbDropdownMenu","","aria-labelledby","dropdownBasic1"],[4,"ngFor","ngForOf"],[3,"control"],[1,"col-1","user-registration__required"],[1,"form-row"],[1,"col-5"],[1,"form-group"],["type","text","placeholder","First Name","formControlName","firstName",1,"form-control"],["fieldName","firstName",3,"control"],[1,"controls"],["type","text","placeholder","Last Name","formControlName","lastName",1,"form-control"],["fieldName","lastName",3,"control"],["type","email","placeholder","Email","formControlName","email",1,"form-control"],["type","email","placeholder","Confirm Email","formControlName","confirmEmail",1,"form-control"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-8"],["type","date","placeholder","dd/mm/yyyy","formControlName","dob",1,"form-control"],["type","number","placeholder","Phone Number","formControlName","phone",1,"form-control"],["fieldName","phone",3,"control"],["type","password","placeholder","Password","formControlName","password",1,"form-control"],["fieldName","password",3,"control"],["type","submit",1,"btn","btn-primary",3,"disabled","click"],[4,"ngIf","ngIfThen","ngIfElse"],["mainTemplate",""],["spinnerTemplate",""],["ngbDropdownItem","",3,"click"],[1,"spinner-border","spinner-border-sm"]],template:function(e,t){if(1&e&&(l.Sb(0,"div",0),l.Sb(1,"form",1),l.Sb(2,"h3",2),l.Bc(3," Sign Up Form "),l.Rb(),l.Sb(4,"p",3),l.Bc(5," Field marked as * are mandatory. "),l.Rb(),l.Sb(6,"div",4),l.Sb(7,"div",5),l.Sb(8,"div",6),l.Sb(9,"div",7),l.ec("click",(function(){return t.onDropdownToggle()})),l.Bc(10),l.Rb(),l.Sb(11,"div",8),l.zc(12,F,3,1,"ng-container",9),l.Rb(),l.Rb(),l.Nb(13,"app-validation-error",10),l.Rb(),l.Sb(14,"div",11),l.Sb(15,"span"),l.Bc(16,"*"),l.Rb(),l.Rb(),l.Rb(),l.Sb(17,"div",12),l.Sb(18,"div",13),l.Sb(19,"div",14),l.Nb(20,"input",15),l.Nb(21,"app-validation-error",16),l.Rb(),l.Rb(),l.Sb(22,"div",11),l.Sb(23,"span"),l.Bc(24,"*"),l.Rb(),l.Rb(),l.Sb(25,"div",13),l.Sb(26,"div",14),l.Sb(27,"div",17),l.Nb(28,"input",18),l.Nb(29,"app-validation-error",19),l.Rb(),l.Rb(),l.Rb(),l.Sb(30,"div",11),l.Sb(31,"span"),l.Bc(32,"*"),l.Rb(),l.Rb(),l.Rb(),l.Sb(33,"div",12),l.Sb(34,"div",13),l.Sb(35,"div",14),l.Nb(36,"input",20),l.Nb(37,"app-validation-error",10),l.Rb(),l.Rb(),l.Sb(38,"div",11),l.Sb(39,"span"),l.Bc(40,"*"),l.Rb(),l.Rb(),l.Sb(41,"div",13),l.Sb(42,"div",14),l.Sb(43,"div",17),l.Nb(44,"input",21),l.Nb(45,"app-validation-error",10),l.Rb(),l.Rb(),l.Rb(),l.Sb(46,"div",11),l.Sb(47,"span"),l.Bc(48,"*"),l.Rb(),l.Rb(),l.Rb(),l.Sb(49,"div",12),l.Sb(50,"div",13),l.Sb(51,"div",22),l.Sb(52,"label",23),l.Bc(53,"Date of birth:"),l.Rb(),l.Sb(54,"div",24),l.Nb(55,"input",25),l.Nb(56,"app-validation-error",10),l.Rb(),l.Rb(),l.Rb(),l.Sb(57,"div",11),l.Sb(58,"span"),l.Bc(59,"*"),l.Rb(),l.Rb(),l.Sb(60,"div",13),l.Sb(61,"div",14),l.Sb(62,"div",17),l.Nb(63,"input",26),l.Nb(64,"app-validation-error",27),l.Rb(),l.Rb(),l.Rb(),l.Sb(65,"div",11),l.Sb(66,"span"),l.Bc(67,"*"),l.Rb(),l.Rb(),l.Rb(),l.Sb(68,"div",12),l.Sb(69,"div",13),l.Sb(70,"div",14),l.Nb(71,"input",28),l.Nb(72,"app-validation-error",29),l.Rb(),l.Rb(),l.Sb(73,"div",11),l.Sb(74,"span"),l.Bc(75,"*"),l.Rb(),l.Rb(),l.Rb(),l.Sb(76,"div",14),l.Sb(77,"button",30),l.ec("click",(function(){return t.onSubmit()})),l.zc(78,k,1,0,"ng-container",31),l.zc(79,B,1,0,"ng-template",null,32,l.Ac),l.zc(81,I,2,0,"ng-template",null,33,l.Ac),l.Rb(),l.Rb(),l.Rb(),l.Rb()),2&e){const e=l.sc(80),o=l.sc(82);l.zb(1),l.lc("formGroup",t.signupForm),l.zb(9),l.Dc(" ",t.signupForm.get("title").value||"Your Title"," "),l.zb(2),l.lc("ngForOf",t.titleData),l.zb(1),l.lc("control",t.getFormControl("title")),l.zb(8),l.lc("control",t.getFormControl("firstName")),l.zb(8),l.lc("control",t.getFormControl("lastName")),l.zb(8),l.lc("control",t.getFormControl("email")),l.zb(8),l.lc("control",t.getFormControl("confirmEmail")),l.zb(11),l.lc("control",t.getFormControl("dob")),l.zb(8),l.lc("control",t.getFormControl("phone")),l.zb(8),l.lc("control",t.getFormControl("password")),l.zb(5),l.lc("disabled",t.signupForm.invalid),l.zb(1),l.lc("ngIf",t.isSpinner)("ngIfThen",o)("ngIfElse",e)}},directives:[n.o,n.i,n.d,c.b,c.f,c.d,r.j,C,n.a,n.h,n.c,n.k,r.k,c.c],styles:[".user-registration[_ngcontent-%COMP%]{background:#fff}.user-registration__dropdown[_ngcontent-%COMP%]{background-color:#f8f8ff}.user-registration__dropdown__label[_ngcontent-%COMP%]{width:100%;text-align:left}.user-registration__required[_ngcontent-%COMP%]{color:red;margin-left:inherit}.form-group[_ngcontent-%COMP%]{margin-bottom:2rem}.form-control[_ngcontent-%COMP%]{background-color:#f8f8ff;border:none}"]}),e})()}];let M=(()=>{class e{}return e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({factory:function(t){return new(t||e)},imports:[[i.b.forChild(_)],i.b]}),e})(),O=(()=>{class e{}return e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({factory:function(t){return new(t||e)},imports:[[r.c,n.l,M,c.e]]}),e})()}}]);