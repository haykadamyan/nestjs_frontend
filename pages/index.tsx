import { useCallback, useState } from 'react';
import config from 'config/config';
import getSum from 'pages/api/sum';

export default function Home() {
  const [num1, setNum1] = useState<string | null>(null)
  const [num2, setNum2] = useState<string | null>(null)
  const [sum, setSum] = useState("");

  const handleSubmit = useCallback(async () => {
    const data = await getSum(num1, num2);

    setSum(data)
  }, [num1, num2]);

  return (
    <div className="bg-gray-200 w-screen h-screen flex justify-center items-center flex-col">
        <div className="mt-1 relative rounded-md shadow-sm flex">
          <input
            type="number"
            name="num1"
            id="num1"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 sm:text-sm border-gray-300 rounded-md"
            placeholder="0"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <span className="mx-2">+</span>
          <input
            type="number"
            name="num2"
            id="num2"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 sm:text-sm border-gray-300 rounded-md"
            placeholder="0"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <button className="btn-green w-40 mt-4" onClick={handleSubmit}>SUM</button>
        {sum && <div>
            Result: {sum}
          </div>
        }
    </div>
  )
}