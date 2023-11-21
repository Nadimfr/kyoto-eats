import Button from '@/components/Button';
import Title from '@/components/Title';

export default function Home() {
  return (
    <>
      <head>
        <title>KYOTO EATS</title>
      </head>
      <main className="flex overflow-y-hidden h-screen flex-col items-center justify-between bg-[url(/images/mountain.jpg)] bg-cover">
        <div className="bg-[rgba(255,255,255,0.5)] h-full w-full absolute inset-0 flex flex-col items-center justify-start">
          <Title />

          <div className="mt-20">
            <Button />
          </div>
        </div>
      </main>
    </>
  );
}
