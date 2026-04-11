export interface WordItem {
  word: string;
  phonetic: string;
  meaning: string;
  root: string;
  example: string;
}

export const vocabularyData: Record<string, WordItem[]> = {
  'zhongkao': [
    { word: 'Challenge', phonetic: '/ˈtʃælɪndʒ/', meaning: '挑战；质疑', root: 'calumnia (诬陷) ➔ 引申为向...挑战', example: 'It was a great challenge to climb the mountain.' },
    { word: 'Typical', phonetic: '/ˈtɪpɪkl/', meaning: '典型的；特有的', root: 'type (类型) + -ic (形容词) + -al ➔ 典型的', example: 'It was a typical summer day.' },
    { word: 'Courage', phonetic: '/ˈkʌrɪdʒ/', meaning: '勇气；胆量', root: 'cor (心) + -age (名词后缀) ➔ 有心力 ➔ 勇气', example: 'He showed great courage in the battle.' },
    { word: 'Feature', phonetic: '/ˈfiːtʃər/', meaning: '特征；特色', root: 'facere (做、制造) ➔ 做出来的样子 ➔ 特征', example: 'This phone has many new features.' },
    { word: 'Specific', phonetic: '/spəˈsɪfɪk/', meaning: '具体的；明确的', root: 'species (种类) + -fic (做) ➔ 划分种类的 ➔ 具体的', example: 'Can you be more specific about your plan?' },
    { word: 'Memory', phonetic: '/ˈmeməri/', meaning: '记忆；回忆', root: 'memor (记住的) + -y (名词后缀) ➔ 记忆力', example: 'She has a good memory for names.' },
    { word: 'Method', phonetic: '/ˈmeθəd/', meaning: '方法；条理', root: 'meta- (沿着) + hodos (路) ➔ 沿着特定的路走 ➔ 方法', example: 'We need a new method to solve the problem.' },
    { word: 'Require', phonetic: '/rɪˈkwaɪər/', meaning: '需要；要求', root: 're- (反复) + quaerere (寻求) ➔ 反复寻求 ➔ 要求', example: 'This job requires a lot of patience.' },
    { word: 'Standard', phonetic: '/ˈstændərd/', meaning: '标准；水准', root: 'stand (站立) + -ard (名词后缀) ➔ 站得住脚的标志 ➔ 标准', example: 'Their products are of a high standard.' },
    { word: 'Valuable', phonetic: '/ˈvæljuəbl/', meaning: '有价值的；贵重的', root: 'value (价值) + -able (可...的) ➔ 有价值的', example: 'Time is more valuable than money.' },
  ],
  'gaokao': [
    { word: 'Significant', phonetic: '/sɪɡˈnɪfɪkənt/', meaning: '重大的；显著的', root: 'sign (标记) + -fic (做) + -ant ➔ 值得做标记的 ➔ 重大的', example: 'There has been a significant increase in sales.' },
    { word: 'Available', phonetic: '/əˈveɪləbl/', meaning: '可获得的；有空的', root: 'a- (去) + vail (价值/力量) + -able ➔ 有力量去做的 ➔ 可获得的', example: 'Are you available tomorrow morning?' },
    { word: 'Traditional', phonetic: '/trəˈdɪʃənl/', meaning: '传统的；惯例的', root: 'trans- (穿过) + dare (给) ➔ 传给后代 ➔ 传统的', example: 'We ate a traditional Chinese dinner.' },
    { word: 'Alternative', phonetic: '/ɔːlˈtɜːrnətɪv/', meaning: '可供替代的；备选方案', root: 'alter (其他的) + -native ➔ 其他的选择', example: 'We need to find an alternative to fossil fuels.' },
    { word: 'Environment', phonetic: '/ɪnˈvaɪrənmənt/', meaning: '环境；周围状况', root: 'environ (环绕) + -ment (名词后缀) ➔ 环绕之物 ➔ 环境', example: 'We must protect the natural environment.' },
    { word: 'Potential', phonetic: '/pəˈtenʃl/', meaning: '潜在的；潜能', root: 'potent (有力的) + -ial ➔ 潜在的力量', example: 'The boy has great potential as a musician.' },
    { word: 'Consequence', phonetic: '/ˈkɒnsɪkwəns/', meaning: '结果；后果', root: 'con- (共同) + sequi (跟随) + -ence ➔ 随之而来的事物 ➔ 后果', example: 'He must face the consequence of his actions.' },
    { word: 'Appropriate', phonetic: '/əˈprəʊpriət/', meaning: '适当的；合适的', root: 'ap- (去) + proprius (自己的) ➔ 使变成自己的 ➔ 适合的', example: 'Is this film appropriate for small children?' },
    { word: 'Evaluate', phonetic: '/ɪˈvæljueɪt/', meaning: '评估；评价', root: 'e- (出) + value (价值) + -ate ➔ 估算出价值 ➔ 评估', example: 'We need to evaluate the success of the campaign.' },
    { word: 'Maintain', phonetic: '/meɪnˈteɪn/', meaning: '维持；保养', root: 'manu (手) + tenere (握住) ➔ 用手握住 ➔ 维持', example: 'It is important to maintain a healthy weight.' },
  ],
  'ielts': [
    { word: 'Comprehensive', phonetic: '/ˌkɒmprɪˈhensɪv/', meaning: '综合的；广泛的', root: 'com- (一起) + prehendere (抓住) + -sive ➔ 把所有都抓住 ➔ 综合的', example: 'We offer a comprehensive training program.' },
    { word: 'Fundamental', phonetic: '/ˌfʌndəˈmentl/', meaning: '基础的；根本的', root: 'fundus (底部) + -ment + -al ➔ 底部的 ➔ 基础的', example: 'Hard work is fundamental to success.' },
    { word: 'Implement', phonetic: '/ˈɪmplɪment/', meaning: '实施；执行', root: 'im- (进入) + plere (填满) ➔ 使填满 ➔ 落实', example: 'The government promised to implement the new policy.' },
    { word: 'Perspective', phonetic: '/pəˈspektɪv/', meaning: '视角；观点', root: 'per- (穿透) + specere (看) + -tive ➔ 看透事物的角度 ➔ 视角', example: 'Try to see the issue from a different perspective.' },
    { word: 'Adequate', phonetic: '/ˈædɪkwət/', meaning: '充足的；胜任的', root: 'ad- (向) + aequus (相等的) ➔ 达到相等要求的 ➔ 充足的', example: 'Make sure you have adequate water for the trip.' },
    { word: 'Hypothesis', phonetic: '/haɪˈpɒθəsɪs/', meaning: '假设；假说', root: 'hypo- (在...下面) + thesis (放置) ➔ 放在底下的基础 ➔ 假设', example: 'The results of the experiment support his hypothesis.' },
    { word: 'Dimension', phonetic: '/daɪˈmenʃn/', meaning: '维度；方面', root: 'di- (分开) + metiri (测量) ➔ 测量的各个方向 ➔ 维度', example: 'There is another dimension to this problem.' },
    { word: 'Parameter', phonetic: '/pəˈræmɪtər/', meaning: '参数；限制因素', root: 'para- (旁边) + metron (测量) ➔ 在旁边测量的基准 ➔ 参数', example: 'We must work within the parameters of the law.' },
    { word: 'Integrate', phonetic: '/ˈɪntɪɡreɪt/', meaning: '整合；融入', root: 'integer (完整的) + -ate ➔ 使完整 ➔ 整合', example: 'The new system will integrate with the old one.' },
    { word: 'Mechanism', phonetic: '/ˈmekənɪzəm/', meaning: '机制；机械装置', root: 'mechane (机器) + -ism (系统) ➔ 机械运作系统 ➔ 机制', example: 'The mechanism of the clock is broken.' },
  ],
  'toefl': [
    { word: 'Ubiquitous', phonetic: '/juːˈbɪkwɪtəs/', meaning: '无所不在的；普遍存在的', root: 'ubique (到处) + -ous ➔ 存在于各处的', example: 'Smartphones have become ubiquitous in modern society.' },
    { word: 'Paradigm', phonetic: '/ˈpærədaɪm/', meaning: '范例；模式', root: 'para- (在旁边) + deiknunai (展示) ➔ 摆在旁边展示的 ➔ 范例', example: 'The war shattered their paradigm of the world.' },
    { word: 'Empirical', phonetic: '/ɪmˈpɪrɪkl/', meaning: '经验主义的；基于实证的', root: 'em- (在...里) + peira (尝试/经验) + -ical ➔ 基于经验的', example: 'There is no empirical evidence to support his theory.' },
    { word: 'Anomaly', phonetic: '/əˈnɒməli/', meaning: '异常；反常事物', root: 'an- (不) + homalos (相同的) + -y ➔ 和一般不同的 ➔ 异常', example: 'The unusually cold weather in July is an anomaly.' },
    { word: 'Cognitive', phonetic: '/ˈkɒɡnətɪv/', meaning: '认知的；认识的', root: 'co- (一起) + gnoscere (知道) + -tive ➔ 关乎知道的 ➔ 认知的', example: 'As children grow older, their cognitive abilities develop.' },
    { word: 'Esoteric', phonetic: '/ˌesəˈterɪk/', meaning: '深奥的；只有内行才懂的', root: 'esotero (更内部的) + -ic ➔ 内部人圈子里的 ➔ 深奥的', example: 'He loves reading esoteric books on philosophy.' },
    { word: 'Meticulous', phonetic: '/mɪˈtɪkjələs/', meaning: '一丝不苟的；极其仔细的', root: 'metus (恐惧) ➔ 因害怕出错而极度小心 ➔ 一丝不苟的', example: 'He is very meticulous about his work.' },
    { word: 'Ephemeral', phonetic: '/ɪˈfemərəl/', meaning: '短暂的；朝生暮死的', root: 'epi- (在...上) + hemera (天) + -al ➔ 只能存在一天的 ➔ 短暂的', example: 'Fame in the world of pop music is often ephemeral.' },
    { word: 'Pragmatic', phonetic: '/præɡˈmætɪk/', meaning: '务实的；实用的', root: 'pragma (事实/行为) + -tic ➔ 注重实际行为的 ➔ 务实的', example: 'We need a more pragmatic approach to the problem.' },
    { word: 'Cacophony', phonetic: '/kəˈkɒfəni/', meaning: '刺耳的嘈杂声', root: 'kakos (坏的) + phone (声音) + -y ➔ 坏声音 ➔ 刺耳声', example: 'As we entered the factory, we were met by a cacophony of machines.' },
  ]
};
