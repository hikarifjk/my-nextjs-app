import Link from "next/link";
import Counter from "./components/Counter";


// Server Component としてデータをフェッチする例
async function getWeatherData() {
  // ここではダミーデータを返しますが、実際にはAPIからデータを取得します
  // 疑似的に1秒の遅延を発生させます
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // ★デモ用に意図的にエラーを発生させるコードを追加
  if (Math.random() < 0.5) {
    throw new Error("天気情報の取得に失敗しました。 再度お試しください。");
  }

  return {
    location: "東京",
    temperature: 28,
    condition: "晴れ"
  };
}


// HomeコンポーネントはデフォルトでServer Componentです
// async await を使うことで、非同期処理のデータ取得を待ってからレンダリング
export default async function Home() {
  const weather = await getWeatherData();
  console.log("Server Component で実行されました!");

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Hello Next.js World!</h1>
        <p className="text-lg">現在地: {weather.location}</p>
        <p className="text-lg">気温: {weather.temperature}°C</p>
        <p className="text-lg">天気: {weather.condition}</p>
        <Counter />{ /* 追加! Counter コンポーネントをレンダリング */  }

        <div className="mt-8">
          {/* Linkコンポーネントの使用例 */}
          <Link href="/about" className="text-blue-500 hover:underline">
            About Us ページへ
          </Link>
        </div>
      </main>
  );
}



// import Image from "next/image";

// export default function Home() {
//   return (2
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
