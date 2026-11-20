"use strict";(self.webpackChunktoga_dashboard=self.webpackChunktoga_dashboard||[]).push([[7906],{27906:(e,t,o)=>{o.r(t),o.d(t,{AppKitModal:()=>ye,W3mModal:()=>ge,W3mModalBase:()=>ve});var i=o(66386),r=o(55112),a=o(54417),n=o(46460),s=o(4324),l=o(74860),c=o(83520),d=o(53993),w=o(421),u=o(8632),p=o(40196);const m={isUnsupportedChainView:()=>"UnsupportedChain"===u.RouterController.state.view||"SwitchNetwork"===u.RouterController.state.view&&u.RouterController.state.history.includes("UnsupportedChain"),async safeClose(){if(this.isUnsupportedChainView())return void l.I.shake();await p.w.isSIWXCloseDisabled()?l.I.shake():l.I.close()}};var h=o(86533),v=o(90891),g=o(82880),y=o(69046),b=o(50745),f=o(32603);const C=i.iv`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`;var k=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let x=class extends i.oi{render(){return i.dy`<slot></slot>`}};x.styles=[b.ET,C],x=k([(0,f.M)("wui-card")],x);o(78330);var S=o(60825);o(22987),o(26576),o(19658);const R=i.iv`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`;var O=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let N=class extends i.oi{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`\n      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});\n   `,i.dy`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){S.AlertController.close()}};N.styles=[b.ET,R],O([(0,r.Cb)()],N.prototype,"message",void 0),O([(0,r.Cb)()],N.prototype,"backgroundColor",void 0),O([(0,r.Cb)()],N.prototype,"iconColor",void 0),O([(0,r.Cb)()],N.prototype,"icon",void 0),N=O([(0,f.M)("wui-alertbar")],N);const T=i.iv`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`;var A=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const I={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}};let W=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.open=S.AlertController.state.open,this.onOpen(!0),this.unsubscribe.push(S.AlertController.subscribeKey("open",(e=>{this.open=e,this.onOpen(!1)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=S.AlertController.state,o=I[t];return i.dy`
      <wui-alertbar
        message=${e}
        backgroundColor=${null===o||void 0===o?void 0:o.backgroundColor}
        iconColor=${null===o||void 0===o?void 0:o.iconColor}
        icon=${null===o||void 0===o?void 0:o.icon}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};W.styles=T,A([(0,r.SB)()],W.prototype,"open",void 0),W=A([(0,y.Mo)("w3m-alertbar")],W);var E=o(80460),$=o(66107),P=o(32751),B=o(26367);const j=i.iv`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var D=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let L=class extends i.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",t="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`\n    --local-border-radius: var(${e});\n    --local-padding: var(${t});\n`,i.dy`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};L.styles=[b.ET,b.ZM,b.Bp,j],D([(0,r.Cb)()],L.prototype,"size",void 0),D([(0,r.Cb)({type:Boolean})],L.prototype,"disabled",void 0),D([(0,r.Cb)()],L.prototype,"icon",void 0),D([(0,r.Cb)()],L.prototype,"iconColor",void 0),L=D([(0,f.M)("wui-icon-link")],L);o(72738),o(99568);const z=i.iv`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var M=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let U=class extends i.oi{constructor(){super(...arguments),this.imageSrc=""}render(){return i.dy`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?i.dy`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:i.dy`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};U.styles=[b.ET,b.ZM,b.Bp,z],M([(0,r.Cb)()],U.prototype,"imageSrc",void 0),U=M([(0,f.M)("wui-select")],U);o(79996),o(43549);var H=o(74273);const K=i.iv`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var X=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const V=["SmartSessionList"];function Y(){var e,t,o,i;const r=null===(e=u.RouterController.state.data)||void 0===e||null===(e=e.connector)||void 0===e?void 0:e.name,a=null===(t=u.RouterController.state.data)||void 0===t||null===(t=t.wallet)||void 0===t?void 0:t.name,n=null===(o=u.RouterController.state.data)||void 0===o||null===(o=o.network)||void 0===o?void 0:o.name,s=null!==a&&void 0!==a?a:r,l=d.ConnectorController.getConnectors();return{Connect:`Connect ${1===l.length&&"w3m-email"===(null===(i=l[0])||void 0===i?void 0:i.id)?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:null!==s&&void 0!==s?s:"Connect Wallet",ConnectingWalletConnect:null!==s&&void 0!==s?s:"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:s?`Get ${s}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",Profile:void 0,SwitchNetwork:null!==n&&void 0!==n?n:"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:E.N.state.socialProvider?E.N.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in progress"}}let _=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.heading=Y()[u.RouterController.state.view],this.network=c.R.state.activeCaipNetwork,this.networkImage=$.f.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=u.RouterController.state.view,this.viewDirection="",this.headerText=Y()[u.RouterController.state.view],this.unsubscribe.push(P.W.subscribeNetworkImages((()=>{this.networkImage=$.f.getNetworkImage(this.network)})),u.RouterController.subscribeKey("view",(e=>{setTimeout((()=>{this.view=e,this.headerText=Y()[e]}),H.b.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()})),c.R.subscribeKey("activeCaipNetwork",(e=>{this.network=e,this.networkImage=$.f.getNetworkImage(this.network)})))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){return i.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){B.X.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),u.RouterController.push("WhatIsAWallet")}async onClose(){await m.safeClose()}rightHeaderTemplate(){var e;const t=null===s.OptionsController||void 0===s.OptionsController||null===(e=s.OptionsController.state)||void 0===e||null===(e=e.features)||void 0===e?void 0:e.smartSessions;return"Account"===u.RouterController.state.view&&t?i.dy`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>u.RouterController.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return i.dy`
      <wui-icon-link
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const e=V.includes(this.view);return i.dy`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${e?i.dy`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){const{view:e}=u.RouterController.state,t="Connect"===e,o=s.OptionsController.state.enableEmbedded,r="ApproveTransaction"===e,n="ConnectingSiwe"===e,l="Account"===e,c=s.OptionsController.state.enableNetworkSwitch,d=r||n||t&&o;var w;return l&&c?i.dy`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,a.o)(null===(w=this.network)||void 0===w?void 0:w.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,a.o)(this.networkImage)}
      ></wui-select>`:this.showBack&&!d?i.dy`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:i.dy`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(B.X.sendEvent({type:"track",event:"CLICK_NETWORKS"}),u.RouterController.push("Networks"))}isAllowedNetworkSwitch(){const e=c.R.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,o=null===e||void 0===e?void 0:e.find((e=>{var t;let{id:o}=e;return o===(null===(t=this.network)||void 0===t?void 0:t.id)}));return t||!o}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:e}=u.RouterController.state;let t=H.b.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=H.b.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){var e;const{history:t}=u.RouterController.state,o=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#dynamic");t.length>1&&!this.showBack&&o?(await o.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,o.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&o&&(await o.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,o.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){u.RouterController.goBack()}};_.styles=K,X([(0,r.SB)()],_.prototype,"heading",void 0),X([(0,r.SB)()],_.prototype,"network",void 0),X([(0,r.SB)()],_.prototype,"networkImage",void 0),X([(0,r.SB)()],_.prototype,"showBack",void 0),X([(0,r.SB)()],_.prototype,"prevHistoryLength",void 0),X([(0,r.SB)()],_.prototype,"view",void 0),X([(0,r.SB)()],_.prototype,"viewDirection",void 0),X([(0,r.SB)()],_.prototype,"headerText",void 0),_=X([(0,y.Mo)("w3m-header")],_);o(10216);const G=i.iv`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;var q=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let F=class extends i.oi{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return i.dy`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.loading?i.dy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:"default"===this.iconType?i.dy`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`:i.dy`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};F.styles=[b.ET,G],q([(0,r.Cb)()],F.prototype,"backgroundColor",void 0),q([(0,r.Cb)()],F.prototype,"iconColor",void 0),q([(0,r.Cb)()],F.prototype,"icon",void 0),q([(0,r.Cb)()],F.prototype,"message",void 0),q([(0,r.Cb)()],F.prototype,"loading",void 0),q([(0,r.Cb)()],F.prototype,"iconType",void 0),F=q([(0,f.M)("wui-snackbar")],F);const Z=i.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var J=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const Q={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let ee=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=v.SnackController.state.open,this.unsubscribe.push(v.SnackController.subscribeKey("open",(e=>{this.open=e,this.onOpen()})))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach((e=>e()))}render(){var e;const{message:t,variant:o,svg:r}=v.SnackController.state,a=Q[o],{icon:n,iconColor:s}=null!==(e=null!==r&&void 0!==r?r:a)&&void 0!==e?e:{};return i.dy`
      <wui-snackbar
        message=${t}
        backgroundColor=${null===a||void 0===a?void 0:a.backgroundColor}
        iconColor=${s}
        icon=${n}
        .loading=${"loading"===o}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),v.SnackController.state.autoClose&&(this.timeout=setTimeout((()=>v.SnackController.hide()),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};ee.styles=Z,J([(0,r.SB)()],ee.prototype,"open",void 0),ee=J([(0,y.Mo)("w3m-snackbar")],ee);var te=o(61631),oe=o(31085),ie=o(4153);const re=(0,te.sj)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),ae={state:re,subscribe:e=>(0,te.Ld)(re,(()=>e(re))),subscribeKey:(e,t)=>(0,oe.VW)(re,e,t),showTooltip(e){let{message:t,triggerRect:o,variant:i}=e;re.open=!0,re.message=t,re.triggerRect=o,re.variant=i},hide(){re.open=!1,re.message="",re.triggerRect={width:0,height:0,top:0,left:0}}},ne=(0,ie.P)(ae);o(75692);const se=i.iv`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var le=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let ce=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.open=ne.state.open,this.message=ne.state.message,this.triggerRect=ne.state.triggerRect,this.variant=ne.state.variant,this.unsubscribe.push(ne.subscribe((e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`\n    --w3m-tooltip-top: ${e}px;\n    --w3m-tooltip-left: ${t}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,i.dy`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};ce.styles=[se],le([(0,r.SB)()],ce.prototype,"open",void 0),le([(0,r.SB)()],ce.prototype,"message",void 0),le([(0,r.SB)()],ce.prototype,"triggerRect",void 0),le([(0,r.SB)()],ce.prototype,"variant",void 0),ce=le([(0,y.Mo)("w3m-tooltip"),(0,y.Mo)("w3m-tooltip")],ce);const de=i.iv`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;var we=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let ue=class extends i.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=u.RouterController.state.view,this.viewDirection="",this.unsubscribe.push(u.RouterController.subscribeKey("view",(e=>this.onViewChange(e))))}firstUpdated(){var e;this.resizeObserver=new ResizeObserver((e=>{let[t]=e;const o=`${null===t||void 0===t?void 0:t.contentRect.height}px`;"0px"!==this.prevHeight&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",o),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout((()=>{this.prevHeight=o,this.style.animation="unset"}),H.b.ANIMATION_DURATIONS.ModalHeight)})),null===(e=this.resizeObserver)||void 0===e||e.observe(this.getWrapper())}disconnectedCallback(){var e;null===(e=this.resizeObserver)||void 0===e||e.unobserve(this.getWrapper()),this.unsubscribe.forEach((e=>e()))}render(){return i.dy`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return i.dy`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return i.dy`<w3m-account-view></w3m-account-view>`;case"AllWallets":return i.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return i.dy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return i.dy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return i.dy`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return i.dy`<w3m-connect-view></w3m-connect-view>`;case"Create":return i.dy`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return i.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return i.dy`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return i.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return i.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return i.dy`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return i.dy`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return i.dy`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return i.dy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return i.dy`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return i.dy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return i.dy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return i.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return i.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return i.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return i.dy`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return i.dy`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return i.dy`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return i.dy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return i.dy`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return i.dy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return i.dy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return i.dy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return i.dy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return i.dy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return i.dy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return i.dy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return i.dy`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return i.dy`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return i.dy`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return i.dy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return i.dy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return i.dy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return i.dy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return i.dy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return i.dy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return i.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return i.dy`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return i.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return i.dy`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return i.dy`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return i.dy`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return i.dy`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return i.dy`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return i.dy`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return i.dy`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return i.dy`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return i.dy`<w3m-pay-loading-view></w3m-pay-loading-view>`}}onViewChange(e){ne.hide();let t=H.b.VIEW_DIRECTION.Next;const{history:o}=u.RouterController.state;o.length<this.prevHistoryLength&&(t=H.b.VIEW_DIRECTION.Prev),this.prevHistoryLength=o.length,this.viewDirection=t,setTimeout((()=>{this.view=e}),H.b.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("div")}};ue.styles=de,we([(0,r.SB)()],ue.prototype,"view",void 0),we([(0,r.SB)()],ue.prototype,"viewDirection",void 0),ue=we([(0,y.Mo)("w3m-router")],ue);const pe=i.iv`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.appkit-modal) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var me=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const he="scroll-lock";class ve extends i.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=s.OptionsController.state.enableEmbedded,this.open=l.I.state.open,this.caipAddress=c.R.state.activeCaipAddress,this.caipNetwork=c.R.state.activeCaipNetwork,this.shake=l.I.state.shake,this.filterByNamespace=d.ConnectorController.state.filterByNamespace,this.initializeTheming(),w.ApiController.prefetchAnalyticsConfig(),this.unsubscribe.push(l.I.subscribeKey("open",(e=>e?this.onOpen():this.onClose())),l.I.subscribeKey("shake",(e=>this.shake=e)),c.R.subscribeKey("activeCaipNetwork",(e=>this.onNewNetwork(e))),c.R.subscribeKey("activeCaipAddress",(e=>this.onNewAddress(e))),s.OptionsController.subscribeKey("enableEmbedded",(e=>this.enableEmbedded=e)),d.ConnectorController.subscribeKey("filterByNamespace",(e=>{var t;this.filterByNamespace===e||null!==(t=c.R.getAccountData(e))&&void 0!==t&&t.caipAddress||(w.ApiController.fetchRecommendedWallets(),this.filterByNamespace=e)})))}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded)return l.I.close(),void this.prefetch();this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`\n      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};\n    `,this.enableEmbedded?i.dy`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?i.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return i.dy` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,a.o)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){await m.safeClose()}initializeTheming(){const{themeVariables:e,themeMode:t}=h.ThemeController.state,o=y.Hg.getColorTheme(t);(0,y.n)(e,o)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),v.SnackController.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=he,e.textContent="\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${he}"]`);e&&e.remove()}onAddKeyboardListener(){var e;this.abortController=new AbortController;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("wui-card");null===t||void 0===t||t.focus(),window.addEventListener("keydown",(e=>{if("Escape"===e.key)this.handleClose();else if("Tab"===e.key){const{tagName:o}=e.target;!o||o.includes("W3M-")||o.includes("WUI-")||null===t||void 0===t||t.focus()}}),this.abortController)}onRemoveKeyboardListener(){var e;null===(e=this.abortController)||void 0===e||e.abort(),this.abortController=void 0}async onNewAddress(e){const t=c.R.state.isSwitchingNamespace,o=g.j.getPlainAddress(e),i=t&&o;!o&&!t?l.I.close():i&&u.RouterController.goBack(),await p.w.initializeIfEnabled(),this.caipAddress=e,c.R.setIsSwitchingNamespace(!1)}onNewNetwork(e){var t,o,i;const r=this.caipNetwork,a=null===r||void 0===r||null===(t=r.caipNetworkId)||void 0===t?void 0:t.toString(),s=null===r||void 0===r?void 0:r.chainNamespace,d=null===e||void 0===e||null===(o=e.caipNetworkId)||void 0===o?void 0:o.toString(),w=null===e||void 0===e?void 0:e.chainNamespace,p=a!==d,m=p&&!(s!==w),h=(null===r||void 0===r?void 0:r.name)===n.b.UNSUPPORTED_NETWORK_NAME,v="ConnectingExternal"===u.RouterController.state.view,g=!(null!==(i=c.R.getAccountData(null===e||void 0===e?void 0:e.chainNamespace))&&void 0!==i&&i.caipAddress),y="UnsupportedChain"===u.RouterController.state.view;let b=!1;l.I.state.open&&!v&&(g?p&&(b=!0):(y||m&&!h)&&(b=!0)),b&&"SIWXSignMessage"!==u.RouterController.state.view&&u.RouterController.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(w.ApiController.prefetch(),w.ApiController.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}ve.styles=pe,me([(0,r.Cb)({type:Boolean})],ve.prototype,"enableEmbedded",void 0),me([(0,r.SB)()],ve.prototype,"open",void 0),me([(0,r.SB)()],ve.prototype,"caipAddress",void 0),me([(0,r.SB)()],ve.prototype,"caipNetwork",void 0),me([(0,r.SB)()],ve.prototype,"shake",void 0),me([(0,r.SB)()],ve.prototype,"filterByNamespace",void 0);let ge=class extends ve{};ge=me([(0,y.Mo)("w3m-modal")],ge);let ye=class extends ve{};ye=me([(0,y.Mo)("appkit-modal")],ye)}}]);
//# sourceMappingURL=7906.d1d95c59.chunk.js.map