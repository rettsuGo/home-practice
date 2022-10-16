import Head from "next/head";
import Link from "next/link";
import {useState } from "react";
import Image from 'next/image';



const useContact = () => {
    const initialValues ={ username:"", contact:false,  mailAddress:"",textboard:""};
    const [formValues,setFormValues]=useState(initialValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit] =useState(false);
    // const [formPush, setFormPush]=useState(false);

    // const handlePush =(e)=> {   
    //     return(
    //         e.target.checked=true
    //     )
    // }

    const handleChange =(e)=>{
        const{name, value}=e.target;
        // alert(e.target);
        setFormValues({...formValues,[name]:value});
        console.log(formValues);
    }

    const handleSubmit=(e)=> {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    


    const validate =(values)=> {
        const errors={};
        const regex=/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
        if(!values.username){
            errors.username="名前を入力してください";
        }
        if(!values.mailAddress){
            errors.mailAddress="メールアドレスを入力してください";
        } else if (!regex.test(values.mailAddress)){
            errors.mailAddress="正しいメールアドレスを入力してください";
        }
        if (values.contact ==""){
            errors.contact="選択してください";
        }
        if(!values.textboard){
            errors.textboard="お問い合わせ内容を入力してください";
        }
        return errors;
    }
    
    return (
        
        <>
            <Head>
                <title>コンタクト</title>
            </Head>
            <div className="  sm:grid sm:grid-cols-4   gap-4  bg-black  text-white w-screen overflow-scroll h-full sm:justify-around whitespace-nowrap  ">
                <p className=" text-3xl w-fit text-center mx-auto  hover:text-purple-400 hover:border-2 sm:m-9 m-2"><Link href="/"><a>Home</a></Link></p>
                <p className="  text-3xl w-fit hover:border-2 hover:text-purple-400 text-center mx-auto sm:m-9 m-2"><Link href="/about"><a>About</a></Link></p>
                <p className="  text-3xl w-fit hover:border-2 hover:text-purple-400 text-center mx-auto sm:m-9 m-2"><Link href="./fee"><a>Menu</a></Link></p>
                {/* <p className="text-3xl w-fit hover:border-2 hover:text-purple-400 text-center mx-auto sm:m-9 m-2"><Link href="#"><a>?</a></Link></p> */}
            </div>    


            <form className=" text-center mx-auto "  method="POST" onSubmit={(e)=>{handleSubmit(e)}}>
                <h1 className=" text-4xl" style={{color:`red`}} >CONTACT</h1>
                <div className="text-3xl">
                    
                    <div className="m-3" >
                        <label className="mr-3">Name</label>
                        <input type="text" placeholder="名前を入力"  name="username"  className=" hover:border-yellow-600 h-16 border-2 border-black "  onChange={(e)=> {handleChange(e)}} />
                        <p className="">{formErrors.username}</p>
                    </div>
                    <div className=" flex justify-center  mr-36" >
                        <label className=" sm:mr-24 self-center"> Gender</label>
                        <div className="  flex-col">
                            <div className=" flex">
                                <label htmlFor="s" className="ml-3">男</label>
                                <input type="radio" name="contact" className="" id="s"  onChange={(e)=>{handleChange(e) }} />
                                <label htmlFor="w" className=" ml-3">女</label>
                                <input type="radio" name="contact"  id="w"    className="" onChange={(e)=>{handleChange(e)}} />
                                <p className="">{formErrors.contact}</p>
                            </div>
                        </div>
                    </div>
                    <div className="m-3 h-14">
                        <label className="mr-4">Mail</label>
                        <input type="text" placeholder="メールアドレスを入力"　name="mailAddress" className=" hover:border-yellow-600 h-16 border-2 border-black" onChange={(e)=> {handleChange(e)}}/>
                        <p  className="">{formErrors.mailAddress}</p>
                    </div>
                    <div className="mt-16 sm:flex justify-center">
                        <p className=" mt-5">お問い合わせ</p>
                        <textarea type="text" placeholder="質問・お問い合わせ"  rows='10'　name="textboard" className=" hover:border-yellow-600  w-full sm:w-1/2 border-2 border-black" onChange={(e)=>{ handleChange(e)}}/>
                        <p className="">{formErrors.textboard}</p>
                    </div>
                </div>
                <button　type='submit' className='flex  mx-auto bg-yellow-200  text-3xl w-20 justify-center ring-offset-2 ring-4 ring-cyan-300 mt-3 '>送信</button>
                {Object.keys(formErrors).length===0 && isSubmit &&(
                    <div className="">送信完了</div>
                )}

            </form>

            <div className="sm:flex w-screen font-extrabold whitespace-nowrap bg-gradient-to-r from-indigo-500 to-lime-300 ">
                <p className=" w-1/2 text-center  mx-auto text-4xl font-serif h-10  ">Re:vive整骨院</p>
                <div className=' sm:flex  sm:justify-around sm:ml-10 sm:mr-40 '>
                    <Image src="/22989902.png"  alt="画像" width={50} height={50} className='bg-white mx-auto ' />
                    <a href="tel:0667194500" className=' inline-block text-4xl  w-full text-center  overflow-visible whitespace-nowrap  hover:text-purple-400'>06-6719-4500</a>
                </div>
            </div>



        </>
        
    );
}

export default useContact;
