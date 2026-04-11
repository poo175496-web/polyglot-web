
export interface WordItem {
  word: string;
  phonetic: string;
  meaning: string;
  root: string;
  example: string;
}

export const vocabularyData: Record<string, WordItem[]> = {
  'zhongkao': [
    { word: 'abandon', phonetic: '/əˈbændən/', meaning: 'v. 放弃，抛弃', root: 'a- (去) + bandon (控制) ➔ 放弃控制 ➔ 抛弃', example: 'They had to abandon the sinking ship.' },
    { word: 'ability', phonetic: '/əˈbɪləti/', meaning: 'n. 能力；才能', root: 'able (有能力的) + -ity (名词后缀) ➔ 能力', example: 'She has the ability to do the job.' },
    { word: 'abnormal', phonetic: '/æbˈnɔːml/', meaning: 'adj. 反常的，变态的', root: 'ab- (偏离) + normal (正常的) ➔ 反常的', example: 'They noticed some abnormal behavior in the animal.' },
    { word: 'aboard', phonetic: '/əˈbɔːd/', meaning: 'adv./prep. 在船(飞机、火车)上', root: 'a- (在) + board (木板) ➔ 在船上', example: 'Welcome aboard flight 123 to New York.' },
    { word: 'abolish', phonetic: '/əˈbɒlɪʃ/', meaning: 'v. 废除，废止', root: 'ab- (离开) + olere (生长) ➔ 停止生长 ➔ 废除', example: 'Some people think that the death penalty should be abolished.' },
    { word: 'abortion', phonetic: '/əˈbɔːʃn/', meaning: 'n. 流产，堕胎', root: 'abort (流产) + -ion (名词后缀)', example: 'She decided to have an abortion.' },
    { word: 'abrupt', phonetic: '/æbˈrʌpt/', meaning: 'adj. 突然的，意外的', root: 'ab- (离去) + rupt (断裂) ➔ 突然断开 ➔ 突然的', example: 'There was an abrupt change in the weather.' },
    { word: 'absence', phonetic: '/ˈæbsəns/', meaning: 'n. 缺席，不在', root: 'ab- (离开) + esse (存在) ➔ 缺席', example: 'He returned after a long absence.' },
    { word: 'absolute', phonetic: '/ˈæbsəluːt/', meaning: 'adj. 绝对的，完全的', root: 'ab- (离开) + solvere (松开) ➔ 完全解脱的 ➔ 绝对的', example: 'I have absolute confidence in her.' },
    { word: 'absorb', phonetic: '/əbˈzɔːb/', meaning: 'v. 吸收，吸引', root: 'ab- (离开) + sorbere (吸入) ➔ 吸收', example: 'Plants absorb carbon dioxide from the air.' },
    { word: 'abstract', phonetic: '/ˈæbstrækt/', meaning: 'adj. 抽象的 n. 摘要', root: 'abs- (离开) + tract (拉) ➔ 抽离出来 ➔ 抽象的', example: 'Truth and beauty are abstract concepts.' },
    { word: 'absurd', phonetic: '/əbˈsɜːd/', meaning: 'adj. 荒谬的，可笑的', root: 'ab- (离开) + surdus (聋的) ➔ 听不进去的 ➔ 荒谬的', example: 'It is absurd to suggest that he is a spy.' },
    { word: 'abundant', phonetic: '/əˈbʌndənt/', meaning: 'adj. 丰富的，充裕的', root: 'ab- (离开) + undare (涌出) ➔ 涌出的 ➔ 丰富的', example: 'We have abundant evidence to prove his guilt.' },
    { word: 'abuse', phonetic: '/əˈbjuːs/', meaning: 'v./n. 滥用，虐待', root: 'ab- (偏离) + use (使用) ➔ 错误使用 ➔ 滥用', example: 'He was arrested for child abuse.' },
    { word: 'academic', phonetic: '/ˌækəˈdemɪk/', meaning: 'adj. 学术的，学院的', root: 'academy (学院) + -ic (形容词后缀)', example: 'She had a brilliant academic career.' },
    { word: 'academy', phonetic: '/əˈkædəmi/', meaning: 'n. 学院，学会', root: '源自希腊语 Akademeia (柏拉图讲学的树林)', example: 'He was elected to the Royal Academy of Arts.' },
    { word: 'accelerate', phonetic: '/əkˈseləreɪt/', meaning: 'v. 加速，促进', root: 'ac- (向) + celer (快的) ➔ 加速', example: 'Inflation continues to accelerate.' },
    { word: 'accent', phonetic: '/ˈæksent/', meaning: 'n. 口音，重音', root: 'ac- (向) + cantus (唱歌) ➔ 发声方式 ➔ 口音', example: 'He speaks English with a strong French accent.' },
    { word: 'accept', phonetic: '/əkˈsept/', meaning: 'v. 接受，承认', root: 'ac- (向) + capere (拿) ➔ 拿过来 ➔ 接受', example: 'I am happy to accept your invitation.' },
    { word: 'access', phonetic: '/ˈækses/', meaning: 'n. 接近，通道 v. 存取', root: 'ac- (向) + cedere (走) ➔ 走近 ➔ 接近', example: 'The only access to the village is by boat.' }
  ],
  'gaokao': [
    { word: 'accommodate', phonetic: '/əˈkɒmədeɪt/', meaning: 'v. 容纳，适应', root: 'ac- (加强) + com- (一起) + modus (方式) ➔ 使适应', example: 'The hotel can accommodate up to 500 guests.' },
    { word: 'accompany', phonetic: '/əˈkɒmpəni/', meaning: 'v. 陪伴，伴随', root: 'ac- (加强) + company (同伴) ➔ 陪伴', example: 'Children under 14 must be accompanied by an adult.' },
    { word: 'accomplish', phonetic: '/əˈkʌmplɪʃ/', meaning: 'v. 完成，实现', root: 'ac- (加强) + complish (完成) ➔ 完成', example: 'We have accomplished a lot today.' },
    { word: 'accord', phonetic: '/əˈkɔːd/', meaning: 'v./n. 一致，符合', root: 'ac- (向) + cord (心) ➔ 心意一致 ➔ 符合', example: 'These results accord closely with our predictions.' },
    { word: 'account', phonetic: '/əˈkɔːd/', meaning: 'n. 账户，账目 v. 解释', root: 'ac- (向) + count (计算) ➔ 账目', example: 'He gave a detailed account of what happened.' },
    { word: 'accumulate', phonetic: '/əkˈjuːmjəleɪt/', meaning: 'v. 积累，积聚', root: 'ac- (加强) + cumulus (堆积) ➔ 积累', example: 'Dust and dirt soon accumulate if a house is not cleaned regularly.' },
    { word: 'accurate', phonetic: '/ˈækjərət/', meaning: 'adj. 准确的，精确的', root: 'ac- (加强) + cura (关心) ➔ 用心做的 ➔ 准确的', example: 'We need accurate information about the cost.' },
    { word: 'accuse', phonetic: '/əˈkjuːz/', meaning: 'v. 指责，控告', root: 'ac- (向) + causa (理由) ➔ 给出理由 ➔ 控告', example: 'She accused him of lying.' },
    { word: 'accustom', phonetic: '/əˈkɒstəm/', meaning: 'v. 使习惯于', root: 'ac- (使) + custom (习惯) ➔ 使习惯', example: 'It took him a while to accustom himself to the new hours.' },
    { word: 'achieve', phonetic: '/əˈkʌmplɪʃ/', meaning: 'v. 达到，完成', root: 'a- (到) + chief (头) ➔ 到达顶端 ➔ 完成', example: 'They have achieved their goal.' }
  ],
  'ielts': [
    { word: 'acknowledge', phonetic: '/əkˈnɒlɪdʒ/', meaning: 'v. 承认，确认', root: 'ac- (加强) + knowledge (知识) ➔ 承认', example: 'She refuses to acknowledge the need for reform.' },
    { word: 'acquaint', phonetic: '/əˈkweɪnt/', meaning: 'v. 使熟悉，使了解', root: 'ac- (加强) + quaint (知道) ➔ 使了解', example: 'You need to acquaint yourself with the new system.' },
    { word: 'acquire', phonetic: '/əˈkwaɪər/', meaning: 'v. 取得，获得', root: 'ac- (加强) + quaerere (寻求) ➔ 寻求得到 ➔ 获得', example: 'He has acquired a reputation for dishonesty.' },
    { word: 'acquisition', phonetic: '/ˌækwɪˈzɪʃn/', meaning: 'n. 获得，收购', root: 'acquire (获得) 的名词形式', example: 'The company has made several recent acquisitions.' },
    { word: 'acre', phonetic: '/ˈeɪkər/', meaning: 'n. 英亩', root: '源自古英语 æcer (田地)', example: 'He owns a 500-acre farm.' },
    { word: 'action', phonetic: '/ˈækʃn/', meaning: 'n. 行动，行为', root: 'act (做) + -ion (名词后缀) ➔ 行动', example: 'Actions speak louder than words.' },
    { word: 'active', phonetic: '/ˈæktɪv/', meaning: 'adj. 活跃的，积极的', root: 'act (做) + -ive (形容词后缀) ➔ 活跃的', example: 'She is very active in local politics.' },
    { word: 'activity', phonetic: '/ækˈtɪvəti/', meaning: 'n. 活动，活力', root: 'active (活跃的) + -ity (名词后缀) ➔ 活动', example: 'The club offers a wide range of activities.' },
    { word: 'actual', phonetic: '/ˈæktʃuəl/', meaning: 'adj. 实际的，真实的', root: 'act (做) + -ual (形容词后缀) ➔ 实际的', example: 'The actual cost was much higher than we expected.' },
    { word: 'acute', phonetic: '/ˈækjuːt/', meaning: 'adj. 敏锐的，急性的', root: 'acus (针) ➔ 像针一样尖的 ➔ 敏锐的', example: 'Dogs have an acute sense of smell.' }
  ],
  'toefl': [
    { word: 'adapt', phonetic: '/əˈdæpt/', meaning: 'v. 适应，改编', root: 'ad- (向) + apt (适合) ➔ 使适合 ➔ 适应', example: 'We have to adapt to the new environment.' },
    { word: 'add', phonetic: '/æd/', meaning: 'v. 增加，添加', root: 'ad- (向) + dare (给) ➔ 给予 ➔ 增加', example: 'If you add 3 and 4 you get 7.' },
    { word: 'addict', phonetic: '/ˈædɪkt/', meaning: 'v. 使沉溺，使上瘾 n. 瘾君子', root: 'ad- (向) + dicere (说) ➔ 宣判归某人所有 ➔ 上瘾', example: 'He is a television addict.' },
    { word: 'addition', phonetic: '/əˈdɪʃn/', meaning: 'n. 增加，加法', root: 'add (增加) + -ition (名词后缀)', example: 'In addition to his salary, he gets a bonus.' },
    { word: 'additional', phonetic: '/əˈdɪʃənl/', meaning: 'adj. 附加的，额外的', root: 'addition (增加) + -al (形容词后缀)', example: 'There will be an additional charge for this service.' },
    { word: 'address', phonetic: '/əˈdres/', meaning: 'n. 地址，演说 v. 对...说话', root: 'ad- (向) + directus (直接) ➔ 直接指向 ➔ 地址', example: 'Please send the letter to my home address.' },
    { word: 'adequate', phonetic: '/ˈædɪkwət/', meaning: 'adj. 充足的，足够的', root: 'ad- (向) + aequus (相等) ➔ 达到要求的 ➔ 充足的', example: 'The room is small but adequate.' },
    { word: 'adhere', phonetic: '/əˈdɪər/', meaning: 'v. 坚持，粘附', root: 'ad- (向) + haerere (粘附) ➔ 粘附', example: 'We must adhere to our principles.' },
    { word: 'adjacent', phonetic: '/əˈdʒeɪsnt/', meaning: 'adj. 邻近的，毗连的', root: 'ad- (向) + jacere (躺) ➔ 躺在旁边的 ➔ 邻近的', example: 'The hotel is adjacent to the beach.' },
    { word: 'adjective', phonetic: '/ˈædʒɪktɪv/', meaning: 'n. 形容词', root: 'ad- (向) + jacere (扔) ➔ 扔向名词的词 ➔ 形容词', example: 'An adjective describes a noun.' }
  ]
};
