/*! no_rails_asset_compression */
webpackJsonp([57],{1876:function(e,t,a){"use strict"
function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=a(2),n=r(s),i=a(292),l=r(i),d=a(1),o=r(d),c=a(5),u=r(c),m=a(14),f=r(m),p=a(17),h=r(p),g=a(61),_=r(g),v=a(8),E=r(v),y=a(1873),N=r(y),L=a(19),b=r(L),k=a(41),w=r(k),x=a(2483),F=r(x),M=a(496),S=null,C="[]"
S=h.default.createPageComponent({displayName:"SocialFeedComponent",mixins:[(0,_.default)("editor")],bobcatPropTypes:{data:{binding:n.default.shape({default:n.default.object})}},componentWillMount:function(){this.initMeta({retrieveScuess:!1,loading:!0,rendering:!1})},componentDidMount:function(){var e=this
N.default.addFeedsListener(this._feedsListener)
this._getSocialFeeds();(0,u.default)(window).resize(w.default.debounce(function(){e._convertFeedsData(JSON.parse(C))
return e.forceUpdate()},250))},componentDidUpdate:function(){!this._getLoading()&&this._getRendering()&&this._renderFeeds()},componentWillUnmount:function(){N.default.removeFeedsListener(this._feedsListener)},_feedsListener:function(e){C=JSON.stringify(e)
this._convertFeedsData(e)
this.forceUpdate()},_getSocialFeeds:function(){var e=this
this._setLoading(!0)
this.forceUpdate()
f.default.getSocialFeeds({pageId:E.default.getId(),success:function(){e._setLoading(!1)
return e._setRetrieveScuess(!0)},fail:function(){e._setLoading(!1)
return e.props.onConnectionFailed()}})},_convertFeedsData:function(e){this._renderList={}
var t=!0,a=!1,r=void 0
try{for(var s,n=Array.from(e)[Symbol.iterator]();!(t=(s=n.next()).done);t=!0){var i=s.value
if(i.feeds.length){var l=!0,d=!1,o=void 0
try{for(var c,u=Array.from(i.feeds)[Symbol.iterator]();!(l=(c=u.next()).done);l=!0){var m=c.value
m.name=i.name
m.avatarUrl=i.avatarUrl}}catch(e){d=!0
o=e}finally{try{!l&&u.return&&u.return()}finally{if(d)throw o}}this._renderList[i.provider]=this._createFeedsList(i)}}}catch(e){a=!0
r=e}finally{try{!t&&n.return&&n.return()}finally{if(a)throw r}}return this._setRendering(!0)},_createFeedsList:function(e){return{name:e.provider,profileUrl:e.profileUrl,rendered:[],rest:e.feeds}},_cutContentForMobile:function(){var e=this
return function(){var t=[]
for(var a in e._renderList){var r=e._renderList[a]
"instagram"===r.name?t.push(r.rendered=r.rest.slice(0,4)):1===o.default.size(e._renderList)?t.push(r.rendered=r.rest.slice(0,3)):t.push(r.rendered=r.rest.slice(0,2))}return t}()},_renderFeeds:function(){var e=this,t=void 0
if(b.default.isSmallScreen()){this._cutContentForMobile()
this._setRendering(!1)
this.forceUpdate()}else if(1===o.default.size(this._renderList)){for(t in this._renderList){var a=this._renderList[t]
a.rendered=a.rest.splice(0,a.rest.length)}this._setRendering(!1)
this.forceUpdate()}else{var r="",s=1/0
o.default.forEach(this._renderList,function(t){var a=(0,u.default)(e.refs[t.name]).height()||0
if(a<=s){s=a
return r=t.name}})
for(t in this._renderList){var n=this._renderList[t]
if(0===n.rest.length)return this._setRendering(!1)
if(n.name===r){if("instagram"===r)switch(o.default.size(this._renderList)){case 1:case 2:n.rendered=n.rendered.concat(n.rest.splice(0,3))
break
case 3:n.rendered=n.rendered.concat(n.rest.splice(0,2))}else n.rendered.push(n.rest.shift())
return this.forceUpdate()}}}},_hasFeedsInType:function(e){return null!=this._renderList[e]},_hasFeeds:function(){return!o.default.isEmpty(this._renderList)},_getLayoutClassName:function(e){var t=this,a=["s-feeds-list","columns"]
a.push("s-feeds-list-"+e)
"persona"===E.default.getTheme().get("name")?a.push(function(){switch(o.default.size(t._renderList)){case 1:return"twelve"
case 2:return"six"
case 3:return"four"}}()):a.push(function(){switch(o.default.size(t._renderList)){case 1:return["onyx_new","sleek"].includes(E.default.getTheme().get("name"))?"instagram"===e?"sixteen":"twelve":"twelve offset-two"
case 2:return"eight"
case 3:return"third"}}())
return a.join(" ")},_getColumnClassName:function(){var e=["columns"]
e.push("persona"===E.default.getTheme().get("name")?"twelve":"sixteen")
return e.join(" ")},_getProfileLink:function(e){return null!=this._renderList[e]?this._renderList[e].profileUrl:void 0},_getFeedList:function(e){return this._renderList[e].rendered},_onClickEditor:function(){this.savePage()
f.default.openDialog("socialFeedManager")},render:function(){return F.default.apply(this)}})
var T=(0,M.addOffline)(S)
T.WaypointLazy=(0,l.default)(T)
t.default=T
e.exports=t.default},2343:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=a(118),s={parseToLink:function(e){var t=e.match(r.RegexConstants.HAS_LINK_G)||[],a=1,s=function(){return t.length>=2?a++:""}
e=e.replace(r.RegexConstants.HAS_LINK_G,function(e){return"<a href='"+e+"' target='_blank'>Link"+s()+"</a>"})
e=e.replace(/\n/g,"</br>")
return e},adjustImgHeight:function(e){var t=e.find("a"),a=t.find("img"),r=function(){var e=a.height(),r=t.outerHeight()
e>r&&a.css({"margin-top":(r-e)/2+"px"})}
r()
return a.load(r)}}
t.default=s
e.exports=t.default},2483:function(e,t,a){"use strict";(function(t){function r(e,t){return i.createElement(d,l.assign({},{key:t},e))}function s(e,t){return i.createElement(c,l.assign({},{key:t},e))}function n(e,t){return i.createElement(o,l.assign({},{key:t},e))}var i=a(0),l=a(1),d=a(2484),o=a(2486),c=a(2488)
e.exports=function(){return i.createElement("div",{className:"s-component s-social-feed"},this.isEditMode()?i.createElement("div",{className:"s-component-editor-wrapper"},this.isState("editor")?null:i.createElement("div",{className:"s-component-overlay",onClick:this._onClickEditor},i.createElement("div",{className:"overlay"},i.createElement("div",{className:"center"},i.createElement("span",{},t("Edit")))))):null,i.createElement("div",{className:"s-component-content",style:{overflow:"hidden"}},this._getLoading()?i.createElement("div",{className:"relative-wrapper s-loading-wrapper"},i.createElement("div",{className:"s-loading"})):null,!this._getLoading()&&this._hasFeeds()?i.createElement("div",{style:{overflow:"hidden"},ref:"container"},this._hasFeedsInType("facebook")?i.createElement.apply(this,["div",{className:this._getLayoutClassName("facebook"),ref:"facebook"},i.createElement("div",{className:"s-feeds-title s-font-body"},i.createElement("div",{className:"fa fa-facebook"}),i.createElement("div",{className:"name"},"Facebook")),l.map(this._getFeedList("facebook"),r.bind(this)),this._getProfileLink("facebook")?i.createElement("a",{className:"read-more s-font-body",href:this._getProfileLink("facebook"),target:"_blank"},t("SocialFeed|View more...")):null]):null,this._hasFeedsInType("instagram")?i.createElement.apply(this,["div",{className:this._getLayoutClassName("instagram"),ref:"instagram"},i.createElement("div",{className:"s-feeds-title s-font-body"},i.createElement("div",{className:"fa fa-instagram"}),i.createElement("div",{className:"name"},"Instagram")),l.map(this._getFeedList("instagram"),s.bind(this)),i.createElement("div",{style:{clear:"both",heght:"1px",width:"100%"}}),i.createElement("a",{className:"read-more s-font-body",href:this._getProfileLink("instagram"),target:"_blank"},t("SocialFeed|View more..."))]):null,this._hasFeedsInType("twitter")?i.createElement.apply(this,["div",{className:this._getLayoutClassName("twitter"),ref:"twitter"},i.createElement("div",{className:"s-feeds-title s-font-body"},i.createElement("div",{className:"fa fa-twitter"}),i.createElement("div",{className:"name"},"Twitter")),l.map(this._getFeedList("twitter"),n.bind(this)),i.createElement("a",{className:"read-more s-font-body",href:this._getProfileLink("twitter"),target:"_blank"},t("SocialFeed|View more..."))]):null):null,i.createElement("div",{className:this._getColumnClassName()},!this.isEditMode()||this._getLoading()||this._hasFeeds()?null:i.createElement("div",{className:"empty-placeholder s-common-status s-font-body"},t("Click here to add social media accounts to your feed!")),this.isEditMode()||this._getLoading()||this._hasFeeds()||this._getRetrieveScuess()?null:i.createElement("div",{className:"empty-placeholder s-common-status s-font-body",onClick:this._getSocialFeeds},i.createElement("div",{className:"fa fa-refresh"}),i.createElement("span",{},t("Failed to get data. Please click to retry!"))))))}}).call(t,a(3))},2484:function(e,t,a){"use strict"
function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=a(2485),n=r(s),i=a(17),l=r(i),d=a(2343),o=r(d),c=a(8),u=r(c),m=a(60),f=r(m)
t.default=l.default.create({componentDidMount:function(){this.refs.imgWrapper&&o.default.adjustImgHeight($(this.refs.imgWrapper))},_getDate:function(){f.default.locale(u.default.getForcedLocale())
return(0,f.default)(this.props.postedAt).fromNow()},_parseText:function(e){if(!e.text)return""
var t=e.text.length>150?e.text.substr(0,150)+" …":o.default.parseToLink(e.text)
"link"===e.type&&(t+=" <a href='"+e.url+"' target='_blank'>Link</a>")
return t},render:function(){return n.default.apply(this)}})
e.exports=t.default},2485:function(e,t,a){"use strict"
var r=a(0),s=a(1)
a(171)
e.exports=function(){return r.createElement("div",{className:"s-feeds-item s-font-body"},r.createElement("div",{className:"s-feed-content"},r.createElement("div",{className:s.keys(s.pick({"s-feed-text":!0,"no-img":!this.props.multimedia.url},s.identity)).join(" ")},r.createElement("div",{className:"s-feed-account"},r.createElement("img",{width:"40px",height:"40px",src:this.props.avatarUrl}),r.createElement("span",{},this.props.name)),r.createElement("div",{className:"s-feed-text-main"},r.createElement("span",{dangerouslySetInnerHTML:{__html:this._parseText(this.props)}})),r.createElement("div",{className:"s-feed-text-bottom"},r.createElement("a",{href:this.props.url,target:"_blank"},this._getDate()))),this.props.multimedia.url?r.createElement("div",{className:"s-feed-image-wrapper",ref:"imgWrapper"},r.createElement("a",{href:this.props.url,target:"_blank"},r.createElement("img",{src:this.props.multimedia.url,width:"100%"}),"video"==this.props.multimedia.type?r.createElement("div",{className:"play-button"},r.createElement("div",{className:"after"})):null)):null))}},2486:function(e,t,a){"use strict"
function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=a(1),n=r(s),i=a(2487),l=r(i),d=a(17),o=r(d),c=a(2343),u=r(c),m=a(8),f=r(m),p=a(60),h=r(p)
t.default=o.default.create({componentDidMount:function(){this.refs.imgWrapper&&u.default.adjustImgHeight($(this.refs.imgWrapper))},_getDate:function(){h.default.locale(f.default.getForcedLocale())
return(0,h.default)(this.props.postedAt).fromNow()},_isReteeted:function(){return!n.default.isEmpty(this.props.meta.retweeted)},_parseText:function(e){return e?u.default.parseToLink(e):""},render:function(){return l.default.apply(this)}})
e.exports=t.default},2487:function(e,t,a){"use strict";(function(t){var r=a(0),s=a(1)
e.exports=function(){return r.createElement("div",{className:"s-feeds-item s-font-body"},r.createElement("div",{className:"s-feed-content"},r.createElement("div",{className:s.keys(s.pick({"s-feed-text":!0,"no-img":!this.props.multimedia.url},s.identity)).join(" ")},this._isReteeted()?null:r.createElement("div",{className:"s-feed-account"},r.createElement("img",{width:"40px",height:"40px",src:this.props.avatarUrl}),r.createElement("span",{},this.props.name)),this._isReteeted()?r.createElement("div",{className:"s-feed-account"},r.createElement("img",{width:"40px",height:"40px",src:this.props.meta.retweeted.avatarUrl}),r.createElement("span",{},this.props.meta.retweeted.name)):null,r.createElement("div",{className:"s-feed-text-main",dangerouslySetInnerHTML:{__html:this._parseText(this.props.text)}}),this._isReteeted()?r.createElement("div",{className:"s-feed-text-retweeted"},r.createElement("div",{className:"fa fa-retweet"}),r.createElement("span",{},this.props.name),r.createElement("div",{className:"fa fa-star"}),r.createElement("span",{},t("retweeted"))):null,r.createElement("div",{className:"s-feed-text-bottom"},r.createElement("a",{href:this.props.url,target:"_blank"},this._getDate()))),this.props.multimedia.url?r.createElement("div",{className:"s-feed-image-wrapper",ref:"imgWrapper"},r.createElement("a",{href:this.props.url,target:"_blank"},r.createElement("img",{src:this.props.multimedia.url,width:"100%"}))):null))}}).call(t,a(3))},2488:function(e,t,a){"use strict"
function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0})
var s=a(2489),n=r(s),i=a(17),l=r(i)
t.default=l.default.create({render:function(){return n.default.apply(this)}})
e.exports=t.default},2489:function(e,t,a){"use strict"
var r=a(0)
a(1)
e.exports=function(){return r.createElement("div",{className:"s-feeds-item"},r.createElement("a",{className:"ib",href:this.props.url,target:"_blank"},r.createElement("div",{className:"s-instagram-picture",style:{backgroundImage:"url("+this.props.multimedia.url+")"}}),"video"==this.props.multimedia.type?r.createElement("div",{className:"play-button"},r.createElement("div",{className:"after"})):null))}}})
