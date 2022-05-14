function runBGFunction(type: string, params: any) {
  const result = chrome.runtime.sendMessage({ type, params });
  console.log(result);
  return result;
}

const Agent = {
  fetch: (url: string, body?: object, method: string = 'GET') =>
    runBGFunction('fetch', { url, body, method: body ? 'POST' : method })
}

export default Agent;