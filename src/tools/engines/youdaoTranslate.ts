import md5 from "md5";
import Agent from "tools/agent";

function getSign(param, salt) {
  return md5("fanyideskweb" + param + salt + "Ygy_4c=r#e#4EX^NUGUc5");
}

const appVersion = "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36 Edg/103.0.1264.62";
export const youdaoTranslate = {
  translateSentence: (param: string) => {
    let time = "" + (new Date).getTime();
    // let time = 1658562534796;
    let salt = time + Math.floor(10 * Math.random());
    // let salt = 16585625347968;
    let body = {
      "i": param,
      "from": "AUTO",
      "to": "AUTO",
      "smartresult": "dict",
      "client": "fanyideskweb",
      "salt": salt,
      "sign": getSign(param, salt),
      "lts": time,
      "bv": md5(appVersion),
      "doctype": "json",
      "version": "2.1",
      "keyfrom": "fanyi.web",
      "action": "FY_BY_CLICKBUTTION"
    };
    const bodyStr = Object.keys(body).map(key => encodeURI(`${key}=${body[key]}`)).join('&');
    console.log(bodyStr);
    return Agent.fetch("https://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule", bodyStr, "POST", {
      "accept": "application/json, text/javascript, */*; q=0.01",
      "accept-language": "ja,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "cookie": "OUTFOX_SEARCH_USER_ID=1796239350@10.110.96.157",
      "Referer": "https://fanyi.youdao.com/"
    })
    // return fetch("http://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule", {
    //   "headers": {
    //     "accept": "application/json, text/javascript, */*; q=0.01",
    //     "accept-language": "ja,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
    //     "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    //     "cookie": "OUTFOX_SEARCH_USER_ID=1796239350@10.110.96.157",
    //     "Referer": "https://fanyi.youdao.com/"
    //   },
    //   "body": bodyStr,       
    //   "method": "POST"
    // })
      .then(res => res.errorCode ? '' : (
        res.smartResult?.entries[1] ?? res.translateResult[0][0].tgt
      ));
  }
};