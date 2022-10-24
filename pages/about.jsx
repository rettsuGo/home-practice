import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';



const about = () => {
    return (
        <>
          <Head>
            <title>About</title>
          </Head>
          <div className="  sm:grid sm:grid-cols-4   gap-4  bg-black  text-white w-screen overflow-scroll h-full sm:justify-around whitespace-nowrap">
                <p className="  text-3xl w-fit text-center mx-auto  hover:text-purple-400 hover:border-2 sm:m-9 m-2"><Link href="/"><a>Home</a></Link></p>
                <p className="  text-3xl w-fit hover:border-2 hover:text-purple-400 text-center mx-auto sm:m-9 m-2"><Link href="/fee"><a>Menu</a></Link></p>
                {/* <p className="  text-3xl w-fit hover:border-2 hover:text-purple-400 text-center mx-auto sm:m-9 m-2"><Link href="#">？</Link></p> */}
                <p className="  text-3xl w-fit hover:border-2 hover:text-purple-400 text-center mx-auto sm:m-9 m-2"><Link href="/contact"><a>Contact</a></Link></p>
          </div>    
          <div className=" tracking-widest text-5xl font-extrabold  text-center sm:full p-10 mx-auto my-20" >
            整骨院は身近で最も優しい治療です
          </div>
          <div className=" mt-10  xl:flex sm:w-7/12 sm:mx-auto" >
            <div className=" relative">
              <p className="text-2xl m-1   leading-10" >
              この業界に身を置くこと２０年近くになりました。知識も経験も積み重ねてお伝えできることは、現代医療の短絡的な投薬・手術治療の方法よりも、いわゆる東洋医療のような体を俯瞰的に捉え、[補完]しながら本来のあるべき姿へと体を整える遠回りな治療の方が最善で、健康はそれが近道だと言えます。整骨院は、そんな治療の入り口になる場所だと思っております。私は、そんな皆さまのお役に立てる日をお待ちしております。
              </p>
            </div>
            <div className=" mx-auto text-center w-full">
              <Image src="/CENTER_0001_BURST20220822154547578_COVER.JPG"   width={250} height={300}   alt="画像"/>
            </div>
          </div>
          <div className=" w-full flex">
              <Image src="/images/store1.JPG" width={450} height={300} alt="画像1"/>
              <Image src="/images/store2.JPG" width={450} height={300} alt="画像2"/>
              <Image src="/images/store3.JPG" width={450} height={300} alt="画像3"/>
              <Image src="/images/store4.JPG" width={450} height={300} alt="画像4"/>
          </div>

          <div className="sm:flex w-screen font-extrabold whitespace-nowrap bg-gradient-to-r from-indigo-500 to-lime-300 mt-10">
                    <p className=" w-1/2 text-center  mx-auto text-4xl font-serif  ">Re:vive整骨院</p>
                    <div className=' sm:flex  sm:justify-around sm:ml-10 sm:mr-40 '>
                        <Image src="/22989902.png"  alt="画像" width={50} height={50} className=' bg-white mx-auto '/>
                        <a href="tel:0667194500" className=' inline-block text-4xl  w-full text-center  overflow-visible whitespace-nowrap  hover:text-purple-400'>06-6719-4500</a>
                    </div>
          </div>
        </>
    );
}
export default about;