import Head from "next/head";
import Image from 'next/image';
import Link from "next/link";
import Styles from "../styles/Home.module.css";




const fee = () => {
    return (
        < >
            <Head>
                <title>料金</title>
            </Head>
            <div className="  sm:grid sm:grid-cols-4   gap-4  bg-black  text-white w-screen overflow-scroll h-full sm:justify-around whitespace-nowrap  ">
                <p className=" text-3xl w-fit text-center mx-auto  hover:text-purple-400 hover:border-2 sm:m-9 m-2"><Link href="/"><a>Home</a></Link></p>
                <p className="  text-3xl w-fit hover:border-2 hover:text-purple-400 text-center mx-auto sm:m-9 m-2"><Link href="/about"><a>About</a></Link></p>
                {/* <p className="  text-3xl w-fit hover:border-2 hover:text-purple-400 text-center mx-auto sm:m-9 m-2"><Link href="#"><a>Pending</a></Link></p> */}
                <p className="text-3xl w-fit hover:border-2 hover:text-purple-400 text-center mx-auto sm:m-9 m-2"><Link href="/contact"><a>Contact</a></Link></p>
            </div>
            
            <div id={Styles.back} className=" text-xl" >
                <div className="mt-3 text-center justify-center " id="left">
                    <p className="bg-black    text-white w-40   rounded-lg  text-2xl  mx-auto">保険メニュー</p>
                    <p className="mt-1 ml-3">怪我による治療（２部位まで）</p>
                    <p className="ml-3">各健康保険に応じた負担割合のみ</p>
                    <div className="flex justify-around">
                        <Image src="/monshin.png" alt="画像" width="200px" height={300}/>
                    </div>
                    <p className="mt-5 text-base ml-3"><span>【営業時間】</span></p>
                    <p className="font-extrabold text-2xl ml-3">9:00~12:00 15:00~20:00</p>
                    <p className="text-red-600 ml-3"><span>【定休日】</span><span className=" text-2xl font-extrabold">木曜日</span></p>
                </div>
                
                <div className=" text-center mx-auto relative "id="right">
                    <p className="bg-black rounded-lg  text-white w-36   mt-3 mx-auto text-2xl " >自費メニュー</p>
                    <p className=" mt-1 underline decoration-4 text-xl">保険治療+</p>
                    <p><span id={Styles.under1}>全体マッサージ</span><span>500円</span></p>
                    <Image src="/22793616.png" alt="イメージ"　 width="200px" height="200px" className=" "/>
                    <p><span id={Styles.under1}>トレーニング施設利用</span></p>
                    <p><span>月額３０００円で利用可能！</span></p>
                    <p className="  font-bold  text-xl" >(ビジター300円/1回)</p>
                </div>
            </div>
            <div className="h-full pt-2 flex items-center justify-center   bg-slate-300">
                <Image src="/image2.jpg" alt="アイコン" width={300} height={300}　className=" w-1/3 h-1/3"/>
                <p className="  font-bold text-3xl   box-content bg-yellow-400 h-40 w-6  p-10 m-1 outline-black outline-8 outline-double ">保険診療</p>
                <Image src='/bui.png' alt='アイコン' width={300} height={300} className=" w-1/4 h-1/4 border-4 border-slate-600"/>
            </div>
            <section className="outline-black outline-8 outline-offset-4 mt-4  text-center items-center justyfi-center text-2xl mb-3">
                <p className="">各個人の保険負担割合に応じておおよその下記の窓口料金となります。</p>
                <p className=''>保険診療内であれば下記の料金でお気軽に治療を受けていただけます。</p>
                <table className=" container mx-auto">
                    <thead className="  border-2 border-solid text-5xl border-black">
                        <tr className="">
                            <th className="bg-red-200 w-1/3">初検料</th>
                            <td className="bg-red-300 pl-5">700～1500円程度</td>
                        </tr>
                        <tr>
                            <th className="bg-red-200">２回目</th>
                            <td className="bg-red-300 pl-5">300～600円程度</td>
                        </tr>
                        <tr>    
                            <th className="bg-red-200">３回目</th>
                            <td className="bg-red-300 pl-5">300～500円程度</td>
                        </tr>
                    </thead>
                </table> 
                <p>※上記の料金は負担割合３割の場合となります</p>
                <p>※１ヶ月以上の来院がない場合は再初診療扱いとなり、初診時と同じ施術料金となります。</p>
                <p className=" ">※保険診療のみでの施術部位数は原則２部位までとなりますので、それ以上の部位は自費追加料金となります</p>
            </section>
            <div className="   border-8 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 border-red-300 text-2xl xl:w-7/12 mx-auto" id={Styles.jihi}>
                <p className="   md:w-9   text-center sm:mx-auto text-4xl font-bold outline-black  outline-8 outline-double bg-yellow-300  mt-2    ">*運動療法*</p>
                <div className=" justify-center items-center  ">
                    <p className="bg-clip-content bg-lime-300 sm:text-3xl sm:w-80 mt-3 sm:mt-5 mx-auto text-center font-bold">１レッスン/５０００円</p>
                    <ul className="bg-blue-200    list-disc sm:w-fit mx-auto list-inside decoration-2 underline decoration-clone decoration-red-600   sm:mt-10 ">
                        <li>１レッスン３０～４５分程度</li>
                        <li >レッスン後にマッサージ付き</li>
                    </ul>
                </div>
                <p className=" bg-blue-200     decoration-2 underline decoration-wavy decoration-red-600  sm:self-center ">年齢的にいろいろな症状改善を諦めていませんか？脳疾患の方・生活習慣病の方・怪我の後遺症、慢性疾患で病院通院中の方など</p>
                {/* <p class=" bg-blue-200  sm:col-start-4 sm:col-span-2    decoration-2 underline decoration-wavy decoration-red-600  justify-self-start sm:self-start text-start ">脳疾患の方・生活習慣病の方・怪我の後遺症、慢性疾患で病院通院中の方など</p> */}
                {/* <p class=" bg-blue-200 sm:col-start-1 sm:col-span-2  text-center  decoration-2 underline decoration-wavy decoration-red-600 sm:self-start ">慢性的に続く不快症状に悩んでいる方</p> */}
                {/* <p class="bg-blue-200 sm:col-start-4 sm:col-span-2   decoration-2 underline decoration-wavy  decoration-red-600  self-start ausolute bottom-10">体を動かすことで疲労回復！</p> */}
                {/* <p class=" bg-blue-200 text-center justify-self-center decoration-2 underline decoration-wavy decoration-red-600 ">explanation</p>
                <p class=" bg-blue-200 text-center justify-self-center decoration-2 underline decoration-wavy decoration-red-600 ">explanation</p>
                <p class=" bg-blue-200 text-center justify-self-center decoration-2 underline decoration-wavy decoration-red-600 ">explanation</p> */}
            </div>  
            <div className="  flex snap-x mx-auto snap-mandatory sm:w-6/12 h-1/2 overflow-x-auto relative  scroll-smooth mt-2 "  >
                <div className="w-full h-full flex-shrink-0 text-8xl snap-start text-center  justify-center  bg-green-200">1
                    <Image src="/store3.jpg" alt="画像" width={400} height={300} className=""/>
        
                </div>
                <div className="w-full h-full flex-shrink-0 text-8xl snap-start text-center  justify-center  bg-yellow-200 mt-3">2
                    <Image src="/store6.jpg" width={400} height={300} alt="画像" />
                </div>
                {/* <div className="w-96 h-full flex-shrink-0 text-8xl snap-start text-center  justify-center  bg-red-200">3
                    <img src="/store3.jpg" height={400} className=" object-fill"/>
                </div>
                <div className="w-96 h-screen flex-shrink-0 text-8xl snap-start text-center  justify-center  bg-blue-300">4
                    <img src="/store4.jpg"/>
                </div> */}
            </div>
                
            
            <div className="sm:flex w-screen font-extrabold whitespace-nowrap bg-gradient-to-r from-indigo-500 to-lime-300 ">
                    <p className=" w-1/2 text-center  mx-auto text-4xl font-serif  ">Re:vive整骨院</p>
                    <div className=' sm:flex  sm:justify-around sm:ml-10 sm:mr-40 '>
                        <Image src="/22989902.png"  width={50} height={50} alt="画像" className=' bg-white mx-auto ' />
                        <a href="tel:0667194500" className=' inline-block text-4xl  w-full text-center  overflow-visible whitespace-nowrap  hover:text-purple-400'>06-6719-4500</a>
                    </div>
            </div>
            
            {/* まず２つの、「Ｗｈｙ」どうして理由・「Ｈｏｗ」どのような方法を理解し、 */}
            

        
        </>
            
        
    );
}

export default fee;