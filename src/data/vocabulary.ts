export interface WordItem {
  word: string;
  phonetic: string;
  meaning: string;
  root: string;
  example: string;
  level?: string;
  theme?: string;
}

interface WordSeed {
  word: string;
  meaning: string;
  phonetic?: string;
  root?: string;
  example?: string;
  theme?: string;
}

const courseSeeds = {
  "zhongkao": [
    {
      "word": "abandon",
      "meaning": "v. 放弃"
    },
    {
      "word": "ability",
      "meaning": "n. 能力"
    },
    {
      "word": "absent",
      "meaning": "adj. 缺席的"
    },
    {
      "word": "absorb",
      "meaning": "v. 吸收"
    },
    {
      "word": "accept",
      "meaning": "v. 接受"
    },
    {
      "word": "access",
      "meaning": "n. 进入；通道"
    },
    {
      "word": "accident",
      "meaning": "n. 事故"
    },
    {
      "word": "achieve",
      "meaning": "v. 实现"
    },
    {
      "word": "across",
      "meaning": "prep./adv. 穿过；在对面"
    },
    {
      "word": "act",
      "meaning": "v./n. 行动；表演"
    },
    {
      "word": "active",
      "meaning": "adj. 活跃的"
    },
    {
      "word": "activity",
      "meaning": "n. 活动"
    },
    {
      "word": "adapt",
      "meaning": "v. 适应"
    },
    {
      "word": "address",
      "meaning": "n./v. 地址；处理"
    },
    {
      "word": "admire",
      "meaning": "v. 钦佩"
    },
    {
      "word": "admit",
      "meaning": "v. 承认；准许进入"
    },
    {
      "word": "advance",
      "meaning": "v./n. 进步；前进"
    },
    {
      "word": "advice",
      "meaning": "n. 建议"
    },
    {
      "word": "affect",
      "meaning": "v. 影响"
    },
    {
      "word": "afford",
      "meaning": "v. 负担得起"
    },
    {
      "word": "afraid",
      "meaning": "adj. 害怕的"
    },
    {
      "word": "against",
      "meaning": "prep. 反对；靠着"
    },
    {
      "word": "agreement",
      "meaning": "n. 协议；同意"
    },
    {
      "word": "allow",
      "meaning": "v. 允许"
    },
    {
      "word": "amazing",
      "meaning": "adj. 令人惊叹的"
    },
    {
      "word": "amount",
      "meaning": "n. 数量"
    },
    {
      "word": "ancient",
      "meaning": "adj. 古代的"
    },
    {
      "word": "announce",
      "meaning": "v. 宣布"
    },
    {
      "word": "annoy",
      "meaning": "v. 使恼怒"
    },
    {
      "word": "answer",
      "meaning": "n./v. 回答；答案"
    },
    {
      "word": "apology",
      "meaning": "n. 道歉"
    },
    {
      "word": "appear",
      "meaning": "v. 出现"
    },
    {
      "word": "apply",
      "meaning": "v. 申请；应用"
    },
    {
      "word": "argue",
      "meaning": "v. 争论"
    },
    {
      "word": "arrange",
      "meaning": "v. 安排"
    },
    {
      "word": "arrive",
      "meaning": "v. 到达"
    },
    {
      "word": "article",
      "meaning": "n. 文章；物品"
    },
    {
      "word": "attention",
      "meaning": "n. 注意"
    },
    {
      "word": "attitude",
      "meaning": "n. 态度"
    },
    {
      "word": "attract",
      "meaning": "v. 吸引"
    },
    {
      "word": "audience",
      "meaning": "n. 观众"
    },
    {
      "word": "avoid",
      "meaning": "v. 避免"
    },
    {
      "word": "awake",
      "meaning": "adj. 醒着的"
    },
    {
      "word": "balance",
      "meaning": "n./v. 平衡"
    },
    {
      "word": "basic",
      "meaning": "adj. 基本的"
    },
    {
      "word": "battle",
      "meaning": "n./v. 战斗"
    },
    {
      "word": "behave",
      "meaning": "v. 表现；行为"
    },
    {
      "word": "believe",
      "meaning": "v. 相信"
    },
    {
      "word": "belong",
      "meaning": "v. 属于"
    },
    {
      "word": "bright",
      "meaning": "adj. 明亮的；聪明的"
    },
    {
      "word": "calm",
      "meaning": "adj./v. 平静的"
    },
    {
      "word": "career",
      "meaning": "n. 职业"
    },
    {
      "word": "celebrate",
      "meaning": "v. 庆祝"
    },
    {
      "word": "challenge",
      "meaning": "n./v. 挑战"
    },
    {
      "word": "character",
      "meaning": "n. 性格；角色"
    },
    {
      "word": "choice",
      "meaning": "n. 选择"
    },
    {
      "word": "citizen",
      "meaning": "n. 公民"
    },
    {
      "word": "clearly",
      "meaning": "adv. 清楚地"
    },
    {
      "word": "collect",
      "meaning": "v. 收集"
    },
    {
      "word": "communicate",
      "meaning": "v. 交流"
    }
  ],
  "gaokao": [
    {
      "word": "accommodate",
      "meaning": "v. 容纳；适应"
    },
    {
      "word": "accompany",
      "meaning": "v. 陪伴"
    },
    {
      "word": "accomplish",
      "meaning": "v. 完成"
    },
    {
      "word": "accord",
      "meaning": "v./n. 一致；符合"
    },
    {
      "word": "account",
      "meaning": "n./v. 账户；解释"
    },
    {
      "word": "accumulate",
      "meaning": "v. 积累"
    },
    {
      "word": "accurate",
      "meaning": "adj. 准确的"
    },
    {
      "word": "accuse",
      "meaning": "v. 指控"
    },
    {
      "word": "acknowledge",
      "meaning": "v. 承认"
    },
    {
      "word": "acquire",
      "meaning": "v. 获得"
    },
    {
      "word": "adapt",
      "meaning": "v. 适应"
    },
    {
      "word": "adequate",
      "meaning": "adj. 足够的"
    },
    {
      "word": "adjust",
      "meaning": "v. 调整"
    },
    {
      "word": "administration",
      "meaning": "n. 管理；行政部门"
    },
    {
      "word": "advocate",
      "meaning": "v./n. 提倡；拥护者"
    },
    {
      "word": "ambitious",
      "meaning": "adj. 有抱负的"
    },
    {
      "word": "analysis",
      "meaning": "n. 分析"
    },
    {
      "word": "analyze",
      "meaning": "v. 分析"
    },
    {
      "word": "anticipate",
      "meaning": "v. 预料"
    },
    {
      "word": "apparent",
      "meaning": "adj. 明显的"
    },
    {
      "word": "appreciate",
      "meaning": "v. 欣赏；感激"
    },
    {
      "word": "approach",
      "meaning": "n./v. 方法；接近"
    },
    {
      "word": "appropriate",
      "meaning": "adj. 合适的"
    },
    {
      "word": "architecture",
      "meaning": "n. 建筑学"
    },
    {
      "word": "aspect",
      "meaning": "n. 方面"
    },
    {
      "word": "assess",
      "meaning": "v. 评估"
    },
    {
      "word": "assign",
      "meaning": "v. 分配"
    },
    {
      "word": "assume",
      "meaning": "v. 假设；承担"
    },
    {
      "word": "attain",
      "meaning": "v. 达到"
    },
    {
      "word": "aware",
      "meaning": "adj. 意识到的"
    },
    {
      "word": "benefit",
      "meaning": "n./v. 利益；有益于"
    },
    {
      "word": "circumstance",
      "meaning": "n. 情况"
    },
    {
      "word": "clarify",
      "meaning": "v. 澄清"
    },
    {
      "word": "colleague",
      "meaning": "n. 同事"
    },
    {
      "word": "commit",
      "meaning": "v. 犯下；投入"
    },
    {
      "word": "communicate",
      "meaning": "v. 沟通"
    },
    {
      "word": "community",
      "meaning": "n. 社区"
    },
    {
      "word": "compete",
      "meaning": "v. 竞争"
    },
    {
      "word": "complex",
      "meaning": "adj./n. 复杂的；综合体"
    },
    {
      "word": "conclude",
      "meaning": "v. 总结；得出结论"
    },
    {
      "word": "conduct",
      "meaning": "v./n. 实施；行为"
    },
    {
      "word": "confirm",
      "meaning": "v. 确认"
    },
    {
      "word": "consequence",
      "meaning": "n. 后果"
    },
    {
      "word": "considerable",
      "meaning": "adj. 相当大的"
    },
    {
      "word": "consistent",
      "meaning": "adj. 一致的"
    },
    {
      "word": "construct",
      "meaning": "v. 建造"
    },
    {
      "word": "consume",
      "meaning": "v. 消耗"
    },
    {
      "word": "contrast",
      "meaning": "n./v. 对比"
    },
    {
      "word": "contribute",
      "meaning": "v. 贡献"
    },
    {
      "word": "controversial",
      "meaning": "adj. 有争议的"
    },
    {
      "word": "conventional",
      "meaning": "adj. 传统的"
    },
    {
      "word": "cooperate",
      "meaning": "v. 合作"
    },
    {
      "word": "correspond",
      "meaning": "v. 相符合；通信"
    },
    {
      "word": "critical",
      "meaning": "adj. 批判的；关键的"
    },
    {
      "word": "crucial",
      "meaning": "adj. 至关重要的"
    },
    {
      "word": "culture",
      "meaning": "n. 文化"
    },
    {
      "word": "decade",
      "meaning": "n. 十年"
    },
    {
      "word": "decline",
      "meaning": "v./n. 下降；谢绝"
    },
    {
      "word": "demonstrate",
      "meaning": "v. 证明；展示"
    },
    {
      "word": "despite",
      "meaning": "prep. 尽管"
    }
  ],
  "ielts": [
    {
      "word": "abundant",
      "meaning": "adj. 大量的"
    },
    {
      "word": "access",
      "meaning": "n. 使用机会；进入"
    },
    {
      "word": "accommodate",
      "meaning": "v. 提供住宿；容纳"
    },
    {
      "word": "accompany",
      "meaning": "v. 陪伴；伴随"
    },
    {
      "word": "accurate",
      "meaning": "adj. 准确的"
    },
    {
      "word": "acknowledge",
      "meaning": "v. 承认"
    },
    {
      "word": "acquire",
      "meaning": "v. 获得"
    },
    {
      "word": "adapt",
      "meaning": "v. 适应"
    },
    {
      "word": "adequate",
      "meaning": "adj. 充足的"
    },
    {
      "word": "advocate",
      "meaning": "n./v. 提倡者；主张"
    },
    {
      "word": "aggregate",
      "meaning": "n./adj. 总量的；合计"
    },
    {
      "word": "allocate",
      "meaning": "v. 分配"
    },
    {
      "word": "alter",
      "meaning": "v. 改变"
    },
    {
      "word": "alternative",
      "meaning": "n./adj. 替代方案；可替代的"
    },
    {
      "word": "annual",
      "meaning": "adj. 每年的"
    },
    {
      "word": "apparent",
      "meaning": "adj. 明显的"
    },
    {
      "word": "approximate",
      "meaning": "adj./v. 大约的；接近"
    },
    {
      "word": "aspect",
      "meaning": "n. 方面"
    },
    {
      "word": "assess",
      "meaning": "v. 评估"
    },
    {
      "word": "assign",
      "meaning": "v. 分派"
    },
    {
      "word": "attain",
      "meaning": "v. 达到"
    },
    {
      "word": "attitude",
      "meaning": "n. 态度"
    },
    {
      "word": "coherent",
      "meaning": "adj. 连贯的"
    },
    {
      "word": "coincide",
      "meaning": "v. 同时发生；一致"
    },
    {
      "word": "compile",
      "meaning": "v. 汇编；整理"
    },
    {
      "word": "complementary",
      "meaning": "adj. 互补的"
    },
    {
      "word": "comprehensive",
      "meaning": "adj. 全面的"
    },
    {
      "word": "conceive",
      "meaning": "v. 想象；构想"
    },
    {
      "word": "concurrent",
      "meaning": "adj. 同时发生的"
    },
    {
      "word": "conduct",
      "meaning": "v./n. 进行；行为"
    },
    {
      "word": "confer",
      "meaning": "v. 商讨；授予"
    },
    {
      "word": "consecutive",
      "meaning": "adj. 连续的"
    },
    {
      "word": "considerable",
      "meaning": "adj. 相当多的"
    },
    {
      "word": "constitute",
      "meaning": "v. 构成"
    },
    {
      "word": "constrain",
      "meaning": "v. 限制"
    },
    {
      "word": "consult",
      "meaning": "v. 咨询；查阅"
    },
    {
      "word": "context",
      "meaning": "n. 语境；背景"
    },
    {
      "word": "contract",
      "meaning": "n./v. 合同；收缩"
    },
    {
      "word": "contradict",
      "meaning": "v. 反驳；与…矛盾"
    },
    {
      "word": "convince",
      "meaning": "v. 说服"
    },
    {
      "word": "core",
      "meaning": "n./adj. 核心；核心的"
    },
    {
      "word": "corporate",
      "meaning": "adj. 公司的"
    },
    {
      "word": "criteria",
      "meaning": "n. 标准（复数）"
    },
    {
      "word": "deduce",
      "meaning": "v. 推断"
    },
    {
      "word": "derive",
      "meaning": "v. 得到；源于"
    },
    {
      "word": "distribute",
      "meaning": "v. 分发"
    },
    {
      "word": "diverse",
      "meaning": "adj. 多样的"
    },
    {
      "word": "domestic",
      "meaning": "adj. 国内的；家庭的"
    },
    {
      "word": "dominant",
      "meaning": "adj. 占主导的"
    },
    {
      "word": "empirical",
      "meaning": "adj. 以经验为依据的"
    },
    {
      "word": "enhance",
      "meaning": "v. 提高"
    },
    {
      "word": "ensure",
      "meaning": "v. 确保"
    },
    {
      "word": "entity",
      "meaning": "n. 实体"
    },
    {
      "word": "environment",
      "meaning": "n. 环境"
    },
    {
      "word": "equip",
      "meaning": "v. 装备；使具备"
    },
    {
      "word": "establish",
      "meaning": "v. 建立"
    },
    {
      "word": "evaluate",
      "meaning": "v. 评估"
    },
    {
      "word": "evident",
      "meaning": "adj. 明显的"
    },
    {
      "word": "exclude",
      "meaning": "v. 排除"
    },
    {
      "word": "exhibit",
      "meaning": "v./n. 展示；展品"
    }
  ],
  "toefl": [
    {
      "word": "abstract",
      "meaning": "adj./n. 抽象的；摘要"
    },
    {
      "word": "academy",
      "meaning": "n. 学院"
    },
    {
      "word": "access",
      "meaning": "n. 使用权；通道"
    },
    {
      "word": "accommodate",
      "meaning": "v. 容纳；为…提供空间"
    },
    {
      "word": "accurate",
      "meaning": "adj. 准确的"
    },
    {
      "word": "adjacent",
      "meaning": "adj. 邻近的"
    },
    {
      "word": "adequate",
      "meaning": "adj. 足够的"
    },
    {
      "word": "advocate",
      "meaning": "v./n. 提倡；拥护者"
    },
    {
      "word": "analyze",
      "meaning": "v. 分析"
    },
    {
      "word": "annual",
      "meaning": "adj. 每年的"
    },
    {
      "word": "anonymous",
      "meaning": "adj. 匿名的"
    },
    {
      "word": "anticipate",
      "meaning": "v. 预期"
    },
    {
      "word": "arbitrary",
      "meaning": "adj. 任意的；武断的"
    },
    {
      "word": "assemble",
      "meaning": "v. 集合；组装"
    },
    {
      "word": "attain",
      "meaning": "v. 达到"
    },
    {
      "word": "attribute",
      "meaning": "v./n. 归因于；属性"
    },
    {
      "word": "bias",
      "meaning": "n. 偏见"
    },
    {
      "word": "brief",
      "meaning": "adj./n. 简短的；摘要"
    },
    {
      "word": "capability",
      "meaning": "n. 能力"
    },
    {
      "word": "category",
      "meaning": "n. 类别"
    },
    {
      "word": "cite",
      "meaning": "v. 引用"
    },
    {
      "word": "coherent",
      "meaning": "adj. 连贯的"
    },
    {
      "word": "commodity",
      "meaning": "n. 商品"
    },
    {
      "word": "compensate",
      "meaning": "v. 补偿"
    },
    {
      "word": "complement",
      "meaning": "v./n. 补充"
    },
    {
      "word": "component",
      "meaning": "n. 组成部分"
    },
    {
      "word": "comprehend",
      "meaning": "v. 理解"
    },
    {
      "word": "concentrate",
      "meaning": "v. 集中"
    },
    {
      "word": "concept",
      "meaning": "n. 概念"
    },
    {
      "word": "conclude",
      "meaning": "v. 结束；推断"
    },
    {
      "word": "confirm",
      "meaning": "v. 确认"
    },
    {
      "word": "consent",
      "meaning": "v./n. 同意"
    },
    {
      "word": "consistent",
      "meaning": "adj. 一致的"
    },
    {
      "word": "constitute",
      "meaning": "v. 构成"
    },
    {
      "word": "consume",
      "meaning": "v. 消耗"
    },
    {
      "word": "context",
      "meaning": "n. 背景；语境"
    },
    {
      "word": "contract",
      "meaning": "n./v. 合同；缩小"
    },
    {
      "word": "convert",
      "meaning": "v. 转换"
    },
    {
      "word": "coordinate",
      "meaning": "v. 协调"
    },
    {
      "word": "core",
      "meaning": "n./adj. 核心；核心的"
    },
    {
      "word": "criterion",
      "meaning": "n. 标准"
    },
    {
      "word": "data",
      "meaning": "n. 数据"
    },
    {
      "word": "debate",
      "meaning": "n./v. 辩论"
    },
    {
      "word": "derive",
      "meaning": "v. 推导出"
    },
    {
      "word": "detect",
      "meaning": "v. 发现"
    },
    {
      "word": "deviate",
      "meaning": "v. 偏离"
    },
    {
      "word": "diminish",
      "meaning": "v. 减少"
    },
    {
      "word": "discrete",
      "meaning": "adj. 分离的；不连续的"
    },
    {
      "word": "display",
      "meaning": "v./n. 展示"
    },
    {
      "word": "domain",
      "meaning": "n. 领域"
    },
    {
      "word": "dynamic",
      "meaning": "adj. 动态的；有活力的"
    },
    {
      "word": "economy",
      "meaning": "n. 经济"
    },
    {
      "word": "emerge",
      "meaning": "v. 出现"
    },
    {
      "word": "emphasis",
      "meaning": "n. 强调"
    },
    {
      "word": "enable",
      "meaning": "v. 使能够"
    },
    {
      "word": "encounter",
      "meaning": "v./n. 遭遇"
    },
    {
      "word": "energy",
      "meaning": "n. 能源；精力"
    },
    {
      "word": "establish",
      "meaning": "v. 建立"
    },
    {
      "word": "estimate",
      "meaning": "v./n. 估计"
    },
    {
      "word": "evaluate",
      "meaning": "v. 评估"
    }
  ]
} satisfies Record<string, WordSeed[]>;

const exampleTemplates = [
  (word: string, label: string) => `In today's lesson, "${word}" often appears when people talk about ${label}.`,
  (word: string, label: string) => `Many exam passages use "${word}" in contexts related to ${label}.`,
  (word: string, label: string) => `Try to remember "${word}" whenever you read about ${label}.`,
];

function cleanMeaning(meaning: string) {
  return meaning.replace(/^[a-z./ ]+/i, '').trim();
}

function buildPronunciationHint(word: string) {
  return `/${word}/`;
}

function buildRoot(word: string, meaning: string) {
  return `记忆线索：把 "${word}" 和“${cleanMeaning(meaning)}”这个场景一起联想记忆。`;
}

function buildExample(word: string, meaning: string, index: number) {
  const template = exampleTemplates[index % exampleTemplates.length];
  return template(word, cleanMeaning(meaning));
}

function buildCourseVocabulary(level: string, seeds: WordSeed[]) {
  return seeds.map((seed, index) => ({
    word: seed.word,
    phonetic: seed.phonetic ?? buildPronunciationHint(seed.word),
    meaning: seed.meaning,
    root: seed.root ?? buildRoot(seed.word, seed.meaning),
    example: seed.example ?? buildExample(seed.word, seed.meaning, index),
    level,
    theme: seed.theme ?? '高频考纲词',
  }));
}

export const vocabularyData: Record<string, WordItem[]> = {
  zhongkao: buildCourseVocabulary('中考', courseSeeds.zhongkao),
  gaokao: buildCourseVocabulary('高考', courseSeeds.gaokao),
  ielts: buildCourseVocabulary('IELTS', courseSeeds.ielts),
  toefl: buildCourseVocabulary('TOEFL', courseSeeds.toefl),
};
