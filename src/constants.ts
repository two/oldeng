export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    score: number;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "你对现在的网络流行语（如'想你的风还是吹到了...'）的态度是？",
    options: [
      { text: "紧跟潮流，甚至能自创梗", score: 0 },
      { text: "偶尔用用，觉得挺有意思", score: 5 },
      { text: "看不懂，觉得莫名其妙", score: 10 },
      { text: "不仅看不懂，还想批判一番", score: 15 },
    ],
  },
  {
    id: 2,
    text: "你的周五晚上通常是怎么度过的？",
    options: [
      { text: "夜店、蹦迪、剧本杀，不到凌晨不回家", score: 0 },
      { text: "和朋友聚餐，看场电影", score: 5 },
      { text: "在家刷剧、打游戏，享受独处", score: 10 },
      { text: "早早洗漱，泡脚，10点准时上床睡觉", score: 15 },
    ],
  },
  {
    id: 3,
    text: "看到年轻人穿'奇装异服'（如JK、洛丽塔、汉服）时，你的第一反应是？",
    options: [
      { text: "真好看，我也想试试", score: 0 },
      { text: "挺有个性的，尊重审美", score: 5 },
      { text: "看不懂，但我不说话", score: 10 },
      { text: "这穿的是啥？成何体统！", score: 15 },
    ],
  },
  {
    id: 4,
    text: "你目前的身体状态更接近哪种？",
    options: [
      { text: "精力充沛，熬夜一天第二天照样精神", score: 0 },
      { text: "偶尔感到疲劳，需要周末补觉", score: 5 },
      { text: "腰酸背痛是常态，保温杯里泡枸杞", score: 10 },
      { text: "上个楼梯都喘，随身携带速效救心丸（夸张）", score: 15 },
    ],
  },
  {
    id: 5,
    text: "你对'加班'的看法是？",
    options: [
      { text: "整顿职场，拒绝内卷，到点就走", score: 0 },
      { text: "为了奖金和前途，可以适当加班", score: 5 },
      { text: "老板不走我不走，默默内卷", score: 10 },
      { text: "加班是福报，年轻人就该多吃苦", score: 15 },
    ],
  },
  {
    id: 6,
    text: "你手机里使用频率最高的App是？",
    options: [
      { text: "抖音、小红书、B站", score: 0 },
      { text: "微信、知乎、微博", score: 5 },
      { text: "今日头条、拼多多、百度", score: 10 },
      { text: "看日历、看天气、发短信", score: 15 },
    ],
  },
  {
    id: 7,
    text: "你对'电子游戏'的态度是？",
    options: [
      { text: "资深玩家，各种大作如数家珍", score: 0 },
      { text: "偶尔玩玩手游消遣", score: 5 },
      { text: "觉得那是浪费时间，不如看书", score: 10 },
      { text: "电子海洛因，必须严厉禁止", score: 15 },
    ],
  },
  {
    id: 8,
    text: "你的微信头像通常是？",
    options: [
      { text: "动漫、爱豆、搞怪表情包", score: 0 },
      { text: "自己的艺术照或生活照", score: 5 },
      { text: "风景、花草、书法作品", score: 10 },
      { text: "系统默认头像或模糊的老照片", score: 15 },
    ],
  },
  {
    id: 9,
    text: "你如何看待'AI'（如ChatGPT）？",
    options: [
      { text: "生产力工具，每天都在用", score: 0 },
      { text: "听说过，觉得挺神奇但没怎么用", score: 5 },
      { text: "觉得那是骗人的，还是人脑靠谱", score: 10 },
      { text: "那是魔鬼的产物，会毁灭人类", score: 15 },
    ],
  },
  {
    id: 10,
    text: "在饭桌上，你通常扮演什么角色？",
    options: [
      { text: "负责活跃气氛，讲段子", score: 0 },
      { text: "安静干饭，偶尔附和", score: 5 },
      { text: "负责点菜、倒茶，照顾大家", score: 10 },
      { text: "负责讲大道理，教育年轻人", score: 15 },
    ],
  },
];
