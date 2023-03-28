const Contact = () => {
    return (<div className="ml-28 flex flex-col">  
        <h1 className="text-2xl self-center">Have a project Idea?</h1>
        <h1 className="text-2xl self-center">Lets talk</h1>
    <div className="flex w-screen h-screen ">
        <div className="flex flex-col bg-gray-500 w-1/2 justify-center">
            <div className="self-center">Phone</div>
            <div className="self-center">Email</div>
        </div>
        <div className="flex flex-col bg-pink-500 w-2/3 justify-center">

            <form action="">
                <div className="flex flex-col ">
                <input className='w-1/2 m-2 self-center' type="text" placeholder="name"/>
                <input className='w-1/2 m-2 self-center' type="text" placeholder="e-mail"/>
                <button  className="rounded bg-red-500 w-1/4 m-2 self-center">
                    Submit
                </button>
                </div>
            </form>
        </div>
    </div>
    </div>);
}

export default Contact;