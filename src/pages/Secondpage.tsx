import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { useEffect, useState } from "react";

const Secondpage = () => {
  const Allquestion = [
    {
      question: "သဲသေးသေးလေး အကြိုက်ဆုံး အရောင်?",
      answer: ["အနီ", "အပြာ", "အဝါ", "အစိမ်း", "လိမ္မော်"],
    },
    {
      question: "သဲသေးသေးလေး အကြိုက်ဆုံး အသား?",
      answer: ["ကြက်မဲသား", "အမဲသား", "ဝက်သား", "ခွေးသား", "ငါး"],
    },
    {
      question: "သဲသေးသေးလေး အကြိုက်ဆုံး အစားအစာ?",
      answer: [
        "မာလာရှမ်းကော",
        "အာပူလျှာပူ",
        "ငါးပိရည်",
        "ဝက်သားတုတ်ထိုး(အဆီနော်)",
        "တို့ဟူးနွေး",
      ],
    },
    {
      question: "သဲသေးသေးလေး အကြိုက်ဆုံး နေရာ?",
      answer: ["အိမ်", "ဘုရားကျောင်း", "ကျောက်ဆည်", "စဉ့်ကိုင်", "အိမ်သာ"],
    },
    {
      question: "သဲသေးသေးလေး အကြောက်ဆုံး သတ္တဝါ?",
      answer: ["မြွေ", "ကြွက်", "ပိုးဟပ်", "တောက်တဲ့", "ပင့်ကူ"],
    },
    {
      question: "သဲသေးသေးလေး အကြိုက်ဆုံး အလုပ်?",
      answer: [
        "စာကျက်",
        "သန့်ရှင်းရေး",
        "အိပ်ခြင်း",
        "ထမင်းစားခြင်း",
        "ဒိန်းဒိန်းဆော့",
      ],
    },
    {
      question: "သဲသေးသေးလေး အကြိုက်ဆုံး အသီး?",
      answer: ["စတော်ဘယ်ရီ", "စပျစ်သီး", "နံနတ်သီး", "ဂွေးသီး", "ဒူးရင်းသီး"],
    },
    {
      question: "သဲသေးသေးလေး အကြိုက်ဆုံး နေ့?",
      answer: [
        "စနေ",
        "တင်းနွေ",
        "တင်းလာ",
        "အင်္ဂါ",
        "ဗုဒ္ဓဟူး",
        "ကြာသပတေး",
        "သောကြာ",
      ],
    },
    {
      question: "သဲသေးသေးလေး အကြိုက်ဆုံး အဝတ်အစား?",
      answer: [
        "ထမှိန်",
        "ဘောင်းဘီရှည်",
        "ဘောင်းဘီတို",
        "ကလေးဘောင်းဘီ( j j )",
        "ဂါဝန်",
      ],
    },
    {
      question: "သဲသေးသေးလေး အကြိုက်ဆုံး အဆင်တန်ဆာ?",
      answer: ["လက်စွပ်", "ဆွဲကြိုး", "နားကပ်", "လက်ကောက်", "ခြေကျင်း"],
    },
  ];
  const [selectedanswers, setSelectedanswers] = useState<string[]>([]);

  const AnswerFun = (questionIndex: number, ans: string) => {
    setSelectedanswers((prev) => {
      const updated = [...prev];
      updated[questionIndex] = ans;

      localStorage.setItem("answer", JSON.stringify(updated));

      return updated;
    });
  };

  const Resetans = () => {
    localStorage.removeItem("answer");
    setSelectedanswers([]);
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("answer") || "[]");
    setSelectedanswers(saved);
  }, []);
  return (
    <div className="w-full h-screen flex relative flex-col items-center justify-center">
      <p className="text-4xl text-[#0e39fb] font-poppins font-bold">
        {" "}
        🎉 Q & A Time 🎉
      </p>

      <img
        src="./doraemon.gif"
        alt=""
        className="absolute w-40 h-40 bottom-10 right-0"
      />
      <div className="flex flex-col overflow-y-auto scrollbar-none max-h-170 shadow-xl rounded-[10px] w-full my-3 gap-4">
        {Allquestion.map((a, io) => (
          <div
            key={io}
            className="flex shadow-md rounded-[14px] w-[95%] mx-auto px-3 py-2 flex-col"
          >
            <p className="font-bold text-[16px]">
              <span>{io + 1}. </span>
              {a.question}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {a.answer.map((an, i) => (
                <button
                  key={i}
                  onClick={() => AnswerFun(io, an)}
                  className={cn(
                    "px-4 py-2 text-white text-center bg-gray-600 rounded-[10px]",
                    an === selectedanswers[io] && "bg-green-500",
                  )}
                >
                  {an}
                </button>
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={() => Resetans()}
          className="px-4 py-2 bg-red-500 text-white w-[60%] rounded-[10px] ml-3 text-lg font-bold"
        >
          Reset all answer! 🥺
        </button>
      </div>
      {selectedanswers.length === 10 && (
        <Link
          to={"/third"}
          className="px-4 py-2 animate-pulse rounded-[10px] bg-pink-700 text-white text-lg font-bold"
        >
          Submit All Answer 🥺💓
        </Link>
      )}
    </div>
  );
};

export default Secondpage;
