google.maps.__gjsload__('overlay', '\'use strict\';function aT(a){this.j=a}P(aT,U);$a(aT[I],function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&we(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.j:null))});function bT(){}function cT(){var a=this.gm_props_;if(this[Sn]()){if(this[Pc]()){if(!a.Rf&&this.onAdd)this.onAdd();a.Rf=!0;this.draw()}}else{if(a.Rf)if(this[$c])this[$c]();else this[Gb]();a.Rf=!1}}function dT(a){a.gm_props_=a.gm_props_||new bT;return a.gm_props_}function eT(a){Kj[K](this);this.na=S(a,cT)}P(eT,Kj);function fT(){}\nfT[I].j=function(a){var b=a[Pn](),c=dT(a),d=c.Hd;c.Hd=b;d&&(c=dT(a),(d=c.Fa)&&d[vn](),(d=c.Si)&&d[vn](),a[vn](),a.set("panes",null),a.set("projection",null),R(c.Z,T[Ab]),c.Z=null,c.pb&&(c.pb.na(),c.pb=null),ps("Ox","-p",a));if(b){c=dT(a);d=c.pb;d||(d=c.pb=new eT(a));R(c.Z,T[Ab]);var e=c.Fa=c.Fa||new rr,f=b[B];e[p]("zoom",f);e[p]("offset",f);e[p]("center",f,"projectionCenterQ");e[p]("projection",b);e[p]("projectionTopLeft",f);e=c.Si=c.Si||new aT(e);e[p]("zoom",f);e[p]("offset",f);e[p]("projection",b);\ne[p]("projectionTopLeft",f);a[p]("projection",e,"outProjection");a[p]("panes",f);e=S(d,d.X);c.Z=[T[A](a,"panes_changed",e),T[A](f,"zoom_changed",e),T[A](f,"offset_changed",e),T[A](b,"projection_changed",e),T[A](f,"projectioncenterq_changed",e),T[v](b,"forceredraw",d)];d.X();b instanceof ih&&(ms(b,"Ox"),os("Ox","-p",a,!!b.aa))}};var gT=new fT;Bh.overlay=function(a){eval(a)};cg("overlay",gT);\n')