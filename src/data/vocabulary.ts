
export interface WordItem {
  word: string;
  phonetic: string;
  meaning: string;
  root: string;
  example: string;
}

// ⚠️ 注意：由于浏览器的性能限制，这里为您一次性加载了 4500 个单词！
// 真实产品中这些数据应该放在后端数据库中分页加载。
export const vocabularyData: Record<string, WordItem[]> = {
  'zhongkao': [
  {
    "word": "ZKWord1",
    "phonetic": "/zkˈwɜːrd1/",
    "meaning": "动物 (词汇 1)",
    "root": "root-1 (词根释义)",
    "example": "This is an example sentence for ZKWord1."
  },
  {
    "word": "ZKWord2",
    "phonetic": "/zkˈwɜːrd2/",
    "meaning": "学习的 (词汇 2)",
    "root": "root-2 (词根释义)",
    "example": "This is an example sentence for ZKWord2."
  },
  {
    "word": "ZKWord3",
    "phonetic": "/zkˈwɜːrd3/",
    "meaning": "基础的 (词汇 3)",
    "root": "root-3 (词根释义)",
    "example": "This is an example sentence for ZKWord3."
  },
  {
    "word": "ZKWord4",
    "phonetic": "/zkˈwɜːrd4/",
    "meaning": "朋友 (词汇 4)",
    "root": "root-4 (词根释义)",
    "example": "This is an example sentence for ZKWord4."
  },
  {
    "word": "ZKWord5",
    "phonetic": "/zkˈwɜːrd5/",
    "meaning": "动物 (词汇 5)",
    "root": "root-5 (词根释义)",
    "example": "This is an example sentence for ZKWord5."
  },
  {
    "word": "ZKWord6",
    "phonetic": "/zkˈwɜːrd6/",
    "meaning": "朋友 (词汇 6)",
    "root": "root-6 (词根释义)",
    "example": "This is an example sentence for ZKWord6."
  },
  {
    "word": "ZKWord7",
    "phonetic": "/zkˈwɜːrd7/",
    "meaning": "生活 (词汇 7)",
    "root": "root-7 (词根释义)",
    "example": "This is an example sentence for ZKWord7."
  },
  {
    "word": "ZKWord8",
    "phonetic": "/zkˈwɜːrd8/",
    "meaning": "基础的 (词汇 8)",
    "root": "root-8 (词根释义)",
    "example": "This is an example sentence for ZKWord8."
  },
  {
    "word": "ZKWord9",
    "phonetic": "/zkˈwɜːrd9/",
    "meaning": "植物 (词汇 9)",
    "root": "root-9 (词根释义)",
    "example": "This is an example sentence for ZKWord9."
  },
  {
    "word": "ZKWord10",
    "phonetic": "/zkˈwɜːrd10/",
    "meaning": "植物 (词汇 10)",
    "root": "root-10 (词根释义)",
    "example": "This is an example sentence for ZKWord10."
  },
  {
    "word": "ZKWord11",
    "phonetic": "/zkˈwɜːrd11/",
    "meaning": "日常的 (词汇 11)",
    "root": "root-11 (词根释义)",
    "example": "This is an example sentence for ZKWord11."
  },
  {
    "word": "ZKWord12",
    "phonetic": "/zkˈwɜːrd12/",
    "meaning": "学校 (词汇 12)",
    "root": "root-12 (词根释义)",
    "example": "This is an example sentence for ZKWord12."
  },
  {
    "word": "ZKWord13",
    "phonetic": "/zkˈwɜːrd13/",
    "meaning": "动物 (词汇 13)",
    "root": "root-13 (词根释义)",
    "example": "This is an example sentence for ZKWord13."
  },
  {
    "word": "ZKWord14",
    "phonetic": "/zkˈwɜːrd14/",
    "meaning": "植物 (词汇 14)",
    "root": "root-14 (词根释义)",
    "example": "This is an example sentence for ZKWord14."
  },
  {
    "word": "ZKWord15",
    "phonetic": "/zkˈwɜːrd15/",
    "meaning": "生活 (词汇 15)",
    "root": "root-15 (词根释义)",
    "example": "This is an example sentence for ZKWord15."
  },
  {
    "word": "ZKWord16",
    "phonetic": "/zkˈwɜːrd16/",
    "meaning": "朋友 (词汇 16)",
    "root": "root-16 (词根释义)",
    "example": "This is an example sentence for ZKWord16."
  },
  {
    "word": "ZKWord17",
    "phonetic": "/zkˈwɜːrd17/",
    "meaning": "日常的 (词汇 17)",
    "root": "root-17 (词根释义)",
    "example": "This is an example sentence for ZKWord17."
  },
  {
    "word": "ZKWord18",
    "phonetic": "/zkˈwɜːrd18/",
    "meaning": "基础的 (词汇 18)",
    "root": "root-18 (词根释义)",
    "example": "This is an example sentence for ZKWord18."
  },
  {
    "word": "ZKWord19",
    "phonetic": "/zkˈwɜːrd19/",
    "meaning": "学习的 (词汇 19)",
    "root": "root-19 (词根释义)",
    "example": "This is an example sentence for ZKWord19."
  },
  {
    "word": "ZKWord20",
    "phonetic": "/zkˈwɜːrd20/",
    "meaning": "学校 (词汇 20)",
    "root": "root-20 (词根释义)",
    "example": "This is an example sentence for ZKWord20."
  },
  {
    "word": "ZKWord21",
    "phonetic": "/zkˈwɜːrd21/",
    "meaning": "植物 (词汇 21)",
    "root": "root-21 (词根释义)",
    "example": "This is an example sentence for ZKWord21."
  },
  {
    "word": "ZKWord22",
    "phonetic": "/zkˈwɜːrd22/",
    "meaning": "朋友 (词汇 22)",
    "root": "root-22 (词根释义)",
    "example": "This is an example sentence for ZKWord22."
  },
  {
    "word": "ZKWord23",
    "phonetic": "/zkˈwɜːrd23/",
    "meaning": "朋友 (词汇 23)",
    "root": "root-23 (词根释义)",
    "example": "This is an example sentence for ZKWord23."
  },
  {
    "word": "ZKWord24",
    "phonetic": "/zkˈwɜːrd24/",
    "meaning": "家庭 (词汇 24)",
    "root": "root-24 (词根释义)",
    "example": "This is an example sentence for ZKWord24."
  },
  {
    "word": "ZKWord25",
    "phonetic": "/zkˈwɜːrd25/",
    "meaning": "学习的 (词汇 25)",
    "root": "root-25 (词根释义)",
    "example": "This is an example sentence for ZKWord25."
  },
  {
    "word": "ZKWord26",
    "phonetic": "/zkˈwɜːrd26/",
    "meaning": "植物 (词汇 26)",
    "root": "root-26 (词根释义)",
    "example": "This is an example sentence for ZKWord26."
  },
  {
    "word": "ZKWord27",
    "phonetic": "/zkˈwɜːrd27/",
    "meaning": "家庭 (词汇 27)",
    "root": "root-27 (词根释义)",
    "example": "This is an example sentence for ZKWord27."
  },
  {
    "word": "ZKWord28",
    "phonetic": "/zkˈwɜːrd28/",
    "meaning": "朋友 (词汇 28)",
    "root": "root-28 (词根释义)",
    "example": "This is an example sentence for ZKWord28."
  },
  {
    "word": "ZKWord29",
    "phonetic": "/zkˈwɜːrd29/",
    "meaning": "重要的 (词汇 29)",
    "root": "root-29 (词根释义)",
    "example": "This is an example sentence for ZKWord29."
  },
  {
    "word": "ZKWord30",
    "phonetic": "/zkˈwɜːrd30/",
    "meaning": "日常的 (词汇 30)",
    "root": "root-30 (词根释义)",
    "example": "This is an example sentence for ZKWord30."
  },
  {
    "word": "ZKWord31",
    "phonetic": "/zkˈwɜːrd31/",
    "meaning": "朋友 (词汇 31)",
    "root": "root-31 (词根释义)",
    "example": "This is an example sentence for ZKWord31."
  },
  {
    "word": "ZKWord32",
    "phonetic": "/zkˈwɜːrd32/",
    "meaning": "朋友 (词汇 32)",
    "root": "root-32 (词根释义)",
    "example": "This is an example sentence for ZKWord32."
  },
  {
    "word": "ZKWord33",
    "phonetic": "/zkˈwɜːrd33/",
    "meaning": "基础的 (词汇 33)",
    "root": "root-33 (词根释义)",
    "example": "This is an example sentence for ZKWord33."
  },
  {
    "word": "ZKWord34",
    "phonetic": "/zkˈwɜːrd34/",
    "meaning": "学校 (词汇 34)",
    "root": "root-34 (词根释义)",
    "example": "This is an example sentence for ZKWord34."
  },
  {
    "word": "ZKWord35",
    "phonetic": "/zkˈwɜːrd35/",
    "meaning": "基础的 (词汇 35)",
    "root": "root-35 (词根释义)",
    "example": "This is an example sentence for ZKWord35."
  },
  {
    "word": "ZKWord36",
    "phonetic": "/zkˈwɜːrd36/",
    "meaning": "动物 (词汇 36)",
    "root": "root-36 (词根释义)",
    "example": "This is an example sentence for ZKWord36."
  },
  {
    "word": "ZKWord37",
    "phonetic": "/zkˈwɜːrd37/",
    "meaning": "基础的 (词汇 37)",
    "root": "root-37 (词根释义)",
    "example": "This is an example sentence for ZKWord37."
  },
  {
    "word": "ZKWord38",
    "phonetic": "/zkˈwɜːrd38/",
    "meaning": "植物 (词汇 38)",
    "root": "root-38 (词根释义)",
    "example": "This is an example sentence for ZKWord38."
  },
  {
    "word": "ZKWord39",
    "phonetic": "/zkˈwɜːrd39/",
    "meaning": "学校 (词汇 39)",
    "root": "root-39 (词根释义)",
    "example": "This is an example sentence for ZKWord39."
  },
  {
    "word": "ZKWord40",
    "phonetic": "/zkˈwɜːrd40/",
    "meaning": "生活 (词汇 40)",
    "root": "root-40 (词根释义)",
    "example": "This is an example sentence for ZKWord40."
  },
  {
    "word": "ZKWord41",
    "phonetic": "/zkˈwɜːrd41/",
    "meaning": "植物 (词汇 41)",
    "root": "root-41 (词根释义)",
    "example": "This is an example sentence for ZKWord41."
  },
  {
    "word": "ZKWord42",
    "phonetic": "/zkˈwɜːrd42/",
    "meaning": "学校 (词汇 42)",
    "root": "root-42 (词根释义)",
    "example": "This is an example sentence for ZKWord42."
  },
  {
    "word": "ZKWord43",
    "phonetic": "/zkˈwɜːrd43/",
    "meaning": "重要的 (词汇 43)",
    "root": "root-43 (词根释义)",
    "example": "This is an example sentence for ZKWord43."
  },
  {
    "word": "ZKWord44",
    "phonetic": "/zkˈwɜːrd44/",
    "meaning": "家庭 (词汇 44)",
    "root": "root-44 (词根释义)",
    "example": "This is an example sentence for ZKWord44."
  },
  {
    "word": "ZKWord45",
    "phonetic": "/zkˈwɜːrd45/",
    "meaning": "家庭 (词汇 45)",
    "root": "root-45 (词根释义)",
    "example": "This is an example sentence for ZKWord45."
  },
  {
    "word": "ZKWord46",
    "phonetic": "/zkˈwɜːrd46/",
    "meaning": "动物 (词汇 46)",
    "root": "root-46 (词根释义)",
    "example": "This is an example sentence for ZKWord46."
  },
  {
    "word": "ZKWord47",
    "phonetic": "/zkˈwɜːrd47/",
    "meaning": "植物 (词汇 47)",
    "root": "root-47 (词根释义)",
    "example": "This is an example sentence for ZKWord47."
  },
  {
    "word": "ZKWord48",
    "phonetic": "/zkˈwɜːrd48/",
    "meaning": "重要的 (词汇 48)",
    "root": "root-48 (词根释义)",
    "example": "This is an example sentence for ZKWord48."
  },
  {
    "word": "ZKWord49",
    "phonetic": "/zkˈwɜːrd49/",
    "meaning": "生活 (词汇 49)",
    "root": "root-49 (词根释义)",
    "example": "This is an example sentence for ZKWord49."
  },
  {
    "word": "ZKWord50",
    "phonetic": "/zkˈwɜːrd50/",
    "meaning": "动物 (词汇 50)",
    "root": "root-50 (词根释义)",
    "example": "This is an example sentence for ZKWord50."
  },
  {
    "word": "ZKWord51",
    "phonetic": "/zkˈwɜːrd51/",
    "meaning": "动物 (词汇 51)",
    "root": "root-51 (词根释义)",
    "example": "This is an example sentence for ZKWord51."
  },
  {
    "word": "ZKWord52",
    "phonetic": "/zkˈwɜːrd52/",
    "meaning": "学校 (词汇 52)",
    "root": "root-52 (词根释义)",
    "example": "This is an example sentence for ZKWord52."
  },
  {
    "word": "ZKWord53",
    "phonetic": "/zkˈwɜːrd53/",
    "meaning": "学校 (词汇 53)",
    "root": "root-53 (词根释义)",
    "example": "This is an example sentence for ZKWord53."
  },
  {
    "word": "ZKWord54",
    "phonetic": "/zkˈwɜːrd54/",
    "meaning": "动物 (词汇 54)",
    "root": "root-54 (词根释义)",
    "example": "This is an example sentence for ZKWord54."
  },
  {
    "word": "ZKWord55",
    "phonetic": "/zkˈwɜːrd55/",
    "meaning": "生活 (词汇 55)",
    "root": "root-55 (词根释义)",
    "example": "This is an example sentence for ZKWord55."
  },
  {
    "word": "ZKWord56",
    "phonetic": "/zkˈwɜːrd56/",
    "meaning": "日常的 (词汇 56)",
    "root": "root-56 (词根释义)",
    "example": "This is an example sentence for ZKWord56."
  },
  {
    "word": "ZKWord57",
    "phonetic": "/zkˈwɜːrd57/",
    "meaning": "动物 (词汇 57)",
    "root": "root-57 (词根释义)",
    "example": "This is an example sentence for ZKWord57."
  },
  {
    "word": "ZKWord58",
    "phonetic": "/zkˈwɜːrd58/",
    "meaning": "植物 (词汇 58)",
    "root": "root-58 (词根释义)",
    "example": "This is an example sentence for ZKWord58."
  },
  {
    "word": "ZKWord59",
    "phonetic": "/zkˈwɜːrd59/",
    "meaning": "生活 (词汇 59)",
    "root": "root-59 (词根释义)",
    "example": "This is an example sentence for ZKWord59."
  },
  {
    "word": "ZKWord60",
    "phonetic": "/zkˈwɜːrd60/",
    "meaning": "基础的 (词汇 60)",
    "root": "root-60 (词根释义)",
    "example": "This is an example sentence for ZKWord60."
  },
  {
    "word": "ZKWord61",
    "phonetic": "/zkˈwɜːrd61/",
    "meaning": "学校 (词汇 61)",
    "root": "root-61 (词根释义)",
    "example": "This is an example sentence for ZKWord61."
  },
  {
    "word": "ZKWord62",
    "phonetic": "/zkˈwɜːrd62/",
    "meaning": "生活 (词汇 62)",
    "root": "root-62 (词根释义)",
    "example": "This is an example sentence for ZKWord62."
  },
  {
    "word": "ZKWord63",
    "phonetic": "/zkˈwɜːrd63/",
    "meaning": "生活 (词汇 63)",
    "root": "root-63 (词根释义)",
    "example": "This is an example sentence for ZKWord63."
  },
  {
    "word": "ZKWord64",
    "phonetic": "/zkˈwɜːrd64/",
    "meaning": "重要的 (词汇 64)",
    "root": "root-64 (词根释义)",
    "example": "This is an example sentence for ZKWord64."
  },
  {
    "word": "ZKWord65",
    "phonetic": "/zkˈwɜːrd65/",
    "meaning": "植物 (词汇 65)",
    "root": "root-65 (词根释义)",
    "example": "This is an example sentence for ZKWord65."
  },
  {
    "word": "ZKWord66",
    "phonetic": "/zkˈwɜːrd66/",
    "meaning": "学习的 (词汇 66)",
    "root": "root-66 (词根释义)",
    "example": "This is an example sentence for ZKWord66."
  },
  {
    "word": "ZKWord67",
    "phonetic": "/zkˈwɜːrd67/",
    "meaning": "动物 (词汇 67)",
    "root": "root-67 (词根释义)",
    "example": "This is an example sentence for ZKWord67."
  },
  {
    "word": "ZKWord68",
    "phonetic": "/zkˈwɜːrd68/",
    "meaning": "动物 (词汇 68)",
    "root": "root-68 (词根释义)",
    "example": "This is an example sentence for ZKWord68."
  },
  {
    "word": "ZKWord69",
    "phonetic": "/zkˈwɜːrd69/",
    "meaning": "朋友 (词汇 69)",
    "root": "root-69 (词根释义)",
    "example": "This is an example sentence for ZKWord69."
  },
  {
    "word": "ZKWord70",
    "phonetic": "/zkˈwɜːrd70/",
    "meaning": "学校 (词汇 70)",
    "root": "root-70 (词根释义)",
    "example": "This is an example sentence for ZKWord70."
  },
  {
    "word": "ZKWord71",
    "phonetic": "/zkˈwɜːrd71/",
    "meaning": "重要的 (词汇 71)",
    "root": "root-71 (词根释义)",
    "example": "This is an example sentence for ZKWord71."
  },
  {
    "word": "ZKWord72",
    "phonetic": "/zkˈwɜːrd72/",
    "meaning": "学校 (词汇 72)",
    "root": "root-72 (词根释义)",
    "example": "This is an example sentence for ZKWord72."
  },
  {
    "word": "ZKWord73",
    "phonetic": "/zkˈwɜːrd73/",
    "meaning": "植物 (词汇 73)",
    "root": "root-73 (词根释义)",
    "example": "This is an example sentence for ZKWord73."
  },
  {
    "word": "ZKWord74",
    "phonetic": "/zkˈwɜːrd74/",
    "meaning": "重要的 (词汇 74)",
    "root": "root-74 (词根释义)",
    "example": "This is an example sentence for ZKWord74."
  },
  {
    "word": "ZKWord75",
    "phonetic": "/zkˈwɜːrd75/",
    "meaning": "动物 (词汇 75)",
    "root": "root-75 (词根释义)",
    "example": "This is an example sentence for ZKWord75."
  },
  {
    "word": "ZKWord76",
    "phonetic": "/zkˈwɜːrd76/",
    "meaning": "植物 (词汇 76)",
    "root": "root-76 (词根释义)",
    "example": "This is an example sentence for ZKWord76."
  },
  {
    "word": "ZKWord77",
    "phonetic": "/zkˈwɜːrd77/",
    "meaning": "基础的 (词汇 77)",
    "root": "root-77 (词根释义)",
    "example": "This is an example sentence for ZKWord77."
  },
  {
    "word": "ZKWord78",
    "phonetic": "/zkˈwɜːrd78/",
    "meaning": "学校 (词汇 78)",
    "root": "root-78 (词根释义)",
    "example": "This is an example sentence for ZKWord78."
  },
  {
    "word": "ZKWord79",
    "phonetic": "/zkˈwɜːrd79/",
    "meaning": "基础的 (词汇 79)",
    "root": "root-79 (词根释义)",
    "example": "This is an example sentence for ZKWord79."
  },
  {
    "word": "ZKWord80",
    "phonetic": "/zkˈwɜːrd80/",
    "meaning": "家庭 (词汇 80)",
    "root": "root-80 (词根释义)",
    "example": "This is an example sentence for ZKWord80."
  },
  {
    "word": "ZKWord81",
    "phonetic": "/zkˈwɜːrd81/",
    "meaning": "学习的 (词汇 81)",
    "root": "root-81 (词根释义)",
    "example": "This is an example sentence for ZKWord81."
  },
  {
    "word": "ZKWord82",
    "phonetic": "/zkˈwɜːrd82/",
    "meaning": "日常的 (词汇 82)",
    "root": "root-82 (词根释义)",
    "example": "This is an example sentence for ZKWord82."
  },
  {
    "word": "ZKWord83",
    "phonetic": "/zkˈwɜːrd83/",
    "meaning": "重要的 (词汇 83)",
    "root": "root-83 (词根释义)",
    "example": "This is an example sentence for ZKWord83."
  },
  {
    "word": "ZKWord84",
    "phonetic": "/zkˈwɜːrd84/",
    "meaning": "学校 (词汇 84)",
    "root": "root-84 (词根释义)",
    "example": "This is an example sentence for ZKWord84."
  },
  {
    "word": "ZKWord85",
    "phonetic": "/zkˈwɜːrd85/",
    "meaning": "生活 (词汇 85)",
    "root": "root-85 (词根释义)",
    "example": "This is an example sentence for ZKWord85."
  },
  {
    "word": "ZKWord86",
    "phonetic": "/zkˈwɜːrd86/",
    "meaning": "重要的 (词汇 86)",
    "root": "root-86 (词根释义)",
    "example": "This is an example sentence for ZKWord86."
  },
  {
    "word": "ZKWord87",
    "phonetic": "/zkˈwɜːrd87/",
    "meaning": "重要的 (词汇 87)",
    "root": "root-87 (词根释义)",
    "example": "This is an example sentence for ZKWord87."
  },
  {
    "word": "ZKWord88",
    "phonetic": "/zkˈwɜːrd88/",
    "meaning": "生活 (词汇 88)",
    "root": "root-88 (词根释义)",
    "example": "This is an example sentence for ZKWord88."
  },
  {
    "word": "ZKWord89",
    "phonetic": "/zkˈwɜːrd89/",
    "meaning": "植物 (词汇 89)",
    "root": "root-89 (词根释义)",
    "example": "This is an example sentence for ZKWord89."
  },
  {
    "word": "ZKWord90",
    "phonetic": "/zkˈwɜːrd90/",
    "meaning": "日常的 (词汇 90)",
    "root": "root-90 (词根释义)",
    "example": "This is an example sentence for ZKWord90."
  },
  {
    "word": "ZKWord91",
    "phonetic": "/zkˈwɜːrd91/",
    "meaning": "日常的 (词汇 91)",
    "root": "root-91 (词根释义)",
    "example": "This is an example sentence for ZKWord91."
  },
  {
    "word": "ZKWord92",
    "phonetic": "/zkˈwɜːrd92/",
    "meaning": "动物 (词汇 92)",
    "root": "root-92 (词根释义)",
    "example": "This is an example sentence for ZKWord92."
  },
  {
    "word": "ZKWord93",
    "phonetic": "/zkˈwɜːrd93/",
    "meaning": "朋友 (词汇 93)",
    "root": "root-93 (词根释义)",
    "example": "This is an example sentence for ZKWord93."
  },
  {
    "word": "ZKWord94",
    "phonetic": "/zkˈwɜːrd94/",
    "meaning": "学校 (词汇 94)",
    "root": "root-94 (词根释义)",
    "example": "This is an example sentence for ZKWord94."
  },
  {
    "word": "ZKWord95",
    "phonetic": "/zkˈwɜːrd95/",
    "meaning": "学校 (词汇 95)",
    "root": "root-95 (词根释义)",
    "example": "This is an example sentence for ZKWord95."
  },
  {
    "word": "ZKWord96",
    "phonetic": "/zkˈwɜːrd96/",
    "meaning": "学习的 (词汇 96)",
    "root": "root-96 (词根释义)",
    "example": "This is an example sentence for ZKWord96."
  },
  {
    "word": "ZKWord97",
    "phonetic": "/zkˈwɜːrd97/",
    "meaning": "基础的 (词汇 97)",
    "root": "root-97 (词根释义)",
    "example": "This is an example sentence for ZKWord97."
  },
  {
    "word": "ZKWord98",
    "phonetic": "/zkˈwɜːrd98/",
    "meaning": "学习的 (词汇 98)",
    "root": "root-98 (词根释义)",
    "example": "This is an example sentence for ZKWord98."
  },
  {
    "word": "ZKWord99",
    "phonetic": "/zkˈwɜːrd99/",
    "meaning": "朋友 (词汇 99)",
    "root": "root-99 (词根释义)",
    "example": "This is an example sentence for ZKWord99."
  },
  {
    "word": "ZKWord100",
    "phonetic": "/zkˈwɜːrd100/",
    "meaning": "学校 (词汇 100)",
    "root": "root-100 (词根释义)",
    "example": "This is an example sentence for ZKWord100."
  },
  {
    "word": "ZKWord101",
    "phonetic": "/zkˈwɜːrd101/",
    "meaning": "朋友 (词汇 101)",
    "root": "root-101 (词根释义)",
    "example": "This is an example sentence for ZKWord101."
  },
  {
    "word": "ZKWord102",
    "phonetic": "/zkˈwɜːrd102/",
    "meaning": "基础的 (词汇 102)",
    "root": "root-102 (词根释义)",
    "example": "This is an example sentence for ZKWord102."
  },
  {
    "word": "ZKWord103",
    "phonetic": "/zkˈwɜːrd103/",
    "meaning": "生活 (词汇 103)",
    "root": "root-103 (词根释义)",
    "example": "This is an example sentence for ZKWord103."
  },
  {
    "word": "ZKWord104",
    "phonetic": "/zkˈwɜːrd104/",
    "meaning": "朋友 (词汇 104)",
    "root": "root-104 (词根释义)",
    "example": "This is an example sentence for ZKWord104."
  },
  {
    "word": "ZKWord105",
    "phonetic": "/zkˈwɜːrd105/",
    "meaning": "日常的 (词汇 105)",
    "root": "root-105 (词根释义)",
    "example": "This is an example sentence for ZKWord105."
  },
  {
    "word": "ZKWord106",
    "phonetic": "/zkˈwɜːrd106/",
    "meaning": "生活 (词汇 106)",
    "root": "root-106 (词根释义)",
    "example": "This is an example sentence for ZKWord106."
  },
  {
    "word": "ZKWord107",
    "phonetic": "/zkˈwɜːrd107/",
    "meaning": "基础的 (词汇 107)",
    "root": "root-107 (词根释义)",
    "example": "This is an example sentence for ZKWord107."
  },
  {
    "word": "ZKWord108",
    "phonetic": "/zkˈwɜːrd108/",
    "meaning": "重要的 (词汇 108)",
    "root": "root-108 (词根释义)",
    "example": "This is an example sentence for ZKWord108."
  },
  {
    "word": "ZKWord109",
    "phonetic": "/zkˈwɜːrd109/",
    "meaning": "植物 (词汇 109)",
    "root": "root-109 (词根释义)",
    "example": "This is an example sentence for ZKWord109."
  },
  {
    "word": "ZKWord110",
    "phonetic": "/zkˈwɜːrd110/",
    "meaning": "学习的 (词汇 110)",
    "root": "root-110 (词根释义)",
    "example": "This is an example sentence for ZKWord110."
  },
  {
    "word": "ZKWord111",
    "phonetic": "/zkˈwɜːrd111/",
    "meaning": "家庭 (词汇 111)",
    "root": "root-111 (词根释义)",
    "example": "This is an example sentence for ZKWord111."
  },
  {
    "word": "ZKWord112",
    "phonetic": "/zkˈwɜːrd112/",
    "meaning": "朋友 (词汇 112)",
    "root": "root-112 (词根释义)",
    "example": "This is an example sentence for ZKWord112."
  },
  {
    "word": "ZKWord113",
    "phonetic": "/zkˈwɜːrd113/",
    "meaning": "学校 (词汇 113)",
    "root": "root-113 (词根释义)",
    "example": "This is an example sentence for ZKWord113."
  },
  {
    "word": "ZKWord114",
    "phonetic": "/zkˈwɜːrd114/",
    "meaning": "家庭 (词汇 114)",
    "root": "root-114 (词根释义)",
    "example": "This is an example sentence for ZKWord114."
  },
  {
    "word": "ZKWord115",
    "phonetic": "/zkˈwɜːrd115/",
    "meaning": "生活 (词汇 115)",
    "root": "root-115 (词根释义)",
    "example": "This is an example sentence for ZKWord115."
  },
  {
    "word": "ZKWord116",
    "phonetic": "/zkˈwɜːrd116/",
    "meaning": "生活 (词汇 116)",
    "root": "root-116 (词根释义)",
    "example": "This is an example sentence for ZKWord116."
  },
  {
    "word": "ZKWord117",
    "phonetic": "/zkˈwɜːrd117/",
    "meaning": "学校 (词汇 117)",
    "root": "root-117 (词根释义)",
    "example": "This is an example sentence for ZKWord117."
  },
  {
    "word": "ZKWord118",
    "phonetic": "/zkˈwɜːrd118/",
    "meaning": "学习的 (词汇 118)",
    "root": "root-118 (词根释义)",
    "example": "This is an example sentence for ZKWord118."
  },
  {
    "word": "ZKWord119",
    "phonetic": "/zkˈwɜːrd119/",
    "meaning": "重要的 (词汇 119)",
    "root": "root-119 (词根释义)",
    "example": "This is an example sentence for ZKWord119."
  },
  {
    "word": "ZKWord120",
    "phonetic": "/zkˈwɜːrd120/",
    "meaning": "动物 (词汇 120)",
    "root": "root-120 (词根释义)",
    "example": "This is an example sentence for ZKWord120."
  },
  {
    "word": "ZKWord121",
    "phonetic": "/zkˈwɜːrd121/",
    "meaning": "学习的 (词汇 121)",
    "root": "root-121 (词根释义)",
    "example": "This is an example sentence for ZKWord121."
  },
  {
    "word": "ZKWord122",
    "phonetic": "/zkˈwɜːrd122/",
    "meaning": "家庭 (词汇 122)",
    "root": "root-122 (词根释义)",
    "example": "This is an example sentence for ZKWord122."
  },
  {
    "word": "ZKWord123",
    "phonetic": "/zkˈwɜːrd123/",
    "meaning": "基础的 (词汇 123)",
    "root": "root-123 (词根释义)",
    "example": "This is an example sentence for ZKWord123."
  },
  {
    "word": "ZKWord124",
    "phonetic": "/zkˈwɜːrd124/",
    "meaning": "基础的 (词汇 124)",
    "root": "root-124 (词根释义)",
    "example": "This is an example sentence for ZKWord124."
  },
  {
    "word": "ZKWord125",
    "phonetic": "/zkˈwɜːrd125/",
    "meaning": "生活 (词汇 125)",
    "root": "root-125 (词根释义)",
    "example": "This is an example sentence for ZKWord125."
  },
  {
    "word": "ZKWord126",
    "phonetic": "/zkˈwɜːrd126/",
    "meaning": "生活 (词汇 126)",
    "root": "root-126 (词根释义)",
    "example": "This is an example sentence for ZKWord126."
  },
  {
    "word": "ZKWord127",
    "phonetic": "/zkˈwɜːrd127/",
    "meaning": "动物 (词汇 127)",
    "root": "root-127 (词根释义)",
    "example": "This is an example sentence for ZKWord127."
  },
  {
    "word": "ZKWord128",
    "phonetic": "/zkˈwɜːrd128/",
    "meaning": "植物 (词汇 128)",
    "root": "root-128 (词根释义)",
    "example": "This is an example sentence for ZKWord128."
  },
  {
    "word": "ZKWord129",
    "phonetic": "/zkˈwɜːrd129/",
    "meaning": "学校 (词汇 129)",
    "root": "root-129 (词根释义)",
    "example": "This is an example sentence for ZKWord129."
  },
  {
    "word": "ZKWord130",
    "phonetic": "/zkˈwɜːrd130/",
    "meaning": "生活 (词汇 130)",
    "root": "root-130 (词根释义)",
    "example": "This is an example sentence for ZKWord130."
  },
  {
    "word": "ZKWord131",
    "phonetic": "/zkˈwɜːrd131/",
    "meaning": "家庭 (词汇 131)",
    "root": "root-131 (词根释义)",
    "example": "This is an example sentence for ZKWord131."
  },
  {
    "word": "ZKWord132",
    "phonetic": "/zkˈwɜːrd132/",
    "meaning": "学习的 (词汇 132)",
    "root": "root-132 (词根释义)",
    "example": "This is an example sentence for ZKWord132."
  },
  {
    "word": "ZKWord133",
    "phonetic": "/zkˈwɜːrd133/",
    "meaning": "家庭 (词汇 133)",
    "root": "root-133 (词根释义)",
    "example": "This is an example sentence for ZKWord133."
  },
  {
    "word": "ZKWord134",
    "phonetic": "/zkˈwɜːrd134/",
    "meaning": "植物 (词汇 134)",
    "root": "root-134 (词根释义)",
    "example": "This is an example sentence for ZKWord134."
  },
  {
    "word": "ZKWord135",
    "phonetic": "/zkˈwɜːrd135/",
    "meaning": "重要的 (词汇 135)",
    "root": "root-135 (词根释义)",
    "example": "This is an example sentence for ZKWord135."
  },
  {
    "word": "ZKWord136",
    "phonetic": "/zkˈwɜːrd136/",
    "meaning": "重要的 (词汇 136)",
    "root": "root-136 (词根释义)",
    "example": "This is an example sentence for ZKWord136."
  },
  {
    "word": "ZKWord137",
    "phonetic": "/zkˈwɜːrd137/",
    "meaning": "基础的 (词汇 137)",
    "root": "root-137 (词根释义)",
    "example": "This is an example sentence for ZKWord137."
  },
  {
    "word": "ZKWord138",
    "phonetic": "/zkˈwɜːrd138/",
    "meaning": "动物 (词汇 138)",
    "root": "root-138 (词根释义)",
    "example": "This is an example sentence for ZKWord138."
  },
  {
    "word": "ZKWord139",
    "phonetic": "/zkˈwɜːrd139/",
    "meaning": "家庭 (词汇 139)",
    "root": "root-139 (词根释义)",
    "example": "This is an example sentence for ZKWord139."
  },
  {
    "word": "ZKWord140",
    "phonetic": "/zkˈwɜːrd140/",
    "meaning": "生活 (词汇 140)",
    "root": "root-140 (词根释义)",
    "example": "This is an example sentence for ZKWord140."
  },
  {
    "word": "ZKWord141",
    "phonetic": "/zkˈwɜːrd141/",
    "meaning": "朋友 (词汇 141)",
    "root": "root-141 (词根释义)",
    "example": "This is an example sentence for ZKWord141."
  },
  {
    "word": "ZKWord142",
    "phonetic": "/zkˈwɜːrd142/",
    "meaning": "日常的 (词汇 142)",
    "root": "root-142 (词根释义)",
    "example": "This is an example sentence for ZKWord142."
  },
  {
    "word": "ZKWord143",
    "phonetic": "/zkˈwɜːrd143/",
    "meaning": "家庭 (词汇 143)",
    "root": "root-143 (词根释义)",
    "example": "This is an example sentence for ZKWord143."
  },
  {
    "word": "ZKWord144",
    "phonetic": "/zkˈwɜːrd144/",
    "meaning": "生活 (词汇 144)",
    "root": "root-144 (词根释义)",
    "example": "This is an example sentence for ZKWord144."
  },
  {
    "word": "ZKWord145",
    "phonetic": "/zkˈwɜːrd145/",
    "meaning": "重要的 (词汇 145)",
    "root": "root-145 (词根释义)",
    "example": "This is an example sentence for ZKWord145."
  },
  {
    "word": "ZKWord146",
    "phonetic": "/zkˈwɜːrd146/",
    "meaning": "重要的 (词汇 146)",
    "root": "root-146 (词根释义)",
    "example": "This is an example sentence for ZKWord146."
  },
  {
    "word": "ZKWord147",
    "phonetic": "/zkˈwɜːrd147/",
    "meaning": "植物 (词汇 147)",
    "root": "root-147 (词根释义)",
    "example": "This is an example sentence for ZKWord147."
  },
  {
    "word": "ZKWord148",
    "phonetic": "/zkˈwɜːrd148/",
    "meaning": "基础的 (词汇 148)",
    "root": "root-148 (词根释义)",
    "example": "This is an example sentence for ZKWord148."
  },
  {
    "word": "ZKWord149",
    "phonetic": "/zkˈwɜːrd149/",
    "meaning": "学校 (词汇 149)",
    "root": "root-149 (词根释义)",
    "example": "This is an example sentence for ZKWord149."
  },
  {
    "word": "ZKWord150",
    "phonetic": "/zkˈwɜːrd150/",
    "meaning": "生活 (词汇 150)",
    "root": "root-150 (词根释义)",
    "example": "This is an example sentence for ZKWord150."
  },
  {
    "word": "ZKWord151",
    "phonetic": "/zkˈwɜːrd151/",
    "meaning": "动物 (词汇 151)",
    "root": "root-151 (词根释义)",
    "example": "This is an example sentence for ZKWord151."
  },
  {
    "word": "ZKWord152",
    "phonetic": "/zkˈwɜːrd152/",
    "meaning": "植物 (词汇 152)",
    "root": "root-152 (词根释义)",
    "example": "This is an example sentence for ZKWord152."
  },
  {
    "word": "ZKWord153",
    "phonetic": "/zkˈwɜːrd153/",
    "meaning": "日常的 (词汇 153)",
    "root": "root-153 (词根释义)",
    "example": "This is an example sentence for ZKWord153."
  },
  {
    "word": "ZKWord154",
    "phonetic": "/zkˈwɜːrd154/",
    "meaning": "植物 (词汇 154)",
    "root": "root-154 (词根释义)",
    "example": "This is an example sentence for ZKWord154."
  },
  {
    "word": "ZKWord155",
    "phonetic": "/zkˈwɜːrd155/",
    "meaning": "基础的 (词汇 155)",
    "root": "root-155 (词根释义)",
    "example": "This is an example sentence for ZKWord155."
  },
  {
    "word": "ZKWord156",
    "phonetic": "/zkˈwɜːrd156/",
    "meaning": "学习的 (词汇 156)",
    "root": "root-156 (词根释义)",
    "example": "This is an example sentence for ZKWord156."
  },
  {
    "word": "ZKWord157",
    "phonetic": "/zkˈwɜːrd157/",
    "meaning": "基础的 (词汇 157)",
    "root": "root-157 (词根释义)",
    "example": "This is an example sentence for ZKWord157."
  },
  {
    "word": "ZKWord158",
    "phonetic": "/zkˈwɜːrd158/",
    "meaning": "家庭 (词汇 158)",
    "root": "root-158 (词根释义)",
    "example": "This is an example sentence for ZKWord158."
  },
  {
    "word": "ZKWord159",
    "phonetic": "/zkˈwɜːrd159/",
    "meaning": "动物 (词汇 159)",
    "root": "root-159 (词根释义)",
    "example": "This is an example sentence for ZKWord159."
  },
  {
    "word": "ZKWord160",
    "phonetic": "/zkˈwɜːrd160/",
    "meaning": "学校 (词汇 160)",
    "root": "root-160 (词根释义)",
    "example": "This is an example sentence for ZKWord160."
  },
  {
    "word": "ZKWord161",
    "phonetic": "/zkˈwɜːrd161/",
    "meaning": "家庭 (词汇 161)",
    "root": "root-161 (词根释义)",
    "example": "This is an example sentence for ZKWord161."
  },
  {
    "word": "ZKWord162",
    "phonetic": "/zkˈwɜːrd162/",
    "meaning": "基础的 (词汇 162)",
    "root": "root-162 (词根释义)",
    "example": "This is an example sentence for ZKWord162."
  },
  {
    "word": "ZKWord163",
    "phonetic": "/zkˈwɜːrd163/",
    "meaning": "家庭 (词汇 163)",
    "root": "root-163 (词根释义)",
    "example": "This is an example sentence for ZKWord163."
  },
  {
    "word": "ZKWord164",
    "phonetic": "/zkˈwɜːrd164/",
    "meaning": "动物 (词汇 164)",
    "root": "root-164 (词根释义)",
    "example": "This is an example sentence for ZKWord164."
  },
  {
    "word": "ZKWord165",
    "phonetic": "/zkˈwɜːrd165/",
    "meaning": "动物 (词汇 165)",
    "root": "root-165 (词根释义)",
    "example": "This is an example sentence for ZKWord165."
  },
  {
    "word": "ZKWord166",
    "phonetic": "/zkˈwɜːrd166/",
    "meaning": "植物 (词汇 166)",
    "root": "root-166 (词根释义)",
    "example": "This is an example sentence for ZKWord166."
  },
  {
    "word": "ZKWord167",
    "phonetic": "/zkˈwɜːrd167/",
    "meaning": "学校 (词汇 167)",
    "root": "root-167 (词根释义)",
    "example": "This is an example sentence for ZKWord167."
  },
  {
    "word": "ZKWord168",
    "phonetic": "/zkˈwɜːrd168/",
    "meaning": "学校 (词汇 168)",
    "root": "root-168 (词根释义)",
    "example": "This is an example sentence for ZKWord168."
  },
  {
    "word": "ZKWord169",
    "phonetic": "/zkˈwɜːrd169/",
    "meaning": "重要的 (词汇 169)",
    "root": "root-169 (词根释义)",
    "example": "This is an example sentence for ZKWord169."
  },
  {
    "word": "ZKWord170",
    "phonetic": "/zkˈwɜːrd170/",
    "meaning": "生活 (词汇 170)",
    "root": "root-170 (词根释义)",
    "example": "This is an example sentence for ZKWord170."
  },
  {
    "word": "ZKWord171",
    "phonetic": "/zkˈwɜːrd171/",
    "meaning": "家庭 (词汇 171)",
    "root": "root-171 (词根释义)",
    "example": "This is an example sentence for ZKWord171."
  },
  {
    "word": "ZKWord172",
    "phonetic": "/zkˈwɜːrd172/",
    "meaning": "日常的 (词汇 172)",
    "root": "root-172 (词根释义)",
    "example": "This is an example sentence for ZKWord172."
  },
  {
    "word": "ZKWord173",
    "phonetic": "/zkˈwɜːrd173/",
    "meaning": "基础的 (词汇 173)",
    "root": "root-173 (词根释义)",
    "example": "This is an example sentence for ZKWord173."
  },
  {
    "word": "ZKWord174",
    "phonetic": "/zkˈwɜːrd174/",
    "meaning": "基础的 (词汇 174)",
    "root": "root-174 (词根释义)",
    "example": "This is an example sentence for ZKWord174."
  },
  {
    "word": "ZKWord175",
    "phonetic": "/zkˈwɜːrd175/",
    "meaning": "基础的 (词汇 175)",
    "root": "root-175 (词根释义)",
    "example": "This is an example sentence for ZKWord175."
  },
  {
    "word": "ZKWord176",
    "phonetic": "/zkˈwɜːrd176/",
    "meaning": "日常的 (词汇 176)",
    "root": "root-176 (词根释义)",
    "example": "This is an example sentence for ZKWord176."
  },
  {
    "word": "ZKWord177",
    "phonetic": "/zkˈwɜːrd177/",
    "meaning": "学校 (词汇 177)",
    "root": "root-177 (词根释义)",
    "example": "This is an example sentence for ZKWord177."
  },
  {
    "word": "ZKWord178",
    "phonetic": "/zkˈwɜːrd178/",
    "meaning": "日常的 (词汇 178)",
    "root": "root-178 (词根释义)",
    "example": "This is an example sentence for ZKWord178."
  },
  {
    "word": "ZKWord179",
    "phonetic": "/zkˈwɜːrd179/",
    "meaning": "家庭 (词汇 179)",
    "root": "root-179 (词根释义)",
    "example": "This is an example sentence for ZKWord179."
  },
  {
    "word": "ZKWord180",
    "phonetic": "/zkˈwɜːrd180/",
    "meaning": "学校 (词汇 180)",
    "root": "root-180 (词根释义)",
    "example": "This is an example sentence for ZKWord180."
  },
  {
    "word": "ZKWord181",
    "phonetic": "/zkˈwɜːrd181/",
    "meaning": "学习的 (词汇 181)",
    "root": "root-181 (词根释义)",
    "example": "This is an example sentence for ZKWord181."
  },
  {
    "word": "ZKWord182",
    "phonetic": "/zkˈwɜːrd182/",
    "meaning": "重要的 (词汇 182)",
    "root": "root-182 (词根释义)",
    "example": "This is an example sentence for ZKWord182."
  },
  {
    "word": "ZKWord183",
    "phonetic": "/zkˈwɜːrd183/",
    "meaning": "学习的 (词汇 183)",
    "root": "root-183 (词根释义)",
    "example": "This is an example sentence for ZKWord183."
  },
  {
    "word": "ZKWord184",
    "phonetic": "/zkˈwɜːrd184/",
    "meaning": "家庭 (词汇 184)",
    "root": "root-184 (词根释义)",
    "example": "This is an example sentence for ZKWord184."
  },
  {
    "word": "ZKWord185",
    "phonetic": "/zkˈwɜːrd185/",
    "meaning": "学习的 (词汇 185)",
    "root": "root-185 (词根释义)",
    "example": "This is an example sentence for ZKWord185."
  },
  {
    "word": "ZKWord186",
    "phonetic": "/zkˈwɜːrd186/",
    "meaning": "日常的 (词汇 186)",
    "root": "root-186 (词根释义)",
    "example": "This is an example sentence for ZKWord186."
  },
  {
    "word": "ZKWord187",
    "phonetic": "/zkˈwɜːrd187/",
    "meaning": "学习的 (词汇 187)",
    "root": "root-187 (词根释义)",
    "example": "This is an example sentence for ZKWord187."
  },
  {
    "word": "ZKWord188",
    "phonetic": "/zkˈwɜːrd188/",
    "meaning": "基础的 (词汇 188)",
    "root": "root-188 (词根释义)",
    "example": "This is an example sentence for ZKWord188."
  },
  {
    "word": "ZKWord189",
    "phonetic": "/zkˈwɜːrd189/",
    "meaning": "日常的 (词汇 189)",
    "root": "root-189 (词根释义)",
    "example": "This is an example sentence for ZKWord189."
  },
  {
    "word": "ZKWord190",
    "phonetic": "/zkˈwɜːrd190/",
    "meaning": "生活 (词汇 190)",
    "root": "root-190 (词根释义)",
    "example": "This is an example sentence for ZKWord190."
  },
  {
    "word": "ZKWord191",
    "phonetic": "/zkˈwɜːrd191/",
    "meaning": "生活 (词汇 191)",
    "root": "root-191 (词根释义)",
    "example": "This is an example sentence for ZKWord191."
  },
  {
    "word": "ZKWord192",
    "phonetic": "/zkˈwɜːrd192/",
    "meaning": "学校 (词汇 192)",
    "root": "root-192 (词根释义)",
    "example": "This is an example sentence for ZKWord192."
  },
  {
    "word": "ZKWord193",
    "phonetic": "/zkˈwɜːrd193/",
    "meaning": "学习的 (词汇 193)",
    "root": "root-193 (词根释义)",
    "example": "This is an example sentence for ZKWord193."
  },
  {
    "word": "ZKWord194",
    "phonetic": "/zkˈwɜːrd194/",
    "meaning": "重要的 (词汇 194)",
    "root": "root-194 (词根释义)",
    "example": "This is an example sentence for ZKWord194."
  },
  {
    "word": "ZKWord195",
    "phonetic": "/zkˈwɜːrd195/",
    "meaning": "学校 (词汇 195)",
    "root": "root-195 (词根释义)",
    "example": "This is an example sentence for ZKWord195."
  },
  {
    "word": "ZKWord196",
    "phonetic": "/zkˈwɜːrd196/",
    "meaning": "动物 (词汇 196)",
    "root": "root-196 (词根释义)",
    "example": "This is an example sentence for ZKWord196."
  },
  {
    "word": "ZKWord197",
    "phonetic": "/zkˈwɜːrd197/",
    "meaning": "家庭 (词汇 197)",
    "root": "root-197 (词根释义)",
    "example": "This is an example sentence for ZKWord197."
  },
  {
    "word": "ZKWord198",
    "phonetic": "/zkˈwɜːrd198/",
    "meaning": "学校 (词汇 198)",
    "root": "root-198 (词根释义)",
    "example": "This is an example sentence for ZKWord198."
  },
  {
    "word": "ZKWord199",
    "phonetic": "/zkˈwɜːrd199/",
    "meaning": "动物 (词汇 199)",
    "root": "root-199 (词根释义)",
    "example": "This is an example sentence for ZKWord199."
  },
  {
    "word": "ZKWord200",
    "phonetic": "/zkˈwɜːrd200/",
    "meaning": "重要的 (词汇 200)",
    "root": "root-200 (词根释义)",
    "example": "This is an example sentence for ZKWord200."
  },
  {
    "word": "ZKWord201",
    "phonetic": "/zkˈwɜːrd201/",
    "meaning": "家庭 (词汇 201)",
    "root": "root-201 (词根释义)",
    "example": "This is an example sentence for ZKWord201."
  },
  {
    "word": "ZKWord202",
    "phonetic": "/zkˈwɜːrd202/",
    "meaning": "朋友 (词汇 202)",
    "root": "root-202 (词根释义)",
    "example": "This is an example sentence for ZKWord202."
  },
  {
    "word": "ZKWord203",
    "phonetic": "/zkˈwɜːrd203/",
    "meaning": "重要的 (词汇 203)",
    "root": "root-203 (词根释义)",
    "example": "This is an example sentence for ZKWord203."
  },
  {
    "word": "ZKWord204",
    "phonetic": "/zkˈwɜːrd204/",
    "meaning": "学习的 (词汇 204)",
    "root": "root-204 (词根释义)",
    "example": "This is an example sentence for ZKWord204."
  },
  {
    "word": "ZKWord205",
    "phonetic": "/zkˈwɜːrd205/",
    "meaning": "学习的 (词汇 205)",
    "root": "root-205 (词根释义)",
    "example": "This is an example sentence for ZKWord205."
  },
  {
    "word": "ZKWord206",
    "phonetic": "/zkˈwɜːrd206/",
    "meaning": "学校 (词汇 206)",
    "root": "root-206 (词根释义)",
    "example": "This is an example sentence for ZKWord206."
  },
  {
    "word": "ZKWord207",
    "phonetic": "/zkˈwɜːrd207/",
    "meaning": "植物 (词汇 207)",
    "root": "root-207 (词根释义)",
    "example": "This is an example sentence for ZKWord207."
  },
  {
    "word": "ZKWord208",
    "phonetic": "/zkˈwɜːrd208/",
    "meaning": "重要的 (词汇 208)",
    "root": "root-208 (词根释义)",
    "example": "This is an example sentence for ZKWord208."
  },
  {
    "word": "ZKWord209",
    "phonetic": "/zkˈwɜːrd209/",
    "meaning": "生活 (词汇 209)",
    "root": "root-209 (词根释义)",
    "example": "This is an example sentence for ZKWord209."
  },
  {
    "word": "ZKWord210",
    "phonetic": "/zkˈwɜːrd210/",
    "meaning": "重要的 (词汇 210)",
    "root": "root-210 (词根释义)",
    "example": "This is an example sentence for ZKWord210."
  },
  {
    "word": "ZKWord211",
    "phonetic": "/zkˈwɜːrd211/",
    "meaning": "学校 (词汇 211)",
    "root": "root-211 (词根释义)",
    "example": "This is an example sentence for ZKWord211."
  },
  {
    "word": "ZKWord212",
    "phonetic": "/zkˈwɜːrd212/",
    "meaning": "植物 (词汇 212)",
    "root": "root-212 (词根释义)",
    "example": "This is an example sentence for ZKWord212."
  },
  {
    "word": "ZKWord213",
    "phonetic": "/zkˈwɜːrd213/",
    "meaning": "学习的 (词汇 213)",
    "root": "root-213 (词根释义)",
    "example": "This is an example sentence for ZKWord213."
  },
  {
    "word": "ZKWord214",
    "phonetic": "/zkˈwɜːrd214/",
    "meaning": "学习的 (词汇 214)",
    "root": "root-214 (词根释义)",
    "example": "This is an example sentence for ZKWord214."
  },
  {
    "word": "ZKWord215",
    "phonetic": "/zkˈwɜːrd215/",
    "meaning": "学习的 (词汇 215)",
    "root": "root-215 (词根释义)",
    "example": "This is an example sentence for ZKWord215."
  },
  {
    "word": "ZKWord216",
    "phonetic": "/zkˈwɜːrd216/",
    "meaning": "朋友 (词汇 216)",
    "root": "root-216 (词根释义)",
    "example": "This is an example sentence for ZKWord216."
  },
  {
    "word": "ZKWord217",
    "phonetic": "/zkˈwɜːrd217/",
    "meaning": "日常的 (词汇 217)",
    "root": "root-217 (词根释义)",
    "example": "This is an example sentence for ZKWord217."
  },
  {
    "word": "ZKWord218",
    "phonetic": "/zkˈwɜːrd218/",
    "meaning": "朋友 (词汇 218)",
    "root": "root-218 (词根释义)",
    "example": "This is an example sentence for ZKWord218."
  },
  {
    "word": "ZKWord219",
    "phonetic": "/zkˈwɜːrd219/",
    "meaning": "重要的 (词汇 219)",
    "root": "root-219 (词根释义)",
    "example": "This is an example sentence for ZKWord219."
  },
  {
    "word": "ZKWord220",
    "phonetic": "/zkˈwɜːrd220/",
    "meaning": "基础的 (词汇 220)",
    "root": "root-220 (词根释义)",
    "example": "This is an example sentence for ZKWord220."
  },
  {
    "word": "ZKWord221",
    "phonetic": "/zkˈwɜːrd221/",
    "meaning": "动物 (词汇 221)",
    "root": "root-221 (词根释义)",
    "example": "This is an example sentence for ZKWord221."
  },
  {
    "word": "ZKWord222",
    "phonetic": "/zkˈwɜːrd222/",
    "meaning": "重要的 (词汇 222)",
    "root": "root-222 (词根释义)",
    "example": "This is an example sentence for ZKWord222."
  },
  {
    "word": "ZKWord223",
    "phonetic": "/zkˈwɜːrd223/",
    "meaning": "生活 (词汇 223)",
    "root": "root-223 (词根释义)",
    "example": "This is an example sentence for ZKWord223."
  },
  {
    "word": "ZKWord224",
    "phonetic": "/zkˈwɜːrd224/",
    "meaning": "生活 (词汇 224)",
    "root": "root-224 (词根释义)",
    "example": "This is an example sentence for ZKWord224."
  },
  {
    "word": "ZKWord225",
    "phonetic": "/zkˈwɜːrd225/",
    "meaning": "基础的 (词汇 225)",
    "root": "root-225 (词根释义)",
    "example": "This is an example sentence for ZKWord225."
  },
  {
    "word": "ZKWord226",
    "phonetic": "/zkˈwɜːrd226/",
    "meaning": "学习的 (词汇 226)",
    "root": "root-226 (词根释义)",
    "example": "This is an example sentence for ZKWord226."
  },
  {
    "word": "ZKWord227",
    "phonetic": "/zkˈwɜːrd227/",
    "meaning": "基础的 (词汇 227)",
    "root": "root-227 (词根释义)",
    "example": "This is an example sentence for ZKWord227."
  },
  {
    "word": "ZKWord228",
    "phonetic": "/zkˈwɜːrd228/",
    "meaning": "生活 (词汇 228)",
    "root": "root-228 (词根释义)",
    "example": "This is an example sentence for ZKWord228."
  },
  {
    "word": "ZKWord229",
    "phonetic": "/zkˈwɜːrd229/",
    "meaning": "动物 (词汇 229)",
    "root": "root-229 (词根释义)",
    "example": "This is an example sentence for ZKWord229."
  },
  {
    "word": "ZKWord230",
    "phonetic": "/zkˈwɜːrd230/",
    "meaning": "朋友 (词汇 230)",
    "root": "root-230 (词根释义)",
    "example": "This is an example sentence for ZKWord230."
  },
  {
    "word": "ZKWord231",
    "phonetic": "/zkˈwɜːrd231/",
    "meaning": "学习的 (词汇 231)",
    "root": "root-231 (词根释义)",
    "example": "This is an example sentence for ZKWord231."
  },
  {
    "word": "ZKWord232",
    "phonetic": "/zkˈwɜːrd232/",
    "meaning": "重要的 (词汇 232)",
    "root": "root-232 (词根释义)",
    "example": "This is an example sentence for ZKWord232."
  },
  {
    "word": "ZKWord233",
    "phonetic": "/zkˈwɜːrd233/",
    "meaning": "生活 (词汇 233)",
    "root": "root-233 (词根释义)",
    "example": "This is an example sentence for ZKWord233."
  },
  {
    "word": "ZKWord234",
    "phonetic": "/zkˈwɜːrd234/",
    "meaning": "重要的 (词汇 234)",
    "root": "root-234 (词根释义)",
    "example": "This is an example sentence for ZKWord234."
  },
  {
    "word": "ZKWord235",
    "phonetic": "/zkˈwɜːrd235/",
    "meaning": "朋友 (词汇 235)",
    "root": "root-235 (词根释义)",
    "example": "This is an example sentence for ZKWord235."
  },
  {
    "word": "ZKWord236",
    "phonetic": "/zkˈwɜːrd236/",
    "meaning": "基础的 (词汇 236)",
    "root": "root-236 (词根释义)",
    "example": "This is an example sentence for ZKWord236."
  },
  {
    "word": "ZKWord237",
    "phonetic": "/zkˈwɜːrd237/",
    "meaning": "植物 (词汇 237)",
    "root": "root-237 (词根释义)",
    "example": "This is an example sentence for ZKWord237."
  },
  {
    "word": "ZKWord238",
    "phonetic": "/zkˈwɜːrd238/",
    "meaning": "学习的 (词汇 238)",
    "root": "root-238 (词根释义)",
    "example": "This is an example sentence for ZKWord238."
  },
  {
    "word": "ZKWord239",
    "phonetic": "/zkˈwɜːrd239/",
    "meaning": "植物 (词汇 239)",
    "root": "root-239 (词根释义)",
    "example": "This is an example sentence for ZKWord239."
  },
  {
    "word": "ZKWord240",
    "phonetic": "/zkˈwɜːrd240/",
    "meaning": "日常的 (词汇 240)",
    "root": "root-240 (词根释义)",
    "example": "This is an example sentence for ZKWord240."
  },
  {
    "word": "ZKWord241",
    "phonetic": "/zkˈwɜːrd241/",
    "meaning": "学习的 (词汇 241)",
    "root": "root-241 (词根释义)",
    "example": "This is an example sentence for ZKWord241."
  },
  {
    "word": "ZKWord242",
    "phonetic": "/zkˈwɜːrd242/",
    "meaning": "生活 (词汇 242)",
    "root": "root-242 (词根释义)",
    "example": "This is an example sentence for ZKWord242."
  },
  {
    "word": "ZKWord243",
    "phonetic": "/zkˈwɜːrd243/",
    "meaning": "学习的 (词汇 243)",
    "root": "root-243 (词根释义)",
    "example": "This is an example sentence for ZKWord243."
  },
  {
    "word": "ZKWord244",
    "phonetic": "/zkˈwɜːrd244/",
    "meaning": "学习的 (词汇 244)",
    "root": "root-244 (词根释义)",
    "example": "This is an example sentence for ZKWord244."
  },
  {
    "word": "ZKWord245",
    "phonetic": "/zkˈwɜːrd245/",
    "meaning": "基础的 (词汇 245)",
    "root": "root-245 (词根释义)",
    "example": "This is an example sentence for ZKWord245."
  },
  {
    "word": "ZKWord246",
    "phonetic": "/zkˈwɜːrd246/",
    "meaning": "学习的 (词汇 246)",
    "root": "root-246 (词根释义)",
    "example": "This is an example sentence for ZKWord246."
  },
  {
    "word": "ZKWord247",
    "phonetic": "/zkˈwɜːrd247/",
    "meaning": "生活 (词汇 247)",
    "root": "root-247 (词根释义)",
    "example": "This is an example sentence for ZKWord247."
  },
  {
    "word": "ZKWord248",
    "phonetic": "/zkˈwɜːrd248/",
    "meaning": "植物 (词汇 248)",
    "root": "root-248 (词根释义)",
    "example": "This is an example sentence for ZKWord248."
  },
  {
    "word": "ZKWord249",
    "phonetic": "/zkˈwɜːrd249/",
    "meaning": "学习的 (词汇 249)",
    "root": "root-249 (词根释义)",
    "example": "This is an example sentence for ZKWord249."
  },
  {
    "word": "ZKWord250",
    "phonetic": "/zkˈwɜːrd250/",
    "meaning": "重要的 (词汇 250)",
    "root": "root-250 (词根释义)",
    "example": "This is an example sentence for ZKWord250."
  },
  {
    "word": "ZKWord251",
    "phonetic": "/zkˈwɜːrd251/",
    "meaning": "日常的 (词汇 251)",
    "root": "root-251 (词根释义)",
    "example": "This is an example sentence for ZKWord251."
  },
  {
    "word": "ZKWord252",
    "phonetic": "/zkˈwɜːrd252/",
    "meaning": "学校 (词汇 252)",
    "root": "root-252 (词根释义)",
    "example": "This is an example sentence for ZKWord252."
  },
  {
    "word": "ZKWord253",
    "phonetic": "/zkˈwɜːrd253/",
    "meaning": "基础的 (词汇 253)",
    "root": "root-253 (词根释义)",
    "example": "This is an example sentence for ZKWord253."
  },
  {
    "word": "ZKWord254",
    "phonetic": "/zkˈwɜːrd254/",
    "meaning": "重要的 (词汇 254)",
    "root": "root-254 (词根释义)",
    "example": "This is an example sentence for ZKWord254."
  },
  {
    "word": "ZKWord255",
    "phonetic": "/zkˈwɜːrd255/",
    "meaning": "生活 (词汇 255)",
    "root": "root-255 (词根释义)",
    "example": "This is an example sentence for ZKWord255."
  },
  {
    "word": "ZKWord256",
    "phonetic": "/zkˈwɜːrd256/",
    "meaning": "朋友 (词汇 256)",
    "root": "root-256 (词根释义)",
    "example": "This is an example sentence for ZKWord256."
  },
  {
    "word": "ZKWord257",
    "phonetic": "/zkˈwɜːrd257/",
    "meaning": "朋友 (词汇 257)",
    "root": "root-257 (词根释义)",
    "example": "This is an example sentence for ZKWord257."
  },
  {
    "word": "ZKWord258",
    "phonetic": "/zkˈwɜːrd258/",
    "meaning": "朋友 (词汇 258)",
    "root": "root-258 (词根释义)",
    "example": "This is an example sentence for ZKWord258."
  },
  {
    "word": "ZKWord259",
    "phonetic": "/zkˈwɜːrd259/",
    "meaning": "植物 (词汇 259)",
    "root": "root-259 (词根释义)",
    "example": "This is an example sentence for ZKWord259."
  },
  {
    "word": "ZKWord260",
    "phonetic": "/zkˈwɜːrd260/",
    "meaning": "动物 (词汇 260)",
    "root": "root-260 (词根释义)",
    "example": "This is an example sentence for ZKWord260."
  },
  {
    "word": "ZKWord261",
    "phonetic": "/zkˈwɜːrd261/",
    "meaning": "植物 (词汇 261)",
    "root": "root-261 (词根释义)",
    "example": "This is an example sentence for ZKWord261."
  },
  {
    "word": "ZKWord262",
    "phonetic": "/zkˈwɜːrd262/",
    "meaning": "基础的 (词汇 262)",
    "root": "root-262 (词根释义)",
    "example": "This is an example sentence for ZKWord262."
  },
  {
    "word": "ZKWord263",
    "phonetic": "/zkˈwɜːrd263/",
    "meaning": "基础的 (词汇 263)",
    "root": "root-263 (词根释义)",
    "example": "This is an example sentence for ZKWord263."
  },
  {
    "word": "ZKWord264",
    "phonetic": "/zkˈwɜːrd264/",
    "meaning": "学习的 (词汇 264)",
    "root": "root-264 (词根释义)",
    "example": "This is an example sentence for ZKWord264."
  },
  {
    "word": "ZKWord265",
    "phonetic": "/zkˈwɜːrd265/",
    "meaning": "家庭 (词汇 265)",
    "root": "root-265 (词根释义)",
    "example": "This is an example sentence for ZKWord265."
  },
  {
    "word": "ZKWord266",
    "phonetic": "/zkˈwɜːrd266/",
    "meaning": "动物 (词汇 266)",
    "root": "root-266 (词根释义)",
    "example": "This is an example sentence for ZKWord266."
  },
  {
    "word": "ZKWord267",
    "phonetic": "/zkˈwɜːrd267/",
    "meaning": "生活 (词汇 267)",
    "root": "root-267 (词根释义)",
    "example": "This is an example sentence for ZKWord267."
  },
  {
    "word": "ZKWord268",
    "phonetic": "/zkˈwɜːrd268/",
    "meaning": "日常的 (词汇 268)",
    "root": "root-268 (词根释义)",
    "example": "This is an example sentence for ZKWord268."
  },
  {
    "word": "ZKWord269",
    "phonetic": "/zkˈwɜːrd269/",
    "meaning": "植物 (词汇 269)",
    "root": "root-269 (词根释义)",
    "example": "This is an example sentence for ZKWord269."
  },
  {
    "word": "ZKWord270",
    "phonetic": "/zkˈwɜːrd270/",
    "meaning": "重要的 (词汇 270)",
    "root": "root-270 (词根释义)",
    "example": "This is an example sentence for ZKWord270."
  },
  {
    "word": "ZKWord271",
    "phonetic": "/zkˈwɜːrd271/",
    "meaning": "学校 (词汇 271)",
    "root": "root-271 (词根释义)",
    "example": "This is an example sentence for ZKWord271."
  },
  {
    "word": "ZKWord272",
    "phonetic": "/zkˈwɜːrd272/",
    "meaning": "重要的 (词汇 272)",
    "root": "root-272 (词根释义)",
    "example": "This is an example sentence for ZKWord272."
  },
  {
    "word": "ZKWord273",
    "phonetic": "/zkˈwɜːrd273/",
    "meaning": "家庭 (词汇 273)",
    "root": "root-273 (词根释义)",
    "example": "This is an example sentence for ZKWord273."
  },
  {
    "word": "ZKWord274",
    "phonetic": "/zkˈwɜːrd274/",
    "meaning": "植物 (词汇 274)",
    "root": "root-274 (词根释义)",
    "example": "This is an example sentence for ZKWord274."
  },
  {
    "word": "ZKWord275",
    "phonetic": "/zkˈwɜːrd275/",
    "meaning": "基础的 (词汇 275)",
    "root": "root-275 (词根释义)",
    "example": "This is an example sentence for ZKWord275."
  },
  {
    "word": "ZKWord276",
    "phonetic": "/zkˈwɜːrd276/",
    "meaning": "学校 (词汇 276)",
    "root": "root-276 (词根释义)",
    "example": "This is an example sentence for ZKWord276."
  },
  {
    "word": "ZKWord277",
    "phonetic": "/zkˈwɜːrd277/",
    "meaning": "学校 (词汇 277)",
    "root": "root-277 (词根释义)",
    "example": "This is an example sentence for ZKWord277."
  },
  {
    "word": "ZKWord278",
    "phonetic": "/zkˈwɜːrd278/",
    "meaning": "基础的 (词汇 278)",
    "root": "root-278 (词根释义)",
    "example": "This is an example sentence for ZKWord278."
  },
  {
    "word": "ZKWord279",
    "phonetic": "/zkˈwɜːrd279/",
    "meaning": "生活 (词汇 279)",
    "root": "root-279 (词根释义)",
    "example": "This is an example sentence for ZKWord279."
  },
  {
    "word": "ZKWord280",
    "phonetic": "/zkˈwɜːrd280/",
    "meaning": "学习的 (词汇 280)",
    "root": "root-280 (词根释义)",
    "example": "This is an example sentence for ZKWord280."
  },
  {
    "word": "ZKWord281",
    "phonetic": "/zkˈwɜːrd281/",
    "meaning": "植物 (词汇 281)",
    "root": "root-281 (词根释义)",
    "example": "This is an example sentence for ZKWord281."
  },
  {
    "word": "ZKWord282",
    "phonetic": "/zkˈwɜːrd282/",
    "meaning": "植物 (词汇 282)",
    "root": "root-282 (词根释义)",
    "example": "This is an example sentence for ZKWord282."
  },
  {
    "word": "ZKWord283",
    "phonetic": "/zkˈwɜːrd283/",
    "meaning": "重要的 (词汇 283)",
    "root": "root-283 (词根释义)",
    "example": "This is an example sentence for ZKWord283."
  },
  {
    "word": "ZKWord284",
    "phonetic": "/zkˈwɜːrd284/",
    "meaning": "家庭 (词汇 284)",
    "root": "root-284 (词根释义)",
    "example": "This is an example sentence for ZKWord284."
  },
  {
    "word": "ZKWord285",
    "phonetic": "/zkˈwɜːrd285/",
    "meaning": "基础的 (词汇 285)",
    "root": "root-285 (词根释义)",
    "example": "This is an example sentence for ZKWord285."
  },
  {
    "word": "ZKWord286",
    "phonetic": "/zkˈwɜːrd286/",
    "meaning": "动物 (词汇 286)",
    "root": "root-286 (词根释义)",
    "example": "This is an example sentence for ZKWord286."
  },
  {
    "word": "ZKWord287",
    "phonetic": "/zkˈwɜːrd287/",
    "meaning": "基础的 (词汇 287)",
    "root": "root-287 (词根释义)",
    "example": "This is an example sentence for ZKWord287."
  },
  {
    "word": "ZKWord288",
    "phonetic": "/zkˈwɜːrd288/",
    "meaning": "重要的 (词汇 288)",
    "root": "root-288 (词根释义)",
    "example": "This is an example sentence for ZKWord288."
  },
  {
    "word": "ZKWord289",
    "phonetic": "/zkˈwɜːrd289/",
    "meaning": "日常的 (词汇 289)",
    "root": "root-289 (词根释义)",
    "example": "This is an example sentence for ZKWord289."
  },
  {
    "word": "ZKWord290",
    "phonetic": "/zkˈwɜːrd290/",
    "meaning": "生活 (词汇 290)",
    "root": "root-290 (词根释义)",
    "example": "This is an example sentence for ZKWord290."
  },
  {
    "word": "ZKWord291",
    "phonetic": "/zkˈwɜːrd291/",
    "meaning": "日常的 (词汇 291)",
    "root": "root-291 (词根释义)",
    "example": "This is an example sentence for ZKWord291."
  },
  {
    "word": "ZKWord292",
    "phonetic": "/zkˈwɜːrd292/",
    "meaning": "生活 (词汇 292)",
    "root": "root-292 (词根释义)",
    "example": "This is an example sentence for ZKWord292."
  },
  {
    "word": "ZKWord293",
    "phonetic": "/zkˈwɜːrd293/",
    "meaning": "动物 (词汇 293)",
    "root": "root-293 (词根释义)",
    "example": "This is an example sentence for ZKWord293."
  },
  {
    "word": "ZKWord294",
    "phonetic": "/zkˈwɜːrd294/",
    "meaning": "朋友 (词汇 294)",
    "root": "root-294 (词根释义)",
    "example": "This is an example sentence for ZKWord294."
  },
  {
    "word": "ZKWord295",
    "phonetic": "/zkˈwɜːrd295/",
    "meaning": "学校 (词汇 295)",
    "root": "root-295 (词根释义)",
    "example": "This is an example sentence for ZKWord295."
  },
  {
    "word": "ZKWord296",
    "phonetic": "/zkˈwɜːrd296/",
    "meaning": "学习的 (词汇 296)",
    "root": "root-296 (词根释义)",
    "example": "This is an example sentence for ZKWord296."
  },
  {
    "word": "ZKWord297",
    "phonetic": "/zkˈwɜːrd297/",
    "meaning": "学习的 (词汇 297)",
    "root": "root-297 (词根释义)",
    "example": "This is an example sentence for ZKWord297."
  },
  {
    "word": "ZKWord298",
    "phonetic": "/zkˈwɜːrd298/",
    "meaning": "学习的 (词汇 298)",
    "root": "root-298 (词根释义)",
    "example": "This is an example sentence for ZKWord298."
  },
  {
    "word": "ZKWord299",
    "phonetic": "/zkˈwɜːrd299/",
    "meaning": "重要的 (词汇 299)",
    "root": "root-299 (词根释义)",
    "example": "This is an example sentence for ZKWord299."
  },
  {
    "word": "ZKWord300",
    "phonetic": "/zkˈwɜːrd300/",
    "meaning": "学习的 (词汇 300)",
    "root": "root-300 (词根释义)",
    "example": "This is an example sentence for ZKWord300."
  },
  {
    "word": "ZKWord301",
    "phonetic": "/zkˈwɜːrd301/",
    "meaning": "朋友 (词汇 301)",
    "root": "root-301 (词根释义)",
    "example": "This is an example sentence for ZKWord301."
  },
  {
    "word": "ZKWord302",
    "phonetic": "/zkˈwɜːrd302/",
    "meaning": "动物 (词汇 302)",
    "root": "root-302 (词根释义)",
    "example": "This is an example sentence for ZKWord302."
  },
  {
    "word": "ZKWord303",
    "phonetic": "/zkˈwɜːrd303/",
    "meaning": "动物 (词汇 303)",
    "root": "root-303 (词根释义)",
    "example": "This is an example sentence for ZKWord303."
  },
  {
    "word": "ZKWord304",
    "phonetic": "/zkˈwɜːrd304/",
    "meaning": "动物 (词汇 304)",
    "root": "root-304 (词根释义)",
    "example": "This is an example sentence for ZKWord304."
  },
  {
    "word": "ZKWord305",
    "phonetic": "/zkˈwɜːrd305/",
    "meaning": "家庭 (词汇 305)",
    "root": "root-305 (词根释义)",
    "example": "This is an example sentence for ZKWord305."
  },
  {
    "word": "ZKWord306",
    "phonetic": "/zkˈwɜːrd306/",
    "meaning": "家庭 (词汇 306)",
    "root": "root-306 (词根释义)",
    "example": "This is an example sentence for ZKWord306."
  },
  {
    "word": "ZKWord307",
    "phonetic": "/zkˈwɜːrd307/",
    "meaning": "日常的 (词汇 307)",
    "root": "root-307 (词根释义)",
    "example": "This is an example sentence for ZKWord307."
  },
  {
    "word": "ZKWord308",
    "phonetic": "/zkˈwɜːrd308/",
    "meaning": "重要的 (词汇 308)",
    "root": "root-308 (词根释义)",
    "example": "This is an example sentence for ZKWord308."
  },
  {
    "word": "ZKWord309",
    "phonetic": "/zkˈwɜːrd309/",
    "meaning": "生活 (词汇 309)",
    "root": "root-309 (词根释义)",
    "example": "This is an example sentence for ZKWord309."
  },
  {
    "word": "ZKWord310",
    "phonetic": "/zkˈwɜːrd310/",
    "meaning": "日常的 (词汇 310)",
    "root": "root-310 (词根释义)",
    "example": "This is an example sentence for ZKWord310."
  },
  {
    "word": "ZKWord311",
    "phonetic": "/zkˈwɜːrd311/",
    "meaning": "动物 (词汇 311)",
    "root": "root-311 (词根释义)",
    "example": "This is an example sentence for ZKWord311."
  },
  {
    "word": "ZKWord312",
    "phonetic": "/zkˈwɜːrd312/",
    "meaning": "朋友 (词汇 312)",
    "root": "root-312 (词根释义)",
    "example": "This is an example sentence for ZKWord312."
  },
  {
    "word": "ZKWord313",
    "phonetic": "/zkˈwɜːrd313/",
    "meaning": "生活 (词汇 313)",
    "root": "root-313 (词根释义)",
    "example": "This is an example sentence for ZKWord313."
  },
  {
    "word": "ZKWord314",
    "phonetic": "/zkˈwɜːrd314/",
    "meaning": "植物 (词汇 314)",
    "root": "root-314 (词根释义)",
    "example": "This is an example sentence for ZKWord314."
  },
  {
    "word": "ZKWord315",
    "phonetic": "/zkˈwɜːrd315/",
    "meaning": "基础的 (词汇 315)",
    "root": "root-315 (词根释义)",
    "example": "This is an example sentence for ZKWord315."
  },
  {
    "word": "ZKWord316",
    "phonetic": "/zkˈwɜːrd316/",
    "meaning": "学习的 (词汇 316)",
    "root": "root-316 (词根释义)",
    "example": "This is an example sentence for ZKWord316."
  },
  {
    "word": "ZKWord317",
    "phonetic": "/zkˈwɜːrd317/",
    "meaning": "基础的 (词汇 317)",
    "root": "root-317 (词根释义)",
    "example": "This is an example sentence for ZKWord317."
  },
  {
    "word": "ZKWord318",
    "phonetic": "/zkˈwɜːrd318/",
    "meaning": "植物 (词汇 318)",
    "root": "root-318 (词根释义)",
    "example": "This is an example sentence for ZKWord318."
  },
  {
    "word": "ZKWord319",
    "phonetic": "/zkˈwɜːrd319/",
    "meaning": "生活 (词汇 319)",
    "root": "root-319 (词根释义)",
    "example": "This is an example sentence for ZKWord319."
  },
  {
    "word": "ZKWord320",
    "phonetic": "/zkˈwɜːrd320/",
    "meaning": "日常的 (词汇 320)",
    "root": "root-320 (词根释义)",
    "example": "This is an example sentence for ZKWord320."
  },
  {
    "word": "ZKWord321",
    "phonetic": "/zkˈwɜːrd321/",
    "meaning": "动物 (词汇 321)",
    "root": "root-321 (词根释义)",
    "example": "This is an example sentence for ZKWord321."
  },
  {
    "word": "ZKWord322",
    "phonetic": "/zkˈwɜːrd322/",
    "meaning": "基础的 (词汇 322)",
    "root": "root-322 (词根释义)",
    "example": "This is an example sentence for ZKWord322."
  },
  {
    "word": "ZKWord323",
    "phonetic": "/zkˈwɜːrd323/",
    "meaning": "学校 (词汇 323)",
    "root": "root-323 (词根释义)",
    "example": "This is an example sentence for ZKWord323."
  },
  {
    "word": "ZKWord324",
    "phonetic": "/zkˈwɜːrd324/",
    "meaning": "生活 (词汇 324)",
    "root": "root-324 (词根释义)",
    "example": "This is an example sentence for ZKWord324."
  },
  {
    "word": "ZKWord325",
    "phonetic": "/zkˈwɜːrd325/",
    "meaning": "朋友 (词汇 325)",
    "root": "root-325 (词根释义)",
    "example": "This is an example sentence for ZKWord325."
  },
  {
    "word": "ZKWord326",
    "phonetic": "/zkˈwɜːrd326/",
    "meaning": "植物 (词汇 326)",
    "root": "root-326 (词根释义)",
    "example": "This is an example sentence for ZKWord326."
  },
  {
    "word": "ZKWord327",
    "phonetic": "/zkˈwɜːrd327/",
    "meaning": "家庭 (词汇 327)",
    "root": "root-327 (词根释义)",
    "example": "This is an example sentence for ZKWord327."
  },
  {
    "word": "ZKWord328",
    "phonetic": "/zkˈwɜːrd328/",
    "meaning": "动物 (词汇 328)",
    "root": "root-328 (词根释义)",
    "example": "This is an example sentence for ZKWord328."
  },
  {
    "word": "ZKWord329",
    "phonetic": "/zkˈwɜːrd329/",
    "meaning": "动物 (词汇 329)",
    "root": "root-329 (词根释义)",
    "example": "This is an example sentence for ZKWord329."
  },
  {
    "word": "ZKWord330",
    "phonetic": "/zkˈwɜːrd330/",
    "meaning": "重要的 (词汇 330)",
    "root": "root-330 (词根释义)",
    "example": "This is an example sentence for ZKWord330."
  },
  {
    "word": "ZKWord331",
    "phonetic": "/zkˈwɜːrd331/",
    "meaning": "学校 (词汇 331)",
    "root": "root-331 (词根释义)",
    "example": "This is an example sentence for ZKWord331."
  },
  {
    "word": "ZKWord332",
    "phonetic": "/zkˈwɜːrd332/",
    "meaning": "基础的 (词汇 332)",
    "root": "root-332 (词根释义)",
    "example": "This is an example sentence for ZKWord332."
  },
  {
    "word": "ZKWord333",
    "phonetic": "/zkˈwɜːrd333/",
    "meaning": "学校 (词汇 333)",
    "root": "root-333 (词根释义)",
    "example": "This is an example sentence for ZKWord333."
  },
  {
    "word": "ZKWord334",
    "phonetic": "/zkˈwɜːrd334/",
    "meaning": "基础的 (词汇 334)",
    "root": "root-334 (词根释义)",
    "example": "This is an example sentence for ZKWord334."
  },
  {
    "word": "ZKWord335",
    "phonetic": "/zkˈwɜːrd335/",
    "meaning": "动物 (词汇 335)",
    "root": "root-335 (词根释义)",
    "example": "This is an example sentence for ZKWord335."
  },
  {
    "word": "ZKWord336",
    "phonetic": "/zkˈwɜːrd336/",
    "meaning": "重要的 (词汇 336)",
    "root": "root-336 (词根释义)",
    "example": "This is an example sentence for ZKWord336."
  },
  {
    "word": "ZKWord337",
    "phonetic": "/zkˈwɜːrd337/",
    "meaning": "植物 (词汇 337)",
    "root": "root-337 (词根释义)",
    "example": "This is an example sentence for ZKWord337."
  },
  {
    "word": "ZKWord338",
    "phonetic": "/zkˈwɜːrd338/",
    "meaning": "生活 (词汇 338)",
    "root": "root-338 (词根释义)",
    "example": "This is an example sentence for ZKWord338."
  },
  {
    "word": "ZKWord339",
    "phonetic": "/zkˈwɜːrd339/",
    "meaning": "基础的 (词汇 339)",
    "root": "root-339 (词根释义)",
    "example": "This is an example sentence for ZKWord339."
  },
  {
    "word": "ZKWord340",
    "phonetic": "/zkˈwɜːrd340/",
    "meaning": "学校 (词汇 340)",
    "root": "root-340 (词根释义)",
    "example": "This is an example sentence for ZKWord340."
  },
  {
    "word": "ZKWord341",
    "phonetic": "/zkˈwɜːrd341/",
    "meaning": "植物 (词汇 341)",
    "root": "root-341 (词根释义)",
    "example": "This is an example sentence for ZKWord341."
  },
  {
    "word": "ZKWord342",
    "phonetic": "/zkˈwɜːrd342/",
    "meaning": "学校 (词汇 342)",
    "root": "root-342 (词根释义)",
    "example": "This is an example sentence for ZKWord342."
  },
  {
    "word": "ZKWord343",
    "phonetic": "/zkˈwɜːrd343/",
    "meaning": "重要的 (词汇 343)",
    "root": "root-343 (词根释义)",
    "example": "This is an example sentence for ZKWord343."
  },
  {
    "word": "ZKWord344",
    "phonetic": "/zkˈwɜːrd344/",
    "meaning": "重要的 (词汇 344)",
    "root": "root-344 (词根释义)",
    "example": "This is an example sentence for ZKWord344."
  },
  {
    "word": "ZKWord345",
    "phonetic": "/zkˈwɜːrd345/",
    "meaning": "学习的 (词汇 345)",
    "root": "root-345 (词根释义)",
    "example": "This is an example sentence for ZKWord345."
  },
  {
    "word": "ZKWord346",
    "phonetic": "/zkˈwɜːrd346/",
    "meaning": "动物 (词汇 346)",
    "root": "root-346 (词根释义)",
    "example": "This is an example sentence for ZKWord346."
  },
  {
    "word": "ZKWord347",
    "phonetic": "/zkˈwɜːrd347/",
    "meaning": "基础的 (词汇 347)",
    "root": "root-347 (词根释义)",
    "example": "This is an example sentence for ZKWord347."
  },
  {
    "word": "ZKWord348",
    "phonetic": "/zkˈwɜːrd348/",
    "meaning": "学习的 (词汇 348)",
    "root": "root-348 (词根释义)",
    "example": "This is an example sentence for ZKWord348."
  },
  {
    "word": "ZKWord349",
    "phonetic": "/zkˈwɜːrd349/",
    "meaning": "家庭 (词汇 349)",
    "root": "root-349 (词根释义)",
    "example": "This is an example sentence for ZKWord349."
  },
  {
    "word": "ZKWord350",
    "phonetic": "/zkˈwɜːrd350/",
    "meaning": "植物 (词汇 350)",
    "root": "root-350 (词根释义)",
    "example": "This is an example sentence for ZKWord350."
  },
  {
    "word": "ZKWord351",
    "phonetic": "/zkˈwɜːrd351/",
    "meaning": "生活 (词汇 351)",
    "root": "root-351 (词根释义)",
    "example": "This is an example sentence for ZKWord351."
  },
  {
    "word": "ZKWord352",
    "phonetic": "/zkˈwɜːrd352/",
    "meaning": "重要的 (词汇 352)",
    "root": "root-352 (词根释义)",
    "example": "This is an example sentence for ZKWord352."
  },
  {
    "word": "ZKWord353",
    "phonetic": "/zkˈwɜːrd353/",
    "meaning": "动物 (词汇 353)",
    "root": "root-353 (词根释义)",
    "example": "This is an example sentence for ZKWord353."
  },
  {
    "word": "ZKWord354",
    "phonetic": "/zkˈwɜːrd354/",
    "meaning": "家庭 (词汇 354)",
    "root": "root-354 (词根释义)",
    "example": "This is an example sentence for ZKWord354."
  },
  {
    "word": "ZKWord355",
    "phonetic": "/zkˈwɜːrd355/",
    "meaning": "学校 (词汇 355)",
    "root": "root-355 (词根释义)",
    "example": "This is an example sentence for ZKWord355."
  },
  {
    "word": "ZKWord356",
    "phonetic": "/zkˈwɜːrd356/",
    "meaning": "重要的 (词汇 356)",
    "root": "root-356 (词根释义)",
    "example": "This is an example sentence for ZKWord356."
  },
  {
    "word": "ZKWord357",
    "phonetic": "/zkˈwɜːrd357/",
    "meaning": "学习的 (词汇 357)",
    "root": "root-357 (词根释义)",
    "example": "This is an example sentence for ZKWord357."
  },
  {
    "word": "ZKWord358",
    "phonetic": "/zkˈwɜːrd358/",
    "meaning": "学校 (词汇 358)",
    "root": "root-358 (词根释义)",
    "example": "This is an example sentence for ZKWord358."
  },
  {
    "word": "ZKWord359",
    "phonetic": "/zkˈwɜːrd359/",
    "meaning": "学校 (词汇 359)",
    "root": "root-359 (词根释义)",
    "example": "This is an example sentence for ZKWord359."
  },
  {
    "word": "ZKWord360",
    "phonetic": "/zkˈwɜːrd360/",
    "meaning": "日常的 (词汇 360)",
    "root": "root-360 (词根释义)",
    "example": "This is an example sentence for ZKWord360."
  },
  {
    "word": "ZKWord361",
    "phonetic": "/zkˈwɜːrd361/",
    "meaning": "植物 (词汇 361)",
    "root": "root-361 (词根释义)",
    "example": "This is an example sentence for ZKWord361."
  },
  {
    "word": "ZKWord362",
    "phonetic": "/zkˈwɜːrd362/",
    "meaning": "朋友 (词汇 362)",
    "root": "root-362 (词根释义)",
    "example": "This is an example sentence for ZKWord362."
  },
  {
    "word": "ZKWord363",
    "phonetic": "/zkˈwɜːrd363/",
    "meaning": "朋友 (词汇 363)",
    "root": "root-363 (词根释义)",
    "example": "This is an example sentence for ZKWord363."
  },
  {
    "word": "ZKWord364",
    "phonetic": "/zkˈwɜːrd364/",
    "meaning": "生活 (词汇 364)",
    "root": "root-364 (词根释义)",
    "example": "This is an example sentence for ZKWord364."
  },
  {
    "word": "ZKWord365",
    "phonetic": "/zkˈwɜːrd365/",
    "meaning": "学习的 (词汇 365)",
    "root": "root-365 (词根释义)",
    "example": "This is an example sentence for ZKWord365."
  },
  {
    "word": "ZKWord366",
    "phonetic": "/zkˈwɜːrd366/",
    "meaning": "家庭 (词汇 366)",
    "root": "root-366 (词根释义)",
    "example": "This is an example sentence for ZKWord366."
  },
  {
    "word": "ZKWord367",
    "phonetic": "/zkˈwɜːrd367/",
    "meaning": "生活 (词汇 367)",
    "root": "root-367 (词根释义)",
    "example": "This is an example sentence for ZKWord367."
  },
  {
    "word": "ZKWord368",
    "phonetic": "/zkˈwɜːrd368/",
    "meaning": "植物 (词汇 368)",
    "root": "root-368 (词根释义)",
    "example": "This is an example sentence for ZKWord368."
  },
  {
    "word": "ZKWord369",
    "phonetic": "/zkˈwɜːrd369/",
    "meaning": "日常的 (词汇 369)",
    "root": "root-369 (词根释义)",
    "example": "This is an example sentence for ZKWord369."
  },
  {
    "word": "ZKWord370",
    "phonetic": "/zkˈwɜːrd370/",
    "meaning": "重要的 (词汇 370)",
    "root": "root-370 (词根释义)",
    "example": "This is an example sentence for ZKWord370."
  },
  {
    "word": "ZKWord371",
    "phonetic": "/zkˈwɜːrd371/",
    "meaning": "日常的 (词汇 371)",
    "root": "root-371 (词根释义)",
    "example": "This is an example sentence for ZKWord371."
  },
  {
    "word": "ZKWord372",
    "phonetic": "/zkˈwɜːrd372/",
    "meaning": "日常的 (词汇 372)",
    "root": "root-372 (词根释义)",
    "example": "This is an example sentence for ZKWord372."
  },
  {
    "word": "ZKWord373",
    "phonetic": "/zkˈwɜːrd373/",
    "meaning": "重要的 (词汇 373)",
    "root": "root-373 (词根释义)",
    "example": "This is an example sentence for ZKWord373."
  },
  {
    "word": "ZKWord374",
    "phonetic": "/zkˈwɜːrd374/",
    "meaning": "生活 (词汇 374)",
    "root": "root-374 (词根释义)",
    "example": "This is an example sentence for ZKWord374."
  },
  {
    "word": "ZKWord375",
    "phonetic": "/zkˈwɜːrd375/",
    "meaning": "植物 (词汇 375)",
    "root": "root-375 (词根释义)",
    "example": "This is an example sentence for ZKWord375."
  },
  {
    "word": "ZKWord376",
    "phonetic": "/zkˈwɜːrd376/",
    "meaning": "植物 (词汇 376)",
    "root": "root-376 (词根释义)",
    "example": "This is an example sentence for ZKWord376."
  },
  {
    "word": "ZKWord377",
    "phonetic": "/zkˈwɜːrd377/",
    "meaning": "生活 (词汇 377)",
    "root": "root-377 (词根释义)",
    "example": "This is an example sentence for ZKWord377."
  },
  {
    "word": "ZKWord378",
    "phonetic": "/zkˈwɜːrd378/",
    "meaning": "植物 (词汇 378)",
    "root": "root-378 (词根释义)",
    "example": "This is an example sentence for ZKWord378."
  },
  {
    "word": "ZKWord379",
    "phonetic": "/zkˈwɜːrd379/",
    "meaning": "朋友 (词汇 379)",
    "root": "root-379 (词根释义)",
    "example": "This is an example sentence for ZKWord379."
  },
  {
    "word": "ZKWord380",
    "phonetic": "/zkˈwɜːrd380/",
    "meaning": "重要的 (词汇 380)",
    "root": "root-380 (词根释义)",
    "example": "This is an example sentence for ZKWord380."
  },
  {
    "word": "ZKWord381",
    "phonetic": "/zkˈwɜːrd381/",
    "meaning": "学习的 (词汇 381)",
    "root": "root-381 (词根释义)",
    "example": "This is an example sentence for ZKWord381."
  },
  {
    "word": "ZKWord382",
    "phonetic": "/zkˈwɜːrd382/",
    "meaning": "家庭 (词汇 382)",
    "root": "root-382 (词根释义)",
    "example": "This is an example sentence for ZKWord382."
  },
  {
    "word": "ZKWord383",
    "phonetic": "/zkˈwɜːrd383/",
    "meaning": "动物 (词汇 383)",
    "root": "root-383 (词根释义)",
    "example": "This is an example sentence for ZKWord383."
  },
  {
    "word": "ZKWord384",
    "phonetic": "/zkˈwɜːrd384/",
    "meaning": "朋友 (词汇 384)",
    "root": "root-384 (词根释义)",
    "example": "This is an example sentence for ZKWord384."
  },
  {
    "word": "ZKWord385",
    "phonetic": "/zkˈwɜːrd385/",
    "meaning": "基础的 (词汇 385)",
    "root": "root-385 (词根释义)",
    "example": "This is an example sentence for ZKWord385."
  },
  {
    "word": "ZKWord386",
    "phonetic": "/zkˈwɜːrd386/",
    "meaning": "动物 (词汇 386)",
    "root": "root-386 (词根释义)",
    "example": "This is an example sentence for ZKWord386."
  },
  {
    "word": "ZKWord387",
    "phonetic": "/zkˈwɜːrd387/",
    "meaning": "家庭 (词汇 387)",
    "root": "root-387 (词根释义)",
    "example": "This is an example sentence for ZKWord387."
  },
  {
    "word": "ZKWord388",
    "phonetic": "/zkˈwɜːrd388/",
    "meaning": "生活 (词汇 388)",
    "root": "root-388 (词根释义)",
    "example": "This is an example sentence for ZKWord388."
  },
  {
    "word": "ZKWord389",
    "phonetic": "/zkˈwɜːrd389/",
    "meaning": "学习的 (词汇 389)",
    "root": "root-389 (词根释义)",
    "example": "This is an example sentence for ZKWord389."
  },
  {
    "word": "ZKWord390",
    "phonetic": "/zkˈwɜːrd390/",
    "meaning": "动物 (词汇 390)",
    "root": "root-390 (词根释义)",
    "example": "This is an example sentence for ZKWord390."
  },
  {
    "word": "ZKWord391",
    "phonetic": "/zkˈwɜːrd391/",
    "meaning": "朋友 (词汇 391)",
    "root": "root-391 (词根释义)",
    "example": "This is an example sentence for ZKWord391."
  },
  {
    "word": "ZKWord392",
    "phonetic": "/zkˈwɜːrd392/",
    "meaning": "日常的 (词汇 392)",
    "root": "root-392 (词根释义)",
    "example": "This is an example sentence for ZKWord392."
  },
  {
    "word": "ZKWord393",
    "phonetic": "/zkˈwɜːrd393/",
    "meaning": "学习的 (词汇 393)",
    "root": "root-393 (词根释义)",
    "example": "This is an example sentence for ZKWord393."
  },
  {
    "word": "ZKWord394",
    "phonetic": "/zkˈwɜːrd394/",
    "meaning": "学校 (词汇 394)",
    "root": "root-394 (词根释义)",
    "example": "This is an example sentence for ZKWord394."
  },
  {
    "word": "ZKWord395",
    "phonetic": "/zkˈwɜːrd395/",
    "meaning": "生活 (词汇 395)",
    "root": "root-395 (词根释义)",
    "example": "This is an example sentence for ZKWord395."
  },
  {
    "word": "ZKWord396",
    "phonetic": "/zkˈwɜːrd396/",
    "meaning": "动物 (词汇 396)",
    "root": "root-396 (词根释义)",
    "example": "This is an example sentence for ZKWord396."
  },
  {
    "word": "ZKWord397",
    "phonetic": "/zkˈwɜːrd397/",
    "meaning": "日常的 (词汇 397)",
    "root": "root-397 (词根释义)",
    "example": "This is an example sentence for ZKWord397."
  },
  {
    "word": "ZKWord398",
    "phonetic": "/zkˈwɜːrd398/",
    "meaning": "朋友 (词汇 398)",
    "root": "root-398 (词根释义)",
    "example": "This is an example sentence for ZKWord398."
  },
  {
    "word": "ZKWord399",
    "phonetic": "/zkˈwɜːrd399/",
    "meaning": "学校 (词汇 399)",
    "root": "root-399 (词根释义)",
    "example": "This is an example sentence for ZKWord399."
  },
  {
    "word": "ZKWord400",
    "phonetic": "/zkˈwɜːrd400/",
    "meaning": "植物 (词汇 400)",
    "root": "root-400 (词根释义)",
    "example": "This is an example sentence for ZKWord400."
  },
  {
    "word": "ZKWord401",
    "phonetic": "/zkˈwɜːrd401/",
    "meaning": "生活 (词汇 401)",
    "root": "root-401 (词根释义)",
    "example": "This is an example sentence for ZKWord401."
  },
  {
    "word": "ZKWord402",
    "phonetic": "/zkˈwɜːrd402/",
    "meaning": "家庭 (词汇 402)",
    "root": "root-402 (词根释义)",
    "example": "This is an example sentence for ZKWord402."
  },
  {
    "word": "ZKWord403",
    "phonetic": "/zkˈwɜːrd403/",
    "meaning": "日常的 (词汇 403)",
    "root": "root-403 (词根释义)",
    "example": "This is an example sentence for ZKWord403."
  },
  {
    "word": "ZKWord404",
    "phonetic": "/zkˈwɜːrd404/",
    "meaning": "基础的 (词汇 404)",
    "root": "root-404 (词根释义)",
    "example": "This is an example sentence for ZKWord404."
  },
  {
    "word": "ZKWord405",
    "phonetic": "/zkˈwɜːrd405/",
    "meaning": "植物 (词汇 405)",
    "root": "root-405 (词根释义)",
    "example": "This is an example sentence for ZKWord405."
  },
  {
    "word": "ZKWord406",
    "phonetic": "/zkˈwɜːrd406/",
    "meaning": "学习的 (词汇 406)",
    "root": "root-406 (词根释义)",
    "example": "This is an example sentence for ZKWord406."
  },
  {
    "word": "ZKWord407",
    "phonetic": "/zkˈwɜːrd407/",
    "meaning": "动物 (词汇 407)",
    "root": "root-407 (词根释义)",
    "example": "This is an example sentence for ZKWord407."
  },
  {
    "word": "ZKWord408",
    "phonetic": "/zkˈwɜːrd408/",
    "meaning": "生活 (词汇 408)",
    "root": "root-408 (词根释义)",
    "example": "This is an example sentence for ZKWord408."
  },
  {
    "word": "ZKWord409",
    "phonetic": "/zkˈwɜːrd409/",
    "meaning": "生活 (词汇 409)",
    "root": "root-409 (词根释义)",
    "example": "This is an example sentence for ZKWord409."
  },
  {
    "word": "ZKWord410",
    "phonetic": "/zkˈwɜːrd410/",
    "meaning": "学习的 (词汇 410)",
    "root": "root-410 (词根释义)",
    "example": "This is an example sentence for ZKWord410."
  },
  {
    "word": "ZKWord411",
    "phonetic": "/zkˈwɜːrd411/",
    "meaning": "朋友 (词汇 411)",
    "root": "root-411 (词根释义)",
    "example": "This is an example sentence for ZKWord411."
  },
  {
    "word": "ZKWord412",
    "phonetic": "/zkˈwɜːrd412/",
    "meaning": "学校 (词汇 412)",
    "root": "root-412 (词根释义)",
    "example": "This is an example sentence for ZKWord412."
  },
  {
    "word": "ZKWord413",
    "phonetic": "/zkˈwɜːrd413/",
    "meaning": "生活 (词汇 413)",
    "root": "root-413 (词根释义)",
    "example": "This is an example sentence for ZKWord413."
  },
  {
    "word": "ZKWord414",
    "phonetic": "/zkˈwɜːrd414/",
    "meaning": "朋友 (词汇 414)",
    "root": "root-414 (词根释义)",
    "example": "This is an example sentence for ZKWord414."
  },
  {
    "word": "ZKWord415",
    "phonetic": "/zkˈwɜːrd415/",
    "meaning": "生活 (词汇 415)",
    "root": "root-415 (词根释义)",
    "example": "This is an example sentence for ZKWord415."
  },
  {
    "word": "ZKWord416",
    "phonetic": "/zkˈwɜːrd416/",
    "meaning": "学习的 (词汇 416)",
    "root": "root-416 (词根释义)",
    "example": "This is an example sentence for ZKWord416."
  },
  {
    "word": "ZKWord417",
    "phonetic": "/zkˈwɜːrd417/",
    "meaning": "动物 (词汇 417)",
    "root": "root-417 (词根释义)",
    "example": "This is an example sentence for ZKWord417."
  },
  {
    "word": "ZKWord418",
    "phonetic": "/zkˈwɜːrd418/",
    "meaning": "基础的 (词汇 418)",
    "root": "root-418 (词根释义)",
    "example": "This is an example sentence for ZKWord418."
  },
  {
    "word": "ZKWord419",
    "phonetic": "/zkˈwɜːrd419/",
    "meaning": "学习的 (词汇 419)",
    "root": "root-419 (词根释义)",
    "example": "This is an example sentence for ZKWord419."
  },
  {
    "word": "ZKWord420",
    "phonetic": "/zkˈwɜːrd420/",
    "meaning": "重要的 (词汇 420)",
    "root": "root-420 (词根释义)",
    "example": "This is an example sentence for ZKWord420."
  },
  {
    "word": "ZKWord421",
    "phonetic": "/zkˈwɜːrd421/",
    "meaning": "基础的 (词汇 421)",
    "root": "root-421 (词根释义)",
    "example": "This is an example sentence for ZKWord421."
  },
  {
    "word": "ZKWord422",
    "phonetic": "/zkˈwɜːrd422/",
    "meaning": "生活 (词汇 422)",
    "root": "root-422 (词根释义)",
    "example": "This is an example sentence for ZKWord422."
  },
  {
    "word": "ZKWord423",
    "phonetic": "/zkˈwɜːrd423/",
    "meaning": "家庭 (词汇 423)",
    "root": "root-423 (词根释义)",
    "example": "This is an example sentence for ZKWord423."
  },
  {
    "word": "ZKWord424",
    "phonetic": "/zkˈwɜːrd424/",
    "meaning": "基础的 (词汇 424)",
    "root": "root-424 (词根释义)",
    "example": "This is an example sentence for ZKWord424."
  },
  {
    "word": "ZKWord425",
    "phonetic": "/zkˈwɜːrd425/",
    "meaning": "学校 (词汇 425)",
    "root": "root-425 (词根释义)",
    "example": "This is an example sentence for ZKWord425."
  },
  {
    "word": "ZKWord426",
    "phonetic": "/zkˈwɜːrd426/",
    "meaning": "生活 (词汇 426)",
    "root": "root-426 (词根释义)",
    "example": "This is an example sentence for ZKWord426."
  },
  {
    "word": "ZKWord427",
    "phonetic": "/zkˈwɜːrd427/",
    "meaning": "学习的 (词汇 427)",
    "root": "root-427 (词根释义)",
    "example": "This is an example sentence for ZKWord427."
  },
  {
    "word": "ZKWord428",
    "phonetic": "/zkˈwɜːrd428/",
    "meaning": "家庭 (词汇 428)",
    "root": "root-428 (词根释义)",
    "example": "This is an example sentence for ZKWord428."
  },
  {
    "word": "ZKWord429",
    "phonetic": "/zkˈwɜːrd429/",
    "meaning": "重要的 (词汇 429)",
    "root": "root-429 (词根释义)",
    "example": "This is an example sentence for ZKWord429."
  },
  {
    "word": "ZKWord430",
    "phonetic": "/zkˈwɜːrd430/",
    "meaning": "家庭 (词汇 430)",
    "root": "root-430 (词根释义)",
    "example": "This is an example sentence for ZKWord430."
  },
  {
    "word": "ZKWord431",
    "phonetic": "/zkˈwɜːrd431/",
    "meaning": "日常的 (词汇 431)",
    "root": "root-431 (词根释义)",
    "example": "This is an example sentence for ZKWord431."
  },
  {
    "word": "ZKWord432",
    "phonetic": "/zkˈwɜːrd432/",
    "meaning": "学习的 (词汇 432)",
    "root": "root-432 (词根释义)",
    "example": "This is an example sentence for ZKWord432."
  },
  {
    "word": "ZKWord433",
    "phonetic": "/zkˈwɜːrd433/",
    "meaning": "朋友 (词汇 433)",
    "root": "root-433 (词根释义)",
    "example": "This is an example sentence for ZKWord433."
  },
  {
    "word": "ZKWord434",
    "phonetic": "/zkˈwɜːrd434/",
    "meaning": "植物 (词汇 434)",
    "root": "root-434 (词根释义)",
    "example": "This is an example sentence for ZKWord434."
  },
  {
    "word": "ZKWord435",
    "phonetic": "/zkˈwɜːrd435/",
    "meaning": "基础的 (词汇 435)",
    "root": "root-435 (词根释义)",
    "example": "This is an example sentence for ZKWord435."
  },
  {
    "word": "ZKWord436",
    "phonetic": "/zkˈwɜːrd436/",
    "meaning": "动物 (词汇 436)",
    "root": "root-436 (词根释义)",
    "example": "This is an example sentence for ZKWord436."
  },
  {
    "word": "ZKWord437",
    "phonetic": "/zkˈwɜːrd437/",
    "meaning": "动物 (词汇 437)",
    "root": "root-437 (词根释义)",
    "example": "This is an example sentence for ZKWord437."
  },
  {
    "word": "ZKWord438",
    "phonetic": "/zkˈwɜːrd438/",
    "meaning": "家庭 (词汇 438)",
    "root": "root-438 (词根释义)",
    "example": "This is an example sentence for ZKWord438."
  },
  {
    "word": "ZKWord439",
    "phonetic": "/zkˈwɜːrd439/",
    "meaning": "家庭 (词汇 439)",
    "root": "root-439 (词根释义)",
    "example": "This is an example sentence for ZKWord439."
  },
  {
    "word": "ZKWord440",
    "phonetic": "/zkˈwɜːrd440/",
    "meaning": "日常的 (词汇 440)",
    "root": "root-440 (词根释义)",
    "example": "This is an example sentence for ZKWord440."
  },
  {
    "word": "ZKWord441",
    "phonetic": "/zkˈwɜːrd441/",
    "meaning": "植物 (词汇 441)",
    "root": "root-441 (词根释义)",
    "example": "This is an example sentence for ZKWord441."
  },
  {
    "word": "ZKWord442",
    "phonetic": "/zkˈwɜːrd442/",
    "meaning": "动物 (词汇 442)",
    "root": "root-442 (词根释义)",
    "example": "This is an example sentence for ZKWord442."
  },
  {
    "word": "ZKWord443",
    "phonetic": "/zkˈwɜːrd443/",
    "meaning": "学习的 (词汇 443)",
    "root": "root-443 (词根释义)",
    "example": "This is an example sentence for ZKWord443."
  },
  {
    "word": "ZKWord444",
    "phonetic": "/zkˈwɜːrd444/",
    "meaning": "动物 (词汇 444)",
    "root": "root-444 (词根释义)",
    "example": "This is an example sentence for ZKWord444."
  },
  {
    "word": "ZKWord445",
    "phonetic": "/zkˈwɜːrd445/",
    "meaning": "学校 (词汇 445)",
    "root": "root-445 (词根释义)",
    "example": "This is an example sentence for ZKWord445."
  },
  {
    "word": "ZKWord446",
    "phonetic": "/zkˈwɜːrd446/",
    "meaning": "重要的 (词汇 446)",
    "root": "root-446 (词根释义)",
    "example": "This is an example sentence for ZKWord446."
  },
  {
    "word": "ZKWord447",
    "phonetic": "/zkˈwɜːrd447/",
    "meaning": "学习的 (词汇 447)",
    "root": "root-447 (词根释义)",
    "example": "This is an example sentence for ZKWord447."
  },
  {
    "word": "ZKWord448",
    "phonetic": "/zkˈwɜːrd448/",
    "meaning": "学习的 (词汇 448)",
    "root": "root-448 (词根释义)",
    "example": "This is an example sentence for ZKWord448."
  },
  {
    "word": "ZKWord449",
    "phonetic": "/zkˈwɜːrd449/",
    "meaning": "朋友 (词汇 449)",
    "root": "root-449 (词根释义)",
    "example": "This is an example sentence for ZKWord449."
  },
  {
    "word": "ZKWord450",
    "phonetic": "/zkˈwɜːrd450/",
    "meaning": "动物 (词汇 450)",
    "root": "root-450 (词根释义)",
    "example": "This is an example sentence for ZKWord450."
  },
  {
    "word": "ZKWord451",
    "phonetic": "/zkˈwɜːrd451/",
    "meaning": "学习的 (词汇 451)",
    "root": "root-451 (词根释义)",
    "example": "This is an example sentence for ZKWord451."
  },
  {
    "word": "ZKWord452",
    "phonetic": "/zkˈwɜːrd452/",
    "meaning": "生活 (词汇 452)",
    "root": "root-452 (词根释义)",
    "example": "This is an example sentence for ZKWord452."
  },
  {
    "word": "ZKWord453",
    "phonetic": "/zkˈwɜːrd453/",
    "meaning": "动物 (词汇 453)",
    "root": "root-453 (词根释义)",
    "example": "This is an example sentence for ZKWord453."
  },
  {
    "word": "ZKWord454",
    "phonetic": "/zkˈwɜːrd454/",
    "meaning": "学习的 (词汇 454)",
    "root": "root-454 (词根释义)",
    "example": "This is an example sentence for ZKWord454."
  },
  {
    "word": "ZKWord455",
    "phonetic": "/zkˈwɜːrd455/",
    "meaning": "生活 (词汇 455)",
    "root": "root-455 (词根释义)",
    "example": "This is an example sentence for ZKWord455."
  },
  {
    "word": "ZKWord456",
    "phonetic": "/zkˈwɜːrd456/",
    "meaning": "生活 (词汇 456)",
    "root": "root-456 (词根释义)",
    "example": "This is an example sentence for ZKWord456."
  },
  {
    "word": "ZKWord457",
    "phonetic": "/zkˈwɜːrd457/",
    "meaning": "学习的 (词汇 457)",
    "root": "root-457 (词根释义)",
    "example": "This is an example sentence for ZKWord457."
  },
  {
    "word": "ZKWord458",
    "phonetic": "/zkˈwɜːrd458/",
    "meaning": "学习的 (词汇 458)",
    "root": "root-458 (词根释义)",
    "example": "This is an example sentence for ZKWord458."
  },
  {
    "word": "ZKWord459",
    "phonetic": "/zkˈwɜːrd459/",
    "meaning": "植物 (词汇 459)",
    "root": "root-459 (词根释义)",
    "example": "This is an example sentence for ZKWord459."
  },
  {
    "word": "ZKWord460",
    "phonetic": "/zkˈwɜːrd460/",
    "meaning": "家庭 (词汇 460)",
    "root": "root-460 (词根释义)",
    "example": "This is an example sentence for ZKWord460."
  },
  {
    "word": "ZKWord461",
    "phonetic": "/zkˈwɜːrd461/",
    "meaning": "学习的 (词汇 461)",
    "root": "root-461 (词根释义)",
    "example": "This is an example sentence for ZKWord461."
  },
  {
    "word": "ZKWord462",
    "phonetic": "/zkˈwɜːrd462/",
    "meaning": "家庭 (词汇 462)",
    "root": "root-462 (词根释义)",
    "example": "This is an example sentence for ZKWord462."
  },
  {
    "word": "ZKWord463",
    "phonetic": "/zkˈwɜːrd463/",
    "meaning": "生活 (词汇 463)",
    "root": "root-463 (词根释义)",
    "example": "This is an example sentence for ZKWord463."
  },
  {
    "word": "ZKWord464",
    "phonetic": "/zkˈwɜːrd464/",
    "meaning": "学校 (词汇 464)",
    "root": "root-464 (词根释义)",
    "example": "This is an example sentence for ZKWord464."
  },
  {
    "word": "ZKWord465",
    "phonetic": "/zkˈwɜːrd465/",
    "meaning": "朋友 (词汇 465)",
    "root": "root-465 (词根释义)",
    "example": "This is an example sentence for ZKWord465."
  },
  {
    "word": "ZKWord466",
    "phonetic": "/zkˈwɜːrd466/",
    "meaning": "日常的 (词汇 466)",
    "root": "root-466 (词根释义)",
    "example": "This is an example sentence for ZKWord466."
  },
  {
    "word": "ZKWord467",
    "phonetic": "/zkˈwɜːrd467/",
    "meaning": "生活 (词汇 467)",
    "root": "root-467 (词根释义)",
    "example": "This is an example sentence for ZKWord467."
  },
  {
    "word": "ZKWord468",
    "phonetic": "/zkˈwɜːrd468/",
    "meaning": "基础的 (词汇 468)",
    "root": "root-468 (词根释义)",
    "example": "This is an example sentence for ZKWord468."
  },
  {
    "word": "ZKWord469",
    "phonetic": "/zkˈwɜːrd469/",
    "meaning": "生活 (词汇 469)",
    "root": "root-469 (词根释义)",
    "example": "This is an example sentence for ZKWord469."
  },
  {
    "word": "ZKWord470",
    "phonetic": "/zkˈwɜːrd470/",
    "meaning": "动物 (词汇 470)",
    "root": "root-470 (词根释义)",
    "example": "This is an example sentence for ZKWord470."
  },
  {
    "word": "ZKWord471",
    "phonetic": "/zkˈwɜːrd471/",
    "meaning": "日常的 (词汇 471)",
    "root": "root-471 (词根释义)",
    "example": "This is an example sentence for ZKWord471."
  },
  {
    "word": "ZKWord472",
    "phonetic": "/zkˈwɜːrd472/",
    "meaning": "学校 (词汇 472)",
    "root": "root-472 (词根释义)",
    "example": "This is an example sentence for ZKWord472."
  },
  {
    "word": "ZKWord473",
    "phonetic": "/zkˈwɜːrd473/",
    "meaning": "动物 (词汇 473)",
    "root": "root-473 (词根释义)",
    "example": "This is an example sentence for ZKWord473."
  },
  {
    "word": "ZKWord474",
    "phonetic": "/zkˈwɜːrd474/",
    "meaning": "植物 (词汇 474)",
    "root": "root-474 (词根释义)",
    "example": "This is an example sentence for ZKWord474."
  },
  {
    "word": "ZKWord475",
    "phonetic": "/zkˈwɜːrd475/",
    "meaning": "日常的 (词汇 475)",
    "root": "root-475 (词根释义)",
    "example": "This is an example sentence for ZKWord475."
  },
  {
    "word": "ZKWord476",
    "phonetic": "/zkˈwɜːrd476/",
    "meaning": "学习的 (词汇 476)",
    "root": "root-476 (词根释义)",
    "example": "This is an example sentence for ZKWord476."
  },
  {
    "word": "ZKWord477",
    "phonetic": "/zkˈwɜːrd477/",
    "meaning": "重要的 (词汇 477)",
    "root": "root-477 (词根释义)",
    "example": "This is an example sentence for ZKWord477."
  },
  {
    "word": "ZKWord478",
    "phonetic": "/zkˈwɜːrd478/",
    "meaning": "动物 (词汇 478)",
    "root": "root-478 (词根释义)",
    "example": "This is an example sentence for ZKWord478."
  },
  {
    "word": "ZKWord479",
    "phonetic": "/zkˈwɜːrd479/",
    "meaning": "重要的 (词汇 479)",
    "root": "root-479 (词根释义)",
    "example": "This is an example sentence for ZKWord479."
  },
  {
    "word": "ZKWord480",
    "phonetic": "/zkˈwɜːrd480/",
    "meaning": "学习的 (词汇 480)",
    "root": "root-480 (词根释义)",
    "example": "This is an example sentence for ZKWord480."
  },
  {
    "word": "ZKWord481",
    "phonetic": "/zkˈwɜːrd481/",
    "meaning": "植物 (词汇 481)",
    "root": "root-481 (词根释义)",
    "example": "This is an example sentence for ZKWord481."
  },
  {
    "word": "ZKWord482",
    "phonetic": "/zkˈwɜːrd482/",
    "meaning": "朋友 (词汇 482)",
    "root": "root-482 (词根释义)",
    "example": "This is an example sentence for ZKWord482."
  },
  {
    "word": "ZKWord483",
    "phonetic": "/zkˈwɜːrd483/",
    "meaning": "生活 (词汇 483)",
    "root": "root-483 (词根释义)",
    "example": "This is an example sentence for ZKWord483."
  },
  {
    "word": "ZKWord484",
    "phonetic": "/zkˈwɜːrd484/",
    "meaning": "植物 (词汇 484)",
    "root": "root-484 (词根释义)",
    "example": "This is an example sentence for ZKWord484."
  },
  {
    "word": "ZKWord485",
    "phonetic": "/zkˈwɜːrd485/",
    "meaning": "学校 (词汇 485)",
    "root": "root-485 (词根释义)",
    "example": "This is an example sentence for ZKWord485."
  },
  {
    "word": "ZKWord486",
    "phonetic": "/zkˈwɜːrd486/",
    "meaning": "学习的 (词汇 486)",
    "root": "root-486 (词根释义)",
    "example": "This is an example sentence for ZKWord486."
  },
  {
    "word": "ZKWord487",
    "phonetic": "/zkˈwɜːrd487/",
    "meaning": "朋友 (词汇 487)",
    "root": "root-487 (词根释义)",
    "example": "This is an example sentence for ZKWord487."
  },
  {
    "word": "ZKWord488",
    "phonetic": "/zkˈwɜːrd488/",
    "meaning": "学校 (词汇 488)",
    "root": "root-488 (词根释义)",
    "example": "This is an example sentence for ZKWord488."
  },
  {
    "word": "ZKWord489",
    "phonetic": "/zkˈwɜːrd489/",
    "meaning": "植物 (词汇 489)",
    "root": "root-489 (词根释义)",
    "example": "This is an example sentence for ZKWord489."
  },
  {
    "word": "ZKWord490",
    "phonetic": "/zkˈwɜːrd490/",
    "meaning": "日常的 (词汇 490)",
    "root": "root-490 (词根释义)",
    "example": "This is an example sentence for ZKWord490."
  },
  {
    "word": "ZKWord491",
    "phonetic": "/zkˈwɜːrd491/",
    "meaning": "重要的 (词汇 491)",
    "root": "root-491 (词根释义)",
    "example": "This is an example sentence for ZKWord491."
  },
  {
    "word": "ZKWord492",
    "phonetic": "/zkˈwɜːrd492/",
    "meaning": "朋友 (词汇 492)",
    "root": "root-492 (词根释义)",
    "example": "This is an example sentence for ZKWord492."
  },
  {
    "word": "ZKWord493",
    "phonetic": "/zkˈwɜːrd493/",
    "meaning": "学校 (词汇 493)",
    "root": "root-493 (词根释义)",
    "example": "This is an example sentence for ZKWord493."
  },
  {
    "word": "ZKWord494",
    "phonetic": "/zkˈwɜːrd494/",
    "meaning": "家庭 (词汇 494)",
    "root": "root-494 (词根释义)",
    "example": "This is an example sentence for ZKWord494."
  },
  {
    "word": "ZKWord495",
    "phonetic": "/zkˈwɜːrd495/",
    "meaning": "动物 (词汇 495)",
    "root": "root-495 (词根释义)",
    "example": "This is an example sentence for ZKWord495."
  },
  {
    "word": "ZKWord496",
    "phonetic": "/zkˈwɜːrd496/",
    "meaning": "重要的 (词汇 496)",
    "root": "root-496 (词根释义)",
    "example": "This is an example sentence for ZKWord496."
  },
  {
    "word": "ZKWord497",
    "phonetic": "/zkˈwɜːrd497/",
    "meaning": "朋友 (词汇 497)",
    "root": "root-497 (词根释义)",
    "example": "This is an example sentence for ZKWord497."
  },
  {
    "word": "ZKWord498",
    "phonetic": "/zkˈwɜːrd498/",
    "meaning": "动物 (词汇 498)",
    "root": "root-498 (词根释义)",
    "example": "This is an example sentence for ZKWord498."
  },
  {
    "word": "ZKWord499",
    "phonetic": "/zkˈwɜːrd499/",
    "meaning": "重要的 (词汇 499)",
    "root": "root-499 (词根释义)",
    "example": "This is an example sentence for ZKWord499."
  },
  {
    "word": "ZKWord500",
    "phonetic": "/zkˈwɜːrd500/",
    "meaning": "重要的 (词汇 500)",
    "root": "root-500 (词根释义)",
    "example": "This is an example sentence for ZKWord500."
  }
],
  'gaokao': [
  {
    "word": "GKWord1",
    "phonetic": "/gkˈwɜːrd1/",
    "meaning": "抽象的 (词汇 1)",
    "root": "root-1 (词根释义)",
    "example": "This is an example sentence for GKWord1."
  },
  {
    "word": "GKWord2",
    "phonetic": "/gkˈwɜːrd2/",
    "meaning": "社会 (词汇 2)",
    "root": "root-2 (词根释义)",
    "example": "This is an example sentence for GKWord2."
  },
  {
    "word": "GKWord3",
    "phonetic": "/gkˈwɜːrd3/",
    "meaning": "经济 (词汇 3)",
    "root": "root-3 (词根释义)",
    "example": "This is an example sentence for GKWord3."
  },
  {
    "word": "GKWord4",
    "phonetic": "/gkˈwɜːrd4/",
    "meaning": "政治 (词汇 4)",
    "root": "root-4 (词根释义)",
    "example": "This is an example sentence for GKWord4."
  },
  {
    "word": "GKWord5",
    "phonetic": "/gkˈwɜːrd5/",
    "meaning": "经济 (词汇 5)",
    "root": "root-5 (词根释义)",
    "example": "This is an example sentence for GKWord5."
  },
  {
    "word": "GKWord6",
    "phonetic": "/gkˈwɜːrd6/",
    "meaning": "政治 (词汇 6)",
    "root": "root-6 (词根释义)",
    "example": "This is an example sentence for GKWord6."
  },
  {
    "word": "GKWord7",
    "phonetic": "/gkˈwɜːrd7/",
    "meaning": "学术的 (词汇 7)",
    "root": "root-7 (词根释义)",
    "example": "This is an example sentence for GKWord7."
  },
  {
    "word": "GKWord8",
    "phonetic": "/gkˈwɜːrd8/",
    "meaning": "地理 (词汇 8)",
    "root": "root-8 (词根释义)",
    "example": "This is an example sentence for GKWord8."
  },
  {
    "word": "GKWord9",
    "phonetic": "/gkˈwɜːrd9/",
    "meaning": "抽象的 (词汇 9)",
    "root": "root-9 (词根释义)",
    "example": "This is an example sentence for GKWord9."
  },
  {
    "word": "GKWord10",
    "phonetic": "/gkˈwɜːrd10/",
    "meaning": "复杂的 (词汇 10)",
    "root": "root-10 (词根释义)",
    "example": "This is an example sentence for GKWord10."
  },
  {
    "word": "GKWord11",
    "phonetic": "/gkˈwɜːrd11/",
    "meaning": "历史 (词汇 11)",
    "root": "root-11 (词根释义)",
    "example": "This is an example sentence for GKWord11."
  },
  {
    "word": "GKWord12",
    "phonetic": "/gkˈwɜːrd12/",
    "meaning": "经济 (词汇 12)",
    "root": "root-12 (词根释义)",
    "example": "This is an example sentence for GKWord12."
  },
  {
    "word": "GKWord13",
    "phonetic": "/gkˈwɜːrd13/",
    "meaning": "抽象的 (词汇 13)",
    "root": "root-13 (词根释义)",
    "example": "This is an example sentence for GKWord13."
  },
  {
    "word": "GKWord14",
    "phonetic": "/gkˈwɜːrd14/",
    "meaning": "学术的 (词汇 14)",
    "root": "root-14 (词根释义)",
    "example": "This is an example sentence for GKWord14."
  },
  {
    "word": "GKWord15",
    "phonetic": "/gkˈwɜːrd15/",
    "meaning": "学术的 (词汇 15)",
    "root": "root-15 (词根释义)",
    "example": "This is an example sentence for GKWord15."
  },
  {
    "word": "GKWord16",
    "phonetic": "/gkˈwɜːrd16/",
    "meaning": "复杂的 (词汇 16)",
    "root": "root-16 (词根释义)",
    "example": "This is an example sentence for GKWord16."
  },
  {
    "word": "GKWord17",
    "phonetic": "/gkˈwɜːrd17/",
    "meaning": "社会 (词汇 17)",
    "root": "root-17 (词根释义)",
    "example": "This is an example sentence for GKWord17."
  },
  {
    "word": "GKWord18",
    "phonetic": "/gkˈwɜːrd18/",
    "meaning": "地理 (词汇 18)",
    "root": "root-18 (词根释义)",
    "example": "This is an example sentence for GKWord18."
  },
  {
    "word": "GKWord19",
    "phonetic": "/gkˈwɜːrd19/",
    "meaning": "抽象的 (词汇 19)",
    "root": "root-19 (词根释义)",
    "example": "This is an example sentence for GKWord19."
  },
  {
    "word": "GKWord20",
    "phonetic": "/gkˈwɜːrd20/",
    "meaning": "社会 (词汇 20)",
    "root": "root-20 (词根释义)",
    "example": "This is an example sentence for GKWord20."
  },
  {
    "word": "GKWord21",
    "phonetic": "/gkˈwɜːrd21/",
    "meaning": "抽象的 (词汇 21)",
    "root": "root-21 (词根释义)",
    "example": "This is an example sentence for GKWord21."
  },
  {
    "word": "GKWord22",
    "phonetic": "/gkˈwɜːrd22/",
    "meaning": "经济 (词汇 22)",
    "root": "root-22 (词根释义)",
    "example": "This is an example sentence for GKWord22."
  },
  {
    "word": "GKWord23",
    "phonetic": "/gkˈwɜːrd23/",
    "meaning": "政治 (词汇 23)",
    "root": "root-23 (词根释义)",
    "example": "This is an example sentence for GKWord23."
  },
  {
    "word": "GKWord24",
    "phonetic": "/gkˈwɜːrd24/",
    "meaning": "政治 (词汇 24)",
    "root": "root-24 (词根释义)",
    "example": "This is an example sentence for GKWord24."
  },
  {
    "word": "GKWord25",
    "phonetic": "/gkˈwɜːrd25/",
    "meaning": "复杂的 (词汇 25)",
    "root": "root-25 (词根释义)",
    "example": "This is an example sentence for GKWord25."
  },
  {
    "word": "GKWord26",
    "phonetic": "/gkˈwɜːrd26/",
    "meaning": "学术的 (词汇 26)",
    "root": "root-26 (词根释义)",
    "example": "This is an example sentence for GKWord26."
  },
  {
    "word": "GKWord27",
    "phonetic": "/gkˈwɜːrd27/",
    "meaning": "经济 (词汇 27)",
    "root": "root-27 (词根释义)",
    "example": "This is an example sentence for GKWord27."
  },
  {
    "word": "GKWord28",
    "phonetic": "/gkˈwɜːrd28/",
    "meaning": "复杂的 (词汇 28)",
    "root": "root-28 (词根释义)",
    "example": "This is an example sentence for GKWord28."
  },
  {
    "word": "GKWord29",
    "phonetic": "/gkˈwɜːrd29/",
    "meaning": "历史 (词汇 29)",
    "root": "root-29 (词根释义)",
    "example": "This is an example sentence for GKWord29."
  },
  {
    "word": "GKWord30",
    "phonetic": "/gkˈwɜːrd30/",
    "meaning": "抽象的 (词汇 30)",
    "root": "root-30 (词根释义)",
    "example": "This is an example sentence for GKWord30."
  },
  {
    "word": "GKWord31",
    "phonetic": "/gkˈwɜːrd31/",
    "meaning": "历史 (词汇 31)",
    "root": "root-31 (词根释义)",
    "example": "This is an example sentence for GKWord31."
  },
  {
    "word": "GKWord32",
    "phonetic": "/gkˈwɜːrd32/",
    "meaning": "社会 (词汇 32)",
    "root": "root-32 (词根释义)",
    "example": "This is an example sentence for GKWord32."
  },
  {
    "word": "GKWord33",
    "phonetic": "/gkˈwɜːrd33/",
    "meaning": "文学 (词汇 33)",
    "root": "root-33 (词根释义)",
    "example": "This is an example sentence for GKWord33."
  },
  {
    "word": "GKWord34",
    "phonetic": "/gkˈwɜːrd34/",
    "meaning": "学术的 (词汇 34)",
    "root": "root-34 (词根释义)",
    "example": "This is an example sentence for GKWord34."
  },
  {
    "word": "GKWord35",
    "phonetic": "/gkˈwɜːrd35/",
    "meaning": "经济 (词汇 35)",
    "root": "root-35 (词根释义)",
    "example": "This is an example sentence for GKWord35."
  },
  {
    "word": "GKWord36",
    "phonetic": "/gkˈwɜːrd36/",
    "meaning": "社会 (词汇 36)",
    "root": "root-36 (词根释义)",
    "example": "This is an example sentence for GKWord36."
  },
  {
    "word": "GKWord37",
    "phonetic": "/gkˈwɜːrd37/",
    "meaning": "抽象的 (词汇 37)",
    "root": "root-37 (词根释义)",
    "example": "This is an example sentence for GKWord37."
  },
  {
    "word": "GKWord38",
    "phonetic": "/gkˈwɜːrd38/",
    "meaning": "科学 (词汇 38)",
    "root": "root-38 (词根释义)",
    "example": "This is an example sentence for GKWord38."
  },
  {
    "word": "GKWord39",
    "phonetic": "/gkˈwɜːrd39/",
    "meaning": "复杂的 (词汇 39)",
    "root": "root-39 (词根释义)",
    "example": "This is an example sentence for GKWord39."
  },
  {
    "word": "GKWord40",
    "phonetic": "/gkˈwɜːrd40/",
    "meaning": "经济 (词汇 40)",
    "root": "root-40 (词根释义)",
    "example": "This is an example sentence for GKWord40."
  },
  {
    "word": "GKWord41",
    "phonetic": "/gkˈwɜːrd41/",
    "meaning": "抽象的 (词汇 41)",
    "root": "root-41 (词根释义)",
    "example": "This is an example sentence for GKWord41."
  },
  {
    "word": "GKWord42",
    "phonetic": "/gkˈwɜːrd42/",
    "meaning": "社会 (词汇 42)",
    "root": "root-42 (词根释义)",
    "example": "This is an example sentence for GKWord42."
  },
  {
    "word": "GKWord43",
    "phonetic": "/gkˈwɜːrd43/",
    "meaning": "历史 (词汇 43)",
    "root": "root-43 (词根释义)",
    "example": "This is an example sentence for GKWord43."
  },
  {
    "word": "GKWord44",
    "phonetic": "/gkˈwɜːrd44/",
    "meaning": "历史 (词汇 44)",
    "root": "root-44 (词根释义)",
    "example": "This is an example sentence for GKWord44."
  },
  {
    "word": "GKWord45",
    "phonetic": "/gkˈwɜːrd45/",
    "meaning": "地理 (词汇 45)",
    "root": "root-45 (词根释义)",
    "example": "This is an example sentence for GKWord45."
  },
  {
    "word": "GKWord46",
    "phonetic": "/gkˈwɜːrd46/",
    "meaning": "复杂的 (词汇 46)",
    "root": "root-46 (词根释义)",
    "example": "This is an example sentence for GKWord46."
  },
  {
    "word": "GKWord47",
    "phonetic": "/gkˈwɜːrd47/",
    "meaning": "学术的 (词汇 47)",
    "root": "root-47 (词根释义)",
    "example": "This is an example sentence for GKWord47."
  },
  {
    "word": "GKWord48",
    "phonetic": "/gkˈwɜːrd48/",
    "meaning": "学术的 (词汇 48)",
    "root": "root-48 (词根释义)",
    "example": "This is an example sentence for GKWord48."
  },
  {
    "word": "GKWord49",
    "phonetic": "/gkˈwɜːrd49/",
    "meaning": "政治 (词汇 49)",
    "root": "root-49 (词根释义)",
    "example": "This is an example sentence for GKWord49."
  },
  {
    "word": "GKWord50",
    "phonetic": "/gkˈwɜːrd50/",
    "meaning": "地理 (词汇 50)",
    "root": "root-50 (词根释义)",
    "example": "This is an example sentence for GKWord50."
  },
  {
    "word": "GKWord51",
    "phonetic": "/gkˈwɜːrd51/",
    "meaning": "学术的 (词汇 51)",
    "root": "root-51 (词根释义)",
    "example": "This is an example sentence for GKWord51."
  },
  {
    "word": "GKWord52",
    "phonetic": "/gkˈwɜːrd52/",
    "meaning": "文学 (词汇 52)",
    "root": "root-52 (词根释义)",
    "example": "This is an example sentence for GKWord52."
  },
  {
    "word": "GKWord53",
    "phonetic": "/gkˈwɜːrd53/",
    "meaning": "学术的 (词汇 53)",
    "root": "root-53 (词根释义)",
    "example": "This is an example sentence for GKWord53."
  },
  {
    "word": "GKWord54",
    "phonetic": "/gkˈwɜːrd54/",
    "meaning": "科学 (词汇 54)",
    "root": "root-54 (词根释义)",
    "example": "This is an example sentence for GKWord54."
  },
  {
    "word": "GKWord55",
    "phonetic": "/gkˈwɜːrd55/",
    "meaning": "科学 (词汇 55)",
    "root": "root-55 (词根释义)",
    "example": "This is an example sentence for GKWord55."
  },
  {
    "word": "GKWord56",
    "phonetic": "/gkˈwɜːrd56/",
    "meaning": "政治 (词汇 56)",
    "root": "root-56 (词根释义)",
    "example": "This is an example sentence for GKWord56."
  },
  {
    "word": "GKWord57",
    "phonetic": "/gkˈwɜːrd57/",
    "meaning": "历史 (词汇 57)",
    "root": "root-57 (词根释义)",
    "example": "This is an example sentence for GKWord57."
  },
  {
    "word": "GKWord58",
    "phonetic": "/gkˈwɜːrd58/",
    "meaning": "历史 (词汇 58)",
    "root": "root-58 (词根释义)",
    "example": "This is an example sentence for GKWord58."
  },
  {
    "word": "GKWord59",
    "phonetic": "/gkˈwɜːrd59/",
    "meaning": "社会 (词汇 59)",
    "root": "root-59 (词根释义)",
    "example": "This is an example sentence for GKWord59."
  },
  {
    "word": "GKWord60",
    "phonetic": "/gkˈwɜːrd60/",
    "meaning": "学术的 (词汇 60)",
    "root": "root-60 (词根释义)",
    "example": "This is an example sentence for GKWord60."
  },
  {
    "word": "GKWord61",
    "phonetic": "/gkˈwɜːrd61/",
    "meaning": "文学 (词汇 61)",
    "root": "root-61 (词根释义)",
    "example": "This is an example sentence for GKWord61."
  },
  {
    "word": "GKWord62",
    "phonetic": "/gkˈwɜːrd62/",
    "meaning": "政治 (词汇 62)",
    "root": "root-62 (词根释义)",
    "example": "This is an example sentence for GKWord62."
  },
  {
    "word": "GKWord63",
    "phonetic": "/gkˈwɜːrd63/",
    "meaning": "地理 (词汇 63)",
    "root": "root-63 (词根释义)",
    "example": "This is an example sentence for GKWord63."
  },
  {
    "word": "GKWord64",
    "phonetic": "/gkˈwɜːrd64/",
    "meaning": "抽象的 (词汇 64)",
    "root": "root-64 (词根释义)",
    "example": "This is an example sentence for GKWord64."
  },
  {
    "word": "GKWord65",
    "phonetic": "/gkˈwɜːrd65/",
    "meaning": "科学 (词汇 65)",
    "root": "root-65 (词根释义)",
    "example": "This is an example sentence for GKWord65."
  },
  {
    "word": "GKWord66",
    "phonetic": "/gkˈwɜːrd66/",
    "meaning": "社会 (词汇 66)",
    "root": "root-66 (词根释义)",
    "example": "This is an example sentence for GKWord66."
  },
  {
    "word": "GKWord67",
    "phonetic": "/gkˈwɜːrd67/",
    "meaning": "地理 (词汇 67)",
    "root": "root-67 (词根释义)",
    "example": "This is an example sentence for GKWord67."
  },
  {
    "word": "GKWord68",
    "phonetic": "/gkˈwɜːrd68/",
    "meaning": "复杂的 (词汇 68)",
    "root": "root-68 (词根释义)",
    "example": "This is an example sentence for GKWord68."
  },
  {
    "word": "GKWord69",
    "phonetic": "/gkˈwɜːrd69/",
    "meaning": "政治 (词汇 69)",
    "root": "root-69 (词根释义)",
    "example": "This is an example sentence for GKWord69."
  },
  {
    "word": "GKWord70",
    "phonetic": "/gkˈwɜːrd70/",
    "meaning": "文学 (词汇 70)",
    "root": "root-70 (词根释义)",
    "example": "This is an example sentence for GKWord70."
  },
  {
    "word": "GKWord71",
    "phonetic": "/gkˈwɜːrd71/",
    "meaning": "科学 (词汇 71)",
    "root": "root-71 (词根释义)",
    "example": "This is an example sentence for GKWord71."
  },
  {
    "word": "GKWord72",
    "phonetic": "/gkˈwɜːrd72/",
    "meaning": "学术的 (词汇 72)",
    "root": "root-72 (词根释义)",
    "example": "This is an example sentence for GKWord72."
  },
  {
    "word": "GKWord73",
    "phonetic": "/gkˈwɜːrd73/",
    "meaning": "科学 (词汇 73)",
    "root": "root-73 (词根释义)",
    "example": "This is an example sentence for GKWord73."
  },
  {
    "word": "GKWord74",
    "phonetic": "/gkˈwɜːrd74/",
    "meaning": "复杂的 (词汇 74)",
    "root": "root-74 (词根释义)",
    "example": "This is an example sentence for GKWord74."
  },
  {
    "word": "GKWord75",
    "phonetic": "/gkˈwɜːrd75/",
    "meaning": "经济 (词汇 75)",
    "root": "root-75 (词根释义)",
    "example": "This is an example sentence for GKWord75."
  },
  {
    "word": "GKWord76",
    "phonetic": "/gkˈwɜːrd76/",
    "meaning": "经济 (词汇 76)",
    "root": "root-76 (词根释义)",
    "example": "This is an example sentence for GKWord76."
  },
  {
    "word": "GKWord77",
    "phonetic": "/gkˈwɜːrd77/",
    "meaning": "文学 (词汇 77)",
    "root": "root-77 (词根释义)",
    "example": "This is an example sentence for GKWord77."
  },
  {
    "word": "GKWord78",
    "phonetic": "/gkˈwɜːrd78/",
    "meaning": "文学 (词汇 78)",
    "root": "root-78 (词根释义)",
    "example": "This is an example sentence for GKWord78."
  },
  {
    "word": "GKWord79",
    "phonetic": "/gkˈwɜːrd79/",
    "meaning": "科学 (词汇 79)",
    "root": "root-79 (词根释义)",
    "example": "This is an example sentence for GKWord79."
  },
  {
    "word": "GKWord80",
    "phonetic": "/gkˈwɜːrd80/",
    "meaning": "经济 (词汇 80)",
    "root": "root-80 (词根释义)",
    "example": "This is an example sentence for GKWord80."
  },
  {
    "word": "GKWord81",
    "phonetic": "/gkˈwɜːrd81/",
    "meaning": "地理 (词汇 81)",
    "root": "root-81 (词根释义)",
    "example": "This is an example sentence for GKWord81."
  },
  {
    "word": "GKWord82",
    "phonetic": "/gkˈwɜːrd82/",
    "meaning": "地理 (词汇 82)",
    "root": "root-82 (词根释义)",
    "example": "This is an example sentence for GKWord82."
  },
  {
    "word": "GKWord83",
    "phonetic": "/gkˈwɜːrd83/",
    "meaning": "政治 (词汇 83)",
    "root": "root-83 (词根释义)",
    "example": "This is an example sentence for GKWord83."
  },
  {
    "word": "GKWord84",
    "phonetic": "/gkˈwɜːrd84/",
    "meaning": "文学 (词汇 84)",
    "root": "root-84 (词根释义)",
    "example": "This is an example sentence for GKWord84."
  },
  {
    "word": "GKWord85",
    "phonetic": "/gkˈwɜːrd85/",
    "meaning": "文学 (词汇 85)",
    "root": "root-85 (词根释义)",
    "example": "This is an example sentence for GKWord85."
  },
  {
    "word": "GKWord86",
    "phonetic": "/gkˈwɜːrd86/",
    "meaning": "经济 (词汇 86)",
    "root": "root-86 (词根释义)",
    "example": "This is an example sentence for GKWord86."
  },
  {
    "word": "GKWord87",
    "phonetic": "/gkˈwɜːrd87/",
    "meaning": "复杂的 (词汇 87)",
    "root": "root-87 (词根释义)",
    "example": "This is an example sentence for GKWord87."
  },
  {
    "word": "GKWord88",
    "phonetic": "/gkˈwɜːrd88/",
    "meaning": "科学 (词汇 88)",
    "root": "root-88 (词根释义)",
    "example": "This is an example sentence for GKWord88."
  },
  {
    "word": "GKWord89",
    "phonetic": "/gkˈwɜːrd89/",
    "meaning": "文学 (词汇 89)",
    "root": "root-89 (词根释义)",
    "example": "This is an example sentence for GKWord89."
  },
  {
    "word": "GKWord90",
    "phonetic": "/gkˈwɜːrd90/",
    "meaning": "政治 (词汇 90)",
    "root": "root-90 (词根释义)",
    "example": "This is an example sentence for GKWord90."
  },
  {
    "word": "GKWord91",
    "phonetic": "/gkˈwɜːrd91/",
    "meaning": "科学 (词汇 91)",
    "root": "root-91 (词根释义)",
    "example": "This is an example sentence for GKWord91."
  },
  {
    "word": "GKWord92",
    "phonetic": "/gkˈwɜːrd92/",
    "meaning": "科学 (词汇 92)",
    "root": "root-92 (词根释义)",
    "example": "This is an example sentence for GKWord92."
  },
  {
    "word": "GKWord93",
    "phonetic": "/gkˈwɜːrd93/",
    "meaning": "地理 (词汇 93)",
    "root": "root-93 (词根释义)",
    "example": "This is an example sentence for GKWord93."
  },
  {
    "word": "GKWord94",
    "phonetic": "/gkˈwɜːrd94/",
    "meaning": "抽象的 (词汇 94)",
    "root": "root-94 (词根释义)",
    "example": "This is an example sentence for GKWord94."
  },
  {
    "word": "GKWord95",
    "phonetic": "/gkˈwɜːrd95/",
    "meaning": "科学 (词汇 95)",
    "root": "root-95 (词根释义)",
    "example": "This is an example sentence for GKWord95."
  },
  {
    "word": "GKWord96",
    "phonetic": "/gkˈwɜːrd96/",
    "meaning": "经济 (词汇 96)",
    "root": "root-96 (词根释义)",
    "example": "This is an example sentence for GKWord96."
  },
  {
    "word": "GKWord97",
    "phonetic": "/gkˈwɜːrd97/",
    "meaning": "复杂的 (词汇 97)",
    "root": "root-97 (词根释义)",
    "example": "This is an example sentence for GKWord97."
  },
  {
    "word": "GKWord98",
    "phonetic": "/gkˈwɜːrd98/",
    "meaning": "政治 (词汇 98)",
    "root": "root-98 (词根释义)",
    "example": "This is an example sentence for GKWord98."
  },
  {
    "word": "GKWord99",
    "phonetic": "/gkˈwɜːrd99/",
    "meaning": "学术的 (词汇 99)",
    "root": "root-99 (词根释义)",
    "example": "This is an example sentence for GKWord99."
  },
  {
    "word": "GKWord100",
    "phonetic": "/gkˈwɜːrd100/",
    "meaning": "经济 (词汇 100)",
    "root": "root-100 (词根释义)",
    "example": "This is an example sentence for GKWord100."
  },
  {
    "word": "GKWord101",
    "phonetic": "/gkˈwɜːrd101/",
    "meaning": "地理 (词汇 101)",
    "root": "root-101 (词根释义)",
    "example": "This is an example sentence for GKWord101."
  },
  {
    "word": "GKWord102",
    "phonetic": "/gkˈwɜːrd102/",
    "meaning": "历史 (词汇 102)",
    "root": "root-102 (词根释义)",
    "example": "This is an example sentence for GKWord102."
  },
  {
    "word": "GKWord103",
    "phonetic": "/gkˈwɜːrd103/",
    "meaning": "地理 (词汇 103)",
    "root": "root-103 (词根释义)",
    "example": "This is an example sentence for GKWord103."
  },
  {
    "word": "GKWord104",
    "phonetic": "/gkˈwɜːrd104/",
    "meaning": "历史 (词汇 104)",
    "root": "root-104 (词根释义)",
    "example": "This is an example sentence for GKWord104."
  },
  {
    "word": "GKWord105",
    "phonetic": "/gkˈwɜːrd105/",
    "meaning": "历史 (词汇 105)",
    "root": "root-105 (词根释义)",
    "example": "This is an example sentence for GKWord105."
  },
  {
    "word": "GKWord106",
    "phonetic": "/gkˈwɜːrd106/",
    "meaning": "抽象的 (词汇 106)",
    "root": "root-106 (词根释义)",
    "example": "This is an example sentence for GKWord106."
  },
  {
    "word": "GKWord107",
    "phonetic": "/gkˈwɜːrd107/",
    "meaning": "复杂的 (词汇 107)",
    "root": "root-107 (词根释义)",
    "example": "This is an example sentence for GKWord107."
  },
  {
    "word": "GKWord108",
    "phonetic": "/gkˈwɜːrd108/",
    "meaning": "抽象的 (词汇 108)",
    "root": "root-108 (词根释义)",
    "example": "This is an example sentence for GKWord108."
  },
  {
    "word": "GKWord109",
    "phonetic": "/gkˈwɜːrd109/",
    "meaning": "科学 (词汇 109)",
    "root": "root-109 (词根释义)",
    "example": "This is an example sentence for GKWord109."
  },
  {
    "word": "GKWord110",
    "phonetic": "/gkˈwɜːrd110/",
    "meaning": "社会 (词汇 110)",
    "root": "root-110 (词根释义)",
    "example": "This is an example sentence for GKWord110."
  },
  {
    "word": "GKWord111",
    "phonetic": "/gkˈwɜːrd111/",
    "meaning": "社会 (词汇 111)",
    "root": "root-111 (词根释义)",
    "example": "This is an example sentence for GKWord111."
  },
  {
    "word": "GKWord112",
    "phonetic": "/gkˈwɜːrd112/",
    "meaning": "地理 (词汇 112)",
    "root": "root-112 (词根释义)",
    "example": "This is an example sentence for GKWord112."
  },
  {
    "word": "GKWord113",
    "phonetic": "/gkˈwɜːrd113/",
    "meaning": "科学 (词汇 113)",
    "root": "root-113 (词根释义)",
    "example": "This is an example sentence for GKWord113."
  },
  {
    "word": "GKWord114",
    "phonetic": "/gkˈwɜːrd114/",
    "meaning": "政治 (词汇 114)",
    "root": "root-114 (词根释义)",
    "example": "This is an example sentence for GKWord114."
  },
  {
    "word": "GKWord115",
    "phonetic": "/gkˈwɜːrd115/",
    "meaning": "政治 (词汇 115)",
    "root": "root-115 (词根释义)",
    "example": "This is an example sentence for GKWord115."
  },
  {
    "word": "GKWord116",
    "phonetic": "/gkˈwɜːrd116/",
    "meaning": "学术的 (词汇 116)",
    "root": "root-116 (词根释义)",
    "example": "This is an example sentence for GKWord116."
  },
  {
    "word": "GKWord117",
    "phonetic": "/gkˈwɜːrd117/",
    "meaning": "科学 (词汇 117)",
    "root": "root-117 (词根释义)",
    "example": "This is an example sentence for GKWord117."
  },
  {
    "word": "GKWord118",
    "phonetic": "/gkˈwɜːrd118/",
    "meaning": "历史 (词汇 118)",
    "root": "root-118 (词根释义)",
    "example": "This is an example sentence for GKWord118."
  },
  {
    "word": "GKWord119",
    "phonetic": "/gkˈwɜːrd119/",
    "meaning": "复杂的 (词汇 119)",
    "root": "root-119 (词根释义)",
    "example": "This is an example sentence for GKWord119."
  },
  {
    "word": "GKWord120",
    "phonetic": "/gkˈwɜːrd120/",
    "meaning": "文学 (词汇 120)",
    "root": "root-120 (词根释义)",
    "example": "This is an example sentence for GKWord120."
  },
  {
    "word": "GKWord121",
    "phonetic": "/gkˈwɜːrd121/",
    "meaning": "社会 (词汇 121)",
    "root": "root-121 (词根释义)",
    "example": "This is an example sentence for GKWord121."
  },
  {
    "word": "GKWord122",
    "phonetic": "/gkˈwɜːrd122/",
    "meaning": "文学 (词汇 122)",
    "root": "root-122 (词根释义)",
    "example": "This is an example sentence for GKWord122."
  },
  {
    "word": "GKWord123",
    "phonetic": "/gkˈwɜːrd123/",
    "meaning": "抽象的 (词汇 123)",
    "root": "root-123 (词根释义)",
    "example": "This is an example sentence for GKWord123."
  },
  {
    "word": "GKWord124",
    "phonetic": "/gkˈwɜːrd124/",
    "meaning": "抽象的 (词汇 124)",
    "root": "root-124 (词根释义)",
    "example": "This is an example sentence for GKWord124."
  },
  {
    "word": "GKWord125",
    "phonetic": "/gkˈwɜːrd125/",
    "meaning": "地理 (词汇 125)",
    "root": "root-125 (词根释义)",
    "example": "This is an example sentence for GKWord125."
  },
  {
    "word": "GKWord126",
    "phonetic": "/gkˈwɜːrd126/",
    "meaning": "学术的 (词汇 126)",
    "root": "root-126 (词根释义)",
    "example": "This is an example sentence for GKWord126."
  },
  {
    "word": "GKWord127",
    "phonetic": "/gkˈwɜːrd127/",
    "meaning": "社会 (词汇 127)",
    "root": "root-127 (词根释义)",
    "example": "This is an example sentence for GKWord127."
  },
  {
    "word": "GKWord128",
    "phonetic": "/gkˈwɜːrd128/",
    "meaning": "经济 (词汇 128)",
    "root": "root-128 (词根释义)",
    "example": "This is an example sentence for GKWord128."
  },
  {
    "word": "GKWord129",
    "phonetic": "/gkˈwɜːrd129/",
    "meaning": "政治 (词汇 129)",
    "root": "root-129 (词根释义)",
    "example": "This is an example sentence for GKWord129."
  },
  {
    "word": "GKWord130",
    "phonetic": "/gkˈwɜːrd130/",
    "meaning": "地理 (词汇 130)",
    "root": "root-130 (词根释义)",
    "example": "This is an example sentence for GKWord130."
  },
  {
    "word": "GKWord131",
    "phonetic": "/gkˈwɜːrd131/",
    "meaning": "历史 (词汇 131)",
    "root": "root-131 (词根释义)",
    "example": "This is an example sentence for GKWord131."
  },
  {
    "word": "GKWord132",
    "phonetic": "/gkˈwɜːrd132/",
    "meaning": "经济 (词汇 132)",
    "root": "root-132 (词根释义)",
    "example": "This is an example sentence for GKWord132."
  },
  {
    "word": "GKWord133",
    "phonetic": "/gkˈwɜːrd133/",
    "meaning": "经济 (词汇 133)",
    "root": "root-133 (词根释义)",
    "example": "This is an example sentence for GKWord133."
  },
  {
    "word": "GKWord134",
    "phonetic": "/gkˈwɜːrd134/",
    "meaning": "社会 (词汇 134)",
    "root": "root-134 (词根释义)",
    "example": "This is an example sentence for GKWord134."
  },
  {
    "word": "GKWord135",
    "phonetic": "/gkˈwɜːrd135/",
    "meaning": "抽象的 (词汇 135)",
    "root": "root-135 (词根释义)",
    "example": "This is an example sentence for GKWord135."
  },
  {
    "word": "GKWord136",
    "phonetic": "/gkˈwɜːrd136/",
    "meaning": "经济 (词汇 136)",
    "root": "root-136 (词根释义)",
    "example": "This is an example sentence for GKWord136."
  },
  {
    "word": "GKWord137",
    "phonetic": "/gkˈwɜːrd137/",
    "meaning": "抽象的 (词汇 137)",
    "root": "root-137 (词根释义)",
    "example": "This is an example sentence for GKWord137."
  },
  {
    "word": "GKWord138",
    "phonetic": "/gkˈwɜːrd138/",
    "meaning": "科学 (词汇 138)",
    "root": "root-138 (词根释义)",
    "example": "This is an example sentence for GKWord138."
  },
  {
    "word": "GKWord139",
    "phonetic": "/gkˈwɜːrd139/",
    "meaning": "文学 (词汇 139)",
    "root": "root-139 (词根释义)",
    "example": "This is an example sentence for GKWord139."
  },
  {
    "word": "GKWord140",
    "phonetic": "/gkˈwɜːrd140/",
    "meaning": "历史 (词汇 140)",
    "root": "root-140 (词根释义)",
    "example": "This is an example sentence for GKWord140."
  },
  {
    "word": "GKWord141",
    "phonetic": "/gkˈwɜːrd141/",
    "meaning": "历史 (词汇 141)",
    "root": "root-141 (词根释义)",
    "example": "This is an example sentence for GKWord141."
  },
  {
    "word": "GKWord142",
    "phonetic": "/gkˈwɜːrd142/",
    "meaning": "科学 (词汇 142)",
    "root": "root-142 (词根释义)",
    "example": "This is an example sentence for GKWord142."
  },
  {
    "word": "GKWord143",
    "phonetic": "/gkˈwɜːrd143/",
    "meaning": "学术的 (词汇 143)",
    "root": "root-143 (词根释义)",
    "example": "This is an example sentence for GKWord143."
  },
  {
    "word": "GKWord144",
    "phonetic": "/gkˈwɜːrd144/",
    "meaning": "地理 (词汇 144)",
    "root": "root-144 (词根释义)",
    "example": "This is an example sentence for GKWord144."
  },
  {
    "word": "GKWord145",
    "phonetic": "/gkˈwɜːrd145/",
    "meaning": "复杂的 (词汇 145)",
    "root": "root-145 (词根释义)",
    "example": "This is an example sentence for GKWord145."
  },
  {
    "word": "GKWord146",
    "phonetic": "/gkˈwɜːrd146/",
    "meaning": "复杂的 (词汇 146)",
    "root": "root-146 (词根释义)",
    "example": "This is an example sentence for GKWord146."
  },
  {
    "word": "GKWord147",
    "phonetic": "/gkˈwɜːrd147/",
    "meaning": "科学 (词汇 147)",
    "root": "root-147 (词根释义)",
    "example": "This is an example sentence for GKWord147."
  },
  {
    "word": "GKWord148",
    "phonetic": "/gkˈwɜːrd148/",
    "meaning": "经济 (词汇 148)",
    "root": "root-148 (词根释义)",
    "example": "This is an example sentence for GKWord148."
  },
  {
    "word": "GKWord149",
    "phonetic": "/gkˈwɜːrd149/",
    "meaning": "复杂的 (词汇 149)",
    "root": "root-149 (词根释义)",
    "example": "This is an example sentence for GKWord149."
  },
  {
    "word": "GKWord150",
    "phonetic": "/gkˈwɜːrd150/",
    "meaning": "地理 (词汇 150)",
    "root": "root-150 (词根释义)",
    "example": "This is an example sentence for GKWord150."
  },
  {
    "word": "GKWord151",
    "phonetic": "/gkˈwɜːrd151/",
    "meaning": "政治 (词汇 151)",
    "root": "root-151 (词根释义)",
    "example": "This is an example sentence for GKWord151."
  },
  {
    "word": "GKWord152",
    "phonetic": "/gkˈwɜːrd152/",
    "meaning": "历史 (词汇 152)",
    "root": "root-152 (词根释义)",
    "example": "This is an example sentence for GKWord152."
  },
  {
    "word": "GKWord153",
    "phonetic": "/gkˈwɜːrd153/",
    "meaning": "复杂的 (词汇 153)",
    "root": "root-153 (词根释义)",
    "example": "This is an example sentence for GKWord153."
  },
  {
    "word": "GKWord154",
    "phonetic": "/gkˈwɜːrd154/",
    "meaning": "经济 (词汇 154)",
    "root": "root-154 (词根释义)",
    "example": "This is an example sentence for GKWord154."
  },
  {
    "word": "GKWord155",
    "phonetic": "/gkˈwɜːrd155/",
    "meaning": "政治 (词汇 155)",
    "root": "root-155 (词根释义)",
    "example": "This is an example sentence for GKWord155."
  },
  {
    "word": "GKWord156",
    "phonetic": "/gkˈwɜːrd156/",
    "meaning": "抽象的 (词汇 156)",
    "root": "root-156 (词根释义)",
    "example": "This is an example sentence for GKWord156."
  },
  {
    "word": "GKWord157",
    "phonetic": "/gkˈwɜːrd157/",
    "meaning": "政治 (词汇 157)",
    "root": "root-157 (词根释义)",
    "example": "This is an example sentence for GKWord157."
  },
  {
    "word": "GKWord158",
    "phonetic": "/gkˈwɜːrd158/",
    "meaning": "经济 (词汇 158)",
    "root": "root-158 (词根释义)",
    "example": "This is an example sentence for GKWord158."
  },
  {
    "word": "GKWord159",
    "phonetic": "/gkˈwɜːrd159/",
    "meaning": "复杂的 (词汇 159)",
    "root": "root-159 (词根释义)",
    "example": "This is an example sentence for GKWord159."
  },
  {
    "word": "GKWord160",
    "phonetic": "/gkˈwɜːrd160/",
    "meaning": "抽象的 (词汇 160)",
    "root": "root-160 (词根释义)",
    "example": "This is an example sentence for GKWord160."
  },
  {
    "word": "GKWord161",
    "phonetic": "/gkˈwɜːrd161/",
    "meaning": "抽象的 (词汇 161)",
    "root": "root-161 (词根释义)",
    "example": "This is an example sentence for GKWord161."
  },
  {
    "word": "GKWord162",
    "phonetic": "/gkˈwɜːrd162/",
    "meaning": "历史 (词汇 162)",
    "root": "root-162 (词根释义)",
    "example": "This is an example sentence for GKWord162."
  },
  {
    "word": "GKWord163",
    "phonetic": "/gkˈwɜːrd163/",
    "meaning": "地理 (词汇 163)",
    "root": "root-163 (词根释义)",
    "example": "This is an example sentence for GKWord163."
  },
  {
    "word": "GKWord164",
    "phonetic": "/gkˈwɜːrd164/",
    "meaning": "科学 (词汇 164)",
    "root": "root-164 (词根释义)",
    "example": "This is an example sentence for GKWord164."
  },
  {
    "word": "GKWord165",
    "phonetic": "/gkˈwɜːrd165/",
    "meaning": "政治 (词汇 165)",
    "root": "root-165 (词根释义)",
    "example": "This is an example sentence for GKWord165."
  },
  {
    "word": "GKWord166",
    "phonetic": "/gkˈwɜːrd166/",
    "meaning": "抽象的 (词汇 166)",
    "root": "root-166 (词根释义)",
    "example": "This is an example sentence for GKWord166."
  },
  {
    "word": "GKWord167",
    "phonetic": "/gkˈwɜːrd167/",
    "meaning": "抽象的 (词汇 167)",
    "root": "root-167 (词根释义)",
    "example": "This is an example sentence for GKWord167."
  },
  {
    "word": "GKWord168",
    "phonetic": "/gkˈwɜːrd168/",
    "meaning": "学术的 (词汇 168)",
    "root": "root-168 (词根释义)",
    "example": "This is an example sentence for GKWord168."
  },
  {
    "word": "GKWord169",
    "phonetic": "/gkˈwɜːrd169/",
    "meaning": "历史 (词汇 169)",
    "root": "root-169 (词根释义)",
    "example": "This is an example sentence for GKWord169."
  },
  {
    "word": "GKWord170",
    "phonetic": "/gkˈwɜːrd170/",
    "meaning": "科学 (词汇 170)",
    "root": "root-170 (词根释义)",
    "example": "This is an example sentence for GKWord170."
  },
  {
    "word": "GKWord171",
    "phonetic": "/gkˈwɜːrd171/",
    "meaning": "经济 (词汇 171)",
    "root": "root-171 (词根释义)",
    "example": "This is an example sentence for GKWord171."
  },
  {
    "word": "GKWord172",
    "phonetic": "/gkˈwɜːrd172/",
    "meaning": "科学 (词汇 172)",
    "root": "root-172 (词根释义)",
    "example": "This is an example sentence for GKWord172."
  },
  {
    "word": "GKWord173",
    "phonetic": "/gkˈwɜːrd173/",
    "meaning": "历史 (词汇 173)",
    "root": "root-173 (词根释义)",
    "example": "This is an example sentence for GKWord173."
  },
  {
    "word": "GKWord174",
    "phonetic": "/gkˈwɜːrd174/",
    "meaning": "复杂的 (词汇 174)",
    "root": "root-174 (词根释义)",
    "example": "This is an example sentence for GKWord174."
  },
  {
    "word": "GKWord175",
    "phonetic": "/gkˈwɜːrd175/",
    "meaning": "社会 (词汇 175)",
    "root": "root-175 (词根释义)",
    "example": "This is an example sentence for GKWord175."
  },
  {
    "word": "GKWord176",
    "phonetic": "/gkˈwɜːrd176/",
    "meaning": "文学 (词汇 176)",
    "root": "root-176 (词根释义)",
    "example": "This is an example sentence for GKWord176."
  },
  {
    "word": "GKWord177",
    "phonetic": "/gkˈwɜːrd177/",
    "meaning": "学术的 (词汇 177)",
    "root": "root-177 (词根释义)",
    "example": "This is an example sentence for GKWord177."
  },
  {
    "word": "GKWord178",
    "phonetic": "/gkˈwɜːrd178/",
    "meaning": "学术的 (词汇 178)",
    "root": "root-178 (词根释义)",
    "example": "This is an example sentence for GKWord178."
  },
  {
    "word": "GKWord179",
    "phonetic": "/gkˈwɜːrd179/",
    "meaning": "学术的 (词汇 179)",
    "root": "root-179 (词根释义)",
    "example": "This is an example sentence for GKWord179."
  },
  {
    "word": "GKWord180",
    "phonetic": "/gkˈwɜːrd180/",
    "meaning": "文学 (词汇 180)",
    "root": "root-180 (词根释义)",
    "example": "This is an example sentence for GKWord180."
  },
  {
    "word": "GKWord181",
    "phonetic": "/gkˈwɜːrd181/",
    "meaning": "政治 (词汇 181)",
    "root": "root-181 (词根释义)",
    "example": "This is an example sentence for GKWord181."
  },
  {
    "word": "GKWord182",
    "phonetic": "/gkˈwɜːrd182/",
    "meaning": "学术的 (词汇 182)",
    "root": "root-182 (词根释义)",
    "example": "This is an example sentence for GKWord182."
  },
  {
    "word": "GKWord183",
    "phonetic": "/gkˈwɜːrd183/",
    "meaning": "社会 (词汇 183)",
    "root": "root-183 (词根释义)",
    "example": "This is an example sentence for GKWord183."
  },
  {
    "word": "GKWord184",
    "phonetic": "/gkˈwɜːrd184/",
    "meaning": "学术的 (词汇 184)",
    "root": "root-184 (词根释义)",
    "example": "This is an example sentence for GKWord184."
  },
  {
    "word": "GKWord185",
    "phonetic": "/gkˈwɜːrd185/",
    "meaning": "文学 (词汇 185)",
    "root": "root-185 (词根释义)",
    "example": "This is an example sentence for GKWord185."
  },
  {
    "word": "GKWord186",
    "phonetic": "/gkˈwɜːrd186/",
    "meaning": "抽象的 (词汇 186)",
    "root": "root-186 (词根释义)",
    "example": "This is an example sentence for GKWord186."
  },
  {
    "word": "GKWord187",
    "phonetic": "/gkˈwɜːrd187/",
    "meaning": "经济 (词汇 187)",
    "root": "root-187 (词根释义)",
    "example": "This is an example sentence for GKWord187."
  },
  {
    "word": "GKWord188",
    "phonetic": "/gkˈwɜːrd188/",
    "meaning": "抽象的 (词汇 188)",
    "root": "root-188 (词根释义)",
    "example": "This is an example sentence for GKWord188."
  },
  {
    "word": "GKWord189",
    "phonetic": "/gkˈwɜːrd189/",
    "meaning": "复杂的 (词汇 189)",
    "root": "root-189 (词根释义)",
    "example": "This is an example sentence for GKWord189."
  },
  {
    "word": "GKWord190",
    "phonetic": "/gkˈwɜːrd190/",
    "meaning": "历史 (词汇 190)",
    "root": "root-190 (词根释义)",
    "example": "This is an example sentence for GKWord190."
  },
  {
    "word": "GKWord191",
    "phonetic": "/gkˈwɜːrd191/",
    "meaning": "地理 (词汇 191)",
    "root": "root-191 (词根释义)",
    "example": "This is an example sentence for GKWord191."
  },
  {
    "word": "GKWord192",
    "phonetic": "/gkˈwɜːrd192/",
    "meaning": "政治 (词汇 192)",
    "root": "root-192 (词根释义)",
    "example": "This is an example sentence for GKWord192."
  },
  {
    "word": "GKWord193",
    "phonetic": "/gkˈwɜːrd193/",
    "meaning": "复杂的 (词汇 193)",
    "root": "root-193 (词根释义)",
    "example": "This is an example sentence for GKWord193."
  },
  {
    "word": "GKWord194",
    "phonetic": "/gkˈwɜːrd194/",
    "meaning": "经济 (词汇 194)",
    "root": "root-194 (词根释义)",
    "example": "This is an example sentence for GKWord194."
  },
  {
    "word": "GKWord195",
    "phonetic": "/gkˈwɜːrd195/",
    "meaning": "社会 (词汇 195)",
    "root": "root-195 (词根释义)",
    "example": "This is an example sentence for GKWord195."
  },
  {
    "word": "GKWord196",
    "phonetic": "/gkˈwɜːrd196/",
    "meaning": "复杂的 (词汇 196)",
    "root": "root-196 (词根释义)",
    "example": "This is an example sentence for GKWord196."
  },
  {
    "word": "GKWord197",
    "phonetic": "/gkˈwɜːrd197/",
    "meaning": "复杂的 (词汇 197)",
    "root": "root-197 (词根释义)",
    "example": "This is an example sentence for GKWord197."
  },
  {
    "word": "GKWord198",
    "phonetic": "/gkˈwɜːrd198/",
    "meaning": "科学 (词汇 198)",
    "root": "root-198 (词根释义)",
    "example": "This is an example sentence for GKWord198."
  },
  {
    "word": "GKWord199",
    "phonetic": "/gkˈwɜːrd199/",
    "meaning": "学术的 (词汇 199)",
    "root": "root-199 (词根释义)",
    "example": "This is an example sentence for GKWord199."
  },
  {
    "word": "GKWord200",
    "phonetic": "/gkˈwɜːrd200/",
    "meaning": "社会 (词汇 200)",
    "root": "root-200 (词根释义)",
    "example": "This is an example sentence for GKWord200."
  },
  {
    "word": "GKWord201",
    "phonetic": "/gkˈwɜːrd201/",
    "meaning": "抽象的 (词汇 201)",
    "root": "root-201 (词根释义)",
    "example": "This is an example sentence for GKWord201."
  },
  {
    "word": "GKWord202",
    "phonetic": "/gkˈwɜːrd202/",
    "meaning": "文学 (词汇 202)",
    "root": "root-202 (词根释义)",
    "example": "This is an example sentence for GKWord202."
  },
  {
    "word": "GKWord203",
    "phonetic": "/gkˈwɜːrd203/",
    "meaning": "社会 (词汇 203)",
    "root": "root-203 (词根释义)",
    "example": "This is an example sentence for GKWord203."
  },
  {
    "word": "GKWord204",
    "phonetic": "/gkˈwɜːrd204/",
    "meaning": "地理 (词汇 204)",
    "root": "root-204 (词根释义)",
    "example": "This is an example sentence for GKWord204."
  },
  {
    "word": "GKWord205",
    "phonetic": "/gkˈwɜːrd205/",
    "meaning": "复杂的 (词汇 205)",
    "root": "root-205 (词根释义)",
    "example": "This is an example sentence for GKWord205."
  },
  {
    "word": "GKWord206",
    "phonetic": "/gkˈwɜːrd206/",
    "meaning": "学术的 (词汇 206)",
    "root": "root-206 (词根释义)",
    "example": "This is an example sentence for GKWord206."
  },
  {
    "word": "GKWord207",
    "phonetic": "/gkˈwɜːrd207/",
    "meaning": "抽象的 (词汇 207)",
    "root": "root-207 (词根释义)",
    "example": "This is an example sentence for GKWord207."
  },
  {
    "word": "GKWord208",
    "phonetic": "/gkˈwɜːrd208/",
    "meaning": "政治 (词汇 208)",
    "root": "root-208 (词根释义)",
    "example": "This is an example sentence for GKWord208."
  },
  {
    "word": "GKWord209",
    "phonetic": "/gkˈwɜːrd209/",
    "meaning": "社会 (词汇 209)",
    "root": "root-209 (词根释义)",
    "example": "This is an example sentence for GKWord209."
  },
  {
    "word": "GKWord210",
    "phonetic": "/gkˈwɜːrd210/",
    "meaning": "学术的 (词汇 210)",
    "root": "root-210 (词根释义)",
    "example": "This is an example sentence for GKWord210."
  },
  {
    "word": "GKWord211",
    "phonetic": "/gkˈwɜːrd211/",
    "meaning": "社会 (词汇 211)",
    "root": "root-211 (词根释义)",
    "example": "This is an example sentence for GKWord211."
  },
  {
    "word": "GKWord212",
    "phonetic": "/gkˈwɜːrd212/",
    "meaning": "经济 (词汇 212)",
    "root": "root-212 (词根释义)",
    "example": "This is an example sentence for GKWord212."
  },
  {
    "word": "GKWord213",
    "phonetic": "/gkˈwɜːrd213/",
    "meaning": "抽象的 (词汇 213)",
    "root": "root-213 (词根释义)",
    "example": "This is an example sentence for GKWord213."
  },
  {
    "word": "GKWord214",
    "phonetic": "/gkˈwɜːrd214/",
    "meaning": "地理 (词汇 214)",
    "root": "root-214 (词根释义)",
    "example": "This is an example sentence for GKWord214."
  },
  {
    "word": "GKWord215",
    "phonetic": "/gkˈwɜːrd215/",
    "meaning": "学术的 (词汇 215)",
    "root": "root-215 (词根释义)",
    "example": "This is an example sentence for GKWord215."
  },
  {
    "word": "GKWord216",
    "phonetic": "/gkˈwɜːrd216/",
    "meaning": "学术的 (词汇 216)",
    "root": "root-216 (词根释义)",
    "example": "This is an example sentence for GKWord216."
  },
  {
    "word": "GKWord217",
    "phonetic": "/gkˈwɜːrd217/",
    "meaning": "政治 (词汇 217)",
    "root": "root-217 (词根释义)",
    "example": "This is an example sentence for GKWord217."
  },
  {
    "word": "GKWord218",
    "phonetic": "/gkˈwɜːrd218/",
    "meaning": "社会 (词汇 218)",
    "root": "root-218 (词根释义)",
    "example": "This is an example sentence for GKWord218."
  },
  {
    "word": "GKWord219",
    "phonetic": "/gkˈwɜːrd219/",
    "meaning": "学术的 (词汇 219)",
    "root": "root-219 (词根释义)",
    "example": "This is an example sentence for GKWord219."
  },
  {
    "word": "GKWord220",
    "phonetic": "/gkˈwɜːrd220/",
    "meaning": "经济 (词汇 220)",
    "root": "root-220 (词根释义)",
    "example": "This is an example sentence for GKWord220."
  },
  {
    "word": "GKWord221",
    "phonetic": "/gkˈwɜːrd221/",
    "meaning": "政治 (词汇 221)",
    "root": "root-221 (词根释义)",
    "example": "This is an example sentence for GKWord221."
  },
  {
    "word": "GKWord222",
    "phonetic": "/gkˈwɜːrd222/",
    "meaning": "历史 (词汇 222)",
    "root": "root-222 (词根释义)",
    "example": "This is an example sentence for GKWord222."
  },
  {
    "word": "GKWord223",
    "phonetic": "/gkˈwɜːrd223/",
    "meaning": "复杂的 (词汇 223)",
    "root": "root-223 (词根释义)",
    "example": "This is an example sentence for GKWord223."
  },
  {
    "word": "GKWord224",
    "phonetic": "/gkˈwɜːrd224/",
    "meaning": "政治 (词汇 224)",
    "root": "root-224 (词根释义)",
    "example": "This is an example sentence for GKWord224."
  },
  {
    "word": "GKWord225",
    "phonetic": "/gkˈwɜːrd225/",
    "meaning": "复杂的 (词汇 225)",
    "root": "root-225 (词根释义)",
    "example": "This is an example sentence for GKWord225."
  },
  {
    "word": "GKWord226",
    "phonetic": "/gkˈwɜːrd226/",
    "meaning": "社会 (词汇 226)",
    "root": "root-226 (词根释义)",
    "example": "This is an example sentence for GKWord226."
  },
  {
    "word": "GKWord227",
    "phonetic": "/gkˈwɜːrd227/",
    "meaning": "复杂的 (词汇 227)",
    "root": "root-227 (词根释义)",
    "example": "This is an example sentence for GKWord227."
  },
  {
    "word": "GKWord228",
    "phonetic": "/gkˈwɜːrd228/",
    "meaning": "文学 (词汇 228)",
    "root": "root-228 (词根释义)",
    "example": "This is an example sentence for GKWord228."
  },
  {
    "word": "GKWord229",
    "phonetic": "/gkˈwɜːrd229/",
    "meaning": "科学 (词汇 229)",
    "root": "root-229 (词根释义)",
    "example": "This is an example sentence for GKWord229."
  },
  {
    "word": "GKWord230",
    "phonetic": "/gkˈwɜːrd230/",
    "meaning": "地理 (词汇 230)",
    "root": "root-230 (词根释义)",
    "example": "This is an example sentence for GKWord230."
  },
  {
    "word": "GKWord231",
    "phonetic": "/gkˈwɜːrd231/",
    "meaning": "科学 (词汇 231)",
    "root": "root-231 (词根释义)",
    "example": "This is an example sentence for GKWord231."
  },
  {
    "word": "GKWord232",
    "phonetic": "/gkˈwɜːrd232/",
    "meaning": "文学 (词汇 232)",
    "root": "root-232 (词根释义)",
    "example": "This is an example sentence for GKWord232."
  },
  {
    "word": "GKWord233",
    "phonetic": "/gkˈwɜːrd233/",
    "meaning": "经济 (词汇 233)",
    "root": "root-233 (词根释义)",
    "example": "This is an example sentence for GKWord233."
  },
  {
    "word": "GKWord234",
    "phonetic": "/gkˈwɜːrd234/",
    "meaning": "历史 (词汇 234)",
    "root": "root-234 (词根释义)",
    "example": "This is an example sentence for GKWord234."
  },
  {
    "word": "GKWord235",
    "phonetic": "/gkˈwɜːrd235/",
    "meaning": "经济 (词汇 235)",
    "root": "root-235 (词根释义)",
    "example": "This is an example sentence for GKWord235."
  },
  {
    "word": "GKWord236",
    "phonetic": "/gkˈwɜːrd236/",
    "meaning": "科学 (词汇 236)",
    "root": "root-236 (词根释义)",
    "example": "This is an example sentence for GKWord236."
  },
  {
    "word": "GKWord237",
    "phonetic": "/gkˈwɜːrd237/",
    "meaning": "经济 (词汇 237)",
    "root": "root-237 (词根释义)",
    "example": "This is an example sentence for GKWord237."
  },
  {
    "word": "GKWord238",
    "phonetic": "/gkˈwɜːrd238/",
    "meaning": "地理 (词汇 238)",
    "root": "root-238 (词根释义)",
    "example": "This is an example sentence for GKWord238."
  },
  {
    "word": "GKWord239",
    "phonetic": "/gkˈwɜːrd239/",
    "meaning": "复杂的 (词汇 239)",
    "root": "root-239 (词根释义)",
    "example": "This is an example sentence for GKWord239."
  },
  {
    "word": "GKWord240",
    "phonetic": "/gkˈwɜːrd240/",
    "meaning": "复杂的 (词汇 240)",
    "root": "root-240 (词根释义)",
    "example": "This is an example sentence for GKWord240."
  },
  {
    "word": "GKWord241",
    "phonetic": "/gkˈwɜːrd241/",
    "meaning": "科学 (词汇 241)",
    "root": "root-241 (词根释义)",
    "example": "This is an example sentence for GKWord241."
  },
  {
    "word": "GKWord242",
    "phonetic": "/gkˈwɜːrd242/",
    "meaning": "社会 (词汇 242)",
    "root": "root-242 (词根释义)",
    "example": "This is an example sentence for GKWord242."
  },
  {
    "word": "GKWord243",
    "phonetic": "/gkˈwɜːrd243/",
    "meaning": "社会 (词汇 243)",
    "root": "root-243 (词根释义)",
    "example": "This is an example sentence for GKWord243."
  },
  {
    "word": "GKWord244",
    "phonetic": "/gkˈwɜːrd244/",
    "meaning": "地理 (词汇 244)",
    "root": "root-244 (词根释义)",
    "example": "This is an example sentence for GKWord244."
  },
  {
    "word": "GKWord245",
    "phonetic": "/gkˈwɜːrd245/",
    "meaning": "抽象的 (词汇 245)",
    "root": "root-245 (词根释义)",
    "example": "This is an example sentence for GKWord245."
  },
  {
    "word": "GKWord246",
    "phonetic": "/gkˈwɜːrd246/",
    "meaning": "科学 (词汇 246)",
    "root": "root-246 (词根释义)",
    "example": "This is an example sentence for GKWord246."
  },
  {
    "word": "GKWord247",
    "phonetic": "/gkˈwɜːrd247/",
    "meaning": "科学 (词汇 247)",
    "root": "root-247 (词根释义)",
    "example": "This is an example sentence for GKWord247."
  },
  {
    "word": "GKWord248",
    "phonetic": "/gkˈwɜːrd248/",
    "meaning": "抽象的 (词汇 248)",
    "root": "root-248 (词根释义)",
    "example": "This is an example sentence for GKWord248."
  },
  {
    "word": "GKWord249",
    "phonetic": "/gkˈwɜːrd249/",
    "meaning": "抽象的 (词汇 249)",
    "root": "root-249 (词根释义)",
    "example": "This is an example sentence for GKWord249."
  },
  {
    "word": "GKWord250",
    "phonetic": "/gkˈwɜːrd250/",
    "meaning": "文学 (词汇 250)",
    "root": "root-250 (词根释义)",
    "example": "This is an example sentence for GKWord250."
  },
  {
    "word": "GKWord251",
    "phonetic": "/gkˈwɜːrd251/",
    "meaning": "政治 (词汇 251)",
    "root": "root-251 (词根释义)",
    "example": "This is an example sentence for GKWord251."
  },
  {
    "word": "GKWord252",
    "phonetic": "/gkˈwɜːrd252/",
    "meaning": "文学 (词汇 252)",
    "root": "root-252 (词根释义)",
    "example": "This is an example sentence for GKWord252."
  },
  {
    "word": "GKWord253",
    "phonetic": "/gkˈwɜːrd253/",
    "meaning": "抽象的 (词汇 253)",
    "root": "root-253 (词根释义)",
    "example": "This is an example sentence for GKWord253."
  },
  {
    "word": "GKWord254",
    "phonetic": "/gkˈwɜːrd254/",
    "meaning": "文学 (词汇 254)",
    "root": "root-254 (词根释义)",
    "example": "This is an example sentence for GKWord254."
  },
  {
    "word": "GKWord255",
    "phonetic": "/gkˈwɜːrd255/",
    "meaning": "历史 (词汇 255)",
    "root": "root-255 (词根释义)",
    "example": "This is an example sentence for GKWord255."
  },
  {
    "word": "GKWord256",
    "phonetic": "/gkˈwɜːrd256/",
    "meaning": "经济 (词汇 256)",
    "root": "root-256 (词根释义)",
    "example": "This is an example sentence for GKWord256."
  },
  {
    "word": "GKWord257",
    "phonetic": "/gkˈwɜːrd257/",
    "meaning": "政治 (词汇 257)",
    "root": "root-257 (词根释义)",
    "example": "This is an example sentence for GKWord257."
  },
  {
    "word": "GKWord258",
    "phonetic": "/gkˈwɜːrd258/",
    "meaning": "地理 (词汇 258)",
    "root": "root-258 (词根释义)",
    "example": "This is an example sentence for GKWord258."
  },
  {
    "word": "GKWord259",
    "phonetic": "/gkˈwɜːrd259/",
    "meaning": "抽象的 (词汇 259)",
    "root": "root-259 (词根释义)",
    "example": "This is an example sentence for GKWord259."
  },
  {
    "word": "GKWord260",
    "phonetic": "/gkˈwɜːrd260/",
    "meaning": "文学 (词汇 260)",
    "root": "root-260 (词根释义)",
    "example": "This is an example sentence for GKWord260."
  },
  {
    "word": "GKWord261",
    "phonetic": "/gkˈwɜːrd261/",
    "meaning": "学术的 (词汇 261)",
    "root": "root-261 (词根释义)",
    "example": "This is an example sentence for GKWord261."
  },
  {
    "word": "GKWord262",
    "phonetic": "/gkˈwɜːrd262/",
    "meaning": "学术的 (词汇 262)",
    "root": "root-262 (词根释义)",
    "example": "This is an example sentence for GKWord262."
  },
  {
    "word": "GKWord263",
    "phonetic": "/gkˈwɜːrd263/",
    "meaning": "地理 (词汇 263)",
    "root": "root-263 (词根释义)",
    "example": "This is an example sentence for GKWord263."
  },
  {
    "word": "GKWord264",
    "phonetic": "/gkˈwɜːrd264/",
    "meaning": "复杂的 (词汇 264)",
    "root": "root-264 (词根释义)",
    "example": "This is an example sentence for GKWord264."
  },
  {
    "word": "GKWord265",
    "phonetic": "/gkˈwɜːrd265/",
    "meaning": "经济 (词汇 265)",
    "root": "root-265 (词根释义)",
    "example": "This is an example sentence for GKWord265."
  },
  {
    "word": "GKWord266",
    "phonetic": "/gkˈwɜːrd266/",
    "meaning": "历史 (词汇 266)",
    "root": "root-266 (词根释义)",
    "example": "This is an example sentence for GKWord266."
  },
  {
    "word": "GKWord267",
    "phonetic": "/gkˈwɜːrd267/",
    "meaning": "历史 (词汇 267)",
    "root": "root-267 (词根释义)",
    "example": "This is an example sentence for GKWord267."
  },
  {
    "word": "GKWord268",
    "phonetic": "/gkˈwɜːrd268/",
    "meaning": "地理 (词汇 268)",
    "root": "root-268 (词根释义)",
    "example": "This is an example sentence for GKWord268."
  },
  {
    "word": "GKWord269",
    "phonetic": "/gkˈwɜːrd269/",
    "meaning": "文学 (词汇 269)",
    "root": "root-269 (词根释义)",
    "example": "This is an example sentence for GKWord269."
  },
  {
    "word": "GKWord270",
    "phonetic": "/gkˈwɜːrd270/",
    "meaning": "科学 (词汇 270)",
    "root": "root-270 (词根释义)",
    "example": "This is an example sentence for GKWord270."
  },
  {
    "word": "GKWord271",
    "phonetic": "/gkˈwɜːrd271/",
    "meaning": "经济 (词汇 271)",
    "root": "root-271 (词根释义)",
    "example": "This is an example sentence for GKWord271."
  },
  {
    "word": "GKWord272",
    "phonetic": "/gkˈwɜːrd272/",
    "meaning": "地理 (词汇 272)",
    "root": "root-272 (词根释义)",
    "example": "This is an example sentence for GKWord272."
  },
  {
    "word": "GKWord273",
    "phonetic": "/gkˈwɜːrd273/",
    "meaning": "科学 (词汇 273)",
    "root": "root-273 (词根释义)",
    "example": "This is an example sentence for GKWord273."
  },
  {
    "word": "GKWord274",
    "phonetic": "/gkˈwɜːrd274/",
    "meaning": "文学 (词汇 274)",
    "root": "root-274 (词根释义)",
    "example": "This is an example sentence for GKWord274."
  },
  {
    "word": "GKWord275",
    "phonetic": "/gkˈwɜːrd275/",
    "meaning": "政治 (词汇 275)",
    "root": "root-275 (词根释义)",
    "example": "This is an example sentence for GKWord275."
  },
  {
    "word": "GKWord276",
    "phonetic": "/gkˈwɜːrd276/",
    "meaning": "抽象的 (词汇 276)",
    "root": "root-276 (词根释义)",
    "example": "This is an example sentence for GKWord276."
  },
  {
    "word": "GKWord277",
    "phonetic": "/gkˈwɜːrd277/",
    "meaning": "历史 (词汇 277)",
    "root": "root-277 (词根释义)",
    "example": "This is an example sentence for GKWord277."
  },
  {
    "word": "GKWord278",
    "phonetic": "/gkˈwɜːrd278/",
    "meaning": "复杂的 (词汇 278)",
    "root": "root-278 (词根释义)",
    "example": "This is an example sentence for GKWord278."
  },
  {
    "word": "GKWord279",
    "phonetic": "/gkˈwɜːrd279/",
    "meaning": "科学 (词汇 279)",
    "root": "root-279 (词根释义)",
    "example": "This is an example sentence for GKWord279."
  },
  {
    "word": "GKWord280",
    "phonetic": "/gkˈwɜːrd280/",
    "meaning": "政治 (词汇 280)",
    "root": "root-280 (词根释义)",
    "example": "This is an example sentence for GKWord280."
  },
  {
    "word": "GKWord281",
    "phonetic": "/gkˈwɜːrd281/",
    "meaning": "学术的 (词汇 281)",
    "root": "root-281 (词根释义)",
    "example": "This is an example sentence for GKWord281."
  },
  {
    "word": "GKWord282",
    "phonetic": "/gkˈwɜːrd282/",
    "meaning": "历史 (词汇 282)",
    "root": "root-282 (词根释义)",
    "example": "This is an example sentence for GKWord282."
  },
  {
    "word": "GKWord283",
    "phonetic": "/gkˈwɜːrd283/",
    "meaning": "地理 (词汇 283)",
    "root": "root-283 (词根释义)",
    "example": "This is an example sentence for GKWord283."
  },
  {
    "word": "GKWord284",
    "phonetic": "/gkˈwɜːrd284/",
    "meaning": "政治 (词汇 284)",
    "root": "root-284 (词根释义)",
    "example": "This is an example sentence for GKWord284."
  },
  {
    "word": "GKWord285",
    "phonetic": "/gkˈwɜːrd285/",
    "meaning": "政治 (词汇 285)",
    "root": "root-285 (词根释义)",
    "example": "This is an example sentence for GKWord285."
  },
  {
    "word": "GKWord286",
    "phonetic": "/gkˈwɜːrd286/",
    "meaning": "政治 (词汇 286)",
    "root": "root-286 (词根释义)",
    "example": "This is an example sentence for GKWord286."
  },
  {
    "word": "GKWord287",
    "phonetic": "/gkˈwɜːrd287/",
    "meaning": "政治 (词汇 287)",
    "root": "root-287 (词根释义)",
    "example": "This is an example sentence for GKWord287."
  },
  {
    "word": "GKWord288",
    "phonetic": "/gkˈwɜːrd288/",
    "meaning": "复杂的 (词汇 288)",
    "root": "root-288 (词根释义)",
    "example": "This is an example sentence for GKWord288."
  },
  {
    "word": "GKWord289",
    "phonetic": "/gkˈwɜːrd289/",
    "meaning": "经济 (词汇 289)",
    "root": "root-289 (词根释义)",
    "example": "This is an example sentence for GKWord289."
  },
  {
    "word": "GKWord290",
    "phonetic": "/gkˈwɜːrd290/",
    "meaning": "社会 (词汇 290)",
    "root": "root-290 (词根释义)",
    "example": "This is an example sentence for GKWord290."
  },
  {
    "word": "GKWord291",
    "phonetic": "/gkˈwɜːrd291/",
    "meaning": "社会 (词汇 291)",
    "root": "root-291 (词根释义)",
    "example": "This is an example sentence for GKWord291."
  },
  {
    "word": "GKWord292",
    "phonetic": "/gkˈwɜːrd292/",
    "meaning": "科学 (词汇 292)",
    "root": "root-292 (词根释义)",
    "example": "This is an example sentence for GKWord292."
  },
  {
    "word": "GKWord293",
    "phonetic": "/gkˈwɜːrd293/",
    "meaning": "文学 (词汇 293)",
    "root": "root-293 (词根释义)",
    "example": "This is an example sentence for GKWord293."
  },
  {
    "word": "GKWord294",
    "phonetic": "/gkˈwɜːrd294/",
    "meaning": "历史 (词汇 294)",
    "root": "root-294 (词根释义)",
    "example": "This is an example sentence for GKWord294."
  },
  {
    "word": "GKWord295",
    "phonetic": "/gkˈwɜːrd295/",
    "meaning": "复杂的 (词汇 295)",
    "root": "root-295 (词根释义)",
    "example": "This is an example sentence for GKWord295."
  },
  {
    "word": "GKWord296",
    "phonetic": "/gkˈwɜːrd296/",
    "meaning": "社会 (词汇 296)",
    "root": "root-296 (词根释义)",
    "example": "This is an example sentence for GKWord296."
  },
  {
    "word": "GKWord297",
    "phonetic": "/gkˈwɜːrd297/",
    "meaning": "经济 (词汇 297)",
    "root": "root-297 (词根释义)",
    "example": "This is an example sentence for GKWord297."
  },
  {
    "word": "GKWord298",
    "phonetic": "/gkˈwɜːrd298/",
    "meaning": "经济 (词汇 298)",
    "root": "root-298 (词根释义)",
    "example": "This is an example sentence for GKWord298."
  },
  {
    "word": "GKWord299",
    "phonetic": "/gkˈwɜːrd299/",
    "meaning": "学术的 (词汇 299)",
    "root": "root-299 (词根释义)",
    "example": "This is an example sentence for GKWord299."
  },
  {
    "word": "GKWord300",
    "phonetic": "/gkˈwɜːrd300/",
    "meaning": "科学 (词汇 300)",
    "root": "root-300 (词根释义)",
    "example": "This is an example sentence for GKWord300."
  },
  {
    "word": "GKWord301",
    "phonetic": "/gkˈwɜːrd301/",
    "meaning": "历史 (词汇 301)",
    "root": "root-301 (词根释义)",
    "example": "This is an example sentence for GKWord301."
  },
  {
    "word": "GKWord302",
    "phonetic": "/gkˈwɜːrd302/",
    "meaning": "抽象的 (词汇 302)",
    "root": "root-302 (词根释义)",
    "example": "This is an example sentence for GKWord302."
  },
  {
    "word": "GKWord303",
    "phonetic": "/gkˈwɜːrd303/",
    "meaning": "科学 (词汇 303)",
    "root": "root-303 (词根释义)",
    "example": "This is an example sentence for GKWord303."
  },
  {
    "word": "GKWord304",
    "phonetic": "/gkˈwɜːrd304/",
    "meaning": "社会 (词汇 304)",
    "root": "root-304 (词根释义)",
    "example": "This is an example sentence for GKWord304."
  },
  {
    "word": "GKWord305",
    "phonetic": "/gkˈwɜːrd305/",
    "meaning": "文学 (词汇 305)",
    "root": "root-305 (词根释义)",
    "example": "This is an example sentence for GKWord305."
  },
  {
    "word": "GKWord306",
    "phonetic": "/gkˈwɜːrd306/",
    "meaning": "抽象的 (词汇 306)",
    "root": "root-306 (词根释义)",
    "example": "This is an example sentence for GKWord306."
  },
  {
    "word": "GKWord307",
    "phonetic": "/gkˈwɜːrd307/",
    "meaning": "复杂的 (词汇 307)",
    "root": "root-307 (词根释义)",
    "example": "This is an example sentence for GKWord307."
  },
  {
    "word": "GKWord308",
    "phonetic": "/gkˈwɜːrd308/",
    "meaning": "学术的 (词汇 308)",
    "root": "root-308 (词根释义)",
    "example": "This is an example sentence for GKWord308."
  },
  {
    "word": "GKWord309",
    "phonetic": "/gkˈwɜːrd309/",
    "meaning": "政治 (词汇 309)",
    "root": "root-309 (词根释义)",
    "example": "This is an example sentence for GKWord309."
  },
  {
    "word": "GKWord310",
    "phonetic": "/gkˈwɜːrd310/",
    "meaning": "历史 (词汇 310)",
    "root": "root-310 (词根释义)",
    "example": "This is an example sentence for GKWord310."
  },
  {
    "word": "GKWord311",
    "phonetic": "/gkˈwɜːrd311/",
    "meaning": "复杂的 (词汇 311)",
    "root": "root-311 (词根释义)",
    "example": "This is an example sentence for GKWord311."
  },
  {
    "word": "GKWord312",
    "phonetic": "/gkˈwɜːrd312/",
    "meaning": "社会 (词汇 312)",
    "root": "root-312 (词根释义)",
    "example": "This is an example sentence for GKWord312."
  },
  {
    "word": "GKWord313",
    "phonetic": "/gkˈwɜːrd313/",
    "meaning": "社会 (词汇 313)",
    "root": "root-313 (词根释义)",
    "example": "This is an example sentence for GKWord313."
  },
  {
    "word": "GKWord314",
    "phonetic": "/gkˈwɜːrd314/",
    "meaning": "经济 (词汇 314)",
    "root": "root-314 (词根释义)",
    "example": "This is an example sentence for GKWord314."
  },
  {
    "word": "GKWord315",
    "phonetic": "/gkˈwɜːrd315/",
    "meaning": "历史 (词汇 315)",
    "root": "root-315 (词根释义)",
    "example": "This is an example sentence for GKWord315."
  },
  {
    "word": "GKWord316",
    "phonetic": "/gkˈwɜːrd316/",
    "meaning": "复杂的 (词汇 316)",
    "root": "root-316 (词根释义)",
    "example": "This is an example sentence for GKWord316."
  },
  {
    "word": "GKWord317",
    "phonetic": "/gkˈwɜːrd317/",
    "meaning": "抽象的 (词汇 317)",
    "root": "root-317 (词根释义)",
    "example": "This is an example sentence for GKWord317."
  },
  {
    "word": "GKWord318",
    "phonetic": "/gkˈwɜːrd318/",
    "meaning": "历史 (词汇 318)",
    "root": "root-318 (词根释义)",
    "example": "This is an example sentence for GKWord318."
  },
  {
    "word": "GKWord319",
    "phonetic": "/gkˈwɜːrd319/",
    "meaning": "科学 (词汇 319)",
    "root": "root-319 (词根释义)",
    "example": "This is an example sentence for GKWord319."
  },
  {
    "word": "GKWord320",
    "phonetic": "/gkˈwɜːrd320/",
    "meaning": "抽象的 (词汇 320)",
    "root": "root-320 (词根释义)",
    "example": "This is an example sentence for GKWord320."
  },
  {
    "word": "GKWord321",
    "phonetic": "/gkˈwɜːrd321/",
    "meaning": "复杂的 (词汇 321)",
    "root": "root-321 (词根释义)",
    "example": "This is an example sentence for GKWord321."
  },
  {
    "word": "GKWord322",
    "phonetic": "/gkˈwɜːrd322/",
    "meaning": "经济 (词汇 322)",
    "root": "root-322 (词根释义)",
    "example": "This is an example sentence for GKWord322."
  },
  {
    "word": "GKWord323",
    "phonetic": "/gkˈwɜːrd323/",
    "meaning": "科学 (词汇 323)",
    "root": "root-323 (词根释义)",
    "example": "This is an example sentence for GKWord323."
  },
  {
    "word": "GKWord324",
    "phonetic": "/gkˈwɜːrd324/",
    "meaning": "社会 (词汇 324)",
    "root": "root-324 (词根释义)",
    "example": "This is an example sentence for GKWord324."
  },
  {
    "word": "GKWord325",
    "phonetic": "/gkˈwɜːrd325/",
    "meaning": "经济 (词汇 325)",
    "root": "root-325 (词根释义)",
    "example": "This is an example sentence for GKWord325."
  },
  {
    "word": "GKWord326",
    "phonetic": "/gkˈwɜːrd326/",
    "meaning": "社会 (词汇 326)",
    "root": "root-326 (词根释义)",
    "example": "This is an example sentence for GKWord326."
  },
  {
    "word": "GKWord327",
    "phonetic": "/gkˈwɜːrd327/",
    "meaning": "历史 (词汇 327)",
    "root": "root-327 (词根释义)",
    "example": "This is an example sentence for GKWord327."
  },
  {
    "word": "GKWord328",
    "phonetic": "/gkˈwɜːrd328/",
    "meaning": "复杂的 (词汇 328)",
    "root": "root-328 (词根释义)",
    "example": "This is an example sentence for GKWord328."
  },
  {
    "word": "GKWord329",
    "phonetic": "/gkˈwɜːrd329/",
    "meaning": "社会 (词汇 329)",
    "root": "root-329 (词根释义)",
    "example": "This is an example sentence for GKWord329."
  },
  {
    "word": "GKWord330",
    "phonetic": "/gkˈwɜːrd330/",
    "meaning": "地理 (词汇 330)",
    "root": "root-330 (词根释义)",
    "example": "This is an example sentence for GKWord330."
  },
  {
    "word": "GKWord331",
    "phonetic": "/gkˈwɜːrd331/",
    "meaning": "政治 (词汇 331)",
    "root": "root-331 (词根释义)",
    "example": "This is an example sentence for GKWord331."
  },
  {
    "word": "GKWord332",
    "phonetic": "/gkˈwɜːrd332/",
    "meaning": "科学 (词汇 332)",
    "root": "root-332 (词根释义)",
    "example": "This is an example sentence for GKWord332."
  },
  {
    "word": "GKWord333",
    "phonetic": "/gkˈwɜːrd333/",
    "meaning": "经济 (词汇 333)",
    "root": "root-333 (词根释义)",
    "example": "This is an example sentence for GKWord333."
  },
  {
    "word": "GKWord334",
    "phonetic": "/gkˈwɜːrd334/",
    "meaning": "历史 (词汇 334)",
    "root": "root-334 (词根释义)",
    "example": "This is an example sentence for GKWord334."
  },
  {
    "word": "GKWord335",
    "phonetic": "/gkˈwɜːrd335/",
    "meaning": "经济 (词汇 335)",
    "root": "root-335 (词根释义)",
    "example": "This is an example sentence for GKWord335."
  },
  {
    "word": "GKWord336",
    "phonetic": "/gkˈwɜːrd336/",
    "meaning": "学术的 (词汇 336)",
    "root": "root-336 (词根释义)",
    "example": "This is an example sentence for GKWord336."
  },
  {
    "word": "GKWord337",
    "phonetic": "/gkˈwɜːrd337/",
    "meaning": "文学 (词汇 337)",
    "root": "root-337 (词根释义)",
    "example": "This is an example sentence for GKWord337."
  },
  {
    "word": "GKWord338",
    "phonetic": "/gkˈwɜːrd338/",
    "meaning": "学术的 (词汇 338)",
    "root": "root-338 (词根释义)",
    "example": "This is an example sentence for GKWord338."
  },
  {
    "word": "GKWord339",
    "phonetic": "/gkˈwɜːrd339/",
    "meaning": "复杂的 (词汇 339)",
    "root": "root-339 (词根释义)",
    "example": "This is an example sentence for GKWord339."
  },
  {
    "word": "GKWord340",
    "phonetic": "/gkˈwɜːrd340/",
    "meaning": "社会 (词汇 340)",
    "root": "root-340 (词根释义)",
    "example": "This is an example sentence for GKWord340."
  },
  {
    "word": "GKWord341",
    "phonetic": "/gkˈwɜːrd341/",
    "meaning": "经济 (词汇 341)",
    "root": "root-341 (词根释义)",
    "example": "This is an example sentence for GKWord341."
  },
  {
    "word": "GKWord342",
    "phonetic": "/gkˈwɜːrd342/",
    "meaning": "政治 (词汇 342)",
    "root": "root-342 (词根释义)",
    "example": "This is an example sentence for GKWord342."
  },
  {
    "word": "GKWord343",
    "phonetic": "/gkˈwɜːrd343/",
    "meaning": "抽象的 (词汇 343)",
    "root": "root-343 (词根释义)",
    "example": "This is an example sentence for GKWord343."
  },
  {
    "word": "GKWord344",
    "phonetic": "/gkˈwɜːrd344/",
    "meaning": "社会 (词汇 344)",
    "root": "root-344 (词根释义)",
    "example": "This is an example sentence for GKWord344."
  },
  {
    "word": "GKWord345",
    "phonetic": "/gkˈwɜːrd345/",
    "meaning": "复杂的 (词汇 345)",
    "root": "root-345 (词根释义)",
    "example": "This is an example sentence for GKWord345."
  },
  {
    "word": "GKWord346",
    "phonetic": "/gkˈwɜːrd346/",
    "meaning": "文学 (词汇 346)",
    "root": "root-346 (词根释义)",
    "example": "This is an example sentence for GKWord346."
  },
  {
    "word": "GKWord347",
    "phonetic": "/gkˈwɜːrd347/",
    "meaning": "历史 (词汇 347)",
    "root": "root-347 (词根释义)",
    "example": "This is an example sentence for GKWord347."
  },
  {
    "word": "GKWord348",
    "phonetic": "/gkˈwɜːrd348/",
    "meaning": "政治 (词汇 348)",
    "root": "root-348 (词根释义)",
    "example": "This is an example sentence for GKWord348."
  },
  {
    "word": "GKWord349",
    "phonetic": "/gkˈwɜːrd349/",
    "meaning": "科学 (词汇 349)",
    "root": "root-349 (词根释义)",
    "example": "This is an example sentence for GKWord349."
  },
  {
    "word": "GKWord350",
    "phonetic": "/gkˈwɜːrd350/",
    "meaning": "科学 (词汇 350)",
    "root": "root-350 (词根释义)",
    "example": "This is an example sentence for GKWord350."
  },
  {
    "word": "GKWord351",
    "phonetic": "/gkˈwɜːrd351/",
    "meaning": "经济 (词汇 351)",
    "root": "root-351 (词根释义)",
    "example": "This is an example sentence for GKWord351."
  },
  {
    "word": "GKWord352",
    "phonetic": "/gkˈwɜːrd352/",
    "meaning": "抽象的 (词汇 352)",
    "root": "root-352 (词根释义)",
    "example": "This is an example sentence for GKWord352."
  },
  {
    "word": "GKWord353",
    "phonetic": "/gkˈwɜːrd353/",
    "meaning": "科学 (词汇 353)",
    "root": "root-353 (词根释义)",
    "example": "This is an example sentence for GKWord353."
  },
  {
    "word": "GKWord354",
    "phonetic": "/gkˈwɜːrd354/",
    "meaning": "政治 (词汇 354)",
    "root": "root-354 (词根释义)",
    "example": "This is an example sentence for GKWord354."
  },
  {
    "word": "GKWord355",
    "phonetic": "/gkˈwɜːrd355/",
    "meaning": "文学 (词汇 355)",
    "root": "root-355 (词根释义)",
    "example": "This is an example sentence for GKWord355."
  },
  {
    "word": "GKWord356",
    "phonetic": "/gkˈwɜːrd356/",
    "meaning": "经济 (词汇 356)",
    "root": "root-356 (词根释义)",
    "example": "This is an example sentence for GKWord356."
  },
  {
    "word": "GKWord357",
    "phonetic": "/gkˈwɜːrd357/",
    "meaning": "历史 (词汇 357)",
    "root": "root-357 (词根释义)",
    "example": "This is an example sentence for GKWord357."
  },
  {
    "word": "GKWord358",
    "phonetic": "/gkˈwɜːrd358/",
    "meaning": "科学 (词汇 358)",
    "root": "root-358 (词根释义)",
    "example": "This is an example sentence for GKWord358."
  },
  {
    "word": "GKWord359",
    "phonetic": "/gkˈwɜːrd359/",
    "meaning": "学术的 (词汇 359)",
    "root": "root-359 (词根释义)",
    "example": "This is an example sentence for GKWord359."
  },
  {
    "word": "GKWord360",
    "phonetic": "/gkˈwɜːrd360/",
    "meaning": "地理 (词汇 360)",
    "root": "root-360 (词根释义)",
    "example": "This is an example sentence for GKWord360."
  },
  {
    "word": "GKWord361",
    "phonetic": "/gkˈwɜːrd361/",
    "meaning": "学术的 (词汇 361)",
    "root": "root-361 (词根释义)",
    "example": "This is an example sentence for GKWord361."
  },
  {
    "word": "GKWord362",
    "phonetic": "/gkˈwɜːrd362/",
    "meaning": "文学 (词汇 362)",
    "root": "root-362 (词根释义)",
    "example": "This is an example sentence for GKWord362."
  },
  {
    "word": "GKWord363",
    "phonetic": "/gkˈwɜːrd363/",
    "meaning": "地理 (词汇 363)",
    "root": "root-363 (词根释义)",
    "example": "This is an example sentence for GKWord363."
  },
  {
    "word": "GKWord364",
    "phonetic": "/gkˈwɜːrd364/",
    "meaning": "抽象的 (词汇 364)",
    "root": "root-364 (词根释义)",
    "example": "This is an example sentence for GKWord364."
  },
  {
    "word": "GKWord365",
    "phonetic": "/gkˈwɜːrd365/",
    "meaning": "地理 (词汇 365)",
    "root": "root-365 (词根释义)",
    "example": "This is an example sentence for GKWord365."
  },
  {
    "word": "GKWord366",
    "phonetic": "/gkˈwɜːrd366/",
    "meaning": "复杂的 (词汇 366)",
    "root": "root-366 (词根释义)",
    "example": "This is an example sentence for GKWord366."
  },
  {
    "word": "GKWord367",
    "phonetic": "/gkˈwɜːrd367/",
    "meaning": "社会 (词汇 367)",
    "root": "root-367 (词根释义)",
    "example": "This is an example sentence for GKWord367."
  },
  {
    "word": "GKWord368",
    "phonetic": "/gkˈwɜːrd368/",
    "meaning": "文学 (词汇 368)",
    "root": "root-368 (词根释义)",
    "example": "This is an example sentence for GKWord368."
  },
  {
    "word": "GKWord369",
    "phonetic": "/gkˈwɜːrd369/",
    "meaning": "抽象的 (词汇 369)",
    "root": "root-369 (词根释义)",
    "example": "This is an example sentence for GKWord369."
  },
  {
    "word": "GKWord370",
    "phonetic": "/gkˈwɜːrd370/",
    "meaning": "抽象的 (词汇 370)",
    "root": "root-370 (词根释义)",
    "example": "This is an example sentence for GKWord370."
  },
  {
    "word": "GKWord371",
    "phonetic": "/gkˈwɜːrd371/",
    "meaning": "政治 (词汇 371)",
    "root": "root-371 (词根释义)",
    "example": "This is an example sentence for GKWord371."
  },
  {
    "word": "GKWord372",
    "phonetic": "/gkˈwɜːrd372/",
    "meaning": "科学 (词汇 372)",
    "root": "root-372 (词根释义)",
    "example": "This is an example sentence for GKWord372."
  },
  {
    "word": "GKWord373",
    "phonetic": "/gkˈwɜːrd373/",
    "meaning": "学术的 (词汇 373)",
    "root": "root-373 (词根释义)",
    "example": "This is an example sentence for GKWord373."
  },
  {
    "word": "GKWord374",
    "phonetic": "/gkˈwɜːrd374/",
    "meaning": "复杂的 (词汇 374)",
    "root": "root-374 (词根释义)",
    "example": "This is an example sentence for GKWord374."
  },
  {
    "word": "GKWord375",
    "phonetic": "/gkˈwɜːrd375/",
    "meaning": "学术的 (词汇 375)",
    "root": "root-375 (词根释义)",
    "example": "This is an example sentence for GKWord375."
  },
  {
    "word": "GKWord376",
    "phonetic": "/gkˈwɜːrd376/",
    "meaning": "科学 (词汇 376)",
    "root": "root-376 (词根释义)",
    "example": "This is an example sentence for GKWord376."
  },
  {
    "word": "GKWord377",
    "phonetic": "/gkˈwɜːrd377/",
    "meaning": "社会 (词汇 377)",
    "root": "root-377 (词根释义)",
    "example": "This is an example sentence for GKWord377."
  },
  {
    "word": "GKWord378",
    "phonetic": "/gkˈwɜːrd378/",
    "meaning": "抽象的 (词汇 378)",
    "root": "root-378 (词根释义)",
    "example": "This is an example sentence for GKWord378."
  },
  {
    "word": "GKWord379",
    "phonetic": "/gkˈwɜːrd379/",
    "meaning": "政治 (词汇 379)",
    "root": "root-379 (词根释义)",
    "example": "This is an example sentence for GKWord379."
  },
  {
    "word": "GKWord380",
    "phonetic": "/gkˈwɜːrd380/",
    "meaning": "科学 (词汇 380)",
    "root": "root-380 (词根释义)",
    "example": "This is an example sentence for GKWord380."
  },
  {
    "word": "GKWord381",
    "phonetic": "/gkˈwɜːrd381/",
    "meaning": "抽象的 (词汇 381)",
    "root": "root-381 (词根释义)",
    "example": "This is an example sentence for GKWord381."
  },
  {
    "word": "GKWord382",
    "phonetic": "/gkˈwɜːrd382/",
    "meaning": "历史 (词汇 382)",
    "root": "root-382 (词根释义)",
    "example": "This is an example sentence for GKWord382."
  },
  {
    "word": "GKWord383",
    "phonetic": "/gkˈwɜːrd383/",
    "meaning": "抽象的 (词汇 383)",
    "root": "root-383 (词根释义)",
    "example": "This is an example sentence for GKWord383."
  },
  {
    "word": "GKWord384",
    "phonetic": "/gkˈwɜːrd384/",
    "meaning": "历史 (词汇 384)",
    "root": "root-384 (词根释义)",
    "example": "This is an example sentence for GKWord384."
  },
  {
    "word": "GKWord385",
    "phonetic": "/gkˈwɜːrd385/",
    "meaning": "历史 (词汇 385)",
    "root": "root-385 (词根释义)",
    "example": "This is an example sentence for GKWord385."
  },
  {
    "word": "GKWord386",
    "phonetic": "/gkˈwɜːrd386/",
    "meaning": "政治 (词汇 386)",
    "root": "root-386 (词根释义)",
    "example": "This is an example sentence for GKWord386."
  },
  {
    "word": "GKWord387",
    "phonetic": "/gkˈwɜːrd387/",
    "meaning": "科学 (词汇 387)",
    "root": "root-387 (词根释义)",
    "example": "This is an example sentence for GKWord387."
  },
  {
    "word": "GKWord388",
    "phonetic": "/gkˈwɜːrd388/",
    "meaning": "抽象的 (词汇 388)",
    "root": "root-388 (词根释义)",
    "example": "This is an example sentence for GKWord388."
  },
  {
    "word": "GKWord389",
    "phonetic": "/gkˈwɜːrd389/",
    "meaning": "科学 (词汇 389)",
    "root": "root-389 (词根释义)",
    "example": "This is an example sentence for GKWord389."
  },
  {
    "word": "GKWord390",
    "phonetic": "/gkˈwɜːrd390/",
    "meaning": "文学 (词汇 390)",
    "root": "root-390 (词根释义)",
    "example": "This is an example sentence for GKWord390."
  },
  {
    "word": "GKWord391",
    "phonetic": "/gkˈwɜːrd391/",
    "meaning": "复杂的 (词汇 391)",
    "root": "root-391 (词根释义)",
    "example": "This is an example sentence for GKWord391."
  },
  {
    "word": "GKWord392",
    "phonetic": "/gkˈwɜːrd392/",
    "meaning": "复杂的 (词汇 392)",
    "root": "root-392 (词根释义)",
    "example": "This is an example sentence for GKWord392."
  },
  {
    "word": "GKWord393",
    "phonetic": "/gkˈwɜːrd393/",
    "meaning": "社会 (词汇 393)",
    "root": "root-393 (词根释义)",
    "example": "This is an example sentence for GKWord393."
  },
  {
    "word": "GKWord394",
    "phonetic": "/gkˈwɜːrd394/",
    "meaning": "文学 (词汇 394)",
    "root": "root-394 (词根释义)",
    "example": "This is an example sentence for GKWord394."
  },
  {
    "word": "GKWord395",
    "phonetic": "/gkˈwɜːrd395/",
    "meaning": "历史 (词汇 395)",
    "root": "root-395 (词根释义)",
    "example": "This is an example sentence for GKWord395."
  },
  {
    "word": "GKWord396",
    "phonetic": "/gkˈwɜːrd396/",
    "meaning": "科学 (词汇 396)",
    "root": "root-396 (词根释义)",
    "example": "This is an example sentence for GKWord396."
  },
  {
    "word": "GKWord397",
    "phonetic": "/gkˈwɜːrd397/",
    "meaning": "社会 (词汇 397)",
    "root": "root-397 (词根释义)",
    "example": "This is an example sentence for GKWord397."
  },
  {
    "word": "GKWord398",
    "phonetic": "/gkˈwɜːrd398/",
    "meaning": "抽象的 (词汇 398)",
    "root": "root-398 (词根释义)",
    "example": "This is an example sentence for GKWord398."
  },
  {
    "word": "GKWord399",
    "phonetic": "/gkˈwɜːrd399/",
    "meaning": "政治 (词汇 399)",
    "root": "root-399 (词根释义)",
    "example": "This is an example sentence for GKWord399."
  },
  {
    "word": "GKWord400",
    "phonetic": "/gkˈwɜːrd400/",
    "meaning": "地理 (词汇 400)",
    "root": "root-400 (词根释义)",
    "example": "This is an example sentence for GKWord400."
  },
  {
    "word": "GKWord401",
    "phonetic": "/gkˈwɜːrd401/",
    "meaning": "文学 (词汇 401)",
    "root": "root-401 (词根释义)",
    "example": "This is an example sentence for GKWord401."
  },
  {
    "word": "GKWord402",
    "phonetic": "/gkˈwɜːrd402/",
    "meaning": "政治 (词汇 402)",
    "root": "root-402 (词根释义)",
    "example": "This is an example sentence for GKWord402."
  },
  {
    "word": "GKWord403",
    "phonetic": "/gkˈwɜːrd403/",
    "meaning": "文学 (词汇 403)",
    "root": "root-403 (词根释义)",
    "example": "This is an example sentence for GKWord403."
  },
  {
    "word": "GKWord404",
    "phonetic": "/gkˈwɜːrd404/",
    "meaning": "社会 (词汇 404)",
    "root": "root-404 (词根释义)",
    "example": "This is an example sentence for GKWord404."
  },
  {
    "word": "GKWord405",
    "phonetic": "/gkˈwɜːrd405/",
    "meaning": "政治 (词汇 405)",
    "root": "root-405 (词根释义)",
    "example": "This is an example sentence for GKWord405."
  },
  {
    "word": "GKWord406",
    "phonetic": "/gkˈwɜːrd406/",
    "meaning": "社会 (词汇 406)",
    "root": "root-406 (词根释义)",
    "example": "This is an example sentence for GKWord406."
  },
  {
    "word": "GKWord407",
    "phonetic": "/gkˈwɜːrd407/",
    "meaning": "政治 (词汇 407)",
    "root": "root-407 (词根释义)",
    "example": "This is an example sentence for GKWord407."
  },
  {
    "word": "GKWord408",
    "phonetic": "/gkˈwɜːrd408/",
    "meaning": "社会 (词汇 408)",
    "root": "root-408 (词根释义)",
    "example": "This is an example sentence for GKWord408."
  },
  {
    "word": "GKWord409",
    "phonetic": "/gkˈwɜːrd409/",
    "meaning": "政治 (词汇 409)",
    "root": "root-409 (词根释义)",
    "example": "This is an example sentence for GKWord409."
  },
  {
    "word": "GKWord410",
    "phonetic": "/gkˈwɜːrd410/",
    "meaning": "政治 (词汇 410)",
    "root": "root-410 (词根释义)",
    "example": "This is an example sentence for GKWord410."
  },
  {
    "word": "GKWord411",
    "phonetic": "/gkˈwɜːrd411/",
    "meaning": "复杂的 (词汇 411)",
    "root": "root-411 (词根释义)",
    "example": "This is an example sentence for GKWord411."
  },
  {
    "word": "GKWord412",
    "phonetic": "/gkˈwɜːrd412/",
    "meaning": "科学 (词汇 412)",
    "root": "root-412 (词根释义)",
    "example": "This is an example sentence for GKWord412."
  },
  {
    "word": "GKWord413",
    "phonetic": "/gkˈwɜːrd413/",
    "meaning": "学术的 (词汇 413)",
    "root": "root-413 (词根释义)",
    "example": "This is an example sentence for GKWord413."
  },
  {
    "word": "GKWord414",
    "phonetic": "/gkˈwɜːrd414/",
    "meaning": "抽象的 (词汇 414)",
    "root": "root-414 (词根释义)",
    "example": "This is an example sentence for GKWord414."
  },
  {
    "word": "GKWord415",
    "phonetic": "/gkˈwɜːrd415/",
    "meaning": "经济 (词汇 415)",
    "root": "root-415 (词根释义)",
    "example": "This is an example sentence for GKWord415."
  },
  {
    "word": "GKWord416",
    "phonetic": "/gkˈwɜːrd416/",
    "meaning": "社会 (词汇 416)",
    "root": "root-416 (词根释义)",
    "example": "This is an example sentence for GKWord416."
  },
  {
    "word": "GKWord417",
    "phonetic": "/gkˈwɜːrd417/",
    "meaning": "学术的 (词汇 417)",
    "root": "root-417 (词根释义)",
    "example": "This is an example sentence for GKWord417."
  },
  {
    "word": "GKWord418",
    "phonetic": "/gkˈwɜːrd418/",
    "meaning": "抽象的 (词汇 418)",
    "root": "root-418 (词根释义)",
    "example": "This is an example sentence for GKWord418."
  },
  {
    "word": "GKWord419",
    "phonetic": "/gkˈwɜːrd419/",
    "meaning": "科学 (词汇 419)",
    "root": "root-419 (词根释义)",
    "example": "This is an example sentence for GKWord419."
  },
  {
    "word": "GKWord420",
    "phonetic": "/gkˈwɜːrd420/",
    "meaning": "学术的 (词汇 420)",
    "root": "root-420 (词根释义)",
    "example": "This is an example sentence for GKWord420."
  },
  {
    "word": "GKWord421",
    "phonetic": "/gkˈwɜːrd421/",
    "meaning": "科学 (词汇 421)",
    "root": "root-421 (词根释义)",
    "example": "This is an example sentence for GKWord421."
  },
  {
    "word": "GKWord422",
    "phonetic": "/gkˈwɜːrd422/",
    "meaning": "科学 (词汇 422)",
    "root": "root-422 (词根释义)",
    "example": "This is an example sentence for GKWord422."
  },
  {
    "word": "GKWord423",
    "phonetic": "/gkˈwɜːrd423/",
    "meaning": "政治 (词汇 423)",
    "root": "root-423 (词根释义)",
    "example": "This is an example sentence for GKWord423."
  },
  {
    "word": "GKWord424",
    "phonetic": "/gkˈwɜːrd424/",
    "meaning": "文学 (词汇 424)",
    "root": "root-424 (词根释义)",
    "example": "This is an example sentence for GKWord424."
  },
  {
    "word": "GKWord425",
    "phonetic": "/gkˈwɜːrd425/",
    "meaning": "经济 (词汇 425)",
    "root": "root-425 (词根释义)",
    "example": "This is an example sentence for GKWord425."
  },
  {
    "word": "GKWord426",
    "phonetic": "/gkˈwɜːrd426/",
    "meaning": "地理 (词汇 426)",
    "root": "root-426 (词根释义)",
    "example": "This is an example sentence for GKWord426."
  },
  {
    "word": "GKWord427",
    "phonetic": "/gkˈwɜːrd427/",
    "meaning": "经济 (词汇 427)",
    "root": "root-427 (词根释义)",
    "example": "This is an example sentence for GKWord427."
  },
  {
    "word": "GKWord428",
    "phonetic": "/gkˈwɜːrd428/",
    "meaning": "文学 (词汇 428)",
    "root": "root-428 (词根释义)",
    "example": "This is an example sentence for GKWord428."
  },
  {
    "word": "GKWord429",
    "phonetic": "/gkˈwɜːrd429/",
    "meaning": "学术的 (词汇 429)",
    "root": "root-429 (词根释义)",
    "example": "This is an example sentence for GKWord429."
  },
  {
    "word": "GKWord430",
    "phonetic": "/gkˈwɜːrd430/",
    "meaning": "政治 (词汇 430)",
    "root": "root-430 (词根释义)",
    "example": "This is an example sentence for GKWord430."
  },
  {
    "word": "GKWord431",
    "phonetic": "/gkˈwɜːrd431/",
    "meaning": "科学 (词汇 431)",
    "root": "root-431 (词根释义)",
    "example": "This is an example sentence for GKWord431."
  },
  {
    "word": "GKWord432",
    "phonetic": "/gkˈwɜːrd432/",
    "meaning": "复杂的 (词汇 432)",
    "root": "root-432 (词根释义)",
    "example": "This is an example sentence for GKWord432."
  },
  {
    "word": "GKWord433",
    "phonetic": "/gkˈwɜːrd433/",
    "meaning": "地理 (词汇 433)",
    "root": "root-433 (词根释义)",
    "example": "This is an example sentence for GKWord433."
  },
  {
    "word": "GKWord434",
    "phonetic": "/gkˈwɜːrd434/",
    "meaning": "经济 (词汇 434)",
    "root": "root-434 (词根释义)",
    "example": "This is an example sentence for GKWord434."
  },
  {
    "word": "GKWord435",
    "phonetic": "/gkˈwɜːrd435/",
    "meaning": "政治 (词汇 435)",
    "root": "root-435 (词根释义)",
    "example": "This is an example sentence for GKWord435."
  },
  {
    "word": "GKWord436",
    "phonetic": "/gkˈwɜːrd436/",
    "meaning": "文学 (词汇 436)",
    "root": "root-436 (词根释义)",
    "example": "This is an example sentence for GKWord436."
  },
  {
    "word": "GKWord437",
    "phonetic": "/gkˈwɜːrd437/",
    "meaning": "抽象的 (词汇 437)",
    "root": "root-437 (词根释义)",
    "example": "This is an example sentence for GKWord437."
  },
  {
    "word": "GKWord438",
    "phonetic": "/gkˈwɜːrd438/",
    "meaning": "历史 (词汇 438)",
    "root": "root-438 (词根释义)",
    "example": "This is an example sentence for GKWord438."
  },
  {
    "word": "GKWord439",
    "phonetic": "/gkˈwɜːrd439/",
    "meaning": "政治 (词汇 439)",
    "root": "root-439 (词根释义)",
    "example": "This is an example sentence for GKWord439."
  },
  {
    "word": "GKWord440",
    "phonetic": "/gkˈwɜːrd440/",
    "meaning": "复杂的 (词汇 440)",
    "root": "root-440 (词根释义)",
    "example": "This is an example sentence for GKWord440."
  },
  {
    "word": "GKWord441",
    "phonetic": "/gkˈwɜːrd441/",
    "meaning": "复杂的 (词汇 441)",
    "root": "root-441 (词根释义)",
    "example": "This is an example sentence for GKWord441."
  },
  {
    "word": "GKWord442",
    "phonetic": "/gkˈwɜːrd442/",
    "meaning": "社会 (词汇 442)",
    "root": "root-442 (词根释义)",
    "example": "This is an example sentence for GKWord442."
  },
  {
    "word": "GKWord443",
    "phonetic": "/gkˈwɜːrd443/",
    "meaning": "学术的 (词汇 443)",
    "root": "root-443 (词根释义)",
    "example": "This is an example sentence for GKWord443."
  },
  {
    "word": "GKWord444",
    "phonetic": "/gkˈwɜːrd444/",
    "meaning": "政治 (词汇 444)",
    "root": "root-444 (词根释义)",
    "example": "This is an example sentence for GKWord444."
  },
  {
    "word": "GKWord445",
    "phonetic": "/gkˈwɜːrd445/",
    "meaning": "社会 (词汇 445)",
    "root": "root-445 (词根释义)",
    "example": "This is an example sentence for GKWord445."
  },
  {
    "word": "GKWord446",
    "phonetic": "/gkˈwɜːrd446/",
    "meaning": "复杂的 (词汇 446)",
    "root": "root-446 (词根释义)",
    "example": "This is an example sentence for GKWord446."
  },
  {
    "word": "GKWord447",
    "phonetic": "/gkˈwɜːrd447/",
    "meaning": "科学 (词汇 447)",
    "root": "root-447 (词根释义)",
    "example": "This is an example sentence for GKWord447."
  },
  {
    "word": "GKWord448",
    "phonetic": "/gkˈwɜːrd448/",
    "meaning": "复杂的 (词汇 448)",
    "root": "root-448 (词根释义)",
    "example": "This is an example sentence for GKWord448."
  },
  {
    "word": "GKWord449",
    "phonetic": "/gkˈwɜːrd449/",
    "meaning": "抽象的 (词汇 449)",
    "root": "root-449 (词根释义)",
    "example": "This is an example sentence for GKWord449."
  },
  {
    "word": "GKWord450",
    "phonetic": "/gkˈwɜːrd450/",
    "meaning": "地理 (词汇 450)",
    "root": "root-450 (词根释义)",
    "example": "This is an example sentence for GKWord450."
  },
  {
    "word": "GKWord451",
    "phonetic": "/gkˈwɜːrd451/",
    "meaning": "历史 (词汇 451)",
    "root": "root-451 (词根释义)",
    "example": "This is an example sentence for GKWord451."
  },
  {
    "word": "GKWord452",
    "phonetic": "/gkˈwɜːrd452/",
    "meaning": "抽象的 (词汇 452)",
    "root": "root-452 (词根释义)",
    "example": "This is an example sentence for GKWord452."
  },
  {
    "word": "GKWord453",
    "phonetic": "/gkˈwɜːrd453/",
    "meaning": "社会 (词汇 453)",
    "root": "root-453 (词根释义)",
    "example": "This is an example sentence for GKWord453."
  },
  {
    "word": "GKWord454",
    "phonetic": "/gkˈwɜːrd454/",
    "meaning": "政治 (词汇 454)",
    "root": "root-454 (词根释义)",
    "example": "This is an example sentence for GKWord454."
  },
  {
    "word": "GKWord455",
    "phonetic": "/gkˈwɜːrd455/",
    "meaning": "抽象的 (词汇 455)",
    "root": "root-455 (词根释义)",
    "example": "This is an example sentence for GKWord455."
  },
  {
    "word": "GKWord456",
    "phonetic": "/gkˈwɜːrd456/",
    "meaning": "历史 (词汇 456)",
    "root": "root-456 (词根释义)",
    "example": "This is an example sentence for GKWord456."
  },
  {
    "word": "GKWord457",
    "phonetic": "/gkˈwɜːrd457/",
    "meaning": "复杂的 (词汇 457)",
    "root": "root-457 (词根释义)",
    "example": "This is an example sentence for GKWord457."
  },
  {
    "word": "GKWord458",
    "phonetic": "/gkˈwɜːrd458/",
    "meaning": "科学 (词汇 458)",
    "root": "root-458 (词根释义)",
    "example": "This is an example sentence for GKWord458."
  },
  {
    "word": "GKWord459",
    "phonetic": "/gkˈwɜːrd459/",
    "meaning": "学术的 (词汇 459)",
    "root": "root-459 (词根释义)",
    "example": "This is an example sentence for GKWord459."
  },
  {
    "word": "GKWord460",
    "phonetic": "/gkˈwɜːrd460/",
    "meaning": "社会 (词汇 460)",
    "root": "root-460 (词根释义)",
    "example": "This is an example sentence for GKWord460."
  },
  {
    "word": "GKWord461",
    "phonetic": "/gkˈwɜːrd461/",
    "meaning": "科学 (词汇 461)",
    "root": "root-461 (词根释义)",
    "example": "This is an example sentence for GKWord461."
  },
  {
    "word": "GKWord462",
    "phonetic": "/gkˈwɜːrd462/",
    "meaning": "经济 (词汇 462)",
    "root": "root-462 (词根释义)",
    "example": "This is an example sentence for GKWord462."
  },
  {
    "word": "GKWord463",
    "phonetic": "/gkˈwɜːrd463/",
    "meaning": "社会 (词汇 463)",
    "root": "root-463 (词根释义)",
    "example": "This is an example sentence for GKWord463."
  },
  {
    "word": "GKWord464",
    "phonetic": "/gkˈwɜːrd464/",
    "meaning": "学术的 (词汇 464)",
    "root": "root-464 (词根释义)",
    "example": "This is an example sentence for GKWord464."
  },
  {
    "word": "GKWord465",
    "phonetic": "/gkˈwɜːrd465/",
    "meaning": "经济 (词汇 465)",
    "root": "root-465 (词根释义)",
    "example": "This is an example sentence for GKWord465."
  },
  {
    "word": "GKWord466",
    "phonetic": "/gkˈwɜːrd466/",
    "meaning": "学术的 (词汇 466)",
    "root": "root-466 (词根释义)",
    "example": "This is an example sentence for GKWord466."
  },
  {
    "word": "GKWord467",
    "phonetic": "/gkˈwɜːrd467/",
    "meaning": "政治 (词汇 467)",
    "root": "root-467 (词根释义)",
    "example": "This is an example sentence for GKWord467."
  },
  {
    "word": "GKWord468",
    "phonetic": "/gkˈwɜːrd468/",
    "meaning": "学术的 (词汇 468)",
    "root": "root-468 (词根释义)",
    "example": "This is an example sentence for GKWord468."
  },
  {
    "word": "GKWord469",
    "phonetic": "/gkˈwɜːrd469/",
    "meaning": "历史 (词汇 469)",
    "root": "root-469 (词根释义)",
    "example": "This is an example sentence for GKWord469."
  },
  {
    "word": "GKWord470",
    "phonetic": "/gkˈwɜːrd470/",
    "meaning": "抽象的 (词汇 470)",
    "root": "root-470 (词根释义)",
    "example": "This is an example sentence for GKWord470."
  },
  {
    "word": "GKWord471",
    "phonetic": "/gkˈwɜːrd471/",
    "meaning": "经济 (词汇 471)",
    "root": "root-471 (词根释义)",
    "example": "This is an example sentence for GKWord471."
  },
  {
    "word": "GKWord472",
    "phonetic": "/gkˈwɜːrd472/",
    "meaning": "抽象的 (词汇 472)",
    "root": "root-472 (词根释义)",
    "example": "This is an example sentence for GKWord472."
  },
  {
    "word": "GKWord473",
    "phonetic": "/gkˈwɜːrd473/",
    "meaning": "经济 (词汇 473)",
    "root": "root-473 (词根释义)",
    "example": "This is an example sentence for GKWord473."
  },
  {
    "word": "GKWord474",
    "phonetic": "/gkˈwɜːrd474/",
    "meaning": "文学 (词汇 474)",
    "root": "root-474 (词根释义)",
    "example": "This is an example sentence for GKWord474."
  },
  {
    "word": "GKWord475",
    "phonetic": "/gkˈwɜːrd475/",
    "meaning": "经济 (词汇 475)",
    "root": "root-475 (词根释义)",
    "example": "This is an example sentence for GKWord475."
  },
  {
    "word": "GKWord476",
    "phonetic": "/gkˈwɜːrd476/",
    "meaning": "经济 (词汇 476)",
    "root": "root-476 (词根释义)",
    "example": "This is an example sentence for GKWord476."
  },
  {
    "word": "GKWord477",
    "phonetic": "/gkˈwɜːrd477/",
    "meaning": "复杂的 (词汇 477)",
    "root": "root-477 (词根释义)",
    "example": "This is an example sentence for GKWord477."
  },
  {
    "word": "GKWord478",
    "phonetic": "/gkˈwɜːrd478/",
    "meaning": "抽象的 (词汇 478)",
    "root": "root-478 (词根释义)",
    "example": "This is an example sentence for GKWord478."
  },
  {
    "word": "GKWord479",
    "phonetic": "/gkˈwɜːrd479/",
    "meaning": "文学 (词汇 479)",
    "root": "root-479 (词根释义)",
    "example": "This is an example sentence for GKWord479."
  },
  {
    "word": "GKWord480",
    "phonetic": "/gkˈwɜːrd480/",
    "meaning": "文学 (词汇 480)",
    "root": "root-480 (词根释义)",
    "example": "This is an example sentence for GKWord480."
  },
  {
    "word": "GKWord481",
    "phonetic": "/gkˈwɜːrd481/",
    "meaning": "经济 (词汇 481)",
    "root": "root-481 (词根释义)",
    "example": "This is an example sentence for GKWord481."
  },
  {
    "word": "GKWord482",
    "phonetic": "/gkˈwɜːrd482/",
    "meaning": "抽象的 (词汇 482)",
    "root": "root-482 (词根释义)",
    "example": "This is an example sentence for GKWord482."
  },
  {
    "word": "GKWord483",
    "phonetic": "/gkˈwɜːrd483/",
    "meaning": "社会 (词汇 483)",
    "root": "root-483 (词根释义)",
    "example": "This is an example sentence for GKWord483."
  },
  {
    "word": "GKWord484",
    "phonetic": "/gkˈwɜːrd484/",
    "meaning": "社会 (词汇 484)",
    "root": "root-484 (词根释义)",
    "example": "This is an example sentence for GKWord484."
  },
  {
    "word": "GKWord485",
    "phonetic": "/gkˈwɜːrd485/",
    "meaning": "复杂的 (词汇 485)",
    "root": "root-485 (词根释义)",
    "example": "This is an example sentence for GKWord485."
  },
  {
    "word": "GKWord486",
    "phonetic": "/gkˈwɜːrd486/",
    "meaning": "学术的 (词汇 486)",
    "root": "root-486 (词根释义)",
    "example": "This is an example sentence for GKWord486."
  },
  {
    "word": "GKWord487",
    "phonetic": "/gkˈwɜːrd487/",
    "meaning": "经济 (词汇 487)",
    "root": "root-487 (词根释义)",
    "example": "This is an example sentence for GKWord487."
  },
  {
    "word": "GKWord488",
    "phonetic": "/gkˈwɜːrd488/",
    "meaning": "学术的 (词汇 488)",
    "root": "root-488 (词根释义)",
    "example": "This is an example sentence for GKWord488."
  },
  {
    "word": "GKWord489",
    "phonetic": "/gkˈwɜːrd489/",
    "meaning": "经济 (词汇 489)",
    "root": "root-489 (词根释义)",
    "example": "This is an example sentence for GKWord489."
  },
  {
    "word": "GKWord490",
    "phonetic": "/gkˈwɜːrd490/",
    "meaning": "学术的 (词汇 490)",
    "root": "root-490 (词根释义)",
    "example": "This is an example sentence for GKWord490."
  },
  {
    "word": "GKWord491",
    "phonetic": "/gkˈwɜːrd491/",
    "meaning": "抽象的 (词汇 491)",
    "root": "root-491 (词根释义)",
    "example": "This is an example sentence for GKWord491."
  },
  {
    "word": "GKWord492",
    "phonetic": "/gkˈwɜːrd492/",
    "meaning": "社会 (词汇 492)",
    "root": "root-492 (词根释义)",
    "example": "This is an example sentence for GKWord492."
  },
  {
    "word": "GKWord493",
    "phonetic": "/gkˈwɜːrd493/",
    "meaning": "地理 (词汇 493)",
    "root": "root-493 (词根释义)",
    "example": "This is an example sentence for GKWord493."
  },
  {
    "word": "GKWord494",
    "phonetic": "/gkˈwɜːrd494/",
    "meaning": "科学 (词汇 494)",
    "root": "root-494 (词根释义)",
    "example": "This is an example sentence for GKWord494."
  },
  {
    "word": "GKWord495",
    "phonetic": "/gkˈwɜːrd495/",
    "meaning": "学术的 (词汇 495)",
    "root": "root-495 (词根释义)",
    "example": "This is an example sentence for GKWord495."
  },
  {
    "word": "GKWord496",
    "phonetic": "/gkˈwɜːrd496/",
    "meaning": "科学 (词汇 496)",
    "root": "root-496 (词根释义)",
    "example": "This is an example sentence for GKWord496."
  },
  {
    "word": "GKWord497",
    "phonetic": "/gkˈwɜːrd497/",
    "meaning": "抽象的 (词汇 497)",
    "root": "root-497 (词根释义)",
    "example": "This is an example sentence for GKWord497."
  },
  {
    "word": "GKWord498",
    "phonetic": "/gkˈwɜːrd498/",
    "meaning": "社会 (词汇 498)",
    "root": "root-498 (词根释义)",
    "example": "This is an example sentence for GKWord498."
  },
  {
    "word": "GKWord499",
    "phonetic": "/gkˈwɜːrd499/",
    "meaning": "社会 (词汇 499)",
    "root": "root-499 (词根释义)",
    "example": "This is an example sentence for GKWord499."
  },
  {
    "word": "GKWord500",
    "phonetic": "/gkˈwɜːrd500/",
    "meaning": "文学 (词汇 500)",
    "root": "root-500 (词根释义)",
    "example": "This is an example sentence for GKWord500."
  },
  {
    "word": "GKWord501",
    "phonetic": "/gkˈwɜːrd501/",
    "meaning": "地理 (词汇 501)",
    "root": "root-501 (词根释义)",
    "example": "This is an example sentence for GKWord501."
  },
  {
    "word": "GKWord502",
    "phonetic": "/gkˈwɜːrd502/",
    "meaning": "复杂的 (词汇 502)",
    "root": "root-502 (词根释义)",
    "example": "This is an example sentence for GKWord502."
  },
  {
    "word": "GKWord503",
    "phonetic": "/gkˈwɜːrd503/",
    "meaning": "政治 (词汇 503)",
    "root": "root-503 (词根释义)",
    "example": "This is an example sentence for GKWord503."
  },
  {
    "word": "GKWord504",
    "phonetic": "/gkˈwɜːrd504/",
    "meaning": "政治 (词汇 504)",
    "root": "root-504 (词根释义)",
    "example": "This is an example sentence for GKWord504."
  },
  {
    "word": "GKWord505",
    "phonetic": "/gkˈwɜːrd505/",
    "meaning": "抽象的 (词汇 505)",
    "root": "root-505 (词根释义)",
    "example": "This is an example sentence for GKWord505."
  },
  {
    "word": "GKWord506",
    "phonetic": "/gkˈwɜːrd506/",
    "meaning": "经济 (词汇 506)",
    "root": "root-506 (词根释义)",
    "example": "This is an example sentence for GKWord506."
  },
  {
    "word": "GKWord507",
    "phonetic": "/gkˈwɜːrd507/",
    "meaning": "历史 (词汇 507)",
    "root": "root-507 (词根释义)",
    "example": "This is an example sentence for GKWord507."
  },
  {
    "word": "GKWord508",
    "phonetic": "/gkˈwɜːrd508/",
    "meaning": "科学 (词汇 508)",
    "root": "root-508 (词根释义)",
    "example": "This is an example sentence for GKWord508."
  },
  {
    "word": "GKWord509",
    "phonetic": "/gkˈwɜːrd509/",
    "meaning": "地理 (词汇 509)",
    "root": "root-509 (词根释义)",
    "example": "This is an example sentence for GKWord509."
  },
  {
    "word": "GKWord510",
    "phonetic": "/gkˈwɜːrd510/",
    "meaning": "抽象的 (词汇 510)",
    "root": "root-510 (词根释义)",
    "example": "This is an example sentence for GKWord510."
  },
  {
    "word": "GKWord511",
    "phonetic": "/gkˈwɜːrd511/",
    "meaning": "抽象的 (词汇 511)",
    "root": "root-511 (词根释义)",
    "example": "This is an example sentence for GKWord511."
  },
  {
    "word": "GKWord512",
    "phonetic": "/gkˈwɜːrd512/",
    "meaning": "社会 (词汇 512)",
    "root": "root-512 (词根释义)",
    "example": "This is an example sentence for GKWord512."
  },
  {
    "word": "GKWord513",
    "phonetic": "/gkˈwɜːrd513/",
    "meaning": "政治 (词汇 513)",
    "root": "root-513 (词根释义)",
    "example": "This is an example sentence for GKWord513."
  },
  {
    "word": "GKWord514",
    "phonetic": "/gkˈwɜːrd514/",
    "meaning": "抽象的 (词汇 514)",
    "root": "root-514 (词根释义)",
    "example": "This is an example sentence for GKWord514."
  },
  {
    "word": "GKWord515",
    "phonetic": "/gkˈwɜːrd515/",
    "meaning": "历史 (词汇 515)",
    "root": "root-515 (词根释义)",
    "example": "This is an example sentence for GKWord515."
  },
  {
    "word": "GKWord516",
    "phonetic": "/gkˈwɜːrd516/",
    "meaning": "经济 (词汇 516)",
    "root": "root-516 (词根释义)",
    "example": "This is an example sentence for GKWord516."
  },
  {
    "word": "GKWord517",
    "phonetic": "/gkˈwɜːrd517/",
    "meaning": "文学 (词汇 517)",
    "root": "root-517 (词根释义)",
    "example": "This is an example sentence for GKWord517."
  },
  {
    "word": "GKWord518",
    "phonetic": "/gkˈwɜːrd518/",
    "meaning": "历史 (词汇 518)",
    "root": "root-518 (词根释义)",
    "example": "This is an example sentence for GKWord518."
  },
  {
    "word": "GKWord519",
    "phonetic": "/gkˈwɜːrd519/",
    "meaning": "经济 (词汇 519)",
    "root": "root-519 (词根释义)",
    "example": "This is an example sentence for GKWord519."
  },
  {
    "word": "GKWord520",
    "phonetic": "/gkˈwɜːrd520/",
    "meaning": "学术的 (词汇 520)",
    "root": "root-520 (词根释义)",
    "example": "This is an example sentence for GKWord520."
  },
  {
    "word": "GKWord521",
    "phonetic": "/gkˈwɜːrd521/",
    "meaning": "抽象的 (词汇 521)",
    "root": "root-521 (词根释义)",
    "example": "This is an example sentence for GKWord521."
  },
  {
    "word": "GKWord522",
    "phonetic": "/gkˈwɜːrd522/",
    "meaning": "历史 (词汇 522)",
    "root": "root-522 (词根释义)",
    "example": "This is an example sentence for GKWord522."
  },
  {
    "word": "GKWord523",
    "phonetic": "/gkˈwɜːrd523/",
    "meaning": "复杂的 (词汇 523)",
    "root": "root-523 (词根释义)",
    "example": "This is an example sentence for GKWord523."
  },
  {
    "word": "GKWord524",
    "phonetic": "/gkˈwɜːrd524/",
    "meaning": "抽象的 (词汇 524)",
    "root": "root-524 (词根释义)",
    "example": "This is an example sentence for GKWord524."
  },
  {
    "word": "GKWord525",
    "phonetic": "/gkˈwɜːrd525/",
    "meaning": "科学 (词汇 525)",
    "root": "root-525 (词根释义)",
    "example": "This is an example sentence for GKWord525."
  },
  {
    "word": "GKWord526",
    "phonetic": "/gkˈwɜːrd526/",
    "meaning": "学术的 (词汇 526)",
    "root": "root-526 (词根释义)",
    "example": "This is an example sentence for GKWord526."
  },
  {
    "word": "GKWord527",
    "phonetic": "/gkˈwɜːrd527/",
    "meaning": "社会 (词汇 527)",
    "root": "root-527 (词根释义)",
    "example": "This is an example sentence for GKWord527."
  },
  {
    "word": "GKWord528",
    "phonetic": "/gkˈwɜːrd528/",
    "meaning": "经济 (词汇 528)",
    "root": "root-528 (词根释义)",
    "example": "This is an example sentence for GKWord528."
  },
  {
    "word": "GKWord529",
    "phonetic": "/gkˈwɜːrd529/",
    "meaning": "文学 (词汇 529)",
    "root": "root-529 (词根释义)",
    "example": "This is an example sentence for GKWord529."
  },
  {
    "word": "GKWord530",
    "phonetic": "/gkˈwɜːrd530/",
    "meaning": "复杂的 (词汇 530)",
    "root": "root-530 (词根释义)",
    "example": "This is an example sentence for GKWord530."
  },
  {
    "word": "GKWord531",
    "phonetic": "/gkˈwɜːrd531/",
    "meaning": "复杂的 (词汇 531)",
    "root": "root-531 (词根释义)",
    "example": "This is an example sentence for GKWord531."
  },
  {
    "word": "GKWord532",
    "phonetic": "/gkˈwɜːrd532/",
    "meaning": "抽象的 (词汇 532)",
    "root": "root-532 (词根释义)",
    "example": "This is an example sentence for GKWord532."
  },
  {
    "word": "GKWord533",
    "phonetic": "/gkˈwɜːrd533/",
    "meaning": "经济 (词汇 533)",
    "root": "root-533 (词根释义)",
    "example": "This is an example sentence for GKWord533."
  },
  {
    "word": "GKWord534",
    "phonetic": "/gkˈwɜːrd534/",
    "meaning": "地理 (词汇 534)",
    "root": "root-534 (词根释义)",
    "example": "This is an example sentence for GKWord534."
  },
  {
    "word": "GKWord535",
    "phonetic": "/gkˈwɜːrd535/",
    "meaning": "经济 (词汇 535)",
    "root": "root-535 (词根释义)",
    "example": "This is an example sentence for GKWord535."
  },
  {
    "word": "GKWord536",
    "phonetic": "/gkˈwɜːrd536/",
    "meaning": "历史 (词汇 536)",
    "root": "root-536 (词根释义)",
    "example": "This is an example sentence for GKWord536."
  },
  {
    "word": "GKWord537",
    "phonetic": "/gkˈwɜːrd537/",
    "meaning": "政治 (词汇 537)",
    "root": "root-537 (词根释义)",
    "example": "This is an example sentence for GKWord537."
  },
  {
    "word": "GKWord538",
    "phonetic": "/gkˈwɜːrd538/",
    "meaning": "文学 (词汇 538)",
    "root": "root-538 (词根释义)",
    "example": "This is an example sentence for GKWord538."
  },
  {
    "word": "GKWord539",
    "phonetic": "/gkˈwɜːrd539/",
    "meaning": "抽象的 (词汇 539)",
    "root": "root-539 (词根释义)",
    "example": "This is an example sentence for GKWord539."
  },
  {
    "word": "GKWord540",
    "phonetic": "/gkˈwɜːrd540/",
    "meaning": "历史 (词汇 540)",
    "root": "root-540 (词根释义)",
    "example": "This is an example sentence for GKWord540."
  },
  {
    "word": "GKWord541",
    "phonetic": "/gkˈwɜːrd541/",
    "meaning": "学术的 (词汇 541)",
    "root": "root-541 (词根释义)",
    "example": "This is an example sentence for GKWord541."
  },
  {
    "word": "GKWord542",
    "phonetic": "/gkˈwɜːrd542/",
    "meaning": "政治 (词汇 542)",
    "root": "root-542 (词根释义)",
    "example": "This is an example sentence for GKWord542."
  },
  {
    "word": "GKWord543",
    "phonetic": "/gkˈwɜːrd543/",
    "meaning": "社会 (词汇 543)",
    "root": "root-543 (词根释义)",
    "example": "This is an example sentence for GKWord543."
  },
  {
    "word": "GKWord544",
    "phonetic": "/gkˈwɜːrd544/",
    "meaning": "复杂的 (词汇 544)",
    "root": "root-544 (词根释义)",
    "example": "This is an example sentence for GKWord544."
  },
  {
    "word": "GKWord545",
    "phonetic": "/gkˈwɜːrd545/",
    "meaning": "社会 (词汇 545)",
    "root": "root-545 (词根释义)",
    "example": "This is an example sentence for GKWord545."
  },
  {
    "word": "GKWord546",
    "phonetic": "/gkˈwɜːrd546/",
    "meaning": "抽象的 (词汇 546)",
    "root": "root-546 (词根释义)",
    "example": "This is an example sentence for GKWord546."
  },
  {
    "word": "GKWord547",
    "phonetic": "/gkˈwɜːrd547/",
    "meaning": "地理 (词汇 547)",
    "root": "root-547 (词根释义)",
    "example": "This is an example sentence for GKWord547."
  },
  {
    "word": "GKWord548",
    "phonetic": "/gkˈwɜːrd548/",
    "meaning": "经济 (词汇 548)",
    "root": "root-548 (词根释义)",
    "example": "This is an example sentence for GKWord548."
  },
  {
    "word": "GKWord549",
    "phonetic": "/gkˈwɜːrd549/",
    "meaning": "地理 (词汇 549)",
    "root": "root-549 (词根释义)",
    "example": "This is an example sentence for GKWord549."
  },
  {
    "word": "GKWord550",
    "phonetic": "/gkˈwɜːrd550/",
    "meaning": "复杂的 (词汇 550)",
    "root": "root-550 (词根释义)",
    "example": "This is an example sentence for GKWord550."
  },
  {
    "word": "GKWord551",
    "phonetic": "/gkˈwɜːrd551/",
    "meaning": "文学 (词汇 551)",
    "root": "root-551 (词根释义)",
    "example": "This is an example sentence for GKWord551."
  },
  {
    "word": "GKWord552",
    "phonetic": "/gkˈwɜːrd552/",
    "meaning": "社会 (词汇 552)",
    "root": "root-552 (词根释义)",
    "example": "This is an example sentence for GKWord552."
  },
  {
    "word": "GKWord553",
    "phonetic": "/gkˈwɜːrd553/",
    "meaning": "经济 (词汇 553)",
    "root": "root-553 (词根释义)",
    "example": "This is an example sentence for GKWord553."
  },
  {
    "word": "GKWord554",
    "phonetic": "/gkˈwɜːrd554/",
    "meaning": "历史 (词汇 554)",
    "root": "root-554 (词根释义)",
    "example": "This is an example sentence for GKWord554."
  },
  {
    "word": "GKWord555",
    "phonetic": "/gkˈwɜːrd555/",
    "meaning": "地理 (词汇 555)",
    "root": "root-555 (词根释义)",
    "example": "This is an example sentence for GKWord555."
  },
  {
    "word": "GKWord556",
    "phonetic": "/gkˈwɜːrd556/",
    "meaning": "复杂的 (词汇 556)",
    "root": "root-556 (词根释义)",
    "example": "This is an example sentence for GKWord556."
  },
  {
    "word": "GKWord557",
    "phonetic": "/gkˈwɜːrd557/",
    "meaning": "历史 (词汇 557)",
    "root": "root-557 (词根释义)",
    "example": "This is an example sentence for GKWord557."
  },
  {
    "word": "GKWord558",
    "phonetic": "/gkˈwɜːrd558/",
    "meaning": "抽象的 (词汇 558)",
    "root": "root-558 (词根释义)",
    "example": "This is an example sentence for GKWord558."
  },
  {
    "word": "GKWord559",
    "phonetic": "/gkˈwɜːrd559/",
    "meaning": "经济 (词汇 559)",
    "root": "root-559 (词根释义)",
    "example": "This is an example sentence for GKWord559."
  },
  {
    "word": "GKWord560",
    "phonetic": "/gkˈwɜːrd560/",
    "meaning": "抽象的 (词汇 560)",
    "root": "root-560 (词根释义)",
    "example": "This is an example sentence for GKWord560."
  },
  {
    "word": "GKWord561",
    "phonetic": "/gkˈwɜːrd561/",
    "meaning": "政治 (词汇 561)",
    "root": "root-561 (词根释义)",
    "example": "This is an example sentence for GKWord561."
  },
  {
    "word": "GKWord562",
    "phonetic": "/gkˈwɜːrd562/",
    "meaning": "地理 (词汇 562)",
    "root": "root-562 (词根释义)",
    "example": "This is an example sentence for GKWord562."
  },
  {
    "word": "GKWord563",
    "phonetic": "/gkˈwɜːrd563/",
    "meaning": "文学 (词汇 563)",
    "root": "root-563 (词根释义)",
    "example": "This is an example sentence for GKWord563."
  },
  {
    "word": "GKWord564",
    "phonetic": "/gkˈwɜːrd564/",
    "meaning": "复杂的 (词汇 564)",
    "root": "root-564 (词根释义)",
    "example": "This is an example sentence for GKWord564."
  },
  {
    "word": "GKWord565",
    "phonetic": "/gkˈwɜːrd565/",
    "meaning": "政治 (词汇 565)",
    "root": "root-565 (词根释义)",
    "example": "This is an example sentence for GKWord565."
  },
  {
    "word": "GKWord566",
    "phonetic": "/gkˈwɜːrd566/",
    "meaning": "抽象的 (词汇 566)",
    "root": "root-566 (词根释义)",
    "example": "This is an example sentence for GKWord566."
  },
  {
    "word": "GKWord567",
    "phonetic": "/gkˈwɜːrd567/",
    "meaning": "复杂的 (词汇 567)",
    "root": "root-567 (词根释义)",
    "example": "This is an example sentence for GKWord567."
  },
  {
    "word": "GKWord568",
    "phonetic": "/gkˈwɜːrd568/",
    "meaning": "学术的 (词汇 568)",
    "root": "root-568 (词根释义)",
    "example": "This is an example sentence for GKWord568."
  },
  {
    "word": "GKWord569",
    "phonetic": "/gkˈwɜːrd569/",
    "meaning": "复杂的 (词汇 569)",
    "root": "root-569 (词根释义)",
    "example": "This is an example sentence for GKWord569."
  },
  {
    "word": "GKWord570",
    "phonetic": "/gkˈwɜːrd570/",
    "meaning": "文学 (词汇 570)",
    "root": "root-570 (词根释义)",
    "example": "This is an example sentence for GKWord570."
  },
  {
    "word": "GKWord571",
    "phonetic": "/gkˈwɜːrd571/",
    "meaning": "历史 (词汇 571)",
    "root": "root-571 (词根释义)",
    "example": "This is an example sentence for GKWord571."
  },
  {
    "word": "GKWord572",
    "phonetic": "/gkˈwɜːrd572/",
    "meaning": "抽象的 (词汇 572)",
    "root": "root-572 (词根释义)",
    "example": "This is an example sentence for GKWord572."
  },
  {
    "word": "GKWord573",
    "phonetic": "/gkˈwɜːrd573/",
    "meaning": "科学 (词汇 573)",
    "root": "root-573 (词根释义)",
    "example": "This is an example sentence for GKWord573."
  },
  {
    "word": "GKWord574",
    "phonetic": "/gkˈwɜːrd574/",
    "meaning": "科学 (词汇 574)",
    "root": "root-574 (词根释义)",
    "example": "This is an example sentence for GKWord574."
  },
  {
    "word": "GKWord575",
    "phonetic": "/gkˈwɜːrd575/",
    "meaning": "文学 (词汇 575)",
    "root": "root-575 (词根释义)",
    "example": "This is an example sentence for GKWord575."
  },
  {
    "word": "GKWord576",
    "phonetic": "/gkˈwɜːrd576/",
    "meaning": "文学 (词汇 576)",
    "root": "root-576 (词根释义)",
    "example": "This is an example sentence for GKWord576."
  },
  {
    "word": "GKWord577",
    "phonetic": "/gkˈwɜːrd577/",
    "meaning": "科学 (词汇 577)",
    "root": "root-577 (词根释义)",
    "example": "This is an example sentence for GKWord577."
  },
  {
    "word": "GKWord578",
    "phonetic": "/gkˈwɜːrd578/",
    "meaning": "科学 (词汇 578)",
    "root": "root-578 (词根释义)",
    "example": "This is an example sentence for GKWord578."
  },
  {
    "word": "GKWord579",
    "phonetic": "/gkˈwɜːrd579/",
    "meaning": "社会 (词汇 579)",
    "root": "root-579 (词根释义)",
    "example": "This is an example sentence for GKWord579."
  },
  {
    "word": "GKWord580",
    "phonetic": "/gkˈwɜːrd580/",
    "meaning": "历史 (词汇 580)",
    "root": "root-580 (词根释义)",
    "example": "This is an example sentence for GKWord580."
  },
  {
    "word": "GKWord581",
    "phonetic": "/gkˈwɜːrd581/",
    "meaning": "文学 (词汇 581)",
    "root": "root-581 (词根释义)",
    "example": "This is an example sentence for GKWord581."
  },
  {
    "word": "GKWord582",
    "phonetic": "/gkˈwɜːrd582/",
    "meaning": "经济 (词汇 582)",
    "root": "root-582 (词根释义)",
    "example": "This is an example sentence for GKWord582."
  },
  {
    "word": "GKWord583",
    "phonetic": "/gkˈwɜːrd583/",
    "meaning": "复杂的 (词汇 583)",
    "root": "root-583 (词根释义)",
    "example": "This is an example sentence for GKWord583."
  },
  {
    "word": "GKWord584",
    "phonetic": "/gkˈwɜːrd584/",
    "meaning": "学术的 (词汇 584)",
    "root": "root-584 (词根释义)",
    "example": "This is an example sentence for GKWord584."
  },
  {
    "word": "GKWord585",
    "phonetic": "/gkˈwɜːrd585/",
    "meaning": "科学 (词汇 585)",
    "root": "root-585 (词根释义)",
    "example": "This is an example sentence for GKWord585."
  },
  {
    "word": "GKWord586",
    "phonetic": "/gkˈwɜːrd586/",
    "meaning": "经济 (词汇 586)",
    "root": "root-586 (词根释义)",
    "example": "This is an example sentence for GKWord586."
  },
  {
    "word": "GKWord587",
    "phonetic": "/gkˈwɜːrd587/",
    "meaning": "文学 (词汇 587)",
    "root": "root-587 (词根释义)",
    "example": "This is an example sentence for GKWord587."
  },
  {
    "word": "GKWord588",
    "phonetic": "/gkˈwɜːrd588/",
    "meaning": "学术的 (词汇 588)",
    "root": "root-588 (词根释义)",
    "example": "This is an example sentence for GKWord588."
  },
  {
    "word": "GKWord589",
    "phonetic": "/gkˈwɜːrd589/",
    "meaning": "科学 (词汇 589)",
    "root": "root-589 (词根释义)",
    "example": "This is an example sentence for GKWord589."
  },
  {
    "word": "GKWord590",
    "phonetic": "/gkˈwɜːrd590/",
    "meaning": "历史 (词汇 590)",
    "root": "root-590 (词根释义)",
    "example": "This is an example sentence for GKWord590."
  },
  {
    "word": "GKWord591",
    "phonetic": "/gkˈwɜːrd591/",
    "meaning": "复杂的 (词汇 591)",
    "root": "root-591 (词根释义)",
    "example": "This is an example sentence for GKWord591."
  },
  {
    "word": "GKWord592",
    "phonetic": "/gkˈwɜːrd592/",
    "meaning": "科学 (词汇 592)",
    "root": "root-592 (词根释义)",
    "example": "This is an example sentence for GKWord592."
  },
  {
    "word": "GKWord593",
    "phonetic": "/gkˈwɜːrd593/",
    "meaning": "科学 (词汇 593)",
    "root": "root-593 (词根释义)",
    "example": "This is an example sentence for GKWord593."
  },
  {
    "word": "GKWord594",
    "phonetic": "/gkˈwɜːrd594/",
    "meaning": "经济 (词汇 594)",
    "root": "root-594 (词根释义)",
    "example": "This is an example sentence for GKWord594."
  },
  {
    "word": "GKWord595",
    "phonetic": "/gkˈwɜːrd595/",
    "meaning": "地理 (词汇 595)",
    "root": "root-595 (词根释义)",
    "example": "This is an example sentence for GKWord595."
  },
  {
    "word": "GKWord596",
    "phonetic": "/gkˈwɜːrd596/",
    "meaning": "地理 (词汇 596)",
    "root": "root-596 (词根释义)",
    "example": "This is an example sentence for GKWord596."
  },
  {
    "word": "GKWord597",
    "phonetic": "/gkˈwɜːrd597/",
    "meaning": "文学 (词汇 597)",
    "root": "root-597 (词根释义)",
    "example": "This is an example sentence for GKWord597."
  },
  {
    "word": "GKWord598",
    "phonetic": "/gkˈwɜːrd598/",
    "meaning": "抽象的 (词汇 598)",
    "root": "root-598 (词根释义)",
    "example": "This is an example sentence for GKWord598."
  },
  {
    "word": "GKWord599",
    "phonetic": "/gkˈwɜːrd599/",
    "meaning": "抽象的 (词汇 599)",
    "root": "root-599 (词根释义)",
    "example": "This is an example sentence for GKWord599."
  },
  {
    "word": "GKWord600",
    "phonetic": "/gkˈwɜːrd600/",
    "meaning": "地理 (词汇 600)",
    "root": "root-600 (词根释义)",
    "example": "This is an example sentence for GKWord600."
  },
  {
    "word": "GKWord601",
    "phonetic": "/gkˈwɜːrd601/",
    "meaning": "文学 (词汇 601)",
    "root": "root-601 (词根释义)",
    "example": "This is an example sentence for GKWord601."
  },
  {
    "word": "GKWord602",
    "phonetic": "/gkˈwɜːrd602/",
    "meaning": "社会 (词汇 602)",
    "root": "root-602 (词根释义)",
    "example": "This is an example sentence for GKWord602."
  },
  {
    "word": "GKWord603",
    "phonetic": "/gkˈwɜːrd603/",
    "meaning": "抽象的 (词汇 603)",
    "root": "root-603 (词根释义)",
    "example": "This is an example sentence for GKWord603."
  },
  {
    "word": "GKWord604",
    "phonetic": "/gkˈwɜːrd604/",
    "meaning": "学术的 (词汇 604)",
    "root": "root-604 (词根释义)",
    "example": "This is an example sentence for GKWord604."
  },
  {
    "word": "GKWord605",
    "phonetic": "/gkˈwɜːrd605/",
    "meaning": "学术的 (词汇 605)",
    "root": "root-605 (词根释义)",
    "example": "This is an example sentence for GKWord605."
  },
  {
    "word": "GKWord606",
    "phonetic": "/gkˈwɜːrd606/",
    "meaning": "经济 (词汇 606)",
    "root": "root-606 (词根释义)",
    "example": "This is an example sentence for GKWord606."
  },
  {
    "word": "GKWord607",
    "phonetic": "/gkˈwɜːrd607/",
    "meaning": "经济 (词汇 607)",
    "root": "root-607 (词根释义)",
    "example": "This is an example sentence for GKWord607."
  },
  {
    "word": "GKWord608",
    "phonetic": "/gkˈwɜːrd608/",
    "meaning": "抽象的 (词汇 608)",
    "root": "root-608 (词根释义)",
    "example": "This is an example sentence for GKWord608."
  },
  {
    "word": "GKWord609",
    "phonetic": "/gkˈwɜːrd609/",
    "meaning": "文学 (词汇 609)",
    "root": "root-609 (词根释义)",
    "example": "This is an example sentence for GKWord609."
  },
  {
    "word": "GKWord610",
    "phonetic": "/gkˈwɜːrd610/",
    "meaning": "学术的 (词汇 610)",
    "root": "root-610 (词根释义)",
    "example": "This is an example sentence for GKWord610."
  },
  {
    "word": "GKWord611",
    "phonetic": "/gkˈwɜːrd611/",
    "meaning": "学术的 (词汇 611)",
    "root": "root-611 (词根释义)",
    "example": "This is an example sentence for GKWord611."
  },
  {
    "word": "GKWord612",
    "phonetic": "/gkˈwɜːrd612/",
    "meaning": "经济 (词汇 612)",
    "root": "root-612 (词根释义)",
    "example": "This is an example sentence for GKWord612."
  },
  {
    "word": "GKWord613",
    "phonetic": "/gkˈwɜːrd613/",
    "meaning": "经济 (词汇 613)",
    "root": "root-613 (词根释义)",
    "example": "This is an example sentence for GKWord613."
  },
  {
    "word": "GKWord614",
    "phonetic": "/gkˈwɜːrd614/",
    "meaning": "社会 (词汇 614)",
    "root": "root-614 (词根释义)",
    "example": "This is an example sentence for GKWord614."
  },
  {
    "word": "GKWord615",
    "phonetic": "/gkˈwɜːrd615/",
    "meaning": "复杂的 (词汇 615)",
    "root": "root-615 (词根释义)",
    "example": "This is an example sentence for GKWord615."
  },
  {
    "word": "GKWord616",
    "phonetic": "/gkˈwɜːrd616/",
    "meaning": "社会 (词汇 616)",
    "root": "root-616 (词根释义)",
    "example": "This is an example sentence for GKWord616."
  },
  {
    "word": "GKWord617",
    "phonetic": "/gkˈwɜːrd617/",
    "meaning": "科学 (词汇 617)",
    "root": "root-617 (词根释义)",
    "example": "This is an example sentence for GKWord617."
  },
  {
    "word": "GKWord618",
    "phonetic": "/gkˈwɜːrd618/",
    "meaning": "历史 (词汇 618)",
    "root": "root-618 (词根释义)",
    "example": "This is an example sentence for GKWord618."
  },
  {
    "word": "GKWord619",
    "phonetic": "/gkˈwɜːrd619/",
    "meaning": "文学 (词汇 619)",
    "root": "root-619 (词根释义)",
    "example": "This is an example sentence for GKWord619."
  },
  {
    "word": "GKWord620",
    "phonetic": "/gkˈwɜːrd620/",
    "meaning": "历史 (词汇 620)",
    "root": "root-620 (词根释义)",
    "example": "This is an example sentence for GKWord620."
  },
  {
    "word": "GKWord621",
    "phonetic": "/gkˈwɜːrd621/",
    "meaning": "政治 (词汇 621)",
    "root": "root-621 (词根释义)",
    "example": "This is an example sentence for GKWord621."
  },
  {
    "word": "GKWord622",
    "phonetic": "/gkˈwɜːrd622/",
    "meaning": "社会 (词汇 622)",
    "root": "root-622 (词根释义)",
    "example": "This is an example sentence for GKWord622."
  },
  {
    "word": "GKWord623",
    "phonetic": "/gkˈwɜːrd623/",
    "meaning": "经济 (词汇 623)",
    "root": "root-623 (词根释义)",
    "example": "This is an example sentence for GKWord623."
  },
  {
    "word": "GKWord624",
    "phonetic": "/gkˈwɜːrd624/",
    "meaning": "学术的 (词汇 624)",
    "root": "root-624 (词根释义)",
    "example": "This is an example sentence for GKWord624."
  },
  {
    "word": "GKWord625",
    "phonetic": "/gkˈwɜːrd625/",
    "meaning": "复杂的 (词汇 625)",
    "root": "root-625 (词根释义)",
    "example": "This is an example sentence for GKWord625."
  },
  {
    "word": "GKWord626",
    "phonetic": "/gkˈwɜːrd626/",
    "meaning": "抽象的 (词汇 626)",
    "root": "root-626 (词根释义)",
    "example": "This is an example sentence for GKWord626."
  },
  {
    "word": "GKWord627",
    "phonetic": "/gkˈwɜːrd627/",
    "meaning": "学术的 (词汇 627)",
    "root": "root-627 (词根释义)",
    "example": "This is an example sentence for GKWord627."
  },
  {
    "word": "GKWord628",
    "phonetic": "/gkˈwɜːrd628/",
    "meaning": "文学 (词汇 628)",
    "root": "root-628 (词根释义)",
    "example": "This is an example sentence for GKWord628."
  },
  {
    "word": "GKWord629",
    "phonetic": "/gkˈwɜːrd629/",
    "meaning": "文学 (词汇 629)",
    "root": "root-629 (词根释义)",
    "example": "This is an example sentence for GKWord629."
  },
  {
    "word": "GKWord630",
    "phonetic": "/gkˈwɜːrd630/",
    "meaning": "政治 (词汇 630)",
    "root": "root-630 (词根释义)",
    "example": "This is an example sentence for GKWord630."
  },
  {
    "word": "GKWord631",
    "phonetic": "/gkˈwɜːrd631/",
    "meaning": "学术的 (词汇 631)",
    "root": "root-631 (词根释义)",
    "example": "This is an example sentence for GKWord631."
  },
  {
    "word": "GKWord632",
    "phonetic": "/gkˈwɜːrd632/",
    "meaning": "复杂的 (词汇 632)",
    "root": "root-632 (词根释义)",
    "example": "This is an example sentence for GKWord632."
  },
  {
    "word": "GKWord633",
    "phonetic": "/gkˈwɜːrd633/",
    "meaning": "经济 (词汇 633)",
    "root": "root-633 (词根释义)",
    "example": "This is an example sentence for GKWord633."
  },
  {
    "word": "GKWord634",
    "phonetic": "/gkˈwɜːrd634/",
    "meaning": "文学 (词汇 634)",
    "root": "root-634 (词根释义)",
    "example": "This is an example sentence for GKWord634."
  },
  {
    "word": "GKWord635",
    "phonetic": "/gkˈwɜːrd635/",
    "meaning": "科学 (词汇 635)",
    "root": "root-635 (词根释义)",
    "example": "This is an example sentence for GKWord635."
  },
  {
    "word": "GKWord636",
    "phonetic": "/gkˈwɜːrd636/",
    "meaning": "经济 (词汇 636)",
    "root": "root-636 (词根释义)",
    "example": "This is an example sentence for GKWord636."
  },
  {
    "word": "GKWord637",
    "phonetic": "/gkˈwɜːrd637/",
    "meaning": "学术的 (词汇 637)",
    "root": "root-637 (词根释义)",
    "example": "This is an example sentence for GKWord637."
  },
  {
    "word": "GKWord638",
    "phonetic": "/gkˈwɜːrd638/",
    "meaning": "文学 (词汇 638)",
    "root": "root-638 (词根释义)",
    "example": "This is an example sentence for GKWord638."
  },
  {
    "word": "GKWord639",
    "phonetic": "/gkˈwɜːrd639/",
    "meaning": "政治 (词汇 639)",
    "root": "root-639 (词根释义)",
    "example": "This is an example sentence for GKWord639."
  },
  {
    "word": "GKWord640",
    "phonetic": "/gkˈwɜːrd640/",
    "meaning": "文学 (词汇 640)",
    "root": "root-640 (词根释义)",
    "example": "This is an example sentence for GKWord640."
  },
  {
    "word": "GKWord641",
    "phonetic": "/gkˈwɜːrd641/",
    "meaning": "经济 (词汇 641)",
    "root": "root-641 (词根释义)",
    "example": "This is an example sentence for GKWord641."
  },
  {
    "word": "GKWord642",
    "phonetic": "/gkˈwɜːrd642/",
    "meaning": "科学 (词汇 642)",
    "root": "root-642 (词根释义)",
    "example": "This is an example sentence for GKWord642."
  },
  {
    "word": "GKWord643",
    "phonetic": "/gkˈwɜːrd643/",
    "meaning": "政治 (词汇 643)",
    "root": "root-643 (词根释义)",
    "example": "This is an example sentence for GKWord643."
  },
  {
    "word": "GKWord644",
    "phonetic": "/gkˈwɜːrd644/",
    "meaning": "经济 (词汇 644)",
    "root": "root-644 (词根释义)",
    "example": "This is an example sentence for GKWord644."
  },
  {
    "word": "GKWord645",
    "phonetic": "/gkˈwɜːrd645/",
    "meaning": "政治 (词汇 645)",
    "root": "root-645 (词根释义)",
    "example": "This is an example sentence for GKWord645."
  },
  {
    "word": "GKWord646",
    "phonetic": "/gkˈwɜːrd646/",
    "meaning": "历史 (词汇 646)",
    "root": "root-646 (词根释义)",
    "example": "This is an example sentence for GKWord646."
  },
  {
    "word": "GKWord647",
    "phonetic": "/gkˈwɜːrd647/",
    "meaning": "社会 (词汇 647)",
    "root": "root-647 (词根释义)",
    "example": "This is an example sentence for GKWord647."
  },
  {
    "word": "GKWord648",
    "phonetic": "/gkˈwɜːrd648/",
    "meaning": "社会 (词汇 648)",
    "root": "root-648 (词根释义)",
    "example": "This is an example sentence for GKWord648."
  },
  {
    "word": "GKWord649",
    "phonetic": "/gkˈwɜːrd649/",
    "meaning": "地理 (词汇 649)",
    "root": "root-649 (词根释义)",
    "example": "This is an example sentence for GKWord649."
  },
  {
    "word": "GKWord650",
    "phonetic": "/gkˈwɜːrd650/",
    "meaning": "抽象的 (词汇 650)",
    "root": "root-650 (词根释义)",
    "example": "This is an example sentence for GKWord650."
  },
  {
    "word": "GKWord651",
    "phonetic": "/gkˈwɜːrd651/",
    "meaning": "复杂的 (词汇 651)",
    "root": "root-651 (词根释义)",
    "example": "This is an example sentence for GKWord651."
  },
  {
    "word": "GKWord652",
    "phonetic": "/gkˈwɜːrd652/",
    "meaning": "复杂的 (词汇 652)",
    "root": "root-652 (词根释义)",
    "example": "This is an example sentence for GKWord652."
  },
  {
    "word": "GKWord653",
    "phonetic": "/gkˈwɜːrd653/",
    "meaning": "社会 (词汇 653)",
    "root": "root-653 (词根释义)",
    "example": "This is an example sentence for GKWord653."
  },
  {
    "word": "GKWord654",
    "phonetic": "/gkˈwɜːrd654/",
    "meaning": "地理 (词汇 654)",
    "root": "root-654 (词根释义)",
    "example": "This is an example sentence for GKWord654."
  },
  {
    "word": "GKWord655",
    "phonetic": "/gkˈwɜːrd655/",
    "meaning": "地理 (词汇 655)",
    "root": "root-655 (词根释义)",
    "example": "This is an example sentence for GKWord655."
  },
  {
    "word": "GKWord656",
    "phonetic": "/gkˈwɜːrd656/",
    "meaning": "抽象的 (词汇 656)",
    "root": "root-656 (词根释义)",
    "example": "This is an example sentence for GKWord656."
  },
  {
    "word": "GKWord657",
    "phonetic": "/gkˈwɜːrd657/",
    "meaning": "历史 (词汇 657)",
    "root": "root-657 (词根释义)",
    "example": "This is an example sentence for GKWord657."
  },
  {
    "word": "GKWord658",
    "phonetic": "/gkˈwɜːrd658/",
    "meaning": "科学 (词汇 658)",
    "root": "root-658 (词根释义)",
    "example": "This is an example sentence for GKWord658."
  },
  {
    "word": "GKWord659",
    "phonetic": "/gkˈwɜːrd659/",
    "meaning": "复杂的 (词汇 659)",
    "root": "root-659 (词根释义)",
    "example": "This is an example sentence for GKWord659."
  },
  {
    "word": "GKWord660",
    "phonetic": "/gkˈwɜːrd660/",
    "meaning": "科学 (词汇 660)",
    "root": "root-660 (词根释义)",
    "example": "This is an example sentence for GKWord660."
  },
  {
    "word": "GKWord661",
    "phonetic": "/gkˈwɜːrd661/",
    "meaning": "经济 (词汇 661)",
    "root": "root-661 (词根释义)",
    "example": "This is an example sentence for GKWord661."
  },
  {
    "word": "GKWord662",
    "phonetic": "/gkˈwɜːrd662/",
    "meaning": "历史 (词汇 662)",
    "root": "root-662 (词根释义)",
    "example": "This is an example sentence for GKWord662."
  },
  {
    "word": "GKWord663",
    "phonetic": "/gkˈwɜːrd663/",
    "meaning": "地理 (词汇 663)",
    "root": "root-663 (词根释义)",
    "example": "This is an example sentence for GKWord663."
  },
  {
    "word": "GKWord664",
    "phonetic": "/gkˈwɜːrd664/",
    "meaning": "科学 (词汇 664)",
    "root": "root-664 (词根释义)",
    "example": "This is an example sentence for GKWord664."
  },
  {
    "word": "GKWord665",
    "phonetic": "/gkˈwɜːrd665/",
    "meaning": "地理 (词汇 665)",
    "root": "root-665 (词根释义)",
    "example": "This is an example sentence for GKWord665."
  },
  {
    "word": "GKWord666",
    "phonetic": "/gkˈwɜːrd666/",
    "meaning": "文学 (词汇 666)",
    "root": "root-666 (词根释义)",
    "example": "This is an example sentence for GKWord666."
  },
  {
    "word": "GKWord667",
    "phonetic": "/gkˈwɜːrd667/",
    "meaning": "文学 (词汇 667)",
    "root": "root-667 (词根释义)",
    "example": "This is an example sentence for GKWord667."
  },
  {
    "word": "GKWord668",
    "phonetic": "/gkˈwɜːrd668/",
    "meaning": "抽象的 (词汇 668)",
    "root": "root-668 (词根释义)",
    "example": "This is an example sentence for GKWord668."
  },
  {
    "word": "GKWord669",
    "phonetic": "/gkˈwɜːrd669/",
    "meaning": "地理 (词汇 669)",
    "root": "root-669 (词根释义)",
    "example": "This is an example sentence for GKWord669."
  },
  {
    "word": "GKWord670",
    "phonetic": "/gkˈwɜːrd670/",
    "meaning": "社会 (词汇 670)",
    "root": "root-670 (词根释义)",
    "example": "This is an example sentence for GKWord670."
  },
  {
    "word": "GKWord671",
    "phonetic": "/gkˈwɜːrd671/",
    "meaning": "文学 (词汇 671)",
    "root": "root-671 (词根释义)",
    "example": "This is an example sentence for GKWord671."
  },
  {
    "word": "GKWord672",
    "phonetic": "/gkˈwɜːrd672/",
    "meaning": "地理 (词汇 672)",
    "root": "root-672 (词根释义)",
    "example": "This is an example sentence for GKWord672."
  },
  {
    "word": "GKWord673",
    "phonetic": "/gkˈwɜːrd673/",
    "meaning": "抽象的 (词汇 673)",
    "root": "root-673 (词根释义)",
    "example": "This is an example sentence for GKWord673."
  },
  {
    "word": "GKWord674",
    "phonetic": "/gkˈwɜːrd674/",
    "meaning": "历史 (词汇 674)",
    "root": "root-674 (词根释义)",
    "example": "This is an example sentence for GKWord674."
  },
  {
    "word": "GKWord675",
    "phonetic": "/gkˈwɜːrd675/",
    "meaning": "历史 (词汇 675)",
    "root": "root-675 (词根释义)",
    "example": "This is an example sentence for GKWord675."
  },
  {
    "word": "GKWord676",
    "phonetic": "/gkˈwɜːrd676/",
    "meaning": "文学 (词汇 676)",
    "root": "root-676 (词根释义)",
    "example": "This is an example sentence for GKWord676."
  },
  {
    "word": "GKWord677",
    "phonetic": "/gkˈwɜːrd677/",
    "meaning": "地理 (词汇 677)",
    "root": "root-677 (词根释义)",
    "example": "This is an example sentence for GKWord677."
  },
  {
    "word": "GKWord678",
    "phonetic": "/gkˈwɜːrd678/",
    "meaning": "科学 (词汇 678)",
    "root": "root-678 (词根释义)",
    "example": "This is an example sentence for GKWord678."
  },
  {
    "word": "GKWord679",
    "phonetic": "/gkˈwɜːrd679/",
    "meaning": "文学 (词汇 679)",
    "root": "root-679 (词根释义)",
    "example": "This is an example sentence for GKWord679."
  },
  {
    "word": "GKWord680",
    "phonetic": "/gkˈwɜːrd680/",
    "meaning": "地理 (词汇 680)",
    "root": "root-680 (词根释义)",
    "example": "This is an example sentence for GKWord680."
  },
  {
    "word": "GKWord681",
    "phonetic": "/gkˈwɜːrd681/",
    "meaning": "政治 (词汇 681)",
    "root": "root-681 (词根释义)",
    "example": "This is an example sentence for GKWord681."
  },
  {
    "word": "GKWord682",
    "phonetic": "/gkˈwɜːrd682/",
    "meaning": "文学 (词汇 682)",
    "root": "root-682 (词根释义)",
    "example": "This is an example sentence for GKWord682."
  },
  {
    "word": "GKWord683",
    "phonetic": "/gkˈwɜːrd683/",
    "meaning": "复杂的 (词汇 683)",
    "root": "root-683 (词根释义)",
    "example": "This is an example sentence for GKWord683."
  },
  {
    "word": "GKWord684",
    "phonetic": "/gkˈwɜːrd684/",
    "meaning": "历史 (词汇 684)",
    "root": "root-684 (词根释义)",
    "example": "This is an example sentence for GKWord684."
  },
  {
    "word": "GKWord685",
    "phonetic": "/gkˈwɜːrd685/",
    "meaning": "社会 (词汇 685)",
    "root": "root-685 (词根释义)",
    "example": "This is an example sentence for GKWord685."
  },
  {
    "word": "GKWord686",
    "phonetic": "/gkˈwɜːrd686/",
    "meaning": "经济 (词汇 686)",
    "root": "root-686 (词根释义)",
    "example": "This is an example sentence for GKWord686."
  },
  {
    "word": "GKWord687",
    "phonetic": "/gkˈwɜːrd687/",
    "meaning": "学术的 (词汇 687)",
    "root": "root-687 (词根释义)",
    "example": "This is an example sentence for GKWord687."
  },
  {
    "word": "GKWord688",
    "phonetic": "/gkˈwɜːrd688/",
    "meaning": "学术的 (词汇 688)",
    "root": "root-688 (词根释义)",
    "example": "This is an example sentence for GKWord688."
  },
  {
    "word": "GKWord689",
    "phonetic": "/gkˈwɜːrd689/",
    "meaning": "政治 (词汇 689)",
    "root": "root-689 (词根释义)",
    "example": "This is an example sentence for GKWord689."
  },
  {
    "word": "GKWord690",
    "phonetic": "/gkˈwɜːrd690/",
    "meaning": "文学 (词汇 690)",
    "root": "root-690 (词根释义)",
    "example": "This is an example sentence for GKWord690."
  },
  {
    "word": "GKWord691",
    "phonetic": "/gkˈwɜːrd691/",
    "meaning": "社会 (词汇 691)",
    "root": "root-691 (词根释义)",
    "example": "This is an example sentence for GKWord691."
  },
  {
    "word": "GKWord692",
    "phonetic": "/gkˈwɜːrd692/",
    "meaning": "复杂的 (词汇 692)",
    "root": "root-692 (词根释义)",
    "example": "This is an example sentence for GKWord692."
  },
  {
    "word": "GKWord693",
    "phonetic": "/gkˈwɜːrd693/",
    "meaning": "历史 (词汇 693)",
    "root": "root-693 (词根释义)",
    "example": "This is an example sentence for GKWord693."
  },
  {
    "word": "GKWord694",
    "phonetic": "/gkˈwɜːrd694/",
    "meaning": "文学 (词汇 694)",
    "root": "root-694 (词根释义)",
    "example": "This is an example sentence for GKWord694."
  },
  {
    "word": "GKWord695",
    "phonetic": "/gkˈwɜːrd695/",
    "meaning": "地理 (词汇 695)",
    "root": "root-695 (词根释义)",
    "example": "This is an example sentence for GKWord695."
  },
  {
    "word": "GKWord696",
    "phonetic": "/gkˈwɜːrd696/",
    "meaning": "复杂的 (词汇 696)",
    "root": "root-696 (词根释义)",
    "example": "This is an example sentence for GKWord696."
  },
  {
    "word": "GKWord697",
    "phonetic": "/gkˈwɜːrd697/",
    "meaning": "地理 (词汇 697)",
    "root": "root-697 (词根释义)",
    "example": "This is an example sentence for GKWord697."
  },
  {
    "word": "GKWord698",
    "phonetic": "/gkˈwɜːrd698/",
    "meaning": "抽象的 (词汇 698)",
    "root": "root-698 (词根释义)",
    "example": "This is an example sentence for GKWord698."
  },
  {
    "word": "GKWord699",
    "phonetic": "/gkˈwɜːrd699/",
    "meaning": "抽象的 (词汇 699)",
    "root": "root-699 (词根释义)",
    "example": "This is an example sentence for GKWord699."
  },
  {
    "word": "GKWord700",
    "phonetic": "/gkˈwɜːrd700/",
    "meaning": "经济 (词汇 700)",
    "root": "root-700 (词根释义)",
    "example": "This is an example sentence for GKWord700."
  },
  {
    "word": "GKWord701",
    "phonetic": "/gkˈwɜːrd701/",
    "meaning": "科学 (词汇 701)",
    "root": "root-701 (词根释义)",
    "example": "This is an example sentence for GKWord701."
  },
  {
    "word": "GKWord702",
    "phonetic": "/gkˈwɜːrd702/",
    "meaning": "社会 (词汇 702)",
    "root": "root-702 (词根释义)",
    "example": "This is an example sentence for GKWord702."
  },
  {
    "word": "GKWord703",
    "phonetic": "/gkˈwɜːrd703/",
    "meaning": "抽象的 (词汇 703)",
    "root": "root-703 (词根释义)",
    "example": "This is an example sentence for GKWord703."
  },
  {
    "word": "GKWord704",
    "phonetic": "/gkˈwɜːrd704/",
    "meaning": "文学 (词汇 704)",
    "root": "root-704 (词根释义)",
    "example": "This is an example sentence for GKWord704."
  },
  {
    "word": "GKWord705",
    "phonetic": "/gkˈwɜːrd705/",
    "meaning": "社会 (词汇 705)",
    "root": "root-705 (词根释义)",
    "example": "This is an example sentence for GKWord705."
  },
  {
    "word": "GKWord706",
    "phonetic": "/gkˈwɜːrd706/",
    "meaning": "抽象的 (词汇 706)",
    "root": "root-706 (词根释义)",
    "example": "This is an example sentence for GKWord706."
  },
  {
    "word": "GKWord707",
    "phonetic": "/gkˈwɜːrd707/",
    "meaning": "经济 (词汇 707)",
    "root": "root-707 (词根释义)",
    "example": "This is an example sentence for GKWord707."
  },
  {
    "word": "GKWord708",
    "phonetic": "/gkˈwɜːrd708/",
    "meaning": "地理 (词汇 708)",
    "root": "root-708 (词根释义)",
    "example": "This is an example sentence for GKWord708."
  },
  {
    "word": "GKWord709",
    "phonetic": "/gkˈwɜːrd709/",
    "meaning": "抽象的 (词汇 709)",
    "root": "root-709 (词根释义)",
    "example": "This is an example sentence for GKWord709."
  },
  {
    "word": "GKWord710",
    "phonetic": "/gkˈwɜːrd710/",
    "meaning": "地理 (词汇 710)",
    "root": "root-710 (词根释义)",
    "example": "This is an example sentence for GKWord710."
  },
  {
    "word": "GKWord711",
    "phonetic": "/gkˈwɜːrd711/",
    "meaning": "历史 (词汇 711)",
    "root": "root-711 (词根释义)",
    "example": "This is an example sentence for GKWord711."
  },
  {
    "word": "GKWord712",
    "phonetic": "/gkˈwɜːrd712/",
    "meaning": "复杂的 (词汇 712)",
    "root": "root-712 (词根释义)",
    "example": "This is an example sentence for GKWord712."
  },
  {
    "word": "GKWord713",
    "phonetic": "/gkˈwɜːrd713/",
    "meaning": "学术的 (词汇 713)",
    "root": "root-713 (词根释义)",
    "example": "This is an example sentence for GKWord713."
  },
  {
    "word": "GKWord714",
    "phonetic": "/gkˈwɜːrd714/",
    "meaning": "经济 (词汇 714)",
    "root": "root-714 (词根释义)",
    "example": "This is an example sentence for GKWord714."
  },
  {
    "word": "GKWord715",
    "phonetic": "/gkˈwɜːrd715/",
    "meaning": "科学 (词汇 715)",
    "root": "root-715 (词根释义)",
    "example": "This is an example sentence for GKWord715."
  },
  {
    "word": "GKWord716",
    "phonetic": "/gkˈwɜːrd716/",
    "meaning": "社会 (词汇 716)",
    "root": "root-716 (词根释义)",
    "example": "This is an example sentence for GKWord716."
  },
  {
    "word": "GKWord717",
    "phonetic": "/gkˈwɜːrd717/",
    "meaning": "社会 (词汇 717)",
    "root": "root-717 (词根释义)",
    "example": "This is an example sentence for GKWord717."
  },
  {
    "word": "GKWord718",
    "phonetic": "/gkˈwɜːrd718/",
    "meaning": "文学 (词汇 718)",
    "root": "root-718 (词根释义)",
    "example": "This is an example sentence for GKWord718."
  },
  {
    "word": "GKWord719",
    "phonetic": "/gkˈwɜːrd719/",
    "meaning": "科学 (词汇 719)",
    "root": "root-719 (词根释义)",
    "example": "This is an example sentence for GKWord719."
  },
  {
    "word": "GKWord720",
    "phonetic": "/gkˈwɜːrd720/",
    "meaning": "地理 (词汇 720)",
    "root": "root-720 (词根释义)",
    "example": "This is an example sentence for GKWord720."
  },
  {
    "word": "GKWord721",
    "phonetic": "/gkˈwɜːrd721/",
    "meaning": "经济 (词汇 721)",
    "root": "root-721 (词根释义)",
    "example": "This is an example sentence for GKWord721."
  },
  {
    "word": "GKWord722",
    "phonetic": "/gkˈwɜːrd722/",
    "meaning": "文学 (词汇 722)",
    "root": "root-722 (词根释义)",
    "example": "This is an example sentence for GKWord722."
  },
  {
    "word": "GKWord723",
    "phonetic": "/gkˈwɜːrd723/",
    "meaning": "政治 (词汇 723)",
    "root": "root-723 (词根释义)",
    "example": "This is an example sentence for GKWord723."
  },
  {
    "word": "GKWord724",
    "phonetic": "/gkˈwɜːrd724/",
    "meaning": "经济 (词汇 724)",
    "root": "root-724 (词根释义)",
    "example": "This is an example sentence for GKWord724."
  },
  {
    "word": "GKWord725",
    "phonetic": "/gkˈwɜːrd725/",
    "meaning": "抽象的 (词汇 725)",
    "root": "root-725 (词根释义)",
    "example": "This is an example sentence for GKWord725."
  },
  {
    "word": "GKWord726",
    "phonetic": "/gkˈwɜːrd726/",
    "meaning": "学术的 (词汇 726)",
    "root": "root-726 (词根释义)",
    "example": "This is an example sentence for GKWord726."
  },
  {
    "word": "GKWord727",
    "phonetic": "/gkˈwɜːrd727/",
    "meaning": "历史 (词汇 727)",
    "root": "root-727 (词根释义)",
    "example": "This is an example sentence for GKWord727."
  },
  {
    "word": "GKWord728",
    "phonetic": "/gkˈwɜːrd728/",
    "meaning": "抽象的 (词汇 728)",
    "root": "root-728 (词根释义)",
    "example": "This is an example sentence for GKWord728."
  },
  {
    "word": "GKWord729",
    "phonetic": "/gkˈwɜːrd729/",
    "meaning": "政治 (词汇 729)",
    "root": "root-729 (词根释义)",
    "example": "This is an example sentence for GKWord729."
  },
  {
    "word": "GKWord730",
    "phonetic": "/gkˈwɜːrd730/",
    "meaning": "经济 (词汇 730)",
    "root": "root-730 (词根释义)",
    "example": "This is an example sentence for GKWord730."
  },
  {
    "word": "GKWord731",
    "phonetic": "/gkˈwɜːrd731/",
    "meaning": "文学 (词汇 731)",
    "root": "root-731 (词根释义)",
    "example": "This is an example sentence for GKWord731."
  },
  {
    "word": "GKWord732",
    "phonetic": "/gkˈwɜːrd732/",
    "meaning": "经济 (词汇 732)",
    "root": "root-732 (词根释义)",
    "example": "This is an example sentence for GKWord732."
  },
  {
    "word": "GKWord733",
    "phonetic": "/gkˈwɜːrd733/",
    "meaning": "科学 (词汇 733)",
    "root": "root-733 (词根释义)",
    "example": "This is an example sentence for GKWord733."
  },
  {
    "word": "GKWord734",
    "phonetic": "/gkˈwɜːrd734/",
    "meaning": "地理 (词汇 734)",
    "root": "root-734 (词根释义)",
    "example": "This is an example sentence for GKWord734."
  },
  {
    "word": "GKWord735",
    "phonetic": "/gkˈwɜːrd735/",
    "meaning": "政治 (词汇 735)",
    "root": "root-735 (词根释义)",
    "example": "This is an example sentence for GKWord735."
  },
  {
    "word": "GKWord736",
    "phonetic": "/gkˈwɜːrd736/",
    "meaning": "政治 (词汇 736)",
    "root": "root-736 (词根释义)",
    "example": "This is an example sentence for GKWord736."
  },
  {
    "word": "GKWord737",
    "phonetic": "/gkˈwɜːrd737/",
    "meaning": "抽象的 (词汇 737)",
    "root": "root-737 (词根释义)",
    "example": "This is an example sentence for GKWord737."
  },
  {
    "word": "GKWord738",
    "phonetic": "/gkˈwɜːrd738/",
    "meaning": "文学 (词汇 738)",
    "root": "root-738 (词根释义)",
    "example": "This is an example sentence for GKWord738."
  },
  {
    "word": "GKWord739",
    "phonetic": "/gkˈwɜːrd739/",
    "meaning": "地理 (词汇 739)",
    "root": "root-739 (词根释义)",
    "example": "This is an example sentence for GKWord739."
  },
  {
    "word": "GKWord740",
    "phonetic": "/gkˈwɜːrd740/",
    "meaning": "复杂的 (词汇 740)",
    "root": "root-740 (词根释义)",
    "example": "This is an example sentence for GKWord740."
  },
  {
    "word": "GKWord741",
    "phonetic": "/gkˈwɜːrd741/",
    "meaning": "经济 (词汇 741)",
    "root": "root-741 (词根释义)",
    "example": "This is an example sentence for GKWord741."
  },
  {
    "word": "GKWord742",
    "phonetic": "/gkˈwɜːrd742/",
    "meaning": "文学 (词汇 742)",
    "root": "root-742 (词根释义)",
    "example": "This is an example sentence for GKWord742."
  },
  {
    "word": "GKWord743",
    "phonetic": "/gkˈwɜːrd743/",
    "meaning": "文学 (词汇 743)",
    "root": "root-743 (词根释义)",
    "example": "This is an example sentence for GKWord743."
  },
  {
    "word": "GKWord744",
    "phonetic": "/gkˈwɜːrd744/",
    "meaning": "学术的 (词汇 744)",
    "root": "root-744 (词根释义)",
    "example": "This is an example sentence for GKWord744."
  },
  {
    "word": "GKWord745",
    "phonetic": "/gkˈwɜːrd745/",
    "meaning": "抽象的 (词汇 745)",
    "root": "root-745 (词根释义)",
    "example": "This is an example sentence for GKWord745."
  },
  {
    "word": "GKWord746",
    "phonetic": "/gkˈwɜːrd746/",
    "meaning": "抽象的 (词汇 746)",
    "root": "root-746 (词根释义)",
    "example": "This is an example sentence for GKWord746."
  },
  {
    "word": "GKWord747",
    "phonetic": "/gkˈwɜːrd747/",
    "meaning": "文学 (词汇 747)",
    "root": "root-747 (词根释义)",
    "example": "This is an example sentence for GKWord747."
  },
  {
    "word": "GKWord748",
    "phonetic": "/gkˈwɜːrd748/",
    "meaning": "历史 (词汇 748)",
    "root": "root-748 (词根释义)",
    "example": "This is an example sentence for GKWord748."
  },
  {
    "word": "GKWord749",
    "phonetic": "/gkˈwɜːrd749/",
    "meaning": "经济 (词汇 749)",
    "root": "root-749 (词根释义)",
    "example": "This is an example sentence for GKWord749."
  },
  {
    "word": "GKWord750",
    "phonetic": "/gkˈwɜːrd750/",
    "meaning": "地理 (词汇 750)",
    "root": "root-750 (词根释义)",
    "example": "This is an example sentence for GKWord750."
  },
  {
    "word": "GKWord751",
    "phonetic": "/gkˈwɜːrd751/",
    "meaning": "科学 (词汇 751)",
    "root": "root-751 (词根释义)",
    "example": "This is an example sentence for GKWord751."
  },
  {
    "word": "GKWord752",
    "phonetic": "/gkˈwɜːrd752/",
    "meaning": "复杂的 (词汇 752)",
    "root": "root-752 (词根释义)",
    "example": "This is an example sentence for GKWord752."
  },
  {
    "word": "GKWord753",
    "phonetic": "/gkˈwɜːrd753/",
    "meaning": "复杂的 (词汇 753)",
    "root": "root-753 (词根释义)",
    "example": "This is an example sentence for GKWord753."
  },
  {
    "word": "GKWord754",
    "phonetic": "/gkˈwɜːrd754/",
    "meaning": "抽象的 (词汇 754)",
    "root": "root-754 (词根释义)",
    "example": "This is an example sentence for GKWord754."
  },
  {
    "word": "GKWord755",
    "phonetic": "/gkˈwɜːrd755/",
    "meaning": "学术的 (词汇 755)",
    "root": "root-755 (词根释义)",
    "example": "This is an example sentence for GKWord755."
  },
  {
    "word": "GKWord756",
    "phonetic": "/gkˈwɜːrd756/",
    "meaning": "科学 (词汇 756)",
    "root": "root-756 (词根释义)",
    "example": "This is an example sentence for GKWord756."
  },
  {
    "word": "GKWord757",
    "phonetic": "/gkˈwɜːrd757/",
    "meaning": "文学 (词汇 757)",
    "root": "root-757 (词根释义)",
    "example": "This is an example sentence for GKWord757."
  },
  {
    "word": "GKWord758",
    "phonetic": "/gkˈwɜːrd758/",
    "meaning": "复杂的 (词汇 758)",
    "root": "root-758 (词根释义)",
    "example": "This is an example sentence for GKWord758."
  },
  {
    "word": "GKWord759",
    "phonetic": "/gkˈwɜːrd759/",
    "meaning": "历史 (词汇 759)",
    "root": "root-759 (词根释义)",
    "example": "This is an example sentence for GKWord759."
  },
  {
    "word": "GKWord760",
    "phonetic": "/gkˈwɜːrd760/",
    "meaning": "政治 (词汇 760)",
    "root": "root-760 (词根释义)",
    "example": "This is an example sentence for GKWord760."
  },
  {
    "word": "GKWord761",
    "phonetic": "/gkˈwɜːrd761/",
    "meaning": "文学 (词汇 761)",
    "root": "root-761 (词根释义)",
    "example": "This is an example sentence for GKWord761."
  },
  {
    "word": "GKWord762",
    "phonetic": "/gkˈwɜːrd762/",
    "meaning": "经济 (词汇 762)",
    "root": "root-762 (词根释义)",
    "example": "This is an example sentence for GKWord762."
  },
  {
    "word": "GKWord763",
    "phonetic": "/gkˈwɜːrd763/",
    "meaning": "科学 (词汇 763)",
    "root": "root-763 (词根释义)",
    "example": "This is an example sentence for GKWord763."
  },
  {
    "word": "GKWord764",
    "phonetic": "/gkˈwɜːrd764/",
    "meaning": "政治 (词汇 764)",
    "root": "root-764 (词根释义)",
    "example": "This is an example sentence for GKWord764."
  },
  {
    "word": "GKWord765",
    "phonetic": "/gkˈwɜːrd765/",
    "meaning": "抽象的 (词汇 765)",
    "root": "root-765 (词根释义)",
    "example": "This is an example sentence for GKWord765."
  },
  {
    "word": "GKWord766",
    "phonetic": "/gkˈwɜːrd766/",
    "meaning": "历史 (词汇 766)",
    "root": "root-766 (词根释义)",
    "example": "This is an example sentence for GKWord766."
  },
  {
    "word": "GKWord767",
    "phonetic": "/gkˈwɜːrd767/",
    "meaning": "抽象的 (词汇 767)",
    "root": "root-767 (词根释义)",
    "example": "This is an example sentence for GKWord767."
  },
  {
    "word": "GKWord768",
    "phonetic": "/gkˈwɜːrd768/",
    "meaning": "学术的 (词汇 768)",
    "root": "root-768 (词根释义)",
    "example": "This is an example sentence for GKWord768."
  },
  {
    "word": "GKWord769",
    "phonetic": "/gkˈwɜːrd769/",
    "meaning": "经济 (词汇 769)",
    "root": "root-769 (词根释义)",
    "example": "This is an example sentence for GKWord769."
  },
  {
    "word": "GKWord770",
    "phonetic": "/gkˈwɜːrd770/",
    "meaning": "经济 (词汇 770)",
    "root": "root-770 (词根释义)",
    "example": "This is an example sentence for GKWord770."
  },
  {
    "word": "GKWord771",
    "phonetic": "/gkˈwɜːrd771/",
    "meaning": "复杂的 (词汇 771)",
    "root": "root-771 (词根释义)",
    "example": "This is an example sentence for GKWord771."
  },
  {
    "word": "GKWord772",
    "phonetic": "/gkˈwɜːrd772/",
    "meaning": "社会 (词汇 772)",
    "root": "root-772 (词根释义)",
    "example": "This is an example sentence for GKWord772."
  },
  {
    "word": "GKWord773",
    "phonetic": "/gkˈwɜːrd773/",
    "meaning": "经济 (词汇 773)",
    "root": "root-773 (词根释义)",
    "example": "This is an example sentence for GKWord773."
  },
  {
    "word": "GKWord774",
    "phonetic": "/gkˈwɜːrd774/",
    "meaning": "经济 (词汇 774)",
    "root": "root-774 (词根释义)",
    "example": "This is an example sentence for GKWord774."
  },
  {
    "word": "GKWord775",
    "phonetic": "/gkˈwɜːrd775/",
    "meaning": "复杂的 (词汇 775)",
    "root": "root-775 (词根释义)",
    "example": "This is an example sentence for GKWord775."
  },
  {
    "word": "GKWord776",
    "phonetic": "/gkˈwɜːrd776/",
    "meaning": "经济 (词汇 776)",
    "root": "root-776 (词根释义)",
    "example": "This is an example sentence for GKWord776."
  },
  {
    "word": "GKWord777",
    "phonetic": "/gkˈwɜːrd777/",
    "meaning": "历史 (词汇 777)",
    "root": "root-777 (词根释义)",
    "example": "This is an example sentence for GKWord777."
  },
  {
    "word": "GKWord778",
    "phonetic": "/gkˈwɜːrd778/",
    "meaning": "科学 (词汇 778)",
    "root": "root-778 (词根释义)",
    "example": "This is an example sentence for GKWord778."
  },
  {
    "word": "GKWord779",
    "phonetic": "/gkˈwɜːrd779/",
    "meaning": "政治 (词汇 779)",
    "root": "root-779 (词根释义)",
    "example": "This is an example sentence for GKWord779."
  },
  {
    "word": "GKWord780",
    "phonetic": "/gkˈwɜːrd780/",
    "meaning": "地理 (词汇 780)",
    "root": "root-780 (词根释义)",
    "example": "This is an example sentence for GKWord780."
  },
  {
    "word": "GKWord781",
    "phonetic": "/gkˈwɜːrd781/",
    "meaning": "历史 (词汇 781)",
    "root": "root-781 (词根释义)",
    "example": "This is an example sentence for GKWord781."
  },
  {
    "word": "GKWord782",
    "phonetic": "/gkˈwɜːrd782/",
    "meaning": "科学 (词汇 782)",
    "root": "root-782 (词根释义)",
    "example": "This is an example sentence for GKWord782."
  },
  {
    "word": "GKWord783",
    "phonetic": "/gkˈwɜːrd783/",
    "meaning": "复杂的 (词汇 783)",
    "root": "root-783 (词根释义)",
    "example": "This is an example sentence for GKWord783."
  },
  {
    "word": "GKWord784",
    "phonetic": "/gkˈwɜːrd784/",
    "meaning": "经济 (词汇 784)",
    "root": "root-784 (词根释义)",
    "example": "This is an example sentence for GKWord784."
  },
  {
    "word": "GKWord785",
    "phonetic": "/gkˈwɜːrd785/",
    "meaning": "抽象的 (词汇 785)",
    "root": "root-785 (词根释义)",
    "example": "This is an example sentence for GKWord785."
  },
  {
    "word": "GKWord786",
    "phonetic": "/gkˈwɜːrd786/",
    "meaning": "文学 (词汇 786)",
    "root": "root-786 (词根释义)",
    "example": "This is an example sentence for GKWord786."
  },
  {
    "word": "GKWord787",
    "phonetic": "/gkˈwɜːrd787/",
    "meaning": "历史 (词汇 787)",
    "root": "root-787 (词根释义)",
    "example": "This is an example sentence for GKWord787."
  },
  {
    "word": "GKWord788",
    "phonetic": "/gkˈwɜːrd788/",
    "meaning": "经济 (词汇 788)",
    "root": "root-788 (词根释义)",
    "example": "This is an example sentence for GKWord788."
  },
  {
    "word": "GKWord789",
    "phonetic": "/gkˈwɜːrd789/",
    "meaning": "抽象的 (词汇 789)",
    "root": "root-789 (词根释义)",
    "example": "This is an example sentence for GKWord789."
  },
  {
    "word": "GKWord790",
    "phonetic": "/gkˈwɜːrd790/",
    "meaning": "社会 (词汇 790)",
    "root": "root-790 (词根释义)",
    "example": "This is an example sentence for GKWord790."
  },
  {
    "word": "GKWord791",
    "phonetic": "/gkˈwɜːrd791/",
    "meaning": "抽象的 (词汇 791)",
    "root": "root-791 (词根释义)",
    "example": "This is an example sentence for GKWord791."
  },
  {
    "word": "GKWord792",
    "phonetic": "/gkˈwɜːrd792/",
    "meaning": "学术的 (词汇 792)",
    "root": "root-792 (词根释义)",
    "example": "This is an example sentence for GKWord792."
  },
  {
    "word": "GKWord793",
    "phonetic": "/gkˈwɜːrd793/",
    "meaning": "地理 (词汇 793)",
    "root": "root-793 (词根释义)",
    "example": "This is an example sentence for GKWord793."
  },
  {
    "word": "GKWord794",
    "phonetic": "/gkˈwɜːrd794/",
    "meaning": "文学 (词汇 794)",
    "root": "root-794 (词根释义)",
    "example": "This is an example sentence for GKWord794."
  },
  {
    "word": "GKWord795",
    "phonetic": "/gkˈwɜːrd795/",
    "meaning": "历史 (词汇 795)",
    "root": "root-795 (词根释义)",
    "example": "This is an example sentence for GKWord795."
  },
  {
    "word": "GKWord796",
    "phonetic": "/gkˈwɜːrd796/",
    "meaning": "历史 (词汇 796)",
    "root": "root-796 (词根释义)",
    "example": "This is an example sentence for GKWord796."
  },
  {
    "word": "GKWord797",
    "phonetic": "/gkˈwɜːrd797/",
    "meaning": "抽象的 (词汇 797)",
    "root": "root-797 (词根释义)",
    "example": "This is an example sentence for GKWord797."
  },
  {
    "word": "GKWord798",
    "phonetic": "/gkˈwɜːrd798/",
    "meaning": "历史 (词汇 798)",
    "root": "root-798 (词根释义)",
    "example": "This is an example sentence for GKWord798."
  },
  {
    "word": "GKWord799",
    "phonetic": "/gkˈwɜːrd799/",
    "meaning": "地理 (词汇 799)",
    "root": "root-799 (词根释义)",
    "example": "This is an example sentence for GKWord799."
  },
  {
    "word": "GKWord800",
    "phonetic": "/gkˈwɜːrd800/",
    "meaning": "学术的 (词汇 800)",
    "root": "root-800 (词根释义)",
    "example": "This is an example sentence for GKWord800."
  },
  {
    "word": "GKWord801",
    "phonetic": "/gkˈwɜːrd801/",
    "meaning": "学术的 (词汇 801)",
    "root": "root-801 (词根释义)",
    "example": "This is an example sentence for GKWord801."
  },
  {
    "word": "GKWord802",
    "phonetic": "/gkˈwɜːrd802/",
    "meaning": "抽象的 (词汇 802)",
    "root": "root-802 (词根释义)",
    "example": "This is an example sentence for GKWord802."
  },
  {
    "word": "GKWord803",
    "phonetic": "/gkˈwɜːrd803/",
    "meaning": "政治 (词汇 803)",
    "root": "root-803 (词根释义)",
    "example": "This is an example sentence for GKWord803."
  },
  {
    "word": "GKWord804",
    "phonetic": "/gkˈwɜːrd804/",
    "meaning": "学术的 (词汇 804)",
    "root": "root-804 (词根释义)",
    "example": "This is an example sentence for GKWord804."
  },
  {
    "word": "GKWord805",
    "phonetic": "/gkˈwɜːrd805/",
    "meaning": "抽象的 (词汇 805)",
    "root": "root-805 (词根释义)",
    "example": "This is an example sentence for GKWord805."
  },
  {
    "word": "GKWord806",
    "phonetic": "/gkˈwɜːrd806/",
    "meaning": "科学 (词汇 806)",
    "root": "root-806 (词根释义)",
    "example": "This is an example sentence for GKWord806."
  },
  {
    "word": "GKWord807",
    "phonetic": "/gkˈwɜːrd807/",
    "meaning": "科学 (词汇 807)",
    "root": "root-807 (词根释义)",
    "example": "This is an example sentence for GKWord807."
  },
  {
    "word": "GKWord808",
    "phonetic": "/gkˈwɜːrd808/",
    "meaning": "政治 (词汇 808)",
    "root": "root-808 (词根释义)",
    "example": "This is an example sentence for GKWord808."
  },
  {
    "word": "GKWord809",
    "phonetic": "/gkˈwɜːrd809/",
    "meaning": "科学 (词汇 809)",
    "root": "root-809 (词根释义)",
    "example": "This is an example sentence for GKWord809."
  },
  {
    "word": "GKWord810",
    "phonetic": "/gkˈwɜːrd810/",
    "meaning": "学术的 (词汇 810)",
    "root": "root-810 (词根释义)",
    "example": "This is an example sentence for GKWord810."
  },
  {
    "word": "GKWord811",
    "phonetic": "/gkˈwɜːrd811/",
    "meaning": "科学 (词汇 811)",
    "root": "root-811 (词根释义)",
    "example": "This is an example sentence for GKWord811."
  },
  {
    "word": "GKWord812",
    "phonetic": "/gkˈwɜːrd812/",
    "meaning": "文学 (词汇 812)",
    "root": "root-812 (词根释义)",
    "example": "This is an example sentence for GKWord812."
  },
  {
    "word": "GKWord813",
    "phonetic": "/gkˈwɜːrd813/",
    "meaning": "文学 (词汇 813)",
    "root": "root-813 (词根释义)",
    "example": "This is an example sentence for GKWord813."
  },
  {
    "word": "GKWord814",
    "phonetic": "/gkˈwɜːrd814/",
    "meaning": "学术的 (词汇 814)",
    "root": "root-814 (词根释义)",
    "example": "This is an example sentence for GKWord814."
  },
  {
    "word": "GKWord815",
    "phonetic": "/gkˈwɜːrd815/",
    "meaning": "复杂的 (词汇 815)",
    "root": "root-815 (词根释义)",
    "example": "This is an example sentence for GKWord815."
  },
  {
    "word": "GKWord816",
    "phonetic": "/gkˈwɜːrd816/",
    "meaning": "经济 (词汇 816)",
    "root": "root-816 (词根释义)",
    "example": "This is an example sentence for GKWord816."
  },
  {
    "word": "GKWord817",
    "phonetic": "/gkˈwɜːrd817/",
    "meaning": "历史 (词汇 817)",
    "root": "root-817 (词根释义)",
    "example": "This is an example sentence for GKWord817."
  },
  {
    "word": "GKWord818",
    "phonetic": "/gkˈwɜːrd818/",
    "meaning": "抽象的 (词汇 818)",
    "root": "root-818 (词根释义)",
    "example": "This is an example sentence for GKWord818."
  },
  {
    "word": "GKWord819",
    "phonetic": "/gkˈwɜːrd819/",
    "meaning": "历史 (词汇 819)",
    "root": "root-819 (词根释义)",
    "example": "This is an example sentence for GKWord819."
  },
  {
    "word": "GKWord820",
    "phonetic": "/gkˈwɜːrd820/",
    "meaning": "科学 (词汇 820)",
    "root": "root-820 (词根释义)",
    "example": "This is an example sentence for GKWord820."
  },
  {
    "word": "GKWord821",
    "phonetic": "/gkˈwɜːrd821/",
    "meaning": "经济 (词汇 821)",
    "root": "root-821 (词根释义)",
    "example": "This is an example sentence for GKWord821."
  },
  {
    "word": "GKWord822",
    "phonetic": "/gkˈwɜːrd822/",
    "meaning": "复杂的 (词汇 822)",
    "root": "root-822 (词根释义)",
    "example": "This is an example sentence for GKWord822."
  },
  {
    "word": "GKWord823",
    "phonetic": "/gkˈwɜːrd823/",
    "meaning": "科学 (词汇 823)",
    "root": "root-823 (词根释义)",
    "example": "This is an example sentence for GKWord823."
  },
  {
    "word": "GKWord824",
    "phonetic": "/gkˈwɜːrd824/",
    "meaning": "抽象的 (词汇 824)",
    "root": "root-824 (词根释义)",
    "example": "This is an example sentence for GKWord824."
  },
  {
    "word": "GKWord825",
    "phonetic": "/gkˈwɜːrd825/",
    "meaning": "抽象的 (词汇 825)",
    "root": "root-825 (词根释义)",
    "example": "This is an example sentence for GKWord825."
  },
  {
    "word": "GKWord826",
    "phonetic": "/gkˈwɜːrd826/",
    "meaning": "文学 (词汇 826)",
    "root": "root-826 (词根释义)",
    "example": "This is an example sentence for GKWord826."
  },
  {
    "word": "GKWord827",
    "phonetic": "/gkˈwɜːrd827/",
    "meaning": "历史 (词汇 827)",
    "root": "root-827 (词根释义)",
    "example": "This is an example sentence for GKWord827."
  },
  {
    "word": "GKWord828",
    "phonetic": "/gkˈwɜːrd828/",
    "meaning": "社会 (词汇 828)",
    "root": "root-828 (词根释义)",
    "example": "This is an example sentence for GKWord828."
  },
  {
    "word": "GKWord829",
    "phonetic": "/gkˈwɜːrd829/",
    "meaning": "学术的 (词汇 829)",
    "root": "root-829 (词根释义)",
    "example": "This is an example sentence for GKWord829."
  },
  {
    "word": "GKWord830",
    "phonetic": "/gkˈwɜːrd830/",
    "meaning": "文学 (词汇 830)",
    "root": "root-830 (词根释义)",
    "example": "This is an example sentence for GKWord830."
  },
  {
    "word": "GKWord831",
    "phonetic": "/gkˈwɜːrd831/",
    "meaning": "学术的 (词汇 831)",
    "root": "root-831 (词根释义)",
    "example": "This is an example sentence for GKWord831."
  },
  {
    "word": "GKWord832",
    "phonetic": "/gkˈwɜːrd832/",
    "meaning": "政治 (词汇 832)",
    "root": "root-832 (词根释义)",
    "example": "This is an example sentence for GKWord832."
  },
  {
    "word": "GKWord833",
    "phonetic": "/gkˈwɜːrd833/",
    "meaning": "科学 (词汇 833)",
    "root": "root-833 (词根释义)",
    "example": "This is an example sentence for GKWord833."
  },
  {
    "word": "GKWord834",
    "phonetic": "/gkˈwɜːrd834/",
    "meaning": "科学 (词汇 834)",
    "root": "root-834 (词根释义)",
    "example": "This is an example sentence for GKWord834."
  },
  {
    "word": "GKWord835",
    "phonetic": "/gkˈwɜːrd835/",
    "meaning": "科学 (词汇 835)",
    "root": "root-835 (词根释义)",
    "example": "This is an example sentence for GKWord835."
  },
  {
    "word": "GKWord836",
    "phonetic": "/gkˈwɜːrd836/",
    "meaning": "地理 (词汇 836)",
    "root": "root-836 (词根释义)",
    "example": "This is an example sentence for GKWord836."
  },
  {
    "word": "GKWord837",
    "phonetic": "/gkˈwɜːrd837/",
    "meaning": "经济 (词汇 837)",
    "root": "root-837 (词根释义)",
    "example": "This is an example sentence for GKWord837."
  },
  {
    "word": "GKWord838",
    "phonetic": "/gkˈwɜːrd838/",
    "meaning": "学术的 (词汇 838)",
    "root": "root-838 (词根释义)",
    "example": "This is an example sentence for GKWord838."
  },
  {
    "word": "GKWord839",
    "phonetic": "/gkˈwɜːrd839/",
    "meaning": "历史 (词汇 839)",
    "root": "root-839 (词根释义)",
    "example": "This is an example sentence for GKWord839."
  },
  {
    "word": "GKWord840",
    "phonetic": "/gkˈwɜːrd840/",
    "meaning": "社会 (词汇 840)",
    "root": "root-840 (词根释义)",
    "example": "This is an example sentence for GKWord840."
  },
  {
    "word": "GKWord841",
    "phonetic": "/gkˈwɜːrd841/",
    "meaning": "地理 (词汇 841)",
    "root": "root-841 (词根释义)",
    "example": "This is an example sentence for GKWord841."
  },
  {
    "word": "GKWord842",
    "phonetic": "/gkˈwɜːrd842/",
    "meaning": "文学 (词汇 842)",
    "root": "root-842 (词根释义)",
    "example": "This is an example sentence for GKWord842."
  },
  {
    "word": "GKWord843",
    "phonetic": "/gkˈwɜːrd843/",
    "meaning": "学术的 (词汇 843)",
    "root": "root-843 (词根释义)",
    "example": "This is an example sentence for GKWord843."
  },
  {
    "word": "GKWord844",
    "phonetic": "/gkˈwɜːrd844/",
    "meaning": "地理 (词汇 844)",
    "root": "root-844 (词根释义)",
    "example": "This is an example sentence for GKWord844."
  },
  {
    "word": "GKWord845",
    "phonetic": "/gkˈwɜːrd845/",
    "meaning": "文学 (词汇 845)",
    "root": "root-845 (词根释义)",
    "example": "This is an example sentence for GKWord845."
  },
  {
    "word": "GKWord846",
    "phonetic": "/gkˈwɜːrd846/",
    "meaning": "经济 (词汇 846)",
    "root": "root-846 (词根释义)",
    "example": "This is an example sentence for GKWord846."
  },
  {
    "word": "GKWord847",
    "phonetic": "/gkˈwɜːrd847/",
    "meaning": "文学 (词汇 847)",
    "root": "root-847 (词根释义)",
    "example": "This is an example sentence for GKWord847."
  },
  {
    "word": "GKWord848",
    "phonetic": "/gkˈwɜːrd848/",
    "meaning": "复杂的 (词汇 848)",
    "root": "root-848 (词根释义)",
    "example": "This is an example sentence for GKWord848."
  },
  {
    "word": "GKWord849",
    "phonetic": "/gkˈwɜːrd849/",
    "meaning": "历史 (词汇 849)",
    "root": "root-849 (词根释义)",
    "example": "This is an example sentence for GKWord849."
  },
  {
    "word": "GKWord850",
    "phonetic": "/gkˈwɜːrd850/",
    "meaning": "抽象的 (词汇 850)",
    "root": "root-850 (词根释义)",
    "example": "This is an example sentence for GKWord850."
  },
  {
    "word": "GKWord851",
    "phonetic": "/gkˈwɜːrd851/",
    "meaning": "历史 (词汇 851)",
    "root": "root-851 (词根释义)",
    "example": "This is an example sentence for GKWord851."
  },
  {
    "word": "GKWord852",
    "phonetic": "/gkˈwɜːrd852/",
    "meaning": "社会 (词汇 852)",
    "root": "root-852 (词根释义)",
    "example": "This is an example sentence for GKWord852."
  },
  {
    "word": "GKWord853",
    "phonetic": "/gkˈwɜːrd853/",
    "meaning": "地理 (词汇 853)",
    "root": "root-853 (词根释义)",
    "example": "This is an example sentence for GKWord853."
  },
  {
    "word": "GKWord854",
    "phonetic": "/gkˈwɜːrd854/",
    "meaning": "社会 (词汇 854)",
    "root": "root-854 (词根释义)",
    "example": "This is an example sentence for GKWord854."
  },
  {
    "word": "GKWord855",
    "phonetic": "/gkˈwɜːrd855/",
    "meaning": "抽象的 (词汇 855)",
    "root": "root-855 (词根释义)",
    "example": "This is an example sentence for GKWord855."
  },
  {
    "word": "GKWord856",
    "phonetic": "/gkˈwɜːrd856/",
    "meaning": "社会 (词汇 856)",
    "root": "root-856 (词根释义)",
    "example": "This is an example sentence for GKWord856."
  },
  {
    "word": "GKWord857",
    "phonetic": "/gkˈwɜːrd857/",
    "meaning": "政治 (词汇 857)",
    "root": "root-857 (词根释义)",
    "example": "This is an example sentence for GKWord857."
  },
  {
    "word": "GKWord858",
    "phonetic": "/gkˈwɜːrd858/",
    "meaning": "复杂的 (词汇 858)",
    "root": "root-858 (词根释义)",
    "example": "This is an example sentence for GKWord858."
  },
  {
    "word": "GKWord859",
    "phonetic": "/gkˈwɜːrd859/",
    "meaning": "科学 (词汇 859)",
    "root": "root-859 (词根释义)",
    "example": "This is an example sentence for GKWord859."
  },
  {
    "word": "GKWord860",
    "phonetic": "/gkˈwɜːrd860/",
    "meaning": "社会 (词汇 860)",
    "root": "root-860 (词根释义)",
    "example": "This is an example sentence for GKWord860."
  },
  {
    "word": "GKWord861",
    "phonetic": "/gkˈwɜːrd861/",
    "meaning": "经济 (词汇 861)",
    "root": "root-861 (词根释义)",
    "example": "This is an example sentence for GKWord861."
  },
  {
    "word": "GKWord862",
    "phonetic": "/gkˈwɜːrd862/",
    "meaning": "抽象的 (词汇 862)",
    "root": "root-862 (词根释义)",
    "example": "This is an example sentence for GKWord862."
  },
  {
    "word": "GKWord863",
    "phonetic": "/gkˈwɜːrd863/",
    "meaning": "科学 (词汇 863)",
    "root": "root-863 (词根释义)",
    "example": "This is an example sentence for GKWord863."
  },
  {
    "word": "GKWord864",
    "phonetic": "/gkˈwɜːrd864/",
    "meaning": "历史 (词汇 864)",
    "root": "root-864 (词根释义)",
    "example": "This is an example sentence for GKWord864."
  },
  {
    "word": "GKWord865",
    "phonetic": "/gkˈwɜːrd865/",
    "meaning": "文学 (词汇 865)",
    "root": "root-865 (词根释义)",
    "example": "This is an example sentence for GKWord865."
  },
  {
    "word": "GKWord866",
    "phonetic": "/gkˈwɜːrd866/",
    "meaning": "地理 (词汇 866)",
    "root": "root-866 (词根释义)",
    "example": "This is an example sentence for GKWord866."
  },
  {
    "word": "GKWord867",
    "phonetic": "/gkˈwɜːrd867/",
    "meaning": "社会 (词汇 867)",
    "root": "root-867 (词根释义)",
    "example": "This is an example sentence for GKWord867."
  },
  {
    "word": "GKWord868",
    "phonetic": "/gkˈwɜːrd868/",
    "meaning": "文学 (词汇 868)",
    "root": "root-868 (词根释义)",
    "example": "This is an example sentence for GKWord868."
  },
  {
    "word": "GKWord869",
    "phonetic": "/gkˈwɜːrd869/",
    "meaning": "历史 (词汇 869)",
    "root": "root-869 (词根释义)",
    "example": "This is an example sentence for GKWord869."
  },
  {
    "word": "GKWord870",
    "phonetic": "/gkˈwɜːrd870/",
    "meaning": "科学 (词汇 870)",
    "root": "root-870 (词根释义)",
    "example": "This is an example sentence for GKWord870."
  },
  {
    "word": "GKWord871",
    "phonetic": "/gkˈwɜːrd871/",
    "meaning": "社会 (词汇 871)",
    "root": "root-871 (词根释义)",
    "example": "This is an example sentence for GKWord871."
  },
  {
    "word": "GKWord872",
    "phonetic": "/gkˈwɜːrd872/",
    "meaning": "政治 (词汇 872)",
    "root": "root-872 (词根释义)",
    "example": "This is an example sentence for GKWord872."
  },
  {
    "word": "GKWord873",
    "phonetic": "/gkˈwɜːrd873/",
    "meaning": "科学 (词汇 873)",
    "root": "root-873 (词根释义)",
    "example": "This is an example sentence for GKWord873."
  },
  {
    "word": "GKWord874",
    "phonetic": "/gkˈwɜːrd874/",
    "meaning": "科学 (词汇 874)",
    "root": "root-874 (词根释义)",
    "example": "This is an example sentence for GKWord874."
  },
  {
    "word": "GKWord875",
    "phonetic": "/gkˈwɜːrd875/",
    "meaning": "社会 (词汇 875)",
    "root": "root-875 (词根释义)",
    "example": "This is an example sentence for GKWord875."
  },
  {
    "word": "GKWord876",
    "phonetic": "/gkˈwɜːrd876/",
    "meaning": "历史 (词汇 876)",
    "root": "root-876 (词根释义)",
    "example": "This is an example sentence for GKWord876."
  },
  {
    "word": "GKWord877",
    "phonetic": "/gkˈwɜːrd877/",
    "meaning": "历史 (词汇 877)",
    "root": "root-877 (词根释义)",
    "example": "This is an example sentence for GKWord877."
  },
  {
    "word": "GKWord878",
    "phonetic": "/gkˈwɜːrd878/",
    "meaning": "科学 (词汇 878)",
    "root": "root-878 (词根释义)",
    "example": "This is an example sentence for GKWord878."
  },
  {
    "word": "GKWord879",
    "phonetic": "/gkˈwɜːrd879/",
    "meaning": "学术的 (词汇 879)",
    "root": "root-879 (词根释义)",
    "example": "This is an example sentence for GKWord879."
  },
  {
    "word": "GKWord880",
    "phonetic": "/gkˈwɜːrd880/",
    "meaning": "社会 (词汇 880)",
    "root": "root-880 (词根释义)",
    "example": "This is an example sentence for GKWord880."
  },
  {
    "word": "GKWord881",
    "phonetic": "/gkˈwɜːrd881/",
    "meaning": "地理 (词汇 881)",
    "root": "root-881 (词根释义)",
    "example": "This is an example sentence for GKWord881."
  },
  {
    "word": "GKWord882",
    "phonetic": "/gkˈwɜːrd882/",
    "meaning": "复杂的 (词汇 882)",
    "root": "root-882 (词根释义)",
    "example": "This is an example sentence for GKWord882."
  },
  {
    "word": "GKWord883",
    "phonetic": "/gkˈwɜːrd883/",
    "meaning": "学术的 (词汇 883)",
    "root": "root-883 (词根释义)",
    "example": "This is an example sentence for GKWord883."
  },
  {
    "word": "GKWord884",
    "phonetic": "/gkˈwɜːrd884/",
    "meaning": "文学 (词汇 884)",
    "root": "root-884 (词根释义)",
    "example": "This is an example sentence for GKWord884."
  },
  {
    "word": "GKWord885",
    "phonetic": "/gkˈwɜːrd885/",
    "meaning": "抽象的 (词汇 885)",
    "root": "root-885 (词根释义)",
    "example": "This is an example sentence for GKWord885."
  },
  {
    "word": "GKWord886",
    "phonetic": "/gkˈwɜːrd886/",
    "meaning": "学术的 (词汇 886)",
    "root": "root-886 (词根释义)",
    "example": "This is an example sentence for GKWord886."
  },
  {
    "word": "GKWord887",
    "phonetic": "/gkˈwɜːrd887/",
    "meaning": "科学 (词汇 887)",
    "root": "root-887 (词根释义)",
    "example": "This is an example sentence for GKWord887."
  },
  {
    "word": "GKWord888",
    "phonetic": "/gkˈwɜːrd888/",
    "meaning": "地理 (词汇 888)",
    "root": "root-888 (词根释义)",
    "example": "This is an example sentence for GKWord888."
  },
  {
    "word": "GKWord889",
    "phonetic": "/gkˈwɜːrd889/",
    "meaning": "政治 (词汇 889)",
    "root": "root-889 (词根释义)",
    "example": "This is an example sentence for GKWord889."
  },
  {
    "word": "GKWord890",
    "phonetic": "/gkˈwɜːrd890/",
    "meaning": "科学 (词汇 890)",
    "root": "root-890 (词根释义)",
    "example": "This is an example sentence for GKWord890."
  },
  {
    "word": "GKWord891",
    "phonetic": "/gkˈwɜːrd891/",
    "meaning": "社会 (词汇 891)",
    "root": "root-891 (词根释义)",
    "example": "This is an example sentence for GKWord891."
  },
  {
    "word": "GKWord892",
    "phonetic": "/gkˈwɜːrd892/",
    "meaning": "地理 (词汇 892)",
    "root": "root-892 (词根释义)",
    "example": "This is an example sentence for GKWord892."
  },
  {
    "word": "GKWord893",
    "phonetic": "/gkˈwɜːrd893/",
    "meaning": "学术的 (词汇 893)",
    "root": "root-893 (词根释义)",
    "example": "This is an example sentence for GKWord893."
  },
  {
    "word": "GKWord894",
    "phonetic": "/gkˈwɜːrd894/",
    "meaning": "经济 (词汇 894)",
    "root": "root-894 (词根释义)",
    "example": "This is an example sentence for GKWord894."
  },
  {
    "word": "GKWord895",
    "phonetic": "/gkˈwɜːrd895/",
    "meaning": "抽象的 (词汇 895)",
    "root": "root-895 (词根释义)",
    "example": "This is an example sentence for GKWord895."
  },
  {
    "word": "GKWord896",
    "phonetic": "/gkˈwɜːrd896/",
    "meaning": "地理 (词汇 896)",
    "root": "root-896 (词根释义)",
    "example": "This is an example sentence for GKWord896."
  },
  {
    "word": "GKWord897",
    "phonetic": "/gkˈwɜːrd897/",
    "meaning": "文学 (词汇 897)",
    "root": "root-897 (词根释义)",
    "example": "This is an example sentence for GKWord897."
  },
  {
    "word": "GKWord898",
    "phonetic": "/gkˈwɜːrd898/",
    "meaning": "经济 (词汇 898)",
    "root": "root-898 (词根释义)",
    "example": "This is an example sentence for GKWord898."
  },
  {
    "word": "GKWord899",
    "phonetic": "/gkˈwɜːrd899/",
    "meaning": "政治 (词汇 899)",
    "root": "root-899 (词根释义)",
    "example": "This is an example sentence for GKWord899."
  },
  {
    "word": "GKWord900",
    "phonetic": "/gkˈwɜːrd900/",
    "meaning": "政治 (词汇 900)",
    "root": "root-900 (词根释义)",
    "example": "This is an example sentence for GKWord900."
  },
  {
    "word": "GKWord901",
    "phonetic": "/gkˈwɜːrd901/",
    "meaning": "抽象的 (词汇 901)",
    "root": "root-901 (词根释义)",
    "example": "This is an example sentence for GKWord901."
  },
  {
    "word": "GKWord902",
    "phonetic": "/gkˈwɜːrd902/",
    "meaning": "文学 (词汇 902)",
    "root": "root-902 (词根释义)",
    "example": "This is an example sentence for GKWord902."
  },
  {
    "word": "GKWord903",
    "phonetic": "/gkˈwɜːrd903/",
    "meaning": "抽象的 (词汇 903)",
    "root": "root-903 (词根释义)",
    "example": "This is an example sentence for GKWord903."
  },
  {
    "word": "GKWord904",
    "phonetic": "/gkˈwɜːrd904/",
    "meaning": "社会 (词汇 904)",
    "root": "root-904 (词根释义)",
    "example": "This is an example sentence for GKWord904."
  },
  {
    "word": "GKWord905",
    "phonetic": "/gkˈwɜːrd905/",
    "meaning": "学术的 (词汇 905)",
    "root": "root-905 (词根释义)",
    "example": "This is an example sentence for GKWord905."
  },
  {
    "word": "GKWord906",
    "phonetic": "/gkˈwɜːrd906/",
    "meaning": "复杂的 (词汇 906)",
    "root": "root-906 (词根释义)",
    "example": "This is an example sentence for GKWord906."
  },
  {
    "word": "GKWord907",
    "phonetic": "/gkˈwɜːrd907/",
    "meaning": "抽象的 (词汇 907)",
    "root": "root-907 (词根释义)",
    "example": "This is an example sentence for GKWord907."
  },
  {
    "word": "GKWord908",
    "phonetic": "/gkˈwɜːrd908/",
    "meaning": "抽象的 (词汇 908)",
    "root": "root-908 (词根释义)",
    "example": "This is an example sentence for GKWord908."
  },
  {
    "word": "GKWord909",
    "phonetic": "/gkˈwɜːrd909/",
    "meaning": "复杂的 (词汇 909)",
    "root": "root-909 (词根释义)",
    "example": "This is an example sentence for GKWord909."
  },
  {
    "word": "GKWord910",
    "phonetic": "/gkˈwɜːrd910/",
    "meaning": "社会 (词汇 910)",
    "root": "root-910 (词根释义)",
    "example": "This is an example sentence for GKWord910."
  },
  {
    "word": "GKWord911",
    "phonetic": "/gkˈwɜːrd911/",
    "meaning": "经济 (词汇 911)",
    "root": "root-911 (词根释义)",
    "example": "This is an example sentence for GKWord911."
  },
  {
    "word": "GKWord912",
    "phonetic": "/gkˈwɜːrd912/",
    "meaning": "科学 (词汇 912)",
    "root": "root-912 (词根释义)",
    "example": "This is an example sentence for GKWord912."
  },
  {
    "word": "GKWord913",
    "phonetic": "/gkˈwɜːrd913/",
    "meaning": "抽象的 (词汇 913)",
    "root": "root-913 (词根释义)",
    "example": "This is an example sentence for GKWord913."
  },
  {
    "word": "GKWord914",
    "phonetic": "/gkˈwɜːrd914/",
    "meaning": "学术的 (词汇 914)",
    "root": "root-914 (词根释义)",
    "example": "This is an example sentence for GKWord914."
  },
  {
    "word": "GKWord915",
    "phonetic": "/gkˈwɜːrd915/",
    "meaning": "文学 (词汇 915)",
    "root": "root-915 (词根释义)",
    "example": "This is an example sentence for GKWord915."
  },
  {
    "word": "GKWord916",
    "phonetic": "/gkˈwɜːrd916/",
    "meaning": "复杂的 (词汇 916)",
    "root": "root-916 (词根释义)",
    "example": "This is an example sentence for GKWord916."
  },
  {
    "word": "GKWord917",
    "phonetic": "/gkˈwɜːrd917/",
    "meaning": "社会 (词汇 917)",
    "root": "root-917 (词根释义)",
    "example": "This is an example sentence for GKWord917."
  },
  {
    "word": "GKWord918",
    "phonetic": "/gkˈwɜːrd918/",
    "meaning": "抽象的 (词汇 918)",
    "root": "root-918 (词根释义)",
    "example": "This is an example sentence for GKWord918."
  },
  {
    "word": "GKWord919",
    "phonetic": "/gkˈwɜːrd919/",
    "meaning": "社会 (词汇 919)",
    "root": "root-919 (词根释义)",
    "example": "This is an example sentence for GKWord919."
  },
  {
    "word": "GKWord920",
    "phonetic": "/gkˈwɜːrd920/",
    "meaning": "历史 (词汇 920)",
    "root": "root-920 (词根释义)",
    "example": "This is an example sentence for GKWord920."
  },
  {
    "word": "GKWord921",
    "phonetic": "/gkˈwɜːrd921/",
    "meaning": "地理 (词汇 921)",
    "root": "root-921 (词根释义)",
    "example": "This is an example sentence for GKWord921."
  },
  {
    "word": "GKWord922",
    "phonetic": "/gkˈwɜːrd922/",
    "meaning": "历史 (词汇 922)",
    "root": "root-922 (词根释义)",
    "example": "This is an example sentence for GKWord922."
  },
  {
    "word": "GKWord923",
    "phonetic": "/gkˈwɜːrd923/",
    "meaning": "地理 (词汇 923)",
    "root": "root-923 (词根释义)",
    "example": "This is an example sentence for GKWord923."
  },
  {
    "word": "GKWord924",
    "phonetic": "/gkˈwɜːrd924/",
    "meaning": "抽象的 (词汇 924)",
    "root": "root-924 (词根释义)",
    "example": "This is an example sentence for GKWord924."
  },
  {
    "word": "GKWord925",
    "phonetic": "/gkˈwɜːrd925/",
    "meaning": "社会 (词汇 925)",
    "root": "root-925 (词根释义)",
    "example": "This is an example sentence for GKWord925."
  },
  {
    "word": "GKWord926",
    "phonetic": "/gkˈwɜːrd926/",
    "meaning": "抽象的 (词汇 926)",
    "root": "root-926 (词根释义)",
    "example": "This is an example sentence for GKWord926."
  },
  {
    "word": "GKWord927",
    "phonetic": "/gkˈwɜːrd927/",
    "meaning": "科学 (词汇 927)",
    "root": "root-927 (词根释义)",
    "example": "This is an example sentence for GKWord927."
  },
  {
    "word": "GKWord928",
    "phonetic": "/gkˈwɜːrd928/",
    "meaning": "科学 (词汇 928)",
    "root": "root-928 (词根释义)",
    "example": "This is an example sentence for GKWord928."
  },
  {
    "word": "GKWord929",
    "phonetic": "/gkˈwɜːrd929/",
    "meaning": "学术的 (词汇 929)",
    "root": "root-929 (词根释义)",
    "example": "This is an example sentence for GKWord929."
  },
  {
    "word": "GKWord930",
    "phonetic": "/gkˈwɜːrd930/",
    "meaning": "地理 (词汇 930)",
    "root": "root-930 (词根释义)",
    "example": "This is an example sentence for GKWord930."
  },
  {
    "word": "GKWord931",
    "phonetic": "/gkˈwɜːrd931/",
    "meaning": "科学 (词汇 931)",
    "root": "root-931 (词根释义)",
    "example": "This is an example sentence for GKWord931."
  },
  {
    "word": "GKWord932",
    "phonetic": "/gkˈwɜːrd932/",
    "meaning": "学术的 (词汇 932)",
    "root": "root-932 (词根释义)",
    "example": "This is an example sentence for GKWord932."
  },
  {
    "word": "GKWord933",
    "phonetic": "/gkˈwɜːrd933/",
    "meaning": "学术的 (词汇 933)",
    "root": "root-933 (词根释义)",
    "example": "This is an example sentence for GKWord933."
  },
  {
    "word": "GKWord934",
    "phonetic": "/gkˈwɜːrd934/",
    "meaning": "抽象的 (词汇 934)",
    "root": "root-934 (词根释义)",
    "example": "This is an example sentence for GKWord934."
  },
  {
    "word": "GKWord935",
    "phonetic": "/gkˈwɜːrd935/",
    "meaning": "复杂的 (词汇 935)",
    "root": "root-935 (词根释义)",
    "example": "This is an example sentence for GKWord935."
  },
  {
    "word": "GKWord936",
    "phonetic": "/gkˈwɜːrd936/",
    "meaning": "政治 (词汇 936)",
    "root": "root-936 (词根释义)",
    "example": "This is an example sentence for GKWord936."
  },
  {
    "word": "GKWord937",
    "phonetic": "/gkˈwɜːrd937/",
    "meaning": "经济 (词汇 937)",
    "root": "root-937 (词根释义)",
    "example": "This is an example sentence for GKWord937."
  },
  {
    "word": "GKWord938",
    "phonetic": "/gkˈwɜːrd938/",
    "meaning": "复杂的 (词汇 938)",
    "root": "root-938 (词根释义)",
    "example": "This is an example sentence for GKWord938."
  },
  {
    "word": "GKWord939",
    "phonetic": "/gkˈwɜːrd939/",
    "meaning": "历史 (词汇 939)",
    "root": "root-939 (词根释义)",
    "example": "This is an example sentence for GKWord939."
  },
  {
    "word": "GKWord940",
    "phonetic": "/gkˈwɜːrd940/",
    "meaning": "学术的 (词汇 940)",
    "root": "root-940 (词根释义)",
    "example": "This is an example sentence for GKWord940."
  },
  {
    "word": "GKWord941",
    "phonetic": "/gkˈwɜːrd941/",
    "meaning": "历史 (词汇 941)",
    "root": "root-941 (词根释义)",
    "example": "This is an example sentence for GKWord941."
  },
  {
    "word": "GKWord942",
    "phonetic": "/gkˈwɜːrd942/",
    "meaning": "文学 (词汇 942)",
    "root": "root-942 (词根释义)",
    "example": "This is an example sentence for GKWord942."
  },
  {
    "word": "GKWord943",
    "phonetic": "/gkˈwɜːrd943/",
    "meaning": "学术的 (词汇 943)",
    "root": "root-943 (词根释义)",
    "example": "This is an example sentence for GKWord943."
  },
  {
    "word": "GKWord944",
    "phonetic": "/gkˈwɜːrd944/",
    "meaning": "科学 (词汇 944)",
    "root": "root-944 (词根释义)",
    "example": "This is an example sentence for GKWord944."
  },
  {
    "word": "GKWord945",
    "phonetic": "/gkˈwɜːrd945/",
    "meaning": "科学 (词汇 945)",
    "root": "root-945 (词根释义)",
    "example": "This is an example sentence for GKWord945."
  },
  {
    "word": "GKWord946",
    "phonetic": "/gkˈwɜːrd946/",
    "meaning": "政治 (词汇 946)",
    "root": "root-946 (词根释义)",
    "example": "This is an example sentence for GKWord946."
  },
  {
    "word": "GKWord947",
    "phonetic": "/gkˈwɜːrd947/",
    "meaning": "文学 (词汇 947)",
    "root": "root-947 (词根释义)",
    "example": "This is an example sentence for GKWord947."
  },
  {
    "word": "GKWord948",
    "phonetic": "/gkˈwɜːrd948/",
    "meaning": "政治 (词汇 948)",
    "root": "root-948 (词根释义)",
    "example": "This is an example sentence for GKWord948."
  },
  {
    "word": "GKWord949",
    "phonetic": "/gkˈwɜːrd949/",
    "meaning": "政治 (词汇 949)",
    "root": "root-949 (词根释义)",
    "example": "This is an example sentence for GKWord949."
  },
  {
    "word": "GKWord950",
    "phonetic": "/gkˈwɜːrd950/",
    "meaning": "政治 (词汇 950)",
    "root": "root-950 (词根释义)",
    "example": "This is an example sentence for GKWord950."
  },
  {
    "word": "GKWord951",
    "phonetic": "/gkˈwɜːrd951/",
    "meaning": "文学 (词汇 951)",
    "root": "root-951 (词根释义)",
    "example": "This is an example sentence for GKWord951."
  },
  {
    "word": "GKWord952",
    "phonetic": "/gkˈwɜːrd952/",
    "meaning": "经济 (词汇 952)",
    "root": "root-952 (词根释义)",
    "example": "This is an example sentence for GKWord952."
  },
  {
    "word": "GKWord953",
    "phonetic": "/gkˈwɜːrd953/",
    "meaning": "复杂的 (词汇 953)",
    "root": "root-953 (词根释义)",
    "example": "This is an example sentence for GKWord953."
  },
  {
    "word": "GKWord954",
    "phonetic": "/gkˈwɜːrd954/",
    "meaning": "历史 (词汇 954)",
    "root": "root-954 (词根释义)",
    "example": "This is an example sentence for GKWord954."
  },
  {
    "word": "GKWord955",
    "phonetic": "/gkˈwɜːrd955/",
    "meaning": "历史 (词汇 955)",
    "root": "root-955 (词根释义)",
    "example": "This is an example sentence for GKWord955."
  },
  {
    "word": "GKWord956",
    "phonetic": "/gkˈwɜːrd956/",
    "meaning": "地理 (词汇 956)",
    "root": "root-956 (词根释义)",
    "example": "This is an example sentence for GKWord956."
  },
  {
    "word": "GKWord957",
    "phonetic": "/gkˈwɜːrd957/",
    "meaning": "政治 (词汇 957)",
    "root": "root-957 (词根释义)",
    "example": "This is an example sentence for GKWord957."
  },
  {
    "word": "GKWord958",
    "phonetic": "/gkˈwɜːrd958/",
    "meaning": "学术的 (词汇 958)",
    "root": "root-958 (词根释义)",
    "example": "This is an example sentence for GKWord958."
  },
  {
    "word": "GKWord959",
    "phonetic": "/gkˈwɜːrd959/",
    "meaning": "科学 (词汇 959)",
    "root": "root-959 (词根释义)",
    "example": "This is an example sentence for GKWord959."
  },
  {
    "word": "GKWord960",
    "phonetic": "/gkˈwɜːrd960/",
    "meaning": "科学 (词汇 960)",
    "root": "root-960 (词根释义)",
    "example": "This is an example sentence for GKWord960."
  },
  {
    "word": "GKWord961",
    "phonetic": "/gkˈwɜːrd961/",
    "meaning": "社会 (词汇 961)",
    "root": "root-961 (词根释义)",
    "example": "This is an example sentence for GKWord961."
  },
  {
    "word": "GKWord962",
    "phonetic": "/gkˈwɜːrd962/",
    "meaning": "经济 (词汇 962)",
    "root": "root-962 (词根释义)",
    "example": "This is an example sentence for GKWord962."
  },
  {
    "word": "GKWord963",
    "phonetic": "/gkˈwɜːrd963/",
    "meaning": "经济 (词汇 963)",
    "root": "root-963 (词根释义)",
    "example": "This is an example sentence for GKWord963."
  },
  {
    "word": "GKWord964",
    "phonetic": "/gkˈwɜːrd964/",
    "meaning": "地理 (词汇 964)",
    "root": "root-964 (词根释义)",
    "example": "This is an example sentence for GKWord964."
  },
  {
    "word": "GKWord965",
    "phonetic": "/gkˈwɜːrd965/",
    "meaning": "复杂的 (词汇 965)",
    "root": "root-965 (词根释义)",
    "example": "This is an example sentence for GKWord965."
  },
  {
    "word": "GKWord966",
    "phonetic": "/gkˈwɜːrd966/",
    "meaning": "历史 (词汇 966)",
    "root": "root-966 (词根释义)",
    "example": "This is an example sentence for GKWord966."
  },
  {
    "word": "GKWord967",
    "phonetic": "/gkˈwɜːrd967/",
    "meaning": "抽象的 (词汇 967)",
    "root": "root-967 (词根释义)",
    "example": "This is an example sentence for GKWord967."
  },
  {
    "word": "GKWord968",
    "phonetic": "/gkˈwɜːrd968/",
    "meaning": "经济 (词汇 968)",
    "root": "root-968 (词根释义)",
    "example": "This is an example sentence for GKWord968."
  },
  {
    "word": "GKWord969",
    "phonetic": "/gkˈwɜːrd969/",
    "meaning": "地理 (词汇 969)",
    "root": "root-969 (词根释义)",
    "example": "This is an example sentence for GKWord969."
  },
  {
    "word": "GKWord970",
    "phonetic": "/gkˈwɜːrd970/",
    "meaning": "复杂的 (词汇 970)",
    "root": "root-970 (词根释义)",
    "example": "This is an example sentence for GKWord970."
  },
  {
    "word": "GKWord971",
    "phonetic": "/gkˈwɜːrd971/",
    "meaning": "历史 (词汇 971)",
    "root": "root-971 (词根释义)",
    "example": "This is an example sentence for GKWord971."
  },
  {
    "word": "GKWord972",
    "phonetic": "/gkˈwɜːrd972/",
    "meaning": "地理 (词汇 972)",
    "root": "root-972 (词根释义)",
    "example": "This is an example sentence for GKWord972."
  },
  {
    "word": "GKWord973",
    "phonetic": "/gkˈwɜːrd973/",
    "meaning": "社会 (词汇 973)",
    "root": "root-973 (词根释义)",
    "example": "This is an example sentence for GKWord973."
  },
  {
    "word": "GKWord974",
    "phonetic": "/gkˈwɜːrd974/",
    "meaning": "历史 (词汇 974)",
    "root": "root-974 (词根释义)",
    "example": "This is an example sentence for GKWord974."
  },
  {
    "word": "GKWord975",
    "phonetic": "/gkˈwɜːrd975/",
    "meaning": "抽象的 (词汇 975)",
    "root": "root-975 (词根释义)",
    "example": "This is an example sentence for GKWord975."
  },
  {
    "word": "GKWord976",
    "phonetic": "/gkˈwɜːrd976/",
    "meaning": "社会 (词汇 976)",
    "root": "root-976 (词根释义)",
    "example": "This is an example sentence for GKWord976."
  },
  {
    "word": "GKWord977",
    "phonetic": "/gkˈwɜːrd977/",
    "meaning": "政治 (词汇 977)",
    "root": "root-977 (词根释义)",
    "example": "This is an example sentence for GKWord977."
  },
  {
    "word": "GKWord978",
    "phonetic": "/gkˈwɜːrd978/",
    "meaning": "学术的 (词汇 978)",
    "root": "root-978 (词根释义)",
    "example": "This is an example sentence for GKWord978."
  },
  {
    "word": "GKWord979",
    "phonetic": "/gkˈwɜːrd979/",
    "meaning": "抽象的 (词汇 979)",
    "root": "root-979 (词根释义)",
    "example": "This is an example sentence for GKWord979."
  },
  {
    "word": "GKWord980",
    "phonetic": "/gkˈwɜːrd980/",
    "meaning": "历史 (词汇 980)",
    "root": "root-980 (词根释义)",
    "example": "This is an example sentence for GKWord980."
  },
  {
    "word": "GKWord981",
    "phonetic": "/gkˈwɜːrd981/",
    "meaning": "历史 (词汇 981)",
    "root": "root-981 (词根释义)",
    "example": "This is an example sentence for GKWord981."
  },
  {
    "word": "GKWord982",
    "phonetic": "/gkˈwɜːrd982/",
    "meaning": "抽象的 (词汇 982)",
    "root": "root-982 (词根释义)",
    "example": "This is an example sentence for GKWord982."
  },
  {
    "word": "GKWord983",
    "phonetic": "/gkˈwɜːrd983/",
    "meaning": "社会 (词汇 983)",
    "root": "root-983 (词根释义)",
    "example": "This is an example sentence for GKWord983."
  },
  {
    "word": "GKWord984",
    "phonetic": "/gkˈwɜːrd984/",
    "meaning": "地理 (词汇 984)",
    "root": "root-984 (词根释义)",
    "example": "This is an example sentence for GKWord984."
  },
  {
    "word": "GKWord985",
    "phonetic": "/gkˈwɜːrd985/",
    "meaning": "科学 (词汇 985)",
    "root": "root-985 (词根释义)",
    "example": "This is an example sentence for GKWord985."
  },
  {
    "word": "GKWord986",
    "phonetic": "/gkˈwɜːrd986/",
    "meaning": "地理 (词汇 986)",
    "root": "root-986 (词根释义)",
    "example": "This is an example sentence for GKWord986."
  },
  {
    "word": "GKWord987",
    "phonetic": "/gkˈwɜːrd987/",
    "meaning": "经济 (词汇 987)",
    "root": "root-987 (词根释义)",
    "example": "This is an example sentence for GKWord987."
  },
  {
    "word": "GKWord988",
    "phonetic": "/gkˈwɜːrd988/",
    "meaning": "社会 (词汇 988)",
    "root": "root-988 (词根释义)",
    "example": "This is an example sentence for GKWord988."
  },
  {
    "word": "GKWord989",
    "phonetic": "/gkˈwɜːrd989/",
    "meaning": "经济 (词汇 989)",
    "root": "root-989 (词根释义)",
    "example": "This is an example sentence for GKWord989."
  },
  {
    "word": "GKWord990",
    "phonetic": "/gkˈwɜːrd990/",
    "meaning": "抽象的 (词汇 990)",
    "root": "root-990 (词根释义)",
    "example": "This is an example sentence for GKWord990."
  },
  {
    "word": "GKWord991",
    "phonetic": "/gkˈwɜːrd991/",
    "meaning": "学术的 (词汇 991)",
    "root": "root-991 (词根释义)",
    "example": "This is an example sentence for GKWord991."
  },
  {
    "word": "GKWord992",
    "phonetic": "/gkˈwɜːrd992/",
    "meaning": "抽象的 (词汇 992)",
    "root": "root-992 (词根释义)",
    "example": "This is an example sentence for GKWord992."
  },
  {
    "word": "GKWord993",
    "phonetic": "/gkˈwɜːrd993/",
    "meaning": "科学 (词汇 993)",
    "root": "root-993 (词根释义)",
    "example": "This is an example sentence for GKWord993."
  },
  {
    "word": "GKWord994",
    "phonetic": "/gkˈwɜːrd994/",
    "meaning": "学术的 (词汇 994)",
    "root": "root-994 (词根释义)",
    "example": "This is an example sentence for GKWord994."
  },
  {
    "word": "GKWord995",
    "phonetic": "/gkˈwɜːrd995/",
    "meaning": "科学 (词汇 995)",
    "root": "root-995 (词根释义)",
    "example": "This is an example sentence for GKWord995."
  },
  {
    "word": "GKWord996",
    "phonetic": "/gkˈwɜːrd996/",
    "meaning": "历史 (词汇 996)",
    "root": "root-996 (词根释义)",
    "example": "This is an example sentence for GKWord996."
  },
  {
    "word": "GKWord997",
    "phonetic": "/gkˈwɜːrd997/",
    "meaning": "地理 (词汇 997)",
    "root": "root-997 (词根释义)",
    "example": "This is an example sentence for GKWord997."
  },
  {
    "word": "GKWord998",
    "phonetic": "/gkˈwɜːrd998/",
    "meaning": "政治 (词汇 998)",
    "root": "root-998 (词根释义)",
    "example": "This is an example sentence for GKWord998."
  },
  {
    "word": "GKWord999",
    "phonetic": "/gkˈwɜːrd999/",
    "meaning": "学术的 (词汇 999)",
    "root": "root-999 (词根释义)",
    "example": "This is an example sentence for GKWord999."
  },
  {
    "word": "GKWord1000",
    "phonetic": "/gkˈwɜːrd1000/",
    "meaning": "经济 (词汇 1000)",
    "root": "root-1000 (词根释义)",
    "example": "This is an example sentence for GKWord1000."
  }
],
  'ielts': [
  {
    "word": "IELTSWord1",
    "phonetic": "/ieltsˈwɜːrd1/",
    "meaning": "全球化 (词汇 1)",
    "root": "root-1 (词根释义)",
    "example": "This is an example sentence for IELTSWord1."
  },
  {
    "word": "IELTSWord2",
    "phonetic": "/ieltsˈwɜːrd2/",
    "meaning": "教育 (词汇 2)",
    "root": "root-2 (词根释义)",
    "example": "This is an example sentence for IELTSWord2."
  },
  {
    "word": "IELTSWord3",
    "phonetic": "/ieltsˈwɜːrd3/",
    "meaning": "现象 (词汇 3)",
    "root": "root-3 (词根释义)",
    "example": "This is an example sentence for IELTSWord3."
  },
  {
    "word": "IELTSWord4",
    "phonetic": "/ieltsˈwɜːrd4/",
    "meaning": "分析 (词汇 4)",
    "root": "root-4 (词根释义)",
    "example": "This is an example sentence for IELTSWord4."
  },
  {
    "word": "IELTSWord5",
    "phonetic": "/ieltsˈwɜːrd5/",
    "meaning": "现象 (词汇 5)",
    "root": "root-5 (词根释义)",
    "example": "This is an example sentence for IELTSWord5."
  },
  {
    "word": "IELTSWord6",
    "phonetic": "/ieltsˈwɜːrd6/",
    "meaning": "分析 (词汇 6)",
    "root": "root-6 (词根释义)",
    "example": "This is an example sentence for IELTSWord6."
  },
  {
    "word": "IELTSWord7",
    "phonetic": "/ieltsˈwɜːrd7/",
    "meaning": "趋势 (词汇 7)",
    "root": "root-7 (词根释义)",
    "example": "This is an example sentence for IELTSWord7."
  },
  {
    "word": "IELTSWord8",
    "phonetic": "/ieltsˈwɜːrd8/",
    "meaning": "文化 (词汇 8)",
    "root": "root-8 (词根释义)",
    "example": "This is an example sentence for IELTSWord8."
  },
  {
    "word": "IELTSWord9",
    "phonetic": "/ieltsˈwɜːrd9/",
    "meaning": "全球化 (词汇 9)",
    "root": "root-9 (词根释义)",
    "example": "This is an example sentence for IELTSWord9."
  },
  {
    "word": "IELTSWord10",
    "phonetic": "/ieltsˈwɜːrd10/",
    "meaning": "文化 (词汇 10)",
    "root": "root-10 (词根释义)",
    "example": "This is an example sentence for IELTSWord10."
  },
  {
    "word": "IELTSWord11",
    "phonetic": "/ieltsˈwɜːrd11/",
    "meaning": "科技 (词汇 11)",
    "root": "root-11 (词根释义)",
    "example": "This is an example sentence for IELTSWord11."
  },
  {
    "word": "IELTSWord12",
    "phonetic": "/ieltsˈwɜːrd12/",
    "meaning": "全球化 (词汇 12)",
    "root": "root-12 (词根释义)",
    "example": "This is an example sentence for IELTSWord12."
  },
  {
    "word": "IELTSWord13",
    "phonetic": "/ieltsˈwɜːrd13/",
    "meaning": "教育 (词汇 13)",
    "root": "root-13 (词根释义)",
    "example": "This is an example sentence for IELTSWord13."
  },
  {
    "word": "IELTSWord14",
    "phonetic": "/ieltsˈwɜːrd14/",
    "meaning": "综合 (词汇 14)",
    "root": "root-14 (词根释义)",
    "example": "This is an example sentence for IELTSWord14."
  },
  {
    "word": "IELTSWord15",
    "phonetic": "/ieltsˈwɜːrd15/",
    "meaning": "文化 (词汇 15)",
    "root": "root-15 (词根释义)",
    "example": "This is an example sentence for IELTSWord15."
  },
  {
    "word": "IELTSWord16",
    "phonetic": "/ieltsˈwɜːrd16/",
    "meaning": "全球化 (词汇 16)",
    "root": "root-16 (词根释义)",
    "example": "This is an example sentence for IELTSWord16."
  },
  {
    "word": "IELTSWord17",
    "phonetic": "/ieltsˈwɜːrd17/",
    "meaning": "分析 (词汇 17)",
    "root": "root-17 (词根释义)",
    "example": "This is an example sentence for IELTSWord17."
  },
  {
    "word": "IELTSWord18",
    "phonetic": "/ieltsˈwɜːrd18/",
    "meaning": "评估 (词汇 18)",
    "root": "root-18 (词根释义)",
    "example": "This is an example sentence for IELTSWord18."
  },
  {
    "word": "IELTSWord19",
    "phonetic": "/ieltsˈwɜːrd19/",
    "meaning": "教育 (词汇 19)",
    "root": "root-19 (词根释义)",
    "example": "This is an example sentence for IELTSWord19."
  },
  {
    "word": "IELTSWord20",
    "phonetic": "/ieltsˈwɜːrd20/",
    "meaning": "现象 (词汇 20)",
    "root": "root-20 (词根释义)",
    "example": "This is an example sentence for IELTSWord20."
  },
  {
    "word": "IELTSWord21",
    "phonetic": "/ieltsˈwɜːrd21/",
    "meaning": "现象 (词汇 21)",
    "root": "root-21 (词根释义)",
    "example": "This is an example sentence for IELTSWord21."
  },
  {
    "word": "IELTSWord22",
    "phonetic": "/ieltsˈwɜːrd22/",
    "meaning": "综合 (词汇 22)",
    "root": "root-22 (词根释义)",
    "example": "This is an example sentence for IELTSWord22."
  },
  {
    "word": "IELTSWord23",
    "phonetic": "/ieltsˈwɜːrd23/",
    "meaning": "全球化 (词汇 23)",
    "root": "root-23 (词根释义)",
    "example": "This is an example sentence for IELTSWord23."
  },
  {
    "word": "IELTSWord24",
    "phonetic": "/ieltsˈwɜːrd24/",
    "meaning": "评估 (词汇 24)",
    "root": "root-24 (词根释义)",
    "example": "This is an example sentence for IELTSWord24."
  },
  {
    "word": "IELTSWord25",
    "phonetic": "/ieltsˈwɜːrd25/",
    "meaning": "现象 (词汇 25)",
    "root": "root-25 (词根释义)",
    "example": "This is an example sentence for IELTSWord25."
  },
  {
    "word": "IELTSWord26",
    "phonetic": "/ieltsˈwɜːrd26/",
    "meaning": "趋势 (词汇 26)",
    "root": "root-26 (词根释义)",
    "example": "This is an example sentence for IELTSWord26."
  },
  {
    "word": "IELTSWord27",
    "phonetic": "/ieltsˈwɜːrd27/",
    "meaning": "评估 (词汇 27)",
    "root": "root-27 (词根释义)",
    "example": "This is an example sentence for IELTSWord27."
  },
  {
    "word": "IELTSWord28",
    "phonetic": "/ieltsˈwɜːrd28/",
    "meaning": "环境 (词汇 28)",
    "root": "root-28 (词根释义)",
    "example": "This is an example sentence for IELTSWord28."
  },
  {
    "word": "IELTSWord29",
    "phonetic": "/ieltsˈwɜːrd29/",
    "meaning": "综合 (词汇 29)",
    "root": "root-29 (词根释义)",
    "example": "This is an example sentence for IELTSWord29."
  },
  {
    "word": "IELTSWord30",
    "phonetic": "/ieltsˈwɜːrd30/",
    "meaning": "综合 (词汇 30)",
    "root": "root-30 (词根释义)",
    "example": "This is an example sentence for IELTSWord30."
  },
  {
    "word": "IELTSWord31",
    "phonetic": "/ieltsˈwɜːrd31/",
    "meaning": "文化 (词汇 31)",
    "root": "root-31 (词根释义)",
    "example": "This is an example sentence for IELTSWord31."
  },
  {
    "word": "IELTSWord32",
    "phonetic": "/ieltsˈwɜːrd32/",
    "meaning": "评估 (词汇 32)",
    "root": "root-32 (词根释义)",
    "example": "This is an example sentence for IELTSWord32."
  },
  {
    "word": "IELTSWord33",
    "phonetic": "/ieltsˈwɜːrd33/",
    "meaning": "教育 (词汇 33)",
    "root": "root-33 (词根释义)",
    "example": "This is an example sentence for IELTSWord33."
  },
  {
    "word": "IELTSWord34",
    "phonetic": "/ieltsˈwɜːrd34/",
    "meaning": "现象 (词汇 34)",
    "root": "root-34 (词根释义)",
    "example": "This is an example sentence for IELTSWord34."
  },
  {
    "word": "IELTSWord35",
    "phonetic": "/ieltsˈwɜːrd35/",
    "meaning": "现象 (词汇 35)",
    "root": "root-35 (词根释义)",
    "example": "This is an example sentence for IELTSWord35."
  },
  {
    "word": "IELTSWord36",
    "phonetic": "/ieltsˈwɜːrd36/",
    "meaning": "评估 (词汇 36)",
    "root": "root-36 (词根释义)",
    "example": "This is an example sentence for IELTSWord36."
  },
  {
    "word": "IELTSWord37",
    "phonetic": "/ieltsˈwɜːrd37/",
    "meaning": "文化 (词汇 37)",
    "root": "root-37 (词根释义)",
    "example": "This is an example sentence for IELTSWord37."
  },
  {
    "word": "IELTSWord38",
    "phonetic": "/ieltsˈwɜːrd38/",
    "meaning": "评估 (词汇 38)",
    "root": "root-38 (词根释义)",
    "example": "This is an example sentence for IELTSWord38."
  },
  {
    "word": "IELTSWord39",
    "phonetic": "/ieltsˈwɜːrd39/",
    "meaning": "分析 (词汇 39)",
    "root": "root-39 (词根释义)",
    "example": "This is an example sentence for IELTSWord39."
  },
  {
    "word": "IELTSWord40",
    "phonetic": "/ieltsˈwɜːrd40/",
    "meaning": "教育 (词汇 40)",
    "root": "root-40 (词根释义)",
    "example": "This is an example sentence for IELTSWord40."
  },
  {
    "word": "IELTSWord41",
    "phonetic": "/ieltsˈwɜːrd41/",
    "meaning": "趋势 (词汇 41)",
    "root": "root-41 (词根释义)",
    "example": "This is an example sentence for IELTSWord41."
  },
  {
    "word": "IELTSWord42",
    "phonetic": "/ieltsˈwɜːrd42/",
    "meaning": "综合 (词汇 42)",
    "root": "root-42 (词根释义)",
    "example": "This is an example sentence for IELTSWord42."
  },
  {
    "word": "IELTSWord43",
    "phonetic": "/ieltsˈwɜːrd43/",
    "meaning": "文化 (词汇 43)",
    "root": "root-43 (词根释义)",
    "example": "This is an example sentence for IELTSWord43."
  },
  {
    "word": "IELTSWord44",
    "phonetic": "/ieltsˈwɜːrd44/",
    "meaning": "教育 (词汇 44)",
    "root": "root-44 (词根释义)",
    "example": "This is an example sentence for IELTSWord44."
  },
  {
    "word": "IELTSWord45",
    "phonetic": "/ieltsˈwɜːrd45/",
    "meaning": "分析 (词汇 45)",
    "root": "root-45 (词根释义)",
    "example": "This is an example sentence for IELTSWord45."
  },
  {
    "word": "IELTSWord46",
    "phonetic": "/ieltsˈwɜːrd46/",
    "meaning": "评估 (词汇 46)",
    "root": "root-46 (词根释义)",
    "example": "This is an example sentence for IELTSWord46."
  },
  {
    "word": "IELTSWord47",
    "phonetic": "/ieltsˈwɜːrd47/",
    "meaning": "环境 (词汇 47)",
    "root": "root-47 (词根释义)",
    "example": "This is an example sentence for IELTSWord47."
  },
  {
    "word": "IELTSWord48",
    "phonetic": "/ieltsˈwɜːrd48/",
    "meaning": "分析 (词汇 48)",
    "root": "root-48 (词根释义)",
    "example": "This is an example sentence for IELTSWord48."
  },
  {
    "word": "IELTSWord49",
    "phonetic": "/ieltsˈwɜːrd49/",
    "meaning": "评估 (词汇 49)",
    "root": "root-49 (词根释义)",
    "example": "This is an example sentence for IELTSWord49."
  },
  {
    "word": "IELTSWord50",
    "phonetic": "/ieltsˈwɜːrd50/",
    "meaning": "趋势 (词汇 50)",
    "root": "root-50 (词根释义)",
    "example": "This is an example sentence for IELTSWord50."
  },
  {
    "word": "IELTSWord51",
    "phonetic": "/ieltsˈwɜːrd51/",
    "meaning": "教育 (词汇 51)",
    "root": "root-51 (词根释义)",
    "example": "This is an example sentence for IELTSWord51."
  },
  {
    "word": "IELTSWord52",
    "phonetic": "/ieltsˈwɜːrd52/",
    "meaning": "综合 (词汇 52)",
    "root": "root-52 (词根释义)",
    "example": "This is an example sentence for IELTSWord52."
  },
  {
    "word": "IELTSWord53",
    "phonetic": "/ieltsˈwɜːrd53/",
    "meaning": "分析 (词汇 53)",
    "root": "root-53 (词根释义)",
    "example": "This is an example sentence for IELTSWord53."
  },
  {
    "word": "IELTSWord54",
    "phonetic": "/ieltsˈwɜːrd54/",
    "meaning": "文化 (词汇 54)",
    "root": "root-54 (词根释义)",
    "example": "This is an example sentence for IELTSWord54."
  },
  {
    "word": "IELTSWord55",
    "phonetic": "/ieltsˈwɜːrd55/",
    "meaning": "环境 (词汇 55)",
    "root": "root-55 (词根释义)",
    "example": "This is an example sentence for IELTSWord55."
  },
  {
    "word": "IELTSWord56",
    "phonetic": "/ieltsˈwɜːrd56/",
    "meaning": "现象 (词汇 56)",
    "root": "root-56 (词根释义)",
    "example": "This is an example sentence for IELTSWord56."
  },
  {
    "word": "IELTSWord57",
    "phonetic": "/ieltsˈwɜːrd57/",
    "meaning": "教育 (词汇 57)",
    "root": "root-57 (词根释义)",
    "example": "This is an example sentence for IELTSWord57."
  },
  {
    "word": "IELTSWord58",
    "phonetic": "/ieltsˈwɜːrd58/",
    "meaning": "全球化 (词汇 58)",
    "root": "root-58 (词根释义)",
    "example": "This is an example sentence for IELTSWord58."
  },
  {
    "word": "IELTSWord59",
    "phonetic": "/ieltsˈwɜːrd59/",
    "meaning": "评估 (词汇 59)",
    "root": "root-59 (词根释义)",
    "example": "This is an example sentence for IELTSWord59."
  },
  {
    "word": "IELTSWord60",
    "phonetic": "/ieltsˈwɜːrd60/",
    "meaning": "评估 (词汇 60)",
    "root": "root-60 (词根释义)",
    "example": "This is an example sentence for IELTSWord60."
  },
  {
    "word": "IELTSWord61",
    "phonetic": "/ieltsˈwɜːrd61/",
    "meaning": "分析 (词汇 61)",
    "root": "root-61 (词根释义)",
    "example": "This is an example sentence for IELTSWord61."
  },
  {
    "word": "IELTSWord62",
    "phonetic": "/ieltsˈwɜːrd62/",
    "meaning": "分析 (词汇 62)",
    "root": "root-62 (词根释义)",
    "example": "This is an example sentence for IELTSWord62."
  },
  {
    "word": "IELTSWord63",
    "phonetic": "/ieltsˈwɜːrd63/",
    "meaning": "文化 (词汇 63)",
    "root": "root-63 (词根释义)",
    "example": "This is an example sentence for IELTSWord63."
  },
  {
    "word": "IELTSWord64",
    "phonetic": "/ieltsˈwɜːrd64/",
    "meaning": "文化 (词汇 64)",
    "root": "root-64 (词根释义)",
    "example": "This is an example sentence for IELTSWord64."
  },
  {
    "word": "IELTSWord65",
    "phonetic": "/ieltsˈwɜːrd65/",
    "meaning": "综合 (词汇 65)",
    "root": "root-65 (词根释义)",
    "example": "This is an example sentence for IELTSWord65."
  },
  {
    "word": "IELTSWord66",
    "phonetic": "/ieltsˈwɜːrd66/",
    "meaning": "现象 (词汇 66)",
    "root": "root-66 (词根释义)",
    "example": "This is an example sentence for IELTSWord66."
  },
  {
    "word": "IELTSWord67",
    "phonetic": "/ieltsˈwɜːrd67/",
    "meaning": "评估 (词汇 67)",
    "root": "root-67 (词根释义)",
    "example": "This is an example sentence for IELTSWord67."
  },
  {
    "word": "IELTSWord68",
    "phonetic": "/ieltsˈwɜːrd68/",
    "meaning": "全球化 (词汇 68)",
    "root": "root-68 (词根释义)",
    "example": "This is an example sentence for IELTSWord68."
  },
  {
    "word": "IELTSWord69",
    "phonetic": "/ieltsˈwɜːrd69/",
    "meaning": "分析 (词汇 69)",
    "root": "root-69 (词根释义)",
    "example": "This is an example sentence for IELTSWord69."
  },
  {
    "word": "IELTSWord70",
    "phonetic": "/ieltsˈwɜːrd70/",
    "meaning": "评估 (词汇 70)",
    "root": "root-70 (词根释义)",
    "example": "This is an example sentence for IELTSWord70."
  },
  {
    "word": "IELTSWord71",
    "phonetic": "/ieltsˈwɜːrd71/",
    "meaning": "评估 (词汇 71)",
    "root": "root-71 (词根释义)",
    "example": "This is an example sentence for IELTSWord71."
  },
  {
    "word": "IELTSWord72",
    "phonetic": "/ieltsˈwɜːrd72/",
    "meaning": "科技 (词汇 72)",
    "root": "root-72 (词根释义)",
    "example": "This is an example sentence for IELTSWord72."
  },
  {
    "word": "IELTSWord73",
    "phonetic": "/ieltsˈwɜːrd73/",
    "meaning": "趋势 (词汇 73)",
    "root": "root-73 (词根释义)",
    "example": "This is an example sentence for IELTSWord73."
  },
  {
    "word": "IELTSWord74",
    "phonetic": "/ieltsˈwɜːrd74/",
    "meaning": "现象 (词汇 74)",
    "root": "root-74 (词根释义)",
    "example": "This is an example sentence for IELTSWord74."
  },
  {
    "word": "IELTSWord75",
    "phonetic": "/ieltsˈwɜːrd75/",
    "meaning": "现象 (词汇 75)",
    "root": "root-75 (词根释义)",
    "example": "This is an example sentence for IELTSWord75."
  },
  {
    "word": "IELTSWord76",
    "phonetic": "/ieltsˈwɜːrd76/",
    "meaning": "教育 (词汇 76)",
    "root": "root-76 (词根释义)",
    "example": "This is an example sentence for IELTSWord76."
  },
  {
    "word": "IELTSWord77",
    "phonetic": "/ieltsˈwɜːrd77/",
    "meaning": "现象 (词汇 77)",
    "root": "root-77 (词根释义)",
    "example": "This is an example sentence for IELTSWord77."
  },
  {
    "word": "IELTSWord78",
    "phonetic": "/ieltsˈwɜːrd78/",
    "meaning": "评估 (词汇 78)",
    "root": "root-78 (词根释义)",
    "example": "This is an example sentence for IELTSWord78."
  },
  {
    "word": "IELTSWord79",
    "phonetic": "/ieltsˈwɜːrd79/",
    "meaning": "综合 (词汇 79)",
    "root": "root-79 (词根释义)",
    "example": "This is an example sentence for IELTSWord79."
  },
  {
    "word": "IELTSWord80",
    "phonetic": "/ieltsˈwɜːrd80/",
    "meaning": "分析 (词汇 80)",
    "root": "root-80 (词根释义)",
    "example": "This is an example sentence for IELTSWord80."
  },
  {
    "word": "IELTSWord81",
    "phonetic": "/ieltsˈwɜːrd81/",
    "meaning": "教育 (词汇 81)",
    "root": "root-81 (词根释义)",
    "example": "This is an example sentence for IELTSWord81."
  },
  {
    "word": "IELTSWord82",
    "phonetic": "/ieltsˈwɜːrd82/",
    "meaning": "趋势 (词汇 82)",
    "root": "root-82 (词根释义)",
    "example": "This is an example sentence for IELTSWord82."
  },
  {
    "word": "IELTSWord83",
    "phonetic": "/ieltsˈwɜːrd83/",
    "meaning": "全球化 (词汇 83)",
    "root": "root-83 (词根释义)",
    "example": "This is an example sentence for IELTSWord83."
  },
  {
    "word": "IELTSWord84",
    "phonetic": "/ieltsˈwɜːrd84/",
    "meaning": "现象 (词汇 84)",
    "root": "root-84 (词根释义)",
    "example": "This is an example sentence for IELTSWord84."
  },
  {
    "word": "IELTSWord85",
    "phonetic": "/ieltsˈwɜːrd85/",
    "meaning": "趋势 (词汇 85)",
    "root": "root-85 (词根释义)",
    "example": "This is an example sentence for IELTSWord85."
  },
  {
    "word": "IELTSWord86",
    "phonetic": "/ieltsˈwɜːrd86/",
    "meaning": "科技 (词汇 86)",
    "root": "root-86 (词根释义)",
    "example": "This is an example sentence for IELTSWord86."
  },
  {
    "word": "IELTSWord87",
    "phonetic": "/ieltsˈwɜːrd87/",
    "meaning": "现象 (词汇 87)",
    "root": "root-87 (词根释义)",
    "example": "This is an example sentence for IELTSWord87."
  },
  {
    "word": "IELTSWord88",
    "phonetic": "/ieltsˈwɜːrd88/",
    "meaning": "环境 (词汇 88)",
    "root": "root-88 (词根释义)",
    "example": "This is an example sentence for IELTSWord88."
  },
  {
    "word": "IELTSWord89",
    "phonetic": "/ieltsˈwɜːrd89/",
    "meaning": "分析 (词汇 89)",
    "root": "root-89 (词根释义)",
    "example": "This is an example sentence for IELTSWord89."
  },
  {
    "word": "IELTSWord90",
    "phonetic": "/ieltsˈwɜːrd90/",
    "meaning": "环境 (词汇 90)",
    "root": "root-90 (词根释义)",
    "example": "This is an example sentence for IELTSWord90."
  },
  {
    "word": "IELTSWord91",
    "phonetic": "/ieltsˈwɜːrd91/",
    "meaning": "评估 (词汇 91)",
    "root": "root-91 (词根释义)",
    "example": "This is an example sentence for IELTSWord91."
  },
  {
    "word": "IELTSWord92",
    "phonetic": "/ieltsˈwɜːrd92/",
    "meaning": "教育 (词汇 92)",
    "root": "root-92 (词根释义)",
    "example": "This is an example sentence for IELTSWord92."
  },
  {
    "word": "IELTSWord93",
    "phonetic": "/ieltsˈwɜːrd93/",
    "meaning": "环境 (词汇 93)",
    "root": "root-93 (词根释义)",
    "example": "This is an example sentence for IELTSWord93."
  },
  {
    "word": "IELTSWord94",
    "phonetic": "/ieltsˈwɜːrd94/",
    "meaning": "综合 (词汇 94)",
    "root": "root-94 (词根释义)",
    "example": "This is an example sentence for IELTSWord94."
  },
  {
    "word": "IELTSWord95",
    "phonetic": "/ieltsˈwɜːrd95/",
    "meaning": "文化 (词汇 95)",
    "root": "root-95 (词根释义)",
    "example": "This is an example sentence for IELTSWord95."
  },
  {
    "word": "IELTSWord96",
    "phonetic": "/ieltsˈwɜːrd96/",
    "meaning": "全球化 (词汇 96)",
    "root": "root-96 (词根释义)",
    "example": "This is an example sentence for IELTSWord96."
  },
  {
    "word": "IELTSWord97",
    "phonetic": "/ieltsˈwɜːrd97/",
    "meaning": "文化 (词汇 97)",
    "root": "root-97 (词根释义)",
    "example": "This is an example sentence for IELTSWord97."
  },
  {
    "word": "IELTSWord98",
    "phonetic": "/ieltsˈwɜːrd98/",
    "meaning": "教育 (词汇 98)",
    "root": "root-98 (词根释义)",
    "example": "This is an example sentence for IELTSWord98."
  },
  {
    "word": "IELTSWord99",
    "phonetic": "/ieltsˈwɜːrd99/",
    "meaning": "文化 (词汇 99)",
    "root": "root-99 (词根释义)",
    "example": "This is an example sentence for IELTSWord99."
  },
  {
    "word": "IELTSWord100",
    "phonetic": "/ieltsˈwɜːrd100/",
    "meaning": "文化 (词汇 100)",
    "root": "root-100 (词根释义)",
    "example": "This is an example sentence for IELTSWord100."
  },
  {
    "word": "IELTSWord101",
    "phonetic": "/ieltsˈwɜːrd101/",
    "meaning": "分析 (词汇 101)",
    "root": "root-101 (词根释义)",
    "example": "This is an example sentence for IELTSWord101."
  },
  {
    "word": "IELTSWord102",
    "phonetic": "/ieltsˈwɜːrd102/",
    "meaning": "现象 (词汇 102)",
    "root": "root-102 (词根释义)",
    "example": "This is an example sentence for IELTSWord102."
  },
  {
    "word": "IELTSWord103",
    "phonetic": "/ieltsˈwɜːrd103/",
    "meaning": "文化 (词汇 103)",
    "root": "root-103 (词根释义)",
    "example": "This is an example sentence for IELTSWord103."
  },
  {
    "word": "IELTSWord104",
    "phonetic": "/ieltsˈwɜːrd104/",
    "meaning": "现象 (词汇 104)",
    "root": "root-104 (词根释义)",
    "example": "This is an example sentence for IELTSWord104."
  },
  {
    "word": "IELTSWord105",
    "phonetic": "/ieltsˈwɜːrd105/",
    "meaning": "趋势 (词汇 105)",
    "root": "root-105 (词根释义)",
    "example": "This is an example sentence for IELTSWord105."
  },
  {
    "word": "IELTSWord106",
    "phonetic": "/ieltsˈwɜːrd106/",
    "meaning": "评估 (词汇 106)",
    "root": "root-106 (词根释义)",
    "example": "This is an example sentence for IELTSWord106."
  },
  {
    "word": "IELTSWord107",
    "phonetic": "/ieltsˈwɜːrd107/",
    "meaning": "科技 (词汇 107)",
    "root": "root-107 (词根释义)",
    "example": "This is an example sentence for IELTSWord107."
  },
  {
    "word": "IELTSWord108",
    "phonetic": "/ieltsˈwɜːrd108/",
    "meaning": "现象 (词汇 108)",
    "root": "root-108 (词根释义)",
    "example": "This is an example sentence for IELTSWord108."
  },
  {
    "word": "IELTSWord109",
    "phonetic": "/ieltsˈwɜːrd109/",
    "meaning": "文化 (词汇 109)",
    "root": "root-109 (词根释义)",
    "example": "This is an example sentence for IELTSWord109."
  },
  {
    "word": "IELTSWord110",
    "phonetic": "/ieltsˈwɜːrd110/",
    "meaning": "科技 (词汇 110)",
    "root": "root-110 (词根释义)",
    "example": "This is an example sentence for IELTSWord110."
  },
  {
    "word": "IELTSWord111",
    "phonetic": "/ieltsˈwɜːrd111/",
    "meaning": "文化 (词汇 111)",
    "root": "root-111 (词根释义)",
    "example": "This is an example sentence for IELTSWord111."
  },
  {
    "word": "IELTSWord112",
    "phonetic": "/ieltsˈwɜːrd112/",
    "meaning": "现象 (词汇 112)",
    "root": "root-112 (词根释义)",
    "example": "This is an example sentence for IELTSWord112."
  },
  {
    "word": "IELTSWord113",
    "phonetic": "/ieltsˈwɜːrd113/",
    "meaning": "现象 (词汇 113)",
    "root": "root-113 (词根释义)",
    "example": "This is an example sentence for IELTSWord113."
  },
  {
    "word": "IELTSWord114",
    "phonetic": "/ieltsˈwɜːrd114/",
    "meaning": "全球化 (词汇 114)",
    "root": "root-114 (词根释义)",
    "example": "This is an example sentence for IELTSWord114."
  },
  {
    "word": "IELTSWord115",
    "phonetic": "/ieltsˈwɜːrd115/",
    "meaning": "全球化 (词汇 115)",
    "root": "root-115 (词根释义)",
    "example": "This is an example sentence for IELTSWord115."
  },
  {
    "word": "IELTSWord116",
    "phonetic": "/ieltsˈwɜːrd116/",
    "meaning": "全球化 (词汇 116)",
    "root": "root-116 (词根释义)",
    "example": "This is an example sentence for IELTSWord116."
  },
  {
    "word": "IELTSWord117",
    "phonetic": "/ieltsˈwɜːrd117/",
    "meaning": "科技 (词汇 117)",
    "root": "root-117 (词根释义)",
    "example": "This is an example sentence for IELTSWord117."
  },
  {
    "word": "IELTSWord118",
    "phonetic": "/ieltsˈwɜːrd118/",
    "meaning": "趋势 (词汇 118)",
    "root": "root-118 (词根释义)",
    "example": "This is an example sentence for IELTSWord118."
  },
  {
    "word": "IELTSWord119",
    "phonetic": "/ieltsˈwɜːrd119/",
    "meaning": "全球化 (词汇 119)",
    "root": "root-119 (词根释义)",
    "example": "This is an example sentence for IELTSWord119."
  },
  {
    "word": "IELTSWord120",
    "phonetic": "/ieltsˈwɜːrd120/",
    "meaning": "全球化 (词汇 120)",
    "root": "root-120 (词根释义)",
    "example": "This is an example sentence for IELTSWord120."
  },
  {
    "word": "IELTSWord121",
    "phonetic": "/ieltsˈwɜːrd121/",
    "meaning": "趋势 (词汇 121)",
    "root": "root-121 (词根释义)",
    "example": "This is an example sentence for IELTSWord121."
  },
  {
    "word": "IELTSWord122",
    "phonetic": "/ieltsˈwɜːrd122/",
    "meaning": "文化 (词汇 122)",
    "root": "root-122 (词根释义)",
    "example": "This is an example sentence for IELTSWord122."
  },
  {
    "word": "IELTSWord123",
    "phonetic": "/ieltsˈwɜːrd123/",
    "meaning": "分析 (词汇 123)",
    "root": "root-123 (词根释义)",
    "example": "This is an example sentence for IELTSWord123."
  },
  {
    "word": "IELTSWord124",
    "phonetic": "/ieltsˈwɜːrd124/",
    "meaning": "现象 (词汇 124)",
    "root": "root-124 (词根释义)",
    "example": "This is an example sentence for IELTSWord124."
  },
  {
    "word": "IELTSWord125",
    "phonetic": "/ieltsˈwɜːrd125/",
    "meaning": "文化 (词汇 125)",
    "root": "root-125 (词根释义)",
    "example": "This is an example sentence for IELTSWord125."
  },
  {
    "word": "IELTSWord126",
    "phonetic": "/ieltsˈwɜːrd126/",
    "meaning": "全球化 (词汇 126)",
    "root": "root-126 (词根释义)",
    "example": "This is an example sentence for IELTSWord126."
  },
  {
    "word": "IELTSWord127",
    "phonetic": "/ieltsˈwɜːrd127/",
    "meaning": "环境 (词汇 127)",
    "root": "root-127 (词根释义)",
    "example": "This is an example sentence for IELTSWord127."
  },
  {
    "word": "IELTSWord128",
    "phonetic": "/ieltsˈwɜːrd128/",
    "meaning": "综合 (词汇 128)",
    "root": "root-128 (词根释义)",
    "example": "This is an example sentence for IELTSWord128."
  },
  {
    "word": "IELTSWord129",
    "phonetic": "/ieltsˈwɜːrd129/",
    "meaning": "分析 (词汇 129)",
    "root": "root-129 (词根释义)",
    "example": "This is an example sentence for IELTSWord129."
  },
  {
    "word": "IELTSWord130",
    "phonetic": "/ieltsˈwɜːrd130/",
    "meaning": "评估 (词汇 130)",
    "root": "root-130 (词根释义)",
    "example": "This is an example sentence for IELTSWord130."
  },
  {
    "word": "IELTSWord131",
    "phonetic": "/ieltsˈwɜːrd131/",
    "meaning": "趋势 (词汇 131)",
    "root": "root-131 (词根释义)",
    "example": "This is an example sentence for IELTSWord131."
  },
  {
    "word": "IELTSWord132",
    "phonetic": "/ieltsˈwɜːrd132/",
    "meaning": "分析 (词汇 132)",
    "root": "root-132 (词根释义)",
    "example": "This is an example sentence for IELTSWord132."
  },
  {
    "word": "IELTSWord133",
    "phonetic": "/ieltsˈwɜːrd133/",
    "meaning": "文化 (词汇 133)",
    "root": "root-133 (词根释义)",
    "example": "This is an example sentence for IELTSWord133."
  },
  {
    "word": "IELTSWord134",
    "phonetic": "/ieltsˈwɜːrd134/",
    "meaning": "现象 (词汇 134)",
    "root": "root-134 (词根释义)",
    "example": "This is an example sentence for IELTSWord134."
  },
  {
    "word": "IELTSWord135",
    "phonetic": "/ieltsˈwɜːrd135/",
    "meaning": "环境 (词汇 135)",
    "root": "root-135 (词根释义)",
    "example": "This is an example sentence for IELTSWord135."
  },
  {
    "word": "IELTSWord136",
    "phonetic": "/ieltsˈwɜːrd136/",
    "meaning": "文化 (词汇 136)",
    "root": "root-136 (词根释义)",
    "example": "This is an example sentence for IELTSWord136."
  },
  {
    "word": "IELTSWord137",
    "phonetic": "/ieltsˈwɜːrd137/",
    "meaning": "综合 (词汇 137)",
    "root": "root-137 (词根释义)",
    "example": "This is an example sentence for IELTSWord137."
  },
  {
    "word": "IELTSWord138",
    "phonetic": "/ieltsˈwɜːrd138/",
    "meaning": "教育 (词汇 138)",
    "root": "root-138 (词根释义)",
    "example": "This is an example sentence for IELTSWord138."
  },
  {
    "word": "IELTSWord139",
    "phonetic": "/ieltsˈwɜːrd139/",
    "meaning": "环境 (词汇 139)",
    "root": "root-139 (词根释义)",
    "example": "This is an example sentence for IELTSWord139."
  },
  {
    "word": "IELTSWord140",
    "phonetic": "/ieltsˈwɜːrd140/",
    "meaning": "分析 (词汇 140)",
    "root": "root-140 (词根释义)",
    "example": "This is an example sentence for IELTSWord140."
  },
  {
    "word": "IELTSWord141",
    "phonetic": "/ieltsˈwɜːrd141/",
    "meaning": "现象 (词汇 141)",
    "root": "root-141 (词根释义)",
    "example": "This is an example sentence for IELTSWord141."
  },
  {
    "word": "IELTSWord142",
    "phonetic": "/ieltsˈwɜːrd142/",
    "meaning": "综合 (词汇 142)",
    "root": "root-142 (词根释义)",
    "example": "This is an example sentence for IELTSWord142."
  },
  {
    "word": "IELTSWord143",
    "phonetic": "/ieltsˈwɜːrd143/",
    "meaning": "教育 (词汇 143)",
    "root": "root-143 (词根释义)",
    "example": "This is an example sentence for IELTSWord143."
  },
  {
    "word": "IELTSWord144",
    "phonetic": "/ieltsˈwɜːrd144/",
    "meaning": "现象 (词汇 144)",
    "root": "root-144 (词根释义)",
    "example": "This is an example sentence for IELTSWord144."
  },
  {
    "word": "IELTSWord145",
    "phonetic": "/ieltsˈwɜːrd145/",
    "meaning": "环境 (词汇 145)",
    "root": "root-145 (词根释义)",
    "example": "This is an example sentence for IELTSWord145."
  },
  {
    "word": "IELTSWord146",
    "phonetic": "/ieltsˈwɜːrd146/",
    "meaning": "全球化 (词汇 146)",
    "root": "root-146 (词根释义)",
    "example": "This is an example sentence for IELTSWord146."
  },
  {
    "word": "IELTSWord147",
    "phonetic": "/ieltsˈwɜːrd147/",
    "meaning": "现象 (词汇 147)",
    "root": "root-147 (词根释义)",
    "example": "This is an example sentence for IELTSWord147."
  },
  {
    "word": "IELTSWord148",
    "phonetic": "/ieltsˈwɜːrd148/",
    "meaning": "文化 (词汇 148)",
    "root": "root-148 (词根释义)",
    "example": "This is an example sentence for IELTSWord148."
  },
  {
    "word": "IELTSWord149",
    "phonetic": "/ieltsˈwɜːrd149/",
    "meaning": "评估 (词汇 149)",
    "root": "root-149 (词根释义)",
    "example": "This is an example sentence for IELTSWord149."
  },
  {
    "word": "IELTSWord150",
    "phonetic": "/ieltsˈwɜːrd150/",
    "meaning": "科技 (词汇 150)",
    "root": "root-150 (词根释义)",
    "example": "This is an example sentence for IELTSWord150."
  },
  {
    "word": "IELTSWord151",
    "phonetic": "/ieltsˈwɜːrd151/",
    "meaning": "趋势 (词汇 151)",
    "root": "root-151 (词根释义)",
    "example": "This is an example sentence for IELTSWord151."
  },
  {
    "word": "IELTSWord152",
    "phonetic": "/ieltsˈwɜːrd152/",
    "meaning": "评估 (词汇 152)",
    "root": "root-152 (词根释义)",
    "example": "This is an example sentence for IELTSWord152."
  },
  {
    "word": "IELTSWord153",
    "phonetic": "/ieltsˈwɜːrd153/",
    "meaning": "文化 (词汇 153)",
    "root": "root-153 (词根释义)",
    "example": "This is an example sentence for IELTSWord153."
  },
  {
    "word": "IELTSWord154",
    "phonetic": "/ieltsˈwɜːrd154/",
    "meaning": "文化 (词汇 154)",
    "root": "root-154 (词根释义)",
    "example": "This is an example sentence for IELTSWord154."
  },
  {
    "word": "IELTSWord155",
    "phonetic": "/ieltsˈwɜːrd155/",
    "meaning": "科技 (词汇 155)",
    "root": "root-155 (词根释义)",
    "example": "This is an example sentence for IELTSWord155."
  },
  {
    "word": "IELTSWord156",
    "phonetic": "/ieltsˈwɜːrd156/",
    "meaning": "评估 (词汇 156)",
    "root": "root-156 (词根释义)",
    "example": "This is an example sentence for IELTSWord156."
  },
  {
    "word": "IELTSWord157",
    "phonetic": "/ieltsˈwɜːrd157/",
    "meaning": "全球化 (词汇 157)",
    "root": "root-157 (词根释义)",
    "example": "This is an example sentence for IELTSWord157."
  },
  {
    "word": "IELTSWord158",
    "phonetic": "/ieltsˈwɜːrd158/",
    "meaning": "评估 (词汇 158)",
    "root": "root-158 (词根释义)",
    "example": "This is an example sentence for IELTSWord158."
  },
  {
    "word": "IELTSWord159",
    "phonetic": "/ieltsˈwɜːrd159/",
    "meaning": "全球化 (词汇 159)",
    "root": "root-159 (词根释义)",
    "example": "This is an example sentence for IELTSWord159."
  },
  {
    "word": "IELTSWord160",
    "phonetic": "/ieltsˈwɜːrd160/",
    "meaning": "趋势 (词汇 160)",
    "root": "root-160 (词根释义)",
    "example": "This is an example sentence for IELTSWord160."
  },
  {
    "word": "IELTSWord161",
    "phonetic": "/ieltsˈwɜːrd161/",
    "meaning": "综合 (词汇 161)",
    "root": "root-161 (词根释义)",
    "example": "This is an example sentence for IELTSWord161."
  },
  {
    "word": "IELTSWord162",
    "phonetic": "/ieltsˈwɜːrd162/",
    "meaning": "科技 (词汇 162)",
    "root": "root-162 (词根释义)",
    "example": "This is an example sentence for IELTSWord162."
  },
  {
    "word": "IELTSWord163",
    "phonetic": "/ieltsˈwɜːrd163/",
    "meaning": "全球化 (词汇 163)",
    "root": "root-163 (词根释义)",
    "example": "This is an example sentence for IELTSWord163."
  },
  {
    "word": "IELTSWord164",
    "phonetic": "/ieltsˈwɜːrd164/",
    "meaning": "文化 (词汇 164)",
    "root": "root-164 (词根释义)",
    "example": "This is an example sentence for IELTSWord164."
  },
  {
    "word": "IELTSWord165",
    "phonetic": "/ieltsˈwɜːrd165/",
    "meaning": "现象 (词汇 165)",
    "root": "root-165 (词根释义)",
    "example": "This is an example sentence for IELTSWord165."
  },
  {
    "word": "IELTSWord166",
    "phonetic": "/ieltsˈwɜːrd166/",
    "meaning": "全球化 (词汇 166)",
    "root": "root-166 (词根释义)",
    "example": "This is an example sentence for IELTSWord166."
  },
  {
    "word": "IELTSWord167",
    "phonetic": "/ieltsˈwɜːrd167/",
    "meaning": "现象 (词汇 167)",
    "root": "root-167 (词根释义)",
    "example": "This is an example sentence for IELTSWord167."
  },
  {
    "word": "IELTSWord168",
    "phonetic": "/ieltsˈwɜːrd168/",
    "meaning": "教育 (词汇 168)",
    "root": "root-168 (词根释义)",
    "example": "This is an example sentence for IELTSWord168."
  },
  {
    "word": "IELTSWord169",
    "phonetic": "/ieltsˈwɜːrd169/",
    "meaning": "综合 (词汇 169)",
    "root": "root-169 (词根释义)",
    "example": "This is an example sentence for IELTSWord169."
  },
  {
    "word": "IELTSWord170",
    "phonetic": "/ieltsˈwɜːrd170/",
    "meaning": "全球化 (词汇 170)",
    "root": "root-170 (词根释义)",
    "example": "This is an example sentence for IELTSWord170."
  },
  {
    "word": "IELTSWord171",
    "phonetic": "/ieltsˈwɜːrd171/",
    "meaning": "教育 (词汇 171)",
    "root": "root-171 (词根释义)",
    "example": "This is an example sentence for IELTSWord171."
  },
  {
    "word": "IELTSWord172",
    "phonetic": "/ieltsˈwɜːrd172/",
    "meaning": "综合 (词汇 172)",
    "root": "root-172 (词根释义)",
    "example": "This is an example sentence for IELTSWord172."
  },
  {
    "word": "IELTSWord173",
    "phonetic": "/ieltsˈwɜːrd173/",
    "meaning": "全球化 (词汇 173)",
    "root": "root-173 (词根释义)",
    "example": "This is an example sentence for IELTSWord173."
  },
  {
    "word": "IELTSWord174",
    "phonetic": "/ieltsˈwɜːrd174/",
    "meaning": "科技 (词汇 174)",
    "root": "root-174 (词根释义)",
    "example": "This is an example sentence for IELTSWord174."
  },
  {
    "word": "IELTSWord175",
    "phonetic": "/ieltsˈwɜːrd175/",
    "meaning": "教育 (词汇 175)",
    "root": "root-175 (词根释义)",
    "example": "This is an example sentence for IELTSWord175."
  },
  {
    "word": "IELTSWord176",
    "phonetic": "/ieltsˈwɜːrd176/",
    "meaning": "全球化 (词汇 176)",
    "root": "root-176 (词根释义)",
    "example": "This is an example sentence for IELTSWord176."
  },
  {
    "word": "IELTSWord177",
    "phonetic": "/ieltsˈwɜːrd177/",
    "meaning": "环境 (词汇 177)",
    "root": "root-177 (词根释义)",
    "example": "This is an example sentence for IELTSWord177."
  },
  {
    "word": "IELTSWord178",
    "phonetic": "/ieltsˈwɜːrd178/",
    "meaning": "趋势 (词汇 178)",
    "root": "root-178 (词根释义)",
    "example": "This is an example sentence for IELTSWord178."
  },
  {
    "word": "IELTSWord179",
    "phonetic": "/ieltsˈwɜːrd179/",
    "meaning": "科技 (词汇 179)",
    "root": "root-179 (词根释义)",
    "example": "This is an example sentence for IELTSWord179."
  },
  {
    "word": "IELTSWord180",
    "phonetic": "/ieltsˈwɜːrd180/",
    "meaning": "全球化 (词汇 180)",
    "root": "root-180 (词根释义)",
    "example": "This is an example sentence for IELTSWord180."
  },
  {
    "word": "IELTSWord181",
    "phonetic": "/ieltsˈwɜːrd181/",
    "meaning": "综合 (词汇 181)",
    "root": "root-181 (词根释义)",
    "example": "This is an example sentence for IELTSWord181."
  },
  {
    "word": "IELTSWord182",
    "phonetic": "/ieltsˈwɜːrd182/",
    "meaning": "综合 (词汇 182)",
    "root": "root-182 (词根释义)",
    "example": "This is an example sentence for IELTSWord182."
  },
  {
    "word": "IELTSWord183",
    "phonetic": "/ieltsˈwɜːrd183/",
    "meaning": "现象 (词汇 183)",
    "root": "root-183 (词根释义)",
    "example": "This is an example sentence for IELTSWord183."
  },
  {
    "word": "IELTSWord184",
    "phonetic": "/ieltsˈwɜːrd184/",
    "meaning": "文化 (词汇 184)",
    "root": "root-184 (词根释义)",
    "example": "This is an example sentence for IELTSWord184."
  },
  {
    "word": "IELTSWord185",
    "phonetic": "/ieltsˈwɜːrd185/",
    "meaning": "环境 (词汇 185)",
    "root": "root-185 (词根释义)",
    "example": "This is an example sentence for IELTSWord185."
  },
  {
    "word": "IELTSWord186",
    "phonetic": "/ieltsˈwɜːrd186/",
    "meaning": "评估 (词汇 186)",
    "root": "root-186 (词根释义)",
    "example": "This is an example sentence for IELTSWord186."
  },
  {
    "word": "IELTSWord187",
    "phonetic": "/ieltsˈwɜːrd187/",
    "meaning": "现象 (词汇 187)",
    "root": "root-187 (词根释义)",
    "example": "This is an example sentence for IELTSWord187."
  },
  {
    "word": "IELTSWord188",
    "phonetic": "/ieltsˈwɜːrd188/",
    "meaning": "文化 (词汇 188)",
    "root": "root-188 (词根释义)",
    "example": "This is an example sentence for IELTSWord188."
  },
  {
    "word": "IELTSWord189",
    "phonetic": "/ieltsˈwɜːrd189/",
    "meaning": "趋势 (词汇 189)",
    "root": "root-189 (词根释义)",
    "example": "This is an example sentence for IELTSWord189."
  },
  {
    "word": "IELTSWord190",
    "phonetic": "/ieltsˈwɜːrd190/",
    "meaning": "现象 (词汇 190)",
    "root": "root-190 (词根释义)",
    "example": "This is an example sentence for IELTSWord190."
  },
  {
    "word": "IELTSWord191",
    "phonetic": "/ieltsˈwɜːrd191/",
    "meaning": "分析 (词汇 191)",
    "root": "root-191 (词根释义)",
    "example": "This is an example sentence for IELTSWord191."
  },
  {
    "word": "IELTSWord192",
    "phonetic": "/ieltsˈwɜːrd192/",
    "meaning": "分析 (词汇 192)",
    "root": "root-192 (词根释义)",
    "example": "This is an example sentence for IELTSWord192."
  },
  {
    "word": "IELTSWord193",
    "phonetic": "/ieltsˈwɜːrd193/",
    "meaning": "全球化 (词汇 193)",
    "root": "root-193 (词根释义)",
    "example": "This is an example sentence for IELTSWord193."
  },
  {
    "word": "IELTSWord194",
    "phonetic": "/ieltsˈwɜːrd194/",
    "meaning": "文化 (词汇 194)",
    "root": "root-194 (词根释义)",
    "example": "This is an example sentence for IELTSWord194."
  },
  {
    "word": "IELTSWord195",
    "phonetic": "/ieltsˈwɜːrd195/",
    "meaning": "科技 (词汇 195)",
    "root": "root-195 (词根释义)",
    "example": "This is an example sentence for IELTSWord195."
  },
  {
    "word": "IELTSWord196",
    "phonetic": "/ieltsˈwɜːrd196/",
    "meaning": "综合 (词汇 196)",
    "root": "root-196 (词根释义)",
    "example": "This is an example sentence for IELTSWord196."
  },
  {
    "word": "IELTSWord197",
    "phonetic": "/ieltsˈwɜːrd197/",
    "meaning": "综合 (词汇 197)",
    "root": "root-197 (词根释义)",
    "example": "This is an example sentence for IELTSWord197."
  },
  {
    "word": "IELTSWord198",
    "phonetic": "/ieltsˈwɜːrd198/",
    "meaning": "综合 (词汇 198)",
    "root": "root-198 (词根释义)",
    "example": "This is an example sentence for IELTSWord198."
  },
  {
    "word": "IELTSWord199",
    "phonetic": "/ieltsˈwɜːrd199/",
    "meaning": "文化 (词汇 199)",
    "root": "root-199 (词根释义)",
    "example": "This is an example sentence for IELTSWord199."
  },
  {
    "word": "IELTSWord200",
    "phonetic": "/ieltsˈwɜːrd200/",
    "meaning": "综合 (词汇 200)",
    "root": "root-200 (词根释义)",
    "example": "This is an example sentence for IELTSWord200."
  },
  {
    "word": "IELTSWord201",
    "phonetic": "/ieltsˈwɜːrd201/",
    "meaning": "现象 (词汇 201)",
    "root": "root-201 (词根释义)",
    "example": "This is an example sentence for IELTSWord201."
  },
  {
    "word": "IELTSWord202",
    "phonetic": "/ieltsˈwɜːrd202/",
    "meaning": "全球化 (词汇 202)",
    "root": "root-202 (词根释义)",
    "example": "This is an example sentence for IELTSWord202."
  },
  {
    "word": "IELTSWord203",
    "phonetic": "/ieltsˈwɜːrd203/",
    "meaning": "文化 (词汇 203)",
    "root": "root-203 (词根释义)",
    "example": "This is an example sentence for IELTSWord203."
  },
  {
    "word": "IELTSWord204",
    "phonetic": "/ieltsˈwɜːrd204/",
    "meaning": "环境 (词汇 204)",
    "root": "root-204 (词根释义)",
    "example": "This is an example sentence for IELTSWord204."
  },
  {
    "word": "IELTSWord205",
    "phonetic": "/ieltsˈwɜːrd205/",
    "meaning": "现象 (词汇 205)",
    "root": "root-205 (词根释义)",
    "example": "This is an example sentence for IELTSWord205."
  },
  {
    "word": "IELTSWord206",
    "phonetic": "/ieltsˈwɜːrd206/",
    "meaning": "科技 (词汇 206)",
    "root": "root-206 (词根释义)",
    "example": "This is an example sentence for IELTSWord206."
  },
  {
    "word": "IELTSWord207",
    "phonetic": "/ieltsˈwɜːrd207/",
    "meaning": "分析 (词汇 207)",
    "root": "root-207 (词根释义)",
    "example": "This is an example sentence for IELTSWord207."
  },
  {
    "word": "IELTSWord208",
    "phonetic": "/ieltsˈwɜːrd208/",
    "meaning": "文化 (词汇 208)",
    "root": "root-208 (词根释义)",
    "example": "This is an example sentence for IELTSWord208."
  },
  {
    "word": "IELTSWord209",
    "phonetic": "/ieltsˈwɜːrd209/",
    "meaning": "综合 (词汇 209)",
    "root": "root-209 (词根释义)",
    "example": "This is an example sentence for IELTSWord209."
  },
  {
    "word": "IELTSWord210",
    "phonetic": "/ieltsˈwɜːrd210/",
    "meaning": "现象 (词汇 210)",
    "root": "root-210 (词根释义)",
    "example": "This is an example sentence for IELTSWord210."
  },
  {
    "word": "IELTSWord211",
    "phonetic": "/ieltsˈwɜːrd211/",
    "meaning": "评估 (词汇 211)",
    "root": "root-211 (词根释义)",
    "example": "This is an example sentence for IELTSWord211."
  },
  {
    "word": "IELTSWord212",
    "phonetic": "/ieltsˈwɜːrd212/",
    "meaning": "分析 (词汇 212)",
    "root": "root-212 (词根释义)",
    "example": "This is an example sentence for IELTSWord212."
  },
  {
    "word": "IELTSWord213",
    "phonetic": "/ieltsˈwɜːrd213/",
    "meaning": "文化 (词汇 213)",
    "root": "root-213 (词根释义)",
    "example": "This is an example sentence for IELTSWord213."
  },
  {
    "word": "IELTSWord214",
    "phonetic": "/ieltsˈwɜːrd214/",
    "meaning": "趋势 (词汇 214)",
    "root": "root-214 (词根释义)",
    "example": "This is an example sentence for IELTSWord214."
  },
  {
    "word": "IELTSWord215",
    "phonetic": "/ieltsˈwɜːrd215/",
    "meaning": "环境 (词汇 215)",
    "root": "root-215 (词根释义)",
    "example": "This is an example sentence for IELTSWord215."
  },
  {
    "word": "IELTSWord216",
    "phonetic": "/ieltsˈwɜːrd216/",
    "meaning": "文化 (词汇 216)",
    "root": "root-216 (词根释义)",
    "example": "This is an example sentence for IELTSWord216."
  },
  {
    "word": "IELTSWord217",
    "phonetic": "/ieltsˈwɜːrd217/",
    "meaning": "文化 (词汇 217)",
    "root": "root-217 (词根释义)",
    "example": "This is an example sentence for IELTSWord217."
  },
  {
    "word": "IELTSWord218",
    "phonetic": "/ieltsˈwɜːrd218/",
    "meaning": "科技 (词汇 218)",
    "root": "root-218 (词根释义)",
    "example": "This is an example sentence for IELTSWord218."
  },
  {
    "word": "IELTSWord219",
    "phonetic": "/ieltsˈwɜːrd219/",
    "meaning": "评估 (词汇 219)",
    "root": "root-219 (词根释义)",
    "example": "This is an example sentence for IELTSWord219."
  },
  {
    "word": "IELTSWord220",
    "phonetic": "/ieltsˈwɜːrd220/",
    "meaning": "评估 (词汇 220)",
    "root": "root-220 (词根释义)",
    "example": "This is an example sentence for IELTSWord220."
  },
  {
    "word": "IELTSWord221",
    "phonetic": "/ieltsˈwɜːrd221/",
    "meaning": "分析 (词汇 221)",
    "root": "root-221 (词根释义)",
    "example": "This is an example sentence for IELTSWord221."
  },
  {
    "word": "IELTSWord222",
    "phonetic": "/ieltsˈwɜːrd222/",
    "meaning": "综合 (词汇 222)",
    "root": "root-222 (词根释义)",
    "example": "This is an example sentence for IELTSWord222."
  },
  {
    "word": "IELTSWord223",
    "phonetic": "/ieltsˈwɜːrd223/",
    "meaning": "全球化 (词汇 223)",
    "root": "root-223 (词根释义)",
    "example": "This is an example sentence for IELTSWord223."
  },
  {
    "word": "IELTSWord224",
    "phonetic": "/ieltsˈwɜːrd224/",
    "meaning": "教育 (词汇 224)",
    "root": "root-224 (词根释义)",
    "example": "This is an example sentence for IELTSWord224."
  },
  {
    "word": "IELTSWord225",
    "phonetic": "/ieltsˈwɜːrd225/",
    "meaning": "教育 (词汇 225)",
    "root": "root-225 (词根释义)",
    "example": "This is an example sentence for IELTSWord225."
  },
  {
    "word": "IELTSWord226",
    "phonetic": "/ieltsˈwɜːrd226/",
    "meaning": "文化 (词汇 226)",
    "root": "root-226 (词根释义)",
    "example": "This is an example sentence for IELTSWord226."
  },
  {
    "word": "IELTSWord227",
    "phonetic": "/ieltsˈwɜːrd227/",
    "meaning": "科技 (词汇 227)",
    "root": "root-227 (词根释义)",
    "example": "This is an example sentence for IELTSWord227."
  },
  {
    "word": "IELTSWord228",
    "phonetic": "/ieltsˈwɜːrd228/",
    "meaning": "现象 (词汇 228)",
    "root": "root-228 (词根释义)",
    "example": "This is an example sentence for IELTSWord228."
  },
  {
    "word": "IELTSWord229",
    "phonetic": "/ieltsˈwɜːrd229/",
    "meaning": "科技 (词汇 229)",
    "root": "root-229 (词根释义)",
    "example": "This is an example sentence for IELTSWord229."
  },
  {
    "word": "IELTSWord230",
    "phonetic": "/ieltsˈwɜːrd230/",
    "meaning": "现象 (词汇 230)",
    "root": "root-230 (词根释义)",
    "example": "This is an example sentence for IELTSWord230."
  },
  {
    "word": "IELTSWord231",
    "phonetic": "/ieltsˈwɜːrd231/",
    "meaning": "教育 (词汇 231)",
    "root": "root-231 (词根释义)",
    "example": "This is an example sentence for IELTSWord231."
  },
  {
    "word": "IELTSWord232",
    "phonetic": "/ieltsˈwɜːrd232/",
    "meaning": "文化 (词汇 232)",
    "root": "root-232 (词根释义)",
    "example": "This is an example sentence for IELTSWord232."
  },
  {
    "word": "IELTSWord233",
    "phonetic": "/ieltsˈwɜːrd233/",
    "meaning": "文化 (词汇 233)",
    "root": "root-233 (词根释义)",
    "example": "This is an example sentence for IELTSWord233."
  },
  {
    "word": "IELTSWord234",
    "phonetic": "/ieltsˈwɜːrd234/",
    "meaning": "文化 (词汇 234)",
    "root": "root-234 (词根释义)",
    "example": "This is an example sentence for IELTSWord234."
  },
  {
    "word": "IELTSWord235",
    "phonetic": "/ieltsˈwɜːrd235/",
    "meaning": "文化 (词汇 235)",
    "root": "root-235 (词根释义)",
    "example": "This is an example sentence for IELTSWord235."
  },
  {
    "word": "IELTSWord236",
    "phonetic": "/ieltsˈwɜːrd236/",
    "meaning": "教育 (词汇 236)",
    "root": "root-236 (词根释义)",
    "example": "This is an example sentence for IELTSWord236."
  },
  {
    "word": "IELTSWord237",
    "phonetic": "/ieltsˈwɜːrd237/",
    "meaning": "科技 (词汇 237)",
    "root": "root-237 (词根释义)",
    "example": "This is an example sentence for IELTSWord237."
  },
  {
    "word": "IELTSWord238",
    "phonetic": "/ieltsˈwɜːrd238/",
    "meaning": "全球化 (词汇 238)",
    "root": "root-238 (词根释义)",
    "example": "This is an example sentence for IELTSWord238."
  },
  {
    "word": "IELTSWord239",
    "phonetic": "/ieltsˈwɜːrd239/",
    "meaning": "综合 (词汇 239)",
    "root": "root-239 (词根释义)",
    "example": "This is an example sentence for IELTSWord239."
  },
  {
    "word": "IELTSWord240",
    "phonetic": "/ieltsˈwɜːrd240/",
    "meaning": "趋势 (词汇 240)",
    "root": "root-240 (词根释义)",
    "example": "This is an example sentence for IELTSWord240."
  },
  {
    "word": "IELTSWord241",
    "phonetic": "/ieltsˈwɜːrd241/",
    "meaning": "现象 (词汇 241)",
    "root": "root-241 (词根释义)",
    "example": "This is an example sentence for IELTSWord241."
  },
  {
    "word": "IELTSWord242",
    "phonetic": "/ieltsˈwɜːrd242/",
    "meaning": "趋势 (词汇 242)",
    "root": "root-242 (词根释义)",
    "example": "This is an example sentence for IELTSWord242."
  },
  {
    "word": "IELTSWord243",
    "phonetic": "/ieltsˈwɜːrd243/",
    "meaning": "分析 (词汇 243)",
    "root": "root-243 (词根释义)",
    "example": "This is an example sentence for IELTSWord243."
  },
  {
    "word": "IELTSWord244",
    "phonetic": "/ieltsˈwɜːrd244/",
    "meaning": "分析 (词汇 244)",
    "root": "root-244 (词根释义)",
    "example": "This is an example sentence for IELTSWord244."
  },
  {
    "word": "IELTSWord245",
    "phonetic": "/ieltsˈwɜːrd245/",
    "meaning": "趋势 (词汇 245)",
    "root": "root-245 (词根释义)",
    "example": "This is an example sentence for IELTSWord245."
  },
  {
    "word": "IELTSWord246",
    "phonetic": "/ieltsˈwɜːrd246/",
    "meaning": "教育 (词汇 246)",
    "root": "root-246 (词根释义)",
    "example": "This is an example sentence for IELTSWord246."
  },
  {
    "word": "IELTSWord247",
    "phonetic": "/ieltsˈwɜːrd247/",
    "meaning": "分析 (词汇 247)",
    "root": "root-247 (词根释义)",
    "example": "This is an example sentence for IELTSWord247."
  },
  {
    "word": "IELTSWord248",
    "phonetic": "/ieltsˈwɜːrd248/",
    "meaning": "趋势 (词汇 248)",
    "root": "root-248 (词根释义)",
    "example": "This is an example sentence for IELTSWord248."
  },
  {
    "word": "IELTSWord249",
    "phonetic": "/ieltsˈwɜːrd249/",
    "meaning": "科技 (词汇 249)",
    "root": "root-249 (词根释义)",
    "example": "This is an example sentence for IELTSWord249."
  },
  {
    "word": "IELTSWord250",
    "phonetic": "/ieltsˈwɜːrd250/",
    "meaning": "评估 (词汇 250)",
    "root": "root-250 (词根释义)",
    "example": "This is an example sentence for IELTSWord250."
  },
  {
    "word": "IELTSWord251",
    "phonetic": "/ieltsˈwɜːrd251/",
    "meaning": "趋势 (词汇 251)",
    "root": "root-251 (词根释义)",
    "example": "This is an example sentence for IELTSWord251."
  },
  {
    "word": "IELTSWord252",
    "phonetic": "/ieltsˈwɜːrd252/",
    "meaning": "综合 (词汇 252)",
    "root": "root-252 (词根释义)",
    "example": "This is an example sentence for IELTSWord252."
  },
  {
    "word": "IELTSWord253",
    "phonetic": "/ieltsˈwɜːrd253/",
    "meaning": "评估 (词汇 253)",
    "root": "root-253 (词根释义)",
    "example": "This is an example sentence for IELTSWord253."
  },
  {
    "word": "IELTSWord254",
    "phonetic": "/ieltsˈwɜːrd254/",
    "meaning": "现象 (词汇 254)",
    "root": "root-254 (词根释义)",
    "example": "This is an example sentence for IELTSWord254."
  },
  {
    "word": "IELTSWord255",
    "phonetic": "/ieltsˈwɜːrd255/",
    "meaning": "全球化 (词汇 255)",
    "root": "root-255 (词根释义)",
    "example": "This is an example sentence for IELTSWord255."
  },
  {
    "word": "IELTSWord256",
    "phonetic": "/ieltsˈwɜːrd256/",
    "meaning": "环境 (词汇 256)",
    "root": "root-256 (词根释义)",
    "example": "This is an example sentence for IELTSWord256."
  },
  {
    "word": "IELTSWord257",
    "phonetic": "/ieltsˈwɜːrd257/",
    "meaning": "分析 (词汇 257)",
    "root": "root-257 (词根释义)",
    "example": "This is an example sentence for IELTSWord257."
  },
  {
    "word": "IELTSWord258",
    "phonetic": "/ieltsˈwɜːrd258/",
    "meaning": "科技 (词汇 258)",
    "root": "root-258 (词根释义)",
    "example": "This is an example sentence for IELTSWord258."
  },
  {
    "word": "IELTSWord259",
    "phonetic": "/ieltsˈwɜːrd259/",
    "meaning": "环境 (词汇 259)",
    "root": "root-259 (词根释义)",
    "example": "This is an example sentence for IELTSWord259."
  },
  {
    "word": "IELTSWord260",
    "phonetic": "/ieltsˈwɜːrd260/",
    "meaning": "现象 (词汇 260)",
    "root": "root-260 (词根释义)",
    "example": "This is an example sentence for IELTSWord260."
  },
  {
    "word": "IELTSWord261",
    "phonetic": "/ieltsˈwɜːrd261/",
    "meaning": "趋势 (词汇 261)",
    "root": "root-261 (词根释义)",
    "example": "This is an example sentence for IELTSWord261."
  },
  {
    "word": "IELTSWord262",
    "phonetic": "/ieltsˈwɜːrd262/",
    "meaning": "教育 (词汇 262)",
    "root": "root-262 (词根释义)",
    "example": "This is an example sentence for IELTSWord262."
  },
  {
    "word": "IELTSWord263",
    "phonetic": "/ieltsˈwɜːrd263/",
    "meaning": "教育 (词汇 263)",
    "root": "root-263 (词根释义)",
    "example": "This is an example sentence for IELTSWord263."
  },
  {
    "word": "IELTSWord264",
    "phonetic": "/ieltsˈwɜːrd264/",
    "meaning": "文化 (词汇 264)",
    "root": "root-264 (词根释义)",
    "example": "This is an example sentence for IELTSWord264."
  },
  {
    "word": "IELTSWord265",
    "phonetic": "/ieltsˈwɜːrd265/",
    "meaning": "文化 (词汇 265)",
    "root": "root-265 (词根释义)",
    "example": "This is an example sentence for IELTSWord265."
  },
  {
    "word": "IELTSWord266",
    "phonetic": "/ieltsˈwɜːrd266/",
    "meaning": "综合 (词汇 266)",
    "root": "root-266 (词根释义)",
    "example": "This is an example sentence for IELTSWord266."
  },
  {
    "word": "IELTSWord267",
    "phonetic": "/ieltsˈwɜːrd267/",
    "meaning": "环境 (词汇 267)",
    "root": "root-267 (词根释义)",
    "example": "This is an example sentence for IELTSWord267."
  },
  {
    "word": "IELTSWord268",
    "phonetic": "/ieltsˈwɜːrd268/",
    "meaning": "文化 (词汇 268)",
    "root": "root-268 (词根释义)",
    "example": "This is an example sentence for IELTSWord268."
  },
  {
    "word": "IELTSWord269",
    "phonetic": "/ieltsˈwɜːrd269/",
    "meaning": "综合 (词汇 269)",
    "root": "root-269 (词根释义)",
    "example": "This is an example sentence for IELTSWord269."
  },
  {
    "word": "IELTSWord270",
    "phonetic": "/ieltsˈwɜːrd270/",
    "meaning": "文化 (词汇 270)",
    "root": "root-270 (词根释义)",
    "example": "This is an example sentence for IELTSWord270."
  },
  {
    "word": "IELTSWord271",
    "phonetic": "/ieltsˈwɜːrd271/",
    "meaning": "全球化 (词汇 271)",
    "root": "root-271 (词根释义)",
    "example": "This is an example sentence for IELTSWord271."
  },
  {
    "word": "IELTSWord272",
    "phonetic": "/ieltsˈwɜːrd272/",
    "meaning": "科技 (词汇 272)",
    "root": "root-272 (词根释义)",
    "example": "This is an example sentence for IELTSWord272."
  },
  {
    "word": "IELTSWord273",
    "phonetic": "/ieltsˈwɜːrd273/",
    "meaning": "分析 (词汇 273)",
    "root": "root-273 (词根释义)",
    "example": "This is an example sentence for IELTSWord273."
  },
  {
    "word": "IELTSWord274",
    "phonetic": "/ieltsˈwɜːrd274/",
    "meaning": "趋势 (词汇 274)",
    "root": "root-274 (词根释义)",
    "example": "This is an example sentence for IELTSWord274."
  },
  {
    "word": "IELTSWord275",
    "phonetic": "/ieltsˈwɜːrd275/",
    "meaning": "文化 (词汇 275)",
    "root": "root-275 (词根释义)",
    "example": "This is an example sentence for IELTSWord275."
  },
  {
    "word": "IELTSWord276",
    "phonetic": "/ieltsˈwɜːrd276/",
    "meaning": "综合 (词汇 276)",
    "root": "root-276 (词根释义)",
    "example": "This is an example sentence for IELTSWord276."
  },
  {
    "word": "IELTSWord277",
    "phonetic": "/ieltsˈwɜːrd277/",
    "meaning": "现象 (词汇 277)",
    "root": "root-277 (词根释义)",
    "example": "This is an example sentence for IELTSWord277."
  },
  {
    "word": "IELTSWord278",
    "phonetic": "/ieltsˈwɜːrd278/",
    "meaning": "现象 (词汇 278)",
    "root": "root-278 (词根释义)",
    "example": "This is an example sentence for IELTSWord278."
  },
  {
    "word": "IELTSWord279",
    "phonetic": "/ieltsˈwɜːrd279/",
    "meaning": "科技 (词汇 279)",
    "root": "root-279 (词根释义)",
    "example": "This is an example sentence for IELTSWord279."
  },
  {
    "word": "IELTSWord280",
    "phonetic": "/ieltsˈwɜːrd280/",
    "meaning": "环境 (词汇 280)",
    "root": "root-280 (词根释义)",
    "example": "This is an example sentence for IELTSWord280."
  },
  {
    "word": "IELTSWord281",
    "phonetic": "/ieltsˈwɜːrd281/",
    "meaning": "评估 (词汇 281)",
    "root": "root-281 (词根释义)",
    "example": "This is an example sentence for IELTSWord281."
  },
  {
    "word": "IELTSWord282",
    "phonetic": "/ieltsˈwɜːrd282/",
    "meaning": "全球化 (词汇 282)",
    "root": "root-282 (词根释义)",
    "example": "This is an example sentence for IELTSWord282."
  },
  {
    "word": "IELTSWord283",
    "phonetic": "/ieltsˈwɜːrd283/",
    "meaning": "分析 (词汇 283)",
    "root": "root-283 (词根释义)",
    "example": "This is an example sentence for IELTSWord283."
  },
  {
    "word": "IELTSWord284",
    "phonetic": "/ieltsˈwɜːrd284/",
    "meaning": "环境 (词汇 284)",
    "root": "root-284 (词根释义)",
    "example": "This is an example sentence for IELTSWord284."
  },
  {
    "word": "IELTSWord285",
    "phonetic": "/ieltsˈwɜːrd285/",
    "meaning": "环境 (词汇 285)",
    "root": "root-285 (词根释义)",
    "example": "This is an example sentence for IELTSWord285."
  },
  {
    "word": "IELTSWord286",
    "phonetic": "/ieltsˈwɜːrd286/",
    "meaning": "评估 (词汇 286)",
    "root": "root-286 (词根释义)",
    "example": "This is an example sentence for IELTSWord286."
  },
  {
    "word": "IELTSWord287",
    "phonetic": "/ieltsˈwɜːrd287/",
    "meaning": "现象 (词汇 287)",
    "root": "root-287 (词根释义)",
    "example": "This is an example sentence for IELTSWord287."
  },
  {
    "word": "IELTSWord288",
    "phonetic": "/ieltsˈwɜːrd288/",
    "meaning": "全球化 (词汇 288)",
    "root": "root-288 (词根释义)",
    "example": "This is an example sentence for IELTSWord288."
  },
  {
    "word": "IELTSWord289",
    "phonetic": "/ieltsˈwɜːrd289/",
    "meaning": "环境 (词汇 289)",
    "root": "root-289 (词根释义)",
    "example": "This is an example sentence for IELTSWord289."
  },
  {
    "word": "IELTSWord290",
    "phonetic": "/ieltsˈwɜːrd290/",
    "meaning": "环境 (词汇 290)",
    "root": "root-290 (词根释义)",
    "example": "This is an example sentence for IELTSWord290."
  },
  {
    "word": "IELTSWord291",
    "phonetic": "/ieltsˈwɜːrd291/",
    "meaning": "趋势 (词汇 291)",
    "root": "root-291 (词根释义)",
    "example": "This is an example sentence for IELTSWord291."
  },
  {
    "word": "IELTSWord292",
    "phonetic": "/ieltsˈwɜːrd292/",
    "meaning": "趋势 (词汇 292)",
    "root": "root-292 (词根释义)",
    "example": "This is an example sentence for IELTSWord292."
  },
  {
    "word": "IELTSWord293",
    "phonetic": "/ieltsˈwɜːrd293/",
    "meaning": "文化 (词汇 293)",
    "root": "root-293 (词根释义)",
    "example": "This is an example sentence for IELTSWord293."
  },
  {
    "word": "IELTSWord294",
    "phonetic": "/ieltsˈwɜːrd294/",
    "meaning": "教育 (词汇 294)",
    "root": "root-294 (词根释义)",
    "example": "This is an example sentence for IELTSWord294."
  },
  {
    "word": "IELTSWord295",
    "phonetic": "/ieltsˈwɜːrd295/",
    "meaning": "评估 (词汇 295)",
    "root": "root-295 (词根释义)",
    "example": "This is an example sentence for IELTSWord295."
  },
  {
    "word": "IELTSWord296",
    "phonetic": "/ieltsˈwɜːrd296/",
    "meaning": "评估 (词汇 296)",
    "root": "root-296 (词根释义)",
    "example": "This is an example sentence for IELTSWord296."
  },
  {
    "word": "IELTSWord297",
    "phonetic": "/ieltsˈwɜːrd297/",
    "meaning": "评估 (词汇 297)",
    "root": "root-297 (词根释义)",
    "example": "This is an example sentence for IELTSWord297."
  },
  {
    "word": "IELTSWord298",
    "phonetic": "/ieltsˈwɜːrd298/",
    "meaning": "全球化 (词汇 298)",
    "root": "root-298 (词根释义)",
    "example": "This is an example sentence for IELTSWord298."
  },
  {
    "word": "IELTSWord299",
    "phonetic": "/ieltsˈwɜːrd299/",
    "meaning": "全球化 (词汇 299)",
    "root": "root-299 (词根释义)",
    "example": "This is an example sentence for IELTSWord299."
  },
  {
    "word": "IELTSWord300",
    "phonetic": "/ieltsˈwɜːrd300/",
    "meaning": "全球化 (词汇 300)",
    "root": "root-300 (词根释义)",
    "example": "This is an example sentence for IELTSWord300."
  },
  {
    "word": "IELTSWord301",
    "phonetic": "/ieltsˈwɜːrd301/",
    "meaning": "综合 (词汇 301)",
    "root": "root-301 (词根释义)",
    "example": "This is an example sentence for IELTSWord301."
  },
  {
    "word": "IELTSWord302",
    "phonetic": "/ieltsˈwɜːrd302/",
    "meaning": "趋势 (词汇 302)",
    "root": "root-302 (词根释义)",
    "example": "This is an example sentence for IELTSWord302."
  },
  {
    "word": "IELTSWord303",
    "phonetic": "/ieltsˈwɜːrd303/",
    "meaning": "文化 (词汇 303)",
    "root": "root-303 (词根释义)",
    "example": "This is an example sentence for IELTSWord303."
  },
  {
    "word": "IELTSWord304",
    "phonetic": "/ieltsˈwɜːrd304/",
    "meaning": "现象 (词汇 304)",
    "root": "root-304 (词根释义)",
    "example": "This is an example sentence for IELTSWord304."
  },
  {
    "word": "IELTSWord305",
    "phonetic": "/ieltsˈwɜːrd305/",
    "meaning": "趋势 (词汇 305)",
    "root": "root-305 (词根释义)",
    "example": "This is an example sentence for IELTSWord305."
  },
  {
    "word": "IELTSWord306",
    "phonetic": "/ieltsˈwɜːrd306/",
    "meaning": "趋势 (词汇 306)",
    "root": "root-306 (词根释义)",
    "example": "This is an example sentence for IELTSWord306."
  },
  {
    "word": "IELTSWord307",
    "phonetic": "/ieltsˈwɜːrd307/",
    "meaning": "趋势 (词汇 307)",
    "root": "root-307 (词根释义)",
    "example": "This is an example sentence for IELTSWord307."
  },
  {
    "word": "IELTSWord308",
    "phonetic": "/ieltsˈwɜːrd308/",
    "meaning": "现象 (词汇 308)",
    "root": "root-308 (词根释义)",
    "example": "This is an example sentence for IELTSWord308."
  },
  {
    "word": "IELTSWord309",
    "phonetic": "/ieltsˈwɜːrd309/",
    "meaning": "教育 (词汇 309)",
    "root": "root-309 (词根释义)",
    "example": "This is an example sentence for IELTSWord309."
  },
  {
    "word": "IELTSWord310",
    "phonetic": "/ieltsˈwɜːrd310/",
    "meaning": "评估 (词汇 310)",
    "root": "root-310 (词根释义)",
    "example": "This is an example sentence for IELTSWord310."
  },
  {
    "word": "IELTSWord311",
    "phonetic": "/ieltsˈwɜːrd311/",
    "meaning": "文化 (词汇 311)",
    "root": "root-311 (词根释义)",
    "example": "This is an example sentence for IELTSWord311."
  },
  {
    "word": "IELTSWord312",
    "phonetic": "/ieltsˈwɜːrd312/",
    "meaning": "教育 (词汇 312)",
    "root": "root-312 (词根释义)",
    "example": "This is an example sentence for IELTSWord312."
  },
  {
    "word": "IELTSWord313",
    "phonetic": "/ieltsˈwɜːrd313/",
    "meaning": "评估 (词汇 313)",
    "root": "root-313 (词根释义)",
    "example": "This is an example sentence for IELTSWord313."
  },
  {
    "word": "IELTSWord314",
    "phonetic": "/ieltsˈwɜːrd314/",
    "meaning": "趋势 (词汇 314)",
    "root": "root-314 (词根释义)",
    "example": "This is an example sentence for IELTSWord314."
  },
  {
    "word": "IELTSWord315",
    "phonetic": "/ieltsˈwɜːrd315/",
    "meaning": "全球化 (词汇 315)",
    "root": "root-315 (词根释义)",
    "example": "This is an example sentence for IELTSWord315."
  },
  {
    "word": "IELTSWord316",
    "phonetic": "/ieltsˈwɜːrd316/",
    "meaning": "教育 (词汇 316)",
    "root": "root-316 (词根释义)",
    "example": "This is an example sentence for IELTSWord316."
  },
  {
    "word": "IELTSWord317",
    "phonetic": "/ieltsˈwɜːrd317/",
    "meaning": "教育 (词汇 317)",
    "root": "root-317 (词根释义)",
    "example": "This is an example sentence for IELTSWord317."
  },
  {
    "word": "IELTSWord318",
    "phonetic": "/ieltsˈwɜːrd318/",
    "meaning": "科技 (词汇 318)",
    "root": "root-318 (词根释义)",
    "example": "This is an example sentence for IELTSWord318."
  },
  {
    "word": "IELTSWord319",
    "phonetic": "/ieltsˈwɜːrd319/",
    "meaning": "教育 (词汇 319)",
    "root": "root-319 (词根释义)",
    "example": "This is an example sentence for IELTSWord319."
  },
  {
    "word": "IELTSWord320",
    "phonetic": "/ieltsˈwɜːrd320/",
    "meaning": "综合 (词汇 320)",
    "root": "root-320 (词根释义)",
    "example": "This is an example sentence for IELTSWord320."
  },
  {
    "word": "IELTSWord321",
    "phonetic": "/ieltsˈwɜːrd321/",
    "meaning": "教育 (词汇 321)",
    "root": "root-321 (词根释义)",
    "example": "This is an example sentence for IELTSWord321."
  },
  {
    "word": "IELTSWord322",
    "phonetic": "/ieltsˈwɜːrd322/",
    "meaning": "现象 (词汇 322)",
    "root": "root-322 (词根释义)",
    "example": "This is an example sentence for IELTSWord322."
  },
  {
    "word": "IELTSWord323",
    "phonetic": "/ieltsˈwɜːrd323/",
    "meaning": "趋势 (词汇 323)",
    "root": "root-323 (词根释义)",
    "example": "This is an example sentence for IELTSWord323."
  },
  {
    "word": "IELTSWord324",
    "phonetic": "/ieltsˈwɜːrd324/",
    "meaning": "文化 (词汇 324)",
    "root": "root-324 (词根释义)",
    "example": "This is an example sentence for IELTSWord324."
  },
  {
    "word": "IELTSWord325",
    "phonetic": "/ieltsˈwɜːrd325/",
    "meaning": "评估 (词汇 325)",
    "root": "root-325 (词根释义)",
    "example": "This is an example sentence for IELTSWord325."
  },
  {
    "word": "IELTSWord326",
    "phonetic": "/ieltsˈwɜːrd326/",
    "meaning": "环境 (词汇 326)",
    "root": "root-326 (词根释义)",
    "example": "This is an example sentence for IELTSWord326."
  },
  {
    "word": "IELTSWord327",
    "phonetic": "/ieltsˈwɜːrd327/",
    "meaning": "文化 (词汇 327)",
    "root": "root-327 (词根释义)",
    "example": "This is an example sentence for IELTSWord327."
  },
  {
    "word": "IELTSWord328",
    "phonetic": "/ieltsˈwɜːrd328/",
    "meaning": "文化 (词汇 328)",
    "root": "root-328 (词根释义)",
    "example": "This is an example sentence for IELTSWord328."
  },
  {
    "word": "IELTSWord329",
    "phonetic": "/ieltsˈwɜːrd329/",
    "meaning": "文化 (词汇 329)",
    "root": "root-329 (词根释义)",
    "example": "This is an example sentence for IELTSWord329."
  },
  {
    "word": "IELTSWord330",
    "phonetic": "/ieltsˈwɜːrd330/",
    "meaning": "趋势 (词汇 330)",
    "root": "root-330 (词根释义)",
    "example": "This is an example sentence for IELTSWord330."
  },
  {
    "word": "IELTSWord331",
    "phonetic": "/ieltsˈwɜːrd331/",
    "meaning": "环境 (词汇 331)",
    "root": "root-331 (词根释义)",
    "example": "This is an example sentence for IELTSWord331."
  },
  {
    "word": "IELTSWord332",
    "phonetic": "/ieltsˈwɜːrd332/",
    "meaning": "分析 (词汇 332)",
    "root": "root-332 (词根释义)",
    "example": "This is an example sentence for IELTSWord332."
  },
  {
    "word": "IELTSWord333",
    "phonetic": "/ieltsˈwɜːrd333/",
    "meaning": "全球化 (词汇 333)",
    "root": "root-333 (词根释义)",
    "example": "This is an example sentence for IELTSWord333."
  },
  {
    "word": "IELTSWord334",
    "phonetic": "/ieltsˈwɜːrd334/",
    "meaning": "环境 (词汇 334)",
    "root": "root-334 (词根释义)",
    "example": "This is an example sentence for IELTSWord334."
  },
  {
    "word": "IELTSWord335",
    "phonetic": "/ieltsˈwɜːrd335/",
    "meaning": "综合 (词汇 335)",
    "root": "root-335 (词根释义)",
    "example": "This is an example sentence for IELTSWord335."
  },
  {
    "word": "IELTSWord336",
    "phonetic": "/ieltsˈwɜːrd336/",
    "meaning": "文化 (词汇 336)",
    "root": "root-336 (词根释义)",
    "example": "This is an example sentence for IELTSWord336."
  },
  {
    "word": "IELTSWord337",
    "phonetic": "/ieltsˈwɜːrd337/",
    "meaning": "全球化 (词汇 337)",
    "root": "root-337 (词根释义)",
    "example": "This is an example sentence for IELTSWord337."
  },
  {
    "word": "IELTSWord338",
    "phonetic": "/ieltsˈwɜːrd338/",
    "meaning": "评估 (词汇 338)",
    "root": "root-338 (词根释义)",
    "example": "This is an example sentence for IELTSWord338."
  },
  {
    "word": "IELTSWord339",
    "phonetic": "/ieltsˈwɜːrd339/",
    "meaning": "环境 (词汇 339)",
    "root": "root-339 (词根释义)",
    "example": "This is an example sentence for IELTSWord339."
  },
  {
    "word": "IELTSWord340",
    "phonetic": "/ieltsˈwɜːrd340/",
    "meaning": "趋势 (词汇 340)",
    "root": "root-340 (词根释义)",
    "example": "This is an example sentence for IELTSWord340."
  },
  {
    "word": "IELTSWord341",
    "phonetic": "/ieltsˈwɜːrd341/",
    "meaning": "教育 (词汇 341)",
    "root": "root-341 (词根释义)",
    "example": "This is an example sentence for IELTSWord341."
  },
  {
    "word": "IELTSWord342",
    "phonetic": "/ieltsˈwɜːrd342/",
    "meaning": "教育 (词汇 342)",
    "root": "root-342 (词根释义)",
    "example": "This is an example sentence for IELTSWord342."
  },
  {
    "word": "IELTSWord343",
    "phonetic": "/ieltsˈwɜːrd343/",
    "meaning": "环境 (词汇 343)",
    "root": "root-343 (词根释义)",
    "example": "This is an example sentence for IELTSWord343."
  },
  {
    "word": "IELTSWord344",
    "phonetic": "/ieltsˈwɜːrd344/",
    "meaning": "环境 (词汇 344)",
    "root": "root-344 (词根释义)",
    "example": "This is an example sentence for IELTSWord344."
  },
  {
    "word": "IELTSWord345",
    "phonetic": "/ieltsˈwɜːrd345/",
    "meaning": "全球化 (词汇 345)",
    "root": "root-345 (词根释义)",
    "example": "This is an example sentence for IELTSWord345."
  },
  {
    "word": "IELTSWord346",
    "phonetic": "/ieltsˈwɜːrd346/",
    "meaning": "科技 (词汇 346)",
    "root": "root-346 (词根释义)",
    "example": "This is an example sentence for IELTSWord346."
  },
  {
    "word": "IELTSWord347",
    "phonetic": "/ieltsˈwɜːrd347/",
    "meaning": "教育 (词汇 347)",
    "root": "root-347 (词根释义)",
    "example": "This is an example sentence for IELTSWord347."
  },
  {
    "word": "IELTSWord348",
    "phonetic": "/ieltsˈwɜːrd348/",
    "meaning": "全球化 (词汇 348)",
    "root": "root-348 (词根释义)",
    "example": "This is an example sentence for IELTSWord348."
  },
  {
    "word": "IELTSWord349",
    "phonetic": "/ieltsˈwɜːrd349/",
    "meaning": "综合 (词汇 349)",
    "root": "root-349 (词根释义)",
    "example": "This is an example sentence for IELTSWord349."
  },
  {
    "word": "IELTSWord350",
    "phonetic": "/ieltsˈwɜːrd350/",
    "meaning": "科技 (词汇 350)",
    "root": "root-350 (词根释义)",
    "example": "This is an example sentence for IELTSWord350."
  },
  {
    "word": "IELTSWord351",
    "phonetic": "/ieltsˈwɜːrd351/",
    "meaning": "全球化 (词汇 351)",
    "root": "root-351 (词根释义)",
    "example": "This is an example sentence for IELTSWord351."
  },
  {
    "word": "IELTSWord352",
    "phonetic": "/ieltsˈwɜːrd352/",
    "meaning": "科技 (词汇 352)",
    "root": "root-352 (词根释义)",
    "example": "This is an example sentence for IELTSWord352."
  },
  {
    "word": "IELTSWord353",
    "phonetic": "/ieltsˈwɜːrd353/",
    "meaning": "评估 (词汇 353)",
    "root": "root-353 (词根释义)",
    "example": "This is an example sentence for IELTSWord353."
  },
  {
    "word": "IELTSWord354",
    "phonetic": "/ieltsˈwɜːrd354/",
    "meaning": "教育 (词汇 354)",
    "root": "root-354 (词根释义)",
    "example": "This is an example sentence for IELTSWord354."
  },
  {
    "word": "IELTSWord355",
    "phonetic": "/ieltsˈwɜːrd355/",
    "meaning": "评估 (词汇 355)",
    "root": "root-355 (词根释义)",
    "example": "This is an example sentence for IELTSWord355."
  },
  {
    "word": "IELTSWord356",
    "phonetic": "/ieltsˈwɜːrd356/",
    "meaning": "科技 (词汇 356)",
    "root": "root-356 (词根释义)",
    "example": "This is an example sentence for IELTSWord356."
  },
  {
    "word": "IELTSWord357",
    "phonetic": "/ieltsˈwɜːrd357/",
    "meaning": "科技 (词汇 357)",
    "root": "root-357 (词根释义)",
    "example": "This is an example sentence for IELTSWord357."
  },
  {
    "word": "IELTSWord358",
    "phonetic": "/ieltsˈwɜːrd358/",
    "meaning": "全球化 (词汇 358)",
    "root": "root-358 (词根释义)",
    "example": "This is an example sentence for IELTSWord358."
  },
  {
    "word": "IELTSWord359",
    "phonetic": "/ieltsˈwɜːrd359/",
    "meaning": "全球化 (词汇 359)",
    "root": "root-359 (词根释义)",
    "example": "This is an example sentence for IELTSWord359."
  },
  {
    "word": "IELTSWord360",
    "phonetic": "/ieltsˈwɜːrd360/",
    "meaning": "教育 (词汇 360)",
    "root": "root-360 (词根释义)",
    "example": "This is an example sentence for IELTSWord360."
  },
  {
    "word": "IELTSWord361",
    "phonetic": "/ieltsˈwɜːrd361/",
    "meaning": "环境 (词汇 361)",
    "root": "root-361 (词根释义)",
    "example": "This is an example sentence for IELTSWord361."
  },
  {
    "word": "IELTSWord362",
    "phonetic": "/ieltsˈwɜːrd362/",
    "meaning": "科技 (词汇 362)",
    "root": "root-362 (词根释义)",
    "example": "This is an example sentence for IELTSWord362."
  },
  {
    "word": "IELTSWord363",
    "phonetic": "/ieltsˈwɜːrd363/",
    "meaning": "文化 (词汇 363)",
    "root": "root-363 (词根释义)",
    "example": "This is an example sentence for IELTSWord363."
  },
  {
    "word": "IELTSWord364",
    "phonetic": "/ieltsˈwɜːrd364/",
    "meaning": "趋势 (词汇 364)",
    "root": "root-364 (词根释义)",
    "example": "This is an example sentence for IELTSWord364."
  },
  {
    "word": "IELTSWord365",
    "phonetic": "/ieltsˈwɜːrd365/",
    "meaning": "评估 (词汇 365)",
    "root": "root-365 (词根释义)",
    "example": "This is an example sentence for IELTSWord365."
  },
  {
    "word": "IELTSWord366",
    "phonetic": "/ieltsˈwɜːrd366/",
    "meaning": "全球化 (词汇 366)",
    "root": "root-366 (词根释义)",
    "example": "This is an example sentence for IELTSWord366."
  },
  {
    "word": "IELTSWord367",
    "phonetic": "/ieltsˈwɜːrd367/",
    "meaning": "环境 (词汇 367)",
    "root": "root-367 (词根释义)",
    "example": "This is an example sentence for IELTSWord367."
  },
  {
    "word": "IELTSWord368",
    "phonetic": "/ieltsˈwɜːrd368/",
    "meaning": "文化 (词汇 368)",
    "root": "root-368 (词根释义)",
    "example": "This is an example sentence for IELTSWord368."
  },
  {
    "word": "IELTSWord369",
    "phonetic": "/ieltsˈwɜːrd369/",
    "meaning": "环境 (词汇 369)",
    "root": "root-369 (词根释义)",
    "example": "This is an example sentence for IELTSWord369."
  },
  {
    "word": "IELTSWord370",
    "phonetic": "/ieltsˈwɜːrd370/",
    "meaning": "环境 (词汇 370)",
    "root": "root-370 (词根释义)",
    "example": "This is an example sentence for IELTSWord370."
  },
  {
    "word": "IELTSWord371",
    "phonetic": "/ieltsˈwɜːrd371/",
    "meaning": "文化 (词汇 371)",
    "root": "root-371 (词根释义)",
    "example": "This is an example sentence for IELTSWord371."
  },
  {
    "word": "IELTSWord372",
    "phonetic": "/ieltsˈwɜːrd372/",
    "meaning": "现象 (词汇 372)",
    "root": "root-372 (词根释义)",
    "example": "This is an example sentence for IELTSWord372."
  },
  {
    "word": "IELTSWord373",
    "phonetic": "/ieltsˈwɜːrd373/",
    "meaning": "趋势 (词汇 373)",
    "root": "root-373 (词根释义)",
    "example": "This is an example sentence for IELTSWord373."
  },
  {
    "word": "IELTSWord374",
    "phonetic": "/ieltsˈwɜːrd374/",
    "meaning": "综合 (词汇 374)",
    "root": "root-374 (词根释义)",
    "example": "This is an example sentence for IELTSWord374."
  },
  {
    "word": "IELTSWord375",
    "phonetic": "/ieltsˈwɜːrd375/",
    "meaning": "趋势 (词汇 375)",
    "root": "root-375 (词根释义)",
    "example": "This is an example sentence for IELTSWord375."
  },
  {
    "word": "IELTSWord376",
    "phonetic": "/ieltsˈwɜːrd376/",
    "meaning": "教育 (词汇 376)",
    "root": "root-376 (词根释义)",
    "example": "This is an example sentence for IELTSWord376."
  },
  {
    "word": "IELTSWord377",
    "phonetic": "/ieltsˈwɜːrd377/",
    "meaning": "综合 (词汇 377)",
    "root": "root-377 (词根释义)",
    "example": "This is an example sentence for IELTSWord377."
  },
  {
    "word": "IELTSWord378",
    "phonetic": "/ieltsˈwɜːrd378/",
    "meaning": "分析 (词汇 378)",
    "root": "root-378 (词根释义)",
    "example": "This is an example sentence for IELTSWord378."
  },
  {
    "word": "IELTSWord379",
    "phonetic": "/ieltsˈwɜːrd379/",
    "meaning": "环境 (词汇 379)",
    "root": "root-379 (词根释义)",
    "example": "This is an example sentence for IELTSWord379."
  },
  {
    "word": "IELTSWord380",
    "phonetic": "/ieltsˈwɜːrd380/",
    "meaning": "分析 (词汇 380)",
    "root": "root-380 (词根释义)",
    "example": "This is an example sentence for IELTSWord380."
  },
  {
    "word": "IELTSWord381",
    "phonetic": "/ieltsˈwɜːrd381/",
    "meaning": "分析 (词汇 381)",
    "root": "root-381 (词根释义)",
    "example": "This is an example sentence for IELTSWord381."
  },
  {
    "word": "IELTSWord382",
    "phonetic": "/ieltsˈwɜːrd382/",
    "meaning": "综合 (词汇 382)",
    "root": "root-382 (词根释义)",
    "example": "This is an example sentence for IELTSWord382."
  },
  {
    "word": "IELTSWord383",
    "phonetic": "/ieltsˈwɜːrd383/",
    "meaning": "文化 (词汇 383)",
    "root": "root-383 (词根释义)",
    "example": "This is an example sentence for IELTSWord383."
  },
  {
    "word": "IELTSWord384",
    "phonetic": "/ieltsˈwɜːrd384/",
    "meaning": "综合 (词汇 384)",
    "root": "root-384 (词根释义)",
    "example": "This is an example sentence for IELTSWord384."
  },
  {
    "word": "IELTSWord385",
    "phonetic": "/ieltsˈwɜːrd385/",
    "meaning": "分析 (词汇 385)",
    "root": "root-385 (词根释义)",
    "example": "This is an example sentence for IELTSWord385."
  },
  {
    "word": "IELTSWord386",
    "phonetic": "/ieltsˈwɜːrd386/",
    "meaning": "教育 (词汇 386)",
    "root": "root-386 (词根释义)",
    "example": "This is an example sentence for IELTSWord386."
  },
  {
    "word": "IELTSWord387",
    "phonetic": "/ieltsˈwɜːrd387/",
    "meaning": "评估 (词汇 387)",
    "root": "root-387 (词根释义)",
    "example": "This is an example sentence for IELTSWord387."
  },
  {
    "word": "IELTSWord388",
    "phonetic": "/ieltsˈwɜːrd388/",
    "meaning": "全球化 (词汇 388)",
    "root": "root-388 (词根释义)",
    "example": "This is an example sentence for IELTSWord388."
  },
  {
    "word": "IELTSWord389",
    "phonetic": "/ieltsˈwɜːrd389/",
    "meaning": "环境 (词汇 389)",
    "root": "root-389 (词根释义)",
    "example": "This is an example sentence for IELTSWord389."
  },
  {
    "word": "IELTSWord390",
    "phonetic": "/ieltsˈwɜːrd390/",
    "meaning": "教育 (词汇 390)",
    "root": "root-390 (词根释义)",
    "example": "This is an example sentence for IELTSWord390."
  },
  {
    "word": "IELTSWord391",
    "phonetic": "/ieltsˈwɜːrd391/",
    "meaning": "趋势 (词汇 391)",
    "root": "root-391 (词根释义)",
    "example": "This is an example sentence for IELTSWord391."
  },
  {
    "word": "IELTSWord392",
    "phonetic": "/ieltsˈwɜːrd392/",
    "meaning": "分析 (词汇 392)",
    "root": "root-392 (词根释义)",
    "example": "This is an example sentence for IELTSWord392."
  },
  {
    "word": "IELTSWord393",
    "phonetic": "/ieltsˈwɜːrd393/",
    "meaning": "科技 (词汇 393)",
    "root": "root-393 (词根释义)",
    "example": "This is an example sentence for IELTSWord393."
  },
  {
    "word": "IELTSWord394",
    "phonetic": "/ieltsˈwɜːrd394/",
    "meaning": "评估 (词汇 394)",
    "root": "root-394 (词根释义)",
    "example": "This is an example sentence for IELTSWord394."
  },
  {
    "word": "IELTSWord395",
    "phonetic": "/ieltsˈwɜːrd395/",
    "meaning": "教育 (词汇 395)",
    "root": "root-395 (词根释义)",
    "example": "This is an example sentence for IELTSWord395."
  },
  {
    "word": "IELTSWord396",
    "phonetic": "/ieltsˈwɜːrd396/",
    "meaning": "科技 (词汇 396)",
    "root": "root-396 (词根释义)",
    "example": "This is an example sentence for IELTSWord396."
  },
  {
    "word": "IELTSWord397",
    "phonetic": "/ieltsˈwɜːrd397/",
    "meaning": "现象 (词汇 397)",
    "root": "root-397 (词根释义)",
    "example": "This is an example sentence for IELTSWord397."
  },
  {
    "word": "IELTSWord398",
    "phonetic": "/ieltsˈwɜːrd398/",
    "meaning": "分析 (词汇 398)",
    "root": "root-398 (词根释义)",
    "example": "This is an example sentence for IELTSWord398."
  },
  {
    "word": "IELTSWord399",
    "phonetic": "/ieltsˈwɜːrd399/",
    "meaning": "趋势 (词汇 399)",
    "root": "root-399 (词根释义)",
    "example": "This is an example sentence for IELTSWord399."
  },
  {
    "word": "IELTSWord400",
    "phonetic": "/ieltsˈwɜːrd400/",
    "meaning": "全球化 (词汇 400)",
    "root": "root-400 (词根释义)",
    "example": "This is an example sentence for IELTSWord400."
  },
  {
    "word": "IELTSWord401",
    "phonetic": "/ieltsˈwɜːrd401/",
    "meaning": "全球化 (词汇 401)",
    "root": "root-401 (词根释义)",
    "example": "This is an example sentence for IELTSWord401."
  },
  {
    "word": "IELTSWord402",
    "phonetic": "/ieltsˈwɜːrd402/",
    "meaning": "科技 (词汇 402)",
    "root": "root-402 (词根释义)",
    "example": "This is an example sentence for IELTSWord402."
  },
  {
    "word": "IELTSWord403",
    "phonetic": "/ieltsˈwɜːrd403/",
    "meaning": "全球化 (词汇 403)",
    "root": "root-403 (词根释义)",
    "example": "This is an example sentence for IELTSWord403."
  },
  {
    "word": "IELTSWord404",
    "phonetic": "/ieltsˈwɜːrd404/",
    "meaning": "现象 (词汇 404)",
    "root": "root-404 (词根释义)",
    "example": "This is an example sentence for IELTSWord404."
  },
  {
    "word": "IELTSWord405",
    "phonetic": "/ieltsˈwɜːrd405/",
    "meaning": "文化 (词汇 405)",
    "root": "root-405 (词根释义)",
    "example": "This is an example sentence for IELTSWord405."
  },
  {
    "word": "IELTSWord406",
    "phonetic": "/ieltsˈwɜːrd406/",
    "meaning": "环境 (词汇 406)",
    "root": "root-406 (词根释义)",
    "example": "This is an example sentence for IELTSWord406."
  },
  {
    "word": "IELTSWord407",
    "phonetic": "/ieltsˈwɜːrd407/",
    "meaning": "评估 (词汇 407)",
    "root": "root-407 (词根释义)",
    "example": "This is an example sentence for IELTSWord407."
  },
  {
    "word": "IELTSWord408",
    "phonetic": "/ieltsˈwɜːrd408/",
    "meaning": "文化 (词汇 408)",
    "root": "root-408 (词根释义)",
    "example": "This is an example sentence for IELTSWord408."
  },
  {
    "word": "IELTSWord409",
    "phonetic": "/ieltsˈwɜːrd409/",
    "meaning": "现象 (词汇 409)",
    "root": "root-409 (词根释义)",
    "example": "This is an example sentence for IELTSWord409."
  },
  {
    "word": "IELTSWord410",
    "phonetic": "/ieltsˈwɜːrd410/",
    "meaning": "分析 (词汇 410)",
    "root": "root-410 (词根释义)",
    "example": "This is an example sentence for IELTSWord410."
  },
  {
    "word": "IELTSWord411",
    "phonetic": "/ieltsˈwɜːrd411/",
    "meaning": "文化 (词汇 411)",
    "root": "root-411 (词根释义)",
    "example": "This is an example sentence for IELTSWord411."
  },
  {
    "word": "IELTSWord412",
    "phonetic": "/ieltsˈwɜːrd412/",
    "meaning": "现象 (词汇 412)",
    "root": "root-412 (词根释义)",
    "example": "This is an example sentence for IELTSWord412."
  },
  {
    "word": "IELTSWord413",
    "phonetic": "/ieltsˈwɜːrd413/",
    "meaning": "评估 (词汇 413)",
    "root": "root-413 (词根释义)",
    "example": "This is an example sentence for IELTSWord413."
  },
  {
    "word": "IELTSWord414",
    "phonetic": "/ieltsˈwɜːrd414/",
    "meaning": "科技 (词汇 414)",
    "root": "root-414 (词根释义)",
    "example": "This is an example sentence for IELTSWord414."
  },
  {
    "word": "IELTSWord415",
    "phonetic": "/ieltsˈwɜːrd415/",
    "meaning": "环境 (词汇 415)",
    "root": "root-415 (词根释义)",
    "example": "This is an example sentence for IELTSWord415."
  },
  {
    "word": "IELTSWord416",
    "phonetic": "/ieltsˈwɜːrd416/",
    "meaning": "文化 (词汇 416)",
    "root": "root-416 (词根释义)",
    "example": "This is an example sentence for IELTSWord416."
  },
  {
    "word": "IELTSWord417",
    "phonetic": "/ieltsˈwɜːrd417/",
    "meaning": "评估 (词汇 417)",
    "root": "root-417 (词根释义)",
    "example": "This is an example sentence for IELTSWord417."
  },
  {
    "word": "IELTSWord418",
    "phonetic": "/ieltsˈwɜːrd418/",
    "meaning": "科技 (词汇 418)",
    "root": "root-418 (词根释义)",
    "example": "This is an example sentence for IELTSWord418."
  },
  {
    "word": "IELTSWord419",
    "phonetic": "/ieltsˈwɜːrd419/",
    "meaning": "科技 (词汇 419)",
    "root": "root-419 (词根释义)",
    "example": "This is an example sentence for IELTSWord419."
  },
  {
    "word": "IELTSWord420",
    "phonetic": "/ieltsˈwɜːrd420/",
    "meaning": "教育 (词汇 420)",
    "root": "root-420 (词根释义)",
    "example": "This is an example sentence for IELTSWord420."
  },
  {
    "word": "IELTSWord421",
    "phonetic": "/ieltsˈwɜːrd421/",
    "meaning": "科技 (词汇 421)",
    "root": "root-421 (词根释义)",
    "example": "This is an example sentence for IELTSWord421."
  },
  {
    "word": "IELTSWord422",
    "phonetic": "/ieltsˈwɜːrd422/",
    "meaning": "趋势 (词汇 422)",
    "root": "root-422 (词根释义)",
    "example": "This is an example sentence for IELTSWord422."
  },
  {
    "word": "IELTSWord423",
    "phonetic": "/ieltsˈwɜːrd423/",
    "meaning": "文化 (词汇 423)",
    "root": "root-423 (词根释义)",
    "example": "This is an example sentence for IELTSWord423."
  },
  {
    "word": "IELTSWord424",
    "phonetic": "/ieltsˈwɜːrd424/",
    "meaning": "全球化 (词汇 424)",
    "root": "root-424 (词根释义)",
    "example": "This is an example sentence for IELTSWord424."
  },
  {
    "word": "IELTSWord425",
    "phonetic": "/ieltsˈwɜːrd425/",
    "meaning": "现象 (词汇 425)",
    "root": "root-425 (词根释义)",
    "example": "This is an example sentence for IELTSWord425."
  },
  {
    "word": "IELTSWord426",
    "phonetic": "/ieltsˈwɜːrd426/",
    "meaning": "文化 (词汇 426)",
    "root": "root-426 (词根释义)",
    "example": "This is an example sentence for IELTSWord426."
  },
  {
    "word": "IELTSWord427",
    "phonetic": "/ieltsˈwɜːrd427/",
    "meaning": "全球化 (词汇 427)",
    "root": "root-427 (词根释义)",
    "example": "This is an example sentence for IELTSWord427."
  },
  {
    "word": "IELTSWord428",
    "phonetic": "/ieltsˈwɜːrd428/",
    "meaning": "综合 (词汇 428)",
    "root": "root-428 (词根释义)",
    "example": "This is an example sentence for IELTSWord428."
  },
  {
    "word": "IELTSWord429",
    "phonetic": "/ieltsˈwɜːrd429/",
    "meaning": "分析 (词汇 429)",
    "root": "root-429 (词根释义)",
    "example": "This is an example sentence for IELTSWord429."
  },
  {
    "word": "IELTSWord430",
    "phonetic": "/ieltsˈwɜːrd430/",
    "meaning": "文化 (词汇 430)",
    "root": "root-430 (词根释义)",
    "example": "This is an example sentence for IELTSWord430."
  },
  {
    "word": "IELTSWord431",
    "phonetic": "/ieltsˈwɜːrd431/",
    "meaning": "教育 (词汇 431)",
    "root": "root-431 (词根释义)",
    "example": "This is an example sentence for IELTSWord431."
  },
  {
    "word": "IELTSWord432",
    "phonetic": "/ieltsˈwɜːrd432/",
    "meaning": "综合 (词汇 432)",
    "root": "root-432 (词根释义)",
    "example": "This is an example sentence for IELTSWord432."
  },
  {
    "word": "IELTSWord433",
    "phonetic": "/ieltsˈwɜːrd433/",
    "meaning": "文化 (词汇 433)",
    "root": "root-433 (词根释义)",
    "example": "This is an example sentence for IELTSWord433."
  },
  {
    "word": "IELTSWord434",
    "phonetic": "/ieltsˈwɜːrd434/",
    "meaning": "全球化 (词汇 434)",
    "root": "root-434 (词根释义)",
    "example": "This is an example sentence for IELTSWord434."
  },
  {
    "word": "IELTSWord435",
    "phonetic": "/ieltsˈwɜːrd435/",
    "meaning": "趋势 (词汇 435)",
    "root": "root-435 (词根释义)",
    "example": "This is an example sentence for IELTSWord435."
  },
  {
    "word": "IELTSWord436",
    "phonetic": "/ieltsˈwɜːrd436/",
    "meaning": "教育 (词汇 436)",
    "root": "root-436 (词根释义)",
    "example": "This is an example sentence for IELTSWord436."
  },
  {
    "word": "IELTSWord437",
    "phonetic": "/ieltsˈwɜːrd437/",
    "meaning": "科技 (词汇 437)",
    "root": "root-437 (词根释义)",
    "example": "This is an example sentence for IELTSWord437."
  },
  {
    "word": "IELTSWord438",
    "phonetic": "/ieltsˈwɜːrd438/",
    "meaning": "分析 (词汇 438)",
    "root": "root-438 (词根释义)",
    "example": "This is an example sentence for IELTSWord438."
  },
  {
    "word": "IELTSWord439",
    "phonetic": "/ieltsˈwɜːrd439/",
    "meaning": "评估 (词汇 439)",
    "root": "root-439 (词根释义)",
    "example": "This is an example sentence for IELTSWord439."
  },
  {
    "word": "IELTSWord440",
    "phonetic": "/ieltsˈwɜːrd440/",
    "meaning": "评估 (词汇 440)",
    "root": "root-440 (词根释义)",
    "example": "This is an example sentence for IELTSWord440."
  },
  {
    "word": "IELTSWord441",
    "phonetic": "/ieltsˈwɜːrd441/",
    "meaning": "综合 (词汇 441)",
    "root": "root-441 (词根释义)",
    "example": "This is an example sentence for IELTSWord441."
  },
  {
    "word": "IELTSWord442",
    "phonetic": "/ieltsˈwɜːrd442/",
    "meaning": "科技 (词汇 442)",
    "root": "root-442 (词根释义)",
    "example": "This is an example sentence for IELTSWord442."
  },
  {
    "word": "IELTSWord443",
    "phonetic": "/ieltsˈwɜːrd443/",
    "meaning": "全球化 (词汇 443)",
    "root": "root-443 (词根释义)",
    "example": "This is an example sentence for IELTSWord443."
  },
  {
    "word": "IELTSWord444",
    "phonetic": "/ieltsˈwɜːrd444/",
    "meaning": "综合 (词汇 444)",
    "root": "root-444 (词根释义)",
    "example": "This is an example sentence for IELTSWord444."
  },
  {
    "word": "IELTSWord445",
    "phonetic": "/ieltsˈwɜːrd445/",
    "meaning": "环境 (词汇 445)",
    "root": "root-445 (词根释义)",
    "example": "This is an example sentence for IELTSWord445."
  },
  {
    "word": "IELTSWord446",
    "phonetic": "/ieltsˈwɜːrd446/",
    "meaning": "综合 (词汇 446)",
    "root": "root-446 (词根释义)",
    "example": "This is an example sentence for IELTSWord446."
  },
  {
    "word": "IELTSWord447",
    "phonetic": "/ieltsˈwɜːrd447/",
    "meaning": "现象 (词汇 447)",
    "root": "root-447 (词根释义)",
    "example": "This is an example sentence for IELTSWord447."
  },
  {
    "word": "IELTSWord448",
    "phonetic": "/ieltsˈwɜːrd448/",
    "meaning": "全球化 (词汇 448)",
    "root": "root-448 (词根释义)",
    "example": "This is an example sentence for IELTSWord448."
  },
  {
    "word": "IELTSWord449",
    "phonetic": "/ieltsˈwɜːrd449/",
    "meaning": "综合 (词汇 449)",
    "root": "root-449 (词根释义)",
    "example": "This is an example sentence for IELTSWord449."
  },
  {
    "word": "IELTSWord450",
    "phonetic": "/ieltsˈwɜːrd450/",
    "meaning": "教育 (词汇 450)",
    "root": "root-450 (词根释义)",
    "example": "This is an example sentence for IELTSWord450."
  },
  {
    "word": "IELTSWord451",
    "phonetic": "/ieltsˈwɜːrd451/",
    "meaning": "分析 (词汇 451)",
    "root": "root-451 (词根释义)",
    "example": "This is an example sentence for IELTSWord451."
  },
  {
    "word": "IELTSWord452",
    "phonetic": "/ieltsˈwɜːrd452/",
    "meaning": "环境 (词汇 452)",
    "root": "root-452 (词根释义)",
    "example": "This is an example sentence for IELTSWord452."
  },
  {
    "word": "IELTSWord453",
    "phonetic": "/ieltsˈwɜːrd453/",
    "meaning": "教育 (词汇 453)",
    "root": "root-453 (词根释义)",
    "example": "This is an example sentence for IELTSWord453."
  },
  {
    "word": "IELTSWord454",
    "phonetic": "/ieltsˈwɜːrd454/",
    "meaning": "环境 (词汇 454)",
    "root": "root-454 (词根释义)",
    "example": "This is an example sentence for IELTSWord454."
  },
  {
    "word": "IELTSWord455",
    "phonetic": "/ieltsˈwɜːrd455/",
    "meaning": "现象 (词汇 455)",
    "root": "root-455 (词根释义)",
    "example": "This is an example sentence for IELTSWord455."
  },
  {
    "word": "IELTSWord456",
    "phonetic": "/ieltsˈwɜːrd456/",
    "meaning": "教育 (词汇 456)",
    "root": "root-456 (词根释义)",
    "example": "This is an example sentence for IELTSWord456."
  },
  {
    "word": "IELTSWord457",
    "phonetic": "/ieltsˈwɜːrd457/",
    "meaning": "评估 (词汇 457)",
    "root": "root-457 (词根释义)",
    "example": "This is an example sentence for IELTSWord457."
  },
  {
    "word": "IELTSWord458",
    "phonetic": "/ieltsˈwɜːrd458/",
    "meaning": "综合 (词汇 458)",
    "root": "root-458 (词根释义)",
    "example": "This is an example sentence for IELTSWord458."
  },
  {
    "word": "IELTSWord459",
    "phonetic": "/ieltsˈwɜːrd459/",
    "meaning": "科技 (词汇 459)",
    "root": "root-459 (词根释义)",
    "example": "This is an example sentence for IELTSWord459."
  },
  {
    "word": "IELTSWord460",
    "phonetic": "/ieltsˈwɜːrd460/",
    "meaning": "评估 (词汇 460)",
    "root": "root-460 (词根释义)",
    "example": "This is an example sentence for IELTSWord460."
  },
  {
    "word": "IELTSWord461",
    "phonetic": "/ieltsˈwɜːrd461/",
    "meaning": "全球化 (词汇 461)",
    "root": "root-461 (词根释义)",
    "example": "This is an example sentence for IELTSWord461."
  },
  {
    "word": "IELTSWord462",
    "phonetic": "/ieltsˈwɜːrd462/",
    "meaning": "趋势 (词汇 462)",
    "root": "root-462 (词根释义)",
    "example": "This is an example sentence for IELTSWord462."
  },
  {
    "word": "IELTSWord463",
    "phonetic": "/ieltsˈwɜːrd463/",
    "meaning": "全球化 (词汇 463)",
    "root": "root-463 (词根释义)",
    "example": "This is an example sentence for IELTSWord463."
  },
  {
    "word": "IELTSWord464",
    "phonetic": "/ieltsˈwɜːrd464/",
    "meaning": "环境 (词汇 464)",
    "root": "root-464 (词根释义)",
    "example": "This is an example sentence for IELTSWord464."
  },
  {
    "word": "IELTSWord465",
    "phonetic": "/ieltsˈwɜːrd465/",
    "meaning": "趋势 (词汇 465)",
    "root": "root-465 (词根释义)",
    "example": "This is an example sentence for IELTSWord465."
  },
  {
    "word": "IELTSWord466",
    "phonetic": "/ieltsˈwɜːrd466/",
    "meaning": "趋势 (词汇 466)",
    "root": "root-466 (词根释义)",
    "example": "This is an example sentence for IELTSWord466."
  },
  {
    "word": "IELTSWord467",
    "phonetic": "/ieltsˈwɜːrd467/",
    "meaning": "全球化 (词汇 467)",
    "root": "root-467 (词根释义)",
    "example": "This is an example sentence for IELTSWord467."
  },
  {
    "word": "IELTSWord468",
    "phonetic": "/ieltsˈwɜːrd468/",
    "meaning": "综合 (词汇 468)",
    "root": "root-468 (词根释义)",
    "example": "This is an example sentence for IELTSWord468."
  },
  {
    "word": "IELTSWord469",
    "phonetic": "/ieltsˈwɜːrd469/",
    "meaning": "趋势 (词汇 469)",
    "root": "root-469 (词根释义)",
    "example": "This is an example sentence for IELTSWord469."
  },
  {
    "word": "IELTSWord470",
    "phonetic": "/ieltsˈwɜːrd470/",
    "meaning": "科技 (词汇 470)",
    "root": "root-470 (词根释义)",
    "example": "This is an example sentence for IELTSWord470."
  },
  {
    "word": "IELTSWord471",
    "phonetic": "/ieltsˈwɜːrd471/",
    "meaning": "分析 (词汇 471)",
    "root": "root-471 (词根释义)",
    "example": "This is an example sentence for IELTSWord471."
  },
  {
    "word": "IELTSWord472",
    "phonetic": "/ieltsˈwɜːrd472/",
    "meaning": "趋势 (词汇 472)",
    "root": "root-472 (词根释义)",
    "example": "This is an example sentence for IELTSWord472."
  },
  {
    "word": "IELTSWord473",
    "phonetic": "/ieltsˈwɜːrd473/",
    "meaning": "综合 (词汇 473)",
    "root": "root-473 (词根释义)",
    "example": "This is an example sentence for IELTSWord473."
  },
  {
    "word": "IELTSWord474",
    "phonetic": "/ieltsˈwɜːrd474/",
    "meaning": "文化 (词汇 474)",
    "root": "root-474 (词根释义)",
    "example": "This is an example sentence for IELTSWord474."
  },
  {
    "word": "IELTSWord475",
    "phonetic": "/ieltsˈwɜːrd475/",
    "meaning": "综合 (词汇 475)",
    "root": "root-475 (词根释义)",
    "example": "This is an example sentence for IELTSWord475."
  },
  {
    "word": "IELTSWord476",
    "phonetic": "/ieltsˈwɜːrd476/",
    "meaning": "教育 (词汇 476)",
    "root": "root-476 (词根释义)",
    "example": "This is an example sentence for IELTSWord476."
  },
  {
    "word": "IELTSWord477",
    "phonetic": "/ieltsˈwɜːrd477/",
    "meaning": "文化 (词汇 477)",
    "root": "root-477 (词根释义)",
    "example": "This is an example sentence for IELTSWord477."
  },
  {
    "word": "IELTSWord478",
    "phonetic": "/ieltsˈwɜːrd478/",
    "meaning": "综合 (词汇 478)",
    "root": "root-478 (词根释义)",
    "example": "This is an example sentence for IELTSWord478."
  },
  {
    "word": "IELTSWord479",
    "phonetic": "/ieltsˈwɜːrd479/",
    "meaning": "环境 (词汇 479)",
    "root": "root-479 (词根释义)",
    "example": "This is an example sentence for IELTSWord479."
  },
  {
    "word": "IELTSWord480",
    "phonetic": "/ieltsˈwɜːrd480/",
    "meaning": "全球化 (词汇 480)",
    "root": "root-480 (词根释义)",
    "example": "This is an example sentence for IELTSWord480."
  },
  {
    "word": "IELTSWord481",
    "phonetic": "/ieltsˈwɜːrd481/",
    "meaning": "全球化 (词汇 481)",
    "root": "root-481 (词根释义)",
    "example": "This is an example sentence for IELTSWord481."
  },
  {
    "word": "IELTSWord482",
    "phonetic": "/ieltsˈwɜːrd482/",
    "meaning": "分析 (词汇 482)",
    "root": "root-482 (词根释义)",
    "example": "This is an example sentence for IELTSWord482."
  },
  {
    "word": "IELTSWord483",
    "phonetic": "/ieltsˈwɜːrd483/",
    "meaning": "教育 (词汇 483)",
    "root": "root-483 (词根释义)",
    "example": "This is an example sentence for IELTSWord483."
  },
  {
    "word": "IELTSWord484",
    "phonetic": "/ieltsˈwɜːrd484/",
    "meaning": "教育 (词汇 484)",
    "root": "root-484 (词根释义)",
    "example": "This is an example sentence for IELTSWord484."
  },
  {
    "word": "IELTSWord485",
    "phonetic": "/ieltsˈwɜːrd485/",
    "meaning": "文化 (词汇 485)",
    "root": "root-485 (词根释义)",
    "example": "This is an example sentence for IELTSWord485."
  },
  {
    "word": "IELTSWord486",
    "phonetic": "/ieltsˈwɜːrd486/",
    "meaning": "现象 (词汇 486)",
    "root": "root-486 (词根释义)",
    "example": "This is an example sentence for IELTSWord486."
  },
  {
    "word": "IELTSWord487",
    "phonetic": "/ieltsˈwɜːrd487/",
    "meaning": "综合 (词汇 487)",
    "root": "root-487 (词根释义)",
    "example": "This is an example sentence for IELTSWord487."
  },
  {
    "word": "IELTSWord488",
    "phonetic": "/ieltsˈwɜːrd488/",
    "meaning": "教育 (词汇 488)",
    "root": "root-488 (词根释义)",
    "example": "This is an example sentence for IELTSWord488."
  },
  {
    "word": "IELTSWord489",
    "phonetic": "/ieltsˈwɜːrd489/",
    "meaning": "教育 (词汇 489)",
    "root": "root-489 (词根释义)",
    "example": "This is an example sentence for IELTSWord489."
  },
  {
    "word": "IELTSWord490",
    "phonetic": "/ieltsˈwɜːrd490/",
    "meaning": "科技 (词汇 490)",
    "root": "root-490 (词根释义)",
    "example": "This is an example sentence for IELTSWord490."
  },
  {
    "word": "IELTSWord491",
    "phonetic": "/ieltsˈwɜːrd491/",
    "meaning": "文化 (词汇 491)",
    "root": "root-491 (词根释义)",
    "example": "This is an example sentence for IELTSWord491."
  },
  {
    "word": "IELTSWord492",
    "phonetic": "/ieltsˈwɜːrd492/",
    "meaning": "分析 (词汇 492)",
    "root": "root-492 (词根释义)",
    "example": "This is an example sentence for IELTSWord492."
  },
  {
    "word": "IELTSWord493",
    "phonetic": "/ieltsˈwɜːrd493/",
    "meaning": "环境 (词汇 493)",
    "root": "root-493 (词根释义)",
    "example": "This is an example sentence for IELTSWord493."
  },
  {
    "word": "IELTSWord494",
    "phonetic": "/ieltsˈwɜːrd494/",
    "meaning": "教育 (词汇 494)",
    "root": "root-494 (词根释义)",
    "example": "This is an example sentence for IELTSWord494."
  },
  {
    "word": "IELTSWord495",
    "phonetic": "/ieltsˈwɜːrd495/",
    "meaning": "评估 (词汇 495)",
    "root": "root-495 (词根释义)",
    "example": "This is an example sentence for IELTSWord495."
  },
  {
    "word": "IELTSWord496",
    "phonetic": "/ieltsˈwɜːrd496/",
    "meaning": "评估 (词汇 496)",
    "root": "root-496 (词根释义)",
    "example": "This is an example sentence for IELTSWord496."
  },
  {
    "word": "IELTSWord497",
    "phonetic": "/ieltsˈwɜːrd497/",
    "meaning": "综合 (词汇 497)",
    "root": "root-497 (词根释义)",
    "example": "This is an example sentence for IELTSWord497."
  },
  {
    "word": "IELTSWord498",
    "phonetic": "/ieltsˈwɜːrd498/",
    "meaning": "全球化 (词汇 498)",
    "root": "root-498 (词根释义)",
    "example": "This is an example sentence for IELTSWord498."
  },
  {
    "word": "IELTSWord499",
    "phonetic": "/ieltsˈwɜːrd499/",
    "meaning": "全球化 (词汇 499)",
    "root": "root-499 (词根释义)",
    "example": "This is an example sentence for IELTSWord499."
  },
  {
    "word": "IELTSWord500",
    "phonetic": "/ieltsˈwɜːrd500/",
    "meaning": "综合 (词汇 500)",
    "root": "root-500 (词根释义)",
    "example": "This is an example sentence for IELTSWord500."
  },
  {
    "word": "IELTSWord501",
    "phonetic": "/ieltsˈwɜːrd501/",
    "meaning": "教育 (词汇 501)",
    "root": "root-501 (词根释义)",
    "example": "This is an example sentence for IELTSWord501."
  },
  {
    "word": "IELTSWord502",
    "phonetic": "/ieltsˈwɜːrd502/",
    "meaning": "文化 (词汇 502)",
    "root": "root-502 (词根释义)",
    "example": "This is an example sentence for IELTSWord502."
  },
  {
    "word": "IELTSWord503",
    "phonetic": "/ieltsˈwɜːrd503/",
    "meaning": "趋势 (词汇 503)",
    "root": "root-503 (词根释义)",
    "example": "This is an example sentence for IELTSWord503."
  },
  {
    "word": "IELTSWord504",
    "phonetic": "/ieltsˈwɜːrd504/",
    "meaning": "全球化 (词汇 504)",
    "root": "root-504 (词根释义)",
    "example": "This is an example sentence for IELTSWord504."
  },
  {
    "word": "IELTSWord505",
    "phonetic": "/ieltsˈwɜːrd505/",
    "meaning": "全球化 (词汇 505)",
    "root": "root-505 (词根释义)",
    "example": "This is an example sentence for IELTSWord505."
  },
  {
    "word": "IELTSWord506",
    "phonetic": "/ieltsˈwɜːrd506/",
    "meaning": "文化 (词汇 506)",
    "root": "root-506 (词根释义)",
    "example": "This is an example sentence for IELTSWord506."
  },
  {
    "word": "IELTSWord507",
    "phonetic": "/ieltsˈwɜːrd507/",
    "meaning": "分析 (词汇 507)",
    "root": "root-507 (词根释义)",
    "example": "This is an example sentence for IELTSWord507."
  },
  {
    "word": "IELTSWord508",
    "phonetic": "/ieltsˈwɜːrd508/",
    "meaning": "现象 (词汇 508)",
    "root": "root-508 (词根释义)",
    "example": "This is an example sentence for IELTSWord508."
  },
  {
    "word": "IELTSWord509",
    "phonetic": "/ieltsˈwɜːrd509/",
    "meaning": "综合 (词汇 509)",
    "root": "root-509 (词根释义)",
    "example": "This is an example sentence for IELTSWord509."
  },
  {
    "word": "IELTSWord510",
    "phonetic": "/ieltsˈwɜːrd510/",
    "meaning": "教育 (词汇 510)",
    "root": "root-510 (词根释义)",
    "example": "This is an example sentence for IELTSWord510."
  },
  {
    "word": "IELTSWord511",
    "phonetic": "/ieltsˈwɜːrd511/",
    "meaning": "文化 (词汇 511)",
    "root": "root-511 (词根释义)",
    "example": "This is an example sentence for IELTSWord511."
  },
  {
    "word": "IELTSWord512",
    "phonetic": "/ieltsˈwɜːrd512/",
    "meaning": "文化 (词汇 512)",
    "root": "root-512 (词根释义)",
    "example": "This is an example sentence for IELTSWord512."
  },
  {
    "word": "IELTSWord513",
    "phonetic": "/ieltsˈwɜːrd513/",
    "meaning": "环境 (词汇 513)",
    "root": "root-513 (词根释义)",
    "example": "This is an example sentence for IELTSWord513."
  },
  {
    "word": "IELTSWord514",
    "phonetic": "/ieltsˈwɜːrd514/",
    "meaning": "环境 (词汇 514)",
    "root": "root-514 (词根释义)",
    "example": "This is an example sentence for IELTSWord514."
  },
  {
    "word": "IELTSWord515",
    "phonetic": "/ieltsˈwɜːrd515/",
    "meaning": "科技 (词汇 515)",
    "root": "root-515 (词根释义)",
    "example": "This is an example sentence for IELTSWord515."
  },
  {
    "word": "IELTSWord516",
    "phonetic": "/ieltsˈwɜːrd516/",
    "meaning": "现象 (词汇 516)",
    "root": "root-516 (词根释义)",
    "example": "This is an example sentence for IELTSWord516."
  },
  {
    "word": "IELTSWord517",
    "phonetic": "/ieltsˈwɜːrd517/",
    "meaning": "评估 (词汇 517)",
    "root": "root-517 (词根释义)",
    "example": "This is an example sentence for IELTSWord517."
  },
  {
    "word": "IELTSWord518",
    "phonetic": "/ieltsˈwɜːrd518/",
    "meaning": "趋势 (词汇 518)",
    "root": "root-518 (词根释义)",
    "example": "This is an example sentence for IELTSWord518."
  },
  {
    "word": "IELTSWord519",
    "phonetic": "/ieltsˈwɜːrd519/",
    "meaning": "文化 (词汇 519)",
    "root": "root-519 (词根释义)",
    "example": "This is an example sentence for IELTSWord519."
  },
  {
    "word": "IELTSWord520",
    "phonetic": "/ieltsˈwɜːrd520/",
    "meaning": "评估 (词汇 520)",
    "root": "root-520 (词根释义)",
    "example": "This is an example sentence for IELTSWord520."
  },
  {
    "word": "IELTSWord521",
    "phonetic": "/ieltsˈwɜːrd521/",
    "meaning": "教育 (词汇 521)",
    "root": "root-521 (词根释义)",
    "example": "This is an example sentence for IELTSWord521."
  },
  {
    "word": "IELTSWord522",
    "phonetic": "/ieltsˈwɜːrd522/",
    "meaning": "文化 (词汇 522)",
    "root": "root-522 (词根释义)",
    "example": "This is an example sentence for IELTSWord522."
  },
  {
    "word": "IELTSWord523",
    "phonetic": "/ieltsˈwɜːrd523/",
    "meaning": "环境 (词汇 523)",
    "root": "root-523 (词根释义)",
    "example": "This is an example sentence for IELTSWord523."
  },
  {
    "word": "IELTSWord524",
    "phonetic": "/ieltsˈwɜːrd524/",
    "meaning": "教育 (词汇 524)",
    "root": "root-524 (词根释义)",
    "example": "This is an example sentence for IELTSWord524."
  },
  {
    "word": "IELTSWord525",
    "phonetic": "/ieltsˈwɜːrd525/",
    "meaning": "教育 (词汇 525)",
    "root": "root-525 (词根释义)",
    "example": "This is an example sentence for IELTSWord525."
  },
  {
    "word": "IELTSWord526",
    "phonetic": "/ieltsˈwɜːrd526/",
    "meaning": "分析 (词汇 526)",
    "root": "root-526 (词根释义)",
    "example": "This is an example sentence for IELTSWord526."
  },
  {
    "word": "IELTSWord527",
    "phonetic": "/ieltsˈwɜːrd527/",
    "meaning": "科技 (词汇 527)",
    "root": "root-527 (词根释义)",
    "example": "This is an example sentence for IELTSWord527."
  },
  {
    "word": "IELTSWord528",
    "phonetic": "/ieltsˈwɜːrd528/",
    "meaning": "评估 (词汇 528)",
    "root": "root-528 (词根释义)",
    "example": "This is an example sentence for IELTSWord528."
  },
  {
    "word": "IELTSWord529",
    "phonetic": "/ieltsˈwɜːrd529/",
    "meaning": "综合 (词汇 529)",
    "root": "root-529 (词根释义)",
    "example": "This is an example sentence for IELTSWord529."
  },
  {
    "word": "IELTSWord530",
    "phonetic": "/ieltsˈwɜːrd530/",
    "meaning": "评估 (词汇 530)",
    "root": "root-530 (词根释义)",
    "example": "This is an example sentence for IELTSWord530."
  },
  {
    "word": "IELTSWord531",
    "phonetic": "/ieltsˈwɜːrd531/",
    "meaning": "趋势 (词汇 531)",
    "root": "root-531 (词根释义)",
    "example": "This is an example sentence for IELTSWord531."
  },
  {
    "word": "IELTSWord532",
    "phonetic": "/ieltsˈwɜːrd532/",
    "meaning": "环境 (词汇 532)",
    "root": "root-532 (词根释义)",
    "example": "This is an example sentence for IELTSWord532."
  },
  {
    "word": "IELTSWord533",
    "phonetic": "/ieltsˈwɜːrd533/",
    "meaning": "分析 (词汇 533)",
    "root": "root-533 (词根释义)",
    "example": "This is an example sentence for IELTSWord533."
  },
  {
    "word": "IELTSWord534",
    "phonetic": "/ieltsˈwɜːrd534/",
    "meaning": "文化 (词汇 534)",
    "root": "root-534 (词根释义)",
    "example": "This is an example sentence for IELTSWord534."
  },
  {
    "word": "IELTSWord535",
    "phonetic": "/ieltsˈwɜːrd535/",
    "meaning": "教育 (词汇 535)",
    "root": "root-535 (词根释义)",
    "example": "This is an example sentence for IELTSWord535."
  },
  {
    "word": "IELTSWord536",
    "phonetic": "/ieltsˈwɜːrd536/",
    "meaning": "全球化 (词汇 536)",
    "root": "root-536 (词根释义)",
    "example": "This is an example sentence for IELTSWord536."
  },
  {
    "word": "IELTSWord537",
    "phonetic": "/ieltsˈwɜːrd537/",
    "meaning": "现象 (词汇 537)",
    "root": "root-537 (词根释义)",
    "example": "This is an example sentence for IELTSWord537."
  },
  {
    "word": "IELTSWord538",
    "phonetic": "/ieltsˈwɜːrd538/",
    "meaning": "分析 (词汇 538)",
    "root": "root-538 (词根释义)",
    "example": "This is an example sentence for IELTSWord538."
  },
  {
    "word": "IELTSWord539",
    "phonetic": "/ieltsˈwɜːrd539/",
    "meaning": "综合 (词汇 539)",
    "root": "root-539 (词根释义)",
    "example": "This is an example sentence for IELTSWord539."
  },
  {
    "word": "IELTSWord540",
    "phonetic": "/ieltsˈwɜːrd540/",
    "meaning": "分析 (词汇 540)",
    "root": "root-540 (词根释义)",
    "example": "This is an example sentence for IELTSWord540."
  },
  {
    "word": "IELTSWord541",
    "phonetic": "/ieltsˈwɜːrd541/",
    "meaning": "评估 (词汇 541)",
    "root": "root-541 (词根释义)",
    "example": "This is an example sentence for IELTSWord541."
  },
  {
    "word": "IELTSWord542",
    "phonetic": "/ieltsˈwɜːrd542/",
    "meaning": "现象 (词汇 542)",
    "root": "root-542 (词根释义)",
    "example": "This is an example sentence for IELTSWord542."
  },
  {
    "word": "IELTSWord543",
    "phonetic": "/ieltsˈwɜːrd543/",
    "meaning": "科技 (词汇 543)",
    "root": "root-543 (词根释义)",
    "example": "This is an example sentence for IELTSWord543."
  },
  {
    "word": "IELTSWord544",
    "phonetic": "/ieltsˈwɜːrd544/",
    "meaning": "综合 (词汇 544)",
    "root": "root-544 (词根释义)",
    "example": "This is an example sentence for IELTSWord544."
  },
  {
    "word": "IELTSWord545",
    "phonetic": "/ieltsˈwɜːrd545/",
    "meaning": "文化 (词汇 545)",
    "root": "root-545 (词根释义)",
    "example": "This is an example sentence for IELTSWord545."
  },
  {
    "word": "IELTSWord546",
    "phonetic": "/ieltsˈwɜːrd546/",
    "meaning": "现象 (词汇 546)",
    "root": "root-546 (词根释义)",
    "example": "This is an example sentence for IELTSWord546."
  },
  {
    "word": "IELTSWord547",
    "phonetic": "/ieltsˈwɜːrd547/",
    "meaning": "科技 (词汇 547)",
    "root": "root-547 (词根释义)",
    "example": "This is an example sentence for IELTSWord547."
  },
  {
    "word": "IELTSWord548",
    "phonetic": "/ieltsˈwɜːrd548/",
    "meaning": "全球化 (词汇 548)",
    "root": "root-548 (词根释义)",
    "example": "This is an example sentence for IELTSWord548."
  },
  {
    "word": "IELTSWord549",
    "phonetic": "/ieltsˈwɜːrd549/",
    "meaning": "科技 (词汇 549)",
    "root": "root-549 (词根释义)",
    "example": "This is an example sentence for IELTSWord549."
  },
  {
    "word": "IELTSWord550",
    "phonetic": "/ieltsˈwɜːrd550/",
    "meaning": "环境 (词汇 550)",
    "root": "root-550 (词根释义)",
    "example": "This is an example sentence for IELTSWord550."
  },
  {
    "word": "IELTSWord551",
    "phonetic": "/ieltsˈwɜːrd551/",
    "meaning": "全球化 (词汇 551)",
    "root": "root-551 (词根释义)",
    "example": "This is an example sentence for IELTSWord551."
  },
  {
    "word": "IELTSWord552",
    "phonetic": "/ieltsˈwɜːrd552/",
    "meaning": "分析 (词汇 552)",
    "root": "root-552 (词根释义)",
    "example": "This is an example sentence for IELTSWord552."
  },
  {
    "word": "IELTSWord553",
    "phonetic": "/ieltsˈwɜːrd553/",
    "meaning": "教育 (词汇 553)",
    "root": "root-553 (词根释义)",
    "example": "This is an example sentence for IELTSWord553."
  },
  {
    "word": "IELTSWord554",
    "phonetic": "/ieltsˈwɜːrd554/",
    "meaning": "环境 (词汇 554)",
    "root": "root-554 (词根释义)",
    "example": "This is an example sentence for IELTSWord554."
  },
  {
    "word": "IELTSWord555",
    "phonetic": "/ieltsˈwɜːrd555/",
    "meaning": "全球化 (词汇 555)",
    "root": "root-555 (词根释义)",
    "example": "This is an example sentence for IELTSWord555."
  },
  {
    "word": "IELTSWord556",
    "phonetic": "/ieltsˈwɜːrd556/",
    "meaning": "环境 (词汇 556)",
    "root": "root-556 (词根释义)",
    "example": "This is an example sentence for IELTSWord556."
  },
  {
    "word": "IELTSWord557",
    "phonetic": "/ieltsˈwɜːrd557/",
    "meaning": "教育 (词汇 557)",
    "root": "root-557 (词根释义)",
    "example": "This is an example sentence for IELTSWord557."
  },
  {
    "word": "IELTSWord558",
    "phonetic": "/ieltsˈwɜːrd558/",
    "meaning": "综合 (词汇 558)",
    "root": "root-558 (词根释义)",
    "example": "This is an example sentence for IELTSWord558."
  },
  {
    "word": "IELTSWord559",
    "phonetic": "/ieltsˈwɜːrd559/",
    "meaning": "教育 (词汇 559)",
    "root": "root-559 (词根释义)",
    "example": "This is an example sentence for IELTSWord559."
  },
  {
    "word": "IELTSWord560",
    "phonetic": "/ieltsˈwɜːrd560/",
    "meaning": "环境 (词汇 560)",
    "root": "root-560 (词根释义)",
    "example": "This is an example sentence for IELTSWord560."
  },
  {
    "word": "IELTSWord561",
    "phonetic": "/ieltsˈwɜːrd561/",
    "meaning": "分析 (词汇 561)",
    "root": "root-561 (词根释义)",
    "example": "This is an example sentence for IELTSWord561."
  },
  {
    "word": "IELTSWord562",
    "phonetic": "/ieltsˈwɜːrd562/",
    "meaning": "综合 (词汇 562)",
    "root": "root-562 (词根释义)",
    "example": "This is an example sentence for IELTSWord562."
  },
  {
    "word": "IELTSWord563",
    "phonetic": "/ieltsˈwɜːrd563/",
    "meaning": "现象 (词汇 563)",
    "root": "root-563 (词根释义)",
    "example": "This is an example sentence for IELTSWord563."
  },
  {
    "word": "IELTSWord564",
    "phonetic": "/ieltsˈwɜːrd564/",
    "meaning": "趋势 (词汇 564)",
    "root": "root-564 (词根释义)",
    "example": "This is an example sentence for IELTSWord564."
  },
  {
    "word": "IELTSWord565",
    "phonetic": "/ieltsˈwɜːrd565/",
    "meaning": "趋势 (词汇 565)",
    "root": "root-565 (词根释义)",
    "example": "This is an example sentence for IELTSWord565."
  },
  {
    "word": "IELTSWord566",
    "phonetic": "/ieltsˈwɜːrd566/",
    "meaning": "全球化 (词汇 566)",
    "root": "root-566 (词根释义)",
    "example": "This is an example sentence for IELTSWord566."
  },
  {
    "word": "IELTSWord567",
    "phonetic": "/ieltsˈwɜːrd567/",
    "meaning": "综合 (词汇 567)",
    "root": "root-567 (词根释义)",
    "example": "This is an example sentence for IELTSWord567."
  },
  {
    "word": "IELTSWord568",
    "phonetic": "/ieltsˈwɜːrd568/",
    "meaning": "文化 (词汇 568)",
    "root": "root-568 (词根释义)",
    "example": "This is an example sentence for IELTSWord568."
  },
  {
    "word": "IELTSWord569",
    "phonetic": "/ieltsˈwɜːrd569/",
    "meaning": "评估 (词汇 569)",
    "root": "root-569 (词根释义)",
    "example": "This is an example sentence for IELTSWord569."
  },
  {
    "word": "IELTSWord570",
    "phonetic": "/ieltsˈwɜːrd570/",
    "meaning": "全球化 (词汇 570)",
    "root": "root-570 (词根释义)",
    "example": "This is an example sentence for IELTSWord570."
  },
  {
    "word": "IELTSWord571",
    "phonetic": "/ieltsˈwɜːrd571/",
    "meaning": "科技 (词汇 571)",
    "root": "root-571 (词根释义)",
    "example": "This is an example sentence for IELTSWord571."
  },
  {
    "word": "IELTSWord572",
    "phonetic": "/ieltsˈwɜːrd572/",
    "meaning": "现象 (词汇 572)",
    "root": "root-572 (词根释义)",
    "example": "This is an example sentence for IELTSWord572."
  },
  {
    "word": "IELTSWord573",
    "phonetic": "/ieltsˈwɜːrd573/",
    "meaning": "综合 (词汇 573)",
    "root": "root-573 (词根释义)",
    "example": "This is an example sentence for IELTSWord573."
  },
  {
    "word": "IELTSWord574",
    "phonetic": "/ieltsˈwɜːrd574/",
    "meaning": "环境 (词汇 574)",
    "root": "root-574 (词根释义)",
    "example": "This is an example sentence for IELTSWord574."
  },
  {
    "word": "IELTSWord575",
    "phonetic": "/ieltsˈwɜːrd575/",
    "meaning": "分析 (词汇 575)",
    "root": "root-575 (词根释义)",
    "example": "This is an example sentence for IELTSWord575."
  },
  {
    "word": "IELTSWord576",
    "phonetic": "/ieltsˈwɜːrd576/",
    "meaning": "评估 (词汇 576)",
    "root": "root-576 (词根释义)",
    "example": "This is an example sentence for IELTSWord576."
  },
  {
    "word": "IELTSWord577",
    "phonetic": "/ieltsˈwɜːrd577/",
    "meaning": "评估 (词汇 577)",
    "root": "root-577 (词根释义)",
    "example": "This is an example sentence for IELTSWord577."
  },
  {
    "word": "IELTSWord578",
    "phonetic": "/ieltsˈwɜːrd578/",
    "meaning": "分析 (词汇 578)",
    "root": "root-578 (词根释义)",
    "example": "This is an example sentence for IELTSWord578."
  },
  {
    "word": "IELTSWord579",
    "phonetic": "/ieltsˈwɜːrd579/",
    "meaning": "科技 (词汇 579)",
    "root": "root-579 (词根释义)",
    "example": "This is an example sentence for IELTSWord579."
  },
  {
    "word": "IELTSWord580",
    "phonetic": "/ieltsˈwɜːrd580/",
    "meaning": "分析 (词汇 580)",
    "root": "root-580 (词根释义)",
    "example": "This is an example sentence for IELTSWord580."
  },
  {
    "word": "IELTSWord581",
    "phonetic": "/ieltsˈwɜːrd581/",
    "meaning": "教育 (词汇 581)",
    "root": "root-581 (词根释义)",
    "example": "This is an example sentence for IELTSWord581."
  },
  {
    "word": "IELTSWord582",
    "phonetic": "/ieltsˈwɜːrd582/",
    "meaning": "现象 (词汇 582)",
    "root": "root-582 (词根释义)",
    "example": "This is an example sentence for IELTSWord582."
  },
  {
    "word": "IELTSWord583",
    "phonetic": "/ieltsˈwɜːrd583/",
    "meaning": "趋势 (词汇 583)",
    "root": "root-583 (词根释义)",
    "example": "This is an example sentence for IELTSWord583."
  },
  {
    "word": "IELTSWord584",
    "phonetic": "/ieltsˈwɜːrd584/",
    "meaning": "环境 (词汇 584)",
    "root": "root-584 (词根释义)",
    "example": "This is an example sentence for IELTSWord584."
  },
  {
    "word": "IELTSWord585",
    "phonetic": "/ieltsˈwɜːrd585/",
    "meaning": "评估 (词汇 585)",
    "root": "root-585 (词根释义)",
    "example": "This is an example sentence for IELTSWord585."
  },
  {
    "word": "IELTSWord586",
    "phonetic": "/ieltsˈwɜːrd586/",
    "meaning": "趋势 (词汇 586)",
    "root": "root-586 (词根释义)",
    "example": "This is an example sentence for IELTSWord586."
  },
  {
    "word": "IELTSWord587",
    "phonetic": "/ieltsˈwɜːrd587/",
    "meaning": "综合 (词汇 587)",
    "root": "root-587 (词根释义)",
    "example": "This is an example sentence for IELTSWord587."
  },
  {
    "word": "IELTSWord588",
    "phonetic": "/ieltsˈwɜːrd588/",
    "meaning": "全球化 (词汇 588)",
    "root": "root-588 (词根释义)",
    "example": "This is an example sentence for IELTSWord588."
  },
  {
    "word": "IELTSWord589",
    "phonetic": "/ieltsˈwɜːrd589/",
    "meaning": "科技 (词汇 589)",
    "root": "root-589 (词根释义)",
    "example": "This is an example sentence for IELTSWord589."
  },
  {
    "word": "IELTSWord590",
    "phonetic": "/ieltsˈwɜːrd590/",
    "meaning": "文化 (词汇 590)",
    "root": "root-590 (词根释义)",
    "example": "This is an example sentence for IELTSWord590."
  },
  {
    "word": "IELTSWord591",
    "phonetic": "/ieltsˈwɜːrd591/",
    "meaning": "现象 (词汇 591)",
    "root": "root-591 (词根释义)",
    "example": "This is an example sentence for IELTSWord591."
  },
  {
    "word": "IELTSWord592",
    "phonetic": "/ieltsˈwɜːrd592/",
    "meaning": "现象 (词汇 592)",
    "root": "root-592 (词根释义)",
    "example": "This is an example sentence for IELTSWord592."
  },
  {
    "word": "IELTSWord593",
    "phonetic": "/ieltsˈwɜːrd593/",
    "meaning": "综合 (词汇 593)",
    "root": "root-593 (词根释义)",
    "example": "This is an example sentence for IELTSWord593."
  },
  {
    "word": "IELTSWord594",
    "phonetic": "/ieltsˈwɜːrd594/",
    "meaning": "趋势 (词汇 594)",
    "root": "root-594 (词根释义)",
    "example": "This is an example sentence for IELTSWord594."
  },
  {
    "word": "IELTSWord595",
    "phonetic": "/ieltsˈwɜːrd595/",
    "meaning": "综合 (词汇 595)",
    "root": "root-595 (词根释义)",
    "example": "This is an example sentence for IELTSWord595."
  },
  {
    "word": "IELTSWord596",
    "phonetic": "/ieltsˈwɜːrd596/",
    "meaning": "文化 (词汇 596)",
    "root": "root-596 (词根释义)",
    "example": "This is an example sentence for IELTSWord596."
  },
  {
    "word": "IELTSWord597",
    "phonetic": "/ieltsˈwɜːrd597/",
    "meaning": "综合 (词汇 597)",
    "root": "root-597 (词根释义)",
    "example": "This is an example sentence for IELTSWord597."
  },
  {
    "word": "IELTSWord598",
    "phonetic": "/ieltsˈwɜːrd598/",
    "meaning": "环境 (词汇 598)",
    "root": "root-598 (词根释义)",
    "example": "This is an example sentence for IELTSWord598."
  },
  {
    "word": "IELTSWord599",
    "phonetic": "/ieltsˈwɜːrd599/",
    "meaning": "分析 (词汇 599)",
    "root": "root-599 (词根释义)",
    "example": "This is an example sentence for IELTSWord599."
  },
  {
    "word": "IELTSWord600",
    "phonetic": "/ieltsˈwɜːrd600/",
    "meaning": "评估 (词汇 600)",
    "root": "root-600 (词根释义)",
    "example": "This is an example sentence for IELTSWord600."
  },
  {
    "word": "IELTSWord601",
    "phonetic": "/ieltsˈwɜːrd601/",
    "meaning": "全球化 (词汇 601)",
    "root": "root-601 (词根释义)",
    "example": "This is an example sentence for IELTSWord601."
  },
  {
    "word": "IELTSWord602",
    "phonetic": "/ieltsˈwɜːrd602/",
    "meaning": "全球化 (词汇 602)",
    "root": "root-602 (词根释义)",
    "example": "This is an example sentence for IELTSWord602."
  },
  {
    "word": "IELTSWord603",
    "phonetic": "/ieltsˈwɜːrd603/",
    "meaning": "教育 (词汇 603)",
    "root": "root-603 (词根释义)",
    "example": "This is an example sentence for IELTSWord603."
  },
  {
    "word": "IELTSWord604",
    "phonetic": "/ieltsˈwɜːrd604/",
    "meaning": "评估 (词汇 604)",
    "root": "root-604 (词根释义)",
    "example": "This is an example sentence for IELTSWord604."
  },
  {
    "word": "IELTSWord605",
    "phonetic": "/ieltsˈwɜːrd605/",
    "meaning": "全球化 (词汇 605)",
    "root": "root-605 (词根释义)",
    "example": "This is an example sentence for IELTSWord605."
  },
  {
    "word": "IELTSWord606",
    "phonetic": "/ieltsˈwɜːrd606/",
    "meaning": "综合 (词汇 606)",
    "root": "root-606 (词根释义)",
    "example": "This is an example sentence for IELTSWord606."
  },
  {
    "word": "IELTSWord607",
    "phonetic": "/ieltsˈwɜːrd607/",
    "meaning": "文化 (词汇 607)",
    "root": "root-607 (词根释义)",
    "example": "This is an example sentence for IELTSWord607."
  },
  {
    "word": "IELTSWord608",
    "phonetic": "/ieltsˈwɜːrd608/",
    "meaning": "文化 (词汇 608)",
    "root": "root-608 (词根释义)",
    "example": "This is an example sentence for IELTSWord608."
  },
  {
    "word": "IELTSWord609",
    "phonetic": "/ieltsˈwɜːrd609/",
    "meaning": "教育 (词汇 609)",
    "root": "root-609 (词根释义)",
    "example": "This is an example sentence for IELTSWord609."
  },
  {
    "word": "IELTSWord610",
    "phonetic": "/ieltsˈwɜːrd610/",
    "meaning": "全球化 (词汇 610)",
    "root": "root-610 (词根释义)",
    "example": "This is an example sentence for IELTSWord610."
  },
  {
    "word": "IELTSWord611",
    "phonetic": "/ieltsˈwɜːrd611/",
    "meaning": "科技 (词汇 611)",
    "root": "root-611 (词根释义)",
    "example": "This is an example sentence for IELTSWord611."
  },
  {
    "word": "IELTSWord612",
    "phonetic": "/ieltsˈwɜːrd612/",
    "meaning": "综合 (词汇 612)",
    "root": "root-612 (词根释义)",
    "example": "This is an example sentence for IELTSWord612."
  },
  {
    "word": "IELTSWord613",
    "phonetic": "/ieltsˈwɜːrd613/",
    "meaning": "教育 (词汇 613)",
    "root": "root-613 (词根释义)",
    "example": "This is an example sentence for IELTSWord613."
  },
  {
    "word": "IELTSWord614",
    "phonetic": "/ieltsˈwɜːrd614/",
    "meaning": "环境 (词汇 614)",
    "root": "root-614 (词根释义)",
    "example": "This is an example sentence for IELTSWord614."
  },
  {
    "word": "IELTSWord615",
    "phonetic": "/ieltsˈwɜːrd615/",
    "meaning": "文化 (词汇 615)",
    "root": "root-615 (词根释义)",
    "example": "This is an example sentence for IELTSWord615."
  },
  {
    "word": "IELTSWord616",
    "phonetic": "/ieltsˈwɜːrd616/",
    "meaning": "趋势 (词汇 616)",
    "root": "root-616 (词根释义)",
    "example": "This is an example sentence for IELTSWord616."
  },
  {
    "word": "IELTSWord617",
    "phonetic": "/ieltsˈwɜːrd617/",
    "meaning": "文化 (词汇 617)",
    "root": "root-617 (词根释义)",
    "example": "This is an example sentence for IELTSWord617."
  },
  {
    "word": "IELTSWord618",
    "phonetic": "/ieltsˈwɜːrd618/",
    "meaning": "评估 (词汇 618)",
    "root": "root-618 (词根释义)",
    "example": "This is an example sentence for IELTSWord618."
  },
  {
    "word": "IELTSWord619",
    "phonetic": "/ieltsˈwɜːrd619/",
    "meaning": "评估 (词汇 619)",
    "root": "root-619 (词根释义)",
    "example": "This is an example sentence for IELTSWord619."
  },
  {
    "word": "IELTSWord620",
    "phonetic": "/ieltsˈwɜːrd620/",
    "meaning": "科技 (词汇 620)",
    "root": "root-620 (词根释义)",
    "example": "This is an example sentence for IELTSWord620."
  },
  {
    "word": "IELTSWord621",
    "phonetic": "/ieltsˈwɜːrd621/",
    "meaning": "教育 (词汇 621)",
    "root": "root-621 (词根释义)",
    "example": "This is an example sentence for IELTSWord621."
  },
  {
    "word": "IELTSWord622",
    "phonetic": "/ieltsˈwɜːrd622/",
    "meaning": "文化 (词汇 622)",
    "root": "root-622 (词根释义)",
    "example": "This is an example sentence for IELTSWord622."
  },
  {
    "word": "IELTSWord623",
    "phonetic": "/ieltsˈwɜːrd623/",
    "meaning": "科技 (词汇 623)",
    "root": "root-623 (词根释义)",
    "example": "This is an example sentence for IELTSWord623."
  },
  {
    "word": "IELTSWord624",
    "phonetic": "/ieltsˈwɜːrd624/",
    "meaning": "文化 (词汇 624)",
    "root": "root-624 (词根释义)",
    "example": "This is an example sentence for IELTSWord624."
  },
  {
    "word": "IELTSWord625",
    "phonetic": "/ieltsˈwɜːrd625/",
    "meaning": "综合 (词汇 625)",
    "root": "root-625 (词根释义)",
    "example": "This is an example sentence for IELTSWord625."
  },
  {
    "word": "IELTSWord626",
    "phonetic": "/ieltsˈwɜːrd626/",
    "meaning": "综合 (词汇 626)",
    "root": "root-626 (词根释义)",
    "example": "This is an example sentence for IELTSWord626."
  },
  {
    "word": "IELTSWord627",
    "phonetic": "/ieltsˈwɜːrd627/",
    "meaning": "全球化 (词汇 627)",
    "root": "root-627 (词根释义)",
    "example": "This is an example sentence for IELTSWord627."
  },
  {
    "word": "IELTSWord628",
    "phonetic": "/ieltsˈwɜːrd628/",
    "meaning": "现象 (词汇 628)",
    "root": "root-628 (词根释义)",
    "example": "This is an example sentence for IELTSWord628."
  },
  {
    "word": "IELTSWord629",
    "phonetic": "/ieltsˈwɜːrd629/",
    "meaning": "环境 (词汇 629)",
    "root": "root-629 (词根释义)",
    "example": "This is an example sentence for IELTSWord629."
  },
  {
    "word": "IELTSWord630",
    "phonetic": "/ieltsˈwɜːrd630/",
    "meaning": "全球化 (词汇 630)",
    "root": "root-630 (词根释义)",
    "example": "This is an example sentence for IELTSWord630."
  },
  {
    "word": "IELTSWord631",
    "phonetic": "/ieltsˈwɜːrd631/",
    "meaning": "综合 (词汇 631)",
    "root": "root-631 (词根释义)",
    "example": "This is an example sentence for IELTSWord631."
  },
  {
    "word": "IELTSWord632",
    "phonetic": "/ieltsˈwɜːrd632/",
    "meaning": "评估 (词汇 632)",
    "root": "root-632 (词根释义)",
    "example": "This is an example sentence for IELTSWord632."
  },
  {
    "word": "IELTSWord633",
    "phonetic": "/ieltsˈwɜːrd633/",
    "meaning": "评估 (词汇 633)",
    "root": "root-633 (词根释义)",
    "example": "This is an example sentence for IELTSWord633."
  },
  {
    "word": "IELTSWord634",
    "phonetic": "/ieltsˈwɜːrd634/",
    "meaning": "趋势 (词汇 634)",
    "root": "root-634 (词根释义)",
    "example": "This is an example sentence for IELTSWord634."
  },
  {
    "word": "IELTSWord635",
    "phonetic": "/ieltsˈwɜːrd635/",
    "meaning": "综合 (词汇 635)",
    "root": "root-635 (词根释义)",
    "example": "This is an example sentence for IELTSWord635."
  },
  {
    "word": "IELTSWord636",
    "phonetic": "/ieltsˈwɜːrd636/",
    "meaning": "趋势 (词汇 636)",
    "root": "root-636 (词根释义)",
    "example": "This is an example sentence for IELTSWord636."
  },
  {
    "word": "IELTSWord637",
    "phonetic": "/ieltsˈwɜːrd637/",
    "meaning": "教育 (词汇 637)",
    "root": "root-637 (词根释义)",
    "example": "This is an example sentence for IELTSWord637."
  },
  {
    "word": "IELTSWord638",
    "phonetic": "/ieltsˈwɜːrd638/",
    "meaning": "教育 (词汇 638)",
    "root": "root-638 (词根释义)",
    "example": "This is an example sentence for IELTSWord638."
  },
  {
    "word": "IELTSWord639",
    "phonetic": "/ieltsˈwɜːrd639/",
    "meaning": "教育 (词汇 639)",
    "root": "root-639 (词根释义)",
    "example": "This is an example sentence for IELTSWord639."
  },
  {
    "word": "IELTSWord640",
    "phonetic": "/ieltsˈwɜːrd640/",
    "meaning": "全球化 (词汇 640)",
    "root": "root-640 (词根释义)",
    "example": "This is an example sentence for IELTSWord640."
  },
  {
    "word": "IELTSWord641",
    "phonetic": "/ieltsˈwɜːrd641/",
    "meaning": "科技 (词汇 641)",
    "root": "root-641 (词根释义)",
    "example": "This is an example sentence for IELTSWord641."
  },
  {
    "word": "IELTSWord642",
    "phonetic": "/ieltsˈwɜːrd642/",
    "meaning": "全球化 (词汇 642)",
    "root": "root-642 (词根释义)",
    "example": "This is an example sentence for IELTSWord642."
  },
  {
    "word": "IELTSWord643",
    "phonetic": "/ieltsˈwɜːrd643/",
    "meaning": "评估 (词汇 643)",
    "root": "root-643 (词根释义)",
    "example": "This is an example sentence for IELTSWord643."
  },
  {
    "word": "IELTSWord644",
    "phonetic": "/ieltsˈwɜːrd644/",
    "meaning": "全球化 (词汇 644)",
    "root": "root-644 (词根释义)",
    "example": "This is an example sentence for IELTSWord644."
  },
  {
    "word": "IELTSWord645",
    "phonetic": "/ieltsˈwɜːrd645/",
    "meaning": "趋势 (词汇 645)",
    "root": "root-645 (词根释义)",
    "example": "This is an example sentence for IELTSWord645."
  },
  {
    "word": "IELTSWord646",
    "phonetic": "/ieltsˈwɜːrd646/",
    "meaning": "综合 (词汇 646)",
    "root": "root-646 (词根释义)",
    "example": "This is an example sentence for IELTSWord646."
  },
  {
    "word": "IELTSWord647",
    "phonetic": "/ieltsˈwɜːrd647/",
    "meaning": "现象 (词汇 647)",
    "root": "root-647 (词根释义)",
    "example": "This is an example sentence for IELTSWord647."
  },
  {
    "word": "IELTSWord648",
    "phonetic": "/ieltsˈwɜːrd648/",
    "meaning": "教育 (词汇 648)",
    "root": "root-648 (词根释义)",
    "example": "This is an example sentence for IELTSWord648."
  },
  {
    "word": "IELTSWord649",
    "phonetic": "/ieltsˈwɜːrd649/",
    "meaning": "科技 (词汇 649)",
    "root": "root-649 (词根释义)",
    "example": "This is an example sentence for IELTSWord649."
  },
  {
    "word": "IELTSWord650",
    "phonetic": "/ieltsˈwɜːrd650/",
    "meaning": "分析 (词汇 650)",
    "root": "root-650 (词根释义)",
    "example": "This is an example sentence for IELTSWord650."
  },
  {
    "word": "IELTSWord651",
    "phonetic": "/ieltsˈwɜːrd651/",
    "meaning": "文化 (词汇 651)",
    "root": "root-651 (词根释义)",
    "example": "This is an example sentence for IELTSWord651."
  },
  {
    "word": "IELTSWord652",
    "phonetic": "/ieltsˈwɜːrd652/",
    "meaning": "综合 (词汇 652)",
    "root": "root-652 (词根释义)",
    "example": "This is an example sentence for IELTSWord652."
  },
  {
    "word": "IELTSWord653",
    "phonetic": "/ieltsˈwɜːrd653/",
    "meaning": "综合 (词汇 653)",
    "root": "root-653 (词根释义)",
    "example": "This is an example sentence for IELTSWord653."
  },
  {
    "word": "IELTSWord654",
    "phonetic": "/ieltsˈwɜːrd654/",
    "meaning": "评估 (词汇 654)",
    "root": "root-654 (词根释义)",
    "example": "This is an example sentence for IELTSWord654."
  },
  {
    "word": "IELTSWord655",
    "phonetic": "/ieltsˈwɜːrd655/",
    "meaning": "全球化 (词汇 655)",
    "root": "root-655 (词根释义)",
    "example": "This is an example sentence for IELTSWord655."
  },
  {
    "word": "IELTSWord656",
    "phonetic": "/ieltsˈwɜːrd656/",
    "meaning": "科技 (词汇 656)",
    "root": "root-656 (词根释义)",
    "example": "This is an example sentence for IELTSWord656."
  },
  {
    "word": "IELTSWord657",
    "phonetic": "/ieltsˈwɜːrd657/",
    "meaning": "评估 (词汇 657)",
    "root": "root-657 (词根释义)",
    "example": "This is an example sentence for IELTSWord657."
  },
  {
    "word": "IELTSWord658",
    "phonetic": "/ieltsˈwɜːrd658/",
    "meaning": "教育 (词汇 658)",
    "root": "root-658 (词根释义)",
    "example": "This is an example sentence for IELTSWord658."
  },
  {
    "word": "IELTSWord659",
    "phonetic": "/ieltsˈwɜːrd659/",
    "meaning": "趋势 (词汇 659)",
    "root": "root-659 (词根释义)",
    "example": "This is an example sentence for IELTSWord659."
  },
  {
    "word": "IELTSWord660",
    "phonetic": "/ieltsˈwɜːrd660/",
    "meaning": "现象 (词汇 660)",
    "root": "root-660 (词根释义)",
    "example": "This is an example sentence for IELTSWord660."
  },
  {
    "word": "IELTSWord661",
    "phonetic": "/ieltsˈwɜːrd661/",
    "meaning": "全球化 (词汇 661)",
    "root": "root-661 (词根释义)",
    "example": "This is an example sentence for IELTSWord661."
  },
  {
    "word": "IELTSWord662",
    "phonetic": "/ieltsˈwɜːrd662/",
    "meaning": "现象 (词汇 662)",
    "root": "root-662 (词根释义)",
    "example": "This is an example sentence for IELTSWord662."
  },
  {
    "word": "IELTSWord663",
    "phonetic": "/ieltsˈwɜːrd663/",
    "meaning": "全球化 (词汇 663)",
    "root": "root-663 (词根释义)",
    "example": "This is an example sentence for IELTSWord663."
  },
  {
    "word": "IELTSWord664",
    "phonetic": "/ieltsˈwɜːrd664/",
    "meaning": "文化 (词汇 664)",
    "root": "root-664 (词根释义)",
    "example": "This is an example sentence for IELTSWord664."
  },
  {
    "word": "IELTSWord665",
    "phonetic": "/ieltsˈwɜːrd665/",
    "meaning": "评估 (词汇 665)",
    "root": "root-665 (词根释义)",
    "example": "This is an example sentence for IELTSWord665."
  },
  {
    "word": "IELTSWord666",
    "phonetic": "/ieltsˈwɜːrd666/",
    "meaning": "文化 (词汇 666)",
    "root": "root-666 (词根释义)",
    "example": "This is an example sentence for IELTSWord666."
  },
  {
    "word": "IELTSWord667",
    "phonetic": "/ieltsˈwɜːrd667/",
    "meaning": "现象 (词汇 667)",
    "root": "root-667 (词根释义)",
    "example": "This is an example sentence for IELTSWord667."
  },
  {
    "word": "IELTSWord668",
    "phonetic": "/ieltsˈwɜːrd668/",
    "meaning": "科技 (词汇 668)",
    "root": "root-668 (词根释义)",
    "example": "This is an example sentence for IELTSWord668."
  },
  {
    "word": "IELTSWord669",
    "phonetic": "/ieltsˈwɜːrd669/",
    "meaning": "评估 (词汇 669)",
    "root": "root-669 (词根释义)",
    "example": "This is an example sentence for IELTSWord669."
  },
  {
    "word": "IELTSWord670",
    "phonetic": "/ieltsˈwɜːrd670/",
    "meaning": "科技 (词汇 670)",
    "root": "root-670 (词根释义)",
    "example": "This is an example sentence for IELTSWord670."
  },
  {
    "word": "IELTSWord671",
    "phonetic": "/ieltsˈwɜːrd671/",
    "meaning": "环境 (词汇 671)",
    "root": "root-671 (词根释义)",
    "example": "This is an example sentence for IELTSWord671."
  },
  {
    "word": "IELTSWord672",
    "phonetic": "/ieltsˈwɜːrd672/",
    "meaning": "教育 (词汇 672)",
    "root": "root-672 (词根释义)",
    "example": "This is an example sentence for IELTSWord672."
  },
  {
    "word": "IELTSWord673",
    "phonetic": "/ieltsˈwɜːrd673/",
    "meaning": "教育 (词汇 673)",
    "root": "root-673 (词根释义)",
    "example": "This is an example sentence for IELTSWord673."
  },
  {
    "word": "IELTSWord674",
    "phonetic": "/ieltsˈwɜːrd674/",
    "meaning": "科技 (词汇 674)",
    "root": "root-674 (词根释义)",
    "example": "This is an example sentence for IELTSWord674."
  },
  {
    "word": "IELTSWord675",
    "phonetic": "/ieltsˈwɜːrd675/",
    "meaning": "教育 (词汇 675)",
    "root": "root-675 (词根释义)",
    "example": "This is an example sentence for IELTSWord675."
  },
  {
    "word": "IELTSWord676",
    "phonetic": "/ieltsˈwɜːrd676/",
    "meaning": "文化 (词汇 676)",
    "root": "root-676 (词根释义)",
    "example": "This is an example sentence for IELTSWord676."
  },
  {
    "word": "IELTSWord677",
    "phonetic": "/ieltsˈwɜːrd677/",
    "meaning": "趋势 (词汇 677)",
    "root": "root-677 (词根释义)",
    "example": "This is an example sentence for IELTSWord677."
  },
  {
    "word": "IELTSWord678",
    "phonetic": "/ieltsˈwɜːrd678/",
    "meaning": "分析 (词汇 678)",
    "root": "root-678 (词根释义)",
    "example": "This is an example sentence for IELTSWord678."
  },
  {
    "word": "IELTSWord679",
    "phonetic": "/ieltsˈwɜːrd679/",
    "meaning": "教育 (词汇 679)",
    "root": "root-679 (词根释义)",
    "example": "This is an example sentence for IELTSWord679."
  },
  {
    "word": "IELTSWord680",
    "phonetic": "/ieltsˈwɜːrd680/",
    "meaning": "评估 (词汇 680)",
    "root": "root-680 (词根释义)",
    "example": "This is an example sentence for IELTSWord680."
  },
  {
    "word": "IELTSWord681",
    "phonetic": "/ieltsˈwɜːrd681/",
    "meaning": "综合 (词汇 681)",
    "root": "root-681 (词根释义)",
    "example": "This is an example sentence for IELTSWord681."
  },
  {
    "word": "IELTSWord682",
    "phonetic": "/ieltsˈwɜːrd682/",
    "meaning": "环境 (词汇 682)",
    "root": "root-682 (词根释义)",
    "example": "This is an example sentence for IELTSWord682."
  },
  {
    "word": "IELTSWord683",
    "phonetic": "/ieltsˈwɜːrd683/",
    "meaning": "文化 (词汇 683)",
    "root": "root-683 (词根释义)",
    "example": "This is an example sentence for IELTSWord683."
  },
  {
    "word": "IELTSWord684",
    "phonetic": "/ieltsˈwɜːrd684/",
    "meaning": "科技 (词汇 684)",
    "root": "root-684 (词根释义)",
    "example": "This is an example sentence for IELTSWord684."
  },
  {
    "word": "IELTSWord685",
    "phonetic": "/ieltsˈwɜːrd685/",
    "meaning": "文化 (词汇 685)",
    "root": "root-685 (词根释义)",
    "example": "This is an example sentence for IELTSWord685."
  },
  {
    "word": "IELTSWord686",
    "phonetic": "/ieltsˈwɜːrd686/",
    "meaning": "科技 (词汇 686)",
    "root": "root-686 (词根释义)",
    "example": "This is an example sentence for IELTSWord686."
  },
  {
    "word": "IELTSWord687",
    "phonetic": "/ieltsˈwɜːrd687/",
    "meaning": "现象 (词汇 687)",
    "root": "root-687 (词根释义)",
    "example": "This is an example sentence for IELTSWord687."
  },
  {
    "word": "IELTSWord688",
    "phonetic": "/ieltsˈwɜːrd688/",
    "meaning": "趋势 (词汇 688)",
    "root": "root-688 (词根释义)",
    "example": "This is an example sentence for IELTSWord688."
  },
  {
    "word": "IELTSWord689",
    "phonetic": "/ieltsˈwɜːrd689/",
    "meaning": "评估 (词汇 689)",
    "root": "root-689 (词根释义)",
    "example": "This is an example sentence for IELTSWord689."
  },
  {
    "word": "IELTSWord690",
    "phonetic": "/ieltsˈwɜːrd690/",
    "meaning": "全球化 (词汇 690)",
    "root": "root-690 (词根释义)",
    "example": "This is an example sentence for IELTSWord690."
  },
  {
    "word": "IELTSWord691",
    "phonetic": "/ieltsˈwɜːrd691/",
    "meaning": "现象 (词汇 691)",
    "root": "root-691 (词根释义)",
    "example": "This is an example sentence for IELTSWord691."
  },
  {
    "word": "IELTSWord692",
    "phonetic": "/ieltsˈwɜːrd692/",
    "meaning": "现象 (词汇 692)",
    "root": "root-692 (词根释义)",
    "example": "This is an example sentence for IELTSWord692."
  },
  {
    "word": "IELTSWord693",
    "phonetic": "/ieltsˈwɜːrd693/",
    "meaning": "现象 (词汇 693)",
    "root": "root-693 (词根释义)",
    "example": "This is an example sentence for IELTSWord693."
  },
  {
    "word": "IELTSWord694",
    "phonetic": "/ieltsˈwɜːrd694/",
    "meaning": "全球化 (词汇 694)",
    "root": "root-694 (词根释义)",
    "example": "This is an example sentence for IELTSWord694."
  },
  {
    "word": "IELTSWord695",
    "phonetic": "/ieltsˈwɜːrd695/",
    "meaning": "文化 (词汇 695)",
    "root": "root-695 (词根释义)",
    "example": "This is an example sentence for IELTSWord695."
  },
  {
    "word": "IELTSWord696",
    "phonetic": "/ieltsˈwɜːrd696/",
    "meaning": "评估 (词汇 696)",
    "root": "root-696 (词根释义)",
    "example": "This is an example sentence for IELTSWord696."
  },
  {
    "word": "IELTSWord697",
    "phonetic": "/ieltsˈwɜːrd697/",
    "meaning": "环境 (词汇 697)",
    "root": "root-697 (词根释义)",
    "example": "This is an example sentence for IELTSWord697."
  },
  {
    "word": "IELTSWord698",
    "phonetic": "/ieltsˈwɜːrd698/",
    "meaning": "分析 (词汇 698)",
    "root": "root-698 (词根释义)",
    "example": "This is an example sentence for IELTSWord698."
  },
  {
    "word": "IELTSWord699",
    "phonetic": "/ieltsˈwɜːrd699/",
    "meaning": "现象 (词汇 699)",
    "root": "root-699 (词根释义)",
    "example": "This is an example sentence for IELTSWord699."
  },
  {
    "word": "IELTSWord700",
    "phonetic": "/ieltsˈwɜːrd700/",
    "meaning": "教育 (词汇 700)",
    "root": "root-700 (词根释义)",
    "example": "This is an example sentence for IELTSWord700."
  },
  {
    "word": "IELTSWord701",
    "phonetic": "/ieltsˈwɜːrd701/",
    "meaning": "教育 (词汇 701)",
    "root": "root-701 (词根释义)",
    "example": "This is an example sentence for IELTSWord701."
  },
  {
    "word": "IELTSWord702",
    "phonetic": "/ieltsˈwɜːrd702/",
    "meaning": "文化 (词汇 702)",
    "root": "root-702 (词根释义)",
    "example": "This is an example sentence for IELTSWord702."
  },
  {
    "word": "IELTSWord703",
    "phonetic": "/ieltsˈwɜːrd703/",
    "meaning": "趋势 (词汇 703)",
    "root": "root-703 (词根释义)",
    "example": "This is an example sentence for IELTSWord703."
  },
  {
    "word": "IELTSWord704",
    "phonetic": "/ieltsˈwɜːrd704/",
    "meaning": "现象 (词汇 704)",
    "root": "root-704 (词根释义)",
    "example": "This is an example sentence for IELTSWord704."
  },
  {
    "word": "IELTSWord705",
    "phonetic": "/ieltsˈwɜːrd705/",
    "meaning": "评估 (词汇 705)",
    "root": "root-705 (词根释义)",
    "example": "This is an example sentence for IELTSWord705."
  },
  {
    "word": "IELTSWord706",
    "phonetic": "/ieltsˈwɜːrd706/",
    "meaning": "全球化 (词汇 706)",
    "root": "root-706 (词根释义)",
    "example": "This is an example sentence for IELTSWord706."
  },
  {
    "word": "IELTSWord707",
    "phonetic": "/ieltsˈwɜːrd707/",
    "meaning": "环境 (词汇 707)",
    "root": "root-707 (词根释义)",
    "example": "This is an example sentence for IELTSWord707."
  },
  {
    "word": "IELTSWord708",
    "phonetic": "/ieltsˈwɜːrd708/",
    "meaning": "教育 (词汇 708)",
    "root": "root-708 (词根释义)",
    "example": "This is an example sentence for IELTSWord708."
  },
  {
    "word": "IELTSWord709",
    "phonetic": "/ieltsˈwɜːrd709/",
    "meaning": "分析 (词汇 709)",
    "root": "root-709 (词根释义)",
    "example": "This is an example sentence for IELTSWord709."
  },
  {
    "word": "IELTSWord710",
    "phonetic": "/ieltsˈwɜːrd710/",
    "meaning": "科技 (词汇 710)",
    "root": "root-710 (词根释义)",
    "example": "This is an example sentence for IELTSWord710."
  },
  {
    "word": "IELTSWord711",
    "phonetic": "/ieltsˈwɜːrd711/",
    "meaning": "教育 (词汇 711)",
    "root": "root-711 (词根释义)",
    "example": "This is an example sentence for IELTSWord711."
  },
  {
    "word": "IELTSWord712",
    "phonetic": "/ieltsˈwɜːrd712/",
    "meaning": "综合 (词汇 712)",
    "root": "root-712 (词根释义)",
    "example": "This is an example sentence for IELTSWord712."
  },
  {
    "word": "IELTSWord713",
    "phonetic": "/ieltsˈwɜːrd713/",
    "meaning": "科技 (词汇 713)",
    "root": "root-713 (词根释义)",
    "example": "This is an example sentence for IELTSWord713."
  },
  {
    "word": "IELTSWord714",
    "phonetic": "/ieltsˈwɜːrd714/",
    "meaning": "趋势 (词汇 714)",
    "root": "root-714 (词根释义)",
    "example": "This is an example sentence for IELTSWord714."
  },
  {
    "word": "IELTSWord715",
    "phonetic": "/ieltsˈwɜːrd715/",
    "meaning": "评估 (词汇 715)",
    "root": "root-715 (词根释义)",
    "example": "This is an example sentence for IELTSWord715."
  },
  {
    "word": "IELTSWord716",
    "phonetic": "/ieltsˈwɜːrd716/",
    "meaning": "全球化 (词汇 716)",
    "root": "root-716 (词根释义)",
    "example": "This is an example sentence for IELTSWord716."
  },
  {
    "word": "IELTSWord717",
    "phonetic": "/ieltsˈwɜːrd717/",
    "meaning": "现象 (词汇 717)",
    "root": "root-717 (词根释义)",
    "example": "This is an example sentence for IELTSWord717."
  },
  {
    "word": "IELTSWord718",
    "phonetic": "/ieltsˈwɜːrd718/",
    "meaning": "环境 (词汇 718)",
    "root": "root-718 (词根释义)",
    "example": "This is an example sentence for IELTSWord718."
  },
  {
    "word": "IELTSWord719",
    "phonetic": "/ieltsˈwɜːrd719/",
    "meaning": "全球化 (词汇 719)",
    "root": "root-719 (词根释义)",
    "example": "This is an example sentence for IELTSWord719."
  },
  {
    "word": "IELTSWord720",
    "phonetic": "/ieltsˈwɜːrd720/",
    "meaning": "分析 (词汇 720)",
    "root": "root-720 (词根释义)",
    "example": "This is an example sentence for IELTSWord720."
  },
  {
    "word": "IELTSWord721",
    "phonetic": "/ieltsˈwɜːrd721/",
    "meaning": "文化 (词汇 721)",
    "root": "root-721 (词根释义)",
    "example": "This is an example sentence for IELTSWord721."
  },
  {
    "word": "IELTSWord722",
    "phonetic": "/ieltsˈwɜːrd722/",
    "meaning": "评估 (词汇 722)",
    "root": "root-722 (词根释义)",
    "example": "This is an example sentence for IELTSWord722."
  },
  {
    "word": "IELTSWord723",
    "phonetic": "/ieltsˈwɜːrd723/",
    "meaning": "文化 (词汇 723)",
    "root": "root-723 (词根释义)",
    "example": "This is an example sentence for IELTSWord723."
  },
  {
    "word": "IELTSWord724",
    "phonetic": "/ieltsˈwɜːrd724/",
    "meaning": "全球化 (词汇 724)",
    "root": "root-724 (词根释义)",
    "example": "This is an example sentence for IELTSWord724."
  },
  {
    "word": "IELTSWord725",
    "phonetic": "/ieltsˈwɜːrd725/",
    "meaning": "分析 (词汇 725)",
    "root": "root-725 (词根释义)",
    "example": "This is an example sentence for IELTSWord725."
  },
  {
    "word": "IELTSWord726",
    "phonetic": "/ieltsˈwɜːrd726/",
    "meaning": "科技 (词汇 726)",
    "root": "root-726 (词根释义)",
    "example": "This is an example sentence for IELTSWord726."
  },
  {
    "word": "IELTSWord727",
    "phonetic": "/ieltsˈwɜːrd727/",
    "meaning": "趋势 (词汇 727)",
    "root": "root-727 (词根释义)",
    "example": "This is an example sentence for IELTSWord727."
  },
  {
    "word": "IELTSWord728",
    "phonetic": "/ieltsˈwɜːrd728/",
    "meaning": "科技 (词汇 728)",
    "root": "root-728 (词根释义)",
    "example": "This is an example sentence for IELTSWord728."
  },
  {
    "word": "IELTSWord729",
    "phonetic": "/ieltsˈwɜːrd729/",
    "meaning": "教育 (词汇 729)",
    "root": "root-729 (词根释义)",
    "example": "This is an example sentence for IELTSWord729."
  },
  {
    "word": "IELTSWord730",
    "phonetic": "/ieltsˈwɜːrd730/",
    "meaning": "全球化 (词汇 730)",
    "root": "root-730 (词根释义)",
    "example": "This is an example sentence for IELTSWord730."
  },
  {
    "word": "IELTSWord731",
    "phonetic": "/ieltsˈwɜːrd731/",
    "meaning": "全球化 (词汇 731)",
    "root": "root-731 (词根释义)",
    "example": "This is an example sentence for IELTSWord731."
  },
  {
    "word": "IELTSWord732",
    "phonetic": "/ieltsˈwɜːrd732/",
    "meaning": "环境 (词汇 732)",
    "root": "root-732 (词根释义)",
    "example": "This is an example sentence for IELTSWord732."
  },
  {
    "word": "IELTSWord733",
    "phonetic": "/ieltsˈwɜːrd733/",
    "meaning": "环境 (词汇 733)",
    "root": "root-733 (词根释义)",
    "example": "This is an example sentence for IELTSWord733."
  },
  {
    "word": "IELTSWord734",
    "phonetic": "/ieltsˈwɜːrd734/",
    "meaning": "趋势 (词汇 734)",
    "root": "root-734 (词根释义)",
    "example": "This is an example sentence for IELTSWord734."
  },
  {
    "word": "IELTSWord735",
    "phonetic": "/ieltsˈwɜːrd735/",
    "meaning": "文化 (词汇 735)",
    "root": "root-735 (词根释义)",
    "example": "This is an example sentence for IELTSWord735."
  },
  {
    "word": "IELTSWord736",
    "phonetic": "/ieltsˈwɜːrd736/",
    "meaning": "教育 (词汇 736)",
    "root": "root-736 (词根释义)",
    "example": "This is an example sentence for IELTSWord736."
  },
  {
    "word": "IELTSWord737",
    "phonetic": "/ieltsˈwɜːrd737/",
    "meaning": "趋势 (词汇 737)",
    "root": "root-737 (词根释义)",
    "example": "This is an example sentence for IELTSWord737."
  },
  {
    "word": "IELTSWord738",
    "phonetic": "/ieltsˈwɜːrd738/",
    "meaning": "现象 (词汇 738)",
    "root": "root-738 (词根释义)",
    "example": "This is an example sentence for IELTSWord738."
  },
  {
    "word": "IELTSWord739",
    "phonetic": "/ieltsˈwɜːrd739/",
    "meaning": "分析 (词汇 739)",
    "root": "root-739 (词根释义)",
    "example": "This is an example sentence for IELTSWord739."
  },
  {
    "word": "IELTSWord740",
    "phonetic": "/ieltsˈwɜːrd740/",
    "meaning": "环境 (词汇 740)",
    "root": "root-740 (词根释义)",
    "example": "This is an example sentence for IELTSWord740."
  },
  {
    "word": "IELTSWord741",
    "phonetic": "/ieltsˈwɜːrd741/",
    "meaning": "文化 (词汇 741)",
    "root": "root-741 (词根释义)",
    "example": "This is an example sentence for IELTSWord741."
  },
  {
    "word": "IELTSWord742",
    "phonetic": "/ieltsˈwɜːrd742/",
    "meaning": "科技 (词汇 742)",
    "root": "root-742 (词根释义)",
    "example": "This is an example sentence for IELTSWord742."
  },
  {
    "word": "IELTSWord743",
    "phonetic": "/ieltsˈwɜːrd743/",
    "meaning": "分析 (词汇 743)",
    "root": "root-743 (词根释义)",
    "example": "This is an example sentence for IELTSWord743."
  },
  {
    "word": "IELTSWord744",
    "phonetic": "/ieltsˈwɜːrd744/",
    "meaning": "综合 (词汇 744)",
    "root": "root-744 (词根释义)",
    "example": "This is an example sentence for IELTSWord744."
  },
  {
    "word": "IELTSWord745",
    "phonetic": "/ieltsˈwɜːrd745/",
    "meaning": "全球化 (词汇 745)",
    "root": "root-745 (词根释义)",
    "example": "This is an example sentence for IELTSWord745."
  },
  {
    "word": "IELTSWord746",
    "phonetic": "/ieltsˈwɜːrd746/",
    "meaning": "全球化 (词汇 746)",
    "root": "root-746 (词根释义)",
    "example": "This is an example sentence for IELTSWord746."
  },
  {
    "word": "IELTSWord747",
    "phonetic": "/ieltsˈwɜːrd747/",
    "meaning": "分析 (词汇 747)",
    "root": "root-747 (词根释义)",
    "example": "This is an example sentence for IELTSWord747."
  },
  {
    "word": "IELTSWord748",
    "phonetic": "/ieltsˈwɜːrd748/",
    "meaning": "评估 (词汇 748)",
    "root": "root-748 (词根释义)",
    "example": "This is an example sentence for IELTSWord748."
  },
  {
    "word": "IELTSWord749",
    "phonetic": "/ieltsˈwɜːrd749/",
    "meaning": "综合 (词汇 749)",
    "root": "root-749 (词根释义)",
    "example": "This is an example sentence for IELTSWord749."
  },
  {
    "word": "IELTSWord750",
    "phonetic": "/ieltsˈwɜːrd750/",
    "meaning": "科技 (词汇 750)",
    "root": "root-750 (词根释义)",
    "example": "This is an example sentence for IELTSWord750."
  },
  {
    "word": "IELTSWord751",
    "phonetic": "/ieltsˈwɜːrd751/",
    "meaning": "全球化 (词汇 751)",
    "root": "root-751 (词根释义)",
    "example": "This is an example sentence for IELTSWord751."
  },
  {
    "word": "IELTSWord752",
    "phonetic": "/ieltsˈwɜːrd752/",
    "meaning": "现象 (词汇 752)",
    "root": "root-752 (词根释义)",
    "example": "This is an example sentence for IELTSWord752."
  },
  {
    "word": "IELTSWord753",
    "phonetic": "/ieltsˈwɜːrd753/",
    "meaning": "趋势 (词汇 753)",
    "root": "root-753 (词根释义)",
    "example": "This is an example sentence for IELTSWord753."
  },
  {
    "word": "IELTSWord754",
    "phonetic": "/ieltsˈwɜːrd754/",
    "meaning": "教育 (词汇 754)",
    "root": "root-754 (词根释义)",
    "example": "This is an example sentence for IELTSWord754."
  },
  {
    "word": "IELTSWord755",
    "phonetic": "/ieltsˈwɜːrd755/",
    "meaning": "现象 (词汇 755)",
    "root": "root-755 (词根释义)",
    "example": "This is an example sentence for IELTSWord755."
  },
  {
    "word": "IELTSWord756",
    "phonetic": "/ieltsˈwɜːrd756/",
    "meaning": "分析 (词汇 756)",
    "root": "root-756 (词根释义)",
    "example": "This is an example sentence for IELTSWord756."
  },
  {
    "word": "IELTSWord757",
    "phonetic": "/ieltsˈwɜːrd757/",
    "meaning": "趋势 (词汇 757)",
    "root": "root-757 (词根释义)",
    "example": "This is an example sentence for IELTSWord757."
  },
  {
    "word": "IELTSWord758",
    "phonetic": "/ieltsˈwɜːrd758/",
    "meaning": "全球化 (词汇 758)",
    "root": "root-758 (词根释义)",
    "example": "This is an example sentence for IELTSWord758."
  },
  {
    "word": "IELTSWord759",
    "phonetic": "/ieltsˈwɜːrd759/",
    "meaning": "趋势 (词汇 759)",
    "root": "root-759 (词根释义)",
    "example": "This is an example sentence for IELTSWord759."
  },
  {
    "word": "IELTSWord760",
    "phonetic": "/ieltsˈwɜːrd760/",
    "meaning": "评估 (词汇 760)",
    "root": "root-760 (词根释义)",
    "example": "This is an example sentence for IELTSWord760."
  },
  {
    "word": "IELTSWord761",
    "phonetic": "/ieltsˈwɜːrd761/",
    "meaning": "环境 (词汇 761)",
    "root": "root-761 (词根释义)",
    "example": "This is an example sentence for IELTSWord761."
  },
  {
    "word": "IELTSWord762",
    "phonetic": "/ieltsˈwɜːrd762/",
    "meaning": "分析 (词汇 762)",
    "root": "root-762 (词根释义)",
    "example": "This is an example sentence for IELTSWord762."
  },
  {
    "word": "IELTSWord763",
    "phonetic": "/ieltsˈwɜːrd763/",
    "meaning": "文化 (词汇 763)",
    "root": "root-763 (词根释义)",
    "example": "This is an example sentence for IELTSWord763."
  },
  {
    "word": "IELTSWord764",
    "phonetic": "/ieltsˈwɜːrd764/",
    "meaning": "评估 (词汇 764)",
    "root": "root-764 (词根释义)",
    "example": "This is an example sentence for IELTSWord764."
  },
  {
    "word": "IELTSWord765",
    "phonetic": "/ieltsˈwɜːrd765/",
    "meaning": "环境 (词汇 765)",
    "root": "root-765 (词根释义)",
    "example": "This is an example sentence for IELTSWord765."
  },
  {
    "word": "IELTSWord766",
    "phonetic": "/ieltsˈwɜːrd766/",
    "meaning": "评估 (词汇 766)",
    "root": "root-766 (词根释义)",
    "example": "This is an example sentence for IELTSWord766."
  },
  {
    "word": "IELTSWord767",
    "phonetic": "/ieltsˈwɜːrd767/",
    "meaning": "科技 (词汇 767)",
    "root": "root-767 (词根释义)",
    "example": "This is an example sentence for IELTSWord767."
  },
  {
    "word": "IELTSWord768",
    "phonetic": "/ieltsˈwɜːrd768/",
    "meaning": "评估 (词汇 768)",
    "root": "root-768 (词根释义)",
    "example": "This is an example sentence for IELTSWord768."
  },
  {
    "word": "IELTSWord769",
    "phonetic": "/ieltsˈwɜːrd769/",
    "meaning": "综合 (词汇 769)",
    "root": "root-769 (词根释义)",
    "example": "This is an example sentence for IELTSWord769."
  },
  {
    "word": "IELTSWord770",
    "phonetic": "/ieltsˈwɜːrd770/",
    "meaning": "分析 (词汇 770)",
    "root": "root-770 (词根释义)",
    "example": "This is an example sentence for IELTSWord770."
  },
  {
    "word": "IELTSWord771",
    "phonetic": "/ieltsˈwɜːrd771/",
    "meaning": "全球化 (词汇 771)",
    "root": "root-771 (词根释义)",
    "example": "This is an example sentence for IELTSWord771."
  },
  {
    "word": "IELTSWord772",
    "phonetic": "/ieltsˈwɜːrd772/",
    "meaning": "现象 (词汇 772)",
    "root": "root-772 (词根释义)",
    "example": "This is an example sentence for IELTSWord772."
  },
  {
    "word": "IELTSWord773",
    "phonetic": "/ieltsˈwɜːrd773/",
    "meaning": "文化 (词汇 773)",
    "root": "root-773 (词根释义)",
    "example": "This is an example sentence for IELTSWord773."
  },
  {
    "word": "IELTSWord774",
    "phonetic": "/ieltsˈwɜːrd774/",
    "meaning": "现象 (词汇 774)",
    "root": "root-774 (词根释义)",
    "example": "This is an example sentence for IELTSWord774."
  },
  {
    "word": "IELTSWord775",
    "phonetic": "/ieltsˈwɜːrd775/",
    "meaning": "现象 (词汇 775)",
    "root": "root-775 (词根释义)",
    "example": "This is an example sentence for IELTSWord775."
  },
  {
    "word": "IELTSWord776",
    "phonetic": "/ieltsˈwɜːrd776/",
    "meaning": "评估 (词汇 776)",
    "root": "root-776 (词根释义)",
    "example": "This is an example sentence for IELTSWord776."
  },
  {
    "word": "IELTSWord777",
    "phonetic": "/ieltsˈwɜːrd777/",
    "meaning": "文化 (词汇 777)",
    "root": "root-777 (词根释义)",
    "example": "This is an example sentence for IELTSWord777."
  },
  {
    "word": "IELTSWord778",
    "phonetic": "/ieltsˈwɜːrd778/",
    "meaning": "教育 (词汇 778)",
    "root": "root-778 (词根释义)",
    "example": "This is an example sentence for IELTSWord778."
  },
  {
    "word": "IELTSWord779",
    "phonetic": "/ieltsˈwɜːrd779/",
    "meaning": "环境 (词汇 779)",
    "root": "root-779 (词根释义)",
    "example": "This is an example sentence for IELTSWord779."
  },
  {
    "word": "IELTSWord780",
    "phonetic": "/ieltsˈwɜːrd780/",
    "meaning": "全球化 (词汇 780)",
    "root": "root-780 (词根释义)",
    "example": "This is an example sentence for IELTSWord780."
  },
  {
    "word": "IELTSWord781",
    "phonetic": "/ieltsˈwɜːrd781/",
    "meaning": "科技 (词汇 781)",
    "root": "root-781 (词根释义)",
    "example": "This is an example sentence for IELTSWord781."
  },
  {
    "word": "IELTSWord782",
    "phonetic": "/ieltsˈwɜːrd782/",
    "meaning": "分析 (词汇 782)",
    "root": "root-782 (词根释义)",
    "example": "This is an example sentence for IELTSWord782."
  },
  {
    "word": "IELTSWord783",
    "phonetic": "/ieltsˈwɜːrd783/",
    "meaning": "综合 (词汇 783)",
    "root": "root-783 (词根释义)",
    "example": "This is an example sentence for IELTSWord783."
  },
  {
    "word": "IELTSWord784",
    "phonetic": "/ieltsˈwɜːrd784/",
    "meaning": "评估 (词汇 784)",
    "root": "root-784 (词根释义)",
    "example": "This is an example sentence for IELTSWord784."
  },
  {
    "word": "IELTSWord785",
    "phonetic": "/ieltsˈwɜːrd785/",
    "meaning": "教育 (词汇 785)",
    "root": "root-785 (词根释义)",
    "example": "This is an example sentence for IELTSWord785."
  },
  {
    "word": "IELTSWord786",
    "phonetic": "/ieltsˈwɜːrd786/",
    "meaning": "分析 (词汇 786)",
    "root": "root-786 (词根释义)",
    "example": "This is an example sentence for IELTSWord786."
  },
  {
    "word": "IELTSWord787",
    "phonetic": "/ieltsˈwɜːrd787/",
    "meaning": "科技 (词汇 787)",
    "root": "root-787 (词根释义)",
    "example": "This is an example sentence for IELTSWord787."
  },
  {
    "word": "IELTSWord788",
    "phonetic": "/ieltsˈwɜːrd788/",
    "meaning": "文化 (词汇 788)",
    "root": "root-788 (词根释义)",
    "example": "This is an example sentence for IELTSWord788."
  },
  {
    "word": "IELTSWord789",
    "phonetic": "/ieltsˈwɜːrd789/",
    "meaning": "趋势 (词汇 789)",
    "root": "root-789 (词根释义)",
    "example": "This is an example sentence for IELTSWord789."
  },
  {
    "word": "IELTSWord790",
    "phonetic": "/ieltsˈwɜːrd790/",
    "meaning": "趋势 (词汇 790)",
    "root": "root-790 (词根释义)",
    "example": "This is an example sentence for IELTSWord790."
  },
  {
    "word": "IELTSWord791",
    "phonetic": "/ieltsˈwɜːrd791/",
    "meaning": "教育 (词汇 791)",
    "root": "root-791 (词根释义)",
    "example": "This is an example sentence for IELTSWord791."
  },
  {
    "word": "IELTSWord792",
    "phonetic": "/ieltsˈwɜːrd792/",
    "meaning": "文化 (词汇 792)",
    "root": "root-792 (词根释义)",
    "example": "This is an example sentence for IELTSWord792."
  },
  {
    "word": "IELTSWord793",
    "phonetic": "/ieltsˈwɜːrd793/",
    "meaning": "综合 (词汇 793)",
    "root": "root-793 (词根释义)",
    "example": "This is an example sentence for IELTSWord793."
  },
  {
    "word": "IELTSWord794",
    "phonetic": "/ieltsˈwɜːrd794/",
    "meaning": "评估 (词汇 794)",
    "root": "root-794 (词根释义)",
    "example": "This is an example sentence for IELTSWord794."
  },
  {
    "word": "IELTSWord795",
    "phonetic": "/ieltsˈwɜːrd795/",
    "meaning": "科技 (词汇 795)",
    "root": "root-795 (词根释义)",
    "example": "This is an example sentence for IELTSWord795."
  },
  {
    "word": "IELTSWord796",
    "phonetic": "/ieltsˈwɜːrd796/",
    "meaning": "文化 (词汇 796)",
    "root": "root-796 (词根释义)",
    "example": "This is an example sentence for IELTSWord796."
  },
  {
    "word": "IELTSWord797",
    "phonetic": "/ieltsˈwɜːrd797/",
    "meaning": "环境 (词汇 797)",
    "root": "root-797 (词根释义)",
    "example": "This is an example sentence for IELTSWord797."
  },
  {
    "word": "IELTSWord798",
    "phonetic": "/ieltsˈwɜːrd798/",
    "meaning": "教育 (词汇 798)",
    "root": "root-798 (词根释义)",
    "example": "This is an example sentence for IELTSWord798."
  },
  {
    "word": "IELTSWord799",
    "phonetic": "/ieltsˈwɜːrd799/",
    "meaning": "现象 (词汇 799)",
    "root": "root-799 (词根释义)",
    "example": "This is an example sentence for IELTSWord799."
  },
  {
    "word": "IELTSWord800",
    "phonetic": "/ieltsˈwɜːrd800/",
    "meaning": "科技 (词汇 800)",
    "root": "root-800 (词根释义)",
    "example": "This is an example sentence for IELTSWord800."
  },
  {
    "word": "IELTSWord801",
    "phonetic": "/ieltsˈwɜːrd801/",
    "meaning": "文化 (词汇 801)",
    "root": "root-801 (词根释义)",
    "example": "This is an example sentence for IELTSWord801."
  },
  {
    "word": "IELTSWord802",
    "phonetic": "/ieltsˈwɜːrd802/",
    "meaning": "评估 (词汇 802)",
    "root": "root-802 (词根释义)",
    "example": "This is an example sentence for IELTSWord802."
  },
  {
    "word": "IELTSWord803",
    "phonetic": "/ieltsˈwɜːrd803/",
    "meaning": "现象 (词汇 803)",
    "root": "root-803 (词根释义)",
    "example": "This is an example sentence for IELTSWord803."
  },
  {
    "word": "IELTSWord804",
    "phonetic": "/ieltsˈwɜːrd804/",
    "meaning": "全球化 (词汇 804)",
    "root": "root-804 (词根释义)",
    "example": "This is an example sentence for IELTSWord804."
  },
  {
    "word": "IELTSWord805",
    "phonetic": "/ieltsˈwɜːrd805/",
    "meaning": "现象 (词汇 805)",
    "root": "root-805 (词根释义)",
    "example": "This is an example sentence for IELTSWord805."
  },
  {
    "word": "IELTSWord806",
    "phonetic": "/ieltsˈwɜːrd806/",
    "meaning": "评估 (词汇 806)",
    "root": "root-806 (词根释义)",
    "example": "This is an example sentence for IELTSWord806."
  },
  {
    "word": "IELTSWord807",
    "phonetic": "/ieltsˈwɜːrd807/",
    "meaning": "评估 (词汇 807)",
    "root": "root-807 (词根释义)",
    "example": "This is an example sentence for IELTSWord807."
  },
  {
    "word": "IELTSWord808",
    "phonetic": "/ieltsˈwɜːrd808/",
    "meaning": "文化 (词汇 808)",
    "root": "root-808 (词根释义)",
    "example": "This is an example sentence for IELTSWord808."
  },
  {
    "word": "IELTSWord809",
    "phonetic": "/ieltsˈwɜːrd809/",
    "meaning": "文化 (词汇 809)",
    "root": "root-809 (词根释义)",
    "example": "This is an example sentence for IELTSWord809."
  },
  {
    "word": "IELTSWord810",
    "phonetic": "/ieltsˈwɜːrd810/",
    "meaning": "趋势 (词汇 810)",
    "root": "root-810 (词根释义)",
    "example": "This is an example sentence for IELTSWord810."
  },
  {
    "word": "IELTSWord811",
    "phonetic": "/ieltsˈwɜːrd811/",
    "meaning": "综合 (词汇 811)",
    "root": "root-811 (词根释义)",
    "example": "This is an example sentence for IELTSWord811."
  },
  {
    "word": "IELTSWord812",
    "phonetic": "/ieltsˈwɜːrd812/",
    "meaning": "评估 (词汇 812)",
    "root": "root-812 (词根释义)",
    "example": "This is an example sentence for IELTSWord812."
  },
  {
    "word": "IELTSWord813",
    "phonetic": "/ieltsˈwɜːrd813/",
    "meaning": "全球化 (词汇 813)",
    "root": "root-813 (词根释义)",
    "example": "This is an example sentence for IELTSWord813."
  },
  {
    "word": "IELTSWord814",
    "phonetic": "/ieltsˈwɜːrd814/",
    "meaning": "全球化 (词汇 814)",
    "root": "root-814 (词根释义)",
    "example": "This is an example sentence for IELTSWord814."
  },
  {
    "word": "IELTSWord815",
    "phonetic": "/ieltsˈwɜːrd815/",
    "meaning": "综合 (词汇 815)",
    "root": "root-815 (词根释义)",
    "example": "This is an example sentence for IELTSWord815."
  },
  {
    "word": "IELTSWord816",
    "phonetic": "/ieltsˈwɜːrd816/",
    "meaning": "环境 (词汇 816)",
    "root": "root-816 (词根释义)",
    "example": "This is an example sentence for IELTSWord816."
  },
  {
    "word": "IELTSWord817",
    "phonetic": "/ieltsˈwɜːrd817/",
    "meaning": "教育 (词汇 817)",
    "root": "root-817 (词根释义)",
    "example": "This is an example sentence for IELTSWord817."
  },
  {
    "word": "IELTSWord818",
    "phonetic": "/ieltsˈwɜːrd818/",
    "meaning": "全球化 (词汇 818)",
    "root": "root-818 (词根释义)",
    "example": "This is an example sentence for IELTSWord818."
  },
  {
    "word": "IELTSWord819",
    "phonetic": "/ieltsˈwɜːrd819/",
    "meaning": "环境 (词汇 819)",
    "root": "root-819 (词根释义)",
    "example": "This is an example sentence for IELTSWord819."
  },
  {
    "word": "IELTSWord820",
    "phonetic": "/ieltsˈwɜːrd820/",
    "meaning": "趋势 (词汇 820)",
    "root": "root-820 (词根释义)",
    "example": "This is an example sentence for IELTSWord820."
  },
  {
    "word": "IELTSWord821",
    "phonetic": "/ieltsˈwɜːrd821/",
    "meaning": "综合 (词汇 821)",
    "root": "root-821 (词根释义)",
    "example": "This is an example sentence for IELTSWord821."
  },
  {
    "word": "IELTSWord822",
    "phonetic": "/ieltsˈwɜːrd822/",
    "meaning": "环境 (词汇 822)",
    "root": "root-822 (词根释义)",
    "example": "This is an example sentence for IELTSWord822."
  },
  {
    "word": "IELTSWord823",
    "phonetic": "/ieltsˈwɜːrd823/",
    "meaning": "评估 (词汇 823)",
    "root": "root-823 (词根释义)",
    "example": "This is an example sentence for IELTSWord823."
  },
  {
    "word": "IELTSWord824",
    "phonetic": "/ieltsˈwɜːrd824/",
    "meaning": "评估 (词汇 824)",
    "root": "root-824 (词根释义)",
    "example": "This is an example sentence for IELTSWord824."
  },
  {
    "word": "IELTSWord825",
    "phonetic": "/ieltsˈwɜːrd825/",
    "meaning": "文化 (词汇 825)",
    "root": "root-825 (词根释义)",
    "example": "This is an example sentence for IELTSWord825."
  },
  {
    "word": "IELTSWord826",
    "phonetic": "/ieltsˈwɜːrd826/",
    "meaning": "综合 (词汇 826)",
    "root": "root-826 (词根释义)",
    "example": "This is an example sentence for IELTSWord826."
  },
  {
    "word": "IELTSWord827",
    "phonetic": "/ieltsˈwɜːrd827/",
    "meaning": "现象 (词汇 827)",
    "root": "root-827 (词根释义)",
    "example": "This is an example sentence for IELTSWord827."
  },
  {
    "word": "IELTSWord828",
    "phonetic": "/ieltsˈwɜːrd828/",
    "meaning": "文化 (词汇 828)",
    "root": "root-828 (词根释义)",
    "example": "This is an example sentence for IELTSWord828."
  },
  {
    "word": "IELTSWord829",
    "phonetic": "/ieltsˈwɜːrd829/",
    "meaning": "综合 (词汇 829)",
    "root": "root-829 (词根释义)",
    "example": "This is an example sentence for IELTSWord829."
  },
  {
    "word": "IELTSWord830",
    "phonetic": "/ieltsˈwɜːrd830/",
    "meaning": "文化 (词汇 830)",
    "root": "root-830 (词根释义)",
    "example": "This is an example sentence for IELTSWord830."
  },
  {
    "word": "IELTSWord831",
    "phonetic": "/ieltsˈwɜːrd831/",
    "meaning": "评估 (词汇 831)",
    "root": "root-831 (词根释义)",
    "example": "This is an example sentence for IELTSWord831."
  },
  {
    "word": "IELTSWord832",
    "phonetic": "/ieltsˈwɜːrd832/",
    "meaning": "评估 (词汇 832)",
    "root": "root-832 (词根释义)",
    "example": "This is an example sentence for IELTSWord832."
  },
  {
    "word": "IELTSWord833",
    "phonetic": "/ieltsˈwɜːrd833/",
    "meaning": "现象 (词汇 833)",
    "root": "root-833 (词根释义)",
    "example": "This is an example sentence for IELTSWord833."
  },
  {
    "word": "IELTSWord834",
    "phonetic": "/ieltsˈwɜːrd834/",
    "meaning": "分析 (词汇 834)",
    "root": "root-834 (词根释义)",
    "example": "This is an example sentence for IELTSWord834."
  },
  {
    "word": "IELTSWord835",
    "phonetic": "/ieltsˈwɜːrd835/",
    "meaning": "教育 (词汇 835)",
    "root": "root-835 (词根释义)",
    "example": "This is an example sentence for IELTSWord835."
  },
  {
    "word": "IELTSWord836",
    "phonetic": "/ieltsˈwɜːrd836/",
    "meaning": "趋势 (词汇 836)",
    "root": "root-836 (词根释义)",
    "example": "This is an example sentence for IELTSWord836."
  },
  {
    "word": "IELTSWord837",
    "phonetic": "/ieltsˈwɜːrd837/",
    "meaning": "现象 (词汇 837)",
    "root": "root-837 (词根释义)",
    "example": "This is an example sentence for IELTSWord837."
  },
  {
    "word": "IELTSWord838",
    "phonetic": "/ieltsˈwɜːrd838/",
    "meaning": "评估 (词汇 838)",
    "root": "root-838 (词根释义)",
    "example": "This is an example sentence for IELTSWord838."
  },
  {
    "word": "IELTSWord839",
    "phonetic": "/ieltsˈwɜːrd839/",
    "meaning": "环境 (词汇 839)",
    "root": "root-839 (词根释义)",
    "example": "This is an example sentence for IELTSWord839."
  },
  {
    "word": "IELTSWord840",
    "phonetic": "/ieltsˈwɜːrd840/",
    "meaning": "全球化 (词汇 840)",
    "root": "root-840 (词根释义)",
    "example": "This is an example sentence for IELTSWord840."
  },
  {
    "word": "IELTSWord841",
    "phonetic": "/ieltsˈwɜːrd841/",
    "meaning": "科技 (词汇 841)",
    "root": "root-841 (词根释义)",
    "example": "This is an example sentence for IELTSWord841."
  },
  {
    "word": "IELTSWord842",
    "phonetic": "/ieltsˈwɜːrd842/",
    "meaning": "趋势 (词汇 842)",
    "root": "root-842 (词根释义)",
    "example": "This is an example sentence for IELTSWord842."
  },
  {
    "word": "IELTSWord843",
    "phonetic": "/ieltsˈwɜːrd843/",
    "meaning": "教育 (词汇 843)",
    "root": "root-843 (词根释义)",
    "example": "This is an example sentence for IELTSWord843."
  },
  {
    "word": "IELTSWord844",
    "phonetic": "/ieltsˈwɜːrd844/",
    "meaning": "全球化 (词汇 844)",
    "root": "root-844 (词根释义)",
    "example": "This is an example sentence for IELTSWord844."
  },
  {
    "word": "IELTSWord845",
    "phonetic": "/ieltsˈwɜːrd845/",
    "meaning": "文化 (词汇 845)",
    "root": "root-845 (词根释义)",
    "example": "This is an example sentence for IELTSWord845."
  },
  {
    "word": "IELTSWord846",
    "phonetic": "/ieltsˈwɜːrd846/",
    "meaning": "文化 (词汇 846)",
    "root": "root-846 (词根释义)",
    "example": "This is an example sentence for IELTSWord846."
  },
  {
    "word": "IELTSWord847",
    "phonetic": "/ieltsˈwɜːrd847/",
    "meaning": "现象 (词汇 847)",
    "root": "root-847 (词根释义)",
    "example": "This is an example sentence for IELTSWord847."
  },
  {
    "word": "IELTSWord848",
    "phonetic": "/ieltsˈwɜːrd848/",
    "meaning": "分析 (词汇 848)",
    "root": "root-848 (词根释义)",
    "example": "This is an example sentence for IELTSWord848."
  },
  {
    "word": "IELTSWord849",
    "phonetic": "/ieltsˈwɜːrd849/",
    "meaning": "分析 (词汇 849)",
    "root": "root-849 (词根释义)",
    "example": "This is an example sentence for IELTSWord849."
  },
  {
    "word": "IELTSWord850",
    "phonetic": "/ieltsˈwɜːrd850/",
    "meaning": "分析 (词汇 850)",
    "root": "root-850 (词根释义)",
    "example": "This is an example sentence for IELTSWord850."
  },
  {
    "word": "IELTSWord851",
    "phonetic": "/ieltsˈwɜːrd851/",
    "meaning": "全球化 (词汇 851)",
    "root": "root-851 (词根释义)",
    "example": "This is an example sentence for IELTSWord851."
  },
  {
    "word": "IELTSWord852",
    "phonetic": "/ieltsˈwɜːrd852/",
    "meaning": "全球化 (词汇 852)",
    "root": "root-852 (词根释义)",
    "example": "This is an example sentence for IELTSWord852."
  },
  {
    "word": "IELTSWord853",
    "phonetic": "/ieltsˈwɜːrd853/",
    "meaning": "趋势 (词汇 853)",
    "root": "root-853 (词根释义)",
    "example": "This is an example sentence for IELTSWord853."
  },
  {
    "word": "IELTSWord854",
    "phonetic": "/ieltsˈwɜːrd854/",
    "meaning": "趋势 (词汇 854)",
    "root": "root-854 (词根释义)",
    "example": "This is an example sentence for IELTSWord854."
  },
  {
    "word": "IELTSWord855",
    "phonetic": "/ieltsˈwɜːrd855/",
    "meaning": "环境 (词汇 855)",
    "root": "root-855 (词根释义)",
    "example": "This is an example sentence for IELTSWord855."
  },
  {
    "word": "IELTSWord856",
    "phonetic": "/ieltsˈwɜːrd856/",
    "meaning": "评估 (词汇 856)",
    "root": "root-856 (词根释义)",
    "example": "This is an example sentence for IELTSWord856."
  },
  {
    "word": "IELTSWord857",
    "phonetic": "/ieltsˈwɜːrd857/",
    "meaning": "全球化 (词汇 857)",
    "root": "root-857 (词根释义)",
    "example": "This is an example sentence for IELTSWord857."
  },
  {
    "word": "IELTSWord858",
    "phonetic": "/ieltsˈwɜːrd858/",
    "meaning": "教育 (词汇 858)",
    "root": "root-858 (词根释义)",
    "example": "This is an example sentence for IELTSWord858."
  },
  {
    "word": "IELTSWord859",
    "phonetic": "/ieltsˈwɜːrd859/",
    "meaning": "现象 (词汇 859)",
    "root": "root-859 (词根释义)",
    "example": "This is an example sentence for IELTSWord859."
  },
  {
    "word": "IELTSWord860",
    "phonetic": "/ieltsˈwɜːrd860/",
    "meaning": "科技 (词汇 860)",
    "root": "root-860 (词根释义)",
    "example": "This is an example sentence for IELTSWord860."
  },
  {
    "word": "IELTSWord861",
    "phonetic": "/ieltsˈwɜːrd861/",
    "meaning": "综合 (词汇 861)",
    "root": "root-861 (词根释义)",
    "example": "This is an example sentence for IELTSWord861."
  },
  {
    "word": "IELTSWord862",
    "phonetic": "/ieltsˈwɜːrd862/",
    "meaning": "教育 (词汇 862)",
    "root": "root-862 (词根释义)",
    "example": "This is an example sentence for IELTSWord862."
  },
  {
    "word": "IELTSWord863",
    "phonetic": "/ieltsˈwɜːrd863/",
    "meaning": "评估 (词汇 863)",
    "root": "root-863 (词根释义)",
    "example": "This is an example sentence for IELTSWord863."
  },
  {
    "word": "IELTSWord864",
    "phonetic": "/ieltsˈwɜːrd864/",
    "meaning": "评估 (词汇 864)",
    "root": "root-864 (词根释义)",
    "example": "This is an example sentence for IELTSWord864."
  },
  {
    "word": "IELTSWord865",
    "phonetic": "/ieltsˈwɜːrd865/",
    "meaning": "全球化 (词汇 865)",
    "root": "root-865 (词根释义)",
    "example": "This is an example sentence for IELTSWord865."
  },
  {
    "word": "IELTSWord866",
    "phonetic": "/ieltsˈwɜːrd866/",
    "meaning": "趋势 (词汇 866)",
    "root": "root-866 (词根释义)",
    "example": "This is an example sentence for IELTSWord866."
  },
  {
    "word": "IELTSWord867",
    "phonetic": "/ieltsˈwɜːrd867/",
    "meaning": "分析 (词汇 867)",
    "root": "root-867 (词根释义)",
    "example": "This is an example sentence for IELTSWord867."
  },
  {
    "word": "IELTSWord868",
    "phonetic": "/ieltsˈwɜːrd868/",
    "meaning": "全球化 (词汇 868)",
    "root": "root-868 (词根释义)",
    "example": "This is an example sentence for IELTSWord868."
  },
  {
    "word": "IELTSWord869",
    "phonetic": "/ieltsˈwɜːrd869/",
    "meaning": "全球化 (词汇 869)",
    "root": "root-869 (词根释义)",
    "example": "This is an example sentence for IELTSWord869."
  },
  {
    "word": "IELTSWord870",
    "phonetic": "/ieltsˈwɜːrd870/",
    "meaning": "教育 (词汇 870)",
    "root": "root-870 (词根释义)",
    "example": "This is an example sentence for IELTSWord870."
  },
  {
    "word": "IELTSWord871",
    "phonetic": "/ieltsˈwɜːrd871/",
    "meaning": "综合 (词汇 871)",
    "root": "root-871 (词根释义)",
    "example": "This is an example sentence for IELTSWord871."
  },
  {
    "word": "IELTSWord872",
    "phonetic": "/ieltsˈwɜːrd872/",
    "meaning": "综合 (词汇 872)",
    "root": "root-872 (词根释义)",
    "example": "This is an example sentence for IELTSWord872."
  },
  {
    "word": "IELTSWord873",
    "phonetic": "/ieltsˈwɜːrd873/",
    "meaning": "趋势 (词汇 873)",
    "root": "root-873 (词根释义)",
    "example": "This is an example sentence for IELTSWord873."
  },
  {
    "word": "IELTSWord874",
    "phonetic": "/ieltsˈwɜːrd874/",
    "meaning": "文化 (词汇 874)",
    "root": "root-874 (词根释义)",
    "example": "This is an example sentence for IELTSWord874."
  },
  {
    "word": "IELTSWord875",
    "phonetic": "/ieltsˈwɜːrd875/",
    "meaning": "环境 (词汇 875)",
    "root": "root-875 (词根释义)",
    "example": "This is an example sentence for IELTSWord875."
  },
  {
    "word": "IELTSWord876",
    "phonetic": "/ieltsˈwɜːrd876/",
    "meaning": "现象 (词汇 876)",
    "root": "root-876 (词根释义)",
    "example": "This is an example sentence for IELTSWord876."
  },
  {
    "word": "IELTSWord877",
    "phonetic": "/ieltsˈwɜːrd877/",
    "meaning": "全球化 (词汇 877)",
    "root": "root-877 (词根释义)",
    "example": "This is an example sentence for IELTSWord877."
  },
  {
    "word": "IELTSWord878",
    "phonetic": "/ieltsˈwɜːrd878/",
    "meaning": "综合 (词汇 878)",
    "root": "root-878 (词根释义)",
    "example": "This is an example sentence for IELTSWord878."
  },
  {
    "word": "IELTSWord879",
    "phonetic": "/ieltsˈwɜːrd879/",
    "meaning": "教育 (词汇 879)",
    "root": "root-879 (词根释义)",
    "example": "This is an example sentence for IELTSWord879."
  },
  {
    "word": "IELTSWord880",
    "phonetic": "/ieltsˈwɜːrd880/",
    "meaning": "评估 (词汇 880)",
    "root": "root-880 (词根释义)",
    "example": "This is an example sentence for IELTSWord880."
  },
  {
    "word": "IELTSWord881",
    "phonetic": "/ieltsˈwɜːrd881/",
    "meaning": "评估 (词汇 881)",
    "root": "root-881 (词根释义)",
    "example": "This is an example sentence for IELTSWord881."
  },
  {
    "word": "IELTSWord882",
    "phonetic": "/ieltsˈwɜːrd882/",
    "meaning": "现象 (词汇 882)",
    "root": "root-882 (词根释义)",
    "example": "This is an example sentence for IELTSWord882."
  },
  {
    "word": "IELTSWord883",
    "phonetic": "/ieltsˈwɜːrd883/",
    "meaning": "科技 (词汇 883)",
    "root": "root-883 (词根释义)",
    "example": "This is an example sentence for IELTSWord883."
  },
  {
    "word": "IELTSWord884",
    "phonetic": "/ieltsˈwɜːrd884/",
    "meaning": "评估 (词汇 884)",
    "root": "root-884 (词根释义)",
    "example": "This is an example sentence for IELTSWord884."
  },
  {
    "word": "IELTSWord885",
    "phonetic": "/ieltsˈwɜːrd885/",
    "meaning": "环境 (词汇 885)",
    "root": "root-885 (词根释义)",
    "example": "This is an example sentence for IELTSWord885."
  },
  {
    "word": "IELTSWord886",
    "phonetic": "/ieltsˈwɜːrd886/",
    "meaning": "环境 (词汇 886)",
    "root": "root-886 (词根释义)",
    "example": "This is an example sentence for IELTSWord886."
  },
  {
    "word": "IELTSWord887",
    "phonetic": "/ieltsˈwɜːrd887/",
    "meaning": "趋势 (词汇 887)",
    "root": "root-887 (词根释义)",
    "example": "This is an example sentence for IELTSWord887."
  },
  {
    "word": "IELTSWord888",
    "phonetic": "/ieltsˈwɜːrd888/",
    "meaning": "评估 (词汇 888)",
    "root": "root-888 (词根释义)",
    "example": "This is an example sentence for IELTSWord888."
  },
  {
    "word": "IELTSWord889",
    "phonetic": "/ieltsˈwɜːrd889/",
    "meaning": "分析 (词汇 889)",
    "root": "root-889 (词根释义)",
    "example": "This is an example sentence for IELTSWord889."
  },
  {
    "word": "IELTSWord890",
    "phonetic": "/ieltsˈwɜːrd890/",
    "meaning": "文化 (词汇 890)",
    "root": "root-890 (词根释义)",
    "example": "This is an example sentence for IELTSWord890."
  },
  {
    "word": "IELTSWord891",
    "phonetic": "/ieltsˈwɜːrd891/",
    "meaning": "科技 (词汇 891)",
    "root": "root-891 (词根释义)",
    "example": "This is an example sentence for IELTSWord891."
  },
  {
    "word": "IELTSWord892",
    "phonetic": "/ieltsˈwɜːrd892/",
    "meaning": "评估 (词汇 892)",
    "root": "root-892 (词根释义)",
    "example": "This is an example sentence for IELTSWord892."
  },
  {
    "word": "IELTSWord893",
    "phonetic": "/ieltsˈwɜːrd893/",
    "meaning": "趋势 (词汇 893)",
    "root": "root-893 (词根释义)",
    "example": "This is an example sentence for IELTSWord893."
  },
  {
    "word": "IELTSWord894",
    "phonetic": "/ieltsˈwɜːrd894/",
    "meaning": "全球化 (词汇 894)",
    "root": "root-894 (词根释义)",
    "example": "This is an example sentence for IELTSWord894."
  },
  {
    "word": "IELTSWord895",
    "phonetic": "/ieltsˈwɜːrd895/",
    "meaning": "全球化 (词汇 895)",
    "root": "root-895 (词根释义)",
    "example": "This is an example sentence for IELTSWord895."
  },
  {
    "word": "IELTSWord896",
    "phonetic": "/ieltsˈwɜːrd896/",
    "meaning": "现象 (词汇 896)",
    "root": "root-896 (词根释义)",
    "example": "This is an example sentence for IELTSWord896."
  },
  {
    "word": "IELTSWord897",
    "phonetic": "/ieltsˈwɜːrd897/",
    "meaning": "趋势 (词汇 897)",
    "root": "root-897 (词根释义)",
    "example": "This is an example sentence for IELTSWord897."
  },
  {
    "word": "IELTSWord898",
    "phonetic": "/ieltsˈwɜːrd898/",
    "meaning": "分析 (词汇 898)",
    "root": "root-898 (词根释义)",
    "example": "This is an example sentence for IELTSWord898."
  },
  {
    "word": "IELTSWord899",
    "phonetic": "/ieltsˈwɜːrd899/",
    "meaning": "评估 (词汇 899)",
    "root": "root-899 (词根释义)",
    "example": "This is an example sentence for IELTSWord899."
  },
  {
    "word": "IELTSWord900",
    "phonetic": "/ieltsˈwɜːrd900/",
    "meaning": "科技 (词汇 900)",
    "root": "root-900 (词根释义)",
    "example": "This is an example sentence for IELTSWord900."
  },
  {
    "word": "IELTSWord901",
    "phonetic": "/ieltsˈwɜːrd901/",
    "meaning": "科技 (词汇 901)",
    "root": "root-901 (词根释义)",
    "example": "This is an example sentence for IELTSWord901."
  },
  {
    "word": "IELTSWord902",
    "phonetic": "/ieltsˈwɜːrd902/",
    "meaning": "科技 (词汇 902)",
    "root": "root-902 (词根释义)",
    "example": "This is an example sentence for IELTSWord902."
  },
  {
    "word": "IELTSWord903",
    "phonetic": "/ieltsˈwɜːrd903/",
    "meaning": "现象 (词汇 903)",
    "root": "root-903 (词根释义)",
    "example": "This is an example sentence for IELTSWord903."
  },
  {
    "word": "IELTSWord904",
    "phonetic": "/ieltsˈwɜːrd904/",
    "meaning": "现象 (词汇 904)",
    "root": "root-904 (词根释义)",
    "example": "This is an example sentence for IELTSWord904."
  },
  {
    "word": "IELTSWord905",
    "phonetic": "/ieltsˈwɜːrd905/",
    "meaning": "文化 (词汇 905)",
    "root": "root-905 (词根释义)",
    "example": "This is an example sentence for IELTSWord905."
  },
  {
    "word": "IELTSWord906",
    "phonetic": "/ieltsˈwɜːrd906/",
    "meaning": "文化 (词汇 906)",
    "root": "root-906 (词根释义)",
    "example": "This is an example sentence for IELTSWord906."
  },
  {
    "word": "IELTSWord907",
    "phonetic": "/ieltsˈwɜːrd907/",
    "meaning": "科技 (词汇 907)",
    "root": "root-907 (词根释义)",
    "example": "This is an example sentence for IELTSWord907."
  },
  {
    "word": "IELTSWord908",
    "phonetic": "/ieltsˈwɜːrd908/",
    "meaning": "文化 (词汇 908)",
    "root": "root-908 (词根释义)",
    "example": "This is an example sentence for IELTSWord908."
  },
  {
    "word": "IELTSWord909",
    "phonetic": "/ieltsˈwɜːrd909/",
    "meaning": "环境 (词汇 909)",
    "root": "root-909 (词根释义)",
    "example": "This is an example sentence for IELTSWord909."
  },
  {
    "word": "IELTSWord910",
    "phonetic": "/ieltsˈwɜːrd910/",
    "meaning": "评估 (词汇 910)",
    "root": "root-910 (词根释义)",
    "example": "This is an example sentence for IELTSWord910."
  },
  {
    "word": "IELTSWord911",
    "phonetic": "/ieltsˈwɜːrd911/",
    "meaning": "教育 (词汇 911)",
    "root": "root-911 (词根释义)",
    "example": "This is an example sentence for IELTSWord911."
  },
  {
    "word": "IELTSWord912",
    "phonetic": "/ieltsˈwɜːrd912/",
    "meaning": "全球化 (词汇 912)",
    "root": "root-912 (词根释义)",
    "example": "This is an example sentence for IELTSWord912."
  },
  {
    "word": "IELTSWord913",
    "phonetic": "/ieltsˈwɜːrd913/",
    "meaning": "全球化 (词汇 913)",
    "root": "root-913 (词根释义)",
    "example": "This is an example sentence for IELTSWord913."
  },
  {
    "word": "IELTSWord914",
    "phonetic": "/ieltsˈwɜːrd914/",
    "meaning": "评估 (词汇 914)",
    "root": "root-914 (词根释义)",
    "example": "This is an example sentence for IELTSWord914."
  },
  {
    "word": "IELTSWord915",
    "phonetic": "/ieltsˈwɜːrd915/",
    "meaning": "科技 (词汇 915)",
    "root": "root-915 (词根释义)",
    "example": "This is an example sentence for IELTSWord915."
  },
  {
    "word": "IELTSWord916",
    "phonetic": "/ieltsˈwɜːrd916/",
    "meaning": "科技 (词汇 916)",
    "root": "root-916 (词根释义)",
    "example": "This is an example sentence for IELTSWord916."
  },
  {
    "word": "IELTSWord917",
    "phonetic": "/ieltsˈwɜːrd917/",
    "meaning": "分析 (词汇 917)",
    "root": "root-917 (词根释义)",
    "example": "This is an example sentence for IELTSWord917."
  },
  {
    "word": "IELTSWord918",
    "phonetic": "/ieltsˈwɜːrd918/",
    "meaning": "评估 (词汇 918)",
    "root": "root-918 (词根释义)",
    "example": "This is an example sentence for IELTSWord918."
  },
  {
    "word": "IELTSWord919",
    "phonetic": "/ieltsˈwɜːrd919/",
    "meaning": "分析 (词汇 919)",
    "root": "root-919 (词根释义)",
    "example": "This is an example sentence for IELTSWord919."
  },
  {
    "word": "IELTSWord920",
    "phonetic": "/ieltsˈwɜːrd920/",
    "meaning": "评估 (词汇 920)",
    "root": "root-920 (词根释义)",
    "example": "This is an example sentence for IELTSWord920."
  },
  {
    "word": "IELTSWord921",
    "phonetic": "/ieltsˈwɜːrd921/",
    "meaning": "科技 (词汇 921)",
    "root": "root-921 (词根释义)",
    "example": "This is an example sentence for IELTSWord921."
  },
  {
    "word": "IELTSWord922",
    "phonetic": "/ieltsˈwɜːrd922/",
    "meaning": "教育 (词汇 922)",
    "root": "root-922 (词根释义)",
    "example": "This is an example sentence for IELTSWord922."
  },
  {
    "word": "IELTSWord923",
    "phonetic": "/ieltsˈwɜːrd923/",
    "meaning": "现象 (词汇 923)",
    "root": "root-923 (词根释义)",
    "example": "This is an example sentence for IELTSWord923."
  },
  {
    "word": "IELTSWord924",
    "phonetic": "/ieltsˈwɜːrd924/",
    "meaning": "教育 (词汇 924)",
    "root": "root-924 (词根释义)",
    "example": "This is an example sentence for IELTSWord924."
  },
  {
    "word": "IELTSWord925",
    "phonetic": "/ieltsˈwɜːrd925/",
    "meaning": "分析 (词汇 925)",
    "root": "root-925 (词根释义)",
    "example": "This is an example sentence for IELTSWord925."
  },
  {
    "word": "IELTSWord926",
    "phonetic": "/ieltsˈwɜːrd926/",
    "meaning": "全球化 (词汇 926)",
    "root": "root-926 (词根释义)",
    "example": "This is an example sentence for IELTSWord926."
  },
  {
    "word": "IELTSWord927",
    "phonetic": "/ieltsˈwɜːrd927/",
    "meaning": "分析 (词汇 927)",
    "root": "root-927 (词根释义)",
    "example": "This is an example sentence for IELTSWord927."
  },
  {
    "word": "IELTSWord928",
    "phonetic": "/ieltsˈwɜːrd928/",
    "meaning": "分析 (词汇 928)",
    "root": "root-928 (词根释义)",
    "example": "This is an example sentence for IELTSWord928."
  },
  {
    "word": "IELTSWord929",
    "phonetic": "/ieltsˈwɜːrd929/",
    "meaning": "现象 (词汇 929)",
    "root": "root-929 (词根释义)",
    "example": "This is an example sentence for IELTSWord929."
  },
  {
    "word": "IELTSWord930",
    "phonetic": "/ieltsˈwɜːrd930/",
    "meaning": "趋势 (词汇 930)",
    "root": "root-930 (词根释义)",
    "example": "This is an example sentence for IELTSWord930."
  },
  {
    "word": "IELTSWord931",
    "phonetic": "/ieltsˈwɜːrd931/",
    "meaning": "教育 (词汇 931)",
    "root": "root-931 (词根释义)",
    "example": "This is an example sentence for IELTSWord931."
  },
  {
    "word": "IELTSWord932",
    "phonetic": "/ieltsˈwɜːrd932/",
    "meaning": "综合 (词汇 932)",
    "root": "root-932 (词根释义)",
    "example": "This is an example sentence for IELTSWord932."
  },
  {
    "word": "IELTSWord933",
    "phonetic": "/ieltsˈwɜːrd933/",
    "meaning": "评估 (词汇 933)",
    "root": "root-933 (词根释义)",
    "example": "This is an example sentence for IELTSWord933."
  },
  {
    "word": "IELTSWord934",
    "phonetic": "/ieltsˈwɜːrd934/",
    "meaning": "文化 (词汇 934)",
    "root": "root-934 (词根释义)",
    "example": "This is an example sentence for IELTSWord934."
  },
  {
    "word": "IELTSWord935",
    "phonetic": "/ieltsˈwɜːrd935/",
    "meaning": "全球化 (词汇 935)",
    "root": "root-935 (词根释义)",
    "example": "This is an example sentence for IELTSWord935."
  },
  {
    "word": "IELTSWord936",
    "phonetic": "/ieltsˈwɜːrd936/",
    "meaning": "综合 (词汇 936)",
    "root": "root-936 (词根释义)",
    "example": "This is an example sentence for IELTSWord936."
  },
  {
    "word": "IELTSWord937",
    "phonetic": "/ieltsˈwɜːrd937/",
    "meaning": "综合 (词汇 937)",
    "root": "root-937 (词根释义)",
    "example": "This is an example sentence for IELTSWord937."
  },
  {
    "word": "IELTSWord938",
    "phonetic": "/ieltsˈwɜːrd938/",
    "meaning": "科技 (词汇 938)",
    "root": "root-938 (词根释义)",
    "example": "This is an example sentence for IELTSWord938."
  },
  {
    "word": "IELTSWord939",
    "phonetic": "/ieltsˈwɜːrd939/",
    "meaning": "分析 (词汇 939)",
    "root": "root-939 (词根释义)",
    "example": "This is an example sentence for IELTSWord939."
  },
  {
    "word": "IELTSWord940",
    "phonetic": "/ieltsˈwɜːrd940/",
    "meaning": "趋势 (词汇 940)",
    "root": "root-940 (词根释义)",
    "example": "This is an example sentence for IELTSWord940."
  },
  {
    "word": "IELTSWord941",
    "phonetic": "/ieltsˈwɜːrd941/",
    "meaning": "分析 (词汇 941)",
    "root": "root-941 (词根释义)",
    "example": "This is an example sentence for IELTSWord941."
  },
  {
    "word": "IELTSWord942",
    "phonetic": "/ieltsˈwɜːrd942/",
    "meaning": "教育 (词汇 942)",
    "root": "root-942 (词根释义)",
    "example": "This is an example sentence for IELTSWord942."
  },
  {
    "word": "IELTSWord943",
    "phonetic": "/ieltsˈwɜːrd943/",
    "meaning": "全球化 (词汇 943)",
    "root": "root-943 (词根释义)",
    "example": "This is an example sentence for IELTSWord943."
  },
  {
    "word": "IELTSWord944",
    "phonetic": "/ieltsˈwɜːrd944/",
    "meaning": "分析 (词汇 944)",
    "root": "root-944 (词根释义)",
    "example": "This is an example sentence for IELTSWord944."
  },
  {
    "word": "IELTSWord945",
    "phonetic": "/ieltsˈwɜːrd945/",
    "meaning": "综合 (词汇 945)",
    "root": "root-945 (词根释义)",
    "example": "This is an example sentence for IELTSWord945."
  },
  {
    "word": "IELTSWord946",
    "phonetic": "/ieltsˈwɜːrd946/",
    "meaning": "分析 (词汇 946)",
    "root": "root-946 (词根释义)",
    "example": "This is an example sentence for IELTSWord946."
  },
  {
    "word": "IELTSWord947",
    "phonetic": "/ieltsˈwɜːrd947/",
    "meaning": "环境 (词汇 947)",
    "root": "root-947 (词根释义)",
    "example": "This is an example sentence for IELTSWord947."
  },
  {
    "word": "IELTSWord948",
    "phonetic": "/ieltsˈwɜːrd948/",
    "meaning": "分析 (词汇 948)",
    "root": "root-948 (词根释义)",
    "example": "This is an example sentence for IELTSWord948."
  },
  {
    "word": "IELTSWord949",
    "phonetic": "/ieltsˈwɜːrd949/",
    "meaning": "分析 (词汇 949)",
    "root": "root-949 (词根释义)",
    "example": "This is an example sentence for IELTSWord949."
  },
  {
    "word": "IELTSWord950",
    "phonetic": "/ieltsˈwɜːrd950/",
    "meaning": "文化 (词汇 950)",
    "root": "root-950 (词根释义)",
    "example": "This is an example sentence for IELTSWord950."
  },
  {
    "word": "IELTSWord951",
    "phonetic": "/ieltsˈwɜːrd951/",
    "meaning": "综合 (词汇 951)",
    "root": "root-951 (词根释义)",
    "example": "This is an example sentence for IELTSWord951."
  },
  {
    "word": "IELTSWord952",
    "phonetic": "/ieltsˈwɜːrd952/",
    "meaning": "文化 (词汇 952)",
    "root": "root-952 (词根释义)",
    "example": "This is an example sentence for IELTSWord952."
  },
  {
    "word": "IELTSWord953",
    "phonetic": "/ieltsˈwɜːrd953/",
    "meaning": "综合 (词汇 953)",
    "root": "root-953 (词根释义)",
    "example": "This is an example sentence for IELTSWord953."
  },
  {
    "word": "IELTSWord954",
    "phonetic": "/ieltsˈwɜːrd954/",
    "meaning": "评估 (词汇 954)",
    "root": "root-954 (词根释义)",
    "example": "This is an example sentence for IELTSWord954."
  },
  {
    "word": "IELTSWord955",
    "phonetic": "/ieltsˈwɜːrd955/",
    "meaning": "分析 (词汇 955)",
    "root": "root-955 (词根释义)",
    "example": "This is an example sentence for IELTSWord955."
  },
  {
    "word": "IELTSWord956",
    "phonetic": "/ieltsˈwɜːrd956/",
    "meaning": "评估 (词汇 956)",
    "root": "root-956 (词根释义)",
    "example": "This is an example sentence for IELTSWord956."
  },
  {
    "word": "IELTSWord957",
    "phonetic": "/ieltsˈwɜːrd957/",
    "meaning": "全球化 (词汇 957)",
    "root": "root-957 (词根释义)",
    "example": "This is an example sentence for IELTSWord957."
  },
  {
    "word": "IELTSWord958",
    "phonetic": "/ieltsˈwɜːrd958/",
    "meaning": "教育 (词汇 958)",
    "root": "root-958 (词根释义)",
    "example": "This is an example sentence for IELTSWord958."
  },
  {
    "word": "IELTSWord959",
    "phonetic": "/ieltsˈwɜːrd959/",
    "meaning": "综合 (词汇 959)",
    "root": "root-959 (词根释义)",
    "example": "This is an example sentence for IELTSWord959."
  },
  {
    "word": "IELTSWord960",
    "phonetic": "/ieltsˈwɜːrd960/",
    "meaning": "趋势 (词汇 960)",
    "root": "root-960 (词根释义)",
    "example": "This is an example sentence for IELTSWord960."
  },
  {
    "word": "IELTSWord961",
    "phonetic": "/ieltsˈwɜːrd961/",
    "meaning": "现象 (词汇 961)",
    "root": "root-961 (词根释义)",
    "example": "This is an example sentence for IELTSWord961."
  },
  {
    "word": "IELTSWord962",
    "phonetic": "/ieltsˈwɜːrd962/",
    "meaning": "文化 (词汇 962)",
    "root": "root-962 (词根释义)",
    "example": "This is an example sentence for IELTSWord962."
  },
  {
    "word": "IELTSWord963",
    "phonetic": "/ieltsˈwɜːrd963/",
    "meaning": "现象 (词汇 963)",
    "root": "root-963 (词根释义)",
    "example": "This is an example sentence for IELTSWord963."
  },
  {
    "word": "IELTSWord964",
    "phonetic": "/ieltsˈwɜːrd964/",
    "meaning": "全球化 (词汇 964)",
    "root": "root-964 (词根释义)",
    "example": "This is an example sentence for IELTSWord964."
  },
  {
    "word": "IELTSWord965",
    "phonetic": "/ieltsˈwɜːrd965/",
    "meaning": "环境 (词汇 965)",
    "root": "root-965 (词根释义)",
    "example": "This is an example sentence for IELTSWord965."
  },
  {
    "word": "IELTSWord966",
    "phonetic": "/ieltsˈwɜːrd966/",
    "meaning": "环境 (词汇 966)",
    "root": "root-966 (词根释义)",
    "example": "This is an example sentence for IELTSWord966."
  },
  {
    "word": "IELTSWord967",
    "phonetic": "/ieltsˈwɜːrd967/",
    "meaning": "文化 (词汇 967)",
    "root": "root-967 (词根释义)",
    "example": "This is an example sentence for IELTSWord967."
  },
  {
    "word": "IELTSWord968",
    "phonetic": "/ieltsˈwɜːrd968/",
    "meaning": "评估 (词汇 968)",
    "root": "root-968 (词根释义)",
    "example": "This is an example sentence for IELTSWord968."
  },
  {
    "word": "IELTSWord969",
    "phonetic": "/ieltsˈwɜːrd969/",
    "meaning": "环境 (词汇 969)",
    "root": "root-969 (词根释义)",
    "example": "This is an example sentence for IELTSWord969."
  },
  {
    "word": "IELTSWord970",
    "phonetic": "/ieltsˈwɜːrd970/",
    "meaning": "评估 (词汇 970)",
    "root": "root-970 (词根释义)",
    "example": "This is an example sentence for IELTSWord970."
  },
  {
    "word": "IELTSWord971",
    "phonetic": "/ieltsˈwɜːrd971/",
    "meaning": "趋势 (词汇 971)",
    "root": "root-971 (词根释义)",
    "example": "This is an example sentence for IELTSWord971."
  },
  {
    "word": "IELTSWord972",
    "phonetic": "/ieltsˈwɜːrd972/",
    "meaning": "综合 (词汇 972)",
    "root": "root-972 (词根释义)",
    "example": "This is an example sentence for IELTSWord972."
  },
  {
    "word": "IELTSWord973",
    "phonetic": "/ieltsˈwɜːrd973/",
    "meaning": "文化 (词汇 973)",
    "root": "root-973 (词根释义)",
    "example": "This is an example sentence for IELTSWord973."
  },
  {
    "word": "IELTSWord974",
    "phonetic": "/ieltsˈwɜːrd974/",
    "meaning": "文化 (词汇 974)",
    "root": "root-974 (词根释义)",
    "example": "This is an example sentence for IELTSWord974."
  },
  {
    "word": "IELTSWord975",
    "phonetic": "/ieltsˈwɜːrd975/",
    "meaning": "教育 (词汇 975)",
    "root": "root-975 (词根释义)",
    "example": "This is an example sentence for IELTSWord975."
  },
  {
    "word": "IELTSWord976",
    "phonetic": "/ieltsˈwɜːrd976/",
    "meaning": "科技 (词汇 976)",
    "root": "root-976 (词根释义)",
    "example": "This is an example sentence for IELTSWord976."
  },
  {
    "word": "IELTSWord977",
    "phonetic": "/ieltsˈwɜːrd977/",
    "meaning": "文化 (词汇 977)",
    "root": "root-977 (词根释义)",
    "example": "This is an example sentence for IELTSWord977."
  },
  {
    "word": "IELTSWord978",
    "phonetic": "/ieltsˈwɜːrd978/",
    "meaning": "全球化 (词汇 978)",
    "root": "root-978 (词根释义)",
    "example": "This is an example sentence for IELTSWord978."
  },
  {
    "word": "IELTSWord979",
    "phonetic": "/ieltsˈwɜːrd979/",
    "meaning": "全球化 (词汇 979)",
    "root": "root-979 (词根释义)",
    "example": "This is an example sentence for IELTSWord979."
  },
  {
    "word": "IELTSWord980",
    "phonetic": "/ieltsˈwɜːrd980/",
    "meaning": "环境 (词汇 980)",
    "root": "root-980 (词根释义)",
    "example": "This is an example sentence for IELTSWord980."
  },
  {
    "word": "IELTSWord981",
    "phonetic": "/ieltsˈwɜːrd981/",
    "meaning": "趋势 (词汇 981)",
    "root": "root-981 (词根释义)",
    "example": "This is an example sentence for IELTSWord981."
  },
  {
    "word": "IELTSWord982",
    "phonetic": "/ieltsˈwɜːrd982/",
    "meaning": "科技 (词汇 982)",
    "root": "root-982 (词根释义)",
    "example": "This is an example sentence for IELTSWord982."
  },
  {
    "word": "IELTSWord983",
    "phonetic": "/ieltsˈwɜːrd983/",
    "meaning": "综合 (词汇 983)",
    "root": "root-983 (词根释义)",
    "example": "This is an example sentence for IELTSWord983."
  },
  {
    "word": "IELTSWord984",
    "phonetic": "/ieltsˈwɜːrd984/",
    "meaning": "评估 (词汇 984)",
    "root": "root-984 (词根释义)",
    "example": "This is an example sentence for IELTSWord984."
  },
  {
    "word": "IELTSWord985",
    "phonetic": "/ieltsˈwɜːrd985/",
    "meaning": "教育 (词汇 985)",
    "root": "root-985 (词根释义)",
    "example": "This is an example sentence for IELTSWord985."
  },
  {
    "word": "IELTSWord986",
    "phonetic": "/ieltsˈwɜːrd986/",
    "meaning": "环境 (词汇 986)",
    "root": "root-986 (词根释义)",
    "example": "This is an example sentence for IELTSWord986."
  },
  {
    "word": "IELTSWord987",
    "phonetic": "/ieltsˈwɜːrd987/",
    "meaning": "综合 (词汇 987)",
    "root": "root-987 (词根释义)",
    "example": "This is an example sentence for IELTSWord987."
  },
  {
    "word": "IELTSWord988",
    "phonetic": "/ieltsˈwɜːrd988/",
    "meaning": "综合 (词汇 988)",
    "root": "root-988 (词根释义)",
    "example": "This is an example sentence for IELTSWord988."
  },
  {
    "word": "IELTSWord989",
    "phonetic": "/ieltsˈwɜːrd989/",
    "meaning": "综合 (词汇 989)",
    "root": "root-989 (词根释义)",
    "example": "This is an example sentence for IELTSWord989."
  },
  {
    "word": "IELTSWord990",
    "phonetic": "/ieltsˈwɜːrd990/",
    "meaning": "综合 (词汇 990)",
    "root": "root-990 (词根释义)",
    "example": "This is an example sentence for IELTSWord990."
  },
  {
    "word": "IELTSWord991",
    "phonetic": "/ieltsˈwɜːrd991/",
    "meaning": "教育 (词汇 991)",
    "root": "root-991 (词根释义)",
    "example": "This is an example sentence for IELTSWord991."
  },
  {
    "word": "IELTSWord992",
    "phonetic": "/ieltsˈwɜːrd992/",
    "meaning": "现象 (词汇 992)",
    "root": "root-992 (词根释义)",
    "example": "This is an example sentence for IELTSWord992."
  },
  {
    "word": "IELTSWord993",
    "phonetic": "/ieltsˈwɜːrd993/",
    "meaning": "教育 (词汇 993)",
    "root": "root-993 (词根释义)",
    "example": "This is an example sentence for IELTSWord993."
  },
  {
    "word": "IELTSWord994",
    "phonetic": "/ieltsˈwɜːrd994/",
    "meaning": "全球化 (词汇 994)",
    "root": "root-994 (词根释义)",
    "example": "This is an example sentence for IELTSWord994."
  },
  {
    "word": "IELTSWord995",
    "phonetic": "/ieltsˈwɜːrd995/",
    "meaning": "文化 (词汇 995)",
    "root": "root-995 (词根释义)",
    "example": "This is an example sentence for IELTSWord995."
  },
  {
    "word": "IELTSWord996",
    "phonetic": "/ieltsˈwɜːrd996/",
    "meaning": "文化 (词汇 996)",
    "root": "root-996 (词根释义)",
    "example": "This is an example sentence for IELTSWord996."
  },
  {
    "word": "IELTSWord997",
    "phonetic": "/ieltsˈwɜːrd997/",
    "meaning": "环境 (词汇 997)",
    "root": "root-997 (词根释义)",
    "example": "This is an example sentence for IELTSWord997."
  },
  {
    "word": "IELTSWord998",
    "phonetic": "/ieltsˈwɜːrd998/",
    "meaning": "教育 (词汇 998)",
    "root": "root-998 (词根释义)",
    "example": "This is an example sentence for IELTSWord998."
  },
  {
    "word": "IELTSWord999",
    "phonetic": "/ieltsˈwɜːrd999/",
    "meaning": "环境 (词汇 999)",
    "root": "root-999 (词根释义)",
    "example": "This is an example sentence for IELTSWord999."
  },
  {
    "word": "IELTSWord1000",
    "phonetic": "/ieltsˈwɜːrd1000/",
    "meaning": "趋势 (词汇 1000)",
    "root": "root-1000 (词根释义)",
    "example": "This is an example sentence for IELTSWord1000."
  },
  {
    "word": "IELTSWord1001",
    "phonetic": "/ieltsˈwɜːrd1001/",
    "meaning": "现象 (词汇 1001)",
    "root": "root-1001 (词根释义)",
    "example": "This is an example sentence for IELTSWord1001."
  },
  {
    "word": "IELTSWord1002",
    "phonetic": "/ieltsˈwɜːrd1002/",
    "meaning": "文化 (词汇 1002)",
    "root": "root-1002 (词根释义)",
    "example": "This is an example sentence for IELTSWord1002."
  },
  {
    "word": "IELTSWord1003",
    "phonetic": "/ieltsˈwɜːrd1003/",
    "meaning": "环境 (词汇 1003)",
    "root": "root-1003 (词根释义)",
    "example": "This is an example sentence for IELTSWord1003."
  },
  {
    "word": "IELTSWord1004",
    "phonetic": "/ieltsˈwɜːrd1004/",
    "meaning": "综合 (词汇 1004)",
    "root": "root-1004 (词根释义)",
    "example": "This is an example sentence for IELTSWord1004."
  },
  {
    "word": "IELTSWord1005",
    "phonetic": "/ieltsˈwɜːrd1005/",
    "meaning": "教育 (词汇 1005)",
    "root": "root-1005 (词根释义)",
    "example": "This is an example sentence for IELTSWord1005."
  },
  {
    "word": "IELTSWord1006",
    "phonetic": "/ieltsˈwɜːrd1006/",
    "meaning": "教育 (词汇 1006)",
    "root": "root-1006 (词根释义)",
    "example": "This is an example sentence for IELTSWord1006."
  },
  {
    "word": "IELTSWord1007",
    "phonetic": "/ieltsˈwɜːrd1007/",
    "meaning": "趋势 (词汇 1007)",
    "root": "root-1007 (词根释义)",
    "example": "This is an example sentence for IELTSWord1007."
  },
  {
    "word": "IELTSWord1008",
    "phonetic": "/ieltsˈwɜːrd1008/",
    "meaning": "评估 (词汇 1008)",
    "root": "root-1008 (词根释义)",
    "example": "This is an example sentence for IELTSWord1008."
  },
  {
    "word": "IELTSWord1009",
    "phonetic": "/ieltsˈwɜːrd1009/",
    "meaning": "全球化 (词汇 1009)",
    "root": "root-1009 (词根释义)",
    "example": "This is an example sentence for IELTSWord1009."
  },
  {
    "word": "IELTSWord1010",
    "phonetic": "/ieltsˈwɜːrd1010/",
    "meaning": "科技 (词汇 1010)",
    "root": "root-1010 (词根释义)",
    "example": "This is an example sentence for IELTSWord1010."
  },
  {
    "word": "IELTSWord1011",
    "phonetic": "/ieltsˈwɜːrd1011/",
    "meaning": "趋势 (词汇 1011)",
    "root": "root-1011 (词根释义)",
    "example": "This is an example sentence for IELTSWord1011."
  },
  {
    "word": "IELTSWord1012",
    "phonetic": "/ieltsˈwɜːrd1012/",
    "meaning": "评估 (词汇 1012)",
    "root": "root-1012 (词根释义)",
    "example": "This is an example sentence for IELTSWord1012."
  },
  {
    "word": "IELTSWord1013",
    "phonetic": "/ieltsˈwɜːrd1013/",
    "meaning": "评估 (词汇 1013)",
    "root": "root-1013 (词根释义)",
    "example": "This is an example sentence for IELTSWord1013."
  },
  {
    "word": "IELTSWord1014",
    "phonetic": "/ieltsˈwɜːrd1014/",
    "meaning": "趋势 (词汇 1014)",
    "root": "root-1014 (词根释义)",
    "example": "This is an example sentence for IELTSWord1014."
  },
  {
    "word": "IELTSWord1015",
    "phonetic": "/ieltsˈwɜːrd1015/",
    "meaning": "环境 (词汇 1015)",
    "root": "root-1015 (词根释义)",
    "example": "This is an example sentence for IELTSWord1015."
  },
  {
    "word": "IELTSWord1016",
    "phonetic": "/ieltsˈwɜːrd1016/",
    "meaning": "分析 (词汇 1016)",
    "root": "root-1016 (词根释义)",
    "example": "This is an example sentence for IELTSWord1016."
  },
  {
    "word": "IELTSWord1017",
    "phonetic": "/ieltsˈwɜːrd1017/",
    "meaning": "综合 (词汇 1017)",
    "root": "root-1017 (词根释义)",
    "example": "This is an example sentence for IELTSWord1017."
  },
  {
    "word": "IELTSWord1018",
    "phonetic": "/ieltsˈwɜːrd1018/",
    "meaning": "科技 (词汇 1018)",
    "root": "root-1018 (词根释义)",
    "example": "This is an example sentence for IELTSWord1018."
  },
  {
    "word": "IELTSWord1019",
    "phonetic": "/ieltsˈwɜːrd1019/",
    "meaning": "综合 (词汇 1019)",
    "root": "root-1019 (词根释义)",
    "example": "This is an example sentence for IELTSWord1019."
  },
  {
    "word": "IELTSWord1020",
    "phonetic": "/ieltsˈwɜːrd1020/",
    "meaning": "教育 (词汇 1020)",
    "root": "root-1020 (词根释义)",
    "example": "This is an example sentence for IELTSWord1020."
  },
  {
    "word": "IELTSWord1021",
    "phonetic": "/ieltsˈwɜːrd1021/",
    "meaning": "教育 (词汇 1021)",
    "root": "root-1021 (词根释义)",
    "example": "This is an example sentence for IELTSWord1021."
  },
  {
    "word": "IELTSWord1022",
    "phonetic": "/ieltsˈwɜːrd1022/",
    "meaning": "综合 (词汇 1022)",
    "root": "root-1022 (词根释义)",
    "example": "This is an example sentence for IELTSWord1022."
  },
  {
    "word": "IELTSWord1023",
    "phonetic": "/ieltsˈwɜːrd1023/",
    "meaning": "现象 (词汇 1023)",
    "root": "root-1023 (词根释义)",
    "example": "This is an example sentence for IELTSWord1023."
  },
  {
    "word": "IELTSWord1024",
    "phonetic": "/ieltsˈwɜːrd1024/",
    "meaning": "科技 (词汇 1024)",
    "root": "root-1024 (词根释义)",
    "example": "This is an example sentence for IELTSWord1024."
  },
  {
    "word": "IELTSWord1025",
    "phonetic": "/ieltsˈwɜːrd1025/",
    "meaning": "教育 (词汇 1025)",
    "root": "root-1025 (词根释义)",
    "example": "This is an example sentence for IELTSWord1025."
  },
  {
    "word": "IELTSWord1026",
    "phonetic": "/ieltsˈwɜːrd1026/",
    "meaning": "全球化 (词汇 1026)",
    "root": "root-1026 (词根释义)",
    "example": "This is an example sentence for IELTSWord1026."
  },
  {
    "word": "IELTSWord1027",
    "phonetic": "/ieltsˈwɜːrd1027/",
    "meaning": "分析 (词汇 1027)",
    "root": "root-1027 (词根释义)",
    "example": "This is an example sentence for IELTSWord1027."
  },
  {
    "word": "IELTSWord1028",
    "phonetic": "/ieltsˈwɜːrd1028/",
    "meaning": "文化 (词汇 1028)",
    "root": "root-1028 (词根释义)",
    "example": "This is an example sentence for IELTSWord1028."
  },
  {
    "word": "IELTSWord1029",
    "phonetic": "/ieltsˈwɜːrd1029/",
    "meaning": "现象 (词汇 1029)",
    "root": "root-1029 (词根释义)",
    "example": "This is an example sentence for IELTSWord1029."
  },
  {
    "word": "IELTSWord1030",
    "phonetic": "/ieltsˈwɜːrd1030/",
    "meaning": "综合 (词汇 1030)",
    "root": "root-1030 (词根释义)",
    "example": "This is an example sentence for IELTSWord1030."
  },
  {
    "word": "IELTSWord1031",
    "phonetic": "/ieltsˈwɜːrd1031/",
    "meaning": "趋势 (词汇 1031)",
    "root": "root-1031 (词根释义)",
    "example": "This is an example sentence for IELTSWord1031."
  },
  {
    "word": "IELTSWord1032",
    "phonetic": "/ieltsˈwɜːrd1032/",
    "meaning": "科技 (词汇 1032)",
    "root": "root-1032 (词根释义)",
    "example": "This is an example sentence for IELTSWord1032."
  },
  {
    "word": "IELTSWord1033",
    "phonetic": "/ieltsˈwɜːrd1033/",
    "meaning": "评估 (词汇 1033)",
    "root": "root-1033 (词根释义)",
    "example": "This is an example sentence for IELTSWord1033."
  },
  {
    "word": "IELTSWord1034",
    "phonetic": "/ieltsˈwɜːrd1034/",
    "meaning": "分析 (词汇 1034)",
    "root": "root-1034 (词根释义)",
    "example": "This is an example sentence for IELTSWord1034."
  },
  {
    "word": "IELTSWord1035",
    "phonetic": "/ieltsˈwɜːrd1035/",
    "meaning": "趋势 (词汇 1035)",
    "root": "root-1035 (词根释义)",
    "example": "This is an example sentence for IELTSWord1035."
  },
  {
    "word": "IELTSWord1036",
    "phonetic": "/ieltsˈwɜːrd1036/",
    "meaning": "科技 (词汇 1036)",
    "root": "root-1036 (词根释义)",
    "example": "This is an example sentence for IELTSWord1036."
  },
  {
    "word": "IELTSWord1037",
    "phonetic": "/ieltsˈwɜːrd1037/",
    "meaning": "全球化 (词汇 1037)",
    "root": "root-1037 (词根释义)",
    "example": "This is an example sentence for IELTSWord1037."
  },
  {
    "word": "IELTSWord1038",
    "phonetic": "/ieltsˈwɜːrd1038/",
    "meaning": "现象 (词汇 1038)",
    "root": "root-1038 (词根释义)",
    "example": "This is an example sentence for IELTSWord1038."
  },
  {
    "word": "IELTSWord1039",
    "phonetic": "/ieltsˈwɜːrd1039/",
    "meaning": "分析 (词汇 1039)",
    "root": "root-1039 (词根释义)",
    "example": "This is an example sentence for IELTSWord1039."
  },
  {
    "word": "IELTSWord1040",
    "phonetic": "/ieltsˈwɜːrd1040/",
    "meaning": "环境 (词汇 1040)",
    "root": "root-1040 (词根释义)",
    "example": "This is an example sentence for IELTSWord1040."
  },
  {
    "word": "IELTSWord1041",
    "phonetic": "/ieltsˈwɜːrd1041/",
    "meaning": "趋势 (词汇 1041)",
    "root": "root-1041 (词根释义)",
    "example": "This is an example sentence for IELTSWord1041."
  },
  {
    "word": "IELTSWord1042",
    "phonetic": "/ieltsˈwɜːrd1042/",
    "meaning": "环境 (词汇 1042)",
    "root": "root-1042 (词根释义)",
    "example": "This is an example sentence for IELTSWord1042."
  },
  {
    "word": "IELTSWord1043",
    "phonetic": "/ieltsˈwɜːrd1043/",
    "meaning": "环境 (词汇 1043)",
    "root": "root-1043 (词根释义)",
    "example": "This is an example sentence for IELTSWord1043."
  },
  {
    "word": "IELTSWord1044",
    "phonetic": "/ieltsˈwɜːrd1044/",
    "meaning": "科技 (词汇 1044)",
    "root": "root-1044 (词根释义)",
    "example": "This is an example sentence for IELTSWord1044."
  },
  {
    "word": "IELTSWord1045",
    "phonetic": "/ieltsˈwɜːrd1045/",
    "meaning": "分析 (词汇 1045)",
    "root": "root-1045 (词根释义)",
    "example": "This is an example sentence for IELTSWord1045."
  },
  {
    "word": "IELTSWord1046",
    "phonetic": "/ieltsˈwɜːrd1046/",
    "meaning": "文化 (词汇 1046)",
    "root": "root-1046 (词根释义)",
    "example": "This is an example sentence for IELTSWord1046."
  },
  {
    "word": "IELTSWord1047",
    "phonetic": "/ieltsˈwɜːrd1047/",
    "meaning": "分析 (词汇 1047)",
    "root": "root-1047 (词根释义)",
    "example": "This is an example sentence for IELTSWord1047."
  },
  {
    "word": "IELTSWord1048",
    "phonetic": "/ieltsˈwɜːrd1048/",
    "meaning": "评估 (词汇 1048)",
    "root": "root-1048 (词根释义)",
    "example": "This is an example sentence for IELTSWord1048."
  },
  {
    "word": "IELTSWord1049",
    "phonetic": "/ieltsˈwɜːrd1049/",
    "meaning": "综合 (词汇 1049)",
    "root": "root-1049 (词根释义)",
    "example": "This is an example sentence for IELTSWord1049."
  },
  {
    "word": "IELTSWord1050",
    "phonetic": "/ieltsˈwɜːrd1050/",
    "meaning": "趋势 (词汇 1050)",
    "root": "root-1050 (词根释义)",
    "example": "This is an example sentence for IELTSWord1050."
  },
  {
    "word": "IELTSWord1051",
    "phonetic": "/ieltsˈwɜːrd1051/",
    "meaning": "分析 (词汇 1051)",
    "root": "root-1051 (词根释义)",
    "example": "This is an example sentence for IELTSWord1051."
  },
  {
    "word": "IELTSWord1052",
    "phonetic": "/ieltsˈwɜːrd1052/",
    "meaning": "综合 (词汇 1052)",
    "root": "root-1052 (词根释义)",
    "example": "This is an example sentence for IELTSWord1052."
  },
  {
    "word": "IELTSWord1053",
    "phonetic": "/ieltsˈwɜːrd1053/",
    "meaning": "科技 (词汇 1053)",
    "root": "root-1053 (词根释义)",
    "example": "This is an example sentence for IELTSWord1053."
  },
  {
    "word": "IELTSWord1054",
    "phonetic": "/ieltsˈwɜːrd1054/",
    "meaning": "综合 (词汇 1054)",
    "root": "root-1054 (词根释义)",
    "example": "This is an example sentence for IELTSWord1054."
  },
  {
    "word": "IELTSWord1055",
    "phonetic": "/ieltsˈwɜːrd1055/",
    "meaning": "科技 (词汇 1055)",
    "root": "root-1055 (词根释义)",
    "example": "This is an example sentence for IELTSWord1055."
  },
  {
    "word": "IELTSWord1056",
    "phonetic": "/ieltsˈwɜːrd1056/",
    "meaning": "全球化 (词汇 1056)",
    "root": "root-1056 (词根释义)",
    "example": "This is an example sentence for IELTSWord1056."
  },
  {
    "word": "IELTSWord1057",
    "phonetic": "/ieltsˈwɜːrd1057/",
    "meaning": "全球化 (词汇 1057)",
    "root": "root-1057 (词根释义)",
    "example": "This is an example sentence for IELTSWord1057."
  },
  {
    "word": "IELTSWord1058",
    "phonetic": "/ieltsˈwɜːrd1058/",
    "meaning": "科技 (词汇 1058)",
    "root": "root-1058 (词根释义)",
    "example": "This is an example sentence for IELTSWord1058."
  },
  {
    "word": "IELTSWord1059",
    "phonetic": "/ieltsˈwɜːrd1059/",
    "meaning": "趋势 (词汇 1059)",
    "root": "root-1059 (词根释义)",
    "example": "This is an example sentence for IELTSWord1059."
  },
  {
    "word": "IELTSWord1060",
    "phonetic": "/ieltsˈwɜːrd1060/",
    "meaning": "分析 (词汇 1060)",
    "root": "root-1060 (词根释义)",
    "example": "This is an example sentence for IELTSWord1060."
  },
  {
    "word": "IELTSWord1061",
    "phonetic": "/ieltsˈwɜːrd1061/",
    "meaning": "趋势 (词汇 1061)",
    "root": "root-1061 (词根释义)",
    "example": "This is an example sentence for IELTSWord1061."
  },
  {
    "word": "IELTSWord1062",
    "phonetic": "/ieltsˈwɜːrd1062/",
    "meaning": "评估 (词汇 1062)",
    "root": "root-1062 (词根释义)",
    "example": "This is an example sentence for IELTSWord1062."
  },
  {
    "word": "IELTSWord1063",
    "phonetic": "/ieltsˈwɜːrd1063/",
    "meaning": "现象 (词汇 1063)",
    "root": "root-1063 (词根释义)",
    "example": "This is an example sentence for IELTSWord1063."
  },
  {
    "word": "IELTSWord1064",
    "phonetic": "/ieltsˈwɜːrd1064/",
    "meaning": "现象 (词汇 1064)",
    "root": "root-1064 (词根释义)",
    "example": "This is an example sentence for IELTSWord1064."
  },
  {
    "word": "IELTSWord1065",
    "phonetic": "/ieltsˈwɜːrd1065/",
    "meaning": "综合 (词汇 1065)",
    "root": "root-1065 (词根释义)",
    "example": "This is an example sentence for IELTSWord1065."
  },
  {
    "word": "IELTSWord1066",
    "phonetic": "/ieltsˈwɜːrd1066/",
    "meaning": "文化 (词汇 1066)",
    "root": "root-1066 (词根释义)",
    "example": "This is an example sentence for IELTSWord1066."
  },
  {
    "word": "IELTSWord1067",
    "phonetic": "/ieltsˈwɜːrd1067/",
    "meaning": "文化 (词汇 1067)",
    "root": "root-1067 (词根释义)",
    "example": "This is an example sentence for IELTSWord1067."
  },
  {
    "word": "IELTSWord1068",
    "phonetic": "/ieltsˈwɜːrd1068/",
    "meaning": "评估 (词汇 1068)",
    "root": "root-1068 (词根释义)",
    "example": "This is an example sentence for IELTSWord1068."
  },
  {
    "word": "IELTSWord1069",
    "phonetic": "/ieltsˈwɜːrd1069/",
    "meaning": "现象 (词汇 1069)",
    "root": "root-1069 (词根释义)",
    "example": "This is an example sentence for IELTSWord1069."
  },
  {
    "word": "IELTSWord1070",
    "phonetic": "/ieltsˈwɜːrd1070/",
    "meaning": "现象 (词汇 1070)",
    "root": "root-1070 (词根释义)",
    "example": "This is an example sentence for IELTSWord1070."
  },
  {
    "word": "IELTSWord1071",
    "phonetic": "/ieltsˈwɜːrd1071/",
    "meaning": "综合 (词汇 1071)",
    "root": "root-1071 (词根释义)",
    "example": "This is an example sentence for IELTSWord1071."
  },
  {
    "word": "IELTSWord1072",
    "phonetic": "/ieltsˈwɜːrd1072/",
    "meaning": "评估 (词汇 1072)",
    "root": "root-1072 (词根释义)",
    "example": "This is an example sentence for IELTSWord1072."
  },
  {
    "word": "IELTSWord1073",
    "phonetic": "/ieltsˈwɜːrd1073/",
    "meaning": "环境 (词汇 1073)",
    "root": "root-1073 (词根释义)",
    "example": "This is an example sentence for IELTSWord1073."
  },
  {
    "word": "IELTSWord1074",
    "phonetic": "/ieltsˈwɜːrd1074/",
    "meaning": "环境 (词汇 1074)",
    "root": "root-1074 (词根释义)",
    "example": "This is an example sentence for IELTSWord1074."
  },
  {
    "word": "IELTSWord1075",
    "phonetic": "/ieltsˈwɜːrd1075/",
    "meaning": "教育 (词汇 1075)",
    "root": "root-1075 (词根释义)",
    "example": "This is an example sentence for IELTSWord1075."
  },
  {
    "word": "IELTSWord1076",
    "phonetic": "/ieltsˈwɜːrd1076/",
    "meaning": "综合 (词汇 1076)",
    "root": "root-1076 (词根释义)",
    "example": "This is an example sentence for IELTSWord1076."
  },
  {
    "word": "IELTSWord1077",
    "phonetic": "/ieltsˈwɜːrd1077/",
    "meaning": "文化 (词汇 1077)",
    "root": "root-1077 (词根释义)",
    "example": "This is an example sentence for IELTSWord1077."
  },
  {
    "word": "IELTSWord1078",
    "phonetic": "/ieltsˈwɜːrd1078/",
    "meaning": "综合 (词汇 1078)",
    "root": "root-1078 (词根释义)",
    "example": "This is an example sentence for IELTSWord1078."
  },
  {
    "word": "IELTSWord1079",
    "phonetic": "/ieltsˈwɜːrd1079/",
    "meaning": "科技 (词汇 1079)",
    "root": "root-1079 (词根释义)",
    "example": "This is an example sentence for IELTSWord1079."
  },
  {
    "word": "IELTSWord1080",
    "phonetic": "/ieltsˈwɜːrd1080/",
    "meaning": "教育 (词汇 1080)",
    "root": "root-1080 (词根释义)",
    "example": "This is an example sentence for IELTSWord1080."
  },
  {
    "word": "IELTSWord1081",
    "phonetic": "/ieltsˈwɜːrd1081/",
    "meaning": "趋势 (词汇 1081)",
    "root": "root-1081 (词根释义)",
    "example": "This is an example sentence for IELTSWord1081."
  },
  {
    "word": "IELTSWord1082",
    "phonetic": "/ieltsˈwɜːrd1082/",
    "meaning": "文化 (词汇 1082)",
    "root": "root-1082 (词根释义)",
    "example": "This is an example sentence for IELTSWord1082."
  },
  {
    "word": "IELTSWord1083",
    "phonetic": "/ieltsˈwɜːrd1083/",
    "meaning": "分析 (词汇 1083)",
    "root": "root-1083 (词根释义)",
    "example": "This is an example sentence for IELTSWord1083."
  },
  {
    "word": "IELTSWord1084",
    "phonetic": "/ieltsˈwɜːrd1084/",
    "meaning": "分析 (词汇 1084)",
    "root": "root-1084 (词根释义)",
    "example": "This is an example sentence for IELTSWord1084."
  },
  {
    "word": "IELTSWord1085",
    "phonetic": "/ieltsˈwɜːrd1085/",
    "meaning": "科技 (词汇 1085)",
    "root": "root-1085 (词根释义)",
    "example": "This is an example sentence for IELTSWord1085."
  },
  {
    "word": "IELTSWord1086",
    "phonetic": "/ieltsˈwɜːrd1086/",
    "meaning": "环境 (词汇 1086)",
    "root": "root-1086 (词根释义)",
    "example": "This is an example sentence for IELTSWord1086."
  },
  {
    "word": "IELTSWord1087",
    "phonetic": "/ieltsˈwɜːrd1087/",
    "meaning": "科技 (词汇 1087)",
    "root": "root-1087 (词根释义)",
    "example": "This is an example sentence for IELTSWord1087."
  },
  {
    "word": "IELTSWord1088",
    "phonetic": "/ieltsˈwɜːrd1088/",
    "meaning": "科技 (词汇 1088)",
    "root": "root-1088 (词根释义)",
    "example": "This is an example sentence for IELTSWord1088."
  },
  {
    "word": "IELTSWord1089",
    "phonetic": "/ieltsˈwɜːrd1089/",
    "meaning": "趋势 (词汇 1089)",
    "root": "root-1089 (词根释义)",
    "example": "This is an example sentence for IELTSWord1089."
  },
  {
    "word": "IELTSWord1090",
    "phonetic": "/ieltsˈwɜːrd1090/",
    "meaning": "评估 (词汇 1090)",
    "root": "root-1090 (词根释义)",
    "example": "This is an example sentence for IELTSWord1090."
  },
  {
    "word": "IELTSWord1091",
    "phonetic": "/ieltsˈwɜːrd1091/",
    "meaning": "文化 (词汇 1091)",
    "root": "root-1091 (词根释义)",
    "example": "This is an example sentence for IELTSWord1091."
  },
  {
    "word": "IELTSWord1092",
    "phonetic": "/ieltsˈwɜːrd1092/",
    "meaning": "现象 (词汇 1092)",
    "root": "root-1092 (词根释义)",
    "example": "This is an example sentence for IELTSWord1092."
  },
  {
    "word": "IELTSWord1093",
    "phonetic": "/ieltsˈwɜːrd1093/",
    "meaning": "综合 (词汇 1093)",
    "root": "root-1093 (词根释义)",
    "example": "This is an example sentence for IELTSWord1093."
  },
  {
    "word": "IELTSWord1094",
    "phonetic": "/ieltsˈwɜːrd1094/",
    "meaning": "全球化 (词汇 1094)",
    "root": "root-1094 (词根释义)",
    "example": "This is an example sentence for IELTSWord1094."
  },
  {
    "word": "IELTSWord1095",
    "phonetic": "/ieltsˈwɜːrd1095/",
    "meaning": "综合 (词汇 1095)",
    "root": "root-1095 (词根释义)",
    "example": "This is an example sentence for IELTSWord1095."
  },
  {
    "word": "IELTSWord1096",
    "phonetic": "/ieltsˈwɜːrd1096/",
    "meaning": "文化 (词汇 1096)",
    "root": "root-1096 (词根释义)",
    "example": "This is an example sentence for IELTSWord1096."
  },
  {
    "word": "IELTSWord1097",
    "phonetic": "/ieltsˈwɜːrd1097/",
    "meaning": "综合 (词汇 1097)",
    "root": "root-1097 (词根释义)",
    "example": "This is an example sentence for IELTSWord1097."
  },
  {
    "word": "IELTSWord1098",
    "phonetic": "/ieltsˈwɜːrd1098/",
    "meaning": "全球化 (词汇 1098)",
    "root": "root-1098 (词根释义)",
    "example": "This is an example sentence for IELTSWord1098."
  },
  {
    "word": "IELTSWord1099",
    "phonetic": "/ieltsˈwɜːrd1099/",
    "meaning": "综合 (词汇 1099)",
    "root": "root-1099 (词根释义)",
    "example": "This is an example sentence for IELTSWord1099."
  },
  {
    "word": "IELTSWord1100",
    "phonetic": "/ieltsˈwɜːrd1100/",
    "meaning": "综合 (词汇 1100)",
    "root": "root-1100 (词根释义)",
    "example": "This is an example sentence for IELTSWord1100."
  },
  {
    "word": "IELTSWord1101",
    "phonetic": "/ieltsˈwɜːrd1101/",
    "meaning": "现象 (词汇 1101)",
    "root": "root-1101 (词根释义)",
    "example": "This is an example sentence for IELTSWord1101."
  },
  {
    "word": "IELTSWord1102",
    "phonetic": "/ieltsˈwɜːrd1102/",
    "meaning": "科技 (词汇 1102)",
    "root": "root-1102 (词根释义)",
    "example": "This is an example sentence for IELTSWord1102."
  },
  {
    "word": "IELTSWord1103",
    "phonetic": "/ieltsˈwɜːrd1103/",
    "meaning": "科技 (词汇 1103)",
    "root": "root-1103 (词根释义)",
    "example": "This is an example sentence for IELTSWord1103."
  },
  {
    "word": "IELTSWord1104",
    "phonetic": "/ieltsˈwɜːrd1104/",
    "meaning": "综合 (词汇 1104)",
    "root": "root-1104 (词根释义)",
    "example": "This is an example sentence for IELTSWord1104."
  },
  {
    "word": "IELTSWord1105",
    "phonetic": "/ieltsˈwɜːrd1105/",
    "meaning": "分析 (词汇 1105)",
    "root": "root-1105 (词根释义)",
    "example": "This is an example sentence for IELTSWord1105."
  },
  {
    "word": "IELTSWord1106",
    "phonetic": "/ieltsˈwɜːrd1106/",
    "meaning": "文化 (词汇 1106)",
    "root": "root-1106 (词根释义)",
    "example": "This is an example sentence for IELTSWord1106."
  },
  {
    "word": "IELTSWord1107",
    "phonetic": "/ieltsˈwɜːrd1107/",
    "meaning": "现象 (词汇 1107)",
    "root": "root-1107 (词根释义)",
    "example": "This is an example sentence for IELTSWord1107."
  },
  {
    "word": "IELTSWord1108",
    "phonetic": "/ieltsˈwɜːrd1108/",
    "meaning": "全球化 (词汇 1108)",
    "root": "root-1108 (词根释义)",
    "example": "This is an example sentence for IELTSWord1108."
  },
  {
    "word": "IELTSWord1109",
    "phonetic": "/ieltsˈwɜːrd1109/",
    "meaning": "文化 (词汇 1109)",
    "root": "root-1109 (词根释义)",
    "example": "This is an example sentence for IELTSWord1109."
  },
  {
    "word": "IELTSWord1110",
    "phonetic": "/ieltsˈwɜːrd1110/",
    "meaning": "科技 (词汇 1110)",
    "root": "root-1110 (词根释义)",
    "example": "This is an example sentence for IELTSWord1110."
  },
  {
    "word": "IELTSWord1111",
    "phonetic": "/ieltsˈwɜːrd1111/",
    "meaning": "分析 (词汇 1111)",
    "root": "root-1111 (词根释义)",
    "example": "This is an example sentence for IELTSWord1111."
  },
  {
    "word": "IELTSWord1112",
    "phonetic": "/ieltsˈwɜːrd1112/",
    "meaning": "文化 (词汇 1112)",
    "root": "root-1112 (词根释义)",
    "example": "This is an example sentence for IELTSWord1112."
  },
  {
    "word": "IELTSWord1113",
    "phonetic": "/ieltsˈwɜːrd1113/",
    "meaning": "教育 (词汇 1113)",
    "root": "root-1113 (词根释义)",
    "example": "This is an example sentence for IELTSWord1113."
  },
  {
    "word": "IELTSWord1114",
    "phonetic": "/ieltsˈwɜːrd1114/",
    "meaning": "文化 (词汇 1114)",
    "root": "root-1114 (词根释义)",
    "example": "This is an example sentence for IELTSWord1114."
  },
  {
    "word": "IELTSWord1115",
    "phonetic": "/ieltsˈwɜːrd1115/",
    "meaning": "全球化 (词汇 1115)",
    "root": "root-1115 (词根释义)",
    "example": "This is an example sentence for IELTSWord1115."
  },
  {
    "word": "IELTSWord1116",
    "phonetic": "/ieltsˈwɜːrd1116/",
    "meaning": "教育 (词汇 1116)",
    "root": "root-1116 (词根释义)",
    "example": "This is an example sentence for IELTSWord1116."
  },
  {
    "word": "IELTSWord1117",
    "phonetic": "/ieltsˈwɜːrd1117/",
    "meaning": "分析 (词汇 1117)",
    "root": "root-1117 (词根释义)",
    "example": "This is an example sentence for IELTSWord1117."
  },
  {
    "word": "IELTSWord1118",
    "phonetic": "/ieltsˈwɜːrd1118/",
    "meaning": "现象 (词汇 1118)",
    "root": "root-1118 (词根释义)",
    "example": "This is an example sentence for IELTSWord1118."
  },
  {
    "word": "IELTSWord1119",
    "phonetic": "/ieltsˈwɜːrd1119/",
    "meaning": "全球化 (词汇 1119)",
    "root": "root-1119 (词根释义)",
    "example": "This is an example sentence for IELTSWord1119."
  },
  {
    "word": "IELTSWord1120",
    "phonetic": "/ieltsˈwɜːrd1120/",
    "meaning": "教育 (词汇 1120)",
    "root": "root-1120 (词根释义)",
    "example": "This is an example sentence for IELTSWord1120."
  },
  {
    "word": "IELTSWord1121",
    "phonetic": "/ieltsˈwɜːrd1121/",
    "meaning": "综合 (词汇 1121)",
    "root": "root-1121 (词根释义)",
    "example": "This is an example sentence for IELTSWord1121."
  },
  {
    "word": "IELTSWord1122",
    "phonetic": "/ieltsˈwɜːrd1122/",
    "meaning": "环境 (词汇 1122)",
    "root": "root-1122 (词根释义)",
    "example": "This is an example sentence for IELTSWord1122."
  },
  {
    "word": "IELTSWord1123",
    "phonetic": "/ieltsˈwɜːrd1123/",
    "meaning": "综合 (词汇 1123)",
    "root": "root-1123 (词根释义)",
    "example": "This is an example sentence for IELTSWord1123."
  },
  {
    "word": "IELTSWord1124",
    "phonetic": "/ieltsˈwɜːrd1124/",
    "meaning": "教育 (词汇 1124)",
    "root": "root-1124 (词根释义)",
    "example": "This is an example sentence for IELTSWord1124."
  },
  {
    "word": "IELTSWord1125",
    "phonetic": "/ieltsˈwɜːrd1125/",
    "meaning": "分析 (词汇 1125)",
    "root": "root-1125 (词根释义)",
    "example": "This is an example sentence for IELTSWord1125."
  },
  {
    "word": "IELTSWord1126",
    "phonetic": "/ieltsˈwɜːrd1126/",
    "meaning": "分析 (词汇 1126)",
    "root": "root-1126 (词根释义)",
    "example": "This is an example sentence for IELTSWord1126."
  },
  {
    "word": "IELTSWord1127",
    "phonetic": "/ieltsˈwɜːrd1127/",
    "meaning": "趋势 (词汇 1127)",
    "root": "root-1127 (词根释义)",
    "example": "This is an example sentence for IELTSWord1127."
  },
  {
    "word": "IELTSWord1128",
    "phonetic": "/ieltsˈwɜːrd1128/",
    "meaning": "现象 (词汇 1128)",
    "root": "root-1128 (词根释义)",
    "example": "This is an example sentence for IELTSWord1128."
  },
  {
    "word": "IELTSWord1129",
    "phonetic": "/ieltsˈwɜːrd1129/",
    "meaning": "科技 (词汇 1129)",
    "root": "root-1129 (词根释义)",
    "example": "This is an example sentence for IELTSWord1129."
  },
  {
    "word": "IELTSWord1130",
    "phonetic": "/ieltsˈwɜːrd1130/",
    "meaning": "全球化 (词汇 1130)",
    "root": "root-1130 (词根释义)",
    "example": "This is an example sentence for IELTSWord1130."
  },
  {
    "word": "IELTSWord1131",
    "phonetic": "/ieltsˈwɜːrd1131/",
    "meaning": "全球化 (词汇 1131)",
    "root": "root-1131 (词根释义)",
    "example": "This is an example sentence for IELTSWord1131."
  },
  {
    "word": "IELTSWord1132",
    "phonetic": "/ieltsˈwɜːrd1132/",
    "meaning": "科技 (词汇 1132)",
    "root": "root-1132 (词根释义)",
    "example": "This is an example sentence for IELTSWord1132."
  },
  {
    "word": "IELTSWord1133",
    "phonetic": "/ieltsˈwɜːrd1133/",
    "meaning": "现象 (词汇 1133)",
    "root": "root-1133 (词根释义)",
    "example": "This is an example sentence for IELTSWord1133."
  },
  {
    "word": "IELTSWord1134",
    "phonetic": "/ieltsˈwɜːrd1134/",
    "meaning": "科技 (词汇 1134)",
    "root": "root-1134 (词根释义)",
    "example": "This is an example sentence for IELTSWord1134."
  },
  {
    "word": "IELTSWord1135",
    "phonetic": "/ieltsˈwɜːrd1135/",
    "meaning": "分析 (词汇 1135)",
    "root": "root-1135 (词根释义)",
    "example": "This is an example sentence for IELTSWord1135."
  },
  {
    "word": "IELTSWord1136",
    "phonetic": "/ieltsˈwɜːrd1136/",
    "meaning": "教育 (词汇 1136)",
    "root": "root-1136 (词根释义)",
    "example": "This is an example sentence for IELTSWord1136."
  },
  {
    "word": "IELTSWord1137",
    "phonetic": "/ieltsˈwɜːrd1137/",
    "meaning": "全球化 (词汇 1137)",
    "root": "root-1137 (词根释义)",
    "example": "This is an example sentence for IELTSWord1137."
  },
  {
    "word": "IELTSWord1138",
    "phonetic": "/ieltsˈwɜːrd1138/",
    "meaning": "环境 (词汇 1138)",
    "root": "root-1138 (词根释义)",
    "example": "This is an example sentence for IELTSWord1138."
  },
  {
    "word": "IELTSWord1139",
    "phonetic": "/ieltsˈwɜːrd1139/",
    "meaning": "评估 (词汇 1139)",
    "root": "root-1139 (词根释义)",
    "example": "This is an example sentence for IELTSWord1139."
  },
  {
    "word": "IELTSWord1140",
    "phonetic": "/ieltsˈwɜːrd1140/",
    "meaning": "综合 (词汇 1140)",
    "root": "root-1140 (词根释义)",
    "example": "This is an example sentence for IELTSWord1140."
  },
  {
    "word": "IELTSWord1141",
    "phonetic": "/ieltsˈwɜːrd1141/",
    "meaning": "现象 (词汇 1141)",
    "root": "root-1141 (词根释义)",
    "example": "This is an example sentence for IELTSWord1141."
  },
  {
    "word": "IELTSWord1142",
    "phonetic": "/ieltsˈwɜːrd1142/",
    "meaning": "科技 (词汇 1142)",
    "root": "root-1142 (词根释义)",
    "example": "This is an example sentence for IELTSWord1142."
  },
  {
    "word": "IELTSWord1143",
    "phonetic": "/ieltsˈwɜːrd1143/",
    "meaning": "科技 (词汇 1143)",
    "root": "root-1143 (词根释义)",
    "example": "This is an example sentence for IELTSWord1143."
  },
  {
    "word": "IELTSWord1144",
    "phonetic": "/ieltsˈwɜːrd1144/",
    "meaning": "科技 (词汇 1144)",
    "root": "root-1144 (词根释义)",
    "example": "This is an example sentence for IELTSWord1144."
  },
  {
    "word": "IELTSWord1145",
    "phonetic": "/ieltsˈwɜːrd1145/",
    "meaning": "趋势 (词汇 1145)",
    "root": "root-1145 (词根释义)",
    "example": "This is an example sentence for IELTSWord1145."
  },
  {
    "word": "IELTSWord1146",
    "phonetic": "/ieltsˈwɜːrd1146/",
    "meaning": "分析 (词汇 1146)",
    "root": "root-1146 (词根释义)",
    "example": "This is an example sentence for IELTSWord1146."
  },
  {
    "word": "IELTSWord1147",
    "phonetic": "/ieltsˈwɜːrd1147/",
    "meaning": "现象 (词汇 1147)",
    "root": "root-1147 (词根释义)",
    "example": "This is an example sentence for IELTSWord1147."
  },
  {
    "word": "IELTSWord1148",
    "phonetic": "/ieltsˈwɜːrd1148/",
    "meaning": "文化 (词汇 1148)",
    "root": "root-1148 (词根释义)",
    "example": "This is an example sentence for IELTSWord1148."
  },
  {
    "word": "IELTSWord1149",
    "phonetic": "/ieltsˈwɜːrd1149/",
    "meaning": "环境 (词汇 1149)",
    "root": "root-1149 (词根释义)",
    "example": "This is an example sentence for IELTSWord1149."
  },
  {
    "word": "IELTSWord1150",
    "phonetic": "/ieltsˈwɜːrd1150/",
    "meaning": "教育 (词汇 1150)",
    "root": "root-1150 (词根释义)",
    "example": "This is an example sentence for IELTSWord1150."
  },
  {
    "word": "IELTSWord1151",
    "phonetic": "/ieltsˈwɜːrd1151/",
    "meaning": "现象 (词汇 1151)",
    "root": "root-1151 (词根释义)",
    "example": "This is an example sentence for IELTSWord1151."
  },
  {
    "word": "IELTSWord1152",
    "phonetic": "/ieltsˈwɜːrd1152/",
    "meaning": "文化 (词汇 1152)",
    "root": "root-1152 (词根释义)",
    "example": "This is an example sentence for IELTSWord1152."
  },
  {
    "word": "IELTSWord1153",
    "phonetic": "/ieltsˈwɜːrd1153/",
    "meaning": "全球化 (词汇 1153)",
    "root": "root-1153 (词根释义)",
    "example": "This is an example sentence for IELTSWord1153."
  },
  {
    "word": "IELTSWord1154",
    "phonetic": "/ieltsˈwɜːrd1154/",
    "meaning": "教育 (词汇 1154)",
    "root": "root-1154 (词根释义)",
    "example": "This is an example sentence for IELTSWord1154."
  },
  {
    "word": "IELTSWord1155",
    "phonetic": "/ieltsˈwɜːrd1155/",
    "meaning": "现象 (词汇 1155)",
    "root": "root-1155 (词根释义)",
    "example": "This is an example sentence for IELTSWord1155."
  },
  {
    "word": "IELTSWord1156",
    "phonetic": "/ieltsˈwɜːrd1156/",
    "meaning": "文化 (词汇 1156)",
    "root": "root-1156 (词根释义)",
    "example": "This is an example sentence for IELTSWord1156."
  },
  {
    "word": "IELTSWord1157",
    "phonetic": "/ieltsˈwɜːrd1157/",
    "meaning": "现象 (词汇 1157)",
    "root": "root-1157 (词根释义)",
    "example": "This is an example sentence for IELTSWord1157."
  },
  {
    "word": "IELTSWord1158",
    "phonetic": "/ieltsˈwɜːrd1158/",
    "meaning": "分析 (词汇 1158)",
    "root": "root-1158 (词根释义)",
    "example": "This is an example sentence for IELTSWord1158."
  },
  {
    "word": "IELTSWord1159",
    "phonetic": "/ieltsˈwɜːrd1159/",
    "meaning": "教育 (词汇 1159)",
    "root": "root-1159 (词根释义)",
    "example": "This is an example sentence for IELTSWord1159."
  },
  {
    "word": "IELTSWord1160",
    "phonetic": "/ieltsˈwɜːrd1160/",
    "meaning": "现象 (词汇 1160)",
    "root": "root-1160 (词根释义)",
    "example": "This is an example sentence for IELTSWord1160."
  },
  {
    "word": "IELTSWord1161",
    "phonetic": "/ieltsˈwɜːrd1161/",
    "meaning": "环境 (词汇 1161)",
    "root": "root-1161 (词根释义)",
    "example": "This is an example sentence for IELTSWord1161."
  },
  {
    "word": "IELTSWord1162",
    "phonetic": "/ieltsˈwɜːrd1162/",
    "meaning": "综合 (词汇 1162)",
    "root": "root-1162 (词根释义)",
    "example": "This is an example sentence for IELTSWord1162."
  },
  {
    "word": "IELTSWord1163",
    "phonetic": "/ieltsˈwɜːrd1163/",
    "meaning": "趋势 (词汇 1163)",
    "root": "root-1163 (词根释义)",
    "example": "This is an example sentence for IELTSWord1163."
  },
  {
    "word": "IELTSWord1164",
    "phonetic": "/ieltsˈwɜːrd1164/",
    "meaning": "教育 (词汇 1164)",
    "root": "root-1164 (词根释义)",
    "example": "This is an example sentence for IELTSWord1164."
  },
  {
    "word": "IELTSWord1165",
    "phonetic": "/ieltsˈwɜːrd1165/",
    "meaning": "分析 (词汇 1165)",
    "root": "root-1165 (词根释义)",
    "example": "This is an example sentence for IELTSWord1165."
  },
  {
    "word": "IELTSWord1166",
    "phonetic": "/ieltsˈwɜːrd1166/",
    "meaning": "综合 (词汇 1166)",
    "root": "root-1166 (词根释义)",
    "example": "This is an example sentence for IELTSWord1166."
  },
  {
    "word": "IELTSWord1167",
    "phonetic": "/ieltsˈwɜːrd1167/",
    "meaning": "分析 (词汇 1167)",
    "root": "root-1167 (词根释义)",
    "example": "This is an example sentence for IELTSWord1167."
  },
  {
    "word": "IELTSWord1168",
    "phonetic": "/ieltsˈwɜːrd1168/",
    "meaning": "环境 (词汇 1168)",
    "root": "root-1168 (词根释义)",
    "example": "This is an example sentence for IELTSWord1168."
  },
  {
    "word": "IELTSWord1169",
    "phonetic": "/ieltsˈwɜːrd1169/",
    "meaning": "教育 (词汇 1169)",
    "root": "root-1169 (词根释义)",
    "example": "This is an example sentence for IELTSWord1169."
  },
  {
    "word": "IELTSWord1170",
    "phonetic": "/ieltsˈwɜːrd1170/",
    "meaning": "环境 (词汇 1170)",
    "root": "root-1170 (词根释义)",
    "example": "This is an example sentence for IELTSWord1170."
  },
  {
    "word": "IELTSWord1171",
    "phonetic": "/ieltsˈwɜːrd1171/",
    "meaning": "教育 (词汇 1171)",
    "root": "root-1171 (词根释义)",
    "example": "This is an example sentence for IELTSWord1171."
  },
  {
    "word": "IELTSWord1172",
    "phonetic": "/ieltsˈwɜːrd1172/",
    "meaning": "综合 (词汇 1172)",
    "root": "root-1172 (词根释义)",
    "example": "This is an example sentence for IELTSWord1172."
  },
  {
    "word": "IELTSWord1173",
    "phonetic": "/ieltsˈwɜːrd1173/",
    "meaning": "评估 (词汇 1173)",
    "root": "root-1173 (词根释义)",
    "example": "This is an example sentence for IELTSWord1173."
  },
  {
    "word": "IELTSWord1174",
    "phonetic": "/ieltsˈwɜːrd1174/",
    "meaning": "全球化 (词汇 1174)",
    "root": "root-1174 (词根释义)",
    "example": "This is an example sentence for IELTSWord1174."
  },
  {
    "word": "IELTSWord1175",
    "phonetic": "/ieltsˈwɜːrd1175/",
    "meaning": "教育 (词汇 1175)",
    "root": "root-1175 (词根释义)",
    "example": "This is an example sentence for IELTSWord1175."
  },
  {
    "word": "IELTSWord1176",
    "phonetic": "/ieltsˈwɜːrd1176/",
    "meaning": "评估 (词汇 1176)",
    "root": "root-1176 (词根释义)",
    "example": "This is an example sentence for IELTSWord1176."
  },
  {
    "word": "IELTSWord1177",
    "phonetic": "/ieltsˈwɜːrd1177/",
    "meaning": "分析 (词汇 1177)",
    "root": "root-1177 (词根释义)",
    "example": "This is an example sentence for IELTSWord1177."
  },
  {
    "word": "IELTSWord1178",
    "phonetic": "/ieltsˈwɜːrd1178/",
    "meaning": "分析 (词汇 1178)",
    "root": "root-1178 (词根释义)",
    "example": "This is an example sentence for IELTSWord1178."
  },
  {
    "word": "IELTSWord1179",
    "phonetic": "/ieltsˈwɜːrd1179/",
    "meaning": "分析 (词汇 1179)",
    "root": "root-1179 (词根释义)",
    "example": "This is an example sentence for IELTSWord1179."
  },
  {
    "word": "IELTSWord1180",
    "phonetic": "/ieltsˈwɜːrd1180/",
    "meaning": "评估 (词汇 1180)",
    "root": "root-1180 (词根释义)",
    "example": "This is an example sentence for IELTSWord1180."
  },
  {
    "word": "IELTSWord1181",
    "phonetic": "/ieltsˈwɜːrd1181/",
    "meaning": "趋势 (词汇 1181)",
    "root": "root-1181 (词根释义)",
    "example": "This is an example sentence for IELTSWord1181."
  },
  {
    "word": "IELTSWord1182",
    "phonetic": "/ieltsˈwɜːrd1182/",
    "meaning": "现象 (词汇 1182)",
    "root": "root-1182 (词根释义)",
    "example": "This is an example sentence for IELTSWord1182."
  },
  {
    "word": "IELTSWord1183",
    "phonetic": "/ieltsˈwɜːrd1183/",
    "meaning": "全球化 (词汇 1183)",
    "root": "root-1183 (词根释义)",
    "example": "This is an example sentence for IELTSWord1183."
  },
  {
    "word": "IELTSWord1184",
    "phonetic": "/ieltsˈwɜːrd1184/",
    "meaning": "环境 (词汇 1184)",
    "root": "root-1184 (词根释义)",
    "example": "This is an example sentence for IELTSWord1184."
  },
  {
    "word": "IELTSWord1185",
    "phonetic": "/ieltsˈwɜːrd1185/",
    "meaning": "环境 (词汇 1185)",
    "root": "root-1185 (词根释义)",
    "example": "This is an example sentence for IELTSWord1185."
  },
  {
    "word": "IELTSWord1186",
    "phonetic": "/ieltsˈwɜːrd1186/",
    "meaning": "分析 (词汇 1186)",
    "root": "root-1186 (词根释义)",
    "example": "This is an example sentence for IELTSWord1186."
  },
  {
    "word": "IELTSWord1187",
    "phonetic": "/ieltsˈwɜːrd1187/",
    "meaning": "环境 (词汇 1187)",
    "root": "root-1187 (词根释义)",
    "example": "This is an example sentence for IELTSWord1187."
  },
  {
    "word": "IELTSWord1188",
    "phonetic": "/ieltsˈwɜːrd1188/",
    "meaning": "全球化 (词汇 1188)",
    "root": "root-1188 (词根释义)",
    "example": "This is an example sentence for IELTSWord1188."
  },
  {
    "word": "IELTSWord1189",
    "phonetic": "/ieltsˈwɜːrd1189/",
    "meaning": "全球化 (词汇 1189)",
    "root": "root-1189 (词根释义)",
    "example": "This is an example sentence for IELTSWord1189."
  },
  {
    "word": "IELTSWord1190",
    "phonetic": "/ieltsˈwɜːrd1190/",
    "meaning": "教育 (词汇 1190)",
    "root": "root-1190 (词根释义)",
    "example": "This is an example sentence for IELTSWord1190."
  },
  {
    "word": "IELTSWord1191",
    "phonetic": "/ieltsˈwɜːrd1191/",
    "meaning": "评估 (词汇 1191)",
    "root": "root-1191 (词根释义)",
    "example": "This is an example sentence for IELTSWord1191."
  },
  {
    "word": "IELTSWord1192",
    "phonetic": "/ieltsˈwɜːrd1192/",
    "meaning": "综合 (词汇 1192)",
    "root": "root-1192 (词根释义)",
    "example": "This is an example sentence for IELTSWord1192."
  },
  {
    "word": "IELTSWord1193",
    "phonetic": "/ieltsˈwɜːrd1193/",
    "meaning": "科技 (词汇 1193)",
    "root": "root-1193 (词根释义)",
    "example": "This is an example sentence for IELTSWord1193."
  },
  {
    "word": "IELTSWord1194",
    "phonetic": "/ieltsˈwɜːrd1194/",
    "meaning": "全球化 (词汇 1194)",
    "root": "root-1194 (词根释义)",
    "example": "This is an example sentence for IELTSWord1194."
  },
  {
    "word": "IELTSWord1195",
    "phonetic": "/ieltsˈwɜːrd1195/",
    "meaning": "综合 (词汇 1195)",
    "root": "root-1195 (词根释义)",
    "example": "This is an example sentence for IELTSWord1195."
  },
  {
    "word": "IELTSWord1196",
    "phonetic": "/ieltsˈwɜːrd1196/",
    "meaning": "现象 (词汇 1196)",
    "root": "root-1196 (词根释义)",
    "example": "This is an example sentence for IELTSWord1196."
  },
  {
    "word": "IELTSWord1197",
    "phonetic": "/ieltsˈwɜːrd1197/",
    "meaning": "环境 (词汇 1197)",
    "root": "root-1197 (词根释义)",
    "example": "This is an example sentence for IELTSWord1197."
  },
  {
    "word": "IELTSWord1198",
    "phonetic": "/ieltsˈwɜːrd1198/",
    "meaning": "趋势 (词汇 1198)",
    "root": "root-1198 (词根释义)",
    "example": "This is an example sentence for IELTSWord1198."
  },
  {
    "word": "IELTSWord1199",
    "phonetic": "/ieltsˈwɜːrd1199/",
    "meaning": "科技 (词汇 1199)",
    "root": "root-1199 (词根释义)",
    "example": "This is an example sentence for IELTSWord1199."
  },
  {
    "word": "IELTSWord1200",
    "phonetic": "/ieltsˈwɜːrd1200/",
    "meaning": "文化 (词汇 1200)",
    "root": "root-1200 (词根释义)",
    "example": "This is an example sentence for IELTSWord1200."
  },
  {
    "word": "IELTSWord1201",
    "phonetic": "/ieltsˈwɜːrd1201/",
    "meaning": "科技 (词汇 1201)",
    "root": "root-1201 (词根释义)",
    "example": "This is an example sentence for IELTSWord1201."
  },
  {
    "word": "IELTSWord1202",
    "phonetic": "/ieltsˈwɜːrd1202/",
    "meaning": "综合 (词汇 1202)",
    "root": "root-1202 (词根释义)",
    "example": "This is an example sentence for IELTSWord1202."
  },
  {
    "word": "IELTSWord1203",
    "phonetic": "/ieltsˈwɜːrd1203/",
    "meaning": "环境 (词汇 1203)",
    "root": "root-1203 (词根释义)",
    "example": "This is an example sentence for IELTSWord1203."
  },
  {
    "word": "IELTSWord1204",
    "phonetic": "/ieltsˈwɜːrd1204/",
    "meaning": "趋势 (词汇 1204)",
    "root": "root-1204 (词根释义)",
    "example": "This is an example sentence for IELTSWord1204."
  },
  {
    "word": "IELTSWord1205",
    "phonetic": "/ieltsˈwɜːrd1205/",
    "meaning": "教育 (词汇 1205)",
    "root": "root-1205 (词根释义)",
    "example": "This is an example sentence for IELTSWord1205."
  },
  {
    "word": "IELTSWord1206",
    "phonetic": "/ieltsˈwɜːrd1206/",
    "meaning": "科技 (词汇 1206)",
    "root": "root-1206 (词根释义)",
    "example": "This is an example sentence for IELTSWord1206."
  },
  {
    "word": "IELTSWord1207",
    "phonetic": "/ieltsˈwɜːrd1207/",
    "meaning": "评估 (词汇 1207)",
    "root": "root-1207 (词根释义)",
    "example": "This is an example sentence for IELTSWord1207."
  },
  {
    "word": "IELTSWord1208",
    "phonetic": "/ieltsˈwɜːrd1208/",
    "meaning": "综合 (词汇 1208)",
    "root": "root-1208 (词根释义)",
    "example": "This is an example sentence for IELTSWord1208."
  },
  {
    "word": "IELTSWord1209",
    "phonetic": "/ieltsˈwɜːrd1209/",
    "meaning": "趋势 (词汇 1209)",
    "root": "root-1209 (词根释义)",
    "example": "This is an example sentence for IELTSWord1209."
  },
  {
    "word": "IELTSWord1210",
    "phonetic": "/ieltsˈwɜːrd1210/",
    "meaning": "环境 (词汇 1210)",
    "root": "root-1210 (词根释义)",
    "example": "This is an example sentence for IELTSWord1210."
  },
  {
    "word": "IELTSWord1211",
    "phonetic": "/ieltsˈwɜːrd1211/",
    "meaning": "趋势 (词汇 1211)",
    "root": "root-1211 (词根释义)",
    "example": "This is an example sentence for IELTSWord1211."
  },
  {
    "word": "IELTSWord1212",
    "phonetic": "/ieltsˈwɜːrd1212/",
    "meaning": "综合 (词汇 1212)",
    "root": "root-1212 (词根释义)",
    "example": "This is an example sentence for IELTSWord1212."
  },
  {
    "word": "IELTSWord1213",
    "phonetic": "/ieltsˈwɜːrd1213/",
    "meaning": "趋势 (词汇 1213)",
    "root": "root-1213 (词根释义)",
    "example": "This is an example sentence for IELTSWord1213."
  },
  {
    "word": "IELTSWord1214",
    "phonetic": "/ieltsˈwɜːrd1214/",
    "meaning": "现象 (词汇 1214)",
    "root": "root-1214 (词根释义)",
    "example": "This is an example sentence for IELTSWord1214."
  },
  {
    "word": "IELTSWord1215",
    "phonetic": "/ieltsˈwɜːrd1215/",
    "meaning": "教育 (词汇 1215)",
    "root": "root-1215 (词根释义)",
    "example": "This is an example sentence for IELTSWord1215."
  },
  {
    "word": "IELTSWord1216",
    "phonetic": "/ieltsˈwɜːrd1216/",
    "meaning": "全球化 (词汇 1216)",
    "root": "root-1216 (词根释义)",
    "example": "This is an example sentence for IELTSWord1216."
  },
  {
    "word": "IELTSWord1217",
    "phonetic": "/ieltsˈwɜːrd1217/",
    "meaning": "现象 (词汇 1217)",
    "root": "root-1217 (词根释义)",
    "example": "This is an example sentence for IELTSWord1217."
  },
  {
    "word": "IELTSWord1218",
    "phonetic": "/ieltsˈwɜːrd1218/",
    "meaning": "趋势 (词汇 1218)",
    "root": "root-1218 (词根释义)",
    "example": "This is an example sentence for IELTSWord1218."
  },
  {
    "word": "IELTSWord1219",
    "phonetic": "/ieltsˈwɜːrd1219/",
    "meaning": "全球化 (词汇 1219)",
    "root": "root-1219 (词根释义)",
    "example": "This is an example sentence for IELTSWord1219."
  },
  {
    "word": "IELTSWord1220",
    "phonetic": "/ieltsˈwɜːrd1220/",
    "meaning": "教育 (词汇 1220)",
    "root": "root-1220 (词根释义)",
    "example": "This is an example sentence for IELTSWord1220."
  },
  {
    "word": "IELTSWord1221",
    "phonetic": "/ieltsˈwɜːrd1221/",
    "meaning": "现象 (词汇 1221)",
    "root": "root-1221 (词根释义)",
    "example": "This is an example sentence for IELTSWord1221."
  },
  {
    "word": "IELTSWord1222",
    "phonetic": "/ieltsˈwɜːrd1222/",
    "meaning": "趋势 (词汇 1222)",
    "root": "root-1222 (词根释义)",
    "example": "This is an example sentence for IELTSWord1222."
  },
  {
    "word": "IELTSWord1223",
    "phonetic": "/ieltsˈwɜːrd1223/",
    "meaning": "综合 (词汇 1223)",
    "root": "root-1223 (词根释义)",
    "example": "This is an example sentence for IELTSWord1223."
  },
  {
    "word": "IELTSWord1224",
    "phonetic": "/ieltsˈwɜːrd1224/",
    "meaning": "环境 (词汇 1224)",
    "root": "root-1224 (词根释义)",
    "example": "This is an example sentence for IELTSWord1224."
  },
  {
    "word": "IELTSWord1225",
    "phonetic": "/ieltsˈwɜːrd1225/",
    "meaning": "全球化 (词汇 1225)",
    "root": "root-1225 (词根释义)",
    "example": "This is an example sentence for IELTSWord1225."
  },
  {
    "word": "IELTSWord1226",
    "phonetic": "/ieltsˈwɜːrd1226/",
    "meaning": "全球化 (词汇 1226)",
    "root": "root-1226 (词根释义)",
    "example": "This is an example sentence for IELTSWord1226."
  },
  {
    "word": "IELTSWord1227",
    "phonetic": "/ieltsˈwɜːrd1227/",
    "meaning": "科技 (词汇 1227)",
    "root": "root-1227 (词根释义)",
    "example": "This is an example sentence for IELTSWord1227."
  },
  {
    "word": "IELTSWord1228",
    "phonetic": "/ieltsˈwɜːrd1228/",
    "meaning": "科技 (词汇 1228)",
    "root": "root-1228 (词根释义)",
    "example": "This is an example sentence for IELTSWord1228."
  },
  {
    "word": "IELTSWord1229",
    "phonetic": "/ieltsˈwɜːrd1229/",
    "meaning": "评估 (词汇 1229)",
    "root": "root-1229 (词根释义)",
    "example": "This is an example sentence for IELTSWord1229."
  },
  {
    "word": "IELTSWord1230",
    "phonetic": "/ieltsˈwɜːrd1230/",
    "meaning": "全球化 (词汇 1230)",
    "root": "root-1230 (词根释义)",
    "example": "This is an example sentence for IELTSWord1230."
  },
  {
    "word": "IELTSWord1231",
    "phonetic": "/ieltsˈwɜːrd1231/",
    "meaning": "评估 (词汇 1231)",
    "root": "root-1231 (词根释义)",
    "example": "This is an example sentence for IELTSWord1231."
  },
  {
    "word": "IELTSWord1232",
    "phonetic": "/ieltsˈwɜːrd1232/",
    "meaning": "趋势 (词汇 1232)",
    "root": "root-1232 (词根释义)",
    "example": "This is an example sentence for IELTSWord1232."
  },
  {
    "word": "IELTSWord1233",
    "phonetic": "/ieltsˈwɜːrd1233/",
    "meaning": "分析 (词汇 1233)",
    "root": "root-1233 (词根释义)",
    "example": "This is an example sentence for IELTSWord1233."
  },
  {
    "word": "IELTSWord1234",
    "phonetic": "/ieltsˈwɜːrd1234/",
    "meaning": "趋势 (词汇 1234)",
    "root": "root-1234 (词根释义)",
    "example": "This is an example sentence for IELTSWord1234."
  },
  {
    "word": "IELTSWord1235",
    "phonetic": "/ieltsˈwɜːrd1235/",
    "meaning": "环境 (词汇 1235)",
    "root": "root-1235 (词根释义)",
    "example": "This is an example sentence for IELTSWord1235."
  },
  {
    "word": "IELTSWord1236",
    "phonetic": "/ieltsˈwɜːrd1236/",
    "meaning": "综合 (词汇 1236)",
    "root": "root-1236 (词根释义)",
    "example": "This is an example sentence for IELTSWord1236."
  },
  {
    "word": "IELTSWord1237",
    "phonetic": "/ieltsˈwɜːrd1237/",
    "meaning": "综合 (词汇 1237)",
    "root": "root-1237 (词根释义)",
    "example": "This is an example sentence for IELTSWord1237."
  },
  {
    "word": "IELTSWord1238",
    "phonetic": "/ieltsˈwɜːrd1238/",
    "meaning": "现象 (词汇 1238)",
    "root": "root-1238 (词根释义)",
    "example": "This is an example sentence for IELTSWord1238."
  },
  {
    "word": "IELTSWord1239",
    "phonetic": "/ieltsˈwɜːrd1239/",
    "meaning": "文化 (词汇 1239)",
    "root": "root-1239 (词根释义)",
    "example": "This is an example sentence for IELTSWord1239."
  },
  {
    "word": "IELTSWord1240",
    "phonetic": "/ieltsˈwɜːrd1240/",
    "meaning": "文化 (词汇 1240)",
    "root": "root-1240 (词根释义)",
    "example": "This is an example sentence for IELTSWord1240."
  },
  {
    "word": "IELTSWord1241",
    "phonetic": "/ieltsˈwɜːrd1241/",
    "meaning": "趋势 (词汇 1241)",
    "root": "root-1241 (词根释义)",
    "example": "This is an example sentence for IELTSWord1241."
  },
  {
    "word": "IELTSWord1242",
    "phonetic": "/ieltsˈwɜːrd1242/",
    "meaning": "分析 (词汇 1242)",
    "root": "root-1242 (词根释义)",
    "example": "This is an example sentence for IELTSWord1242."
  },
  {
    "word": "IELTSWord1243",
    "phonetic": "/ieltsˈwɜːrd1243/",
    "meaning": "趋势 (词汇 1243)",
    "root": "root-1243 (词根释义)",
    "example": "This is an example sentence for IELTSWord1243."
  },
  {
    "word": "IELTSWord1244",
    "phonetic": "/ieltsˈwɜːrd1244/",
    "meaning": "文化 (词汇 1244)",
    "root": "root-1244 (词根释义)",
    "example": "This is an example sentence for IELTSWord1244."
  },
  {
    "word": "IELTSWord1245",
    "phonetic": "/ieltsˈwɜːrd1245/",
    "meaning": "全球化 (词汇 1245)",
    "root": "root-1245 (词根释义)",
    "example": "This is an example sentence for IELTSWord1245."
  },
  {
    "word": "IELTSWord1246",
    "phonetic": "/ieltsˈwɜːrd1246/",
    "meaning": "全球化 (词汇 1246)",
    "root": "root-1246 (词根释义)",
    "example": "This is an example sentence for IELTSWord1246."
  },
  {
    "word": "IELTSWord1247",
    "phonetic": "/ieltsˈwɜːrd1247/",
    "meaning": "趋势 (词汇 1247)",
    "root": "root-1247 (词根释义)",
    "example": "This is an example sentence for IELTSWord1247."
  },
  {
    "word": "IELTSWord1248",
    "phonetic": "/ieltsˈwɜːrd1248/",
    "meaning": "环境 (词汇 1248)",
    "root": "root-1248 (词根释义)",
    "example": "This is an example sentence for IELTSWord1248."
  },
  {
    "word": "IELTSWord1249",
    "phonetic": "/ieltsˈwɜːrd1249/",
    "meaning": "文化 (词汇 1249)",
    "root": "root-1249 (词根释义)",
    "example": "This is an example sentence for IELTSWord1249."
  },
  {
    "word": "IELTSWord1250",
    "phonetic": "/ieltsˈwɜːrd1250/",
    "meaning": "综合 (词汇 1250)",
    "root": "root-1250 (词根释义)",
    "example": "This is an example sentence for IELTSWord1250."
  },
  {
    "word": "IELTSWord1251",
    "phonetic": "/ieltsˈwɜːrd1251/",
    "meaning": "评估 (词汇 1251)",
    "root": "root-1251 (词根释义)",
    "example": "This is an example sentence for IELTSWord1251."
  },
  {
    "word": "IELTSWord1252",
    "phonetic": "/ieltsˈwɜːrd1252/",
    "meaning": "趋势 (词汇 1252)",
    "root": "root-1252 (词根释义)",
    "example": "This is an example sentence for IELTSWord1252."
  },
  {
    "word": "IELTSWord1253",
    "phonetic": "/ieltsˈwɜːrd1253/",
    "meaning": "综合 (词汇 1253)",
    "root": "root-1253 (词根释义)",
    "example": "This is an example sentence for IELTSWord1253."
  },
  {
    "word": "IELTSWord1254",
    "phonetic": "/ieltsˈwɜːrd1254/",
    "meaning": "文化 (词汇 1254)",
    "root": "root-1254 (词根释义)",
    "example": "This is an example sentence for IELTSWord1254."
  },
  {
    "word": "IELTSWord1255",
    "phonetic": "/ieltsˈwɜːrd1255/",
    "meaning": "现象 (词汇 1255)",
    "root": "root-1255 (词根释义)",
    "example": "This is an example sentence for IELTSWord1255."
  },
  {
    "word": "IELTSWord1256",
    "phonetic": "/ieltsˈwɜːrd1256/",
    "meaning": "科技 (词汇 1256)",
    "root": "root-1256 (词根释义)",
    "example": "This is an example sentence for IELTSWord1256."
  },
  {
    "word": "IELTSWord1257",
    "phonetic": "/ieltsˈwɜːrd1257/",
    "meaning": "现象 (词汇 1257)",
    "root": "root-1257 (词根释义)",
    "example": "This is an example sentence for IELTSWord1257."
  },
  {
    "word": "IELTSWord1258",
    "phonetic": "/ieltsˈwɜːrd1258/",
    "meaning": "教育 (词汇 1258)",
    "root": "root-1258 (词根释义)",
    "example": "This is an example sentence for IELTSWord1258."
  },
  {
    "word": "IELTSWord1259",
    "phonetic": "/ieltsˈwɜːrd1259/",
    "meaning": "趋势 (词汇 1259)",
    "root": "root-1259 (词根释义)",
    "example": "This is an example sentence for IELTSWord1259."
  },
  {
    "word": "IELTSWord1260",
    "phonetic": "/ieltsˈwɜːrd1260/",
    "meaning": "评估 (词汇 1260)",
    "root": "root-1260 (词根释义)",
    "example": "This is an example sentence for IELTSWord1260."
  },
  {
    "word": "IELTSWord1261",
    "phonetic": "/ieltsˈwɜːrd1261/",
    "meaning": "科技 (词汇 1261)",
    "root": "root-1261 (词根释义)",
    "example": "This is an example sentence for IELTSWord1261."
  },
  {
    "word": "IELTSWord1262",
    "phonetic": "/ieltsˈwɜːrd1262/",
    "meaning": "趋势 (词汇 1262)",
    "root": "root-1262 (词根释义)",
    "example": "This is an example sentence for IELTSWord1262."
  },
  {
    "word": "IELTSWord1263",
    "phonetic": "/ieltsˈwɜːrd1263/",
    "meaning": "现象 (词汇 1263)",
    "root": "root-1263 (词根释义)",
    "example": "This is an example sentence for IELTSWord1263."
  },
  {
    "word": "IELTSWord1264",
    "phonetic": "/ieltsˈwɜːrd1264/",
    "meaning": "教育 (词汇 1264)",
    "root": "root-1264 (词根释义)",
    "example": "This is an example sentence for IELTSWord1264."
  },
  {
    "word": "IELTSWord1265",
    "phonetic": "/ieltsˈwɜːrd1265/",
    "meaning": "现象 (词汇 1265)",
    "root": "root-1265 (词根释义)",
    "example": "This is an example sentence for IELTSWord1265."
  },
  {
    "word": "IELTSWord1266",
    "phonetic": "/ieltsˈwɜːrd1266/",
    "meaning": "科技 (词汇 1266)",
    "root": "root-1266 (词根释义)",
    "example": "This is an example sentence for IELTSWord1266."
  },
  {
    "word": "IELTSWord1267",
    "phonetic": "/ieltsˈwɜːrd1267/",
    "meaning": "文化 (词汇 1267)",
    "root": "root-1267 (词根释义)",
    "example": "This is an example sentence for IELTSWord1267."
  },
  {
    "word": "IELTSWord1268",
    "phonetic": "/ieltsˈwɜːrd1268/",
    "meaning": "全球化 (词汇 1268)",
    "root": "root-1268 (词根释义)",
    "example": "This is an example sentence for IELTSWord1268."
  },
  {
    "word": "IELTSWord1269",
    "phonetic": "/ieltsˈwɜːrd1269/",
    "meaning": "科技 (词汇 1269)",
    "root": "root-1269 (词根释义)",
    "example": "This is an example sentence for IELTSWord1269."
  },
  {
    "word": "IELTSWord1270",
    "phonetic": "/ieltsˈwɜːrd1270/",
    "meaning": "现象 (词汇 1270)",
    "root": "root-1270 (词根释义)",
    "example": "This is an example sentence for IELTSWord1270."
  },
  {
    "word": "IELTSWord1271",
    "phonetic": "/ieltsˈwɜːrd1271/",
    "meaning": "综合 (词汇 1271)",
    "root": "root-1271 (词根释义)",
    "example": "This is an example sentence for IELTSWord1271."
  },
  {
    "word": "IELTSWord1272",
    "phonetic": "/ieltsˈwɜːrd1272/",
    "meaning": "综合 (词汇 1272)",
    "root": "root-1272 (词根释义)",
    "example": "This is an example sentence for IELTSWord1272."
  },
  {
    "word": "IELTSWord1273",
    "phonetic": "/ieltsˈwɜːrd1273/",
    "meaning": "综合 (词汇 1273)",
    "root": "root-1273 (词根释义)",
    "example": "This is an example sentence for IELTSWord1273."
  },
  {
    "word": "IELTSWord1274",
    "phonetic": "/ieltsˈwɜːrd1274/",
    "meaning": "文化 (词汇 1274)",
    "root": "root-1274 (词根释义)",
    "example": "This is an example sentence for IELTSWord1274."
  },
  {
    "word": "IELTSWord1275",
    "phonetic": "/ieltsˈwɜːrd1275/",
    "meaning": "分析 (词汇 1275)",
    "root": "root-1275 (词根释义)",
    "example": "This is an example sentence for IELTSWord1275."
  },
  {
    "word": "IELTSWord1276",
    "phonetic": "/ieltsˈwɜːrd1276/",
    "meaning": "全球化 (词汇 1276)",
    "root": "root-1276 (词根释义)",
    "example": "This is an example sentence for IELTSWord1276."
  },
  {
    "word": "IELTSWord1277",
    "phonetic": "/ieltsˈwɜːrd1277/",
    "meaning": "文化 (词汇 1277)",
    "root": "root-1277 (词根释义)",
    "example": "This is an example sentence for IELTSWord1277."
  },
  {
    "word": "IELTSWord1278",
    "phonetic": "/ieltsˈwɜːrd1278/",
    "meaning": "全球化 (词汇 1278)",
    "root": "root-1278 (词根释义)",
    "example": "This is an example sentence for IELTSWord1278."
  },
  {
    "word": "IELTSWord1279",
    "phonetic": "/ieltsˈwɜːrd1279/",
    "meaning": "环境 (词汇 1279)",
    "root": "root-1279 (词根释义)",
    "example": "This is an example sentence for IELTSWord1279."
  },
  {
    "word": "IELTSWord1280",
    "phonetic": "/ieltsˈwɜːrd1280/",
    "meaning": "文化 (词汇 1280)",
    "root": "root-1280 (词根释义)",
    "example": "This is an example sentence for IELTSWord1280."
  },
  {
    "word": "IELTSWord1281",
    "phonetic": "/ieltsˈwɜːrd1281/",
    "meaning": "科技 (词汇 1281)",
    "root": "root-1281 (词根释义)",
    "example": "This is an example sentence for IELTSWord1281."
  },
  {
    "word": "IELTSWord1282",
    "phonetic": "/ieltsˈwɜːrd1282/",
    "meaning": "科技 (词汇 1282)",
    "root": "root-1282 (词根释义)",
    "example": "This is an example sentence for IELTSWord1282."
  },
  {
    "word": "IELTSWord1283",
    "phonetic": "/ieltsˈwɜːrd1283/",
    "meaning": "教育 (词汇 1283)",
    "root": "root-1283 (词根释义)",
    "example": "This is an example sentence for IELTSWord1283."
  },
  {
    "word": "IELTSWord1284",
    "phonetic": "/ieltsˈwɜːrd1284/",
    "meaning": "科技 (词汇 1284)",
    "root": "root-1284 (词根释义)",
    "example": "This is an example sentence for IELTSWord1284."
  },
  {
    "word": "IELTSWord1285",
    "phonetic": "/ieltsˈwɜːrd1285/",
    "meaning": "科技 (词汇 1285)",
    "root": "root-1285 (词根释义)",
    "example": "This is an example sentence for IELTSWord1285."
  },
  {
    "word": "IELTSWord1286",
    "phonetic": "/ieltsˈwɜːrd1286/",
    "meaning": "趋势 (词汇 1286)",
    "root": "root-1286 (词根释义)",
    "example": "This is an example sentence for IELTSWord1286."
  },
  {
    "word": "IELTSWord1287",
    "phonetic": "/ieltsˈwɜːrd1287/",
    "meaning": "评估 (词汇 1287)",
    "root": "root-1287 (词根释义)",
    "example": "This is an example sentence for IELTSWord1287."
  },
  {
    "word": "IELTSWord1288",
    "phonetic": "/ieltsˈwɜːrd1288/",
    "meaning": "综合 (词汇 1288)",
    "root": "root-1288 (词根释义)",
    "example": "This is an example sentence for IELTSWord1288."
  },
  {
    "word": "IELTSWord1289",
    "phonetic": "/ieltsˈwɜːrd1289/",
    "meaning": "分析 (词汇 1289)",
    "root": "root-1289 (词根释义)",
    "example": "This is an example sentence for IELTSWord1289."
  },
  {
    "word": "IELTSWord1290",
    "phonetic": "/ieltsˈwɜːrd1290/",
    "meaning": "现象 (词汇 1290)",
    "root": "root-1290 (词根释义)",
    "example": "This is an example sentence for IELTSWord1290."
  },
  {
    "word": "IELTSWord1291",
    "phonetic": "/ieltsˈwɜːrd1291/",
    "meaning": "综合 (词汇 1291)",
    "root": "root-1291 (词根释义)",
    "example": "This is an example sentence for IELTSWord1291."
  },
  {
    "word": "IELTSWord1292",
    "phonetic": "/ieltsˈwɜːrd1292/",
    "meaning": "环境 (词汇 1292)",
    "root": "root-1292 (词根释义)",
    "example": "This is an example sentence for IELTSWord1292."
  },
  {
    "word": "IELTSWord1293",
    "phonetic": "/ieltsˈwɜːrd1293/",
    "meaning": "全球化 (词汇 1293)",
    "root": "root-1293 (词根释义)",
    "example": "This is an example sentence for IELTSWord1293."
  },
  {
    "word": "IELTSWord1294",
    "phonetic": "/ieltsˈwɜːrd1294/",
    "meaning": "科技 (词汇 1294)",
    "root": "root-1294 (词根释义)",
    "example": "This is an example sentence for IELTSWord1294."
  },
  {
    "word": "IELTSWord1295",
    "phonetic": "/ieltsˈwɜːrd1295/",
    "meaning": "综合 (词汇 1295)",
    "root": "root-1295 (词根释义)",
    "example": "This is an example sentence for IELTSWord1295."
  },
  {
    "word": "IELTSWord1296",
    "phonetic": "/ieltsˈwɜːrd1296/",
    "meaning": "现象 (词汇 1296)",
    "root": "root-1296 (词根释义)",
    "example": "This is an example sentence for IELTSWord1296."
  },
  {
    "word": "IELTSWord1297",
    "phonetic": "/ieltsˈwɜːrd1297/",
    "meaning": "全球化 (词汇 1297)",
    "root": "root-1297 (词根释义)",
    "example": "This is an example sentence for IELTSWord1297."
  },
  {
    "word": "IELTSWord1298",
    "phonetic": "/ieltsˈwɜːrd1298/",
    "meaning": "环境 (词汇 1298)",
    "root": "root-1298 (词根释义)",
    "example": "This is an example sentence for IELTSWord1298."
  },
  {
    "word": "IELTSWord1299",
    "phonetic": "/ieltsˈwɜːrd1299/",
    "meaning": "现象 (词汇 1299)",
    "root": "root-1299 (词根释义)",
    "example": "This is an example sentence for IELTSWord1299."
  },
  {
    "word": "IELTSWord1300",
    "phonetic": "/ieltsˈwɜːrd1300/",
    "meaning": "全球化 (词汇 1300)",
    "root": "root-1300 (词根释义)",
    "example": "This is an example sentence for IELTSWord1300."
  },
  {
    "word": "IELTSWord1301",
    "phonetic": "/ieltsˈwɜːrd1301/",
    "meaning": "评估 (词汇 1301)",
    "root": "root-1301 (词根释义)",
    "example": "This is an example sentence for IELTSWord1301."
  },
  {
    "word": "IELTSWord1302",
    "phonetic": "/ieltsˈwɜːrd1302/",
    "meaning": "文化 (词汇 1302)",
    "root": "root-1302 (词根释义)",
    "example": "This is an example sentence for IELTSWord1302."
  },
  {
    "word": "IELTSWord1303",
    "phonetic": "/ieltsˈwɜːrd1303/",
    "meaning": "文化 (词汇 1303)",
    "root": "root-1303 (词根释义)",
    "example": "This is an example sentence for IELTSWord1303."
  },
  {
    "word": "IELTSWord1304",
    "phonetic": "/ieltsˈwɜːrd1304/",
    "meaning": "文化 (词汇 1304)",
    "root": "root-1304 (词根释义)",
    "example": "This is an example sentence for IELTSWord1304."
  },
  {
    "word": "IELTSWord1305",
    "phonetic": "/ieltsˈwɜːrd1305/",
    "meaning": "现象 (词汇 1305)",
    "root": "root-1305 (词根释义)",
    "example": "This is an example sentence for IELTSWord1305."
  },
  {
    "word": "IELTSWord1306",
    "phonetic": "/ieltsˈwɜːrd1306/",
    "meaning": "分析 (词汇 1306)",
    "root": "root-1306 (词根释义)",
    "example": "This is an example sentence for IELTSWord1306."
  },
  {
    "word": "IELTSWord1307",
    "phonetic": "/ieltsˈwɜːrd1307/",
    "meaning": "教育 (词汇 1307)",
    "root": "root-1307 (词根释义)",
    "example": "This is an example sentence for IELTSWord1307."
  },
  {
    "word": "IELTSWord1308",
    "phonetic": "/ieltsˈwɜːrd1308/",
    "meaning": "文化 (词汇 1308)",
    "root": "root-1308 (词根释义)",
    "example": "This is an example sentence for IELTSWord1308."
  },
  {
    "word": "IELTSWord1309",
    "phonetic": "/ieltsˈwɜːrd1309/",
    "meaning": "文化 (词汇 1309)",
    "root": "root-1309 (词根释义)",
    "example": "This is an example sentence for IELTSWord1309."
  },
  {
    "word": "IELTSWord1310",
    "phonetic": "/ieltsˈwɜːrd1310/",
    "meaning": "环境 (词汇 1310)",
    "root": "root-1310 (词根释义)",
    "example": "This is an example sentence for IELTSWord1310."
  },
  {
    "word": "IELTSWord1311",
    "phonetic": "/ieltsˈwɜːrd1311/",
    "meaning": "分析 (词汇 1311)",
    "root": "root-1311 (词根释义)",
    "example": "This is an example sentence for IELTSWord1311."
  },
  {
    "word": "IELTSWord1312",
    "phonetic": "/ieltsˈwɜːrd1312/",
    "meaning": "文化 (词汇 1312)",
    "root": "root-1312 (词根释义)",
    "example": "This is an example sentence for IELTSWord1312."
  },
  {
    "word": "IELTSWord1313",
    "phonetic": "/ieltsˈwɜːrd1313/",
    "meaning": "全球化 (词汇 1313)",
    "root": "root-1313 (词根释义)",
    "example": "This is an example sentence for IELTSWord1313."
  },
  {
    "word": "IELTSWord1314",
    "phonetic": "/ieltsˈwɜːrd1314/",
    "meaning": "教育 (词汇 1314)",
    "root": "root-1314 (词根释义)",
    "example": "This is an example sentence for IELTSWord1314."
  },
  {
    "word": "IELTSWord1315",
    "phonetic": "/ieltsˈwɜːrd1315/",
    "meaning": "综合 (词汇 1315)",
    "root": "root-1315 (词根释义)",
    "example": "This is an example sentence for IELTSWord1315."
  },
  {
    "word": "IELTSWord1316",
    "phonetic": "/ieltsˈwɜːrd1316/",
    "meaning": "教育 (词汇 1316)",
    "root": "root-1316 (词根释义)",
    "example": "This is an example sentence for IELTSWord1316."
  },
  {
    "word": "IELTSWord1317",
    "phonetic": "/ieltsˈwɜːrd1317/",
    "meaning": "科技 (词汇 1317)",
    "root": "root-1317 (词根释义)",
    "example": "This is an example sentence for IELTSWord1317."
  },
  {
    "word": "IELTSWord1318",
    "phonetic": "/ieltsˈwɜːrd1318/",
    "meaning": "现象 (词汇 1318)",
    "root": "root-1318 (词根释义)",
    "example": "This is an example sentence for IELTSWord1318."
  },
  {
    "word": "IELTSWord1319",
    "phonetic": "/ieltsˈwɜːrd1319/",
    "meaning": "现象 (词汇 1319)",
    "root": "root-1319 (词根释义)",
    "example": "This is an example sentence for IELTSWord1319."
  },
  {
    "word": "IELTSWord1320",
    "phonetic": "/ieltsˈwɜːrd1320/",
    "meaning": "现象 (词汇 1320)",
    "root": "root-1320 (词根释义)",
    "example": "This is an example sentence for IELTSWord1320."
  },
  {
    "word": "IELTSWord1321",
    "phonetic": "/ieltsˈwɜːrd1321/",
    "meaning": "评估 (词汇 1321)",
    "root": "root-1321 (词根释义)",
    "example": "This is an example sentence for IELTSWord1321."
  },
  {
    "word": "IELTSWord1322",
    "phonetic": "/ieltsˈwɜːrd1322/",
    "meaning": "科技 (词汇 1322)",
    "root": "root-1322 (词根释义)",
    "example": "This is an example sentence for IELTSWord1322."
  },
  {
    "word": "IELTSWord1323",
    "phonetic": "/ieltsˈwɜːrd1323/",
    "meaning": "趋势 (词汇 1323)",
    "root": "root-1323 (词根释义)",
    "example": "This is an example sentence for IELTSWord1323."
  },
  {
    "word": "IELTSWord1324",
    "phonetic": "/ieltsˈwɜːrd1324/",
    "meaning": "全球化 (词汇 1324)",
    "root": "root-1324 (词根释义)",
    "example": "This is an example sentence for IELTSWord1324."
  },
  {
    "word": "IELTSWord1325",
    "phonetic": "/ieltsˈwɜːrd1325/",
    "meaning": "环境 (词汇 1325)",
    "root": "root-1325 (词根释义)",
    "example": "This is an example sentence for IELTSWord1325."
  },
  {
    "word": "IELTSWord1326",
    "phonetic": "/ieltsˈwɜːrd1326/",
    "meaning": "分析 (词汇 1326)",
    "root": "root-1326 (词根释义)",
    "example": "This is an example sentence for IELTSWord1326."
  },
  {
    "word": "IELTSWord1327",
    "phonetic": "/ieltsˈwɜːrd1327/",
    "meaning": "科技 (词汇 1327)",
    "root": "root-1327 (词根释义)",
    "example": "This is an example sentence for IELTSWord1327."
  },
  {
    "word": "IELTSWord1328",
    "phonetic": "/ieltsˈwɜːrd1328/",
    "meaning": "教育 (词汇 1328)",
    "root": "root-1328 (词根释义)",
    "example": "This is an example sentence for IELTSWord1328."
  },
  {
    "word": "IELTSWord1329",
    "phonetic": "/ieltsˈwɜːrd1329/",
    "meaning": "文化 (词汇 1329)",
    "root": "root-1329 (词根释义)",
    "example": "This is an example sentence for IELTSWord1329."
  },
  {
    "word": "IELTSWord1330",
    "phonetic": "/ieltsˈwɜːrd1330/",
    "meaning": "全球化 (词汇 1330)",
    "root": "root-1330 (词根释义)",
    "example": "This is an example sentence for IELTSWord1330."
  },
  {
    "word": "IELTSWord1331",
    "phonetic": "/ieltsˈwɜːrd1331/",
    "meaning": "趋势 (词汇 1331)",
    "root": "root-1331 (词根释义)",
    "example": "This is an example sentence for IELTSWord1331."
  },
  {
    "word": "IELTSWord1332",
    "phonetic": "/ieltsˈwɜːrd1332/",
    "meaning": "趋势 (词汇 1332)",
    "root": "root-1332 (词根释义)",
    "example": "This is an example sentence for IELTSWord1332."
  },
  {
    "word": "IELTSWord1333",
    "phonetic": "/ieltsˈwɜːrd1333/",
    "meaning": "文化 (词汇 1333)",
    "root": "root-1333 (词根释义)",
    "example": "This is an example sentence for IELTSWord1333."
  },
  {
    "word": "IELTSWord1334",
    "phonetic": "/ieltsˈwɜːrd1334/",
    "meaning": "现象 (词汇 1334)",
    "root": "root-1334 (词根释义)",
    "example": "This is an example sentence for IELTSWord1334."
  },
  {
    "word": "IELTSWord1335",
    "phonetic": "/ieltsˈwɜːrd1335/",
    "meaning": "综合 (词汇 1335)",
    "root": "root-1335 (词根释义)",
    "example": "This is an example sentence for IELTSWord1335."
  },
  {
    "word": "IELTSWord1336",
    "phonetic": "/ieltsˈwɜːrd1336/",
    "meaning": "环境 (词汇 1336)",
    "root": "root-1336 (词根释义)",
    "example": "This is an example sentence for IELTSWord1336."
  },
  {
    "word": "IELTSWord1337",
    "phonetic": "/ieltsˈwɜːrd1337/",
    "meaning": "现象 (词汇 1337)",
    "root": "root-1337 (词根释义)",
    "example": "This is an example sentence for IELTSWord1337."
  },
  {
    "word": "IELTSWord1338",
    "phonetic": "/ieltsˈwɜːrd1338/",
    "meaning": "环境 (词汇 1338)",
    "root": "root-1338 (词根释义)",
    "example": "This is an example sentence for IELTSWord1338."
  },
  {
    "word": "IELTSWord1339",
    "phonetic": "/ieltsˈwɜːrd1339/",
    "meaning": "全球化 (词汇 1339)",
    "root": "root-1339 (词根释义)",
    "example": "This is an example sentence for IELTSWord1339."
  },
  {
    "word": "IELTSWord1340",
    "phonetic": "/ieltsˈwɜːrd1340/",
    "meaning": "教育 (词汇 1340)",
    "root": "root-1340 (词根释义)",
    "example": "This is an example sentence for IELTSWord1340."
  },
  {
    "word": "IELTSWord1341",
    "phonetic": "/ieltsˈwɜːrd1341/",
    "meaning": "全球化 (词汇 1341)",
    "root": "root-1341 (词根释义)",
    "example": "This is an example sentence for IELTSWord1341."
  },
  {
    "word": "IELTSWord1342",
    "phonetic": "/ieltsˈwɜːrd1342/",
    "meaning": "文化 (词汇 1342)",
    "root": "root-1342 (词根释义)",
    "example": "This is an example sentence for IELTSWord1342."
  },
  {
    "word": "IELTSWord1343",
    "phonetic": "/ieltsˈwɜːrd1343/",
    "meaning": "分析 (词汇 1343)",
    "root": "root-1343 (词根释义)",
    "example": "This is an example sentence for IELTSWord1343."
  },
  {
    "word": "IELTSWord1344",
    "phonetic": "/ieltsˈwɜːrd1344/",
    "meaning": "科技 (词汇 1344)",
    "root": "root-1344 (词根释义)",
    "example": "This is an example sentence for IELTSWord1344."
  },
  {
    "word": "IELTSWord1345",
    "phonetic": "/ieltsˈwɜːrd1345/",
    "meaning": "评估 (词汇 1345)",
    "root": "root-1345 (词根释义)",
    "example": "This is an example sentence for IELTSWord1345."
  },
  {
    "word": "IELTSWord1346",
    "phonetic": "/ieltsˈwɜːrd1346/",
    "meaning": "趋势 (词汇 1346)",
    "root": "root-1346 (词根释义)",
    "example": "This is an example sentence for IELTSWord1346."
  },
  {
    "word": "IELTSWord1347",
    "phonetic": "/ieltsˈwɜːrd1347/",
    "meaning": "环境 (词汇 1347)",
    "root": "root-1347 (词根释义)",
    "example": "This is an example sentence for IELTSWord1347."
  },
  {
    "word": "IELTSWord1348",
    "phonetic": "/ieltsˈwɜːrd1348/",
    "meaning": "全球化 (词汇 1348)",
    "root": "root-1348 (词根释义)",
    "example": "This is an example sentence for IELTSWord1348."
  },
  {
    "word": "IELTSWord1349",
    "phonetic": "/ieltsˈwɜːrd1349/",
    "meaning": "评估 (词汇 1349)",
    "root": "root-1349 (词根释义)",
    "example": "This is an example sentence for IELTSWord1349."
  },
  {
    "word": "IELTSWord1350",
    "phonetic": "/ieltsˈwɜːrd1350/",
    "meaning": "分析 (词汇 1350)",
    "root": "root-1350 (词根释义)",
    "example": "This is an example sentence for IELTSWord1350."
  },
  {
    "word": "IELTSWord1351",
    "phonetic": "/ieltsˈwɜːrd1351/",
    "meaning": "全球化 (词汇 1351)",
    "root": "root-1351 (词根释义)",
    "example": "This is an example sentence for IELTSWord1351."
  },
  {
    "word": "IELTSWord1352",
    "phonetic": "/ieltsˈwɜːrd1352/",
    "meaning": "现象 (词汇 1352)",
    "root": "root-1352 (词根释义)",
    "example": "This is an example sentence for IELTSWord1352."
  },
  {
    "word": "IELTSWord1353",
    "phonetic": "/ieltsˈwɜːrd1353/",
    "meaning": "评估 (词汇 1353)",
    "root": "root-1353 (词根释义)",
    "example": "This is an example sentence for IELTSWord1353."
  },
  {
    "word": "IELTSWord1354",
    "phonetic": "/ieltsˈwɜːrd1354/",
    "meaning": "趋势 (词汇 1354)",
    "root": "root-1354 (词根释义)",
    "example": "This is an example sentence for IELTSWord1354."
  },
  {
    "word": "IELTSWord1355",
    "phonetic": "/ieltsˈwɜːrd1355/",
    "meaning": "评估 (词汇 1355)",
    "root": "root-1355 (词根释义)",
    "example": "This is an example sentence for IELTSWord1355."
  },
  {
    "word": "IELTSWord1356",
    "phonetic": "/ieltsˈwɜːrd1356/",
    "meaning": "环境 (词汇 1356)",
    "root": "root-1356 (词根释义)",
    "example": "This is an example sentence for IELTSWord1356."
  },
  {
    "word": "IELTSWord1357",
    "phonetic": "/ieltsˈwɜːrd1357/",
    "meaning": "综合 (词汇 1357)",
    "root": "root-1357 (词根释义)",
    "example": "This is an example sentence for IELTSWord1357."
  },
  {
    "word": "IELTSWord1358",
    "phonetic": "/ieltsˈwɜːrd1358/",
    "meaning": "评估 (词汇 1358)",
    "root": "root-1358 (词根释义)",
    "example": "This is an example sentence for IELTSWord1358."
  },
  {
    "word": "IELTSWord1359",
    "phonetic": "/ieltsˈwɜːrd1359/",
    "meaning": "分析 (词汇 1359)",
    "root": "root-1359 (词根释义)",
    "example": "This is an example sentence for IELTSWord1359."
  },
  {
    "word": "IELTSWord1360",
    "phonetic": "/ieltsˈwɜːrd1360/",
    "meaning": "科技 (词汇 1360)",
    "root": "root-1360 (词根释义)",
    "example": "This is an example sentence for IELTSWord1360."
  },
  {
    "word": "IELTSWord1361",
    "phonetic": "/ieltsˈwɜːrd1361/",
    "meaning": "环境 (词汇 1361)",
    "root": "root-1361 (词根释义)",
    "example": "This is an example sentence for IELTSWord1361."
  },
  {
    "word": "IELTSWord1362",
    "phonetic": "/ieltsˈwɜːrd1362/",
    "meaning": "分析 (词汇 1362)",
    "root": "root-1362 (词根释义)",
    "example": "This is an example sentence for IELTSWord1362."
  },
  {
    "word": "IELTSWord1363",
    "phonetic": "/ieltsˈwɜːrd1363/",
    "meaning": "评估 (词汇 1363)",
    "root": "root-1363 (词根释义)",
    "example": "This is an example sentence for IELTSWord1363."
  },
  {
    "word": "IELTSWord1364",
    "phonetic": "/ieltsˈwɜːrd1364/",
    "meaning": "文化 (词汇 1364)",
    "root": "root-1364 (词根释义)",
    "example": "This is an example sentence for IELTSWord1364."
  },
  {
    "word": "IELTSWord1365",
    "phonetic": "/ieltsˈwɜːrd1365/",
    "meaning": "科技 (词汇 1365)",
    "root": "root-1365 (词根释义)",
    "example": "This is an example sentence for IELTSWord1365."
  },
  {
    "word": "IELTSWord1366",
    "phonetic": "/ieltsˈwɜːrd1366/",
    "meaning": "趋势 (词汇 1366)",
    "root": "root-1366 (词根释义)",
    "example": "This is an example sentence for IELTSWord1366."
  },
  {
    "word": "IELTSWord1367",
    "phonetic": "/ieltsˈwɜːrd1367/",
    "meaning": "分析 (词汇 1367)",
    "root": "root-1367 (词根释义)",
    "example": "This is an example sentence for IELTSWord1367."
  },
  {
    "word": "IELTSWord1368",
    "phonetic": "/ieltsˈwɜːrd1368/",
    "meaning": "环境 (词汇 1368)",
    "root": "root-1368 (词根释义)",
    "example": "This is an example sentence for IELTSWord1368."
  },
  {
    "word": "IELTSWord1369",
    "phonetic": "/ieltsˈwɜːrd1369/",
    "meaning": "环境 (词汇 1369)",
    "root": "root-1369 (词根释义)",
    "example": "This is an example sentence for IELTSWord1369."
  },
  {
    "word": "IELTSWord1370",
    "phonetic": "/ieltsˈwɜːrd1370/",
    "meaning": "现象 (词汇 1370)",
    "root": "root-1370 (词根释义)",
    "example": "This is an example sentence for IELTSWord1370."
  },
  {
    "word": "IELTSWord1371",
    "phonetic": "/ieltsˈwɜːrd1371/",
    "meaning": "评估 (词汇 1371)",
    "root": "root-1371 (词根释义)",
    "example": "This is an example sentence for IELTSWord1371."
  },
  {
    "word": "IELTSWord1372",
    "phonetic": "/ieltsˈwɜːrd1372/",
    "meaning": "趋势 (词汇 1372)",
    "root": "root-1372 (词根释义)",
    "example": "This is an example sentence for IELTSWord1372."
  },
  {
    "word": "IELTSWord1373",
    "phonetic": "/ieltsˈwɜːrd1373/",
    "meaning": "综合 (词汇 1373)",
    "root": "root-1373 (词根释义)",
    "example": "This is an example sentence for IELTSWord1373."
  },
  {
    "word": "IELTSWord1374",
    "phonetic": "/ieltsˈwɜːrd1374/",
    "meaning": "环境 (词汇 1374)",
    "root": "root-1374 (词根释义)",
    "example": "This is an example sentence for IELTSWord1374."
  },
  {
    "word": "IELTSWord1375",
    "phonetic": "/ieltsˈwɜːrd1375/",
    "meaning": "教育 (词汇 1375)",
    "root": "root-1375 (词根释义)",
    "example": "This is an example sentence for IELTSWord1375."
  },
  {
    "word": "IELTSWord1376",
    "phonetic": "/ieltsˈwɜːrd1376/",
    "meaning": "综合 (词汇 1376)",
    "root": "root-1376 (词根释义)",
    "example": "This is an example sentence for IELTSWord1376."
  },
  {
    "word": "IELTSWord1377",
    "phonetic": "/ieltsˈwɜːrd1377/",
    "meaning": "科技 (词汇 1377)",
    "root": "root-1377 (词根释义)",
    "example": "This is an example sentence for IELTSWord1377."
  },
  {
    "word": "IELTSWord1378",
    "phonetic": "/ieltsˈwɜːrd1378/",
    "meaning": "分析 (词汇 1378)",
    "root": "root-1378 (词根释义)",
    "example": "This is an example sentence for IELTSWord1378."
  },
  {
    "word": "IELTSWord1379",
    "phonetic": "/ieltsˈwɜːrd1379/",
    "meaning": "现象 (词汇 1379)",
    "root": "root-1379 (词根释义)",
    "example": "This is an example sentence for IELTSWord1379."
  },
  {
    "word": "IELTSWord1380",
    "phonetic": "/ieltsˈwɜːrd1380/",
    "meaning": "文化 (词汇 1380)",
    "root": "root-1380 (词根释义)",
    "example": "This is an example sentence for IELTSWord1380."
  },
  {
    "word": "IELTSWord1381",
    "phonetic": "/ieltsˈwɜːrd1381/",
    "meaning": "趋势 (词汇 1381)",
    "root": "root-1381 (词根释义)",
    "example": "This is an example sentence for IELTSWord1381."
  },
  {
    "word": "IELTSWord1382",
    "phonetic": "/ieltsˈwɜːrd1382/",
    "meaning": "教育 (词汇 1382)",
    "root": "root-1382 (词根释义)",
    "example": "This is an example sentence for IELTSWord1382."
  },
  {
    "word": "IELTSWord1383",
    "phonetic": "/ieltsˈwɜːrd1383/",
    "meaning": "分析 (词汇 1383)",
    "root": "root-1383 (词根释义)",
    "example": "This is an example sentence for IELTSWord1383."
  },
  {
    "word": "IELTSWord1384",
    "phonetic": "/ieltsˈwɜːrd1384/",
    "meaning": "评估 (词汇 1384)",
    "root": "root-1384 (词根释义)",
    "example": "This is an example sentence for IELTSWord1384."
  },
  {
    "word": "IELTSWord1385",
    "phonetic": "/ieltsˈwɜːrd1385/",
    "meaning": "文化 (词汇 1385)",
    "root": "root-1385 (词根释义)",
    "example": "This is an example sentence for IELTSWord1385."
  },
  {
    "word": "IELTSWord1386",
    "phonetic": "/ieltsˈwɜːrd1386/",
    "meaning": "综合 (词汇 1386)",
    "root": "root-1386 (词根释义)",
    "example": "This is an example sentence for IELTSWord1386."
  },
  {
    "word": "IELTSWord1387",
    "phonetic": "/ieltsˈwɜːrd1387/",
    "meaning": "综合 (词汇 1387)",
    "root": "root-1387 (词根释义)",
    "example": "This is an example sentence for IELTSWord1387."
  },
  {
    "word": "IELTSWord1388",
    "phonetic": "/ieltsˈwɜːrd1388/",
    "meaning": "科技 (词汇 1388)",
    "root": "root-1388 (词根释义)",
    "example": "This is an example sentence for IELTSWord1388."
  },
  {
    "word": "IELTSWord1389",
    "phonetic": "/ieltsˈwɜːrd1389/",
    "meaning": "环境 (词汇 1389)",
    "root": "root-1389 (词根释义)",
    "example": "This is an example sentence for IELTSWord1389."
  },
  {
    "word": "IELTSWord1390",
    "phonetic": "/ieltsˈwɜːrd1390/",
    "meaning": "评估 (词汇 1390)",
    "root": "root-1390 (词根释义)",
    "example": "This is an example sentence for IELTSWord1390."
  },
  {
    "word": "IELTSWord1391",
    "phonetic": "/ieltsˈwɜːrd1391/",
    "meaning": "环境 (词汇 1391)",
    "root": "root-1391 (词根释义)",
    "example": "This is an example sentence for IELTSWord1391."
  },
  {
    "word": "IELTSWord1392",
    "phonetic": "/ieltsˈwɜːrd1392/",
    "meaning": "现象 (词汇 1392)",
    "root": "root-1392 (词根释义)",
    "example": "This is an example sentence for IELTSWord1392."
  },
  {
    "word": "IELTSWord1393",
    "phonetic": "/ieltsˈwɜːrd1393/",
    "meaning": "综合 (词汇 1393)",
    "root": "root-1393 (词根释义)",
    "example": "This is an example sentence for IELTSWord1393."
  },
  {
    "word": "IELTSWord1394",
    "phonetic": "/ieltsˈwɜːrd1394/",
    "meaning": "文化 (词汇 1394)",
    "root": "root-1394 (词根释义)",
    "example": "This is an example sentence for IELTSWord1394."
  },
  {
    "word": "IELTSWord1395",
    "phonetic": "/ieltsˈwɜːrd1395/",
    "meaning": "教育 (词汇 1395)",
    "root": "root-1395 (词根释义)",
    "example": "This is an example sentence for IELTSWord1395."
  },
  {
    "word": "IELTSWord1396",
    "phonetic": "/ieltsˈwɜːrd1396/",
    "meaning": "科技 (词汇 1396)",
    "root": "root-1396 (词根释义)",
    "example": "This is an example sentence for IELTSWord1396."
  },
  {
    "word": "IELTSWord1397",
    "phonetic": "/ieltsˈwɜːrd1397/",
    "meaning": "环境 (词汇 1397)",
    "root": "root-1397 (词根释义)",
    "example": "This is an example sentence for IELTSWord1397."
  },
  {
    "word": "IELTSWord1398",
    "phonetic": "/ieltsˈwɜːrd1398/",
    "meaning": "教育 (词汇 1398)",
    "root": "root-1398 (词根释义)",
    "example": "This is an example sentence for IELTSWord1398."
  },
  {
    "word": "IELTSWord1399",
    "phonetic": "/ieltsˈwɜːrd1399/",
    "meaning": "教育 (词汇 1399)",
    "root": "root-1399 (词根释义)",
    "example": "This is an example sentence for IELTSWord1399."
  },
  {
    "word": "IELTSWord1400",
    "phonetic": "/ieltsˈwɜːrd1400/",
    "meaning": "全球化 (词汇 1400)",
    "root": "root-1400 (词根释义)",
    "example": "This is an example sentence for IELTSWord1400."
  },
  {
    "word": "IELTSWord1401",
    "phonetic": "/ieltsˈwɜːrd1401/",
    "meaning": "趋势 (词汇 1401)",
    "root": "root-1401 (词根释义)",
    "example": "This is an example sentence for IELTSWord1401."
  },
  {
    "word": "IELTSWord1402",
    "phonetic": "/ieltsˈwɜːrd1402/",
    "meaning": "综合 (词汇 1402)",
    "root": "root-1402 (词根释义)",
    "example": "This is an example sentence for IELTSWord1402."
  },
  {
    "word": "IELTSWord1403",
    "phonetic": "/ieltsˈwɜːrd1403/",
    "meaning": "全球化 (词汇 1403)",
    "root": "root-1403 (词根释义)",
    "example": "This is an example sentence for IELTSWord1403."
  },
  {
    "word": "IELTSWord1404",
    "phonetic": "/ieltsˈwɜːrd1404/",
    "meaning": "趋势 (词汇 1404)",
    "root": "root-1404 (词根释义)",
    "example": "This is an example sentence for IELTSWord1404."
  },
  {
    "word": "IELTSWord1405",
    "phonetic": "/ieltsˈwɜːrd1405/",
    "meaning": "趋势 (词汇 1405)",
    "root": "root-1405 (词根释义)",
    "example": "This is an example sentence for IELTSWord1405."
  },
  {
    "word": "IELTSWord1406",
    "phonetic": "/ieltsˈwɜːrd1406/",
    "meaning": "全球化 (词汇 1406)",
    "root": "root-1406 (词根释义)",
    "example": "This is an example sentence for IELTSWord1406."
  },
  {
    "word": "IELTSWord1407",
    "phonetic": "/ieltsˈwɜːrd1407/",
    "meaning": "科技 (词汇 1407)",
    "root": "root-1407 (词根释义)",
    "example": "This is an example sentence for IELTSWord1407."
  },
  {
    "word": "IELTSWord1408",
    "phonetic": "/ieltsˈwɜːrd1408/",
    "meaning": "科技 (词汇 1408)",
    "root": "root-1408 (词根释义)",
    "example": "This is an example sentence for IELTSWord1408."
  },
  {
    "word": "IELTSWord1409",
    "phonetic": "/ieltsˈwɜːrd1409/",
    "meaning": "分析 (词汇 1409)",
    "root": "root-1409 (词根释义)",
    "example": "This is an example sentence for IELTSWord1409."
  },
  {
    "word": "IELTSWord1410",
    "phonetic": "/ieltsˈwɜːrd1410/",
    "meaning": "综合 (词汇 1410)",
    "root": "root-1410 (词根释义)",
    "example": "This is an example sentence for IELTSWord1410."
  },
  {
    "word": "IELTSWord1411",
    "phonetic": "/ieltsˈwɜːrd1411/",
    "meaning": "环境 (词汇 1411)",
    "root": "root-1411 (词根释义)",
    "example": "This is an example sentence for IELTSWord1411."
  },
  {
    "word": "IELTSWord1412",
    "phonetic": "/ieltsˈwɜːrd1412/",
    "meaning": "现象 (词汇 1412)",
    "root": "root-1412 (词根释义)",
    "example": "This is an example sentence for IELTSWord1412."
  },
  {
    "word": "IELTSWord1413",
    "phonetic": "/ieltsˈwɜːrd1413/",
    "meaning": "分析 (词汇 1413)",
    "root": "root-1413 (词根释义)",
    "example": "This is an example sentence for IELTSWord1413."
  },
  {
    "word": "IELTSWord1414",
    "phonetic": "/ieltsˈwɜːrd1414/",
    "meaning": "分析 (词汇 1414)",
    "root": "root-1414 (词根释义)",
    "example": "This is an example sentence for IELTSWord1414."
  },
  {
    "word": "IELTSWord1415",
    "phonetic": "/ieltsˈwɜːrd1415/",
    "meaning": "文化 (词汇 1415)",
    "root": "root-1415 (词根释义)",
    "example": "This is an example sentence for IELTSWord1415."
  },
  {
    "word": "IELTSWord1416",
    "phonetic": "/ieltsˈwɜːrd1416/",
    "meaning": "科技 (词汇 1416)",
    "root": "root-1416 (词根释义)",
    "example": "This is an example sentence for IELTSWord1416."
  },
  {
    "word": "IELTSWord1417",
    "phonetic": "/ieltsˈwɜːrd1417/",
    "meaning": "全球化 (词汇 1417)",
    "root": "root-1417 (词根释义)",
    "example": "This is an example sentence for IELTSWord1417."
  },
  {
    "word": "IELTSWord1418",
    "phonetic": "/ieltsˈwɜːrd1418/",
    "meaning": "全球化 (词汇 1418)",
    "root": "root-1418 (词根释义)",
    "example": "This is an example sentence for IELTSWord1418."
  },
  {
    "word": "IELTSWord1419",
    "phonetic": "/ieltsˈwɜːrd1419/",
    "meaning": "环境 (词汇 1419)",
    "root": "root-1419 (词根释义)",
    "example": "This is an example sentence for IELTSWord1419."
  },
  {
    "word": "IELTSWord1420",
    "phonetic": "/ieltsˈwɜːrd1420/",
    "meaning": "趋势 (词汇 1420)",
    "root": "root-1420 (词根释义)",
    "example": "This is an example sentence for IELTSWord1420."
  },
  {
    "word": "IELTSWord1421",
    "phonetic": "/ieltsˈwɜːrd1421/",
    "meaning": "评估 (词汇 1421)",
    "root": "root-1421 (词根释义)",
    "example": "This is an example sentence for IELTSWord1421."
  },
  {
    "word": "IELTSWord1422",
    "phonetic": "/ieltsˈwɜːrd1422/",
    "meaning": "评估 (词汇 1422)",
    "root": "root-1422 (词根释义)",
    "example": "This is an example sentence for IELTSWord1422."
  },
  {
    "word": "IELTSWord1423",
    "phonetic": "/ieltsˈwɜːrd1423/",
    "meaning": "文化 (词汇 1423)",
    "root": "root-1423 (词根释义)",
    "example": "This is an example sentence for IELTSWord1423."
  },
  {
    "word": "IELTSWord1424",
    "phonetic": "/ieltsˈwɜːrd1424/",
    "meaning": "全球化 (词汇 1424)",
    "root": "root-1424 (词根释义)",
    "example": "This is an example sentence for IELTSWord1424."
  },
  {
    "word": "IELTSWord1425",
    "phonetic": "/ieltsˈwɜːrd1425/",
    "meaning": "分析 (词汇 1425)",
    "root": "root-1425 (词根释义)",
    "example": "This is an example sentence for IELTSWord1425."
  },
  {
    "word": "IELTSWord1426",
    "phonetic": "/ieltsˈwɜːrd1426/",
    "meaning": "教育 (词汇 1426)",
    "root": "root-1426 (词根释义)",
    "example": "This is an example sentence for IELTSWord1426."
  },
  {
    "word": "IELTSWord1427",
    "phonetic": "/ieltsˈwɜːrd1427/",
    "meaning": "分析 (词汇 1427)",
    "root": "root-1427 (词根释义)",
    "example": "This is an example sentence for IELTSWord1427."
  },
  {
    "word": "IELTSWord1428",
    "phonetic": "/ieltsˈwɜːrd1428/",
    "meaning": "文化 (词汇 1428)",
    "root": "root-1428 (词根释义)",
    "example": "This is an example sentence for IELTSWord1428."
  },
  {
    "word": "IELTSWord1429",
    "phonetic": "/ieltsˈwɜːrd1429/",
    "meaning": "全球化 (词汇 1429)",
    "root": "root-1429 (词根释义)",
    "example": "This is an example sentence for IELTSWord1429."
  },
  {
    "word": "IELTSWord1430",
    "phonetic": "/ieltsˈwɜːrd1430/",
    "meaning": "全球化 (词汇 1430)",
    "root": "root-1430 (词根释义)",
    "example": "This is an example sentence for IELTSWord1430."
  },
  {
    "word": "IELTSWord1431",
    "phonetic": "/ieltsˈwɜːrd1431/",
    "meaning": "环境 (词汇 1431)",
    "root": "root-1431 (词根释义)",
    "example": "This is an example sentence for IELTSWord1431."
  },
  {
    "word": "IELTSWord1432",
    "phonetic": "/ieltsˈwɜːrd1432/",
    "meaning": "环境 (词汇 1432)",
    "root": "root-1432 (词根释义)",
    "example": "This is an example sentence for IELTSWord1432."
  },
  {
    "word": "IELTSWord1433",
    "phonetic": "/ieltsˈwɜːrd1433/",
    "meaning": "趋势 (词汇 1433)",
    "root": "root-1433 (词根释义)",
    "example": "This is an example sentence for IELTSWord1433."
  },
  {
    "word": "IELTSWord1434",
    "phonetic": "/ieltsˈwɜːrd1434/",
    "meaning": "分析 (词汇 1434)",
    "root": "root-1434 (词根释义)",
    "example": "This is an example sentence for IELTSWord1434."
  },
  {
    "word": "IELTSWord1435",
    "phonetic": "/ieltsˈwɜːrd1435/",
    "meaning": "综合 (词汇 1435)",
    "root": "root-1435 (词根释义)",
    "example": "This is an example sentence for IELTSWord1435."
  },
  {
    "word": "IELTSWord1436",
    "phonetic": "/ieltsˈwɜːrd1436/",
    "meaning": "综合 (词汇 1436)",
    "root": "root-1436 (词根释义)",
    "example": "This is an example sentence for IELTSWord1436."
  },
  {
    "word": "IELTSWord1437",
    "phonetic": "/ieltsˈwɜːrd1437/",
    "meaning": "教育 (词汇 1437)",
    "root": "root-1437 (词根释义)",
    "example": "This is an example sentence for IELTSWord1437."
  },
  {
    "word": "IELTSWord1438",
    "phonetic": "/ieltsˈwɜːrd1438/",
    "meaning": "科技 (词汇 1438)",
    "root": "root-1438 (词根释义)",
    "example": "This is an example sentence for IELTSWord1438."
  },
  {
    "word": "IELTSWord1439",
    "phonetic": "/ieltsˈwɜːrd1439/",
    "meaning": "趋势 (词汇 1439)",
    "root": "root-1439 (词根释义)",
    "example": "This is an example sentence for IELTSWord1439."
  },
  {
    "word": "IELTSWord1440",
    "phonetic": "/ieltsˈwɜːrd1440/",
    "meaning": "教育 (词汇 1440)",
    "root": "root-1440 (词根释义)",
    "example": "This is an example sentence for IELTSWord1440."
  },
  {
    "word": "IELTSWord1441",
    "phonetic": "/ieltsˈwɜːrd1441/",
    "meaning": "文化 (词汇 1441)",
    "root": "root-1441 (词根释义)",
    "example": "This is an example sentence for IELTSWord1441."
  },
  {
    "word": "IELTSWord1442",
    "phonetic": "/ieltsˈwɜːrd1442/",
    "meaning": "分析 (词汇 1442)",
    "root": "root-1442 (词根释义)",
    "example": "This is an example sentence for IELTSWord1442."
  },
  {
    "word": "IELTSWord1443",
    "phonetic": "/ieltsˈwɜːrd1443/",
    "meaning": "综合 (词汇 1443)",
    "root": "root-1443 (词根释义)",
    "example": "This is an example sentence for IELTSWord1443."
  },
  {
    "word": "IELTSWord1444",
    "phonetic": "/ieltsˈwɜːrd1444/",
    "meaning": "科技 (词汇 1444)",
    "root": "root-1444 (词根释义)",
    "example": "This is an example sentence for IELTSWord1444."
  },
  {
    "word": "IELTSWord1445",
    "phonetic": "/ieltsˈwɜːrd1445/",
    "meaning": "现象 (词汇 1445)",
    "root": "root-1445 (词根释义)",
    "example": "This is an example sentence for IELTSWord1445."
  },
  {
    "word": "IELTSWord1446",
    "phonetic": "/ieltsˈwɜːrd1446/",
    "meaning": "评估 (词汇 1446)",
    "root": "root-1446 (词根释义)",
    "example": "This is an example sentence for IELTSWord1446."
  },
  {
    "word": "IELTSWord1447",
    "phonetic": "/ieltsˈwɜːrd1447/",
    "meaning": "科技 (词汇 1447)",
    "root": "root-1447 (词根释义)",
    "example": "This is an example sentence for IELTSWord1447."
  },
  {
    "word": "IELTSWord1448",
    "phonetic": "/ieltsˈwɜːrd1448/",
    "meaning": "科技 (词汇 1448)",
    "root": "root-1448 (词根释义)",
    "example": "This is an example sentence for IELTSWord1448."
  },
  {
    "word": "IELTSWord1449",
    "phonetic": "/ieltsˈwɜːrd1449/",
    "meaning": "环境 (词汇 1449)",
    "root": "root-1449 (词根释义)",
    "example": "This is an example sentence for IELTSWord1449."
  },
  {
    "word": "IELTSWord1450",
    "phonetic": "/ieltsˈwɜːrd1450/",
    "meaning": "综合 (词汇 1450)",
    "root": "root-1450 (词根释义)",
    "example": "This is an example sentence for IELTSWord1450."
  },
  {
    "word": "IELTSWord1451",
    "phonetic": "/ieltsˈwɜːrd1451/",
    "meaning": "全球化 (词汇 1451)",
    "root": "root-1451 (词根释义)",
    "example": "This is an example sentence for IELTSWord1451."
  },
  {
    "word": "IELTSWord1452",
    "phonetic": "/ieltsˈwɜːrd1452/",
    "meaning": "评估 (词汇 1452)",
    "root": "root-1452 (词根释义)",
    "example": "This is an example sentence for IELTSWord1452."
  },
  {
    "word": "IELTSWord1453",
    "phonetic": "/ieltsˈwɜːrd1453/",
    "meaning": "科技 (词汇 1453)",
    "root": "root-1453 (词根释义)",
    "example": "This is an example sentence for IELTSWord1453."
  },
  {
    "word": "IELTSWord1454",
    "phonetic": "/ieltsˈwɜːrd1454/",
    "meaning": "教育 (词汇 1454)",
    "root": "root-1454 (词根释义)",
    "example": "This is an example sentence for IELTSWord1454."
  },
  {
    "word": "IELTSWord1455",
    "phonetic": "/ieltsˈwɜːrd1455/",
    "meaning": "分析 (词汇 1455)",
    "root": "root-1455 (词根释义)",
    "example": "This is an example sentence for IELTSWord1455."
  },
  {
    "word": "IELTSWord1456",
    "phonetic": "/ieltsˈwɜːrd1456/",
    "meaning": "综合 (词汇 1456)",
    "root": "root-1456 (词根释义)",
    "example": "This is an example sentence for IELTSWord1456."
  },
  {
    "word": "IELTSWord1457",
    "phonetic": "/ieltsˈwɜːrd1457/",
    "meaning": "趋势 (词汇 1457)",
    "root": "root-1457 (词根释义)",
    "example": "This is an example sentence for IELTSWord1457."
  },
  {
    "word": "IELTSWord1458",
    "phonetic": "/ieltsˈwɜːrd1458/",
    "meaning": "教育 (词汇 1458)",
    "root": "root-1458 (词根释义)",
    "example": "This is an example sentence for IELTSWord1458."
  },
  {
    "word": "IELTSWord1459",
    "phonetic": "/ieltsˈwɜːrd1459/",
    "meaning": "现象 (词汇 1459)",
    "root": "root-1459 (词根释义)",
    "example": "This is an example sentence for IELTSWord1459."
  },
  {
    "word": "IELTSWord1460",
    "phonetic": "/ieltsˈwɜːrd1460/",
    "meaning": "综合 (词汇 1460)",
    "root": "root-1460 (词根释义)",
    "example": "This is an example sentence for IELTSWord1460."
  },
  {
    "word": "IELTSWord1461",
    "phonetic": "/ieltsˈwɜːrd1461/",
    "meaning": "趋势 (词汇 1461)",
    "root": "root-1461 (词根释义)",
    "example": "This is an example sentence for IELTSWord1461."
  },
  {
    "word": "IELTSWord1462",
    "phonetic": "/ieltsˈwɜːrd1462/",
    "meaning": "教育 (词汇 1462)",
    "root": "root-1462 (词根释义)",
    "example": "This is an example sentence for IELTSWord1462."
  },
  {
    "word": "IELTSWord1463",
    "phonetic": "/ieltsˈwɜːrd1463/",
    "meaning": "文化 (词汇 1463)",
    "root": "root-1463 (词根释义)",
    "example": "This is an example sentence for IELTSWord1463."
  },
  {
    "word": "IELTSWord1464",
    "phonetic": "/ieltsˈwɜːrd1464/",
    "meaning": "评估 (词汇 1464)",
    "root": "root-1464 (词根释义)",
    "example": "This is an example sentence for IELTSWord1464."
  },
  {
    "word": "IELTSWord1465",
    "phonetic": "/ieltsˈwɜːrd1465/",
    "meaning": "环境 (词汇 1465)",
    "root": "root-1465 (词根释义)",
    "example": "This is an example sentence for IELTSWord1465."
  },
  {
    "word": "IELTSWord1466",
    "phonetic": "/ieltsˈwɜːrd1466/",
    "meaning": "环境 (词汇 1466)",
    "root": "root-1466 (词根释义)",
    "example": "This is an example sentence for IELTSWord1466."
  },
  {
    "word": "IELTSWord1467",
    "phonetic": "/ieltsˈwɜːrd1467/",
    "meaning": "文化 (词汇 1467)",
    "root": "root-1467 (词根释义)",
    "example": "This is an example sentence for IELTSWord1467."
  },
  {
    "word": "IELTSWord1468",
    "phonetic": "/ieltsˈwɜːrd1468/",
    "meaning": "全球化 (词汇 1468)",
    "root": "root-1468 (词根释义)",
    "example": "This is an example sentence for IELTSWord1468."
  },
  {
    "word": "IELTSWord1469",
    "phonetic": "/ieltsˈwɜːrd1469/",
    "meaning": "全球化 (词汇 1469)",
    "root": "root-1469 (词根释义)",
    "example": "This is an example sentence for IELTSWord1469."
  },
  {
    "word": "IELTSWord1470",
    "phonetic": "/ieltsˈwɜːrd1470/",
    "meaning": "文化 (词汇 1470)",
    "root": "root-1470 (词根释义)",
    "example": "This is an example sentence for IELTSWord1470."
  },
  {
    "word": "IELTSWord1471",
    "phonetic": "/ieltsˈwɜːrd1471/",
    "meaning": "环境 (词汇 1471)",
    "root": "root-1471 (词根释义)",
    "example": "This is an example sentence for IELTSWord1471."
  },
  {
    "word": "IELTSWord1472",
    "phonetic": "/ieltsˈwɜːrd1472/",
    "meaning": "全球化 (词汇 1472)",
    "root": "root-1472 (词根释义)",
    "example": "This is an example sentence for IELTSWord1472."
  },
  {
    "word": "IELTSWord1473",
    "phonetic": "/ieltsˈwɜːrd1473/",
    "meaning": "全球化 (词汇 1473)",
    "root": "root-1473 (词根释义)",
    "example": "This is an example sentence for IELTSWord1473."
  },
  {
    "word": "IELTSWord1474",
    "phonetic": "/ieltsˈwɜːrd1474/",
    "meaning": "现象 (词汇 1474)",
    "root": "root-1474 (词根释义)",
    "example": "This is an example sentence for IELTSWord1474."
  },
  {
    "word": "IELTSWord1475",
    "phonetic": "/ieltsˈwɜːrd1475/",
    "meaning": "环境 (词汇 1475)",
    "root": "root-1475 (词根释义)",
    "example": "This is an example sentence for IELTSWord1475."
  },
  {
    "word": "IELTSWord1476",
    "phonetic": "/ieltsˈwɜːrd1476/",
    "meaning": "全球化 (词汇 1476)",
    "root": "root-1476 (词根释义)",
    "example": "This is an example sentence for IELTSWord1476."
  },
  {
    "word": "IELTSWord1477",
    "phonetic": "/ieltsˈwɜːrd1477/",
    "meaning": "文化 (词汇 1477)",
    "root": "root-1477 (词根释义)",
    "example": "This is an example sentence for IELTSWord1477."
  },
  {
    "word": "IELTSWord1478",
    "phonetic": "/ieltsˈwɜːrd1478/",
    "meaning": "现象 (词汇 1478)",
    "root": "root-1478 (词根释义)",
    "example": "This is an example sentence for IELTSWord1478."
  },
  {
    "word": "IELTSWord1479",
    "phonetic": "/ieltsˈwɜːrd1479/",
    "meaning": "科技 (词汇 1479)",
    "root": "root-1479 (词根释义)",
    "example": "This is an example sentence for IELTSWord1479."
  },
  {
    "word": "IELTSWord1480",
    "phonetic": "/ieltsˈwɜːrd1480/",
    "meaning": "文化 (词汇 1480)",
    "root": "root-1480 (词根释义)",
    "example": "This is an example sentence for IELTSWord1480."
  },
  {
    "word": "IELTSWord1481",
    "phonetic": "/ieltsˈwɜːrd1481/",
    "meaning": "文化 (词汇 1481)",
    "root": "root-1481 (词根释义)",
    "example": "This is an example sentence for IELTSWord1481."
  },
  {
    "word": "IELTSWord1482",
    "phonetic": "/ieltsˈwɜːrd1482/",
    "meaning": "评估 (词汇 1482)",
    "root": "root-1482 (词根释义)",
    "example": "This is an example sentence for IELTSWord1482."
  },
  {
    "word": "IELTSWord1483",
    "phonetic": "/ieltsˈwɜːrd1483/",
    "meaning": "教育 (词汇 1483)",
    "root": "root-1483 (词根释义)",
    "example": "This is an example sentence for IELTSWord1483."
  },
  {
    "word": "IELTSWord1484",
    "phonetic": "/ieltsˈwɜːrd1484/",
    "meaning": "科技 (词汇 1484)",
    "root": "root-1484 (词根释义)",
    "example": "This is an example sentence for IELTSWord1484."
  },
  {
    "word": "IELTSWord1485",
    "phonetic": "/ieltsˈwɜːrd1485/",
    "meaning": "分析 (词汇 1485)",
    "root": "root-1485 (词根释义)",
    "example": "This is an example sentence for IELTSWord1485."
  },
  {
    "word": "IELTSWord1486",
    "phonetic": "/ieltsˈwɜːrd1486/",
    "meaning": "分析 (词汇 1486)",
    "root": "root-1486 (词根释义)",
    "example": "This is an example sentence for IELTSWord1486."
  },
  {
    "word": "IELTSWord1487",
    "phonetic": "/ieltsˈwɜːrd1487/",
    "meaning": "全球化 (词汇 1487)",
    "root": "root-1487 (词根释义)",
    "example": "This is an example sentence for IELTSWord1487."
  },
  {
    "word": "IELTSWord1488",
    "phonetic": "/ieltsˈwɜːrd1488/",
    "meaning": "评估 (词汇 1488)",
    "root": "root-1488 (词根释义)",
    "example": "This is an example sentence for IELTSWord1488."
  },
  {
    "word": "IELTSWord1489",
    "phonetic": "/ieltsˈwɜːrd1489/",
    "meaning": "环境 (词汇 1489)",
    "root": "root-1489 (词根释义)",
    "example": "This is an example sentence for IELTSWord1489."
  },
  {
    "word": "IELTSWord1490",
    "phonetic": "/ieltsˈwɜːrd1490/",
    "meaning": "文化 (词汇 1490)",
    "root": "root-1490 (词根释义)",
    "example": "This is an example sentence for IELTSWord1490."
  },
  {
    "word": "IELTSWord1491",
    "phonetic": "/ieltsˈwɜːrd1491/",
    "meaning": "文化 (词汇 1491)",
    "root": "root-1491 (词根释义)",
    "example": "This is an example sentence for IELTSWord1491."
  },
  {
    "word": "IELTSWord1492",
    "phonetic": "/ieltsˈwɜːrd1492/",
    "meaning": "全球化 (词汇 1492)",
    "root": "root-1492 (词根释义)",
    "example": "This is an example sentence for IELTSWord1492."
  },
  {
    "word": "IELTSWord1493",
    "phonetic": "/ieltsˈwɜːrd1493/",
    "meaning": "全球化 (词汇 1493)",
    "root": "root-1493 (词根释义)",
    "example": "This is an example sentence for IELTSWord1493."
  },
  {
    "word": "IELTSWord1494",
    "phonetic": "/ieltsˈwɜːrd1494/",
    "meaning": "综合 (词汇 1494)",
    "root": "root-1494 (词根释义)",
    "example": "This is an example sentence for IELTSWord1494."
  },
  {
    "word": "IELTSWord1495",
    "phonetic": "/ieltsˈwɜːrd1495/",
    "meaning": "现象 (词汇 1495)",
    "root": "root-1495 (词根释义)",
    "example": "This is an example sentence for IELTSWord1495."
  },
  {
    "word": "IELTSWord1496",
    "phonetic": "/ieltsˈwɜːrd1496/",
    "meaning": "文化 (词汇 1496)",
    "root": "root-1496 (词根释义)",
    "example": "This is an example sentence for IELTSWord1496."
  },
  {
    "word": "IELTSWord1497",
    "phonetic": "/ieltsˈwɜːrd1497/",
    "meaning": "评估 (词汇 1497)",
    "root": "root-1497 (词根释义)",
    "example": "This is an example sentence for IELTSWord1497."
  },
  {
    "word": "IELTSWord1498",
    "phonetic": "/ieltsˈwɜːrd1498/",
    "meaning": "现象 (词汇 1498)",
    "root": "root-1498 (词根释义)",
    "example": "This is an example sentence for IELTSWord1498."
  },
  {
    "word": "IELTSWord1499",
    "phonetic": "/ieltsˈwɜːrd1499/",
    "meaning": "教育 (词汇 1499)",
    "root": "root-1499 (词根释义)",
    "example": "This is an example sentence for IELTSWord1499."
  },
  {
    "word": "IELTSWord1500",
    "phonetic": "/ieltsˈwɜːrd1500/",
    "meaning": "评估 (词汇 1500)",
    "root": "root-1500 (词根释义)",
    "example": "This is an example sentence for IELTSWord1500."
  }
],
  'toefl': [
  {
    "word": "TOEFLWord1",
    "phonetic": "/toeflˈwɜːrd1/",
    "meaning": "实证 (词汇 1)",
    "root": "root-1 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1."
  },
  {
    "word": "TOEFLWord2",
    "phonetic": "/toeflˈwɜːrd2/",
    "meaning": "机制 (词汇 2)",
    "root": "root-2 (词根释义)",
    "example": "This is an example sentence for TOEFLWord2."
  },
  {
    "word": "TOEFLWord3",
    "phonetic": "/toeflˈwɜːrd3/",
    "meaning": "机制 (词汇 3)",
    "root": "root-3 (词根释义)",
    "example": "This is an example sentence for TOEFLWord3."
  },
  {
    "word": "TOEFLWord4",
    "phonetic": "/toeflˈwɜːrd4/",
    "meaning": "心理学 (词汇 4)",
    "root": "root-4 (词根释义)",
    "example": "This is an example sentence for TOEFLWord4."
  },
  {
    "word": "TOEFLWord5",
    "phonetic": "/toeflˈwɜːrd5/",
    "meaning": "天文学 (词汇 5)",
    "root": "root-5 (词根释义)",
    "example": "This is an example sentence for TOEFLWord5."
  },
  {
    "word": "TOEFLWord6",
    "phonetic": "/toeflˈwɜːrd6/",
    "meaning": "生物学 (词汇 6)",
    "root": "root-6 (词根释义)",
    "example": "This is an example sentence for TOEFLWord6."
  },
  {
    "word": "TOEFLWord7",
    "phonetic": "/toeflˈwɜːrd7/",
    "meaning": "艺术史 (词汇 7)",
    "root": "root-7 (词根释义)",
    "example": "This is an example sentence for TOEFLWord7."
  },
  {
    "word": "TOEFLWord8",
    "phonetic": "/toeflˈwɜːrd8/",
    "meaning": "认知 (词汇 8)",
    "root": "root-8 (词根释义)",
    "example": "This is an example sentence for TOEFLWord8."
  },
  {
    "word": "TOEFLWord9",
    "phonetic": "/toeflˈwɜːrd9/",
    "meaning": "心理学 (词汇 9)",
    "root": "root-9 (词根释义)",
    "example": "This is an example sentence for TOEFLWord9."
  },
  {
    "word": "TOEFLWord10",
    "phonetic": "/toeflˈwɜːrd10/",
    "meaning": "心理学 (词汇 10)",
    "root": "root-10 (词根释义)",
    "example": "This is an example sentence for TOEFLWord10."
  },
  {
    "word": "TOEFLWord11",
    "phonetic": "/toeflˈwɜːrd11/",
    "meaning": "天文学 (词汇 11)",
    "root": "root-11 (词根释义)",
    "example": "This is an example sentence for TOEFLWord11."
  },
  {
    "word": "TOEFLWord12",
    "phonetic": "/toeflˈwɜːrd12/",
    "meaning": "机制 (词汇 12)",
    "root": "root-12 (词根释义)",
    "example": "This is an example sentence for TOEFLWord12."
  },
  {
    "word": "TOEFLWord13",
    "phonetic": "/toeflˈwɜːrd13/",
    "meaning": "实证 (词汇 13)",
    "root": "root-13 (词根释义)",
    "example": "This is an example sentence for TOEFLWord13."
  },
  {
    "word": "TOEFLWord14",
    "phonetic": "/toeflˈwɜːrd14/",
    "meaning": "认知 (词汇 14)",
    "root": "root-14 (词根释义)",
    "example": "This is an example sentence for TOEFLWord14."
  },
  {
    "word": "TOEFLWord15",
    "phonetic": "/toeflˈwɜːrd15/",
    "meaning": "机制 (词汇 15)",
    "root": "root-15 (词根释义)",
    "example": "This is an example sentence for TOEFLWord15."
  },
  {
    "word": "TOEFLWord16",
    "phonetic": "/toeflˈwɜːrd16/",
    "meaning": "实证 (词汇 16)",
    "root": "root-16 (词根释义)",
    "example": "This is an example sentence for TOEFLWord16."
  },
  {
    "word": "TOEFLWord17",
    "phonetic": "/toeflˈwɜːrd17/",
    "meaning": "心理学 (词汇 17)",
    "root": "root-17 (词根释义)",
    "example": "This is an example sentence for TOEFLWord17."
  },
  {
    "word": "TOEFLWord18",
    "phonetic": "/toeflˈwɜːrd18/",
    "meaning": "地质学 (词汇 18)",
    "root": "root-18 (词根释义)",
    "example": "This is an example sentence for TOEFLWord18."
  },
  {
    "word": "TOEFLWord19",
    "phonetic": "/toeflˈwɜːrd19/",
    "meaning": "认知 (词汇 19)",
    "root": "root-19 (词根释义)",
    "example": "This is an example sentence for TOEFLWord19."
  },
  {
    "word": "TOEFLWord20",
    "phonetic": "/toeflˈwɜːrd20/",
    "meaning": "范式 (词汇 20)",
    "root": "root-20 (词根释义)",
    "example": "This is an example sentence for TOEFLWord20."
  },
  {
    "word": "TOEFLWord21",
    "phonetic": "/toeflˈwɜːrd21/",
    "meaning": "范式 (词汇 21)",
    "root": "root-21 (词根释义)",
    "example": "This is an example sentence for TOEFLWord21."
  },
  {
    "word": "TOEFLWord22",
    "phonetic": "/toeflˈwɜːrd22/",
    "meaning": "地质学 (词汇 22)",
    "root": "root-22 (词根释义)",
    "example": "This is an example sentence for TOEFLWord22."
  },
  {
    "word": "TOEFLWord23",
    "phonetic": "/toeflˈwɜːrd23/",
    "meaning": "实证 (词汇 23)",
    "root": "root-23 (词根释义)",
    "example": "This is an example sentence for TOEFLWord23."
  },
  {
    "word": "TOEFLWord24",
    "phonetic": "/toeflˈwɜːrd24/",
    "meaning": "认知 (词汇 24)",
    "root": "root-24 (词根释义)",
    "example": "This is an example sentence for TOEFLWord24."
  },
  {
    "word": "TOEFLWord25",
    "phonetic": "/toeflˈwɜːrd25/",
    "meaning": "艺术史 (词汇 25)",
    "root": "root-25 (词根释义)",
    "example": "This is an example sentence for TOEFLWord25."
  },
  {
    "word": "TOEFLWord26",
    "phonetic": "/toeflˈwɜːrd26/",
    "meaning": "天文学 (词汇 26)",
    "root": "root-26 (词根释义)",
    "example": "This is an example sentence for TOEFLWord26."
  },
  {
    "word": "TOEFLWord27",
    "phonetic": "/toeflˈwɜːrd27/",
    "meaning": "生物学 (词汇 27)",
    "root": "root-27 (词根释义)",
    "example": "This is an example sentence for TOEFLWord27."
  },
  {
    "word": "TOEFLWord28",
    "phonetic": "/toeflˈwɜːrd28/",
    "meaning": "艺术史 (词汇 28)",
    "root": "root-28 (词根释义)",
    "example": "This is an example sentence for TOEFLWord28."
  },
  {
    "word": "TOEFLWord29",
    "phonetic": "/toeflˈwɜːrd29/",
    "meaning": "机制 (词汇 29)",
    "root": "root-29 (词根释义)",
    "example": "This is an example sentence for TOEFLWord29."
  },
  {
    "word": "TOEFLWord30",
    "phonetic": "/toeflˈwɜːrd30/",
    "meaning": "天文学 (词汇 30)",
    "root": "root-30 (词根释义)",
    "example": "This is an example sentence for TOEFLWord30."
  },
  {
    "word": "TOEFLWord31",
    "phonetic": "/toeflˈwɜːrd31/",
    "meaning": "范式 (词汇 31)",
    "root": "root-31 (词根释义)",
    "example": "This is an example sentence for TOEFLWord31."
  },
  {
    "word": "TOEFLWord32",
    "phonetic": "/toeflˈwɜːrd32/",
    "meaning": "实证 (词汇 32)",
    "root": "root-32 (词根释义)",
    "example": "This is an example sentence for TOEFLWord32."
  },
  {
    "word": "TOEFLWord33",
    "phonetic": "/toeflˈwɜːrd33/",
    "meaning": "认知 (词汇 33)",
    "root": "root-33 (词根释义)",
    "example": "This is an example sentence for TOEFLWord33."
  },
  {
    "word": "TOEFLWord34",
    "phonetic": "/toeflˈwɜːrd34/",
    "meaning": "范式 (词汇 34)",
    "root": "root-34 (词根释义)",
    "example": "This is an example sentence for TOEFLWord34."
  },
  {
    "word": "TOEFLWord35",
    "phonetic": "/toeflˈwɜːrd35/",
    "meaning": "认知 (词汇 35)",
    "root": "root-35 (词根释义)",
    "example": "This is an example sentence for TOEFLWord35."
  },
  {
    "word": "TOEFLWord36",
    "phonetic": "/toeflˈwɜːrd36/",
    "meaning": "艺术史 (词汇 36)",
    "root": "root-36 (词根释义)",
    "example": "This is an example sentence for TOEFLWord36."
  },
  {
    "word": "TOEFLWord37",
    "phonetic": "/toeflˈwɜːrd37/",
    "meaning": "地质学 (词汇 37)",
    "root": "root-37 (词根释义)",
    "example": "This is an example sentence for TOEFLWord37."
  },
  {
    "word": "TOEFLWord38",
    "phonetic": "/toeflˈwɜːrd38/",
    "meaning": "心理学 (词汇 38)",
    "root": "root-38 (词根释义)",
    "example": "This is an example sentence for TOEFLWord38."
  },
  {
    "word": "TOEFLWord39",
    "phonetic": "/toeflˈwɜːrd39/",
    "meaning": "地质学 (词汇 39)",
    "root": "root-39 (词根释义)",
    "example": "This is an example sentence for TOEFLWord39."
  },
  {
    "word": "TOEFLWord40",
    "phonetic": "/toeflˈwɜːrd40/",
    "meaning": "假说 (词汇 40)",
    "root": "root-40 (词根释义)",
    "example": "This is an example sentence for TOEFLWord40."
  },
  {
    "word": "TOEFLWord41",
    "phonetic": "/toeflˈwɜːrd41/",
    "meaning": "生物学 (词汇 41)",
    "root": "root-41 (词根释义)",
    "example": "This is an example sentence for TOEFLWord41."
  },
  {
    "word": "TOEFLWord42",
    "phonetic": "/toeflˈwɜːrd42/",
    "meaning": "心理学 (词汇 42)",
    "root": "root-42 (词根释义)",
    "example": "This is an example sentence for TOEFLWord42."
  },
  {
    "word": "TOEFLWord43",
    "phonetic": "/toeflˈwɜːrd43/",
    "meaning": "实证 (词汇 43)",
    "root": "root-43 (词根释义)",
    "example": "This is an example sentence for TOEFLWord43."
  },
  {
    "word": "TOEFLWord44",
    "phonetic": "/toeflˈwɜːrd44/",
    "meaning": "机制 (词汇 44)",
    "root": "root-44 (词根释义)",
    "example": "This is an example sentence for TOEFLWord44."
  },
  {
    "word": "TOEFLWord45",
    "phonetic": "/toeflˈwɜːrd45/",
    "meaning": "认知 (词汇 45)",
    "root": "root-45 (词根释义)",
    "example": "This is an example sentence for TOEFLWord45."
  },
  {
    "word": "TOEFLWord46",
    "phonetic": "/toeflˈwɜːrd46/",
    "meaning": "艺术史 (词汇 46)",
    "root": "root-46 (词根释义)",
    "example": "This is an example sentence for TOEFLWord46."
  },
  {
    "word": "TOEFLWord47",
    "phonetic": "/toeflˈwɜːrd47/",
    "meaning": "机制 (词汇 47)",
    "root": "root-47 (词根释义)",
    "example": "This is an example sentence for TOEFLWord47."
  },
  {
    "word": "TOEFLWord48",
    "phonetic": "/toeflˈwɜːrd48/",
    "meaning": "机制 (词汇 48)",
    "root": "root-48 (词根释义)",
    "example": "This is an example sentence for TOEFLWord48."
  },
  {
    "word": "TOEFLWord49",
    "phonetic": "/toeflˈwɜːrd49/",
    "meaning": "生物学 (词汇 49)",
    "root": "root-49 (词根释义)",
    "example": "This is an example sentence for TOEFLWord49."
  },
  {
    "word": "TOEFLWord50",
    "phonetic": "/toeflˈwɜːrd50/",
    "meaning": "天文学 (词汇 50)",
    "root": "root-50 (词根释义)",
    "example": "This is an example sentence for TOEFLWord50."
  },
  {
    "word": "TOEFLWord51",
    "phonetic": "/toeflˈwɜːrd51/",
    "meaning": "假说 (词汇 51)",
    "root": "root-51 (词根释义)",
    "example": "This is an example sentence for TOEFLWord51."
  },
  {
    "word": "TOEFLWord52",
    "phonetic": "/toeflˈwɜːrd52/",
    "meaning": "假说 (词汇 52)",
    "root": "root-52 (词根释义)",
    "example": "This is an example sentence for TOEFLWord52."
  },
  {
    "word": "TOEFLWord53",
    "phonetic": "/toeflˈwɜːrd53/",
    "meaning": "艺术史 (词汇 53)",
    "root": "root-53 (词根释义)",
    "example": "This is an example sentence for TOEFLWord53."
  },
  {
    "word": "TOEFLWord54",
    "phonetic": "/toeflˈwɜːrd54/",
    "meaning": "机制 (词汇 54)",
    "root": "root-54 (词根释义)",
    "example": "This is an example sentence for TOEFLWord54."
  },
  {
    "word": "TOEFLWord55",
    "phonetic": "/toeflˈwɜːrd55/",
    "meaning": "天文学 (词汇 55)",
    "root": "root-55 (词根释义)",
    "example": "This is an example sentence for TOEFLWord55."
  },
  {
    "word": "TOEFLWord56",
    "phonetic": "/toeflˈwɜːrd56/",
    "meaning": "艺术史 (词汇 56)",
    "root": "root-56 (词根释义)",
    "example": "This is an example sentence for TOEFLWord56."
  },
  {
    "word": "TOEFLWord57",
    "phonetic": "/toeflˈwɜːrd57/",
    "meaning": "天文学 (词汇 57)",
    "root": "root-57 (词根释义)",
    "example": "This is an example sentence for TOEFLWord57."
  },
  {
    "word": "TOEFLWord58",
    "phonetic": "/toeflˈwɜːrd58/",
    "meaning": "实证 (词汇 58)",
    "root": "root-58 (词根释义)",
    "example": "This is an example sentence for TOEFLWord58."
  },
  {
    "word": "TOEFLWord59",
    "phonetic": "/toeflˈwɜːrd59/",
    "meaning": "范式 (词汇 59)",
    "root": "root-59 (词根释义)",
    "example": "This is an example sentence for TOEFLWord59."
  },
  {
    "word": "TOEFLWord60",
    "phonetic": "/toeflˈwɜːrd60/",
    "meaning": "实证 (词汇 60)",
    "root": "root-60 (词根释义)",
    "example": "This is an example sentence for TOEFLWord60."
  },
  {
    "word": "TOEFLWord61",
    "phonetic": "/toeflˈwɜːrd61/",
    "meaning": "地质学 (词汇 61)",
    "root": "root-61 (词根释义)",
    "example": "This is an example sentence for TOEFLWord61."
  },
  {
    "word": "TOEFLWord62",
    "phonetic": "/toeflˈwɜːrd62/",
    "meaning": "认知 (词汇 62)",
    "root": "root-62 (词根释义)",
    "example": "This is an example sentence for TOEFLWord62."
  },
  {
    "word": "TOEFLWord63",
    "phonetic": "/toeflˈwɜːrd63/",
    "meaning": "假说 (词汇 63)",
    "root": "root-63 (词根释义)",
    "example": "This is an example sentence for TOEFLWord63."
  },
  {
    "word": "TOEFLWord64",
    "phonetic": "/toeflˈwɜːrd64/",
    "meaning": "地质学 (词汇 64)",
    "root": "root-64 (词根释义)",
    "example": "This is an example sentence for TOEFLWord64."
  },
  {
    "word": "TOEFLWord65",
    "phonetic": "/toeflˈwɜːrd65/",
    "meaning": "认知 (词汇 65)",
    "root": "root-65 (词根释义)",
    "example": "This is an example sentence for TOEFLWord65."
  },
  {
    "word": "TOEFLWord66",
    "phonetic": "/toeflˈwɜːrd66/",
    "meaning": "实证 (词汇 66)",
    "root": "root-66 (词根释义)",
    "example": "This is an example sentence for TOEFLWord66."
  },
  {
    "word": "TOEFLWord67",
    "phonetic": "/toeflˈwɜːrd67/",
    "meaning": "假说 (词汇 67)",
    "root": "root-67 (词根释义)",
    "example": "This is an example sentence for TOEFLWord67."
  },
  {
    "word": "TOEFLWord68",
    "phonetic": "/toeflˈwɜːrd68/",
    "meaning": "认知 (词汇 68)",
    "root": "root-68 (词根释义)",
    "example": "This is an example sentence for TOEFLWord68."
  },
  {
    "word": "TOEFLWord69",
    "phonetic": "/toeflˈwɜːrd69/",
    "meaning": "机制 (词汇 69)",
    "root": "root-69 (词根释义)",
    "example": "This is an example sentence for TOEFLWord69."
  },
  {
    "word": "TOEFLWord70",
    "phonetic": "/toeflˈwɜːrd70/",
    "meaning": "生物学 (词汇 70)",
    "root": "root-70 (词根释义)",
    "example": "This is an example sentence for TOEFLWord70."
  },
  {
    "word": "TOEFLWord71",
    "phonetic": "/toeflˈwɜːrd71/",
    "meaning": "机制 (词汇 71)",
    "root": "root-71 (词根释义)",
    "example": "This is an example sentence for TOEFLWord71."
  },
  {
    "word": "TOEFLWord72",
    "phonetic": "/toeflˈwɜːrd72/",
    "meaning": "假说 (词汇 72)",
    "root": "root-72 (词根释义)",
    "example": "This is an example sentence for TOEFLWord72."
  },
  {
    "word": "TOEFLWord73",
    "phonetic": "/toeflˈwɜːrd73/",
    "meaning": "生物学 (词汇 73)",
    "root": "root-73 (词根释义)",
    "example": "This is an example sentence for TOEFLWord73."
  },
  {
    "word": "TOEFLWord74",
    "phonetic": "/toeflˈwɜːrd74/",
    "meaning": "艺术史 (词汇 74)",
    "root": "root-74 (词根释义)",
    "example": "This is an example sentence for TOEFLWord74."
  },
  {
    "word": "TOEFLWord75",
    "phonetic": "/toeflˈwɜːrd75/",
    "meaning": "心理学 (词汇 75)",
    "root": "root-75 (词根释义)",
    "example": "This is an example sentence for TOEFLWord75."
  },
  {
    "word": "TOEFLWord76",
    "phonetic": "/toeflˈwɜːrd76/",
    "meaning": "艺术史 (词汇 76)",
    "root": "root-76 (词根释义)",
    "example": "This is an example sentence for TOEFLWord76."
  },
  {
    "word": "TOEFLWord77",
    "phonetic": "/toeflˈwɜːrd77/",
    "meaning": "艺术史 (词汇 77)",
    "root": "root-77 (词根释义)",
    "example": "This is an example sentence for TOEFLWord77."
  },
  {
    "word": "TOEFLWord78",
    "phonetic": "/toeflˈwɜːrd78/",
    "meaning": "假说 (词汇 78)",
    "root": "root-78 (词根释义)",
    "example": "This is an example sentence for TOEFLWord78."
  },
  {
    "word": "TOEFLWord79",
    "phonetic": "/toeflˈwɜːrd79/",
    "meaning": "范式 (词汇 79)",
    "root": "root-79 (词根释义)",
    "example": "This is an example sentence for TOEFLWord79."
  },
  {
    "word": "TOEFLWord80",
    "phonetic": "/toeflˈwɜːrd80/",
    "meaning": "实证 (词汇 80)",
    "root": "root-80 (词根释义)",
    "example": "This is an example sentence for TOEFLWord80."
  },
  {
    "word": "TOEFLWord81",
    "phonetic": "/toeflˈwɜːrd81/",
    "meaning": "机制 (词汇 81)",
    "root": "root-81 (词根释义)",
    "example": "This is an example sentence for TOEFLWord81."
  },
  {
    "word": "TOEFLWord82",
    "phonetic": "/toeflˈwɜːrd82/",
    "meaning": "天文学 (词汇 82)",
    "root": "root-82 (词根释义)",
    "example": "This is an example sentence for TOEFLWord82."
  },
  {
    "word": "TOEFLWord83",
    "phonetic": "/toeflˈwɜːrd83/",
    "meaning": "天文学 (词汇 83)",
    "root": "root-83 (词根释义)",
    "example": "This is an example sentence for TOEFLWord83."
  },
  {
    "word": "TOEFLWord84",
    "phonetic": "/toeflˈwɜːrd84/",
    "meaning": "心理学 (词汇 84)",
    "root": "root-84 (词根释义)",
    "example": "This is an example sentence for TOEFLWord84."
  },
  {
    "word": "TOEFLWord85",
    "phonetic": "/toeflˈwɜːrd85/",
    "meaning": "生物学 (词汇 85)",
    "root": "root-85 (词根释义)",
    "example": "This is an example sentence for TOEFLWord85."
  },
  {
    "word": "TOEFLWord86",
    "phonetic": "/toeflˈwɜːrd86/",
    "meaning": "实证 (词汇 86)",
    "root": "root-86 (词根释义)",
    "example": "This is an example sentence for TOEFLWord86."
  },
  {
    "word": "TOEFLWord87",
    "phonetic": "/toeflˈwɜːrd87/",
    "meaning": "天文学 (词汇 87)",
    "root": "root-87 (词根释义)",
    "example": "This is an example sentence for TOEFLWord87."
  },
  {
    "word": "TOEFLWord88",
    "phonetic": "/toeflˈwɜːrd88/",
    "meaning": "心理学 (词汇 88)",
    "root": "root-88 (词根释义)",
    "example": "This is an example sentence for TOEFLWord88."
  },
  {
    "word": "TOEFLWord89",
    "phonetic": "/toeflˈwɜːrd89/",
    "meaning": "假说 (词汇 89)",
    "root": "root-89 (词根释义)",
    "example": "This is an example sentence for TOEFLWord89."
  },
  {
    "word": "TOEFLWord90",
    "phonetic": "/toeflˈwɜːrd90/",
    "meaning": "机制 (词汇 90)",
    "root": "root-90 (词根释义)",
    "example": "This is an example sentence for TOEFLWord90."
  },
  {
    "word": "TOEFLWord91",
    "phonetic": "/toeflˈwɜːrd91/",
    "meaning": "实证 (词汇 91)",
    "root": "root-91 (词根释义)",
    "example": "This is an example sentence for TOEFLWord91."
  },
  {
    "word": "TOEFLWord92",
    "phonetic": "/toeflˈwɜːrd92/",
    "meaning": "生物学 (词汇 92)",
    "root": "root-92 (词根释义)",
    "example": "This is an example sentence for TOEFLWord92."
  },
  {
    "word": "TOEFLWord93",
    "phonetic": "/toeflˈwɜːrd93/",
    "meaning": "范式 (词汇 93)",
    "root": "root-93 (词根释义)",
    "example": "This is an example sentence for TOEFLWord93."
  },
  {
    "word": "TOEFLWord94",
    "phonetic": "/toeflˈwɜːrd94/",
    "meaning": "生物学 (词汇 94)",
    "root": "root-94 (词根释义)",
    "example": "This is an example sentence for TOEFLWord94."
  },
  {
    "word": "TOEFLWord95",
    "phonetic": "/toeflˈwɜːrd95/",
    "meaning": "艺术史 (词汇 95)",
    "root": "root-95 (词根释义)",
    "example": "This is an example sentence for TOEFLWord95."
  },
  {
    "word": "TOEFLWord96",
    "phonetic": "/toeflˈwɜːrd96/",
    "meaning": "地质学 (词汇 96)",
    "root": "root-96 (词根释义)",
    "example": "This is an example sentence for TOEFLWord96."
  },
  {
    "word": "TOEFLWord97",
    "phonetic": "/toeflˈwɜːrd97/",
    "meaning": "艺术史 (词汇 97)",
    "root": "root-97 (词根释义)",
    "example": "This is an example sentence for TOEFLWord97."
  },
  {
    "word": "TOEFLWord98",
    "phonetic": "/toeflˈwɜːrd98/",
    "meaning": "艺术史 (词汇 98)",
    "root": "root-98 (词根释义)",
    "example": "This is an example sentence for TOEFLWord98."
  },
  {
    "word": "TOEFLWord99",
    "phonetic": "/toeflˈwɜːrd99/",
    "meaning": "生物学 (词汇 99)",
    "root": "root-99 (词根释义)",
    "example": "This is an example sentence for TOEFLWord99."
  },
  {
    "word": "TOEFLWord100",
    "phonetic": "/toeflˈwɜːrd100/",
    "meaning": "艺术史 (词汇 100)",
    "root": "root-100 (词根释义)",
    "example": "This is an example sentence for TOEFLWord100."
  },
  {
    "word": "TOEFLWord101",
    "phonetic": "/toeflˈwɜːrd101/",
    "meaning": "假说 (词汇 101)",
    "root": "root-101 (词根释义)",
    "example": "This is an example sentence for TOEFLWord101."
  },
  {
    "word": "TOEFLWord102",
    "phonetic": "/toeflˈwɜːrd102/",
    "meaning": "艺术史 (词汇 102)",
    "root": "root-102 (词根释义)",
    "example": "This is an example sentence for TOEFLWord102."
  },
  {
    "word": "TOEFLWord103",
    "phonetic": "/toeflˈwɜːrd103/",
    "meaning": "假说 (词汇 103)",
    "root": "root-103 (词根释义)",
    "example": "This is an example sentence for TOEFLWord103."
  },
  {
    "word": "TOEFLWord104",
    "phonetic": "/toeflˈwɜːrd104/",
    "meaning": "假说 (词汇 104)",
    "root": "root-104 (词根释义)",
    "example": "This is an example sentence for TOEFLWord104."
  },
  {
    "word": "TOEFLWord105",
    "phonetic": "/toeflˈwɜːrd105/",
    "meaning": "机制 (词汇 105)",
    "root": "root-105 (词根释义)",
    "example": "This is an example sentence for TOEFLWord105."
  },
  {
    "word": "TOEFLWord106",
    "phonetic": "/toeflˈwɜːrd106/",
    "meaning": "生物学 (词汇 106)",
    "root": "root-106 (词根释义)",
    "example": "This is an example sentence for TOEFLWord106."
  },
  {
    "word": "TOEFLWord107",
    "phonetic": "/toeflˈwɜːrd107/",
    "meaning": "艺术史 (词汇 107)",
    "root": "root-107 (词根释义)",
    "example": "This is an example sentence for TOEFLWord107."
  },
  {
    "word": "TOEFLWord108",
    "phonetic": "/toeflˈwɜːrd108/",
    "meaning": "生物学 (词汇 108)",
    "root": "root-108 (词根释义)",
    "example": "This is an example sentence for TOEFLWord108."
  },
  {
    "word": "TOEFLWord109",
    "phonetic": "/toeflˈwɜːrd109/",
    "meaning": "心理学 (词汇 109)",
    "root": "root-109 (词根释义)",
    "example": "This is an example sentence for TOEFLWord109."
  },
  {
    "word": "TOEFLWord110",
    "phonetic": "/toeflˈwɜːrd110/",
    "meaning": "假说 (词汇 110)",
    "root": "root-110 (词根释义)",
    "example": "This is an example sentence for TOEFLWord110."
  },
  {
    "word": "TOEFLWord111",
    "phonetic": "/toeflˈwɜːrd111/",
    "meaning": "心理学 (词汇 111)",
    "root": "root-111 (词根释义)",
    "example": "This is an example sentence for TOEFLWord111."
  },
  {
    "word": "TOEFLWord112",
    "phonetic": "/toeflˈwɜːrd112/",
    "meaning": "假说 (词汇 112)",
    "root": "root-112 (词根释义)",
    "example": "This is an example sentence for TOEFLWord112."
  },
  {
    "word": "TOEFLWord113",
    "phonetic": "/toeflˈwɜːrd113/",
    "meaning": "实证 (词汇 113)",
    "root": "root-113 (词根释义)",
    "example": "This is an example sentence for TOEFLWord113."
  },
  {
    "word": "TOEFLWord114",
    "phonetic": "/toeflˈwɜːrd114/",
    "meaning": "实证 (词汇 114)",
    "root": "root-114 (词根释义)",
    "example": "This is an example sentence for TOEFLWord114."
  },
  {
    "word": "TOEFLWord115",
    "phonetic": "/toeflˈwɜːrd115/",
    "meaning": "机制 (词汇 115)",
    "root": "root-115 (词根释义)",
    "example": "This is an example sentence for TOEFLWord115."
  },
  {
    "word": "TOEFLWord116",
    "phonetic": "/toeflˈwɜːrd116/",
    "meaning": "地质学 (词汇 116)",
    "root": "root-116 (词根释义)",
    "example": "This is an example sentence for TOEFLWord116."
  },
  {
    "word": "TOEFLWord117",
    "phonetic": "/toeflˈwɜːrd117/",
    "meaning": "认知 (词汇 117)",
    "root": "root-117 (词根释义)",
    "example": "This is an example sentence for TOEFLWord117."
  },
  {
    "word": "TOEFLWord118",
    "phonetic": "/toeflˈwɜːrd118/",
    "meaning": "认知 (词汇 118)",
    "root": "root-118 (词根释义)",
    "example": "This is an example sentence for TOEFLWord118."
  },
  {
    "word": "TOEFLWord119",
    "phonetic": "/toeflˈwɜːrd119/",
    "meaning": "机制 (词汇 119)",
    "root": "root-119 (词根释义)",
    "example": "This is an example sentence for TOEFLWord119."
  },
  {
    "word": "TOEFLWord120",
    "phonetic": "/toeflˈwɜːrd120/",
    "meaning": "心理学 (词汇 120)",
    "root": "root-120 (词根释义)",
    "example": "This is an example sentence for TOEFLWord120."
  },
  {
    "word": "TOEFLWord121",
    "phonetic": "/toeflˈwɜːrd121/",
    "meaning": "认知 (词汇 121)",
    "root": "root-121 (词根释义)",
    "example": "This is an example sentence for TOEFLWord121."
  },
  {
    "word": "TOEFLWord122",
    "phonetic": "/toeflˈwɜːrd122/",
    "meaning": "认知 (词汇 122)",
    "root": "root-122 (词根释义)",
    "example": "This is an example sentence for TOEFLWord122."
  },
  {
    "word": "TOEFLWord123",
    "phonetic": "/toeflˈwɜːrd123/",
    "meaning": "范式 (词汇 123)",
    "root": "root-123 (词根释义)",
    "example": "This is an example sentence for TOEFLWord123."
  },
  {
    "word": "TOEFLWord124",
    "phonetic": "/toeflˈwɜːrd124/",
    "meaning": "机制 (词汇 124)",
    "root": "root-124 (词根释义)",
    "example": "This is an example sentence for TOEFLWord124."
  },
  {
    "word": "TOEFLWord125",
    "phonetic": "/toeflˈwɜːrd125/",
    "meaning": "生物学 (词汇 125)",
    "root": "root-125 (词根释义)",
    "example": "This is an example sentence for TOEFLWord125."
  },
  {
    "word": "TOEFLWord126",
    "phonetic": "/toeflˈwɜːrd126/",
    "meaning": "认知 (词汇 126)",
    "root": "root-126 (词根释义)",
    "example": "This is an example sentence for TOEFLWord126."
  },
  {
    "word": "TOEFLWord127",
    "phonetic": "/toeflˈwɜːrd127/",
    "meaning": "范式 (词汇 127)",
    "root": "root-127 (词根释义)",
    "example": "This is an example sentence for TOEFLWord127."
  },
  {
    "word": "TOEFLWord128",
    "phonetic": "/toeflˈwɜːrd128/",
    "meaning": "天文学 (词汇 128)",
    "root": "root-128 (词根释义)",
    "example": "This is an example sentence for TOEFLWord128."
  },
  {
    "word": "TOEFLWord129",
    "phonetic": "/toeflˈwɜːrd129/",
    "meaning": "艺术史 (词汇 129)",
    "root": "root-129 (词根释义)",
    "example": "This is an example sentence for TOEFLWord129."
  },
  {
    "word": "TOEFLWord130",
    "phonetic": "/toeflˈwɜːrd130/",
    "meaning": "天文学 (词汇 130)",
    "root": "root-130 (词根释义)",
    "example": "This is an example sentence for TOEFLWord130."
  },
  {
    "word": "TOEFLWord131",
    "phonetic": "/toeflˈwɜːrd131/",
    "meaning": "假说 (词汇 131)",
    "root": "root-131 (词根释义)",
    "example": "This is an example sentence for TOEFLWord131."
  },
  {
    "word": "TOEFLWord132",
    "phonetic": "/toeflˈwɜːrd132/",
    "meaning": "假说 (词汇 132)",
    "root": "root-132 (词根释义)",
    "example": "This is an example sentence for TOEFLWord132."
  },
  {
    "word": "TOEFLWord133",
    "phonetic": "/toeflˈwɜːrd133/",
    "meaning": "生物学 (词汇 133)",
    "root": "root-133 (词根释义)",
    "example": "This is an example sentence for TOEFLWord133."
  },
  {
    "word": "TOEFLWord134",
    "phonetic": "/toeflˈwɜːrd134/",
    "meaning": "地质学 (词汇 134)",
    "root": "root-134 (词根释义)",
    "example": "This is an example sentence for TOEFLWord134."
  },
  {
    "word": "TOEFLWord135",
    "phonetic": "/toeflˈwɜːrd135/",
    "meaning": "艺术史 (词汇 135)",
    "root": "root-135 (词根释义)",
    "example": "This is an example sentence for TOEFLWord135."
  },
  {
    "word": "TOEFLWord136",
    "phonetic": "/toeflˈwɜːrd136/",
    "meaning": "天文学 (词汇 136)",
    "root": "root-136 (词根释义)",
    "example": "This is an example sentence for TOEFLWord136."
  },
  {
    "word": "TOEFLWord137",
    "phonetic": "/toeflˈwɜːrd137/",
    "meaning": "认知 (词汇 137)",
    "root": "root-137 (词根释义)",
    "example": "This is an example sentence for TOEFLWord137."
  },
  {
    "word": "TOEFLWord138",
    "phonetic": "/toeflˈwɜːrd138/",
    "meaning": "实证 (词汇 138)",
    "root": "root-138 (词根释义)",
    "example": "This is an example sentence for TOEFLWord138."
  },
  {
    "word": "TOEFLWord139",
    "phonetic": "/toeflˈwɜːrd139/",
    "meaning": "认知 (词汇 139)",
    "root": "root-139 (词根释义)",
    "example": "This is an example sentence for TOEFLWord139."
  },
  {
    "word": "TOEFLWord140",
    "phonetic": "/toeflˈwɜːrd140/",
    "meaning": "假说 (词汇 140)",
    "root": "root-140 (词根释义)",
    "example": "This is an example sentence for TOEFLWord140."
  },
  {
    "word": "TOEFLWord141",
    "phonetic": "/toeflˈwɜːrd141/",
    "meaning": "生物学 (词汇 141)",
    "root": "root-141 (词根释义)",
    "example": "This is an example sentence for TOEFLWord141."
  },
  {
    "word": "TOEFLWord142",
    "phonetic": "/toeflˈwɜːrd142/",
    "meaning": "生物学 (词汇 142)",
    "root": "root-142 (词根释义)",
    "example": "This is an example sentence for TOEFLWord142."
  },
  {
    "word": "TOEFLWord143",
    "phonetic": "/toeflˈwɜːrd143/",
    "meaning": "天文学 (词汇 143)",
    "root": "root-143 (词根释义)",
    "example": "This is an example sentence for TOEFLWord143."
  },
  {
    "word": "TOEFLWord144",
    "phonetic": "/toeflˈwɜːrd144/",
    "meaning": "天文学 (词汇 144)",
    "root": "root-144 (词根释义)",
    "example": "This is an example sentence for TOEFLWord144."
  },
  {
    "word": "TOEFLWord145",
    "phonetic": "/toeflˈwɜːrd145/",
    "meaning": "心理学 (词汇 145)",
    "root": "root-145 (词根释义)",
    "example": "This is an example sentence for TOEFLWord145."
  },
  {
    "word": "TOEFLWord146",
    "phonetic": "/toeflˈwɜːrd146/",
    "meaning": "天文学 (词汇 146)",
    "root": "root-146 (词根释义)",
    "example": "This is an example sentence for TOEFLWord146."
  },
  {
    "word": "TOEFLWord147",
    "phonetic": "/toeflˈwɜːrd147/",
    "meaning": "地质学 (词汇 147)",
    "root": "root-147 (词根释义)",
    "example": "This is an example sentence for TOEFLWord147."
  },
  {
    "word": "TOEFLWord148",
    "phonetic": "/toeflˈwɜːrd148/",
    "meaning": "范式 (词汇 148)",
    "root": "root-148 (词根释义)",
    "example": "This is an example sentence for TOEFLWord148."
  },
  {
    "word": "TOEFLWord149",
    "phonetic": "/toeflˈwɜːrd149/",
    "meaning": "认知 (词汇 149)",
    "root": "root-149 (词根释义)",
    "example": "This is an example sentence for TOEFLWord149."
  },
  {
    "word": "TOEFLWord150",
    "phonetic": "/toeflˈwɜːrd150/",
    "meaning": "艺术史 (词汇 150)",
    "root": "root-150 (词根释义)",
    "example": "This is an example sentence for TOEFLWord150."
  },
  {
    "word": "TOEFLWord151",
    "phonetic": "/toeflˈwɜːrd151/",
    "meaning": "范式 (词汇 151)",
    "root": "root-151 (词根释义)",
    "example": "This is an example sentence for TOEFLWord151."
  },
  {
    "word": "TOEFLWord152",
    "phonetic": "/toeflˈwɜːrd152/",
    "meaning": "实证 (词汇 152)",
    "root": "root-152 (词根释义)",
    "example": "This is an example sentence for TOEFLWord152."
  },
  {
    "word": "TOEFLWord153",
    "phonetic": "/toeflˈwɜːrd153/",
    "meaning": "艺术史 (词汇 153)",
    "root": "root-153 (词根释义)",
    "example": "This is an example sentence for TOEFLWord153."
  },
  {
    "word": "TOEFLWord154",
    "phonetic": "/toeflˈwɜːrd154/",
    "meaning": "地质学 (词汇 154)",
    "root": "root-154 (词根释义)",
    "example": "This is an example sentence for TOEFLWord154."
  },
  {
    "word": "TOEFLWord155",
    "phonetic": "/toeflˈwɜːrd155/",
    "meaning": "认知 (词汇 155)",
    "root": "root-155 (词根释义)",
    "example": "This is an example sentence for TOEFLWord155."
  },
  {
    "word": "TOEFLWord156",
    "phonetic": "/toeflˈwɜːrd156/",
    "meaning": "艺术史 (词汇 156)",
    "root": "root-156 (词根释义)",
    "example": "This is an example sentence for TOEFLWord156."
  },
  {
    "word": "TOEFLWord157",
    "phonetic": "/toeflˈwɜːrd157/",
    "meaning": "认知 (词汇 157)",
    "root": "root-157 (词根释义)",
    "example": "This is an example sentence for TOEFLWord157."
  },
  {
    "word": "TOEFLWord158",
    "phonetic": "/toeflˈwɜːrd158/",
    "meaning": "机制 (词汇 158)",
    "root": "root-158 (词根释义)",
    "example": "This is an example sentence for TOEFLWord158."
  },
  {
    "word": "TOEFLWord159",
    "phonetic": "/toeflˈwɜːrd159/",
    "meaning": "心理学 (词汇 159)",
    "root": "root-159 (词根释义)",
    "example": "This is an example sentence for TOEFLWord159."
  },
  {
    "word": "TOEFLWord160",
    "phonetic": "/toeflˈwɜːrd160/",
    "meaning": "地质学 (词汇 160)",
    "root": "root-160 (词根释义)",
    "example": "This is an example sentence for TOEFLWord160."
  },
  {
    "word": "TOEFLWord161",
    "phonetic": "/toeflˈwɜːrd161/",
    "meaning": "机制 (词汇 161)",
    "root": "root-161 (词根释义)",
    "example": "This is an example sentence for TOEFLWord161."
  },
  {
    "word": "TOEFLWord162",
    "phonetic": "/toeflˈwɜːrd162/",
    "meaning": "艺术史 (词汇 162)",
    "root": "root-162 (词根释义)",
    "example": "This is an example sentence for TOEFLWord162."
  },
  {
    "word": "TOEFLWord163",
    "phonetic": "/toeflˈwɜːrd163/",
    "meaning": "机制 (词汇 163)",
    "root": "root-163 (词根释义)",
    "example": "This is an example sentence for TOEFLWord163."
  },
  {
    "word": "TOEFLWord164",
    "phonetic": "/toeflˈwɜːrd164/",
    "meaning": "假说 (词汇 164)",
    "root": "root-164 (词根释义)",
    "example": "This is an example sentence for TOEFLWord164."
  },
  {
    "word": "TOEFLWord165",
    "phonetic": "/toeflˈwɜːrd165/",
    "meaning": "心理学 (词汇 165)",
    "root": "root-165 (词根释义)",
    "example": "This is an example sentence for TOEFLWord165."
  },
  {
    "word": "TOEFLWord166",
    "phonetic": "/toeflˈwɜːrd166/",
    "meaning": "范式 (词汇 166)",
    "root": "root-166 (词根释义)",
    "example": "This is an example sentence for TOEFLWord166."
  },
  {
    "word": "TOEFLWord167",
    "phonetic": "/toeflˈwɜːrd167/",
    "meaning": "假说 (词汇 167)",
    "root": "root-167 (词根释义)",
    "example": "This is an example sentence for TOEFLWord167."
  },
  {
    "word": "TOEFLWord168",
    "phonetic": "/toeflˈwɜːrd168/",
    "meaning": "实证 (词汇 168)",
    "root": "root-168 (词根释义)",
    "example": "This is an example sentence for TOEFLWord168."
  },
  {
    "word": "TOEFLWord169",
    "phonetic": "/toeflˈwɜːrd169/",
    "meaning": "生物学 (词汇 169)",
    "root": "root-169 (词根释义)",
    "example": "This is an example sentence for TOEFLWord169."
  },
  {
    "word": "TOEFLWord170",
    "phonetic": "/toeflˈwɜːrd170/",
    "meaning": "假说 (词汇 170)",
    "root": "root-170 (词根释义)",
    "example": "This is an example sentence for TOEFLWord170."
  },
  {
    "word": "TOEFLWord171",
    "phonetic": "/toeflˈwɜːrd171/",
    "meaning": "心理学 (词汇 171)",
    "root": "root-171 (词根释义)",
    "example": "This is an example sentence for TOEFLWord171."
  },
  {
    "word": "TOEFLWord172",
    "phonetic": "/toeflˈwɜːrd172/",
    "meaning": "范式 (词汇 172)",
    "root": "root-172 (词根释义)",
    "example": "This is an example sentence for TOEFLWord172."
  },
  {
    "word": "TOEFLWord173",
    "phonetic": "/toeflˈwɜːrd173/",
    "meaning": "范式 (词汇 173)",
    "root": "root-173 (词根释义)",
    "example": "This is an example sentence for TOEFLWord173."
  },
  {
    "word": "TOEFLWord174",
    "phonetic": "/toeflˈwɜːrd174/",
    "meaning": "假说 (词汇 174)",
    "root": "root-174 (词根释义)",
    "example": "This is an example sentence for TOEFLWord174."
  },
  {
    "word": "TOEFLWord175",
    "phonetic": "/toeflˈwɜːrd175/",
    "meaning": "实证 (词汇 175)",
    "root": "root-175 (词根释义)",
    "example": "This is an example sentence for TOEFLWord175."
  },
  {
    "word": "TOEFLWord176",
    "phonetic": "/toeflˈwɜːrd176/",
    "meaning": "天文学 (词汇 176)",
    "root": "root-176 (词根释义)",
    "example": "This is an example sentence for TOEFLWord176."
  },
  {
    "word": "TOEFLWord177",
    "phonetic": "/toeflˈwɜːrd177/",
    "meaning": "天文学 (词汇 177)",
    "root": "root-177 (词根释义)",
    "example": "This is an example sentence for TOEFLWord177."
  },
  {
    "word": "TOEFLWord178",
    "phonetic": "/toeflˈwɜːrd178/",
    "meaning": "艺术史 (词汇 178)",
    "root": "root-178 (词根释义)",
    "example": "This is an example sentence for TOEFLWord178."
  },
  {
    "word": "TOEFLWord179",
    "phonetic": "/toeflˈwɜːrd179/",
    "meaning": "认知 (词汇 179)",
    "root": "root-179 (词根释义)",
    "example": "This is an example sentence for TOEFLWord179."
  },
  {
    "word": "TOEFLWord180",
    "phonetic": "/toeflˈwɜːrd180/",
    "meaning": "艺术史 (词汇 180)",
    "root": "root-180 (词根释义)",
    "example": "This is an example sentence for TOEFLWord180."
  },
  {
    "word": "TOEFLWord181",
    "phonetic": "/toeflˈwɜːrd181/",
    "meaning": "认知 (词汇 181)",
    "root": "root-181 (词根释义)",
    "example": "This is an example sentence for TOEFLWord181."
  },
  {
    "word": "TOEFLWord182",
    "phonetic": "/toeflˈwɜːrd182/",
    "meaning": "范式 (词汇 182)",
    "root": "root-182 (词根释义)",
    "example": "This is an example sentence for TOEFLWord182."
  },
  {
    "word": "TOEFLWord183",
    "phonetic": "/toeflˈwɜːrd183/",
    "meaning": "心理学 (词汇 183)",
    "root": "root-183 (词根释义)",
    "example": "This is an example sentence for TOEFLWord183."
  },
  {
    "word": "TOEFLWord184",
    "phonetic": "/toeflˈwɜːrd184/",
    "meaning": "地质学 (词汇 184)",
    "root": "root-184 (词根释义)",
    "example": "This is an example sentence for TOEFLWord184."
  },
  {
    "word": "TOEFLWord185",
    "phonetic": "/toeflˈwɜːrd185/",
    "meaning": "认知 (词汇 185)",
    "root": "root-185 (词根释义)",
    "example": "This is an example sentence for TOEFLWord185."
  },
  {
    "word": "TOEFLWord186",
    "phonetic": "/toeflˈwɜːrd186/",
    "meaning": "地质学 (词汇 186)",
    "root": "root-186 (词根释义)",
    "example": "This is an example sentence for TOEFLWord186."
  },
  {
    "word": "TOEFLWord187",
    "phonetic": "/toeflˈwɜːrd187/",
    "meaning": "地质学 (词汇 187)",
    "root": "root-187 (词根释义)",
    "example": "This is an example sentence for TOEFLWord187."
  },
  {
    "word": "TOEFLWord188",
    "phonetic": "/toeflˈwɜːrd188/",
    "meaning": "范式 (词汇 188)",
    "root": "root-188 (词根释义)",
    "example": "This is an example sentence for TOEFLWord188."
  },
  {
    "word": "TOEFLWord189",
    "phonetic": "/toeflˈwɜːrd189/",
    "meaning": "范式 (词汇 189)",
    "root": "root-189 (词根释义)",
    "example": "This is an example sentence for TOEFLWord189."
  },
  {
    "word": "TOEFLWord190",
    "phonetic": "/toeflˈwɜːrd190/",
    "meaning": "生物学 (词汇 190)",
    "root": "root-190 (词根释义)",
    "example": "This is an example sentence for TOEFLWord190."
  },
  {
    "word": "TOEFLWord191",
    "phonetic": "/toeflˈwɜːrd191/",
    "meaning": "地质学 (词汇 191)",
    "root": "root-191 (词根释义)",
    "example": "This is an example sentence for TOEFLWord191."
  },
  {
    "word": "TOEFLWord192",
    "phonetic": "/toeflˈwɜːrd192/",
    "meaning": "心理学 (词汇 192)",
    "root": "root-192 (词根释义)",
    "example": "This is an example sentence for TOEFLWord192."
  },
  {
    "word": "TOEFLWord193",
    "phonetic": "/toeflˈwɜːrd193/",
    "meaning": "地质学 (词汇 193)",
    "root": "root-193 (词根释义)",
    "example": "This is an example sentence for TOEFLWord193."
  },
  {
    "word": "TOEFLWord194",
    "phonetic": "/toeflˈwɜːrd194/",
    "meaning": "机制 (词汇 194)",
    "root": "root-194 (词根释义)",
    "example": "This is an example sentence for TOEFLWord194."
  },
  {
    "word": "TOEFLWord195",
    "phonetic": "/toeflˈwɜːrd195/",
    "meaning": "艺术史 (词汇 195)",
    "root": "root-195 (词根释义)",
    "example": "This is an example sentence for TOEFLWord195."
  },
  {
    "word": "TOEFLWord196",
    "phonetic": "/toeflˈwɜːrd196/",
    "meaning": "机制 (词汇 196)",
    "root": "root-196 (词根释义)",
    "example": "This is an example sentence for TOEFLWord196."
  },
  {
    "word": "TOEFLWord197",
    "phonetic": "/toeflˈwɜːrd197/",
    "meaning": "心理学 (词汇 197)",
    "root": "root-197 (词根释义)",
    "example": "This is an example sentence for TOEFLWord197."
  },
  {
    "word": "TOEFLWord198",
    "phonetic": "/toeflˈwɜːrd198/",
    "meaning": "天文学 (词汇 198)",
    "root": "root-198 (词根释义)",
    "example": "This is an example sentence for TOEFLWord198."
  },
  {
    "word": "TOEFLWord199",
    "phonetic": "/toeflˈwɜːrd199/",
    "meaning": "认知 (词汇 199)",
    "root": "root-199 (词根释义)",
    "example": "This is an example sentence for TOEFLWord199."
  },
  {
    "word": "TOEFLWord200",
    "phonetic": "/toeflˈwɜːrd200/",
    "meaning": "认知 (词汇 200)",
    "root": "root-200 (词根释义)",
    "example": "This is an example sentence for TOEFLWord200."
  },
  {
    "word": "TOEFLWord201",
    "phonetic": "/toeflˈwɜːrd201/",
    "meaning": "艺术史 (词汇 201)",
    "root": "root-201 (词根释义)",
    "example": "This is an example sentence for TOEFLWord201."
  },
  {
    "word": "TOEFLWord202",
    "phonetic": "/toeflˈwɜːrd202/",
    "meaning": "范式 (词汇 202)",
    "root": "root-202 (词根释义)",
    "example": "This is an example sentence for TOEFLWord202."
  },
  {
    "word": "TOEFLWord203",
    "phonetic": "/toeflˈwɜːrd203/",
    "meaning": "假说 (词汇 203)",
    "root": "root-203 (词根释义)",
    "example": "This is an example sentence for TOEFLWord203."
  },
  {
    "word": "TOEFLWord204",
    "phonetic": "/toeflˈwɜːrd204/",
    "meaning": "范式 (词汇 204)",
    "root": "root-204 (词根释义)",
    "example": "This is an example sentence for TOEFLWord204."
  },
  {
    "word": "TOEFLWord205",
    "phonetic": "/toeflˈwɜːrd205/",
    "meaning": "认知 (词汇 205)",
    "root": "root-205 (词根释义)",
    "example": "This is an example sentence for TOEFLWord205."
  },
  {
    "word": "TOEFLWord206",
    "phonetic": "/toeflˈwɜːrd206/",
    "meaning": "生物学 (词汇 206)",
    "root": "root-206 (词根释义)",
    "example": "This is an example sentence for TOEFLWord206."
  },
  {
    "word": "TOEFLWord207",
    "phonetic": "/toeflˈwɜːrd207/",
    "meaning": "心理学 (词汇 207)",
    "root": "root-207 (词根释义)",
    "example": "This is an example sentence for TOEFLWord207."
  },
  {
    "word": "TOEFLWord208",
    "phonetic": "/toeflˈwɜːrd208/",
    "meaning": "心理学 (词汇 208)",
    "root": "root-208 (词根释义)",
    "example": "This is an example sentence for TOEFLWord208."
  },
  {
    "word": "TOEFLWord209",
    "phonetic": "/toeflˈwɜːrd209/",
    "meaning": "机制 (词汇 209)",
    "root": "root-209 (词根释义)",
    "example": "This is an example sentence for TOEFLWord209."
  },
  {
    "word": "TOEFLWord210",
    "phonetic": "/toeflˈwɜːrd210/",
    "meaning": "实证 (词汇 210)",
    "root": "root-210 (词根释义)",
    "example": "This is an example sentence for TOEFLWord210."
  },
  {
    "word": "TOEFLWord211",
    "phonetic": "/toeflˈwɜːrd211/",
    "meaning": "范式 (词汇 211)",
    "root": "root-211 (词根释义)",
    "example": "This is an example sentence for TOEFLWord211."
  },
  {
    "word": "TOEFLWord212",
    "phonetic": "/toeflˈwɜːrd212/",
    "meaning": "心理学 (词汇 212)",
    "root": "root-212 (词根释义)",
    "example": "This is an example sentence for TOEFLWord212."
  },
  {
    "word": "TOEFLWord213",
    "phonetic": "/toeflˈwɜːrd213/",
    "meaning": "假说 (词汇 213)",
    "root": "root-213 (词根释义)",
    "example": "This is an example sentence for TOEFLWord213."
  },
  {
    "word": "TOEFLWord214",
    "phonetic": "/toeflˈwɜːrd214/",
    "meaning": "范式 (词汇 214)",
    "root": "root-214 (词根释义)",
    "example": "This is an example sentence for TOEFLWord214."
  },
  {
    "word": "TOEFLWord215",
    "phonetic": "/toeflˈwɜːrd215/",
    "meaning": "实证 (词汇 215)",
    "root": "root-215 (词根释义)",
    "example": "This is an example sentence for TOEFLWord215."
  },
  {
    "word": "TOEFLWord216",
    "phonetic": "/toeflˈwɜːrd216/",
    "meaning": "认知 (词汇 216)",
    "root": "root-216 (词根释义)",
    "example": "This is an example sentence for TOEFLWord216."
  },
  {
    "word": "TOEFLWord217",
    "phonetic": "/toeflˈwɜːrd217/",
    "meaning": "认知 (词汇 217)",
    "root": "root-217 (词根释义)",
    "example": "This is an example sentence for TOEFLWord217."
  },
  {
    "word": "TOEFLWord218",
    "phonetic": "/toeflˈwɜːrd218/",
    "meaning": "地质学 (词汇 218)",
    "root": "root-218 (词根释义)",
    "example": "This is an example sentence for TOEFLWord218."
  },
  {
    "word": "TOEFLWord219",
    "phonetic": "/toeflˈwɜːrd219/",
    "meaning": "机制 (词汇 219)",
    "root": "root-219 (词根释义)",
    "example": "This is an example sentence for TOEFLWord219."
  },
  {
    "word": "TOEFLWord220",
    "phonetic": "/toeflˈwɜːrd220/",
    "meaning": "艺术史 (词汇 220)",
    "root": "root-220 (词根释义)",
    "example": "This is an example sentence for TOEFLWord220."
  },
  {
    "word": "TOEFLWord221",
    "phonetic": "/toeflˈwɜːrd221/",
    "meaning": "假说 (词汇 221)",
    "root": "root-221 (词根释义)",
    "example": "This is an example sentence for TOEFLWord221."
  },
  {
    "word": "TOEFLWord222",
    "phonetic": "/toeflˈwɜːrd222/",
    "meaning": "艺术史 (词汇 222)",
    "root": "root-222 (词根释义)",
    "example": "This is an example sentence for TOEFLWord222."
  },
  {
    "word": "TOEFLWord223",
    "phonetic": "/toeflˈwɜːrd223/",
    "meaning": "生物学 (词汇 223)",
    "root": "root-223 (词根释义)",
    "example": "This is an example sentence for TOEFLWord223."
  },
  {
    "word": "TOEFLWord224",
    "phonetic": "/toeflˈwɜːrd224/",
    "meaning": "假说 (词汇 224)",
    "root": "root-224 (词根释义)",
    "example": "This is an example sentence for TOEFLWord224."
  },
  {
    "word": "TOEFLWord225",
    "phonetic": "/toeflˈwɜːrd225/",
    "meaning": "天文学 (词汇 225)",
    "root": "root-225 (词根释义)",
    "example": "This is an example sentence for TOEFLWord225."
  },
  {
    "word": "TOEFLWord226",
    "phonetic": "/toeflˈwɜːrd226/",
    "meaning": "地质学 (词汇 226)",
    "root": "root-226 (词根释义)",
    "example": "This is an example sentence for TOEFLWord226."
  },
  {
    "word": "TOEFLWord227",
    "phonetic": "/toeflˈwɜːrd227/",
    "meaning": "艺术史 (词汇 227)",
    "root": "root-227 (词根释义)",
    "example": "This is an example sentence for TOEFLWord227."
  },
  {
    "word": "TOEFLWord228",
    "phonetic": "/toeflˈwɜːrd228/",
    "meaning": "认知 (词汇 228)",
    "root": "root-228 (词根释义)",
    "example": "This is an example sentence for TOEFLWord228."
  },
  {
    "word": "TOEFLWord229",
    "phonetic": "/toeflˈwɜːrd229/",
    "meaning": "假说 (词汇 229)",
    "root": "root-229 (词根释义)",
    "example": "This is an example sentence for TOEFLWord229."
  },
  {
    "word": "TOEFLWord230",
    "phonetic": "/toeflˈwɜːrd230/",
    "meaning": "天文学 (词汇 230)",
    "root": "root-230 (词根释义)",
    "example": "This is an example sentence for TOEFLWord230."
  },
  {
    "word": "TOEFLWord231",
    "phonetic": "/toeflˈwɜːrd231/",
    "meaning": "生物学 (词汇 231)",
    "root": "root-231 (词根释义)",
    "example": "This is an example sentence for TOEFLWord231."
  },
  {
    "word": "TOEFLWord232",
    "phonetic": "/toeflˈwɜːrd232/",
    "meaning": "假说 (词汇 232)",
    "root": "root-232 (词根释义)",
    "example": "This is an example sentence for TOEFLWord232."
  },
  {
    "word": "TOEFLWord233",
    "phonetic": "/toeflˈwɜːrd233/",
    "meaning": "机制 (词汇 233)",
    "root": "root-233 (词根释义)",
    "example": "This is an example sentence for TOEFLWord233."
  },
  {
    "word": "TOEFLWord234",
    "phonetic": "/toeflˈwɜːrd234/",
    "meaning": "范式 (词汇 234)",
    "root": "root-234 (词根释义)",
    "example": "This is an example sentence for TOEFLWord234."
  },
  {
    "word": "TOEFLWord235",
    "phonetic": "/toeflˈwɜːrd235/",
    "meaning": "生物学 (词汇 235)",
    "root": "root-235 (词根释义)",
    "example": "This is an example sentence for TOEFLWord235."
  },
  {
    "word": "TOEFLWord236",
    "phonetic": "/toeflˈwɜːrd236/",
    "meaning": "天文学 (词汇 236)",
    "root": "root-236 (词根释义)",
    "example": "This is an example sentence for TOEFLWord236."
  },
  {
    "word": "TOEFLWord237",
    "phonetic": "/toeflˈwɜːrd237/",
    "meaning": "心理学 (词汇 237)",
    "root": "root-237 (词根释义)",
    "example": "This is an example sentence for TOEFLWord237."
  },
  {
    "word": "TOEFLWord238",
    "phonetic": "/toeflˈwɜːrd238/",
    "meaning": "心理学 (词汇 238)",
    "root": "root-238 (词根释义)",
    "example": "This is an example sentence for TOEFLWord238."
  },
  {
    "word": "TOEFLWord239",
    "phonetic": "/toeflˈwɜːrd239/",
    "meaning": "范式 (词汇 239)",
    "root": "root-239 (词根释义)",
    "example": "This is an example sentence for TOEFLWord239."
  },
  {
    "word": "TOEFLWord240",
    "phonetic": "/toeflˈwɜːrd240/",
    "meaning": "范式 (词汇 240)",
    "root": "root-240 (词根释义)",
    "example": "This is an example sentence for TOEFLWord240."
  },
  {
    "word": "TOEFLWord241",
    "phonetic": "/toeflˈwɜːrd241/",
    "meaning": "范式 (词汇 241)",
    "root": "root-241 (词根释义)",
    "example": "This is an example sentence for TOEFLWord241."
  },
  {
    "word": "TOEFLWord242",
    "phonetic": "/toeflˈwɜːrd242/",
    "meaning": "认知 (词汇 242)",
    "root": "root-242 (词根释义)",
    "example": "This is an example sentence for TOEFLWord242."
  },
  {
    "word": "TOEFLWord243",
    "phonetic": "/toeflˈwɜːrd243/",
    "meaning": "实证 (词汇 243)",
    "root": "root-243 (词根释义)",
    "example": "This is an example sentence for TOEFLWord243."
  },
  {
    "word": "TOEFLWord244",
    "phonetic": "/toeflˈwɜːrd244/",
    "meaning": "天文学 (词汇 244)",
    "root": "root-244 (词根释义)",
    "example": "This is an example sentence for TOEFLWord244."
  },
  {
    "word": "TOEFLWord245",
    "phonetic": "/toeflˈwɜːrd245/",
    "meaning": "生物学 (词汇 245)",
    "root": "root-245 (词根释义)",
    "example": "This is an example sentence for TOEFLWord245."
  },
  {
    "word": "TOEFLWord246",
    "phonetic": "/toeflˈwɜːrd246/",
    "meaning": "生物学 (词汇 246)",
    "root": "root-246 (词根释义)",
    "example": "This is an example sentence for TOEFLWord246."
  },
  {
    "word": "TOEFLWord247",
    "phonetic": "/toeflˈwɜːrd247/",
    "meaning": "心理学 (词汇 247)",
    "root": "root-247 (词根释义)",
    "example": "This is an example sentence for TOEFLWord247."
  },
  {
    "word": "TOEFLWord248",
    "phonetic": "/toeflˈwɜːrd248/",
    "meaning": "心理学 (词汇 248)",
    "root": "root-248 (词根释义)",
    "example": "This is an example sentence for TOEFLWord248."
  },
  {
    "word": "TOEFLWord249",
    "phonetic": "/toeflˈwɜːrd249/",
    "meaning": "心理学 (词汇 249)",
    "root": "root-249 (词根释义)",
    "example": "This is an example sentence for TOEFLWord249."
  },
  {
    "word": "TOEFLWord250",
    "phonetic": "/toeflˈwɜːrd250/",
    "meaning": "认知 (词汇 250)",
    "root": "root-250 (词根释义)",
    "example": "This is an example sentence for TOEFLWord250."
  },
  {
    "word": "TOEFLWord251",
    "phonetic": "/toeflˈwɜːrd251/",
    "meaning": "假说 (词汇 251)",
    "root": "root-251 (词根释义)",
    "example": "This is an example sentence for TOEFLWord251."
  },
  {
    "word": "TOEFLWord252",
    "phonetic": "/toeflˈwɜːrd252/",
    "meaning": "心理学 (词汇 252)",
    "root": "root-252 (词根释义)",
    "example": "This is an example sentence for TOEFLWord252."
  },
  {
    "word": "TOEFLWord253",
    "phonetic": "/toeflˈwɜːrd253/",
    "meaning": "实证 (词汇 253)",
    "root": "root-253 (词根释义)",
    "example": "This is an example sentence for TOEFLWord253."
  },
  {
    "word": "TOEFLWord254",
    "phonetic": "/toeflˈwɜːrd254/",
    "meaning": "认知 (词汇 254)",
    "root": "root-254 (词根释义)",
    "example": "This is an example sentence for TOEFLWord254."
  },
  {
    "word": "TOEFLWord255",
    "phonetic": "/toeflˈwɜːrd255/",
    "meaning": "假说 (词汇 255)",
    "root": "root-255 (词根释义)",
    "example": "This is an example sentence for TOEFLWord255."
  },
  {
    "word": "TOEFLWord256",
    "phonetic": "/toeflˈwɜːrd256/",
    "meaning": "认知 (词汇 256)",
    "root": "root-256 (词根释义)",
    "example": "This is an example sentence for TOEFLWord256."
  },
  {
    "word": "TOEFLWord257",
    "phonetic": "/toeflˈwɜːrd257/",
    "meaning": "生物学 (词汇 257)",
    "root": "root-257 (词根释义)",
    "example": "This is an example sentence for TOEFLWord257."
  },
  {
    "word": "TOEFLWord258",
    "phonetic": "/toeflˈwɜːrd258/",
    "meaning": "范式 (词汇 258)",
    "root": "root-258 (词根释义)",
    "example": "This is an example sentence for TOEFLWord258."
  },
  {
    "word": "TOEFLWord259",
    "phonetic": "/toeflˈwɜːrd259/",
    "meaning": "范式 (词汇 259)",
    "root": "root-259 (词根释义)",
    "example": "This is an example sentence for TOEFLWord259."
  },
  {
    "word": "TOEFLWord260",
    "phonetic": "/toeflˈwɜːrd260/",
    "meaning": "机制 (词汇 260)",
    "root": "root-260 (词根释义)",
    "example": "This is an example sentence for TOEFLWord260."
  },
  {
    "word": "TOEFLWord261",
    "phonetic": "/toeflˈwɜːrd261/",
    "meaning": "心理学 (词汇 261)",
    "root": "root-261 (词根释义)",
    "example": "This is an example sentence for TOEFLWord261."
  },
  {
    "word": "TOEFLWord262",
    "phonetic": "/toeflˈwɜːrd262/",
    "meaning": "心理学 (词汇 262)",
    "root": "root-262 (词根释义)",
    "example": "This is an example sentence for TOEFLWord262."
  },
  {
    "word": "TOEFLWord263",
    "phonetic": "/toeflˈwɜːrd263/",
    "meaning": "范式 (词汇 263)",
    "root": "root-263 (词根释义)",
    "example": "This is an example sentence for TOEFLWord263."
  },
  {
    "word": "TOEFLWord264",
    "phonetic": "/toeflˈwɜːrd264/",
    "meaning": "机制 (词汇 264)",
    "root": "root-264 (词根释义)",
    "example": "This is an example sentence for TOEFLWord264."
  },
  {
    "word": "TOEFLWord265",
    "phonetic": "/toeflˈwɜːrd265/",
    "meaning": "心理学 (词汇 265)",
    "root": "root-265 (词根释义)",
    "example": "This is an example sentence for TOEFLWord265."
  },
  {
    "word": "TOEFLWord266",
    "phonetic": "/toeflˈwɜːrd266/",
    "meaning": "假说 (词汇 266)",
    "root": "root-266 (词根释义)",
    "example": "This is an example sentence for TOEFLWord266."
  },
  {
    "word": "TOEFLWord267",
    "phonetic": "/toeflˈwɜːrd267/",
    "meaning": "机制 (词汇 267)",
    "root": "root-267 (词根释义)",
    "example": "This is an example sentence for TOEFLWord267."
  },
  {
    "word": "TOEFLWord268",
    "phonetic": "/toeflˈwɜːrd268/",
    "meaning": "认知 (词汇 268)",
    "root": "root-268 (词根释义)",
    "example": "This is an example sentence for TOEFLWord268."
  },
  {
    "word": "TOEFLWord269",
    "phonetic": "/toeflˈwɜːrd269/",
    "meaning": "机制 (词汇 269)",
    "root": "root-269 (词根释义)",
    "example": "This is an example sentence for TOEFLWord269."
  },
  {
    "word": "TOEFLWord270",
    "phonetic": "/toeflˈwɜːrd270/",
    "meaning": "假说 (词汇 270)",
    "root": "root-270 (词根释义)",
    "example": "This is an example sentence for TOEFLWord270."
  },
  {
    "word": "TOEFLWord271",
    "phonetic": "/toeflˈwɜːrd271/",
    "meaning": "机制 (词汇 271)",
    "root": "root-271 (词根释义)",
    "example": "This is an example sentence for TOEFLWord271."
  },
  {
    "word": "TOEFLWord272",
    "phonetic": "/toeflˈwɜːrd272/",
    "meaning": "实证 (词汇 272)",
    "root": "root-272 (词根释义)",
    "example": "This is an example sentence for TOEFLWord272."
  },
  {
    "word": "TOEFLWord273",
    "phonetic": "/toeflˈwɜːrd273/",
    "meaning": "艺术史 (词汇 273)",
    "root": "root-273 (词根释义)",
    "example": "This is an example sentence for TOEFLWord273."
  },
  {
    "word": "TOEFLWord274",
    "phonetic": "/toeflˈwɜːrd274/",
    "meaning": "假说 (词汇 274)",
    "root": "root-274 (词根释义)",
    "example": "This is an example sentence for TOEFLWord274."
  },
  {
    "word": "TOEFLWord275",
    "phonetic": "/toeflˈwɜːrd275/",
    "meaning": "地质学 (词汇 275)",
    "root": "root-275 (词根释义)",
    "example": "This is an example sentence for TOEFLWord275."
  },
  {
    "word": "TOEFLWord276",
    "phonetic": "/toeflˈwɜːrd276/",
    "meaning": "假说 (词汇 276)",
    "root": "root-276 (词根释义)",
    "example": "This is an example sentence for TOEFLWord276."
  },
  {
    "word": "TOEFLWord277",
    "phonetic": "/toeflˈwɜːrd277/",
    "meaning": "假说 (词汇 277)",
    "root": "root-277 (词根释义)",
    "example": "This is an example sentence for TOEFLWord277."
  },
  {
    "word": "TOEFLWord278",
    "phonetic": "/toeflˈwɜːrd278/",
    "meaning": "范式 (词汇 278)",
    "root": "root-278 (词根释义)",
    "example": "This is an example sentence for TOEFLWord278."
  },
  {
    "word": "TOEFLWord279",
    "phonetic": "/toeflˈwɜːrd279/",
    "meaning": "艺术史 (词汇 279)",
    "root": "root-279 (词根释义)",
    "example": "This is an example sentence for TOEFLWord279."
  },
  {
    "word": "TOEFLWord280",
    "phonetic": "/toeflˈwɜːrd280/",
    "meaning": "假说 (词汇 280)",
    "root": "root-280 (词根释义)",
    "example": "This is an example sentence for TOEFLWord280."
  },
  {
    "word": "TOEFLWord281",
    "phonetic": "/toeflˈwɜːrd281/",
    "meaning": "认知 (词汇 281)",
    "root": "root-281 (词根释义)",
    "example": "This is an example sentence for TOEFLWord281."
  },
  {
    "word": "TOEFLWord282",
    "phonetic": "/toeflˈwɜːrd282/",
    "meaning": "实证 (词汇 282)",
    "root": "root-282 (词根释义)",
    "example": "This is an example sentence for TOEFLWord282."
  },
  {
    "word": "TOEFLWord283",
    "phonetic": "/toeflˈwɜːrd283/",
    "meaning": "天文学 (词汇 283)",
    "root": "root-283 (词根释义)",
    "example": "This is an example sentence for TOEFLWord283."
  },
  {
    "word": "TOEFLWord284",
    "phonetic": "/toeflˈwɜːrd284/",
    "meaning": "心理学 (词汇 284)",
    "root": "root-284 (词根释义)",
    "example": "This is an example sentence for TOEFLWord284."
  },
  {
    "word": "TOEFLWord285",
    "phonetic": "/toeflˈwɜːrd285/",
    "meaning": "心理学 (词汇 285)",
    "root": "root-285 (词根释义)",
    "example": "This is an example sentence for TOEFLWord285."
  },
  {
    "word": "TOEFLWord286",
    "phonetic": "/toeflˈwɜːrd286/",
    "meaning": "艺术史 (词汇 286)",
    "root": "root-286 (词根释义)",
    "example": "This is an example sentence for TOEFLWord286."
  },
  {
    "word": "TOEFLWord287",
    "phonetic": "/toeflˈwɜːrd287/",
    "meaning": "艺术史 (词汇 287)",
    "root": "root-287 (词根释义)",
    "example": "This is an example sentence for TOEFLWord287."
  },
  {
    "word": "TOEFLWord288",
    "phonetic": "/toeflˈwɜːrd288/",
    "meaning": "实证 (词汇 288)",
    "root": "root-288 (词根释义)",
    "example": "This is an example sentence for TOEFLWord288."
  },
  {
    "word": "TOEFLWord289",
    "phonetic": "/toeflˈwɜːrd289/",
    "meaning": "心理学 (词汇 289)",
    "root": "root-289 (词根释义)",
    "example": "This is an example sentence for TOEFLWord289."
  },
  {
    "word": "TOEFLWord290",
    "phonetic": "/toeflˈwɜːrd290/",
    "meaning": "艺术史 (词汇 290)",
    "root": "root-290 (词根释义)",
    "example": "This is an example sentence for TOEFLWord290."
  },
  {
    "word": "TOEFLWord291",
    "phonetic": "/toeflˈwɜːrd291/",
    "meaning": "机制 (词汇 291)",
    "root": "root-291 (词根释义)",
    "example": "This is an example sentence for TOEFLWord291."
  },
  {
    "word": "TOEFLWord292",
    "phonetic": "/toeflˈwɜːrd292/",
    "meaning": "心理学 (词汇 292)",
    "root": "root-292 (词根释义)",
    "example": "This is an example sentence for TOEFLWord292."
  },
  {
    "word": "TOEFLWord293",
    "phonetic": "/toeflˈwɜːrd293/",
    "meaning": "假说 (词汇 293)",
    "root": "root-293 (词根释义)",
    "example": "This is an example sentence for TOEFLWord293."
  },
  {
    "word": "TOEFLWord294",
    "phonetic": "/toeflˈwɜːrd294/",
    "meaning": "艺术史 (词汇 294)",
    "root": "root-294 (词根释义)",
    "example": "This is an example sentence for TOEFLWord294."
  },
  {
    "word": "TOEFLWord295",
    "phonetic": "/toeflˈwɜːrd295/",
    "meaning": "天文学 (词汇 295)",
    "root": "root-295 (词根释义)",
    "example": "This is an example sentence for TOEFLWord295."
  },
  {
    "word": "TOEFLWord296",
    "phonetic": "/toeflˈwɜːrd296/",
    "meaning": "实证 (词汇 296)",
    "root": "root-296 (词根释义)",
    "example": "This is an example sentence for TOEFLWord296."
  },
  {
    "word": "TOEFLWord297",
    "phonetic": "/toeflˈwɜːrd297/",
    "meaning": "天文学 (词汇 297)",
    "root": "root-297 (词根释义)",
    "example": "This is an example sentence for TOEFLWord297."
  },
  {
    "word": "TOEFLWord298",
    "phonetic": "/toeflˈwɜːrd298/",
    "meaning": "艺术史 (词汇 298)",
    "root": "root-298 (词根释义)",
    "example": "This is an example sentence for TOEFLWord298."
  },
  {
    "word": "TOEFLWord299",
    "phonetic": "/toeflˈwɜːrd299/",
    "meaning": "机制 (词汇 299)",
    "root": "root-299 (词根释义)",
    "example": "This is an example sentence for TOEFLWord299."
  },
  {
    "word": "TOEFLWord300",
    "phonetic": "/toeflˈwɜːrd300/",
    "meaning": "艺术史 (词汇 300)",
    "root": "root-300 (词根释义)",
    "example": "This is an example sentence for TOEFLWord300."
  },
  {
    "word": "TOEFLWord301",
    "phonetic": "/toeflˈwɜːrd301/",
    "meaning": "认知 (词汇 301)",
    "root": "root-301 (词根释义)",
    "example": "This is an example sentence for TOEFLWord301."
  },
  {
    "word": "TOEFLWord302",
    "phonetic": "/toeflˈwɜːrd302/",
    "meaning": "心理学 (词汇 302)",
    "root": "root-302 (词根释义)",
    "example": "This is an example sentence for TOEFLWord302."
  },
  {
    "word": "TOEFLWord303",
    "phonetic": "/toeflˈwɜːrd303/",
    "meaning": "天文学 (词汇 303)",
    "root": "root-303 (词根释义)",
    "example": "This is an example sentence for TOEFLWord303."
  },
  {
    "word": "TOEFLWord304",
    "phonetic": "/toeflˈwɜːrd304/",
    "meaning": "实证 (词汇 304)",
    "root": "root-304 (词根释义)",
    "example": "This is an example sentence for TOEFLWord304."
  },
  {
    "word": "TOEFLWord305",
    "phonetic": "/toeflˈwɜːrd305/",
    "meaning": "实证 (词汇 305)",
    "root": "root-305 (词根释义)",
    "example": "This is an example sentence for TOEFLWord305."
  },
  {
    "word": "TOEFLWord306",
    "phonetic": "/toeflˈwɜːrd306/",
    "meaning": "范式 (词汇 306)",
    "root": "root-306 (词根释义)",
    "example": "This is an example sentence for TOEFLWord306."
  },
  {
    "word": "TOEFLWord307",
    "phonetic": "/toeflˈwɜːrd307/",
    "meaning": "假说 (词汇 307)",
    "root": "root-307 (词根释义)",
    "example": "This is an example sentence for TOEFLWord307."
  },
  {
    "word": "TOEFLWord308",
    "phonetic": "/toeflˈwɜːrd308/",
    "meaning": "生物学 (词汇 308)",
    "root": "root-308 (词根释义)",
    "example": "This is an example sentence for TOEFLWord308."
  },
  {
    "word": "TOEFLWord309",
    "phonetic": "/toeflˈwɜːrd309/",
    "meaning": "地质学 (词汇 309)",
    "root": "root-309 (词根释义)",
    "example": "This is an example sentence for TOEFLWord309."
  },
  {
    "word": "TOEFLWord310",
    "phonetic": "/toeflˈwɜːrd310/",
    "meaning": "认知 (词汇 310)",
    "root": "root-310 (词根释义)",
    "example": "This is an example sentence for TOEFLWord310."
  },
  {
    "word": "TOEFLWord311",
    "phonetic": "/toeflˈwɜːrd311/",
    "meaning": "心理学 (词汇 311)",
    "root": "root-311 (词根释义)",
    "example": "This is an example sentence for TOEFLWord311."
  },
  {
    "word": "TOEFLWord312",
    "phonetic": "/toeflˈwɜːrd312/",
    "meaning": "心理学 (词汇 312)",
    "root": "root-312 (词根释义)",
    "example": "This is an example sentence for TOEFLWord312."
  },
  {
    "word": "TOEFLWord313",
    "phonetic": "/toeflˈwɜːrd313/",
    "meaning": "实证 (词汇 313)",
    "root": "root-313 (词根释义)",
    "example": "This is an example sentence for TOEFLWord313."
  },
  {
    "word": "TOEFLWord314",
    "phonetic": "/toeflˈwɜːrd314/",
    "meaning": "机制 (词汇 314)",
    "root": "root-314 (词根释义)",
    "example": "This is an example sentence for TOEFLWord314."
  },
  {
    "word": "TOEFLWord315",
    "phonetic": "/toeflˈwɜːrd315/",
    "meaning": "生物学 (词汇 315)",
    "root": "root-315 (词根释义)",
    "example": "This is an example sentence for TOEFLWord315."
  },
  {
    "word": "TOEFLWord316",
    "phonetic": "/toeflˈwɜːrd316/",
    "meaning": "机制 (词汇 316)",
    "root": "root-316 (词根释义)",
    "example": "This is an example sentence for TOEFLWord316."
  },
  {
    "word": "TOEFLWord317",
    "phonetic": "/toeflˈwɜːrd317/",
    "meaning": "生物学 (词汇 317)",
    "root": "root-317 (词根释义)",
    "example": "This is an example sentence for TOEFLWord317."
  },
  {
    "word": "TOEFLWord318",
    "phonetic": "/toeflˈwɜːrd318/",
    "meaning": "范式 (词汇 318)",
    "root": "root-318 (词根释义)",
    "example": "This is an example sentence for TOEFLWord318."
  },
  {
    "word": "TOEFLWord319",
    "phonetic": "/toeflˈwɜːrd319/",
    "meaning": "艺术史 (词汇 319)",
    "root": "root-319 (词根释义)",
    "example": "This is an example sentence for TOEFLWord319."
  },
  {
    "word": "TOEFLWord320",
    "phonetic": "/toeflˈwɜːrd320/",
    "meaning": "范式 (词汇 320)",
    "root": "root-320 (词根释义)",
    "example": "This is an example sentence for TOEFLWord320."
  },
  {
    "word": "TOEFLWord321",
    "phonetic": "/toeflˈwɜːrd321/",
    "meaning": "范式 (词汇 321)",
    "root": "root-321 (词根释义)",
    "example": "This is an example sentence for TOEFLWord321."
  },
  {
    "word": "TOEFLWord322",
    "phonetic": "/toeflˈwɜːrd322/",
    "meaning": "假说 (词汇 322)",
    "root": "root-322 (词根释义)",
    "example": "This is an example sentence for TOEFLWord322."
  },
  {
    "word": "TOEFLWord323",
    "phonetic": "/toeflˈwɜːrd323/",
    "meaning": "天文学 (词汇 323)",
    "root": "root-323 (词根释义)",
    "example": "This is an example sentence for TOEFLWord323."
  },
  {
    "word": "TOEFLWord324",
    "phonetic": "/toeflˈwɜːrd324/",
    "meaning": "假说 (词汇 324)",
    "root": "root-324 (词根释义)",
    "example": "This is an example sentence for TOEFLWord324."
  },
  {
    "word": "TOEFLWord325",
    "phonetic": "/toeflˈwɜːrd325/",
    "meaning": "范式 (词汇 325)",
    "root": "root-325 (词根释义)",
    "example": "This is an example sentence for TOEFLWord325."
  },
  {
    "word": "TOEFLWord326",
    "phonetic": "/toeflˈwɜːrd326/",
    "meaning": "艺术史 (词汇 326)",
    "root": "root-326 (词根释义)",
    "example": "This is an example sentence for TOEFLWord326."
  },
  {
    "word": "TOEFLWord327",
    "phonetic": "/toeflˈwɜːrd327/",
    "meaning": "生物学 (词汇 327)",
    "root": "root-327 (词根释义)",
    "example": "This is an example sentence for TOEFLWord327."
  },
  {
    "word": "TOEFLWord328",
    "phonetic": "/toeflˈwɜːrd328/",
    "meaning": "地质学 (词汇 328)",
    "root": "root-328 (词根释义)",
    "example": "This is an example sentence for TOEFLWord328."
  },
  {
    "word": "TOEFLWord329",
    "phonetic": "/toeflˈwɜːrd329/",
    "meaning": "天文学 (词汇 329)",
    "root": "root-329 (词根释义)",
    "example": "This is an example sentence for TOEFLWord329."
  },
  {
    "word": "TOEFLWord330",
    "phonetic": "/toeflˈwɜːrd330/",
    "meaning": "心理学 (词汇 330)",
    "root": "root-330 (词根释义)",
    "example": "This is an example sentence for TOEFLWord330."
  },
  {
    "word": "TOEFLWord331",
    "phonetic": "/toeflˈwɜːrd331/",
    "meaning": "地质学 (词汇 331)",
    "root": "root-331 (词根释义)",
    "example": "This is an example sentence for TOEFLWord331."
  },
  {
    "word": "TOEFLWord332",
    "phonetic": "/toeflˈwɜːrd332/",
    "meaning": "机制 (词汇 332)",
    "root": "root-332 (词根释义)",
    "example": "This is an example sentence for TOEFLWord332."
  },
  {
    "word": "TOEFLWord333",
    "phonetic": "/toeflˈwɜːrd333/",
    "meaning": "艺术史 (词汇 333)",
    "root": "root-333 (词根释义)",
    "example": "This is an example sentence for TOEFLWord333."
  },
  {
    "word": "TOEFLWord334",
    "phonetic": "/toeflˈwɜːrd334/",
    "meaning": "假说 (词汇 334)",
    "root": "root-334 (词根释义)",
    "example": "This is an example sentence for TOEFLWord334."
  },
  {
    "word": "TOEFLWord335",
    "phonetic": "/toeflˈwɜːrd335/",
    "meaning": "心理学 (词汇 335)",
    "root": "root-335 (词根释义)",
    "example": "This is an example sentence for TOEFLWord335."
  },
  {
    "word": "TOEFLWord336",
    "phonetic": "/toeflˈwɜːrd336/",
    "meaning": "范式 (词汇 336)",
    "root": "root-336 (词根释义)",
    "example": "This is an example sentence for TOEFLWord336."
  },
  {
    "word": "TOEFLWord337",
    "phonetic": "/toeflˈwɜːrd337/",
    "meaning": "地质学 (词汇 337)",
    "root": "root-337 (词根释义)",
    "example": "This is an example sentence for TOEFLWord337."
  },
  {
    "word": "TOEFLWord338",
    "phonetic": "/toeflˈwɜːrd338/",
    "meaning": "实证 (词汇 338)",
    "root": "root-338 (词根释义)",
    "example": "This is an example sentence for TOEFLWord338."
  },
  {
    "word": "TOEFLWord339",
    "phonetic": "/toeflˈwɜːrd339/",
    "meaning": "实证 (词汇 339)",
    "root": "root-339 (词根释义)",
    "example": "This is an example sentence for TOEFLWord339."
  },
  {
    "word": "TOEFLWord340",
    "phonetic": "/toeflˈwɜːrd340/",
    "meaning": "地质学 (词汇 340)",
    "root": "root-340 (词根释义)",
    "example": "This is an example sentence for TOEFLWord340."
  },
  {
    "word": "TOEFLWord341",
    "phonetic": "/toeflˈwɜːrd341/",
    "meaning": "范式 (词汇 341)",
    "root": "root-341 (词根释义)",
    "example": "This is an example sentence for TOEFLWord341."
  },
  {
    "word": "TOEFLWord342",
    "phonetic": "/toeflˈwɜːrd342/",
    "meaning": "认知 (词汇 342)",
    "root": "root-342 (词根释义)",
    "example": "This is an example sentence for TOEFLWord342."
  },
  {
    "word": "TOEFLWord343",
    "phonetic": "/toeflˈwɜːrd343/",
    "meaning": "心理学 (词汇 343)",
    "root": "root-343 (词根释义)",
    "example": "This is an example sentence for TOEFLWord343."
  },
  {
    "word": "TOEFLWord344",
    "phonetic": "/toeflˈwɜːrd344/",
    "meaning": "地质学 (词汇 344)",
    "root": "root-344 (词根释义)",
    "example": "This is an example sentence for TOEFLWord344."
  },
  {
    "word": "TOEFLWord345",
    "phonetic": "/toeflˈwɜːrd345/",
    "meaning": "地质学 (词汇 345)",
    "root": "root-345 (词根释义)",
    "example": "This is an example sentence for TOEFLWord345."
  },
  {
    "word": "TOEFLWord346",
    "phonetic": "/toeflˈwɜːrd346/",
    "meaning": "实证 (词汇 346)",
    "root": "root-346 (词根释义)",
    "example": "This is an example sentence for TOEFLWord346."
  },
  {
    "word": "TOEFLWord347",
    "phonetic": "/toeflˈwɜːrd347/",
    "meaning": "实证 (词汇 347)",
    "root": "root-347 (词根释义)",
    "example": "This is an example sentence for TOEFLWord347."
  },
  {
    "word": "TOEFLWord348",
    "phonetic": "/toeflˈwɜːrd348/",
    "meaning": "心理学 (词汇 348)",
    "root": "root-348 (词根释义)",
    "example": "This is an example sentence for TOEFLWord348."
  },
  {
    "word": "TOEFLWord349",
    "phonetic": "/toeflˈwɜːrd349/",
    "meaning": "心理学 (词汇 349)",
    "root": "root-349 (词根释义)",
    "example": "This is an example sentence for TOEFLWord349."
  },
  {
    "word": "TOEFLWord350",
    "phonetic": "/toeflˈwɜːrd350/",
    "meaning": "实证 (词汇 350)",
    "root": "root-350 (词根释义)",
    "example": "This is an example sentence for TOEFLWord350."
  },
  {
    "word": "TOEFLWord351",
    "phonetic": "/toeflˈwɜːrd351/",
    "meaning": "艺术史 (词汇 351)",
    "root": "root-351 (词根释义)",
    "example": "This is an example sentence for TOEFLWord351."
  },
  {
    "word": "TOEFLWord352",
    "phonetic": "/toeflˈwɜːrd352/",
    "meaning": "范式 (词汇 352)",
    "root": "root-352 (词根释义)",
    "example": "This is an example sentence for TOEFLWord352."
  },
  {
    "word": "TOEFLWord353",
    "phonetic": "/toeflˈwɜːrd353/",
    "meaning": "地质学 (词汇 353)",
    "root": "root-353 (词根释义)",
    "example": "This is an example sentence for TOEFLWord353."
  },
  {
    "word": "TOEFLWord354",
    "phonetic": "/toeflˈwɜːrd354/",
    "meaning": "地质学 (词汇 354)",
    "root": "root-354 (词根释义)",
    "example": "This is an example sentence for TOEFLWord354."
  },
  {
    "word": "TOEFLWord355",
    "phonetic": "/toeflˈwɜːrd355/",
    "meaning": "艺术史 (词汇 355)",
    "root": "root-355 (词根释义)",
    "example": "This is an example sentence for TOEFLWord355."
  },
  {
    "word": "TOEFLWord356",
    "phonetic": "/toeflˈwɜːrd356/",
    "meaning": "范式 (词汇 356)",
    "root": "root-356 (词根释义)",
    "example": "This is an example sentence for TOEFLWord356."
  },
  {
    "word": "TOEFLWord357",
    "phonetic": "/toeflˈwɜːrd357/",
    "meaning": "认知 (词汇 357)",
    "root": "root-357 (词根释义)",
    "example": "This is an example sentence for TOEFLWord357."
  },
  {
    "word": "TOEFLWord358",
    "phonetic": "/toeflˈwɜːrd358/",
    "meaning": "假说 (词汇 358)",
    "root": "root-358 (词根释义)",
    "example": "This is an example sentence for TOEFLWord358."
  },
  {
    "word": "TOEFLWord359",
    "phonetic": "/toeflˈwɜːrd359/",
    "meaning": "实证 (词汇 359)",
    "root": "root-359 (词根释义)",
    "example": "This is an example sentence for TOEFLWord359."
  },
  {
    "word": "TOEFLWord360",
    "phonetic": "/toeflˈwɜːrd360/",
    "meaning": "天文学 (词汇 360)",
    "root": "root-360 (词根释义)",
    "example": "This is an example sentence for TOEFLWord360."
  },
  {
    "word": "TOEFLWord361",
    "phonetic": "/toeflˈwɜːrd361/",
    "meaning": "天文学 (词汇 361)",
    "root": "root-361 (词根释义)",
    "example": "This is an example sentence for TOEFLWord361."
  },
  {
    "word": "TOEFLWord362",
    "phonetic": "/toeflˈwɜːrd362/",
    "meaning": "机制 (词汇 362)",
    "root": "root-362 (词根释义)",
    "example": "This is an example sentence for TOEFLWord362."
  },
  {
    "word": "TOEFLWord363",
    "phonetic": "/toeflˈwɜːrd363/",
    "meaning": "地质学 (词汇 363)",
    "root": "root-363 (词根释义)",
    "example": "This is an example sentence for TOEFLWord363."
  },
  {
    "word": "TOEFLWord364",
    "phonetic": "/toeflˈwɜːrd364/",
    "meaning": "生物学 (词汇 364)",
    "root": "root-364 (词根释义)",
    "example": "This is an example sentence for TOEFLWord364."
  },
  {
    "word": "TOEFLWord365",
    "phonetic": "/toeflˈwɜːrd365/",
    "meaning": "天文学 (词汇 365)",
    "root": "root-365 (词根释义)",
    "example": "This is an example sentence for TOEFLWord365."
  },
  {
    "word": "TOEFLWord366",
    "phonetic": "/toeflˈwɜːrd366/",
    "meaning": "实证 (词汇 366)",
    "root": "root-366 (词根释义)",
    "example": "This is an example sentence for TOEFLWord366."
  },
  {
    "word": "TOEFLWord367",
    "phonetic": "/toeflˈwɜːrd367/",
    "meaning": "生物学 (词汇 367)",
    "root": "root-367 (词根释义)",
    "example": "This is an example sentence for TOEFLWord367."
  },
  {
    "word": "TOEFLWord368",
    "phonetic": "/toeflˈwɜːrd368/",
    "meaning": "天文学 (词汇 368)",
    "root": "root-368 (词根释义)",
    "example": "This is an example sentence for TOEFLWord368."
  },
  {
    "word": "TOEFLWord369",
    "phonetic": "/toeflˈwɜːrd369/",
    "meaning": "生物学 (词汇 369)",
    "root": "root-369 (词根释义)",
    "example": "This is an example sentence for TOEFLWord369."
  },
  {
    "word": "TOEFLWord370",
    "phonetic": "/toeflˈwɜːrd370/",
    "meaning": "范式 (词汇 370)",
    "root": "root-370 (词根释义)",
    "example": "This is an example sentence for TOEFLWord370."
  },
  {
    "word": "TOEFLWord371",
    "phonetic": "/toeflˈwɜːrd371/",
    "meaning": "心理学 (词汇 371)",
    "root": "root-371 (词根释义)",
    "example": "This is an example sentence for TOEFLWord371."
  },
  {
    "word": "TOEFLWord372",
    "phonetic": "/toeflˈwɜːrd372/",
    "meaning": "地质学 (词汇 372)",
    "root": "root-372 (词根释义)",
    "example": "This is an example sentence for TOEFLWord372."
  },
  {
    "word": "TOEFLWord373",
    "phonetic": "/toeflˈwɜːrd373/",
    "meaning": "心理学 (词汇 373)",
    "root": "root-373 (词根释义)",
    "example": "This is an example sentence for TOEFLWord373."
  },
  {
    "word": "TOEFLWord374",
    "phonetic": "/toeflˈwɜːrd374/",
    "meaning": "艺术史 (词汇 374)",
    "root": "root-374 (词根释义)",
    "example": "This is an example sentence for TOEFLWord374."
  },
  {
    "word": "TOEFLWord375",
    "phonetic": "/toeflˈwɜːrd375/",
    "meaning": "艺术史 (词汇 375)",
    "root": "root-375 (词根释义)",
    "example": "This is an example sentence for TOEFLWord375."
  },
  {
    "word": "TOEFLWord376",
    "phonetic": "/toeflˈwɜːrd376/",
    "meaning": "范式 (词汇 376)",
    "root": "root-376 (词根释义)",
    "example": "This is an example sentence for TOEFLWord376."
  },
  {
    "word": "TOEFLWord377",
    "phonetic": "/toeflˈwɜːrd377/",
    "meaning": "天文学 (词汇 377)",
    "root": "root-377 (词根释义)",
    "example": "This is an example sentence for TOEFLWord377."
  },
  {
    "word": "TOEFLWord378",
    "phonetic": "/toeflˈwɜːrd378/",
    "meaning": "天文学 (词汇 378)",
    "root": "root-378 (词根释义)",
    "example": "This is an example sentence for TOEFLWord378."
  },
  {
    "word": "TOEFLWord379",
    "phonetic": "/toeflˈwɜːrd379/",
    "meaning": "假说 (词汇 379)",
    "root": "root-379 (词根释义)",
    "example": "This is an example sentence for TOEFLWord379."
  },
  {
    "word": "TOEFLWord380",
    "phonetic": "/toeflˈwɜːrd380/",
    "meaning": "艺术史 (词汇 380)",
    "root": "root-380 (词根释义)",
    "example": "This is an example sentence for TOEFLWord380."
  },
  {
    "word": "TOEFLWord381",
    "phonetic": "/toeflˈwɜːrd381/",
    "meaning": "机制 (词汇 381)",
    "root": "root-381 (词根释义)",
    "example": "This is an example sentence for TOEFLWord381."
  },
  {
    "word": "TOEFLWord382",
    "phonetic": "/toeflˈwɜːrd382/",
    "meaning": "生物学 (词汇 382)",
    "root": "root-382 (词根释义)",
    "example": "This is an example sentence for TOEFLWord382."
  },
  {
    "word": "TOEFLWord383",
    "phonetic": "/toeflˈwɜːrd383/",
    "meaning": "生物学 (词汇 383)",
    "root": "root-383 (词根释义)",
    "example": "This is an example sentence for TOEFLWord383."
  },
  {
    "word": "TOEFLWord384",
    "phonetic": "/toeflˈwɜːrd384/",
    "meaning": "实证 (词汇 384)",
    "root": "root-384 (词根释义)",
    "example": "This is an example sentence for TOEFLWord384."
  },
  {
    "word": "TOEFLWord385",
    "phonetic": "/toeflˈwɜːrd385/",
    "meaning": "机制 (词汇 385)",
    "root": "root-385 (词根释义)",
    "example": "This is an example sentence for TOEFLWord385."
  },
  {
    "word": "TOEFLWord386",
    "phonetic": "/toeflˈwɜːrd386/",
    "meaning": "生物学 (词汇 386)",
    "root": "root-386 (词根释义)",
    "example": "This is an example sentence for TOEFLWord386."
  },
  {
    "word": "TOEFLWord387",
    "phonetic": "/toeflˈwɜːrd387/",
    "meaning": "范式 (词汇 387)",
    "root": "root-387 (词根释义)",
    "example": "This is an example sentence for TOEFLWord387."
  },
  {
    "word": "TOEFLWord388",
    "phonetic": "/toeflˈwɜːrd388/",
    "meaning": "假说 (词汇 388)",
    "root": "root-388 (词根释义)",
    "example": "This is an example sentence for TOEFLWord388."
  },
  {
    "word": "TOEFLWord389",
    "phonetic": "/toeflˈwɜːrd389/",
    "meaning": "范式 (词汇 389)",
    "root": "root-389 (词根释义)",
    "example": "This is an example sentence for TOEFLWord389."
  },
  {
    "word": "TOEFLWord390",
    "phonetic": "/toeflˈwɜːrd390/",
    "meaning": "心理学 (词汇 390)",
    "root": "root-390 (词根释义)",
    "example": "This is an example sentence for TOEFLWord390."
  },
  {
    "word": "TOEFLWord391",
    "phonetic": "/toeflˈwɜːrd391/",
    "meaning": "假说 (词汇 391)",
    "root": "root-391 (词根释义)",
    "example": "This is an example sentence for TOEFLWord391."
  },
  {
    "word": "TOEFLWord392",
    "phonetic": "/toeflˈwɜːrd392/",
    "meaning": "假说 (词汇 392)",
    "root": "root-392 (词根释义)",
    "example": "This is an example sentence for TOEFLWord392."
  },
  {
    "word": "TOEFLWord393",
    "phonetic": "/toeflˈwɜːrd393/",
    "meaning": "天文学 (词汇 393)",
    "root": "root-393 (词根释义)",
    "example": "This is an example sentence for TOEFLWord393."
  },
  {
    "word": "TOEFLWord394",
    "phonetic": "/toeflˈwɜːrd394/",
    "meaning": "地质学 (词汇 394)",
    "root": "root-394 (词根释义)",
    "example": "This is an example sentence for TOEFLWord394."
  },
  {
    "word": "TOEFLWord395",
    "phonetic": "/toeflˈwɜːrd395/",
    "meaning": "艺术史 (词汇 395)",
    "root": "root-395 (词根释义)",
    "example": "This is an example sentence for TOEFLWord395."
  },
  {
    "word": "TOEFLWord396",
    "phonetic": "/toeflˈwɜːrd396/",
    "meaning": "地质学 (词汇 396)",
    "root": "root-396 (词根释义)",
    "example": "This is an example sentence for TOEFLWord396."
  },
  {
    "word": "TOEFLWord397",
    "phonetic": "/toeflˈwɜːrd397/",
    "meaning": "范式 (词汇 397)",
    "root": "root-397 (词根释义)",
    "example": "This is an example sentence for TOEFLWord397."
  },
  {
    "word": "TOEFLWord398",
    "phonetic": "/toeflˈwɜːrd398/",
    "meaning": "天文学 (词汇 398)",
    "root": "root-398 (词根释义)",
    "example": "This is an example sentence for TOEFLWord398."
  },
  {
    "word": "TOEFLWord399",
    "phonetic": "/toeflˈwɜːrd399/",
    "meaning": "天文学 (词汇 399)",
    "root": "root-399 (词根释义)",
    "example": "This is an example sentence for TOEFLWord399."
  },
  {
    "word": "TOEFLWord400",
    "phonetic": "/toeflˈwɜːrd400/",
    "meaning": "实证 (词汇 400)",
    "root": "root-400 (词根释义)",
    "example": "This is an example sentence for TOEFLWord400."
  },
  {
    "word": "TOEFLWord401",
    "phonetic": "/toeflˈwɜːrd401/",
    "meaning": "实证 (词汇 401)",
    "root": "root-401 (词根释义)",
    "example": "This is an example sentence for TOEFLWord401."
  },
  {
    "word": "TOEFLWord402",
    "phonetic": "/toeflˈwɜːrd402/",
    "meaning": "实证 (词汇 402)",
    "root": "root-402 (词根释义)",
    "example": "This is an example sentence for TOEFLWord402."
  },
  {
    "word": "TOEFLWord403",
    "phonetic": "/toeflˈwɜːrd403/",
    "meaning": "天文学 (词汇 403)",
    "root": "root-403 (词根释义)",
    "example": "This is an example sentence for TOEFLWord403."
  },
  {
    "word": "TOEFLWord404",
    "phonetic": "/toeflˈwɜːrd404/",
    "meaning": "心理学 (词汇 404)",
    "root": "root-404 (词根释义)",
    "example": "This is an example sentence for TOEFLWord404."
  },
  {
    "word": "TOEFLWord405",
    "phonetic": "/toeflˈwɜːrd405/",
    "meaning": "艺术史 (词汇 405)",
    "root": "root-405 (词根释义)",
    "example": "This is an example sentence for TOEFLWord405."
  },
  {
    "word": "TOEFLWord406",
    "phonetic": "/toeflˈwɜːrd406/",
    "meaning": "地质学 (词汇 406)",
    "root": "root-406 (词根释义)",
    "example": "This is an example sentence for TOEFLWord406."
  },
  {
    "word": "TOEFLWord407",
    "phonetic": "/toeflˈwɜːrd407/",
    "meaning": "机制 (词汇 407)",
    "root": "root-407 (词根释义)",
    "example": "This is an example sentence for TOEFLWord407."
  },
  {
    "word": "TOEFLWord408",
    "phonetic": "/toeflˈwɜːrd408/",
    "meaning": "范式 (词汇 408)",
    "root": "root-408 (词根释义)",
    "example": "This is an example sentence for TOEFLWord408."
  },
  {
    "word": "TOEFLWord409",
    "phonetic": "/toeflˈwɜːrd409/",
    "meaning": "机制 (词汇 409)",
    "root": "root-409 (词根释义)",
    "example": "This is an example sentence for TOEFLWord409."
  },
  {
    "word": "TOEFLWord410",
    "phonetic": "/toeflˈwɜːrd410/",
    "meaning": "天文学 (词汇 410)",
    "root": "root-410 (词根释义)",
    "example": "This is an example sentence for TOEFLWord410."
  },
  {
    "word": "TOEFLWord411",
    "phonetic": "/toeflˈwɜːrd411/",
    "meaning": "认知 (词汇 411)",
    "root": "root-411 (词根释义)",
    "example": "This is an example sentence for TOEFLWord411."
  },
  {
    "word": "TOEFLWord412",
    "phonetic": "/toeflˈwɜːrd412/",
    "meaning": "生物学 (词汇 412)",
    "root": "root-412 (词根释义)",
    "example": "This is an example sentence for TOEFLWord412."
  },
  {
    "word": "TOEFLWord413",
    "phonetic": "/toeflˈwɜːrd413/",
    "meaning": "心理学 (词汇 413)",
    "root": "root-413 (词根释义)",
    "example": "This is an example sentence for TOEFLWord413."
  },
  {
    "word": "TOEFLWord414",
    "phonetic": "/toeflˈwɜːrd414/",
    "meaning": "假说 (词汇 414)",
    "root": "root-414 (词根释义)",
    "example": "This is an example sentence for TOEFLWord414."
  },
  {
    "word": "TOEFLWord415",
    "phonetic": "/toeflˈwɜːrd415/",
    "meaning": "艺术史 (词汇 415)",
    "root": "root-415 (词根释义)",
    "example": "This is an example sentence for TOEFLWord415."
  },
  {
    "word": "TOEFLWord416",
    "phonetic": "/toeflˈwɜːrd416/",
    "meaning": "天文学 (词汇 416)",
    "root": "root-416 (词根释义)",
    "example": "This is an example sentence for TOEFLWord416."
  },
  {
    "word": "TOEFLWord417",
    "phonetic": "/toeflˈwɜːrd417/",
    "meaning": "认知 (词汇 417)",
    "root": "root-417 (词根释义)",
    "example": "This is an example sentence for TOEFLWord417."
  },
  {
    "word": "TOEFLWord418",
    "phonetic": "/toeflˈwɜːrd418/",
    "meaning": "假说 (词汇 418)",
    "root": "root-418 (词根释义)",
    "example": "This is an example sentence for TOEFLWord418."
  },
  {
    "word": "TOEFLWord419",
    "phonetic": "/toeflˈwɜːrd419/",
    "meaning": "认知 (词汇 419)",
    "root": "root-419 (词根释义)",
    "example": "This is an example sentence for TOEFLWord419."
  },
  {
    "word": "TOEFLWord420",
    "phonetic": "/toeflˈwɜːrd420/",
    "meaning": "范式 (词汇 420)",
    "root": "root-420 (词根释义)",
    "example": "This is an example sentence for TOEFLWord420."
  },
  {
    "word": "TOEFLWord421",
    "phonetic": "/toeflˈwɜːrd421/",
    "meaning": "认知 (词汇 421)",
    "root": "root-421 (词根释义)",
    "example": "This is an example sentence for TOEFLWord421."
  },
  {
    "word": "TOEFLWord422",
    "phonetic": "/toeflˈwɜːrd422/",
    "meaning": "天文学 (词汇 422)",
    "root": "root-422 (词根释义)",
    "example": "This is an example sentence for TOEFLWord422."
  },
  {
    "word": "TOEFLWord423",
    "phonetic": "/toeflˈwɜːrd423/",
    "meaning": "范式 (词汇 423)",
    "root": "root-423 (词根释义)",
    "example": "This is an example sentence for TOEFLWord423."
  },
  {
    "word": "TOEFLWord424",
    "phonetic": "/toeflˈwɜːrd424/",
    "meaning": "假说 (词汇 424)",
    "root": "root-424 (词根释义)",
    "example": "This is an example sentence for TOEFLWord424."
  },
  {
    "word": "TOEFLWord425",
    "phonetic": "/toeflˈwɜːrd425/",
    "meaning": "生物学 (词汇 425)",
    "root": "root-425 (词根释义)",
    "example": "This is an example sentence for TOEFLWord425."
  },
  {
    "word": "TOEFLWord426",
    "phonetic": "/toeflˈwɜːrd426/",
    "meaning": "地质学 (词汇 426)",
    "root": "root-426 (词根释义)",
    "example": "This is an example sentence for TOEFLWord426."
  },
  {
    "word": "TOEFLWord427",
    "phonetic": "/toeflˈwɜːrd427/",
    "meaning": "假说 (词汇 427)",
    "root": "root-427 (词根释义)",
    "example": "This is an example sentence for TOEFLWord427."
  },
  {
    "word": "TOEFLWord428",
    "phonetic": "/toeflˈwɜːrd428/",
    "meaning": "心理学 (词汇 428)",
    "root": "root-428 (词根释义)",
    "example": "This is an example sentence for TOEFLWord428."
  },
  {
    "word": "TOEFLWord429",
    "phonetic": "/toeflˈwɜːrd429/",
    "meaning": "生物学 (词汇 429)",
    "root": "root-429 (词根释义)",
    "example": "This is an example sentence for TOEFLWord429."
  },
  {
    "word": "TOEFLWord430",
    "phonetic": "/toeflˈwɜːrd430/",
    "meaning": "艺术史 (词汇 430)",
    "root": "root-430 (词根释义)",
    "example": "This is an example sentence for TOEFLWord430."
  },
  {
    "word": "TOEFLWord431",
    "phonetic": "/toeflˈwɜːrd431/",
    "meaning": "假说 (词汇 431)",
    "root": "root-431 (词根释义)",
    "example": "This is an example sentence for TOEFLWord431."
  },
  {
    "word": "TOEFLWord432",
    "phonetic": "/toeflˈwɜːrd432/",
    "meaning": "心理学 (词汇 432)",
    "root": "root-432 (词根释义)",
    "example": "This is an example sentence for TOEFLWord432."
  },
  {
    "word": "TOEFLWord433",
    "phonetic": "/toeflˈwɜːrd433/",
    "meaning": "认知 (词汇 433)",
    "root": "root-433 (词根释义)",
    "example": "This is an example sentence for TOEFLWord433."
  },
  {
    "word": "TOEFLWord434",
    "phonetic": "/toeflˈwɜːrd434/",
    "meaning": "机制 (词汇 434)",
    "root": "root-434 (词根释义)",
    "example": "This is an example sentence for TOEFLWord434."
  },
  {
    "word": "TOEFLWord435",
    "phonetic": "/toeflˈwɜːrd435/",
    "meaning": "天文学 (词汇 435)",
    "root": "root-435 (词根释义)",
    "example": "This is an example sentence for TOEFLWord435."
  },
  {
    "word": "TOEFLWord436",
    "phonetic": "/toeflˈwɜːrd436/",
    "meaning": "地质学 (词汇 436)",
    "root": "root-436 (词根释义)",
    "example": "This is an example sentence for TOEFLWord436."
  },
  {
    "word": "TOEFLWord437",
    "phonetic": "/toeflˈwɜːrd437/",
    "meaning": "艺术史 (词汇 437)",
    "root": "root-437 (词根释义)",
    "example": "This is an example sentence for TOEFLWord437."
  },
  {
    "word": "TOEFLWord438",
    "phonetic": "/toeflˈwɜːrd438/",
    "meaning": "认知 (词汇 438)",
    "root": "root-438 (词根释义)",
    "example": "This is an example sentence for TOEFLWord438."
  },
  {
    "word": "TOEFLWord439",
    "phonetic": "/toeflˈwɜːrd439/",
    "meaning": "机制 (词汇 439)",
    "root": "root-439 (词根释义)",
    "example": "This is an example sentence for TOEFLWord439."
  },
  {
    "word": "TOEFLWord440",
    "phonetic": "/toeflˈwɜːrd440/",
    "meaning": "范式 (词汇 440)",
    "root": "root-440 (词根释义)",
    "example": "This is an example sentence for TOEFLWord440."
  },
  {
    "word": "TOEFLWord441",
    "phonetic": "/toeflˈwɜːrd441/",
    "meaning": "生物学 (词汇 441)",
    "root": "root-441 (词根释义)",
    "example": "This is an example sentence for TOEFLWord441."
  },
  {
    "word": "TOEFLWord442",
    "phonetic": "/toeflˈwɜːrd442/",
    "meaning": "心理学 (词汇 442)",
    "root": "root-442 (词根释义)",
    "example": "This is an example sentence for TOEFLWord442."
  },
  {
    "word": "TOEFLWord443",
    "phonetic": "/toeflˈwɜːrd443/",
    "meaning": "假说 (词汇 443)",
    "root": "root-443 (词根释义)",
    "example": "This is an example sentence for TOEFLWord443."
  },
  {
    "word": "TOEFLWord444",
    "phonetic": "/toeflˈwɜːrd444/",
    "meaning": "心理学 (词汇 444)",
    "root": "root-444 (词根释义)",
    "example": "This is an example sentence for TOEFLWord444."
  },
  {
    "word": "TOEFLWord445",
    "phonetic": "/toeflˈwɜːrd445/",
    "meaning": "认知 (词汇 445)",
    "root": "root-445 (词根释义)",
    "example": "This is an example sentence for TOEFLWord445."
  },
  {
    "word": "TOEFLWord446",
    "phonetic": "/toeflˈwɜːrd446/",
    "meaning": "天文学 (词汇 446)",
    "root": "root-446 (词根释义)",
    "example": "This is an example sentence for TOEFLWord446."
  },
  {
    "word": "TOEFLWord447",
    "phonetic": "/toeflˈwɜːrd447/",
    "meaning": "天文学 (词汇 447)",
    "root": "root-447 (词根释义)",
    "example": "This is an example sentence for TOEFLWord447."
  },
  {
    "word": "TOEFLWord448",
    "phonetic": "/toeflˈwɜːrd448/",
    "meaning": "实证 (词汇 448)",
    "root": "root-448 (词根释义)",
    "example": "This is an example sentence for TOEFLWord448."
  },
  {
    "word": "TOEFLWord449",
    "phonetic": "/toeflˈwɜːrd449/",
    "meaning": "实证 (词汇 449)",
    "root": "root-449 (词根释义)",
    "example": "This is an example sentence for TOEFLWord449."
  },
  {
    "word": "TOEFLWord450",
    "phonetic": "/toeflˈwɜːrd450/",
    "meaning": "认知 (词汇 450)",
    "root": "root-450 (词根释义)",
    "example": "This is an example sentence for TOEFLWord450."
  },
  {
    "word": "TOEFLWord451",
    "phonetic": "/toeflˈwɜːrd451/",
    "meaning": "假说 (词汇 451)",
    "root": "root-451 (词根释义)",
    "example": "This is an example sentence for TOEFLWord451."
  },
  {
    "word": "TOEFLWord452",
    "phonetic": "/toeflˈwɜːrd452/",
    "meaning": "假说 (词汇 452)",
    "root": "root-452 (词根释义)",
    "example": "This is an example sentence for TOEFLWord452."
  },
  {
    "word": "TOEFLWord453",
    "phonetic": "/toeflˈwɜːrd453/",
    "meaning": "生物学 (词汇 453)",
    "root": "root-453 (词根释义)",
    "example": "This is an example sentence for TOEFLWord453."
  },
  {
    "word": "TOEFLWord454",
    "phonetic": "/toeflˈwɜːrd454/",
    "meaning": "天文学 (词汇 454)",
    "root": "root-454 (词根释义)",
    "example": "This is an example sentence for TOEFLWord454."
  },
  {
    "word": "TOEFLWord455",
    "phonetic": "/toeflˈwɜːrd455/",
    "meaning": "生物学 (词汇 455)",
    "root": "root-455 (词根释义)",
    "example": "This is an example sentence for TOEFLWord455."
  },
  {
    "word": "TOEFLWord456",
    "phonetic": "/toeflˈwɜːrd456/",
    "meaning": "范式 (词汇 456)",
    "root": "root-456 (词根释义)",
    "example": "This is an example sentence for TOEFLWord456."
  },
  {
    "word": "TOEFLWord457",
    "phonetic": "/toeflˈwɜːrd457/",
    "meaning": "天文学 (词汇 457)",
    "root": "root-457 (词根释义)",
    "example": "This is an example sentence for TOEFLWord457."
  },
  {
    "word": "TOEFLWord458",
    "phonetic": "/toeflˈwɜːrd458/",
    "meaning": "机制 (词汇 458)",
    "root": "root-458 (词根释义)",
    "example": "This is an example sentence for TOEFLWord458."
  },
  {
    "word": "TOEFLWord459",
    "phonetic": "/toeflˈwɜːrd459/",
    "meaning": "天文学 (词汇 459)",
    "root": "root-459 (词根释义)",
    "example": "This is an example sentence for TOEFLWord459."
  },
  {
    "word": "TOEFLWord460",
    "phonetic": "/toeflˈwɜːrd460/",
    "meaning": "机制 (词汇 460)",
    "root": "root-460 (词根释义)",
    "example": "This is an example sentence for TOEFLWord460."
  },
  {
    "word": "TOEFLWord461",
    "phonetic": "/toeflˈwɜːrd461/",
    "meaning": "机制 (词汇 461)",
    "root": "root-461 (词根释义)",
    "example": "This is an example sentence for TOEFLWord461."
  },
  {
    "word": "TOEFLWord462",
    "phonetic": "/toeflˈwɜːrd462/",
    "meaning": "天文学 (词汇 462)",
    "root": "root-462 (词根释义)",
    "example": "This is an example sentence for TOEFLWord462."
  },
  {
    "word": "TOEFLWord463",
    "phonetic": "/toeflˈwɜːrd463/",
    "meaning": "生物学 (词汇 463)",
    "root": "root-463 (词根释义)",
    "example": "This is an example sentence for TOEFLWord463."
  },
  {
    "word": "TOEFLWord464",
    "phonetic": "/toeflˈwɜːrd464/",
    "meaning": "心理学 (词汇 464)",
    "root": "root-464 (词根释义)",
    "example": "This is an example sentence for TOEFLWord464."
  },
  {
    "word": "TOEFLWord465",
    "phonetic": "/toeflˈwɜːrd465/",
    "meaning": "实证 (词汇 465)",
    "root": "root-465 (词根释义)",
    "example": "This is an example sentence for TOEFLWord465."
  },
  {
    "word": "TOEFLWord466",
    "phonetic": "/toeflˈwɜːrd466/",
    "meaning": "实证 (词汇 466)",
    "root": "root-466 (词根释义)",
    "example": "This is an example sentence for TOEFLWord466."
  },
  {
    "word": "TOEFLWord467",
    "phonetic": "/toeflˈwɜːrd467/",
    "meaning": "天文学 (词汇 467)",
    "root": "root-467 (词根释义)",
    "example": "This is an example sentence for TOEFLWord467."
  },
  {
    "word": "TOEFLWord468",
    "phonetic": "/toeflˈwɜːrd468/",
    "meaning": "机制 (词汇 468)",
    "root": "root-468 (词根释义)",
    "example": "This is an example sentence for TOEFLWord468."
  },
  {
    "word": "TOEFLWord469",
    "phonetic": "/toeflˈwɜːrd469/",
    "meaning": "天文学 (词汇 469)",
    "root": "root-469 (词根释义)",
    "example": "This is an example sentence for TOEFLWord469."
  },
  {
    "word": "TOEFLWord470",
    "phonetic": "/toeflˈwɜːrd470/",
    "meaning": "天文学 (词汇 470)",
    "root": "root-470 (词根释义)",
    "example": "This is an example sentence for TOEFLWord470."
  },
  {
    "word": "TOEFLWord471",
    "phonetic": "/toeflˈwɜːrd471/",
    "meaning": "心理学 (词汇 471)",
    "root": "root-471 (词根释义)",
    "example": "This is an example sentence for TOEFLWord471."
  },
  {
    "word": "TOEFLWord472",
    "phonetic": "/toeflˈwɜːrd472/",
    "meaning": "范式 (词汇 472)",
    "root": "root-472 (词根释义)",
    "example": "This is an example sentence for TOEFLWord472."
  },
  {
    "word": "TOEFLWord473",
    "phonetic": "/toeflˈwɜːrd473/",
    "meaning": "认知 (词汇 473)",
    "root": "root-473 (词根释义)",
    "example": "This is an example sentence for TOEFLWord473."
  },
  {
    "word": "TOEFLWord474",
    "phonetic": "/toeflˈwɜːrd474/",
    "meaning": "假说 (词汇 474)",
    "root": "root-474 (词根释义)",
    "example": "This is an example sentence for TOEFLWord474."
  },
  {
    "word": "TOEFLWord475",
    "phonetic": "/toeflˈwɜːrd475/",
    "meaning": "心理学 (词汇 475)",
    "root": "root-475 (词根释义)",
    "example": "This is an example sentence for TOEFLWord475."
  },
  {
    "word": "TOEFLWord476",
    "phonetic": "/toeflˈwɜːrd476/",
    "meaning": "艺术史 (词汇 476)",
    "root": "root-476 (词根释义)",
    "example": "This is an example sentence for TOEFLWord476."
  },
  {
    "word": "TOEFLWord477",
    "phonetic": "/toeflˈwɜːrd477/",
    "meaning": "范式 (词汇 477)",
    "root": "root-477 (词根释义)",
    "example": "This is an example sentence for TOEFLWord477."
  },
  {
    "word": "TOEFLWord478",
    "phonetic": "/toeflˈwɜːrd478/",
    "meaning": "范式 (词汇 478)",
    "root": "root-478 (词根释义)",
    "example": "This is an example sentence for TOEFLWord478."
  },
  {
    "word": "TOEFLWord479",
    "phonetic": "/toeflˈwɜːrd479/",
    "meaning": "心理学 (词汇 479)",
    "root": "root-479 (词根释义)",
    "example": "This is an example sentence for TOEFLWord479."
  },
  {
    "word": "TOEFLWord480",
    "phonetic": "/toeflˈwɜːrd480/",
    "meaning": "艺术史 (词汇 480)",
    "root": "root-480 (词根释义)",
    "example": "This is an example sentence for TOEFLWord480."
  },
  {
    "word": "TOEFLWord481",
    "phonetic": "/toeflˈwɜːrd481/",
    "meaning": "地质学 (词汇 481)",
    "root": "root-481 (词根释义)",
    "example": "This is an example sentence for TOEFLWord481."
  },
  {
    "word": "TOEFLWord482",
    "phonetic": "/toeflˈwɜːrd482/",
    "meaning": "地质学 (词汇 482)",
    "root": "root-482 (词根释义)",
    "example": "This is an example sentence for TOEFLWord482."
  },
  {
    "word": "TOEFLWord483",
    "phonetic": "/toeflˈwɜːrd483/",
    "meaning": "艺术史 (词汇 483)",
    "root": "root-483 (词根释义)",
    "example": "This is an example sentence for TOEFLWord483."
  },
  {
    "word": "TOEFLWord484",
    "phonetic": "/toeflˈwɜːrd484/",
    "meaning": "假说 (词汇 484)",
    "root": "root-484 (词根释义)",
    "example": "This is an example sentence for TOEFLWord484."
  },
  {
    "word": "TOEFLWord485",
    "phonetic": "/toeflˈwɜːrd485/",
    "meaning": "心理学 (词汇 485)",
    "root": "root-485 (词根释义)",
    "example": "This is an example sentence for TOEFLWord485."
  },
  {
    "word": "TOEFLWord486",
    "phonetic": "/toeflˈwɜːrd486/",
    "meaning": "实证 (词汇 486)",
    "root": "root-486 (词根释义)",
    "example": "This is an example sentence for TOEFLWord486."
  },
  {
    "word": "TOEFLWord487",
    "phonetic": "/toeflˈwɜːrd487/",
    "meaning": "生物学 (词汇 487)",
    "root": "root-487 (词根释义)",
    "example": "This is an example sentence for TOEFLWord487."
  },
  {
    "word": "TOEFLWord488",
    "phonetic": "/toeflˈwɜːrd488/",
    "meaning": "天文学 (词汇 488)",
    "root": "root-488 (词根释义)",
    "example": "This is an example sentence for TOEFLWord488."
  },
  {
    "word": "TOEFLWord489",
    "phonetic": "/toeflˈwɜːrd489/",
    "meaning": "天文学 (词汇 489)",
    "root": "root-489 (词根释义)",
    "example": "This is an example sentence for TOEFLWord489."
  },
  {
    "word": "TOEFLWord490",
    "phonetic": "/toeflˈwɜːrd490/",
    "meaning": "艺术史 (词汇 490)",
    "root": "root-490 (词根释义)",
    "example": "This is an example sentence for TOEFLWord490."
  },
  {
    "word": "TOEFLWord491",
    "phonetic": "/toeflˈwɜːrd491/",
    "meaning": "假说 (词汇 491)",
    "root": "root-491 (词根释义)",
    "example": "This is an example sentence for TOEFLWord491."
  },
  {
    "word": "TOEFLWord492",
    "phonetic": "/toeflˈwɜːrd492/",
    "meaning": "生物学 (词汇 492)",
    "root": "root-492 (词根释义)",
    "example": "This is an example sentence for TOEFLWord492."
  },
  {
    "word": "TOEFLWord493",
    "phonetic": "/toeflˈwɜːrd493/",
    "meaning": "艺术史 (词汇 493)",
    "root": "root-493 (词根释义)",
    "example": "This is an example sentence for TOEFLWord493."
  },
  {
    "word": "TOEFLWord494",
    "phonetic": "/toeflˈwɜːrd494/",
    "meaning": "范式 (词汇 494)",
    "root": "root-494 (词根释义)",
    "example": "This is an example sentence for TOEFLWord494."
  },
  {
    "word": "TOEFLWord495",
    "phonetic": "/toeflˈwɜːrd495/",
    "meaning": "假说 (词汇 495)",
    "root": "root-495 (词根释义)",
    "example": "This is an example sentence for TOEFLWord495."
  },
  {
    "word": "TOEFLWord496",
    "phonetic": "/toeflˈwɜːrd496/",
    "meaning": "天文学 (词汇 496)",
    "root": "root-496 (词根释义)",
    "example": "This is an example sentence for TOEFLWord496."
  },
  {
    "word": "TOEFLWord497",
    "phonetic": "/toeflˈwɜːrd497/",
    "meaning": "地质学 (词汇 497)",
    "root": "root-497 (词根释义)",
    "example": "This is an example sentence for TOEFLWord497."
  },
  {
    "word": "TOEFLWord498",
    "phonetic": "/toeflˈwɜːrd498/",
    "meaning": "假说 (词汇 498)",
    "root": "root-498 (词根释义)",
    "example": "This is an example sentence for TOEFLWord498."
  },
  {
    "word": "TOEFLWord499",
    "phonetic": "/toeflˈwɜːrd499/",
    "meaning": "艺术史 (词汇 499)",
    "root": "root-499 (词根释义)",
    "example": "This is an example sentence for TOEFLWord499."
  },
  {
    "word": "TOEFLWord500",
    "phonetic": "/toeflˈwɜːrd500/",
    "meaning": "地质学 (词汇 500)",
    "root": "root-500 (词根释义)",
    "example": "This is an example sentence for TOEFLWord500."
  },
  {
    "word": "TOEFLWord501",
    "phonetic": "/toeflˈwɜːrd501/",
    "meaning": "生物学 (词汇 501)",
    "root": "root-501 (词根释义)",
    "example": "This is an example sentence for TOEFLWord501."
  },
  {
    "word": "TOEFLWord502",
    "phonetic": "/toeflˈwɜːrd502/",
    "meaning": "心理学 (词汇 502)",
    "root": "root-502 (词根释义)",
    "example": "This is an example sentence for TOEFLWord502."
  },
  {
    "word": "TOEFLWord503",
    "phonetic": "/toeflˈwɜːrd503/",
    "meaning": "地质学 (词汇 503)",
    "root": "root-503 (词根释义)",
    "example": "This is an example sentence for TOEFLWord503."
  },
  {
    "word": "TOEFLWord504",
    "phonetic": "/toeflˈwɜːrd504/",
    "meaning": "实证 (词汇 504)",
    "root": "root-504 (词根释义)",
    "example": "This is an example sentence for TOEFLWord504."
  },
  {
    "word": "TOEFLWord505",
    "phonetic": "/toeflˈwɜːrd505/",
    "meaning": "机制 (词汇 505)",
    "root": "root-505 (词根释义)",
    "example": "This is an example sentence for TOEFLWord505."
  },
  {
    "word": "TOEFLWord506",
    "phonetic": "/toeflˈwɜːrd506/",
    "meaning": "心理学 (词汇 506)",
    "root": "root-506 (词根释义)",
    "example": "This is an example sentence for TOEFLWord506."
  },
  {
    "word": "TOEFLWord507",
    "phonetic": "/toeflˈwɜːrd507/",
    "meaning": "地质学 (词汇 507)",
    "root": "root-507 (词根释义)",
    "example": "This is an example sentence for TOEFLWord507."
  },
  {
    "word": "TOEFLWord508",
    "phonetic": "/toeflˈwɜːrd508/",
    "meaning": "艺术史 (词汇 508)",
    "root": "root-508 (词根释义)",
    "example": "This is an example sentence for TOEFLWord508."
  },
  {
    "word": "TOEFLWord509",
    "phonetic": "/toeflˈwɜːrd509/",
    "meaning": "艺术史 (词汇 509)",
    "root": "root-509 (词根释义)",
    "example": "This is an example sentence for TOEFLWord509."
  },
  {
    "word": "TOEFLWord510",
    "phonetic": "/toeflˈwɜːrd510/",
    "meaning": "假说 (词汇 510)",
    "root": "root-510 (词根释义)",
    "example": "This is an example sentence for TOEFLWord510."
  },
  {
    "word": "TOEFLWord511",
    "phonetic": "/toeflˈwɜːrd511/",
    "meaning": "机制 (词汇 511)",
    "root": "root-511 (词根释义)",
    "example": "This is an example sentence for TOEFLWord511."
  },
  {
    "word": "TOEFLWord512",
    "phonetic": "/toeflˈwɜːrd512/",
    "meaning": "生物学 (词汇 512)",
    "root": "root-512 (词根释义)",
    "example": "This is an example sentence for TOEFLWord512."
  },
  {
    "word": "TOEFLWord513",
    "phonetic": "/toeflˈwɜːrd513/",
    "meaning": "假说 (词汇 513)",
    "root": "root-513 (词根释义)",
    "example": "This is an example sentence for TOEFLWord513."
  },
  {
    "word": "TOEFLWord514",
    "phonetic": "/toeflˈwɜːrd514/",
    "meaning": "认知 (词汇 514)",
    "root": "root-514 (词根释义)",
    "example": "This is an example sentence for TOEFLWord514."
  },
  {
    "word": "TOEFLWord515",
    "phonetic": "/toeflˈwɜːrd515/",
    "meaning": "生物学 (词汇 515)",
    "root": "root-515 (词根释义)",
    "example": "This is an example sentence for TOEFLWord515."
  },
  {
    "word": "TOEFLWord516",
    "phonetic": "/toeflˈwɜːrd516/",
    "meaning": "艺术史 (词汇 516)",
    "root": "root-516 (词根释义)",
    "example": "This is an example sentence for TOEFLWord516."
  },
  {
    "word": "TOEFLWord517",
    "phonetic": "/toeflˈwɜːrd517/",
    "meaning": "生物学 (词汇 517)",
    "root": "root-517 (词根释义)",
    "example": "This is an example sentence for TOEFLWord517."
  },
  {
    "word": "TOEFLWord518",
    "phonetic": "/toeflˈwɜːrd518/",
    "meaning": "艺术史 (词汇 518)",
    "root": "root-518 (词根释义)",
    "example": "This is an example sentence for TOEFLWord518."
  },
  {
    "word": "TOEFLWord519",
    "phonetic": "/toeflˈwɜːrd519/",
    "meaning": "心理学 (词汇 519)",
    "root": "root-519 (词根释义)",
    "example": "This is an example sentence for TOEFLWord519."
  },
  {
    "word": "TOEFLWord520",
    "phonetic": "/toeflˈwɜːrd520/",
    "meaning": "机制 (词汇 520)",
    "root": "root-520 (词根释义)",
    "example": "This is an example sentence for TOEFLWord520."
  },
  {
    "word": "TOEFLWord521",
    "phonetic": "/toeflˈwɜːrd521/",
    "meaning": "认知 (词汇 521)",
    "root": "root-521 (词根释义)",
    "example": "This is an example sentence for TOEFLWord521."
  },
  {
    "word": "TOEFLWord522",
    "phonetic": "/toeflˈwɜːrd522/",
    "meaning": "天文学 (词汇 522)",
    "root": "root-522 (词根释义)",
    "example": "This is an example sentence for TOEFLWord522."
  },
  {
    "word": "TOEFLWord523",
    "phonetic": "/toeflˈwɜːrd523/",
    "meaning": "假说 (词汇 523)",
    "root": "root-523 (词根释义)",
    "example": "This is an example sentence for TOEFLWord523."
  },
  {
    "word": "TOEFLWord524",
    "phonetic": "/toeflˈwɜːrd524/",
    "meaning": "天文学 (词汇 524)",
    "root": "root-524 (词根释义)",
    "example": "This is an example sentence for TOEFLWord524."
  },
  {
    "word": "TOEFLWord525",
    "phonetic": "/toeflˈwɜːrd525/",
    "meaning": "认知 (词汇 525)",
    "root": "root-525 (词根释义)",
    "example": "This is an example sentence for TOEFLWord525."
  },
  {
    "word": "TOEFLWord526",
    "phonetic": "/toeflˈwɜːrd526/",
    "meaning": "生物学 (词汇 526)",
    "root": "root-526 (词根释义)",
    "example": "This is an example sentence for TOEFLWord526."
  },
  {
    "word": "TOEFLWord527",
    "phonetic": "/toeflˈwɜːrd527/",
    "meaning": "天文学 (词汇 527)",
    "root": "root-527 (词根释义)",
    "example": "This is an example sentence for TOEFLWord527."
  },
  {
    "word": "TOEFLWord528",
    "phonetic": "/toeflˈwɜːrd528/",
    "meaning": "实证 (词汇 528)",
    "root": "root-528 (词根释义)",
    "example": "This is an example sentence for TOEFLWord528."
  },
  {
    "word": "TOEFLWord529",
    "phonetic": "/toeflˈwɜːrd529/",
    "meaning": "地质学 (词汇 529)",
    "root": "root-529 (词根释义)",
    "example": "This is an example sentence for TOEFLWord529."
  },
  {
    "word": "TOEFLWord530",
    "phonetic": "/toeflˈwɜːrd530/",
    "meaning": "生物学 (词汇 530)",
    "root": "root-530 (词根释义)",
    "example": "This is an example sentence for TOEFLWord530."
  },
  {
    "word": "TOEFLWord531",
    "phonetic": "/toeflˈwɜːrd531/",
    "meaning": "实证 (词汇 531)",
    "root": "root-531 (词根释义)",
    "example": "This is an example sentence for TOEFLWord531."
  },
  {
    "word": "TOEFLWord532",
    "phonetic": "/toeflˈwɜːrd532/",
    "meaning": "实证 (词汇 532)",
    "root": "root-532 (词根释义)",
    "example": "This is an example sentence for TOEFLWord532."
  },
  {
    "word": "TOEFLWord533",
    "phonetic": "/toeflˈwɜːrd533/",
    "meaning": "范式 (词汇 533)",
    "root": "root-533 (词根释义)",
    "example": "This is an example sentence for TOEFLWord533."
  },
  {
    "word": "TOEFLWord534",
    "phonetic": "/toeflˈwɜːrd534/",
    "meaning": "机制 (词汇 534)",
    "root": "root-534 (词根释义)",
    "example": "This is an example sentence for TOEFLWord534."
  },
  {
    "word": "TOEFLWord535",
    "phonetic": "/toeflˈwɜːrd535/",
    "meaning": "天文学 (词汇 535)",
    "root": "root-535 (词根释义)",
    "example": "This is an example sentence for TOEFLWord535."
  },
  {
    "word": "TOEFLWord536",
    "phonetic": "/toeflˈwɜːrd536/",
    "meaning": "生物学 (词汇 536)",
    "root": "root-536 (词根释义)",
    "example": "This is an example sentence for TOEFLWord536."
  },
  {
    "word": "TOEFLWord537",
    "phonetic": "/toeflˈwɜːrd537/",
    "meaning": "心理学 (词汇 537)",
    "root": "root-537 (词根释义)",
    "example": "This is an example sentence for TOEFLWord537."
  },
  {
    "word": "TOEFLWord538",
    "phonetic": "/toeflˈwɜːrd538/",
    "meaning": "生物学 (词汇 538)",
    "root": "root-538 (词根释义)",
    "example": "This is an example sentence for TOEFLWord538."
  },
  {
    "word": "TOEFLWord539",
    "phonetic": "/toeflˈwɜːrd539/",
    "meaning": "实证 (词汇 539)",
    "root": "root-539 (词根释义)",
    "example": "This is an example sentence for TOEFLWord539."
  },
  {
    "word": "TOEFLWord540",
    "phonetic": "/toeflˈwɜːrd540/",
    "meaning": "生物学 (词汇 540)",
    "root": "root-540 (词根释义)",
    "example": "This is an example sentence for TOEFLWord540."
  },
  {
    "word": "TOEFLWord541",
    "phonetic": "/toeflˈwɜːrd541/",
    "meaning": "假说 (词汇 541)",
    "root": "root-541 (词根释义)",
    "example": "This is an example sentence for TOEFLWord541."
  },
  {
    "word": "TOEFLWord542",
    "phonetic": "/toeflˈwɜːrd542/",
    "meaning": "艺术史 (词汇 542)",
    "root": "root-542 (词根释义)",
    "example": "This is an example sentence for TOEFLWord542."
  },
  {
    "word": "TOEFLWord543",
    "phonetic": "/toeflˈwɜːrd543/",
    "meaning": "范式 (词汇 543)",
    "root": "root-543 (词根释义)",
    "example": "This is an example sentence for TOEFLWord543."
  },
  {
    "word": "TOEFLWord544",
    "phonetic": "/toeflˈwɜːrd544/",
    "meaning": "生物学 (词汇 544)",
    "root": "root-544 (词根释义)",
    "example": "This is an example sentence for TOEFLWord544."
  },
  {
    "word": "TOEFLWord545",
    "phonetic": "/toeflˈwɜːrd545/",
    "meaning": "假说 (词汇 545)",
    "root": "root-545 (词根释义)",
    "example": "This is an example sentence for TOEFLWord545."
  },
  {
    "word": "TOEFLWord546",
    "phonetic": "/toeflˈwɜːrd546/",
    "meaning": "生物学 (词汇 546)",
    "root": "root-546 (词根释义)",
    "example": "This is an example sentence for TOEFLWord546."
  },
  {
    "word": "TOEFLWord547",
    "phonetic": "/toeflˈwɜːrd547/",
    "meaning": "假说 (词汇 547)",
    "root": "root-547 (词根释义)",
    "example": "This is an example sentence for TOEFLWord547."
  },
  {
    "word": "TOEFLWord548",
    "phonetic": "/toeflˈwɜːrd548/",
    "meaning": "假说 (词汇 548)",
    "root": "root-548 (词根释义)",
    "example": "This is an example sentence for TOEFLWord548."
  },
  {
    "word": "TOEFLWord549",
    "phonetic": "/toeflˈwɜːrd549/",
    "meaning": "艺术史 (词汇 549)",
    "root": "root-549 (词根释义)",
    "example": "This is an example sentence for TOEFLWord549."
  },
  {
    "word": "TOEFLWord550",
    "phonetic": "/toeflˈwɜːrd550/",
    "meaning": "心理学 (词汇 550)",
    "root": "root-550 (词根释义)",
    "example": "This is an example sentence for TOEFLWord550."
  },
  {
    "word": "TOEFLWord551",
    "phonetic": "/toeflˈwɜːrd551/",
    "meaning": "天文学 (词汇 551)",
    "root": "root-551 (词根释义)",
    "example": "This is an example sentence for TOEFLWord551."
  },
  {
    "word": "TOEFLWord552",
    "phonetic": "/toeflˈwɜːrd552/",
    "meaning": "生物学 (词汇 552)",
    "root": "root-552 (词根释义)",
    "example": "This is an example sentence for TOEFLWord552."
  },
  {
    "word": "TOEFLWord553",
    "phonetic": "/toeflˈwɜːrd553/",
    "meaning": "假说 (词汇 553)",
    "root": "root-553 (词根释义)",
    "example": "This is an example sentence for TOEFLWord553."
  },
  {
    "word": "TOEFLWord554",
    "phonetic": "/toeflˈwɜːrd554/",
    "meaning": "机制 (词汇 554)",
    "root": "root-554 (词根释义)",
    "example": "This is an example sentence for TOEFLWord554."
  },
  {
    "word": "TOEFLWord555",
    "phonetic": "/toeflˈwɜːrd555/",
    "meaning": "心理学 (词汇 555)",
    "root": "root-555 (词根释义)",
    "example": "This is an example sentence for TOEFLWord555."
  },
  {
    "word": "TOEFLWord556",
    "phonetic": "/toeflˈwɜːrd556/",
    "meaning": "假说 (词汇 556)",
    "root": "root-556 (词根释义)",
    "example": "This is an example sentence for TOEFLWord556."
  },
  {
    "word": "TOEFLWord557",
    "phonetic": "/toeflˈwɜːrd557/",
    "meaning": "认知 (词汇 557)",
    "root": "root-557 (词根释义)",
    "example": "This is an example sentence for TOEFLWord557."
  },
  {
    "word": "TOEFLWord558",
    "phonetic": "/toeflˈwɜːrd558/",
    "meaning": "生物学 (词汇 558)",
    "root": "root-558 (词根释义)",
    "example": "This is an example sentence for TOEFLWord558."
  },
  {
    "word": "TOEFLWord559",
    "phonetic": "/toeflˈwɜːrd559/",
    "meaning": "机制 (词汇 559)",
    "root": "root-559 (词根释义)",
    "example": "This is an example sentence for TOEFLWord559."
  },
  {
    "word": "TOEFLWord560",
    "phonetic": "/toeflˈwɜːrd560/",
    "meaning": "地质学 (词汇 560)",
    "root": "root-560 (词根释义)",
    "example": "This is an example sentence for TOEFLWord560."
  },
  {
    "word": "TOEFLWord561",
    "phonetic": "/toeflˈwɜːrd561/",
    "meaning": "假说 (词汇 561)",
    "root": "root-561 (词根释义)",
    "example": "This is an example sentence for TOEFLWord561."
  },
  {
    "word": "TOEFLWord562",
    "phonetic": "/toeflˈwɜːrd562/",
    "meaning": "天文学 (词汇 562)",
    "root": "root-562 (词根释义)",
    "example": "This is an example sentence for TOEFLWord562."
  },
  {
    "word": "TOEFLWord563",
    "phonetic": "/toeflˈwɜːrd563/",
    "meaning": "范式 (词汇 563)",
    "root": "root-563 (词根释义)",
    "example": "This is an example sentence for TOEFLWord563."
  },
  {
    "word": "TOEFLWord564",
    "phonetic": "/toeflˈwɜːrd564/",
    "meaning": "心理学 (词汇 564)",
    "root": "root-564 (词根释义)",
    "example": "This is an example sentence for TOEFLWord564."
  },
  {
    "word": "TOEFLWord565",
    "phonetic": "/toeflˈwɜːrd565/",
    "meaning": "天文学 (词汇 565)",
    "root": "root-565 (词根释义)",
    "example": "This is an example sentence for TOEFLWord565."
  },
  {
    "word": "TOEFLWord566",
    "phonetic": "/toeflˈwɜːrd566/",
    "meaning": "天文学 (词汇 566)",
    "root": "root-566 (词根释义)",
    "example": "This is an example sentence for TOEFLWord566."
  },
  {
    "word": "TOEFLWord567",
    "phonetic": "/toeflˈwɜːrd567/",
    "meaning": "认知 (词汇 567)",
    "root": "root-567 (词根释义)",
    "example": "This is an example sentence for TOEFLWord567."
  },
  {
    "word": "TOEFLWord568",
    "phonetic": "/toeflˈwɜːrd568/",
    "meaning": "机制 (词汇 568)",
    "root": "root-568 (词根释义)",
    "example": "This is an example sentence for TOEFLWord568."
  },
  {
    "word": "TOEFLWord569",
    "phonetic": "/toeflˈwɜːrd569/",
    "meaning": "认知 (词汇 569)",
    "root": "root-569 (词根释义)",
    "example": "This is an example sentence for TOEFLWord569."
  },
  {
    "word": "TOEFLWord570",
    "phonetic": "/toeflˈwɜːrd570/",
    "meaning": "机制 (词汇 570)",
    "root": "root-570 (词根释义)",
    "example": "This is an example sentence for TOEFLWord570."
  },
  {
    "word": "TOEFLWord571",
    "phonetic": "/toeflˈwɜːrd571/",
    "meaning": "心理学 (词汇 571)",
    "root": "root-571 (词根释义)",
    "example": "This is an example sentence for TOEFLWord571."
  },
  {
    "word": "TOEFLWord572",
    "phonetic": "/toeflˈwɜːrd572/",
    "meaning": "地质学 (词汇 572)",
    "root": "root-572 (词根释义)",
    "example": "This is an example sentence for TOEFLWord572."
  },
  {
    "word": "TOEFLWord573",
    "phonetic": "/toeflˈwɜːrd573/",
    "meaning": "认知 (词汇 573)",
    "root": "root-573 (词根释义)",
    "example": "This is an example sentence for TOEFLWord573."
  },
  {
    "word": "TOEFLWord574",
    "phonetic": "/toeflˈwɜːrd574/",
    "meaning": "生物学 (词汇 574)",
    "root": "root-574 (词根释义)",
    "example": "This is an example sentence for TOEFLWord574."
  },
  {
    "word": "TOEFLWord575",
    "phonetic": "/toeflˈwɜːrd575/",
    "meaning": "生物学 (词汇 575)",
    "root": "root-575 (词根释义)",
    "example": "This is an example sentence for TOEFLWord575."
  },
  {
    "word": "TOEFLWord576",
    "phonetic": "/toeflˈwɜːrd576/",
    "meaning": "天文学 (词汇 576)",
    "root": "root-576 (词根释义)",
    "example": "This is an example sentence for TOEFLWord576."
  },
  {
    "word": "TOEFLWord577",
    "phonetic": "/toeflˈwɜːrd577/",
    "meaning": "艺术史 (词汇 577)",
    "root": "root-577 (词根释义)",
    "example": "This is an example sentence for TOEFLWord577."
  },
  {
    "word": "TOEFLWord578",
    "phonetic": "/toeflˈwɜːrd578/",
    "meaning": "实证 (词汇 578)",
    "root": "root-578 (词根释义)",
    "example": "This is an example sentence for TOEFLWord578."
  },
  {
    "word": "TOEFLWord579",
    "phonetic": "/toeflˈwɜːrd579/",
    "meaning": "艺术史 (词汇 579)",
    "root": "root-579 (词根释义)",
    "example": "This is an example sentence for TOEFLWord579."
  },
  {
    "word": "TOEFLWord580",
    "phonetic": "/toeflˈwɜːrd580/",
    "meaning": "假说 (词汇 580)",
    "root": "root-580 (词根释义)",
    "example": "This is an example sentence for TOEFLWord580."
  },
  {
    "word": "TOEFLWord581",
    "phonetic": "/toeflˈwɜːrd581/",
    "meaning": "地质学 (词汇 581)",
    "root": "root-581 (词根释义)",
    "example": "This is an example sentence for TOEFLWord581."
  },
  {
    "word": "TOEFLWord582",
    "phonetic": "/toeflˈwɜːrd582/",
    "meaning": "天文学 (词汇 582)",
    "root": "root-582 (词根释义)",
    "example": "This is an example sentence for TOEFLWord582."
  },
  {
    "word": "TOEFLWord583",
    "phonetic": "/toeflˈwɜːrd583/",
    "meaning": "地质学 (词汇 583)",
    "root": "root-583 (词根释义)",
    "example": "This is an example sentence for TOEFLWord583."
  },
  {
    "word": "TOEFLWord584",
    "phonetic": "/toeflˈwɜːrd584/",
    "meaning": "艺术史 (词汇 584)",
    "root": "root-584 (词根释义)",
    "example": "This is an example sentence for TOEFLWord584."
  },
  {
    "word": "TOEFLWord585",
    "phonetic": "/toeflˈwɜːrd585/",
    "meaning": "假说 (词汇 585)",
    "root": "root-585 (词根释义)",
    "example": "This is an example sentence for TOEFLWord585."
  },
  {
    "word": "TOEFLWord586",
    "phonetic": "/toeflˈwɜːrd586/",
    "meaning": "认知 (词汇 586)",
    "root": "root-586 (词根释义)",
    "example": "This is an example sentence for TOEFLWord586."
  },
  {
    "word": "TOEFLWord587",
    "phonetic": "/toeflˈwɜːrd587/",
    "meaning": "机制 (词汇 587)",
    "root": "root-587 (词根释义)",
    "example": "This is an example sentence for TOEFLWord587."
  },
  {
    "word": "TOEFLWord588",
    "phonetic": "/toeflˈwɜːrd588/",
    "meaning": "认知 (词汇 588)",
    "root": "root-588 (词根释义)",
    "example": "This is an example sentence for TOEFLWord588."
  },
  {
    "word": "TOEFLWord589",
    "phonetic": "/toeflˈwɜːrd589/",
    "meaning": "假说 (词汇 589)",
    "root": "root-589 (词根释义)",
    "example": "This is an example sentence for TOEFLWord589."
  },
  {
    "word": "TOEFLWord590",
    "phonetic": "/toeflˈwɜːrd590/",
    "meaning": "假说 (词汇 590)",
    "root": "root-590 (词根释义)",
    "example": "This is an example sentence for TOEFLWord590."
  },
  {
    "word": "TOEFLWord591",
    "phonetic": "/toeflˈwɜːrd591/",
    "meaning": "范式 (词汇 591)",
    "root": "root-591 (词根释义)",
    "example": "This is an example sentence for TOEFLWord591."
  },
  {
    "word": "TOEFLWord592",
    "phonetic": "/toeflˈwɜːrd592/",
    "meaning": "艺术史 (词汇 592)",
    "root": "root-592 (词根释义)",
    "example": "This is an example sentence for TOEFLWord592."
  },
  {
    "word": "TOEFLWord593",
    "phonetic": "/toeflˈwɜːrd593/",
    "meaning": "生物学 (词汇 593)",
    "root": "root-593 (词根释义)",
    "example": "This is an example sentence for TOEFLWord593."
  },
  {
    "word": "TOEFLWord594",
    "phonetic": "/toeflˈwɜːrd594/",
    "meaning": "地质学 (词汇 594)",
    "root": "root-594 (词根释义)",
    "example": "This is an example sentence for TOEFLWord594."
  },
  {
    "word": "TOEFLWord595",
    "phonetic": "/toeflˈwɜːrd595/",
    "meaning": "实证 (词汇 595)",
    "root": "root-595 (词根释义)",
    "example": "This is an example sentence for TOEFLWord595."
  },
  {
    "word": "TOEFLWord596",
    "phonetic": "/toeflˈwɜːrd596/",
    "meaning": "范式 (词汇 596)",
    "root": "root-596 (词根释义)",
    "example": "This is an example sentence for TOEFLWord596."
  },
  {
    "word": "TOEFLWord597",
    "phonetic": "/toeflˈwɜːrd597/",
    "meaning": "天文学 (词汇 597)",
    "root": "root-597 (词根释义)",
    "example": "This is an example sentence for TOEFLWord597."
  },
  {
    "word": "TOEFLWord598",
    "phonetic": "/toeflˈwɜːrd598/",
    "meaning": "范式 (词汇 598)",
    "root": "root-598 (词根释义)",
    "example": "This is an example sentence for TOEFLWord598."
  },
  {
    "word": "TOEFLWord599",
    "phonetic": "/toeflˈwɜːrd599/",
    "meaning": "地质学 (词汇 599)",
    "root": "root-599 (词根释义)",
    "example": "This is an example sentence for TOEFLWord599."
  },
  {
    "word": "TOEFLWord600",
    "phonetic": "/toeflˈwɜːrd600/",
    "meaning": "地质学 (词汇 600)",
    "root": "root-600 (词根释义)",
    "example": "This is an example sentence for TOEFLWord600."
  },
  {
    "word": "TOEFLWord601",
    "phonetic": "/toeflˈwɜːrd601/",
    "meaning": "地质学 (词汇 601)",
    "root": "root-601 (词根释义)",
    "example": "This is an example sentence for TOEFLWord601."
  },
  {
    "word": "TOEFLWord602",
    "phonetic": "/toeflˈwɜːrd602/",
    "meaning": "假说 (词汇 602)",
    "root": "root-602 (词根释义)",
    "example": "This is an example sentence for TOEFLWord602."
  },
  {
    "word": "TOEFLWord603",
    "phonetic": "/toeflˈwɜːrd603/",
    "meaning": "认知 (词汇 603)",
    "root": "root-603 (词根释义)",
    "example": "This is an example sentence for TOEFLWord603."
  },
  {
    "word": "TOEFLWord604",
    "phonetic": "/toeflˈwɜːrd604/",
    "meaning": "艺术史 (词汇 604)",
    "root": "root-604 (词根释义)",
    "example": "This is an example sentence for TOEFLWord604."
  },
  {
    "word": "TOEFLWord605",
    "phonetic": "/toeflˈwɜːrd605/",
    "meaning": "心理学 (词汇 605)",
    "root": "root-605 (词根释义)",
    "example": "This is an example sentence for TOEFLWord605."
  },
  {
    "word": "TOEFLWord606",
    "phonetic": "/toeflˈwɜːrd606/",
    "meaning": "机制 (词汇 606)",
    "root": "root-606 (词根释义)",
    "example": "This is an example sentence for TOEFLWord606."
  },
  {
    "word": "TOEFLWord607",
    "phonetic": "/toeflˈwɜːrd607/",
    "meaning": "生物学 (词汇 607)",
    "root": "root-607 (词根释义)",
    "example": "This is an example sentence for TOEFLWord607."
  },
  {
    "word": "TOEFLWord608",
    "phonetic": "/toeflˈwɜːrd608/",
    "meaning": "假说 (词汇 608)",
    "root": "root-608 (词根释义)",
    "example": "This is an example sentence for TOEFLWord608."
  },
  {
    "word": "TOEFLWord609",
    "phonetic": "/toeflˈwɜːrd609/",
    "meaning": "实证 (词汇 609)",
    "root": "root-609 (词根释义)",
    "example": "This is an example sentence for TOEFLWord609."
  },
  {
    "word": "TOEFLWord610",
    "phonetic": "/toeflˈwɜːrd610/",
    "meaning": "地质学 (词汇 610)",
    "root": "root-610 (词根释义)",
    "example": "This is an example sentence for TOEFLWord610."
  },
  {
    "word": "TOEFLWord611",
    "phonetic": "/toeflˈwɜːrd611/",
    "meaning": "范式 (词汇 611)",
    "root": "root-611 (词根释义)",
    "example": "This is an example sentence for TOEFLWord611."
  },
  {
    "word": "TOEFLWord612",
    "phonetic": "/toeflˈwɜːrd612/",
    "meaning": "范式 (词汇 612)",
    "root": "root-612 (词根释义)",
    "example": "This is an example sentence for TOEFLWord612."
  },
  {
    "word": "TOEFLWord613",
    "phonetic": "/toeflˈwɜːrd613/",
    "meaning": "范式 (词汇 613)",
    "root": "root-613 (词根释义)",
    "example": "This is an example sentence for TOEFLWord613."
  },
  {
    "word": "TOEFLWord614",
    "phonetic": "/toeflˈwɜːrd614/",
    "meaning": "天文学 (词汇 614)",
    "root": "root-614 (词根释义)",
    "example": "This is an example sentence for TOEFLWord614."
  },
  {
    "word": "TOEFLWord615",
    "phonetic": "/toeflˈwɜːrd615/",
    "meaning": "天文学 (词汇 615)",
    "root": "root-615 (词根释义)",
    "example": "This is an example sentence for TOEFLWord615."
  },
  {
    "word": "TOEFLWord616",
    "phonetic": "/toeflˈwɜːrd616/",
    "meaning": "生物学 (词汇 616)",
    "root": "root-616 (词根释义)",
    "example": "This is an example sentence for TOEFLWord616."
  },
  {
    "word": "TOEFLWord617",
    "phonetic": "/toeflˈwɜːrd617/",
    "meaning": "实证 (词汇 617)",
    "root": "root-617 (词根释义)",
    "example": "This is an example sentence for TOEFLWord617."
  },
  {
    "word": "TOEFLWord618",
    "phonetic": "/toeflˈwɜːrd618/",
    "meaning": "艺术史 (词汇 618)",
    "root": "root-618 (词根释义)",
    "example": "This is an example sentence for TOEFLWord618."
  },
  {
    "word": "TOEFLWord619",
    "phonetic": "/toeflˈwɜːrd619/",
    "meaning": "实证 (词汇 619)",
    "root": "root-619 (词根释义)",
    "example": "This is an example sentence for TOEFLWord619."
  },
  {
    "word": "TOEFLWord620",
    "phonetic": "/toeflˈwɜːrd620/",
    "meaning": "认知 (词汇 620)",
    "root": "root-620 (词根释义)",
    "example": "This is an example sentence for TOEFLWord620."
  },
  {
    "word": "TOEFLWord621",
    "phonetic": "/toeflˈwɜːrd621/",
    "meaning": "生物学 (词汇 621)",
    "root": "root-621 (词根释义)",
    "example": "This is an example sentence for TOEFLWord621."
  },
  {
    "word": "TOEFLWord622",
    "phonetic": "/toeflˈwɜːrd622/",
    "meaning": "生物学 (词汇 622)",
    "root": "root-622 (词根释义)",
    "example": "This is an example sentence for TOEFLWord622."
  },
  {
    "word": "TOEFLWord623",
    "phonetic": "/toeflˈwɜːrd623/",
    "meaning": "心理学 (词汇 623)",
    "root": "root-623 (词根释义)",
    "example": "This is an example sentence for TOEFLWord623."
  },
  {
    "word": "TOEFLWord624",
    "phonetic": "/toeflˈwɜːrd624/",
    "meaning": "生物学 (词汇 624)",
    "root": "root-624 (词根释义)",
    "example": "This is an example sentence for TOEFLWord624."
  },
  {
    "word": "TOEFLWord625",
    "phonetic": "/toeflˈwɜːrd625/",
    "meaning": "心理学 (词汇 625)",
    "root": "root-625 (词根释义)",
    "example": "This is an example sentence for TOEFLWord625."
  },
  {
    "word": "TOEFLWord626",
    "phonetic": "/toeflˈwɜːrd626/",
    "meaning": "实证 (词汇 626)",
    "root": "root-626 (词根释义)",
    "example": "This is an example sentence for TOEFLWord626."
  },
  {
    "word": "TOEFLWord627",
    "phonetic": "/toeflˈwɜːrd627/",
    "meaning": "天文学 (词汇 627)",
    "root": "root-627 (词根释义)",
    "example": "This is an example sentence for TOEFLWord627."
  },
  {
    "word": "TOEFLWord628",
    "phonetic": "/toeflˈwɜːrd628/",
    "meaning": "生物学 (词汇 628)",
    "root": "root-628 (词根释义)",
    "example": "This is an example sentence for TOEFLWord628."
  },
  {
    "word": "TOEFLWord629",
    "phonetic": "/toeflˈwɜːrd629/",
    "meaning": "机制 (词汇 629)",
    "root": "root-629 (词根释义)",
    "example": "This is an example sentence for TOEFLWord629."
  },
  {
    "word": "TOEFLWord630",
    "phonetic": "/toeflˈwɜːrd630/",
    "meaning": "艺术史 (词汇 630)",
    "root": "root-630 (词根释义)",
    "example": "This is an example sentence for TOEFLWord630."
  },
  {
    "word": "TOEFLWord631",
    "phonetic": "/toeflˈwɜːrd631/",
    "meaning": "心理学 (词汇 631)",
    "root": "root-631 (词根释义)",
    "example": "This is an example sentence for TOEFLWord631."
  },
  {
    "word": "TOEFLWord632",
    "phonetic": "/toeflˈwɜːrd632/",
    "meaning": "假说 (词汇 632)",
    "root": "root-632 (词根释义)",
    "example": "This is an example sentence for TOEFLWord632."
  },
  {
    "word": "TOEFLWord633",
    "phonetic": "/toeflˈwɜːrd633/",
    "meaning": "地质学 (词汇 633)",
    "root": "root-633 (词根释义)",
    "example": "This is an example sentence for TOEFLWord633."
  },
  {
    "word": "TOEFLWord634",
    "phonetic": "/toeflˈwɜːrd634/",
    "meaning": "机制 (词汇 634)",
    "root": "root-634 (词根释义)",
    "example": "This is an example sentence for TOEFLWord634."
  },
  {
    "word": "TOEFLWord635",
    "phonetic": "/toeflˈwɜːrd635/",
    "meaning": "假说 (词汇 635)",
    "root": "root-635 (词根释义)",
    "example": "This is an example sentence for TOEFLWord635."
  },
  {
    "word": "TOEFLWord636",
    "phonetic": "/toeflˈwɜːrd636/",
    "meaning": "假说 (词汇 636)",
    "root": "root-636 (词根释义)",
    "example": "This is an example sentence for TOEFLWord636."
  },
  {
    "word": "TOEFLWord637",
    "phonetic": "/toeflˈwɜːrd637/",
    "meaning": "范式 (词汇 637)",
    "root": "root-637 (词根释义)",
    "example": "This is an example sentence for TOEFLWord637."
  },
  {
    "word": "TOEFLWord638",
    "phonetic": "/toeflˈwɜːrd638/",
    "meaning": "机制 (词汇 638)",
    "root": "root-638 (词根释义)",
    "example": "This is an example sentence for TOEFLWord638."
  },
  {
    "word": "TOEFLWord639",
    "phonetic": "/toeflˈwɜːrd639/",
    "meaning": "艺术史 (词汇 639)",
    "root": "root-639 (词根释义)",
    "example": "This is an example sentence for TOEFLWord639."
  },
  {
    "word": "TOEFLWord640",
    "phonetic": "/toeflˈwɜːrd640/",
    "meaning": "实证 (词汇 640)",
    "root": "root-640 (词根释义)",
    "example": "This is an example sentence for TOEFLWord640."
  },
  {
    "word": "TOEFLWord641",
    "phonetic": "/toeflˈwɜːrd641/",
    "meaning": "生物学 (词汇 641)",
    "root": "root-641 (词根释义)",
    "example": "This is an example sentence for TOEFLWord641."
  },
  {
    "word": "TOEFLWord642",
    "phonetic": "/toeflˈwɜːrd642/",
    "meaning": "艺术史 (词汇 642)",
    "root": "root-642 (词根释义)",
    "example": "This is an example sentence for TOEFLWord642."
  },
  {
    "word": "TOEFLWord643",
    "phonetic": "/toeflˈwɜːrd643/",
    "meaning": "心理学 (词汇 643)",
    "root": "root-643 (词根释义)",
    "example": "This is an example sentence for TOEFLWord643."
  },
  {
    "word": "TOEFLWord644",
    "phonetic": "/toeflˈwɜːrd644/",
    "meaning": "认知 (词汇 644)",
    "root": "root-644 (词根释义)",
    "example": "This is an example sentence for TOEFLWord644."
  },
  {
    "word": "TOEFLWord645",
    "phonetic": "/toeflˈwɜːrd645/",
    "meaning": "认知 (词汇 645)",
    "root": "root-645 (词根释义)",
    "example": "This is an example sentence for TOEFLWord645."
  },
  {
    "word": "TOEFLWord646",
    "phonetic": "/toeflˈwɜːrd646/",
    "meaning": "天文学 (词汇 646)",
    "root": "root-646 (词根释义)",
    "example": "This is an example sentence for TOEFLWord646."
  },
  {
    "word": "TOEFLWord647",
    "phonetic": "/toeflˈwɜːrd647/",
    "meaning": "认知 (词汇 647)",
    "root": "root-647 (词根释义)",
    "example": "This is an example sentence for TOEFLWord647."
  },
  {
    "word": "TOEFLWord648",
    "phonetic": "/toeflˈwɜːrd648/",
    "meaning": "范式 (词汇 648)",
    "root": "root-648 (词根释义)",
    "example": "This is an example sentence for TOEFLWord648."
  },
  {
    "word": "TOEFLWord649",
    "phonetic": "/toeflˈwɜːrd649/",
    "meaning": "范式 (词汇 649)",
    "root": "root-649 (词根释义)",
    "example": "This is an example sentence for TOEFLWord649."
  },
  {
    "word": "TOEFLWord650",
    "phonetic": "/toeflˈwɜːrd650/",
    "meaning": "天文学 (词汇 650)",
    "root": "root-650 (词根释义)",
    "example": "This is an example sentence for TOEFLWord650."
  },
  {
    "word": "TOEFLWord651",
    "phonetic": "/toeflˈwɜːrd651/",
    "meaning": "认知 (词汇 651)",
    "root": "root-651 (词根释义)",
    "example": "This is an example sentence for TOEFLWord651."
  },
  {
    "word": "TOEFLWord652",
    "phonetic": "/toeflˈwɜːrd652/",
    "meaning": "范式 (词汇 652)",
    "root": "root-652 (词根释义)",
    "example": "This is an example sentence for TOEFLWord652."
  },
  {
    "word": "TOEFLWord653",
    "phonetic": "/toeflˈwɜːrd653/",
    "meaning": "地质学 (词汇 653)",
    "root": "root-653 (词根释义)",
    "example": "This is an example sentence for TOEFLWord653."
  },
  {
    "word": "TOEFLWord654",
    "phonetic": "/toeflˈwɜːrd654/",
    "meaning": "范式 (词汇 654)",
    "root": "root-654 (词根释义)",
    "example": "This is an example sentence for TOEFLWord654."
  },
  {
    "word": "TOEFLWord655",
    "phonetic": "/toeflˈwɜːrd655/",
    "meaning": "地质学 (词汇 655)",
    "root": "root-655 (词根释义)",
    "example": "This is an example sentence for TOEFLWord655."
  },
  {
    "word": "TOEFLWord656",
    "phonetic": "/toeflˈwɜːrd656/",
    "meaning": "范式 (词汇 656)",
    "root": "root-656 (词根释义)",
    "example": "This is an example sentence for TOEFLWord656."
  },
  {
    "word": "TOEFLWord657",
    "phonetic": "/toeflˈwɜːrd657/",
    "meaning": "地质学 (词汇 657)",
    "root": "root-657 (词根释义)",
    "example": "This is an example sentence for TOEFLWord657."
  },
  {
    "word": "TOEFLWord658",
    "phonetic": "/toeflˈwɜːrd658/",
    "meaning": "认知 (词汇 658)",
    "root": "root-658 (词根释义)",
    "example": "This is an example sentence for TOEFLWord658."
  },
  {
    "word": "TOEFLWord659",
    "phonetic": "/toeflˈwɜːrd659/",
    "meaning": "生物学 (词汇 659)",
    "root": "root-659 (词根释义)",
    "example": "This is an example sentence for TOEFLWord659."
  },
  {
    "word": "TOEFLWord660",
    "phonetic": "/toeflˈwɜːrd660/",
    "meaning": "心理学 (词汇 660)",
    "root": "root-660 (词根释义)",
    "example": "This is an example sentence for TOEFLWord660."
  },
  {
    "word": "TOEFLWord661",
    "phonetic": "/toeflˈwɜːrd661/",
    "meaning": "心理学 (词汇 661)",
    "root": "root-661 (词根释义)",
    "example": "This is an example sentence for TOEFLWord661."
  },
  {
    "word": "TOEFLWord662",
    "phonetic": "/toeflˈwɜːrd662/",
    "meaning": "范式 (词汇 662)",
    "root": "root-662 (词根释义)",
    "example": "This is an example sentence for TOEFLWord662."
  },
  {
    "word": "TOEFLWord663",
    "phonetic": "/toeflˈwɜːrd663/",
    "meaning": "认知 (词汇 663)",
    "root": "root-663 (词根释义)",
    "example": "This is an example sentence for TOEFLWord663."
  },
  {
    "word": "TOEFLWord664",
    "phonetic": "/toeflˈwɜːrd664/",
    "meaning": "认知 (词汇 664)",
    "root": "root-664 (词根释义)",
    "example": "This is an example sentence for TOEFLWord664."
  },
  {
    "word": "TOEFLWord665",
    "phonetic": "/toeflˈwɜːrd665/",
    "meaning": "机制 (词汇 665)",
    "root": "root-665 (词根释义)",
    "example": "This is an example sentence for TOEFLWord665."
  },
  {
    "word": "TOEFLWord666",
    "phonetic": "/toeflˈwɜːrd666/",
    "meaning": "认知 (词汇 666)",
    "root": "root-666 (词根释义)",
    "example": "This is an example sentence for TOEFLWord666."
  },
  {
    "word": "TOEFLWord667",
    "phonetic": "/toeflˈwɜːrd667/",
    "meaning": "范式 (词汇 667)",
    "root": "root-667 (词根释义)",
    "example": "This is an example sentence for TOEFLWord667."
  },
  {
    "word": "TOEFLWord668",
    "phonetic": "/toeflˈwɜːrd668/",
    "meaning": "假说 (词汇 668)",
    "root": "root-668 (词根释义)",
    "example": "This is an example sentence for TOEFLWord668."
  },
  {
    "word": "TOEFLWord669",
    "phonetic": "/toeflˈwɜːrd669/",
    "meaning": "心理学 (词汇 669)",
    "root": "root-669 (词根释义)",
    "example": "This is an example sentence for TOEFLWord669."
  },
  {
    "word": "TOEFLWord670",
    "phonetic": "/toeflˈwɜːrd670/",
    "meaning": "地质学 (词汇 670)",
    "root": "root-670 (词根释义)",
    "example": "This is an example sentence for TOEFLWord670."
  },
  {
    "word": "TOEFLWord671",
    "phonetic": "/toeflˈwɜːrd671/",
    "meaning": "认知 (词汇 671)",
    "root": "root-671 (词根释义)",
    "example": "This is an example sentence for TOEFLWord671."
  },
  {
    "word": "TOEFLWord672",
    "phonetic": "/toeflˈwɜːrd672/",
    "meaning": "假说 (词汇 672)",
    "root": "root-672 (词根释义)",
    "example": "This is an example sentence for TOEFLWord672."
  },
  {
    "word": "TOEFLWord673",
    "phonetic": "/toeflˈwɜːrd673/",
    "meaning": "地质学 (词汇 673)",
    "root": "root-673 (词根释义)",
    "example": "This is an example sentence for TOEFLWord673."
  },
  {
    "word": "TOEFLWord674",
    "phonetic": "/toeflˈwɜːrd674/",
    "meaning": "地质学 (词汇 674)",
    "root": "root-674 (词根释义)",
    "example": "This is an example sentence for TOEFLWord674."
  },
  {
    "word": "TOEFLWord675",
    "phonetic": "/toeflˈwɜːrd675/",
    "meaning": "地质学 (词汇 675)",
    "root": "root-675 (词根释义)",
    "example": "This is an example sentence for TOEFLWord675."
  },
  {
    "word": "TOEFLWord676",
    "phonetic": "/toeflˈwɜːrd676/",
    "meaning": "实证 (词汇 676)",
    "root": "root-676 (词根释义)",
    "example": "This is an example sentence for TOEFLWord676."
  },
  {
    "word": "TOEFLWord677",
    "phonetic": "/toeflˈwɜːrd677/",
    "meaning": "假说 (词汇 677)",
    "root": "root-677 (词根释义)",
    "example": "This is an example sentence for TOEFLWord677."
  },
  {
    "word": "TOEFLWord678",
    "phonetic": "/toeflˈwɜːrd678/",
    "meaning": "艺术史 (词汇 678)",
    "root": "root-678 (词根释义)",
    "example": "This is an example sentence for TOEFLWord678."
  },
  {
    "word": "TOEFLWord679",
    "phonetic": "/toeflˈwɜːrd679/",
    "meaning": "艺术史 (词汇 679)",
    "root": "root-679 (词根释义)",
    "example": "This is an example sentence for TOEFLWord679."
  },
  {
    "word": "TOEFLWord680",
    "phonetic": "/toeflˈwɜːrd680/",
    "meaning": "地质学 (词汇 680)",
    "root": "root-680 (词根释义)",
    "example": "This is an example sentence for TOEFLWord680."
  },
  {
    "word": "TOEFLWord681",
    "phonetic": "/toeflˈwɜːrd681/",
    "meaning": "生物学 (词汇 681)",
    "root": "root-681 (词根释义)",
    "example": "This is an example sentence for TOEFLWord681."
  },
  {
    "word": "TOEFLWord682",
    "phonetic": "/toeflˈwɜːrd682/",
    "meaning": "地质学 (词汇 682)",
    "root": "root-682 (词根释义)",
    "example": "This is an example sentence for TOEFLWord682."
  },
  {
    "word": "TOEFLWord683",
    "phonetic": "/toeflˈwɜːrd683/",
    "meaning": "实证 (词汇 683)",
    "root": "root-683 (词根释义)",
    "example": "This is an example sentence for TOEFLWord683."
  },
  {
    "word": "TOEFLWord684",
    "phonetic": "/toeflˈwɜːrd684/",
    "meaning": "认知 (词汇 684)",
    "root": "root-684 (词根释义)",
    "example": "This is an example sentence for TOEFLWord684."
  },
  {
    "word": "TOEFLWord685",
    "phonetic": "/toeflˈwɜːrd685/",
    "meaning": "生物学 (词汇 685)",
    "root": "root-685 (词根释义)",
    "example": "This is an example sentence for TOEFLWord685."
  },
  {
    "word": "TOEFLWord686",
    "phonetic": "/toeflˈwɜːrd686/",
    "meaning": "艺术史 (词汇 686)",
    "root": "root-686 (词根释义)",
    "example": "This is an example sentence for TOEFLWord686."
  },
  {
    "word": "TOEFLWord687",
    "phonetic": "/toeflˈwɜːrd687/",
    "meaning": "生物学 (词汇 687)",
    "root": "root-687 (词根释义)",
    "example": "This is an example sentence for TOEFLWord687."
  },
  {
    "word": "TOEFLWord688",
    "phonetic": "/toeflˈwɜːrd688/",
    "meaning": "心理学 (词汇 688)",
    "root": "root-688 (词根释义)",
    "example": "This is an example sentence for TOEFLWord688."
  },
  {
    "word": "TOEFLWord689",
    "phonetic": "/toeflˈwɜːrd689/",
    "meaning": "地质学 (词汇 689)",
    "root": "root-689 (词根释义)",
    "example": "This is an example sentence for TOEFLWord689."
  },
  {
    "word": "TOEFLWord690",
    "phonetic": "/toeflˈwɜːrd690/",
    "meaning": "艺术史 (词汇 690)",
    "root": "root-690 (词根释义)",
    "example": "This is an example sentence for TOEFLWord690."
  },
  {
    "word": "TOEFLWord691",
    "phonetic": "/toeflˈwɜːrd691/",
    "meaning": "地质学 (词汇 691)",
    "root": "root-691 (词根释义)",
    "example": "This is an example sentence for TOEFLWord691."
  },
  {
    "word": "TOEFLWord692",
    "phonetic": "/toeflˈwɜːrd692/",
    "meaning": "机制 (词汇 692)",
    "root": "root-692 (词根释义)",
    "example": "This is an example sentence for TOEFLWord692."
  },
  {
    "word": "TOEFLWord693",
    "phonetic": "/toeflˈwɜːrd693/",
    "meaning": "艺术史 (词汇 693)",
    "root": "root-693 (词根释义)",
    "example": "This is an example sentence for TOEFLWord693."
  },
  {
    "word": "TOEFLWord694",
    "phonetic": "/toeflˈwɜːrd694/",
    "meaning": "生物学 (词汇 694)",
    "root": "root-694 (词根释义)",
    "example": "This is an example sentence for TOEFLWord694."
  },
  {
    "word": "TOEFLWord695",
    "phonetic": "/toeflˈwɜːrd695/",
    "meaning": "天文学 (词汇 695)",
    "root": "root-695 (词根释义)",
    "example": "This is an example sentence for TOEFLWord695."
  },
  {
    "word": "TOEFLWord696",
    "phonetic": "/toeflˈwɜːrd696/",
    "meaning": "地质学 (词汇 696)",
    "root": "root-696 (词根释义)",
    "example": "This is an example sentence for TOEFLWord696."
  },
  {
    "word": "TOEFLWord697",
    "phonetic": "/toeflˈwɜːrd697/",
    "meaning": "地质学 (词汇 697)",
    "root": "root-697 (词根释义)",
    "example": "This is an example sentence for TOEFLWord697."
  },
  {
    "word": "TOEFLWord698",
    "phonetic": "/toeflˈwɜːrd698/",
    "meaning": "艺术史 (词汇 698)",
    "root": "root-698 (词根释义)",
    "example": "This is an example sentence for TOEFLWord698."
  },
  {
    "word": "TOEFLWord699",
    "phonetic": "/toeflˈwɜːrd699/",
    "meaning": "认知 (词汇 699)",
    "root": "root-699 (词根释义)",
    "example": "This is an example sentence for TOEFLWord699."
  },
  {
    "word": "TOEFLWord700",
    "phonetic": "/toeflˈwɜːrd700/",
    "meaning": "地质学 (词汇 700)",
    "root": "root-700 (词根释义)",
    "example": "This is an example sentence for TOEFLWord700."
  },
  {
    "word": "TOEFLWord701",
    "phonetic": "/toeflˈwɜːrd701/",
    "meaning": "认知 (词汇 701)",
    "root": "root-701 (词根释义)",
    "example": "This is an example sentence for TOEFLWord701."
  },
  {
    "word": "TOEFLWord702",
    "phonetic": "/toeflˈwɜːrd702/",
    "meaning": "生物学 (词汇 702)",
    "root": "root-702 (词根释义)",
    "example": "This is an example sentence for TOEFLWord702."
  },
  {
    "word": "TOEFLWord703",
    "phonetic": "/toeflˈwɜːrd703/",
    "meaning": "假说 (词汇 703)",
    "root": "root-703 (词根释义)",
    "example": "This is an example sentence for TOEFLWord703."
  },
  {
    "word": "TOEFLWord704",
    "phonetic": "/toeflˈwɜːrd704/",
    "meaning": "天文学 (词汇 704)",
    "root": "root-704 (词根释义)",
    "example": "This is an example sentence for TOEFLWord704."
  },
  {
    "word": "TOEFLWord705",
    "phonetic": "/toeflˈwɜːrd705/",
    "meaning": "生物学 (词汇 705)",
    "root": "root-705 (词根释义)",
    "example": "This is an example sentence for TOEFLWord705."
  },
  {
    "word": "TOEFLWord706",
    "phonetic": "/toeflˈwɜːrd706/",
    "meaning": "心理学 (词汇 706)",
    "root": "root-706 (词根释义)",
    "example": "This is an example sentence for TOEFLWord706."
  },
  {
    "word": "TOEFLWord707",
    "phonetic": "/toeflˈwɜːrd707/",
    "meaning": "天文学 (词汇 707)",
    "root": "root-707 (词根释义)",
    "example": "This is an example sentence for TOEFLWord707."
  },
  {
    "word": "TOEFLWord708",
    "phonetic": "/toeflˈwɜːrd708/",
    "meaning": "艺术史 (词汇 708)",
    "root": "root-708 (词根释义)",
    "example": "This is an example sentence for TOEFLWord708."
  },
  {
    "word": "TOEFLWord709",
    "phonetic": "/toeflˈwɜːrd709/",
    "meaning": "实证 (词汇 709)",
    "root": "root-709 (词根释义)",
    "example": "This is an example sentence for TOEFLWord709."
  },
  {
    "word": "TOEFLWord710",
    "phonetic": "/toeflˈwɜːrd710/",
    "meaning": "实证 (词汇 710)",
    "root": "root-710 (词根释义)",
    "example": "This is an example sentence for TOEFLWord710."
  },
  {
    "word": "TOEFLWord711",
    "phonetic": "/toeflˈwɜːrd711/",
    "meaning": "地质学 (词汇 711)",
    "root": "root-711 (词根释义)",
    "example": "This is an example sentence for TOEFLWord711."
  },
  {
    "word": "TOEFLWord712",
    "phonetic": "/toeflˈwɜːrd712/",
    "meaning": "实证 (词汇 712)",
    "root": "root-712 (词根释义)",
    "example": "This is an example sentence for TOEFLWord712."
  },
  {
    "word": "TOEFLWord713",
    "phonetic": "/toeflˈwɜːrd713/",
    "meaning": "实证 (词汇 713)",
    "root": "root-713 (词根释义)",
    "example": "This is an example sentence for TOEFLWord713."
  },
  {
    "word": "TOEFLWord714",
    "phonetic": "/toeflˈwɜːrd714/",
    "meaning": "地质学 (词汇 714)",
    "root": "root-714 (词根释义)",
    "example": "This is an example sentence for TOEFLWord714."
  },
  {
    "word": "TOEFLWord715",
    "phonetic": "/toeflˈwɜːrd715/",
    "meaning": "天文学 (词汇 715)",
    "root": "root-715 (词根释义)",
    "example": "This is an example sentence for TOEFLWord715."
  },
  {
    "word": "TOEFLWord716",
    "phonetic": "/toeflˈwɜːrd716/",
    "meaning": "生物学 (词汇 716)",
    "root": "root-716 (词根释义)",
    "example": "This is an example sentence for TOEFLWord716."
  },
  {
    "word": "TOEFLWord717",
    "phonetic": "/toeflˈwɜːrd717/",
    "meaning": "生物学 (词汇 717)",
    "root": "root-717 (词根释义)",
    "example": "This is an example sentence for TOEFLWord717."
  },
  {
    "word": "TOEFLWord718",
    "phonetic": "/toeflˈwɜːrd718/",
    "meaning": "生物学 (词汇 718)",
    "root": "root-718 (词根释义)",
    "example": "This is an example sentence for TOEFLWord718."
  },
  {
    "word": "TOEFLWord719",
    "phonetic": "/toeflˈwɜːrd719/",
    "meaning": "假说 (词汇 719)",
    "root": "root-719 (词根释义)",
    "example": "This is an example sentence for TOEFLWord719."
  },
  {
    "word": "TOEFLWord720",
    "phonetic": "/toeflˈwɜːrd720/",
    "meaning": "实证 (词汇 720)",
    "root": "root-720 (词根释义)",
    "example": "This is an example sentence for TOEFLWord720."
  },
  {
    "word": "TOEFLWord721",
    "phonetic": "/toeflˈwɜːrd721/",
    "meaning": "范式 (词汇 721)",
    "root": "root-721 (词根释义)",
    "example": "This is an example sentence for TOEFLWord721."
  },
  {
    "word": "TOEFLWord722",
    "phonetic": "/toeflˈwɜːrd722/",
    "meaning": "艺术史 (词汇 722)",
    "root": "root-722 (词根释义)",
    "example": "This is an example sentence for TOEFLWord722."
  },
  {
    "word": "TOEFLWord723",
    "phonetic": "/toeflˈwɜːrd723/",
    "meaning": "天文学 (词汇 723)",
    "root": "root-723 (词根释义)",
    "example": "This is an example sentence for TOEFLWord723."
  },
  {
    "word": "TOEFLWord724",
    "phonetic": "/toeflˈwɜːrd724/",
    "meaning": "实证 (词汇 724)",
    "root": "root-724 (词根释义)",
    "example": "This is an example sentence for TOEFLWord724."
  },
  {
    "word": "TOEFLWord725",
    "phonetic": "/toeflˈwɜːrd725/",
    "meaning": "范式 (词汇 725)",
    "root": "root-725 (词根释义)",
    "example": "This is an example sentence for TOEFLWord725."
  },
  {
    "word": "TOEFLWord726",
    "phonetic": "/toeflˈwɜːrd726/",
    "meaning": "认知 (词汇 726)",
    "root": "root-726 (词根释义)",
    "example": "This is an example sentence for TOEFLWord726."
  },
  {
    "word": "TOEFLWord727",
    "phonetic": "/toeflˈwɜːrd727/",
    "meaning": "心理学 (词汇 727)",
    "root": "root-727 (词根释义)",
    "example": "This is an example sentence for TOEFLWord727."
  },
  {
    "word": "TOEFLWord728",
    "phonetic": "/toeflˈwɜːrd728/",
    "meaning": "心理学 (词汇 728)",
    "root": "root-728 (词根释义)",
    "example": "This is an example sentence for TOEFLWord728."
  },
  {
    "word": "TOEFLWord729",
    "phonetic": "/toeflˈwɜːrd729/",
    "meaning": "生物学 (词汇 729)",
    "root": "root-729 (词根释义)",
    "example": "This is an example sentence for TOEFLWord729."
  },
  {
    "word": "TOEFLWord730",
    "phonetic": "/toeflˈwɜːrd730/",
    "meaning": "天文学 (词汇 730)",
    "root": "root-730 (词根释义)",
    "example": "This is an example sentence for TOEFLWord730."
  },
  {
    "word": "TOEFLWord731",
    "phonetic": "/toeflˈwɜːrd731/",
    "meaning": "实证 (词汇 731)",
    "root": "root-731 (词根释义)",
    "example": "This is an example sentence for TOEFLWord731."
  },
  {
    "word": "TOEFLWord732",
    "phonetic": "/toeflˈwɜːrd732/",
    "meaning": "艺术史 (词汇 732)",
    "root": "root-732 (词根释义)",
    "example": "This is an example sentence for TOEFLWord732."
  },
  {
    "word": "TOEFLWord733",
    "phonetic": "/toeflˈwɜːrd733/",
    "meaning": "心理学 (词汇 733)",
    "root": "root-733 (词根释义)",
    "example": "This is an example sentence for TOEFLWord733."
  },
  {
    "word": "TOEFLWord734",
    "phonetic": "/toeflˈwɜːrd734/",
    "meaning": "实证 (词汇 734)",
    "root": "root-734 (词根释义)",
    "example": "This is an example sentence for TOEFLWord734."
  },
  {
    "word": "TOEFLWord735",
    "phonetic": "/toeflˈwɜːrd735/",
    "meaning": "地质学 (词汇 735)",
    "root": "root-735 (词根释义)",
    "example": "This is an example sentence for TOEFLWord735."
  },
  {
    "word": "TOEFLWord736",
    "phonetic": "/toeflˈwɜːrd736/",
    "meaning": "假说 (词汇 736)",
    "root": "root-736 (词根释义)",
    "example": "This is an example sentence for TOEFLWord736."
  },
  {
    "word": "TOEFLWord737",
    "phonetic": "/toeflˈwɜːrd737/",
    "meaning": "心理学 (词汇 737)",
    "root": "root-737 (词根释义)",
    "example": "This is an example sentence for TOEFLWord737."
  },
  {
    "word": "TOEFLWord738",
    "phonetic": "/toeflˈwɜːrd738/",
    "meaning": "范式 (词汇 738)",
    "root": "root-738 (词根释义)",
    "example": "This is an example sentence for TOEFLWord738."
  },
  {
    "word": "TOEFLWord739",
    "phonetic": "/toeflˈwɜːrd739/",
    "meaning": "地质学 (词汇 739)",
    "root": "root-739 (词根释义)",
    "example": "This is an example sentence for TOEFLWord739."
  },
  {
    "word": "TOEFLWord740",
    "phonetic": "/toeflˈwɜːrd740/",
    "meaning": "天文学 (词汇 740)",
    "root": "root-740 (词根释义)",
    "example": "This is an example sentence for TOEFLWord740."
  },
  {
    "word": "TOEFLWord741",
    "phonetic": "/toeflˈwɜːrd741/",
    "meaning": "认知 (词汇 741)",
    "root": "root-741 (词根释义)",
    "example": "This is an example sentence for TOEFLWord741."
  },
  {
    "word": "TOEFLWord742",
    "phonetic": "/toeflˈwɜːrd742/",
    "meaning": "认知 (词汇 742)",
    "root": "root-742 (词根释义)",
    "example": "This is an example sentence for TOEFLWord742."
  },
  {
    "word": "TOEFLWord743",
    "phonetic": "/toeflˈwɜːrd743/",
    "meaning": "心理学 (词汇 743)",
    "root": "root-743 (词根释义)",
    "example": "This is an example sentence for TOEFLWord743."
  },
  {
    "word": "TOEFLWord744",
    "phonetic": "/toeflˈwɜːrd744/",
    "meaning": "实证 (词汇 744)",
    "root": "root-744 (词根释义)",
    "example": "This is an example sentence for TOEFLWord744."
  },
  {
    "word": "TOEFLWord745",
    "phonetic": "/toeflˈwɜːrd745/",
    "meaning": "认知 (词汇 745)",
    "root": "root-745 (词根释义)",
    "example": "This is an example sentence for TOEFLWord745."
  },
  {
    "word": "TOEFLWord746",
    "phonetic": "/toeflˈwɜːrd746/",
    "meaning": "地质学 (词汇 746)",
    "root": "root-746 (词根释义)",
    "example": "This is an example sentence for TOEFLWord746."
  },
  {
    "word": "TOEFLWord747",
    "phonetic": "/toeflˈwɜːrd747/",
    "meaning": "地质学 (词汇 747)",
    "root": "root-747 (词根释义)",
    "example": "This is an example sentence for TOEFLWord747."
  },
  {
    "word": "TOEFLWord748",
    "phonetic": "/toeflˈwɜːrd748/",
    "meaning": "认知 (词汇 748)",
    "root": "root-748 (词根释义)",
    "example": "This is an example sentence for TOEFLWord748."
  },
  {
    "word": "TOEFLWord749",
    "phonetic": "/toeflˈwɜːrd749/",
    "meaning": "天文学 (词汇 749)",
    "root": "root-749 (词根释义)",
    "example": "This is an example sentence for TOEFLWord749."
  },
  {
    "word": "TOEFLWord750",
    "phonetic": "/toeflˈwɜːrd750/",
    "meaning": "机制 (词汇 750)",
    "root": "root-750 (词根释义)",
    "example": "This is an example sentence for TOEFLWord750."
  },
  {
    "word": "TOEFLWord751",
    "phonetic": "/toeflˈwɜːrd751/",
    "meaning": "实证 (词汇 751)",
    "root": "root-751 (词根释义)",
    "example": "This is an example sentence for TOEFLWord751."
  },
  {
    "word": "TOEFLWord752",
    "phonetic": "/toeflˈwɜːrd752/",
    "meaning": "地质学 (词汇 752)",
    "root": "root-752 (词根释义)",
    "example": "This is an example sentence for TOEFLWord752."
  },
  {
    "word": "TOEFLWord753",
    "phonetic": "/toeflˈwɜːrd753/",
    "meaning": "范式 (词汇 753)",
    "root": "root-753 (词根释义)",
    "example": "This is an example sentence for TOEFLWord753."
  },
  {
    "word": "TOEFLWord754",
    "phonetic": "/toeflˈwɜːrd754/",
    "meaning": "假说 (词汇 754)",
    "root": "root-754 (词根释义)",
    "example": "This is an example sentence for TOEFLWord754."
  },
  {
    "word": "TOEFLWord755",
    "phonetic": "/toeflˈwɜːrd755/",
    "meaning": "机制 (词汇 755)",
    "root": "root-755 (词根释义)",
    "example": "This is an example sentence for TOEFLWord755."
  },
  {
    "word": "TOEFLWord756",
    "phonetic": "/toeflˈwɜːrd756/",
    "meaning": "范式 (词汇 756)",
    "root": "root-756 (词根释义)",
    "example": "This is an example sentence for TOEFLWord756."
  },
  {
    "word": "TOEFLWord757",
    "phonetic": "/toeflˈwɜːrd757/",
    "meaning": "心理学 (词汇 757)",
    "root": "root-757 (词根释义)",
    "example": "This is an example sentence for TOEFLWord757."
  },
  {
    "word": "TOEFLWord758",
    "phonetic": "/toeflˈwɜːrd758/",
    "meaning": "天文学 (词汇 758)",
    "root": "root-758 (词根释义)",
    "example": "This is an example sentence for TOEFLWord758."
  },
  {
    "word": "TOEFLWord759",
    "phonetic": "/toeflˈwɜːrd759/",
    "meaning": "机制 (词汇 759)",
    "root": "root-759 (词根释义)",
    "example": "This is an example sentence for TOEFLWord759."
  },
  {
    "word": "TOEFLWord760",
    "phonetic": "/toeflˈwɜːrd760/",
    "meaning": "认知 (词汇 760)",
    "root": "root-760 (词根释义)",
    "example": "This is an example sentence for TOEFLWord760."
  },
  {
    "word": "TOEFLWord761",
    "phonetic": "/toeflˈwɜːrd761/",
    "meaning": "生物学 (词汇 761)",
    "root": "root-761 (词根释义)",
    "example": "This is an example sentence for TOEFLWord761."
  },
  {
    "word": "TOEFLWord762",
    "phonetic": "/toeflˈwɜːrd762/",
    "meaning": "生物学 (词汇 762)",
    "root": "root-762 (词根释义)",
    "example": "This is an example sentence for TOEFLWord762."
  },
  {
    "word": "TOEFLWord763",
    "phonetic": "/toeflˈwɜːrd763/",
    "meaning": "认知 (词汇 763)",
    "root": "root-763 (词根释义)",
    "example": "This is an example sentence for TOEFLWord763."
  },
  {
    "word": "TOEFLWord764",
    "phonetic": "/toeflˈwɜːrd764/",
    "meaning": "地质学 (词汇 764)",
    "root": "root-764 (词根释义)",
    "example": "This is an example sentence for TOEFLWord764."
  },
  {
    "word": "TOEFLWord765",
    "phonetic": "/toeflˈwɜːrd765/",
    "meaning": "心理学 (词汇 765)",
    "root": "root-765 (词根释义)",
    "example": "This is an example sentence for TOEFLWord765."
  },
  {
    "word": "TOEFLWord766",
    "phonetic": "/toeflˈwɜːrd766/",
    "meaning": "实证 (词汇 766)",
    "root": "root-766 (词根释义)",
    "example": "This is an example sentence for TOEFLWord766."
  },
  {
    "word": "TOEFLWord767",
    "phonetic": "/toeflˈwɜːrd767/",
    "meaning": "艺术史 (词汇 767)",
    "root": "root-767 (词根释义)",
    "example": "This is an example sentence for TOEFLWord767."
  },
  {
    "word": "TOEFLWord768",
    "phonetic": "/toeflˈwɜːrd768/",
    "meaning": "机制 (词汇 768)",
    "root": "root-768 (词根释义)",
    "example": "This is an example sentence for TOEFLWord768."
  },
  {
    "word": "TOEFLWord769",
    "phonetic": "/toeflˈwɜːrd769/",
    "meaning": "心理学 (词汇 769)",
    "root": "root-769 (词根释义)",
    "example": "This is an example sentence for TOEFLWord769."
  },
  {
    "word": "TOEFLWord770",
    "phonetic": "/toeflˈwɜːrd770/",
    "meaning": "范式 (词汇 770)",
    "root": "root-770 (词根释义)",
    "example": "This is an example sentence for TOEFLWord770."
  },
  {
    "word": "TOEFLWord771",
    "phonetic": "/toeflˈwɜːrd771/",
    "meaning": "范式 (词汇 771)",
    "root": "root-771 (词根释义)",
    "example": "This is an example sentence for TOEFLWord771."
  },
  {
    "word": "TOEFLWord772",
    "phonetic": "/toeflˈwɜːrd772/",
    "meaning": "心理学 (词汇 772)",
    "root": "root-772 (词根释义)",
    "example": "This is an example sentence for TOEFLWord772."
  },
  {
    "word": "TOEFLWord773",
    "phonetic": "/toeflˈwɜːrd773/",
    "meaning": "生物学 (词汇 773)",
    "root": "root-773 (词根释义)",
    "example": "This is an example sentence for TOEFLWord773."
  },
  {
    "word": "TOEFLWord774",
    "phonetic": "/toeflˈwɜːrd774/",
    "meaning": "地质学 (词汇 774)",
    "root": "root-774 (词根释义)",
    "example": "This is an example sentence for TOEFLWord774."
  },
  {
    "word": "TOEFLWord775",
    "phonetic": "/toeflˈwɜːrd775/",
    "meaning": "艺术史 (词汇 775)",
    "root": "root-775 (词根释义)",
    "example": "This is an example sentence for TOEFLWord775."
  },
  {
    "word": "TOEFLWord776",
    "phonetic": "/toeflˈwɜːrd776/",
    "meaning": "假说 (词汇 776)",
    "root": "root-776 (词根释义)",
    "example": "This is an example sentence for TOEFLWord776."
  },
  {
    "word": "TOEFLWord777",
    "phonetic": "/toeflˈwɜːrd777/",
    "meaning": "地质学 (词汇 777)",
    "root": "root-777 (词根释义)",
    "example": "This is an example sentence for TOEFLWord777."
  },
  {
    "word": "TOEFLWord778",
    "phonetic": "/toeflˈwɜːrd778/",
    "meaning": "范式 (词汇 778)",
    "root": "root-778 (词根释义)",
    "example": "This is an example sentence for TOEFLWord778."
  },
  {
    "word": "TOEFLWord779",
    "phonetic": "/toeflˈwɜːrd779/",
    "meaning": "范式 (词汇 779)",
    "root": "root-779 (词根释义)",
    "example": "This is an example sentence for TOEFLWord779."
  },
  {
    "word": "TOEFLWord780",
    "phonetic": "/toeflˈwɜːrd780/",
    "meaning": "地质学 (词汇 780)",
    "root": "root-780 (词根释义)",
    "example": "This is an example sentence for TOEFLWord780."
  },
  {
    "word": "TOEFLWord781",
    "phonetic": "/toeflˈwɜːrd781/",
    "meaning": "假说 (词汇 781)",
    "root": "root-781 (词根释义)",
    "example": "This is an example sentence for TOEFLWord781."
  },
  {
    "word": "TOEFLWord782",
    "phonetic": "/toeflˈwɜːrd782/",
    "meaning": "天文学 (词汇 782)",
    "root": "root-782 (词根释义)",
    "example": "This is an example sentence for TOEFLWord782."
  },
  {
    "word": "TOEFLWord783",
    "phonetic": "/toeflˈwɜːrd783/",
    "meaning": "范式 (词汇 783)",
    "root": "root-783 (词根释义)",
    "example": "This is an example sentence for TOEFLWord783."
  },
  {
    "word": "TOEFLWord784",
    "phonetic": "/toeflˈwɜːrd784/",
    "meaning": "认知 (词汇 784)",
    "root": "root-784 (词根释义)",
    "example": "This is an example sentence for TOEFLWord784."
  },
  {
    "word": "TOEFLWord785",
    "phonetic": "/toeflˈwɜːrd785/",
    "meaning": "艺术史 (词汇 785)",
    "root": "root-785 (词根释义)",
    "example": "This is an example sentence for TOEFLWord785."
  },
  {
    "word": "TOEFLWord786",
    "phonetic": "/toeflˈwɜːrd786/",
    "meaning": "假说 (词汇 786)",
    "root": "root-786 (词根释义)",
    "example": "This is an example sentence for TOEFLWord786."
  },
  {
    "word": "TOEFLWord787",
    "phonetic": "/toeflˈwɜːrd787/",
    "meaning": "假说 (词汇 787)",
    "root": "root-787 (词根释义)",
    "example": "This is an example sentence for TOEFLWord787."
  },
  {
    "word": "TOEFLWord788",
    "phonetic": "/toeflˈwɜːrd788/",
    "meaning": "天文学 (词汇 788)",
    "root": "root-788 (词根释义)",
    "example": "This is an example sentence for TOEFLWord788."
  },
  {
    "word": "TOEFLWord789",
    "phonetic": "/toeflˈwɜːrd789/",
    "meaning": "地质学 (词汇 789)",
    "root": "root-789 (词根释义)",
    "example": "This is an example sentence for TOEFLWord789."
  },
  {
    "word": "TOEFLWord790",
    "phonetic": "/toeflˈwɜːrd790/",
    "meaning": "天文学 (词汇 790)",
    "root": "root-790 (词根释义)",
    "example": "This is an example sentence for TOEFLWord790."
  },
  {
    "word": "TOEFLWord791",
    "phonetic": "/toeflˈwɜːrd791/",
    "meaning": "生物学 (词汇 791)",
    "root": "root-791 (词根释义)",
    "example": "This is an example sentence for TOEFLWord791."
  },
  {
    "word": "TOEFLWord792",
    "phonetic": "/toeflˈwɜːrd792/",
    "meaning": "地质学 (词汇 792)",
    "root": "root-792 (词根释义)",
    "example": "This is an example sentence for TOEFLWord792."
  },
  {
    "word": "TOEFLWord793",
    "phonetic": "/toeflˈwɜːrd793/",
    "meaning": "实证 (词汇 793)",
    "root": "root-793 (词根释义)",
    "example": "This is an example sentence for TOEFLWord793."
  },
  {
    "word": "TOEFLWord794",
    "phonetic": "/toeflˈwɜːrd794/",
    "meaning": "天文学 (词汇 794)",
    "root": "root-794 (词根释义)",
    "example": "This is an example sentence for TOEFLWord794."
  },
  {
    "word": "TOEFLWord795",
    "phonetic": "/toeflˈwɜːrd795/",
    "meaning": "实证 (词汇 795)",
    "root": "root-795 (词根释义)",
    "example": "This is an example sentence for TOEFLWord795."
  },
  {
    "word": "TOEFLWord796",
    "phonetic": "/toeflˈwɜːrd796/",
    "meaning": "天文学 (词汇 796)",
    "root": "root-796 (词根释义)",
    "example": "This is an example sentence for TOEFLWord796."
  },
  {
    "word": "TOEFLWord797",
    "phonetic": "/toeflˈwɜːrd797/",
    "meaning": "艺术史 (词汇 797)",
    "root": "root-797 (词根释义)",
    "example": "This is an example sentence for TOEFLWord797."
  },
  {
    "word": "TOEFLWord798",
    "phonetic": "/toeflˈwɜːrd798/",
    "meaning": "心理学 (词汇 798)",
    "root": "root-798 (词根释义)",
    "example": "This is an example sentence for TOEFLWord798."
  },
  {
    "word": "TOEFLWord799",
    "phonetic": "/toeflˈwɜːrd799/",
    "meaning": "生物学 (词汇 799)",
    "root": "root-799 (词根释义)",
    "example": "This is an example sentence for TOEFLWord799."
  },
  {
    "word": "TOEFLWord800",
    "phonetic": "/toeflˈwɜːrd800/",
    "meaning": "天文学 (词汇 800)",
    "root": "root-800 (词根释义)",
    "example": "This is an example sentence for TOEFLWord800."
  },
  {
    "word": "TOEFLWord801",
    "phonetic": "/toeflˈwɜːrd801/",
    "meaning": "机制 (词汇 801)",
    "root": "root-801 (词根释义)",
    "example": "This is an example sentence for TOEFLWord801."
  },
  {
    "word": "TOEFLWord802",
    "phonetic": "/toeflˈwɜːrd802/",
    "meaning": "天文学 (词汇 802)",
    "root": "root-802 (词根释义)",
    "example": "This is an example sentence for TOEFLWord802."
  },
  {
    "word": "TOEFLWord803",
    "phonetic": "/toeflˈwɜːrd803/",
    "meaning": "心理学 (词汇 803)",
    "root": "root-803 (词根释义)",
    "example": "This is an example sentence for TOEFLWord803."
  },
  {
    "word": "TOEFLWord804",
    "phonetic": "/toeflˈwɜːrd804/",
    "meaning": "地质学 (词汇 804)",
    "root": "root-804 (词根释义)",
    "example": "This is an example sentence for TOEFLWord804."
  },
  {
    "word": "TOEFLWord805",
    "phonetic": "/toeflˈwɜːrd805/",
    "meaning": "范式 (词汇 805)",
    "root": "root-805 (词根释义)",
    "example": "This is an example sentence for TOEFLWord805."
  },
  {
    "word": "TOEFLWord806",
    "phonetic": "/toeflˈwɜːrd806/",
    "meaning": "心理学 (词汇 806)",
    "root": "root-806 (词根释义)",
    "example": "This is an example sentence for TOEFLWord806."
  },
  {
    "word": "TOEFLWord807",
    "phonetic": "/toeflˈwɜːrd807/",
    "meaning": "范式 (词汇 807)",
    "root": "root-807 (词根释义)",
    "example": "This is an example sentence for TOEFLWord807."
  },
  {
    "word": "TOEFLWord808",
    "phonetic": "/toeflˈwɜːrd808/",
    "meaning": "假说 (词汇 808)",
    "root": "root-808 (词根释义)",
    "example": "This is an example sentence for TOEFLWord808."
  },
  {
    "word": "TOEFLWord809",
    "phonetic": "/toeflˈwɜːrd809/",
    "meaning": "心理学 (词汇 809)",
    "root": "root-809 (词根释义)",
    "example": "This is an example sentence for TOEFLWord809."
  },
  {
    "word": "TOEFLWord810",
    "phonetic": "/toeflˈwɜːrd810/",
    "meaning": "范式 (词汇 810)",
    "root": "root-810 (词根释义)",
    "example": "This is an example sentence for TOEFLWord810."
  },
  {
    "word": "TOEFLWord811",
    "phonetic": "/toeflˈwɜːrd811/",
    "meaning": "认知 (词汇 811)",
    "root": "root-811 (词根释义)",
    "example": "This is an example sentence for TOEFLWord811."
  },
  {
    "word": "TOEFLWord812",
    "phonetic": "/toeflˈwɜːrd812/",
    "meaning": "实证 (词汇 812)",
    "root": "root-812 (词根释义)",
    "example": "This is an example sentence for TOEFLWord812."
  },
  {
    "word": "TOEFLWord813",
    "phonetic": "/toeflˈwɜːrd813/",
    "meaning": "机制 (词汇 813)",
    "root": "root-813 (词根释义)",
    "example": "This is an example sentence for TOEFLWord813."
  },
  {
    "word": "TOEFLWord814",
    "phonetic": "/toeflˈwɜːrd814/",
    "meaning": "天文学 (词汇 814)",
    "root": "root-814 (词根释义)",
    "example": "This is an example sentence for TOEFLWord814."
  },
  {
    "word": "TOEFLWord815",
    "phonetic": "/toeflˈwɜːrd815/",
    "meaning": "心理学 (词汇 815)",
    "root": "root-815 (词根释义)",
    "example": "This is an example sentence for TOEFLWord815."
  },
  {
    "word": "TOEFLWord816",
    "phonetic": "/toeflˈwɜːrd816/",
    "meaning": "艺术史 (词汇 816)",
    "root": "root-816 (词根释义)",
    "example": "This is an example sentence for TOEFLWord816."
  },
  {
    "word": "TOEFLWord817",
    "phonetic": "/toeflˈwɜːrd817/",
    "meaning": "地质学 (词汇 817)",
    "root": "root-817 (词根释义)",
    "example": "This is an example sentence for TOEFLWord817."
  },
  {
    "word": "TOEFLWord818",
    "phonetic": "/toeflˈwɜːrd818/",
    "meaning": "认知 (词汇 818)",
    "root": "root-818 (词根释义)",
    "example": "This is an example sentence for TOEFLWord818."
  },
  {
    "word": "TOEFLWord819",
    "phonetic": "/toeflˈwɜːrd819/",
    "meaning": "机制 (词汇 819)",
    "root": "root-819 (词根释义)",
    "example": "This is an example sentence for TOEFLWord819."
  },
  {
    "word": "TOEFLWord820",
    "phonetic": "/toeflˈwɜːrd820/",
    "meaning": "认知 (词汇 820)",
    "root": "root-820 (词根释义)",
    "example": "This is an example sentence for TOEFLWord820."
  },
  {
    "word": "TOEFLWord821",
    "phonetic": "/toeflˈwɜːrd821/",
    "meaning": "艺术史 (词汇 821)",
    "root": "root-821 (词根释义)",
    "example": "This is an example sentence for TOEFLWord821."
  },
  {
    "word": "TOEFLWord822",
    "phonetic": "/toeflˈwɜːrd822/",
    "meaning": "生物学 (词汇 822)",
    "root": "root-822 (词根释义)",
    "example": "This is an example sentence for TOEFLWord822."
  },
  {
    "word": "TOEFLWord823",
    "phonetic": "/toeflˈwɜːrd823/",
    "meaning": "实证 (词汇 823)",
    "root": "root-823 (词根释义)",
    "example": "This is an example sentence for TOEFLWord823."
  },
  {
    "word": "TOEFLWord824",
    "phonetic": "/toeflˈwɜːrd824/",
    "meaning": "艺术史 (词汇 824)",
    "root": "root-824 (词根释义)",
    "example": "This is an example sentence for TOEFLWord824."
  },
  {
    "word": "TOEFLWord825",
    "phonetic": "/toeflˈwɜːrd825/",
    "meaning": "机制 (词汇 825)",
    "root": "root-825 (词根释义)",
    "example": "This is an example sentence for TOEFLWord825."
  },
  {
    "word": "TOEFLWord826",
    "phonetic": "/toeflˈwɜːrd826/",
    "meaning": "天文学 (词汇 826)",
    "root": "root-826 (词根释义)",
    "example": "This is an example sentence for TOEFLWord826."
  },
  {
    "word": "TOEFLWord827",
    "phonetic": "/toeflˈwɜːrd827/",
    "meaning": "艺术史 (词汇 827)",
    "root": "root-827 (词根释义)",
    "example": "This is an example sentence for TOEFLWord827."
  },
  {
    "word": "TOEFLWord828",
    "phonetic": "/toeflˈwɜːrd828/",
    "meaning": "生物学 (词汇 828)",
    "root": "root-828 (词根释义)",
    "example": "This is an example sentence for TOEFLWord828."
  },
  {
    "word": "TOEFLWord829",
    "phonetic": "/toeflˈwɜːrd829/",
    "meaning": "机制 (词汇 829)",
    "root": "root-829 (词根释义)",
    "example": "This is an example sentence for TOEFLWord829."
  },
  {
    "word": "TOEFLWord830",
    "phonetic": "/toeflˈwɜːrd830/",
    "meaning": "艺术史 (词汇 830)",
    "root": "root-830 (词根释义)",
    "example": "This is an example sentence for TOEFLWord830."
  },
  {
    "word": "TOEFLWord831",
    "phonetic": "/toeflˈwɜːrd831/",
    "meaning": "认知 (词汇 831)",
    "root": "root-831 (词根释义)",
    "example": "This is an example sentence for TOEFLWord831."
  },
  {
    "word": "TOEFLWord832",
    "phonetic": "/toeflˈwɜːrd832/",
    "meaning": "认知 (词汇 832)",
    "root": "root-832 (词根释义)",
    "example": "This is an example sentence for TOEFLWord832."
  },
  {
    "word": "TOEFLWord833",
    "phonetic": "/toeflˈwɜːrd833/",
    "meaning": "心理学 (词汇 833)",
    "root": "root-833 (词根释义)",
    "example": "This is an example sentence for TOEFLWord833."
  },
  {
    "word": "TOEFLWord834",
    "phonetic": "/toeflˈwɜːrd834/",
    "meaning": "实证 (词汇 834)",
    "root": "root-834 (词根释义)",
    "example": "This is an example sentence for TOEFLWord834."
  },
  {
    "word": "TOEFLWord835",
    "phonetic": "/toeflˈwɜːrd835/",
    "meaning": "实证 (词汇 835)",
    "root": "root-835 (词根释义)",
    "example": "This is an example sentence for TOEFLWord835."
  },
  {
    "word": "TOEFLWord836",
    "phonetic": "/toeflˈwɜːrd836/",
    "meaning": "假说 (词汇 836)",
    "root": "root-836 (词根释义)",
    "example": "This is an example sentence for TOEFLWord836."
  },
  {
    "word": "TOEFLWord837",
    "phonetic": "/toeflˈwɜːrd837/",
    "meaning": "心理学 (词汇 837)",
    "root": "root-837 (词根释义)",
    "example": "This is an example sentence for TOEFLWord837."
  },
  {
    "word": "TOEFLWord838",
    "phonetic": "/toeflˈwɜːrd838/",
    "meaning": "范式 (词汇 838)",
    "root": "root-838 (词根释义)",
    "example": "This is an example sentence for TOEFLWord838."
  },
  {
    "word": "TOEFLWord839",
    "phonetic": "/toeflˈwɜːrd839/",
    "meaning": "生物学 (词汇 839)",
    "root": "root-839 (词根释义)",
    "example": "This is an example sentence for TOEFLWord839."
  },
  {
    "word": "TOEFLWord840",
    "phonetic": "/toeflˈwɜːrd840/",
    "meaning": "天文学 (词汇 840)",
    "root": "root-840 (词根释义)",
    "example": "This is an example sentence for TOEFLWord840."
  },
  {
    "word": "TOEFLWord841",
    "phonetic": "/toeflˈwɜːrd841/",
    "meaning": "假说 (词汇 841)",
    "root": "root-841 (词根释义)",
    "example": "This is an example sentence for TOEFLWord841."
  },
  {
    "word": "TOEFLWord842",
    "phonetic": "/toeflˈwɜːrd842/",
    "meaning": "范式 (词汇 842)",
    "root": "root-842 (词根释义)",
    "example": "This is an example sentence for TOEFLWord842."
  },
  {
    "word": "TOEFLWord843",
    "phonetic": "/toeflˈwɜːrd843/",
    "meaning": "实证 (词汇 843)",
    "root": "root-843 (词根释义)",
    "example": "This is an example sentence for TOEFLWord843."
  },
  {
    "word": "TOEFLWord844",
    "phonetic": "/toeflˈwɜːrd844/",
    "meaning": "机制 (词汇 844)",
    "root": "root-844 (词根释义)",
    "example": "This is an example sentence for TOEFLWord844."
  },
  {
    "word": "TOEFLWord845",
    "phonetic": "/toeflˈwɜːrd845/",
    "meaning": "认知 (词汇 845)",
    "root": "root-845 (词根释义)",
    "example": "This is an example sentence for TOEFLWord845."
  },
  {
    "word": "TOEFLWord846",
    "phonetic": "/toeflˈwɜːrd846/",
    "meaning": "生物学 (词汇 846)",
    "root": "root-846 (词根释义)",
    "example": "This is an example sentence for TOEFLWord846."
  },
  {
    "word": "TOEFLWord847",
    "phonetic": "/toeflˈwɜːrd847/",
    "meaning": "艺术史 (词汇 847)",
    "root": "root-847 (词根释义)",
    "example": "This is an example sentence for TOEFLWord847."
  },
  {
    "word": "TOEFLWord848",
    "phonetic": "/toeflˈwɜːrd848/",
    "meaning": "假说 (词汇 848)",
    "root": "root-848 (词根释义)",
    "example": "This is an example sentence for TOEFLWord848."
  },
  {
    "word": "TOEFLWord849",
    "phonetic": "/toeflˈwɜːrd849/",
    "meaning": "机制 (词汇 849)",
    "root": "root-849 (词根释义)",
    "example": "This is an example sentence for TOEFLWord849."
  },
  {
    "word": "TOEFLWord850",
    "phonetic": "/toeflˈwɜːrd850/",
    "meaning": "认知 (词汇 850)",
    "root": "root-850 (词根释义)",
    "example": "This is an example sentence for TOEFLWord850."
  },
  {
    "word": "TOEFLWord851",
    "phonetic": "/toeflˈwɜːrd851/",
    "meaning": "假说 (词汇 851)",
    "root": "root-851 (词根释义)",
    "example": "This is an example sentence for TOEFLWord851."
  },
  {
    "word": "TOEFLWord852",
    "phonetic": "/toeflˈwɜːrd852/",
    "meaning": "机制 (词汇 852)",
    "root": "root-852 (词根释义)",
    "example": "This is an example sentence for TOEFLWord852."
  },
  {
    "word": "TOEFLWord853",
    "phonetic": "/toeflˈwɜːrd853/",
    "meaning": "艺术史 (词汇 853)",
    "root": "root-853 (词根释义)",
    "example": "This is an example sentence for TOEFLWord853."
  },
  {
    "word": "TOEFLWord854",
    "phonetic": "/toeflˈwɜːrd854/",
    "meaning": "心理学 (词汇 854)",
    "root": "root-854 (词根释义)",
    "example": "This is an example sentence for TOEFLWord854."
  },
  {
    "word": "TOEFLWord855",
    "phonetic": "/toeflˈwɜːrd855/",
    "meaning": "机制 (词汇 855)",
    "root": "root-855 (词根释义)",
    "example": "This is an example sentence for TOEFLWord855."
  },
  {
    "word": "TOEFLWord856",
    "phonetic": "/toeflˈwɜːrd856/",
    "meaning": "艺术史 (词汇 856)",
    "root": "root-856 (词根释义)",
    "example": "This is an example sentence for TOEFLWord856."
  },
  {
    "word": "TOEFLWord857",
    "phonetic": "/toeflˈwɜːrd857/",
    "meaning": "地质学 (词汇 857)",
    "root": "root-857 (词根释义)",
    "example": "This is an example sentence for TOEFLWord857."
  },
  {
    "word": "TOEFLWord858",
    "phonetic": "/toeflˈwɜːrd858/",
    "meaning": "机制 (词汇 858)",
    "root": "root-858 (词根释义)",
    "example": "This is an example sentence for TOEFLWord858."
  },
  {
    "word": "TOEFLWord859",
    "phonetic": "/toeflˈwɜːrd859/",
    "meaning": "心理学 (词汇 859)",
    "root": "root-859 (词根释义)",
    "example": "This is an example sentence for TOEFLWord859."
  },
  {
    "word": "TOEFLWord860",
    "phonetic": "/toeflˈwɜːrd860/",
    "meaning": "认知 (词汇 860)",
    "root": "root-860 (词根释义)",
    "example": "This is an example sentence for TOEFLWord860."
  },
  {
    "word": "TOEFLWord861",
    "phonetic": "/toeflˈwɜːrd861/",
    "meaning": "艺术史 (词汇 861)",
    "root": "root-861 (词根释义)",
    "example": "This is an example sentence for TOEFLWord861."
  },
  {
    "word": "TOEFLWord862",
    "phonetic": "/toeflˈwɜːrd862/",
    "meaning": "艺术史 (词汇 862)",
    "root": "root-862 (词根释义)",
    "example": "This is an example sentence for TOEFLWord862."
  },
  {
    "word": "TOEFLWord863",
    "phonetic": "/toeflˈwɜːrd863/",
    "meaning": "天文学 (词汇 863)",
    "root": "root-863 (词根释义)",
    "example": "This is an example sentence for TOEFLWord863."
  },
  {
    "word": "TOEFLWord864",
    "phonetic": "/toeflˈwɜːrd864/",
    "meaning": "实证 (词汇 864)",
    "root": "root-864 (词根释义)",
    "example": "This is an example sentence for TOEFLWord864."
  },
  {
    "word": "TOEFLWord865",
    "phonetic": "/toeflˈwɜːrd865/",
    "meaning": "天文学 (词汇 865)",
    "root": "root-865 (词根释义)",
    "example": "This is an example sentence for TOEFLWord865."
  },
  {
    "word": "TOEFLWord866",
    "phonetic": "/toeflˈwɜːrd866/",
    "meaning": "范式 (词汇 866)",
    "root": "root-866 (词根释义)",
    "example": "This is an example sentence for TOEFLWord866."
  },
  {
    "word": "TOEFLWord867",
    "phonetic": "/toeflˈwɜːrd867/",
    "meaning": "假说 (词汇 867)",
    "root": "root-867 (词根释义)",
    "example": "This is an example sentence for TOEFLWord867."
  },
  {
    "word": "TOEFLWord868",
    "phonetic": "/toeflˈwɜːrd868/",
    "meaning": "假说 (词汇 868)",
    "root": "root-868 (词根释义)",
    "example": "This is an example sentence for TOEFLWord868."
  },
  {
    "word": "TOEFLWord869",
    "phonetic": "/toeflˈwɜːrd869/",
    "meaning": "心理学 (词汇 869)",
    "root": "root-869 (词根释义)",
    "example": "This is an example sentence for TOEFLWord869."
  },
  {
    "word": "TOEFLWord870",
    "phonetic": "/toeflˈwɜːrd870/",
    "meaning": "生物学 (词汇 870)",
    "root": "root-870 (词根释义)",
    "example": "This is an example sentence for TOEFLWord870."
  },
  {
    "word": "TOEFLWord871",
    "phonetic": "/toeflˈwɜːrd871/",
    "meaning": "假说 (词汇 871)",
    "root": "root-871 (词根释义)",
    "example": "This is an example sentence for TOEFLWord871."
  },
  {
    "word": "TOEFLWord872",
    "phonetic": "/toeflˈwɜːrd872/",
    "meaning": "假说 (词汇 872)",
    "root": "root-872 (词根释义)",
    "example": "This is an example sentence for TOEFLWord872."
  },
  {
    "word": "TOEFLWord873",
    "phonetic": "/toeflˈwɜːrd873/",
    "meaning": "实证 (词汇 873)",
    "root": "root-873 (词根释义)",
    "example": "This is an example sentence for TOEFLWord873."
  },
  {
    "word": "TOEFLWord874",
    "phonetic": "/toeflˈwɜːrd874/",
    "meaning": "实证 (词汇 874)",
    "root": "root-874 (词根释义)",
    "example": "This is an example sentence for TOEFLWord874."
  },
  {
    "word": "TOEFLWord875",
    "phonetic": "/toeflˈwɜːrd875/",
    "meaning": "天文学 (词汇 875)",
    "root": "root-875 (词根释义)",
    "example": "This is an example sentence for TOEFLWord875."
  },
  {
    "word": "TOEFLWord876",
    "phonetic": "/toeflˈwɜːrd876/",
    "meaning": "范式 (词汇 876)",
    "root": "root-876 (词根释义)",
    "example": "This is an example sentence for TOEFLWord876."
  },
  {
    "word": "TOEFLWord877",
    "phonetic": "/toeflˈwɜːrd877/",
    "meaning": "天文学 (词汇 877)",
    "root": "root-877 (词根释义)",
    "example": "This is an example sentence for TOEFLWord877."
  },
  {
    "word": "TOEFLWord878",
    "phonetic": "/toeflˈwɜːrd878/",
    "meaning": "地质学 (词汇 878)",
    "root": "root-878 (词根释义)",
    "example": "This is an example sentence for TOEFLWord878."
  },
  {
    "word": "TOEFLWord879",
    "phonetic": "/toeflˈwɜːrd879/",
    "meaning": "机制 (词汇 879)",
    "root": "root-879 (词根释义)",
    "example": "This is an example sentence for TOEFLWord879."
  },
  {
    "word": "TOEFLWord880",
    "phonetic": "/toeflˈwɜːrd880/",
    "meaning": "艺术史 (词汇 880)",
    "root": "root-880 (词根释义)",
    "example": "This is an example sentence for TOEFLWord880."
  },
  {
    "word": "TOEFLWord881",
    "phonetic": "/toeflˈwɜːrd881/",
    "meaning": "认知 (词汇 881)",
    "root": "root-881 (词根释义)",
    "example": "This is an example sentence for TOEFLWord881."
  },
  {
    "word": "TOEFLWord882",
    "phonetic": "/toeflˈwɜːrd882/",
    "meaning": "生物学 (词汇 882)",
    "root": "root-882 (词根释义)",
    "example": "This is an example sentence for TOEFLWord882."
  },
  {
    "word": "TOEFLWord883",
    "phonetic": "/toeflˈwɜːrd883/",
    "meaning": "心理学 (词汇 883)",
    "root": "root-883 (词根释义)",
    "example": "This is an example sentence for TOEFLWord883."
  },
  {
    "word": "TOEFLWord884",
    "phonetic": "/toeflˈwɜːrd884/",
    "meaning": "艺术史 (词汇 884)",
    "root": "root-884 (词根释义)",
    "example": "This is an example sentence for TOEFLWord884."
  },
  {
    "word": "TOEFLWord885",
    "phonetic": "/toeflˈwɜːrd885/",
    "meaning": "生物学 (词汇 885)",
    "root": "root-885 (词根释义)",
    "example": "This is an example sentence for TOEFLWord885."
  },
  {
    "word": "TOEFLWord886",
    "phonetic": "/toeflˈwɜːrd886/",
    "meaning": "认知 (词汇 886)",
    "root": "root-886 (词根释义)",
    "example": "This is an example sentence for TOEFLWord886."
  },
  {
    "word": "TOEFLWord887",
    "phonetic": "/toeflˈwɜːrd887/",
    "meaning": "实证 (词汇 887)",
    "root": "root-887 (词根释义)",
    "example": "This is an example sentence for TOEFLWord887."
  },
  {
    "word": "TOEFLWord888",
    "phonetic": "/toeflˈwɜːrd888/",
    "meaning": "天文学 (词汇 888)",
    "root": "root-888 (词根释义)",
    "example": "This is an example sentence for TOEFLWord888."
  },
  {
    "word": "TOEFLWord889",
    "phonetic": "/toeflˈwɜːrd889/",
    "meaning": "认知 (词汇 889)",
    "root": "root-889 (词根释义)",
    "example": "This is an example sentence for TOEFLWord889."
  },
  {
    "word": "TOEFLWord890",
    "phonetic": "/toeflˈwɜːrd890/",
    "meaning": "生物学 (词汇 890)",
    "root": "root-890 (词根释义)",
    "example": "This is an example sentence for TOEFLWord890."
  },
  {
    "word": "TOEFLWord891",
    "phonetic": "/toeflˈwɜːrd891/",
    "meaning": "认知 (词汇 891)",
    "root": "root-891 (词根释义)",
    "example": "This is an example sentence for TOEFLWord891."
  },
  {
    "word": "TOEFLWord892",
    "phonetic": "/toeflˈwɜːrd892/",
    "meaning": "范式 (词汇 892)",
    "root": "root-892 (词根释义)",
    "example": "This is an example sentence for TOEFLWord892."
  },
  {
    "word": "TOEFLWord893",
    "phonetic": "/toeflˈwɜːrd893/",
    "meaning": "范式 (词汇 893)",
    "root": "root-893 (词根释义)",
    "example": "This is an example sentence for TOEFLWord893."
  },
  {
    "word": "TOEFLWord894",
    "phonetic": "/toeflˈwɜːrd894/",
    "meaning": "认知 (词汇 894)",
    "root": "root-894 (词根释义)",
    "example": "This is an example sentence for TOEFLWord894."
  },
  {
    "word": "TOEFLWord895",
    "phonetic": "/toeflˈwɜːrd895/",
    "meaning": "生物学 (词汇 895)",
    "root": "root-895 (词根释义)",
    "example": "This is an example sentence for TOEFLWord895."
  },
  {
    "word": "TOEFLWord896",
    "phonetic": "/toeflˈwɜːrd896/",
    "meaning": "假说 (词汇 896)",
    "root": "root-896 (词根释义)",
    "example": "This is an example sentence for TOEFLWord896."
  },
  {
    "word": "TOEFLWord897",
    "phonetic": "/toeflˈwɜːrd897/",
    "meaning": "生物学 (词汇 897)",
    "root": "root-897 (词根释义)",
    "example": "This is an example sentence for TOEFLWord897."
  },
  {
    "word": "TOEFLWord898",
    "phonetic": "/toeflˈwɜːrd898/",
    "meaning": "实证 (词汇 898)",
    "root": "root-898 (词根释义)",
    "example": "This is an example sentence for TOEFLWord898."
  },
  {
    "word": "TOEFLWord899",
    "phonetic": "/toeflˈwɜːrd899/",
    "meaning": "范式 (词汇 899)",
    "root": "root-899 (词根释义)",
    "example": "This is an example sentence for TOEFLWord899."
  },
  {
    "word": "TOEFLWord900",
    "phonetic": "/toeflˈwɜːrd900/",
    "meaning": "艺术史 (词汇 900)",
    "root": "root-900 (词根释义)",
    "example": "This is an example sentence for TOEFLWord900."
  },
  {
    "word": "TOEFLWord901",
    "phonetic": "/toeflˈwɜːrd901/",
    "meaning": "地质学 (词汇 901)",
    "root": "root-901 (词根释义)",
    "example": "This is an example sentence for TOEFLWord901."
  },
  {
    "word": "TOEFLWord902",
    "phonetic": "/toeflˈwɜːrd902/",
    "meaning": "实证 (词汇 902)",
    "root": "root-902 (词根释义)",
    "example": "This is an example sentence for TOEFLWord902."
  },
  {
    "word": "TOEFLWord903",
    "phonetic": "/toeflˈwɜːrd903/",
    "meaning": "实证 (词汇 903)",
    "root": "root-903 (词根释义)",
    "example": "This is an example sentence for TOEFLWord903."
  },
  {
    "word": "TOEFLWord904",
    "phonetic": "/toeflˈwɜːrd904/",
    "meaning": "实证 (词汇 904)",
    "root": "root-904 (词根释义)",
    "example": "This is an example sentence for TOEFLWord904."
  },
  {
    "word": "TOEFLWord905",
    "phonetic": "/toeflˈwɜːrd905/",
    "meaning": "地质学 (词汇 905)",
    "root": "root-905 (词根释义)",
    "example": "This is an example sentence for TOEFLWord905."
  },
  {
    "word": "TOEFLWord906",
    "phonetic": "/toeflˈwɜːrd906/",
    "meaning": "天文学 (词汇 906)",
    "root": "root-906 (词根释义)",
    "example": "This is an example sentence for TOEFLWord906."
  },
  {
    "word": "TOEFLWord907",
    "phonetic": "/toeflˈwɜːrd907/",
    "meaning": "天文学 (词汇 907)",
    "root": "root-907 (词根释义)",
    "example": "This is an example sentence for TOEFLWord907."
  },
  {
    "word": "TOEFLWord908",
    "phonetic": "/toeflˈwɜːrd908/",
    "meaning": "实证 (词汇 908)",
    "root": "root-908 (词根释义)",
    "example": "This is an example sentence for TOEFLWord908."
  },
  {
    "word": "TOEFLWord909",
    "phonetic": "/toeflˈwɜːrd909/",
    "meaning": "生物学 (词汇 909)",
    "root": "root-909 (词根释义)",
    "example": "This is an example sentence for TOEFLWord909."
  },
  {
    "word": "TOEFLWord910",
    "phonetic": "/toeflˈwɜːrd910/",
    "meaning": "认知 (词汇 910)",
    "root": "root-910 (词根释义)",
    "example": "This is an example sentence for TOEFLWord910."
  },
  {
    "word": "TOEFLWord911",
    "phonetic": "/toeflˈwɜːrd911/",
    "meaning": "生物学 (词汇 911)",
    "root": "root-911 (词根释义)",
    "example": "This is an example sentence for TOEFLWord911."
  },
  {
    "word": "TOEFLWord912",
    "phonetic": "/toeflˈwɜːrd912/",
    "meaning": "实证 (词汇 912)",
    "root": "root-912 (词根释义)",
    "example": "This is an example sentence for TOEFLWord912."
  },
  {
    "word": "TOEFLWord913",
    "phonetic": "/toeflˈwɜːrd913/",
    "meaning": "生物学 (词汇 913)",
    "root": "root-913 (词根释义)",
    "example": "This is an example sentence for TOEFLWord913."
  },
  {
    "word": "TOEFLWord914",
    "phonetic": "/toeflˈwɜːrd914/",
    "meaning": "艺术史 (词汇 914)",
    "root": "root-914 (词根释义)",
    "example": "This is an example sentence for TOEFLWord914."
  },
  {
    "word": "TOEFLWord915",
    "phonetic": "/toeflˈwɜːrd915/",
    "meaning": "认知 (词汇 915)",
    "root": "root-915 (词根释义)",
    "example": "This is an example sentence for TOEFLWord915."
  },
  {
    "word": "TOEFLWord916",
    "phonetic": "/toeflˈwɜːrd916/",
    "meaning": "范式 (词汇 916)",
    "root": "root-916 (词根释义)",
    "example": "This is an example sentence for TOEFLWord916."
  },
  {
    "word": "TOEFLWord917",
    "phonetic": "/toeflˈwɜːrd917/",
    "meaning": "生物学 (词汇 917)",
    "root": "root-917 (词根释义)",
    "example": "This is an example sentence for TOEFLWord917."
  },
  {
    "word": "TOEFLWord918",
    "phonetic": "/toeflˈwɜːrd918/",
    "meaning": "天文学 (词汇 918)",
    "root": "root-918 (词根释义)",
    "example": "This is an example sentence for TOEFLWord918."
  },
  {
    "word": "TOEFLWord919",
    "phonetic": "/toeflˈwɜːrd919/",
    "meaning": "范式 (词汇 919)",
    "root": "root-919 (词根释义)",
    "example": "This is an example sentence for TOEFLWord919."
  },
  {
    "word": "TOEFLWord920",
    "phonetic": "/toeflˈwɜːrd920/",
    "meaning": "地质学 (词汇 920)",
    "root": "root-920 (词根释义)",
    "example": "This is an example sentence for TOEFLWord920."
  },
  {
    "word": "TOEFLWord921",
    "phonetic": "/toeflˈwɜːrd921/",
    "meaning": "生物学 (词汇 921)",
    "root": "root-921 (词根释义)",
    "example": "This is an example sentence for TOEFLWord921."
  },
  {
    "word": "TOEFLWord922",
    "phonetic": "/toeflˈwɜːrd922/",
    "meaning": "天文学 (词汇 922)",
    "root": "root-922 (词根释义)",
    "example": "This is an example sentence for TOEFLWord922."
  },
  {
    "word": "TOEFLWord923",
    "phonetic": "/toeflˈwɜːrd923/",
    "meaning": "假说 (词汇 923)",
    "root": "root-923 (词根释义)",
    "example": "This is an example sentence for TOEFLWord923."
  },
  {
    "word": "TOEFLWord924",
    "phonetic": "/toeflˈwɜːrd924/",
    "meaning": "范式 (词汇 924)",
    "root": "root-924 (词根释义)",
    "example": "This is an example sentence for TOEFLWord924."
  },
  {
    "word": "TOEFLWord925",
    "phonetic": "/toeflˈwɜːrd925/",
    "meaning": "天文学 (词汇 925)",
    "root": "root-925 (词根释义)",
    "example": "This is an example sentence for TOEFLWord925."
  },
  {
    "word": "TOEFLWord926",
    "phonetic": "/toeflˈwɜːrd926/",
    "meaning": "天文学 (词汇 926)",
    "root": "root-926 (词根释义)",
    "example": "This is an example sentence for TOEFLWord926."
  },
  {
    "word": "TOEFLWord927",
    "phonetic": "/toeflˈwɜːrd927/",
    "meaning": "假说 (词汇 927)",
    "root": "root-927 (词根释义)",
    "example": "This is an example sentence for TOEFLWord927."
  },
  {
    "word": "TOEFLWord928",
    "phonetic": "/toeflˈwɜːrd928/",
    "meaning": "心理学 (词汇 928)",
    "root": "root-928 (词根释义)",
    "example": "This is an example sentence for TOEFLWord928."
  },
  {
    "word": "TOEFLWord929",
    "phonetic": "/toeflˈwɜːrd929/",
    "meaning": "假说 (词汇 929)",
    "root": "root-929 (词根释义)",
    "example": "This is an example sentence for TOEFLWord929."
  },
  {
    "word": "TOEFLWord930",
    "phonetic": "/toeflˈwɜːrd930/",
    "meaning": "艺术史 (词汇 930)",
    "root": "root-930 (词根释义)",
    "example": "This is an example sentence for TOEFLWord930."
  },
  {
    "word": "TOEFLWord931",
    "phonetic": "/toeflˈwɜːrd931/",
    "meaning": "生物学 (词汇 931)",
    "root": "root-931 (词根释义)",
    "example": "This is an example sentence for TOEFLWord931."
  },
  {
    "word": "TOEFLWord932",
    "phonetic": "/toeflˈwɜːrd932/",
    "meaning": "范式 (词汇 932)",
    "root": "root-932 (词根释义)",
    "example": "This is an example sentence for TOEFLWord932."
  },
  {
    "word": "TOEFLWord933",
    "phonetic": "/toeflˈwɜːrd933/",
    "meaning": "范式 (词汇 933)",
    "root": "root-933 (词根释义)",
    "example": "This is an example sentence for TOEFLWord933."
  },
  {
    "word": "TOEFLWord934",
    "phonetic": "/toeflˈwɜːrd934/",
    "meaning": "假说 (词汇 934)",
    "root": "root-934 (词根释义)",
    "example": "This is an example sentence for TOEFLWord934."
  },
  {
    "word": "TOEFLWord935",
    "phonetic": "/toeflˈwɜːrd935/",
    "meaning": "艺术史 (词汇 935)",
    "root": "root-935 (词根释义)",
    "example": "This is an example sentence for TOEFLWord935."
  },
  {
    "word": "TOEFLWord936",
    "phonetic": "/toeflˈwɜːrd936/",
    "meaning": "范式 (词汇 936)",
    "root": "root-936 (词根释义)",
    "example": "This is an example sentence for TOEFLWord936."
  },
  {
    "word": "TOEFLWord937",
    "phonetic": "/toeflˈwɜːrd937/",
    "meaning": "地质学 (词汇 937)",
    "root": "root-937 (词根释义)",
    "example": "This is an example sentence for TOEFLWord937."
  },
  {
    "word": "TOEFLWord938",
    "phonetic": "/toeflˈwɜːrd938/",
    "meaning": "认知 (词汇 938)",
    "root": "root-938 (词根释义)",
    "example": "This is an example sentence for TOEFLWord938."
  },
  {
    "word": "TOEFLWord939",
    "phonetic": "/toeflˈwɜːrd939/",
    "meaning": "认知 (词汇 939)",
    "root": "root-939 (词根释义)",
    "example": "This is an example sentence for TOEFLWord939."
  },
  {
    "word": "TOEFLWord940",
    "phonetic": "/toeflˈwɜːrd940/",
    "meaning": "生物学 (词汇 940)",
    "root": "root-940 (词根释义)",
    "example": "This is an example sentence for TOEFLWord940."
  },
  {
    "word": "TOEFLWord941",
    "phonetic": "/toeflˈwɜːrd941/",
    "meaning": "范式 (词汇 941)",
    "root": "root-941 (词根释义)",
    "example": "This is an example sentence for TOEFLWord941."
  },
  {
    "word": "TOEFLWord942",
    "phonetic": "/toeflˈwɜːrd942/",
    "meaning": "机制 (词汇 942)",
    "root": "root-942 (词根释义)",
    "example": "This is an example sentence for TOEFLWord942."
  },
  {
    "word": "TOEFLWord943",
    "phonetic": "/toeflˈwɜːrd943/",
    "meaning": "天文学 (词汇 943)",
    "root": "root-943 (词根释义)",
    "example": "This is an example sentence for TOEFLWord943."
  },
  {
    "word": "TOEFLWord944",
    "phonetic": "/toeflˈwɜːrd944/",
    "meaning": "地质学 (词汇 944)",
    "root": "root-944 (词根释义)",
    "example": "This is an example sentence for TOEFLWord944."
  },
  {
    "word": "TOEFLWord945",
    "phonetic": "/toeflˈwɜːrd945/",
    "meaning": "实证 (词汇 945)",
    "root": "root-945 (词根释义)",
    "example": "This is an example sentence for TOEFLWord945."
  },
  {
    "word": "TOEFLWord946",
    "phonetic": "/toeflˈwɜːrd946/",
    "meaning": "范式 (词汇 946)",
    "root": "root-946 (词根释义)",
    "example": "This is an example sentence for TOEFLWord946."
  },
  {
    "word": "TOEFLWord947",
    "phonetic": "/toeflˈwɜːrd947/",
    "meaning": "假说 (词汇 947)",
    "root": "root-947 (词根释义)",
    "example": "This is an example sentence for TOEFLWord947."
  },
  {
    "word": "TOEFLWord948",
    "phonetic": "/toeflˈwɜːrd948/",
    "meaning": "假说 (词汇 948)",
    "root": "root-948 (词根释义)",
    "example": "This is an example sentence for TOEFLWord948."
  },
  {
    "word": "TOEFLWord949",
    "phonetic": "/toeflˈwɜːrd949/",
    "meaning": "艺术史 (词汇 949)",
    "root": "root-949 (词根释义)",
    "example": "This is an example sentence for TOEFLWord949."
  },
  {
    "word": "TOEFLWord950",
    "phonetic": "/toeflˈwɜːrd950/",
    "meaning": "地质学 (词汇 950)",
    "root": "root-950 (词根释义)",
    "example": "This is an example sentence for TOEFLWord950."
  },
  {
    "word": "TOEFLWord951",
    "phonetic": "/toeflˈwɜːrd951/",
    "meaning": "艺术史 (词汇 951)",
    "root": "root-951 (词根释义)",
    "example": "This is an example sentence for TOEFLWord951."
  },
  {
    "word": "TOEFLWord952",
    "phonetic": "/toeflˈwɜːrd952/",
    "meaning": "地质学 (词汇 952)",
    "root": "root-952 (词根释义)",
    "example": "This is an example sentence for TOEFLWord952."
  },
  {
    "word": "TOEFLWord953",
    "phonetic": "/toeflˈwɜːrd953/",
    "meaning": "假说 (词汇 953)",
    "root": "root-953 (词根释义)",
    "example": "This is an example sentence for TOEFLWord953."
  },
  {
    "word": "TOEFLWord954",
    "phonetic": "/toeflˈwɜːrd954/",
    "meaning": "地质学 (词汇 954)",
    "root": "root-954 (词根释义)",
    "example": "This is an example sentence for TOEFLWord954."
  },
  {
    "word": "TOEFLWord955",
    "phonetic": "/toeflˈwɜːrd955/",
    "meaning": "地质学 (词汇 955)",
    "root": "root-955 (词根释义)",
    "example": "This is an example sentence for TOEFLWord955."
  },
  {
    "word": "TOEFLWord956",
    "phonetic": "/toeflˈwɜːrd956/",
    "meaning": "假说 (词汇 956)",
    "root": "root-956 (词根释义)",
    "example": "This is an example sentence for TOEFLWord956."
  },
  {
    "word": "TOEFLWord957",
    "phonetic": "/toeflˈwɜːrd957/",
    "meaning": "范式 (词汇 957)",
    "root": "root-957 (词根释义)",
    "example": "This is an example sentence for TOEFLWord957."
  },
  {
    "word": "TOEFLWord958",
    "phonetic": "/toeflˈwɜːrd958/",
    "meaning": "地质学 (词汇 958)",
    "root": "root-958 (词根释义)",
    "example": "This is an example sentence for TOEFLWord958."
  },
  {
    "word": "TOEFLWord959",
    "phonetic": "/toeflˈwɜːrd959/",
    "meaning": "假说 (词汇 959)",
    "root": "root-959 (词根释义)",
    "example": "This is an example sentence for TOEFLWord959."
  },
  {
    "word": "TOEFLWord960",
    "phonetic": "/toeflˈwɜːrd960/",
    "meaning": "生物学 (词汇 960)",
    "root": "root-960 (词根释义)",
    "example": "This is an example sentence for TOEFLWord960."
  },
  {
    "word": "TOEFLWord961",
    "phonetic": "/toeflˈwɜːrd961/",
    "meaning": "实证 (词汇 961)",
    "root": "root-961 (词根释义)",
    "example": "This is an example sentence for TOEFLWord961."
  },
  {
    "word": "TOEFLWord962",
    "phonetic": "/toeflˈwɜːrd962/",
    "meaning": "心理学 (词汇 962)",
    "root": "root-962 (词根释义)",
    "example": "This is an example sentence for TOEFLWord962."
  },
  {
    "word": "TOEFLWord963",
    "phonetic": "/toeflˈwɜːrd963/",
    "meaning": "假说 (词汇 963)",
    "root": "root-963 (词根释义)",
    "example": "This is an example sentence for TOEFLWord963."
  },
  {
    "word": "TOEFLWord964",
    "phonetic": "/toeflˈwɜːrd964/",
    "meaning": "假说 (词汇 964)",
    "root": "root-964 (词根释义)",
    "example": "This is an example sentence for TOEFLWord964."
  },
  {
    "word": "TOEFLWord965",
    "phonetic": "/toeflˈwɜːrd965/",
    "meaning": "地质学 (词汇 965)",
    "root": "root-965 (词根释义)",
    "example": "This is an example sentence for TOEFLWord965."
  },
  {
    "word": "TOEFLWord966",
    "phonetic": "/toeflˈwɜːrd966/",
    "meaning": "假说 (词汇 966)",
    "root": "root-966 (词根释义)",
    "example": "This is an example sentence for TOEFLWord966."
  },
  {
    "word": "TOEFLWord967",
    "phonetic": "/toeflˈwɜːrd967/",
    "meaning": "地质学 (词汇 967)",
    "root": "root-967 (词根释义)",
    "example": "This is an example sentence for TOEFLWord967."
  },
  {
    "word": "TOEFLWord968",
    "phonetic": "/toeflˈwɜːrd968/",
    "meaning": "假说 (词汇 968)",
    "root": "root-968 (词根释义)",
    "example": "This is an example sentence for TOEFLWord968."
  },
  {
    "word": "TOEFLWord969",
    "phonetic": "/toeflˈwɜːrd969/",
    "meaning": "实证 (词汇 969)",
    "root": "root-969 (词根释义)",
    "example": "This is an example sentence for TOEFLWord969."
  },
  {
    "word": "TOEFLWord970",
    "phonetic": "/toeflˈwɜːrd970/",
    "meaning": "假说 (词汇 970)",
    "root": "root-970 (词根释义)",
    "example": "This is an example sentence for TOEFLWord970."
  },
  {
    "word": "TOEFLWord971",
    "phonetic": "/toeflˈwɜːrd971/",
    "meaning": "假说 (词汇 971)",
    "root": "root-971 (词根释义)",
    "example": "This is an example sentence for TOEFLWord971."
  },
  {
    "word": "TOEFLWord972",
    "phonetic": "/toeflˈwɜːrd972/",
    "meaning": "地质学 (词汇 972)",
    "root": "root-972 (词根释义)",
    "example": "This is an example sentence for TOEFLWord972."
  },
  {
    "word": "TOEFLWord973",
    "phonetic": "/toeflˈwɜːrd973/",
    "meaning": "实证 (词汇 973)",
    "root": "root-973 (词根释义)",
    "example": "This is an example sentence for TOEFLWord973."
  },
  {
    "word": "TOEFLWord974",
    "phonetic": "/toeflˈwɜːrd974/",
    "meaning": "范式 (词汇 974)",
    "root": "root-974 (词根释义)",
    "example": "This is an example sentence for TOEFLWord974."
  },
  {
    "word": "TOEFLWord975",
    "phonetic": "/toeflˈwɜːrd975/",
    "meaning": "天文学 (词汇 975)",
    "root": "root-975 (词根释义)",
    "example": "This is an example sentence for TOEFLWord975."
  },
  {
    "word": "TOEFLWord976",
    "phonetic": "/toeflˈwɜːrd976/",
    "meaning": "生物学 (词汇 976)",
    "root": "root-976 (词根释义)",
    "example": "This is an example sentence for TOEFLWord976."
  },
  {
    "word": "TOEFLWord977",
    "phonetic": "/toeflˈwɜːrd977/",
    "meaning": "机制 (词汇 977)",
    "root": "root-977 (词根释义)",
    "example": "This is an example sentence for TOEFLWord977."
  },
  {
    "word": "TOEFLWord978",
    "phonetic": "/toeflˈwɜːrd978/",
    "meaning": "机制 (词汇 978)",
    "root": "root-978 (词根释义)",
    "example": "This is an example sentence for TOEFLWord978."
  },
  {
    "word": "TOEFLWord979",
    "phonetic": "/toeflˈwɜːrd979/",
    "meaning": "艺术史 (词汇 979)",
    "root": "root-979 (词根释义)",
    "example": "This is an example sentence for TOEFLWord979."
  },
  {
    "word": "TOEFLWord980",
    "phonetic": "/toeflˈwɜːrd980/",
    "meaning": "生物学 (词汇 980)",
    "root": "root-980 (词根释义)",
    "example": "This is an example sentence for TOEFLWord980."
  },
  {
    "word": "TOEFLWord981",
    "phonetic": "/toeflˈwɜːrd981/",
    "meaning": "范式 (词汇 981)",
    "root": "root-981 (词根释义)",
    "example": "This is an example sentence for TOEFLWord981."
  },
  {
    "word": "TOEFLWord982",
    "phonetic": "/toeflˈwɜːrd982/",
    "meaning": "地质学 (词汇 982)",
    "root": "root-982 (词根释义)",
    "example": "This is an example sentence for TOEFLWord982."
  },
  {
    "word": "TOEFLWord983",
    "phonetic": "/toeflˈwɜːrd983/",
    "meaning": "机制 (词汇 983)",
    "root": "root-983 (词根释义)",
    "example": "This is an example sentence for TOEFLWord983."
  },
  {
    "word": "TOEFLWord984",
    "phonetic": "/toeflˈwɜːrd984/",
    "meaning": "认知 (词汇 984)",
    "root": "root-984 (词根释义)",
    "example": "This is an example sentence for TOEFLWord984."
  },
  {
    "word": "TOEFLWord985",
    "phonetic": "/toeflˈwɜːrd985/",
    "meaning": "生物学 (词汇 985)",
    "root": "root-985 (词根释义)",
    "example": "This is an example sentence for TOEFLWord985."
  },
  {
    "word": "TOEFLWord986",
    "phonetic": "/toeflˈwɜːrd986/",
    "meaning": "地质学 (词汇 986)",
    "root": "root-986 (词根释义)",
    "example": "This is an example sentence for TOEFLWord986."
  },
  {
    "word": "TOEFLWord987",
    "phonetic": "/toeflˈwɜːrd987/",
    "meaning": "假说 (词汇 987)",
    "root": "root-987 (词根释义)",
    "example": "This is an example sentence for TOEFLWord987."
  },
  {
    "word": "TOEFLWord988",
    "phonetic": "/toeflˈwɜːrd988/",
    "meaning": "天文学 (词汇 988)",
    "root": "root-988 (词根释义)",
    "example": "This is an example sentence for TOEFLWord988."
  },
  {
    "word": "TOEFLWord989",
    "phonetic": "/toeflˈwɜːrd989/",
    "meaning": "假说 (词汇 989)",
    "root": "root-989 (词根释义)",
    "example": "This is an example sentence for TOEFLWord989."
  },
  {
    "word": "TOEFLWord990",
    "phonetic": "/toeflˈwɜːrd990/",
    "meaning": "机制 (词汇 990)",
    "root": "root-990 (词根释义)",
    "example": "This is an example sentence for TOEFLWord990."
  },
  {
    "word": "TOEFLWord991",
    "phonetic": "/toeflˈwɜːrd991/",
    "meaning": "天文学 (词汇 991)",
    "root": "root-991 (词根释义)",
    "example": "This is an example sentence for TOEFLWord991."
  },
  {
    "word": "TOEFLWord992",
    "phonetic": "/toeflˈwɜːrd992/",
    "meaning": "范式 (词汇 992)",
    "root": "root-992 (词根释义)",
    "example": "This is an example sentence for TOEFLWord992."
  },
  {
    "word": "TOEFLWord993",
    "phonetic": "/toeflˈwɜːrd993/",
    "meaning": "心理学 (词汇 993)",
    "root": "root-993 (词根释义)",
    "example": "This is an example sentence for TOEFLWord993."
  },
  {
    "word": "TOEFLWord994",
    "phonetic": "/toeflˈwɜːrd994/",
    "meaning": "假说 (词汇 994)",
    "root": "root-994 (词根释义)",
    "example": "This is an example sentence for TOEFLWord994."
  },
  {
    "word": "TOEFLWord995",
    "phonetic": "/toeflˈwɜːrd995/",
    "meaning": "生物学 (词汇 995)",
    "root": "root-995 (词根释义)",
    "example": "This is an example sentence for TOEFLWord995."
  },
  {
    "word": "TOEFLWord996",
    "phonetic": "/toeflˈwɜːrd996/",
    "meaning": "范式 (词汇 996)",
    "root": "root-996 (词根释义)",
    "example": "This is an example sentence for TOEFLWord996."
  },
  {
    "word": "TOEFLWord997",
    "phonetic": "/toeflˈwɜːrd997/",
    "meaning": "地质学 (词汇 997)",
    "root": "root-997 (词根释义)",
    "example": "This is an example sentence for TOEFLWord997."
  },
  {
    "word": "TOEFLWord998",
    "phonetic": "/toeflˈwɜːrd998/",
    "meaning": "心理学 (词汇 998)",
    "root": "root-998 (词根释义)",
    "example": "This is an example sentence for TOEFLWord998."
  },
  {
    "word": "TOEFLWord999",
    "phonetic": "/toeflˈwɜːrd999/",
    "meaning": "认知 (词汇 999)",
    "root": "root-999 (词根释义)",
    "example": "This is an example sentence for TOEFLWord999."
  },
  {
    "word": "TOEFLWord1000",
    "phonetic": "/toeflˈwɜːrd1000/",
    "meaning": "范式 (词汇 1000)",
    "root": "root-1000 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1000."
  },
  {
    "word": "TOEFLWord1001",
    "phonetic": "/toeflˈwɜːrd1001/",
    "meaning": "范式 (词汇 1001)",
    "root": "root-1001 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1001."
  },
  {
    "word": "TOEFLWord1002",
    "phonetic": "/toeflˈwɜːrd1002/",
    "meaning": "机制 (词汇 1002)",
    "root": "root-1002 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1002."
  },
  {
    "word": "TOEFLWord1003",
    "phonetic": "/toeflˈwɜːrd1003/",
    "meaning": "心理学 (词汇 1003)",
    "root": "root-1003 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1003."
  },
  {
    "word": "TOEFLWord1004",
    "phonetic": "/toeflˈwɜːrd1004/",
    "meaning": "实证 (词汇 1004)",
    "root": "root-1004 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1004."
  },
  {
    "word": "TOEFLWord1005",
    "phonetic": "/toeflˈwɜːrd1005/",
    "meaning": "地质学 (词汇 1005)",
    "root": "root-1005 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1005."
  },
  {
    "word": "TOEFLWord1006",
    "phonetic": "/toeflˈwɜːrd1006/",
    "meaning": "实证 (词汇 1006)",
    "root": "root-1006 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1006."
  },
  {
    "word": "TOEFLWord1007",
    "phonetic": "/toeflˈwɜːrd1007/",
    "meaning": "认知 (词汇 1007)",
    "root": "root-1007 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1007."
  },
  {
    "word": "TOEFLWord1008",
    "phonetic": "/toeflˈwɜːrd1008/",
    "meaning": "范式 (词汇 1008)",
    "root": "root-1008 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1008."
  },
  {
    "word": "TOEFLWord1009",
    "phonetic": "/toeflˈwɜːrd1009/",
    "meaning": "范式 (词汇 1009)",
    "root": "root-1009 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1009."
  },
  {
    "word": "TOEFLWord1010",
    "phonetic": "/toeflˈwɜːrd1010/",
    "meaning": "艺术史 (词汇 1010)",
    "root": "root-1010 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1010."
  },
  {
    "word": "TOEFLWord1011",
    "phonetic": "/toeflˈwɜːrd1011/",
    "meaning": "心理学 (词汇 1011)",
    "root": "root-1011 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1011."
  },
  {
    "word": "TOEFLWord1012",
    "phonetic": "/toeflˈwɜːrd1012/",
    "meaning": "天文学 (词汇 1012)",
    "root": "root-1012 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1012."
  },
  {
    "word": "TOEFLWord1013",
    "phonetic": "/toeflˈwɜːrd1013/",
    "meaning": "机制 (词汇 1013)",
    "root": "root-1013 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1013."
  },
  {
    "word": "TOEFLWord1014",
    "phonetic": "/toeflˈwɜːrd1014/",
    "meaning": "机制 (词汇 1014)",
    "root": "root-1014 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1014."
  },
  {
    "word": "TOEFLWord1015",
    "phonetic": "/toeflˈwɜːrd1015/",
    "meaning": "范式 (词汇 1015)",
    "root": "root-1015 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1015."
  },
  {
    "word": "TOEFLWord1016",
    "phonetic": "/toeflˈwɜːrd1016/",
    "meaning": "艺术史 (词汇 1016)",
    "root": "root-1016 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1016."
  },
  {
    "word": "TOEFLWord1017",
    "phonetic": "/toeflˈwɜːrd1017/",
    "meaning": "地质学 (词汇 1017)",
    "root": "root-1017 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1017."
  },
  {
    "word": "TOEFLWord1018",
    "phonetic": "/toeflˈwɜːrd1018/",
    "meaning": "天文学 (词汇 1018)",
    "root": "root-1018 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1018."
  },
  {
    "word": "TOEFLWord1019",
    "phonetic": "/toeflˈwɜːrd1019/",
    "meaning": "心理学 (词汇 1019)",
    "root": "root-1019 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1019."
  },
  {
    "word": "TOEFLWord1020",
    "phonetic": "/toeflˈwɜːrd1020/",
    "meaning": "地质学 (词汇 1020)",
    "root": "root-1020 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1020."
  },
  {
    "word": "TOEFLWord1021",
    "phonetic": "/toeflˈwɜːrd1021/",
    "meaning": "实证 (词汇 1021)",
    "root": "root-1021 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1021."
  },
  {
    "word": "TOEFLWord1022",
    "phonetic": "/toeflˈwɜːrd1022/",
    "meaning": "生物学 (词汇 1022)",
    "root": "root-1022 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1022."
  },
  {
    "word": "TOEFLWord1023",
    "phonetic": "/toeflˈwɜːrd1023/",
    "meaning": "实证 (词汇 1023)",
    "root": "root-1023 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1023."
  },
  {
    "word": "TOEFLWord1024",
    "phonetic": "/toeflˈwɜːrd1024/",
    "meaning": "认知 (词汇 1024)",
    "root": "root-1024 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1024."
  },
  {
    "word": "TOEFLWord1025",
    "phonetic": "/toeflˈwɜːrd1025/",
    "meaning": "假说 (词汇 1025)",
    "root": "root-1025 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1025."
  },
  {
    "word": "TOEFLWord1026",
    "phonetic": "/toeflˈwɜːrd1026/",
    "meaning": "范式 (词汇 1026)",
    "root": "root-1026 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1026."
  },
  {
    "word": "TOEFLWord1027",
    "phonetic": "/toeflˈwɜːrd1027/",
    "meaning": "地质学 (词汇 1027)",
    "root": "root-1027 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1027."
  },
  {
    "word": "TOEFLWord1028",
    "phonetic": "/toeflˈwɜːrd1028/",
    "meaning": "范式 (词汇 1028)",
    "root": "root-1028 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1028."
  },
  {
    "word": "TOEFLWord1029",
    "phonetic": "/toeflˈwɜːrd1029/",
    "meaning": "实证 (词汇 1029)",
    "root": "root-1029 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1029."
  },
  {
    "word": "TOEFLWord1030",
    "phonetic": "/toeflˈwɜːrd1030/",
    "meaning": "假说 (词汇 1030)",
    "root": "root-1030 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1030."
  },
  {
    "word": "TOEFLWord1031",
    "phonetic": "/toeflˈwɜːrd1031/",
    "meaning": "地质学 (词汇 1031)",
    "root": "root-1031 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1031."
  },
  {
    "word": "TOEFLWord1032",
    "phonetic": "/toeflˈwɜːrd1032/",
    "meaning": "地质学 (词汇 1032)",
    "root": "root-1032 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1032."
  },
  {
    "word": "TOEFLWord1033",
    "phonetic": "/toeflˈwɜːrd1033/",
    "meaning": "认知 (词汇 1033)",
    "root": "root-1033 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1033."
  },
  {
    "word": "TOEFLWord1034",
    "phonetic": "/toeflˈwɜːrd1034/",
    "meaning": "心理学 (词汇 1034)",
    "root": "root-1034 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1034."
  },
  {
    "word": "TOEFLWord1035",
    "phonetic": "/toeflˈwɜːrd1035/",
    "meaning": "认知 (词汇 1035)",
    "root": "root-1035 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1035."
  },
  {
    "word": "TOEFLWord1036",
    "phonetic": "/toeflˈwɜːrd1036/",
    "meaning": "范式 (词汇 1036)",
    "root": "root-1036 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1036."
  },
  {
    "word": "TOEFLWord1037",
    "phonetic": "/toeflˈwɜːrd1037/",
    "meaning": "生物学 (词汇 1037)",
    "root": "root-1037 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1037."
  },
  {
    "word": "TOEFLWord1038",
    "phonetic": "/toeflˈwɜːrd1038/",
    "meaning": "假说 (词汇 1038)",
    "root": "root-1038 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1038."
  },
  {
    "word": "TOEFLWord1039",
    "phonetic": "/toeflˈwɜːrd1039/",
    "meaning": "天文学 (词汇 1039)",
    "root": "root-1039 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1039."
  },
  {
    "word": "TOEFLWord1040",
    "phonetic": "/toeflˈwɜːrd1040/",
    "meaning": "假说 (词汇 1040)",
    "root": "root-1040 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1040."
  },
  {
    "word": "TOEFLWord1041",
    "phonetic": "/toeflˈwɜːrd1041/",
    "meaning": "天文学 (词汇 1041)",
    "root": "root-1041 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1041."
  },
  {
    "word": "TOEFLWord1042",
    "phonetic": "/toeflˈwɜːrd1042/",
    "meaning": "天文学 (词汇 1042)",
    "root": "root-1042 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1042."
  },
  {
    "word": "TOEFLWord1043",
    "phonetic": "/toeflˈwɜːrd1043/",
    "meaning": "机制 (词汇 1043)",
    "root": "root-1043 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1043."
  },
  {
    "word": "TOEFLWord1044",
    "phonetic": "/toeflˈwɜːrd1044/",
    "meaning": "地质学 (词汇 1044)",
    "root": "root-1044 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1044."
  },
  {
    "word": "TOEFLWord1045",
    "phonetic": "/toeflˈwɜːrd1045/",
    "meaning": "假说 (词汇 1045)",
    "root": "root-1045 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1045."
  },
  {
    "word": "TOEFLWord1046",
    "phonetic": "/toeflˈwɜːrd1046/",
    "meaning": "生物学 (词汇 1046)",
    "root": "root-1046 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1046."
  },
  {
    "word": "TOEFLWord1047",
    "phonetic": "/toeflˈwɜːrd1047/",
    "meaning": "认知 (词汇 1047)",
    "root": "root-1047 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1047."
  },
  {
    "word": "TOEFLWord1048",
    "phonetic": "/toeflˈwɜːrd1048/",
    "meaning": "机制 (词汇 1048)",
    "root": "root-1048 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1048."
  },
  {
    "word": "TOEFLWord1049",
    "phonetic": "/toeflˈwɜːrd1049/",
    "meaning": "地质学 (词汇 1049)",
    "root": "root-1049 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1049."
  },
  {
    "word": "TOEFLWord1050",
    "phonetic": "/toeflˈwɜːrd1050/",
    "meaning": "生物学 (词汇 1050)",
    "root": "root-1050 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1050."
  },
  {
    "word": "TOEFLWord1051",
    "phonetic": "/toeflˈwɜːrd1051/",
    "meaning": "范式 (词汇 1051)",
    "root": "root-1051 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1051."
  },
  {
    "word": "TOEFLWord1052",
    "phonetic": "/toeflˈwɜːrd1052/",
    "meaning": "范式 (词汇 1052)",
    "root": "root-1052 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1052."
  },
  {
    "word": "TOEFLWord1053",
    "phonetic": "/toeflˈwɜːrd1053/",
    "meaning": "假说 (词汇 1053)",
    "root": "root-1053 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1053."
  },
  {
    "word": "TOEFLWord1054",
    "phonetic": "/toeflˈwɜːrd1054/",
    "meaning": "认知 (词汇 1054)",
    "root": "root-1054 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1054."
  },
  {
    "word": "TOEFLWord1055",
    "phonetic": "/toeflˈwɜːrd1055/",
    "meaning": "天文学 (词汇 1055)",
    "root": "root-1055 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1055."
  },
  {
    "word": "TOEFLWord1056",
    "phonetic": "/toeflˈwɜːrd1056/",
    "meaning": "机制 (词汇 1056)",
    "root": "root-1056 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1056."
  },
  {
    "word": "TOEFLWord1057",
    "phonetic": "/toeflˈwɜːrd1057/",
    "meaning": "假说 (词汇 1057)",
    "root": "root-1057 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1057."
  },
  {
    "word": "TOEFLWord1058",
    "phonetic": "/toeflˈwɜːrd1058/",
    "meaning": "假说 (词汇 1058)",
    "root": "root-1058 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1058."
  },
  {
    "word": "TOEFLWord1059",
    "phonetic": "/toeflˈwɜːrd1059/",
    "meaning": "艺术史 (词汇 1059)",
    "root": "root-1059 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1059."
  },
  {
    "word": "TOEFLWord1060",
    "phonetic": "/toeflˈwɜːrd1060/",
    "meaning": "假说 (词汇 1060)",
    "root": "root-1060 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1060."
  },
  {
    "word": "TOEFLWord1061",
    "phonetic": "/toeflˈwɜːrd1061/",
    "meaning": "范式 (词汇 1061)",
    "root": "root-1061 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1061."
  },
  {
    "word": "TOEFLWord1062",
    "phonetic": "/toeflˈwɜːrd1062/",
    "meaning": "艺术史 (词汇 1062)",
    "root": "root-1062 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1062."
  },
  {
    "word": "TOEFLWord1063",
    "phonetic": "/toeflˈwɜːrd1063/",
    "meaning": "机制 (词汇 1063)",
    "root": "root-1063 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1063."
  },
  {
    "word": "TOEFLWord1064",
    "phonetic": "/toeflˈwɜːrd1064/",
    "meaning": "机制 (词汇 1064)",
    "root": "root-1064 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1064."
  },
  {
    "word": "TOEFLWord1065",
    "phonetic": "/toeflˈwɜːrd1065/",
    "meaning": "心理学 (词汇 1065)",
    "root": "root-1065 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1065."
  },
  {
    "word": "TOEFLWord1066",
    "phonetic": "/toeflˈwɜːrd1066/",
    "meaning": "机制 (词汇 1066)",
    "root": "root-1066 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1066."
  },
  {
    "word": "TOEFLWord1067",
    "phonetic": "/toeflˈwɜːrd1067/",
    "meaning": "天文学 (词汇 1067)",
    "root": "root-1067 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1067."
  },
  {
    "word": "TOEFLWord1068",
    "phonetic": "/toeflˈwɜːrd1068/",
    "meaning": "范式 (词汇 1068)",
    "root": "root-1068 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1068."
  },
  {
    "word": "TOEFLWord1069",
    "phonetic": "/toeflˈwɜːrd1069/",
    "meaning": "地质学 (词汇 1069)",
    "root": "root-1069 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1069."
  },
  {
    "word": "TOEFLWord1070",
    "phonetic": "/toeflˈwɜːrd1070/",
    "meaning": "心理学 (词汇 1070)",
    "root": "root-1070 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1070."
  },
  {
    "word": "TOEFLWord1071",
    "phonetic": "/toeflˈwɜːrd1071/",
    "meaning": "心理学 (词汇 1071)",
    "root": "root-1071 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1071."
  },
  {
    "word": "TOEFLWord1072",
    "phonetic": "/toeflˈwɜːrd1072/",
    "meaning": "假说 (词汇 1072)",
    "root": "root-1072 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1072."
  },
  {
    "word": "TOEFLWord1073",
    "phonetic": "/toeflˈwɜːrd1073/",
    "meaning": "机制 (词汇 1073)",
    "root": "root-1073 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1073."
  },
  {
    "word": "TOEFLWord1074",
    "phonetic": "/toeflˈwɜːrd1074/",
    "meaning": "实证 (词汇 1074)",
    "root": "root-1074 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1074."
  },
  {
    "word": "TOEFLWord1075",
    "phonetic": "/toeflˈwɜːrd1075/",
    "meaning": "假说 (词汇 1075)",
    "root": "root-1075 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1075."
  },
  {
    "word": "TOEFLWord1076",
    "phonetic": "/toeflˈwɜːrd1076/",
    "meaning": "认知 (词汇 1076)",
    "root": "root-1076 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1076."
  },
  {
    "word": "TOEFLWord1077",
    "phonetic": "/toeflˈwɜːrd1077/",
    "meaning": "地质学 (词汇 1077)",
    "root": "root-1077 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1077."
  },
  {
    "word": "TOEFLWord1078",
    "phonetic": "/toeflˈwɜːrd1078/",
    "meaning": "艺术史 (词汇 1078)",
    "root": "root-1078 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1078."
  },
  {
    "word": "TOEFLWord1079",
    "phonetic": "/toeflˈwɜːrd1079/",
    "meaning": "地质学 (词汇 1079)",
    "root": "root-1079 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1079."
  },
  {
    "word": "TOEFLWord1080",
    "phonetic": "/toeflˈwɜːrd1080/",
    "meaning": "心理学 (词汇 1080)",
    "root": "root-1080 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1080."
  },
  {
    "word": "TOEFLWord1081",
    "phonetic": "/toeflˈwɜːrd1081/",
    "meaning": "认知 (词汇 1081)",
    "root": "root-1081 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1081."
  },
  {
    "word": "TOEFLWord1082",
    "phonetic": "/toeflˈwɜːrd1082/",
    "meaning": "心理学 (词汇 1082)",
    "root": "root-1082 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1082."
  },
  {
    "word": "TOEFLWord1083",
    "phonetic": "/toeflˈwɜːrd1083/",
    "meaning": "地质学 (词汇 1083)",
    "root": "root-1083 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1083."
  },
  {
    "word": "TOEFLWord1084",
    "phonetic": "/toeflˈwɜːrd1084/",
    "meaning": "假说 (词汇 1084)",
    "root": "root-1084 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1084."
  },
  {
    "word": "TOEFLWord1085",
    "phonetic": "/toeflˈwɜːrd1085/",
    "meaning": "生物学 (词汇 1085)",
    "root": "root-1085 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1085."
  },
  {
    "word": "TOEFLWord1086",
    "phonetic": "/toeflˈwɜːrd1086/",
    "meaning": "假说 (词汇 1086)",
    "root": "root-1086 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1086."
  },
  {
    "word": "TOEFLWord1087",
    "phonetic": "/toeflˈwɜːrd1087/",
    "meaning": "认知 (词汇 1087)",
    "root": "root-1087 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1087."
  },
  {
    "word": "TOEFLWord1088",
    "phonetic": "/toeflˈwɜːrd1088/",
    "meaning": "天文学 (词汇 1088)",
    "root": "root-1088 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1088."
  },
  {
    "word": "TOEFLWord1089",
    "phonetic": "/toeflˈwɜːrd1089/",
    "meaning": "认知 (词汇 1089)",
    "root": "root-1089 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1089."
  },
  {
    "word": "TOEFLWord1090",
    "phonetic": "/toeflˈwɜːrd1090/",
    "meaning": "认知 (词汇 1090)",
    "root": "root-1090 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1090."
  },
  {
    "word": "TOEFLWord1091",
    "phonetic": "/toeflˈwɜːrd1091/",
    "meaning": "生物学 (词汇 1091)",
    "root": "root-1091 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1091."
  },
  {
    "word": "TOEFLWord1092",
    "phonetic": "/toeflˈwɜːrd1092/",
    "meaning": "生物学 (词汇 1092)",
    "root": "root-1092 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1092."
  },
  {
    "word": "TOEFLWord1093",
    "phonetic": "/toeflˈwɜːrd1093/",
    "meaning": "认知 (词汇 1093)",
    "root": "root-1093 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1093."
  },
  {
    "word": "TOEFLWord1094",
    "phonetic": "/toeflˈwɜːrd1094/",
    "meaning": "实证 (词汇 1094)",
    "root": "root-1094 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1094."
  },
  {
    "word": "TOEFLWord1095",
    "phonetic": "/toeflˈwɜːrd1095/",
    "meaning": "机制 (词汇 1095)",
    "root": "root-1095 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1095."
  },
  {
    "word": "TOEFLWord1096",
    "phonetic": "/toeflˈwɜːrd1096/",
    "meaning": "机制 (词汇 1096)",
    "root": "root-1096 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1096."
  },
  {
    "word": "TOEFLWord1097",
    "phonetic": "/toeflˈwɜːrd1097/",
    "meaning": "认知 (词汇 1097)",
    "root": "root-1097 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1097."
  },
  {
    "word": "TOEFLWord1098",
    "phonetic": "/toeflˈwɜːrd1098/",
    "meaning": "假说 (词汇 1098)",
    "root": "root-1098 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1098."
  },
  {
    "word": "TOEFLWord1099",
    "phonetic": "/toeflˈwɜːrd1099/",
    "meaning": "艺术史 (词汇 1099)",
    "root": "root-1099 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1099."
  },
  {
    "word": "TOEFLWord1100",
    "phonetic": "/toeflˈwɜːrd1100/",
    "meaning": "地质学 (词汇 1100)",
    "root": "root-1100 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1100."
  },
  {
    "word": "TOEFLWord1101",
    "phonetic": "/toeflˈwɜːrd1101/",
    "meaning": "心理学 (词汇 1101)",
    "root": "root-1101 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1101."
  },
  {
    "word": "TOEFLWord1102",
    "phonetic": "/toeflˈwɜːrd1102/",
    "meaning": "假说 (词汇 1102)",
    "root": "root-1102 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1102."
  },
  {
    "word": "TOEFLWord1103",
    "phonetic": "/toeflˈwɜːrd1103/",
    "meaning": "生物学 (词汇 1103)",
    "root": "root-1103 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1103."
  },
  {
    "word": "TOEFLWord1104",
    "phonetic": "/toeflˈwɜːrd1104/",
    "meaning": "范式 (词汇 1104)",
    "root": "root-1104 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1104."
  },
  {
    "word": "TOEFLWord1105",
    "phonetic": "/toeflˈwɜːrd1105/",
    "meaning": "机制 (词汇 1105)",
    "root": "root-1105 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1105."
  },
  {
    "word": "TOEFLWord1106",
    "phonetic": "/toeflˈwɜːrd1106/",
    "meaning": "机制 (词汇 1106)",
    "root": "root-1106 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1106."
  },
  {
    "word": "TOEFLWord1107",
    "phonetic": "/toeflˈwɜːrd1107/",
    "meaning": "生物学 (词汇 1107)",
    "root": "root-1107 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1107."
  },
  {
    "word": "TOEFLWord1108",
    "phonetic": "/toeflˈwɜːrd1108/",
    "meaning": "机制 (词汇 1108)",
    "root": "root-1108 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1108."
  },
  {
    "word": "TOEFLWord1109",
    "phonetic": "/toeflˈwɜːrd1109/",
    "meaning": "生物学 (词汇 1109)",
    "root": "root-1109 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1109."
  },
  {
    "word": "TOEFLWord1110",
    "phonetic": "/toeflˈwɜːrd1110/",
    "meaning": "假说 (词汇 1110)",
    "root": "root-1110 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1110."
  },
  {
    "word": "TOEFLWord1111",
    "phonetic": "/toeflˈwɜːrd1111/",
    "meaning": "认知 (词汇 1111)",
    "root": "root-1111 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1111."
  },
  {
    "word": "TOEFLWord1112",
    "phonetic": "/toeflˈwɜːrd1112/",
    "meaning": "实证 (词汇 1112)",
    "root": "root-1112 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1112."
  },
  {
    "word": "TOEFLWord1113",
    "phonetic": "/toeflˈwɜːrd1113/",
    "meaning": "生物学 (词汇 1113)",
    "root": "root-1113 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1113."
  },
  {
    "word": "TOEFLWord1114",
    "phonetic": "/toeflˈwɜːrd1114/",
    "meaning": "认知 (词汇 1114)",
    "root": "root-1114 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1114."
  },
  {
    "word": "TOEFLWord1115",
    "phonetic": "/toeflˈwɜːrd1115/",
    "meaning": "认知 (词汇 1115)",
    "root": "root-1115 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1115."
  },
  {
    "word": "TOEFLWord1116",
    "phonetic": "/toeflˈwɜːrd1116/",
    "meaning": "心理学 (词汇 1116)",
    "root": "root-1116 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1116."
  },
  {
    "word": "TOEFLWord1117",
    "phonetic": "/toeflˈwɜːrd1117/",
    "meaning": "生物学 (词汇 1117)",
    "root": "root-1117 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1117."
  },
  {
    "word": "TOEFLWord1118",
    "phonetic": "/toeflˈwɜːrd1118/",
    "meaning": "地质学 (词汇 1118)",
    "root": "root-1118 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1118."
  },
  {
    "word": "TOEFLWord1119",
    "phonetic": "/toeflˈwɜːrd1119/",
    "meaning": "生物学 (词汇 1119)",
    "root": "root-1119 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1119."
  },
  {
    "word": "TOEFLWord1120",
    "phonetic": "/toeflˈwɜːrd1120/",
    "meaning": "机制 (词汇 1120)",
    "root": "root-1120 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1120."
  },
  {
    "word": "TOEFLWord1121",
    "phonetic": "/toeflˈwɜːrd1121/",
    "meaning": "实证 (词汇 1121)",
    "root": "root-1121 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1121."
  },
  {
    "word": "TOEFLWord1122",
    "phonetic": "/toeflˈwɜːrd1122/",
    "meaning": "生物学 (词汇 1122)",
    "root": "root-1122 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1122."
  },
  {
    "word": "TOEFLWord1123",
    "phonetic": "/toeflˈwɜːrd1123/",
    "meaning": "地质学 (词汇 1123)",
    "root": "root-1123 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1123."
  },
  {
    "word": "TOEFLWord1124",
    "phonetic": "/toeflˈwɜːrd1124/",
    "meaning": "范式 (词汇 1124)",
    "root": "root-1124 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1124."
  },
  {
    "word": "TOEFLWord1125",
    "phonetic": "/toeflˈwɜːrd1125/",
    "meaning": "地质学 (词汇 1125)",
    "root": "root-1125 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1125."
  },
  {
    "word": "TOEFLWord1126",
    "phonetic": "/toeflˈwɜːrd1126/",
    "meaning": "天文学 (词汇 1126)",
    "root": "root-1126 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1126."
  },
  {
    "word": "TOEFLWord1127",
    "phonetic": "/toeflˈwɜːrd1127/",
    "meaning": "心理学 (词汇 1127)",
    "root": "root-1127 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1127."
  },
  {
    "word": "TOEFLWord1128",
    "phonetic": "/toeflˈwɜːrd1128/",
    "meaning": "生物学 (词汇 1128)",
    "root": "root-1128 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1128."
  },
  {
    "word": "TOEFLWord1129",
    "phonetic": "/toeflˈwɜːrd1129/",
    "meaning": "范式 (词汇 1129)",
    "root": "root-1129 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1129."
  },
  {
    "word": "TOEFLWord1130",
    "phonetic": "/toeflˈwɜːrd1130/",
    "meaning": "假说 (词汇 1130)",
    "root": "root-1130 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1130."
  },
  {
    "word": "TOEFLWord1131",
    "phonetic": "/toeflˈwɜːrd1131/",
    "meaning": "范式 (词汇 1131)",
    "root": "root-1131 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1131."
  },
  {
    "word": "TOEFLWord1132",
    "phonetic": "/toeflˈwɜːrd1132/",
    "meaning": "地质学 (词汇 1132)",
    "root": "root-1132 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1132."
  },
  {
    "word": "TOEFLWord1133",
    "phonetic": "/toeflˈwɜːrd1133/",
    "meaning": "生物学 (词汇 1133)",
    "root": "root-1133 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1133."
  },
  {
    "word": "TOEFLWord1134",
    "phonetic": "/toeflˈwɜːrd1134/",
    "meaning": "实证 (词汇 1134)",
    "root": "root-1134 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1134."
  },
  {
    "word": "TOEFLWord1135",
    "phonetic": "/toeflˈwɜːrd1135/",
    "meaning": "天文学 (词汇 1135)",
    "root": "root-1135 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1135."
  },
  {
    "word": "TOEFLWord1136",
    "phonetic": "/toeflˈwɜːrd1136/",
    "meaning": "认知 (词汇 1136)",
    "root": "root-1136 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1136."
  },
  {
    "word": "TOEFLWord1137",
    "phonetic": "/toeflˈwɜːrd1137/",
    "meaning": "范式 (词汇 1137)",
    "root": "root-1137 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1137."
  },
  {
    "word": "TOEFLWord1138",
    "phonetic": "/toeflˈwɜːrd1138/",
    "meaning": "范式 (词汇 1138)",
    "root": "root-1138 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1138."
  },
  {
    "word": "TOEFLWord1139",
    "phonetic": "/toeflˈwɜːrd1139/",
    "meaning": "假说 (词汇 1139)",
    "root": "root-1139 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1139."
  },
  {
    "word": "TOEFLWord1140",
    "phonetic": "/toeflˈwɜːrd1140/",
    "meaning": "范式 (词汇 1140)",
    "root": "root-1140 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1140."
  },
  {
    "word": "TOEFLWord1141",
    "phonetic": "/toeflˈwɜːrd1141/",
    "meaning": "生物学 (词汇 1141)",
    "root": "root-1141 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1141."
  },
  {
    "word": "TOEFLWord1142",
    "phonetic": "/toeflˈwɜːrd1142/",
    "meaning": "生物学 (词汇 1142)",
    "root": "root-1142 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1142."
  },
  {
    "word": "TOEFLWord1143",
    "phonetic": "/toeflˈwɜːrd1143/",
    "meaning": "假说 (词汇 1143)",
    "root": "root-1143 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1143."
  },
  {
    "word": "TOEFLWord1144",
    "phonetic": "/toeflˈwɜːrd1144/",
    "meaning": "地质学 (词汇 1144)",
    "root": "root-1144 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1144."
  },
  {
    "word": "TOEFLWord1145",
    "phonetic": "/toeflˈwɜːrd1145/",
    "meaning": "认知 (词汇 1145)",
    "root": "root-1145 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1145."
  },
  {
    "word": "TOEFLWord1146",
    "phonetic": "/toeflˈwɜːrd1146/",
    "meaning": "假说 (词汇 1146)",
    "root": "root-1146 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1146."
  },
  {
    "word": "TOEFLWord1147",
    "phonetic": "/toeflˈwɜːrd1147/",
    "meaning": "艺术史 (词汇 1147)",
    "root": "root-1147 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1147."
  },
  {
    "word": "TOEFLWord1148",
    "phonetic": "/toeflˈwɜːrd1148/",
    "meaning": "生物学 (词汇 1148)",
    "root": "root-1148 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1148."
  },
  {
    "word": "TOEFLWord1149",
    "phonetic": "/toeflˈwɜːrd1149/",
    "meaning": "天文学 (词汇 1149)",
    "root": "root-1149 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1149."
  },
  {
    "word": "TOEFLWord1150",
    "phonetic": "/toeflˈwɜːrd1150/",
    "meaning": "天文学 (词汇 1150)",
    "root": "root-1150 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1150."
  },
  {
    "word": "TOEFLWord1151",
    "phonetic": "/toeflˈwɜːrd1151/",
    "meaning": "地质学 (词汇 1151)",
    "root": "root-1151 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1151."
  },
  {
    "word": "TOEFLWord1152",
    "phonetic": "/toeflˈwɜːrd1152/",
    "meaning": "范式 (词汇 1152)",
    "root": "root-1152 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1152."
  },
  {
    "word": "TOEFLWord1153",
    "phonetic": "/toeflˈwɜːrd1153/",
    "meaning": "范式 (词汇 1153)",
    "root": "root-1153 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1153."
  },
  {
    "word": "TOEFLWord1154",
    "phonetic": "/toeflˈwɜːrd1154/",
    "meaning": "假说 (词汇 1154)",
    "root": "root-1154 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1154."
  },
  {
    "word": "TOEFLWord1155",
    "phonetic": "/toeflˈwɜːrd1155/",
    "meaning": "地质学 (词汇 1155)",
    "root": "root-1155 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1155."
  },
  {
    "word": "TOEFLWord1156",
    "phonetic": "/toeflˈwɜːrd1156/",
    "meaning": "假说 (词汇 1156)",
    "root": "root-1156 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1156."
  },
  {
    "word": "TOEFLWord1157",
    "phonetic": "/toeflˈwɜːrd1157/",
    "meaning": "假说 (词汇 1157)",
    "root": "root-1157 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1157."
  },
  {
    "word": "TOEFLWord1158",
    "phonetic": "/toeflˈwɜːrd1158/",
    "meaning": "机制 (词汇 1158)",
    "root": "root-1158 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1158."
  },
  {
    "word": "TOEFLWord1159",
    "phonetic": "/toeflˈwɜːrd1159/",
    "meaning": "艺术史 (词汇 1159)",
    "root": "root-1159 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1159."
  },
  {
    "word": "TOEFLWord1160",
    "phonetic": "/toeflˈwɜːrd1160/",
    "meaning": "天文学 (词汇 1160)",
    "root": "root-1160 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1160."
  },
  {
    "word": "TOEFLWord1161",
    "phonetic": "/toeflˈwɜːrd1161/",
    "meaning": "天文学 (词汇 1161)",
    "root": "root-1161 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1161."
  },
  {
    "word": "TOEFLWord1162",
    "phonetic": "/toeflˈwɜːrd1162/",
    "meaning": "生物学 (词汇 1162)",
    "root": "root-1162 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1162."
  },
  {
    "word": "TOEFLWord1163",
    "phonetic": "/toeflˈwɜːrd1163/",
    "meaning": "艺术史 (词汇 1163)",
    "root": "root-1163 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1163."
  },
  {
    "word": "TOEFLWord1164",
    "phonetic": "/toeflˈwɜːrd1164/",
    "meaning": "生物学 (词汇 1164)",
    "root": "root-1164 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1164."
  },
  {
    "word": "TOEFLWord1165",
    "phonetic": "/toeflˈwɜːrd1165/",
    "meaning": "假说 (词汇 1165)",
    "root": "root-1165 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1165."
  },
  {
    "word": "TOEFLWord1166",
    "phonetic": "/toeflˈwɜːrd1166/",
    "meaning": "范式 (词汇 1166)",
    "root": "root-1166 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1166."
  },
  {
    "word": "TOEFLWord1167",
    "phonetic": "/toeflˈwɜːrd1167/",
    "meaning": "艺术史 (词汇 1167)",
    "root": "root-1167 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1167."
  },
  {
    "word": "TOEFLWord1168",
    "phonetic": "/toeflˈwɜːrd1168/",
    "meaning": "天文学 (词汇 1168)",
    "root": "root-1168 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1168."
  },
  {
    "word": "TOEFLWord1169",
    "phonetic": "/toeflˈwɜːrd1169/",
    "meaning": "范式 (词汇 1169)",
    "root": "root-1169 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1169."
  },
  {
    "word": "TOEFLWord1170",
    "phonetic": "/toeflˈwɜːrd1170/",
    "meaning": "艺术史 (词汇 1170)",
    "root": "root-1170 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1170."
  },
  {
    "word": "TOEFLWord1171",
    "phonetic": "/toeflˈwɜːrd1171/",
    "meaning": "机制 (词汇 1171)",
    "root": "root-1171 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1171."
  },
  {
    "word": "TOEFLWord1172",
    "phonetic": "/toeflˈwɜːrd1172/",
    "meaning": "范式 (词汇 1172)",
    "root": "root-1172 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1172."
  },
  {
    "word": "TOEFLWord1173",
    "phonetic": "/toeflˈwɜːrd1173/",
    "meaning": "机制 (词汇 1173)",
    "root": "root-1173 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1173."
  },
  {
    "word": "TOEFLWord1174",
    "phonetic": "/toeflˈwɜːrd1174/",
    "meaning": "天文学 (词汇 1174)",
    "root": "root-1174 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1174."
  },
  {
    "word": "TOEFLWord1175",
    "phonetic": "/toeflˈwɜːrd1175/",
    "meaning": "范式 (词汇 1175)",
    "root": "root-1175 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1175."
  },
  {
    "word": "TOEFLWord1176",
    "phonetic": "/toeflˈwɜːrd1176/",
    "meaning": "天文学 (词汇 1176)",
    "root": "root-1176 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1176."
  },
  {
    "word": "TOEFLWord1177",
    "phonetic": "/toeflˈwɜːrd1177/",
    "meaning": "假说 (词汇 1177)",
    "root": "root-1177 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1177."
  },
  {
    "word": "TOEFLWord1178",
    "phonetic": "/toeflˈwɜːrd1178/",
    "meaning": "生物学 (词汇 1178)",
    "root": "root-1178 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1178."
  },
  {
    "word": "TOEFLWord1179",
    "phonetic": "/toeflˈwɜːrd1179/",
    "meaning": "假说 (词汇 1179)",
    "root": "root-1179 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1179."
  },
  {
    "word": "TOEFLWord1180",
    "phonetic": "/toeflˈwɜːrd1180/",
    "meaning": "认知 (词汇 1180)",
    "root": "root-1180 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1180."
  },
  {
    "word": "TOEFLWord1181",
    "phonetic": "/toeflˈwɜːrd1181/",
    "meaning": "机制 (词汇 1181)",
    "root": "root-1181 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1181."
  },
  {
    "word": "TOEFLWord1182",
    "phonetic": "/toeflˈwɜːrd1182/",
    "meaning": "天文学 (词汇 1182)",
    "root": "root-1182 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1182."
  },
  {
    "word": "TOEFLWord1183",
    "phonetic": "/toeflˈwɜːrd1183/",
    "meaning": "机制 (词汇 1183)",
    "root": "root-1183 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1183."
  },
  {
    "word": "TOEFLWord1184",
    "phonetic": "/toeflˈwɜːrd1184/",
    "meaning": "认知 (词汇 1184)",
    "root": "root-1184 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1184."
  },
  {
    "word": "TOEFLWord1185",
    "phonetic": "/toeflˈwɜːrd1185/",
    "meaning": "假说 (词汇 1185)",
    "root": "root-1185 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1185."
  },
  {
    "word": "TOEFLWord1186",
    "phonetic": "/toeflˈwɜːrd1186/",
    "meaning": "心理学 (词汇 1186)",
    "root": "root-1186 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1186."
  },
  {
    "word": "TOEFLWord1187",
    "phonetic": "/toeflˈwɜːrd1187/",
    "meaning": "假说 (词汇 1187)",
    "root": "root-1187 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1187."
  },
  {
    "word": "TOEFLWord1188",
    "phonetic": "/toeflˈwɜːrd1188/",
    "meaning": "心理学 (词汇 1188)",
    "root": "root-1188 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1188."
  },
  {
    "word": "TOEFLWord1189",
    "phonetic": "/toeflˈwɜːrd1189/",
    "meaning": "机制 (词汇 1189)",
    "root": "root-1189 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1189."
  },
  {
    "word": "TOEFLWord1190",
    "phonetic": "/toeflˈwɜːrd1190/",
    "meaning": "地质学 (词汇 1190)",
    "root": "root-1190 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1190."
  },
  {
    "word": "TOEFLWord1191",
    "phonetic": "/toeflˈwɜːrd1191/",
    "meaning": "认知 (词汇 1191)",
    "root": "root-1191 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1191."
  },
  {
    "word": "TOEFLWord1192",
    "phonetic": "/toeflˈwɜːrd1192/",
    "meaning": "实证 (词汇 1192)",
    "root": "root-1192 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1192."
  },
  {
    "word": "TOEFLWord1193",
    "phonetic": "/toeflˈwɜːrd1193/",
    "meaning": "心理学 (词汇 1193)",
    "root": "root-1193 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1193."
  },
  {
    "word": "TOEFLWord1194",
    "phonetic": "/toeflˈwɜːrd1194/",
    "meaning": "地质学 (词汇 1194)",
    "root": "root-1194 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1194."
  },
  {
    "word": "TOEFLWord1195",
    "phonetic": "/toeflˈwɜːrd1195/",
    "meaning": "范式 (词汇 1195)",
    "root": "root-1195 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1195."
  },
  {
    "word": "TOEFLWord1196",
    "phonetic": "/toeflˈwɜːrd1196/",
    "meaning": "假说 (词汇 1196)",
    "root": "root-1196 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1196."
  },
  {
    "word": "TOEFLWord1197",
    "phonetic": "/toeflˈwɜːrd1197/",
    "meaning": "范式 (词汇 1197)",
    "root": "root-1197 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1197."
  },
  {
    "word": "TOEFLWord1198",
    "phonetic": "/toeflˈwɜːrd1198/",
    "meaning": "假说 (词汇 1198)",
    "root": "root-1198 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1198."
  },
  {
    "word": "TOEFLWord1199",
    "phonetic": "/toeflˈwɜːrd1199/",
    "meaning": "实证 (词汇 1199)",
    "root": "root-1199 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1199."
  },
  {
    "word": "TOEFLWord1200",
    "phonetic": "/toeflˈwɜːrd1200/",
    "meaning": "机制 (词汇 1200)",
    "root": "root-1200 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1200."
  },
  {
    "word": "TOEFLWord1201",
    "phonetic": "/toeflˈwɜːrd1201/",
    "meaning": "机制 (词汇 1201)",
    "root": "root-1201 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1201."
  },
  {
    "word": "TOEFLWord1202",
    "phonetic": "/toeflˈwɜːrd1202/",
    "meaning": "实证 (词汇 1202)",
    "root": "root-1202 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1202."
  },
  {
    "word": "TOEFLWord1203",
    "phonetic": "/toeflˈwɜːrd1203/",
    "meaning": "范式 (词汇 1203)",
    "root": "root-1203 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1203."
  },
  {
    "word": "TOEFLWord1204",
    "phonetic": "/toeflˈwɜːrd1204/",
    "meaning": "实证 (词汇 1204)",
    "root": "root-1204 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1204."
  },
  {
    "word": "TOEFLWord1205",
    "phonetic": "/toeflˈwɜːrd1205/",
    "meaning": "艺术史 (词汇 1205)",
    "root": "root-1205 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1205."
  },
  {
    "word": "TOEFLWord1206",
    "phonetic": "/toeflˈwɜːrd1206/",
    "meaning": "艺术史 (词汇 1206)",
    "root": "root-1206 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1206."
  },
  {
    "word": "TOEFLWord1207",
    "phonetic": "/toeflˈwɜːrd1207/",
    "meaning": "机制 (词汇 1207)",
    "root": "root-1207 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1207."
  },
  {
    "word": "TOEFLWord1208",
    "phonetic": "/toeflˈwɜːrd1208/",
    "meaning": "心理学 (词汇 1208)",
    "root": "root-1208 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1208."
  },
  {
    "word": "TOEFLWord1209",
    "phonetic": "/toeflˈwɜːrd1209/",
    "meaning": "心理学 (词汇 1209)",
    "root": "root-1209 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1209."
  },
  {
    "word": "TOEFLWord1210",
    "phonetic": "/toeflˈwɜːrd1210/",
    "meaning": "天文学 (词汇 1210)",
    "root": "root-1210 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1210."
  },
  {
    "word": "TOEFLWord1211",
    "phonetic": "/toeflˈwɜːrd1211/",
    "meaning": "假说 (词汇 1211)",
    "root": "root-1211 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1211."
  },
  {
    "word": "TOEFLWord1212",
    "phonetic": "/toeflˈwɜːrd1212/",
    "meaning": "实证 (词汇 1212)",
    "root": "root-1212 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1212."
  },
  {
    "word": "TOEFLWord1213",
    "phonetic": "/toeflˈwɜːrd1213/",
    "meaning": "心理学 (词汇 1213)",
    "root": "root-1213 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1213."
  },
  {
    "word": "TOEFLWord1214",
    "phonetic": "/toeflˈwɜːrd1214/",
    "meaning": "地质学 (词汇 1214)",
    "root": "root-1214 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1214."
  },
  {
    "word": "TOEFLWord1215",
    "phonetic": "/toeflˈwɜːrd1215/",
    "meaning": "地质学 (词汇 1215)",
    "root": "root-1215 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1215."
  },
  {
    "word": "TOEFLWord1216",
    "phonetic": "/toeflˈwɜːrd1216/",
    "meaning": "心理学 (词汇 1216)",
    "root": "root-1216 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1216."
  },
  {
    "word": "TOEFLWord1217",
    "phonetic": "/toeflˈwɜːrd1217/",
    "meaning": "认知 (词汇 1217)",
    "root": "root-1217 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1217."
  },
  {
    "word": "TOEFLWord1218",
    "phonetic": "/toeflˈwɜːrd1218/",
    "meaning": "心理学 (词汇 1218)",
    "root": "root-1218 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1218."
  },
  {
    "word": "TOEFLWord1219",
    "phonetic": "/toeflˈwɜːrd1219/",
    "meaning": "实证 (词汇 1219)",
    "root": "root-1219 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1219."
  },
  {
    "word": "TOEFLWord1220",
    "phonetic": "/toeflˈwɜːrd1220/",
    "meaning": "天文学 (词汇 1220)",
    "root": "root-1220 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1220."
  },
  {
    "word": "TOEFLWord1221",
    "phonetic": "/toeflˈwɜːrd1221/",
    "meaning": "假说 (词汇 1221)",
    "root": "root-1221 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1221."
  },
  {
    "word": "TOEFLWord1222",
    "phonetic": "/toeflˈwɜːrd1222/",
    "meaning": "心理学 (词汇 1222)",
    "root": "root-1222 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1222."
  },
  {
    "word": "TOEFLWord1223",
    "phonetic": "/toeflˈwɜːrd1223/",
    "meaning": "认知 (词汇 1223)",
    "root": "root-1223 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1223."
  },
  {
    "word": "TOEFLWord1224",
    "phonetic": "/toeflˈwɜːrd1224/",
    "meaning": "天文学 (词汇 1224)",
    "root": "root-1224 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1224."
  },
  {
    "word": "TOEFLWord1225",
    "phonetic": "/toeflˈwɜːrd1225/",
    "meaning": "生物学 (词汇 1225)",
    "root": "root-1225 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1225."
  },
  {
    "word": "TOEFLWord1226",
    "phonetic": "/toeflˈwɜːrd1226/",
    "meaning": "天文学 (词汇 1226)",
    "root": "root-1226 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1226."
  },
  {
    "word": "TOEFLWord1227",
    "phonetic": "/toeflˈwɜːrd1227/",
    "meaning": "艺术史 (词汇 1227)",
    "root": "root-1227 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1227."
  },
  {
    "word": "TOEFLWord1228",
    "phonetic": "/toeflˈwɜːrd1228/",
    "meaning": "地质学 (词汇 1228)",
    "root": "root-1228 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1228."
  },
  {
    "word": "TOEFLWord1229",
    "phonetic": "/toeflˈwɜːrd1229/",
    "meaning": "假说 (词汇 1229)",
    "root": "root-1229 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1229."
  },
  {
    "word": "TOEFLWord1230",
    "phonetic": "/toeflˈwɜːrd1230/",
    "meaning": "范式 (词汇 1230)",
    "root": "root-1230 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1230."
  },
  {
    "word": "TOEFLWord1231",
    "phonetic": "/toeflˈwɜːrd1231/",
    "meaning": "生物学 (词汇 1231)",
    "root": "root-1231 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1231."
  },
  {
    "word": "TOEFLWord1232",
    "phonetic": "/toeflˈwɜːrd1232/",
    "meaning": "实证 (词汇 1232)",
    "root": "root-1232 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1232."
  },
  {
    "word": "TOEFLWord1233",
    "phonetic": "/toeflˈwɜːrd1233/",
    "meaning": "范式 (词汇 1233)",
    "root": "root-1233 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1233."
  },
  {
    "word": "TOEFLWord1234",
    "phonetic": "/toeflˈwɜːrd1234/",
    "meaning": "实证 (词汇 1234)",
    "root": "root-1234 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1234."
  },
  {
    "word": "TOEFLWord1235",
    "phonetic": "/toeflˈwɜːrd1235/",
    "meaning": "假说 (词汇 1235)",
    "root": "root-1235 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1235."
  },
  {
    "word": "TOEFLWord1236",
    "phonetic": "/toeflˈwɜːrd1236/",
    "meaning": "心理学 (词汇 1236)",
    "root": "root-1236 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1236."
  },
  {
    "word": "TOEFLWord1237",
    "phonetic": "/toeflˈwɜːrd1237/",
    "meaning": "艺术史 (词汇 1237)",
    "root": "root-1237 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1237."
  },
  {
    "word": "TOEFLWord1238",
    "phonetic": "/toeflˈwɜːrd1238/",
    "meaning": "天文学 (词汇 1238)",
    "root": "root-1238 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1238."
  },
  {
    "word": "TOEFLWord1239",
    "phonetic": "/toeflˈwɜːrd1239/",
    "meaning": "艺术史 (词汇 1239)",
    "root": "root-1239 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1239."
  },
  {
    "word": "TOEFLWord1240",
    "phonetic": "/toeflˈwɜːrd1240/",
    "meaning": "认知 (词汇 1240)",
    "root": "root-1240 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1240."
  },
  {
    "word": "TOEFLWord1241",
    "phonetic": "/toeflˈwɜːrd1241/",
    "meaning": "地质学 (词汇 1241)",
    "root": "root-1241 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1241."
  },
  {
    "word": "TOEFLWord1242",
    "phonetic": "/toeflˈwɜːrd1242/",
    "meaning": "心理学 (词汇 1242)",
    "root": "root-1242 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1242."
  },
  {
    "word": "TOEFLWord1243",
    "phonetic": "/toeflˈwɜːrd1243/",
    "meaning": "认知 (词汇 1243)",
    "root": "root-1243 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1243."
  },
  {
    "word": "TOEFLWord1244",
    "phonetic": "/toeflˈwɜːrd1244/",
    "meaning": "机制 (词汇 1244)",
    "root": "root-1244 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1244."
  },
  {
    "word": "TOEFLWord1245",
    "phonetic": "/toeflˈwɜːrd1245/",
    "meaning": "认知 (词汇 1245)",
    "root": "root-1245 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1245."
  },
  {
    "word": "TOEFLWord1246",
    "phonetic": "/toeflˈwɜːrd1246/",
    "meaning": "艺术史 (词汇 1246)",
    "root": "root-1246 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1246."
  },
  {
    "word": "TOEFLWord1247",
    "phonetic": "/toeflˈwɜːrd1247/",
    "meaning": "机制 (词汇 1247)",
    "root": "root-1247 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1247."
  },
  {
    "word": "TOEFLWord1248",
    "phonetic": "/toeflˈwɜːrd1248/",
    "meaning": "生物学 (词汇 1248)",
    "root": "root-1248 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1248."
  },
  {
    "word": "TOEFLWord1249",
    "phonetic": "/toeflˈwɜːrd1249/",
    "meaning": "天文学 (词汇 1249)",
    "root": "root-1249 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1249."
  },
  {
    "word": "TOEFLWord1250",
    "phonetic": "/toeflˈwɜːrd1250/",
    "meaning": "艺术史 (词汇 1250)",
    "root": "root-1250 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1250."
  },
  {
    "word": "TOEFLWord1251",
    "phonetic": "/toeflˈwɜːrd1251/",
    "meaning": "认知 (词汇 1251)",
    "root": "root-1251 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1251."
  },
  {
    "word": "TOEFLWord1252",
    "phonetic": "/toeflˈwɜːrd1252/",
    "meaning": "机制 (词汇 1252)",
    "root": "root-1252 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1252."
  },
  {
    "word": "TOEFLWord1253",
    "phonetic": "/toeflˈwɜːrd1253/",
    "meaning": "艺术史 (词汇 1253)",
    "root": "root-1253 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1253."
  },
  {
    "word": "TOEFLWord1254",
    "phonetic": "/toeflˈwɜːrd1254/",
    "meaning": "地质学 (词汇 1254)",
    "root": "root-1254 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1254."
  },
  {
    "word": "TOEFLWord1255",
    "phonetic": "/toeflˈwɜːrd1255/",
    "meaning": "艺术史 (词汇 1255)",
    "root": "root-1255 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1255."
  },
  {
    "word": "TOEFLWord1256",
    "phonetic": "/toeflˈwɜːrd1256/",
    "meaning": "生物学 (词汇 1256)",
    "root": "root-1256 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1256."
  },
  {
    "word": "TOEFLWord1257",
    "phonetic": "/toeflˈwɜːrd1257/",
    "meaning": "假说 (词汇 1257)",
    "root": "root-1257 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1257."
  },
  {
    "word": "TOEFLWord1258",
    "phonetic": "/toeflˈwɜːrd1258/",
    "meaning": "实证 (词汇 1258)",
    "root": "root-1258 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1258."
  },
  {
    "word": "TOEFLWord1259",
    "phonetic": "/toeflˈwɜːrd1259/",
    "meaning": "机制 (词汇 1259)",
    "root": "root-1259 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1259."
  },
  {
    "word": "TOEFLWord1260",
    "phonetic": "/toeflˈwɜːrd1260/",
    "meaning": "实证 (词汇 1260)",
    "root": "root-1260 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1260."
  },
  {
    "word": "TOEFLWord1261",
    "phonetic": "/toeflˈwɜːrd1261/",
    "meaning": "认知 (词汇 1261)",
    "root": "root-1261 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1261."
  },
  {
    "word": "TOEFLWord1262",
    "phonetic": "/toeflˈwɜːrd1262/",
    "meaning": "假说 (词汇 1262)",
    "root": "root-1262 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1262."
  },
  {
    "word": "TOEFLWord1263",
    "phonetic": "/toeflˈwɜːrd1263/",
    "meaning": "地质学 (词汇 1263)",
    "root": "root-1263 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1263."
  },
  {
    "word": "TOEFLWord1264",
    "phonetic": "/toeflˈwɜːrd1264/",
    "meaning": "天文学 (词汇 1264)",
    "root": "root-1264 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1264."
  },
  {
    "word": "TOEFLWord1265",
    "phonetic": "/toeflˈwɜːrd1265/",
    "meaning": "生物学 (词汇 1265)",
    "root": "root-1265 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1265."
  },
  {
    "word": "TOEFLWord1266",
    "phonetic": "/toeflˈwɜːrd1266/",
    "meaning": "范式 (词汇 1266)",
    "root": "root-1266 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1266."
  },
  {
    "word": "TOEFLWord1267",
    "phonetic": "/toeflˈwɜːrd1267/",
    "meaning": "机制 (词汇 1267)",
    "root": "root-1267 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1267."
  },
  {
    "word": "TOEFLWord1268",
    "phonetic": "/toeflˈwɜːrd1268/",
    "meaning": "认知 (词汇 1268)",
    "root": "root-1268 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1268."
  },
  {
    "word": "TOEFLWord1269",
    "phonetic": "/toeflˈwɜːrd1269/",
    "meaning": "艺术史 (词汇 1269)",
    "root": "root-1269 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1269."
  },
  {
    "word": "TOEFLWord1270",
    "phonetic": "/toeflˈwɜːrd1270/",
    "meaning": "生物学 (词汇 1270)",
    "root": "root-1270 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1270."
  },
  {
    "word": "TOEFLWord1271",
    "phonetic": "/toeflˈwɜːrd1271/",
    "meaning": "心理学 (词汇 1271)",
    "root": "root-1271 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1271."
  },
  {
    "word": "TOEFLWord1272",
    "phonetic": "/toeflˈwɜːrd1272/",
    "meaning": "实证 (词汇 1272)",
    "root": "root-1272 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1272."
  },
  {
    "word": "TOEFLWord1273",
    "phonetic": "/toeflˈwɜːrd1273/",
    "meaning": "实证 (词汇 1273)",
    "root": "root-1273 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1273."
  },
  {
    "word": "TOEFLWord1274",
    "phonetic": "/toeflˈwɜːrd1274/",
    "meaning": "机制 (词汇 1274)",
    "root": "root-1274 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1274."
  },
  {
    "word": "TOEFLWord1275",
    "phonetic": "/toeflˈwɜːrd1275/",
    "meaning": "生物学 (词汇 1275)",
    "root": "root-1275 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1275."
  },
  {
    "word": "TOEFLWord1276",
    "phonetic": "/toeflˈwɜːrd1276/",
    "meaning": "范式 (词汇 1276)",
    "root": "root-1276 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1276."
  },
  {
    "word": "TOEFLWord1277",
    "phonetic": "/toeflˈwɜːrd1277/",
    "meaning": "天文学 (词汇 1277)",
    "root": "root-1277 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1277."
  },
  {
    "word": "TOEFLWord1278",
    "phonetic": "/toeflˈwɜːrd1278/",
    "meaning": "天文学 (词汇 1278)",
    "root": "root-1278 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1278."
  },
  {
    "word": "TOEFLWord1279",
    "phonetic": "/toeflˈwɜːrd1279/",
    "meaning": "生物学 (词汇 1279)",
    "root": "root-1279 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1279."
  },
  {
    "word": "TOEFLWord1280",
    "phonetic": "/toeflˈwɜːrd1280/",
    "meaning": "假说 (词汇 1280)",
    "root": "root-1280 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1280."
  },
  {
    "word": "TOEFLWord1281",
    "phonetic": "/toeflˈwɜːrd1281/",
    "meaning": "艺术史 (词汇 1281)",
    "root": "root-1281 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1281."
  },
  {
    "word": "TOEFLWord1282",
    "phonetic": "/toeflˈwɜːrd1282/",
    "meaning": "艺术史 (词汇 1282)",
    "root": "root-1282 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1282."
  },
  {
    "word": "TOEFLWord1283",
    "phonetic": "/toeflˈwɜːrd1283/",
    "meaning": "心理学 (词汇 1283)",
    "root": "root-1283 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1283."
  },
  {
    "word": "TOEFLWord1284",
    "phonetic": "/toeflˈwɜːrd1284/",
    "meaning": "心理学 (词汇 1284)",
    "root": "root-1284 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1284."
  },
  {
    "word": "TOEFLWord1285",
    "phonetic": "/toeflˈwɜːrd1285/",
    "meaning": "生物学 (词汇 1285)",
    "root": "root-1285 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1285."
  },
  {
    "word": "TOEFLWord1286",
    "phonetic": "/toeflˈwɜːrd1286/",
    "meaning": "艺术史 (词汇 1286)",
    "root": "root-1286 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1286."
  },
  {
    "word": "TOEFLWord1287",
    "phonetic": "/toeflˈwɜːrd1287/",
    "meaning": "天文学 (词汇 1287)",
    "root": "root-1287 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1287."
  },
  {
    "word": "TOEFLWord1288",
    "phonetic": "/toeflˈwɜːrd1288/",
    "meaning": "假说 (词汇 1288)",
    "root": "root-1288 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1288."
  },
  {
    "word": "TOEFLWord1289",
    "phonetic": "/toeflˈwɜːrd1289/",
    "meaning": "范式 (词汇 1289)",
    "root": "root-1289 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1289."
  },
  {
    "word": "TOEFLWord1290",
    "phonetic": "/toeflˈwɜːrd1290/",
    "meaning": "天文学 (词汇 1290)",
    "root": "root-1290 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1290."
  },
  {
    "word": "TOEFLWord1291",
    "phonetic": "/toeflˈwɜːrd1291/",
    "meaning": "生物学 (词汇 1291)",
    "root": "root-1291 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1291."
  },
  {
    "word": "TOEFLWord1292",
    "phonetic": "/toeflˈwɜːrd1292/",
    "meaning": "心理学 (词汇 1292)",
    "root": "root-1292 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1292."
  },
  {
    "word": "TOEFLWord1293",
    "phonetic": "/toeflˈwɜːrd1293/",
    "meaning": "假说 (词汇 1293)",
    "root": "root-1293 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1293."
  },
  {
    "word": "TOEFLWord1294",
    "phonetic": "/toeflˈwɜːrd1294/",
    "meaning": "生物学 (词汇 1294)",
    "root": "root-1294 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1294."
  },
  {
    "word": "TOEFLWord1295",
    "phonetic": "/toeflˈwɜːrd1295/",
    "meaning": "天文学 (词汇 1295)",
    "root": "root-1295 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1295."
  },
  {
    "word": "TOEFLWord1296",
    "phonetic": "/toeflˈwɜːrd1296/",
    "meaning": "生物学 (词汇 1296)",
    "root": "root-1296 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1296."
  },
  {
    "word": "TOEFLWord1297",
    "phonetic": "/toeflˈwɜːrd1297/",
    "meaning": "心理学 (词汇 1297)",
    "root": "root-1297 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1297."
  },
  {
    "word": "TOEFLWord1298",
    "phonetic": "/toeflˈwɜːrd1298/",
    "meaning": "艺术史 (词汇 1298)",
    "root": "root-1298 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1298."
  },
  {
    "word": "TOEFLWord1299",
    "phonetic": "/toeflˈwɜːrd1299/",
    "meaning": "实证 (词汇 1299)",
    "root": "root-1299 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1299."
  },
  {
    "word": "TOEFLWord1300",
    "phonetic": "/toeflˈwɜːrd1300/",
    "meaning": "天文学 (词汇 1300)",
    "root": "root-1300 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1300."
  },
  {
    "word": "TOEFLWord1301",
    "phonetic": "/toeflˈwɜːrd1301/",
    "meaning": "艺术史 (词汇 1301)",
    "root": "root-1301 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1301."
  },
  {
    "word": "TOEFLWord1302",
    "phonetic": "/toeflˈwɜːrd1302/",
    "meaning": "假说 (词汇 1302)",
    "root": "root-1302 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1302."
  },
  {
    "word": "TOEFLWord1303",
    "phonetic": "/toeflˈwɜːrd1303/",
    "meaning": "艺术史 (词汇 1303)",
    "root": "root-1303 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1303."
  },
  {
    "word": "TOEFLWord1304",
    "phonetic": "/toeflˈwɜːrd1304/",
    "meaning": "地质学 (词汇 1304)",
    "root": "root-1304 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1304."
  },
  {
    "word": "TOEFLWord1305",
    "phonetic": "/toeflˈwɜːrd1305/",
    "meaning": "心理学 (词汇 1305)",
    "root": "root-1305 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1305."
  },
  {
    "word": "TOEFLWord1306",
    "phonetic": "/toeflˈwɜːrd1306/",
    "meaning": "机制 (词汇 1306)",
    "root": "root-1306 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1306."
  },
  {
    "word": "TOEFLWord1307",
    "phonetic": "/toeflˈwɜːrd1307/",
    "meaning": "心理学 (词汇 1307)",
    "root": "root-1307 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1307."
  },
  {
    "word": "TOEFLWord1308",
    "phonetic": "/toeflˈwɜːrd1308/",
    "meaning": "范式 (词汇 1308)",
    "root": "root-1308 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1308."
  },
  {
    "word": "TOEFLWord1309",
    "phonetic": "/toeflˈwɜːrd1309/",
    "meaning": "生物学 (词汇 1309)",
    "root": "root-1309 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1309."
  },
  {
    "word": "TOEFLWord1310",
    "phonetic": "/toeflˈwɜːrd1310/",
    "meaning": "天文学 (词汇 1310)",
    "root": "root-1310 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1310."
  },
  {
    "word": "TOEFLWord1311",
    "phonetic": "/toeflˈwɜːrd1311/",
    "meaning": "实证 (词汇 1311)",
    "root": "root-1311 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1311."
  },
  {
    "word": "TOEFLWord1312",
    "phonetic": "/toeflˈwɜːrd1312/",
    "meaning": "实证 (词汇 1312)",
    "root": "root-1312 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1312."
  },
  {
    "word": "TOEFLWord1313",
    "phonetic": "/toeflˈwɜːrd1313/",
    "meaning": "实证 (词汇 1313)",
    "root": "root-1313 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1313."
  },
  {
    "word": "TOEFLWord1314",
    "phonetic": "/toeflˈwɜːrd1314/",
    "meaning": "认知 (词汇 1314)",
    "root": "root-1314 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1314."
  },
  {
    "word": "TOEFLWord1315",
    "phonetic": "/toeflˈwɜːrd1315/",
    "meaning": "认知 (词汇 1315)",
    "root": "root-1315 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1315."
  },
  {
    "word": "TOEFLWord1316",
    "phonetic": "/toeflˈwɜːrd1316/",
    "meaning": "认知 (词汇 1316)",
    "root": "root-1316 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1316."
  },
  {
    "word": "TOEFLWord1317",
    "phonetic": "/toeflˈwɜːrd1317/",
    "meaning": "地质学 (词汇 1317)",
    "root": "root-1317 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1317."
  },
  {
    "word": "TOEFLWord1318",
    "phonetic": "/toeflˈwɜːrd1318/",
    "meaning": "心理学 (词汇 1318)",
    "root": "root-1318 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1318."
  },
  {
    "word": "TOEFLWord1319",
    "phonetic": "/toeflˈwɜːrd1319/",
    "meaning": "地质学 (词汇 1319)",
    "root": "root-1319 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1319."
  },
  {
    "word": "TOEFLWord1320",
    "phonetic": "/toeflˈwɜːrd1320/",
    "meaning": "实证 (词汇 1320)",
    "root": "root-1320 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1320."
  },
  {
    "word": "TOEFLWord1321",
    "phonetic": "/toeflˈwɜːrd1321/",
    "meaning": "范式 (词汇 1321)",
    "root": "root-1321 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1321."
  },
  {
    "word": "TOEFLWord1322",
    "phonetic": "/toeflˈwɜːrd1322/",
    "meaning": "认知 (词汇 1322)",
    "root": "root-1322 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1322."
  },
  {
    "word": "TOEFLWord1323",
    "phonetic": "/toeflˈwɜːrd1323/",
    "meaning": "假说 (词汇 1323)",
    "root": "root-1323 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1323."
  },
  {
    "word": "TOEFLWord1324",
    "phonetic": "/toeflˈwɜːrd1324/",
    "meaning": "机制 (词汇 1324)",
    "root": "root-1324 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1324."
  },
  {
    "word": "TOEFLWord1325",
    "phonetic": "/toeflˈwɜːrd1325/",
    "meaning": "地质学 (词汇 1325)",
    "root": "root-1325 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1325."
  },
  {
    "word": "TOEFLWord1326",
    "phonetic": "/toeflˈwɜːrd1326/",
    "meaning": "艺术史 (词汇 1326)",
    "root": "root-1326 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1326."
  },
  {
    "word": "TOEFLWord1327",
    "phonetic": "/toeflˈwɜːrd1327/",
    "meaning": "心理学 (词汇 1327)",
    "root": "root-1327 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1327."
  },
  {
    "word": "TOEFLWord1328",
    "phonetic": "/toeflˈwɜːrd1328/",
    "meaning": "实证 (词汇 1328)",
    "root": "root-1328 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1328."
  },
  {
    "word": "TOEFLWord1329",
    "phonetic": "/toeflˈwɜːrd1329/",
    "meaning": "心理学 (词汇 1329)",
    "root": "root-1329 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1329."
  },
  {
    "word": "TOEFLWord1330",
    "phonetic": "/toeflˈwɜːrd1330/",
    "meaning": "生物学 (词汇 1330)",
    "root": "root-1330 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1330."
  },
  {
    "word": "TOEFLWord1331",
    "phonetic": "/toeflˈwɜːrd1331/",
    "meaning": "天文学 (词汇 1331)",
    "root": "root-1331 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1331."
  },
  {
    "word": "TOEFLWord1332",
    "phonetic": "/toeflˈwɜːrd1332/",
    "meaning": "实证 (词汇 1332)",
    "root": "root-1332 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1332."
  },
  {
    "word": "TOEFLWord1333",
    "phonetic": "/toeflˈwɜːrd1333/",
    "meaning": "认知 (词汇 1333)",
    "root": "root-1333 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1333."
  },
  {
    "word": "TOEFLWord1334",
    "phonetic": "/toeflˈwɜːrd1334/",
    "meaning": "天文学 (词汇 1334)",
    "root": "root-1334 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1334."
  },
  {
    "word": "TOEFLWord1335",
    "phonetic": "/toeflˈwɜːrd1335/",
    "meaning": "艺术史 (词汇 1335)",
    "root": "root-1335 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1335."
  },
  {
    "word": "TOEFLWord1336",
    "phonetic": "/toeflˈwɜːrd1336/",
    "meaning": "机制 (词汇 1336)",
    "root": "root-1336 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1336."
  },
  {
    "word": "TOEFLWord1337",
    "phonetic": "/toeflˈwɜːrd1337/",
    "meaning": "生物学 (词汇 1337)",
    "root": "root-1337 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1337."
  },
  {
    "word": "TOEFLWord1338",
    "phonetic": "/toeflˈwɜːrd1338/",
    "meaning": "地质学 (词汇 1338)",
    "root": "root-1338 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1338."
  },
  {
    "word": "TOEFLWord1339",
    "phonetic": "/toeflˈwɜːrd1339/",
    "meaning": "范式 (词汇 1339)",
    "root": "root-1339 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1339."
  },
  {
    "word": "TOEFLWord1340",
    "phonetic": "/toeflˈwɜːrd1340/",
    "meaning": "认知 (词汇 1340)",
    "root": "root-1340 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1340."
  },
  {
    "word": "TOEFLWord1341",
    "phonetic": "/toeflˈwɜːrd1341/",
    "meaning": "心理学 (词汇 1341)",
    "root": "root-1341 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1341."
  },
  {
    "word": "TOEFLWord1342",
    "phonetic": "/toeflˈwɜːrd1342/",
    "meaning": "假说 (词汇 1342)",
    "root": "root-1342 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1342."
  },
  {
    "word": "TOEFLWord1343",
    "phonetic": "/toeflˈwɜːrd1343/",
    "meaning": "生物学 (词汇 1343)",
    "root": "root-1343 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1343."
  },
  {
    "word": "TOEFLWord1344",
    "phonetic": "/toeflˈwɜːrd1344/",
    "meaning": "心理学 (词汇 1344)",
    "root": "root-1344 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1344."
  },
  {
    "word": "TOEFLWord1345",
    "phonetic": "/toeflˈwɜːrd1345/",
    "meaning": "范式 (词汇 1345)",
    "root": "root-1345 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1345."
  },
  {
    "word": "TOEFLWord1346",
    "phonetic": "/toeflˈwɜːrd1346/",
    "meaning": "天文学 (词汇 1346)",
    "root": "root-1346 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1346."
  },
  {
    "word": "TOEFLWord1347",
    "phonetic": "/toeflˈwɜːrd1347/",
    "meaning": "认知 (词汇 1347)",
    "root": "root-1347 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1347."
  },
  {
    "word": "TOEFLWord1348",
    "phonetic": "/toeflˈwɜːrd1348/",
    "meaning": "假说 (词汇 1348)",
    "root": "root-1348 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1348."
  },
  {
    "word": "TOEFLWord1349",
    "phonetic": "/toeflˈwɜːrd1349/",
    "meaning": "认知 (词汇 1349)",
    "root": "root-1349 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1349."
  },
  {
    "word": "TOEFLWord1350",
    "phonetic": "/toeflˈwɜːrd1350/",
    "meaning": "天文学 (词汇 1350)",
    "root": "root-1350 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1350."
  },
  {
    "word": "TOEFLWord1351",
    "phonetic": "/toeflˈwɜːrd1351/",
    "meaning": "地质学 (词汇 1351)",
    "root": "root-1351 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1351."
  },
  {
    "word": "TOEFLWord1352",
    "phonetic": "/toeflˈwɜːrd1352/",
    "meaning": "范式 (词汇 1352)",
    "root": "root-1352 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1352."
  },
  {
    "word": "TOEFLWord1353",
    "phonetic": "/toeflˈwɜːrd1353/",
    "meaning": "认知 (词汇 1353)",
    "root": "root-1353 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1353."
  },
  {
    "word": "TOEFLWord1354",
    "phonetic": "/toeflˈwɜːrd1354/",
    "meaning": "生物学 (词汇 1354)",
    "root": "root-1354 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1354."
  },
  {
    "word": "TOEFLWord1355",
    "phonetic": "/toeflˈwɜːrd1355/",
    "meaning": "地质学 (词汇 1355)",
    "root": "root-1355 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1355."
  },
  {
    "word": "TOEFLWord1356",
    "phonetic": "/toeflˈwɜːrd1356/",
    "meaning": "机制 (词汇 1356)",
    "root": "root-1356 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1356."
  },
  {
    "word": "TOEFLWord1357",
    "phonetic": "/toeflˈwɜːrd1357/",
    "meaning": "假说 (词汇 1357)",
    "root": "root-1357 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1357."
  },
  {
    "word": "TOEFLWord1358",
    "phonetic": "/toeflˈwɜːrd1358/",
    "meaning": "心理学 (词汇 1358)",
    "root": "root-1358 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1358."
  },
  {
    "word": "TOEFLWord1359",
    "phonetic": "/toeflˈwɜːrd1359/",
    "meaning": "天文学 (词汇 1359)",
    "root": "root-1359 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1359."
  },
  {
    "word": "TOEFLWord1360",
    "phonetic": "/toeflˈwɜːrd1360/",
    "meaning": "实证 (词汇 1360)",
    "root": "root-1360 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1360."
  },
  {
    "word": "TOEFLWord1361",
    "phonetic": "/toeflˈwɜːrd1361/",
    "meaning": "认知 (词汇 1361)",
    "root": "root-1361 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1361."
  },
  {
    "word": "TOEFLWord1362",
    "phonetic": "/toeflˈwɜːrd1362/",
    "meaning": "假说 (词汇 1362)",
    "root": "root-1362 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1362."
  },
  {
    "word": "TOEFLWord1363",
    "phonetic": "/toeflˈwɜːrd1363/",
    "meaning": "艺术史 (词汇 1363)",
    "root": "root-1363 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1363."
  },
  {
    "word": "TOEFLWord1364",
    "phonetic": "/toeflˈwɜːrd1364/",
    "meaning": "生物学 (词汇 1364)",
    "root": "root-1364 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1364."
  },
  {
    "word": "TOEFLWord1365",
    "phonetic": "/toeflˈwɜːrd1365/",
    "meaning": "生物学 (词汇 1365)",
    "root": "root-1365 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1365."
  },
  {
    "word": "TOEFLWord1366",
    "phonetic": "/toeflˈwɜːrd1366/",
    "meaning": "地质学 (词汇 1366)",
    "root": "root-1366 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1366."
  },
  {
    "word": "TOEFLWord1367",
    "phonetic": "/toeflˈwɜːrd1367/",
    "meaning": "实证 (词汇 1367)",
    "root": "root-1367 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1367."
  },
  {
    "word": "TOEFLWord1368",
    "phonetic": "/toeflˈwɜːrd1368/",
    "meaning": "生物学 (词汇 1368)",
    "root": "root-1368 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1368."
  },
  {
    "word": "TOEFLWord1369",
    "phonetic": "/toeflˈwɜːrd1369/",
    "meaning": "假说 (词汇 1369)",
    "root": "root-1369 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1369."
  },
  {
    "word": "TOEFLWord1370",
    "phonetic": "/toeflˈwɜːrd1370/",
    "meaning": "认知 (词汇 1370)",
    "root": "root-1370 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1370."
  },
  {
    "word": "TOEFLWord1371",
    "phonetic": "/toeflˈwɜːrd1371/",
    "meaning": "心理学 (词汇 1371)",
    "root": "root-1371 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1371."
  },
  {
    "word": "TOEFLWord1372",
    "phonetic": "/toeflˈwɜːrd1372/",
    "meaning": "地质学 (词汇 1372)",
    "root": "root-1372 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1372."
  },
  {
    "word": "TOEFLWord1373",
    "phonetic": "/toeflˈwɜːrd1373/",
    "meaning": "心理学 (词汇 1373)",
    "root": "root-1373 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1373."
  },
  {
    "word": "TOEFLWord1374",
    "phonetic": "/toeflˈwɜːrd1374/",
    "meaning": "认知 (词汇 1374)",
    "root": "root-1374 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1374."
  },
  {
    "word": "TOEFLWord1375",
    "phonetic": "/toeflˈwɜːrd1375/",
    "meaning": "实证 (词汇 1375)",
    "root": "root-1375 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1375."
  },
  {
    "word": "TOEFLWord1376",
    "phonetic": "/toeflˈwɜːrd1376/",
    "meaning": "实证 (词汇 1376)",
    "root": "root-1376 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1376."
  },
  {
    "word": "TOEFLWord1377",
    "phonetic": "/toeflˈwɜːrd1377/",
    "meaning": "认知 (词汇 1377)",
    "root": "root-1377 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1377."
  },
  {
    "word": "TOEFLWord1378",
    "phonetic": "/toeflˈwɜːrd1378/",
    "meaning": "地质学 (词汇 1378)",
    "root": "root-1378 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1378."
  },
  {
    "word": "TOEFLWord1379",
    "phonetic": "/toeflˈwɜːrd1379/",
    "meaning": "艺术史 (词汇 1379)",
    "root": "root-1379 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1379."
  },
  {
    "word": "TOEFLWord1380",
    "phonetic": "/toeflˈwɜːrd1380/",
    "meaning": "生物学 (词汇 1380)",
    "root": "root-1380 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1380."
  },
  {
    "word": "TOEFLWord1381",
    "phonetic": "/toeflˈwɜːrd1381/",
    "meaning": "地质学 (词汇 1381)",
    "root": "root-1381 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1381."
  },
  {
    "word": "TOEFLWord1382",
    "phonetic": "/toeflˈwɜːrd1382/",
    "meaning": "机制 (词汇 1382)",
    "root": "root-1382 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1382."
  },
  {
    "word": "TOEFLWord1383",
    "phonetic": "/toeflˈwɜːrd1383/",
    "meaning": "生物学 (词汇 1383)",
    "root": "root-1383 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1383."
  },
  {
    "word": "TOEFLWord1384",
    "phonetic": "/toeflˈwɜːrd1384/",
    "meaning": "假说 (词汇 1384)",
    "root": "root-1384 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1384."
  },
  {
    "word": "TOEFLWord1385",
    "phonetic": "/toeflˈwɜːrd1385/",
    "meaning": "范式 (词汇 1385)",
    "root": "root-1385 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1385."
  },
  {
    "word": "TOEFLWord1386",
    "phonetic": "/toeflˈwɜːrd1386/",
    "meaning": "地质学 (词汇 1386)",
    "root": "root-1386 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1386."
  },
  {
    "word": "TOEFLWord1387",
    "phonetic": "/toeflˈwɜːrd1387/",
    "meaning": "地质学 (词汇 1387)",
    "root": "root-1387 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1387."
  },
  {
    "word": "TOEFLWord1388",
    "phonetic": "/toeflˈwɜːrd1388/",
    "meaning": "心理学 (词汇 1388)",
    "root": "root-1388 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1388."
  },
  {
    "word": "TOEFLWord1389",
    "phonetic": "/toeflˈwɜːrd1389/",
    "meaning": "范式 (词汇 1389)",
    "root": "root-1389 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1389."
  },
  {
    "word": "TOEFLWord1390",
    "phonetic": "/toeflˈwɜːrd1390/",
    "meaning": "心理学 (词汇 1390)",
    "root": "root-1390 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1390."
  },
  {
    "word": "TOEFLWord1391",
    "phonetic": "/toeflˈwɜːrd1391/",
    "meaning": "天文学 (词汇 1391)",
    "root": "root-1391 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1391."
  },
  {
    "word": "TOEFLWord1392",
    "phonetic": "/toeflˈwɜːrd1392/",
    "meaning": "假说 (词汇 1392)",
    "root": "root-1392 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1392."
  },
  {
    "word": "TOEFLWord1393",
    "phonetic": "/toeflˈwɜːrd1393/",
    "meaning": "范式 (词汇 1393)",
    "root": "root-1393 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1393."
  },
  {
    "word": "TOEFLWord1394",
    "phonetic": "/toeflˈwɜːrd1394/",
    "meaning": "实证 (词汇 1394)",
    "root": "root-1394 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1394."
  },
  {
    "word": "TOEFLWord1395",
    "phonetic": "/toeflˈwɜːrd1395/",
    "meaning": "生物学 (词汇 1395)",
    "root": "root-1395 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1395."
  },
  {
    "word": "TOEFLWord1396",
    "phonetic": "/toeflˈwɜːrd1396/",
    "meaning": "生物学 (词汇 1396)",
    "root": "root-1396 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1396."
  },
  {
    "word": "TOEFLWord1397",
    "phonetic": "/toeflˈwɜːrd1397/",
    "meaning": "假说 (词汇 1397)",
    "root": "root-1397 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1397."
  },
  {
    "word": "TOEFLWord1398",
    "phonetic": "/toeflˈwɜːrd1398/",
    "meaning": "范式 (词汇 1398)",
    "root": "root-1398 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1398."
  },
  {
    "word": "TOEFLWord1399",
    "phonetic": "/toeflˈwɜːrd1399/",
    "meaning": "艺术史 (词汇 1399)",
    "root": "root-1399 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1399."
  },
  {
    "word": "TOEFLWord1400",
    "phonetic": "/toeflˈwɜːrd1400/",
    "meaning": "范式 (词汇 1400)",
    "root": "root-1400 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1400."
  },
  {
    "word": "TOEFLWord1401",
    "phonetic": "/toeflˈwɜːrd1401/",
    "meaning": "认知 (词汇 1401)",
    "root": "root-1401 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1401."
  },
  {
    "word": "TOEFLWord1402",
    "phonetic": "/toeflˈwɜːrd1402/",
    "meaning": "机制 (词汇 1402)",
    "root": "root-1402 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1402."
  },
  {
    "word": "TOEFLWord1403",
    "phonetic": "/toeflˈwɜːrd1403/",
    "meaning": "假说 (词汇 1403)",
    "root": "root-1403 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1403."
  },
  {
    "word": "TOEFLWord1404",
    "phonetic": "/toeflˈwɜːrd1404/",
    "meaning": "机制 (词汇 1404)",
    "root": "root-1404 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1404."
  },
  {
    "word": "TOEFLWord1405",
    "phonetic": "/toeflˈwɜːrd1405/",
    "meaning": "范式 (词汇 1405)",
    "root": "root-1405 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1405."
  },
  {
    "word": "TOEFLWord1406",
    "phonetic": "/toeflˈwɜːrd1406/",
    "meaning": "心理学 (词汇 1406)",
    "root": "root-1406 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1406."
  },
  {
    "word": "TOEFLWord1407",
    "phonetic": "/toeflˈwɜːrd1407/",
    "meaning": "实证 (词汇 1407)",
    "root": "root-1407 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1407."
  },
  {
    "word": "TOEFLWord1408",
    "phonetic": "/toeflˈwɜːrd1408/",
    "meaning": "艺术史 (词汇 1408)",
    "root": "root-1408 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1408."
  },
  {
    "word": "TOEFLWord1409",
    "phonetic": "/toeflˈwɜːrd1409/",
    "meaning": "天文学 (词汇 1409)",
    "root": "root-1409 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1409."
  },
  {
    "word": "TOEFLWord1410",
    "phonetic": "/toeflˈwɜːrd1410/",
    "meaning": "天文学 (词汇 1410)",
    "root": "root-1410 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1410."
  },
  {
    "word": "TOEFLWord1411",
    "phonetic": "/toeflˈwɜːrd1411/",
    "meaning": "生物学 (词汇 1411)",
    "root": "root-1411 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1411."
  },
  {
    "word": "TOEFLWord1412",
    "phonetic": "/toeflˈwɜːrd1412/",
    "meaning": "假说 (词汇 1412)",
    "root": "root-1412 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1412."
  },
  {
    "word": "TOEFLWord1413",
    "phonetic": "/toeflˈwɜːrd1413/",
    "meaning": "艺术史 (词汇 1413)",
    "root": "root-1413 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1413."
  },
  {
    "word": "TOEFLWord1414",
    "phonetic": "/toeflˈwɜːrd1414/",
    "meaning": "认知 (词汇 1414)",
    "root": "root-1414 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1414."
  },
  {
    "word": "TOEFLWord1415",
    "phonetic": "/toeflˈwɜːrd1415/",
    "meaning": "艺术史 (词汇 1415)",
    "root": "root-1415 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1415."
  },
  {
    "word": "TOEFLWord1416",
    "phonetic": "/toeflˈwɜːrd1416/",
    "meaning": "范式 (词汇 1416)",
    "root": "root-1416 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1416."
  },
  {
    "word": "TOEFLWord1417",
    "phonetic": "/toeflˈwɜːrd1417/",
    "meaning": "机制 (词汇 1417)",
    "root": "root-1417 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1417."
  },
  {
    "word": "TOEFLWord1418",
    "phonetic": "/toeflˈwɜːrd1418/",
    "meaning": "认知 (词汇 1418)",
    "root": "root-1418 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1418."
  },
  {
    "word": "TOEFLWord1419",
    "phonetic": "/toeflˈwɜːrd1419/",
    "meaning": "假说 (词汇 1419)",
    "root": "root-1419 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1419."
  },
  {
    "word": "TOEFLWord1420",
    "phonetic": "/toeflˈwɜːrd1420/",
    "meaning": "生物学 (词汇 1420)",
    "root": "root-1420 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1420."
  },
  {
    "word": "TOEFLWord1421",
    "phonetic": "/toeflˈwɜːrd1421/",
    "meaning": "艺术史 (词汇 1421)",
    "root": "root-1421 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1421."
  },
  {
    "word": "TOEFLWord1422",
    "phonetic": "/toeflˈwɜːrd1422/",
    "meaning": "假说 (词汇 1422)",
    "root": "root-1422 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1422."
  },
  {
    "word": "TOEFLWord1423",
    "phonetic": "/toeflˈwɜːrd1423/",
    "meaning": "范式 (词汇 1423)",
    "root": "root-1423 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1423."
  },
  {
    "word": "TOEFLWord1424",
    "phonetic": "/toeflˈwɜːrd1424/",
    "meaning": "认知 (词汇 1424)",
    "root": "root-1424 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1424."
  },
  {
    "word": "TOEFLWord1425",
    "phonetic": "/toeflˈwɜːrd1425/",
    "meaning": "地质学 (词汇 1425)",
    "root": "root-1425 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1425."
  },
  {
    "word": "TOEFLWord1426",
    "phonetic": "/toeflˈwɜːrd1426/",
    "meaning": "心理学 (词汇 1426)",
    "root": "root-1426 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1426."
  },
  {
    "word": "TOEFLWord1427",
    "phonetic": "/toeflˈwɜːrd1427/",
    "meaning": "机制 (词汇 1427)",
    "root": "root-1427 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1427."
  },
  {
    "word": "TOEFLWord1428",
    "phonetic": "/toeflˈwɜːrd1428/",
    "meaning": "机制 (词汇 1428)",
    "root": "root-1428 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1428."
  },
  {
    "word": "TOEFLWord1429",
    "phonetic": "/toeflˈwɜːrd1429/",
    "meaning": "地质学 (词汇 1429)",
    "root": "root-1429 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1429."
  },
  {
    "word": "TOEFLWord1430",
    "phonetic": "/toeflˈwɜːrd1430/",
    "meaning": "心理学 (词汇 1430)",
    "root": "root-1430 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1430."
  },
  {
    "word": "TOEFLWord1431",
    "phonetic": "/toeflˈwɜːrd1431/",
    "meaning": "范式 (词汇 1431)",
    "root": "root-1431 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1431."
  },
  {
    "word": "TOEFLWord1432",
    "phonetic": "/toeflˈwɜːrd1432/",
    "meaning": "艺术史 (词汇 1432)",
    "root": "root-1432 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1432."
  },
  {
    "word": "TOEFLWord1433",
    "phonetic": "/toeflˈwɜːrd1433/",
    "meaning": "生物学 (词汇 1433)",
    "root": "root-1433 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1433."
  },
  {
    "word": "TOEFLWord1434",
    "phonetic": "/toeflˈwɜːrd1434/",
    "meaning": "心理学 (词汇 1434)",
    "root": "root-1434 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1434."
  },
  {
    "word": "TOEFLWord1435",
    "phonetic": "/toeflˈwɜːrd1435/",
    "meaning": "心理学 (词汇 1435)",
    "root": "root-1435 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1435."
  },
  {
    "word": "TOEFLWord1436",
    "phonetic": "/toeflˈwɜːrd1436/",
    "meaning": "心理学 (词汇 1436)",
    "root": "root-1436 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1436."
  },
  {
    "word": "TOEFLWord1437",
    "phonetic": "/toeflˈwɜːrd1437/",
    "meaning": "假说 (词汇 1437)",
    "root": "root-1437 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1437."
  },
  {
    "word": "TOEFLWord1438",
    "phonetic": "/toeflˈwɜːrd1438/",
    "meaning": "范式 (词汇 1438)",
    "root": "root-1438 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1438."
  },
  {
    "word": "TOEFLWord1439",
    "phonetic": "/toeflˈwɜːrd1439/",
    "meaning": "实证 (词汇 1439)",
    "root": "root-1439 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1439."
  },
  {
    "word": "TOEFLWord1440",
    "phonetic": "/toeflˈwɜːrd1440/",
    "meaning": "心理学 (词汇 1440)",
    "root": "root-1440 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1440."
  },
  {
    "word": "TOEFLWord1441",
    "phonetic": "/toeflˈwɜːrd1441/",
    "meaning": "生物学 (词汇 1441)",
    "root": "root-1441 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1441."
  },
  {
    "word": "TOEFLWord1442",
    "phonetic": "/toeflˈwɜːrd1442/",
    "meaning": "艺术史 (词汇 1442)",
    "root": "root-1442 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1442."
  },
  {
    "word": "TOEFLWord1443",
    "phonetic": "/toeflˈwɜːrd1443/",
    "meaning": "认知 (词汇 1443)",
    "root": "root-1443 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1443."
  },
  {
    "word": "TOEFLWord1444",
    "phonetic": "/toeflˈwɜːrd1444/",
    "meaning": "认知 (词汇 1444)",
    "root": "root-1444 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1444."
  },
  {
    "word": "TOEFLWord1445",
    "phonetic": "/toeflˈwɜːrd1445/",
    "meaning": "范式 (词汇 1445)",
    "root": "root-1445 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1445."
  },
  {
    "word": "TOEFLWord1446",
    "phonetic": "/toeflˈwɜːrd1446/",
    "meaning": "生物学 (词汇 1446)",
    "root": "root-1446 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1446."
  },
  {
    "word": "TOEFLWord1447",
    "phonetic": "/toeflˈwɜːrd1447/",
    "meaning": "范式 (词汇 1447)",
    "root": "root-1447 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1447."
  },
  {
    "word": "TOEFLWord1448",
    "phonetic": "/toeflˈwɜːrd1448/",
    "meaning": "范式 (词汇 1448)",
    "root": "root-1448 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1448."
  },
  {
    "word": "TOEFLWord1449",
    "phonetic": "/toeflˈwɜːrd1449/",
    "meaning": "心理学 (词汇 1449)",
    "root": "root-1449 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1449."
  },
  {
    "word": "TOEFLWord1450",
    "phonetic": "/toeflˈwɜːrd1450/",
    "meaning": "范式 (词汇 1450)",
    "root": "root-1450 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1450."
  },
  {
    "word": "TOEFLWord1451",
    "phonetic": "/toeflˈwɜːrd1451/",
    "meaning": "心理学 (词汇 1451)",
    "root": "root-1451 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1451."
  },
  {
    "word": "TOEFLWord1452",
    "phonetic": "/toeflˈwɜːrd1452/",
    "meaning": "实证 (词汇 1452)",
    "root": "root-1452 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1452."
  },
  {
    "word": "TOEFLWord1453",
    "phonetic": "/toeflˈwɜːrd1453/",
    "meaning": "机制 (词汇 1453)",
    "root": "root-1453 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1453."
  },
  {
    "word": "TOEFLWord1454",
    "phonetic": "/toeflˈwɜːrd1454/",
    "meaning": "艺术史 (词汇 1454)",
    "root": "root-1454 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1454."
  },
  {
    "word": "TOEFLWord1455",
    "phonetic": "/toeflˈwɜːrd1455/",
    "meaning": "认知 (词汇 1455)",
    "root": "root-1455 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1455."
  },
  {
    "word": "TOEFLWord1456",
    "phonetic": "/toeflˈwɜːrd1456/",
    "meaning": "天文学 (词汇 1456)",
    "root": "root-1456 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1456."
  },
  {
    "word": "TOEFLWord1457",
    "phonetic": "/toeflˈwɜːrd1457/",
    "meaning": "生物学 (词汇 1457)",
    "root": "root-1457 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1457."
  },
  {
    "word": "TOEFLWord1458",
    "phonetic": "/toeflˈwɜːrd1458/",
    "meaning": "范式 (词汇 1458)",
    "root": "root-1458 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1458."
  },
  {
    "word": "TOEFLWord1459",
    "phonetic": "/toeflˈwɜːrd1459/",
    "meaning": "心理学 (词汇 1459)",
    "root": "root-1459 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1459."
  },
  {
    "word": "TOEFLWord1460",
    "phonetic": "/toeflˈwɜːrd1460/",
    "meaning": "机制 (词汇 1460)",
    "root": "root-1460 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1460."
  },
  {
    "word": "TOEFLWord1461",
    "phonetic": "/toeflˈwɜːrd1461/",
    "meaning": "生物学 (词汇 1461)",
    "root": "root-1461 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1461."
  },
  {
    "word": "TOEFLWord1462",
    "phonetic": "/toeflˈwɜːrd1462/",
    "meaning": "生物学 (词汇 1462)",
    "root": "root-1462 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1462."
  },
  {
    "word": "TOEFLWord1463",
    "phonetic": "/toeflˈwɜːrd1463/",
    "meaning": "心理学 (词汇 1463)",
    "root": "root-1463 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1463."
  },
  {
    "word": "TOEFLWord1464",
    "phonetic": "/toeflˈwɜːrd1464/",
    "meaning": "天文学 (词汇 1464)",
    "root": "root-1464 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1464."
  },
  {
    "word": "TOEFLWord1465",
    "phonetic": "/toeflˈwɜːrd1465/",
    "meaning": "实证 (词汇 1465)",
    "root": "root-1465 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1465."
  },
  {
    "word": "TOEFLWord1466",
    "phonetic": "/toeflˈwɜːrd1466/",
    "meaning": "生物学 (词汇 1466)",
    "root": "root-1466 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1466."
  },
  {
    "word": "TOEFLWord1467",
    "phonetic": "/toeflˈwɜːrd1467/",
    "meaning": "实证 (词汇 1467)",
    "root": "root-1467 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1467."
  },
  {
    "word": "TOEFLWord1468",
    "phonetic": "/toeflˈwɜːrd1468/",
    "meaning": "实证 (词汇 1468)",
    "root": "root-1468 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1468."
  },
  {
    "word": "TOEFLWord1469",
    "phonetic": "/toeflˈwɜːrd1469/",
    "meaning": "实证 (词汇 1469)",
    "root": "root-1469 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1469."
  },
  {
    "word": "TOEFLWord1470",
    "phonetic": "/toeflˈwɜːrd1470/",
    "meaning": "假说 (词汇 1470)",
    "root": "root-1470 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1470."
  },
  {
    "word": "TOEFLWord1471",
    "phonetic": "/toeflˈwɜːrd1471/",
    "meaning": "心理学 (词汇 1471)",
    "root": "root-1471 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1471."
  },
  {
    "word": "TOEFLWord1472",
    "phonetic": "/toeflˈwɜːrd1472/",
    "meaning": "实证 (词汇 1472)",
    "root": "root-1472 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1472."
  },
  {
    "word": "TOEFLWord1473",
    "phonetic": "/toeflˈwɜːrd1473/",
    "meaning": "认知 (词汇 1473)",
    "root": "root-1473 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1473."
  },
  {
    "word": "TOEFLWord1474",
    "phonetic": "/toeflˈwɜːrd1474/",
    "meaning": "心理学 (词汇 1474)",
    "root": "root-1474 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1474."
  },
  {
    "word": "TOEFLWord1475",
    "phonetic": "/toeflˈwɜːrd1475/",
    "meaning": "机制 (词汇 1475)",
    "root": "root-1475 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1475."
  },
  {
    "word": "TOEFLWord1476",
    "phonetic": "/toeflˈwɜːrd1476/",
    "meaning": "认知 (词汇 1476)",
    "root": "root-1476 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1476."
  },
  {
    "word": "TOEFLWord1477",
    "phonetic": "/toeflˈwɜːrd1477/",
    "meaning": "机制 (词汇 1477)",
    "root": "root-1477 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1477."
  },
  {
    "word": "TOEFLWord1478",
    "phonetic": "/toeflˈwɜːrd1478/",
    "meaning": "艺术史 (词汇 1478)",
    "root": "root-1478 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1478."
  },
  {
    "word": "TOEFLWord1479",
    "phonetic": "/toeflˈwɜːrd1479/",
    "meaning": "艺术史 (词汇 1479)",
    "root": "root-1479 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1479."
  },
  {
    "word": "TOEFLWord1480",
    "phonetic": "/toeflˈwɜːrd1480/",
    "meaning": "心理学 (词汇 1480)",
    "root": "root-1480 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1480."
  },
  {
    "word": "TOEFLWord1481",
    "phonetic": "/toeflˈwɜːrd1481/",
    "meaning": "假说 (词汇 1481)",
    "root": "root-1481 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1481."
  },
  {
    "word": "TOEFLWord1482",
    "phonetic": "/toeflˈwɜːrd1482/",
    "meaning": "地质学 (词汇 1482)",
    "root": "root-1482 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1482."
  },
  {
    "word": "TOEFLWord1483",
    "phonetic": "/toeflˈwɜːrd1483/",
    "meaning": "假说 (词汇 1483)",
    "root": "root-1483 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1483."
  },
  {
    "word": "TOEFLWord1484",
    "phonetic": "/toeflˈwɜːrd1484/",
    "meaning": "生物学 (词汇 1484)",
    "root": "root-1484 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1484."
  },
  {
    "word": "TOEFLWord1485",
    "phonetic": "/toeflˈwɜːrd1485/",
    "meaning": "生物学 (词汇 1485)",
    "root": "root-1485 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1485."
  },
  {
    "word": "TOEFLWord1486",
    "phonetic": "/toeflˈwɜːrd1486/",
    "meaning": "地质学 (词汇 1486)",
    "root": "root-1486 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1486."
  },
  {
    "word": "TOEFLWord1487",
    "phonetic": "/toeflˈwɜːrd1487/",
    "meaning": "认知 (词汇 1487)",
    "root": "root-1487 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1487."
  },
  {
    "word": "TOEFLWord1488",
    "phonetic": "/toeflˈwɜːrd1488/",
    "meaning": "生物学 (词汇 1488)",
    "root": "root-1488 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1488."
  },
  {
    "word": "TOEFLWord1489",
    "phonetic": "/toeflˈwɜːrd1489/",
    "meaning": "认知 (词汇 1489)",
    "root": "root-1489 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1489."
  },
  {
    "word": "TOEFLWord1490",
    "phonetic": "/toeflˈwɜːrd1490/",
    "meaning": "认知 (词汇 1490)",
    "root": "root-1490 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1490."
  },
  {
    "word": "TOEFLWord1491",
    "phonetic": "/toeflˈwɜːrd1491/",
    "meaning": "认知 (词汇 1491)",
    "root": "root-1491 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1491."
  },
  {
    "word": "TOEFLWord1492",
    "phonetic": "/toeflˈwɜːrd1492/",
    "meaning": "天文学 (词汇 1492)",
    "root": "root-1492 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1492."
  },
  {
    "word": "TOEFLWord1493",
    "phonetic": "/toeflˈwɜːrd1493/",
    "meaning": "心理学 (词汇 1493)",
    "root": "root-1493 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1493."
  },
  {
    "word": "TOEFLWord1494",
    "phonetic": "/toeflˈwɜːrd1494/",
    "meaning": "实证 (词汇 1494)",
    "root": "root-1494 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1494."
  },
  {
    "word": "TOEFLWord1495",
    "phonetic": "/toeflˈwɜːrd1495/",
    "meaning": "实证 (词汇 1495)",
    "root": "root-1495 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1495."
  },
  {
    "word": "TOEFLWord1496",
    "phonetic": "/toeflˈwɜːrd1496/",
    "meaning": "生物学 (词汇 1496)",
    "root": "root-1496 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1496."
  },
  {
    "word": "TOEFLWord1497",
    "phonetic": "/toeflˈwɜːrd1497/",
    "meaning": "天文学 (词汇 1497)",
    "root": "root-1497 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1497."
  },
  {
    "word": "TOEFLWord1498",
    "phonetic": "/toeflˈwɜːrd1498/",
    "meaning": "生物学 (词汇 1498)",
    "root": "root-1498 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1498."
  },
  {
    "word": "TOEFLWord1499",
    "phonetic": "/toeflˈwɜːrd1499/",
    "meaning": "艺术史 (词汇 1499)",
    "root": "root-1499 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1499."
  },
  {
    "word": "TOEFLWord1500",
    "phonetic": "/toeflˈwɜːrd1500/",
    "meaning": "实证 (词汇 1500)",
    "root": "root-1500 (词根释义)",
    "example": "This is an example sentence for TOEFLWord1500."
  }
]
};
