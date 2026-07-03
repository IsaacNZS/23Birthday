import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import useSound from "use-sound";

const Thirdpage = () => {
  const Myanswer = [
    {
      answer: "အပြာ",
    },
    {
      answer: "ခွေးသား",
    },
    {
      answer: "အာပူလျှာပူ",
    },
    {
      answer: "ကျောက်ဆည်",
    },
    {
      answer: "မြွေ",
    },
    {
      answer: "အိပ်ခြင်း",
    },
    {
      answer: "ဂွေးသီး",
    },
    {
      answer: "တင်းနွေ",
    },
    {
      answer: "ကလေးဘောင်းဘီ( j j )",
    },
    {
      answer: "လက်စွပ်",
    },
  ];

  const zlans = JSON.parse(localStorage.getItem("answer") || "[]");
  const same = Myanswer.filter((ma, i) => ma.answer === zlans[i]).length;
  const dif = Myanswer.length - same;
  const sameRate = ((same / Myanswer.length) * 100).toFixed(0);
  const difRate = ((dif / Myanswer.length) * 100).toFixed(0);
  const [play] = useSound("./next.mp3");

  return (
    <div className="w-full flex-col relative flex items-center justify-center gap-4 h-screen">
      <p className="text-4xl text-[#0e39fb] font-poppins font-bold">
        {" "}
        🎉 Checking the answer 🎉
      </p>
      <Table>
        <TableCaption className="text-pink-500 mb-4">
          အသဲတုန်တုန် တုန်တုန်လေး 🥺💓
        </TableCaption>
        <TableHeader className="border-pink-500 border-b-2">
          <TableRow>
            <TableHead className="w-25">မေးခွန်းနံပတ်</TableHead>
            <TableHead>သဲသေးသေးလေး အဖြေ</TableHead>
            <TableHead>သဲတုန်းလေး အဖြေ</TableHead>
            <TableHead className="text-right">တူညီမှု</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Myanswer.map((ma, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium text-center">{i + 1}</TableCell>

              <TableCell>{zlans[i] || "မဖြေသေးပါဘူးဟင်း 😭"}</TableCell>
              <TableCell>{ma.answer}</TableCell>
              <TableCell className="text-right">
                {ma.answer === zlans[i] ? (
                  <p className="text-green-500 font-bold">တူတယ်ယေး 🥰</p>
                ) : (
                  <p className="text-red-500 font-bold">တူဝူးဟွန့် 😭</p>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex flex-col justify-center items-start gap-2 px-4 py-2 rounded-[10px] font-bold text-white w-[95%] mx-auto bg-pink-500/50">
        {" "}
        <p>
          Same Answer : <span className="text-green-300">{same}</span>
        </p>
        <p>
          Difference Answer : <span className="text-red-700"> {dif}</span>
        </p>
        <p>
          Same Rate : <span className="text-green-300">{sameRate}%</span>
        </p>
        <p>
          Difference Rate : <span className="text-red-700">{difRate}%</span>
        </p>
      </div>
      <Link
        to={"/fouth"}
        onClick={() => play()}
        className="px-4 py-2 animate-pulse rounded-[10px] bg-pink-700 text-white text-lg font-bold"
      >
        Next 🥺💓
      </Link>
    </div>
  );
};

export default Thirdpage;
