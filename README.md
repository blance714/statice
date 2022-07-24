# Statice

一个用来查生词然后保存到Anki的插件。  
An extension for search words and add them to Anki.  

目前只支持了MOJi查词和有道翻译だけど……（因为是给自己学日语用的ww  

> [スターチス](https://hanasaku-gift.com/language-of-flower/statice-2) の花言葉は、「途絶えぬ記憶」、「変わらぬ心」です。

## 💐安装

1. 从 Release 下载 zip 文件
2. 解压后用浏览器加载build文件夹（需要打开开发者模式哦）

或者……  

3. 运行 `npm install && npm run build`
4. 用浏览器加载build文件夹

## 🌱TODOs

- [ ] 内在
  - [x] 与Anki交互
    - [x] 把词典信息提取出来，并映射到AnkiModel里 !!
      - [x] 添加更多选项
    - [x] 读取Anki配置
    - [x] 添加生词  !
      - [x] 设置生词信息
      - [x] 添加上下文
        - [x] 调整Saladcit的算法（支持「」）
      - [x] 调整字词
    - [ ] 检测能否连接AnkiConnect
  - [ ] 多词典
    - [x] 句子翻译 !!
- [ ] 外观
  - [ ] 做的更好看一点
  - [x] 固定位置  !!
    - [ ] 别针  !
  - [x] 添加Anki生词窗口  !!
  - [ ] 动画
- [ ] 配置文件