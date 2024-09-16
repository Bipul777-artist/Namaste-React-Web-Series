const Contact = () => {
    return(
        <div className="max-w-2xl flex flex-col items-center justify-center m-auto text-center ">

            <h1 className="font-semibold text-xl my-2">Contact Page</h1>
            <input 
                className="border-b-2 border-black p-2 m-2"
                type="text"
                placeholder="message"
            />
            <input 
                className="border-b-2 border-black p-2 m-2"
                type="text"
                placeholder="message"
            />

            <button className="mt-4 bg-orange-500 text-black ml-3 px-3 py-1 rounded hover:text-white">
                Submit
            </button>
        </div>
    )
}

export default Contact;