const Services = () => {
    return (  <div className="flex  w-screen h-screen ml-28 bg-gray-100 ">
        <div className="flex flex-col w-1/2">
            <h1 className="text-2xl self-center">my services</h1>
            <p>I provide....</p>
            <button className="bg-blue-500 w-20 rounded-lg self-left">lets talk</button>
        </div>
        <div className="flex flex-col w-1/2">
            <div>web development</div>
            <div>Databases</div>
            <div>APIs</div>
        </div>
    </div>
        
        );
}
 
export default Services;