function _typeof(obj){"@babel/helpers - typeof";return _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}
function _possibleConstructorReturn(self,call){return call&&(_typeof(call)==="object"||typeof call==="function")?call:_assertThisInitialized(self)}
function _assertThisInitialized(self){if(self===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}
function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}
function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}
function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}
function _instanceof(left,right){return right!=null&&typeof Symbol!=="undefined"&&right[Symbol.hasInstance]?!!right[Symbol.hasInstance](left):left instanceof right}
function _classCallCheck(instance,Constructor){if(!_instanceof(instance,Constructor))throw new TypeError("Cannot call a class as a function")}
var Ignite=function Ignite(){"use strict";_classCallCheck(this,Ignite)};Ignite.VERBOSE_LEVEL=0,Ignite.LOG=function(){if(Ignite.VERBOSE_LEVEL>=arguments[0])for(var i=1;i<arguments.length;i++)arguments[0]==1?console.error(arguments[i]):arguments[0]==2?console.warn(arguments[i]):arguments[0]==3?console.info(arguments[i]):console.log(arguments[i]);},Ignite.Node=function Node(name,items,data){"use strict";function appendAll(t,a){!a||(typeof a=="string"?t.appendChild(document.createTextNode(a)):_instanceof(a,Node)?t.appendChild(a):_instanceof(a,Array)&&a.forEach(function(b){return appendAll(t,b)}))}
_classCallCheck(this,Node),this.props={};for(var target=Object.getPrototypeOf(this);target.constructor!=Ignite.Node&&target!=Object.getPrototypeOf(Object);)target=Object.getPrototypeOf(target);var el=name?document.createElement(name):document.createDocumentFragment();if(appendAll(el,items),data)for(var _i=0,_Object$keys=Object.keys(data);_i<_Object$keys.length;_i++){var b=_Object$keys[_i];if(!data[b]);else if(b=="props")this.props=data[b];else try{el.setAttribute(b,data[b])}catch(error){Ignite.LOG(2,error.toString()),this[b]=data[b]}}
Object.setPrototypeOf(target.constructor.prototype,Object.getPrototypeOf(el)),Object.setPrototypeOf(el,Object.getPrototypeOf(this).constructor.prototype);var c={abort:this.onAbort,afterscriptexecute:this.onAfterScriptExecute,animationcancel:this.onAnimationCancel,animationend:this.onAnimationEnd,animationiteration:this.onAnimationIteration,auxclick:this.onAuxClick,beforescriptexecute:this.onBeforeScriptExecute,blur:this.onBlur,cancel:this.onCancel,canplay:this.onCanPlay,canplaythrough:this.onCanPlayThrough,change:this.onChange,click:this.onClick,close:this.onClose,contextmenu:this.onContextMenu,cuechange:this.onCueChange,dblclick:this.onDbClick,drop:this.onDrop,dragover:this.onDragOver,dragstart:this.onDragStart,durationchange:this.onDurationChange,ended:this.onEnded,error:this.onError,focus:this.onFocus,fullscreenchange:this.onFullScreenChange,fullscreenerror:this.onFullScreenError,gotpointercapture:this.onGotPointerCapture,input:this.onInput,invalid:this.onInvalid,keydown:this.onKeyDown,keypress:this.onKeyPress,keyup:this.onKeyUp,load:this.onLoad,loadeddata:this.onLoadedData,loadedmetadata:this.onLoadedMetaData,loadend:this.onLoadEnd,loadstart:this.onLoadStart,lostpointercapture:this.onLostPointerCapture,mousedown:this.onMouseDown,mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave,mousemove:this.onMouseMove,mouseout:this.onMouseOut,mouseover:this.onMouseOver,mouseup:this.onMouseUp,offline:this.onOffline,online:this.onOnline,pause:this.onPause,play:this.onPlay,pointercancel:this.onPointerCancel,pointerdown:this.onPointerDown,pointerenter:this.onPointerEnter,pointerleave:this.onPointerLeave,pointermove:this.onPointerMove,pointerout:this.onPointerOut,pointerover:this.onPointerOver,pointerup:this.onPointerUp,reset:this.onReset,resize:this.onResize,scroll:this.onScroll,select:this.onSelect,selectionchange:this.onSelectionChange,selectstart:this.onSelectStart,submit:this.onSubmit,touchcancel:this.onTouchCancel,touchstart:this.onTouchStart,transitioncancel:this.onTransitionCancel,transitionend:this.onTransitionEnd,visibilitychange:this.onVisibilityChange,wheel:this.onWheel};for(var _i2=0,_Object$keys2=Object.keys(c);_i2<_Object$keys2.length;_i2++){var _b=_Object$keys2[_i2];c[_b]&&el.addEventListener(_b,c[_b])}
return el},Ignite.Empty=function(_Ignite$Node){"use strict";function Empty(items,data){return _classCallCheck(this,Empty),_possibleConstructorReturn(this,_getPrototypeOf(Empty).call(this,null,items,data))}
return _inherits(Empty,_Ignite$Node),Empty}(Ignite.Node)
