const Newsletter = () => {
    return (
        <div className="relative z-10 mx-auto -mb-36 w-10/12 md:w-8/12 border border-gray-300 rounded-lg mt-40">
            <div className="p-6  rounded-lg bg-opacity-90">
                <div className="bg-[url('https://i.ibb.co/9GGDV5T/bg-shadow.png')] bg-cover bg-opacity-70 rounded-lg p-10 bg-white/85">
                <h2 className="text-center text-4xl font-bold mb-4">Subscribe to our Newsletter</h2>
                <p className="text-center text-gray-500 text-sm mb-4">Get the latest updates and news right in your inbox!</p>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="input input-bordered w-full rounded-l-lg"
                    />
                    <button className="btn bg-[url('https://i.ibb.co/9GGDV5T/bg-shadow.png')] bg-cover bg-opacity-70 text-black border-none rounded-lg px-4 transition-opacity hover:bg-opacity-80">
                        Subscribe
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
