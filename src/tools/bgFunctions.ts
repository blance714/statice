type bgFunction = (params: any) => Promise<any>;

// fetch
const bgFetch: bgFunction = ({ url, body, method, headers }) => {
  console.log(body);
  return fetch(url, {
    method,
    headers: Object.assign({
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.1185.50'
    }, headers),
    body: body ? (typeof body == 'string' ? body : JSON.stringify(body)) : undefined
  }).then(v => v.json())
  .then(v => { console.log(`[Background fetch]Succ:`, v); return v; })
  .catch(r => console.log(`[Background fetch]Error:`, r));
};

// storageGet
const bgStorageGet: bgFunction = ({ key, location }) => {
  const des = location ? location : 'sync';
  return chrome.storage.sync.get(key as string)
    .then(v => { console.log(`[Background storageGet ${des}]Succ:`, key, v[key]); return v[key]; })
    .catch(r => console.log(`[Background storageGet ${des}]Error:`, r));
};

const bgStorageSet: bgFunction = ({ item, location }) => {
  const des = location ? location : 'sync';
  return chrome.storage.sync.set(item)
    .then(() => console.log(`[Background storageSet ${des}]Succ:`, item))
    .catch(r => console.log(`[Background storageSet ${des}]Error: `, r));
};

const bgConfigSet: bgFunction = ({ items }) => {
  return bgStorageGet({ key: 'config' })
    .then(config => bgStorageSet({ item:{ config: { ...config, ...items }}}));
};

const bgConfigGet: bgFunction = ({ key }) => {
  return bgStorageGet({ key: 'config' })
    .then(config => config[key]);
};

export const bgFunctions = {
  fetch: bgFetch,
  storageGet: bgStorageGet,
  storageSet: bgStorageSet,
  configSet: bgConfigSet,
  configGet: bgConfigGet
};