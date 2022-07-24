import Agent from "tools/agent";

const ankiPort = 8765;
const DEBUG = false;

export function executeAnkiAction(action: string, params?: any): Promise<any> {
  if (DEBUG) {
    switch(action) {
      case "deckNames":
        return Promise.resolve(['qwq', 'qaq']);
      case "modelNames":
        return Promise.resolve(['( •̥́ ˍ •̀ू ）', '✧*｡٩(ˊᗜˋ*)و✧*｡', '｡･ﾟ･(ﾉД`)ﾉ･ﾟ･｡', '٩( ๑╹ ꇴ╹)۶']);
      case "modelFieldNames":
        if (params!.modelName === '( •̥́ ˍ •̀ू ）') {
          return Promise.resolve(["Optimized-Voc-Index", "Vocabulary-Kanji", "Vocabulary-Furigana", "Vocabulary-Kana", "Vocabulary-English", "Vocabulary-Audio", "Vocabulary-Pos", "Caution", "Expression", "Reading", "Sentence-Kana", "Sentence-English", "Sentence-Clozed", "Sentence-Audio", "Notes", "Core-Index", "Optimized-Sent-Index", "Frequency"]);
        }
        return Promise.resolve([
          "单词",
          "音标",
          "释义",
          "发音",
          "词性",
          "例句",
          "例句翻译",
          "例句发音",
          "课时",
          "拓展"
      ]);
      default:
        return Promise.resolve(`Unknown action: ${action}`);
    }
  }

  return Agent.fetch(`http://localhost:${ankiPort}`, {
    action: action,
    version: 6,
    params: params
  }, 'POST').then(v => { console.log("[executeAnkiAction]", v); return v} )
    .then(v => (!v.error && ( v.result ))
      || (console.log("[executeAnkiAction]Error:", v.error), Promise.reject(v.error)))
}