(function(i,a){"use strict";let s=[];s.push(a.registerCommand({name:"neko",displayName:"Neko",displayDescription:"Get a neko pics",description:"Get a neko pics",options:[{name:"emotion",description:"emotion for neko",type:3,required:!1,displayName:"Emotion",displayDescription:"Chooice emotion for you neko"}],execute:r,applicationId:"-1",inputType:1,type:1}));const c=function(){console.log("Load")},l=function(){for(const n of s)n()};async function r(n,o){const e=n[0].value,t=await p(e);console.log(t),d(o.channel.id,t)}function d(n,o){const e=n??Channels?.getChannelId?.();console.log(e),console.log(o),MessageActions.sendMessage(e,o)}async function p(n){console.log(n);let o;if(n==null?o=await fetch("https://tenor.googleapis.com/v2/search?q=neko&key=AIzaSyDy2fnAUloDkGFCC1IEtRkcqrFxAfLqB_Q&limit=20"):o=await fetch(`https://tenor.googleapis.com/v2/search?q=neko ${n}&key=AIzaSyDy2fnAUloDkGFCC1IEtRkcqrFxAfLqB_Q&limit=20`),!o.ok){console.log(o);return}const e=await o.json(),t=Object.values(e.results)[LibraryUtils.randomNo(0,10)];return console.log(t),t.media[0].gif.url}return i.onLoad=c,i.onUnload=l,i})({},vendetta.commands);
