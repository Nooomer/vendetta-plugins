(function(t,i){"use strict";var a={onLoad:function(){command=i.registerCommand({name:"neko",displayName:"Neko",displayDescription:"Get a neko pics",description:"Get a neko pics",options:[{name:"emotion",description:"emotion for neko",type:3,required:!1,displayName:"Emotion",displayDescription:"Chooice emotion for you neko"}],execute:s,applicationId:"-1",inputType:1,type:1})},onUnload:function(){command()}};async function s(n,e){const o=n[0].value;await l(o),c(e.channel.id,gifUrl)}function c(n,e){const o=n??Channels?.getChannelId?.();MessageActions.sendMessage(o,e)}async function l(n){console.log(n);let e;if(n==null?e=await fetch("https://tenor.googleapis.com/v2/search?q=neko&key=AIzaSyDy2fnAUloDkGFCC1IEtRkcqrFxAfLqB_Q&limit=20"):e=await fetch(`https://tenor.googleapis.com/v2/search?q=neko ${n}&key=AIzaSyDy2fnAUloDkGFCC1IEtRkcqrFxAfLqB_Q&limit=20`),!e.ok){console.log(e);return}const o=await e.json();return Object.values(o.results)[LibraryUtils.randomNo(0,10)].media[0].gif.url}return t.default=a,Object.defineProperty(t,"__esModule",{value:!0}),t})({},vendetta.commands);
