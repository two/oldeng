/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  RotateCcw, 
  Trophy, 
  User, 
  AlertCircle,
  Coffee,
  Zap,
  ShieldCheck,
  Flame,
  Gamepad2,
  Smartphone,
  Music,
  Moon,
  Sun
} from 'lucide-react';
import { questions, Question } from './constants';

type ResultType = 'xiao' | 'zhong' | 'lao' | 'super-lao';

export default function App() {
  const [step, setStep] = useState<'start' | 'quiz' | 'result'>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [resultType, setResultType] = useState<ResultType>('zhong');

  const handleStart = () => {
    // Shuffle questions and their options
    const shuffled = [...questions].map(q => ({
      ...q,
      options: [...q.options].sort(() => Math.random() - 0.5)
    })).sort(() => Math.random() - 0.5);
    
    setShuffledQuestions(shuffled);
    setStep('quiz');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setScore(0);
  };

  const handleAnswer = (optionScore: number) => {
    const newAnswers = [...answers, optionScore];
    setAnswers(newAnswers);

    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: number[]) => {
    const totalScore = finalAnswers.reduce((acc, curr) => acc + curr, 0);
    // Max score is 150 (10 questions * 15 max score)
    // Normalize to 100
    const normalizedScore = Math.min(100, Math.round((totalScore / 150) * 100));
    setScore(normalizedScore);

    if (normalizedScore < 30) {
      setResultType('xiao');
    } else if (normalizedScore < 60) {
      setResultType('zhong');
    } else if (normalizedScore < 85) {
      setResultType('lao');
    } else {
      setResultType('super-lao');
    }
    setStep('result');
  };

  const getResultInfo = () => {
    switch (resultType) {
      case 'xiao':
        return {
          title: "纯正小登",
          description: "你充满了青春活力，思维跳跃，紧跟时代潮流。你是互联网的原住民，老登们眼中的'外星人'。",
          icon: <Zap className="w-16 h-16 text-yellow-400" />,
          color: "bg-yellow-400",
          textColor: "text-black"
        };
      case 'zhong':
        return {
          title: "稳健中登",
          description: "你处于人生最平衡的阶段。既懂年轻人的梗，也能理解老一辈的坚持。你是社会的顶梁柱，也是时代的翻译官。",
          icon: <ShieldCheck className="w-16 h-16 text-blue-400" />,
          color: "bg-blue-400",
          textColor: "text-white"
        };
      case 'lao':
        return {
          title: "资深老登",
          description: "你已经开始享受慢生活了。保温杯、泡脚桶是你的标配。虽然偶尔看不惯年轻人，但你拥有他们没有的沉稳与智慧。",
          icon: <Coffee className="w-16 h-16 text-orange-400" />,
          color: "bg-orange-400",
          textColor: "text-white"
        };
      case 'super-lao':
        return {
          title: "终极老登",
          description: "你是老登中的战斗机！你的生活方式已经提前进入了退休状态。你对传统有着近乎偏执的守护，是年轻人眼中的'活化石'。",
          icon: <Flame className="w-16 h-16 text-red-500" />,
          color: "bg-red-500",
          textColor: "text-white"
        };
    }
  };

  const resultInfo = getResultInfo();
  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-white selection:text-black overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-2xl mx-auto px-6 py-12 min-h-screen flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {step === 'start' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-8"
            >
              <div className="space-y-4">
                <motion.h1 
                  className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  OLDENG<br/>TEST
                </motion.h1>
                <p className="text-xl md:text-2xl font-light text-gray-400 italic">
                  测测你的“老登”指数有多高？
                </p>
              </div>

              <div className="flex flex-col items-center gap-6">
                <motion.button
                  onClick={handleStart}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-12 py-6 bg-white text-black font-bold text-2xl rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    立即开测 <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
                
                <div className="flex gap-4 text-xs uppercase tracking-widest text-gray-500 font-bold">
                  <span>10 QUESTIONS</span>
                  <span>•</span>
                  <span>REAL TIME ANALYSIS</span>
                </div>
              </div>
            </motion.div>
          )}

          {step === 'quiz' && currentQuestion && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Question {currentQuestionIndex + 1} of {shuffledQuestions.length}
                  </span>
                  <div className="h-1 w-48 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-white"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
                    />
                  </div>
                </div>
                <span className="text-4xl font-black italic opacity-20">
                  {String(currentQuestionIndex + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  {currentQuestion.text}
                </h2>

                <div className="grid gap-4">
                  {currentQuestion.options.map((option, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => handleAnswer(option.score)}
                      whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.1)" }}
                      className="w-full text-left p-6 rounded-2xl border border-white/10 flex items-center justify-between group transition-colors"
                    >
                      <span className="text-lg font-medium">{option.text}</span>
                      <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-12"
            >
              <div className="space-y-6">
                <motion.div 
                  initial={{ rotate: -10, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", damping: 12 }}
                  className={`mx-auto w-32 h-32 rounded-3xl ${resultInfo.color} flex items-center justify-center shadow-2xl`}
                >
                  {resultInfo.icon}
                </motion.div>
                
                <div className="space-y-2">
                  <h2 className="text-6xl font-black italic uppercase tracking-tighter">
                    {resultInfo.title}
                  </h2>
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-2xl font-bold text-gray-400">老登指数:</span>
                    <span className="text-5xl font-black text-white">{score}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                <p className="text-xl leading-relaxed text-gray-300">
                  {resultInfo.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleStart}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-colors"
                >
                  <RotateCcw size={20} /> 再测一次
                </button>
                <button
                  onClick={() => window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(`我的老登指数是${score}%，我是${resultInfo.title}！快来测测你的吧：${window.location.href}`))}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-colors"
                >
                  分享结果
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-8 left-0 w-full text-center pointer-events-none">
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-600">
          © 2026 OLDENG LABS • INTERNET CULTURE PROJECT
        </p>
      </footer>
    </div>
  );
}

