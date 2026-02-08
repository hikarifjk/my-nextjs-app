import Link from "next/link";
import Counter from "../components/Counter";

async function getWeatherData() {}

export default function AboutPage() {
  return (
    <main className="p-24">
        <h1 className="text-3xl font-bold">About Us Page</h1>
        <p>これは「私たちについて」のページです。</p>
    </main>
  );
}
