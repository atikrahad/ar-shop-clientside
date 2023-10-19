

const Contactus = () => {
    return (
        <div className="w-[95%] py-20 md:w-[80%] mx-auto flex gap-5 flex-col md:flex-row justify-between items-center">
            <div >
                <div className="lg:w-[70%] space-y-2 text-center md:text-left">
                <h1 className="text-4xl font-semibold">Contact us</h1>
                <p>Need to get in touch with us? Either fill out the form with your inquiry or find the depertment email you would like to contact below.</p>
                </div>
            </div>
            <div className="shadow-2xl  p-5">
                <form className="space-y-2">
                    <div className="flex gap-2 justify-between">
                    <div>
                        <label>First name<sup>*</sup></label>
                        <input className="border w-full py-2 rounded-md bg-slate-200" type="text" name="name" required/>
                    </div>
                    <div>
                        <label>Last name</label>
                        <input className="border w-full py-2 rounded-md bg-slate-200" type="text" name="name" />
                    </div>
                    </div>
                    <div>
                        <label>Email<sup>*</sup></label>
                        <input className="border py-2 rounded-md w-full bg-slate-200" type="email" name="name" required />
                    </div>
                    <div>
                        <label>What can we help you with?</label>
                        <textarea className="border py-2 rounded-md w-full bg-slate-200" type="text" name="name" />
                    </div>
                    <div>
                        <button className= "btn rounded-md text-white font-bold bg-green-600 hover:bg-sky-600">submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contactus;