import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getOldengDefinition() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "请搜索并解释中国互联网流行语'老登'、'小登'、'中登'的含义，并根据这些定义设计10道性格测试题，用来测试一个人在心态、生活习惯、网络冲浪水平等方面更接近哪种状态。每道题给出4个选项，分别对应不同程度的'老登'属性。最后给出一个评分标准（0-100分）。",
    config: {
      tools: [{ googleSearch: {} }],
    },
  });

  return response.text;
}
