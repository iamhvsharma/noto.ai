import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" backdrop-blur-md border-t border-t-pink-400/50 rounded-xl p-6 shadow-lg py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-sm font-semibold mt-2">
            Made with ❤️ by Harshvardhan Sharma, Github:{" "}
            <Link
              href="https://github.com/iamhvsharma/noto.ai"
              className="text-yellow-metal-600 hover:text-yellow-metal-800 transition-colors"
            >
              @iamhvsharma
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;