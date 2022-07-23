# Statice

一个用来查生词然后保存到Anki的插件。  
An extension for search words and add them to Anki.  

> [スターチス](https://hanasaku-gift.com/language-of-flower/statice-2) の花言葉は、「途絶えぬ記憶」、「変わらぬ心」です。

## 💐安装

1. 运行 `npm install && npm run build`
2. 用浏览器加载build文件夹

## 🌱TODOs

- [ ] 内在
  - [x] 与Anki交互
    - [x] 把词典信息提取出来，并映射到AnkiModel里 !!
      - [ ] 添加更多选项
    - [ ] 读取Anki配置
    - [x] 添加生词  !
      - [x] 设置生词信息
      - [x] 添加上下文
        - [ ] 调整Saladcit的算法（支持「」）
      - [ ] 调整字词
    - [ ] 检测能否连接AnkiConnect
  - [ ] 多词典
    - [ ] 句子翻译 !!
- [ ] 外观
  - [x] 固定位置  !!
    - [ ] 别针  !
  - [x] 添加Anki生词窗口  !!
  - [ ] 动画
- [ ] 配置文件