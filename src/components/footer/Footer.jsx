import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="px-4  bg-gray-800 text-slate-300 text-sm">
        <section className="container m-auto py-2 ">
          <div className="py-8 border-b">
            <span className="text-2xl tracking-widest">
              <i className="bi bi-calla"></i> Speak to our Expert at +91 - 00000
              00000
            </span>
          </div>
          {/* important links  */}
          <div className=" py-8 flex ">
            <div className="w-[600px]">abouts</div>
            <div className="flex-1">
              <h1 className="py-3 text-xl">Solution</h1>
              <ul>
                <li className="py-1 hover:text-blue-500">Marketing</li>
                <li className="py-1 hover:text-blue-500">Analytics</li>
                <li className="py-1 hover:text-blue-500">Commerce</li>
                <li className="py-1 hover:text-blue-500">Insights</li>
              </ul>
            </div>
            <div className="flex-1">
              <h1 className="py-3 text-xl">Support</h1>
              <ul>
                <li className="py-1 hover:text-blue-500">Pricing </li>
                <li className="py-1 hover:text-blue-500">Documentation</li>
                <li className="py-1 hover:text-blue-500">Guides</li>
              </ul>
            </div>
            <div className="flex-1">
              <h1 className="py-3 text-xl">Copmany</h1>
              <ul>
                <li className="py-1 hover:text-blue-500">About</li>
                <li className="py-1 hover:text-blue-500">Blogs</li>
                <li className="py-1 hover:text-blue-500">Tours</li>
                <li className="py-1 hover:text-blue-500">Partners</li>
                <li className="py-1 hover:text-blue-500">press</li>
              </ul>
            </div>
            <div className="flex-1">
              <h1 className="py-3 text-xl">Legal</h1>
              <ul>
                <li className="py-1 hover:text-blue-500">Terms</li>
                <li className="py-1 hover:text-blue-500">Privacy</li>
                <li className="py-1 hover:text-blue-500">Claims</li>
              </ul>
            </div>
          </div>
          {/* subscribe section  */}
          <div className="py-8 flex border-t">
            <div className="flex-1">
              <h1 className="text-xl py-2">Subscribe to our Newsletter</h1>
              <p>
                The latest news, articles and resources, sent to your inbox
                weekly.
              </p>
            </div>
            <div>
              <form action="">
                <input
                  type="text"
                  placeholder="Emails"
                  className="h-11 mx-2 px-3 border rounded-md bg-gray-700 "
                />
              </form>
            </div>
            <button className="h-11 px-4 font-semibold bg-blue-600 hover:to-blue-500 rounded-md ">
              Subscribe
            </button>
          </div>
          {/* rights section  */}
          <div className="pt-8 pb-5 border-t">
            <span>&copy;2024 Al-Umrah, Inc. All rights reserved.</span>
            <span className="float-end">
              <ul className="flex text-2xl">
                <li className="px-2 ">
                  <i className="bi bi-facebook"></i>
                </li>
                <li className="px-2 ">
                  <i className="bi bi-instagram"></i>
                </li>
                <li className="px-2 ">
                  <i className="bi bi-twitter-x"></i>
                </li>
                <li className="px-2 ">
                  <i className="bi bi-github"></i>
                </li>
                <li className="px-2 ">
                  <i className="bi bi-youtube"></i>
                </li>
              </ul>
            </span>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
