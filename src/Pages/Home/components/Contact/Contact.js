import React from "react";

const Contact = () => {
  return (
    <>
      <section className="bg-lime-100 py-10">
        <div>
          <h2 className="text-5xl font-bold text-center">Contact Me</h2>
        </div>
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
          <div className="flex flex-col justify-between">
            <div className="space-y-2 pl-0 lg:pl-28">
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                Let's talk!
              </h2>
              <div className="dark:text-gray-400">
                Send me a mail and i will reply
              </div>
            </div>
            <img
              src="https://i.ibb.co/0hx7K3s/Contact-Banner.png"
              alt=""
              className=""
            />
          </div>
          <form className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div>
              <label htmlFor="name" className="text-sm">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full input input-bordered mt-3"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full input input-bordered mt-3"
                data-temp-mail-org="1"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full input input-bordered mt-3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 btn btn-success"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
