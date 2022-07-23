import { bgFunctionType } from "models/background";
import { defaultConfig } from "models/config/default";
import { bgFunctions } from "tools/bgFunctions";

console.log("THIS IS background!");

chrome.runtime.onSuspend.addListener(() => {
  console.log('Unloading.');
});

chrome.runtime.onMessage.addListener(
  (
    { type, params }: { type: bgFunctionType; params: any },
    sender,
    sendResponse
  ) => {
    console.log('backgroundOnMessage');
    console.log({ type, params });
    bgFunctions[type](params).then((v) => sendResponse(v));
    // sendResponse(bgFunctions[type](params));
    return true;
  }
);

bgFunctions.storageGet({ key: 'config' })
  .then(config => bgFunctions.storageSet({ item: { config: { ...defaultConfig, ...config }}}));

export {};
