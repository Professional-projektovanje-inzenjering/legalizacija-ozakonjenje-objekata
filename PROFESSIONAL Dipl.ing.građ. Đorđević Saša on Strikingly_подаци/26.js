/*! no_rails_asset_compression */
webpackJsonp([26,59],{1202:function(e,t,n){"use strict"
e.exports=n(1890)},1203:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=n(0),r=i(a),s=n(13),l=i(s),u=n(1799),c=n(472),d=i(c),f={serverInitialize:function(e){var t=r.default.Children.count(e.children),n=e.rtl?t-1-e.initialSlide:e.initialSlide
this.setState({slideCount:t,currentSlide:n})},initialize:function(e){var t,n=l.default.findDOMNode(this.list),i=r.default.Children.count(e.children),o=this.getWidth(n),a=this.getWidth(l.default.findDOMNode(this.track))
if(e.vertical)t=this.getWidth(l.default.findDOMNode(this))
else{var s=e.centerMode&&2*parseInt(e.centerPadding)
t=(this.getWidth(l.default.findDOMNode(this))-s)/e.slidesToShow}var c=this.getHeight(n.querySelector('[data-index="0"]')),f=c*e.slidesToShow,p=e.rtl?i-1-e.initialSlide:e.initialSlide
this.setState({slideCount:i,slideWidth:t,listWidth:o,trackWidth:a,currentSlide:p,slideHeight:c,listHeight:f},function(){var t=(0,u.getTrackLeft)((0,d.default)({slideIndex:this.state.currentSlide,trackRef:this.track},e,this.state)),n=(0,u.getTrackCSS)((0,d.default)({left:t},e,this.state))
this.setState({trackStyle:n})
this.autoPlay()})},update:function(e){var t,n=l.default.findDOMNode(this.list),i=r.default.Children.count(e.children),o=this.getWidth(n),a=this.getWidth(l.default.findDOMNode(this.track))
if(e.vertical)t=this.getWidth(l.default.findDOMNode(this))
else{var s=e.centerMode&&2*parseInt(e.centerPadding)
t=(this.getWidth(l.default.findDOMNode(this))-s)/e.slidesToShow}var c=this.getHeight(n.querySelector('[data-index="0"]')),f=c*e.slidesToShow
e.autoplay?this.autoPlay():this.pause()
this.setState({slideCount:i,slideWidth:t,listWidth:o,trackWidth:a,slideHeight:c,listHeight:f},function(){var t=(0,u.getTrackLeft)((0,d.default)({slideIndex:this.state.currentSlide,trackRef:this.track},e,this.state)),n=(0,u.getTrackCSS)((0,d.default)({left:t},e,this.state))
this.setState({trackStyle:n})})},getWidth:function(e){return e&&(e.getBoundingClientRect().width||e.offsetWidth)||0},getHeight:function(e){return e&&(e.getBoundingClientRect().height||e.offsetHeight)||0},adaptHeight:function(){if(this.props.adaptiveHeight){var e='[data-index="'+this.state.currentSlide+'"]'
if(this.list){var t=l.default.findDOMNode(this.list)
t.style.height=t.querySelector(e).offsetHeight+"px"}}},canGoNext:function(e){var t=!0
e.infinite||(e.centerMode?e.currentSlide>=e.slideCount-1&&(t=!1):(e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(t=!1))
return t},slideHandler:function(e){var t,n,i,o,a,r=this
if(!this.props.waitForAnimate||!this.state.animating)if(this.props.fade){n=this.state.currentSlide
if(!1===this.props.infinite&&(e<0||e>=this.state.slideCount))return
t=e<0?e+this.state.slideCount:e>=this.state.slideCount?e-this.state.slideCount:e
this.props.lazyLoad&&this.state.lazyLoadedList.indexOf(t)<0&&this.setState({lazyLoadedList:this.state.lazyLoadedList.concat(t)})
a=function(){r.setState({animating:!1})
r.props.afterChange&&r.props.afterChange(t)
delete r.animationEndCallback}
this.setState({animating:!0,currentSlide:t},function(){this.animationEndCallback=setTimeout(a,this.props.speed)})
this.props.beforeChange&&this.props.beforeChange(this.state.currentSlide,t)
this.autoPlay()}else{t=e
n=t<0?!1===this.props.infinite?0:this.state.slideCount%this.props.slidesToScroll!=0?this.state.slideCount-this.state.slideCount%this.props.slidesToScroll:this.state.slideCount+t:t>=this.state.slideCount?!1===this.props.infinite?this.state.slideCount-this.props.slidesToShow:this.state.slideCount%this.props.slidesToScroll!=0?0:t-this.state.slideCount:t
i=(0,u.getTrackLeft)((0,d.default)({slideIndex:t,trackRef:this.track},this.props,this.state))
o=(0,u.getTrackLeft)((0,d.default)({slideIndex:n,trackRef:this.track},this.props,this.state))
!1===this.props.infinite&&(i=o)
this.props.beforeChange&&this.props.beforeChange(this.state.currentSlide,n)
if(this.props.lazyLoad){for(var s=!0,l=[],c=t;c<t+this.props.slidesToShow;c++){s=s&&this.state.lazyLoadedList.indexOf(c)>=0
s||l.push(c)}s||this.setState({lazyLoadedList:this.state.lazyLoadedList.concat(l)})}if(!1===this.props.useCSS)this.setState({currentSlide:n,trackStyle:(0,u.getTrackCSS)((0,d.default)({left:o},this.props,this.state))},function(){this.props.afterChange&&this.props.afterChange(n)})
else{var f={animating:!1,currentSlide:n,trackStyle:(0,u.getTrackCSS)((0,d.default)({left:o},this.props,this.state)),swipeLeft:null}
a=function(){r.setState(f)
r.props.afterChange&&r.props.afterChange(n)
delete r.animationEndCallback}
this.setState({animating:!0,currentSlide:n,trackStyle:(0,u.getTrackAnimateCSS)((0,d.default)({left:i},this.props,this.state))},function(){this.animationEndCallback=setTimeout(a,this.props.speed)})}this.autoPlay()}},swipeDirection:function(e){var t,n,i,o
t=e.startX-e.curX
n=e.startY-e.curY
i=Math.atan2(n,t)
o=Math.round(180*i/Math.PI)
o<0&&(o=360-Math.abs(o))
return o<=45&&o>=0||o<=360&&o>=315?!1===this.props.rtl?"left":"right":o>=135&&o<=225?!1===this.props.rtl?"right":"left":!0===this.props.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},play:function(){var e
if(!this.state.mounted)return!1
if(this.props.rtl)e=this.state.currentSlide-this.props.slidesToScroll
else{if(!this.canGoNext(o({},this.props,this.state)))return!1
e=this.state.currentSlide+this.props.slidesToScroll}this.slideHandler(e)},autoPlay:function(){this.state.autoPlayTimer&&clearTimeout(this.state.autoPlayTimer)
this.props.autoplay&&this.setState({autoPlayTimer:setTimeout(this.play,this.props.autoplaySpeed)})},pause:function(){if(this.state.autoPlayTimer){clearTimeout(this.state.autoPlayTimer)
this.setState({autoPlayTimer:null})}}}
t.default=f},1204:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){function e(e,t){var n=[],i=!0,o=!1,a=void 0
try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done);i=!0){n.push(r.value)
if(t&&n.length===t)break}}catch(e){o=!0
a=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),d=n(0),f=i(d),p=n(2),m=(i(p),n(5)),h=i(m),g=n(8),v=i(g),y=n(1205),b=i(y),_=n(1804),w=i(_),C=function(e,t){return function(n){function i(e){o(this,i)
return a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,e))}r(i,n)
c(i,[{key:"_getColumnClassNames",value:function(){var e=v.default.getTheme().get("name"),t=(0,h.default)("#s-content").hasClass("side-menu-opened")?(0,h.default)(window).width()-220:(0,h.default)(window).width(),n=void 0,i=void 0
switch(e){case"persona":n="columns six alpha"
i="columns six omega"
break
case"onyx_new":if(t>875){n="columns seven"
i="columns seven"}else{n="columns eight"
i="columns eight"}break
case"ion":case"sleek":if(t>1400){n="columns eight"
i="columns six"}else if(t>1100){n="columns eight"
i="columns seven"}else{n="columns eight"
i="columns eight"}break
case"minimal":n="columns eight"
i="columns eight"
break
default:if(t>875){n="columns seven offset-one"
i="columns seven"}else{n="columns eight"
i="columns eight"}}return{imgColumnClassName:n,infoColumnClassName:i}}},{key:"_renderProductsAsRow",value:function(){var e=this._getColumnClassNames(),n=this.props,i=n.products,o=n.pageId,a=n.hasMultipleProducts,r=n.settings,s=n.cartData,c=n.layout,d=n.fromProductPage,p=i.map(function(n){var i={product:n,pageId:o,hasMultipleProducts:a,fromProductPage:d,settings:r,cartData:s,imgColumnClassName:e.imgColumnClassName,infoColumnClassName:e.infoColumnClassName,layout:c}
return f.default.createElement(t,u({},i,{key:n.id}))})
return l("div",{className:"s-ecommerce-row-view-wrapper"},void 0,p)}},{key:"_renderProductsAsCard",value:function(){var t=this._getColumnClassNames(),n=this.props,i=n.products,o=n.pageId,a=n.hasMultipleProducts,r=n.settings,s=n.cartData,l=n.layout,u=n.changeToDetailMode,c=n.changeToNormalMode,d=n.fromProductPage,p={products:i,pageId:o,hasMultipleProducts:a,settings:r,cartData:s,imgColumnClassName:t.imgColumnClassName,infoColumnClassName:t.infoColumnClassName,layout:l,changeToDetailMode:u,changeToNormalMode:c,fromProductPage:d}
return f.default.createElement(e,p)}},{key:"render",value:function(){var e=void 0,t=this.props.layout.split("-")
e="one"===s(t,2)[1]?this._renderProductsAsRow():this._renderProductsAsCard()
var n=this.props,i=n.isLoading,o=(n.isFirstLoading,n.emptyComponent,n.paginationComponent)
n.children
return l("div",{className:"s-ecommerce-products-wrapper "+(i?"loading":"")},void 0,!1,e,!1,o)}}])
return i}(f.default.Component)},x=C(w.default,b.default)
x.createProductWrapper=C
t.default=x
e.exports=t.default},1205:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0})
var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),l=n(0),u=o(l),c=n(2),d=o(c),f=n(13),p=o(f),m=n(5),h=o(m),g=n(1),v=o(g),y=n(60),b=o(y),_=n(33),w=o(_),C=n(57),x=o(C),k=n(116),S=o(k),N=n(73),E=o(N),P=n(63),O=o(P),T=n(82),L=o(T),M=n(68),I=o(M),B=n(159),D=o(B),j=n(471),A=o(j),H=n(120),R=o(H),F=n(21),V=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(F),U=n(19),z=o(U),W=n(1206),G=o(W),K=n(1795),$=o(K),q=n(1202),Y=o(q),J=n(475),X=o(J),Q=n(1796),Z=n(184),ee=o(Z),te=n(7),ne=o(te),ie=n(8),oe=o(ie),ae=n(189),re=o(ae),se=(n(29),n(1803)),le=o(se),ue=(0,x.default)({displayName:"EcommerceProduct",mixins:[A.default.enableAfterMount(),R.default],contextTypes:{fromStorePage:d.default.bool},getInitialState:function(){return{variationId:"",firstValue:"",secondValue:"",picture:"",quantity:1,dimension1Name:"",dimension2Name:"",price:0,name:"",weight:0,currentImageIndex:0,showSelectPanel:!1,showSelectVariationMsg:!1,pictureArr:this.props.product.picture,variationPicture:null}},componentDidMount:function(){if(this.props.product.variations.length<=1){var e=this._getFirstAvailableVariation()?this._getFirstAvailableVariation().id:""
this._chooseVariation(e)}if(this.props.product&&this.props.product.dimensions){var t=this.props.product.dimensions,n=t.dimension1,i=t.dimension2
this.setState({dimension1Name:n.name,dimension2Name:i.name})}},componentDidUpdate:function(e,t){var n=this,i=(0,h.default)(p.default.findDOMNode(this.refs.imageWrapper)),o=this._isVideo(),a=i.find("video-thumbnail-wrapper").length
if(o||a)return i.css({height:"0",paddingBottom:"56.25%"})
var r=i.find("img")
i.find("img").length||(r=i.find("iframe"))
i.css({height:r.height(),paddingBottom:0})
r[0]&&"img"===String(r[0].nodeName).toLowerCase()&&r.load(function(){n._isVideo()||i.find("video-thumbnail-wrapper").length?i.css({height:"0",paddingBottom:"56.25%"}):i.css({height:r.height(),paddingBottom:0})})
if(this.state.variationPicture&&t.variationPicture!=this.state.variationPicture){this._setCurrentImage(0)
this.slider.slickGoTo(0)}},componentWillReceiveProps:function(e){if(this.props.product.id!==e.product.id)if(e.product.variations.length<=1){this._chooseVariation(this._getFirstAvailableVariation(e.product.variations).id,e.product.variations)
this.setState({currentImageIndex:0})}else this.setState(this.getInitialState())},_getPictures:function(){var e=this.state,t=e.pictureArr,n=e.variationPicture
return n?[n].concat(a(t)):t},_setClickPosition:function(e,t){return this._clickPosition={x:e,y:t}},_shoppingCartAnimation:function(e,t){var n=this,i=void 0,o=void 0,a=void 0,r=(0,h.default)("<div class='s-ecommerce-animation-item'><i class='entypo-bag'></i></div>")
if(z.default.isSmallScreen())i=(0,h.default)("#s-mobile-shopping-cart-new")
else{i=(0,h.default)(".s-navbar-desktop-fixed._show #s-ecommerce-shopping-cart")
i.length||(i=(0,h.default)("#s-ecommerce-shopping-cart"))}if(!i.length)return"function"==typeof t?t():void 0
var s=i.find(".fa").offset(),l={x:s.left-5,y:s.top-(0,h.default)(window).scrollTop()}
e={x:e.x-15,y:e.y-15}
r.css({top:e.y,left:e.x})
var u=l.x-e.x;(0,h.default)("#s-content").append(r)
if(l.y<=e.y){o=(e.y-l.y)/Math.pow(e.x-l.x,2)
a=function(e){return o*Math.pow(e-l.x,2)+l.y}}else{o=(l.y-e.y)/Math.pow(l.x-e.x,2)
a=function(t){return o*Math.pow(t-e.x,2)+e.y}}var c=Math.sqrt(Math.pow(l.y-e.y,2)+Math.pow(l.x-e.x,2)),d=(l.x-e.x)/(60*c/1e3),f=e.x+d
!function e(){return n.setTimeout(function(){if(!((l.x-f)*u<0)){r.css({left:f,top:a(f)})
f+=d
return e()}r.css({left:l.x,top:l.y})
"function"==typeof t&&t()
r.remove()
i.addClass("add-item-animation")
n.setTimeout(function(){return i.removeClass("add-item-animation")},700)},1e3/60)}()
return i.removeClass("add-item-animation")},_getRestNum:function(){var e=this._getVariationData(),t=v.default.find(this.props.cartData.items,function(t){return Number(t.orderItem.id)===Number(e.id)})
return t?e.quantity-t.orderItem.quantity:e.quantity},_getOriginalRestNum:function(){return this._getVariationData().quantity},_allOutOfStock:function(){return v.default.all(this.props.product.variations,function(e){return 0===Number(e.quantity)})},_hasPayment:function(){return this._isDigitalProduct()?L.default.isPaymentAccountSet()&&!L.default.isOnlyOfflinePaymentSet():L.default.isPaymentAccountSet()},_canBuy:function(){if(this._getVariationData()){var e=this._getRestNum(),t=this._getOriginalRestNum()
return(Number(this.state.quantity)||1)<=e||-1===t}},_canMinusQuantity:function(){var e=Number(this.state.quantity)
return!isNaN(e)&&e>=2},_getFirstAvailableVariation:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.product.variations,n=t.find(function(t){var n=e.props.cartData.items.find(function(e){return Number(e.orderItem.id)===Number(t.id)})
return(n?t.quantity-n.orderItem.quantity:t.quantity)>0||-1===t.quantity})
return n||t[0]},_getVariationData:function(){var e=this,t=v.default.find(null!=this.props.product?this.props.product.variations:void 0,function(t){return Number(t.id)===Number(e.state.variationId)})
return t||(t={})},_getErrorText:function(){if(this._canBuy())return""
if(!this.state.variationId&&this.state.showSelectVariationMsg)return i("Ecommerce|Select an option")
var e=this._getOriginalRestNum()
return void 0===e?"":0===e?i("Ecommerce|This option is out of stock"):i("Ecommerce|Only %{quantity} in stock",{quantity:e})},_getCurrentImageItem:function(){return this._getPictures()[this.state.currentImageIndex]},_isVideo:function(){var e=this._getCurrentImageItem()
return e&&"video"===e.mediaType},_isDigitalProduct:function(){return"digital"===this.props.product.productType},_showIframeSrc:function(){var e=this._getCurrentImageItem()
return e&&"video"===e.mediaType&&!e.thumbnailUrl?e.url:""},_getProductImage:function(){var e=this._getCurrentImageItem()
return e&&e.thumbnailUrl||V.cdnAssetPath(O.default.DEFAULT_PRODUCT_IMAGE)},_getEstimatedDelivery:function(){var e=this.props.settings.estimatedDelivery,t=this.props.locale,n="zh-CN"===t?"YYYY年M月":"MMMM YYYY"
return(0,b.default)(e).locale(t).format(n)},_openBuyPanel:function(e){D.default.openDialog("ecommerceBuyPanel",{strong:!0})
S.default.updateBuyDialogOpenState(!0)
S.default.gotoEcommerceBuyDialog(e,!0)},_addItemDataToCart:function(){var e=this,t=this.props.product,i=this.props.cartData,o=Number(this.state.quantity)||1
i.items.some(function(n){if(Number(n.orderItem.id)===Number(e.state.variationId)){e.props.hasMultipleProducts?n.orderItem.quantity+=o:n.orderItem.quantity=o
n.orderItem.price=Number(e.state.price)
n.orderItem.name=e.state.name
n.orderItem.weight=e.state.weight
n.productId=t.id
n.productType=t.productType,n.product=t
return!0}return!1})||i.items.push({productId:t.id,productType:t.productType,product:t,orderItem:{id:Number(this.state.variationId),quantity:o,price:Number(this.state.price),name:this.state.name,weight:this.state.weight}})
S.default.updateShoppingCart(i)
n(183).trackPageEventOnFB("AddToCart",{value:Number(this.state.price)*Number(o),currency:I.default.getSettings().currencyData.code,content_name:t.name,content_type:"product",content_ids:t.id})},_addItem:function(){var e=this,t=void 0
t=n(183)
t.trackEcommerceBuyerEvent(this.props.keenIoEcommerceBuyerAddedItemToCart)
var i=(this._isDigitalProduct(),function(){if(e.props.hasMultipleProducts)return e._shoppingCartAnimation({x:e._clickPosition.x,y:e._clickPosition.y},function(){return e._addItemDataToCart()})
e._addItemDataToCart()
e._openBuyPanel("singleProductPanel")
t=n(183)
t.trackEcommerceBuyerEvent(e.props.keenIoEcommerceBuyerViewedCheckoutDialog,{entrance:"direct"})}),o=this.props.cartData,a=Boolean(null!=o.orderData?o.orderData.orderToken:void 0),r=function(){var e=Number(o.orderData.startTime)
return((new Date).getTime()-e)/6e4>=10}
a||i()
if(a&&r()){S.default.clearShoppingCart()
i()}a&&!r()&&this._openBuyPanel("orderPreview")
return this._onClickHideVariationSelectPanel()},getName:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
if(e)return e.toString().split("_")[t]},_showImageGallery:function(){var e=this,t=this.props.product
return n.e(23).then(function(){n(493)
var i=e._getPictures().map(function(e){var t=e.thumbnailUrl,n=e.url
n="video"===e.mediaType?n+(-1!==n.indexOf("?")?"&":"?")+"autoplay=1":t
return{src:n}})
return h.default.fancybox.open(i,Object.assign({},$.default.onlyCloseBtnOpts,{baseTpl:$.default.getCustomArrowTpl(),beforeMove:$.default.indicatorBeforeMove,onInit:$.default.indicatorOnInit,altText:t.name}),e.state.currentImageIndex||0)}.bind(null,n)).catch(n.oe)},_getUnSupportedPaymentMessage:function(){var e=void 0,t=L.default.availableDevicesToPayment(),n=L.default.hasAvailablePaymentWithCurrentDevice(),o={wechat:i("Ecommerce|WeChat"),mobile:i("Ecommerce|Mobile"),desktop:i("Ecommerce|Desktop")},a=t.length,r=""
if(!n&&a>0){e=1===a&&t[0]===i("Ecommerce|WeChat")?"":i("Ecommerce|Browser")
for(var s=0;s<t.length;s++){var l=t[s]
r+=""+(0!==s?i("Ecommerce|or"):"")+o[l]}}return i("Ecommerce|Please use %{deviceDescription} %{suffix} to make a payment",{deviceDescription:r,suffix:e})},_onChangeQuantity:function(e){var t=e.target.value;/^(\d+)?$/.test(t)&&this.setState({quantity:t})},_onChangeChooseVariationValueFirst:function(e){var t=e.target.value,n=this._getVariationOptions(1)
this._chooseVariationName(t,this.state.secondValue||n[0])},_onChangeChooseVariationValueSecond:function(e){var t=e.target.value,n=this._getVariationOptions(0)
this._chooseVariationName(this.state.firstValue||n[0],t)},_chooseVariationName:function(e,t){var n=e
t&&(n=e+"_"+t)
var i=v.default.find(this.props.product.variations,function(e){return e.name===n}),o=i.name.split("_").join(" - ")
if(i){var a=i.picture?i.picture:""
this.setState({firstValue:e,secondValue:t,picture:a,variationName:o,variationId:i.id,price:i.price,originalPrice:i.originalPrice,name:i.name,showSelectVariationMsg:!1,variationPicture:a})}},_onChangeChooseVariation:function(e){this._chooseVariation(e.target.value)},_chooseVariation:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.product.variations,n=v.default.find(t,function(t){return Number(t.id)===Number(e)})
n&&this.setState({variationName:n.name.split("_").join(" - "),variationId:n.id,price:n.price,originalPrice:n.originalPrice,name:n.name,showSelectVariationMsg:!1})},_onClickAddQuantity:function(e){var t=Number(this.state.quantity)
t=isNaN(t)?0:t
this.setState({quantity:t+e})},_onClickShowImageGallery:function(){return this._showImageGallery()},_onClickBuy:function(e){if(this.state.variationId){this._setClickPosition(e.clientX,e.clientY)
return this._addItem()}this.setState({showSelectVariationMsg:!0})},_onClickOpenBuyPanel:function(){var e=this.props.cartData,t=Boolean(null!=e.orderData?e.orderData.orderToken:void 0),n=function(){var t=Number(e.orderData.startTime)
return((new Date).getTime()-t)/6e4>=10}
t&&n()&&S.default.clearShoppingCart()
if(t&&!n())return this._openBuyPanel("orderPreview")},_onClickNextImage:function(){this.setState({currentImageIndex:this.state.currentImageIndex+1})},_onClickPrevImage:function(){this.setState({currentImageIndex:this.state.currentImageIndex-1})},_setCurrentImage:function(e){this.setState({currentImageIndex:e})},_onClickShowProductPage:function(){var e=this.props.product
return E.default.gotoProductPage(e.id,this.context.fromStorePage)},_onClickShowVariationSelectPanel:function(){this.setState({showSelectPanel:!0})},_onClickHideVariationSelectPanel:function(){this.setState({showSelectPanel:!1})},_getSlickSettings:function(){var e=this
return{infinite:1!==this.props.product.picture.length,slidesToShow:1,autoplay:!1,afterChange:function(t){return e.setState({currentImageIndex:t})}}},_renderThumbnailList:function(){var e=this,t=void 0,n=this.state,i=(n.picture,n.currentImageIndex),o=this.props.product,a=o.picture,r=a.length,l=i+1
t=r>=7?l<=4?0:r-l<=3?14.5*-(r-7)+"%":14.5*-(l-4)+"%":0
return s("div",{className:"s-ecommerce-row-view-product-thumbnail-list"},void 0,s("ul",{style:{left:t}},void 0,this._getPictures().map(function(t,n){return s("li",{className:n===e.state.currentImageIndex?"current":"",onClick:function(){return e._setCurrentImage(n)}},n,s("img",{alt:o.name,src:t.thumbnailUrl}))})))},_getVariationOptions:function(e){var t=this,n=this.props.product.variations,i=n.map(function(n){return t.getName(n.name,e)})
i=i.filter(function(e){return e&&!["default","undefined"].includes(e)})
var o=new Set(i)
return[].concat(a(o))},_renderPrice:function(e){return L.default.needNarrowCurrencySymbol()?s(Q.PriceWithSmallSymbol,{settings:this.props.settings,price:e}):s("span",{},void 0,e)},render:function(){var e=this,t=this._canBuy(),n=this._hasPayment(),o=L.default.hasAvailablePaymentWithCurrentDevice(),a=this.props.settings.estimatedDelivery,l=this._getVariationOptions(0),c=this._getVariationOptions(1),d=(this._getVariationData(),this.state.showSelectPanel),f=this.props,p=f.isSxl,m=f.product,h=f.fromProductPage,g=this._isDigitalProduct(),v=!h&&this.props.product.detailEnabled,y=this.state.price?L.default.addCurrencySymbol(Number(this.state.price)):L.default.getPriceScope(this.props.product),b=this.state.originalPrice>0?L.default.addCurrencySymbol(Number(this.state.originalPrice)):"",_=this._allOutOfStock()?i("Ecommerce|All options are out of stock"):this._getErrorText(),C=i(n?"card"===this.props.layout?"Ecommerce|Add to cart":a?this.props.hasMultipleProducts?"Ecommerce|Pre-Order: Add to cart":"Ecommerce|Pre-Order":this.props.hasMultipleProducts?"Ecommerce|Add to cart":"Ecommerce|Buy now":"Ecommerce|Coming soon"),x="entypo-minus minus-icon "+(this._canMinusQuantity()?"":"disable"),k="entypo-plus plus-icon "+(t?"":"disable"),S=this._canMinusQuantity()?this._onClickAddQuantity.bind(this,-1):null,N=t?this._onClickAddQuantity.bind(this,1):null,E=this.state,P=(E.variationId,E.firstValue),O=E.secondValue,T=E.dimension1Name,M=E.dimension2Name,I=this._showIframeSrc(),B=this._isVideo(),D=this.state.variationImage&&this.state.variationImage.thumbnailUrl,j=G.default.canUseDOM()?"":L.default.getProductPath(this.props.product.id,this.context.fromStorePage),A=j?s("a",{href:j,style:{color:"inherit"}},void 0,s("div",{className:"view-detail-btn",onClick:this._onClickShowProductPage},void 0,i("Ecommerce|View more details..."))):s("div",{className:"view-detail-btn",onClick:this._onClickShowProductPage},void 0,i("Ecommerce|View more details..."))
return s("div",{className:(0,w.default)("s-ecommerce-row-view-product",{"from-product-page":h})},void 0,s("div",{className:""+this.props.imgColumnClassName,style:{minHeight:"50px"}},void 0,s("div",{className:"half-offset-right"},void 0,u.default.createElement("div",{className:"s-ecommerce-row-view-product-image-wrapper",ref:"imageWrapper",onClick:this._onClickShowImageGallery},this._getPictures().length>=1&&s("div",{className:"slider-wrapper"},void 0,u.default.createElement(Y.default,r({ref:function(t){return e.slider=t}},this._getSlickSettings()),this._getPictures().map(function(e,t){return s("div",{className:"slide-thumb",style:{backgroundImage:"url("+e.thumbnailUrl+")"}},t)})),this._getPictures().length>=2&&s("ul",{className:"slider-dot-wrapper"},void 0,this._getPictures().map(function(t,n){return s("li",{className:(0,w.default)("slider-dot",{selected:e.state.currentImageIndex===n})})}))),s("div",{className:"image-wrapper"},void 0,D&&s("div",{},void 0,s("img",{src:this.state.variationImage.thumbnailUrl})),B?s(le.default,{className:"video-thumbnail-wrapper",auto:!0,containerRatio:16/9},void 0,I?s("iframe",{src:I,style:{border:"none",width:"100%",height:"100%"}}):s(X.default,{alt:m.name,dataSrc:this._getProductImage(),width:"100%"})):s(X.default,{alt:m.name,dataSrc:this._getProductImage(),width:"100%"}),B&&s("div",{className:"play-button big"},void 0,s("div",{className:"after"})),function(){if(!D&&e.props.product.picture.length>=2){if("card"===e.props.layout||h)return s("div",{className:"s-ecommerce-row-view-product-image-overlay-wrapper"},void 0,s("div",{className:"s-ecommerce-row-view-product-image-overlay"}),s("div",{className:"s-ecommerce-row-view-product-image-overlay-icon"},void 0,s("div",{className:"fa fa-search-plus",title:i("Ecommerce|Click to view more images")})))
if("row"===e.props.layout)return s("div",{className:"s-ecommerce-row-view-product-image-gallery-button"},void 0,s("div",{className:"fa fa-search-plus",title:i("Ecommerce|Click to view more images")}))}}())),(h||"card"===this.props.layout)&&this.props.product.picture.length>=2&&this._renderThumbnailList())),s("div",{className:"s-ecommerce-row-view-product-detail-panel s-font-body "+this.props.infoColumnClassName},void 0,s("div",{className:"s-ecommerce-row-view-product-name"},void 0,this.props.product.name),s("div",{className:"s-ecommerce-row-view-product-options"},void 0,c.length>0&&this.state.variationName),s("div",{className:"s-ecommerce-row-view-product-pricing"},void 0,this._renderPrice(y)),s("span",{className:"s-ecommerce-row-view-product-original-pricing"},void 0,this._renderPrice(b)),s("div",{className:"s-ecommerce-row-view-product-desc"},void 0,s("div",{dangerouslySetInnerHTML:{__html:this.props.product.description}}),a&&s("div",{style:{fontWeight:"600"}},void 0,i("Ecommerce|Ships %{delivery}.",{delivery:this._getEstimatedDelivery()})),v&&A),s("div",{className:"s-ecommerce-row-view-product-select",style:{display:"block"}},void 0,l.length>0&&s("div",{className:"select-variation"},void 0,s("div",{className:"select-label"},void 0,s("span",{className:"select-title"},void 0,P||i("Ecommerce|Select")+" "+T),s("span",{className:"select-arrow"})),s("select",{onChange:this._onChangeChooseVariationValueFirst,value:P||0},void 0,s("option",{disabled:!0,value:0,style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}},-1,i("Ecommerce|Select")+" "+T),l.map(function(e,t){return s("option",{value:e},t,e)}))),s("div",{},void 0,c.length>0&&s("div",{className:"select-variation"},void 0,s("div",{className:"select-label"},void 0,s("span",{className:"select-title"},void 0,O||i("Ecommerce|Select")+" "+M),s("span",{className:"select-arrow"})),s("select",{onChange:this._onChangeChooseVariationValueSecond,value:O||0},void 0,s("option",{disabled:!0,value:0,style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}},-1,i("Ecommerce|Select")+" "+M),c.map(function(e,t){return s("option",{value:e},t,e)})))),!g&&s("div",{className:"select-number"},void 0,s("div",{className:"select-label"},void 0,i("Ecommerce|Quantity")),s("div",{className:"number-input-wrapper"},void 0,s("div",{className:x,onClick:S}),s("input",{type:"text",maxLength:"3",value:this.state.quantity,onChange:this._onChangeQuantity}),s("div",{className:k,onClick:N})))),!t&&s("div",{className:"s-ecommerce-row-view-product-error-text"},void 0,_),!t&&this.state.variationId||!n?s(re.default,{component:"div",className:"s-ecommerce-row-view-product-order-btn s-common-button disable",onClick:this._onClickOpenBuyPanel},void 0,C):p&&!o?s("div",{},void 0,s(re.default,{component:"div",className:"s-ecommerce-row-view-product-order-btn s-common-button disable"},void 0,i("Ecommerce|No payment method available")),s("div",{className:"s-ecommerce-buy-prompt"},void 0,s("i",{className:"fa fa-exclamation-circle","aria-hidden":"true"}),this._getUnSupportedPaymentMessage())):s(re.default,{component:"a",className:"s-ecommerce-row-view-product-order-btn s-common-button",onClick:this._onClickBuy},void 0,C),h&&!(p&&!o)&&s("div",{},void 0,s("div",{className:(0,w.default)("select-overlay",{show:d}),onClick:this._onClickHideVariationSelectPanel}),s("div",{className:"mobile-select",style:{position:"relative"}},void 0,s("div",{onClick:n&&t?this._onClickBuy:null,className:"add-btn "+(n&&t?"":"disabled")},void 0,i(n?"Ecommerce|Add to cart":"Ecommerce|Coming soon"))))))}})
t.default=(0,ee.default)(ue,[],function(){return{locale:ne.default.getLocale(),isSxl:ne.default.getIsSxl(),isNewMobileActions:oe.default.getIsNewMobileActions(),keenIoEcommerceBuyerAddedItemToCart:ne.default.getKeenIoEcommerceBuyerAddedItemToCart(),keenIoEcommerceBuyerViewedCheckoutDialog:ne.default.getKeenIoEcommerceBuyerViewedCheckoutDialog()}})
e.exports=t.default}).call(t,n(3))},1206:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(5),a=i(o),r=n(19),s=i(r)
t.default={refreshDOM:function(e){var t=(0,a.default)(e)
t.hide()
t.height()
t.show()},setTitleDynamiclly:function(e){document.title=e
if(s.default.isWechat()&&s.default.isIOS()){var t=document.createElement("iframe")
t.src="/images/favicon-sxl.ico"
t.style.display="none"
t.onload=function(){setTimeout(function(){t.remove()},0)}
document.body.appendChild(t)}},canUseDOM:function(){return Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)}}
e.exports=t.default},1207:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(1),a=i(o),r=n(6),s=(i(r),n(15)),l=n(25),u=i(l),c=n(258),d=(i(c),n(185)),f=(i(d),void 0),p=void 0,m=a.default.assign({},s.EventEmitter.prototype,{init:function(e){f=new u.default(e)
p=f.binding
return p},getBinding:function(){return f.binding},getSideMenuOpenState:function(){return this.getImmutableSideMenuOpenState().toJS()},getImmutableSideMenuOpenState:function(){return this.getBinding().get("sideMenuOpenState")}})
window.DEBUG.PageBridgeStore=m
t.default=m
e.exports=t.default},1792:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=e
Object.keys(i).forEach(function(e){var a=o+(o?"-"+e:e),r=i[e]
"object"!==(void 0===r?"undefined":p(r))?n[a]=r:t(a,r)})}var n={}
t("",e)
return n}function a(e){var t={}
Object.keys(e).forEach(function(n){return t[n]=o(e[n])})
return t}function r(){return n(8).getThemeName()}function s(e){var t=n(74),i=t.get(r())
return i&&i.features&&i.features[e]}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:16,i=Math.floor((n-t)/2)
return v[e]+" columns "+(i?"offset-"+v[i]:"")}function u(e){return v[e]+" columns"}function c(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=r(),i=""
if("persona"===n)i=4===e?"three columns half-fixed":5===e?"spfive columns half-fixed":6===e?"two columns half-fixed":u(12/e)
else switch(e){case 1:i=s("narrowMedia")?t?u(14):l(14,14):u(16)
break
case 3:i="third columns"
break
case 4:i="four columns half-fixed"
break
case 5:i="fifth columns half-fixed"
break
case 6:i="sixth columns half-fixed"
break
default:i=u(16/e)}return i+" no-float"}function d(e,t,n){for(var i=t.split("-"),o=e,a="",r="",s=0,l=i.length;s<l;s++){r=i[s]
if(!o[r]){if(s>=1){for(var u=s;u<n;u++){r=Object.keys(o)[0]
o=o[r]
a+=r+"-"}break}return""}o=o[r]
a+=r+"-"}if(Object.keys(o).length)for(var c=i.length;c<n;c++){r=Object.keys(o)[0]
o=o[r]
a+=r+"-"}return a.replace(/-$/,"")}function f(e){var t=n(1868),i=n(1794),o=r(),a=e,s=a.getDefaultBinding().get("template_name"),l=a._getLayoutBinding().get("layout_variation")
t.getLayoutMapping(o)[l]||"text"!==s||["persona","perspective"].includes(o)||a.getComponentBinding("background1").merge(g.default.fromJS(i.dataForEmptyBackground()))}Object.defineProperty(t,"__esModule",{value:!0})
var p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
t.getLayoutMapping=a
t.getThemeName=r
t.getThemeFeature=s
t.generateColumnClassWithOffset=l
t.generateColumnClass=u
t.generateItemClassByColumnsNum=c
t.getClosestKey=d
t.removeOldBackgroundForText=f
var m=n(1),h=(i(m),n(6)),g=i(h),v={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16}
for(var y in v)v[v[y]]=y},1793:function(e,t,n){"use strict"
var i=n(1886),o=n(1887),a=n(1888),r=o([i])
e.exports=r
e.exports.touchStyles=a
e.exports.Mixin=i},1794:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(1)
t.imageDataForSaving=function(e){var t={},n=e.getMeta(),o=n.backgroundSizing,a=n.backgroundClassName
if(o||a){if(a){switch(i.trim(a)){case"strikingly-light-text strikingly-text-overlay":case"strikingly-text-overlay strikingly-light-text":case"overlay":t.textColor="overlay"
break
case"strikingly-light-text":case"light":t.textColor="light"
break
case"strikingly-dark-text":case"dark":t.textColor="dark"
break
default:t.textColor="light"}}t.sizing="cover";-1!==i.indexOf(["cover","contain","tile","center"],o)&&(t.sizing=o)}return Object.assign({},e.dataToSave("background"),{videoHtml:""},t)}
t.dataForEmptyBackground=function(){return{w:null,h:null,storage:null,storageKey:null,format:null,url:"",textColor:"light",videoUrl:"",videoHtml:"",focus:null}}},1795:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=n(5),r=o(a),s=n(401),l=o(s),u={onlyCloseBtnOpts:{infobar:!1,fullScreen:!1,thumbs:!1,slideShow:!1,closeBtn:!0},getCustomArrowTpl:function(){return'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="s-fancybox-btn s-fancybox-btn--left" data-fancybox-previous><button class="s-fancybox-arrow s-fancybox-arrow--left" title="Previous"></button></div><div class="s-fancybox-btn s-fancybox-btn--right" data-fancybox-next><button class="s-fancybox-arrow s-fancybox-arrow--right" title="Next"></button></div><div class="fancybox-controls"><div class="fancybox-buttons"><button data-fancybox-close class="fancybox-button fancybox-button--close" title="'+i("Close")+'"></button></div></div><div class="fancybox-slider-wrap"><div class="fancybox-slider"></div></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div><div class="fancybox-dot-nav-wrap"><ul class="fancybox-dot-nav"></ul><div class="fancybox-num-nav"></div></div></div>'},indicatorOnInit:function(e){u.clearRefs(e)
var t=e.group.length
1===t&&(0,r.default)(".s-fancybox-btn").hide()
t>20?u.numNavOnInit(e):u.dotNavOnInit(e)},clearRefs:function(e){e.$refs.dotNav=void 0
e.$refs.numNav=void 0},dotNavOnInit:function(e){e.$refs.dotNav=(0,r.default)(".fancybox-dot-nav")
for(var t=e.group.length,n=0;n<t;n++)e.$refs.dotNav.append("<li></li>")},numNavOnInit:function(e){e.$refs.numNav=(0,r.default)(".fancybox-num-nav")
var t=e.group.length,n=e.currIndex+1
e.$refs.numNav.html("<div>"+n+" / "+t+"</div>")},indicatorBeforeMove:function(e){e.$refs.dotNav&&u.dotNavBeforeMove(e)
e.$refs.numNav&&u.numNavBeforeMove(e)},dotNavBeforeMove:function(e){var t=e.$refs.dotNav.find("li")
t.removeClass("dot-nav__current")
t.eq(e.currIndex).addClass("dot-nav__current")},numNavBeforeMove:function(e){var t=e.$refs.numNav,n=e.group.length,i=e.currIndex+1
t.html("<div>"+i+" / "+n+"</div>")},getCaption:function(e,t){var n=t.type&&t.type.toLowerCase(),i=(0,r.default)(this)
switch(n){case"image":i.title=l.default.IMAGE_TITLE(i)
i.desc=l.default.IMAGE_DESCRIPTION(i)
i.title.length&&i.desc.length?i.title+=" - "+i.desc:i.desc.length&&(i.title=i.desc)
break
case"video":i.title=i.data("description")}return i.title},transformVideoSrc:function(e){e.parent().find('a.item[data-type="video"]').each(function(){var e=(0,r.default)(this)
if(e.data("html")){var t=e.data("html").replace(/(src="[^"]*)"/,function(e,t){return t+'&autoplay=1"'}),n=(0,r.default)(t),i=n.attr("src")
e.data("src",i)
e.attr("href","javascript:;")
e.attr("data-type","")}})}}
t.default=u
e.exports=t.default}).call(t,n(3))},1796:function(e,t,n){"use strict"
function i(e){var t=e.price,n=e.settings,i=n.currencySymbol
return o.createElement("span",null,Array.from(t).map(function(e,t){return e===i?o.createElement("span",{key:t,className:"small-symbol"},e):e}))}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(0)
t.PriceWithSmallSymbol=i},1797:function(e,t,n){"use strict"
function i(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(15),a=function(e){return e&&e.__esModule?e:{default:e}}(o),r=n(1),s=i(r),l=n(6),u=i(l),c=void 0,d=s.assign({},a.default.prototype,{emitChange:function(){this.emit("element_measurements_event_id")},init:function(e){e.set(new u.Map)
c=e},getBinding:function(){return c},set:function(e,t){c.set(e,t)
this.emitChange()},get:function(e){return c.get(e)}})
t.default=d
e.exports=t.default},1798:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),l=n(0),u=i(l),c=n(2),d=(i(c),n(1183)),f=i(d),p=n(184),m=i(p),h=n(68),g=i(h),v=function(e){var t=function(e){function t(){o(this,t)
return a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}r(t,e)
s(t,[{key:"render",value:function(){return u.default.createElement(f.default,this.props)}}])
return t}(u.default.Component)
return(0,m.default)(t,[],function(){return{isCategoryIdExist:function(t){return e.isCategoryIdExist(t)}}})},y=v(g.default)
y.createCategoryBar=v
t.default=y
e.exports=t.default},1799:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
t.getTrackLeft=t.getTrackAnimateCSS=t.getTrackCSS=void 0
var o=n(13),a=i(o),r=n(472),s=i(r),l=function(e,t){return t.reduce(function(t,n){return t&&e.hasOwnProperty(n)},!0)?null:console.error("Keys Missing",e)},u=t.getTrackCSS=function(e){l(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"])
var t,n,i=e.slideCount+2*e.slidesToShow
e.vertical?n=i*e.slideHeight:t=e.variableWidth?(e.slideCount+2*e.slidesToShow)*e.slideWidth:e.centerMode?(e.slideCount+2*(e.slidesToShow+1))*e.slideWidth:(e.slideCount+2*e.slidesToShow)*e.slideWidth
var o={opacity:1,WebkitTransform:e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",transform:e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",transition:"",WebkitTransition:"",msTransform:e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)"}
t&&(0,s.default)(o,{width:t})
n&&(0,s.default)(o,{height:n})
window&&!window.addEventListener&&window.attachEvent&&(e.vertical?o.marginTop=e.left+"px":o.marginLeft=e.left+"px")
return o}
t.getTrackAnimateCSS=function(e){l(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"])
var t=u(e)
t.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase
t.transition="transform "+e.speed+"ms "+e.cssEase
return t},t.getTrackLeft=function(e){l(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"])
var t,n,i=0,o=0
if(e.fade)return 0
if(e.infinite){if(e.slideCount>=e.slidesToShow){i=e.slideWidth*e.slidesToShow*-1
o=e.slideHeight*e.slidesToShow*-1}if(e.slideCount%e.slidesToScroll!=0&&e.slideIndex+e.slidesToScroll>e.slideCount&&e.slideCount>e.slidesToShow)if(e.slideIndex>e.slideCount){i=(e.slidesToShow-(e.slideIndex-e.slideCount))*e.slideWidth*-1
o=(e.slidesToShow-(e.slideIndex-e.slideCount))*e.slideHeight*-1}else{i=e.slideCount%e.slidesToScroll*e.slideWidth*-1
o=e.slideCount%e.slidesToScroll*e.slideHeight*-1}}else if(e.slideCount%e.slidesToScroll!=0&&e.slideIndex+e.slidesToScroll>e.slideCount&&e.slideCount>e.slidesToShow){var r=e.slidesToShow-e.slideCount%e.slidesToScroll
i=r*e.slideWidth}e.centerMode&&(e.infinite?i+=e.slideWidth*Math.floor(e.slidesToShow/2):i=e.slideWidth*Math.floor(e.slidesToShow/2))
t=e.vertical?e.slideIndex*e.slideHeight*-1+o:e.slideIndex*e.slideWidth*-1+i
if(!0===e.variableWidth){var s
if(e.slideCount<=e.slidesToShow||!1===e.infinite)n=a.default.findDOMNode(e.trackRef).childNodes[e.slideIndex]
else{s=e.slideIndex+e.slidesToShow
n=a.default.findDOMNode(e.trackRef).childNodes[s]}t=n?-1*n.offsetLeft:0
if(!0===e.centerMode){n=!1===e.infinite?a.default.findDOMNode(e.trackRef).children[e.slideIndex]:a.default.findDOMNode(e.trackRef).children[e.slideIndex+e.slidesToShow+1]
n&&(t=-1*n.offsetLeft+(e.listWidth-n.offsetWidth)/2)}}return t}},1800:function(e,t,n){"use strict"
var i=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(i),a={className:"",accessibility:!0,adaptiveHeight:!1,arrows:!0,autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e){return o.default.createElement("button",null,e+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:!1,pauseOnHover:!0,responsive:null,rtl:!1,slide:"div",slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,afterChange:null,beforeChange:null,edgeEvent:null,init:null,swipeEvent:null,nextArrow:null,prevArrow:null}
e.exports=a},1801:function(e){function t(e,t){var n,i=0,o=e.length
for(i;i<o;i++){n=t(e[i],i)
if(!1===n)break}}function n(e){return"[object Array]"===Object.prototype.toString.apply(e)}function i(e){return"function"==typeof e}e.exports={isFunction:i,isArray:n,each:t}},1802:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(i),a=n(15),r=[],s=o.default.assign({},a.EventEmitter.prototype,{emitChange:function(){this.emit("pages_list_store_event_id",this.getPagesList())},getPagesList:function(){return r},addChangeListener:function(e){return this.on("pages_list_store_event_id",e)},removeChangeListener:function(e){return this.removeListener("pages_list_store_event_id",e)},init:function(){var e=n(8)
r=e.getConnectedSites()
this.emitChange()}})
t.default=s
e.exports=t.default},1803:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),l=r(["\n  & > div {\n    width: 100%;\n  }\n  img {\n    width: 102% !important;\n    height: auto !important;\n    top: initial !important;\n    left: initial !important;\n  }\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"],["\n  & > div {\n    width: 100%;\n  }\n  img {\n    width: 102% !important;\n    height: auto !important;\n    top: initial !important;\n    left: initial !important;\n  }\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]),u=r(["\n  & > div {\n    width: 100%;\n  }\n  img {\n    position: absolute !important;\n    width: 102% !important;\n    left: -1%;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  iframe {\n    position: absolute !important;\n    width: 100%;\n    height: 100%;\n  }\n"],["\n  & > div {\n    width: 100%;\n  }\n  img {\n    position: absolute !important;\n    width: 102% !important;\n    left: -1%;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  iframe {\n    position: absolute !important;\n    width: 100%;\n    height: 100%;\n  }\n"])
Object.defineProperty(t,"__esModule",{value:!0})
var c=n(0),d=n(20),f=d.css(l),p=d.css(u),m=function(e){function t(e){i(this,t)
var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.state={}
return n}a(t,e)
s(t,[{key:"shouldComponentUpdate",value:function(){return!0}},{key:"getContainerStyle",value:function(){var e=this.props,t=e.containerRatio,n=e.contentRatio,i=e.auto,o={position:"absolute",overflow:"hidden",display:"flex",justifyContent:"center",alignItems:"center",left:"50%",transform:"translateX(-50%)",fontSize:0}
i&&(o={position:"relative",overflow:"hidden",width:"100%",height:0,paddingBottom:"56.25%",fontSize:0})
if(!n||!t)return o
o=n>t?Object.assign(o,{left:0,right:0}):Object.assign(o,{top:0,bottom:0,width:Math.round(t/n*100)+2+"%"})
return o}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,i=e.auto
return c.createElement("div",{className:(t||"")+" "+(i?p:f),style:this.getContainerStyle()},n)}}])
return t}(c.Component)
t.default=m},1804:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),c=n(0),d=i(c),f=n(2),p=(i(f),n(13)),m=i(p),h=n(8),g=i(h),v=n(1205),y=(i(v),n(1805)),b=i(y),_=n(19),w=i(_),C=n(134),x=i(C),k="sixteen",S=void 0,N=function(e,t){var i=function(i){function c(e){o(this,c)
var t=a(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e))
t.state={currentPageIndex:1,currentProductIndex:0}
return t}r(c,i)
u(c,[{key:"componentWillMount",value:function(){var e=this.props.themeName
S=n(1867)
switch(e){case"persona":k="twelve alpha"}}},{key:"_bind",value:function(){for(var e=this,t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i]
n.forEach(function(t){return e[t]=e[t].bind(e)})}},{key:"_adjustSectionPosition",value:function(){if(w.default.isSmallScreen()){var e=$(m.default.findDOMNode(this)).closest(".s-ecommerce-container, .s-persp-container, .s-persona-content")
e.length&&$(document).scrollTop(e.offset().top-40)}else{var t=$(m.default.findDOMNode(this)).closest("li.slide").find(".section-anchor")
0===t.length&&(t=$(m.default.findDOMNode(this)).closest(".s-section"))
t.length&&$(document).scrollTop(t.offset().top)}}},{key:"_createCurrentProductProps",value:function(){var e=this.props,t=e.products,n=e.hasMultipleProducts,i=e.layout,o=e.settings,a=e.cartData,r=e.imgColumnClassName,s=e.infoColumnClassName
return{product:t[this.state.currentProductIndex],hasMultipleProducts:n,layout:i,settings:o,cartData:a,imgColumnClassName:r,infoColumnClassName:s}}},{key:"_onClickGoToIndex",value:function(e){this.setState({currentPageIndex:e})}},{key:"render",value:function(){var n=this,i=999*(this.state.currentPageIndex-1),o=this.props.products.slice(i,i+999),a=S.getLayout(this.props.themeName,this.props.layout)()
o=o.map(function(o,r){var s={product:o,layout:n.props.layout,hasMultipleProducts:n.props.products.length>=2,columnClass:a.columnClass,textClass:a.textClass,imgShapeClass:a.imgShapeClass,settings:n.props.settings,pageId:n.props.pageId}
return d.default.createElement(e,l({},s,{key:r,index:r+i,isPortfolio:t}))})
var r={left:"0"},u={height:"auto"}
return s("div",{className:"s-ecommerce-card-view-wrapper",style:r},void 0,s("div",{className:"s-ecommerce-card-view-cards-wrapper"},void 0,s("div",{className:"s-ecommerce-card-view-cards",style:u},void 0,o)))}}])
return c}(d.default.Component)
return(0,x.default)(i,[],function(){return{themeName:g.default.getThemeName()}})},E=N(b.default)
E.createCardView=N
t.default=E
e.exports=t.default},1805:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),c=n(0),d=o(c),f=n(2),p=o(f),m=n(13),h=o(m),g=n(5),v=o(g),y=n(21),b=n(63),_=o(b),w=n(82),C=o(w),x=n(1206),k=o(x),S=n(73),N=o(S),E=n(41),P=o(E),O=n(189),T=o(O),L=n(475),M=o(L),I=n(1796),B=n(1803),D=o(B),j=function(e,t){var n,o
return o=n=function(n){function o(){a(this,o)
var e=r(this,(o.__proto__||Object.getPrototypeOf(o)).call(this))
e._bind("_onClickShowProductPage")
return e}s(o,n)
u(o,[{key:"componentDidMount",value:function(){var e=this,t=(0,v.default)(h.default.findDOMNode(this.refs.imageWrapper)),n=t.find("img")
n.length||(n=t.find("iframe"))
this._adjustImageSize(t,n)
n.load(function(){return e._adjustImageSize(t,n)});(0,v.default)(window).resize(P.default.debounce(function(){return e._adjustImageSize(t,n)},300))}},{key:"componentDidUpdate",value:function(){var e=this,t=(0,v.default)(h.default.findDOMNode(this.refs.imageWrapper)),n=t.find("img")
n.length||(n=t.find("iframe"))
P.default.debounce(function(){return e._adjustImageSize(t,n)},300)()}},{key:"_isVideo",value:function(){var e=this.props.product.picture[0]
return e&&"video"===e.mediaType}},{key:"_getOutOfStock",value:function(){return this.props.product.variations.every(function(e){return 0===Number(e.quantity)})}},{key:"_getProductImage",value:function(){var t=this.props.product.picture[0]
return(void 0!==t?t.thumbnailUrl:void 0)||(0,y.cdnAssetPath)(e.DEFAULT_PRODUCT_IMAGE)}},{key:"_getContentRatioForVideoThumbnail",value:function(){var e=16/9
switch(this.props.imgShapeClass){case"landscape":e=4/3
break
case"square":e=1
break
case"portrait":e=.8
break
default:e=16/9}return e}},{key:"_onClickShowProductPage",value:function(){var e=this.props.product
e.externalLink||N.default.gotoProductPage(e.id,this.context.fromStorePage,t)}},{key:"_showIframeSrc",value:function(){var e=this.props.product.picture[0]
return e&&"video"===e.mediaType&&!e.thumbnailUrl?e.url:""}},{key:"_adjustImageSize",value:function(e,t){if("auto"===this.props.imgShapeClass)t.removeAttr("style")
else{var n=e.outerWidth(),i=e.outerHeight(),o=n/i,a=t.prop("naturalWidth"),r=t.prop("naturalHeight"),s=a/r||4/3
if(o>s){var l=n+10,u=l/s
t.width(l)
t.height(u)
t.css({top:(i-u)/2+"px",left:(n-l)/2+"px"})}else{var c=i+10,d=c*s
t.height(c)
t.width(d)
t.css({top:(i-c)/2+"px",left:(n-d)/2+"px"})}}}},{key:"_bind",value:function(){for(var e=this,t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i]
n.forEach(function(t){return e[t]=e[t].bind(e)})}},{key:"_renderPrice",value:function(e){return C.default.needNarrowCurrencySymbol()?l(I.PriceWithSmallSymbol,{settings:this.props.settings,price:e}):l("span",{},void 0,e)}},{key:"render",value:function(){var e=this.props,t=e.product,n=e.settings,o=e.isPortfolio,a=e.imgShapeClass,r=!o&&this._getOutOfStock(),s=!o&&n.estimatedDelivery,u=o?t.subtitle&&t.subtitle.active&&t.subtitle.text:C.default.getPriceScope(t),c=o?"":C.default.getOriginalPrice(t),f=this._showIframeSrc(),p=this._isVideo(),m=void 0
m=i(s?"Ecommerce|Pre-Order":"Ecommerce|Buy now")
var h=k.default.canUseDOM()?"":C.default.getProductPath(t.id,this.context.fromStorePage,o),g=this._getContentRatioForVideoThumbnail(),v=d.default.createElement("div",{className:"s-ecommerce-card-view-card-image "+a+" "+(r?"out-of-stock":"in-stock"),ref:"imageWrapper"},p?l(D.default,{className:"video-thumbnail-wrapper",auto:"auto"===a,containerRatio:16/9,contentRatio:g},void 0,f?l("iframe",{style:{border:"none"},src:f}):l(M.default,{alt:t.name,dataSrc:this._getProductImage()})):l(M.default,{alt:t.name,dataSrc:this._getProductImage()}),p&&l("div",{className:"play-button "+(-1!==this.props.columnClass.indexOf("eight")?"big":"")},void 0,l("div",{className:"after"})),!o&&r&&l("div",{className:"s-ecommerce-card-view-card-stock-warning s-font-body"},void 0,i("Ecommerce|Out of Stock")),!o&&l("div",{className:"s-ecommerce-card-view-card-image-overlay"}),!o&&l("div",{className:"s-ecommerce-card-view-card-image-button"},void 0,l(T.default,{component:k.default.canUseDOM()?"a":"span",className:"s-common-button s-font-body"},void 0,m))),y=l("div",{className:"s-ecommerce-card-view-card-name s-font-body "+this.props.textClass},void 0,this.props.product.name),b=l("div",{onClick:this._onClickShowProductPage},void 0,v,l("div",{className:"s-ecommerce-card-view-card-description"},void 0,y,u&&l("div",{className:"s-ecommerce-card-view-card-price s-font-body "+this.props.textClass},void 0,this._renderPrice(u)),c&&l("div",{className:"s-ecommerce-card-view-card-original-price s-font-body "+this.props.textClass},void 0,this._renderPrice(c))))
return l("div",{className:"s-ecommerce-card-view-card "+this.props.columnClass},void 0,h&&l("a",{href:h,style:{color:"inherit"}},void 0,b),!h&&b)}}])
return o}(d.default.Component),n.contextTypes={fromStorePage:p.default.bool},o},A=j(_.default,!1)
A.createProductCard=j
t.default=A
e.exports=t.default}).call(t,n(3))},1806:function(e,t,n){e.exports=n(4)(842)},1807:function(e,t,n){e.exports=n(4)(1329)},1808:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(1911),a=i(o),r=n(1913),s=i(r),l=n(1204)
t.default=(0,l.createProductWrapper)(a.default,s.default,!0)
e.exports=t.default},1864:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(5),a=i(o),r=n(1),s=i(r),l=n(2),u=i(l),c=n(13),d=i(c),f=n(17),p=i(f),m=n(19),h=i(m),g=n(22),v=i(g),y=n(292),b=i(y),_=n(191),w=i(_),C=n(1920),x=i(C),k=p.default.createPageComponent({displayName:"VideoBgContent",bobcatPropTypes:{data:{videoHtml:u.default.string,videoUrl:u.default.string,className:u.default.string,style:u.default.object}},observedProps:["videoHtml"],getBobcatDefaultProps:function(){return{data:{videoHtml:""}}},_removeIframe:function(){return(0,a.default)(d.default.findDOMNode(this)).find("iframe").remove()},_isSliderCloneComponent:function(){var e=(0,a.default)(d.default.findDOMNode(this)),t=e.closest(".slick-track").find(".slick-slide").length-2,n=e.closest(".slick-slide")
return t>0&&("-1"===n.attr("data-index")||n.attr("data-index")===""+t)},componentDidMount:function(){this._isSliderCloneComponent()?this._removeIframe():this._setupBgVideo()},componentDidUpdate:function(e){e.videoHtml===this.dtProps.videoHtml||this._isSliderCloneComponent()||this._setupBgVideo()},componentWillUnmount:function(){var e=this
if(!this._isSliderCloneComponent()&&this._video&&null!=this._video.frame&&null!=this._video.frame.youTubePlayer){"function"==typeof this._video.frame.youTubePlayer.stopVideo&&this._video.frame.youTubePlayer.stopVideo()
"function"==typeof this._video.frame.youTubePlayer.clearVideo&&this._video.frame.youTubePlayer.clearVideo()
this._video.frame.isRemoved=!0
s.default.remove(window.youTubeVideoBgList,function(t){return t===e._video.frame})}},afterLayoutChange:function(){return this._setupBgVideo()},_setupBgVideo:function(){var e=this
v.default.Event.unsubscribe(this._token)
this._video||(this._video={})
var t=(0,a.default)(d.default.findDOMNode(this))
if(t.length&&!h.default.isMobile()){window.clearInterval(null!=this._video.frame?this._video.frame.loopTimer:void 0)
var n=function(){switch(e._video.type){case"youtube":var t=e._video.frame
window.youTubeVideoBgList||(window.youTubeVideoBgList=[])
Array.from(window.youTubeVideoBgList).includes(t)||window.youTubeVideoBgList.push(t)
window.onYouTubeIframeAPIReady=function(){if(null!=(null!=window.YT?window.YT.Player:void 0)){var e=!0,n=!1,i=void 0
try{for(var o,a=Array.from(window.youTubeVideoBgList)[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){t=o.value
!function(e){var t=new window.YT.Player(e.attr("id"),{videoId:e.attr("id").split("_")[0],height:e.attr("height"),width:e.attr("width"),events:{onReady:function(t){var n=void 0
e.player=n=t.target
if(!w.default.get("enableSoundForVideoBg")){n.setVolume(0)
n.mute&&n.mute()}n.setLoop(!0)
e.duration=n.getDuration()
e.loopTimer=null
e.startLoop=function(){var e=this
window.clearInterval(this.loopTimer)
return this.loopTimer=window.setInterval(function(){return e.isRemoved?window.clearInterval(e.loopTimer):e.player.seekTo(0)},1e3*(this.duration-1))}
return e.startLoop()},onStateChange:function(t){try{if(t.data===window.YT.PlayerState.PLAYING){e.css("opacity",1)
e.closest(".video-bg-wrap").addClass("no-bg")}if([window.YT.PlayerState.ENDED,window.YT.PlayerState.PAUSED].includes(t.data)){t.target.playVideo()
return e.startLoop()}}catch(e){}}}})
e.youTubePlayer=t}(t)}}catch(e){n=!0
i=e}finally{try{!e&&a.return&&a.return()}finally{if(n)throw i}}return window.youTubeVideoBgList=[]}}
if(null==window.YT)return(0,a.default)("body").append((0,a.default)("<script src='https://www.youtube.com/iframe_api'></script>"))
break
case"vimeo":var i={method:"setVolume",value:"0"},o={method:"addEventListener",value:"pause"},r={method:"play"},s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e.attr("src").split("?")[0]
n="https:"+n.replace(/^https?:/,"")
try{e[0].contentWindow.postMessage(JSON.stringify(o),n)
if(t)return e[0].contentWindow.postMessage(JSON.stringify(i),n)}catch(e){}},l=function(e){e.css("opacity",1)
var t=e.attr("src").split("?")[0]
t="https:"+t.replace(/^https?:/,"")
try{return e[0].contentWindow.postMessage(JSON.stringify(r),t)}catch(e){}}
return(0,a.default)(window).bind("message",function(t){if(t.originalEvent.origin.match(/player\.vimeo\.com/)){switch(JSON.parse(t.originalEvent.data).event){case"ready":n=!w.default.get("enableSoundForVideoBg")
s(e._video.frame,n)
l(e._video.frame);[1e3,2e3,5e3,1e4].forEach(function(t){return setTimeout(function(){return l(e._video.frame)},t)})
break
case"pause":l(e._video.frame)}}})}}
!function(){var n=(e.dtProps.videoHtml||"").replace("&origin=","&origin="+a.default.url().attr("base")).replace(/^(https?):/,"")
t.html(n)
if(""!==n){var i=t.find("iframe")
i.length||(i=t.find("video"))
e._video.frame=i
e._video.type=-1!==n.indexOf("youtube.com")?"youtube":n.indexOf("vimeo.com")?"vimeo":"mp4"
if(i.length){"youtube"===e._video.type&&i.addClass("youtube-video")
var o=t.closest(".slide, #s-header, .s-blog-header"),r=t.closest(".video-bg");["static","initial"].includes(r.css("position"))&&r.css("position","relative")
r.children().each(function(){var e=(0,a.default)(this)
window.edit_page.v4?e.hasClass("video-bg-wrap")||!["static","initial"].includes(e.css("position"))||e.hasClass("s-section-editor-wrapper")||e.css("position","relative"):!e.hasClass("video-bg-wrap")&&["static","initial"].includes(e.css("position"))&&e.css("position","relative")
if((parseInt(e.css("z-index"),10)||1)<3)return e.css("z-index",3)})
r.find(".video-bg-wrap").css("z-index",1)
e._resizeFn&&(0,a.default)(window).off("resize",e._resizeFn)
e._resizeFn=s.default.debounce(function(){var t=Math.max(o.outerHeight(),r.height()),n=Math.max(o.outerWidth(),r.width()),a=(n/t).toFixed(2)
!function(){var e=void 0,o=void 0
i.css({position:"absolute",top:0,left:0})
var r=parseInt(i.attr("height"),10),s=parseInt(i.attr("width"),10),l=(s/r).toFixed(2)
if(l>a){e=t+100
o=(t+100)*l}else{e=(n+100)/l
o=n+100}var u=(t-e)/2,c=(n-o)/2
i.css({height:e+"px",width:o+"px",top:u+"px",left:c+"px"})}()
return window.setTimeout(function(){if(t!==Math.max(o.height(),r.height()))return e._resizeFn()},50)},100)
e._resizeFn}}}()
n()
null!=window.YT&&window.onYouTubeIframeAPIReady()
if(this._resizeFn){for(var i=[100,500,1e3,2e3,5e3],o=0;o<i.length;o++){var r=i[o]
window.setTimeout(this._resizeFn,r)}(0,a.default)(window).on("resize",this._resizeFn)
this._token=v.default.Event.subscribe("Section.changed",function(){return e._resizeFn()})
return this._token}}},render:function(){return x.default.apply(this)}})
k.WaypointLazy=(0,b.default)(k,{noWrapper:!0})
t.default=k.WaypointLazy
e.exports=t.default},1865:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n
return e}Object.defineProperty(t,"__esModule",{value:!0})
var r,s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),l=n(0),u=(o(l),n(2)),c=o(u),d=n(17),f=o(d),p=n(1793),m=o(p),h=n(21),g=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(h),v=f.default.createPageComponent({displayName:"RepeatableItem",bobcatPropTypes:(r={data:{children:c.default.oneOfType([c.default.object,c.default.array]),binding:c.default.object.isRequired,components:c.default.object},designer:{index:c.default.number.isRequired,vertical:c.default.bool,outerView:c.default.bool,hasEditorOpened:c.default.bool.isRequired,parentSize:c.default.number.isRequired,className:c.default.string,style:c.default.object,moveButtonStyle:c.default.object,alwaysShowButtons:c.default.bool,forbiddenRemove:c.default.bool}},a(r,"data",{isArranging:c.default.bool}),a(r,"callback",{onMoveUp:c.default.func,onMoveDown:c.default.func,onDeleteItem:c.default.func}),r),getBobcatDefaultProps:function(){return{designer:{vertical:!1,outerView:!1,className:""},data:{isArranging:!1}}},_clickDeleteButton:function(e){return this.props.onDeleteItem(e)},componentDidMount:function(){this.showMoveOverlay=!1
this.showDeleteOverlay=!1},onMouseEnterMoveButton:function(){this.showMoveOverlay=!0
this.forceUpdate()},onMouseLeaveMoveButton:function(){this.showMoveOverlay=!1
this.forceUpdate()},onMouseEnterDeleteButton:function(){this.showDeleteOverlay=!0
this.forceUpdate()},onMouseLeaveDeleteButton:function(){this.showDeleteOverlay=!1
this.forceUpdate()},_renderNativeEditorButtons:function(){return s("div",{className:"native-controls"},void 0,this.dsProps.parentSize>1&&s("div",{className:"f-s-repeatable-item-order-indicator"},void 0,this.props.index+1),s("div",{className:"native-buttons"},void 0,s("div",{className:"s-repeatable-delete-button f-s-repeatable-delete-button main-button",title:i("Remove this item"),onClick:this._clickDeleteButton.bind(null,this.dsProps.index),onMouseEnter:this.onMouseEnterDeleteButton,onMouseLeave:this.onMouseLeaveDeleteButton},void 0,s("span",{}),s("img",{src:g.cdnAssetPath("/images/icons/native/ic_delete_nog@3x.png")})),this.props.index>0&&s(m.default,{onTap:this.props.onMoveUp.bind(this,this.props.index),className:"f-s-repeatable-move-button f-s-repeatable-move-button--up main-button"},void 0,s("span",{}),s("img",{src:g.cdnAssetPath("/images/icons/native/ic_down_arrow_white@3x.png")})),this.props.index+1<this.props.parentSize&&s(m.default,{onTap:this.props.onMoveDown.bind(this,this.props.index),className:"f-s-repeatable-move-button f-s-repeatable-move-button--down main-button"},void 0,s("span",{}),s("img",{src:g.cdnAssetPath("/images/icons/native/ic_down_arrow_white@3x.png")}))))},_renderEditorButtons:function(){return(!this.dsProps.hasEditorOpened||this.dsProps.alwaysShowButtons)&&s("div",{className:"buttons"},void 0,this.dsProps.parentSize>1&&s("div",{className:"s-repeatable-move-button",title:i("Drag to reorder"),onMouseEnter:this.onMouseEnterMoveButton,onMouseLeave:this.onMouseLeaveMoveButton,style:this.props.moveButtonStyle||{}}),!this.props.forbiddenRemove&&s("div",{className:"s-repeatable-delete-button",title:i("Remove this item"),onClick:this._clickDeleteButton.bind(null,this.dsProps.index),onMouseEnter:this.onMouseEnterDeleteButton,onMouseLeave:this.onMouseLeaveDeleteButton},void 0,s("div",{className:"delete-button-wrap"},void 0,s("div",{className:"delete-button-confirm"},void 0,i("Sure?")))))},render:function(){return s("div",{"data-sorting-index":this.props.index,className:this.props.className+" s-repeatable-item",style:this.props.style},void 0,!1,this.props.children,!1)}})
t.default=v
e.exports=t.default}).call(t,n(3))},1866:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){for(var i=[],o=e<t,a=n?o?t+1:t-1:t,r=e;o?r<a:r>a;o?r++:r--)i.push(r)
return i}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=i(r),l=n(2),u=i(l),c=n(13),d=(i(c),n(1)),f=(i(d),n(6)),p=(i(f),n(1807)),m=i(p),h=n(17),g=i(h),v=n(21),y=(function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e}(v),n(243)),b=(i(y),n(1885)),_=(i(b),n(1865)),w=i(_),C=n(46),x=i(C),k=n(73),S=i(k),N=void 0,E={displayName:"Repeatable",bobcatPropTypes:{data:{children:u.default.oneOfType([u.default.object,u.default.array]),binding:u.default.object.isRequired,components:u.default.object,list:m.default.list.isRequired},designer:{className:u.default.string,style:u.default.object,sortableContainment:u.default.string,sortableContainmentSelector:u.default.string,canAddItems:u.default.bool}},statics:{hasContent:function(e){return e.get("list").size>0}},getBobcatDefaultProps:function(){return{designer:{className:"",sortableContainment:"parent"}}},hasContent:function(){return N.hasContent(this.getDefaultBinding())},componentDidUpdate:function(){},_onClickSave:function(){this.updateState("normal")
this.savePage()},_isFirst:function(e){return 0===e},_isLast:function(e){return this.props.list.size===e+1},_navigateToItem:function(e){var t=$(this.refs.repeatable),n=t.find(".s-repeatable-item").eq(e),i=(window.innerHeight-n.height())/2
i<0&&(i=20)
var o=n.offset().top-i
S.default.navigateToPosition(o)},_renderChildren:function(){var e=this
return s.default.Children.map(this.props.children,function(t){if((null!=t?t.type.displayName:void 0)===w.default.displayName){var n=Object.assign({},{onMoveUp:function(t){var n=e.props.list
if(0!==n.size&&!e._isFirst(t)){var i=o(0,n.size,!1),a=[i[t],i[t-1]]
i[t-1]=a[0]
i[t]=a[1]
x.default.reorderRepeatable(i,e.getDefaultBinding().sub("list"))
e.savePage()
return e._navigateToItem(t-1)}},onMoveDown:function(t){var n=e.props.list
if(!e._isLast(t)&&0!==n.size){var i=o(0,n.size,!1),a=[i[t+1],i[t]]
i[t]=a[0]
i[t+1]=a[1]
x.default.reorderRepeatable(i,e.getDefaultBinding().sub("list"))
e.savePage()
return e._navigateToItem(t+1)}},onDeleteItem:function(t){e._deleteItem(t)
e.savePage()},isArranging:e.isState("editor")})
return s.default.cloneElement(t,n)}return t})},render:function(){var e=this,t=(this.getDefaultBinding(),this.props.style||{})
return s.default.createElement("div",{className:this.props.className+" s-repeatable",ref:"repeatable"},!1,function(){return a("div",{style:t},void 0,e.props.children)}())}}
N=g.default.createPageComponent(E)
t.default=N
e.exports=t.default},1867:function(e,t,n){"use strict"
function i(){return l}function o(e){return Object.assign({},l,e)}function a(e){var t=e.textIsLeft?"left-align":"",n=e.imgShape
return{one:function(){return o({columnClass:(0,s.generateItemClassByColumnsNum)(1,!0),textClass:t,imgShapeClass:n})},two:function(){return o({columnClass:(0,s.generateItemClassByColumnsNum)(2,!0),textClass:t,imgShapeClass:n})},three:function(){return o({columnClass:(0,s.generateItemClassByColumnsNum)(3,!0),textClass:t,imgShapeClass:n})},four:function(){return o({columnClass:(0,s.generateItemClassByColumnsNum)(4,!0),textClass:t,imgShapeClass:n})}}}function r(e){var t=e.imgShape
return{one:function(){return o({columnClass:(0,s.generateItemClassByColumnsNum)(1,!0),textClass:"left-align",imgShapeClass:t})},two:function(){return o({columnClass:(0,s.generateItemClassByColumnsNum)(2,!0)+" half-fixed",textClass:"left-align",imgShapeClass:t})},three:function(){return o({columnClass:(0,s.generateItemClassByColumnsNum)(3,!0)+" half-fixed",textClass:"left-align",imgShapeClass:t})},four:function(){return o({columnClass:(0,s.generateItemClassByColumnsNum)(4,!0),textClass:"left-align",imgShapeClass:t})}}}Object.defineProperty(t,"__esModule",{value:!0})
var s=n(1792),l={columnClass:"",textClass:"",imgShapeClass:""},u={landscape:a({imgShape:"landscape",textIsLeft:!0}),square:a({imgShape:"square",textIsLeft:!0}),portrait:a({imgShape:"portrait",textIsLeft:!0}),auto:a({imgShape:"auto",textIsLeft:!0})},c={default:{landscape:a({imgShape:"landscape"}),square:a({imgShape:"square"}),portrait:a({imgShape:"portrait"}),auto:a({imgShape:"auto"})},ion:{landscape:r({imgShape:"landscape"}),square:r({imgShape:"square"}),portrait:r({imgShape:"portrait"}),auto:r({imgShape:"auto"})},persona:u,sleek:u,onyx_new:u},d=(0,s.getLayoutMapping)(c),f={default:{row:"landscape-one",card:"landscape-three"}}
t.default={isOldLayoutKey:function(e,t){return Boolean((f[e]||f.default)[t])},getDefaultLayoutKey:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=void 0;(d[e]||d.default)[t]&&(n=t)
if(!n){n=(f[e]||f.default)[t]}n||(n=Object.keys(d[e]||d.default)[0])
return n},getLayout:function(e,t){return(d[e]||d.default)[t]||i},getLayoutOptions:function(e){return c[e]||c.default},getLayoutMapping:function(e){return d[e]||d.default}}
e.exports=t.default},1868:function(e,t,n){"use strict"
function i(){return f}function o(e){return Object.assign({},f,e)}function a(e){var t=(0,d.generateItemClassByColumnsNum)(e.columnsNum,!0),n=e.box?p.box:p.text
return{text:function(){return o({repeatableClass:p.repeatable,itemClass:t,textClass:n})},button:function(){return o({repeatableClass:p.repeatable,itemClass:t,textClass:n,buttonClass:p.button})}}}function r(e,t){var n=e.getRepeatableBinding("repeatable1").get().size,i=""
i=n<=2?"":n%2&&0==t?"":"half"
if(2==n)0==t&&(i+=" border-bottom")
else{t<n-2&&(i+=" border-bottom")
t>0&&t%2&&n%2&&(i+=" border-right")
t%2||n%2||(i+=" border-right")}n<=4&&(i+=" large-info-box")
return"s-persp-column s-mhi "+i}function s(e,t){return"s-persp-container absolute "+["topRight","bottomLeft","bottomRight"][t]}function l(e){return function(t,n){var i=t,o=i.getRepeatableBinding("repeatable1").sub(n),a=""
i.sbAnyHasContent("text1 text2",{parentBinding:o,showOnly:!1})&&(a="s-persp-"+e)
return a}}function u(e){return{text:function(){return o({itemClass:s,textClass:l(e)})},button:function(){return o({itemClass:s,textClass:l(e),buttonClass:p.button})}}}function c(){return{text:function(){return o({repeatableClass:"s-mh",itemClass:r,textClass:"s-info-box"})},button:function(){return o({repeatableClass:"s-mh",itemClass:r,textClass:"s-info-box",buttonClass:"s-text-button"})}}}Object.defineProperty(t,"__esModule",{value:!0})
var d=n(1792),f={repeatableClass:"",itemClass:"",textClass:"",buttonClass:""},p={repeatable:"s-mh",text:"s-mhi",box:"s-mhi s-info-box",button:"s-text-button"},m={default:{text:{one:a({columnsNum:1}),two:a({columnsNum:2}),three:a({columnsNum:3}),four:a({columnsNum:4})},box:{one:a({columnsNum:1,box:!0}),two:a({columnsNum:2,box:!0}),three:a({columnsNum:3,box:!0}),four:a({columnsNum:4,box:!0})}},perspective:{text:{overlay:u("overlay"),card:u("card")},box:{center:c(),mediaLeft:c(),mediaRight:c()}}},h=(0,d.getLayoutMapping)(m),g={default:{"1col":"box-one-text","2col":"box-two-text","3col":"box-three-text","4col":"box-four-text"},perspective:{overlay:"text-overlay-text",card:"text-card-text",mediaLeft:"box-mediaLeft-text",mediaRight:"box-mediaRight-text",center:"box-center-text"}},v={default:{text:function(e){return"text-one-"+e},box:function(e){return"box-two-"+e}},perspective:{text:function(e){return"text-card-"+e},box:function(e){return"box-center-"+e}}}
t.default={getDefaultLayoutKey:function(e,t){t=t||""
var n=(g[e]||g.default)[t];(h[e]||h.default)[t]&&(n=t)
if(!n){var i=-1!==t.indexOf("button")?"button":"text",o=t.split("-")[0],a=v[e]||v.default
n=a[o]&&a[o](i)}n||(n=Object.keys(h[e]||h.default)[0])
return n},getLayout:function(e,t){return(h[e]||h.default)[t]||i},getLayoutOptions:function(e){return m[e]||m.default},getLayoutMapping:function(e){return h[e]||h.default}}
e.exports=t.default},1869:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),s=n(0),l=o(s),u=n(2),c=o(u),d=n(292),f=o(d),p=n(7),m=o(p),h=n(33),g=o(h),v=n(1806),y=(o(v),n(5)),b=o(y),_=n(17),w=o(_),C=n(14),x=o(C),k=n(116),S=o(k),N=n(8),E=o(N),P=n(100),O=o(P),T=n(68),L=o(T),M=n(61),I=o(M),B=n(158),D=o(B),j=n(63),A=o(j),H=n(1204),R=o(H),F=n(1798),V=o(F),U=n(11),z=o(U),W=n(120),G=o(W),K=n(96),$=n(496),q=n(41),Y=o(q),J=n(256),X=(o(J),!1),Q=w.default.createPageComponent({displayName:"Ecommerce",mixins:[(0,I.default)("editor"),G.default],bobcatPropTypes:{data:{text:c.default.string,category:c.default.oneOfType([c.default.string,c.default.number]),binding:c.default.object},internal:{onConnectionFailed:c.default.func}},componentWillMount:function(){var e=this._getProperLocation(),t=e.pathname.split("/")
this.initMeta({currentCategory:z.default.isInStorePage()?L.default.getCategoryIdByName(t.pop()):this.dtProps.category,nextCategory:this.dtProps.category,currentPage:1,detailMode:!1})},componentDidMount:function(){var e=this
this._loadProductsFromServer()
L.default.getFistLoadingState("settings")&&S.default.getEcommerceSettings({pageId:E.default.getId()})
L.default.getFistLoadingState("categories")&&S.default.getEcommerceCategories({pageId:E.default.getId()})
this._token=D.default.register(function(e){switch(e.actionType){case A.default.ActionTypes.GET_ECOMMERCE_PRODUCTS_SUCCESS:if(!X){X=!0
var t=n(183)
t.init()
t.trackEcommerceBuyerEvent(m.default.getKeenIoEcommerceBuyerLanding())}}})
this._onCategoryChangeListenId=L.default.getCategoriesBinding().addListener("",this._onCategoryChange);(0,b.default)(window).on("resize.ecommerce",Y.default.debounce(function(){return e.forceUpdate()},300))},componentDidUpdate:function(e){if(this._getRenderCategory(this.dtProps.category)!==this._getRenderCategory(e.category)||e.category!==this.dtProps.category){if("all"===this._getRenderCategory(this.dtProps.category)||"all"===this.dtProps.category){this.setMeta("nextCategory","all")
this.setMeta("currentCategory","all")
this.setMeta("currentPage",1)}else{this.setMeta("nextCategory",this.dtProps.category)
this.setMeta("currentCategory",this.dtProps.category)
this.setMeta("currentPage",1)}this._loadProductsFromServer()}},componentWillUnmount:function(){D.default.unregister(this._token)
L.default.getCategoriesBinding().removeListener(this._onCategoryChangeListenId);(0,b.default)(window).off("resize.ecommerce")},_getProperLocation:function(){return location},_changeRouteByCategoryId:function(e){var t=L.default.getCategories(),n=t.find(function(t){return t.id===e})||{name:""}
history.replaceState({},"/store/categories","/store/categories/"+n.name)},_onCategoryChange:function(){var e=this
return this.setTimeout(function(){return e._loadProductsFromServer()},10)},_getProductsData:function(){return L.default.getProducts(this._getRenderCategory(this.getMeta("currentCategory")),this.getMeta("currentPage"))},_getEditBtnText:function(){var e=this._getProductsData().length
return i(0===e?"Ecommerce|Add Product":1===e?"Ecommerce|Manage Product":"Ecommerce|Manage Products")},_getRenderCategory:function(e){var t="all"===e?this.getMeta("currentCategory"):e
L.default.isCategoryIdExist(t)||(t="all")
return t},_loadProductsFromServer:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments[1]
this.setMeta("currentPage",t)
var i=S.default.getEcommerceProducts({pageId:E.default.getId(),category:n||this._getRenderCategory(this.getMeta("currentCategory")),page:t})
if(i)return i.fail(function(){return e.props.onConnectionFailed()})},_getCurrentPageNum:function(){return this.getMeta("currentPage")},_loadNextPage:function(){var e=this._getCurrentPageNum()
this.setMeta("currentPage",e+1)
return this._loadProductsFromServer(e+1)},_onClickEditor:function(e){x.default.openEcommerceManagerDialog(e)},_changeCategory:function(e){z.default.isInStorePage()&&this._changeRouteByCategoryId(e)
this.setMeta("currentCategory",e)
return this._loadProductsFromServer(1,e)},_changeToDetailMode:function(){return this.setMeta("detailMode",!0)},_changeToNormalMode:function(){return this.setMeta("detailMode",!1)},_getCategoryBarProps:function(){return{currentCategory:this.getMeta("currentCategory"),changeCategory:this._changeCategory,categories:L.default.getCategories()}},_getWrapperProps:function(){return{products:this._getProductsData().filter(function(e){return"visible"===e.status}),pageId:E.default.getId(),hasMultipleProducts:L.default.getProducts().length>=2,settings:L.default.getSettings(),cartData:O.default.getCart(),layout:this.props.layout||"landscape-one",category:this.props.category||"all",changeToDetailMode:this._changeToDetailMode,changeToNormalMode:this._changeToNormalMode}},render:function(){var e=this
this.observeBinding(L.default.getBinding())
this.observeBinding(O.default.getCartBinding())
var t=L.default.getPagination(this.getMeta("currentCategory")),n=this.getMeta("detailMode"),o=this._getEditBtnText(),s=L.default.getLoadingState("product")||L.default.getLoadingState("settings")||L.default.getLoadingState("category"),u=L.default.getFistLoadingState("categories")||L.default.getFistLoadingState("settings"),c="persona"===E.default.getTheme().get("name")?"":"sixteen columns",d=m.default.getFromSiteToApp(),f=r("div",{className:c+" s-ecommerce-empty-box s-common-status no-float"},void 0,r("div",{className:"tags"},void 0,r("div",{className:"fa fa-tag"}),r("div",{className:"entypo-bag"}),r("div",{className:"fa fa-shopping-cart"})),r("div",{className:"text s-font-body"},void 0,i("Ecommerce|No products in this shop now!"))),p=t&&t.totalPages>=2&&(d?r("div",{className:"s-ecommerce-pagination"},void 0,r(K.Link,{className:"s-ecommerce-pagination-item s-font-body",to:"/store/page?category="+this.getMeta("currentCategory")},void 0,i("Ecommerce|View more"))):r("div",{className:"s-ecommerce-pagination"},void 0,t.totalPages>this._getCurrentPageNum()&&r("span",{className:"s-ecommerce-pagination-item s-font-body",onClick:this._loadNextPage},void 0,i("Ecommerce|Show more")),this._getCurrentPageNum()>1&&r("span",{className:"s-ecommerce-pagination-item s-font-body",onClick:function(){return e.setMeta("currentPage",1)}},void 0,i("Ecommerce|Show less"))))
return l.default.createElement("div",{className:"s-component s-ecommerce",ref:"root"},r("div",{className:"s-ecommerce-content"},void 0,L.default.getCategories().length>0&&("all"===this.dtProps.category||!L.default.isCategoryIdExist(this.dtProps.category))&&r("div",{className:"persona"===E.default.getTheme().get("name")?"":"sixteen columns",style:{display:n?"none":"block"}},void 0,l.default.createElement(V.default,a({sbClass:this.props.sbClass},this._getCategoryBarProps()),r("div",{className:"s-component-editor-wrapper"},void 0,r("div",{className:(0,g.default)("s-component-overlay",{visible:m.default.getInWeChat()}),onClick:function(){return e._onClickEditor({tab:"category"})}},void 0,r("div",{className:"overlay"},void 0,r("div",{className:"center"},void 0,r("span",{},void 0,i("Ecommerce|Manage Categories")))))))),s&&r("div",{className:(0,g.default)("s-loading-wrapper",{"relative-wrapper":!this._getProductsData().length})},void 0,r("div",{className:"s-loading"})),l.default.createElement(R.default,a({},this._getWrapperProps(),{isLoading:s,isFirstLoading:u,emptyComponent:f,paginationComponent:p}),!s&&r("div",{className:"s-component-editor-wrapper"},void 0,r("div",{className:"s-component-overlay"+(m.default.getInWeChat()?" visible":""),onClick:function(){return e._onClickEditor({category:e.getMeta("currentCategory"),tab:"product"})}},void 0,r("div",{className:"overlay"},void 0,r("div",{className:"center"},void 0,r("span",{},void 0,o))))))))}}),Z=(0,$.addOffline)(Q)
Q.WaypointLazy=(0,f.default)(Z)
t.default=Z
e.exports=t.default}).call(t,n(3))},1870:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=n(57),r=i(a),s=n(0),l=i(s),u=n(13),c=(i(u),n(499)),d=i(c),f=n(1),p=i(f),m=n(5),h=i(m),g=n(492),v=i(g),y=(0,r.default)({displayName:"JQSlide",getDefaultProps:function(){return{component:v.default.div}},componentWillEnter:function(e){return(0,h.default)(e).slideDown(300,"easeInOutQuart")},componentWillExit:function(e){return(0,h.default)(e).slideUp(200,"easeInOutQuart")},render:function(){var e=Object.assign({},this.props)
e=p.default.omit(e,"component")
return l.default.createElement(d.default,o({},e,{in:this.props.in,onEnter:this.componentWillEnter,onExit:this.componentWillExit,timeout:300,appear:!0}),this.props.component(Object.assign({},e,{style:{display:"none"}})))}})
t.default=y
e.exports=t.default},1871:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(0),a=i(o),r=n(2),s=i(r),l=n(17),u=i(l),c=n(1907),d=i(c),f=n(7),p=i(f),m=n(1909),h=i(m)
t.default=u.default.createPageComponent({displayName:"AsyncComponentWrapper",observedProps:["immediate"],bobcatPropTypes:{data:{binding:s.default.object},designer:{componentName:s.default.string.isRequired,componentProps:s.default.object,immediate:s.default.bool,preRender:s.default.oneOfType([s.default.object,s.default.func])},callbacks:{beforeLoadCb:s.default.func,loadedCb:s.default.func}},getBobcatDefaultProps:function(){return{designer:{immediate:!0}}},componentDidMount:function(){if(p.default.getMobileViewEditor())switch(this.props.componentName){case"socialFeedManager":d.default.loadAsyncStore("socialFeedManager")}"function"==typeof this.props.beforeLoadCb&&this.props.beforeLoadCb()
this.dsProps.immediate&&this._requestComponent()},componentDidUpdate:function(e){this.requested||e.immediate||!this.dsProps.immediate||this._requestComponent()},_requestComponent:function(){var e=this
switch(this.props.componentName){case"ecommerce":n.e(59).then(function(){var t=n(1869)
e._innerComponent=t.WaypointLazy
u.default.register("EcommerceComponent",t)
return e._startLoad()}.bind(null,n)).catch(n.oe)
break
case"ecommerceBuy":n.e(40).then(function(){e._innerComponent=n(1874)
return e._startLoad()}.bind(null,n)).catch(n.oe)
break
case"socialFeedManager":n.e(58).then(function(){e._innerComponent=n(1875)
return e._startLoad()}.bind(null,n)).catch(n.oe)
break
case"socialFeedComponent":n.e(57).then(function(){var t=n(1876)
e._innerComponent=t.WaypointLazy
u.default.register("SocialFeedComponent",t)
return e._startLoad()}.bind(null,n)).catch(n.oe)}this.requested=!0},_startLoad:function(){this.forceUpdate()
return"function"==typeof this.props.loadedCb?this.props.loadedCb():void 0},_preLoad:function(){var e=void 0
e=this.props.preRender?"function"==typeof this.props.preRender?this.props.preRender.apply(this):this.props.preRender:h.default.apply(this)
return e},_loadInnerComponent:function(){var e=this._innerComponent,t={}
null!=this.props.componentProps&&(t=this.props.componentProps)
return a.default.createElement(e,t)},render:function(){return this._innerComponent?this._loadInnerComponent():this._preLoad()}})
e.exports=t.default},1872:function(e,t,n){"use strict";(function(i){function o(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),s=n(0),l=a(s),u=n(1),c=o(u),d=n(2),f=a(d),p=n(47),m=(a(p),n(492)),h=a(m),g=n(34),v=a(g),y=n(90),b=a(y),_=n(1793),w=a(_),C=n(17),x=a(C),k=n(61),S=a(k),N=n(474),E=a(N),P=n(1176),O=a(P),T=n(478),L=a(T),M=n(471),I=a(M),B=n(14),D=(a(B),n(293)),j=(a(D),n(1870)),A=a(j),H=n(1178),R=a(H),F=n(1794),V=n(1177),U=a(V),z=n(473),W=a(z),G=n(56),K=o(G),$=n(29),q=o($),Y=q.addProtocol,J=x.default.createPageComponent({displayName:"ImageLinkEditor",mixins:[(0,S.default)("editor"),O.default,E.default,I.default.enableAfterMount(),I.default.enableAfterUpdate()],bobcatPropTypes:{data:{url:L.default.url,textColor:f.default.oneOf(["dark","light","overlay"]),sizing:f.default.oneOf(["cover","contain","tile","center"]),backgroundVariation:f.default.string,focus:f.default.object,videoUrl:f.default.string,videoHtml:f.default.string,stockKey:f.default.string,binding:f.default.object,h:f.default.number,w:f.default.number,s:f.default.number,storageKey:f.default.string,storage:f.default.oneOf(["ali","c","qn","un"]),linkUrl:f.default.string.isRequired,linkTarget:f.default.string.isRequired},designer:{warnningInfo:f.default.string,setStateFunc:f.default.func,showBackgroundOverlayToggle:f.default.bool,showRemoveImageButton:f.default.bool,compactButtonLayout:f.default.bool}},componentDidMount:function(){this.setData("displayName",this.constructor.displayName)},_onClickSave:function(){this.savePage()
this.updateState("normal")},getBobcatDefaultProps:function(){return{data:{linkUrl:"",linkTarget:"_blank",warnningInfo:""}}},_onChangeUrl:function(e){this.updateData({linkUrl:Y(e.target.value,!0)})
this.savePage()},_onChangeTarget:function(e){this.updateData({linkTarget:e.target.checked?"_blank":"_self"})
this.savePage()},_isNewTab:function(){return"_blank"===this.dtProps.linkTarget},_hasImage:function(){var e=K.createImage(this.dtProps).getUrl(this.dsProps.size)
return q.imageHasContent(e)},_hasBackgroundOverlay:function(){return"overlay"===this.dtProps.textColor},_toggleBackgroundOverlay:function(){var e=this._hasBackgroundOverlay()?"light":"overlay"
this.updateData({textColor:e})
this.savePage()},_removeImage:function(){this.updateData((0,F.dataForEmptyBackground)())
this.savePage()},_renderWarnningInfoIcon:function(){return r("div",{className:"show-pub-alert pub-alert"},void 0,r("a",{className:"page publish-button"},void 0,r("div",{className:"pub-alert-icon"},void 0,r("div",{className:"fa fa-circle"},void 0,r("div",{id:"unpubed-count",className:"pub-count"},void 0,"!")))))},_onClickEditImage:function(){var e=this
U.default.launchTuiEditor(this._getUrlForImageEditor(),{onSavedCallback:function(t){return e._imageUploaded(t)}})},_getUrlForImageEditor:function(){var e=c.assign({},this.props,{s:10})
return K.createImage(e).getUrl(this.props.size)},_onClickUpload:function(){R.default.pick({initialTabIdx:0,iconLibComponents:"background",from:"banner",handlers:{itemUploaded:this._imageUploaded,itemSelected:this._imageUploaded}})},_setImage:function(e){this.updateData((0,F.imageDataForSaving)(e))},_imageUploaded:function(e){/\.mp4$/.test(e.getUrl())?this.updateData(Object.assign((0,F.imageDataForSaving)(e),{videoHtml:W.default.getVideoHtmlByUrl(e.getUrl(),1280,720),videoUrl:e.getUrl(),textColor:"light"})):this._setImage(e)
this.savePage()},_renderImgEditButton:function(){return this._hasImage()?r("div",{className:"clearfix s-layout-menu-button"},void 0,r("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickEditImage},void 0,i("Edit Image"))):null},_afterClickEditor:function(){this.props.setStateFunc("editor")},_afterClickCancel:function(){this.props.setStateFunc("normal")},render:function(){var e=v.default.DOM.input,t=this.dtProps,n=t.linkUrl,o=t.warnningInfo,a=this.props,s=a.showBackgroundOverlayToggle,u=a.showRemoveImageButton,c=a.compactButtonLayout,d="editor"===this.getDefaultBinding().get("_state"),f=this.isIframeEditing()
return l.default.createElement("div",{ref:"componentDOM",className:"s-component s-linker"+this.addIframeEditingClass()},r("div",{className:"s-component-editor dark-bg "+(d?"_open":""),onClick:this.onToggleMobileViewEditorBox},void 0,o&&this._renderWarnningInfoIcon(),r(w.default,{className:"title center clickable"+(f?" hidden":"")+" "+(c?"compact":"small"),onTap:this.toggleEditor,rel:"tooltip-left","data-original-title":o||""},void 0,this.isState("editor")?r("div",{className:"minus"},void 0,r("i",{className:"entypo-down-open-mini"})):r("div",{className:"plus"},void 0,r("i",{className:"entypo-right-open-mini"})),i("Editor|Image & Link")),r(b.default,{},void 0,this.isState("editor")&&!0&&r(A.default,{component:h.default.div,className:"main-editor"},void 0,r("div",{className:"s-layout-menu-field"},void 0,r("div",{className:"clearfix s-layout-menu-button"},void 0,r("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickUpload},void 0,i("Upload Image"))),l.default.createElement("img",{style:{display:"none"},src:this._getUrlForImageEditor(),ref:"aviaryImage"}),this._renderImgEditButton(),this._hasImage()&&u?r("div",{className:"clearfix s-layout-menu-button"},void 0,r("div",{className:"s-btn small no-margin dark-gray",onClick:this._removeImage},void 0,i("Remove Image"))):null,this._hasImage()&&s?r("label",{className:"s-layout-menu-label"},void 0,r(e,{type:"checkbox",checked:this._hasBackgroundOverlay(),onChange:this._toggleBackgroundOverlay}),i("Editor|Overlay")):null),r("div",{className:"s-layout-menu-field"},void 0,r("div",{className:"s-layout-menu-label"},void 0,i("Editor|Link URL")),r(e,{type:"text",name:"url",value:n,onChange:this._onChangeUrl}),r("label",{className:"s-layout-menu-label"},void 0,r(e,{type:"checkbox",checked:this._isNewTab(),onChange:this._onChangeTarget}),i("Editor|Open in new tab"))),r("div",{className:"clearfix"},void 0,r("div",{className:"s-btn green small done-button no-margin",onClick:this._onClickSave},void 0,i("Save")))))))}})
t.default=J
e.exports=t.default}).call(t,n(3))},1873:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(1),a=i(o),r=n(15),s=n(59),l=i(s),u=n(58),c=i(u),d=n(1908),f=i(d),p=[],m=[],h=a.default.assign({},r.EventEmitter.prototype,{emitConnections:function(){return this.emit("social_feed_connection_event_id",this.getAccounts())},addConnectionListener:function(e){return this.on("social_feed_connection_event_id",e)},removeConnectionListener:function(e){return this.removeListener("social_feed_connection_event_id",e)},emitFeeds:function(){return this.emit("social_feed_feeds_event_id",this.getFeeds())},addFeedsListener:function(e){return this.on("social_feed_feeds_event_id",e)},removeFeedsListener:function(e){return this.removeListener("social_feed_feeds_event_id",e)},getAccounts:function(){return m},getFeeds:function(){return p}}),g=function(e){m=e
h.emitConnections()},v=function(e){var t=!0,n=!1,i=void 0
try{for(var o,a=Array.from(e)[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var r=o.value
switch(r.provider){case"facebook":case"twitter":r.feeds=r.feeds.slice(0,3)
break
case"instagram":r.feeds=r.feeds.slice(0,12)}}}catch(e){n=!0
i=e}finally{try{!t&&a.return&&a.return()}finally{if(n)throw i}}p=e
h.emitFeeds()},y=function(e){return f.default.getAccounts({pageId:e.pageId,success:function(t){"function"==typeof e.success&&e.success(t)
return g(t.data.accounts)},fail:function(){return"function"==typeof e.fail?e.fail():void 0}})},b=function(e){return f.default.deleteAccount({pageId:e.pageId,accountId:e.accountId,success:function(t){"function"==typeof e.success&&e.success(t)
return g(t.data.accounts)},fail:function(){return"function"==typeof e.fail?e.fail():void 0}})},_=function(e){return f.default.updateAccount({pageId:e.pageId,accountId:e.accountId,data:e.data,success:function(t){return"function"==typeof e.success?e.success(t):void 0},fail:function(){return"function"==typeof e.fail?e.fail():void 0}})},w=function(e){return f.default.updateFacebookPage({pageId:e.pageId,accountId:e.accountId,data:e.data,success:function(t){return"function"==typeof e.success?e.success(t):void 0},fail:function(){return"function"==typeof e.fail?e.fail():void 0}})},C=function(e){return f.default.getFeeds({pageId:e.pageId,success:function(t){"function"==typeof e.success&&e.success()
return v(t.data.accounts)},fail:function(){return"function"==typeof e.fail?e.fail():void 0}})}
h.editorDispatchToken=l.default.register(function(e){switch(e.actionType){case c.default.ActionTypes.UPDATE_SOCIAL_FEED_ACCOUNTS:g(e.data)
break
case c.default.ActionTypes.UPDATE_SOCIAL_FEEDS:v(e.data)
break
case c.default.ActionTypes.GET_SOCIAL_FEED_ACCOUNTS:y(e.options)
break
case c.default.ActionTypes.DELETE_SOCIAL_FEED_ACCOUNT:b(e.options)
break
case c.default.ActionTypes.GET_SOCIAL_FEEDS:C(e.options)
break
case c.default.ActionTypes.UPDATE_SOCIAL_FEED_FACEBOOK_PAGE:w(e.options)
break
case c.default.ActionTypes.UPDATE_SOCIAL_FEED_ACCOUNT:_(e.options)}})
t.default=h
e.exports=t.default},1877:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(62),a=n(1878),r=i(a),s=n(8),l=i(s),u=function(){var e={},t={mobileActions:l.default.getMobileActions(),defaultEmail:l.default.getUser().get("email")}
return Object.assign({},e,t)},c=function(){return{}}
r.default.sharedProps=(0,o.sharedPropsBuilder)(function(){return[l.default.getBinding()]},u,c)
t.default=r.default
e.exports=t.default},1878:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),s=n(0),l=o(s),u=n(2),c=o(u),d=n(17),f=o(d),p=n(90),m=o(p),h=n(61),g=o(h),v=n(99),y=o(v),b=n(1879),_=o(b),w=n(1880),C=o(w),x=n(498),k=o(x)
t.default=f.default.createPageComponent({displayName:"ContactInfo",mixins:[(0,g.default)("editor")],bobcatPropTypes:{data:{address:c.default.string,phone:c.default.string,email:c.default.string,hours:c.default.string,binding:c.default.object},internal:{_state2:c.default.string}},_getSaveButtonProps:function(){var e=this,t=n(294),i=t.sendReturnToNormalMessage
return{onClickCancel:function(){e._restoreCancelValue()
e.setData("_state2","normal")
e._afterClickCancel&&e._afterClickCancel()
i(e)},onClickSave:function(){e.setData("_state2","normal")
e.savePage()
i(e)}}},getBobcatDefaultProps:function(){return{internal:{_state2:"normal"}}},componentDidMount:function(){this.initMeta({showDeleteOverlay2:!1})},onMouseEnterDeleteButton:function(){this.setMeta("showDeleteOverlay2",!0)},onMouseLeaveDeleteButton:function(){this.setMeta("showDeleteOverlay2",!1)},onClickDeleteButton:function(){this.setMeta("showDeleteOverlay2",!1)
this.props.onDelete()},_onClickEditor:function(){"normal"===this.props._state2&&this.setData("_state2","editor")
window.DEBUG&&(window.DEBUG.activeComponent=this)
this._storeCancelValue()
this.afterClickEditor&&this.afterClickEditor()},_isMobileViewEditing:function(){return this.props.displayName==this.constructor.displayName?this.addIframeEditingClass():""},_renderEditor:function(e){return r("div",{className:"s-component-editor-wrapper"},void 0,r("div",{className:"buttons"},void 0,r("div",{className:"s-repeatable-delete-button",title:i("Editor|Remove title"),onClick:this.onClickDeleteButton,onMouseEnter:this.onMouseEnterDeleteButton,onMouseLeave:this.onMouseLeaveDeleteButton},void 0,r("div",{className:"delete-button-wrap"},void 0,r("div",{className:"delete-button-confirm"},void 0,i("Sure?"))))),"normal"===this.props._state2&&r("div",{className:"s-component-overlay"+(this.getMeta("showDeleteOverlay2")?" s-repeatable-overlay warning visible":"")+this._isMobileViewEditing(),onClick:this._onClickEditor},void 0,r("div",{className:"center"},void 0,!this._isMobileViewEditing()&&r("span",{},void 0,i("Edit")))),r(m.default,{},void 0,"editor"===this.props._state2&&r(y.default,{className:"s-component-editor"},"editor",r("div",{className:"component-editor google-maps-editor"},void 0,l.default.createElement(_.default,e),l.default.createElement(k.default,a({ref:"saveButtons"},this._getSaveButtonProps()))))))},render:function(){var e=this.props,t=e.address,n=e.phone,i=e.email,o=e.hours,a=e.binding,s={address:t,phone:n,email:i,hours:o,binding:a}
return r("div",{className:"s-component s-form s-contact-info-form"},void 0,!1,"normal"===this.props._state2&&r(m.default,{},void 0,r(y.default,{className:"s-component-content"},"content",l.default.createElement(C.default,s))))}})
e.exports=t.default}).call(t,n(3))},1879:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=(o(r),n(2)),l=o(s),u=n(34),c=o(u),d=n(17),f=o(d),p=n(61),m=o(p)
t.default=f.default.createPageComponent({displayName:"ContactInfoEditor",mixins:[(0,m.default)("editor")],bobcatPropTypes:{data:{address:l.default.string,binding:l.default.object}},_getOnChangeFn:function(e){var t=this
return function(n){t.setData(e,n.target.value.trim())}},render:function(){var e=c.default.DOM.textarea,t=c.default.DOM.input
return a("div",{className:"form"},void 0,a("div",{className:"title"},void 0,i("Editor|Contact Info")),a("div",{className:"fields"},void 0,a("div",{className:"link-input"},void 0,a("div",{className:"label-wrap"},void 0,a("div",{className:"fa fa-map-marker icon"}),i("Editor|Address")),a(e,{rows:"2",maxLength:"120",className:"url",type:"text",name:"share_url",value:this.dtProps.address,onChange:this._getOnChangeFn("address")})),a("div",{className:"link-input"},void 0,a("div",{className:"label-wrap"},void 0,a("div",{className:"fa fa-clock-o icon"}),i("Editor|Hours")),a(e,{rows:"2",maxLength:"200",className:"url",type:"text",name:"share_url",placeholder:i("Editor|e.g. Mon-Fri 10am-5pm, Sat 1pm-5pm"),value:this.dtProps.hours,onChange:this._getOnChangeFn("hours")})),a("div",{className:"link-input"},void 0,a("div",{className:"label-wrap"},void 0,a("div",{className:"entypo-mobile icon"}),i("Editor|Phone")),a(t,{className:"url",type:"text",name:"share_url",value:this.dtProps.phone,onChange:this._getOnChangeFn("phone")})),a("div",{className:"link-input"},void 0,a("div",{className:"label-wrap"},void 0,a("div",{className:"entypo-mail icon"}),i("Editor|Email")),a(t,{className:"url",type:"text",name:"share_url",value:this.dtProps.email,onChange:this._getOnChangeFn("email")}))))}})
e.exports=t.default}).call(t,n(3))},1880:function(e,t,n){"use strict";(function(){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),a=n(0),r=(i(a),n(122)),s=i(r)
t.default=function(e){var t=s.default.escapedValue(e.address).replace(/\n/g,"<br/>"),n=s.default.escapedValue(e.hours).replace(/\n/g,"<br/>"),i=s.default.applyWordBreaks(s.default.escapedValue(e.email))
return o("div",{className:"s-contact-info-list"},void 0,e.address&&o("div",{className:"s-contact-info-item s-font-body"},void 0,o("div",{className:"s-contact-info-icon"},void 0,o("div",{className:"fa fa-map-marker"})),o("div",{className:"s-contact-info-text",dangerouslySetInnerHTML:{__html:t}})),!1,e.hours&&o("div",{className:"s-contact-info-item s-font-body"},void 0,o("div",{className:"s-contact-info-icon"},void 0,o("div",{className:"fa fa-clock-o"})),o("div",{className:"s-contact-info-text",dangerouslySetInnerHTML:{__html:n}})),e.phone&&o("div",{className:"s-contact-info-item s-font-body s-show-in-small-screen"},void 0,o("a",{href:"tel:"+e.phone},void 0,o("div",{className:"s-contact-info-icon"},void 0,o("div",{className:"entypo-mobile"})),o("div",{className:"s-contact-info-text"},void 0,e.phone))),e.phone&&o("div",{className:"s-contact-info-item s-font-body s-show-in-large-screen"},void 0,o("div",{className:"s-contact-info-icon"},void 0,o("div",{className:"entypo-mobile"})),o("div",{className:"s-contact-info-text"},void 0,e.phone)),!1,e.email&&o("div",{className:"s-contact-info-item s-font-body"},void 0,o("a",{href:"mailto:"+e.email},void 0,o("div",{className:"s-contact-info-icon"},void 0,o("div",{className:"entypo-mail"})),o("div",{className:"s-contact-info-text",dangerouslySetInnerHTML:{__html:i}}))),!1)}
e.exports=t.default}).call(t,n(3))},1881:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(62),a=n(1882),r=i(a),s=n(8),l=i(s),u=n(7),c=i(u),d=function(){var e={isSxl:c.default.getIsSxl()},t={defaultLocation:l.default.getMobileActions().get("location")}
return Object.assign({},e,t)},f=function(){return{}}
r.default.sharedProps=(0,o.sharedPropsBuilder)(function(){return[l.default.getBinding()]},d,f)
t.default=r.default
e.exports=t.default},1882:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),s=n(0),l=o(s),u=n(2),c=o(u),d=n(17),f=o(d),p=n(90),m=o(p),h=n(61),g=o(h),v=n(99),y=o(v),b=n(1883),_=o(b),w=n(1884),C=o(w),x=n(498),k=o(x)
t.default=f.default.createPageComponent({displayName:"GoogleMaps",mixins:[(0,g.default)("editor")],bobcatPropTypes:{data:{address:c.default.string},callbacks:{fixHeight:c.default.func}},_getSaveButtonProps:function(){var e=this
return{onClickCancel:function(){e.onClickCancel()},onClickSave:function(){e.updateState("normal")
var t=e.constructor.sharedProps().defaultLocation
e.props.address===t&&e.setData("address",null)
e.savePage()}}},componentDidMount:function(){this.initMeta({showDeleteOverlay:!1})},onMouseEnterDeleteButton:function(){this.setMeta("showDeleteOverlay",!0)},onMouseLeaveDeleteButton:function(){this.setMeta("showDeleteOverlay",!1)},onClickDeleteButton:function(){this.setMeta("showDeleteOverlay",!1)
this.props.onDelete()},_onClickEditor:function(){this.setData("displayName",this.constructor.displayName)
this.onClickEditor(this)},_isMobileViewEditing:function(){return this.props.displayName==this.constructor.displayName?this.addIframeEditingClass():""},_renderEditor:function(){var e=this.constructor.sharedProps()
return r("div",{className:"s-component-editor-wrapper"},void 0,r("div",{className:"buttons"},void 0,r("div",{className:"s-repeatable-delete-button",title:i("Editor|Remove title"),onClick:this.onClickDeleteButton,onMouseEnter:this.onMouseEnterDeleteButton,onMouseLeave:this.onMouseLeaveDeleteButton},void 0,r("div",{className:"delete-button-wrap"},void 0,r("div",{className:"delete-button-confirm"},void 0,i("Sure?"))))),!this.isState("editor")&&r("div",{className:"s-component-overlay"+(this.getMeta("showDeleteOverlay")?" s-repeatable-overlay warning visible":"")+this._isMobileViewEditing(),onClick:this._onClickEditor},void 0,r("div",{className:"center"},void 0,!this._isMobileViewEditing()&&r("span",{},void 0,i("Edit")))),r(m.default,{},void 0,this.isState("editor")&&r(y.default,{className:"s-component-editor"},"editor",r("div",{className:"component-editor google-maps-editor"},void 0,l.default.createElement(_.default,a({},this.props,e)),l.default.createElement(k.default,a({ref:"saveButtons"},this._getSaveButtonProps()))))))},render:function(){var e=this.constructor.sharedProps(),t=this.props.address
t=t||e.defaultLocation||""
return r("div",{className:"s-component s-form s-google-maps-form"},void 0,!1,!this.isState("editor")&&r(m.default,{style:{height:"100%"}},void 0,r(y.default,{className:"s-component-content"},"content",l.default.createElement(C.default,a({},this.props,e,{address:t})))))}})
e.exports=t.default}).call(t,n(3))},1883:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=o(r),l=n(2),u=o(l),c=n(34),d=(o(c),n(17)),f=o(d),p=n(61),m=o(p)
t.default=f.default.createPageComponent({displayName:"GoogleMapsEditor",mixins:[(0,m.default)("editor")],bobcatPropTypes:{data:{address:u.default.string}},componentWillUnmount:function(){this.setData("address",this.refs.mapTextarea.value)},render:function(){var e=this.props.isSxl?"百度地图":i("Editor|Google Maps")
return a("div",{className:"form"},void 0,a("div",{className:"title"},void 0,e),a("div",{className:"fields"},void 0,a("div",{className:"link-input"},void 0,a("div",{className:"label-wrap"},void 0,a("div",{className:"fa fa-map-marker"}),i("Editor|Address")),s.default.createElement("textarea",{ref:"mapTextarea",className:"url",type:"text",name:"share_url",defaultValue:this.dtProps.address}))))}})
e.exports=t.default}).call(t,n(3))},1884:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),l=n(5),u=i(l),c=n(1),d=i(c),f=n(0),p=i(f),m=n(41),h=i(m),g=function(e){function t(){o(this,t)
return a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}r(t,e)
s(t,[{key:"componentDidMount",value:function(){var e=this
setTimeout(function(){e.props.fixHeight(e.refs.map)},100);(0,u.default)(window).on("resize.googleMaps",d.default.debounce(function(){e.props.fixHeight(e.refs.map)},100))
h.default.TH.Fixer.preventAppScrolling(this.refs.map)}},{key:"componentWillUnmount",value:function(){(0,u.default)(window).off("resize.googleMaps")}},{key:"render",value:function(){var e=this.props,t=e.address,n=e.isSxl,i=t,o=n?"baidu":"google",a=n?"/":"?loc="
!i&&n&&(i="上海")
i=window.encodeURIComponent(i)
var r="/c/apps/"+o+"_map"+a+i
return p.default.createElement("iframe",{ref:"map",id:"s-map",height:"250",scrolling:"no",src:r})}}])
return t}(p.default.Component)
t.default=g
e.exports=t.default},1885:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),a=n(5),r=i(a),s=n(0),l=(i(s),n(2)),u=i(l),c=n(13),d=i(c),f=n(57),p=i(f),m=n(1),h=i(m),g=n(19),v=i(g),y=(0,p.default)({displayName:"SimpleSortable",propTypes:{className:u.default.string,style:u.default.object,onReorder:u.default.func.isRequired,beforeReorder:u.default.func,afterReorder:u.default.func,containment:u.default.oneOf(["self","parent"]),containmentSelector:u.default.string},getDefaultProps:function(){return{sortableConfig:{},onReorder:function(){},beforeReorder:function(){},afterReorder:function(){},containment:"parent",className:""}},setupJqSortable:function(){var e=h.default.clone(this.props.sortableConfig)
e.activate=this._handleStart
e.stop=this._handleDrop
v.default.isAndroid()&&(e.scroll=!1)
var t=d.default.findDOMNode(this)
switch(this.props.containment){case"self":e.containment=t
break
case"parent":e.containment=t.parentElement}null!=this.props.containmentSelector&&(e.containment=(0,r.default)(t).closest(this.props.containmentSelector).get(0))
this.$jq=(0,r.default)(t)
return this.$jq.sortable(e)},componentDidMount:function(){this.setupJqSortable()},componentDidUpdate:function(){},_handleStart:function(e,t){var n=t.helper[0].getBoundingClientRect()
t.placeholder.outerWidth(n.width)
t.placeholder.height(n.height)
this.props.beforeReorder(this)
return!0},_handleDrop:function(e,t){var n=this.$jq.sortable("toArray",{attribute:"data-sorting-index"}),i=t.item.attr("data-sorting-index");(0,r.default)(t.item).css("z-index","initial")
this.$jq.sortable("cancel")
this.props.onReorder(n,i)
this.props.afterReorder(this.props.children)
return!0},render:function(){var e=h.default.find(this.props.children,function(e){return h.default.isArray(e)}),t=h.default.flatten(e||[this.props.children]),n=this.props.className||"",i=this.props.style
return o("div",{className:n,style:i,"data-list-index":this.props.index},void 0,t)}})
t.default=y
e.exports=t.default},1886:function(e,t,n){e.exports=n(4)(1326)},1887:function(e,t,n){e.exports=n(4)(1328)},1888:function(e,t,n){e.exports=n(4)(837)},1889:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s,l,u,c,d,f,p,m,h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),y=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),b=n(5),_=i(b),w=n(1),C=i(w),x=n(0),k=i(x),S=n(2),N=(i(S),n(76)),E=i(N),P=n(120),O=i(P),T=n(34),L=i(T),M=n(1202),I=i(M),B=n(400),D=i(B),j=n(19),A=i(j),H=n(1904),R=i(H),F=n(29),V=(function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e}(F),n(61)),U=i(V),z=n(291),W=i(z),G=n(480),K=i(G),$=n(73),q=i($),Y=n(1174),J=(i(Y),n(22)),X=i(J),Q=n(56),Z=n(1905),ee=i(Z),te=440,ne=(s=E.default.decorate(K.default.Mixin),l=E.default.decorate(W.default),u=E.default.decorate(L.default.Mixin),c=E.default.decorate((0,U.default)("editor")),d=E.default.decorate(O.default),s(f=l(f=u(f=c(f=d(f=(m=p=function(e){function t(e){o(this,t)
var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.getCurrentSlide=function(){return n.getData("_current")}
n._addListenerToBinding=function(){if(n._listenerId){n._clearTimer()
n.getDefaultBinding().removeListener(n._listenerId)}n._listenerId=n.getDefaultBinding().addListener("_current",function(e){var t=e.getCurrentValue();(void 0===t?"undefined":g(t))||(t=n._currentIndex)
n.refs.slick&&(n.mTimeoutId=n.setTimeout(function(){if(n.isInPrevious){n.refs.slick.slickPrev()
n.isInPrevious=!1}else if(n.isInNext){n.refs.slick.slickNext()
n.isInNext=!1}else n.refs.slick.slickGoTo(t)},100))})}
n._stopAutoplayWhenPlayMedia=function(){if(!n._stopAutoPlayInitialized){var e=n._getSliderEl(),t=e.find(".s-video-content iframe")
if(t&&t.length>0){(0,R.default)(e,n.handleChangeAutoPlay)
n._stopAutoPlayInitialized=!0}}}
n._unsubscribeEvent=function(){n.tokenArr.every(function(e){X.default.Event.unsubscribe(e)})}
n._respondTo=function(e){var t=X.default.Event.subscribe(e,function(){n.forceUpdate()})
n.tokenArr.push(t)}
n._registSliderEvent=function(){n.tokenArr=[]
n._respondTo("Editor.SideMenu.Opened")
n._respondTo("Editor.SideMenu.Closed")
n._respondTo("Slider.ContentChanged");(0,_.default)(window).resize(n._renderSliderHeightDebounced)
n._bindWindowScroll();(0,_.default)(window).bind("repaint-slider",function(){})}
n._getSliderEl=function(){return(0,_.default)(n.refs.iosslider)}
n._checkIsInAnimation=function(){return n.isInAnimation}
n._previous=function(){if(!n._checkIsInAnimation()){n.isInAnimation=!0
var e=n._modCurrentSlide(-1)
n.setData("_current",e)
n.isInPrevious=!0}}
n._next=function(){if(!n._checkIsInAnimation()){n.isInAnimation=!0
var e=n._modCurrentSlide(1)
n.setData("_current",e)
n.isInNext=!0}}
n._modCurrentSlide=function(e){var t=n.getData("_current"),i=n.props.children,o=t+e
return n._mod(o,i.length)}
n._mod=function(e,t){var n=e%t
return n<0?n+t:n}
n._getEditorProps=function(){return C.default.extend({},n.props,{binding:n.getDefaultBinding()})}
n._showNavButtons=function(){return n.getMeta("showNavButtons")}
n._renderEditor=function(){return null}
n._goToSpecifySlide=function(e){n.isInAnimation=!0
n.setData("_current",e)}
n._autoScrollPage=function(e){if(!A.default.isSmallScreen()){n._getSliderEl().offset().top-(0,_.default)(window).scrollTop()<0&&n._shouldScroll(e)&&q.default.navigateToHash("#"+(n._getSliderSection()+1))}}
n._shouldScroll=function(e){return(0,_.default)(n._getSliderEl().find(".slick-slide[data-index="+e+"]")).find(".inner").outerHeight(!0)>n._getViewHeight()}
n._getSliderSection=function(){return n.props.index}
n.handleChangeAutoPlay=function(e){n.setMeta("autoplay",e)}
n._getChildren=function(){var e=n.props,t=e.children,i=e.transition,o=n.props.auto_play,a=t.length
if(a<=0)return null
var r=void 0,s="fade"===i,l={accessibility:!1,infinite:1!==a,slidesToShow:1,draggable:!1,speed:A.default.isMobile()?500:750,slidesToScroll:1,arrows:!1,pauseOnHover:!1,dots:!1,autoplay:!0,autoplaySpeed:o,lazyLoad:!1,fade:s,beforeChange:function(e,t){n._transitionBannerSize(e,t)
if(s){var i=n._getSliderEl().find(".slick-list"),o=n.getData("_current"),a=i.find(".slick-slide>div:nth-child("+o+")")
a.css({opacity:"1"})
r=a}},afterChange:function(e){n.isInAnimation=!1
n.setData("_current",e)
n._adaptiveCurrentSlide()
n._currentIndex=e
s&&setTimeout(function(){(0,_.default)(r).css({opacity:""})},1e3)}},u=t.map(function(e){return y("div",{},e.key,e)})
return k.default.createElement(I.default,h({ref:"slick",className:"transition-"+i},l),u)}
n._shouldSliderFullScreen=function(){return n.props.fullscreen}
n._shouldFullscreenSliderOnlyFirstSection=function(){return!(!n.props.fullscreenSliderOnlyFirstSection||!n._checkSliderIsFirstSection())}
n._checkSliderIsFirstSection=function(){var e=n._getSliderSection()
return!(!n.getMeta("ready")||0!==e)}
n._useDarkOverlays=function(){var e=!0,t=n.getData("list")
if(t.size>0){var i=n.getCurrentSlide(),o=t.get(i)
if(!o)return
var a=o.getIn(["components","background1"]),r=D.default.hasContent(a),s="dark"!==a.get("textColor")
r&&s&&(e=!1)}return e}
n._getMaxForegroundHeightInList=function(){var e=n._getSliderEl(),t=0,i=0,o=n._getLimitedMaxHeight()
e.find(".item").each(function(e,n){var o=(0,_.default)(n).find(".inner").first()
t=0===o.width()?0:o.outerHeight(!0)
i=Math.max(t,i)})
t=null
return Math.min(i,o)}
n._getLimitedMaxHeight=function(){var e=n._getViewHeight()
return(0,_.default)(window).width()<=727?2*e:1.5*e}
n._catchIOSIframeBug=function(e){var t=n._getViewHeight()
return A.default.isIOS()&&window.parent.length>0&&e>4*t}
n._getViewHeight=function(){var e=(0,_.default)(window).height()
if(window.parent.length>0)try{e=(0,_.default)(window.top).height()}catch(e){console.warn("Warnning: window.top is a cross-origin frame.")}if(e>5e3){console.warn("Warnning: In slider got an error device view height.")
e=2048}return e}
n._getSliderHeightByContent=function(){var e=te,t=n._getLimitedMaxHeight(),i=n._getViewHeight(),o="none"===(0,_.default)("#header-container").css("display")?0:(0,_.default)("#header-container").outerHeight(),a=i-Math.max(o,0)-130,r=n._getMaxForegroundHeightInList()
n._catchIOSIframeBug(r)&&(r=t)
if(n._shouldFullscreenSliderOnlyFirstSection())return Math.max(a,r)
if(n.props.fullscreen)return Math.max(r,i)
if(r<e)return e
if(r>t){console.info("[Slide] your content of slider is bigger than the max limited height (",t,")")
return t}return r}
n._getSlideHeightByImageRatio=function(e){var t=n.getData("list").get(e).getIn(["components","background1"]).toObject(),i=!1
if(!t||!t.w||!t.h){var o=n.asyncImageLoadedShapeArr[e]
if(o)t=o
else{t={w:16,h:9}
i=!0}}return{height:n._getFullViewImageHeight(t),isHardCode:i}}
n._getFullViewImageHeight=function(e){if(e&&e.w&&e.h){var t=n._getSliderEl().width(),i=e.h*t/e.w
return Math.ceil(i)}return 440}
n._transitionBannerSize=function(e){var t=n.slideHeightArr[e],i=n._getSliderEl().find(".slick-list")
i.css({height:t-1+"px"})
i.find(".slick-slide").each(function(e,n){(0,_.default)(n).find(".item").css({height:t+"px",minHeight:t+"px"})})}
n._resizeSliderInEditor=function(){var e=n.getCurrentSlide(),t=n.slideHeightArr[e],i=n._getSliderEl().find(".slider")
if(t<240)if("editor"===n.props.imgEditorState){n._adaptiveSlideByIndex(240)
i.addClass("img-editor-open")}else{n._adaptiveSlideByIndex(t)
n.setTimeout(function(){i.removeClass("img-editor-open")},200)}}
n._adaptiveSlideByIndex=function(e){var t=n._getSliderEl().find(".slick-list")
t.css({height:e-1+"px"})
t.find(".slick-slide.slick-active").each(function(t,n){(0,_.default)(n).find(".item").css({height:e+"px",minHeight:e+"px"})})}
n._getImageShapByLoad=function(e){var t=n.getData("list")
e%=t.size
var i=t.get(e).getIn(["components","background1"]).toJS(),o=(0,Q.createImage)(i)
return new Promise(function(t,i){var a=new Image
a.src=o.getUrl();(0,_.default)(a).one("load",function(){if(a.width&&a.height){n.asyncImageLoadedShapeArr[e]={w:a.width,h:a.height}
var o=n._getFullViewImageHeight({w:a.width,h:a.height})
t(o)}else i("Miss the size of image")})})}
n._asyncSetSlideHeight=function(e){n._getImageShapByLoad(e).then(function(t){n.slideHeightArr[e]=t
n._adaptiveCurrentSlide()}).catch(function(e){console.info("[Banner] func/asyncSetSlideHeight: ",e)})}
n._getCurrentLayout=function(){var e=n.getCurrentSlide()
return n.props.getSliderLayouts()[e]}
n._getSlideHeight=function(e,t){var i=n.props.getSliderLayouts(),o=0
if("noForeground"===i[e]){var a=n._getSlideHeightByImageRatio(e)
o=a.height
a.isHardCode&&n._asyncSetSlideHeight(e)}else o=t
return Math.floor(o)}
n._adaptiveCurrentSlide=function(){var e=n.getCurrentSlide(),t=n._getSlideHeight(e)
"editor"===n.props.imgEditorState&&t<240&&(t=240)
n._adaptiveSlideByIndex(t)
n.slideHeightArr[e]=t}
n._renderSliderHeight=function(){var e=n._getSliderEl().find(".slick-list"),t=n.getData("list").size,i=n.getCurrentSlide()
n.slideHeightArr=Array.from(new Array(t),function(){return 0})
var o=n._getSliderHeightByContent()
e.find(".slick-slide").each(function(a,r){var s=parseInt((0,_.default)(r).attr("data-index"),10);-1===s&&(s=t-1)
s===t&&(s=0)
var l=n._getSlideHeight(s,o)
"editor"===n.props.imgEditorState&&l<240&&(l=240);(0,_.default)(r).find(".item").css({height:l+"px",minHeight:l+"px"})
i===s&&e.css({height:l-1+"px"})
n.slideHeightArr[s]=l})}
n._renderSliderHeightDebounced=C.default.debounce(n._renderSliderHeight,A.default.isMobile()?1e3:250)
n._onScroll=n._onScroll.bind(n)
return n}r(t,e)
v(t,[{key:"componentWillMount",value:function(){this.initMeta({ready:!1,autoplay:!1,showNavButtons:!0,isScrolling:!1})
this.setData("_current",0)
this.isInAnimation=!1
this.isInPrevious=!1
this.isInNext=!1
this.slideHeightArr=[]
this.asyncImageLoadedShapeArr=[]
this.tokenArr=[]
this._currentIndex=0}},{key:"componentDidMount",value:function(){this.updateMeta({ready:!0,showNavButtons:!A.default.isMobile()})
this._addListenerToBinding()
this._registSliderEvent()
this._renderSliderHeight()}},{key:"componentDidUpdate",value:function(e){this.isInAnimation||this._renderSliderHeightDebounced()
this._stopAutoplayWhenPlayMedia()
this.props.index!==e.index&&this._addListenerToBinding()}},{key:"componentWillUnmount",value:function(){this._unbindWindowScroll()
this._listenerId&&this.getDefaultBinding().removeListener(this._listenerId);(0,_.default)(window).off("resize",this._renderSliderHeightDebounced)
this._clearTimer()
this._unsubscribeEvent()}},{key:"_clearTimer",value:function(){if(this.mTimeoutId){clearTimeout(this.mTimeoutId)
this.mTimeoutId=void 0}}},{key:"_bindWindowScroll",value:function(){(0,_.default)(document).on("scroll",this._onScroll)}},{key:"_unbindWindowScroll",value:function(){(0,_.default)(document).off("scroll",this._onScroll)}},{key:"_onScroll",value:function(){var e=this
if(this.refs.slick&&!this.getMeta("isScrolling")){this.updateMeta({isScrolling:!0})
var t=function(e){return e.stopPropagation()},n=function n(){e.updateMeta({isScrolling:!1});(0,_.default)("body").off("touchend touchcancel touchleave",n)
e._getSliderEl().off("touchmove",t)}
this._getSliderEl().on("touchmove",t);(0,_.default)("body").on("touchend touchcancel touchleave",n)}}},{key:"render",value:function(){return ee.default.apply(this)}}])
return t}(k.default.Component),p.defaultProps={uiOutside:!1,fullscreen:!1,imgEditorState:""},m))||f)||f)||f)||f)||f)
e.exports=ne},1890:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0
var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l=n(0),u=i(l),c=n(1891),d=n(472),f=i(d),p=n(1897),m=i(p),h=n(1800),g=i(h),v=n(1899),y=i(v),b=y.default&&n(1900),_=function(e){function t(n){o(this,t)
var i=a(this,e.call(this,n))
i.state={breakpoint:null}
i._responsiveMediaHandlers=[]
i.innerSliderRefHandler=i.innerSliderRefHandler.bind(i)
return i}r(t,e)
t.prototype.innerSliderRefHandler=function(e){this.innerSlider=e}
t.prototype.media=function(e,t){b.register(e,t)
this._responsiveMediaHandlers.push({query:e,handler:t})}
t.prototype.componentWillMount=function(){var e=this
if(this.props.responsive){var t=this.props.responsive.map(function(e){return e.breakpoint})
t.sort(function(e,t){return e-t})
t.forEach(function(n,i){var o
o=0===i?(0,m.default)({minWidth:0,maxWidth:n}):(0,m.default)({minWidth:t[i-1],maxWidth:n})
y.default&&e.media(o,function(){e.setState({breakpoint:n})})})
var n=(0,m.default)({minWidth:t.slice(-1)[0]})
y.default&&this.media(n,function(){e.setState({breakpoint:null})})}}
t.prototype.componentWillUnmount=function(){this._responsiveMediaHandlers.forEach(function(e){b.unregister(e.query,e.handler)})}
t.prototype.slickPrev=function(){this.innerSlider.slickPrev()}
t.prototype.slickNext=function(){this.innerSlider.slickNext()}
t.prototype.slickGoTo=function(e){this.innerSlider.slickGoTo(e)}
t.prototype.render=function(){var e,t,n=this
if(this.state.breakpoint){t=this.props.responsive.filter(function(e){return e.breakpoint===n.state.breakpoint})
e="unslick"===t[0].settings?"unslick":(0,f.default)({},this.props,t[0].settings)}else e=(0,f.default)({},g.default,this.props)
var i=this.props.children
Array.isArray(i)||(i=[i])
i=i.filter(function(e){return!!e})
return"unslick"===e?u.default.createElement("div",{className:this.props.className+" unslicked"},i):u.default.createElement(c.InnerSlider,s({ref:this.innerSliderRefHandler},e),i)}
return t}(u.default.Component)
t.default=_},1891:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
t.InnerSlider=void 0
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=n(0),r=i(a),s=n(1892),l=i(s),u=n(1203),c=i(u),d=n(1893),f=i(d),p=n(1800),m=i(p),h=n(57),g=i(h),v=n(33),y=i(v),b=n(472),_=i(b),w=n(1894),C=n(1895),x=n(1896)
t.InnerSlider=(0,g.default)({displayName:"InnerSlider",mixins:[c.default,l.default],list:null,track:null,listRefHandler:function(e){this.list=e},trackRefHandler:function(e){this.track=e},getInitialState:function(){return o({},f.default,{currentSlide:this.props.initialSlide})},getDefaultProps:function(){return m.default},componentWillMount:function(){this.props.init&&this.props.init()
this.setState({mounted:!0})
for(var e=[],t=0;t<r.default.Children.count(this.props.children);t++)t>=this.state.currentSlide&&t<this.state.currentSlide+this.props.slidesToShow&&e.push(t)
this.props.lazyLoad&&0===this.state.lazyLoadedList.length&&this.setState({lazyLoadedList:e})
this.setState({initialized:!0})},componentDidMount:function(){this.initialize(this.props)
this.adaptHeight()
window&&(window.addEventListener?window.addEventListener("resize",this.onWindowResized):window.attachEvent("onresize",this.onWindowResized))},componentWillUnmount:function(){this.animationEndCallback&&clearTimeout(this.animationEndCallback)
window.addEventListener?window.removeEventListener("resize",this.onWindowResized):window.detachEvent("onresize",this.onWindowResized)
this.state.autoPlayTimer&&clearInterval(this.state.autoPlayTimer)},componentWillReceiveProps:function(e){if(this.props.slickGoTo!=e.slickGoTo)this.changeSlide({message:"index",index:e.slickGoTo,currentSlide:this.state.currentSlide})
else if(this.state.currentSlide>=e.children.length){this.update(e)
this.changeSlide({message:"index",index:e.children.length-e.slidesToShow,currentSlide:this.state.currentSlide})}else this.update(e)},componentDidUpdate:function(){this.adaptHeight()},onWindowResized:function(){this.update(this.props)
this.setState({animating:!1})
clearTimeout(this.animationEndCallback)
delete this.animationEndCallback},slickPrev:function(){this.changeSlide({message:"previous"})},slickNext:function(){this.changeSlide({message:"next"})},slickGoTo:function(e){e=Number(e)
!isNaN(e)&&this.changeSlide({message:"index",index:e,currentSlide:this.state.currentSlide})},render:function(){var e,t=(0,y.default)("slick-slider",this.props.className,{"slick-vertical":this.props.vertical,"slick-initialized":this.state.initialized}),n={fade:this.props.fade,cssEase:this.props.cssEase,speed:this.props.speed,infinite:this.props.infinite,centerMode:this.props.centerMode,focusOnSelect:this.props.focusOnSelect?this.selectHandler:null,currentSlide:this.state.currentSlide,lazyLoad:this.props.lazyLoad,lazyLoadedList:this.state.lazyLoadedList,rtl:this.props.rtl,slideWidth:this.state.slideWidth,slidesToShow:this.props.slidesToShow,slidesToScroll:this.props.slidesToScroll,slideCount:this.state.slideCount,trackStyle:this.state.trackStyle,variableWidth:this.props.variableWidth}
if(!0===this.props.dots&&this.state.slideCount>=this.props.slidesToShow){var i={dotsClass:this.props.dotsClass,slideCount:this.state.slideCount,slidesToShow:this.props.slidesToShow,currentSlide:this.state.currentSlide,slidesToScroll:this.props.slidesToScroll,clickHandler:this.changeSlide,children:this.props.children,customPaging:this.props.customPaging}
e=r.default.createElement(C.Dots,i)}var a,s,l={infinite:this.props.infinite,centerMode:this.props.centerMode,currentSlide:this.state.currentSlide,slideCount:this.state.slideCount,slidesToShow:this.props.slidesToShow,prevArrow:this.props.prevArrow,nextArrow:this.props.nextArrow,clickHandler:this.changeSlide}
if(this.props.arrows){a=r.default.createElement(x.PrevArrow,l)
s=r.default.createElement(x.NextArrow,l)}var u=null
this.props.vertical&&(u={height:this.state.listHeight})
var c=null
!1===this.props.vertical?!0===this.props.centerMode&&(c={padding:"0px "+this.props.centerPadding}):!0===this.props.centerMode&&(c={padding:this.props.centerPadding+" 0px"})
var d=(0,_.default)({},u,c)
return r.default.createElement("div",{className:t,onMouseEnter:this.onInnerSliderEnter,onMouseLeave:this.onInnerSliderLeave,onMouseOver:this.onInnerSliderOver},a,r.default.createElement("div",{ref:this.listRefHandler,className:"slick-list",style:d,onMouseDown:this.swipeStart,onMouseMove:this.state.dragging?this.swipeMove:null,onMouseUp:this.swipeEnd,onMouseLeave:this.state.dragging?this.swipeEnd:null,onTouchStart:this.swipeStart,onTouchMove:this.state.dragging?this.swipeMove:null,onTouchEnd:this.swipeEnd,onTouchCancel:this.state.dragging?this.swipeEnd:null,onKeyDown:this.props.accessibility?this.keyHandler:null},r.default.createElement(w.Track,o({ref:this.trackRefHandler},n),this.props.children)),s,e)}})},1892:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0
var o=n(1799),a=n(1203),r=(i(a),n(472)),s=i(r),l=n(13),u=i(l),c={changeSlide:function(e){var t,n,i,o,a,r=this.props,s=r.slidesToScroll,l=r.slidesToShow,u=this.state,c=u.slideCount,d=u.currentSlide
o=c%s!=0
t=o?0:(c-d)%s
if("previous"===e.message){i=0===t?s:l-t
a=d-i
if(this.props.lazyLoad){n=d-i
a=-1===n?c-1:n}}else if("next"===e.message){i=0===t?s:t
a=d+i
this.props.lazyLoad&&(a=(d+s)%c+t)}else if("dots"===e.message||"children"===e.message){a=e.index*e.slidesToScroll
if(a===e.currentSlide)return}else if("index"===e.message){a=Number(e.index)
if(a===e.currentSlide)return}this.slideHandler(a)},keyHandler:function(e){e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&!0===this.props.accessibility?this.changeSlide({message:!0===this.props.rtl?"next":"previous"}):39===e.keyCode&&!0===this.props.accessibility&&this.changeSlide({message:!0===this.props.rtl?"previous":"next"}))},selectHandler:function(e){this.changeSlide(e)},swipeStart:function(e){var t,n
if(!(!1===this.props.swipe||"ontouchend"in document&&!1===this.props.swipe||!1===this.props.draggable&&-1!==e.type.indexOf("mouse"))){t=void 0!==e.touches?e.touches[0].pageX:e.clientX
n=void 0!==e.touches?e.touches[0].pageY:e.clientY
this.setState({dragging:!0,touchObject:{startX:t,startY:n,curX:t,curY:n}})}},swipeMove:function(e){if(this.state.dragging){if(!this.state.scrolling)if(this.state.animating)e.preventDefault()
else{this.props.vertical&&this.props.swipeToSlide&&this.props.verticalSwiping&&e.preventDefault()
var t,n,i,a=this.state.touchObject
n=(0,o.getTrackLeft)((0,s.default)({slideIndex:this.state.currentSlide,trackRef:this.track},this.props,this.state))
a.curX=e.touches?e.touches[0].pageX:e.clientX
a.curY=e.touches?e.touches[0].pageY:e.clientY
a.swipeLength=Math.round(Math.sqrt(Math.pow(a.curX-a.startX,2)))
var r=Math.round(Math.sqrt(Math.pow(a.curY-a.startY,2)))
if(!this.props.verticalSwiping&&!this.state.swiping&&r>4)this.setState({scrolling:!0})
else{this.props.verticalSwiping&&(a.swipeLength=r)
i=(!1===this.props.rtl?1:-1)*(a.curX>a.startX?1:-1)
this.props.verticalSwiping&&(i=a.curY>a.startY?1:-1)
var l=this.state.currentSlide,u=Math.ceil(this.state.slideCount/this.props.slidesToScroll),c=this.swipeDirection(this.state.touchObject),d=a.swipeLength
if(!1===this.props.infinite&&(0===l&&"right"===c||l+1>=u&&"left"===c)){d=a.swipeLength*this.props.edgeFriction
if(!1===this.state.edgeDragged&&this.props.edgeEvent){this.props.edgeEvent(c)
this.setState({edgeDragged:!0})}}if(!1===this.state.swiped&&this.props.swipeEvent){this.props.swipeEvent(c)
this.setState({swiped:!0})}t=this.props.vertical?n+d*(this.state.listHeight/this.state.listWidth)*i:n+d*i
this.props.verticalSwiping&&(t=n+d*i)
this.setState({touchObject:a,swipeLeft:t,trackStyle:(0,o.getTrackCSS)((0,s.default)({left:t},this.props,this.state))})
if(!(Math.abs(a.curX-a.startX)<.8*Math.abs(a.curY-a.startY))&&a.swipeLength>4){this.setState({swiping:!0})
e.preventDefault()}}}}else e.preventDefault()},getNavigableIndexes:function(){var e=void 0,t=0,n=0,i=[]
if(this.props.infinite){t=-1*this.props.slidesToShow
n=-1*this.props.slidesToShow
e=2*this.state.slideCount}else e=this.state.slideCount
for(;t<e;){i.push(t)
t=n+this.props.slidesToScroll
n+=this.props.slidesToScroll<=this.props.slidesToShow?this.props.slidesToScroll:this.props.slidesToShow}return i},checkNavigable:function(e){var t=this.getNavigableIndexes(),n=0
if(e>t[t.length-1])e=t[t.length-1]
else for(var i in t){if(e<t[i]){e=n
break}n=t[i]}return e},getSlideCount:function(){var e=this,t=this.props.centerMode?this.state.slideWidth*Math.floor(this.props.slidesToShow/2):0
if(this.props.swipeToSlide){var n=void 0,i=u.default.findDOMNode(this.list),o=i.querySelectorAll(".slick-slide")
Array.from(o).every(function(i){if(e.props.vertical){if(i.offsetTop+e.getHeight(i)/2>-1*e.state.swipeLeft){n=i
return!1}}else if(i.offsetLeft-t+e.getWidth(i)/2>-1*e.state.swipeLeft){n=i
return!1}return!0})
return Math.abs(n.dataset.index-this.state.currentSlide)||1}return this.props.slidesToScroll},swipeEnd:function(e){if(this.state.dragging){var t=this.state.touchObject,n=this.state.listWidth/this.props.touchThreshold,i=this.swipeDirection(t)
this.props.verticalSwiping&&(n=this.state.listHeight/this.props.touchThreshold)
var a=this.state.scrolling
this.setState({dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}})
if(!a&&t.swipeLength)if(t.swipeLength>n){e.preventDefault()
var r=void 0,l=void 0
switch(i){case"left":case"down":l=this.state.currentSlide+this.getSlideCount()
r=this.props.swipeToSlide?this.checkNavigable(l):l
this.state.currentDirection=0
break
case"right":case"up":l=this.state.currentSlide-this.getSlideCount()
r=this.props.swipeToSlide?this.checkNavigable(l):l
this.state.currentDirection=1
break
default:r=this.state.currentSlide}this.slideHandler(r)}else{var u=(0,o.getTrackLeft)((0,s.default)({slideIndex:this.state.currentSlide,trackRef:this.track},this.props,this.state))
this.setState({trackStyle:(0,o.getTrackAnimateCSS)((0,s.default)({left:u},this.props,this.state))})}}else this.props.swipe&&e.preventDefault()},onInnerSliderEnter:function(){this.props.autoplay&&this.props.pauseOnHover&&this.pause()},onInnerSliderOver:function(){this.props.autoplay&&this.props.pauseOnHover&&this.pause()},onInnerSliderLeave:function(){this.props.autoplay&&this.props.pauseOnHover&&this.autoPlay()}}
t.default=c},1893:function(e){"use strict"
var t={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,listWidth:null,listHeight:null,scrolling:!1,slideCount:null,slideWidth:null,slideHeight:null,swiping:!1,swipeLeft:null,touchObject:{startX:0,startY:0,curX:0,curY:0},lazyLoadedList:[],initialized:!1,edgeDragged:!1,swiped:!1,trackStyle:{},trackWidth:0}
e.exports=t},1894:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0
t.Track=void 0
var s=n(0),l=i(s),u=n(472),c=i(u),d=n(33),f=i(d),p=function(e){var t,n,i,o,a
a=e.rtl?e.slideCount-1-e.index:e.index
i=a<0||a>=e.slideCount
if(e.centerMode){o=Math.floor(e.slidesToShow/2)
n=(a-e.currentSlide)%e.slideCount==0
a>e.currentSlide-o-1&&a<=e.currentSlide+o&&(t=!0)}else t=e.currentSlide<=a&&a<e.currentSlide+e.slidesToShow
return(0,f.default)({"slick-slide":!0,"slick-active":t,"slick-center":n,"slick-cloned":i})},m=function(e){var t={}
void 0!==e.variableWidth&&!1!==e.variableWidth||(t.width=e.slideWidth)
if(e.fade){t.position="relative"
t.left=-e.index*e.slideWidth
t.opacity=e.currentSlide===e.index?1:0
t.transition="opacity "+e.speed+"ms "+e.cssEase
t.WebkitTransition="opacity "+e.speed+"ms "+e.cssEase}return t},h=function(e,t){return null===e.key||void 0===e.key?t:e.key},g=function(e){var t,n=[],i=[],o=[],a=l.default.Children.count(e.children)
l.default.Children.forEach(e.children,function(r,s){var u=void 0,d={message:"children",index:s,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide}
u=!e.lazyLoad|(e.lazyLoad&&e.lazyLoadedList.indexOf(s)>=0)?r:l.default.createElement("div",null)
var g=m((0,c.default)({},e,{index:s})),v=u.props.className||"",y=function(t){u.props&&u.props.onClick&&u.props.onClick(t)
e.focusOnSelect&&e.focusOnSelect(d)}
n.push(l.default.cloneElement(u,{key:"original"+h(u,s),"data-index":s,className:(0,f.default)(p((0,c.default)({index:s},e)),v),tabIndex:"-1",style:(0,c.default)({outline:"none"},u.props.style||{},g),onClick:y}))
if(e.infinite&&!1===e.fade){var b=e.variableWidth?e.slidesToShow+1:e.slidesToShow
if(s>=a-b){t=-(a-s)
i.push(l.default.cloneElement(u,{key:"precloned"+h(u,t),"data-index":t,className:(0,f.default)(p((0,c.default)({index:t},e)),v),style:(0,c.default)({},u.props.style||{},g),onClick:y}))}if(s<b){t=a+s
o.push(l.default.cloneElement(u,{key:"postcloned"+h(u,t),"data-index":t,className:(0,f.default)(p((0,c.default)({index:t},e)),v),style:(0,c.default)({},u.props.style||{},g),onClick:y}))}}})
return e.rtl?i.concat(n,o).reverse():i.concat(n,o)}
t.Track=function(e){function t(){o(this,t)
return a(this,e.apply(this,arguments))}r(t,e)
t.prototype.render=function(){var e=g.call(this,this.props)
return l.default.createElement("div",{className:"slick-track",style:this.props.trackStyle},e)}
return t}(l.default.Component)},1895:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0
t.Dots=void 0
var s=n(0),l=i(s),u=n(33),c=i(u),d=function(e){var t
t=Math.ceil(e.slideCount/e.slidesToScroll)
return t}
t.Dots=function(e){function t(){o(this,t)
return a(this,e.apply(this,arguments))}r(t,e)
t.prototype.clickHandler=function(e,t){t.preventDefault()
this.props.clickHandler(e)}
t.prototype.render=function(){var e=this,t=d({slideCount:this.props.slideCount,slidesToScroll:this.props.slidesToScroll}),n=Array.apply(null,Array(t+1).join("0").split("")).map(function(t,n){var i=n*e.props.slidesToScroll,o=n*e.props.slidesToScroll+(e.props.slidesToScroll-1),a=(0,c.default)({"slick-active":e.props.currentSlide>=i&&e.props.currentSlide<=o}),r={message:"dots",index:n,slidesToScroll:e.props.slidesToScroll,currentSlide:e.props.currentSlide},s=e.clickHandler.bind(e,r)
return l.default.createElement("li",{key:n,className:a},l.default.cloneElement(e.props.customPaging(n),{onClick:s}))})
return l.default.createElement("ul",{className:this.props.dotsClass,style:{display:"block"}},n)}
return t}(l.default.Component)},1896:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0
t.NextArrow=t.PrevArrow=void 0
var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l=n(0),u=i(l),c=n(33),d=i(c),f=n(1203),p=i(f)
t.PrevArrow=function(e){function t(){o(this,t)
return a(this,e.apply(this,arguments))}r(t,e)
t.prototype.clickHandler=function(e,t){t&&t.preventDefault()
this.props.clickHandler(e,t)}
t.prototype.render=function(){var e={"slick-arrow":!0,"slick-prev":!0},t=this.clickHandler.bind(this,{message:"previous"})
if(!this.props.infinite&&(0===this.props.currentSlide||this.props.slideCount<=this.props.slidesToShow)){e["slick-disabled"]=!0
t=null}var n,i={key:"0","data-role":"none",className:(0,d.default)(e),style:{display:"block"},onClick:t},o={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount}
n=this.props.prevArrow?u.default.cloneElement(this.props.prevArrow,s({},i,o)):u.default.createElement("button",s({key:"0",type:"button"},i)," Previous")
return n}
return t}(u.default.Component),t.NextArrow=function(e){function t(){o(this,t)
return a(this,e.apply(this,arguments))}r(t,e)
t.prototype.clickHandler=function(e,t){t&&t.preventDefault()
this.props.clickHandler(e,t)}
t.prototype.render=function(){var e={"slick-arrow":!0,"slick-next":!0},t=this.clickHandler.bind(this,{message:"next"})
if(!p.default.canGoNext(this.props)){e["slick-disabled"]=!0
t=null}var n,i={key:"1","data-role":"none",className:(0,d.default)(e),style:{display:"block"},onClick:t},o={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount}
n=this.props.nextArrow?u.default.cloneElement(this.props.nextArrow,s({},i,o)):u.default.createElement("button",s({key:"1",type:"button"},i)," Next")
return n}
return t}(u.default.Component)},1897:function(e,t,n){var i=n(1898),o=function(e){return/[height|width]$/.test(e)},a=function(e){var t="",n=Object.keys(e)
n.forEach(function(a,r){var s=e[a]
a=i(a)
o(a)&&"number"==typeof s&&(s+="px")
t+=!0===s?a:!1===s?"not "+a:"("+a+": "+s+")"
r<n.length-1&&(t+=" and ")})
return t},r=function(e){var t=""
if("string"==typeof e)return e
if(e instanceof Array){e.forEach(function(n,i){t+=a(n)
i<e.length-1&&(t+=", ")})
return t}return a(e)}
e.exports=r},1898:function(e){var t=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()}
e.exports=t},1899:function(e){var t=!("undefined"==typeof window||!window.document||!window.document.createElement)
e.exports=t},1900:function(e,t,n){var i=n(1901)
e.exports=new i},1901:function(e,t,n){function i(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill")
this.queries={}
this.browserIsIncapable=!window.matchMedia("only all").matches}var o=n(1902),a=n(1801),r=a.each,s=a.isFunction,l=a.isArray
i.prototype={constructor:i,register:function(e,t,n){var i=this.queries,a=n&&this.browserIsIncapable
i[e]||(i[e]=new o(e,a))
s(t)&&(t={match:t})
l(t)||(t=[t])
r(t,function(t){s(t)&&(t={match:t})
i[e].addHandler(t)})
return this},unregister:function(e,t){var n=this.queries[e]
if(n)if(t)n.removeHandler(t)
else{n.clear()
delete this.queries[e]}return this}}
e.exports=i},1902:function(e,t,n){function i(e,t){this.query=e
this.isUnconditional=t
this.handlers=[]
this.mql=window.matchMedia(e)
var n=this
this.listener=function(e){n.mql=e.currentTarget||e
n.assess()}
this.mql.addListener(this.listener)}var o=n(1903),a=n(1801).each
i.prototype={constuctor:i,addHandler:function(e){var t=new o(e)
this.handlers.push(t)
this.matches()&&t.on()},removeHandler:function(e){var t=this.handlers
a(t,function(n,i){if(n.equals(e)){n.destroy()
return!t.splice(i,1)}})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){a(this.handlers,function(e){e.destroy()})
this.mql.removeListener(this.listener)
this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off"
a(this.handlers,function(t){t[e]()})}}
e.exports=i},1903:function(e){function t(e){this.options=e
!e.deferSetup&&this.setup()}t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup()
this.initialised=!0},on:function(){!this.initialised&&this.setup()
this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}}
e.exports=t},1904:function(e,t){"use strict"
function n(e,t){function n(e){return JSON.stringify({method:"addEventListener",value:e,listener:o,context:"player.js",version:"0.0.10"})}function i(e){var n=e.originalEvent.data
if("string"==typeof n){try{n=JSON.parse(n)}catch(e){console.error(e)}if(n.listener===o)switch(n.event){case"play":t(!1)
break
case"pause":case"ended":t(!0)}}}if(window.postMessage){var o="listener-xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0
return("x"===e?t:3&t|8).toString(16)})
e.find(".s-video-content iframe").each(function(e,t){t.onload=function(){var e=t.src.match(/^(?:http:)?\/\/[^\/]+\//)[0]
if(/(embedly|embed\.ly)/.test(e)){t.contentWindow.postMessage(n("play"),e)
t.contentWindow.postMessage(n("pause"),e)
t.contentWindow.postMessage(n("ended"),e)}}})
$(window).on("message",function(e){i(e)})}}Object.defineProperty(t,"__esModule",{value:!0})
t.default=n
e.exports=t.default},1905:function(e,t,n){"use strict"
function i(e,t,n){this._goToSpecifySlide(n)}function o(e,t,n){return p.createElement("div",{className:"selector-wrapper",key:n},p.createElement("div",{className:m.keys(m.pick({selector:!0,selected:n==this.getCurrentSlide()},m.identity)).join(" "),key:n,onClick:i.bind(this,e,t,n)}))}function a(){this._previous()}function r(e){var t="noForeground"===this._getCurrentLayout()
return p.createElement("div",{},p.createElement("div",{className:"prev-button "+m.keys(m.pick({"has-upper-button":t},m.identity)).join(" "),onClick:a.bind(this,e,t)},p.createElement("div",{className:"arrow"})))}function s(){this._next()}function l(){this._previous()}function u(e,t,n){this._goToSpecifySlide(n)}function c(e,t,n){return p.createElement("div",{className:"selector-wrapper",key:n},p.createElement("div",{className:m.keys(m.pick({selector:!0,selected:n==this.getCurrentSlide()},m.identity)).join(" "),key:n,onClick:u.bind(this,e,t,n)}))}function d(){this._next()}function f(){var e=this.getDefaultBinding().sub("list")
return p.createElement("div",{className:m.keys(m.pick({"slider-container":!0,loading:!this.getMeta("ready")},m.identity)).join(" ")},e.get().size>0?p.createElement("div",{"data-auto-play":this.props.auto_play,ref:"iosslider",className:m.keys(m.pick({iosslider:!0,"dark-overlays":this._useDarkOverlays()},m.identity)).join(" ")},e.get().size>0?p.createElement("div",{className:"slider"},"\n          ",this._getChildren(),"\n        "):null,!this.props.uiOutside&&e.get().size>1?p.createElement("div",{className:"center slide-selectors"},p.createElement("div",{className:"slide-selectors-inner"},p.createElement.apply(this,["div",{className:"content repeatable-component"},m.map(e.get().toArray(),o.bind(this,e)),p.createElement("div",{className:"clearfix"})]))):null,!this.props.uiOutside&&e.get().size>1?r.apply(this,[e]):null,!this.props.uiOutside&&e.get().size>1?p.createElement("div",{className:m.keys(m.pick({"next-button":!0},m.identity)).join(" "),onClick:s.bind(this,e)},p.createElement("div",{className:"arrow"})):null):null,this._showNavButtons()&&this.props.uiOutside&&e.get().size>1?p.createElement("div",{className:"outside prev-button",onClick:l.bind(this,e)},p.createElement("div",{className:"arrow"},"←")):null,this.props.uiOutside&&e.get().size>1?p.createElement("div",{className:"center outside slide-selectors"},p.createElement("div",{className:"slide-selectors-inner"},p.createElement.apply(this,["div",{className:"content repeatable-component"},m.map(e.get().toArray(),c.bind(this,e))]))):null,this._showNavButtons()&&this.props.uiOutside&&e.get().size>1?p.createElement("div",{className:"next-button outside",onClick:d.bind(this,e)},p.createElement("div",{className:"arrow"},"→")):null,0==e.get().size?p.createElement("div",{className:"s-slider-placeholder"},null):null)}var p=n(0),m=n(1)
e.exports=function(){return p.createElement("div",{className:"s-component s-slider"+(this.props.className?" "+this.props.className:" ")},"\n  ",this._renderEditor(),"\n  ",p.createElement("div",{className:"s-component-content"},f.apply(this,[])))}},1906:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(1),a=(i(o),n(62)),r=n(1872),s=i(r)
s.default.sharedProps=(0,a.sharedPropsBuilder)(function(){return[]})
t.default=s.default
e.exports=t.default},1907:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i={},o={loadAsyncStore:function(e){switch(e){case"socialFeedManager":i[e]=n(1873)}}}
t.default=o
e.exports=t.default},1908:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),r=n(5),s=i(r),l=n(16),u=i(l),c=u.default.SOCIAL_FEED.ACCOUNTS,d=u.default.SOCIAL_FEED.FEEDS,f=function(){function e(){o(this,e)}a(e,[{key:"getAccounts",value:function(e){return s.default.ajax({url:c(e.pageId),type:"GET",success:function(t){if("function"==typeof e.success)return e.success(t)},error:function(t){if("function"==typeof e.fail)return e.fail(t)}})}},{key:"deleteAccount",value:function(e){return s.default.ajax({url:c(e.pageId,e.accountId),type:"DELETE",success:function(t){if("function"==typeof e.success)return e.success(t)},error:function(t){if("function"==typeof e.fail)return e.fail(t)}})}},{key:"updateAccount",value:function(e){return s.default.ajax({url:c(e.pageId,e.accountId),type:"PUT",data:e.data,success:function(t){if("function"==typeof e.success)return e.success(t)},error:function(t){if("function"==typeof e.fail)return e.fail(t)}})}},{key:"updateFacebookPage",value:function(e){return s.default.ajax({url:u.default.SOCIAL_FEED.updateFacebookPage(e),type:"POST",data:e.data,success:function(t){if("function"==typeof e.success)return e.success(t)},error:function(t){if("function"==typeof e.fail)return e.fail(t)}})}},{key:"getFeeds",value:function(e){return s.default.ajax({url:d(e.pageId),type:"GET",success:function(t){if("function"==typeof e.success)return e.success(t)},error:function(t){if("function"==typeof e.fail)return e.fail(t)}})}}])
return e}()
t.default=new f
e.exports=t.default},1909:function(e,t,n){"use strict"
var i=n(0)
n(1)
e.exports=function(){return i.createElement("div",{className:"s-async-wrapper s-component"},i.createElement("div",{className:"s-loading"}))}},1910:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=n(15),r=n(1),s=i(r),l=n(6),u=(i(l),n(59)),c=i(u),d=n(58),f=i(d),p=n(22),m=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(p),h={settings:{goal:1e4,paid:0,currencyCode:"CNY",data:{buttonText:"",thanksMessage:"",showProgress:!0}},state:{isFetching:!1},currencyFormat:{code:"CNY",symbol:"¥",decimal:".",thousand:",",precision:2,name:"Chinese Yuan"}},g=s.default.assign({},a.EventEmitter.prototype,{getData:function(){return h},emitChange:function(){this.emit("store_change_event",h)},addChangeListener:function(e){this.on("store_change_event",e)},removeChangeListener:function(e){this.removeListener("store_change_event",e)}})
m.Event.subscribe("DonationManager.UpdateSettings",function(e,t){h.settings=o({},h.settings,t,{goal:(t.goal||0)/100,paid:(t.paid||0)/100})
g.emitChange()})
g.editorDispatchToken=c.default.register(function(e){switch(e.actionType){case f.default.ActionTypes.GET_DONATION_SETTINGS:h.state.isFetching=!0
g.emitChange()
break
case f.default.ActionTypes.GET_DONATION_SETTINGS_SUCCESS:h.state.isFetching=!1
h.settings=e.settings
h.settings.goal=(h.settings.goal||0)/100
h.settings.paid=(h.settings.paid||0)/100
g.emitChange()
break
case f.default.ActionTypes.GET_DONATION_SETTINGS_FAIL:h.state.isFetching=!1
g.emitChange()}})
t.default=g
e.exports=t.default},1911:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(1912),o=function(e){return e&&e.__esModule?e:{default:e}}(i),a=n(1804)
t.default=(0,a.createCardView)(o.default,!0)
e.exports=t.default},1912:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(255),o=function(e){return e&&e.__esModule?e:{default:e}}(i),a=n(1805)
t.default=(0,a.createProductCard)(o.default,!0)
e.exports=t.default},1913:function(e,t,n){"use strict";(function(t){var i=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),o=n(29),a=n(189),r=function(e){return e&&e.__esModule?e:{default:e}}(a),s=n(0),l=n(2),u=n(13),c=n(5),d=n(33),f=n(57),p=n(73),m=n(255),h=n(471),g=n(120),v=n(21),y=n(1795),b=n(1202).default,_=n(475),w=n(184),C=n(7),x=n(8),k=f({displayName:"PortfolioProduct",mixins:[h.enableAfterMount(),g],contextTypes:{fromStorePage:l.bool},getInitialState:function(){return{currentImageIndex:0}},componentDidUpdate:function(){var e=c(u.findDOMNode(this.refs.imageWrapper)),t=e.find("img")
e.height(t.height())
return t.load(function(){return e.height(t.height())})},componentWillReceiveProps:function(e){this.props.product.id!==e.product.id&&this.setState(this.getInitialState())},_getProductImage:function(){return this.props.product.picture[this.state.currentImageIndex]?this.props.product.picture[this.state.currentImageIndex].thumbnailUrl:v.cdnAssetPath(m.DEFAULT_PRODUCT_IMAGE)},_showImageGallery:function(){var e=this
return n.e(23).then(function(){n(493)
var t=e.props.product.picture.map(function(e){return{src:e.url}})
return c.fancybox.open(t,Object.assign({},y.onlyCloseBtnOpts,{baseTpl:y.getCustomArrowTpl(),beforeMove:y.indicatorBeforeMove,onInit:y.indicatorOnInit}))}.bind(null,n)).catch(n.oe)},onClickCtaButton:function(){var e=this.props.product.button.url
window.top.location.href=(0,o.addProtocol)(e)},_onClickShowImageGallery:function(){return this._showImageGallery()},_onClickNextImage:function(){return this.setState({currentImageIndex:this.state.currentImageIndex+1})},_onClickPrevImage:function(){return this.setState({currentImageIndex:this.state.currentImageIndex-1})},_setCurrentImage:function(e){return this.setState({currentImageIndex:e})},_onClickShowProductPage:function(){var e=this.props.product
return p.gotoProductPage(e.id,this.context.fromStorePage,!0)},_getSlickSettings:function(){var e=this
return{infinite:1!==this.props.product.picture.length,slidesToShow:1,autoplay:!1,afterChange:function(t){return e.setState({currentImageIndex:t})}}},_renderThumbnailList:function(){var e=this,t=void 0,n=this.props.product.picture.length,o=this.state.currentImageIndex+1
t=n>=7?o<=4?0:n-o<=3?14.5*-(n-7)+"%":14.5*-(o-4)+"%":0
return i("div",{className:"s-ecommerce-row-view-product-thumbnail-list"},void 0,i("ul",{style:{left:t}},void 0,this.props.product.picture.map(function(t,n){return i("li",{className:n===e.state.currentImageIndex?"current":"",onClick:function(){return e._setCurrentImage(n)}},n,i("img",{src:t.thumbnailUrl}))})))},render:function(){var e=this,n=this.props,o=(n.isSxl,n.product),a=n.fromProductPage,l=!a&&o.detailEnabled
return i("div",{className:d("s-ecommerce-row-view-product",{"from-product-page":a})},void 0,i("div",{className:""+this.props.imgColumnClassName,style:{minHeight:"50px"}},void 0,i("div",{className:"half-offset-right"},void 0,s.createElement("div",{className:"s-ecommerce-row-view-product-image-wrapper",ref:"imageWrapper",onClick:this._onClickShowImageGallery},o.picture.length>=1&&i("div",{className:"slider-wrapper"},void 0,s.createElement(b,Object.assign({},this._getSlickSettings()),o.picture.map(function(e,t){return i("div",{className:"slide-thumb",style:{backgroundImage:"url("+e.thumbnailUrl+")"}},t)})),o.picture.length>=2&&i("ul",{className:"slider-dot-wrapper"},void 0,o.picture.map(function(t,n){return i("li",{className:d("slider-dot",{selected:e.state.currentImageIndex===n})})}))),i("div",{className:"image-wrapper"},void 0,i(_,{src:this._getProductImage(),width:"100%"}),function(){if(o.picture.length>=2){if("card"===e.props.layout||a)return i("div",{className:"s-ecommerce-row-view-product-image-overlay-wrapper"},void 0,i("div",{className:"s-ecommerce-row-view-product-image-overlay"}),i("div",{className:"s-ecommerce-row-view-product-image-overlay-icon"},void 0,i("div",{className:"fa fa-search-plus",title:t("Ecommerce|Click to view more images")})))
if("row"===e.props.layout)return i("div",{className:"s-ecommerce-row-view-product-image-gallery-button"},void 0,i("div",{className:"fa fa-search-plus",title:t("Ecommerce|Click to view more images")}))}return null}())),(a||"card"===this.props.layout)&&o.picture.length>=2?this._renderThumbnailList():null)),i("div",{className:"s-ecommerce-row-view-product-detail-panel s-font-body "+this.props.infoColumnClassName},void 0,i("div",{className:"s-ecommerce-row-view-product-name"},void 0,o.name),o.subtitle&&o.subtitle.active&&i("div",{className:"s-ecommerce-row-view-product-pricing"},void 0,o.subtitle.text),i("div",{className:"s-ecommerce-row-view-product-desc"},void 0,i("div",{dangerouslySetInnerHTML:{__html:o.description.replace(/\n/g,"<br>")}}),l?i("div",{className:"view-detail-btn",onClick:this._onClickShowProductPage},void 0,t("Ecommerce|View more details...")):null),o.button&&o.button.active&&i(r.default,{component:"a",className:"s-ecommerce-row-view-product-order-btn s-common-button",onClick:this.onClickCtaButton},void 0,o.button.text),a&&i("div",{},void 0,i("div",{className:"mobile-select",style:{position:"relative"}},void 0,o.button&&o.button.active&&i("div",{onClick:this.onClickCtaButton,className:"add-btn"},void 0,o.button.text)))))}})
e.exports=w(k,[],function(){return{locale:C.getLocale(),isSxl:C.getIsSxl(),isNewMobileActions:x.getIsNewMobileActions()}})}).call(t,n(3))},1914:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return/animation=0/.test(window.location.href)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}()
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(22),s=n(11),l=n(1),u=n(1915),c=n(1917)
t.areBackgroundAnimationsEnabledOnThisDevice=c.areBackgroundAnimationsEnabledOnThisDevice
var d=n(1918),f=function(){function e(t){i(this,e)
this._newPageFadeInToken=null
this._contentElement=t
if(this._shouldAnimate()){s.getSiteAnimations()
this._initAnimations(t)
this._onPageDataChange=l.debounce(this._onPageDataChange.bind(this),50)
s.addChangeListener(this._onPageDataChange)
this._onNewPageFadeIn=this._onNewPageFadeIn.bind(this)
this._newPageFadeInToken=r.Event.subscribe("Page.afterNewOneFadeIn",this._onNewPageFadeIn)}}a(e,[{key:"_onPageDataChange",value:function(){var e=s.getSiteAnimations()
this._animations.forEach(function(t){t.handlePageDataChange&&t.handlePageDataChange(e)})}},{key:"_onNewPageFadeIn",value:function(){s.getSiteAnimations()
this._destroyAnimations()
this._initAnimations(this._contentElement)}},{key:"_initAnimations",value:function(e){var t=s.getSiteAnimations()
this._animations=[]
this._animations.push(new u.default(t,e))
this._animations.push(new d.default(t,e))
this._animations.push(new c.default(t,e))}},{key:"_shouldAnimate",value:function(){return!o()}},{key:"destroy",value:function(){if(this._shouldAnimate()){s.removeChangeListener(this._onPageDataChange)
r.Event.unsubscribe(this._newPageFadeInToken)
this._destroyAnimations()}}},{key:"_destroyAnimations",value:function(){this._animations.forEach(function(e){return e.destroy()})}}])
return e}()
!function(){function e(){i(this,e)}a(e,[{key:"destroy",value:function(){}}])}()
t.default=f},1915:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}()
Object.defineProperty(t,"__esModule",{value:!0})
var a=n(1916),r=n(5),s=n(1),l=function(){function e(t,n){i(this,e)
this._refreshTimeout=null
this._animationType=null
this._waypoints=[]
if(t&&"none"!==t.page_scroll){var o=t.page_scroll
this._animationType=o
var l="s-animation-page-"+o+"-before"
r(n).find(".s-section .s-component, .s-section.s-rows-section .s-item-text-group, .process-item-infos").each(function(e,t){if(!a(t)){t=r(t)
var n=t.parents(".s-info-box"),i=t.parents(".s-item-text-group")
n.length>0?t=n:i.length>0&&(t=i)
t.addClass(l)}})
r("."+l).each(function(){r(this).parents("."+l).removeClass(l)})
var u=this._onScrolledToElement.bind(this)
this._waypoints=r(n).find("."+l).waypoint(function(e){if("down"===e){u(this.element)
this.destroy()}},{offset:"100%"})
this._onScroll=s.debounce(this._onScroll.bind(this),200)
r(window).on("scroll",this._onScroll)
this._refreshTimeout=setTimeout(function(){Waypoint.refreshAll()
this._refreshTimeout=null},500)}}o(e,[{key:"_onScrolledToElement",value:function(e){r(e).addClass("s-animation-page-"+this._animationType).removeClass("s-animation-page-"+this._animationType+"-before")}},{key:"_onScroll",value:function(){var e=this
r(window).scrollTop()+r(window).height()>=r("body").height()&&r(".s-animation-page-"+this._animationType+"-before").each(function(t,n){return e._onScrolledToElement(n)})}},{key:"destroy",value:function(){this._waypoints.forEach(function(e){return e.destroy()})
r(window).off("resize",this._onScroll)
clearTimeout(this._refreshTimeout)}}])
return e}()
t.default=l},1916:function(e,t,n){e.exports=n(4)(1379)},1917:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e){r(e).find(".s-bg-image").length>0&&(e=r(e).find(".s-bg-image")[0])
return e}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}()
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(5),s=n(1),l=n(19),u=function(){function e(t,n){i(this,e)
this._isDestroyed=!1
this._contentElement=n
this._applyParallax=this._applyParallax.bind(this)
this._onWindowResize=s.debounce(this._onWindowResize.bind(this),200)
r(window).on("resize",this._onWindowResize)
r(window).on("scroll",this._applyParallax)
this._updateSectionsThatShouldBeAnimated()
this._updateBackgroundAnimationSpeed(t)}a(e,[{key:"_updateBackgroundAnimationSpeed",value:function(e){var t=this._getParallaxSpeed(e)
if(t!==this._parallaxSpeed){this._parallaxSpeed=t
1===this._parallaxSpeed?this._removeParallax():this._applyParallax(!0)}}},{key:"_getParallaxSpeed",value:function(e){return"none"===e.background?1:"fixed"===e.background?0:"parallax"===e.background?.3:void 0}},{key:"_onWindowResize",value:function(){var e=this
c()||this._sectionsThatShouldBeAnimated.each(function(t,n){e._revertAnimationStyles(n)})
this._applyParallax(!0)}},{key:"handlePageDataChange",value:function(e){this._updateSectionsThatShouldBeAnimated()
this._updateBackgroundAnimationSpeed(e)}},{key:"_removeParallax",value:function(){var e=this
this._sectionsThatShouldBeAnimated.each(function(t,n){e._revertAnimationStyles(n)})}},{key:"_updateSectionsThatShouldBeAnimated",value:function(){this._sectionsThatShouldBeAnimated=r(this._contentElement).find(".s-section").filter(function(e,t){var n=r(t),i=n.is(".s-slider-section"),o=n.is(".s-grid-section"),a="none"!=n.css("backgroundImage")||"none"!=n.find("s-bg-image").css("backgroundImage"),s=n.is(".s-bg-video")
return a&&!i&&!s&&!o})}},{key:"_applyParallax",value:function(e){var t=this
if(c()&&1!==this._parallaxSpeed){var n=r(window).scrollTop()
this._sectionsThatShouldBeAnimated.each(function(i,a){a=o(a)
if(r(a).hasClass("_animate-background")){var s=t._parallaxSpeed,l=a.offsetHeight,u=window.innerHeight,c=(window.innerWidth,a.getBoundingClientRect().top+n),d=c-u,f=c+l,p=d<=n&&n<=f,m=f-d,h=n-d,g=h/m,v=m*s,y=(Math.max(u,l),f-u),b=y-d,_=b/m,w=u*s-m*s*_,C=f-(y+w)
e&&$B.TH.getBackgroundImageSize(r(a),function(e){if(!t._isDestroyed){var n=e.width/e.height
if(r(a).hasClass("_image-position-center")){r(a).data("imageWidth",e.width)
r(a).data("imageHeight",e.height)}else{var i=C,o=C*n
if(o<r(a).outerWidth()){o=r(a).outerWidth()
i=o/n}r(a).data("imageWidth",o)
r(a).data("imageHeight",i)}t._applyParallax(!1)}})
if(p){var x=r(a).offset().left+(r(a).outerWidth()-r(a).data("imageWidth"))/2,k=u*s-m*s*g,S=(C-r(a).data("imageHeight"))/2+k
r(a).css({"background-attachment":"fixed","background-position-x":x,"background-position-y":S})
"repeat"!==r(a).css("background-repeat")&&r(a).css({"background-size":r(a).data("imageWidth")+"px "+r(a).data("imageHeight")+"px"})}}else t._revertAnimationStyles(a)})}}},{key:"_revertAnimationStyles",value:function(e){e=o(e)
r(e).css("background-attachment","")
var t=r(e).attr("data-react-style")
t&&r(e).css(JSON.parse(t))}},{key:"destroy",value:function(){this._removeParallax()
r(window).off("resize",this._onWindowResize)
r(window).off("scroll",this._applyParallax)
this._isDestroyed=!0}}])
return e}()
t.default=u
var c=void 0
t.areBackgroundAnimationsEnabledOnThisDevice=c
t.areBackgroundAnimationsEnabledOnThisDevice=c=function(){return!(l.isMobile()||l.isSmallScreen()||l.isEdge()||l.isIE11())}},1918:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}()
Object.defineProperty(t,"__esModule",{value:!0})
var a=n(19),r=n(5),s=function(){function e(t,n){i(this,e)
this._contentElement=n
if(!a.isMobile()&&"zoom_in"===t.image_link_hover){var o=[".s-component.s-media",".s-gallery-item",".image-wrapper",".s-image",".s-blog-avatar-container"],s=o.map(function(e){return".s-section:not(.s-footer-section) "+e+" a img"}),l=s.join(", ")
l+=", .s-blog-avatar, .s-grid-section-cell a .s-bg-image"
r(n).on("mouseenter.imageLinkHoverAnimator",l,function(){var e=r(this),t=e.width(),n=e.height(),i=void 0
i=t>n?(t+20)/t:(n+20)/n
r(this).css("transform","scale("+i+")")})
r(n).on("mouseleave.imageLinkHoverAnimator",l,function(){r(this).css("transform","")})}}o(e,[{key:"destroy",value:function(){r(this._contentElement).off("mouseenter.imageLinkHoverAnimator")
r(this._contentElement).off("mouseleave.imageLinkHoverAnimator")}}])
return e}()
t.default=s},1919:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(136),o=function(e){return e&&e.__esModule?e:{default:e}}(i),a=n(1798)
t.default=(0,a.createCategoryBar)(o.default)
e.exports=t.default},1920:function(e,t,n){"use strict"
var i=n(0)
n(1)
e.exports=function(){return i.createElement("div",{className:"video-bg-wrap","data-video-html":this.dtProps.videoHtml})}},1974:function(e,t,n){var i=n(2168)
n(1)
e.exports={internal:"bright",displayName:"Bright",description:"A bold cover image, with colorful backgrounds throughout. Great for startups!",activated:!0,thumbnail:i.correctThumbnailPath(n(2853)),defaultFonts:{heading:"roboto condensed",title:"roboto condensed",body:"roboto condensed"},features:{fullscreenSliderOnlyFirstSection:!0,narrowMedia:!0,narrowContactForm:!0,itemSubtitleDefaultStyle:"bold",showLogoOnMobile:!0,backgroundColorClassNames:["s-bg-dark","s-bg-gray","s-bg-white"],backgroundColorRotate:!0},variations:[{id:"default",displayName:"Variation|Bright",fonts:{heading:null,title:null,body:null}},{id:"pink",displayName:"Variation|Pink",fonts:{heading:null,title:null,body:null}},{id:"turquoise",displayName:"Variation|Turquoise",fonts:{heading:null,title:null,body:null}},{id:"red",displayName:"Variation|Red",fonts:{heading:null,title:null,body:null}}],callbacks:{CustomColorsTemplate:n(2854),after_render:n(2855),inline:n(2333),inlineHtml:n(2856)},sections:{blog:{proFeature:!1,canEditInMobileApp:!1,component:n(2171),template:n(2274),thumbnail:{cover:i.correctThumbnailPath(n(2857)),template:n(2182)}},columns:{proFeature:!1,canEditInMobileApp:!0,component:n(2275),template:n(2248),thumbnail:{cover:i.correctThumbnailPath(n(2858)),template:n(2231)}},contact_form:{proFeature:!1,canEditInMobileApp:!0,component:n(2232),template:n(2276),thumbnail:{cover:i.correctThumbnailPath(n(2859)),template:n(2233)}},cta:{proFeature:!1,canEditInMobileApp:!0,component:n(2184),template:n(2249),thumbnail:{cover:i.correctThumbnailPath(n(2860)),template:n(2185)}},ecommerce:{proFeature:!1,canEditInMobileApp:!1,component:n(2186),template:n(2277),thumbnail:{cover:i.correctThumbnailPath(n(2861)),template:n(2187)}},gallery:{proFeature:!1,canEditInMobileApp:!0,component:n(2250),template:n(2289),thumbnail:{cover:i.correctThumbnailPath(n(2862)),template:n(2235)}},html:{proFeature:!1,canEditInMobileApp:!1,component:n(2190),template:n(2251),thumbnail:{cover:i.correctThumbnailPath(n(2863)),template:n(2191)}},icons:{proFeature:!1,canEditInMobileApp:!0,component:n(2192),template:n(2252),thumbnail:{cover:i.correctThumbnailPath(n(2864)),template:n(2236)}},info:{proFeature:!1,canEditInMobileApp:!0,component:n(2253),template:n(2254),thumbnail:{cover:i.correctThumbnailPath(n(2865)),template:n(2237)}},media:{proFeature:!1,canEditInMobileApp:!0,component:n(2255),template:n(2256),thumbnail:{cover:i.correctThumbnailPath(n(2866)),template:n(2238)}},navbar:{proFeature:!1,canEditInMobileApp:!1,component:n(2239),template:n(2867)},rows:{proFeature:!1,canEditInMobileApp:!0,component:n(2279),template:n(2257),thumbnail:{cover:i.correctThumbnailPath(n(2868)),template:n(2240)}},signup_form:{proFeature:!1,canEditInMobileApp:!0,component:n(2197),template:n(2258),thumbnail:{cover:i.correctThumbnailPath(n(2869)),template:n(2199)}},slider:{proFeature:!0,canEditInMobileApp:!1,component:n(2200),template:n(2283),thumbnail:{cover:i.correctThumbnailPath(n(2870)),template:n(2201)}},social_feed:{proFeature:!1,canEditInMobileApp:!1,component:n(2241),template:n(2259),thumbnail:{cover:i.correctThumbnailPath(n(2871)),template:n(2202)}},text:{proFeature:!1,canEditInMobileApp:!0,component:n(2260),template:n(2261),thumbnail:{cover:i.correctThumbnailPath(n(2872)),template:n(2242)}},title:{proFeature:!1,canEditInMobileApp:!0,component:n(2243),template:n(2262),thumbnail:{cover:i.correctThumbnailPath(n(2873)),template:n(2284)}},block:{proFeature:!0,canEditInMobileApp:!1,component:n(2203),template:n(2263),thumbnail:{template:n(2204)}},donation:{proFeature:!1,canEditInMobileApp:!1,component:n(2205),template:n(2264),thumbnail:{template:n(2207)}},footer:{proFeature:!1,canEditInMobileApp:!1,component:n(2244),template:n(2265)},grid:{proFeature:!1,canEditInMobileApp:!1,component:n(2209),template:n(2213),thumbnail:{template:n(2214)}},hero:{proFeature:!1,canEditInMobileApp:!0,component:n(2266),template:n(2267),thumbnail:{cover:i.correctThumbnailPath(n(2245)),template:n(2246)}},portfolio:{proFeature:!1,canEditInMobileApp:!1,component:n(2215),template:n(2268),thumbnail:{template:n(2218)}},pricing:{proFeature:!0,canEditInMobileApp:!1,component:n(2219),template:n(2222),thumbnail:{template:n(2223)}},process:{proFeature:!1,canEditInMobileApp:!0,component:n(2224),template:n(2269),thumbnail:{template:n(2227)}}}}},2131:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),s=n(0),l=o(s),u=n(2),c=o(u),d=n(17),f=o(d),p=n(397),m=o(p)
t.default=f.default.create({displayName:"TitleGroup",mixins:[],propTypes:{className:c.default.string,section:c.default.object.isRequired,parentBinding:c.default.object,subtitleOnTop:c.default.bool,canHide:c.default.bool,titleSize:c.default.oneOf(["large","normal"]),titleTag:c.default.oneOf(["h2","h3","h4","h5","h6"]),subtitleTag:c.default.string,contentCheck:c.default.string,binding:c.default.object.isRequired},getDefaultProps:function(){return{className:"",subtitleOnTop:!1,parentBinding:void 0,titleSize:"normal",titleTag:"h2",subtitleTag:"h4",canHide:!0}},componentWillMount:function(){this.showDeleteOverlay=!1
this.hideInEditor=!this.props.section.sbAnyHasContent("text1 text2",{parentBinding:this.props.parentBinding,showOnly:!1})},componentWillUpdate:function(e){this.props.section.sbAnyHasContent("text1 text2",{parentBinding:e.parentBinding,showOnly:!1})&&(this.hideInEditor=!1)},onMouseEnterDeleteButton:function(){this.showDeleteOverlay=!0
this.forceUpdate()},onMouseLeaveDeleteButton:function(){this.showDeleteOverlay=!1
this.forceUpdate()},onClickDeleteButton:function(){this.hideInEditor=!0
this.showDeleteOverlay=!1
this.forceUpdate()},onClickShowButton:function(){this.hideInEditor=!1
this.showDeleteOverlay=!1
this.forceUpdate()},shouldComponentUpdateOverride:function(){return!0},render:function(){var e=void 0,t=void 0,n=this.props.section,o=this.props.parentBinding,s="",u=n.sbUniformTextAlignment("text1",{parentBinding:o}),c=u?"sb-title-"+u:""
this.props.contentCheck&&(n.sbHasContent(this.props.contentCheck,{parentBinding:o,showOnly:!1})||(s="s-only-title-group"))
if(!n)throw new Error("TitleGroup is expecting a section prop!")
if(n.sbHasContent("text1",{parentBinding:o})){var d=void 0,f=void 0,p=n.getComponentProps("text1",o)
f="first"===this.props.section.props.indexType?"h1":this.props.titleTag
d="large"===this.props.titleSize&&"h1"!==f?"s-title-large":""
t=r("div",{className:"s-title "+c},"title",l.default.createElement(m.default,a({slideSettingsBinding:n.getBinding().sub("components.slideSettings"),tagName:f,tagClassName:d,textType:"title",emptyMessage:i("Editor|Add title.")},p)))}else t=null
if(n.sbHasContent("text2",{parentBinding:o})){var h=n.getComponentProps("text2",o)
e=r("div",{className:"s-subtitle"},"subtitle",l.default.createElement(m.default,a({tagName:this.props.subtitleTag,textType:"heading",emptyMessage:i("Editor|Add subtitle.")},h)))}else e=null
return n.sbAnyHasContent("text1 text2",{parentBinding:o})?r("div",{className:"s-title-group "+s+" "+this.props.className},void 0,void 0,this.props.subtitleOnTop?[e,t]:[t,e]):null}})
e.exports=t.default}).call(t,n(3))},2132:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var s,l,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),f=n(0),p=i(f),m=n(2),h=(i(m),n(19)),g=(i(h),n(13)),v=(i(g),n(29)),y=n(11),b=i(y),_=n(134),w=i(_),C=n(1914),x=n(1),k=i(x),S=n(5),N=i(S),E="undefined"!=typeof window,P=Boolean(E&&window.document&&window.document.createElement)
if(P){n(1211)
document.addEventListener("lazybeforeunveil",function(e){var t=void 0
if(!e.defaultPrevented){t=e.target.getAttribute("data-bg")
if(t){e.target.style.backgroundImage="url("+t+")"
lazySizes.fire(e.target,"_lazyloaded",{},!0,!0)}}})}var O=(l=s=function(e){function t(e){o(this,t)
var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),i=n.props.dataSrc
n.state={isBackgroundImageLoaded:!i,canUseFocus:!1}
return n}r(t,e)
d(t,[{key:"componentWillMount",value:function(){this.updateEnableBackgroundAnimationsInState()}},{key:"componentDidMount",value:function(){var e=this,t=this.props.dataSrc
if(t){this.backgroundImageCopy=new Image
this.backgroundImageCopy.src=t
this.backgroundImageCopy.onload=function(){e.setState({isBackgroundImageLoaded:!0})}
this.backgroundImageCopy.onerror=function(){e.setState({isBackgroundImageLoaded:!0})}}this.afterResize=k.default.debounce(this.afterResize.bind(this),300);(0,N.default)(window).on("resize",this.afterResize)}},{key:"componentWillReceiveProps",value:function(e){this.updateEnableBackgroundAnimationsInState(e)}},{key:"componentWillUpdate",value:function(e){for(var t=!1,n=["src","dataSrc"],i=0;i<n.length;i++){var o=n[i]
if(this.props[o]!==e[o]){t=!0
break}}if(t){var a=this.lazyElement
a&&a.classList.contains("lazyloaded")&&a.classList.remove("lazyloaded")}if(this.lazyElement){var r=this.lazyElement,s=this.props.className
if(r){var l=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").trim()},u=s.split(" ").map(l),c=r.className.split(" ").map(l).filter(function(e){return e&&!u.includes(e)&&!e.startsWith("_")})
this.extraClass=c.join(" ")}}}},{key:"componentDidUpdate",value:function(){var e=this.lazyElement
!e||e.classList.contains("lazyloaded")||e.classList.contains("lazyload")||e.classList.add("lazyload")}},{key:"componentWillUnmount",value:function(){(0,N.default)(window).off("resize",this.afterResize)
this.removeImageLoadListener()}},{key:"getContainerSize",value:function(){var e=this.lazyElement||{clientWidth:0,clientHeight:0}
return{width:e.clientWidth,height:e.clientHeight}}},{key:"removeImageLoadListener",value:function(){if(this.backgroundImageCopy){this.backgroundImageCopy.onload=function(){}
this.backgroundImageCopy=null}}},{key:"afterResize",value:function(){this.updateEnableBackgroundAnimationsInState()}},{key:"updateEnableBackgroundAnimationsInState",value:function(e){e=e||this.props
var t="contain"!==e.style.backgroundSize,n="none"!==e.animations.background&&(0,C.areBackgroundAnimationsEnabledOnThisDevice)()&&t
this.state.enableBackgroundAnimations!==n&&this.setState({enableBackgroundAnimations:n})
this.setState({canUseFocus:!n||E&&window.innerWidth<=700})}},{key:"imagePositioningIsCenter",value:function(e){e=e||this.props
return"auto"===e.style.backgroundSize&&"50% 50%"===e.style.backgroundPosition&&"repeat"!==e.style.backgroundRepeat}},{key:"renderBackgroundImage",value:function(){var e=this,t=this.props,n=t.className,i=t.src,o=t.dataSrc,a=t.eagerLoad,r=t.image,s=t.textColor,l=this.state,d=l.enableBackgroundAnimations,f=l.canUseFocus,m=l.isBackgroundImageLoaded,h=d?" _animate-background":""
this.imagePositioningIsCenter()&&(h+=" _image-position-center")
var g=this.props.style,v=r&&r.getFocusCoordinate(),y=this.getContainerSize(),b=m>0?"loaded":""
f&&v&&y.width>0&&(g=Object.assign({},g,{backgroundPosition:r.transformFocusToBackgroundPosition(y)}))
if(a){g=Object.assign({},g,{backgroundImage:"url("+o+")"})
return p.default.createElement("div",{className:n+h+" background-image",ref:function(t){return e.lazyElement=t},style:g,"data-react-style":this.getDataReactStyle(g)},f&&v&&c("div",{className:"background-overlay overlay-"+s+" "+b}),this.props.children)}var _={}
if(o){g=u({},g,{backgroundImage:"url("+(P?i:o)+")"})
_={"data-bg":o}}return p.default.createElement("div",u({className:"lazyload "+(this.extraClass||"")+" "+n+h+" background-image",style:g},_,{ref:function(t){return e.lazyElement=t},"data-react-style":this.getDataReactStyle(g)}),f&&v&&c("div",{className:"background-overlay overlay-"+s+" "+b}),this.props.children)}},{key:"getDataReactStyle",value:function(e){e=e||{}
e=k.default.omit(e,"backgroundImage")
return JSON.stringify(e)}},{key:"render",value:function(){var e=this.props,t=e.linkTarget,n=e.linkUrl,i=this.renderBackgroundImage(),o=(0,v.addProtocol)(n)
return n&&t?c("a",{href:o,target:t},void 0,i):i}}])
return t}(p.default.Component),s.defaultProps={className:"",style:{},eagerLoad:!1,src:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",linkUrl:null,linkTarget:null,image:null,textColor:""},l)
t.default=(0,w.default)(O,[b.default],function(){return{animations:b.default.getSiteAnimations()}})
e.exports=t.default},2133:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(1),a=(i(o),n(62)),r=n(2139),s=i(r)
s.default.sharedProps=(0,a.sharedPropsBuilder)(function(){return[]})
t.default=s.default
e.exports=t.default},2134:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(6)
!function(e){e&&e.__esModule}(i)
t.default={_getLayoutVariation:function(){return this._getLayoutBinding().get("layout_variation")||""},_getFirstLayout:function(){return this._getLayoutVariation().split("-")[0]},_updateLayout:function(e){this._getLayoutBinding().sub("layout_variation").set(e)},_updateLayoutSettings:function(){},_getLayoutSettings:function(){var e=this._getLayoutBinding().get("display_settings")
return e&&e.toJS()||{}},_updatePadding:function(e){this._getLayoutBinding().sub("padding").set(e)},_getPadding:function(){var e=this._getLayoutBinding().get("padding")
e=e&&e.toJS?e.toJS():e
return e||{top:"normal",bottom:"normal"}},_getPaddingClass:function(){var e=this._getPadding()
return("half"===e.top?"s-top-padding-half":"none"===e.top?"s-top-padding-none":"")+" "+("half"===e.bottom?"s-bottom-padding-half":"none"===e.bottom?"s-bottom-padding-none":"")},_getLayoutStatusName:function(){return"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[arguments.length>0&&void 0!==arguments[0]?arguments[0]:0]}}
e.exports=t.default},2135:function(e,t,n){"use strict";(function(e){function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return"object"!==(void 0===e?"undefined":m(e))?"":e[t]?t:Object.keys(e)[0]}function l(t){return{media:e("Editor|Big Media"),col:e("Editor|Columns"),row:e("Editor|Rows"),box:e("Editor|Text In Box"),one:1,two:2,three:3,four:4,five:5,six:6,small:p("i",{className:"small fa fa-photo"}),medium1:p("i",{className:"medium1 fa fa-photo"}),medium2:p("i",{className:"medium2 fa fa-photo"}),large:p("i",{className:"large fa fa-photo"}),mediaLeft:e("Editor|Left"),mediaRight:e("Editor|Right"),center:e("Editor|Center"),left:e("Editor|Media on Left"),right:e("Editor|Media on Right"),noImage:e("Editor|No Media"),alt:e("Editor|Alternating"),text:e("Editor|Text"),button:e("Editor|Button"),signup:e("Editor|Sign Up"),images:e("Editor|App Store"),overlay:e("Editor|Overlay"),card:e("Editor|Card"),swap:e("Editor|Swap Titles")}[t]}function u(e){return(0,Y.default)(e,[],function(){return{themeName:W.default.getThemeName()}})}Object.defineProperty(t,"__esModule",{value:!0})
t.BaseLayoutButton=void 0
var c,d,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),p=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
t.connectToStores=u
var h=n(0),g=i(h),v=n(13),y=i(v),b=n(492),_=i(b),w=n(5),C=i(w),x=n(90),k=i(x),S=n(1793),N=i(S),E=n(76),P=i(E),O=n(33),T=i(O),L=n(1),M=i(L),I=n(95),B=i(I),D=n(471),j=i(D),A=n(14),H=i(A),R=n(1870),F=i(R),V=n(291),U=i(V),z=n(8),W=i(z),G=n(2140),K=i(G),$=n(2180),q=n(134),Y=i(q),J=function(){return null}
t.BaseLayoutButton=(c=P.default.decorate(j.default.enableAfterMount()))(d=function(t){function n(e){o(this,n)
var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))
t.state={showLayoutOptions:!1}
t._bind("_updateLayout","_toggleLayoutOptions","_onClickSave","_clickRotateLayout","_onChangeRotationKey","_getKeysByLevel")
t._getSetLevelFn=U.default.boundParamsMemoizer(t._setLevelKey,t)
t._createLevelKeys(t.props.layoutVariation)
t._keyCaches={}
t.cacheLevel=-1
t.showBaseRotationDropdown=!1
return t}r(n,t)
f(n,[{key:"componentDidMount",value:function(){if(-1!==this.cacheLevel){var e=this.cacheLevel,t=this._levelKeys[e]
this._keyCaches[t]=M.default.clone(this._levelKeys)}this.props.layoutOptions||console.warn("Section has no layout options defined!")}},{key:"componentWillUpdate",value:function(e){e.layoutVariation!==this.props.layoutVariation&&this._createLevelKeys(e.layoutVariation)}},{key:"componentDidUpdate",value:function(e,t){e.layoutVariation!==this.props.layoutVariation&&window.edit_page.Event.publish("Layout.afterChange",{target:(0,C.default)(y.default.findDOMNode(this))})
!t.showLayoutOptions&&this.state.showLayoutOptions&&(0,C.default)(this.refs.componentDOM).closest(".s-section-editor-wrapper").addClass("background-editor-opened")
t.showLayoutOptions&&!this.state.showLayoutOptions&&(0,C.default)(this.refs.componentDOM).closest(".s-section-editor-wrapper").removeClass("background-editor-opened")}},{key:"_bind",value:function(){for(var e=this,t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i]
n.forEach(function(t){return e[t]=e[t].bind(e)})}},{key:"_createLevelKeys",value:function(e){this._levelKeys=e.split("-")}},{key:"_updateLayout",value:function(e){this.props.updateLayout(M.default.remove(M.default.clone(e),function(e){return""!==e.trim()}).join("-"))}},{key:"_setLevelKey",value:function(e,t){var n=this.cacheLevel
if(e===n&&this._levelKeys[e]!==t)return this._keyCaches[t]?this.updateCachedKeys(M.default.clone(this._keyCaches[t])):this.updateToDefaultLayout(t)
for(var i=this._levelKeys,o=[],a=this.props.layoutOptions,r=0;r<e;r++)a=a[i[r]]
o[e]=t
a=a[t]
for(var l=i.length,u=e+1;u<l;u++){o[u]=s(a,i[u])
a=a[o[u]]}var c=M.default.merge([],i,o)
this._updateLayout(c)
e!==n&&-1!==n&&(this._keyCaches[i[n]]=c)}},{key:"_getKeysByLevel",value:function(e){for(var t=this.props.layoutOptions,n=0;n<e;n++){t=t[this._levelKeys[n]]
if(!t)return[]}return"object"===(void 0===t?"undefined":m(t))?Object.keys(t):[]}},{key:"_getSmallButtonClass",value:function(e){var t=this._getKeysByLevel(e).length
return 2===t?"small-buttons two":4===t?"small-buttons four":5===t?"small-buttons five":"small-buttons"}},{key:"_getLayoutIndex",value:function(){var e=this.props.layoutVariation,t=this.getRotationKeys().indexOf(e)
return e&&-1!=t?t:null}},{key:"_getLayoutStatus",value:function(){return null!==this._getLayoutIndex()?"ABCDEFGHI"[this._getLayoutIndex()]:"padding"===this.sectionName?"":"A"}},{key:"_clickRotateLayout",value:function(){if(this.state.showLayoutOptions)this._onClickSave()
else if(this._shouldDirectlyOpenAdvancedOptions())this.setState({showLayoutOptions:!this.state.showLayoutOptions})
else{var e=this.getRotationKeys(),t=this._getLayoutIndex()+1;(!t||t>=e.length)&&(t=0)
var n=e[t]||""
if(n){this.props.updateLayout(n)
H.default.clickLayout()
H.default.save()}}}},{key:"_onChangeRotationKey",value:function(e){this.props.updateLayout(e.target.value)
H.default.clickLayout()
H.default.save()}},{key:"_shouldDirectlyOpenAdvancedOptions",value:function(){return 0===this.getRotationKeys().length&&!this.hideAdvancedOptions}},{key:"_onClickSave",value:function(){this.setState({showLayoutOptions:!1})
H.default.save()}},{key:"_toggleLayoutOptions",value:function(){this.setState({showLayoutOptions:!this.state.showLayoutOptions})
this.state.showLayoutOptions||B.default.track("Click Advanced Layout - Editor v1",{section:this.sectionName})}},{key:"_renderCheckBox",value:function(e){var t=e.levelNum,n=e.labelText,i=e.checkedKey,o=e.unCheckedKey,a=this._levelKeys[t],r=this._getKeysByLevel(t)
if(a&&r.length>=2){var s=this._getSetLevelFn(t,a===i?o:i)
return p("div",{className:"s-layout-menu-field layout-level-button layout-checkbox dark-bg",onClick:s},void 0,p("input",{type:"checkbox",checked:a===i,onChange:s}),p("span",{},void 0,n))}}},{key:"_renderLayoutButtons",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l,o=this._levelKeys[e],a=this._getKeysByLevel(e)
if(o&&a.length>=2){var r=this.getButtonClassMapping()[e]
return p(K.default,{keys:a,selectedKey:o,textMapping:i,className:r,labelText:t,onSelect:function(t){return n._getSetLevelFn(e,t)()}})}}},{key:"render",value:function(){var t=this._getLayoutStatus(),n=this.props,i=n.layoutVariation,o=n.themeName,a=this.state.showLayoutOptions,r=this.getRotationKeys(),s=r[this._getLayoutIndex()],l="ion"===o||"persona"===o||"perspective"===o||"footer"===this.sectionName||/.*wide$/.test(i)&&"grid"===this.sectionName,u=this.hideAdvancedOptions||!1||l&&this.showBaseRotationDropdown,c=p(N.default,{className:"center clickable small title layout-button",onTap:this._clickRotateLayout,rel:"tooltip-left",title:"padding"===this.sectionName?"":e("Editor|Click to change layouts")},void 0,p("span",{},void 0,this.buttonTitle||e("Layout"),t&&!a&&p("span",{className:"layout-status"},void 0,t)))
if(!this.props.layoutOptions)return null
if(!a&&l&&!this.getRotationKeys().length&&"grid"!==this.sectionName)return null
var d=(0,T.default)("s-component s-layout",{advanced:!u,opened:a,closed:!a})
return g.default.createElement("div",{ref:"componentDOM",className:d},p("div",{className:"s-component-editor dark-bg"},void 0,u?c:p("div",{className:"layout-button-wrapper"},void 0,c,p(N.default,{className:"advanced-options-button",rel:"tooltip-left",title:e("Editor|More layout options!"),onClick:this._toggleLayoutOptions},void 0,e("Editor|Advanced"),p("i",{className:"fa fa-angle-down",style:{marginLeft:"5px"}}))),!u&&p(k.default,{},void 0,a&&p(F.default,{component:_.default.div,className:"layout-panel"},void 0,this.showBaseRotationDropdown&&p($.BaseRotationDropDown,{selectedKey:s,rotationKeys:this.getRotationKeys(),onChangeKey:this._onChangeRotationKey}),this.renderLayoutOptions&&this.renderLayoutOptions(),!l&&p(J,{skipS5Padding:"footer"===this.sectionName,updatePadding:this.props.updatePadding,currentPadding:this.props.padding,themeName:o}),p("div",{className:"save-button green s-btn small",onClick:this._onClickSave},void 0,e("Editor|Save"))))))}}])
return n}(g.default.Component))||d}).call(t,n(3))},2136:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),s=n(2135),l=function(e){function t(e){i(this,t)
var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.sectionName="padding"
return n}a(t,e)
r(t,[{key:"getRotationKeys",value:function(){return[]}}])
return t}(s.BaseLayoutButton)
t.default=(0,s.connectToStores)(l)
e.exports=t.default},2137:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=i(r),l=n(2),u=i(l),c=n(17),d=i(c),f=n(397),p=i(f),m=!1
t.default=d.default.create({displayName:"ItemTextGroup",propTypes:{section:u.default.object.isRequired,itemBinding:u.default.object.isRequired,className:u.default.string,binding:u.default.object.isRequired,upperChildrenPosition:u.default.bool},shouldComponentUpdateOverride:function(){return!0},renderChildren:function(e){return a("div",{className:e},void 0,this.props.children)},_onChange:function(){if(this.props.onChange)return this.props.onChange()},render:function(){var e=void 0,t=void 0,n=void 0,i=this.props.section,r=this.props.itemBinding,l=null==this.props.showItemSubtitle||this.props.showItemSubtitle,u=this.props.deprecateItemSubtitle,c=this.props.upperChildrenPosition,d=null!=this.props.className?this.props.className:"",f=this.props.hideTextGroupTitle
if(!i)throw new Error("ItemTextGroup is expecting a section prop!")
if(!r)throw new Error("ItemTextGroup is expecting an itemBinding prop!")
if(l){var h=i.getThemeFeature("itemSubtitleDefaultStyle"),g=h?{defaultStyle:h}:g={}
n=a("div",{className:"s-item-subtitle"},void 0,s.default.createElement(p.default,o({tagName:"h6",textType:"body"},g,i.getComponentProps("text2",r),{onChange:this._onChange})))
e="text3"
t="text1 text2 text3"}else{n=null
e="text2"
t="text1 text2"}var v=i.sbUniformTextAlignment(t,{parentBinding:r})
return i.sbAnyHasContent(t,{parentBinding:r})||this.props.children?a("div",{className:"s-item-text-group "+d},void 0,c&&this.renderChildren(v),i.sbHasContent("text1",{parentBinding:r})&&!f&&a("div",{className:"s-item-title"},void 0,s.default.createElement(p.default,o({tagName:"h3",textType:"heading"},i.getComponentProps("text1",r),{onChange:this._onChange}))),function(){if(l){if(!u)return n
!m&&i.sbHasContent("text2",{parentBinding:r,showOnly:!1})&&(m=!0)
if(m)return n}}(),a("div",{className:"s-item-text"},void 0,s.default.createElement(p.default,o({tagName:"div",textType:"body"},i.getComponentProps(e,r),{onChange:this._onChange}))),!c&&this.renderChildren(v)):null}})
e.exports=t.default},2138:function(e,t,n){"use strict"
function i(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n
return e}function o(){return v}function a(e){return Object.assign({},v,e)}function r(e,t,n){var i=(0,g.getThemeFeature)("narrowMedia")&&11!==e,o=i?14:16,r=16,s=i?e-1:e,l=i?8:s,u=i?10:16
if(11===e)u=l=14
else if("onyx_new"===y&&"right"===t){o=15
u=15}if("persona"===y){o=12
r=12
u=12}var c=(0,g.generateColumnClassWithOffset)(s,o,r),d=(0,g.generateColumnClass)(o-s),f=(0,g.generateColumnClassWithOffset)(l,l,r),p=(0,g.generateColumnClassWithOffset)(u,u,r),m="half-offset-right",h="half-offset-left"
11!==s&&9!==s||(m=h="")
if("persona"===y)switch(t){case"right":return function(){return a({repeatableClass:"s-media-right s-layout-mediaRight",innerItemClass:(0,g.generateColumnClass)(12),mediaClass:c+" s-right-in-row right omega",singleMediaClass:f+" s-right-in-row right alpha omega",textClass:d+" s-left-in-row right alpha",singleTextClass:p+" s-left-in-row right alpha omega",textInnerClass:m,buttonClass:n?"s-text-button":""})}
case"alt":return function(){return a({repeatableClass:"s-media-alt s-layout-alt",innerItemClass:(0,g.generateColumnClass)(12),mediaClass:function(e,t){return c+" "+(t%2?"s-right-in-row right omega":"s-left-in-row alpha")},singleMediaClass:function(e,t){return f+" "+(t%2?"s-right-in-row right alpha omega":"s-left-in-row alpha omega")},textClass:function(e,t){return d+" "+(t%2?"s-left-in-row right alpha":"s-right-in-row omega")},singleTextClass:function(e,t){return p+" "+(t%2?"s-left-in-row right alpha omega":"s-right-in-row alpha omega")},textInnerClass:function(e,t){return t%2?m:h},buttonClass:n?"s-text-button":""})}}switch(t){case"left":return function(){return a({repeatableClass:"s-media-left s-layout-mediaLeft",mediaClass:c+" s-left-in-row",singleMediaClass:f+" s-left-in-row",textClass:d+" s-right-in-row",singleTextClass:p+" s-right-in-row",textInnerClass:h,buttonClass:n?"s-text-button":""})}
case"right":return function(){return a({repeatableClass:"s-media-right s-layout-mediaRight",mediaClass:c+" s-right-in-row right",singleMediaClass:f+" s-right-in-row right",textClass:d+" s-left-in-row right",singleTextClass:p+" s-left-in-row right",textInnerClass:m,buttonClass:n?"s-text-button":""})}
case"alt":return function(){return a({repeatableClass:"s-media-alt s-layout-alt",mediaClass:function(e,t){return c+" "+(t%2?"s-right-in-row right":"s-left-in-row")},singleMediaClass:function(e,t){return f+" "+(t%2?"s-right-in-row right":"s-left-in-row")},textClass:function(e,t){return d+" "+(t%2?"s-left-in-row right":"s-right-in-row")},singleTextClass:function(e,t){return p+" "+(t%2?"s-left-in-row right":"s-right-in-row")},textInnerClass:function(e,t){return t%2?m:h},buttonClass:n?"s-text-button":""})}}}function s(e){function t(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
return{left:r(e.mediaColumns,"left",t),right:r(e.mediaColumns,"right",t),alt:r(e.mediaColumns,"alt",t)}}return{text:t(),button:t(!0)}}function l(e,t){var n=e,i=n.getRepeatableBinding("repeatable1").sub(t),o=""
o=(0,g.getThemeFeature)("leftAlignColumnsMedia")?"text1":"text1 text2 text3"
var a=n.sbUniformTextAlignment(o,{parentBinding:i})
return"glow"===y?"s-mhi "+a+" fourteen columns offset-one":"s-mhi "+a}function u(e){return e<2?"s-mh":function(t){var n=t,i=n.getRepeatableBinding("repeatable1"),o=""
if((0,g.getThemeFeature)("leftAlign")){i.get().size<e&&(o=n.sbUniformTextAlignment("text1 text2"))}return"s-mh "+o}}function c(e){return{text:function(){return a(e)},button:function(){return a(h.default.extend({},e,{buttonClass:"s-text-button"}))}}}function d(e){return c({repeatableClass:u(e.columnsNum),itemClass:(0,g.generateItemClassByColumnsNum)(e.columnsNum),mediaClass:l})}function f(){return c({repeatableClass:u(1)+" s-layout-normal",innerItemClass:(0,g.generateItemClassByColumnsNum)(1).replace("no-float","")+("persona"===y?"":" center"),mediaClass:l})}Object.defineProperty(t,"__esModule",{value:!0})
var p,m=n(1),h=function(e){return e&&e.__esModule?e:{default:e}}(m),g=n(1792),v={repeatableClass:"",itemClass:"",innerItemClass:"",mediaClass:"",singleMediaClass:"",textClass:"",singleTextClass:"",textInnerClass:"",buttonClass:""},y=(0,g.getThemeName)(),b={two:d({columnsNum:2}),three:d({columnsNum:3}),four:d({columnsNum:4}),five:d({columnsNum:5}),six:d({columnsNum:6})},_={default:{col:b,row:{small:s({mediaColumns:4}),medium1:s({mediaColumns:6}),medium2:s({mediaColumns:8}),large:s({mediaColumns:10})},media:{center:f(),left:{text:r(11,"left"),button:r(11,"left",!0)},right:{text:r(11,"right"),button:r(11,"right",!0)},alt:{text:r(11,"alt"),button:r(11,"alt",!0)}}},persona:{col:b,row:{small:s({mediaColumns:3}),medium1:s({mediaColumns:4}),medium2:s({mediaColumns:6}),large:s({mediaColumns:8})},media:{center:f(),left:{text:r(9,"left"),button:r(9,"left",!0)},right:{text:r(9,"right"),button:r(9,"right",!0)},alt:{text:r(9,"alt"),button:r(9,"alt",!0)}}},perspective:function(){var e={col:{three:{text:function(){return a({itemClass:"s-persp-column third"})},button:function(){return a({itemClass:"s-persp-column third",buttonClass:"s-text-button s-persp-column"})}}},row:{large:{text:function(){return a({mediaClass:"s-persp-column half",textClass:"s-persp-column half"})},button:function(){return a({mediaClass:"s-persp-column half",textClass:"s-persp-column half",buttonClass:"s-text-button"})}}},media:{center:f()}}
return{center:e,mediaLeft:e,mediaRight:e}}()},w=(0,g.getLayoutMapping)(_),C={default:(p={"columns-2col":"col-two-text","columns-3col":"col-three-text","columns-4col":"col-four-text","columns-5col":"col-five-text","columns-6col":"col-six-text","columns-":"col-five-text","media-normal":"media-center-text","media-mediaLeft":"media-left-text","media-mediaRight":"media-right-text","media-alt":"media-alt-text","media-":"media-center-text"},i(p,"media-alt","media-alt-text"),i(p,"rows-mediaLeft","row-medium1-text-left"),i(p,"rows-mediaRight","row-medium1-text-right"),i(p,"rows-alt","row-medium1-text-alt"),i(p,"rows-","row-medium1-text-left"),p),perspective:{"columns-mediaLeft":"mediaLeft-col-three-text","columns-mediaRight":"mediaRight-col-three-text","columns-center":"center-col-three-text","columns-":"mediaLeft-col-three-text","rows-mediaLeft":"mediaLeft-row-large-text","rows-mediaRight":"mediaRight-row-large-text","rows-center":"center-row-large-text","rows-":"mediaLeft-row-large-text","media-mediaLeft":"mediaLeft-media-center-text","media-mediaRight":"mediaRight-media-center-text","media-center":"center-media-center-text","media-":"mediaLeft-media-center-text"}},x={default:{col:function(e){return"col-three-"+e},row:function(e){return"row-medium1-"+e+"-left"},media:function(e){return"media-center-"+e}},perspective:{col:function(e,t){return e+"-col-three-"+t},row:function(e,t){return e+"-row-large-"+t},media:function(e,t){return e+"-media-center-"+t}}}
t.default={getDefaultLayoutKey:function(e,t,n){var i=void 0
t=t||""
if((w[e]||w.default)[t])return t
n&&(i=(C[e]||C.default)[n+"-"+t])
if(!i){var o=-1!==t.indexOf("button")?"button":"text",a="perspective"===e?1:0,r=t.split("-"),s=(x[e]||x.default)[r[a]]
i="perspective"===e?s?s(r[0],o):"":s?s(o):""}i||(i=Object.keys(w[e]||w.default)[0])
return i},getLayout:function(e,t){return(w[e]||w.default)[t]||v||o},getLayoutOptions:function(e){return _[e]||_.default}}
e.exports=t.default},2139:function(e,t,n){"use strict";(function(i){function o(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l=n(0),u=a(l),c=n(2),d=a(c),f=n(90),p=a(f),m=n(492),h=a(m),g=n(1793),v=a(g),y=n(34),b=a(y),_=n(5),w=a(_),C=n(1),x=a(C),k=n(17),S=a(k),N=n(59),E=(a(N),n(58)),P=(a(E),n(7)),O=a(P),T=n(8),L=(a(T),n(400)),M=a(L),I=n(29),B=o(I),D=n(1177),j=(a(D),n(56)),A=o(j),H=n(46),R=a(H),F=n(61),V=a(F),U=n(474),z=a(U),W=n(1176),G=a(W),K=n(478),$=a(K),q=n(1870),Y=a(q),J=n(503),X=a(J),Q=n(1210),Z=a(Q),ee=n(477),te=(a(ee),n(137)),ne=a(te),ie=n(1794),oe=n(1208),ae=(a(oe),n(22)),re=a(ae),se=n(75),le=a(se),ue={data:{url:$.default.url,textColor:d.default.oneOf(["dark","light","overlay"]),sizing:d.default.oneOf(["cover","contain","tile","center"]),backgroundVariation:d.default.string,videoUrl:d.default.string,videoHtml:d.default.string,stockKey:d.default.string,binding:d.default.object,h:d.default.number,w:d.default.number,s:d.default.number,storageKey:d.default.string,storage:d.default.oneOf(["ali","c","qn","s"]),format:d.default.oneOf(["jpg","jpeg","png","gif","bmp","ico"]),bgClassNames:d.default.array,userClassName:d.default.string,focus:d.default.object},designer:{size:d.default.string,assetType:d.default.string,minimal:d.default.bool,allowColors:d.default.bool,footerSection:d.default.bool}},ce=function(){return{data:{url:"",textColor:"light",sizing:"cover",backgroundVariation:"",videoUrl:"",videoHtml:"",userClassName:"",bgClassNames:[]},designer:{size:"background",assetType:"background",minimal:!1,allowColors:!0,footerSection:!1}}},de=S.default.createPageComponent({displayName:"BackgroundEditor",mixins:[(0,V.default)("editor"),G.default,z.default],bobcatPropTypes:ue,getBobcatDefaultProps:ce,componentWillMount:function(){this.backgroundItemSelectionHandlers={image:null,video:null}
this.initMeta({currentType:O.default.getInChina()||!this._hasVideoBg()?"image":"video",showVideoPanel:!1,showFocusPanel:!1,showFocusIndicator:!1,deltaPosition:{x:0,y:0},imageSize:{width:0,height:0,naturalWidth:0,naturalHeight:0}})},componentDidMount:function(){this.getData("style")&&this.updateData({sizing:this.getData("style")})
if(this.getData("selectedClassName")){var e=this.getData("selectedClassName");-1!==e.indexOf("strikingly-dark-text")?this.updateData({textColor:"dark"}):-1!==e.indexOf("strikingly-text-overlay")?this.updateData({textColor:"overlay"}):this.updateData({textColor:"light"})}},componentDidUpdate:function(e){"normal"===e._state&&"editor"===this.props._state&&(0,w.default)(this.refs.componentDOM).closest(".s-section-editor-wrapper").addClass("background-editor-opened")
if("editor"===e._state&&"normal"===this.props._state){(0,w.default)(this.refs.componentDOM).closest(".s-section-editor-wrapper").removeClass("background-editor-opened")
this._setShowVideoPanel(!1)
this._setShowFocusPanel(!1)}},componentWillUnmount:function(){},_hasImage:function(){var e=this.props,t=e.wasMinimal,n=(e.defaultValue,e.useImage)
if(!0===n)return!0
if(!1===n)return!1
if(void 0===n){if(t&&!O.default.getBackgroundForAllSections())return!1
var i=A.createImage(this.dtProps).getUrl(this.dsProps.size)
this._dataBeforePreview&&(i=A.createImage(this._dataBeforePreview).getUrl(this.dsProps.size))
return B.imageHasContent(i)}},_hasVideoBg:function(){var e=this.dtProps.videoHtml
this._dataBeforePreview&&(e=this._dataBeforePreview.videoHtml)
return Boolean(e)},_hasOverlay:function(){return"overlay"===this.dtProps.textColor},_needToShowRemoveButton:function(){return this._hasImage()||this._hasVideoBg()},_changePositionOfAddVideoPanel:function(){var e=(0,w.default)(this.refs.componentDOM),t=e.find(".bg-video-panel"),n=e.find(".add-video-btn")
t.css({top:n.closest(".clearfix").position().top-31+"px"})},_storePreviewData:function(){re.default.isBackgroundPreviewOn=!0
this.updateMeta({isPreview:!0})
this._dataBeforePreview=this.getDefaultBinding().toJS()},_clearPreviewData:function(){re.default.isBackgroundPreviewOn=!1
this.updateMeta({isPreview:!1})
this._dataBeforePreview&&(this._dataBeforePreview=null)},_restorePreviewData:function(){re.default.isBackgroundPreviewOn=!1
this.updateMeta({isPreview:!1})
if(this._dataBeforePreview){this.updateData(R.default.deleteMeta(this._dataBeforePreview))
this._dataBeforePreview=null}},_getImageProps:function(){return x.default.extend({},this.props,{storePreviewData:this._storePreviewData,clearPreviewData:this._clearPreviewData,restorePreviewData:this._restorePreviewData,showImageOptions:this._hasImage()&&!this._hasVideoBg(),showDefaultColor:this._isAllowUserClassName()})},_isAllowUserClassName:function(){return!(!this.dtProps.bgClassNames.length||!this.dsProps.allowColors)},_getVideoProps:function(){return x.default.extend({},this.props,{storePreviewData:this._storePreviewData,clearPreviewData:this._clearPreviewData,restorePreviewData:this._restorePreviewData,hasVideo:this._hasVideoBg(),changePositionOfAddVideoPanel:this._changePositionOfAddVideoPanel})},onSetType:function(e){this._onClickSwitchType(e)},_onChangeUrlByAdmin:function(e){this.updateData({url:e.target.value})},_onChangeOverlayByAdmin:function(e){this.updateData({textColor:e.target.checked?"light":"overlay"})
this.savePage()},_onClickSwitchType:function(e){this._setCurrentType(e)
this.forceUpdate()},_onClickRemove:function(){this.updateData(Object.assign({},(0,ie.dataForEmptyBackground)(),{useImage:!1}))
this._clearPreviewData()
this.savePage()},_onClickSave:function(){this.savePage()
this.updateState("normal")},_notifyNative:function(){return null},_rotateClassNames:function(e){var t=this.dtProps,n=t.bgClassNames,i=t.userClassName,o=""
if(i){var a=n.indexOf(i)
o=M.default.getSectionBackgroundByIndex(a+1,n)}else o=n[e]
this.updateData({userClassName:o})},_onClickChangeColor:function(){var e=(0,w.default)(this.refs.componentDOM).closest(".s-section"),t=e.css("backgroundColor"),n=""
this._rotateClassNames(0)
n=e.css("backgroundColor")
t===n&&this._rotateClassNames(1)
this.savePage()},_onToggleCompression:function(){this.updateData({noCompression:!this.props.noCompression})},onSetBackgroundItemSelectionHandlers:function(e,t){this.backgroundItemSelectionHandlers[e]=t
this.forceUpdate()},renderNativeWeb:function(){var e=this,t=this._hasImage(),n=t?{position:"static"}:{}
return u.default.createElement("div",{className:"s-component s-background",ref:"componentDOM",style:n},t?r("div",{className:"s-background-editor-wrapper",onClick:function(t){return e._notifyNative(t,ne.default.BACKGROUND_CLICK_MESSAGE)}}):r("div",{className:"s-component-editor"},void 0,r("div",{className:"native-add-background-button",onClick:function(t){return e._notifyNative(t,ne.default.CLICK_ADD_BACKGROUND_MESSAGE)}},void 0,i("Editor|Background"))))},renderMinimalEditor:function(){return u.default.createElement("div",{className:"s-component s-background",ref:"componentDOM"},r("div",{className:"s-component-editor minimal-size",title:i("Change background color"),onClick:this._onClickChangeColor},void 0,r("div",{className:"title clickable"},void 0,r("div",{className:"s-current-bg-thumbnail "+this.dtProps.userClassName}))))},renderFullBackgroundEditor:function(){var e=this,t=p.default,o=b.default.DOM.input,a=n(2172),l=n(2175),c=O.default.getInChina(),d=O.default.getIsSxl(),f=this._getCurrentType(),m=le.default.isAdmin(),g=le.default.isSupport(),y=this.isIframeEditing()
return u.default.createElement("div",{ref:"componentDOM",className:"s-component s-background"+this.addIframeEditingClass()},r("div",{className:"s-component-editor dark-bg",onClick:this.onToggleMobileViewEditorBox},void 0,r(v.default,{className:"title small center clickable"+(y?" hidden":""),onTap:this.toggleEditor},void 0,this.isState("editor")?r("div",{className:"minus"},void 0,r("i",{className:"entypo-down-open-mini"})):r("div",{className:"plus"},void 0,r("i",{className:"entypo-right-open-mini"})),i("Background")),r(t,{},void 0,this.isState("editor")?r(Y.default,{component:h.default.div,className:"main-editor"},void 0,c||d?null:r("div",{className:"s-layout-menu-field"},void 0,r(X.default,{labelLeft:i("IMAGE"),labelRight:i("VIDEO"),checkedLeft:"image"===f,checkedRight:"video"===f,onClickLeft:function(){return e._onClickSwitchType("image")},onClickRight:function(){return e._onClickSwitchType("video")}})),u.default.createElement(a,s({visible:"image"===f},this._getImageProps(),{onSetBackgroundItemSelectionHandlers:this.onSetBackgroundItemSelectionHandlers,backgroundItemSelectionHandlers:this.backgroundItemSelectionHandlers})),u.default.createElement(l,s({visible:"video"===f},this._getVideoProps(),{onSetBackgroundItemSelectionHandlers:this.onSetBackgroundItemSelectionHandlers,backgroundItemSelectionHandlers:this.backgroundItemSelectionHandlers})),this._needToShowRemoveButton()?r("div",{className:"clearfix mb"},void 0,r("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickRemove},void 0,i("Remove"))):null,r("div",{className:"clearfix"},void 0,r("div",{className:"s-btn green small done-button no-margin",onClick:this._onClickSave},void 0,i("Save"))),m||g?r("div",{style:{overflow:"hidden"}},void 0,r("div",{className:"separator"},void 0,r("hr",{})),"ADMIN ONLY:",r("br",{}),r(o,{type:"text",name:"url",value:this.dtProps.url,onChange:this._onChangeUrlByAdmin}),this._hasVideoBg()?r("div",{},void 0,r(o,{type:"checkbox",checked:!this._hasOverlay(),onChange:this._onChangeOverlayByAdmin}),"Check to remove overlay"):"image"===f&&r("div",{style:{marginTop:"30px"},rel:"tooltip-left",title:i("Editor|Notice: No compression will make image slower to load!")},void 0,r(Z.default,{label:"No compression",checked:this.props.noCompression,onToggle:this._onToggleCompression}))):null):null)))},render:function(){var e=O.default.getBackgroundForAllSections()
return this.dsProps.minimal?e&&!this.dsProps.footerSection?this.renderFullBackgroundEditor():this._isAllowUserClassName()?this.renderMinimalEditor():null:this.renderFullBackgroundEditor()}})
de.bobcatPropTypes=ue
de.getBobcatDefaultProps=ce
t.default=de
e.exports=t.default}).call(t,n(3))},2140:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),u=n(0),c=i(u),d=n(33),f=i(d),p=function(e){function t(){o(this,t)
return a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}r(t,e)
l(t,[{key:"render",value:function(){var e=this.props,t=e.keys,n=e.selectedKey,i=e.textMapping,o=e.className,a=e.onSelect,r=e.labelText
return s("div",{className:"s-layout-menu-field layout-level-button dark-bg "+(o||"")},void 0,r&&s("div",{className:"s-layout-menu-label"},void 0," ",r," "),s("div",{},void 0,t.map(function(e){return s("div",{className:(0,f.default)("s-btn small dark-gray no-margin",{selected:n===e}),onClick:function(){return a(e)}},e,i(e))})))}}])
return t}(c.default.Component)
t.default=p
e.exports=t.default},2141:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=i(r),l=n(13),u=i(l),c=n(5),d=i(c),f=n(8),p=i(f),m=n(1175),h=i(m),g=n(1201),v=i(g),y=n(1866),b=i(y),_=n(1865),w=i(_),C=n(2137),x=i(C),k=n(2134),S=i(k),N={mixins:[S.default],displayName:"NewMediaSection",componentWillMount:function(){var e=p.default.getThemeName(),t=this._getLayoutVariation(),i=this.getDefaultBinding().get("template_name")
t.split("-").length>=2&&("perspective"===e?["mediaLeft","mediaRight","center"].includes(t.split("-")[0])||(t="center-"+t):["mediaLeft","mediaRight","center"].includes(t.split("-")[0])&&(t=t.split("-").slice(1).join("-")))
var o=n(2138),a="new_media"===i?"":i
this._getLayoutBinding().sub("layout_variation").set(o.getDefaultLayoutKey(e,t,a))},componentDidUpdate:function(){if(-1===this._getLayoutVariation().indexOf("col")){(0,d.default)(u.default.findDOMNode(this)).find(".s-mh-nudge").css({"padding-top":0});(0,d.default)(u.default.findDOMNode(this)).find(".s-item-media-wrapper").css({"line-height":"","min-height":""})}},_getLayoutOptions:function(){var e=p.default.getThemeName()
return n(2138).getLayoutOptions(e)},_getSectionType:function(){var e=p.default.getThemeName(),t=0
"perspective"===e&&(t=1)
var n=void 0
switch(this._getLayoutVariation().split("-")[t]){case"col":n="s-columns-section"
break
case"row":n="s-rows-section"
break
case"media":n="s-media-section"}return n},_getContentAlignmentClass:function(){return this.sbUniformTextAlignment("text1 text2")},_renderRepeatable:function(e){var t=this,i=n(2138),r=p.default.getThemeName(),l=this._getLayoutVariation(),u=this.getComponentBinding(e),c=this.getRepeatableBinding(e),d=this._getLayoutBinding(),f=void 0
"function"==typeof i.getLayout(r,l)&&(f=i.getLayout(r,l)(this))
var m=f,g=m.repeatableClass
"function"==typeof g&&(g=g(this))
var y=this.getComponentProps("repeatable1")
r=p.default.getThemeName()
var _=0
"perspective"===r&&(_=1)
var C="media"===this._getLayoutVariation().split("-")[_],k="fresh"===r&&"s-columns-section"===this._getSectionType(),S="s-rows-section"===this._getSectionType(),N=S&&this.getThemeFeature("verticalAlignRowsSection")
return s.default.createElement(b.default,o({className:g+("editor"===u.get("_state")?" s-arranging":"")},y),u.get("list").map(function(e,n){var i=c.sub(n),l={default:i,layout:d},u=t.sbHasContent("media1",{parentBinding:i}),p=t.sbAnyHasContent("text1 text2 text3",{parentBinding:i}),m=t.sbHasContent("button1",{parentBinding:i}),g="editor"!==t.getComponentBinding("button1",i).get("_state")&&!t.sbHasContent("button1",{parentBinding:i,showOnly:!1}),y=p||m&&f.buttonClass,b=f,_=b.itemClass,S=b.textClass,E=b.innerItemClass,P=b.mediaClass,O=b.singleMediaClass,T=b.singleTextClass,L=b.buttonClass,M=b.textInnerClass
"function"==typeof _&&(_=_(t,n))
"function"==typeof E&&(E=E(t,n))
E+=N?" s-rva":""
"function"==typeof P&&(P=P(t,n))
"function"==typeof O&&(O=O(t,n))
O=O||P
"function"==typeof S&&(S=S(t,n))
"function"==typeof T&&(T=T(t,n))
T=T||S
"function"==typeof L&&(L=L(t,n))
"function"==typeof M&&(M=M(t,n))
var I="s-item-media-wrapper "
I+=y?P:O
I+=N?" s-rva-media":""
S=u?S:T
S+=N?" s-rva-text":""
"glow"===r&&(S=S||"fourteen columns offset-one")
return s.default.createElement(w.default,o({className:_,index:n,binding:l},t._getRepeatableItemProps(c,n)),a("div",{className:"clearfix"},void 0,a("div",{className:E},void 0,u&&a("div",{className:I},void 0,a("div",{className:"s-item-media-group"},void 0,s.default.createElement(h.default,o({size:C?"large":"medium",isFreshColumn:k},t.getReduxComponentProps("media1",i))))),y&&a("div",{className:S},void 0,a(x.default,{deprecateItemSubtitle:C,section:t,itemBinding:i,binding:i,className:u?M:""},void 0,L&&m&&a("div",{className:L+(g?" s-placeholder-button":"")},void 0,s.default.createElement(v.default,o({},t.getComponentProps("button1",i),{smallButton:!0}))))))))}).toArray())},render:function(){return this.getTemplate().apply(this)}}
t.default=N
e.exports=t.default},2142:function(e,t,n){"use strict"
function i(){return c}function o(e){return Object.assign({},c,e)}function a(e){return{normal:e,full:e}}function r(e){return d[e]||d.default}Object.defineProperty(t,"__esModule",{value:!0})
var s=n(1),l=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(s),u=n(1792),c={outerContainerClass:"container",innerContainerClass:"sixteen columns",outerMediaClass:"",innerMediaClass:"",textClass:"",buttonClass:"",isSubtitleOnBottom:!0}
if("perspective"===(0,u.getThemeName)()){c.outerContainerClass="s-persp-container"
c.innerContainerClass="s-persp-column"}var d={default:{center:function(e){function t(e){return{innerMediaClass:"media-wrapper "+e.sbUniformTextAlignment("text1 text2"),buttonClass:"s-button-group "+e.sbUniformTextAlignment("text1 text2")}}return{subTop:a(function(n){return o(l.extend({},e,t(n),{isSubtitleOnBottom:!1}))}),bottom:a(function(n){return o(l.extend({},e,t(n),{}))}),right:a(function(n){return o(l.extend({},e,t(n),{outerMediaClass:"sixteen columns media-outer",textClass:"ten columns no-float",buttonClass:"six columns no-float s-button-group",outerContainerClass:"container s-layout-skinny",innerContainerClass:""}))})}}({})},perspective:{center:function(e){function t(e){return{innerMediaClass:"media-wrapper "+e.sbUniformTextAlignment("text1 text2"),outerContainerClass:"s-persp-container s-layout-center",buttonClass:"s-button-group "+e.sbUniformTextAlignment("text1 text2")}}return{subTop:a(function(n){return o(l.extend({},e,t(n),{isSubtitleOnBottom:!1}))}),bottom:a(function(n){return o(l.extend({},e,t(n),{}))})}}({})}},f=(0,u.getLayoutMapping)(d),p={default:{normal:"center-subTop-full",subBottom:"center-bottom-full",withMedia:"center-bottom-full",center:"center-bottom-normal",skinny:"center-right-normal",mediaTop:"center-bottom-normal"}},m={default:"center-subTop-normal"}
t.default={getDefaultLayoutKey:function(e,t){t=t||""
var n=(p[e]||p.default)[t];(f[e]||f.default)[t]&&(n=t)
n||(n=(0,u.getClosestKey)(r(e),t,3))
if(!n){t.indexOf("button")
n=m.default}return n},getLayout:function(e,t){return(f[e]||f.default)[t]||i},getLayoutOptions:r}
e.exports=t.default},2143:function(e,t,n){"use strict"
function i(){return d}function o(e){return Object.assign({},d,e)}function a(){var e="columns half-fixed no-float small-icons"
"perspective"===f&&(e="s-persp-column half-fixed no-float small-icons")
return o({itemClass:e,naturalImage:!0})}function r(e){var t=e.get().size,n=(0,c.getThemeFeature)("narrowMedia"),i=""
i=t<=1?n?"third":"sixteen":2==t?n?"third":"eight":3==t?"third":4==t?"four":"three"
"persona"===f&&(i="three")
"ion"===f&&(i="four")
i+=" columns half-fixed no-float"
return o({itemClass:i,naturalImage:!1})}function s(e,t){var n=t.get().size,i="half";(3===n&&"center"===e||n>4)&&(i="third")
i+=" half-fixed s-persp-column"
return o({itemClass:i,naturalImage:!1})}Object.defineProperty(t,"__esModule",{value:!0})
var l=n(1),u=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(l),c=n(1792),d={itemClass:"columns half-fixed no-float",naturalImage:!0},f=(0,c.getThemeName)(),p={default:{col:r,natural:a},perspective:function(){var e=function(e){return{col:u.curry(s)(e)}}
return{center:e("center"),mediaLeft:e("left"),mediaRight:e("right")}}()},m=(0,c.getLayoutMapping)(p),h={perspective:{mediaLeft:"mediaLeft-col",mediaRight:"mediaRight-col",center:"center-col"}}
t.default={getDefaultLayoutKey:function(e,t,n){var i=void 0
t=t||""
if((m[e]||m.default)[t])return t
n&&(i=(h[e]||h.default)[n+"-"+t])
i||(i=Object.keys(m[e]||m.default)[0])
return i},getLayout:function(e,t){return(m[e]||m.default)[t]||d||i},getLayoutOptions:function(e){return p[e]||p.default}}
e.exports=t.default},2144:function(e,t,n){"use strict"
function i(){return d}function o(e){return Object.assign({},d,e)}function a(e,t){return function(){var n="right"===e?"right":"",i="container s-rva s-layout-"+u.default.camelCase(t+"-"+e),a="noImage"!=e,r="",s="",l=""
if("noImage"===e)r="s-rva-text sixteen columns"
else{l="right"===e?"half-offset-left":"half-offset-right"
r="s-rva-text eight columns "+n
s="s-rva-media eight columns "+n}return o({layoutClass:i,textClass:r,textOffsetClass:l,mediaClass:s,type:t,showImage:a})}}function r(e){return{left:a("right",e),right:a("left",e),noImage:a("noImage",e)}}function s(e){return{left:{swap:function(){return o(Object.assign(r(e).left(),{type:e,swapTitle:!0}))},unswap:function(){return o(Object.assign(r(e).left(),{type:e,swapTitle:!1}))}},right:{swap:function(){return o(Object.assign(r(e).right(),{type:e,swapTitle:!0}))},unswap:function(){return o(Object.assign(r(e).right(),{type:e,swapTitle:!1}))}},noImage:{swap:function(){return o(Object.assign(r(e).noImage(),{type:e,showImage:!1,swapTitle:!0}))},unswap:function(){return o(Object.assign(r(e).noImage(),{type:e,showImage:!1,swapTitle:!1}))}}}}Object.defineProperty(t,"__esModule",{value:!0})
var l=n(1),u=function(e){return e&&e.__esModule?e:{default:e}}(l),c=n(1792),d={layoutClass:"",mediaClass:"",textClass:"",textOffsetClass:"",type:"",showImage:!0},f={button:{left:function(){return o({type:"button"})},right:function(){return o({type:"button"})},noImage:function(){return o({type:"button",showImage:!1})}},images:{left:function(){return o({type:"images"})},right:function(){return o({type:"images"})},noImage:function(){return o({type:"images",showImage:!1})}},signup:{left:function(){return o({type:"signup"})},right:function(){return o({type:"signup"})},noImage:function(){return o({type:"signup",showImage:!1})}}},p={button:s("button"),images:s("images"),signup:s("signup")},m={default:{button:r("button"),images:r("images"),signup:r("signup")},persona:f,perspective:f,glow:p},h=(0,c.getLayoutMapping)(m),g={default:{buttonRight:"button-left",signupRight:"signup-left",imagesRight:"images-left",buttonLeft:"button-right",signupLeft:"signup-right",imagesLeft:"images-right"}}
t.default={getDefaultLayoutKey:function(e,t,n){t=t||""
var i=(g[e]||g.default)[t];(h[e]||h.default)[t]&&(i=t)
if("glow"===e){i||(-1!==t.indexOf("button")?i="button-left-swap":-1!==t.indexOf("signup")?i="signup-left-swap":-1!==t.indexOf("images")&&(i="images-left-swap"))
i||"signup_form"!==n||(i="signup-noImage-swap")}else{i||(-1!==t.indexOf("button")?i="button-left":-1!==t.indexOf("signup")?i="signup-left":-1!==t.indexOf("images")&&(i="images-left"))
i||"signup_form"!==n||(i="signup-noImage")}i||(i=Object.keys(h[e]||h.default)[0])
return i},getLayout:function(e,t){return(h[e]||h.default)[t]||i},getLayoutOptions:function(e){return m[e]||m.default}}
e.exports=t.default},2145:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(1),o=(function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e}(i),n(1792)),a={itemClass:"columns half-fixed no-float"},r={default:["four","four","four","four","fifth","third","four","four","fifth"],persona:["three","three","three","three","four","four","three","three","four"]},s=(0,o.getThemeName)(),l=function(){return a},u=function(e){return Object.assign({},a,e)},c=function(e,t){var n=e
r[n]||(n="default")
var i=t-1
r[n][i]||(i=r[n].length-1)
return r[n][i]},d=function(e){return e.get().size},f=function(e){var t=d(e),n=[]
n.push(c(s,t))
"persona"===s?5==t||6==t||9==t?n.push("hide-linker-three"):n.push("hide-linker-four"):6==t?n.push("hide-linker-three"):7==t||8==t?n.push("hide-linker-four"):n.push("hide-linker-five")
n.push("columns")
n.push("no-float")
n.push("process-horizontal-layout")
return u({itemClass:n.join(" ")})},p=function(){var e=["eight"]
"perspective"===s?e.push("s-persp-column"):e.push("columns")
e.push("no-float")
e.push("process-vertical-layout")
return u({itemClass:e.join(" ")})},m={default:{horizontal:f,vertical:p}},h=(0,o.getLayoutMapping)(m),g={getDefaultLayoutKey:function(e,t){var n=Object.keys(h[e]||h.default)
return n.includes(t)?t:n[0]},getLayout:function(e,t){return(h[e]||h.default)[t]||a||l},getLayoutOptions:function(e){return m[e]||m.default},getItemSize:d}
t.default=g
e.exports=t.default},2146:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(2183),n(2131)),s=(n(2133),n(2132)),l=n(1864)
e.exports=function(){return o.createElement(s,i({className:"s-new-media-section s-section "+this._getSectionType()+"  "+this._getContentAlignmentClass()+" "+this._getPaddingClass()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(l,this.getBackgroundProps("background1")):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(r,{contentCheck:"repeatable1",section:this,binding:this.getDefaultBinding()})),"\n    ",this._renderRepeatable("repeatable1"),"\n  "))}},2147:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n
return e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),u=n(0),c=i(u),d=n(13),f=i(d),p=n(33),m=i(p),h="Select...",g=function(e){function t(e){a(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.state={selected:e.value||{label:e.placeholder||h,value:""},isOpen:!1}
n.mounted=!0
n.handleDocumentClick=n.handleDocumentClick.bind(n)
n.fireChangeEvent=n.fireChangeEvent.bind(n)
return n}s(t,e)
l(t,[{key:"componentWillReceiveProps",value:function(e){e.value&&e.value!==this.state.selected?this.setState({selected:e.value}):e.value||this.setState({selected:{label:e.placeholder||h,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1)
document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1
document.removeEventListener("click",this.handleDocumentClick,!1)
document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(e){this.props.onFocus&&"function"==typeof this.props.onFocus&&this.props.onFocus(this.state.isOpen)
if("mousedown"!==e.type||0===e.button){e.stopPropagation()
e.preventDefault()
this.props.disabled||this.setState({isOpen:!this.state.isOpen})}}},{key:"setValue",value:function(e,t){var n={selected:{value:e,label:t},isOpen:!1}
this.fireChangeEvent(n)
this.setState(n)}},{key:"fireChangeEvent",value:function(e){e.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(e.selected)}},{key:"renderOption",value:function(e){var t,n=(t={},o(t,this.props.baseClassName+"-option",!0),o(t,e.className,!!e.className),o(t,"is-selected",e===this.state.selected),t),i=(0,m.default)(n),a=e.value||e.label||e,r=e.label||e.value||e
return c.default.createElement("div",{key:a,className:i,onMouseDown:this.setValue.bind(this,a,r),onClick:this.setValue.bind(this,a,r)},r)}},{key:"buildMenu",value:function(){var e=this,t=this.props,n=t.options,i=t.baseClassName,o=n.map(function(t){if("group"===t.type){var n=c.default.createElement("div",{className:i+"-title"},t.name),o=t.items.map(function(t){return e.renderOption(t)})
return c.default.createElement("div",{className:i+"-group",key:t.name},n,o)}return e.renderOption(t)})
return o.length?o:c.default.createElement("div",{className:i+"-noresults"},"No options found")}},{key:"handleDocumentClick",value:function(e){this.mounted&&(f.default.findDOMNode(this).contains(e.target)||this.state.isOpen&&this.setState({isOpen:!1}))}},{key:"render",value:function(){var e,t,n,i=this.props,a=i.baseClassName,r=i.placeholderClassName,s=i.menuClassName,l=i.className,u=this.props.disabled?"Dropdown-disabled":"",d="string"==typeof this.state.selected?this.state.selected:this.state.selected.label,f=(0,m.default)((e={},o(e,a+"-root",!0),o(e,l,!!l),o(e,"is-open",this.state.isOpen),e)),p=(0,m.default)((t={},o(t,a+"-placeholder",!0),o(t,r,!!r),t)),h=(0,m.default)((n={},o(n,a+"-menu",!0),o(n,s,!!s),n)),g=c.default.createElement("div",{className:p},d),v=this.state.isOpen?c.default.createElement("div",{className:h},this.buildMenu()):null
return c.default.createElement("div",{className:f},c.default.createElement("div",{className:a+"-control "+u,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this)},g,c.default.createElement("span",{className:a+"-arrow"})),v)}}])
return t}(u.Component)
g.defaultProps={baseClassName:"Dropdown"}
t.default=g},2148:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=i(r),l=n(6),u=i(l),c=n(8),d=i(c),f=n(1201),p=i(f),m=n(1175),h=i(m),g=n(2131),v=i(g),y=n(2134),b=i(y),_={mixins:[b.default],displayName:"NewTitleSection",componentWillMount:function(){var e=d.default.getThemeName();["normal","subBottom","center","skinny"].includes(this._getLayoutVariation())&&"perspective"!==e&&this.getComponentBinding("media1").sub("image").merge(u.default.fromJS({url:"",thumbnail_url:"",s:null,storage:null,storageKey:null,format:null}))
var t=n(2142)
this._getLayoutBinding().sub("layout_variation").set(t.getDefaultLayoutKey(e,this._getLayoutVariation()))},_getLayoutOptions:function(){var e=d.default.getThemeName()
return n(2142).getLayoutOptions(e)},_getSectionType:function(){var e=d.default.getThemeName(),t="";-1!==this._getLayoutVariation().indexOf("full")&&(t+="s-section-full ")
"persona"===e&&(t+="cta"===this.getDefaultBinding().get("template_name")?"s-cta-section":"s-title-section")
return t},_renderContent:function(){var e=d.default.getThemeName(),t=n(2142),i=void 0
"function"==typeof t.getLayout(e,this._getLayoutVariation())&&(i=t.getLayout(e,this._getLayoutVariation())(this))
var r=i,l=r.outerContainerClass,u=r.innerContainerClass,c=r.outerMediaClass,f=r.innerMediaClass,m=r.textClass,g=r.buttonClass,y=r.isSubtitleOnBottom,b=this.sbHasContent("button1"),_=(this.sbHasContent("button1",{showOnly:!1}),this.sbHasContent("media1")),w="editor"!==this.getComponentBinding("button1").get("_state")&&!this.sbHasContent("button1",{showOnly:!1}),C="editor"!==this.getComponentBinding("media1").get("_state")&&!this.sbHasContent("media1",{showOnly:!1})
return a("div",{className:l,style:{zIndex:3}},void 0,a("div",{className:u},void 0,_&&c&&a("div",{className:c},void 0,a("div",{className:f},void 0,s.default.createElement(h.default,o({},this.getReduxComponentProps("media1"),{showBlackButton:!0})))),_&&!c&&a("div",{className:f+(C?" s-placeholder-button":"")},void 0,s.default.createElement(h.default,o({},this.getReduxComponentProps("media1"),{showBlackButton:!0}))),a(v.default,{className:m,contentCheck:"button1",subtitleOnTop:!y,section:this,binding:this.getDefaultBinding()}),b&&a("div",{className:g+(w?" s-placeholder-button":"")},void 0,s.default.createElement(p.default,this.getComponentProps("button1")))))},render:function(){return this.getTemplate().apply(this)}}
t.default=_
e.exports=t.default},2149:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=(o(r),n(2)),l=o(s),u=n(13),c=(o(u),n(2147)),d=o(c),f=n(471),p=o(f),m=n(17),h=o(m),g=n(68),v=o(g),y=n(134),b=(o(y),n(95)),_=o(b),w=function(e,t,n){return h.default.createPageComponent({mixins:[p.default.enableAfterUpdate()],displayName:t,bobcatPropTypes:{data:{text:l.default.string,category:l.default.oneOfType(l.default.string,l.default.number),binding:l.default.object}},getBobcatDefaultProps:function(){return{data:{category:"all"}}},componentWillReceiveProps:function(t){e.getCategories().length&&!e.isCategoryIdExist(t.category)&&this._onChangeCategory({value:"all"})},_createDropdownOptions:function(){var t=this,o=e.getCategories().map(function(e){return{value:e.id,label:e.id.toString()===t.props.category.toString()?a("div",{className:"option selected"},void 0,e.name):a("div",{className:"option"},void 0,e.name)}})
o.length&&"all"!==this.props.category&&o.unshift({value:"all",label:a("div",{className:"option"},void 0,i(n?"Portfolio|All Categories":"Ecommerce|All Categories"))})
return o},_getSelectedCategory:function(t){var o=e.getCategories(),a=o.find(function(e){return e.id.toString()===t.toString()})
return a?a.name:i(n?"Portfolio|All Categories":"Ecommerce|All Categories")},_onChangeCategory:function(e){this.updateData({category:e.value})
this.savePage()
n?_.default.track("Editor - Select Portfolio Section Category"):_.default.track("Editor - Select Ecommerce Section Category")},render:function(){this.observeBinding(e.getCategoriesBinding())
this.observeBinding(e.getSettingsBinding())
return this._createDropdownOptions().length<1?null:a("div",{className:"s-component s-category-selector"},void 0,a("div",{className:"s-component-editor",rel:"tooltip-left",title:i(n?"Portfolio|Select a category for this section.":"Ecommerce|Select a category for this section."),"data-original-title":i(n?"Portfolio|Select a category for this section.":"Ecommerce|Select a category for this section.")},void 0,a(d.default,{options:this._createDropdownOptions(),value:this._getSelectedCategory(this.props.category),onChange:this._onChangeCategory})))}})},C=w(v.default,"EcommerceCategorySelector")
C.createCategorySelector=w
t.default=C
e.exports=t.default}).call(t,n(3))},2150:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=(function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103}(),n(0)),r=i(a),s=n(2),l=i(s),u=n(5),c=i(u),d=n(1),f=i(d),p=n(17),m=i(p),h=n(95),g=i(h),v=n(1207),y=i(v),b=n(191),_=i(b),w=n(137),C=i(w),x=n(477),k=i(x),S=n(497),N=i(S),E=n(257),P=i(E),O=n(2151),T=i(O),L=n(56),M=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(L),I=n(1795),B=i(I),D=n(401),j=i(D),A=n(22),H=(i(A),n(46)),R=i(H),F=n(8),V=i(F),U=n(61),z=i(U),W=n(2188),G=i(W),K=void 0,$=function(){return f.default.extend({type:"Video"},P.default.Video().toJS())},q=function(){return f.default.extend({type:"Image"},P.default.Image().toJS())},Y=m.default.createPageComponent({displayName:"GalleryList",mixins:[(0,z.default)("editor")],bobcatPropTypes:{data:{binding:l.default.object,sources:l.default.object},designer:{layout:l.default.string,sortableContainment:l.default.string,eagerLoad:l.default.bool}},getBobcatDefaultProps:function(){return{designer:{sortableContainment:"parent"},data:{layout:"normal"},internal:{isArranging:!1}}},componentWillMount:function(){this.initMeta({selectedKey:""})
this._columnsNum=1
var e=_.default.get("forceGalleryItemsNumPerPage")
this._baseItemNum=null!=e?e:50
this._pagesNum=1
this._lastPagesNum=this._pagesNum
this._lastBaseItemNum=this._baseItemNum
this._resizeFn=f.default.debounce(this._resizeFn,10)
this._onClickAddImageFromTop=this._onClickAddImage.bind(this,"top")
this._onClickAddVideoFromTop=this._onClickAddVideo.bind(this,"top")},componentDidMount:function(){this._enableFancyBox()
if(-1===this.props.layout.indexOf("vertical")){this._resizeFn();(0,c.default)(window).on("resize",this._resizeFn)}},componentDidUpdate:function(){if(this._lastPagesNum!==this._pagesNum||this._lastBaseItemNum!==this._baseItemNum){this._enableFancyBox()
this._lastPagesNum=this._pagesNum
this._lastBaseItemNum=this._baseItemNum}},componentWillUnmount:function(){(0,c.default)(window).off("resize",this._resizeFn)},nativeAddImage:function(e){return this._addImage(M.createImage(e.image),e.newItemDirection)},_onNativeClickManage:function(){var e=this.getData("isManagingFromNative")||!1
return this.setData("isManagingFromNative",!e)},_isGalleryEmpty:function(){return 0===this.getData("sources").size},_updateLayoutMeta:function(){var e=(0,c.default)(this.refs.galleryListDOM),t=Math.min(6,Math.max(2,Math.floor(e.width()/180))),n=this._columnsNum,i={2:20,3:30,4:40,5:50,6:60}
if(t!==n){this._columnsNum=t
var o=_.default.get("forceGalleryItemsNumPerPage")
this._baseItemNum=null!=o?o:i[this._columnsNum]}return t!==n},_resizeFn:function(){this._updateLayoutMeta()&&this.forceUpdate()},_needToShowPagination:function(){return this.getData("sources").size>this._pagesNum*this._baseItemNum||1!==this._pagesNum},_onSelectItem:function(e){this.updateMeta(e,"selectedKey")},_onDeleteItem:function(e){return null!=this._visualDelete?this._visualDelete(e):this._deleteItem(e)},_isInNativeWeb:function(){return!1},_onClickNativeAddImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bottom",t=n(62)
k.default.setTarget(this)
return k.default.sendMessageToNative({type:C.default.GALLERY_ADD_IMAGE_MESSAGE,payload:N.default.convertToCamel(this.dtProps.type,t.dtPropsBuilder(this)),meta:Object.assign(t.buildMetaFromComponent(this),{direction:e})})},_getGalleryItemProps:function(e){var t=e.get("id"),n=this.getMeta("selectedKey")
return{binding:{default:e},_isAddInIframe:e.get("_isAddInIframe"),path:e._path,dataProps:P.default[e.get("type")](e.get()),onSelectItem:this._onSelectItem,deleteItem:this._onDeleteItem,key:t,selected:t===n,layout:this.props.layout,eagerLoad:this.props.eagerLoad,sideMenuOpened:y.default.getSideMenuOpenState().opened}},_getGalleryClassName:function(){var e=[];-1!==this.props.layout.indexOf("fullWidth")&&e.push("full-width")
Math.min(this._pagesNum*this._baseItemNum,this.getData("sources").size)
e.push("s-gallery-columns-"+this._columnsNum)
return e.join(" ")},_deleteItem:function(e){R.default.deleteRepeatItem({binding:this.getDefaultBinding().sub("sources"),index:e})
this.savePage()},_onReorder:function(e){var t=this.getDefaultBinding().sub("sources")
R.default.reorderRepeatable(e,t)
this.savePage()},_getNewImageProps:function(e){return e.dataToSave()},_addVideo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bottom",t=this.getData("sources"),n=$()
t=R.default.addRepeatItem({binding:this.getDefaultBinding().sub("sources"),newItem:n,position:"top"===e?0:null})
this.savePage()
return"top"===e?t.first().toJS():t.last().toJS()},_addImage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bottom",n=(this.getData("sources"),q())
f.default.extend(n,e.dataToSave())
R.default.addRepeatItem({binding:this.getDefaultBinding().sub("sources"),newItem:n,position:"top"===t?0:null})
this.savePage()
g.default.track("Editor - Upload Image Gallery")},_onClickAddImage:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bottom"
this.updateMeta("","selectedKey")
this._pendingTimestamp=null
return K.pick({mode:"multi",initialTabIdx:0,hideTabs:[2],handlers:{itemUploaded:function(n){return e._addImage(n,t)},itemSelected:function(n){return Array.from(n).map(function(n){return e._addImage(n,t)})}},pendingTimestamp:this._pendingTimestamp})},_onClickAddVideo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bottom",t=this._addVideo(e)
this.updateMeta(t.id,"selectedKey")},_onClickShowMore:function(){this._pagesNum+=1
this.forceUpdate()},_onClickShowLess:function(){this._pagesNum=1
this.forceUpdate();(0,c.default)("body").animate({scrollTop:(0,c.default)(this.refs.galleryListDOM).closest(".s-gallery-section").offset().top},1e3)
if("perspective"===V.default.getTheme().get("name"))return(0,c.default)(window).resize()},_enableFancyBox:function(){var e=this
return n.e(23).then(function(){n(493)
if(!e.isEditMode()){var t=j.default.GALLERY((0,c.default)(e.refs.galleryListDOM))
B.default.transformVideoSrc((0,c.default)(e.refs.galleryListDOM))
return t.fancybox(Object.assign({},B.default.onlyCloseBtnOpts,{baseTpl:B.default.getCustomArrowTpl(),caption:B.default.getCaption,beforeMove:B.default.indicatorBeforeMove,onInit:B.default.indicatorOnInit}))}}.bind(null,n)).catch(n.oe)},_renderForEditor:function(){},_renderForShow:function(){var e=this,t=this._baseItemNum*this._pagesNum,n=this.getDefaultBinding().sub("sources")
return n.get().map(function(i,a){if(a<t){n.sub(a)
return r.default.createElement(T.default,o({index:a},e._getGalleryItemProps(n.sub(a)),{key:i.get("id")}))}})},render:function(){return G.default.apply(this)}})
t.default=Y
e.exports=t.default},2151:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i
if("object"===("undefined"==typeof Reflect?"undefined":s(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i)
else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r)
return a>3&&r&&Object.defineProperty(t,n,r),r}
Object.defineProperty(t,"__esModule",{value:!0})
var u=n(0),c=n(2),d=n(13),f=n(1),p=n(5),m=n(76),h=n(120),g=n(474),v=n(56),y=(n(21),n(90)),b=n(99),_=(n(497),n(1208),n(137),n(192)),w=n(501),C=n(500),x=(n(404),{designer:{type:c.string,selected:c.bool,isArranging:c.bool,index:c.number,showType:c.string,layout:c.string,eagerLoad:c.bool,sideMenuOpened:c.bool,_isAddInIframe:c.bool},callbacks:{updateItemHeight:c.func,onSelectItem:c.func.isRequired,deleteItem:c.func.isRequired}}),k=function(e){function t(e){i(this,t)
var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n._afterClickCancel=function(){n._isEmptyItem()&&n._onClickDeleteButton(n.props.index)}
n._deselect=function(){n._isEmptyItem()?n._onClickDeleteButton(n.props.index):n.updateState("normal")}
n._isEmptyItem=function(){switch(n.getData("type")){case"Image":return f.isEmpty(n.getData("url"))
case"Video":return f.isEmpty(n.getData("url"))||""===n.getData("html")
default:return!1}}
n._onImageLoaded=function(e){var t=e.h&&e.w?e.h/e.w:0
if("Image"===n.getData("type")&&"verticalGallery"!==n.props.showType){var i=p(d.findDOMNode(n.refs.imageContent)),o=i.find("img"),a=void 0,r=void 0
if(t<1){a=100/t
o.css({position:"absolute",width:a+"%",top:0,left:-(a-100)/2+"%"})}else if(t>1){r=100*t
o.css({position:"absolute",width:"100%",top:-(r-100)/2+"%",left:0})}}}
n._getPureDataProps=function(){var e=n.props,t=e.dataProps,i=e.updateItemHeight,o=e.eagerLoad
return{dataProps:t,path:e.path,updateItemHeight:i,onImageLoaded:o?null:n._onImageLoaded,eagerLoad:o}}
n._getImageProps=function(){return Object.assign({afterUploaded:n._deselect,afterSelected:n._deselect,afterRemove:function(){return n._onClickDeleteButton(n.props.index)},afterSave:function(){n._deselect()
n.savePage()}},n._getPureDataProps())}
n._getVideoProps=function(){return Object.assign({afterRemove:function(){return n._onClickDeleteButton(n.props.index)},beforeUpload:function(){return n.setState({isLoading:!0})},uploadFailed:function(){return n.setState({isLoading:!1})},uploadSucceed:function(){n.setState({isLoading:!1})
n.setTimeout(function(){n._deselect()
n.savePage()},100)}},n._getPureDataProps())}
n._getThumbSize=function(){var e=n.props.layout
return-1!==e.indexOf("fullWidth")?"300x300#":-1!==e.indexOf("vertical")?"250x1000>":"200x200#"}
n._getDOMData=function(){var e={"data-type":n.getData("type").toLowerCase()}
switch(n.getData("type")){case"Image":e=Object.assign({href:v.createImage(n.getData()).getUrl("1920x9000>")},e)
case"Video":e=Object.assign({"data-html":n.getData("html"),"data-description":n.getData("description")},e)}return e}
n._getSaveButtonProps=function(){return{onClickCancel:function(){n.onClickCancel()},onClickSave:function(){n.setState({saveClicked:!0})}}}
n._restoreSaveClickedState=function(){n.setState({saveClicked:!1})}
n._getSaveButtonClickedProps=function(){return{saveClicked:n.state.saveClicked,restoreSaveClickedState:n._restoreSaveClickedState,fromType:"gallery"}}
n._onMouseEnterDeleteButton=function(){n.setState({showDeleteOverlay:!0})}
n._onMouseLeaveDeleteButton=function(){n.setState({showDeleteOverlay:!1})}
n._onClickDeleteButton=function(e){n.props.deleteItem(e)}
n.nativeDeleteButton=function(e){n._onClickDeleteButton(e.index)}
n._onClickEditItem=function(){if(!n.state.showDeleteOverlay){n.props.onSelectItem(n.getData("id"))
n.onClickEditor()}}
n._adjustEditorPosition=function(){if("verticalGallery"!==n.props.showType){var e=p(n.refs.itemEditor).find(".s-component-editor")
if(e.length){var t=n.props.sideMenuOpened?200:0,i=p(window).width()-e.width(),o=e.offset().left
o<t&&e.css("left","0")
o>i&&e.css({marginLeft:i-o+"px"})}}}
n.state={showDeleteOverlay:!1,isLoading:!1,saveClicked:!1}
return n}a(t,e)
r(t,[{key:"componentWillMount",value:function(){this.props.selected&&this.updateState("editor")}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){e.selected&&!this.props.selected&&this.isState("editor")&&this._deselect()}},{key:"_renderEditor",value:function(){return null}},{key:"render",value:function(){var e=this.isState("editor"),t=this.props,n=t.showType,i=t.style,o=t.index,a=t.layout,r=this.getData("type")
return u.createElement("div",{style:i,className:"s-component s-gallery-item "+("verticalGallery"===n?"vertical-item":""),"data-sorting-index":o},!1,u.createElement(y,null,!e&&u.createElement(b,{className:"s-component-content",key:this.getData("id")+"content"},u.createElement("div",{className:"image-wrapper"},u.createElement("a",Object.assign({className:"item"},this._getDOMData()),"Image"===r?u.createElement(w.default,Object.assign({ref:"imageContent",showType:n||"galleryItem",layout:a,thumbSize:this._getThumbSize()},this._getPureDataProps())):u.createElement(C.default.WaypointLazy,Object.assign({ref:"videoContent",showType:n||"galleryItem"},this._getPureDataProps())))))))}}])
return t}(_.default)
k.displayName="GalleryItem"
k.originalProps=x
k=l([m.decorate(g),m.decorate(h)],k)
t.default=k},2152:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=i(r),l=n(8),u=i(l),c=n(1866),d=i(c),f=n(1865),p=i(f),m=n(2137),h=i(m),g=n(1201),v=i(g),y=n(397),b=i(y),_=n(2134),w=i(_),C={mixins:[w.default],displayName:"NewTextSection",componentWillMount:function(){n(1792).removeOldBackgroundForText(this)
var e=u.default.getThemeName(),t=n(1868)
this._getLayoutBinding().sub("layout_variation").set(t.getDefaultLayoutKey(e,this._getLayoutVariation()))},_getLayoutOptions:function(){var e=u.default.getThemeName()
return n(1868).getLayoutOptions(e)},_getPositionLayout:function(){return this._getLayoutVariation().split("-")[1]},_getTitleOverlayClass:function(){var e=this._getLayoutVariation()
return this.sbAnyHasContent("text1 text2",{showOnly:!1})?-1!==e.indexOf("overlay")?"s-persp-overlay":-1!==e.indexOf("card")?"s-persp-card":void 0:""},_getSectionType:function(){u.default.getThemeName()
switch(this._getLayoutVariation().split("-")[0]){case"text":return"s-text-section"
case"box":return"s-info-section"}},_renderPerspectiveText:function(e){var t=this,n=this.getComponentBinding("repeatable1"),i=this._getLayoutBinding(),r=this.getRepeatableBinding("repeatable1"),l=r.get().size,u=function(n,l){if(l>=3)return null
var u=r.sub(l),c=e.itemClass,d=e.textClass
"function"==typeof c&&(c=c(t,l))
"function"==typeof d&&(d=d(t,l))
return s.default.createElement(p.default,o({className:c,binding:{default:u,layout:i},index:l},t._getRepeatableItemProps(r,l)),a("div",{className:"s-persp-column"},void 0,a("div",{className:d},void 0,a("div",{className:"s-title-group"},void 0,t.sbHasContent("text1",{parentBinding:u})&&a("div",{className:"s-title"},void 0,s.default.createElement(b.default,o({tagName:"h2",textType:"title"},t.getComponentProps("text1",u)))),a("div",{className:"s-item-text"},void 0,s.default.createElement(b.default,o({tagName:"div",textType:"body"},t.getComponentProps("text2",u))))))))},c=this.getComponentProps("repeatable1")
return s.default.createElement(d.default,o({className:(l>=3?"s-hide-add-button":"")+("editor"===n.get("_state")?" s-arranging":"")},c),n.get("list").map(u.bind(this)).toArray())},_renderRepeatable:function(e){var t=this,i=n(1868),r=u.default.getThemeName(),l=this.getComponentBinding(e),c=this._getLayoutBinding(),f=this.getRepeatableBinding(e),m=void 0
"function"==typeof i.getLayout(r,this._getLayoutVariation())&&(m=i.getLayout(r,this._getLayoutVariation())(this))
var g=m,y=g.repeatableClass
if("s-text-section"===this._getSectionType()&&"perspective"===r)return this._renderPerspectiveText(m)
var b=function(e,n){var i=f.sub(n),r={default:i,layout:c},l=m,u=l.itemClass,d=l.textClass,g=l.buttonClass
"function"==typeof u&&(u=u(t,n))
"function"==typeof d&&(d=d(t,n))
"function"==typeof g&&(g=g(t,n))
var y=t.sbHasContent("button1",{parentBinding:i}),b="editor"!==t.getComponentBinding("button1",i).get("_state")&&!t.sbHasContent("button1",{parentBinding:i,showOnly:!1})
return s.default.createElement(p.default,o({index:n,className:u,binding:r},t._getRepeatableItemProps(f,n)),a("div",{className:d},void 0,a(h.default,{section:t,itemBinding:i,binding:i,showItemSubtitle:!1},void 0,g&&y&&a("div",{className:g+(b?" s-placeholder-button":"")},void 0,s.default.createElement(v.default,o({},t.getComponentProps("button1",i),{smallButton:!0}))))))},_=this.getComponentProps("repeatable1")
return s.default.createElement(d.default,o({className:y+("editor"===l.get("_state")?" s-arranging":"")},_),f.get().map(b.bind(this)).toArray())},render:function(){return this.getTemplate().apply(this)}}
t.default=C
e.exports=t.default},2153:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),s=n(0),l=o(s),u=n(1),c=o(u),d=n(2),f=o(d),p=n(2131),m=o(p),h=n(398),g=o(h),v=n(1175),y=o(v),b=n(1201),_=o(b),w=n(1179),C=o(w),x=n(8),k=o(x),S=n(2134),N=o(S),E={mixins:[N.default],displayName:"NewHeroSection",propTypes:{eagerLoad:f.default.bool.isRequired,binding:f.default.object.isRequired},componentWillMount:function(){var e=k.default.getThemeName(),t=this._getLayoutVariation(),i=this.getDefaultBinding().get("template_name"),o=n(2144)
this._getLayoutBinding().sub("layout_variation").set(o.getDefaultLayoutKey(e,t,i))},_getLayoutOptions:function(){var e=k.default.getThemeName()
return n(2144).getLayoutOptions(e)},_getSectionType:function(){return this._showImage()?"s-hero-section":"s-signup-section"},_getLayout:function(){return c.default.camelCase(this._getLayoutVariation())},_getLayoutObj:function(){var e=n(2144),t=this._getLayoutVariation(),i=k.default.getThemeName(),o=void 0
"function"==typeof e.getLayout(i,t)&&(o=e.getLayout(i,t)(this))
return o},_getType:function(){return this._getLayoutObj().type},_showImage:function(){return this._getLayoutObj().showImage},_renderContent:function(){var e=this._getLayoutObj(),t=e.layoutClass,n=e.mediaClass,i=e.textClass,o=e.textOffsetClass,s=e.type,u=e.showImage,c=e.swapTitle,d="button"===s&&this.sbHasContent("button1"),f="button"===s&&this.sbHasContent("button1",{showOnly:!1}),p="images"===s&&this.sbAnyHasContent("image1 image2"),h=this.sbAnyHasContent("media1"),v=k.default.getThemeName()
return r("div",{className:t},void 0,r("div",{className:n+(h?"":" empty-media")},void 0,u&&l.default.createElement(y.default,this.getReduxComponentProps("media1"))),r("div",{className:i},void 0,r("div",{className:o},void 0,"glow"===v&&r(m.default,{section:this,binding:this.getDefaultBinding(),subtitleOnTop:c}),"glow"!==v&&r(m.default,{section:this,binding:this.getDefaultBinding()}),(d||p||"signup"===s)&&r("div",{className:(f?"":"empty-button")+" "+this.sbUniformTextAlignment("text1 text2",{parentBinding:this.getDefaultBinding()})},void 0,"button"===s&&r("div",{className:"s-button-group ib"},void 0,l.default.createElement(_.default,this.getComponentProps("button1"))),"signup"===s&&r("div",{className:"s-email-form-container"},void 0,l.default.createElement(C.default,a({signup:!0},this.getComponentProps("email1")))),"images"===s&&r("div",{className:"s-image-wrapper"},void 0,r("div",{className:"s-image-item"},void 0,l.default.createElement(g.default,a({},this.getReduxComponentProps("image1"),{eagerLoad:!0}))),r("div",{className:"s-image-item"},void 0,l.default.createElement(g.default,a({},this.getReduxComponentProps("image2"),{eagerLoad:!0}))))))))},render:function(){i("Editor|Hero")
i("Editor|Great for the top of a page. Add images, a button, or even a sign-up form.")
return this.getTemplate().apply(this)}}
t.default=E
e.exports=t.default}).call(t,n(3))},2154:function(e,t,n){"use strict";(function(i){function o(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var u,c,d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},p=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),m=n(0),h=a(m),g=n(13),v=a(g),y=n(1),b=a(y),_=n(5),w=a(_),C=n(76),x=a(C),k=n(2),S=(a(k),n(34)),N=a(S),E=n(33),P=a(E),O=n(2210),T=a(O),L=n(8),M=a(L),I=n(11),B=(a(I),n(1797)),D=a(B),j=n(1866),A=a(j),H=n(1865),R=a(H),F=n(2137),V=a(F),U=n(1872),z=(a(U),n(2132)),W=a(z),G=n(243),K=a(G),$=n(46),q=a($),Y=n(6),J=a(Y),X=n(56),Q=o(X),Z=n(61),ee=a(Z),te=n(29),ne=o(te),ie=n(2211),oe=(a(ie),n(1174)),ae=(a(oe),n(291)),re=a(ae),se=n(2131),le=a(se),ue=n(19),ce=a(ue),de=n(2134),fe=a(de),pe=n(2155),me=a(pe),he=n(1180),ge={mixins:[fe.default,(0,ee.default)("editor")],displayName:"GridSection",mapStateToProps:function(e){return{s5NavOverlapsContent:"s5-theme"===M.default.getThemeName()&&(0,he.getNavOverlapsContent)(e),s5NavHeight:D.default.get("navHeight")}},componentWillMount:function(){this._applyTitleGroupMigrationToData()
this._getOnToggleImageLinkEditorFn=re.default.boundParamsMemoizer(this._onToggleImageLinkEditor,this)
var e=M.default.getThemeName(),t=this._getLayoutVariation()
return this._getLayoutBinding().sub("layout_variation").set(me.default.getDefaultLayoutKey(e,t))},componentDidMount:function(){this._debouncedUpdateJQueryMeasurements=b.default.debounce(this._updateJQueryMeasurements,200);(0,w.default)(window).on("resize",this._debouncedUpdateJQueryMeasurements)
return this._updateJQueryMeasurements()},componentWillUnmount:function(){return(0,w.default)(window).off("resize",this._debouncedUpdateJQueryMeasurements)},componentDidUpdate:function(){this._updateJQueryMeasurements()},_updateJQueryMeasurements:function(){if(0===this.props.index){var e=(0,w.default)(".navigator").outerHeight()||(0,w.default)(".s-nav-inner").outerHeight()||0,t=(0,w.default)(v.default.findDOMNode(this)),n=parseFloat(t.find(".s-persp-container").css("padding-top"))||parseFloat(t.css("padding-top"))||0
this.updateMeta({navHeight:e,paddingTop:n})}},_getNavHeight:function(){var e=M.default.getThemeName(),t=void 0
t="s5-theme"===e?this.props.s5NavHeight:this.getMeta("navHeight")
return t},_applyTitleGroupMigrationToData:function(){var e=this.getDefaultBinding().sub("components")
if("Add subtitle"===e.get("text2").get("value")){var t={type:"RichText",defaultValue:!0,value:"",backupValue:null,version:null}
e.set("text1",J.default.fromJS(t))
e.set("text2",J.default.fromJS(t))}},_getLayoutOptions:function(){var e=M.default.getThemeName()
return me.default.getLayoutOptions(e)},_updateLayoutAndAdjustCellCount:function(e){var t=me.default.parseLayoutVariation(e),n=t.getCellCount()
if(!this._adjustNumberOfCellsInData(n)){"extraLarge"!==t.cellHeight||t.canBeExtraLarge()||(t.cellHeight="large")
this._updateLayout.call(this,t.serialize())}},_onToggleImageLinkEditor:function(e){var t=this.getRepeatableBinding("repeatable1")
t.get().forEach(function(n,i){"editor"===n.get("components").get("background1").get("_state")&&e!==i&&t.sub(i).update("components.background1",function(e){return e.set("_state","normal")})})},_renderRepeatable:function(e){var t=this,n=this.getComponentBinding(e),i=this.getRepeatableBinding(e),o=this._getLayoutObject(),a=this.props.index,r=this._getNavHeight(),s=this.getMeta("paddingTop"),l=function(e,n){var l=i.sub(n)
return p(ve,{layoutVariation:t._getLayoutVariation(),layoutObj:o,binding:l,section:t,index:n,sectionIndex:a,navHeight:r,sectionPaddingTop:s,hasTitleGroup:t._hasTitleGroup(),repeatableItemProps:t._getRepeatableItemProps(i,n),getComponentProps:t.getComponentProps,getBackgroundProps:t.getBackgroundProps,onToggleImageLinkEditor:t._getOnToggleImageLinkEditorFn(n)},n)},u=this.getComponentProps("repeatable1"),c=n.get("list").map(l).toArray()
o.useMagazineColumnDom&&(c=[p("div",{className:o.magazineColumnClass},1,c[0],c[1]),p("div",{className:o.magazineColumnClass},2,c[2])])
return h.default.createElement(A.default,f({className:"s-mh"+("editor"===n.get("_state")?" s-arranging":""),style:{margin:o.containerMargin,padding:o.containerPadding},canAddItems:!1},u),c)},_renderLayoutButton:function(){return null},_hasTitleGroup:function(){return this.sbAnyHasContent("text1 text2",{showOnly:!1})},_getSectionStyle:function(){return{paddingTop:this._getLayoutObject().getSectionPaddingTop(this._getNavHeight(),this._hasTitleGroup(),this.props.index,this.props.s5NavOverlapsContent)}},_getLayoutObject:function(){var e=M.default.getThemeName(),t=this._getLayoutVariation(),n=ce.default.isSmallerThanDesktop()
return me.default.getLayout(e,t,n)()},_adjustNumberOfCellsInData:function(e){var t=K.default.getSectionDataBySectionName("grid"),n=t.content.components.repeatable1.components,o=[].concat(t.content.components.repeatable1.list.map(function(e){return e.components}),n),a=this.getRepeatableBinding("repeatable1"),r=function(e){var t=e.components
return b.default.some(o,function(e){return t.text1.value===e.text1.value&&t.text2.value===e.text2.value&&t.background1.url===e.background1.url&&t.background1.linkUrl===e.background1.linkUrl})},s=a.get().count()
if(s===e)return!1
if(s<e)!function(e){for(var t=a.get(),i=0;i<e;){i++
var o={type:"RepeatableItem",components:n},r=J.default.fromJS(q.default.addMetaId(o))
t=t.push(r)}a.set(t)}(e-s)
else if(s>e){var l=a.get().slice(e)
if(!function(e){return e.toJS().every(r)}(l)&&!confirm(i("Editor|Are you sure you want to reduce the number of grid items? Some grid items will be deleted.")))return!0
var u=a.get().slice(0,e)
a.set(u)}return!1},render:function(){var e=this._getLayoutObject(),t=M.default.getThemeName(),n=null
if(this._hasTitleGroup()||(e.contentWidthIsNormal,!1)){n=p("div",{},"section-title",p(le.default,{contentCheck:"repeatable1",section:this,binding:this.getDefaultBinding(),canHide:!0}))
e.isWideWithLeftAlignedHeading?n=p("div",{style:{paddingLeft:40,paddingRight:40}},"section-title",n):"persona"!==t&&"profile"!==t&&(n=p("div",{},"section-title",p("div",{className:(0,P.default)("container title-group-container",{"title-group-container--no-title-content":!this._hasTitleGroup()})},void 0,p("div",{className:"sixteen columns"},void 0,n))))}var i="profile"===t||"persona"===t,o=p("div",{},void 0,i&&n,p("div",{className:"s-grid-section-repeatable-container "+this.sbUniformTextAlignment("text1 text2")},void 0,this._renderRepeatable("repeatable1")))
"persona"===t&&(o=p("div",{className:"twelve columns offset-three"},void 0,p("div",{className:"s-persona-content"},void 0,o)))
e.needs16ColumnContainer&&(o=p("div",{className:"columns sixteen"},void 0,o))
o=[this._renderLayoutButton(),!i&&n,p("div",{className:"s-grid-section-content "+this._getLayoutObject().containerClass},"section-content",o)]
e.needsPerspContainer&&(o=p("div",{className:"s-persp-container"},void 0,p("div",{className:"s-persp-column"},void 0,o)))
return p("div",{className:"s-section s-grid-section "+this._getLayoutObject().sectionClass+" "+(this._hasTitleGroup()?" _hasTitleGroup":"")+" "+this._getPaddingClass(),style:this._getSectionStyle()},void 0,p("div",{style:{width:"100%"}},void 0,o))}},ve=(u=x.default.decorate(N.default.Mixin))(c=function(e){function t(e){r(this,t)
var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n._updateMinHeight=b.default.throttle(n._updateMinHeight.bind(n),200)
return n}l(t,e)
d(t,[{key:"componentDidMount",value:function(){this._updateMinHeight()}},{key:"componentDidUpdate",value:function(){this._updateMinHeight()}},{key:"getPropCompareFunctions",value:function(){return{repeatableItemProps:function(e,t){return(0,T.default)(e,t)}}}},{key:"_updateMinHeight",value:function(){var e=(0,w.default)(v.default.findDOMNode(this)),t=e.find(".s-item-text-group").outerHeight(),n=Math.max(this.props.layoutObj.cellMinHeight,t+50)
e.css("min-height",n+"px")}},{key:"_getDefaultBackground",value:function(){return K.default.getSectionDataBySectionName("grid").content.components.repeatable1.components.background1}},{key:"render",value:function(){var e=this.props,t=e.layoutObj,n=e.index,i=e.sectionIndex,o=e.navHeight,a=e.sectionPaddingTop,r=e.hasTitleGroup,s=this.getDefaultBinding(),l=s.sub("components.background1").toJS()||this._getDefaultBackground(),u=Q.createImage(l).getUrl(),c=l.linkUrl,d=l.linkTarget,m=ne.imageHasContent(u),g=t.cellClassName
"editor"===s.sub("components.background1").get("_state")&&(g+=" _image-link-editor-open")
var v=t.getItemButtonStyles({cellIndex:n,sectionIndex:i,navHeight:o,sectionPaddingTop:a,hasTitleGroup:r,s5NavOverlapsContent:this.props.s5NavOverlapsContent}),y=null,b=this.props.getBackgroundProps("background1",s)
b.linkUrl=c
b.linkTarget=d
var _=p("div",{className:"s-grid-section-cell-content"},void 0,h.default.createElement(W.default,f({key:n},b),y,p("div",{className:"s-grid-section-item-text-group-wrapper",style:{border:t.getItemBorder(m)}},void 0,p(V.default,{section:this.props.section,itemBinding:s,binding:s,showItemSubtitle:!1,upperChildrenPosition:!0,onChange:this._updateMinHeight}))))
return h.default.createElement(R.default,f({className:g+" "+(t.isTopRightCell(n)?"_top-right-cell":""),style:{padding:t.cellPadding,minHeight:t.cellMinHeight},binding:s,index:n,alwaysShowButtons:!0,moveButtonStyle:v.moveButton},this.props.repeatableItemProps),_)}}])
return t}(h.default.Component))||c
t.default=ge
e.exports=t.default}).call(t,n(3))},2155:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0})
var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),a=n(1),r=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(a),s={twoLeftOneRight:{cellCount:3},oneLeftTwoRight:{cellCount:3},twoTopThreeBottom:{cellCount:5},twoTopTwoBottom:{cellCount:4}}
r.forOwn(s,function(e,t){e.name=t})
var l=function(){function e(t){i(this,e)
var n=t.split("-")
this.rows=""
this.columns=""
this.magazineLayoutName=""
this.gridType=n[0]
this.cellHeight=n[4]
this.cellSpacing=n[5]
this.contentWidth=n[6]
if("grid"===n[0]){this.rows=parseFloat(n[1])
this.columns=parseFloat(n[2])}else"magazine"===n[0]&&(this.magazineLayoutName=n[3])}o(e,[{key:"isMagazine",value:function(){return"magazine"===this.gridType}},{key:"isGrid",value:function(){return"grid"===this.gridType}},{key:"canBeExtraLarge",value:function(){return this.isGrid()&&1===this.rows}},{key:"serialize",value:function(){return[this.gridType,this.rows,this.columns,this.magazineLayoutName,this.cellHeight,this.cellSpacing,this.contentWidth].join("-")}},{key:"getCellCount",value:function(){return this.isGrid()?this.rows*this.columns:s[this.magazineLayoutName].cellCount}},{key:"getTopRightCellIndex",value:function(){return this.isGrid()?this.columns-1:{twoLeftOneRight:2,oneLeftTwoRight:0,twoTopThreeBottom:1,twoTopTwoBottom:1}[this.magazineLayoutName]}},{key:"getTopRowCellIndices",value:function(){return this.isGrid()?r.range(0,this.columns):{twoLeftOneRight:[0,2],oneLeftTwoRight:[0,2],twoTopThreeBottom:[0,1],twoTopTwoBottom:[0,1]}[this.magazineLayoutName]}}])
return e}(),u=34,c=["profile","ion","sleek","persona"],d=["sleek","ion","persona"],f={},p={getDefaultLayoutKey:function(e,t){return t},getLayout:function(e,t,n){function i(t){return"s5-theme"===e?t:["pitch_new","zine","bright","glow","minimal"].includes(e)}var o=this.parseLayoutVariation(t)
return function(){function a(t,n,o,a){var r=i(a)?Math.max(0,n-o):0,c=s?0:2*l.cellPadding,d=10+Math.max(0,r-c),f=s&&0!==t&&"ion"!==e?10:-30
0===t&&(f=10-o+(i(a)?n:0))
"ion"===e&&(f=-46)
var p=d+c,m=f+u
return{layoutButtonTop:f,topRowimageAndLinkButtonTop:d,layoutButtonOverlapsTopRightButton:!s&&m+10>p}}var r=e+"-"+t+"-"+n
if(f[r])return f[r]
var s="normal"===o.contentWidth
c.includes(e)&&(s=!0)
var l={}
l.contentWidthIsNormal=s
l.containerClass=s?"container ":""
l.containerClass+="_cell-spacing-"+o.cellSpacing+" "
l.needsPerspContainer=s&&"perspective"===e
l.needs16ColumnContainer=s&&!["perspective","persona"].includes(e)
l.sectionClass=s?"":" _wide "
var p=d.includes(e)?"mobile":"desktop"
l.sectionClass+=" s-grid-section__"+p+"-view-on-tablet"
var m="onyx_new"===e
l.isWideWithLeftAlignedHeading=m&&!s
l.cellPadding={none:0,small:n?3:5,large:n?7:15}[o.cellSpacing]
l.containerMargin=s?-l.cellPadding:0
l.containerPadding=s?0:l.cellPadding
l.cellClassName="s-grid-section-cell "
l.cellMinHeight={small:{desktop:160,mobile:120},medium:{desktop:250,mobile:150},large:{desktop:350,mobile:200},extraLarge:{desktop:600,mobile:300}}[o.cellHeight][n?"mobile":"desktop"]
o.getCellCount()%2!=0&&(l.cellClassName+=" _odd-cell-count ")
if(o.isGrid()){l.containerClass+="_grid"
l.cellClassName+=" _"+o.columns+"-columns "}else if(o.isMagazine()){l.containerClass+="_magazine "
l.cellClassName+=" _"+o.magazineLayoutName+" "}l.useMagazineColumnDom=o.isMagazine()&&("twoLeftOneRight"===o.magazineLayoutName||"oneLeftTwoRight"===o.magazineLayoutName)
l.magazineColumnClass="s-magazine-column _"+o.magazineLayoutName
l.getItemBorder=function(e){return e||"none"===o.cellSpacing?null:"1px solid #eee"}
l.isTopRightCell=function(e){return o.getTopRightCellIndex()===e}
l.isTopRowCell=function(e){return o.getTopRowCellIndices().includes(e)}
l.getItemButtonStyles=function(e){var t=e.cellIndex,n=e.sectionIndex,i=e.navHeight,r=e.sectionPaddingTop,s=e.hasTitleGroup,l=e.s5NavOverlapsFirstSection,u=10,c=10,d=0
if(this.isTopRowCell(t)&&!s){var f=a(n,i,r,l)
u=f.topRowimageAndLinkButtonTop
if(this.isTopRightCell(t)&&f.layoutButtonOverlapsTopRightButton){c+=140
d+=140}}o.isGrid()&&(d+=28)
return{moveButton:{top:u,right:c},imageAndLinkButton:{top:u,right:d}}}
l.getLayoutButtonStyle=function(e){return{top:a(e.sectionIndex,e.navHeight,e.sectionPaddingTop,e.s5NavOverlapsFirstSection).layoutButtonTop}}
l.getSectionPaddingTop=function(t,n,o,a){if("perspective"===e&&n&&!s)return 80
if("minimal"===e||"pitch_new"===e){var r=s||n,l="minimal"===e&&r?70:0,u="pitch_new"===e&&r?90:0,c={minimal:l,pitch_new:u}[e]
return(0===o?t:0)+c}return s||n?"":i(a)&&0===o?t:0}
f[r]=l
return l}},parseLayoutVariation:function(e){return new l(e)},magazineLayouts:s,themesWithoutWideGridLayout:c}
t.default=p
e.exports=t.default},2156:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),s=n(0),l=o(s),u=n(8),c=o(u),d=n(11),f=o(d),p=n(61),m=o(p),h=n(398),g=o(h),v=n(1201),y=o(v),b=n(397),_=o(b),w=n(2134),C=o(w),x=n(1866),k=o(x),S=n(1865),N=o(S),E=n(2131),P=o(E),O=n(2133),T=(o(O),n(1864)),L=o(T),M=n(2220),I=o(M),B=n(2221),D=(o(B),n(2132)),j=o(D),A=n(20),H={mixins:[C.default,(0,m.default)("editor")],displayName:"Pricing Section",_getLayoutOptions:function(){var e=c.default.getThemeName()
return I.default.getLayoutOptions(e)},_updatePricingLayout:function(e){this._updateLayout(e)},_getHighlightSetting:function(){return this._getLayoutSettings().highlighted_id},_settingHightId:function(e){var t=this._getHighlightSetting(),n=t!==e?e:null
this.setData("components.slideSettings.display_settings.highlighted_id",n)
this.savePage()},_renderEditorHighlight:function(e,t){var o=this,a=n(24),s=a.Tooltip
return r(s,{placement:"right",title:i(t?"Editor|Highlighted":"Editor|Highlight this item"),overlayClassName:"highlight-tooltip "+(t?"checked":"")},void 0,r("div",{className:"s-repeatable-widget-button highlight-button "+(t?"checked":""),onClick:function(){o._settingHightId(e)}},void 0,r("i",{className:"entypo-star entypo"})))},_getRootClass:function(){var e=c.default.getThemeName(),t=this._getLayoutVariation(),n=f.default.getTemplateVariation(),i=["dark","default"],o=-1!==t.indexOf("pricing-layout-4"),a=["onyx_new","app","profile"].indexOf(e)>-1,r=["bright","perspective"].indexOf(e)>-1
return(0,A.css)("&.s-bg-dark,",i.includes(n)?"&.s-bg-gray, &.s-bg-white,":""," &.s-section.s-bg-dark,&.s-bg-light-text,&.s-bg-image.s-bg-light-text{color:#40404c;.inner-container{.s-item-text,.s-item-title,.s-item-subtitle{color:#40404c;.s-subtitle{color:#40404c;}}}}.inner-container{text-shadow:none;}&.s-bg-dark,&.s-section.s-bg-dark ",i.includes(n)?", &.s-bg-gray, &.s-bg-white, &.s-bg-image.s-bg-light-text":"","{",o?"":"\n          .inner-container {\n            .s-common-button {\n              background: #333;\n              color: white;\n              "+(a&&"box-shadow: 0px 3px 0 #333"||"")+"\n              "+(r&&"border: 2px solid #333"||"")+"\n            }\n            .s-bg-theme-color-1 {\n              background-color: #333;\n              color: #fff;\n            }\n          }\n          ","\n          .s-border-theme-color-1{border-color:#333;}",o?'.s-pricing-item {\n            .inner-container {\n              .s-item-title {\n                background-color: rgba(51, 51, 51, 0.5);\n                color: #fff;\n              }\n              .s-theme-color-1 {\n                color: #fff;\n              }\n              .s-common-button {\n                background:url("") no-repeat 0 0;\n                background-color: rgba(51, 51, 51, 0.5) !important;\n                color: white !important;\n                '+(a&&"box-shadow: 0px 3px 0 rgba(51, 51, 51, 0.5)"||"")+"\n                "+(r&&"border: 2px solid rgba(51, 51, 51, 0.5)"||"")+"\n              }\n            }\n          }\n          .highlighted {\n            border-color: #333;\n            .inner-container {\n              .s-item-title {\n                background-color: #333;\n                color: #fff;\n              }\n              .s-theme-color-1 {\n                color: #fff;\n              }\n              .s-common-button {\n                background-color: #333 !important;\n                "+(a&&"box-shadow: 0px 3px 0 #333"||"")+"\n                "+(r&&"border: 2px solid #333"||"")+"\n              }\n              .s-item-highlight-badge {\n                background: transparent;\n              }\n            }\n          }\n         ":"","}")},_getLayoutStyle:function(e){var t=this,n=this._getHighlightSetting()&&"s-pricing-has-highlight-item"||"",i={title1Color:"",hasHighlightItem:n,highlightedBgColor:"s-bg-theme-color-1",bgColor:function(){return""},showBorder:function(){return""},buttonBgColor:function(){return""},title1BgColor:function(){return""},isHighlighted:function(e){return e?"highlighted":""}}
switch(e){case"pricing-layout-1":i.bgColor=function(e){return e&&"s-bg-theme-color-fade-1"||""}
break
case"pricing-layout-3":i.showBorder=function(e){return e&&"s-border-theme-color-1 highlight-border"||""}
break
case"pricing-layout-4":i.title1Color="s-theme-color-1",i.showBorder=function(e){return e&&"s-border-theme-color-1 highlight-border"||""},i.buttonBgColor=function(e){return!e&&t._getButtonClassName()||""},i.title1BgColor=function(e){return e?"s-bg-theme-color-1":"s-bg-theme-color-fade-2"}}return i},_getButtonClassName:function(){var e=c.default.getThemeName(),t=""
t=["onyx_new","app","profile"].indexOf(e)>-1?"s-button-theme-style-shadow":["bright","perspective"].indexOf(e)>-1?"s-button-theme-style-border":["spectre","glow"].indexOf(e)>-1?"s-button-theme-style-important":"s-button-theme-style"
return t},_renderRepeatable:function(e){var t=this,n=this.getRepeatableBinding(e),o=this._getLayoutVariation(),s=this._getHighlightSetting(),u=n.get().size,c=u<=4,d=u<=2,f=this._getLayoutStyle(o),p=function(e,u){var c=n.sub(u),p=n.sub(u),m=e.get("components").toObject(),h=e.get("id"),v=s===h,b=Object.keys(m)
if("pricing-layout-4"===o){var w=b[0]
b[0]=b[1]
b[1]=w}var C=b.map(function(e,n){return"text1"===e?r("div",{className:"s-pricing-sub-item s-item-subtitle"},void 0,l.default.createElement(_.default,a({key:"sub-"+n},t.getComponentProps(e,c)))):"text2"===e?r("div",{className:"s-pricing-sub-item s-item-text"},void 0,l.default.createElement(_.default,a({key:"sub-"+n},t.getComponentProps(e,c)))):"title1"===e?r("div",{className:"s-pricing-sub-item s-item-title "+f.title1BgColor(v)},void 0,l.default.createElement(_.default,a({key:"sub-"+n,textType:"heading",emptyMessage:i("Editor|Add title.")},t.getComponentProps(e,c),{className:f.title1Color}))):"image1"===e?r("div",{className:"s-pricing-sub-item s-item-image"},void 0,l.default.createElement(g.default,a({size:"480x960>",moreIcons:!0},t.getReduxComponentProps(e,c)))):r("div",{className:"s-pricing-sub-item s-pricing-item-btn"},void 0,l.default.createElement(y.default,a({},t.getComponentProps(e,c),{className:f.buttonBgColor(v)}),e))})
return l.default.createElement(N.default,a({className:f.showBorder(v)+" s-pricing-item "+o+" "+f.isHighlighted(v)+" "+f.hasHighlightItem,index:u},t._getRepeatableItemProps(n,u),{forbiddenRemove:d,binding:p}),!1,r("div",{className:"inner-container "+f.bgColor(v)},void 0,v&&r("div",{className:"s-item-highlight-badge "+f.highlightedBgColor+" s-subtitle"},void 0,l.default.createElement(_.default,a({emptyMessage:i("Editor|Add title.")},t.getComponentProps("text3")))),C))},m=n.get().map(p).toArray(),h=this.getComponentProps("repeatable1")
return l.default.createElement(k.default,a({className:"s-pricing-wrapper"},h,{canAddItems:c}),m)},render:function(){var e=this._renderRepeatable("repeatable1"),t=this.getBackgroundProps("background1"),n=this._getRootClass(),i="s-section s-pricing-section "+this._getPaddingClass()+" "+n+" "+t.className
return l.default.createElement(j.default,a({},t,{className:i}),!1,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")&&l.default.createElement(L.default,this.getBackgroundProps("background1")),r("div",{className:"container"},"layout-content",r(P.default,{canHide:!0,section:this,binding:this.getDefaultBinding()}),e))}}
t.default=H
e.exports=t.default}).call(t,n(3))},2157:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){var n=[],i=!0,o=!1,a=void 0
try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done);i=!0){n.push(r.value)
if(t&&n.length===t)break}}catch(e){o=!0
a=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),d=n(0),f=(o(d),n(1)),p=o(f),m=n(2135),h=n(7),g=(o(h),function(e){function t(e){a(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.sectionName="store section"
return n}s(t,e)
c(t,[{key:"updateToDefaultLayout",value:function(e){var t=n(1867),i=this.props.themeName,o=p.default.clone(this._levelKeys)
o[0]=e
var a=t.getDefaultLayoutKey(i,o.join("-"))
this.props.updateLayout(a)}},{key:"getRotationKeys",value:function(){var e=u(this._levelKeys,1),t=e[0]
return this._getKeysByLevel(1).map(function(e){return t+"-"+e})}},{key:"getButtonClassMapping",value:function(){return["",this._getSmallButtonClass(1)]}},{key:"renderLayoutOptions",value:function(){var e=this,t=u(this._levelKeys,2),n=t[0],o=t[1]
return l("div",{},void 0,this._getKeysByLevel(1)&&this._renderLayoutButtons(1,i("Editor|Columns Per Row")),"one"!==o&&l("div",{className:"s-layout-menu-field drop-down-select"},void 0,l("div",{className:"s-layout-menu-label"},void 0,i("Editor|Image Size")),l("select",{value:n,onChange:function(t){return e._getSetLevelFn(0,t.target.value)()}},void 0,l("option",{value:"landscape"},void 0,i("Editor|Landscape")),l("option",{value:"square"},void 0,i("Editor|Square")),l("option",{value:"portrait"},void 0,i("Editor|Portrait")),l("option",{value:"auto"},void 0,i("Editor|Auto")))))}}])
return t}(m.BaseLayoutButton))
t.default=(0,m.connectToStores)(g)
e.exports=t.default}).call(t,n(3))},2158:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(397),n(1201),n(2133)),s=n(1864),l=n(2234),u=(n(2131),n(2132))
e.exports=function(){return o.createElement(u,i({className:"s-new-title-section s-section "+this._getSectionType()+" "+this._getPaddingClass()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(r,this.getComponentProps("background1")),o.createElement(l,a.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout,updatePadding:this._updatePadding},this._getLayoutProps()))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(s,a.assign({},{layout:this._getLayoutKey()},this.getBackgroundProps("background1"))):null,"\n  ",this._renderContent(),"\n")}},2159:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(397),n(2133)),s=n(1864),l=n(2194),u=n(2131),c=n(2132)
e.exports=function(){return o.createElement(c,i({className:"s-new-text-section s-section "+this._getSectionType()+" "+this._getPaddingClass()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(r,this.getComponentProps("background1")),o.createElement(l,a.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout,updatePadding:this._updatePadding},this._getLayoutProps()))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(s,this.getBackgroundProps("background1")):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"clearfix"},o.createElement("div",{className:"columns sixteen"},o.createElement(u,{contentCheck:"repeatable1",section:this,binding:this.getDefaultBinding()}))),o.createElement("div",{className:this.sbUniformTextAlignment("text1 text2")},"\n      ",this._renderRepeatable("repeatable1"),"\n    ")))}},2160:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=n(2133),s=n(1864),l=n(2198),u=n(2132)
e.exports=function(){return o.createElement(u,i({className:"s-new-hero-section s-section "+this._getSectionType()+" "+this._getPaddingClass()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(r,a.assign({},{bgClassNames:this.getThemeFeature("backgroundColorClassNames")},this.getComponentProps("background1"))),o.createElement(l,a.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout,updatePadding:this._updatePadding},this._getLayoutProps()))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(s,a.assign({},{layout:this._getLayoutKey()},this.getBackgroundProps("background1"))):null,"\n  ",this._renderContent(),"\n")}},2161:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=(o(r),n(2)),l=o(s),u={},c=n(13),d=n(1793),f=n(17),p=(n(95),n(1)),m=n(14),h=n(471)
u=f.createPageComponent({displayName:"LayoutSelector",mixins:[h.enableAfterMount()],bobcatPropTypes:{data:{layoutOptions:l.default.array,layoutVariation:l.default.string,binding:l.default.object.isRequired}},getBobcatDefaultProps:function(){return{layoutOptions:[],layoutVariation:null}},componentDidMount:function(){this.props.layoutOptions.length||console.warn("Section has no layout options defined!")},componentDidUpdate:function(e){e.layoutVariation!==this.props.layoutVariation&&window.edit_page.Event.publish("Layout.afterChange",{target:$(c.findDOMNode(this))})},_updateLayout:function(e){return this.updateData({layout_variation:e})},_getLayoutKeys:function(){return p.pluck(this.props.layoutOptions,"key")},_getLayoutIndex:function(){var e=this._getLayoutKeys(),t=this.props.layoutVariation,n=e.indexOf(t)
return t&&-1!==n?n:null},_clickLayout:function(){var e=this._getLayoutKeys(),t=this._getLayoutIndex()
null==t&&(t=0)
this._updateLayout(e[(t+1)%e.length])
m.clickLayout()
m.save()},_layoutStatus:function(){return null!=this._getLayoutIndex()?"ABCDEFGHI"[this._getLayoutIndex()]:"A"},render:function(){return this.props.layoutOptions.length?a("div",{className:"s-component s-layout"},void 0,a("div",{className:"s-component-editor"},void 0,a(d,{className:"center clickable small title",onTap:this._clickLayout,rel:"tooltip-left",title:i("Editor|Switch layout for this section")},void 0,a("span",{},void 0,i("Layout"),this._layoutStatus()?a("span",{className:"layout-status"},void 0,this._layoutStatus()):void 0)))):null}})
t.default=u
e.exports=t.default}).call(t,n(3))},2168:function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=function(e){return e.replace("../../../../public/images/v4","../../../../images/v4")}
t.default={correctThumbnailPath:n}
e.exports=t.default},2169:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=p[e]||e
n=n.split(",").map(function(e){return f+e.trim()}).join(",")
var i=m[e]||m.default
if(s.default.isString(t))return-1!==t.indexOf(":")?n+"{"+t+"}":n+"{"+i+":"+t+"}"
var o=u.default.prototype.validate(t)
return o?n+"{"+i+":"+o.toRgba()+";}":void 0}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="",i=null
for(i in e)if(e.hasOwnProperty(i)){var a=i.split(" ")
d.default[i]?function(){var a=d.default[i](e[i])
for(var r in a)!function(e){Array.isArray(t.prefix)?t.prefix.forEach(function(t){n+=o(t+" "+e,a[e])}):n+=o((t.prefix||"")+" "+e,a[e])}(r)}():p[a[0]]?a.forEach(function(t){return n+=o(t,e[i])}):o(i,e[i])}return n}Object.defineProperty(t,"__esModule",{value:!0})
var r=n(1),s=i(r),l=n(135),u=i(l),c=n(2170),d=i(c),f=".s-custom-colors ",p={title:".s-title",subtitle:".s-subtitle",itemTitle:".s-item-title",itemSubtitle:".s-item-subtitle",titleLink:".s-title .s-text .s-component-content a",itemTitleLink:".s-item-title .s-text .s-component-content a",subtitleLink:".s-subtitle .s-text .s-component-content a",itemSubtitleLink:".s-item-subtitle .s-text .s-component-content a",textLink:".s-text .s-component-content a",socialFeedLink:".s-social-feed .s-feeds-item .s-feed-content .s-feed-text-main a",button:".s-common-button",buttonHover:".s-common-button:hover",overlay:".s-bg-overlay:before",blogInfo:".s-blog-wrapper .s-blog-col-placeholder .s-blog-details .s-blog-info",storePrice:".s-ecommerce-row-view-product .s-ecommerce-row-view-product-pricing, .s-ecommerce-card-view-card-price",termsLink:".s-terms-link a",socialLinks:".s-component.s-social-media ul.s-social-media-buttons .s-social-icon",socialLinks2:".s-component.s-social-media ul.s-social-media-buttons .s-social-icon",mobileActionButton:".s-mobile-actions .s-mobile-actions-item.one-item",mobileActionButtonForApp:".s-mobile-actions .s-mobile-actions-item.selected:not(.one-item)",mobileNavbarButtons:".navbar-drawer-bar .navbar, .navbar-drawer-bar .mobile",mobileNavbarButtonsOpen:".navbar-drawer-bar.drawer-open .navbar, .navbar-drawer-bar.drawer-open .mobile"},m={default:"color",button:"background",buttonHover:"background",mobileActionButton:"background",mobileActionButtonForApp:"color",overlay:"background",mobileNavbarButtons:"background",mobileNavbarButtonsOpen:"background",socialLinks:"background",socialLinks2:"color"}
t.default={generate:a}
e.exports=t.default},2170:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(135),o=function(e){return e&&e.__esModule?e:{default:e}}(i),a={themeColorGroup:function(e){var t=e.main.toHex(),n=e.main.fade(.07).toRgba(),i=e.main.fade(.2).toRgba()
return{".s-theme-color-1":"color: "+t,".s-bg-theme-color-1":"background-color: "+t,".s-bg-theme-color-fade-1":"background-color: "+n,".s-bg-theme-color-fade-2":"background-color: "+i,".s-border-theme-color-1":"border-color: "+t,".s-button-theme-style":"background-color: "+i+"; color: "+t,".s-button-theme-style-shadow":"background-color: "+i+"; box-shadow: 0px 3px 0 "+i+"; color: "+t,".s-button-theme-style-border":"background-color: "+i+"; border: 2px solid "+i+"; color1: "+t,".s-button-theme-style-important":"background-color: "+i+" !important; color: "+t+" !important"}},donationGroup:function(e){var t=e.main.toHex()
return{".s-donation-section .s-component.s-donation .s-donation-progress .progress-bar .progress":"background: "+t,".s-donation-section .s-component.s-donation .s-donation-progress .progress-bar .indicator:before":"background: "+t,".s-donation-section .s-component.s-donation .s-donation-progress .progress-bar .indicator:after":"border-top-color: "+t}},ecommerceTextGroup:function(e){var t=e.textColor.toHex(),n=e.textColor.lighten(.2).toHex(),i="color: "+t+";",o="color: "+n+";",a=".s-ecommerce .s-ecommerce-products-wrapper .s-ecommerce-card-view-wrapper .s-ecommerce-card-view-detail .s-ecommerce-card-view-detail-header",r={".s-ecommerce-card-view-wrapper .s-ecommerce-card-view-cards .s-ecommerce-card-view-card .s-ecommerce-card-view-card-price":i,".s-ecommerce .s-ecommerce-row-view-product .s-ecommerce-row-view-product-detail-panel .s-ecommerce-row-view-product-pricing":i,".s-section .s-category-bar .category-list .category-link-item.selected":i,".s-section .s-category-bar .category-list .category-link-item.selected:after":"background: "+t,".s-section .s-category-bar .category-list .category-link-item-wrapper:hover .category-link-item:not(.no-hover)":i}
r[a+" .back-btn"]=r[a+" .prev-product-btn"]=r[a+" .next-product-btn"]=i
r[a+" .back-btn:hover"]=r[a+" .prev-product-btn:hover"]=r[a+" .next-product-btn:hover"]=o
return r},ecommerceGroup:function(e){e.textColor=e.textColor||e.main
e.mobileBg=e.mobileBg||new o.default("#f2f2f2")
var t=e.main.toHex(),n=e.mobileBg.toHex(),i=e.mobileBg.mix("#000",.2).toHex(),r="background: "+t+";",s="background: "+n+";"
return Object.assign({".fixed-login-container .login-container":r,".s-ecommerce-row-view-product .s-ecommerce-row-view-product-thumbnail-list ul li.current":"border: 2px solid "+t,".s-ecommerce-card-view-wrapper .s-ecommerce-card-view-card .s-ecommerce-card-view-card-stock-warning":r,".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart":r,".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart.hovered":r,".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart-mobile":"\n        "+s+"\n        border-top: 1px solid "+i+";",".s-ecommerce-shopping-cart-wrapper .s-ecommerce-shopping-cart-mobile .check-btn":r,".s-ecommerce-animation-item":"\n        border: 2px solid "+t+";\n        color: "+t+";",".s-ecommerce-row-view-product .mobile-select .price-label":"color: "+t,".s-ecommerce-row-view-product .mobile-select .variation-item.selected":"border: 1px solid "+t+"; "+r,".s-ecommerce-row-view-product .mobile-select .add-btn":r,".s-ecommerce-row-view-product .slider-wrapper .slider-dot-wrapper .slider-dot":"border: 1px solid "+t,".s-ecommerce-row-view-product .slider-wrapper .slider-dot-wrapper .slider-dot.selected":"background: "+t},a.ecommerceTextGroup({textColor:e.textColor}))}}
t.default=a
e.exports=t.default},2171:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=n(13),r=o(a),s=n(11),l=o(s),u=n(8),c=o(u),d=n(7),f=o(d),p=n(190),m=o(p),h=n(6),g=o(h),v=n(2134),y=o(v),b=n(402),_=o(b),w=n(1),C=o(w),x=!1,k={mixins:[y.default],displayName:"BlogSection",waypointHandler:function(){var e=this._getLayoutProps().layoutVariation
if(!x&&l.default.getSections().length<3&&-1!==["A","B","C"].indexOf(e)){var t=$(r.default.findDOMNode(this)).find(".s-layout .s-component-editor")
t.tooltip({placement:"left",trigger:"manual",extraClassNames:"swing-right",title:i("Blog|Try different layouts for blog!")})
x=!0
t.tooltip("show")
t.one("mouseenter",function(){return t.tooltip("destroy")})
return setTimeout(function(){return t.tooltip("destroy")},2e4)}},componentWillMount:function(){var e=this._getLayoutProps().layoutVariation,t=c.default.getThemeName()
this._getLayoutBinding().sub("layout_variation").set(_.default.getDefaultLayoutKey(t,e))
var n=this.getDefaultBinding().get("components.blog1").toJS()
C.default.isEmpty(n.category)&&this.getDefaultBinding().set("components.blog1.category",g.default.fromJS({id:"all",name:i("Section|All Categories")}))},_getWaypointProps:function(){return{handler:this.waypointHandler,offset:20}},_getLayoutOptions:function(){var e=c.default.getThemeName()
return _.default.getLayoutOptions(e)},_isBlogCategoryFeatureAvailable:function(){return m.default.canUse("blog_category")&&f.default.isBlogCategoryRolledOut()},render:function(){i("Editor|Simple Blog")
i("Editor|Write beautiful blog posts that open in a new page.")
return this.getTemplate().apply(this)}}
t.default=k
e.exports=t.default}).call(t,n(3))},2172:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=o(r),l=n(13),u=o(l),c=n(5),d=o(c),f=n(1),p=o(f),m=n(47),h=(o(m),n(17)),g=o(h),v=n(7),y=o(v),b=n(61),_=o(b),w=n(1177),C=o(w),x=n(56),k=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(x),S=n(1176),N=o(S),E=n(471),P=o(E),O=n(11),T=o(O),L=n(14),M=(o(L),n(293)),I=(o(M),n(1178)),B=o(I),D=n(1794),j=n(2139),A=o(j),H=n(2173),R=o(H),F=n(95),V=o(F),U=n(19),z=o(U),W=n(473),G=o(W),K=function(e){return{url:"//uploads.strikinglycdn.com/static/backgrounds/"+e+".jpg",thumbUrl:"//uploads.strikinglycdn.com/static/backgrounds/"+e.replace(/(\/)(\d)/,"$1t$2")+".jpg",sizing:"cover"}},$=function(e){return{url:"//uploads.strikinglycdn.com/page/images/backgrounds/"+e+".jpg",thumbUrl:"//uploads.strikinglycdn.com/page/images/backgrounds/"+e+"-thumb.jpg",sizing:"cover"}},q=function(e){return{url:"http://uploads.strikinglycdn.com/static/backgrounds/pastel-solids/"+e+".jpg",thumbUrl:"http://uploads.strikinglycdn.com/static/backgrounds/pastel-solids/"+e+".jpg",sizing:"tile"}},Y=function(e){return{url:"https://uploads.sxlcdn.com/static/backgrounds/"+e+".jpg",thumbUrl:"https://uploads.sxlcdn.com/static/backgrounds/"+e.replace(/(\/)(\d)/,"$1t$2")+".jpg",sizing:"cover"}},J=function(e,t,n){var i=["nature/194","cityscape/170","things/121","cityscape/166","nature/184"],o=K
if("solidBanner"===e){i=["banners/banner1","bg3","banners/banner3","banners/banner4","bg1"]
o=$}if(y.default.getIsSxl()){i=["abstract/76","nature/190","cityscape/155","business-2/136","nature/171"]
o=Y}if("pastelSolids"===e){i=["44","42","36","39","48"]
o=q}t&&t>0&&t<=n&&(i=i.splice(0,t))
return i.map(function(e){return o(e)})}
t.default=g.default.create({displayName:"BackgroundImage",mixins:[(0,_.default)("editor"),N.default,P.default.enableAfterMount()],image:null,onMouseDown:!1,bobcatPropTypes:A.default.bobcatPropTypes,getBobcatDefaultProps:A.default.getBobcatDefaultProps,componentDidMount:function(){var e=this
this.image=u.default.findDOMNode(this.refs.aviaryImage)
this.props.onSetBackgroundItemSelectionHandlers("image",this._getBackgroundImageItemSelectionHandlers())
if(this.image){this.image.onload=function(){e.getMeta("showFocusPanel")&&e.setImageSize()}
this.image.onerror=function(){e.image=null}}},componentWillUnmount:function(){this.removeImageLoadListner()
"undefined"!=typeof window&&document.removeEventListener("mouseup",this.onMouseUp)},removeImageLoadListner:function(){if(this.image){this.image.onload=function(){}
this.image.onerror=function(){}
this.image=null}},componentDidUpdate:function(){var e=u.default.findDOMNode(this.refs.aviaryImage)
if(this.image&&e.src!==this.image.src){this.image=e
this.setImageSize()}},_setImage:function(e){this.updateData(Object.assign({},(0,D.imageDataForSaving)(e),{useImage:!0}))},_imageUploaded:function(e){/\.mp4$/.test(e.getUrl())?this.updateData(Object.assign((0,D.imageDataForSaving)(e),{videoHtml:G.default.getVideoHtmlByUrl(e.getUrl(),1280,720),videoUrl:e.getUrl(),textColor:"overlay"})):this._setImage(e)
this.savePage()},_onPreviewColor:function(e){var t=this
return function(){t.props.storePreviewData()
t.updateData({textColor:e})}},_onClickTextColor:function(e){var t=this
return function(){t.updateData({textColor:e})
t.props.clearPreviewData()
t.savePage()}},_imageUrlMixin:function(e){var t={s:null,storage:null,storageKey:null,format:null,focus:null,w:null,h:null}
return Object.assign(t,e)},_createEnterStockImageFn:function(e){var t=this
return function(){t.props.storePreviewData()
t.updateData(t._imageUrlMixin({url:e.url,videoHtml:"",sizing:e.sizing,textColor:"overlay",userClassName:"",useImage:!0}))}},_createEnterStockBgColorFn:function(e){var t=this
return function(){t.props.storePreviewData()
t.updateData(t._imageUrlMixin({url:"",videoHtml:"",sizing:e.sizing,userClassName:e,useImage:!1}))}},_createClickStockImageFn:function(e){var t=this
return function(){t.updateData(t._imageUrlMixin({url:e.url,videoHtml:"",sizing:e.sizing,userClassName:"",w:16,h:9,useImage:!0}))
t.props.clearPreviewData()
t.savePage()
V.default.track("Editor - Edit Background")}},_createClickStockBgColorFn:function(e){var t=this
return function(){t.updateData(t._imageUrlMixin({url:"",videoHtml:"",sizing:e.sizing,userClassName:e,useImage:!1}))
t.props.clearPreviewData()
t.savePage()
V.default.track("Editor - Edit Background")}},_onClickEditImage:function(){var e=this
C.default.launchTuiEditor(this._getUrlForImageEditor(),{onSavedCallback:function(t){return e._imageUploaded(t)}})},_getUrlForImageEditor:function(){var e=p.default.assign({},this.props,{s:10})
return k.createImage(e).getUrlWithoutFocus(this.props.size)},_url:function(){return k.createImage(this.props).getUrl(this.props.size)},_onClickUpload:function(){var e=this.props.backgroundItemSelectionHandlers
B.default.pick({initialTabIdx:0,iconLibComponents:"background",from:"background",handlers:e.image,backgroudImageHandlers:e.image,backgroudVideoHandlers:e.video})},_getBackgroundImageItemSelectionHandlers:function(){return{itemUploaded:this._imageUploaded,itemSelected:this._imageUploaded}},_onClickMoreImage:function(){var e=this.props.backgroundItemSelectionHandlers
B.default.pick({initialTabIdx:2,iconLibComponents:"background",from:"background",handlers:e.image,backgroudImageHandlers:e.image,backgroudVideoHandlers:e.video})},_onChangeBackgroundSize:function(e){this.updateData({sizing:e.target.value})
this.savePage()},_onClickToggleFocusPanel:function(){if(this.image){var e=this.getMeta("showFocusPanel")
this.updateMeta({showFocusPanel:!e,showFocusIndicator:!1})
!e&&this.image.width>0&&this.setImageSize()}else{this.updateMeta({showFocusPanel:!1,showFocusIndicator:!1})
window.alert(i("Error in loading the image due to network issue. Please try again."))}},transformCoordinates:function(e){var t=e.naturalWidth/e.width,n=this.getData().get("focus")
this.updateMeta({showFocusIndicator:!0,deltaPosition:{x:n.get("x")/t-10,y:n.get("y")/t-10}})},setImageSize:function(){var e=this.image
if(0!==e.height){var t=310/e.naturalWidth,n={width:310,height:Number((e.naturalHeight*t).toFixed(2)),naturalWidth:e.naturalWidth,naturalHeight:e.naturalHeight}
this.updateMeta({imageSize:n})
this.setFocusInitPosition(n)}},setFocusInitPosition:function(e){var t=this.getData().get("focus")
t&&!isNaN(t.get("x"))?this.transformCoordinates(e):this.updateMeta({showFocusIndicator:!0,deltaPosition:{x:e.width/2-10,y:e.height/2-10}})},_renderStockImage:function(e){var t=this,n=e,i=this.props.wasMinimal?3:5
n=void 0===n?i:n
var o=J(this.getData("stockKey"),n,i)
return a("span",{},void 0,o.map(function(e,n){var i={backgroundImage:"url("+e.thumbUrl+")"}
return a("li",{style:i,onClick:t._createClickStockImageFn(e),onMouseEnter:t._createEnterStockImageFn(e),onMouseLeave:t.props.restorePreviewData},n)}))},saveImageFocus:function(e){var t=e||this.getMeta("deltaPosition").toJS(),n=this.getMeta("imageSize").toJS(),i=n.naturalWidth/n.width
this.updateData({w:n.naturalWidth,h:n.naturalHeight,focus:{x:(t.x+10)*i,y:(t.y+10)*i}})},onDragStop:function(){this.saveImageFocus()},isShowSetFocus:function(){var e=this.getData(),t=T.default.getSiteAnimations().background
return y.default.getIsStrikingly()&&"parallax"!==t&&"fixed"!==t&&"cover"===e.get("sizing")},onMouseDownOnFocus:function(e){if(!e.target.className.includes("focus-indicator")&&3!==e.nativeEvent.which){this.$focusPanel=(0,d.default)(".focus-panel-background").eq(0)
document.addEventListener("mousemove",this.onDraging)
document.addEventListener("mouseup",this.onMouseUp)
this.choseFocus(e)}},onDraging:function(e){if(!e.target.className.includes("focus-indicator")&&this.$focusPanel){var t=e.pageX-this.$focusPanel.offset().left,n=e.pageY-this.$focusPanel.offset().top,i=this.getMeta("imageSize")
this.updateMeta({deltaPosition:{x:Math.min(i.get("width"),Math.max(0,t))-10,y:Math.min(i.get("height"),Math.max(0,n))-10}})}},choseFocus:function(e){if(this.$focusPanel){var t=this.getMeta("imageSize"),n=[0,t.get("width")+10],i=[0,t.get("height")+10],o={x:Math.min(n[1],Math.max(n[0],e.pageX-this.$focusPanel.offset().left)),y:Math.min(i[1],Math.max(i[0],e.pageY-this.$focusPanel.offset().top))},a={x:o.x-10,y:o.y-10}
this.updateMeta({deltaPosition:a})
this.saveImageFocus(a)}},onMouseUp:function(){document.removeEventListener("mousemove",this.onDraging)
document.removeEventListener("mouseup",this.onMouseUp)
this.onDragStop()},handleDrag:function(e,t){var n=this.getMeta("deltaPosition").toJS()
this.updateMeta({deltaPosition:{x:n.x+t.deltaX,y:n.y+t.deltaY}})},_renderColor$Image:function(){var e=this,t=this.props,n=t.bgClassNames,i=t.wasMinimal,o=n.length,r=i?3:5,s=""
o<r&&(s=this._renderStockImage(r-o))
return a("span",{},void 0,n.map(function(t,n){return a("li",{className:t,onClick:e._createClickStockBgColorFn(t),onMouseEnter:e._createEnterStockBgColorFn(t),onMouseLeave:e.props.restorePreviewData},n)}),s)},_renderImgEditButton:function(){return a("div",{className:"clearfix mb"},void 0,a("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickEditImage},void 0,i("Edit Image")))},render:function(){var e=this.props.visible
return a("div",{style:{display:e?"block":"none"}},void 0,s.default.createElement("img",{style:{display:"none"},src:this._getUrlForImageEditor(),ref:"aviaryImage"}),a("ul",{className:"s-layout-menu-field stock-images clearfix"},void 0,this.props.showDefaultColor?this._renderColor$Image():this._renderStockImage(),!this.props.wasMinimal&&a("li",{className:"btn",onClick:this._onClickMoreImage},void 0,a("span",{},void 0," ",i("More")," "))),a("div",{className:"clearfix mb"},void 0,a("div",{className:"s-btn small no-margin dark-gray",onClick:this._onClickUpload},void 0,i("Upload Image"))),this.props.showImageOptions?a("div",{},void 0,this._renderImgEditButton(),!z.default.isSmallScreen()&&a("div",{className:"drop-down-select mb"},void 0,a("div",{className:"icon"}),a("select",{onChange:this._onChangeBackgroundSize,value:this.props.sizing},void 0,a("option",{value:"cover"},void 0,i("Stretch")),a("option",{value:"contain"},void 0,i("Contain")),a("option",{value:"tile"},void 0,i("Tile")),a("option",{value:"center"},void 0,i("Center")))),this.isShowSetFocus()&&a("div",{className:"set-focus"},void 0,a("div",{onClick:this._onClickToggleFocusPanel},void 0,a("i",{className:"entypo-target"})," "+i("Set Focus")),a(R.default,{style:{display:this.getMeta("showFocusPanel")?"block":"none"},imageSize:this.getMeta("imageSize").toJS(),focusIndicatorRadius:10,handleDrag:this.handleDrag,onDragStop:this.onDragStop,onMouseDownOnFocus:this.onMouseDownOnFocus,deltaPosition:this.getMeta("deltaPosition").toJS(),showFocusIndicator:this.getMeta("showFocusIndicator"),imgSrc:this._getUrlForImageEditor()})),a("div",{className:"text-selection-wrap"},void 0,a("div",{className:"selection light-text "+("light"===this.props.textColor?"current":""),rel:"tooltip-left","data-original-title":i("Light Text"),onMouseEnter:this._onPreviewColor("light"),onMouseLeave:this.props.restorePreviewData,onClick:this._onClickTextColor("light")},void 0,"Tt"),a("div",{className:"selection text-overlay "+("overlay"===this.props.textColor?"current":""),rel:"tooltip-left","data-original-title":i("Light Text + Overlay"),onMouseEnter:this._onPreviewColor("overlay"),onMouseLeave:this.props.restorePreviewData,onClick:this._onClickTextColor("overlay")},void 0,"Tt"),a("div",{className:"selection dark-text "+("dark"===this.props.textColor?"current":""),rel:"tooltip-left","data-original-title":i("Dark Text"),onMouseEnter:this._onPreviewColor("dark"),onMouseLeave:this.props.restorePreviewData,onClick:this._onClickTextColor("dark")},void 0,"Tt"))):null)}})
e.exports=t.default}).call(t,n(3))},2173:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return r("div",{className:"focus-panel s-point-right",rel:"tooltip-left",style:e.style,title:i("Editor|Click the focal point of the image")},void 0,"Set the focus of the image:",r("div",{style:{height:e.imageSize.height,backgroundImage:"url("+e.imgSrc+")"},className:"focus-panel-draggable-wrapper focus-panel-background ",onMouseDown:e.onMouseDownOnFocus},void 0,e.showFocusIndicator&&r(u.default,{bounds:{left:-e.focusIndicatorRadius,right:e.imageSize.width-e.focusIndicatorRadius,top:-e.focusIndicatorRadius,bottom:e.imageSize.height-e.focusIndicatorRadius},onDrag:e.handleDrag,onStop:e.onDragStop,position:e.deltaPosition},void 0,r("div",{className:"focus-indicator cursor"}))))}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}()
t.default=a
var s=n(0),l=(o(s),n(2174)),u=o(l)
e.exports=t.default}).call(t,n(3))},2174:function(e,t,n){!function(t,i){e.exports=i(n(13),n(0))}(0,function(e,t){return function(e){function t(i){if(n[i])return n[i].exports
var o=n[i]={i:i,l:!1,exports:{}}
e[i].call(o.exports,o,o.exports,t)
o.l=!0
return o.exports}var n={}
t.m=e
t.c=n
t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})}
t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e}
t.d(n,"a",n)
return n}
t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
t.p=""
return t(t.s=12)}([function(e,t){"use strict"
function n(e,t){for(var n=0,i=e.length;n<i;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function i(e){return"function"==typeof e||"[object Function]"===Object.prototype.toString.call(e)}function o(e){return"number"==typeof e&&!isNaN(e)}function a(e){return parseInt(e,10)}function r(e,t,n){if(e[t])return new Error("Invalid prop "+t+" passed to "+n+" - do not set this, set it on the child.")}Object.defineProperty(t,"__esModule",{value:!0})
t.findInArray=n
t.isFunction=i
t.isNum=o
t.int=a
t.dontSetMe=r},function(e){"use strict"
function t(e){return function(){return e}}var n=function(){}
n.thatReturns=t
n.thatReturnsFalse=t(!1)
n.thatReturnsTrue=t(!0)
n.thatReturnsNull=t(null)
n.thatReturnsThis=function(){return this}
n.thatReturnsArgument=function(e){return e}
e.exports=n},function(e){"use strict"
function t(e,t,i,o,a,r,s,l){n(t)
if(!e){var u
if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var c=[i,o,a,r,s,l],d=0
u=new Error(t.replace(/%s/g,function(){return c[d++]}))
u.name="Invariant Violation"}u.framesToPop=1
throw u}}var n=function(){}
"production"!==Object({DRAGGABLE_DEBUG:void 0}).NODE_ENV&&(n=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")})
e.exports=t},function(e){"use strict"
e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t){t.exports=e},function(e,t,n){"use strict"
function i(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n
return e}function o(e,t){N||(N=(0,x.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(t){return(0,x.isFunction)(e[t])}))
return!!(0,x.isFunction)(e[N])&&e[N](t)}function a(e,t,n){var i=e
do{if(o(i,t))return!0
if(i===n)return!1
i=i.parentNode}while(i)
return!1}function r(e,t,n){e&&(e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener?e.addEventListener(t,n,!0):e["on"+t]=n)}function s(e,t,n){e&&(e.detachEvent?e.detachEvent("on"+t,n):e.removeEventListener?e.removeEventListener(t,n,!0):e["on"+t]=null)}function l(e){var t=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e)
t+=(0,x.int)(n.borderTopWidth)
t+=(0,x.int)(n.borderBottomWidth)
return t}function u(e){var t=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e)
t+=(0,x.int)(n.borderLeftWidth)
t+=(0,x.int)(n.borderRightWidth)
return t}function c(e){var t=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e)
t-=(0,x.int)(n.paddingTop)
t-=(0,x.int)(n.paddingBottom)
return t}function d(e){var t=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e)
t-=(0,x.int)(n.paddingLeft)
t-=(0,x.int)(n.paddingRight)
return t}function f(e,t){var n=t===t.ownerDocument.body,i=n?{left:0,top:0}:t.getBoundingClientRect()
return{x:e.clientX+t.scrollLeft-i.left,y:e.clientY+t.scrollTop-i.top}}function p(e){var t=e.x,n=e.y
return i({},(0,k.browserPrefixToKey)("transform",S.default),"translate("+t+"px,"+n+"px)")}function m(e){return"translate("+e.x+","+e.y+")"}function h(e,t){return e.targetTouches&&(0,x.findInArray)(e.targetTouches,function(e){return t===e.identifier})||e.changedTouches&&(0,x.findInArray)(e.changedTouches,function(e){return t===e.identifier})}function g(e){return e.targetTouches&&e.targetTouches[0]?e.targetTouches[0].identifier:e.changedTouches&&e.changedTouches[0]?e.changedTouches[0].identifier:void 0}function v(e){if(e){var t=e.getElementById("react-draggable-style-el")
if(!t){t=e.createElement("style")
t.type="text/css"
t.id="react-draggable-style-el"
t.innerHTML=".react-draggable-transparent-selection *::-moz-selection {background: transparent;}\n"
t.innerHTML+=".react-draggable-transparent-selection *::selection {background: transparent;}\n"
e.getElementsByTagName("head")[0].appendChild(t)}e.body&&_(e.body,"react-draggable-transparent-selection")}}function y(e){try{e&&e.body&&w(e.body,"react-draggable-transparent-selection")
window.getSelection().removeAllRanges()}catch(e){}}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return C({touchAction:"none"},e)}function _(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)"+t+"(?!\\S)"))||(e.className+=" "+t)}function w(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)"+t+"(?!\\S)","g"),"")}Object.defineProperty(t,"__esModule",{value:!0})
var C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}
t.matchesSelector=o
t.matchesSelectorAndParentsTo=a
t.addEvent=r
t.removeEvent=s
t.outerHeight=l
t.outerWidth=u
t.innerHeight=c
t.innerWidth=d
t.offsetXYFromParent=f
t.createCSSTransform=p
t.createSVGTransform=m
t.getTouch=h
t.getTouchIdentifier=g
t.addUserSelectStyles=v
t.removeUserSelectStyles=y
t.styleHacks=b
t.addClassName=_
t.removeClassName=w
var x=n(0),k=n(19),S=function(e){return e&&e.__esModule?e:{default:e}}(k),N=""},function(e){e.exports=t},function(e,t,n){if("production"!==Object({DRAGGABLE_DEBUG:void 0}).NODE_ENV){var i="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}
e.exports=n(14)(o,!0)}else e.exports=n(17)()},function(e,t,n){"use strict"
var i=n(1),o=i
if("production"!==Object({DRAGGABLE_DEBUG:void 0}).NODE_ENV){var a=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i]
var o=0,a="Warning: "+e.replace(/%s/g,function(){return n[o++]})
"undefined"!=typeof console&&console.error(a)
try{throw new Error(a)}catch(e){}}
o=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument")
if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,i=Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o]
a.apply(void 0,[t].concat(i))}}}e.exports=o},function(e,t,n){"use strict"
function i(e,t,n){if(!e.props.bounds)return[t,n]
var i=e.props.bounds
i="string"==typeof i?i:c(i)
var o=d(e)
if("string"==typeof i){var a=o.ownerDocument,r=a.defaultView,s=void 0
s="parent"===i?o.parentNode:a.querySelector(i)
if(!(s instanceof HTMLElement))throw new Error('Bounds selector "'+i+'" could not find an element.')
var l=r.getComputedStyle(o),u=r.getComputedStyle(s)
i={left:-o.offsetLeft+(0,f.int)(u.paddingLeft)+(0,f.int)(l.marginLeft),top:-o.offsetTop+(0,f.int)(u.paddingTop)+(0,f.int)(l.marginTop),right:(0,h.innerWidth)(s)-(0,h.outerWidth)(o)-o.offsetLeft+(0,f.int)(u.paddingRight)-(0,f.int)(l.marginRight),bottom:(0,h.innerHeight)(s)-(0,h.outerHeight)(o)-o.offsetTop+(0,f.int)(u.paddingBottom)-(0,f.int)(l.marginBottom)}}(0,f.isNum)(i.right)&&(t=Math.min(t,i.right));(0,f.isNum)(i.bottom)&&(n=Math.min(n,i.bottom));(0,f.isNum)(i.left)&&(t=Math.max(t,i.left));(0,f.isNum)(i.top)&&(n=Math.max(n,i.top))
return[t,n]}function o(e,t,n){return[Math.round(t/e[0])*e[0],Math.round(n/e[1])*e[1]]}function a(e){return"both"===e.props.axis||"x"===e.props.axis}function r(e){return"both"===e.props.axis||"y"===e.props.axis}function s(e,t,n){var i="number"==typeof t?(0,h.getTouch)(e,t):null
if("number"==typeof t&&!i)return null
var o=d(n),a=n.props.offsetParent||o.offsetParent||o.ownerDocument.body
return(0,h.offsetXYFromParent)(i||e,a)}function l(e,t,n){var i=e.state,o=!(0,f.isNum)(i.lastX),a=d(e)
return o?{node:a,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:a,deltaX:t-i.lastX,deltaY:n-i.lastY,lastX:i.lastX,lastY:i.lastY,x:t,y:n}}function u(e,t){return{node:t.node,x:e.state.x+t.deltaX,y:e.state.y+t.deltaY,deltaX:t.deltaX,deltaY:t.deltaY,lastX:e.state.x,lastY:e.state.y}}function c(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function d(e){var t=m.default.findDOMNode(e)
if(!t)throw new Error("<DraggableCore>: Unmounted during event!")
return t}Object.defineProperty(t,"__esModule",{value:!0})
t.getBoundPosition=i
t.snapToGrid=o
t.canDragX=a
t.canDragY=r
t.getControlPosition=s
t.createCoreData=l
t.createDraggableData=u
var f=n(0),p=n(4),m=function(e){return e&&e.__esModule?e:{default:e}}(p),h=n(5)},function(e,t,n){"use strict";(function(e){function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){function e(e,t){var n=[],i=!0,o=!1,a=void 0
try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done);i=!0){n.push(r.value)
if(t&&n.length===t)break}}catch(e){o=!0
a=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),u=n(6),c=i(u),d=n(7),f=i(d),p=n(4),m=i(p),h=n(5),g=n(9),v=n(0),y=n(11),b=i(y),_={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}},w=_.mouse,C=function(e){function t(){var e,n,i,r
o(this,t)
for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c]
return r=(n=i=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),i.state={dragging:!1,lastX:NaN,lastY:NaN,touchIdentifier:null},i.handleDragStart=function(e){i.props.onMouseDown(e)
if(!i.props.allowAnyClick&&"number"==typeof e.button&&0!==e.button)return!1
var t=m.default.findDOMNode(i)
if(!t||!t.ownerDocument||!t.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!")
var n=t.ownerDocument
if(!(i.props.disabled||!(e.target instanceof n.defaultView.Node)||i.props.handle&&!(0,h.matchesSelectorAndParentsTo)(e.target,i.props.handle,t)||i.props.cancel&&(0,h.matchesSelectorAndParentsTo)(e.target,i.props.cancel,t))){var o=(0,h.getTouchIdentifier)(e)
i.setState({touchIdentifier:o})
var a=(0,g.getControlPosition)(e,o,i)
if(null!=a){var r=a.x,s=a.y,l=(0,g.createCoreData)(i,r,s);(0,b.default)("DraggableCore: handleDragStart: %j",l);(0,b.default)("calling",i.props.onStart)
if(!1!==i.props.onStart(e,l)){i.props.enableUserSelectHack&&(0,h.addUserSelectStyles)(n)
i.setState({dragging:!0,lastX:r,lastY:s});(0,h.addEvent)(n,w.move,i.handleDrag);(0,h.addEvent)(n,w.stop,i.handleDragStop)}}}},i.handleDrag=function(e){"touchmove"===e.type&&e.preventDefault()
var t=(0,g.getControlPosition)(e,i.state.touchIdentifier,i)
if(null!=t){var n=t.x,o=t.y
if(Array.isArray(i.props.grid)){var a=n-i.state.lastX,r=o-i.state.lastY,l=(0,g.snapToGrid)(i.props.grid,a,r),u=s(l,2)
a=u[0]
r=u[1]
if(!a&&!r)return
n=i.state.lastX+a,o=i.state.lastY+r}var c=(0,g.createCoreData)(i,n,o);(0,b.default)("DraggableCore: handleDrag: %j",c)
if(!1!==i.props.onDrag(e,c))i.setState({lastX:n,lastY:o})
else try{i.handleDragStop(new MouseEvent("mouseup"))}catch(e){var d=document.createEvent("MouseEvents")
d.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null)
i.handleDragStop(d)}}},i.handleDragStop=function(e){if(i.state.dragging){var t=(0,g.getControlPosition)(e,i.state.touchIdentifier,i)
if(null!=t){var n=t.x,o=t.y,a=(0,g.createCoreData)(i,n,o),r=m.default.findDOMNode(i)
r&&i.props.enableUserSelectHack&&(0,h.removeUserSelectStyles)(r.ownerDocument);(0,b.default)("DraggableCore: handleDragStop: %j",a)
i.setState({dragging:!1,lastX:NaN,lastY:NaN})
i.props.onStop(e,a)
if(r){(0,b.default)("DraggableCore: Removing handlers");(0,h.removeEvent)(r.ownerDocument,w.move,i.handleDrag);(0,h.removeEvent)(r.ownerDocument,w.stop,i.handleDragStop)}}}},i.onMouseDown=function(e){w=_.mouse
return i.handleDragStart(e)},i.onMouseUp=function(e){w=_.mouse
return i.handleDragStop(e)},i.onTouchStart=function(e){w=_.touch
return i.handleDragStart(e)},i.onTouchEnd=function(e){w=_.touch
return i.handleDragStop(e)},n),a(i,r)}r(t,e)
l(t,[{key:"componentWillUnmount",value:function(){var e=m.default.findDOMNode(this)
if(e){var t=e.ownerDocument;(0,h.removeEvent)(t,_.mouse.move,this.handleDrag);(0,h.removeEvent)(t,_.touch.move,this.handleDrag);(0,h.removeEvent)(t,_.mouse.stop,this.handleDragStop);(0,h.removeEvent)(t,_.touch.stop,this.handleDragStop)
this.props.enableUserSelectHack&&(0,h.removeUserSelectStyles)(t)}}},{key:"render",value:function(){return c.default.cloneElement(c.default.Children.only(this.props.children),{style:(0,h.styleHacks)(this.props.children.props.style),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}])
return t}(c.default.Component)
C.displayName="DraggableCore"
C.propTypes={allowAnyClick:f.default.bool,disabled:f.default.bool,enableUserSelectHack:f.default.bool,offsetParent:function(t,n){if(!0===e.browser&&t[n]&&1!==t[n].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:f.default.arrayOf(f.default.number),handle:f.default.string,cancel:f.default.string,onStart:f.default.func,onDrag:f.default.func,onStop:f.default.func,onMouseDown:f.default.func,className:v.dontSetMe,style:v.dontSetMe,transform:v.dontSetMe}
C.defaultProps={allowAnyClick:!1,cancel:null,disabled:!1,enableUserSelectHack:!0,offsetParent:null,handle:null,grid:null,transform:null,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){}}
t.default=C}).call(t,n(20))},function(e,t){"use strict"
function n(){}Object.defineProperty(t,"__esModule",{value:!0})
t.default=n},function(e,t,n){"use strict"
var i=n(13).default
e.exports=i
e.exports.default=i
e.exports.DraggableCore=n(10).default},function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n
return e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u=function(){function e(e,t){var n=[],i=!0,o=!1,a=void 0
try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done);i=!0){n.push(r.value)
if(t&&n.length===t)break}}catch(e){o=!0
a=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),d=n(6),f=i(d),p=n(7),m=i(p),h=n(4),g=i(h),v=n(18),y=i(v),b=n(5),_=n(9),w=n(0),C=n(10),x=i(C),k=n(11),S=i(k),N=function(e){function t(e){a(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.onDragStart=function(e,t){(0,S.default)("Draggable: onDragStart: %j",t)
if(!1===n.props.onStart(e,(0,_.createDraggableData)(n,t)))return!1
n.setState({dragging:!0,dragged:!0})}
n.onDrag=function(e,t){if(!n.state.dragging)return!1;(0,S.default)("Draggable: onDrag: %j",t)
var i=(0,_.createDraggableData)(n,t),o={x:i.x,y:i.y}
if(n.props.bounds){var a=o.x,r=o.y
o.x+=n.state.slackX
o.y+=n.state.slackY
var s=(0,_.getBoundPosition)(n,o.x,o.y),l=u(s,2),c=l[0],d=l[1]
o.x=c
o.y=d
o.slackX=n.state.slackX+(a-o.x)
o.slackY=n.state.slackY+(r-o.y)
i.x=o.x
i.y=o.y
i.deltaX=o.x-n.state.x
i.deltaY=o.y-n.state.y}if(!1===n.props.onDrag(e,i))return!1
n.setState(o)}
n.onDragStop=function(e,t){if(!n.state.dragging)return!1
if(!1===n.props.onStop(e,(0,_.createDraggableData)(n,t)))return!1;(0,S.default)("Draggable: onDragStop: %j",t)
var i={dragging:!1,slackX:0,slackY:0}
if(Boolean(n.props.position)){var o=n.props.position,a=o.x,r=o.y
i.x=a
i.y=r}n.setState(i)}
n.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,slackX:0,slackY:0,isElementSVG:!1}
return n}s(t,e)
c(t,[{key:"componentWillMount",value:function(){!this.props.position||this.props.onDrag||this.props.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}},{key:"componentDidMount",value:function(){void 0!==window.SVGElement&&g.default.findDOMNode(this)instanceof window.SVGElement&&this.setState({isElementSVG:!0})}},{key:"componentWillReceiveProps",value:function(e){!e.position||this.props.position&&e.position.x===this.props.position.x&&e.position.y===this.props.position.y||this.setState({x:e.position.x,y:e.position.y})}},{key:"componentWillUnmount",value:function(){this.setState({dragging:!1})}},{key:"render",value:function(){var e,t={},n=null,i=Boolean(this.props.position),a=!i||this.state.dragging,r=this.props.position||this.props.defaultPosition,s={x:(0,_.canDragX)(this)&&a?this.state.x:r.x,y:(0,_.canDragY)(this)&&a?this.state.y:r.y}
this.state.isElementSVG?n=(0,b.createSVGTransform)(s):t=(0,b.createCSSTransform)(s)
var u=this.props,c=u.defaultClassName,d=u.defaultClassNameDragging,p=u.defaultClassNameDragged,m=f.default.Children.only(this.props.children),h=(0,y.default)(m.props.className||"",c,(e={},o(e,d,this.state.dragging),o(e,p,this.state.dragged),e))
return f.default.createElement(x.default,l({},this.props,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),f.default.cloneElement(m,{className:h,style:l({},m.props.style,t),transform:n}))}}])
return t}(f.default.Component)
N.displayName="Draggable"
N.propTypes=l({},x.default.propTypes,{axis:m.default.oneOf(["both","x","y","none"]),bounds:m.default.oneOfType([m.default.shape({left:m.default.number,right:m.default.number,top:m.default.number,bottom:m.default.number}),m.default.string,m.default.oneOf([!1])]),defaultClassName:m.default.string,defaultClassNameDragging:m.default.string,defaultClassNameDragged:m.default.string,defaultPosition:m.default.shape({x:m.default.number,y:m.default.number}),position:m.default.shape({x:m.default.number,y:m.default.number}),className:w.dontSetMe,style:w.dontSetMe,transform:w.dontSetMe})
N.defaultProps=l({},x.default.defaultProps,{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},position:null})
t.default=N},function(e,t,n){"use strict"
var i=n(1),o=n(2),a=n(8),r=n(15),s=n(3),l=n(16)
e.exports=function(e,t){function n(e){var t=e&&(N&&e[N]||e[E])
if("function"==typeof t)return t}function u(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function c(e){this.message=e
this.stack=""}function d(e){function n(n,l,u,d,f,p,m){d=d||P
p=p||u
if(m!==s)if(t)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types")
else if("production"!==Object({DRAGGABLE_DEBUG:void 0}).NODE_ENV&&"undefined"!=typeof console){var h=d+":"+u
if(!i[h]&&r<3){a(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",p,d)
i[h]=!0
r++}}return null==l[u]?n?new c(null===l[u]?"The "+f+" `"+p+"` is marked as required in `"+d+"`, but its value is `null`.":"The "+f+" `"+p+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(l,u,d,f,p)}if("production"!==Object({DRAGGABLE_DEBUG:void 0}).NODE_ENV)var i={},r=0
var l=n.bind(null,!1)
l.isRequired=n.bind(null,!0)
return l}function f(e){function t(t,n,i,o,a){var r=t[n]
if(C(r)!==e)return new c("Invalid "+o+" `"+a+"` of type `"+x(r)+"` supplied to `"+i+"`, expected `"+e+"`.")
return null}return d(t)}function p(e){function t(t,n,i,o,a){if("function"!=typeof e)return new c("Property `"+a+"` of component `"+i+"` has invalid PropType notation inside arrayOf.")
var r=t[n]
if(!Array.isArray(r)){return new c("Invalid "+o+" `"+a+"` of type `"+C(r)+"` supplied to `"+i+"`, expected an array.")}for(var l=0;l<r.length;l++){var u=e(r,l,i,o,a+"["+l+"]",s)
if(u instanceof Error)return u}return null}return d(t)}function m(e){function t(t,n,i,o,a){if(!(t[n]instanceof e)){var r=e.name||P
return new c("Invalid "+o+" `"+a+"` of type `"+S(t[n])+"` supplied to `"+i+"`, expected instance of `"+r+"`.")}return null}return d(t)}function h(e){function t(t,n,i,o,a){for(var r=t[n],s=0;s<e.length;s++)if(u(r,e[s]))return null
return new c("Invalid "+o+" `"+a+"` of value `"+r+"` supplied to `"+i+"`, expected one of "+JSON.stringify(e)+".")}if(!Array.isArray(e)){"production"!==Object({DRAGGABLE_DEBUG:void 0}).NODE_ENV&&a(!1,"Invalid argument supplied to oneOf, expected an instance of array.")
return i.thatReturnsNull}return d(t)}function g(e){function t(t,n,i,o,a){if("function"!=typeof e)return new c("Property `"+a+"` of component `"+i+"` has invalid PropType notation inside objectOf.")
var r=t[n],l=C(r)
if("object"!==l)return new c("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+i+"`, expected an object.")
for(var u in r)if(r.hasOwnProperty(u)){var d=e(r,u,i,o,a+"."+u,s)
if(d instanceof Error)return d}return null}return d(t)}function v(e){function t(t,n,i,o,a){for(var r=0;r<e.length;r++){if(null==(0,e[r])(t,n,i,o,a,s))return null}return new c("Invalid "+o+" `"+a+"` supplied to `"+i+"`.")}if(!Array.isArray(e)){"production"!==Object({DRAGGABLE_DEBUG:void 0}).NODE_ENV&&a(!1,"Invalid argument supplied to oneOfType, expected an instance of array.")
return i.thatReturnsNull}for(var n=0;n<e.length;n++){var o=e[n]
if("function"!=typeof o){a(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",k(o),n)
return i.thatReturnsNull}}return d(t)}function y(e){function t(t,n,i,o,a){var r=t[n],l=C(r)
if("object"!==l)return new c("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.")
for(var u in e){var d=e[u]
if(d){var f=d(r,u,i,o,a+"."+u,s)
if(f)return f}}return null}return d(t)}function b(e){function t(t,n,i,o,a){var l=t[n],u=C(l)
if("object"!==u)return new c("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+i+"`, expected `object`.")
var d=r({},t[n],e)
for(var f in d){var p=e[f]
if(!p)return new c("Invalid "+o+" `"+a+"` key `"+f+"` supplied to `"+i+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "))
var m=p(l,f,i,o,a+"."+f,s)
if(m)return m}return null}return d(t)}function _(t){switch(typeof t){case"number":case"string":case"undefined":return!0
case"boolean":return!t
case"object":if(Array.isArray(t))return t.every(_)
if(null===t||e(t))return!0
var i=n(t)
if(!i)return!1
var o,a=i.call(t)
if(i!==t.entries){for(;!(o=a.next()).done;)if(!_(o.value))return!1}else for(;!(o=a.next()).done;){var r=o.value
if(r&&!_(r[1]))return!1}return!0
default:return!1}}function w(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function C(e){var t=typeof e
return Array.isArray(e)?"array":e instanceof RegExp?"object":w(t,e)?"symbol":t}function x(e){if(void 0===e||null===e)return""+e
var t=C(e)
if("object"===t){if(e instanceof Date)return"date"
if(e instanceof RegExp)return"regexp"}return t}function k(e){var t=x(e)
switch(t){case"array":case"object":return"an "+t
case"boolean":case"date":case"regexp":return"a "+t
default:return t}}function S(e){return e.constructor&&e.constructor.name?e.constructor.name:P}var N="function"==typeof Symbol&&Symbol.iterator,E="@@iterator",P="<<anonymous>>",O={array:f("array"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:function(){return d(i.thatReturnsNull)}(),arrayOf:p,element:function(){function t(t,n,i,o,a){var r=t[n]
if(!e(r)){return new c("Invalid "+o+" `"+a+"` of type `"+C(r)+"` supplied to `"+i+"`, expected a single ReactElement.")}return null}return d(t)}(),instanceOf:m,node:function(){function e(e,t,n,i,o){return _(e[t])?null:new c("Invalid "+i+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return d(e)}(),objectOf:g,oneOf:h,oneOfType:v,shape:y,exact:b}
c.prototype=Error.prototype
O.checkPropTypes=l
O.PropTypes=O
return O}},function(e){"use strict"
function t(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined")
return Object(e)}var n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable
e.exports=function(){try{if(!Object.assign)return!1
var e=new String("abc")
e[5]="de"
if("5"===Object.getOwnPropertyNames(e)[0])return!1
for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n
if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1
var i={}
"abcdefghijklmnopqrst".split("").forEach(function(e){i[e]=e})
return"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(e){for(var a,r,s=t(e),l=1;l<arguments.length;l++){a=Object(arguments[l])
for(var u in a)i.call(a,u)&&(s[u]=a[u])
if(n){r=n(a)
for(var c=0;c<r.length;c++)o.call(a,r[c])&&(s[r[c]]=a[r[c]])}}return s}},function(e,t,n){"use strict"
function i(e,t,n,i,l){if("production"!==Object({DRAGGABLE_DEBUG:void 0}).NODE_ENV)for(var u in e)if(e.hasOwnProperty(u)){var c
try{o("function"==typeof e[u],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",i||"React class",n,u,typeof e[u])
c=e[u](t,u,i,n,null,r)}catch(e){c=e}a(!c||c instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",i||"React class",n,u,typeof c)
if(c instanceof Error&&!(c.message in s)){s[c.message]=!0
var d=l?l():""
a(!1,"Failed %s type: %s%s",n,c.message,null!=d?d:"")}}}if("production"!==Object({DRAGGABLE_DEBUG:void 0}).NODE_ENV)var o=n(2),a=n(8),r=n(3),s={}
e.exports=i},function(e,t,n){"use strict"
var i=n(1),o=n(2),a=n(3)
e.exports=function(){function e(e,t,n,i,r,s){s!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e
var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t}
n.checkPropTypes=i
n.PropTypes=n
return n}},function(e,t){var n,i
!function(){"use strict"
function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t]
if(n){var i=typeof n
if("string"===i||"number"===i)e.push(n)
else if(Array.isArray(n))e.push(o.apply(null,n))
else if("object"===i)for(var r in n)a.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}var a={}.hasOwnProperty
void 0!==e&&e.exports?e.exports=o:(n=[],void 0!==(i=function(){return o}.apply(t,n))&&(e.exports=i))}()},function(e,t){"use strict"
function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform"
if("undefined"==typeof window||void 0===window.document)return""
var t=window.document.documentElement.style
if(e in t)return""
for(var n=0;n<r.length;n++)if(i(e,r[n])in t)return r[n]
return""}function i(e,t){return t?""+t+a(e):e}function o(e,t){return t?"-"+t.toLowerCase()+"-"+e:e}function a(e){for(var t="",n=!0,i=0;i<e.length;i++)if(n){t+=e[i].toUpperCase()
n=!1}else"-"===e[i]?n=!0:t+=e[i]
return t}Object.defineProperty(t,"__esModule",{value:!0})
t.getPrefix=n
t.browserPrefixToKey=i
t.browserPrefixToStyle=o
var r=["Moz","Webkit","O","ms"]
t.default=n()},function(e){function t(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function i(e){if(u===setTimeout)return setTimeout(e,0)
if((u===t||!u)&&setTimeout){u=setTimeout
return setTimeout(e,0)}try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function o(e){if(c===clearTimeout)return clearTimeout(e)
if((c===n||!c)&&clearTimeout){c=clearTimeout
return clearTimeout(e)}try{return c(e)}catch(t){try{return c.call(null,e)}catch(t){return c.call(this,e)}}}function a(){if(m&&f){m=!1
f.length?p=f.concat(p):h=-1
p.length&&r()}}function r(){if(!m){var e=i(a)
m=!0
for(var t=p.length;t;){f=p
p=[]
for(;++h<t;)f&&f[h].run()
h=-1
t=p.length}f=null
m=!1
o(e)}}function s(e,t){this.fun=e
this.array=t}function l(){}var u,c,d=e.exports={}
!function(){try{u="function"==typeof setTimeout?setTimeout:t}catch(e){u=t}try{c="function"==typeof clearTimeout?clearTimeout:n}catch(e){c=n}}()
var f,p=[],m=!1,h=-1
d.nextTick=function(e){var t=new Array(arguments.length-1)
if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n]
p.push(new s(e,t))
1!==p.length||m||i(r)}
s.prototype.run=function(){this.fun.apply(null,this.array)}
d.title="browser"
d.browser=!0
d.env={}
d.argv=[]
d.version=""
d.versions={}
d.on=l
d.addListener=l
d.once=l
d.off=l
d.removeListener=l
d.removeAllListeners=l
d.emit=l
d.prependListener=l
d.prependOnceListener=l
d.listeners=function(){return[]}
d.binding=function(){throw new Error("process.binding is not supported")}
d.cwd=function(){return"/"}
d.chdir=function(){throw new Error("process.chdir is not supported")}
d.umask=function(){return 0}}])})},2175:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=o(r),l=n(2),u=(o(l),n(5)),c=o(u),d=n(17),f=o(d),p=n(61),m=o(p),h=n(473),g=o(h),v=n(1178),y=o(v),b=n(2139),_=o(b),w=n(2176),C=o(w),x=n(7),k=o(x),S=["qTd16Oo7sC4","WDXckTq7eYU","WWI4wacb-p0","m703dyf06rU","PxrCJjTrLJs"].map(function(e){return{url:"https://www.youtube.com/watch?v="+e,thumbUrl:"https://img.youtube.com/vi/"+e+"/maxresdefault.jpg"}})
t.default=f.default.create({displayName:"BackgroundVideo",mixins:[(0,m.default)("editor")],bobcatPropTypes:_.default.bobcatPropTypes,getBobcatDefaultProps:_.default.getBobcatDefaultProps,componentDidMount:function(){this.props.onSetBackgroundItemSelectionHandlers("video",this._getBackgroundVideoItemSelectionHandlers())},_getVideoProps:function(){return{videoHtml:this.props.vidoeHtml,videoUrl:this.props.videoUrl,binding:this.getDefaultBinding().sub("_addVideoPanel"),onComponentDidMount:this.props.changePositionOfAddVideoPanel,updateVideoBg:this._updateVideoBg,showVideoPanel:this.getMeta("showVideoPanel")}},_updateVideoBg:function(e){switch(e.actionState){case"add":var t={videoHtml:e.videoHtml,url:e.url,textColor:"overlay",w:null,h:null,storage:null,storageKey:null,format:null,useImage:!1}
e.videoUrl&&(t.videoUrl=e.videoUrl)
this.updateData(t)
this.updateMeta({showVideoPanel:!1})
this.props.clearPreviewData()
e.lowResThumbnail&&this._adjustVideoBgThumbnail(e)
break
case"preview":this.props.storePreviewData()
this.updateData({videoHtml:e.videoHtml,url:e.url,textColor:"overlay",w:null,h:null,storage:null,storageKey:null,format:null})
break
case"endPreview":this.props.restorePreviewData()}},_adjustVideoBgThumbnail:function(e){var t=this,n=(0,c.default)("<img src='"+e.url+"' />")
n.load(function(){n[0].naturalWidth<200&&t.updateData({url:e.lowResThumbnail})})
n.error(function(){t.updateData({url:e.lowResThumbnail})})},_createEnterStockVideoFn:function(e){var t=this
return function(){t._updateVideoBg({videoHtml:g.default.getVideoHtmlByUrl(e.url,1280,720),url:e.thumbUrl,actionState:"preview"})}},_createClickStockVideoFn:function(e){var t=this
return function(){t._updateVideoBg({videoHtml:g.default.getVideoHtmlByUrl(e.url,1280,720),url:e.thumbUrl,actionState:"add"})
t.savePage()}},_onMouseLeaveStockVideo:function(){this._updateVideoBg({actionState:"endPreview"})},_onClickToggleVideoPanel:function(){this.updateMeta({showVideoPanel:!this.getMeta("showVideoPanel")})},_getBackgroundVideoItemSelectionHandlers:function(){var e=this
return{itemSelected:function(t){e._updateVideoBg({videoHtml:g.default.getVideoHtmlByUrl(t.url,1280,720),url:t.thumbUrl,actionState:"add"})
e.savePage()}}},_onClickMoreVideo:function(){var e=this.props.backgroundItemSelectionHandlers
y.default.pick({dialogType:"video",from:"background",handlers:e.video,backgroudImageHandlers:e.image,backgroudVideoHandlers:e.video})},_renderStockVideo:function(){var e=this
return a("ul",{className:"s-layout-menu-field stock-videos clearfix"},void 0,S.map(function(t,n){var i={backgroundImage:"url("+t.thumbUrl.replace("maxresdefault","mqdefault")+")",backgroundSize:"cover"}
return a("li",{className:"stock-video-button",style:i,onClick:e._createClickStockVideoFn(t),onMouseEnter:e._createEnterStockVideoFn(t),onMouseLeave:e._onMouseLeaveStockVideo},n,a("i",{className:"fa fa-video-camera"}))}),a("li",{className:"btn",onClick:this._onClickMoreVideo},void 0,a("span",{},void 0,i("Video|More"))))},render:function(){var e=this.props.visible
return a("div",{style:{display:e?"block":"none"}},void 0,this.getMeta("showVideoPanel")&&s.default.createElement(C.default,this._getVideoProps()),k.default.getIsStrikingly()&&this._renderStockVideo(),a("div",{className:"clearfix mb"},void 0,a("div",{className:"add-video-btn s-btn small no-margin dark-gray",onClick:this._onClickToggleVideoPanel},void 0,i("Video|Embed Video"))))}})
e.exports=t.default}).call(t,n(3))},2176:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=n(2),r=o(a),s=n(5),l=o(s),u=n(17),c=o(u),d=n(2177),f=o(d),p=n(473),m=o(p),h=n(122),g=o(h),v=n(29),y=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(v),b=n(61),_=o(b),w=n(95),C=o(w),x=n(2178),k=o(x)
t.default=c.default.createPageComponent({displayName:"BackgroundVideoPanel",mixins:[(0,_.default)("editor")],bobcatPropTypes:{callbacks:{onComponentDidMount:r.default.func.isRequired,updateVideoBg:r.default.func.isRequired,showVideoPanel:r.default.bool.isRequired}},componentWillMount:function(){this.initMeta({needToShowUrlError:!1,tempVideoUrl:this.props.videoUrl,isUploading:!1})},componentDidMount:function(){this.cbProps.onComponentDidMount()},_tempVideoUrl:function(){return this.getMeta("tempVideoUrl")},_needToShowUrlError:function(){return this.getMeta("needToShowUrlError")},_updateVideo:function(e){return this.cbProps.updateVideoBg(e)},_uploadSuccess:function(e,t){var n=this
return function(o){var a=(0,l.default)(o.message.html),r=a.attr("height"),s=a.attr("width")
switch(t){case"youtube":n._updateVideo({videoHtml:m.default.getYTIFrameHtml(m.default.getVideoID(e,t),s,r),videoUrl:e,url:m.default.getHDYTThumbnail(m.default.getVideoID(e,t)),lowResThumbnail:m.default.getNormalYTThumbnail(m.default.getVideoID(e,t)),actionState:"add"})
break
case"vimeo":n._updateVideo({videoHtml:m.default.getVimeoIFrameHtml(m.default.getVideoID(e,t),s,r),videoUrl:e,url:o.message.thumbnail_url,actionState:"add"})
break
default:window.alert(i("Video|Video format is not supported. Please use Youtube/Vimeo full URL only."))}n.updateMeta({isUploading:!1,needToShowUrlError:!1})
n.savePage()
C.default.track("Editor - Add Video Background")}},_uploadFail:function(){status.responseJSON
this.updateMeta({needToShowUrlError:!0,isUploading:!1})},_uploadVideo:function(){this.updateMeta({isUploading:!0})
var e=y.addProtocol(this.getMeta("tempVideoUrl")),t=m.default.getVideoType(e)
return f.default.upload({url:e,maxwidth:1440,success:this._uploadSuccess(e,t),error:this._uploadFail})},_onChangeUrl:function(e){this.updateMeta({tempVideoUrl:g.default.escapedValue(e.target.value)})},render:function(){return k.default.apply(this)}})
e.exports=t.default}).call(t,n(3))},2177:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),r=n(123),s=i(r),l=n(16),u=i(l),c=n(473),d=i(c),f=n(35),p=i(f),m=function(){function e(){o(this,e)}a(e,[{key:"upload",value:function(e){var t=d.default.getVideoType(e.url)
if(e.nativeVideo)return e.success({message:{html:d.default.getNormalVideoHtml(e.url,1280,800),thumbnail_url:""}})
if(!["youku","tudou","qq","facebook"].includes(t))return new p.default({type:"POST",url:u.default.VIDEO.CREATE(),data:{video:{url:e.url,maxwidth:e.maxwidth||700}},success:function(t){"retry"===t.html?s.default.poller(u.default.TASKS.POLL(t.message.type,t.message.id,1),e.success,e.error):"success"===t.html&&e.success(t)},error:e.error}).run()
var n=void 0
switch(t){case"youku":n=d.default.getYouKuHtml(e.url)
break
case"tudou":n=d.default.getTuDouHtml(e.url)
break
case"qq":n=d.default.getQQHtml(e.url)
break
case"facebook":n=d.default.getFacebookHtml(e.url)}return""!==n?e.success({message:{html:n,thumbnail_url:""}}):"function"==typeof e.error?e.error():void 0}}])
return e}()
t.default=new m
e.exports=t.default},2178:function(e,t,n){"use strict";(function(t){function i(){var e=r.DOM.input
return o.createElement("div",{className:"bg-video-panel s-point-right s-tooltip-dialog "+a.keys(a.pick({active:this.cbProps.showVideoPanel},a.identity)).join(" ")},o.createElement("div",{className:"menu-title"},t("Video|Use Youtube/Vimeo Video")),o.createElement("div",{className:"input-wrap"},o.createElement(e,{type:"text",placeholder:t("Video|Enter Youtube/Vimeo URL"),onChange:this._onChangeUrl,value:this._tempVideoUrl()}),this._getIsUploading()?null:o.createElement("span",{className:"no-border no-margin s-btn small yellow",onClick:this._uploadVideo},t("Video|Upload")),this._getIsUploading()?o.createElement("span",{className:"gray no-border no-margin s-btn small"},t("Video|Uploading...")):null),this._needToShowUrlError()?o.createElement("div",{className:"error-message"},o.createElement("div",{className:"fa fa-question-circle"}),"\n    ",t("Video|Video URL is invalid."),"\n    ",o.createElement(s,{},o.createElement("a",{href:"http://support.strikingly.com/hc/en-us/articles/215046387",target:"_blank"},t("Video|Learn more.")),o.createElement("a",{href:"http://help.sxl.cn/hc/zh-cn/articles/215309018",target:"_blank"},"了解更多"))):null,o.createElement("div",{className:"hint"},t("Video|Note: Video backgrounds won't play on phones or tablets. A thumbnail will be shown instead.")))}var o=n(0),a=n(1),r=n(34),s=n(399)
e.exports=function(){return i.apply(this,[])}}).call(t,n(3))},2179:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),c=n(0),d=(o(c),n(1)),f=o(d),p=n(2135),m=n(402),h=o(m),g=n(2140),v=o(g),y=n(117),b=o(y),_=n(8),w=o(_),C=n(7),x=(o(C),n(134)),k=o(x),S=function(e){function t(e){a(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.sectionName="blog section"
return n}s(t,e)
u(t,[{key:"componentDidMount",value:function(){var e=this;(0,this.props.addBlogCategoriesChangeListener)(function(){e.forceUpdate()})}},{key:"getRotationKeys",value:function(){var e=(this.props.themeName,this._getParsedLayoutVariation()),t=e.columns,n=e.thumbnail,i=e.snippet,o=e.showCategoryTabs
return this.props.layoutOptions.map(function(e){var a=e.replace("thumbnail","smallCircle"===n||"smallSquare"===n?n:"smallCircle")
a=a.replace("snippet","short"===i||"long"===i?i:"short")
a=a.replace("num","one"!==t?t:"three")
return a+"-"+(o?"show":"none")})}},{key:"_renderColumnsButton",value:function(){function e(e){return r[e]}var t=this,n=this._getParsedLayoutVariation(),o=n.columns,a=n.getAllColumns,r=a(),s=Object.keys(r)
return l(v.default,{keys:s,selectedKey:o,textMapping:e,labelText:i("Editor|Columns Per Row"),className:"small-buttons four",onSelect:function(e){return t._changeColumns({columns:e})}})}},{key:"_renderThumbnailDropdown",value:function(){var e=this,t=this._getParsedLayoutVariation(),n=t.getThumbnailSelectItem()
return n.length>0&&l("div",{className:"s-layout-menu-field drop-down-select"},void 0,l("div",{className:"s-layout-menu-label"},void 0,i("Editor|Thumbnail")),l("select",{value:this._getParsedLayoutVariation().thumbnail,onChange:function(t){return e._changeThumbnail({thumbnail:t.target.value})}},void 0,n.map(function(e,t){return l("option",{value:e.value},t,e.name)})))}},{key:"_renderSnippetDropdown",value:function(){var e=this,t=this._getParsedLayoutVariation(),n=t.getSnippetSelectItem()
return n.length>1&&l("div",{className:"s-layout-menu-field drop-down-select"},void 0,l("div",{className:"s-layout-menu-label"},void 0,i("Editor|Snippet")),l("select",{value:this._getParsedLayoutVariation().snippet,onChange:function(t){return e._patchLayout({snippet:t.target.value})}},void 0,n.map(function(e,t){return l("option",{value:e.value},t,e.name)})))}},{key:"_renderPostPerPageDropdown",value:function(){var e=this
return l("div",{className:"s-layout-menu-field drop-down-select"},void 0,l("div",{className:"s-layout-menu-label"},void 0,i("Editor|Posts Per Page")),l("select",{value:this._getBlogNumber(),onChange:function(t){e._changeBlogNumber(t.target.value)}},void 0,f.default.range(3,21).map(function(e,t){return l("option",{value:e},t,e)})))}},{key:"_renderShowCategoryCheckbox",value:function(){var e=this,t=this._getParsedLayoutVariation(),n=t.showCategoryTabs
return(0,this.props.getCategories)().length>0&&l("div",{className:"s-layout-menu-field layout-level-button layout-checkbox dark-bg",onClick:function(){e._patchLayout({showCategoryTabs:!n})}},void 0,l("input",{type:"checkbox",checked:n,onChange:function(){e._patchLayout({showCategoryTabs:!n})}}),l("span",{},void 0,i("Editor|Show category tabs")))}},{key:"renderLayoutOptions",value:function(){return l("div",{},void 0,this._renderColumnsButton(),this._renderThumbnailDropdown(),this._renderSnippetDropdown(),this._renderPostPerPageDropdown(),this._renderShowCategoryCheckbox())}},{key:"_getBlogNumber",value:function(){var e=this.props.layoutSetting.blogNumber,t=b.default.getBlogSetting(),n=t.previewNumber,i=e
i||(i=n)
return i||3}},{key:"_changeBlogNumber",value:function(e){this.props.updateLayoutSettings({blogNumber:Number(e)})}},{key:"_changeThumbnail",value:function(e){"one"!==this._getParsedLayoutVariation().columns&&"card"===e.thumbnail&&(e.snippet="none")
this._patchLayout(e)}},{key:"_changeColumns",value:function(e){var t=this._getParsedLayoutVariation(),n=t.columns
if(e.columns!==n&&("one"===n||"one"===e.columns)){e.thumbnail="landscape"
e.snippet="none"}this._patchLayout(e)}},{key:"_patchLayout",value:function(e){var t=Object.assign(this._getParsedLayoutVariation(),e),n=t.serialize()
this.props.updateLayout(n)}},{key:"_getParsedLayoutVariation",value:function(){return h.default.parseLayoutVariation(this._levelKeys.join("-"))}}])
return t}(p.BaseLayoutButton)
t.default=(0,k.default)(S,[],function(){return{themeName:w.default.getThemeName(),siteId:w.default.getId()}},function(){return{getCategories:function(){return b.default.getCategories()},addBlogCategoriesChangeListener:function(e){b.default.addBlogCategoriesChangeListener(e)}}})
e.exports=t.default}).call(t,n(3))},2180:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0})
var i=n(0)
t.BaseRotationDropDown=function(t){var n=t.rotationKeys,o=t.onChangeKey,a=t.selectedKey
return i.createElement("div",{className:"s-layout-menu-field drop-down-select"},i.createElement("select",{value:a,onChange:o},n.map(function(t,n){return i.createElement("option",{key:t,value:t},e("Layout")," ","ABCDEFGHI"[n])})))}
t.default=t.BaseRotationDropDown}).call(t,n(3))},2181:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=(o(r),n(2)),l=o(s),u=n(2147),c=o(u),d=n(6),f=o(d),p=n(471),m=o(p),h=n(17),g=o(h),v=n(117),y=o(v),b=n(8),_=o(b),w=n(134),C=o(w),x=g.default.createPageComponent({mixins:[m.default.enableAfterUpdate()],displayName:"BlogSectionCategorySelector",bobcatPropTypes:{data:{category:l.default.object,binding:l.default.object}},getBobcatDefaultProps:function(){return{data:{category:f.default.Map({id:"all"})}}},componentDidMount:function(){var e=this;(0,this.props.addBlogCategoriesChangeListener)(function(t){"all"===e.props.category.get("id")||y.default.isCategoryIdExist(e.props.category.get("id"))?t===e.props.category.get("id")&&e.forceUpdate():e._onChangeCategory({value:"all"})})},_createDropdownOptions:function(){var e=this.props.getCategories,t=this.props.category.get("id"),n=e().map(function(e){return{value:e.id,label:e.id.toString()===t.toString()?a("div",{className:"option capitalize selected"},void 0,e.name):a("div",{className:"option capitalize"},void 0,e.name)}})
n.length&&"all"!==t&&n.unshift({value:"all",label:a("div",{className:"option"},void 0,i("Sections|All Categories"))})
return n},_getSelectedCategoryName:function(e){var t=this.props.getCategories,n=t(),o=n.find(function(t){return t.id.toString()===e.toString()})
return o?o.name:i("Sections|All Categories")},_onChangeCategory:function(e){var t=this,n=e.value
this.updateData({category:{id:n,name:this._getSelectedCategoryName(n)}})
setTimeout(function(){t.savePage()},1)},render:function(){var e=this.props.category
return this._createDropdownOptions().length<1?null:a("div",{className:"s-component s-category-selector no-text-transform"},void 0,a("div",{className:"s-component-editor",rel:"tooltip-left",title:i("all"===e.get("id")?"Sections|Select a category for this section.":"Sections|Only show posts from a certain category.")},void 0,a(c.default,{options:this._createDropdownOptions(),value:this._getSelectedCategoryName(this.props.category.get("id")),onChange:this._onChangeCategory})))}})
t.default=(0,C.default)(x,[],function(){return{pageId:_.default.getId()}},function(){return{addBlogCategoriesChangeListener:function(e){y.default.addBlogCategoriesChangeListener(e)},getCategories:function(){return y.default.getCategories()}}})
e.exports=t.default}).call(t,n(3))},2182:function(e,t,n){"use strict";(function(t){var i=n(0)
n(1)
e.exports=function(){return i.createElement("div",{className:"s-blog-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title"},t("Sections|Our Blog"))),i.createElement("div",{className:"blog"},i.createElement("div",{className:"blog-row"},i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/blog-image-1.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|New Blog Feature!")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|September 17")))),i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/blog-image-2.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|Lessons Learned from Starting Up")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|September 12")))),i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/blog-image-3.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|Our Commitment to Service")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|August 30"))))),i.createElement("div",{className:"blog-row"},i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/backgrounds/things/t121.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|New Blog Feature!")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|September 17")))),i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/backgrounds/cityscape/t170.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|Lessons Learned from Starting Up")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|September 12")))),i.createElement("div",{className:"blog-post"},i.createElement("div",{className:"blog-post-image"},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/backgrounds/things/t121.jpg"})),i.createElement("div",{className:"blog-post-content"},i.createElement("div",{className:"blog-post-title s-font-heading"},t("Sections|Our Commitment to Service")),i.createElement("div",{className:"blog-post-subtitle"},t("Sections|August 30")))))))))}}).call(t,n(3))},2183:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){var n=[],i=!0,o=!1,a=void 0
try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done);i=!0){n.push(r.value)
if(t&&n.length===t)break}}catch(e){o=!0
a=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),d=n(1),f=o(d),p=n(0),m=(o(p),n(2135)),h=function(e){function t(e){a(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),i=e.themeName
n.cacheLevel="perspective"===i?1:0
n.sectionName="new_media"
return n}s(t,e)
c(t,[{key:"updateCachedKeys",value:function(e){var t=this.props.themeName,n="perspective"===t?3:2
e[n]=this._levelKeys[n]
this._updateLayout(e)}},{key:"updateToDefaultLayout",value:function(e){var t=n(2138),i=this.props.themeName,o="perspective"===i?1:0,a=f.default.clone(this._levelKeys)
a[o]=e
var r=t.getDefaultLayoutKey(i,a.join("-"))
this.props.updateLayout(r)}},{key:"getRotationKeys",value:function(){var e=u(this._levelKeys,4),t=e[0],n=e[1],i=e[2],o=e[3]
switch(t){case"row":return this._getKeysByLevel(3).map(function(e){return"row-"+n+"-"+i+"-"+e})
case"col":return this._getKeysByLevel(1).map(function(e){return"col-"+e+"-"+i})
case"media":return this._getKeysByLevel(1).map(function(e){return"media-"+e+"-"+i})
case"mediaLeft":case"mediaRight":case"center":return["mediaLeft","mediaRight","center"].map(function(e){return e+"-"+n+"-"+i+"-"+o})
default:return[]}}},{key:"getButtonClassMapping",value:function(){return"perspective"===this.props.themeName?["big-buttons","big-buttons",this._getSmallButtonClass(2),"big-buttons"]:["big-buttons","media"===this._levelKeys[0]?"big-buttons":this._getSmallButtonClass(1),"big-buttons","big-buttons"]}},{key:"renderLayoutOptions",value:function(){var e=this.props.themeName
return l("div",{},void 0,this._getKeysByLevel(0)&&this._renderLayoutButtons(0),this._getKeysByLevel(1)&&this._renderLayoutButtons(1),"perspective"===e?this._getKeysByLevel(3)&&this._renderCheckBox({levelNum:3,checkedKey:"button",unCheckedKey:"text",labelText:i("Editor|Show Buttons")}):l("div",{},void 0,this._getKeysByLevel(3)&&this._renderLayoutButtons(3),this._getKeysByLevel(2)&&this._renderCheckBox({levelNum:2,checkedKey:"button",unCheckedKey:"text",labelText:i("Editor|Show Buttons")})))}}])
return t}(m.BaseLayoutButton)
t.default=(0,m.connectToStores)(h)
e.exports=t.default}).call(t,n(3))},2184:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(2148)
e.exports=t.default},2185:function(e,t,n){"use strict";(function(t){var i=n(0)
n(1)
e.exports=function(){return i.createElement("div",{className:"s-cta-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),i.createElement("div",{className:"button s-font-body"},t("Sections|"+this.props.content.components.button1.text)))))}}).call(t,n(3))},2186:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=n(190),r=o(a),s=n(8),l=o(s),u=n(2134),c=o(u),d={mixins:[c.default],displayName:"EcommerceSection",_showLayoutButton:function(){return r.default.canUse("ecommerce_layout")},componentWillMount:function(){var e=l.default.getThemeName(),t=n(1867)
this._getLayoutBinding().sub("layout_variation").set(t.getDefaultLayoutKey(e,this._getLayoutVariation()))},_getLayoutOptions:function(){var e=n(1867),t=l.default.getThemeName()
return e.getLayoutOptions(t)},render:function(){i("Editor|Simple Store")
i("Editor|Sell products right on your site! Manage orders, payments, and more.")
return this.getTemplate().apply(this)}}
t.default=d
e.exports=t.default}).call(t,n(3))},2187:function(e,t,n){"use strict";(function(t){var i=n(0)
n(1)
e.exports=function(){return i.createElement("div",{className:"no-bg s-ecommerce-thumb s-section-thumb"},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}}))),i.createElement("div",{className:"p50"},i.createElement("div",{className:"store-image"},i.createElement("img",{src:this._getEcommerceProductImage()}))),i.createElement("div",{className:"p50"},i.createElement("div",{className:"item-title s-font-heading"},t("Sections|Smart Light Bulbs")),i.createElement("div",{className:"item-body-text s-font-body"},"$49.99"),i.createElement("div",{className:"item-subtitle s-font-body"},t("Sections|While you might not need all...")),i.createElement("div",{className:"form-thumb s-font-body"},i.createElement("div",{className:"selection-thumb"},i.createElement("div",{className:"select-box"},t("Sections|Purple"),"\n            ",i.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/content/selector.png"}))),i.createElement("div",{className:"input-thumb"},i.createElement("div",{className:"input-box"},"1")),i.createElement("div",{className:"button"},t("Sections|Buy Now"))))))}}).call(t,n(3))},2188:function(e,t,n){"use strict";(function(t){function i(){var e=this.getDefaultBinding().sub("sources")
return o.createElement("div",{className:"s-gallery "+this._getGalleryClassName()+(this.props.isArranging?" s-arranging":""),ref:"galleryListDOM"},!this.isEditMode()||this._isInNativeWeb()||this._isGalleryEmpty()?null:o.createElement("div",{className:"center edit-buttons gallery-add-image top-gallery-buttons"},o.createElement("div",{className:"s-small-black-button",onClick:this._onClickAddImageFromTop},"\n      ",t("Add Images"),"\n    "),o.createElement("div",{className:"s-small-black-button",onClick:this._onClickAddVideoFromTop,style:{marginLeft:"20px"}},"\n      ",t("Add Videos"),"\n    ")),this.isEditMode()?o.createElement("div",{},"\n    ",this._renderForEditor(),"\n  "):null,this.isEditMode()?null:o.createElement("div",{},o.createElement("div",{},this._renderForShow()),this._needToShowPagination()?o.createElement("div",{className:"s-component s-gallery-pagination s-text"},o.createElement("div",{className:"s-component-content"},1!=this._pagesNum?o.createElement("a",{className:"less-link s-common-link",onClick:this._onClickShowLess},t("Editor|Show less")):null,e.get().size>this._pagesNum*this._baseItemNum?o.createElement("a",{className:"more-link s-common-link",onClick:this._onClickShowMore},t("Editor|Show more")):null)):null),null,this.isEditMode()&&!this._isInNativeWeb()?o.createElement("div",{className:"center edit-buttons gallery-add-image"},o.createElement("div",{className:"s-small-black-button",onClick:this._onClickAddImage},"\n      ",t("Add Images"),"\n    "),o.createElement("div",{className:"s-small-black-button",onClick:this._onClickAddVideo,style:{marginLeft:"20px"}},"\n      ",t("Add Videos"),"\n    ")):null,this._isInNativeWeb()?o.createElement("div",{className:"native-button-wrapper"},!this.props.isArranging&&this.props.sources.size>0?o.createElement("div",{className:"s-small-black-button",onClick:this.props.toggleEditor},o.createElement("img",{src:a.cdnAssetPath("/images/icons/native/ic_settings_white_3x.png")}),"\n      ",t("Mobile|Manage items"),"\n    "):null,this.props.isArranging&&this.props.sources.size>0?o.createElement("div",{className:"s-small-black-button",onClick:this.props.toggleEditor},o.createElement("img",{src:a.cdnAssetPath("/images/icons/native/ic_check_1_white_3x.png")}),"\n      ",t("Mobile|Done"),"\n    "):null,o.createElement("div",{className:"s-small-black-button",onClick:this._onClickNativeAddImage.bind(null,"bottom")},o.createElement("img",{src:a.cdnAssetPath("/images/icons/native/ic_add_3x.png")}),"\n      ",t("Mobile|Add Image"),"\n    ")):null)}var o=n(0),a=(n(1),n(21))
e.exports=function(){return i.apply(this,[])}}).call(t,n(3))},2189:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),d=function e(t,n,i){null===t&&(t=Function.prototype)
var o=Object.getOwnPropertyDescriptor(t,n)
if(void 0===o){var a=Object.getPrototypeOf(t)
return null===a?void 0:e(a,n,i)}if("value"in o)return o.value
var r=o.get
return void 0!==r?r.call(i):void 0},f=n(0),p=o(f),m=n(1),h=o(m),g=n(291),v=o(g),y=n(46),b=o(y),_=n(2150),w=o(_),C=n(2151),x=o(C),k=n(21),S=(function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e}(k),null),N=10,E=function(e){function t(){a(this,t)
var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))
e._canRenderLayout=void 0
e._currentIndex=void 0
e._isDragging=!1
e._itemWidth=0
e._columnsNum=3
e._renderList=void 0
e._heightList=void 0
e._itemsList=void 0
e._resizeFn=h.default.debounce(function(){var t=e._updateLayoutMeta()
e._updateSize()
e._canRenderLayout&&(t?e._renderLayout():e.forceUpdate())},100)
e._onDrag=h.default.debounce(function(t,n){if(e._isDragging){var i=e._itemsList[e._currentIndex].listIndex,o=-1
Math.abs(n.x)>e._itemWidth/2+N&&(n.x>=0?i+=Math.ceil((n.x-e._itemWidth/2-N)/(e._itemWidth+N),10):i-=Math.ceil((-n.x-e._itemWidth/2-N)/(e._itemWidth+N),10))
i<0&&(i=0)
i>=e._renderList.length&&(i=e._renderList.length-1)
for(var a=e._renderList[i].itemList,r=e._itemsList[e._currentIndex].top+e._heightList[e._currentIndex]*e._itemWidth/2+n.y,s=0;s<a.length;s++)if(a[s].top<r&&a[s].bottom>r){o=s
break}var l=e._itemsList[e._currentIndex].listIndex===i
l&&r>a[a.length-1].bottom&&(o=a.length)
l&&o===a.length&&(o=a.length-1)
var u=e._itemsList[e._currentIndex].indexInList===o;-1===o||l&&u||e._doVisualReorder({oldListIndex:e._itemsList[e._currentIndex].listIndex,oldIndexInList:e._itemsList[e._currentIndex].indexInList,newListIndex:i,newIndexInList:o})}},50)
e._getUpdateHeightFn=v.default.boundParamsMemoizer(e._updateHeight,e)
return e}s(t,e)
c(t,[{key:"componentWillMount",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentWillMount",this).call(this)
this._updateList("reset")}},{key:"componentWillReceiveProps",value:function(e){var t=e.binding.default.sub("sources").get().size
if(t>this._heightList.length){this._updateList("add")
this._renderLayout()}else if(t<this._heightList.length){this._updateList("delete")
this._renderLayout()}}},{key:"componentDidMount",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentDidMount",this).call(this)
$(window).on("resize",this._resizeFn)
this._resizeFn()}},{key:"componentWillUnmount",value:function(){$(window).off("resize",this._resizeFn)}},{key:"_updateHeight",value:function(e,t){if(!isNaN(t)&&this._heightList[e]!==t){this._heightList[e]=t
if(this._heightList.every(function(e){return!isNaN(e)})&&this._heightList.join("")!==this._lastHeightList.join("")){this._lastHeightList=h.default.clone(this._heightList)
this._renderLayout()}}}},{key:"_visualDelete",value:function(e){this._heightList[e]=0
var t=this._itemsList[e],n=t.listIndex,i=t.indexInList
this._renderList[n].itemList.splice(i,1)
this._adjustListItemPosition(n)
this._adjustHeight()
this._reorderGallery()}},{key:"_doVisualReorder",value:function(e){var t=this._itemsList[this._currentIndex].top,n=this._itemsList[this._currentIndex].listIndex,i=this._renderList[e.oldListIndex].itemList,o=this._renderList[e.newListIndex].itemList,a=i[e.oldIndexInList]
if(i===o){i[e.oldIndexInList]=i[e.newIndexInList]
i[e.newIndexInList]=a
this._adjustListItemPosition(e.oldListIndex)}else{var r={index:a.index,listIndex:e.newListIndex}
i.splice(e.oldIndexInList,1)
o.splice(e.newIndexInList,0,r)
this._adjustListItemPosition(e.oldListIndex)
this._adjustListItemPosition(e.newListIndex)}var s=this._itemsList[this._currentIndex].top,l=this._itemsList[this._currentIndex].listIndex,u=(l-n)*(this._itemWidth+N),c=s-t
this._adjustHeight()
this._resetCurrentPosition(u,c)
this.forceUpdate()}},{key:"_reorderGallery",value:function(){var e=this,t=[],n=[]
this._renderList.forEach(function(){t.push({currentHeight:0,itemList:[]})})
var i=0
this._renderList.forEach(function(e){i+=e.itemList.length})
for(var o=0;o<i;o++){for(var a=null,r=null,s=[];!r;){a=function(e){var n=-1,i=999999
t.forEach(function(t,o){if(!e.some(function(e){return e===o})&&t.currentHeight<i){n=o
i=t.currentHeight}})
return n}(s)
r=this._renderList[a].itemList[t[a].itemList.length]
s.push(a)}n.push(r.index)
t[a].currentHeight+=this._heightList[r.index]
t[a].itemList.push(r.index)}n.length<this.getDefaultBinding().sub("sources").get().size?this._onReorderAfterDelete(n):this._onReorder(n)
this._heightList=n.map(function(t){return e._heightList[t]})
this._renderLayout()}},{key:"_onReorderAfterDelete",value:function(e){var t=this.getDefaultBinding().sub("sources")
b.default.reorderRepeatableWithSplice(e,t)
this.savePage()}},{key:"_updateSize",value:function(){this._itemWidth=($(this.refs.galleryListDOM).width()-(this._columnsNum-1)*N)/this._columnsNum
this._adjustAllList()}},{key:"_updateList",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"reset",t=this.getDefaultBinding().sub("sources").get().size
this._renderList=[]
this._renderList.length=this._columnsNum
switch(e){case"reset":this._heightList=[]
this._heightList.length=t
for(var n=0;n<t;n++)this._heightList[n]=0
break
case"add":this._heightList.length=t
for(var i=0;i<t;i++)this._heightList[i]=this._heightList[i]||0
break
case"delete":this._heightList.length=t}this._lastHeightList=[]}},{key:"_isEditing",value:function(){var e=this
return this._heightList.some(function(t,n){return"editor"===e.getDefaultBinding().sub("sources."+n).get("_state")})}},{key:"_getShortestIndex",value:function(){var e=-1,t=999999
this._renderList.forEach(function(n,i){var o=n.currentHeight+5e-4*i
if(o<t){e=i
t=o}})
return e}},{key:"_getTallestIndex",value:function(){var e=-1,t=-1
this._renderList.forEach(function(n,i){if(n.currentHeight>t){e=i
t=n.currentHeight}})
return e}},{key:"_getTotalHeight",value:function(){if(!this._itemsList)return 0
for(var e=Math.min(this._pagesNum*this._baseItemNum,this._itemsList.length),t=0,n=0;n<e;n++)this._itemsList[n].bottom>t&&(t=this._itemsList[n].bottom)
return t}},{key:"_getItemPosition",value:function(e,t){if(!this._itemsList)return{width:this._itemWidth+"px",left:0,top:0}
var n={opacity:this._heightList[e]?1:0,width:this._itemWidth+"px",height:this._itemsList[e].bottom-this._itemsList[e].top+"px",left:this._itemsList[e].left+"px",top:this._itemsList[e].top+"px",zIndex:"editor"===this.getDefaultBinding().sub("sources."+e).get("_state")?100:"initial"}
t&&(n.height=this._itemsList[e].bottom-this._itemsList[e].top+"px")
return n}},{key:"_getDragProps",value:function(e){var t=this
return{onStart:function(){t._currentIndex=e},onDrag:function(e,n){if(!t._isDragging){t._isDragging=!0
return t.forceUpdate()}t._onDrag(e,n)},onStop:function(){if(t._isDragging){t._resetCurrentPosition()
t._isDragging=!1
t._reorderGallery()}},allowAnyClick:!1,disabled:this._isEditing()||!1,start:{x:0,y:0},zIndex:100}}},{key:"_adjustHeight",value:function(){var e=this._getTallestIndex(),t=this._renderList[e].itemList.pop()
if(t){this._renderList[e].currentHeight-=this._heightList[t.index]
if(this._getShortestIndex()===e){this._renderList[e].itemList.push(t)
this._renderList[e].currentHeight+=this._heightList[t.index]}else{var n=this._getShortestIndex()
this._renderList[n].itemList.push(t)
this._renderList[n].currentHeight+=this._heightList[t.index]
this._adjustListItemPosition(n)
this._adjustHeight()}}}},{key:"_adjustListItemPosition",value:function(e){var t=this,n=this._renderList[e],i=this._renderList[e].itemList,o=e*(this._itemWidth+N)
n.currentHeight=0
i.forEach(function(i,a){i.listIndex=e
i.indexInList=a
i.left=o
i.top=n.currentHeight*t._itemWidth+a*N
i.bottom=i.top+t._heightList[i.index]*t._itemWidth
t._itemsList[i.index]=h.default.clone(i)
n.currentHeight+=t._heightList[i.index]})}},{key:"_adjustAllList",value:function(){var e=this
this._renderList.forEach(function(t,n){e._adjustListItemPosition(n)})}},{key:"_resetCurrentPosition",value:function(e,t){if(this.refs["draggableItem"+this._currentIndex]){var n=this.refs["draggableItem"+this._currentIndex]
e||t?n.setState({x:n.state.x-e,y:n.state.y-t}):n.setState({x:0,y:0})}}},{key:"_renderLayout",value:function(){var e=this
this._canRenderLayout=!0
this._renderList=[]
this._itemsList=[]
for(var t=0;t<this._columnsNum;t++)this._renderList.push({currentHeight:0,itemList:[]})
this._heightList.forEach(function(t,n){var i=e._getShortestIndex(),o=e._renderList[i],a={index:n}
o.itemList.push(a)
o.currentHeight+=t})
this._adjustAllList()
this.forceUpdate()}},{key:"render",value:function(){var e=this,t=this.getDefaultBinding().sub("sources"),n={height:this._getTotalHeight()+"px",width:"100%",display:this._isGalleryEmpty()||!this._canRenderLayout?"none":"block"},o=this._canRenderLayout&&this._isDragging&&"number"==typeof this._currentIndex,a=t.get().size,r=this._baseItemNum*this._pagesNum,s=function(n){return u("div",{className:"position-wrapper","data-index":n,style:e._getItemPosition(n)},t.sub(n).get("id")+"_wrapper",u("div",{className:"inner-wrapper"},void 0,p.default.createElement(x.default,l({showType:"verticalGallery",index:n,key:t.sub(n).get("id"),updateItemHeight:e._getUpdateHeightFn(n),isArranging:e.props.isArranging},e._getGalleryItemProps(t.sub(n))))))}
return p.default.createElement("div",{ref:"galleryListDOM",className:"s-gallery s-vertical-gallery "+(this._isDragging?"dragging":"")+(this.props.isArranging?" s-arranging":"")},!1,this._isGalleryEmpty()?u("div",{className:"empty-list s-common-status s-font-body"},void 0,i("Mobile|No content.")):u("div",{style:{position:"relative"}},void 0,p.default.createElement("div",{style:n,className:"vertical-list",ref:"verticalList"},t.get().map(function(n,i){var o=i<r,a=i>=r,u=!e.props.isArranging&&!1,c=u||o
return a?null:c?s(i):p.default.createElement(S,l({ref:"draggableItem"+i},e._getDragProps(i),{key:t.sub(i).get("id")+"_drag_wrapper"}),s(i))}),o&&u("div",{className:"position-wrapper dragging-placeholder",style:this._getItemPosition(this._currentIndex,"placeholder")},"placeholder"))),this._needToShowPagination()&&u("div",{className:"s-gallery-pagination s-component s-text"},void 0,u("div",{className:"s-component-content"},void 0,this._pagesNum>1&&u("a",{className:"s-common-link less-link",onClick:this._onClickShowLess},void 0,i("Editor|Show less")),a>r&&u("a",{className:"s-common-link more-link",onClick:this._onClickShowMore},void 0,i("Editor|Show more")))),!1,!1)}}])
return t}(w.default)
t.default=E
e.exports=t.default}).call(t,n(3))},2190:function(e,t,n){"use strict";(function(i){Object.defineProperty(t,"__esModule",{value:!0})
var o=n(2134),a=function(e){return e&&e.__esModule?e:{default:e}}(o),r={mixins:[a.default],displayName:"HTMLSection",_getLayoutOptions:function(){return[]},render:function(){i("Editor|App Store & HTML")
i("Editor|Embed a map, a calendar, a document, a form or any HTML code!")
return this.getTemplate().apply(this)}}
t.default=r
e.exports=t.default}).call(t,n(3))},2191:function(e,t,n){"use strict";(function(t){var i=n(0),o=(n(1),n(399)),a=n(21)
e.exports=function(){return i.createElement("div",{className:"s-html-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),i.createElement("div",{className:"app-store-thumb"},i.createElement(o,{},i.createElement("img",{src:"//uploads.strikinglycdn.com/static/sections/content/appstore.jpg"}),i.createElement("img",{src:a.cdnAssetPath("/images/editor2/appstore-sxl-1-min.png")}))))))}}).call(t,n(3))},2192:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),s=n(0),l=o(s),u=n(397),c=o(u),d=n(398),f=o(d),p=n(1866),m=o(p),h=n(1865),g=o(h),v=n(8),y=o(v),b=n(7),_=o(b),w=n(2134),C=o(w),x={mixins:[C.default],displayName:"ContactsSection",componentWillMount:function(){var e=y.default.getThemeName(),t=this._getLayoutVariation()
this.getDefaultBinding().get("template_name")
t.split("-").length>=2&&("perspective"===e?["mediaLeft","mediaRight","center"].includes(t.split("-")[0])||(t="center-"+t):["mediaLeft","mediaRight","center"].includes(t.split("-")[0])&&(t=t.split("-").slice(1).join("-")))
var i=n(2143)
this._getLayoutBinding().sub("layout_variation").set(i.getDefaultLayoutKey(e,t))},_getLayoutOptions:function(){var e=y.default.getThemeName()
return n(2143).getLayoutOptions(e)},_renderRepeatable:function(e){var t=this,i=n(2143),o=y.default.getThemeName(),s=this._getLayoutVariation(),u=this.getComponentBinding(e),d=this.getRepeatableBinding(e),p=void 0
"function"==typeof i.getLayout(o,s)&&(p=i.getLayout(o,s)(d))
var h=function(e,n){var i=d.sub(n),o=p,s=o.itemClass,u=p,m=u.naturalImage
return l.default.createElement(g.default,a({className:s,binding:{default:i,listBinding:d},index:n},t._getRepeatableItemProps(d,n)),r("div",{className:"s-item-media-group s-mhi"},void 0,l.default.createElement(f.default,a({size:"480x960>",moreIcons:!0,naturalSize:m},t.getReduxComponentProps("image1",i)))),t.sbHasContent("text1",{parentBinding:i})&&(_.default.getIsSxl()||!m)&&r("div",{className:"s-item-text-group"},void 0,l.default.createElement(c.default,a({tagName:"div",applyWordBreaks:!0,textType:"body"},t.getComponentProps("text1",i)))))},v=this.getComponentProps("repeatable1")
return l.default.createElement(m.default,a({className:"s-mh"+("editor"===u.get("_state")?" s-arranging":"")},v),u.get("list").map(h).toArray())},render:function(){i("Editor|Contact")
i("Editor|A list of small icons. Good for social media.")
return this.getTemplate().apply(this)}}
t.default=x
e.exports=t.default}).call(t,n(3))},2193:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),s=n(2135),l=function(e){function t(e){i(this,t)
var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.showBaseRotationDropdown=!0
n.sectionName="new_icon"
return n}a(t,e)
r(t,[{key:"getRotationKeys",value:function(){return"perspective"===this.props.themeName?["mediaLeft-col","mediaRight-col","center-col"]:["col","natural"]}}])
return t}(s.BaseLayoutButton)
t.default=(0,s.connectToStores)(l)
e.exports=t.default},2194:function(e,t,n){"use strict";(function(i){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),l=function(){function e(e,t){var n=[],i=!0,o=!1,a=void 0
try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done);i=!0){n.push(r.value)
if(t&&n.length===t)break}}catch(e){o=!0
a=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),c=n(0),d=(function(e){e&&e.__esModule}(c),n(2135)),f=function(e){function t(e){o(this,t)
var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
"perspective"===n.props.themeName&&"text"===n._levelKeys[0]&&(n.hideAdvancedOptions=!0)
n.sectionName="new_text"
return n}r(t,e)
u(t,[{key:"updateToDefaultLayout",value:function(e){var t=n(1868),i=this.props.themeName,o=_.clone(this._levelKeys)
o[0]=e
var a=t.getDefaultLayoutKey(i,o.join("-"))
this.props.updateLayout(a)}},{key:"getRotationKeys",value:function(){var e=l(this._levelKeys,3),t=e[0],n=(e[1],e[2])
switch(t){case"box":return this._getKeysByLevel(1).map(function(e){return"box-"+e+"-"+n})
case"text":return this._getKeysByLevel(1).map(function(e){return"text-"+e+"-"+n})
default:return[]}}},{key:"getButtonClassMapping",value:function(){return"perspective"===this.props.themeName?["big-buttons","big-buttons","big-buttons"]:["big-buttons",this._getSmallButtonClass(1),"big-buttons"]}},{key:"renderLayoutOptions",value:function(){var e=this.props.themeName
return s("div",{},void 0,"perspective"!==e&&this._getKeysByLevel(0)&&this._renderLayoutButtons(0),this._getKeysByLevel(1)&&this._renderLayoutButtons(1),this._getKeysByLevel(2)&&this._renderCheckBox({levelNum:2,checkedKey:"button",unCheckedKey:"text",labelText:i("Editor|Show Buttons")}))}}])
return t}(d.BaseLayoutButton)
t.default=(0,d.connectToStores)(f)
e.exports=t.default}).call(t,n(3))},2195:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(2),a=i(o),r=n(17),s=i(r),l=n(2196),u=i(l),c=n(29),d=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}(c),f=n(1802),p=i(f),m=n(11),h=i(m),g=n(8),v=i(g),y=function(e){return d.getExternalLinkMappingRS(e,p.default.getPagesList())}
t.default=s.default.createPageComponent({displayName:"ExternalLinkNav",observedProps:["url","text","updateTimeStamp"],bobcatPropTypes:{data:{updateTimeStamp:a.default.number,new_target:a.default.bool,text:a.default.string,url:a.default.string,id:a.default.string,link_type:a.default.string,page_id:a.default.string,section_id:a.default.string}},_getUrlToShow:function(){var e=this.props,t=e.link_type,n=e.url,i=e.page_id,o=e.section_id
if("section"===t)return h.default.getExternalLinkUrl(t,n,i,o)
var a=y(n)
return d.addProtocol(null!=a.publicURL?a.publicURL:a.siteDeleted?"#":n)},_getTarget:function(){var e=this.props,t=e.link_type
return e.new_target&&"section"!==t?"_blank":"_self"},_isS5Theme:function(){return"s5-theme"===v.default.getThemeName()},render:function(){return h.default.getShowInNavLinks(this.props.id)?u.default.apply(this):null}})
e.exports=t.default},2196:function(e,t,n){"use strict"
var i=n(0)
n(1)
e.exports=function(){return i.createElement("li",{className:this.props.liClassName},this._isS5Theme()?null:i.createElement("a",{className:"s-external-link-item s-nav-item",href:this._getUrlToShow(),target:this._getTarget()},i.createElement("span",{className:"s-font-body"},this.props.text)),this._isS5Theme()?i.createElement("div",{className:"s-nav-link-container"},i.createElement("a",{className:"s-external-link-item s-nav-item",href:this._getUrlToShow(),target:this._getTarget()},i.createElement("span",{className:"s-font-body"},this.props.text))):null)}},2197:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(2153)
e.exports=t.default},2198:function(e,t,n){"use strict";(function(i){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),u=n(0),c=(function(e){e&&e.__esModule}(u),n(2135)),d=function(e){function t(e){o(this,t)
var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),i=n.props.themeName
n.cacheLevel=-1
"persona"!==i&&"perspective"!==i||(n.hideAdvancedOptions=!0)
n.sectionName="new_hero"
return n}r(t,e)
l(t,[{key:"getRotationKeys",value:function(){var e=this.props.themeName,t=this._levelKeys[1]
return["persona","perspective"].includes(e)?this._getKeysByLevel(0).map(function(e){return e+"-"+t}):"glow"===e?this.props.layoutVariation.indexOf("unswap")>-1?["button-left-unswap","signup-left-unswap","images-left-unswap","button-right-unswap","signup-right-unswap","images-right-unswap","button-noImage-unswap","signup-noImage-unswap","images-noImage-unswap"]:["button-left-swap","signup-left-swap","images-left-swap","button-right-swap","signup-right-swap","images-right-swap","button-noImage-swap","signup-noImage-swap","images-noImage-swap"]:["button-left","signup-left","images-left","button-right","signup-right","images-right","button-noImage","signup-noImage","images-noImage"]}},{key:"getButtonClassMapping",value:function(){return["big-buttons","big-buttons"]}},{key:"renderLayoutOptions",value:function(){var e=this.props.themeName
return s("div",{},void 0,this._getKeysByLevel(0)&&this._renderLayoutButtons(0),this._getKeysByLevel(1)&&this._renderLayoutButtons(1),"glow"===e&&this._getKeysByLevel(2)&&this._renderCheckBox({levelNum:2,labelText:i("Editor|Swap Title"),checkedKey:"swap",unCheckedKey:"unswap"}))}}])
return t}(c.BaseLayoutButton)
t.default=(0,c.connectToStores)(d)
e.exports=t.default}).call(t,n(3))},2199:function(e,t,n){"use strict";(function(t){var i=n(0)
n(1)
e.exports=function(){return i.createElement("div",{className:"s-section-thumb s-signup-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),i.createElement("div",{className:"form-thumb s-font-body"},i.createElement("input",{placeholder:t("Sections|"+this.props.content.components.email1.name_label)}),i.createElement("input",{placeholder:t("Sections|"+this.props.content.components.email1.email_label)}),i.createElement("div",{className:"button"},t("Sections|"+this.props.content.components.email1.submit_label))))))}}).call(t,n(3))},2200:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),r=n(0),s=(o(r),n(2134)),l=o(s),u=n(1793),c=o(u),d=n(1797),f=o(d),p=n(8),m=o(p),h=n(1180),g={mixins:[l.default],displayName:"SliderSection",componentWillMount:function(){this.layoutOptions=["left","right","noImage"]
this.layoutName=this._getLayoutProps().binding.get("layout_variation")
"noForeground"===this.layoutName&&this.layoutOptions.push("noForeground")},getInitialState:function(){return{imgEditorState:""}},setStateFunc:function(e){this.setState({imgEditorState:e||""})},mapStateToProps:function(e){return"s5-theme"===m.default.getThemeName()?{navHeight:f.default.get("navHeight"),navOverlapsContent:(0,h.getNavOverlapsContent)(e)}:{}},_showMediaWrapper:function(e){return-1===["noImage","noForeground"].indexOf(e)},_sbAnyHasContent:function(e,t){var n=this.getRepeatableBinding("slider1")
return Boolean(this.sbAnyHasContent(t,{parentBinding:n.sub(e)}))},_sbHasMediaContent:function(e){var t=this.getRepeatableBinding("slider1")
return Boolean(this.sbHasContent("media1",{parentBinding:t.sub(e)}))},_getSliderLayoutArr:function(){var e=this._getLayoutVariation(),t=[]
if(-1!==e.indexOf("["))try{t=JSON.parse(e)}catch(e){}else{e||(e=this.layoutOptions[1])
var n=this.getRepeatableBinding("slider1").get().size
t=Array.from(new Array(n),function(){return e})}return t},_imageRatioWarnning:function(e){var t=this.getRepeatableBinding("slider1"),n=t.sub(e+".components.background1"),o=n.get("w"),a=n.get("h")
n.get("url")
if(!o||!a){o=16
a=9}var r=i("Editor|This image is too tall! Please upload a banner with a wider aspect ratio."),s=parseFloat(o/a)
if(s<1.25)return r
if(t.get().size<2)return""
var l=t.sub("0.components.background1")
r=i("Editor|Your banner images are different sizes! You should keep all banner images the same size.")
var u=l.get("w"),c=l.get("h")
if(!u||!c){u=16
c=9}var d=parseFloat(u/c)
return e>0&&Math.abs(s-d)>.2?r:""},_getSliderLayout:function(e){var t=this._getSliderLayoutArr(),n=t[e]
return null!=n?n:this.layoutOptions[1]},_isBannerSection:function(){return"noForeground"===this.layoutName},isS5FirstSection:function(){return!("s5-theme"!==m.default.getThemeName()||!this.props.navOverlapsContent||0!==this.props.index)},getSectionStyle:function(){return"s5-theme"===m.default.getThemeName()&&this.props.navOverlapsContent&&0===this.props.index?{paddingTop:this.props.navHeight}:{}},_renderSliderLayoutBtn:function(e){var t=this,n=this._getSliderLayoutArr(),o=n[e],r=this.layoutOptions.indexOf(o),s=this._getLayoutStatusName(r)||"B",l=function(){-1===r&&(r=0)
r===t.layoutOptions.length-1&&(r=-1)
n[e]=t.layoutOptions[++r]
return t._updateLayout(JSON.stringify(n))}
return a("div",{className:"s-component s-layout"},void 0,a("div",{className:"s-component-editor"},void 0,a(c.default,{className:"center clickable small title layout-button",onTap:l,rel:"tooltip-left",title:i("Editor|Click to change layouts")},void 0,a("span",{},void 0,i("Layout"),a("span",{className:"layout-status"},void 0,s)))))},render:function(){return this.getTemplate().apply(this)}}
t.default=g
e.exports=t.default}).call(t,n(3))},2201:function(e,t,n){"use strict";(function(t){function i(){var e=this.props.content.components.slideSettings.layout_variation
return s.createElement("div",{className:"s-section-thumb-content"},s.createElement("div",{className:"p100 "+l.keys(l.pick({"dark-overlays":"noForeground"!==e},l.identity)).join(" ")},"noForeground"!==e?s.createElement("div",{className:"s-slider-demo"},s.createElement("div",{className:"title-media"},s.createElement("img",{src:this._getImageUrl(this.props.content.components.slider1.list[0].components.media1.image)})),s.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.slider1.list[0].components.text1.value)}}),s.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.slider1.list[0].components.text2.value)}}),s.createElement("div",{className:"button s-font-body"},t("Sections|"+this.props.content.components.slider1.list[0].components.button1.text))):null))}function o(){var e=this.props.content.components.slideSettings.layout_variation
return s.createElement("div",{className:"s-section-thumb-content"},s.createElement("div",{className:"p100 "+l.keys(l.pick({"dark-overlays":"noForeground"!==e},l.identity)).join(" ")},"noForeground"!==e?s.createElement("div",{className:"s-slider-demo"},s.createElement("div",{className:"title-media"},s.createElement("img",{src:this._getImageUrl(this.props.content.components.slider1.list[1].components.media1.image)})),s.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.slider1.list[1].components.text1.value)}}),s.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.slider1.list[1].components.text2.value)}}),s.createElement("div",{className:"button s-font-body"},t("Sections|"+this.props.content.components.slider1.list[1].components.button1.text))):null))}function a(){var e=this.props.content.components.slideSettings.layout_variation
return s.createElement("div",{className:"s-section-thumb-content"},s.createElement("div",{className:"p100 "+l.keys(l.pick({"dark-overlays":"noForeground"!==e},l.identity)).join(" ")},"noForeground"!==e?s.createElement("div",{className:"s-slider-demo"},s.createElement("div",{className:"title-media"},s.createElement("img",{src:this._getImageUrl(this.props.content.components.slider1.list[0].components.media1.image)})),s.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.slider1.list[0].components.text1.value)}}),s.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.slider1.list[0].components.text2.value)}}),s.createElement("div",{className:"button s-font-body"},t("Sections|"+this.props.content.components.slider1.list[0].components.button1.text))):null))}function r(){var e=this.props.content.components.slideSettings.layout_variation
return s.createElement("div",{className:"thumb-slider-controller"},s.createElement("div",{className:"prev-arrow "+l.keys(l.pick({"dark-overlays":"noForeground"!==e},l.identity)).join(" ")}),s.createElement("div",{className:"next-arrow "+l.keys(l.pick({"dark-overlays":"noForeground"!==e},l.identity)).join(" ")}),s.createElement("div",{className:"selector-container "+l.keys(l.pick({"no-foreground":"noForeground"===e},l.identity)).join(" ")},s.createElement("div",{className:"selector-inner"},s.createElement("div",{className:"selected selector"}),s.createElement("div",{className:"selector"}))))}var s=n(0),l=n(1)
e.exports=function(){return s.createElement("div",{className:"s-section-thumb s-slider-thumb"},s.createElement("div",{className:"thumb-slider-wrapper"},s.createElement("div",{className:"s-slider-thumb-wrap "+this._getBackgroundClass(this.props.content.components.slider1.list[0].components.background1),style:this._getBackgroundStyle(this.props.content.components.slider1.list[0].components.background1)},i.apply(this,[])),s.createElement("div",{className:"s-slider-thumb-wrap "+this._getBackgroundClass(this.props.content.components.slider1.list[1].components.background1),style:this._getBackgroundStyle(this.props.content.components.slider1.list[1].components.background1)},o.apply(this,[])),s.createElement("div",{className:"s-slider-thumb-wrap "+this._getBackgroundClass(this.props.content.components.slider1.list[0].components.background1),style:this._getBackgroundStyle(this.props.content.components.slider1.list[0].components.background1)},a.apply(this,[]))),r.apply(this,[]))}}).call(t,n(3))},2202:function(e,t,n){"use strict";(function(t){var i=n(0),o=(n(1),n(21))
e.exports=function(){return i.createElement("div",{className:"no-bg s-section-thumb s-social-thumb"},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),i.createElement("div",{className:"social-thumb"},i.createElement("img",{src:o.cdnAssetPath("/images/editor2/social_feed_thumb.png")}))))}}).call(t,n(3))},2203:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=n(8),r=o(a),s=n(74),l=o(s),u=n(2134),c=o(u),d={mixins:[c.default],displayName:"BlockSection",getWholeThemeFeature:function(){var e=l.default.get(r.default.getTheme().get("name"))
return null!=e?e.features:void 0},_getLayoutOptions:function(){return[]},render:function(){i("Editor|Make Your Own Section")
i("Editor|Want more control over layouts? Arrange components yourself!")
return this.getTemplate().apply(this)}}
t.default=d
e.exports=t.default}).call(t,n(3))},2204:function(e,t,n){"use strict";(function(t){var i=n(0),o=(n(1),n(21))
e.exports=function(){return i.createElement("div",{className:"no-bg s-block-thumb s-section-thumb"},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title"},t("Make Your Own Section!")))),i.createElement("div",{},i.createElement("img",{src:o.cdnAssetPath("/images/editor2/block-components.png")}))))}}).call(t,n(3))},2205:function(e,t,n){"use strict";(function(i){Object.defineProperty(t,"__esModule",{value:!0})
var o=n(2134),a=function(e){return e&&e.__esModule?e:{default:e}}(o),r={mixins:[a.default],displayName:"DonationSection",_getLayoutOptions:function(){return[]},render:function(){i("Editor|Simple Store")
i("Editor|Sell products right on your site! Manage orders, payments, and more.")
return this.getTemplate().apply(this)}}
t.default=r
e.exports=t.default}).call(t,n(3))},2206:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),c=n(0),d=o(c),f=n(14),p=o(f),m=n(1910),h=o(m),g=n(8),v=o(g),y=n(189),b=o(y),_=n(479),w=function(e){var t=e.leftPrice,n=e.rightPrice,i={width:Math.min(t/n*100,100)+"%"},o={left:"calc("+Math.min(t/n*100,100)+"% - 10px)"}
return u("div",{className:"progress-bar"},void 0,u("div",{className:"progress",style:i}),u("div",{className:"indicator",style:o}))},C=function(e){function t(e){a(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n._listener=n._listener.bind(n)
return n}s(t,e)
l(t,[{key:"componentDidMount",value:function(){p.default.getDonationSettings({pageId:v.default.getId()})
h.default.addChangeListener(this._listener)}},{key:"componentWillUnmount",value:function(){h.default.removeChangeListener(this._listener)}},{key:"_listener",value:function(){this.forceUpdate()}},{key:"_onClickOpenManager",value:function(){p.default.openDialog("donationManager")}},{key:"_onClickOpenDonateDialog",value:function(){p.default.openDialog("donateDialog",{strong:!0})}},{key:"render",value:function(){var e=h.default.getData(),t=e.settings,n=(e.state,e.currencyFormat)
return u("div",{className:"s-component s-donation "+(this.props.sbClass?this.props.sbClass:"")},void 0,!1,t.data.showProgress&&u("div",{className:"s-donation-progress"},void 0,u(w,{leftPrice:t.paid,rightPrice:t.goal}),u("div",{className:"left-price"},void 0,u("div",{className:"price"},void 0,(0,_.getFormattedPrice)(t.paid,n)),u("div",{className:"text"},void 0,i("Donation|Raised"))),u("div",{className:"right-price"},void 0,u("div",{className:"price"},void 0,(0,_.getFormattedPrice)(t.goal,n)),u("div",{className:"text"},void 0,i("Donation|Goal")))),u(b.default,{component:"div",className:"s-common-button s-cta-button",onClick:this._onClickOpenDonateDialog},void 0,t.data.buttonText||i("Donation|Donate")))}}])
return t}(d.default.Component)
t.default=C
e.exports=t.default}).call(t,n(3))},2207:function(e,t,n){"use strict";(function(t){var i=n(0)
n(1)
e.exports=function(){return i.createElement("div",{className:"no-bg s-donation-thumb s-section-thumb"},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}}))),i.createElement("div",{className:"p100"},i.createElement("div",{className:"progress-bar"},i.createElement("div",{className:"progress"}),i.createElement("div",{className:"indicator"})),i.createElement("div",{className:"price-bar"},i.createElement("div",{className:"left-price"},i.createElement("div",{className:"price"},"400"),i.createElement("div",{className:"text"},t("Donation|Raised"))),i.createElement("div",{className:"right-price"},i.createElement("div",{className:"price"},"10000"),i.createElement("div",{className:"text"},t("Donation|Goal")))),i.createElement("div",{className:"button"},t("Sections|Donate Now")))))}}).call(t,n(3))},2208:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),s=n(2135),l=n(1),u=function(e){return e&&e.__esModule?e:{default:e}}(l),c=function(e){function t(e){i(this,t)
var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.showBaseRotationDropdown=!0
n.sectionName="footer"
return n}a(t,e)
r(t,[{key:"getRotationKeys",value:function(){return u.default.pluck(this.props.layoutOptions,"key")}}])
return t}(s.BaseLayoutButton)
t.default=(0,s.connectToStores)(c)
e.exports=t.default},2209:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(2154)
e.exports=t.default},2210:function(e){e.exports=function(e,t){if(e===t)return!0
var n=Object.keys(e),i=Object.keys(t),o=n.length
if(i.length!==o)return!1
for(var a=0;a<o;a++){var r=n[a]
if(e[r]!==t[r])return!1}return!0}},2211:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),c=n(2135),d=n(2212),f=o(d),p=n(0),m=(o(p),n(1)),h=o(m),g=n(33),v=o(g),y=n(2140),b=o(y),_=n(8),w=o(_),C=n(2155),x=o(C),k=function(e){function t(e){a(this,t)
var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.hideAdvancedOptions=!1
n.buttonTitle=i("Editor|Grid Layout")
n.sectionName="grid"
return n}s(t,e)
u(t,[{key:"getRotationKeys",value:function(){return[]}},{key:"renderLayoutOptions",value:function(){var e=this._getParsedLayoutVariation()
return l("div",{},void 0,this._renderMagazineGridToggle(),e.isGrid()?this._renderGridUI():this._renderMagazineUI(),this._renderDropdowns())}},{key:"_renderDropdowns",value:function(){var e=this,t=w.default.getThemeName(),n=null,o=this._getParsedLayoutVariation()
x.default.themesWithoutWideGridLayout.includes(t)||(n=l("div",{className:"s-layout-menu-field drop-down-select"},void 0,l("div",{className:"s-layout-menu-label"},void 0,i("Editor|Content Width")),l("select",{value:o.contentWidth,onChange:function(t){return e._patchLayout({contentWidth:t.target.value})}},void 0,l("option",{value:"normal"},void 0,i("Editor|Normal")),l("option",{value:"wide"},void 0,i("Editor|Wide")))))
return l("div",{},void 0,l("div",{className:"s-layout-menu-field drop-down-select"},void 0,l("div",{className:"s-layout-menu-label"},void 0,i("Editor|Height")),l("select",{value:this._getParsedLayoutVariation().cellHeight,onChange:function(t){return e._patchLayout({cellHeight:t.target.value})}},void 0,l("option",{value:"small"},void 0,i("Editor|Small")),l("option",{value:"medium"},void 0,i("Editor|Medium")),l("option",{value:"large"},void 0,i("Editor|Large")),o.canBeExtraLarge()?l("option",{value:"extraLarge"},void 0,i("Editor|Extra Large")):null)),l("div",{className:"s-layout-menu-field drop-down-select"},void 0,l("div",{className:"s-layout-menu-label"},void 0,i("Editor|Spacing")),l("select",{value:o.cellSpacing,onChange:function(t){return e._patchLayout({cellSpacing:t.target.value})}},void 0,l("option",{value:"none"},void 0,i("Editor|None")),l("option",{value:"small"},void 0,i("Editor|Small")),l("option",{value:"large"},void 0,i("Editor|Large")))),n)}},{key:"_renderMagazineGridToggle",value:function(){var e=this,t=function(e){return{grid:i("Editor|Grid"),magazine:i("Editor|Magazine")}[e]}
return l(b.default,{keys:["grid","magazine"],selectedKey:this._getParsedLayoutVariation().gridType,textMapping:t,className:"big-buttons",onSelect:function(t){var n=e._getParsedLayoutVariation(),i=n.getCellCount(),o={gridType:t}
if("magazine"===t)o.magazineLayoutName=i<=3?"twoLeftOneRight":4===i?"twoTopTwoBottom":"twoTopThreeBottom"
else if(i<=4){o.rows=2
o.columns=2}else{o.rows=2
o.columns=3}e._patchLayout(o)}})}},{key:"_patchLayout",value:function(e){var t=Object.assign(this._getParsedLayoutVariation(),e),n=t.serialize()
this.props.updateLayout(n)}},{key:"_renderGridUI",value:function(){var e=this,t=this._getParsedLayoutVariation()
return l(f.default,{maxRows:4,maxColumns:4,selectedRows:t.rows,selectedColumns:t.columns,onSelect:function(t,n){e._patchLayout({rows:t,columns:n})}})}},{key:"_renderMagazineUI",value:function(){var e=this,t=h.default.map(x.default.magazineLayouts,function(t){var n=t.name===e._getParsedLayoutVariation().magazineLayoutName,i=(0,v.default)("s-grid-layout-button-magazine",{_selected:n}),o=h.default.range(0,t.cellCount).map(function(e){return l("div",{className:"s-grid-section-cell _"+t.name},e,l("div",{}))})
if("oneLeftTwoRight"===t.name||"twoLeftOneRight"===t.name){var a="s-magazine-column _"+t.name
o=[l("div",{className:a},"column-1",o[0],o[1]),l("div",{className:a},"column-2",o[2])]}var r=l("div",{},void 0,l("div",{className:"s-grid-layout-button-preview"},void 0,o))
return l("button",{onClick:function(){return e._patchLayout({magazineLayoutName:t.name})},className:i},t.name,r)})
return l("div",{className:"s-layout-menu-field s-grid-layout-buttons-magazine"},void 0,t)}},{key:"_getParsedLayoutVariation",value:function(){return x.default.parseLayoutVariation(this._levelKeys.join("-"))}}])
return t}(c.BaseLayoutButton)
t.default=(0,c.connectToStores)(k)
e.exports=t.default}).call(t,n(3))},2212:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(e,t,n,i){return n<=e&&i<=t}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}()
Object.defineProperty(t,"__esModule",{value:!0})
var l=n(0),u=n(1),c=n(33),d=function(e){function t(e){i(this,t)
var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.state={previewRows:null,previewColumns:null}
return n}a(t,e)
s(t,[{key:"_isInPreviewSelection",value:function(e,t){return!!this._hasPreview()&&r(this.state.previewRows,this.state.previewColumns,e,t)}},{key:"_isInSelection",value:function(e,t){return r(this.props.selectedRows,this.props.selectedColumns,e,t)}},{key:"_isSelectedSize",value:function(e,t){return e===this.props.selectedRows&&t===this.props.selectedColumns}},{key:"_isPreviewSize",value:function(e,t){return e===this.state.previewRows&&t===this.state.previewColumns}},{key:"_hasPreview",value:function(){return null!==this.state.previewRows&&null!==this.state.previewColumns}},{key:"_renderRow",value:function(e){var t=this,n=this.props.maxColumns,i=u.range(1,n+1).map(function(n){return t._renderCell(e,n)})
return l.createElement("tr",{key:e},i)}},{key:"_renderCell",value:function(e,t){var n=this,i=this._hasPreview(),o=1===e&&1===t,a=void 0
a=i?this.state.previewRows+"×"+this.state.previewColumns:this.props.selectedRows+"×"+this.props.selectedColumns
var r=c("s-grid-size-selector-cell",{"_in-selection":this._isInSelection(e,t),"_in-preview":this._isInPreviewSelection(e,t)})
return l.createElement("td",{key:e+"-"+t,onMouseEnter:function(){return n.setState({previewColumns:t,previewRows:e})},onMouseLeave:function(){return n.setState({previewColumns:null,previewRows:null})},onClick:function(){return n.props.onSelect(e,t)},className:r},o?a:null)}},{key:"render",value:function(){var e=this,t=this.props.maxRows,n=u.range(1,t+1).map(function(t){return e._renderRow(t)}),i=c("s-grid-size-selector",{"_has-preview":this._hasPreview()})
return l.createElement("table",{className:i+" s-layout-menu-field"},l.createElement("tbody",null,n))}}])
return t}(l.Component)
t.default=d},2213:function(e,t,n){"use strict"
var i=n(0)
n(1),n(2154)
e.exports=function(){return i.createElement("div",{},"\n  ",this.renderSection(),"\n")}},2214:function(e,t,n){"use strict"
function i(e){return o.createElement("div",{className:"grid-thumb-item"},o.createElement("div",{className:"grid-thumb-item-content",style:this._getBackgroundStyle(e.components.background1)},o.createElement("div",{className:"s-item-title"},"\n            ",e.components.text1.value,"\n          ")))}var o=n(0),a=n(1)
e.exports=function(){return o.createElement("div",{className:"s-grid-thumb s-section-thumb","=undefined":!0},o.createElement("div",{className:"s-section-thumb-content"},o.createElement.apply(this,["div",{className:"grid-thumb-container"},a.map(this.props.content.components.repeatable1.list,i.bind(this))])))}},2215:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=n(190),r=o(a),s=n(8),l=o(s),u=n(1867),c=o(u),d=n(2134),f=o(d),p={mixins:[f.default],displayName:"PortfolioSection",componentWillMount:function(){var e=l.default.getThemeName(),t=this._getLayoutVariation()
if(c.default.isOldLayoutKey(e,t)){var n=c.default.getDefaultLayoutKey(e,t)
this._updateLayout(n)}},_showLayoutButton:function(){return r.default.canUse("portfolio_layout")},_getLayoutOptions:function(){var e=l.default.getThemeName()
return c.default.getLayoutOptions(e)},render:function(){i("Editor|Product Showcase")
i("Editor|Add details and descriptions to each product.")
return this.getTemplate().apply(this)}}
t.default=p
e.exports=t.default}).call(t,n(3))},2216:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(136),o=function(e){return e&&e.__esModule?e:{default:e}}(i),a=n(2149)
t.default=(0,a.createCategorySelector)(o.default,"PortfolioCategorySelector",!0)
e.exports=t.default},2217:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),s=n(0),l=o(s),u=n(2),c=o(u),d=n(292),f=o(d),p=n(7),m=o(p),h=n(33),g=o(h),v=n(5),y=o(v),b=n(17),_=o(b),w=n(14),C=o(w),x=n(502),k=o(x),S=n(8),N=o(S),E=n(136),P=o(E),O=n(61),T=o(O),L=n(403),M=o(L),I=n(255),B=o(I),D=n(1808),j=o(D),A=n(1919),H=o(A),R=n(120),F=o(R),V=n(96),U=n(496),z=n(41),W=o(z),G=n(256),K=o(G),$=!1,q=_.default.createPageComponent({displayName:"Portfolio",mixins:[(0,T.default)("editor"),F.default],bobcatPropTypes:{data:{text:c.default.string,category:c.default.oneOfType([c.default.string,c.default.number]),binding:c.default.object},internal:{onConnectionFailed:c.default.func}},getBobcatDefaultProps:function(){return{data:{category:"all"}}},componentWillMount:function(){this.initMeta({currentCategory:this.dtProps.category,nextCategory:this.dtProps.category,currentPage:1,detailMode:!1})},componentDidMount:function(){var e=this
this._loadProductsFromServer()
P.default.getFirstLoadingState("settings")&&k.default.getPortfolioSettings({pageId:N.default.getId()})
P.default.getFirstLoadingState("categories")&&k.default.getPortfolioCategories({pageId:N.default.getId()})
this._token=M.default.register(function(t){switch(t.actionType){case B.default.ActionTypes.GET_ECOMMERCE_PRODUCTS_SUCCESS:e.setMeta("currentCategory",e.getMeta("nextCategory"))
if(!$){$=!0
var i=n(183)
i.init()
i.trackPortfolioBuyerEvent(m.default.getKeenIoPortfolioBuyerLanding())}}})
this._onCategoryChangeListenId=P.default.getCategoriesBinding().addListener("",this._onCategoryChange);(0,y.default)(window).on("resize.portfolio",W.default.debounce(function(){return e.forceUpdate()},300))},componentDidUpdate:function(e){if(this._getRenderCategory(this.dtProps.category)!==this._getRenderCategory(e.category)||e.category!==this.dtProps.category){if("all"===this._getRenderCategory(this.dtProps.category)||"all"===this.dtProps.category){this.setMeta("nextCategory","all")
this.setMeta("currentCategory","all")
this.setMeta("currentPage",1)}else{this.setMeta("nextCategory",this.dtProps.category)
this.setMeta("currentCategory",this.dtProps.category)
this.setMeta("currentPage",1)}this._loadProductsFromServer()}},componentWillUnmount:function(){M.default.unregister(this._token)
P.default.getCategoriesBinding().removeListener(this._onCategoryChangeListenId);(0,y.default)(window).off("resize.portfolio")},_onCategoryChange:function(){var e=this
return this.setTimeout(function(){return e._loadProductsFromServer()},10)},_getProductsData:function(){return P.default.getProducts(this._getRenderCategory(this.dtProps.category),this.getMeta("currentPage"))},_getEditBtnText:function(){var e=this._getProductsData().length
return i(0===e?"Portfolio|Add Product":1===e?"Portfolio|Manage Product":"Portfolio|Manage Products")},_getRenderCategory:function(e){var t="all"===e?this.getMeta("currentCategory"):e
P.default.isCategoryIdExist(t)||(t="all")
return t},_loadProductsFromServer:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments[1]
this.setMeta("currentPage",t)
var i=k.default.getPortfolioProducts({pageId:N.default.getId(),category:n||this._getRenderCategory(this.dtProps.category),page:t})
if(i)return i.fail(function(){return e.props.onConnectionFailed()})},_getCurrentPageNum:function(){return this.getMeta("currentPage")},_loadNextPage:function(){var e=this._getCurrentPageNum()
this.setMeta("currentPage",e+1)
return this._loadProductsFromServer(e+1)},_onClickEditor:function(e){if("editor"===K.default.getRole())return window.alert(i("Editor|You don’t have permission to edit this section. Please contact your team owner!"))
C.default.openPortfolioManagerDialog(e)},_changeCategory:function(e){this.setMeta("nextCategory",e)
this.setMeta("currentCategory",e)
return this._loadProductsFromServer(1,e)},_changeToDetailMode:function(){return this.setMeta("detailMode",!0)},_changeToNormalMode:function(){return this.setMeta("detailMode",!1)},_getCategoryBarProps:function(){return{currentCategory:this.getMeta("nextCategory"),changeCategory:this._changeCategory,categories:P.default.getCategories()}},_getWrapperProps:function(){return{products:this._getProductsData().filter(function(e){return"visible"===e.status}),pageId:N.default.getId(),hasMultipleProducts:P.default.getProducts().length>=2,settings:P.default.getSettings(),layout:this.props.layout||"landscape-three",category:this.props.category||"all",changeToDetailMode:this._changeToDetailMode,changeToNormalMode:this._changeToNormalMode}},render:function(){var e=this
this.observeBinding(P.default.getBinding())
var t=P.default.getPagination(this.getMeta("currentCategory")),n=this.getMeta("detailMode"),o=this._getEditBtnText(),s=P.default.getLoadingState("product")||P.default.getLoadingState("settings")||P.default.getLoadingState("category"),u="persona"===N.default.getTheme().get("name")?"":"sixteen columns",c=m.default.getFromSiteToApp(),d=r("div",{className:u+" s-ecommerce-empty-box s-common-status no-float"},void 0,r("div",{className:"tags"},void 0,r("div",{className:"fa fa-folder-open"}),r("div",{className:"fa fa-folder-open"}),r("div",{className:"fa fa-folder-open"})),r("div",{className:"text s-font-body"},void 0,i("Portfolio|No products in this product showcase now!"))),f=t&&t.totalPages>=2&&(c?r("div",{className:"s-ecommerce-pagination"},void 0,r(V.Link,{className:"s-ecommerce-pagination-item s-font-body",to:"/store/page?category="+this.dtProps.category},void 0,i("Ecommerce|View more"))):r("div",{className:"s-ecommerce-pagination"},void 0,t.totalPages>this._getCurrentPageNum()&&r("span",{className:"s-ecommerce-pagination-item s-font-body",onClick:this._loadNextPage},void 0,i("Ecommerce|Show more")),this._getCurrentPageNum()>1&&r("span",{className:"s-ecommerce-pagination-item s-font-body",onClick:function(){return e.setMeta("currentPage",1)}},void 0,i("Ecommerce|Show less"))))
return l.default.createElement("div",{className:"s-component s-ecommerce",ref:"root"},r("div",{className:"s-ecommerce-content"},void 0,P.default.getCategories().length>0&&("all"===this.dtProps.category||!P.default.isCategoryIdExist(this.dtProps.category))&&r("div",{className:"persona"===N.default.getTheme().get("name")?"":"sixteen columns",style:{display:n?"none":"block"}},void 0,l.default.createElement(H.default,a({sbClass:this.props.sbClass},this._getCategoryBarProps()),r("div",{className:"s-component-editor-wrapper"},void 0,r("div",{className:(0,g.default)("s-component-overlay",{visible:m.default.getInWeChat()}),onClick:function(){return e._onClickEditor({tab:"category"})}},void 0,r("div",{className:"overlay"},void 0,r("div",{className:"center"},void 0,r("span",{},void 0,i("Portfolio|Manage Categories")))))))),s&&r("div",{className:(0,g.default)("s-loading-wrapper",{"relative-wrapper":!this._getProductsData().length})},void 0,r("div",{className:"s-loading"})),l.default.createElement(j.default,a({},this._getWrapperProps(),{isLoading:s,emptyComponent:d,paginationComponent:f}),!s&&r("div",{className:"s-component-editor-wrapper"},void 0,r("div",{className:"s-component-overlay"+(m.default.getInWeChat()?" visible":""),onClick:function(){return e._onClickEditor({category:e.dtProps.category,tab:"product"})}},void 0,r("div",{className:"overlay"},void 0,r("div",{className:"center"},void 0,r("span",{},void 0,o))))))))}}),Y=(0,U.addOffline)(q)
q.WaypointLazy=(0,f.default)(Y)
t.default=Y
e.exports=t.default}).call(t,n(3))},2218:function(e,t,n){"use strict";(function(t){function i(e,t){return o.createElement("div",{className:"column-image",key:t},o.createElement("div",{className:"image-wrapper"},o.createElement("img",{src:r.cdnAssetPath(this._getImageUrl(e.components.media1.image))})),o.createElement("div",{className:"item-text-group"},e.components.text1.value?o.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null))}var o=n(0),a=n(1),r=n(21)
e.exports=function(){return o.createElement("div",{className:"no-bg s-portfolio-thumb s-section-thumb"},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}}))),this.props.content.components.repeatable1.list.length?o.createElement("div",{className:"p100"},o.createElement.apply(this,["div",{className:"columns-media"},a.map(this._getRepetableList(this.props.content.components.repeatable1.list),i.bind(this))])):null))}}).call(t,n(3))},2219:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(2156)
e.exports=t.default},2220:function(e,t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=["pricing-layout-1","pricing-layout-2","pricing-layout-3","pricing-layout-4"],i={default:{layouts:n}},o={getLayout:function(e){return{itemClass:n[e]||n[0]}},getLayoutOptions:function(e){return i[e]||i.default}}
t.default=o
e.exports=t.default},2221:function(e,t,n){"use strict";(function(i){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),l=n(2135),u=function(e){function t(e){o(this,t)
var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.hideAdvancedOptions=!1
n.showBaseRotationDropdown=!0
n.buttonTitle=i("Editor|Layout")
return n}r(t,e)
s(t,[{key:"getRotationKeys",value:function(){return this.props.layoutOptions.layouts}}])
return t}(l.BaseLayoutButton)
t.default=(0,l.connectToStores)(u)
e.exports=t.default}).call(t,n(3))},2222:function(e,t,n){"use strict"
var i=n(0)
n(1),n(2156)
e.exports=function(){return i.createElement("div",{},"\n  ",this.renderSection(),"\n")}},2223:function(e,t,n){"use strict";(function(t){var i=n(0),o=(n(1),n(21))
e.exports=function(){return i.createElement("div",{className:"no-bg s-pricing-thumb s-section-thumb"},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}}))),i.createElement("div",{className:"p100"},i.createElement("div",{className:"pricing-thumb"},i.createElement("img",{src:o.cdnAssetPath("/images/editor2/pricing_thumb-1.png")})))))}}).call(t,n(3))},2224:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(2225)
e.exports=t.default},2225:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(t,n,i,o){var a=t&&t.defaultProps,r=arguments.length-3
n||0===r||(n={})
if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s])
else n||(n=a||{})
if(1===r)n.children=o
else if(r>1){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+3]
n.children=l}return{$$typeof:e,type:t,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}}(),s=n(0),l=o(s),u=n(8),c=o(u),d=n(1866),f=o(d),p=n(1865),m=o(p),h=n(2137),g=o(h),v=n(2134),y=o(v),b={mixins:[y.default],displayName:"ProcessSection",componentWillMount:function(){n(1792).removeOldBackgroundForText(this)
var e=c.default.getThemeName(),t=n(2145),i=this._getLayoutVariation()
this._getLayoutBinding().sub("layout_variation").set(t.getDefaultLayoutKey(e,i))},_getLayoutOptions:function(){var e=c.default.getThemeName()
return n(2145).getLayoutOptions(e)},_shouldRenderItemLinker:function(e,t){return e!==t},_renderItemLinker:function(){return r("div",{className:"process-item-linker"})},_renderRepeatable:function(e){var t=this,i=n(2145),o=c.default.getThemeName(),s=this._getLayoutVariation(),u=this.getComponentBinding(e),d=this.getRepeatableBinding(e),p=void 0
"function"==typeof i.getLayout(o,s)&&(p=i.getLayout(o,s)(d))
var h="function"==typeof i.getItemSize?i.getItemSize(d):void 0,v=function(e,n){var i=d.sub(n),o=p,s=o.itemClass
return l.default.createElement(m.default,a({className:s,binding:{default:i,listBinding:d},index:n},t._getRepeatableItemProps(d,n)),r("div",{className:"process-item-wrapper"},void 0,r("div",{className:"process-item-infos"},void 0,r("div",{className:"process-item-index s-font-body"},void 0,n+1),t._shouldRenderItemLinker(n+1,h)?t._renderItemLinker():null),r(g.default,{section:t,itemBinding:i,binding:i,showItemSubtitle:!1,upperChildrenPosition:!0})))},y=this.getComponentProps("repeatable1")
return l.default.createElement(f.default,a({className:"s-mh"+("editor"===u.get("_state")?" s-arranging":"")},y),u.get("list").map(v).toArray())},render:function(){i("Editor|Process")
i("Editor|A numbered list of steps. Explain how your service works!")
i("Sections|Process")
i("Sections|A numbered list of steps. Explain how your service works!")
i("Sections|Purchase")
i("Sections|Pick your favorites from our high-quality collections, and add to your cart.")
i("Sections|Online Pay")
i("Sections|Enter your address and pay with credit, debit, or PayPal. We ship anywhere.")
i("Sections|Deliver")
i("Sections|We'll deliver your goods within 5 business days. Ask us any questions!")
return this.getTemplate().apply(this)}}
t.default=b
e.exports=t.default}).call(t,n(3))},2226:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),s=n(2135),l=function(e){function t(e){i(this,t)
var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.showBaseRotationDropdown=!0
n.sectionName="process"
return n}a(t,e)
r(t,[{key:"getRotationKeys",value:function(){return["horizontal","vertical"]}}])
return t}(s.BaseLayoutButton)
t.default=(0,s.connectToStores)(l)
e.exports=t.default},2227:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"info-box",key:t},o.createElement("div",{className:"number-box",dangerouslySetInnerHTML:{__html:t+1}}),e.components.text1.value?o.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null,e.components.text2.value?o.createElement("div",{className:"item-subtitle s-font-body",dangerouslySetInnerHTML:{__html:e.components.text2.value}}):null)}var o=n(0),a=n(1)
e.exports=function(){return o.createElement("div",{className:"s-process-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null)),o.createElement("div",{className:"p100"},o.createElement.apply(this,["div",{className:"info-boxes"},a.map(this._getRepetableList(this.props.content.components.repeatable1.list,3),i.bind(this))]))))}},2231:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"column-image",key:t},o.createElement("div",{className:"image-wrapper"},o.createElement("img",{src:this._getImageUrl(e.components.media1.image)})),o.createElement("div",{className:"item-text-group"},e.components.text1.value?o.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null,e.components.text3.value?o.createElement("div",{className:"item-body-text s-font-body",dangerouslySetInnerHTML:{__html:e.components.text3.value}}):null))}var o=n(0),a=n(1)
e.exports=function(){return o.createElement("div",{className:"no-bg s-columns-thumb s-section-thumb"},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null)),this.props.content.components.repeatable1.list.length?o.createElement("div",{className:"p100"},o.createElement.apply(this,["div",{className:"columns-media"},a.map(this._getRepetableList(this.props.content.components.repeatable1.list),i.bind(this))])):null))}},2232:function(e,t,n){"use strict";(function(i){Object.defineProperty(t,"__esModule",{value:!0})
var o=n(2134),a=function(e){return e&&e.__esModule?e:{default:e}}(o),r=void 0,s={mixins:[a.default],displayName:"ContactFormSection",_showMap:function(){r.track("Add Map - Contact Form Section - Editor v1")
this.getComponentBinding("slideSettings").sub("display_settings").set("show_map",!0)
this.savePage()},_hideMap:function(){r.track("Remove Map - Contact Form Section - Editor v1")
this.getComponentBinding("slideSettings").sub("display_settings").set("show_map",!1)
this.savePage()},_showContactInfo:function(){r.track("Add Contact Info - Contact Form Section - Editor v1")
this.getComponentBinding("slideSettings").sub("display_settings").set("show_info",!0)
this.savePage()},_hideContactInfo:function(){r.track("Remove Contact Info - Contact Form Section - Editor v1")
this.getComponentBinding("slideSettings").sub("display_settings").set("show_info",!1)
this.savePage()},_isContactInfoEmpty:function(e){return!(e.address||e.phone||e.hours||e.email)},_fixMapHeight:function(e){var t=void 0,n=$(e)||$("#s-map")
if(n.length)if($(window).width()>=927){var i=n.closest(".s-contact-section").find(".s-email-form-inputs-group"),o=i.find(".s-email-form-field"),a=parseInt(o.first().css("padding-top"),10)||0,r=parseInt(o.last().css("padding-bottom"),10)||0
t=i.height()-a-r
t=Math.max(200,t)
n.height(t).css({"margin-top":a,"margin-bottom":r})}else n.height(250).css({"margin-top":0,"margin-bottom":0})},_getLayoutOptions:function(){return[]},render:function(){i("Editor|Contact Form")
i("Editor|Let viewers drop their name, email, and message.")
return this.getTemplate().apply(this)}}
t.default=s
e.exports=t.default}).call(t,n(3))},2233:function(e,t,n){"use strict";(function(t){var i=n(0),o=(n(1),n(21)),a=n(399)
e.exports=function(){return i.createElement("div",{className:"s-contact-form-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}})),i.createElement("div",{className:"form-thumb s-font-body"},i.createElement("div",{className:"form-wrapper"},i.createElement("input",{placeholder:t("Sections|"+this.props.content.components.email1.name_label)}),i.createElement("input",{placeholder:t("Sections|"+this.props.content.components.email1.email_label)}),i.createElement("textarea",{placeholder:t("Sections|"+this.props.content.components.email1.message_label)}),i.createElement("div",{className:"button"},t("Sections|"+this.props.content.components.email1.submit_label))),i.createElement(a,{},i.createElement("img",{src:o.cdnAssetPath("/images/editor2/contact_map.png")}),i.createElement("img",{src:o.cdnAssetPath("/images/editor2/contact_map_sxl.png")}))))))}}).call(t,n(3))},2234:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){var n=[],i=!0,o=!1,a=void 0
try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done);i=!0){n.push(r.value)
if(t&&n.length===t)break}}catch(e){o=!0
a=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),l=n(2135),u=n(1),c=(function(e){e&&e.__esModule}(u),function(e){function t(e){i(this,t)
var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.cacheLevel=-1
n.showBaseRotationDropdown=!0
n.sectionName="new_title"
return n}a(t,e)
s(t,[{key:"componentDidMount",value:function(){this._rightLayout="center-right-normal"===this.props.layoutVariation}},{key:"getRotationKeys",value:function(){var e=r(this._levelKeys,3),t=(e[0],e[1],e[2]),n=["center-subTop-"+t,"center-bottom-"+t]
this._rightLayout&&n.push("center-right-"+t)
return n}}])
return t}(l.BaseLayoutButton))
t.default=(0,l.connectToStores)(c)
e.exports=t.default},2235:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"gallery-image",key:t},o.createElement("img",{src:this._getImageUrl(e,!0)}))}var o=n(0),a=n(1)
e.exports=function(){return o.createElement("div",{className:"no-bg s-gallery-thumb s-section-thumb"},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null)),this.props.content.components.gallery1.sources.length?o.createElement("div",{className:"p100"},o.createElement.apply(this,["div",{className:"gallery-media"},a.map(this._getRepetableList(this.props.content.components.gallery1.sources,8),i.bind(this))])):null))}},2236:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"icon",key:t},o.createElement("img",{src:this._getImageUrl(e.components.image1)}),e.components.text1.value?o.createElement("div",{className:"item-subtitle",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null)}var o=n(0),a=n(1),r=n(399)
e.exports=function(){return o.createElement("div",{className:"no-bg s-icons-thumb s-section-thumb"},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null)),o.createElement("div",{className:"p100"},o.createElement(r,{},o.createElement.apply(this,["div",{className:"icons-media s-font-body"},a.map(this._getRepetableList(this.props.content.components.repeatable1.list,4),i.bind(this))]),o.createElement("div",{className:"icons-media s-font-body"},o.createElement("div",{className:"icon"},o.createElement("img",{src:"//uploads.sxlcdn.com/static/icons/black/wechat-icon.png"}),o.createElement("div",{className:"item-subtitle"},"微信")),o.createElement("div",{className:"icon"},o.createElement("img",{src:"//uploads.sxlcdn.com/static/icons/black/weibo-icon.png"}),o.createElement("div",{className:"item-subtitle"},"微博")),o.createElement("div",{className:"icon"},o.createElement("img",{src:"//uploads.sxlcdn.com/page/images/icons/phone-icon.png"}),o.createElement("div",{className:"item-subtitle"},"电话")),o.createElement("div",{className:"icon"},o.createElement("img",{src:"//uploads.sxlcdn.com/page/images/icons/email-icon.png"}),o.createElement("div",{className:"item-subtitle"},"邮箱")))))))}},2237:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"info-box",key:t},e.components.text1.value?o.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null,e.components.text2.value?o.createElement("div",{className:"item-subtitle s-font-body",dangerouslySetInnerHTML:{__html:e.components.text2.value}}):null)}var o=n(0),a=n(1)
e.exports=function(){return o.createElement("div",{className:"s-info-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null)),o.createElement("div",{className:"p100"},o.createElement.apply(this,["div",{className:"info-boxes"},a.map(this._getRepetableList(this.props.content.components.repeatable1.list,4),i.bind(this))]))))}},2238:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{key:t},o.createElement("div",{className:"media-image-thumb"},o.createElement("img",{src:this._getImageUrl(e.components.media1.image)})),e.components.text1.value?o.createElement("div",{className:"item-body-text s-font-body",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null)}var o=n(0),a=n(1)
e.exports=function(){return o.createElement("div",{className:"no-bg s-media-thumb s-section-thumb"},o.createElement("div",{className:"s-section-thumb-content"},o.createElement.apply(this,["div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null),a.map(this.props.content.components.repeatable1.list,i.bind(this))])))}},2239:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(2),a=i(o),r=n(1802),s=i(r),l=n(8),u=i(l),c=n(476),d=i(c),f=n(157),p=i(f),m={observedProps:["showNav"],displayName:"NavbarSection",propTypes:{binding:a.default.object.isRequired,firstSectionBackgroundProps:a.default.object.isRequired,className:a.default.string,navbarItemData:a.default.oneOfType([a.default.object,a.default.array]),showNav:a.default.bool,eagerLoad:a.default.bool.isRequired},componentDidMount:function(){s.default.addChangeListener(this._pagesListListener)},componentWillUnmount:function(){s.default.removeChangeListener(this._pagesListListener)},_pagesListListener:function(){this.forceUpdate()},_getTimestampForLinks:function(){return(new Date).getTime()},getSectionHash:function(e){return d.default.getSectionHashByIndex(e)},_getFirstSectionBackgroundProps:function(){return this.props.firstSectionBackgroundProps},_getNavItemProps:function(e){return e.showNav&&e.name.length?{}:{style:{display:"none"}}},_switchPage:function(e,t){switch(u.default.getSiteMode()){case"editor":t.preventDefault()
return p.default.replace(e.path)
case"preview":t.preventDefault()
return p.default.push(e.path)}},render:function(){return this.getTemplate().apply(this)}}
t.default=m
e.exports=t.default},2240:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"row-container",key:t},o.createElement("div",{className:"rows-img"},o.createElement("img",{src:this._getImageUrl(e.components.media1.image)})),o.createElement("div",{className:"item-text-group"},e.components.text1.value?o.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null,e.components.text3.value?o.createElement("div",{className:"item-body-text s-font-body",dangerouslySetInnerHTML:{__html:e.components.text3.value}}):null))}var o=n(0),a=n(1)
e.exports=function(){return o.createElement("div",{className:"no-bg s-rows-thumb s-section-thumb "+this._getSectionTypeClass()},o.createElement("div",{className:"s-section-thumb-content s-thumb-"+this._getLayout()},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null)),this.props.content.components.repeatable1.list.length?o.createElement.apply(this,["div",{className:"p100"},a.map(this.props.content.components.repeatable1.list,i.bind(this))]):null))}},2241:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(2134),o=function(e){return e&&e.__esModule?e:{default:e}}(i),a={mixins:[o.default],displayName:"SocialFeedSection",_getLayoutOptions:function(){return[]},render:function(){return this.getTemplate().apply(this)}}
t.default=a
e.exports=t.default},2242:function(e,t,n){"use strict"
function i(e,t){return o.createElement("div",{className:"text-container",key:t},e.components.text1.value?o.createElement("div",{className:"item-title s-font-heading",dangerouslySetInnerHTML:{__html:e.components.text1.value}}):null,e.components.text2.value?o.createElement("div",{className:"item-subtitle s-font-body",dangerouslySetInnerHTML:{__html:e.components.text2.value}}):null)}var o=n(0),a=n(1)
e.exports=function(){return o.createElement("div",{className:"no-bg s-section-thumb s-text-thumb"},o.createElement("div",{className:"s-section-thumb-content"},o.createElement("div",{className:"p100"},o.createElement("div",{className:"title-group"},this.props.content.components.text1.value?o.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?o.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null),this.props.content.components.repeatable1.list.length?o.createElement.apply(this,["div",{},a.map(this.props.content.components.repeatable1.list,i.bind(this))]):null)))}},2243:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(2148)
e.exports=t.default},2244:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(2),a=i(o),r=n(8),s=i(r),l={observedProps:["showFooter","showTermsLink","showPrivacyPolicyLink"],propTypes:{showFooter:a.default.bool,showTermsLink:a.default.bool,showPrivacyPolicyLink:a.default.bool},displayName:"FooterSection",_getLayoutOptions:function(){return[{name:"Vertical",key:"vertical"},{name:"Horizontal",key:"horizontal"},{name:"Grid",key:"grid"},{name:"Image",key:"image"}]},_getPadding:function(){var e=this.getDefaultBinding().get("padding")
e=e&&e.toJS?e.toJS():e
return e||{top:"normal",bottom:"normal"}},_getFooterLayoutProps:function(){var e=this.getDefaultBinding()
return{layoutVariation:e.get("layout_variation")||"",padding:this._getPadding(),binding:e}},_getLayout:function(){return this.getDefaultBinding().get("layout_variation")||"vertical"},_hasMobileActions:function(){return s.default.hasNewMobileActions()},_updateLayout:function(e){this.getDefaultBinding().sub("layout_variation").set(e)},_updatePadding:function(e){this.getDefaultBinding().sub("padding").set(e)},_getPaddingClass:function(){var e=this.getDefaultBinding().get("padding")
e=e?e.toJS?e.toJS():e:{top:"normal",bottom:"normal"}
return("half"===e.top?"s-top-padding-half":"none"===e.top?"s-top-padding-none":"")+" "+("half"===e.bottom?"s-bottom-padding-half":"none"===e.bottom?"s-bottom-padding-none":"")},render:function(){return this.getTemplate().apply(this)}}
t.default=l
e.exports=t.default},2245:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/base/sections/hero/thumbnail/cover.png"},2246:function(e,t,n){"use strict";(function(t){var i=n(0)
n(1)
e.exports=function(){return i.createElement("div",{className:"s-hero-thumb s-section-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p50"},i.createElement("div",{className:"media"},i.createElement("img",{src:this._getImageUrl(this.props.content.components.media1.image)}))),i.createElement("div",{className:"p50"},i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text1.value)}}),i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:t("Sections|"+this.props.content.components.text2.value)}}),i.createElement("div",{className:"button s-font-body"},t("Sections|"+this.props.content.components.button1.text)))))}}).call(t,n(3))},2248:function(e,t,n){"use strict"
var i=n(0),o=(n(1),n(2146))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2249:function(e,t,n){"use strict"
var i=n(0),o=(n(1),n(2158))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2250:function(e,t,n){"use strict";(function(i){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var a=n(19),r=o(a),s=n(2134),l=o(s)
t.default={mixins:[l.default],displayName:"GallerySection",_getLayoutOptions:function(){return[{name:"normal",key:"normal"},{name:"full width",key:"fullWidth"},{name:"vertical",key:"vertical"}]},_isSmallScreen:function(){return r.default.isSmallScreen()},render:function(){i("Editor|Gallery")
i("Editor|Image and video thumbnails that open in a full view.")
return this.getTemplate().apply(this)}}
e.exports=t.default}).call(t,n(3))},2251:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(397),n(2133)),s=n(1864),l=n(1214),u=n(2131),c=n(2132),d=n(2136)
e.exports=function(){return o.createElement(c,i({className:"s-html-section s-section "+this._getPaddingClass()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(r,a.assign({},{bgClassNames:this.getThemeFeature("backgroundColorClassNames")},this.getComponentProps("background1"))),o.createElement(d,a.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout,updatePadding:this._updatePadding},this._getLayoutProps()))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(s,this.getBackgroundProps("background1")):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(u,{section:this,binding:this.getDefaultBinding()}),o.createElement(l,this.getComponentProps("html1")))))}},2252:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(2193),n(397),n(2131)),s=(n(2133),n(2132)),l=n(1864)
e.exports=function(){return o.createElement(s,i({className:"s-icons-section s-section "+this._getPaddingClass()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(l,this.getBackgroundProps("background1")):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(r,{contentCheck:"repeatable1",section:this,binding:this.getDefaultBinding()})),o.createElement("div",{className:this.sbUniformTextAlignment("text1 text2")},"\n      ",this._renderRepeatable("repeatable1"),"\n    ")))}},2253:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(2152)
e.exports=t.default},2254:function(e,t,n){"use strict"
var i=n(0),o=(n(1),n(2161),n(397),n(2133),n(1864),n(2131),n(2132),n(7),n(2159))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2255:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(2141)
e.exports=t.default},2256:function(e,t,n){"use strict"
var i=n(0),o=(n(1),n(2146))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2257:function(e,t,n){"use strict"
var i=n(0),o=(n(1),n(2146))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2258:function(e,t,n){"use strict"
var i=n(0),o=(n(1),n(2160))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2259:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(397),n(1871)),s=n(2131),l=(n(1174),n(2133)),u=n(2132),c=n(1864),d=n(2136)
e.exports=function(){return o.createElement(u,i({className:"s-section s-social-feed-section "+this._getPaddingClass()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(l,a.assign({},{wasMinimal:!0},this.getComponentProps("background1"))),o.createElement(d,a.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout,updatePadding:this._updatePadding},this._getLayoutProps()))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(c,this.getBackgroundProps("background1")):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(s,{section:this,binding:this.getDefaultBinding()})),o.createElement(r,{componentName:"socialFeedComponent",componentProps:this.getComponentProps("social_feed1"),binding:this.getComponentBinding("social_feed1")}),null))}},2260:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(2152)
e.exports=t.default},2261:function(e,t,n){"use strict"
var i=n(0),o=(n(1),n(2159))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2262:function(e,t,n){"use strict"
var i=n(0),o=(n(1),n(2158))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2263:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(397),n(1864)),s=n(2133),l=n(2131),u=n(405),c=n(2132),d=n(2136)
e.exports=function(){return o.createElement(c,i({className:"s-block-section s-section "+this._getPaddingClass()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(s,this.getComponentProps("background1")),o.createElement(d,a.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout,updatePadding:this._updatePadding},this._getLayoutProps()))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(r,this.getBackgroundProps("background1")):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(l,{section:this,binding:this.getDefaultBinding()})),o.createElement("div",{className:"alignment-container "+this.sbUniformTextAlignment("text1 text2")+(this.isState("editor")?" s-arranging":"")},o.createElement(u,a.assign({},{binding:this.getComponentBinding("block1"),items:this.getComponentBinding("block1").sub("items").get().toArray(),themeFeature:this.getWholeThemeFeature(),isHiddenSection:this.getComponentBinding("slideSettings").get("hidden_section")},this.getComponentProps("block1"))))))}},2264:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=n(1864),s=n(2131),l=(n(1174),n(7),n(2133)),u=n(2206),c=n(2132),d=n(2136)
e.exports=function(){return o.createElement(c,i({className:"s-donation-section s-section "+this._getPaddingClass()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(l,a.assign({},{wasMinimal:!0},this.getComponentProps("background1"))),o.createElement(d,a.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout,updatePadding:this._updatePadding},this._getLayoutProps()))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(r,this.getBackgroundProps("background1")):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(s,{section:this,binding:this.getDefaultBinding()})),o.createElement("div",{className:"s-ecommerce-container"},o.createElement(u,a.assign({},{sbClass:this.sbUniformTextAlignment("text1 text2")},this.getComponentProps("donation1"))),null)))}},2265:function(e,t,n){"use strict"
function i(e,t){var n=l.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=l.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}function o(e){var t=this.props.showTermsLink
return s.createElement("div",{className:"has-copy-right"},s.createElement("div",{className:"columns no-float sixteen"},s.createElement("div",{className:"separate-line"})),s.createElement("div",{className:"columns no-float s-text-color-gray "+this.sbUniformTextAlignment("copyright")+" "+l.keys(l.pick({ten:t||this.props.showPrivacyPolicyLink,sixteen:!t&&!this.props.showPrivacyPolicyLink},l.identity)).join(" ")},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",binding:e},e.get().toObject())))),t||this.props.showPrivacyPolicyLink?s.createElement("div",{className:"columns no-float s-text-color-gray six"},s.createElement("div",{className:"right-align s-footer-text",style:{marginTop:"-10px"}},t?s.createElement(p,{className:"s-font-body",hasPrivacyPolicy:this.props.showPrivacyPolicyLink}):null,this.props.showPrivacyPolicyLink?s.createElement(m,{className:"s-font-body"}):null)):null)}function a(e){var t=this.props.showTermsLink
return s.createElement("div",{className:"has-copy-right"},s.createElement("div",{className:"columns no-float sixteen"},s.createElement("div",{className:"separate-line"})),s.createElement("div",{className:"columns no-float s-text-color-gray "+this.sbUniformTextAlignment("copyright")+" "+l.keys(l.pick({ten:t||this.props.showPrivacyPolicyLink,sixteen:!t&&!this.props.showPrivacyPolicyLink},l.identity)).join(" ")},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",binding:e},e.get().toObject())))),t||this.props.showPrivacyPolicyLink?s.createElement("div",{className:"columns no-float s-text-color-gray six"},s.createElement("div",{className:"right-align s-footer-text",style:{marginTop:"-10px"}},t?s.createElement(p,{className:"s-font-body",hasPrivacyPolicy:this.props.showPrivacyPolicyLink}):null,this.props.showPrivacyPolicyLink?s.createElement(m,{className:"s-font-body"}):null)):null)}function r(){var e=this.getComponentBinding("copyright"),t=this.getComponentBinding("socialMedia")
return s.createElement(v,i({className:"s-footer-section s-section "+l.keys(l.pick({"has-terms-link":this.props.showTermsLink,"has-new-mobile-actions":this._hasMobileActions()},l.identity)).join(" ")+" "+this._getPaddingClass()},this.getThemeFeature("disableBackgrounds")?{}:this.getFooterBackgroundProps("background1")),this.isEditMode()?s.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:s.createElement(g,l.assign({},{minimal:!0,footerSection:!0},this.getComponentProps("background1"))),s.createElement(h,l.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout,updatePadding:this._updatePadding},this._getFooterLayoutProps()))):null,"vertical"==this._getLayout()?s.createElement("div",{className:"container s-layout-vertical"},s.createElement("div",{className:"columns sixteen "+this.sbUniformTextAlignment("copyright")},s.createElement("div",{},s.createElement(f.WaypointLazy,l.assign({},{binding:t,")":!0},t.toJS()))),s.createElement("div",{className:"s-footer-text"},s.createElement(c,l.assign({},{textType:"body",binding:e},e.get().toObject()))),this.props.showTermsLink?s.createElement(p,{className:"s-font-body",hasPrivacyPolicy:this.props.showPrivacyPolicyLink}):null,this.props.showPrivacyPolicyLink?s.createElement(m,{className:"s-font-body"}):null)):null,"horizontal"==this._getLayout()?s.createElement("div",{className:"container s-layout-horizontal"},s.createElement("div",{className:"columns eight"},s.createElement("div",{},s.createElement(f.WaypointLazy,l.assign({},{binding:t,")":!0},t.toJS())))),s.createElement("div",{className:"columns eight"},s.createElement("div",{className:"right-align s-footer-text"},this.isEditMode()||e.get("value")?s.createElement(c,l.assign({},{textType:"body",binding:e},e.get().toObject())):null,this.props.showTermsLink?s.createElement(p,{className:u("s-font-body",{"s-compact":!this.isEditMode()&&!e.get("value")})+" "+this.sbUniformTextAlignment("copyright"),hasPrivacyPolicy:this.props.showPrivacyPolicyLink}):null,this.props.showPrivacyPolicyLink?s.createElement(m,{className:u("s-font-body",{"s-compact":!this.isEditMode()&&!e.get("value")})+" "+this.sbUniformTextAlignment("copyright")}):null))):null,"grid"==this._getLayout()?s.createElement("div",{className:"container s-layout-grid"},this.sbHasContent("text1")?s.createElement("div",{className:"columns four half-fixed"},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",applyWordBreaks:!0,binding:this.getComponentBinding("text1")},this.getComponentProps("text1"))))):null,this.sbHasContent("text2")?s.createElement("div",{className:"columns four half-fixed"},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",applyWordBreaks:!0,binding:this.getComponentBinding("text2")},this.getComponentProps("text2"))))):null,this.sbHasContent("text3")?s.createElement("div",{className:"columns four half-fixed"},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",applyWordBreaks:!0,binding:this.getComponentBinding("text3")},this.getComponentProps("text3"))))):null,s.createElement("div",{className:"columns float-right four half-fixed right-align"},this.sbHasContent("socialMedia")?s.createElement("div",{},s.createElement(f.WaypointLazy,l.assign({},{binding:t,")":!0},t.toJS()))):null,this.sbHasContent("copyright")?null:s.createElement("div",{},this.props.showTermsLink?s.createElement(p,{className:"s-font-body",hasPrivacyPolicy:this.props.showPrivacyPolicyLink}):null,this.props.showPrivacyPolicyLink?s.createElement(m,{className:"s-font-body"}):null)),this.sbHasContent("copyright")?o.apply(this,[e,t]):null):null,"image"==this._getLayout()?s.createElement("div",{className:"container s-layout-grid s-layout-image"},this.sbHasContent("image1")?s.createElement("div",{className:"columns half-fixed img three"},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(d,l.assign({},{size:"small",needTrim:"true"},this.getReduxComponentProps("image1"))))):null,this.sbHasContent("text1")?s.createElement("div",{className:"columns half-fixed three"},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",applyWordBreaks:!0,binding:this.getComponentBinding("text1")},this.getComponentProps("text1"))))):null,this.sbHasContent("text2")?s.createElement("div",{className:"columns half-fixed three"},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",applyWordBreaks:!0,binding:this.getComponentBinding("text2")},this.getComponentProps("text2"))))):null,this.sbHasContent("text3")?s.createElement("div",{className:"columns half-fixed three"},s.createElement("div",{className:"left-align s-footer-text"},s.createElement(c,l.assign({},{textType:"body",applyWordBreaks:!0,binding:this.getComponentBinding("text3")},this.getComponentProps("text3"))))):null,s.createElement("div",{className:"columns float-right four half-fixed right-align"},this.sbHasContent("socialMedia")?s.createElement("div",{},s.createElement(f.WaypointLazy,l.assign({},{binding:t,")":!0},t.toJS()))):null,this.sbHasContent("copyright")?null:s.createElement("div",{},this.props.showTermsLink?s.createElement(p,{className:"s-font-body",hasPrivacyPolicy:this.props.showPrivacyPolicyLink}):null,this.props.showPrivacyPolicyLink?s.createElement(m,{className:"s-font-body"}):null)),this.sbHasContent("copyright")?a.apply(this,[e,t]):null):null)}var s=n(0),l=n(1),u=n(33),c=n(397),d=n(398),f=n(1215),p=n(1212),m=n(1213),h=n(2208),g=(n(7),n(2133)),v=n(2132)
e.exports=function(){return this.props.showFooter?r.apply(this,[]):null}},2266:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(2153)
e.exports=t.default},2267:function(e,t,n){"use strict"
var i=n(0),o=(n(1),n(2160))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2268:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(397),n(1871),n(2131)),s=(n(1174),n(7),n(2157)),l=n(2133),u=n(2216),c=n(2217),d=n(2132),f=n(1864)
e.exports=function(){return o.createElement(d,i({className:"s-section s-store-section "+this._getPaddingClass()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(l,a.assign({},{wasMinimal:!0},this.getComponentProps("background1"))),this._showLayoutButton()?o.createElement(s,a.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout,updatePadding:this._updatePadding},this._getLayoutProps())):null,o.createElement(u,this.getComponentProps("portfolio1"))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(f,this.getBackgroundProps("background1")):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(r,{section:this,binding:this.getDefaultBinding()})),o.createElement("div",{className:"s-ecommerce-container"},o.createElement(c,a.assign({},{sbClass:this.sbUniformTextAlignment("text1 text2")},this.getComponentProps("portfolio1"))),null)))}},2269:function(e,t,n){"use strict"
var i=n(0),o=(n(1),n(2270))
e.exports=function(){return i.createElement("div",{},"\n  ",o.apply(this),"\n")}},2270:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(2226),n(2133),n(397),n(2131)),s=n(1864),l=n(2132)
e.exports=function(){return o.createElement(l,i({className:"s-process-section s-section "+this._getPaddingClass()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(s,this.getBackgroundProps("background1")):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(r,{contentCheck:"repeatable1",section:this,binding:this.getDefaultBinding()}),o.createElement("div",{className:this.sbUniformTextAlignment("text1 text2")},"\n        ",this._renderRepeatable("repeatable1"),"\n      "))))}},2274:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(397),n(1864)),s=n(1182),l=(n(2133),n(2131)),u=n(2132),c=(n(2179),n(1181))
n(2181)
e.exports=function(){return o.createElement(u,i({className:"s-blog-section s-section "+this._getPaddingClass()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),o.createElement(c,this._getWaypointProps()),null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(r,this.getBackgroundProps("background1")):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns no-float sixteen"},o.createElement(l,{section:this,binding:this.getDefaultBinding()})),o.createElement("div",{className:this.sbUniformTextAlignment("text1 text2")},o.createElement(s,i({className:"WaypointLazy",layoutSetting:this._getLayoutSettings(),sectionId:this._getSectionId()},this.getComponentProps("blog1")),")"))))}},2275:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(2141)
e.exports=t.default},2276:function(e,t,n){"use strict";(function(t){function i(e,t){var n=c.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=c.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}function o(){var e=this.getComponentProps("contactInfo1")
return u.createElement("div",{className:"s-contact-section-columns s-three-columns "+this.sbUniformTextAlignment("text1 text2")},u.createElement("div",{className:"s-contact-info-column"},u.createElement(v,c.assign({},{onDelete:this._hideContactInfo},e))),u.createElement("div",{className:"s-google-maps-column"},u.createElement(g,c.assign({},{onDelete:this._hideMap,fixHeight:this._fixMapHeight},e))),u.createElement("div",{className:"s-email-column"},u.createElement(p,c.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1")))))}function a(){var e=this.getComponentProps("contactInfo1")
return u.createElement("div",{className:"s-contact-section-columns s-two-columns "+this.sbUniformTextAlignment("text1 text2")},u.createElement("div",{className:"s-google-maps-column"},u.createElement(g,c.assign({},{onDelete:this._hideMap,fixHeight:this._fixMapHeight},e))),u.createElement("div",{className:"s-email-column"},u.createElement(p,c.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1")))))}function r(){var e=this.getComponentProps("contactInfo1")
return u.createElement("div",{className:"s-contact-section-columns s-three-columns "+this.sbUniformTextAlignment("text1 text2")},u.createElement("div",{className:"s-contact-info-column"},u.createElement(v,c.assign({},{onDelete:this._hideContactInfo},e))),u.createElement("div",{className:"s-google-maps-column"},u.createElement(g,c.assign({},{onDelete:this._hideMap,fixHeight:this._fixMapHeight},e))),u.createElement("div",{className:"s-email-column"},u.createElement(p,c.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1")))))}function s(e){var t=this.getComponentProps("contactInfo1")
return u.createElement("div",{className:"s-contact-section-columns s-two-columns "+this.sbUniformTextAlignment("text1 text2")},!e.get("show_info")||!this.isEditMode()&&this._isContactInfoEmpty(t)?null:u.createElement("div",{className:"s-contact-info-column"},u.createElement(v,c.assign({},{onDelete:this._hideContactInfo},t))),e.get("show_map")?u.createElement("div",{className:"s-google-maps-column"},u.createElement(g,c.assign({},{onDelete:this._hideMap,fixHeight:this._fixMapHeight},this.getComponentProps("contactInfo1")))):null,u.createElement("div",{className:"s-email-column"},u.createElement(p,c.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1")))))}function l(){var e=this.generateComponentBindingIfMissing(["slideSettings","display_settings"])
return u.createElement("div",{className:"container"},e.get("show_map")||e.get("show_info")?null:u.createElement("div",{className:"columns "+(this.getThemeFeature("narrowContactForm")?"twelve offset-two":"sixteen")},u.createElement(m,{section:this,binding:this.getDefaultBinding()}),u.createElement("div",{className:"s-email-form-container "+this.sbUniformTextAlignment("text1 text2")},u.createElement(p,c.assign({},{onToggleField:this._fixMapHeight,fieldType:"overlay_label_field"},this.getComponentProps("email1"))))),this.isEditMode()&&e.get("show_map")&&e.get("show_info")?u.createElement("div",{className:"columns sixteen"},u.createElement(m,{section:this,binding:this.getDefaultBinding()}),o.apply(this,[e])):null,!this.isEditMode()&&e.get("show_map")&&e.get("show_info")&&this._isContactInfoEmpty(this.getComponentProps("contactInfo1"))?u.createElement("div",{className:"columns sixteen"},u.createElement(m,{section:this,binding:this.getDefaultBinding()}),a.apply(this,[e])):null,!this.isEditMode()&&e.get("show_map")&&e.get("show_info")&&!this._isContactInfoEmpty(this.getComponentProps("contactInfo1"))?u.createElement("div",{className:"columns sixteen"},u.createElement(m,{section:this,binding:this.getDefaultBinding()}),r.apply(this,[e])):null,!e.get("show_map")&&e.get("show_info")||e.get("show_map")&&!e.get("show_info")?u.createElement("div",{className:"columns sixteen"},u.createElement(m,{section:this,binding:this.getDefaultBinding()}),s.apply(this,[e])):null,!this.isEditMode()||e.get("show_map")&&e.get("show_info")?null:u.createElement("div",{className:"s-black-button-container"},e.get("show_map")?null:u.createElement("div",{className:"s-small-black-button",onClick:this._showMap},t("Editor|Add Map")),e.get("show_info")?null:u.createElement("div",{className:"s-small-black-button",onClick:this._showContactInfo},t("Editor|Add Contact Info"))))}var u=n(0),c=n(1),d=(n(397),n(2133)),f=n(1864),p=n(1179),m=n(2131),h=n(2132),g=(n(7),n(1881)),v=n(1877),y=n(2136)
e.exports=function(){return u.createElement(h,i({className:"s-contact-section s-section "+this._getPaddingClass()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1")),this.isEditMode()?u.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:u.createElement(d,this.getComponentProps("background1")),u.createElement(y,c.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout,updatePadding:this._updatePadding},this._getLayoutProps()))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?u.createElement(f,this.getBackgroundProps("background1")):null,l.apply(this,[]))}}).call(t,n(3))},2277:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(397),n(1871),n(2131)),s=(n(1174),n(7),n(2157)),l=n(2133),u=n(2149),c=n(1869),d=n(2132),f=n(1864)
e.exports=function(){return o.createElement(d,i({className:"s-section s-store-section "+this._getPaddingClass()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),this.isEditMode()?o.createElement("div",{className:"s-section-editor-wrapper"},this.getThemeFeature("disableBackgrounds")?null:o.createElement(l,a.assign({},{wasMinimal:!0},this.getComponentProps("background1"))),this._showLayoutButton()?o.createElement(s,a.assign({},{layoutOptions:this._getLayoutOptions(),updateLayout:this._updateLayout,updatePadding:this._updatePadding},this._getLayoutProps())):null,o.createElement(u,this.getComponentProps("ecommerce1"))):null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(f,this.getBackgroundProps("background1")):null,o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(r,{section:this,binding:this.getDefaultBinding()})),o.createElement("div",{className:"s-ecommerce-container"},o.createElement(c,a.assign({},{sbClass:this.sbUniformTextAlignment("text1 text2")},this.getComponentProps("ecommerce1"))),null)))}},2278:function(e,t,n){"use strict"
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||!1
i.configurable=!0
"value"in i&&(i.writable=!0)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}(),s=n(2135),l=n(1),u=function(e){return e&&e.__esModule?e:{default:e}}(l),c=function(e){function t(e){i(this,t)
var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.showBaseRotationDropdown=!0
n.sectionName="gallery"
return n}a(t,e)
r(t,[{key:"getRotationKeys",value:function(){return u.default.pluck(this.props.layoutOptions,"key")}}])
return t}(s.BaseLayoutButton)
t.default=(0,s.connectToStores)(c)
e.exports=t.default},2279:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=n(2141)
e.exports=t.default},2283:function(e,t,n){"use strict"
function i(e,t){var n=c.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=c.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}function o(e,t,n,i,o){var a=this._sbHasMediaContent(i)
return u.createElement("div",{className:"inner"},"noForeground"!==o?u.createElement("div",{className:"container s-rva "+o},this._showMediaWrapper(o)?u.createElement("div",{className:"columns eight media-outer s-rva-media "+o+" "+c.keys(c.pick({"offset-four":!this._sbAnyHasContent(i,"text1 text2 button1")},c.identity)).join(" ")},u.createElement("div",{className:"media-wrapper"},u.createElement(d,c.assign({},{size:"medium"},this.getReduxComponentProps("media1",t.sub(i)))))):null,this._sbAnyHasContent(i,"text1 text2 button1")?u.createElement("div",{className:"columns s-rva-text slider-desc valign "+o+" "+c.keys(c.pick({eight:a,"fourteen offset-one":("noImage"==o||!a)&&this.getThemeFeature("narrowMedia"),sixteen:!("noImage"!=o&&a||this.getThemeFeature("narrowMedia"))},c.identity)).join(" ")},u.createElement("div",{className:c.keys(c.pick({"half-offset-right":"right"==o&&a},c.identity)).join(" ")},u.createElement(h,{section:this,binding:this.getDefaultBinding(),parentBinding:t.sub(i),contentCheck:"button1"}),u.createElement("div",{className:this.sbUniformTextAlignment("text1 text2",{parentBinding:t.sub(i)})},u.createElement(f,this.getComponentProps("button1",t.sub(i)))))):null):null)}function a(e,t,n,a){var r=this._getSliderLayout(a)
return u.createElement(g,i({className:"item "+r,key:a},this.getSliderBackgroundProps("background1",t.sub(a),r)),this.isEditMode()?u.createElement("div",{className:"s-section-editor-wrapper"},e?null:u.createElement(p,c.assign({},{allowColors:!1},this.getComponentProps("background1",t.sub(a)))),e?u.createElement(y,c.assign({},{warnningInfo:this._imageRatioWarnning(a),setStateFunc:this.setStateFunc},this.getComponentProps("background1",t.sub(a)))):null,e?null:u.createElement("s-layoutSelector",{},"\n          ",this._renderSliderLayoutBtn(a),"\n        ")):null,this.hasBackgroundVideo("background1",t.sub(a))?u.createElement(m,this.getBackgroundProps("background1",t.sub(a))):null,o.apply(this,[e,t,n,a,r]))}function r(e,t,n,i){return a.apply(this,[e,t,n,i])}function s(e){var t=this.getRepeatableBinding("slider1")
return u.createElement.apply(this,[v,c.assign({},{fullscreen:this.getThemeFeature("fullscreenSlider"),fullscreenSliderOnlyFirstSection:this.getThemeFeature("fullscreenSliderOnlyFirstSection"),index:this.props.index,getSliderLayouts:this._getSliderLayoutArr,isBanner:e,imgEditorState:this.state.imgEditorState},this.getComponentProps("slider1")),c.map(t.get().toArray(),r.bind(this,e,t))])}function l(){var e=this._isBannerSection()
return u.createElement("div",{className:"s-section s-slider-section "+c.keys(c.pick({"s-banner-section":e,"s-slider-section-s5":this.isS5FirstSection()},c.identity)).join(" "),style:this.getSectionStyle()},s.apply(this,[e]))}var u=n(0),c=n(1),d=(n(397),n(1175)),f=n(1201),p=n(2133),m=n(1864),h=n(2131),g=n(2132),v=n(1889),y=n(1906)
e.exports=function(){return l.apply(this,[])}},2284:function(e,t,n){"use strict"
var i=n(0)
n(1)
e.exports=function(){return i.createElement("div",{className:"s-section-thumb s-title-thumb "+this._getBackgroundClass(),style:this._getBackgroundStyle()},i.createElement("div",{className:"s-section-thumb-content"},i.createElement("div",{className:"p100"},i.createElement("div",{className:"title-group"},this.props.content.components.text1.value?i.createElement("div",{className:"s-font-title title",dangerouslySetInnerHTML:{__html:this.props.content.components.text1.value}}):null,this.props.content.components.text2.value?i.createElement("div",{className:"s-font-heading subtitle",dangerouslySetInnerHTML:{__html:this.props.content.components.text2.value}}):null),i.createElement("div",{className:"arrow-image"}))))}},2289:function(e,t,n){"use strict"
function i(e,t){var n=a.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=a.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}var o=n(0),a=n(1),r=(n(397),n(2133),n(1864)),s=n(2150),l=n(2189),u=n(2131),c=(n(2278),n(2132))
e.exports=function(){return o.createElement(c,i({className:"s-gallery-section s-section "+this._getPaddingClass()},this.getThemeFeature("disableBackgrounds")?{}:this.getBackgroundProps("background1",null,!0)),null,!this.getThemeFeature("disableBackgrounds")&&this.hasBackgroundVideo("background1")?o.createElement(r,this.getBackgroundProps("background1")):null,"fullWidth"!=this._getLayoutKey()?o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(u,{section:this,binding:this.getDefaultBinding()})),o.createElement("div",{className:"columns sixteen",style:{transition:"none"}},"vertical"!=this._getLayoutKey()?o.createElement(s,a.assign({},{layout:this._getLayoutKey(),isArranging:this.isState("editor"),toggleEditor:this.toggleEditor},this.getComponentProps("gallery1"))):null,"vertical"==this._getLayoutKey()?o.createElement(l,a.assign({},{layout:this._getLayoutKey(),isArranging:this.isState("editor"),toggleEditor:this.toggleEditor},this.getComponentProps("gallery1"))):null)):null,"fullWidth"==this._getLayoutKey()?o.createElement("div",{className:"full-width-gallery"},o.createElement("div",{className:"container"},o.createElement("div",{className:"columns sixteen"},o.createElement(u,{section:this,binding:this.getDefaultBinding()}))),o.createElement(s,a.assign({},{layout:this._getLayoutKey(),isArranging:this.isState("editor"),toggleEditor:this.toggleEditor},this.getComponentProps("gallery1")))):null)}},2309:function(e,t,n){e.exports=n(4)(1492)},2333:function(e,t){"use strict"
function n(e,t){function n(e){var t=e.className.split(" ")
return-1!==t.indexOf("s-bg-image")||-1!==t.indexOf("s-bg-video")}for(var i=0;i<e.length;i++){var o=e[i]
!function(e){var i=getComputedStyle(e)["background-color"]
!n(e)&&t(i)<.72?e.classList.add("s-bg-light-text-override"):e.classList.remove("s-bg-light-text-override")}(o)}}function i(){document.write('<style id="hide-section-contents-style">\n    .s-section .container {\n      visibility: hidden;\n    }\n  </style>')}function o(){function e(e){var t=e.match(/rgb\((\d+), (\d+), (\d+)\)/)
if(!t)return 1
var n=t.slice(1,4).map(parseFloat)
return(.299*n[0]+.587*n[1]+.114*n[2])/255}var t=document.querySelectorAll(".slide:not(.s-hidden-section) .s-section")
applyLightTextOverride(t,e)
var n=document.querySelector("#hide-section-contents-style")
n.remove?n.remove():n.parentNode.removeChild(n)}Object.defineProperty(t,"__esModule",{value:!0})
t.beforeSections=i
t.afterSections=o
t.applyLightTextOverride=n},2853:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/bright/thumbnail.jpg"},2854:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=new r.default(e),i=n.lumaCorrection(),o=null,a=null
if(t){o=new r.default(t).lumaCorrection()
a=new r.default(t)}else{o=i
a=n}var s=i.toHex(),u=l.default.generate({"subtitle subtitleLink itemSubtitle itemSubtitleLink":i,"subtitleLink itemSubtitleLink":"\n      border-bottom: 1px solid "+i.fade(.7).toRgba()+";\n    ",button:"\n      border-color: "+s+";\n      background: "+s+";\n    ",buttonHover:"\n      border-color: "+i.mult(1.25).toHex()+";\n      background: "+i.mult(1.25).toHex()+";\n    ",mobileActionButton:i,mobileActionButtonForApp:i,mobileNavbarButtons:i,overlay:o.lumaCorrection().lumaCorrection(.4).mix("#333",.35).mult(.35).fade(.35),blogInfo:s,socialLinks:i,ecommerceGroup:{main:i.lighten(.2),mobileBg:i.lumaCorrection().mix("#36383b",.8)},donationGroup:{main:i.lighten(.2)},themeColorGroup:{main:i}}),c=u+"\n.s-custom-colors #header-container .nav-item a:hover,\n.s-custom-colors #header-container .nav-item a.selected {\n  color: "+s+";\n  border-bottom: 1px solid "+s+";\n}\n.s-variation-default .s-component.s-background .s-component-editor .stock-images li.s-bg-gray\n\n.s-custom-colors .s-section.s-bg-dark, .s-custom-colors .s-component.s-background .s-component-editor .stock-images li.s-bg-dark {\n  background-color: "+i.lumaCorrection().mix("#36383b",.9).mult(.95).toHex()+";\n}\n.s-custom-colors .s-section.s-bg-gray, .s-custom-colors .s-component.s-background .s-component-editor .stock-images li.s-bg-gray {\n  background-color: "+a.lumaCorrection(.9).toHex()+";\n}\n\n.s-custom-colors .s-section.s-info-section .s-info-box .s-item-subtitle,\n.s-custom-colors .s-section.s-rows-section .s-item-text-group .s-item-subtitle,\n.s-custom-colors .s-section.s-media-section .s-layout-mediaLeft .s-item-text-group .s-item-subtitle,\n.s-custom-colors .s-section.s-media-section .s-layout-mediaRight .s-item-text-group .s-item-subtitle,\n.s-custom-colors .s-section.s-media-section .s-layout-alt .s-item-text-group .s-item-subtitle,\n.s-custom-colors .s-section.s-columns-section .s-item-text-group .s-item-subtitle,\n.s-custom-colors .s-section.s-block-section .s-block-feature .s-item-text-group .s-item-subtitle,\n.s-custom-colors .s-section.s-block-section .s-block-profile .s-item-text-group .s-item-subtitle {\n  color: "+s+";\n}\n\n.s-custom-colors .s-section.s-info-section .s-info-box .s-item-subtitle .s-text .s-component-content a,\n.s-custom-colors .s-section.s-rows-section .s-item-text-group .s-item-subtitle .s-text .s-component-content a,\n.s-custom-colors .s-section.s-media-section .s-layout-mediaLeft .s-item-text-group .s-item-subtitle .s-text .s-component-content a,\n.s-custom-colors .s-section.s-media-section .s-layout-mediaRight .s-item-text-group .s-item-subtitle .s-text .s-component-content a,\n.s-custom-colors .s-section.s-media-section .s-layout-alt .s-item-text-group .s-item-subtitle .s-text .s-component-content a,\n.s-custom-colors .s-section.s-columns-section .s-item-text-group .s-item-subtitle .s-text .s-component-content a,\n.s-custom-colors .s-section.s-block-section .s-block-feature .s-item-text-group .s-item-subtitle .s-text .s-component-content a,\n.s-custom-colors .s-section.s-block-section .s-block-profile .s-item-text-group .s-item-subtitle .s-text .s-component-content a {\n  color: "+s+";\n  border-bottom: 1px solid "+i.fade(.7).toHex()+";\n}\n\n@media only screen and (max-width: 727px) {\n  .s-custom-colors .navbar-drawer-bar a {\n    background: "+s+";\n  }\n}"
if(i.luma()<.5){c+=l.default.generate({ecommerceTextGroup:{textColor:i.lighten(.35)}},{prefix:".s-bg-dark"})
c+="\n.s-custom-colors .s-section.s-bg-dark .s-blog-wrapper .s-blog-col-placeholder .s-blog-details .s-blog-info {\n  color: "+i.lighten(.35).toHex()+";\n}"}else c+="\n.s-custom-colors .s-section.s-bg-dark .s-blog-wrapper .s-blog-col-placeholder .s-blog-details .s-blog-info {\n  color: "+s+";\n}"
if(i.luma()<.4){c+=l.default.generate({ecommerceTextGroup:{textColor:new r.default("#ffffff")}},{prefix:".s-bg-gray"})
c+="\n.s-custom-colors .s-section.s-bg-gray .s-blog-wrapper .s-blog-col-placeholder .s-blog-details .s-blog-info {\n  color: white;\n}"}return c}Object.defineProperty(t,"__esModule",{value:!0})
t.default=o
var a=n(135),r=i(a),s=n(2169),l=i(s)
e.exports=t.default},2855:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(5),a=i(o),r=n(1),s=i(r),l=n(41),u=i(l),c=n(22),d=(i(c),n(19)),f=i(d),p=n(2309),m=i(p),h=n(135),g=i(h),v=n(8),y=i(v),b=n(11),_=i(b),w=n(157),C=i(w),x=n(400),k=i(x),S=n(2333),N=function(){var e=function(e){return e.hasClass("s-bg-image")||e.hasClass("s-bg-video")},t=null,n=function(e,n){var i=null
if((0,a.default)("#header-container-fixed .logo img").length){i=(0,a.default)("#header-container-fixed .logo img")
var o=i.attr("src")
if(o!==t){t=o
o||n()
var r=new m.default,l=new Image
l.onload=function(){try{var t=r.getPalette(l,5,10,!1),i=s.default.flatten(t)
i.length&&s.default.all(i,function(e){return e>238})?e():n()}catch(e){console.log("[BRIGHT] Can't get image data. Probably CORS issue. Assume not white.")
n()}return l=null}
l.crossOrigin="Anonymous"
return l.src=o}}},i=function(){return n(function(){return(0,a.default)("#header-container-fixed .nav-center").addClass("white-logo")},function(){return(0,a.default)("#header-container-fixed .nav-center").removeClass("white-logo")})},o=function(){return(0,a.default)('<div class="s-bright-arrow"> <div class="a1"></div> <div class="a2"></div> </div>')},r=u.default.debounce(function(){var t=void 0
if(!(0,a.default)(".slide.s-section-1").hasClass("s-hidden-section")){var n=(0,a.default)(".s-section:not(.s-footer-section)"),i=n.eq(0),r=n.eq(1),s=(0,a.default)(".s-bright-arrow")
s.length||(s=o());(0,a.default)(".top-bump, .bottom-bump").removeClass("top-bump bottom-bump")
if(n.length>=2&&!e(r)&&!r.hasClass("s-slider-section")){t=r.css("background-color")
s.find(".a1, .a2").css({borderColor:t})
return i.append(s).addClass("bottom-bump")}if(n.length>=2&&!e(i)&&!i.hasClass("s-slider-section")){t=i.css("background-color")
s.css({borderTopColor:t})
return r.append(s).addClass("top-bump")}return(0,a.default)(".s-bright-arrow").remove()}},25),l=function(){if(!(0,a.default)("#s-content").hasClass("disable-rotate-colors")){var e=(0,a.default)(".s-page-product .s-section:visible, .slide:not(.s-hidden-section) .s-section:visible, .s-footer-section"),t=(0,a.default)("#header-container"),n="searchPage"===_.default.getCurrentPageType()
_.default.getIsMultiPage()&&(0,a.default)(".s-footer-section:not(.s-bg-white, .s-bg-gray)").removeClass("s-bg-gray collapse-top-padding").addClass("s-bg-dark s-bg-light-text-override")
k.default.collapsePaddingAdjacentSection(e)
e.first().hasClass("s-slider-section")&&e.first().addClass("s-bg-dark");(0,S.applyLightTextOverride)(e,function(e){if(void 0!==g.default.prototype.validate(e)&&null!==g.default.prototype.validate(e))return g.default.prototype.validate(e).luma()})
t.removeClass("s-bg-light-text s-bg-dark-text")
for(var i=["s-bg-light-text","s-bg-dark-text"],o=0;o<i.length;o++){var r=i[o]
e.first().hasClass(r)?t.addClass(r):t.removeClass(r)}for(var s=["s-bg-dark"],l=0;l<s.length;l++){var u=s[l]
if(e.first().hasClass(u)){t.removeClass("s-bg-light-text s-bg-dark-text")
t.addClass("s-bg-light-text")}}if(e.first().hasClass("s-bg-light-text-override")){t.removeClass("s-bg-light-text s-bg-dark-text")
t.addClass("s-bg-light-text")}if(n){t.removeClass("s-bg-light-text s-bg-dark-text")
return t.addClass("s-bg-dark-text")}}},c=u.default.debounce(function(){return window.Waypoint.refreshAll()},200),d=function(){if(!f.default.isSmallScreen()){var e=(0,a.default)(document).scrollTop(),t=(0,a.default)("#header-container"),n=(0,a.default)("#header-container-fixed"),i=(0,a.default)(".s-ecommerce-shopping-cart")
if(n.length&&t.height()){var o=void 0
void 0!==(0,a.default)(".s-section:eq(0)")&&null!==(0,a.default)(".s-section:eq(0)")&&"function"==typeof(0,a.default)(".s-section:eq(0)").outerHeight&&(o=(0,a.default)(".s-section:eq(0)").outerHeight())
var r=n.outerHeight()
if(e>=Math.max(o-r,100)){n.addClass("animated")
i.css("top",10+n.outerHeight())}else{n.removeClass("animated")
i.css("top",10)}}return c()}}
d();(0,a.default)(window).scroll(d)
var p=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=(0,a.default)("#header-container"),n=(0,a.default)(".slide.s-first-visible-section .s-section, .s-page-section.s-store-section")
n.addClass("no-contain")
n.stop()[e?"animate":"css"]({"padding-top":Math.max(t.outerHeight()+0,40)});(0,a.default)(".s-section:not(.s-footer-section)").length<=1&&n.css("min-height",(0,a.default)(window).height()-t.outerHeight()-parseInt(n.css("padding-bottom")))
if(n.length&&n.is(".s-slider-section")){t.outerHeight()}(0,a.default)(".slide.s-first-visible-section .s-section")},h=function(){var e=(0,a.default)("#header-container"),t=(0,a.default)("#header-container-fixed"),n=e.find(".nav-left"),i=t.find(".nav-left"),o=e.find(".nav-right"),r=t.find(".nav-right"),l=e.find(".original-nav .s-nav-item:visible"),u=e.find(".cta")
e.find(".logo")
t.width((0,a.default)("#header-container").width()).css("marginLeft","").find(".logo img").click(function(){return window.location.hash="#1"})
var c=s.default.sum(l,function(e){return(0,a.default)(e).width()+40})
u.find(".s-component-content").length&&(c+=u.width()+20)
var d=0
e.find(".nav-items").empty()
t.find(".nav-items").empty()
l.each(function(){var s=(0,a.default)(this),l=s.clone()
l.find("*").addBack().removeAttr("data-reactid")
if(_.default.getIsMultiPage()&&!l.hasClass("s-external-link-item")){var u=l.attr("href")
u&&l.click(function(e){switch(y.default.getSiteMode()){case"editor":e.preventDefault()
return C.default.replace(u)
case"preview":e.preventDefault()
return C.default.push(u)}})}l.find(".s-nav-item-temp").addClass("s-nav-item")
l=(0,a.default)('<span class="nav-item">').append(l)
var f=l.clone(!0,!0)
d+=s.width()+40
if(d-.5*(s.width()+40)<.5*c){l.appendTo(n.find(".nav-items"))
f.appendTo(i.find(".nav-items"))}else{l.appendTo(o.find(".nav-items"))
f.appendTo(r.find(".nav-items"))}if(n.height()>70||o.height()>70){e.addClass("squeeze")
return t.addClass("squeeze")}})
!f.default.isSmallScreen()&&t.length?(0,a.default)(".section-anchor").not("li.slide:first-child .section-anchor").css({top:-(t.outerHeight()-1)}):(0,a.default)(".section-anchor").css({top:0})
if(0===(0,a.default)(".cta .s-component-editor").length){var p=void 0
if(727<(p=e.width())&&p<=1129&&e.find(".nav-item:visible").length>5){e.addClass("block-mode")
e.css({paddingTop:e.find(".nav-center").height()+20})
t.addClass("block-mode")}else{e.removeClass("block-mode")
e.css("paddingTop","")
t.removeClass("block-mode")}if("inline"===n.css("display")){e.addClass("squeeze")
return t.addClass("squeeze")}if(e.hasClass("squeeze")){var m=s.default.map([n,o],function(e){var t=e.find(".nav-item, .cta"),n=32*t.length
return e.width()-s.default.sum(t,function(e){return(0,a.default)(e).outerWidth()})>n})
if(m[0]&&m[1]){e.removeClass("squeeze")
return t.removeClass("squeeze")}}}},v=u.default.debounce(function(){l()
h()
return p()},25);(0,a.default)(window).resize(v)
h()
p()
l()
r()
i()
window.edit_page.Event.subscribe("Section.changed",function(){setTimeout(p,50)
return setTimeout(l,50)})
return window.edit_page.Event.subscribe("Page.beforeNewOneFadeIn",function(){l()
r()
h()
return p()})}
t.default=N
e.exports=t.default},2856:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(2333)
t.default={beforeSections:"<script>("+i.beforeSections.toString()+")()</script>",afterSections:"<script>\n    (function(){\n      var applyLightTextOverride = ("+i.applyLightTextOverride.toString()+");\n      ("+i.afterSections.toString()+")();\n    })()\n  </script>"}
e.exports=t.default},2857:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/bright/sections/blog/thumbnail/cover.png"},2858:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/bright/sections/columns/thumbnail/cover.jpg"},2859:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/bright/sections/contact_form/thumbnail/cover.jpg"},2860:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/bright/sections/cta/thumbnail/cover.jpg"},2861:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/bright/sections/ecommerce/thumbnail/cover.png"},2862:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/bright/sections/gallery/thumbnail/cover.jpg"},2863:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/bright/sections/html/thumbnail/cover.jpg"},2864:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/bright/sections/icons/thumbnail/cover.jpg"},2865:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/bright/sections/info/thumbnail/cover.png"},2866:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/bright/sections/media/thumbnail/cover.jpg"},2867:function(e,t,n){"use strict";(function(t){function i(e,t){var n=c.assign({},e,t)
e.hasOwnProperty("style")&&(n.style=c.defaults(n.style,e.style))
e.hasOwnProperty("className")&&t.hasOwnProperty("className")&&(n.className=t.className+" "+e.className)
return n}function o(e,t,n){return u.createElement("span",i({className:"nav-item",key:n},this._getNavItemProps(t)),u.createElement("a",{className:"s-nav-item",href:this.getSectionHash(n)},u.createElement("span",{className:"s-font-body"},t.name)))}function a(e,t,n,i){return u.createElement("li",{},u.createElement("a",{className:c.keys(c.pick({"s-nav-item-temp":!0,selected:i.selected},c.identity)).join(" "),target:i.newTarget?"_blank":"_self",href:i.path},u.createElement("span",{className:"s-font-body"},i.title)))}function r(e,t,n){return u.createElement("span",{className:"nav-item",key:n},t.items?u.createElement("div",{className:c.keys(c.pick({"s-nav-item":!0,"s-nav-dropdown":!0},c.identity)).join(" ")},u.createElement("a",{className:"s-nav-item-temp "+c.keys(c.pick({selected:t.selected},c.identity)).join(" ")},u.createElement("span",{className:"s-font-body"},t.title+" ","\n                ",u.createElement("i",{className:"fa fa-angle-down"}))),u.createElement.apply(this,["ul",{className:c.keys(c.pick({"s-nav-item-temp":!0,selected:t.selected},c.identity)).join(" ")},c.map(t.items,a.bind(this,e,t,n))])):null,t.items?null:u.createElement("a",{className:c.keys(c.pick({"s-nav-item":!0,selected:t.selected},c.identity)).join(" "),href:t.path,target:t.newTarget?"_blank":"_self"},u.createElement("span",{className:"s-font-body"},t.title)))}function s(e,t,n){return u.createElement(m,c.assign({},{key:n,updateTimeStamp:this._getTimestampForLinks()},t.getIn(["components","link"]).toObject()))}function l(){var e=g.Link
return u.createElement("div",{className:c.keys(c.pick({"s-navbar-section":!0,editing:"editor"==this.getComponentBinding("image2").get("_state")},c.identity)).join(" ")},this.props.showNav?u.createElement("div",{id:"header-container",className:"navigator "+(this.sbAnyHasContent("image1 text1")?"":"no-logo")+" "+h.getTextColorClassName(this._getFirstSectionBackgroundProps())},u.createElement("div",{className:"nav-left"},u.createElement("span",{className:"nav-items"})),this.sbAnyHasContent("image1 text1")?u.createElement("div",{className:"nav-center"},this.sbHasContent("image1")?u.createElement("div",{className:!this.sbHasContent("image1",{showOnly:!1})&&this.sbHasContent("text1",{showOnly:!1})?"logo empty":"logo"},u.createElement(p,c.assign({},{size:"medium",needTrim:"true"},this.getReduxComponentProps("image1")))):null,this.sbHasContent("text1")?u.createElement("div",{className:this.sbHasContent("image1",{showOnly:!1})&&!this.sbHasContent("text1",{showOnly:!1})?"title empty":"title"},u.createElement(d,c.assign({},{textType:"title",defaultStyle:"bold"},this.getComponentProps("text1")))):null):null,u.createElement("div",{className:"nav-right"},u.createElement("span",{className:"nav-items"}),u.createElement("div",{id:"loginContainer"}),u.createElement("div",{id:"langSwitcherContainer"}),this.props.enableSiteSearch?u.createElement("li",{className:"nav-item",onClick:this.props.onClickSiteSearch},u.createElement(e,{className:"s-nav-item site-search",to:this.props.siteSearchUrl},u.createElement("span",{className:"fa fa-search"}))):null,this.sbHasContent("button1")?u.createElement("div",{className:"cta"},u.createElement(f,this.getComponentProps("button1"))):null),u.createElement("div",{className:"nav original-nav"},u.createElement.apply(this,["span",{},this.props.isMultiPage?null:c.map(this.props.navbarItemData,o.bind(this,e)),this.props.isMultiPage?c.map(this.props.navbarItemData,r.bind(this,e)):null]),u.createElement.apply(this,["span",{},c.map(this.getBinding("submenu").get().toArray(),s.bind(this,e))]))):null,this.props.showNav?u.createElement("div",{id:"header-container-fixed",className:"navigator "+(this.sbAnyHasContent("image1 image2 text1")?"":"no-logo")+" strikingly-fixed"},u.createElement("div",{className:"nav-left"},u.createElement("span",{className:"nav-items"})),this.sbAnyHasContent("image1 image2 text1")?u.createElement("div",{className:"nav-center"},this.sbHasContent("image1",{showOnly:!1})&&!this.sbHasContent("image2",{showOnly:!1})?u.createElement("div",{className:"logo"},u.createElement(p,c.assign({},{size:"medium",needTrim:"true"},this.getReduxComponentProps("image1"))),this.isEditMode()?u.createElement(p,c.assign({},{size:"medium",needTrim:"true",emptyTooltip:t("Editor|You can upload an alternate logo for the white background"),uploadActionName:t("Editor|Upload alternate logo")},this.getReduxComponentProps("image2"))):null):null,this.sbHasContent("image2",{showOnly:!1})?u.createElement("div",{className:"logo"},u.createElement(p,c.assign({},{size:"medium",needTrim:"true"},this.getReduxComponentProps("image2")))):null,!this.sbHasContent("text1",{showOnly:!1})||this.sbHasContent("image1",{showOnly:!1})||this.sbHasContent("image2",{showOnly:!1})?null:u.createElement("div",{className:"title"},u.createElement(d,c.assign({},{textType:"title",defaultStyle:"bold"},this.getComponentProps("text1"))))):null,u.createElement("div",{className:"nav-right"},u.createElement("span",{className:"nav-items"}),u.createElement("div",{id:"loginContainer2"}),this.props.enableSiteSearch?u.createElement("li",{className:"nav-item",onClick:this.props.onClickSiteSearch},u.createElement(e,{className:"s-nav-item site-search",to:this.props.siteSearchUrl},u.createElement("span",{className:"fa fa-search"}))):null,this.sbHasContent("button1")?u.createElement("div",{className:"cta"},u.createElement(f,this.getComponentProps("button1"))):null)):null)}var u=n(0),c=n(1),d=n(397),f=n(1201),p=n(398),m=(n(2133),n(1864),n(2195)),h=n(400),g=n(96)
e.exports=function(){return l.apply(this,[])}}).call(t,n(3))},2868:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/bright/sections/rows/thumbnail/cover.jpg"},2869:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/bright/sections/signup_form/thumbnail/cover.jpg"},2870:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/bright/sections/slider/thumbnail/cover.jpg"},2871:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/bright/sections/social_feed/thumbnail/cover.jpg"},2872:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/bright/sections/text/thumbnail/cover.jpg"},2873:function(e,t,n){e.exports=n.p+"../../../../public/images/v4/bright/sections/title/thumbnail/cover.jpg"},472:function(e){"use strict"
function t(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined")
return Object(e)}var n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable
e.exports=function(){try{if(!Object.assign)return!1
var e=new String("abc")
e[5]="de"
if("5"===Object.getOwnPropertyNames(e)[0])return!1
for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n
if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1
var i={}
"abcdefghijklmnopqrst".split("").forEach(function(e){i[e]=e})
return"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(e){for(var a,r,s=t(e),l=1;l<arguments.length;l++){a=Object(arguments[l])
for(var u in a)i.call(a,u)&&(s[u]=a[u])
if(n){r=n(a)
for(var c=0;c<r.length;c++)o.call(a,r[c])&&(s[r[c]]=a[r[c]])}}return s}},476:function(e,t,n){"use strict"
function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var o=n(6),a=i(o),r=n(1),s=i(r),l=n(5),u=i(l),c=n(15),d=n(25),f=i(d),p=n(160),m=i(p),h=n(161),g=i(h),v=void 0,y=void 0,b=!1,_=function(e,t){e=e.toSlug();(0===e.length||e.match(/^[0-9]+$/g))&&(e="_"+(t+1))
return e},w=function(){var e=n(101),t=n(11),i=n(8),o=t.getCurrentPageType(),a=i.getId()
if(!e.isEditMode()&&y)return y
for(var r=t.getSectionNames(),l=[],u=0;u<r.length;u++){var c=r[u]
c||(c="")
for(var d="preview"===i.getSiteMode()?"/s/sites/"+a+"/preview?mode=iframe&v4=1#":"/#",f="productPage"===o||"itemPage"===o||"searchPage"===o||"storePage"===o?d:"#",p=f+_(c,u),m=1;-1!==s.default.indexOf(l,p);)p=f+"-"+m++
l.push(p)}e.isEditMode()||(y=l)
return l},C=function(e){return w()[e]},x=function(e){var t=void 0,i=void 0,o=void 0
if(""===e)return 0
if(e.match(/^#\d+$/g)){o=n(11)
var a=o.getSections()
t=parseInt(e.substring(1),10)-1;(t<0||t>=a.length)&&(t=0)
return t}if(-1!==s.default.indexOf(w(),e)){t=s.default.indexOf(w(),e)
return t}if(s.default.startsWith(e,"#blog")||s.default.startsWith(e,"#_blog")){var r=void 0
o=n(11)
r=u.default.url(location.href).param("categoryId")
r=r||"all"
i=s.default.findIndex(o.getSections(),function(e){return!(!s.default.isObject(e.components.blog1)||!s.default.isObject(e.components.blog1.category))&&(s.default.isUndefined(e.components.blog1.category.id)?"all"===r:r===e.components.blog1.category.id.toString())})
return i}if("#store"===e||"#_store"===e){o=n(11)
i=s.default.findIndex(o.getSections(),function(e){return s.default.isObject(e.components.ecommerce1)})
return i}},k=function(e){var t=x(e)
S(t)},S=function(e){return E(e)},N=function(e){v.setData("navigating",!0)
return v.setData("navToPosition",e)},E=function(e){if(e>=0){v.setData("navigating",!0)
v.setData("navToIndex",e)
return v.setData("selected",e)}},P=function(){var e=window.location.hash
""!==e&&"#"!==e&&0!==e.indexOf("#!")&&window.history&&"function"==typeof window.history.replaceState&&window.history.replaceState("",document.title,window.location.pathname+window.location.search)},O=s.default.debounce(function(){return window.Waypoint.refreshAll()},1e3),T=function(e){if(!v.getData("navigating")){P()
v.setData("selected",e)}},L=s.default.assign({},c.EventEmitter.prototype,{getDefault:function(e){return s.default.merge({selected:0,navToIndex:null,navigating:!1},{nav:e||[]})},emitChange:function(){this.emit("navigator_store")},addListener:function(e){return this.on("navigator_store",e)},rmListener:function(e){return this.removeListener("navigator_store",e)},init:function(e){v=new f.default(e)
return v.binding},hydrate:function(e){v.binding.set(a.default.fromJS(this.getDefault(e)))},getStates:function(){return v.binding.toJS()},getData:function(e){return v.binding.get(e)},getBinding:function(){return v.binding},getNav:function(){return v.getData("nav").toJS()},getNavById:function(e){var t=v.getData("nav")
return(t&&t.toJS()||[]).find(function(t){return t.uid===e})},getSelectedIndex:function(){return v.getData("selected")},getSelectedPageIndex:function(){return v.getData("selectedPageIndex")},getNavToIndex:function(){return v.getData("navToIndex")},getNavToPosition:function(){return v.getData("navToPosition")},isNavigating:function(){return v.getData("navigating")},getSectionHashByIndex:function(e){return C(e)},isUidMemberOnly:function(e){return this.getNav().some(function(t){return(t.paidMemberOnly||t.memberOnly)&&t.uid===e})},isUidHasPassword:function(e){return this.getNav().some(function(t){return t.hasPassword&&t.uid===e})}})
L.dispatchToken=m.default.register(function(e){switch(e.actionType){case g.default.ActionTypes.SET_SECTION_INDEX:if(!b)return
T(e.index)
break
case g.default.ActionTypes.NAVIGATE_TO_HASH:k(e.hash)
break
case g.default.ActionTypes.NAVIGATE_TO_PREVIOUS_SECTION:var t=L.getSelectedIndex()
S(t>0?t-1:0)
break
case g.default.ActionTypes.NAVIGATE_TO_NEXT_SECTION:var i=n(11),o=L.getSelectedIndex(),a=i.getSections().length
S(o+1<a?o+1:a-1)
break
case g.default.ActionTypes.DID_NAVIGATE_TO_SECTION:v.setData("navigating",!1)
v.setData("navToIndex",null)
break
case g.default.ActionTypes.PAGE_CONTENT_UPDATED:O()
break
case g.default.ActionTypes.PAGE_MOUNTED:window.setTimeout(function(){return b=!0},1500)
break
case g.default.ActionTypes.REPEATABLE_ITEM_MOVED:N(e.position)
break
case g.default.ActionTypes.SWITCH_PAGE:y=void 0}return L.emitChange()})
window.DEBUG||(window.DEBUG={})
window.DEBUG.NavigatorStore=L
t.default=L
e.exports=t.default}})
