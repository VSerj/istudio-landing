!function(e){function t(t){for(var n,o,l=t[0],a=t[1],c=t[2],u=0,h=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&h.push(s[o][0]),s[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(d&&d(t);h.length;)h.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,l=1;l<i.length;l++){var a=i[l];0!==s[a]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},s={0:0},r=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=a;r.push([3,1]),i()}([function(e,t,i){var n=i(1),s=i(2);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var r={insert:"head",singleton:!1};n(s,r);e.exports=s.locals||{}},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:80;if(e){var i=+e.textContent,n=0;s()}function s(){e.textContent="".concat(n),++n>i||setTimeout(s,t)}}function s(){var e=document.querySelector(".button-up");function t(){e.classList.contains("button-up--isActive")&&window.scrollY>window.innerHeight||(window.scrollY>window.innerHeight?e.classList.add("button-up--isActive"):e.classList.remove("button-up--isActive"))}e.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),t(),window.addEventListener("scroll",t)}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function l(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=i,this.inVisibleArea=this.options.inVisibleArea,this.step=this.options.slideWidth,this.activeSelector=this.options.activeSelector,this.transitionSelector=this.options.transitionSelector,this.delayTrottled=this.options.delayTrottled,this.sliderElems=t,this.slider=t.slider,this.slides=t.slides,this.nextBtn=t.nextBtn,this.prevBtn=t.prevBtn,this.toggles=t.toggles,this.activeSlide=t.activeSlide,this.activeToggle=t.activeToggle,this.helperLoopSlides=r(this.slides).splice(0,this.inVisibleArea),this.activeToggleID=1,this.amountSlides=t.slides.length,this.counterShiftSlider=0,this.startBoundarySlider=0,this.endBoundarySlider=-this.amountSlides,this.helperBoundary=-this.inVisibleArea,this.isTrottled=!1,this.isClickOnToggle=!1,this.swipe={startX:0,deltaX:0,startTime:0,maxTime:700,minDistance:40,maxDistance:420}}var t,i,n;return t=e,(i=[{key:"setTranslateX",value:function(e,t){e.style.transform="translateX(".concat(t,"%)")}},{key:"moveSliderOneStep",value:function(){var e=this.counterShiftSlider*this.step;this.setTranslateX(this.slider,e)}},{key:"removeTransitionSlider",value:function(){this.slider.classList.remove(this.transitionSelector)}},{key:"loopMovingToOpositeBoundary",value:function(e){var t=this.getOpositeBoundary(e);void 0!==t&&(this.removeTransitionSlider(),this.counterShiftSlider=t,this.setTranslateX(this.slider,t*this.step),this.helperLoopSlides.forEach((function(e){e.style.transform="translateX(".concat(-100*t,"%)")})))}},{key:"getOpositeBoundary",value:function(e){return void 0===e?void 0:this.counterShiftSlider===this.startBoundarySlider&&"next"===e?this.endBoundarySlider:this.counterShiftSlider===this.endBoundarySlider&&"prev"===e?this.startBoundarySlider:void 0}},{key:"moveHelperLoopSlides",value:function(e){if(!(this.counterShiftSlider<this.helperBoundary||this.counterShiftSlider===this.startBoundarySlider)){var t="next"===e?0:100*this.amountSlides,i=Math.abs(this.counterShiftSlider)-1;this.setTranslateX(this.helperLoopSlides[i],t)}}},{key:"loopMoving",value:function(e){this.loopMovingToOpositeBoundary(e),this.moveHelperLoopSlides(e)}},{key:"calcIndexActiveSlide",value:function(){return Math.abs(this.counterShiftSlider)===Math.abs(this.endBoundarySlider)?0:Math.abs(this.counterShiftSlider)}},{key:"setActiveSlideAndToggle",value:function(e){this.removeActiveSlideAndToggle(),this.activeSlide=this.slides[e],this.activeSlide.classList.add(this.activeSelector),this.activeToggle=this.toggles[e],this.activeToggle.classList.add(this.activeSelector),this.activeToggleID=+this.activeToggle.dataset.toggleId}},{key:"removeActiveSlideAndToggle",value:function(){this.activeToggle.classList.remove(this.activeSelector),this.activeSlide.classList.remove(this.activeSelector)}},{key:"switchSlide",value:function(){var e=this;if(this.setActiveSlideAndToggle(this.calcIndexActiveSlide()),this.isClickOnToggle)return this.removeTransitionSlider(),void this.moveSliderOneStep();setTimeout((function(){e.slider.closest(".".concat(e.transitionSelector))||e.slider.classList.add(e.transitionSelector),e.moveSliderOneStep()}),50)}},{key:"nextSlide",value:function(){this.loopMoving("next"),this.counterShiftSlider++,this.switchSlide()}},{key:"prevSlide",value:function(){this.loopMoving("prev"),this.counterShiftSlider--,this.switchSlide()}},{key:"togglesSwitching",value:function(){var e=this;this.toggles.forEach((function(t){t.addEventListener("click",(function(){var i=+t.dataset.toggleId,n=i-e.activeToggleID;0!==n&&(e.isClickOnToggle=!0,function(t,i){for(;i;)e[t](),--i}(n>0?"prevSlide":"nextSlide",Math.abs(n)),e.activeToggleID=i,e.isClickOnToggle=!1)}))}))}},{key:"swipeMoving",value:function(){var e=this;this.slider.addEventListener("touchstart",(function(t){e.swipe.startX=t.changedTouches[0].clientX,e.swipe.startTime=Date.now()}),{passive:!0}),this.slider.addEventListener("touchmove",(function(t){e.swipe.deltaX=t.changedTouches[0].clientX-e.swipe.startX}),{passive:!0}),this.slider.addEventListener("touchend",(function(t){var i=Date.now()-e.swipe.startTime,n=Math.abs(e.swipe.deltaX);n<e.swipe.minDistance||n>e.swipe.maxDistance||i>e.swipe.maxTime||(e.swipe.deltaX<0?e.trottledSlideSwitch.call(e,e.prevSlide,e.delayTrottled):e.trottledSlideSwitch.call(e,e.nextSlide,e.delayTrottled),e.swipe.deltaX=0)}),{passive:!0})}},{key:"trottledSlideSwitch",value:function(e,t){var i=this;this.isTrottled||(e.call(this),setTimeout((function(){return i.isTrottled=!1}),t),this.isTrottled=!0)}},{key:"setParamsForScreen",value:function(){window.innerWidth<=768&&100!==this.step&&(this.step=100),window.innerWidth>=768&&70!==this.step&&(this.step=70)}},{key:"init",value:function(){var e=this;this.setParamsForScreen(),window.addEventListener("resize",(function(){e.setParamsForScreen()}))}},{key:"run",value:function(){this.init(),this.togglesSwitching(),this.swipeMoving(),this.nextBtn.addEventListener("click",this.trottledSlideSwitch.bind(this,this.nextSlide,this.delayTrottled)),this.prevBtn.addEventListener("click",this.trottledSlideSwitch.bind(this,this.prevSlide,this.delayTrottled))}}])&&l(t.prototype,i),n&&l(t,n),e}();window.addEventListener("load",(function(){var e,t;!function(){var e=document.querySelector(".header"),t=window.matchMedia("(max-width: 1000px)"),i=!1;function n(){e.classList.contains("header--stretch")||window.scrollY||t.matches?e.classList.remove("header--stretch"):e.classList.add("header--stretch")}n(),window.addEventListener("scroll",n),t.addListener((function(){t.matches&&i&&(window.removeEventListener("scroll",n),e.classList.contains("header--stretch")&&e.classList.remove("header--stretch"),i=!1);t.matches||i||(n(),window.addEventListener("scroll",n),i=!0)}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0px 0px 0px 0px";if(e){var i={root:null,rootMargin:t,threshold:0},s=new IntersectionObserver((function(e,t){e.forEach((function(e){var i=e.target;e.isIntersecting&&(i.matches(".counter__number")?n(i,80):i.classList.add("rollOut"),t.unobserve(i))}))}),i);r(e)}function r(e){e.forEach((function(e){return s.observe(e)}))}}(document.querySelectorAll(".fade, .counter__number"),"".concat(document.querySelector(".header").offsetHeight+"px"," 0px 0px 30px")),e=document.querySelector(".btn-burger"),t=document.querySelector(".nav"),document.addEventListener("click",(function(i){var n=i.target;n.closest(".btn-burger")&&(e.classList.toggle("is_active_menu"),t.classList.toggle("is_active_menu")),n.closest(".nav-panel-mobile")||n.closest(".nav")||(e.classList.remove("is_active_menu"),t.classList.remove("is_active_menu"))})),s(),new a({slider:document.querySelector(".slider__slideList"),slides:document.querySelectorAll(".slider__item"),prevBtn:document.querySelector(".slider-btn__previous"),nextBtn:document.querySelector(".slider-btn__next"),toggles:document.querySelectorAll(".slider__toggle"),activeSlide:document.querySelector(".slider__item.slide--isActive"),activeToggle:document.querySelector(".slider__toggle.slide--isActive")},{inVisibleArea:2,slideWidth:70,activeSelector:"slide--isActive",transitionSelector:"slider__slideList--moveTransition",delayTrottled:500}).run()}));i(0)}]);