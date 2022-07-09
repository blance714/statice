function runBGFunction(type: string, params: any) {
  const result = chrome.runtime.sendMessage({ type, params });
  console.log(result);
  return result;
}

const Agent = {
  fetch: (url: string, body?: object, method: string = 'GET') =>
    runBGFunction('fetch', { url, body, method: body ? 'POST' : method })
    .catch(r => console.log(`[Agent fetch]Error:${r}`)),
  storageGet: (key: string, location: string = 'sync') =>
    runBGFunction('storageGet', { key, location }),
  storageSet: (item: any, location: string = 'sync') =>
    runBGFunction('storageSet', { item, location }),
};

export default Agent;