import Button from '@/components/Button';
import SVGInsta from '@/components/svg/SVGInsta';
import Title from '@/components/Title';
import Link from '../../node_modules/next/link';

export default function Home() {
  return (
    <>
      <head>
        <title>KYOTO EATS</title>
      </head>
      <main className="flex overflow-y-hidden h-screen flex-col items-center justify-between bg-[url(/images/mountain.jpg)] bg-cover">
        <div className="bg-[rgba(255,255,255,0.5)] h-full w-full absolute inset-0 flex flex-col items-center justify-start">
          <Title />

          <div className="mt-40">
            <Button />
          </div>
        </div>

        <div className="fixed flex flex-col items-center justify-center my-10 xl:my-20 bottom-0 right-0 xl:right-10">
          <div className="rotate-90 mb-10 font-anton">FOLLOW US</div>
          <div className="w-[2px] h-[50vh] bg-black" />
          <div className="mt-3 flex flex-col gap-2">
            <Link
              target="_blank"
              href="https://instagram.com/nadimfr?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
              className="hover:text-[#BC002D] duration-300 cursor-pointer"
            >
              <SVGInsta />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
