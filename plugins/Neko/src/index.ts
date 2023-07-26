import { registerCommand } from "@vendetta/commands"
import { logger } from "@vendetta";
import { findByProps } from "@vendetta/metro"
import Settings from "./settings";
import { storage } from '@vendetta/plugin';

export default {
    onLoad: () => {
        command = registerCommand({ 
            name: "neko",
            displayName: "Neko",
            displayDescription: "Get a neko pics",
            description: "Get a neko pics",

            options: [
                {
                    name: "emotion",
                    description: "emotion for neko",
                    type: 3,
                    required: false,
                    displayName: "Emotion",
                    displayDescription: "Chooice emotion for you neko",
                }
            ],

            execute: gifCommand,
             // @ts-ignore
            applicationId: "-1",
            inputType: 1,
            type: 1,
        });
    },
    onUnload: () => {
        command();
    },

    settings: Settings,
}

async function gifCommand(args, ctx) {
    const emotion = args[0].value;

    const gif = await getGif(emotion);

    sendMessage(ctx.channel.id, gif)
}

function sendMessage(channelID, content) {
    const channel = channelID ?? Channels?.getChannelId?.();
    const message = MessageActions.sendMessage(channel, content)
}

async function getGif(emotion) {
          console.log(emotion)
          let response;
          if(emotion == undefined){
            response = await fetch(
            `https://tenor.googleapis.com/v2/search?q=neko&key=AIzaSyDy2fnAUloDkGFCC1IEtRkcqrFxAfLqB_Q&limit=20`
          );
          }
          else{
            response = await fetch(
              `https://tenor.googleapis.com/v2/search?q=neko ${emotion}&key=AIzaSyDy2fnAUloDkGFCC1IEtRkcqrFxAfLqB_Q&limit=20`
          );
          }
          if (!response.ok){ 
            console.log(response)
            return};
          const data = await response.json();
          const GIF = Object.values(data.results)[LibraryUtils.randomNo(0, 10)];
          return GIF.itemurl
            : {
              image: {
                url: GIF.media[0].gif.url,
                proxyURL: GIF.media[0].gif.url,
                width: GIF.media[0].gif.dims[0],
                height: GIF.media[0].gif.dims[1],
              },
            };
        }