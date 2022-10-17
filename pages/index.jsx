import Link from "next/link";
import Particle from "./particle.jsx";
import Styles from "../styles/Home.module.css";
import Head from 'next/head';
import Image from "next/image.js";


function aak() {


    return (
        <>
            <Head>
                <title>Re:vive整骨院</title>
            </Head>
            <div className="  sm:grid sm:grid-cols-4   gap-4  bg-black  text-white w-screen overflow-scroll h-full sm:justify-around whitespace-nowrap  ">
                <p className=" text-3xl w-fit text-center mx-auto  hover:text-purple-400 hover:border-2 sm:m-9 m-2"><Link href="/about"><a>About</a></Link></p>
                {/* <p className="text-3xl w-fit hover:border-2 hover:text-purple-400 text-center mx-auto sm:m-9 m-2"><Link href="#"><a>?</a></Link></p> */}
                <p className="  text-3xl w-fit hover:border-2 hover:text-purple-400 text-center mx-auto sm:m-9 m-2"><Link href="./fee"><a>Menu</a></Link></p>
                <p className="  text-3xl w-fit hover:border-2 hover:text-purple-400 text-center mx-auto sm:m-9 m-2"><Link href="/contact"><a>Contact</a></Link></p>
            </div>    

                <div className=" w-full h-full">
                    {/* <img src="/store1.jpg" alt="store" style={{width:`100vw`,height:`100vh`}} className=" relative z-10 " /> */}
                    <Image src="/store1.jpg" width={2000} height={1000} alt="画像" />
                </div>

            <div className=' sm:flex  sm:justify-around'>
                <div className='mt-2 h-full '>
                    <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13130.37012076463!2d135.5337279!3d34.639736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5996adcd4534ed42!2zUmU6dml2ZeaVtOmqqOmZog!5e0!3m2!1sja!2sjp!4v1658541996595!5m2!1sja!2sjp'
                            loading="lazy" referrerPolicy="no-referrer" className=' container ml-5'></iframe>
                    <style jsx>{`
                        iframe {
                            width:100%;
                            height:450px;
                        } 
                    `}</style>    
                </div> 
                <table className='h-full bg-gradient-to-r from-orange-400 via-red-500 to-pink-500  '>
                    <tbody className=' text-2xl  divide-y-4  divide-white divide-double w-screen '>
                        <tr className=' '>
                            <th>名前</th>
                            <td>Ｒｅ：ｖｉｖｅ整骨院</td>
                        </tr>
                        <tr>
                            <th>住所</th>
                            <td>大阪市東住吉区桑津１－３２－１９アバース桑津西棟１０２</td>
                        </tr>
                        <tr>
                            <th>電話番号</th>
                            <td><a href='tel:0667194500'>０６－６７１９－４５００</a></td>
                        </tr>
                        <tr>
                            <th>各種保険取り扱い</th>
                            <td　className='text-1xl'>骨折・脱臼・捻挫・打撲・スポーツ障害・交通事故・労災</td>
                        </tr>
                        <tr>
                            <th>営業時間</th>
                            <td className=' sm:flex-1   mx-auto p-5 bg-white'>
                                <ul className='  grid grid-cols-9 grid-rows-3  gap-1 bg-yellow-400' >
                                    <li className=' col-span-2 bg-white shadow-xl '><div className=''>受付時間</div></li>
                                    <li className=' bg-white shadow-xl'><div className='text-center'>月</div></li>
                                    <li className=' bg-white shadow-xl'><div className='text-center'>火</div></li>
                                    <li className=' bg-white shadow-xl'><div className='text-center'>水</div></li>
                                    <li className=' bg-white shadow-xl'><div className='text-center'>木</div></li>
                                    <li className=' bg-white shadow-xl'><div className='text-center'>金</div></li>
                                    <li className=' bg-white shadow-xl'><div className='text-center'>土</div></li>
                                    <li className=' bg-white shadow-xl'><div className='text-center'>日</div></li>
                                    <li className=' col-span-2  bg-white shadow-xl'><div className=' overflow-hidden'>9:00_～12:00</div></li>
                                    <li className=' bg-white shadow-xl'><div className=' text-center'>〇</div></li>
                                    <li className=' bg-white shadow-xl'><div className='text-center'>〇</div></li>
                                    <li className=' bg-white shadow-xl'><div className='text-center'>〇</div></li>
                                    <li className=' bg-white shadow-xl'><div className='text-center'>✕</div></li>
                                    <li className=' bg-white shadow-xl'><div className='text-center'>〇</div></li>
                                    <li className=' bg-white shadow-xl'><div className='text-center'>〇</div></li>
                                    <li className=' bg-white shadow-xl'><div className='text-center'>〇</div></li>
                                    <li className='col-span-2 bg-white shadow-xl overflow-clip'><div className=''>15:00～19:30</div></li>
                                    <li className=' bg-white shadow-xl'><div className='text-center'>〇</div></li>
                                    <li className=' bg-white shadow-xl'><div className='text-center'>〇</div></li>
                                    <li className=' bg-white shadow-xl'><div className='text-center'>〇</div></li>
                                    <li className=' bg-white shadow-xl'><div className='text-center'>✕</div></li>
                                    <li className=' bg-white shadow-xl'><div className='text-center'>〇</div></li>
                                    <li className=' bg-white shadow-xl'><div className='text-center'>〇</div></li>
                                    <li className=' bg-white shadow-xl'><div className='text-center'>〇</div></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>定休日</th>
                            <td>木曜日</td>
                        </tr>
                        <tr>
                            <th>最寄り駅・バス停</th>
                            <td className=' pl-5'>【最寄り駅】Ｊｒ大和路線ー東部市場前駅　/ 【バス停】中桑津[西]________________</td>
                        </tr>
                        <tr>
                            <th>駐車場</th>
                            <td>なし（※店の前は自己責任でお願いします。）</td>
                        </tr>
                    </tbody>
                </table>
                    
                    
            </div>





            <div className="sm:flex w-screen font-extrabold whitespace-nowrap bg-gradient-to-r from-indigo-500 to-lime-300 mt-2">
                <p className=" w-1/2 text-center  mx-auto text-4xl font-serif h-10  ">Re:vive整骨院</p>
                <div className=' sm:flex  sm:justify-around sm:ml-10 sm:mr-40 '>
                    <Image src="/22989902.png"  alt="画像" width={50} height={50} className='bg-white mx-auto ' />
                    <a href="tel:0667194500" className=' inline-block text-4xl  w-full text-center  overflow-visible whitespace-nowrap  hover:text-purple-400'>06-6719-4500</a>
                </div>
            </div>

            
        </>
    );


}

export default aak; 