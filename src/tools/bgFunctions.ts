import { Config } from "models/config";

const DEBUG = false;

type bgFunction = (params: any) => Promise<any>;

// fetch
const bgFetch: bgFunction = ({ url, body, method }) => {
  console.log(body);
  return DEBUG ? Promise.resolve(
    url.endsWith("search_v3")
      ? {
          result: {
            originalSearchText: "生きる",
            searchResults: [
              {
                searchText: "生きる",
                count: 43232,
                tarId: "198974907",
                title: "生きる | いきる ②",
                type: 0,
                createdAt: "2019-05-07T03:32:57.909Z",
                excerpt:
                  "[自动·二类] 活，生存，保持生命。（命を持ち続ける。） 生活，维持生活，以……为生。（生活する。） ",
                isFree: true,
              },
            ],
          },
        }
      : {
          result: {
            "1": [],
            result: [
              {
                word: {
                  excerpt:
                    "[自动·二类] 活，生存，保持生命。（命を持ち続ける。） 生活，维持生活，以……为生。（生活する。） ",
                  spell: "生きる",
                  accent: "②",
                  pron: "いきる",
                  romaji: "ikiru",
                  createdAt: "2019-05-07T03:50:48.941Z",
                  updatedAt: "2022-04-03T08:51:43.864Z",
                  tags: "N4#N2",
                  outSharedNum: 2,
                  isFree: true,
                  objectId: "198974907",
                },
                details: [
                  {
                    title: "自动#二类",
                    index: 0,
                    createdAt: "2019-05-07T03:50:50.929Z",
                    updatedAt: "2019-10-24T12:55:11.986Z",
                    wordId: "198974907",
                    objectId: "62176",
                  },
                ],
                subdetails: [
                  {
                    title: "活，生存，保持生命。（命を持ち続ける。）",
                    index: 0,
                    createdAt: "2019-05-07T03:50:52.378Z",
                    updatedAt: "2019-10-24T13:01:22.446Z",
                    wordId: "198974907",
                    detailsId: "62176",
                    objectId: "86599",
                  },
                  {
                    title: "生活，维持生活，以……为生。（生活する。）",
                    index: 1,
                    createdAt: "2019-05-07T03:50:54.151Z",
                    updatedAt: "2019-10-24T13:01:33.095Z",
                    wordId: "198974907",
                    detailsId: "62176",
                    objectId: "86600",
                  },
                  {
                    title: "为……生活；生活于……之中。（生きがい。）",
                    index: 2,
                    createdAt: "2019-05-07T03:50:52.378Z",
                    updatedAt: "2019-10-24T13:01:22.425Z",
                    wordId: "198974907",
                    detailsId: "62176",
                    objectId: "86601",
                  },
                  {
                    title: "有生气，栩栩如生。（生き生きする。）",
                    index: 3,
                    createdAt: "2019-05-07T03:50:53.338Z",
                    updatedAt: "2019-10-24T13:01:31.976Z",
                    wordId: "198974907",
                    detailsId: "62176",
                    objectId: "86602",
                  },
                  {
                    title: "『成』，生动。",
                    index: 4,
                    createdAt: "2019-05-07T03:50:53.261Z",
                    updatedAt: "2019-10-24T13:01:31.920Z",
                    wordId: "198974907",
                    detailsId: "62176",
                    objectId: "86603",
                  },
                ],
                examples: [
                  {
                    title: "希望に生きる。",
                    index: 0,
                    trans: "生活在希望中。",
                    createdAt: "2019-05-07T03:50:55.140Z",
                    updatedAt: "2019-10-24T13:08:31.107Z",
                    wordId: "198974907",
                    subdetailsId: "86601",
                    isFree: true,
                    objectId: "63915",
                    notationTitle:
                      "<ruby><rb>希望</rb><rp>(</rp><rt roma='kibou' hiragana='きぼう'></rt><rp>)</rp></ruby>に<ruby><rb>生きる</rb><rp>(</rp><rt roma='ikiru' hiragana='いきる'></rt><rp>)</rp></ruby>。",
                  },
                  {
                    title: "この絵の人物はまるで生きているようだ。",
                    index: 0,
                    trans: "画中人物简直是栩栩如生。",
                    createdAt: "2019-05-07T03:50:55.402Z",
                    updatedAt: "2019-10-24T13:08:31.382Z",
                    wordId: "198974907",
                    subdetailsId: "86603",
                    isFree: true,
                    objectId: "63918",
                    notationTitle:
                      "この<ruby><rb>絵</rb><rp>(</rp><rt roma='e' hiragana='え'></rt><rp>)</rp></ruby>の<ruby><rb>人物</rb><rp>(</rp><rt roma='zinbutu' hiragana='じんぶつ'></rt><rp>)</rp></ruby>はまるで<ruby><rb>生き</rb><rp>(</rp><rt roma='iki' hiragana='いき'></rt><rp>)</rp></ruby>ているようだ。",
                  },
                  {
                    title: "ペン1本で生きる。",
                    index: 0,
                    trans: "靠一枝笔维持生活。",
                    createdAt: "2019-05-07T03:50:56.213Z",
                    updatedAt: "2019-10-24T13:08:32.510Z",
                    wordId: "198974907",
                    subdetailsId: "86600",
                    isFree: true,
                    objectId: "63912",
                    notationTitle:
                      "ペン1<ruby><rb>本</rb><rp>(</rp><rt roma='hon' hiragana='ほん'></rt><rp>)</rp></ruby>で<ruby><rb>生きる</rb><rp>(</rp><rt roma='ikiru' hiragana='いきる'></rt><rp>)</rp></ruby>。",
                  },
                  {
                    title: "90歳まで生きる。",
                    index: 0,
                    trans: "活到九十岁。",
                    createdAt: "2019-05-07T03:50:56.325Z",
                    updatedAt: "2019-10-24T13:08:33.217Z",
                    wordId: "198974907",
                    subdetailsId: "86599",
                    isFree: true,
                    objectId: "63905",
                    notationTitle:
                      "90<ruby><rb>歳</rb><rp>(</rp><rt roma='sai' hiragana='さい'></rt><rp>)</rp></ruby>まで<ruby><rb>生きる</rb><rp>(</rp><rt roma='ikiru' hiragana='いきる'></rt><rp>)</rp></ruby>。",
                  },
                  {
                    title: "芸道一筋に生きた50年。",
                    index: 1,
                    trans: "献身于艺术的五十年。",
                    createdAt: "2019-05-07T03:50:54.952Z",
                    updatedAt: "2019-10-24T13:08:24.505Z",
                    wordId: "198974907",
                    subdetailsId: "86601",
                    isFree: true,
                    objectId: "63916",
                    notationTitle:
                      "<ruby><rb>芸道</rb><rp>(</rp><rt roma='geidou' hiragana='げいどう'></rt><rp>)</rp></ruby><ruby><rb>一筋</rb><rp>(</rp><rt roma='hitosuzi' hiragana='ひとすじ'></rt><rp>)</rp></ruby>に<ruby><rb>生き</rb><rp>(</rp><rt roma='iki' hiragana='いき'></rt><rp>)</rp></ruby>た50<ruby><rb>年</rb><rp>(</rp><rt roma='nen' hiragana='ねん'></rt><rp>)</rp></ruby>。",
                  },
                  {
                    title: "生きるための手段。",
                    index: 1,
                    trans: "谋生的手段。",
                    createdAt: "2019-05-07T03:50:55.219Z",
                    updatedAt: "2019-10-24T13:08:31.154Z",
                    wordId: "198974907",
                    subdetailsId: "86600",
                    isFree: true,
                    objectId: "63913",
                    notationTitle:
                      "<ruby><rb>生きる</rb><rp>(</rp><rt roma='ikiru' hiragana='いきる'></rt><rp>)</rp></ruby>ための<ruby><rb>手段</rb><rp>(</rp><rt roma='syudan' hiragana='しゅだん'></rt><rp>)</rp></ruby>。",
                  },
                  {
                    title: "その色を塗ればずっと絵が生きてくる。",
                    index: 1,
                    trans: "若涂上那种颜色画更生动了。",
                    createdAt: "2019-05-07T03:50:55.530Z",
                    updatedAt: "2019-10-24T13:08:31.609Z",
                    wordId: "198974907",
                    subdetailsId: "86603",
                    isFree: true,
                    objectId: "63919",
                    notationTitle:
                      "その<ruby><rb>色</rb><rp>(</rp><rt roma='iro' hiragana='いろ'></rt><rp>)</rp></ruby>を<ruby><rb>塗れ</rb><rp>(</rp><rt roma='nure' hiragana='ぬれ'></rt><rp>)</rp></ruby>ばずっと<ruby><rb>絵</rb><rp>(</rp><rt roma='e' hiragana='え'></rt><rp>)</rp></ruby>が<ruby><rb>生き</rb><rp>(</rp><rt roma='iki' hiragana='いき'></rt><rp>)</rp></ruby>てくる。",
                  },
                  {
                    title: "生きて帰る。",
                    index: 1,
                    trans: "生还。",
                    createdAt: "2019-05-07T03:50:56.029Z",
                    updatedAt: "2019-10-24T13:08:32.293Z",
                    wordId: "198974907",
                    subdetailsId: "86599",
                    isFree: true,
                    objectId: "63906",
                    notationTitle:
                      "<ruby><rb>生き</rb><rp>(</rp><rt roma='iki' hiragana='いき'></rt><rp>)</rp></ruby>て<ruby><rb>帰る</rb><rp>(</rp><rt roma='kaeru' hiragana='かえる'></rt><rp>)</rp></ruby>。",
                  },
                  {
                    title: "長く幸福に生きる。",
                    index: 2,
                    trans: "幸福地生活下去。",
                    createdAt: "2019-05-07T03:50:55.485Z",
                    updatedAt: "2019-10-24T13:08:31.547Z",
                    wordId: "198974907",
                    subdetailsId: "86600",
                    isFree: true,
                    objectId: "63914",
                    notationTitle:
                      "<ruby><rb>長く</rb><rp>(</rp><rt roma='nagaku' hiragana='ながく'></rt><rp>)</rp></ruby><ruby><rb>幸福</rb><rp>(</rp><rt roma='kouhuku' hiragana='こうふく'></rt><rp>)</rp></ruby>に<ruby><rb>生きる</rb><rp>(</rp><rt roma='ikiru' hiragana='いきる'></rt><rp>)</rp></ruby>。",
                  },
                  {
                    title: "彼女は一生を学童の教育に生きてきた。",
                    index: 2,
                    trans: "她为儿童教育献出了一生。",
                    createdAt: "2019-05-07T03:50:55.513Z",
                    updatedAt: "2019-10-24T13:08:31.582Z",
                    wordId: "198974907",
                    subdetailsId: "86601",
                    isFree: true,
                    objectId: "63917",
                    notationTitle:
                      "<ruby><rb>彼女</rb><rp>(</rp><rt roma='kanozyo' hiragana='かのじょ'></rt><rp>)</rp></ruby>は<ruby><rb>一生</rb><rp>(</rp><rt roma='issyou' hiragana='いっしょう'></rt><rp>)</rp></ruby>を<ruby><rb>学童</rb><rp>(</rp><rt roma='gakudou' hiragana='がくどう'></rt><rp>)</rp></ruby>の<ruby><rb>教育</rb><rp>(</rp><rt roma='kyouiku' hiragana='きょういく'></rt><rp>)</rp></ruby>に<ruby><rb>生き</rb><rp>(</rp><rt roma='iki' hiragana='いき'></rt><rp>)</rp></ruby>てきた。",
                  },
                  {
                    title: "パンダは何を食べて生きているのか？",
                    index: 2,
                    trans: "熊猫吃什么活着？",
                    createdAt: "2019-05-07T03:50:56.070Z",
                    updatedAt: "2019-10-24T13:08:32.323Z",
                    wordId: "198974907",
                    subdetailsId: "86599",
                    isFree: true,
                    objectId: "63907",
                    notationTitle:
                      "パンダは<ruby><rb>何</rb><rp>(</rp><rt roma='nani' hiragana='なに'></rt><rp>)</rp></ruby>を<ruby><rb>食べ</rb><rp>(</rp><rt roma='tabe' hiragana='たべ'></rt><rp>)</rp></ruby>て<ruby><rb>生き</rb><rp>(</rp><rt roma='iki' hiragana='いき'></rt><rp>)</rp></ruby>ているのか？",
                  },
                  {
                    title: "生きている間にこの仕事を完成したい。",
                    index: 3,
                    trans: "但愿在有生之年完成这项工作。",
                    createdAt: "2019-05-07T03:50:56.308Z",
                    updatedAt: "2019-10-24T13:08:33.176Z",
                    wordId: "198974907",
                    subdetailsId: "86599",
                    isFree: true,
                    objectId: "63908",
                    notationTitle:
                      "<ruby><rb>生き</rb><rp>(</rp><rt roma='iki' hiragana='いき'></rt><rp>)</rp></ruby>ている<ruby><rb>間</rb><rp>(</rp><rt roma='ma' hiragana='ま'></rt><rp>)</rp></ruby>にこの<ruby><rb>仕事</rb><rp>(</rp><rt roma='sigoto' hiragana='しごと'></rt><rp>)</rp></ruby>を<ruby><rb>完成</rb><rp>(</rp><rt roma='kansei' hiragana='かんせい'></rt><rp>)</rp></ruby>したい。",
                  },
                  {
                    title: "彼はもう長く生きられない。",
                    index: 4,
                    trans: "他活不长了。",
                    createdAt: "2019-05-07T03:50:56.005Z",
                    updatedAt: "2019-10-24T13:08:32.228Z",
                    wordId: "198974907",
                    subdetailsId: "86599",
                    isFree: true,
                    objectId: "63909",
                    notationTitle:
                      "<ruby><rb>彼</rb><rp>(</rp><rt roma='kare' hiragana='かれ'></rt><rp>)</rp></ruby>はもう<ruby><rb>長く</rb><rp>(</rp><rt roma='nagaku' hiragana='ながく'></rt><rp>)</rp></ruby><ruby><rb>生き</rb><rp>(</rp><rt roma='iki' hiragana='いき'></rt><rp>)</rp></ruby>られない。",
                  },
                  {
                    title: "水がなければ1日も生きることはできない。",
                    index: 5,
                    trans: "若没有水一天也活不了。",
                    createdAt: "2019-05-07T03:50:55.996Z",
                    updatedAt: "2019-10-24T13:08:32.191Z",
                    wordId: "198974907",
                    subdetailsId: "86599",
                    isFree: true,
                    objectId: "63910",
                    notationTitle:
                      "<ruby><rb>水</rb><rp>(</rp><rt roma='mizu' hiragana='みず'></rt><rp>)</rp></ruby>がなければ1<ruby><rb>日</rb><rp>(</rp><rt roma='niti' hiragana='にち'></rt><rp>)</rp></ruby>も<ruby><rb>生きる</rb><rp>(</rp><rt roma='ikiru' hiragana='いきる'></rt><rp>)</rp></ruby>ことはできない。",
                  },
                  {
                    title: "いまは生きるか死ぬかのせとぎわだ。",
                    index: 6,
                    trans: "现在是生死关头。",
                    createdAt: "2019-05-07T03:50:55.068Z",
                    updatedAt: "2019-10-24T13:08:30.961Z",
                    wordId: "198974907",
                    subdetailsId: "86599",
                    isFree: true,
                    objectId: "63911",
                    notationTitle:
                      "いまは<ruby><rb>生きる</rb><rp>(</rp><rt roma='ikiru' hiragana='いきる'></rt><rp>)</rp></ruby>か<ruby><rb>死ぬ</rb><rp>(</rp><rt roma='sinu' hiragana='しぬ'></rt><rp>)</rp></ruby>かのせとぎわだ。",
                  },
                ],
              },
            ],
            code: 200,
          },
        }
  ) : fetch(url, {
    method,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.1185.50'
    },
    body: body ? JSON.stringify(body) : undefined
  }).then(v => v.json())
  .then(v => (console.log(`[Background fetch]Succ: ${v}`), v))
  .catch(r => console.log(`[Background fetch]Error: ${r}`))
};

// storageGet
const bgStorageGet: bgFunction = ({ key, location }) => {
  const des = location ? location : 'sync';
  return chrome.storage.sync.get(key as string)
    .then(v => (console.log(`[Background storageGet ${des}]Succ: ${key}: ${JSON.stringify(v[key])}`), v[key]))
    .catch(r => console.log(`[Background storageGet ${des}]Error: ` + r));
};

const bgStorageSet: bgFunction = ({ item, location }) => {
  const des = location ? location : 'sync';
  return chrome.storage.sync.set(item)
    .then(() => console.log(`[Background storageSet ${des}]Succ: ${JSON.stringify(item)}`))
    .catch(r => console.log(`[Background storageSet ${des}]Error: ` + r));
};

let isConfigUsed = false, config: Config | undefined = undefined;
const initConfig = () => {
  if (isConfigUsed) return;
  isConfigUsed = true;
  bgStorageGet({ key: 'config' })
    .then(v => config = v)
    .catch(r => console.log(`[Background initConfig]Error: ${r}`));
};

const bgConfigSet: bgFunction = ({ item }) => {
  return bgStorageGet({ key: 'config' })
    .then(config => bgStorageSet({ config: { ...config, ...item }}));
};

const bgConfigGet: bgFunction = ({ key }) => {
  return bgStorageGet({ key: 'config' })
    .then(config => config[key]);
};

export const bgFunctions = {
  fetch: bgFetch,
  storageGet: bgStorageGet,
  storageSet: bgStorageSet
};