function runBGFunction(type: string, params: any) {
  const result = chrome.runtime.sendMessage({ type, params });
  console.log("[runBGFuntcion]", type, params, result);
  return result;
}

const Agent = {
  fetch: (url: string, body?: string | object, method: string = 'GET', headers = {}) =>
    runBGFunction('fetch', { url, body, method: body ? 'POST' : method, headers })
    .catch(r => console.log(`[Agent fetch]Error:${r}`)),
  storageGet: (key: string, location: string = 'sync') =>
    runBGFunction('storageGet', { key, location }),
  storageSet: (item: any, location: string = 'sync') =>
    runBGFunction('storageSet', { item, location }),
  configSet: (items: any) =>
    runBGFunction('configSet', { items }),
  configGet: (key: string) => 
    runBGFunction('configGet', { key }),
};

export default Agent;