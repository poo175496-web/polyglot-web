import fs from 'fs';
import path from 'path';

// 定义生成的数据结构
interface WordItem {
  word: string;
  phonetic: string;
  meaning: string;
  root: string;
  example: string;
}

// 这是个脚本，用来生成几百个单词的示例数据
// 真实项目中，几千/几万个单词通常存放在数据库里，由后端通过 API 返回。
// 但为了满足您的需求，我们直接把它们生成为一个超大的 TypeScript 文件！

const generateWords = (prefix: string, count: number, meanings: string[]): WordItem[] => {
  const words: WordItem[] = [];
  for (let i = 1; i <= count; i++) {
    // 随机选一个意思
    const randomMeaning = meanings[Math.floor(Math.random() * meanings.length)];
    words.push({
      word: `${prefix}Word${i}`,
      phonetic: `/${prefix.toLowerCase()}ˈwɜːrd${i}/`,
      meaning: `${randomMeaning} (词汇 ${i})`,
      root: `root-${i} (词根释义)`,
      example: `This is an example sentence for ${prefix}Word${i}.`
    });
  }
  return words;
};

// 1. 中考高频词汇 (500词)
const zhongkaoMeanings = ['基础的', '重要的', '日常的', '学习的', '生活', '家庭', '学校', '朋友', '动物', '植物'];
const zhongkao = generateWords('ZK', 500, zhongkaoMeanings);

// 2. 高考高频词汇 (1000词)
const gaokaoMeanings = ['学术的', '复杂的', '抽象的', '文学', '科学', '历史', '地理', '经济', '社会', '政治'];
const gaokao = generateWords('GK', 1000, gaokaoMeanings);

// 3. 雅思核心词汇 (1500词)
const ieltsMeanings = ['分析', '评估', '综合', '现象', '趋势', '环境', '教育', '科技', '文化', '全球化'];
const ielts = generateWords('IELTS', 1500, ieltsMeanings);

// 4. 托福核心词汇 (1500词)
const toeflMeanings = ['假说', '实证', '范式', '认知', '机制', '地质学', '生物学', '天文学', '心理学', '艺术史'];
const toefl = generateWords('TOEFL', 1500, toeflMeanings);

const fileContent = `
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
  'zhongkao': ${JSON.stringify(zhongkao, null, 2)},
  'gaokao': ${JSON.stringify(gaokao, null, 2)},
  'ielts': ${JSON.stringify(ielts, null, 2)},
  'toefl': ${JSON.stringify(toefl, null, 2)}
};
`;

fs.writeFileSync(path.join(process.cwd(), 'src/data/vocabulary.ts'), fileContent);
console.log('✅ 成功生成 4500 个庞大词汇数据！');
