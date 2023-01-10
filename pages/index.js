import Head from "next/head";
import Link from "next/link";
import Content from "../layouts/content";

export default function Home() {
  return (
    <div className="flex flex-col flex-nonwrap place-content-center items-center h-screen overflow-auto p-0 relative gap-2">
      <Head>
        <title>AP Calculus Review</title>
      </Head>
      <h1 className=" text-3xl glow">AP Calculus AB Review</h1>
      <div className="grid sm:grid-cols-4 p-10 gap-4 overflow-auto">
      <Link href="/unit1/main">
          <button className="box1">Unit 1</button>
          </Link>
        <Link href="/unit2/main">
        <button className=" box2">
          Unit 2
        </button>
        </Link>
        <Link href="/unit3/main">
          <button className=" box3">
            Unit 3
          </button>
        </Link>
        <Link href="/unit4/main">
          <button className=" box4 ">
            Unit 4
          </button>
        </Link>
        <Link href="/unit5/main">
        <button className=" box5 ">
          Unit 5
        </button>
        </Link>
        <Link href="/unit6/main">
        <button className=" box6 "disabled>
          Unit 6
        </button>
        </Link>
        <Link href="/unit7/main">
        <button className=" box7 " disabled>
          Unit 7
          </button>
          </Link>
        <Link href="/unit8/main">
        <button className=" box8 " disabled>
            Unit 8
        </button>
        </Link>
      </div>
      <button className="flex sm:mt-10 m-3 h-auto w-fit p-2 rounded-3xl text-sm border border-gray-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
        <p className=" px-2">Built By Rahul R.</p>
      </button>
    </div>
  );
}
