const Footer = () => {
    return (
    <div className="w-full bg-black text-neutral-content mt-14">
        <div className="flex justify-center ">
        <img className="mt-28" src="https://i.ibb.co.com/Ttyh9MW/logo-footer.png" alt="" />
        </div>
        
        <footer className="footer w-full bg-black text-neutral-content mt-14 p-10 flex flex-col items-center justify-start gap-4 md:flex-row md:items-start md:justify-between">
    <nav>
      <div className="flex gap-2 mb-4 md:mb-0">
        <a href=""className="font-bold"><h2>About Us</h2></a>
      </div>
      <p className="text-gray-500">We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
       
    </nav>
    <nav className="mt-4 md:mt-0 ">
    <h6 className="font-bold ">Quick Links</h6>
      <ul className="list-disc pl-5">
      <li  className="text-gray-500"><a className="link link-hover">Home</a></li>
      <li  className="text-gray-500"><a className="link link-hover">Services</a></li>
      <li  className="text-gray-500"><a className="link link-hover">About</a></li>
      <li  className="text-gray-500"><a className="link link-hover">Contact</a></li>
      </ul>
    </nav>
    <nav className="mt-4 md:mt-0">
      <h6 className="font-bold">Subscribe</h6>
      <p className="text-gray-500">We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
      <div className="flex">
  <input
    type="text"
    placeholder="Enter your email"
    className="input input-bordered w-full  rounded-r-none"
  />
    <button className="btn bg-[url('https://i.ibb.co/9GGDV5T/bg-shadow.png')] bg-cover text-black border-none rounded-l-none px-4 transition-opacity hover:bg-opacity-80 bg-violet-300">
    Subscribe
</button>


</div>

    </nav>
  </footer>
  <hr className="border-gray-700" />
      <p className="text-center text-gray-500 py-4">
        ©2024 Your Company All Rights Reserved.
      </p>
        </div>
    );
};

export default Footer;