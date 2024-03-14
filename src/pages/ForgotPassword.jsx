import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isMailSent, setIsMailSent] = useState(true);

  const handleSendMail = async () => {
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsMailSent(true);
      } else {
        // Handle errors here if needed
        console.error('Failed to send mail');
      }
    } catch (error) {
      console.error('Failed to send mail:', error);
    }
  };

  return (
    <section className="blue-gradient">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMail();
          }}
          className="w-full max-w-md bg-white px-8 py-6 rounded-xl"
        >
          <div className="text-center mx-auto">
            <p className="text-2xl font-bold text-black">Forgot Password ?</p>
            {!isMailSent && (
              <p className="text-blue-500">
                Please enter your registered email blh blha b;jahjkjhsfdb mn bsfdugbfm
              </p>
            )}
            {isMailSent && (
              <p className="text-green-500">An email has been sent to reset your password</p>
              )}
          </div>
          <div className="relative flex items-center mt-6">
              {!isMailSent && (<>
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <input
              type="email"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </>
            )}
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Send Mail
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
