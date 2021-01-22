import React from "react";

const Footer = () => (
  <div className="flex flex-wrap justify-center bg-800 p-16 text-center">
    <div className="flex flex-wrap mb-4 w-full ">
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
        <h3>About Us</h3>
        <p>
          We are a developer team came together by{" "}
          <a href="https://findmentor.network/" target="_blank">
            findmentor{" "}
          </a>{" "}
          collaboration. We want to build a platform, in there you can search
          open-source GitHub repositories according to your interest. To get
          contributors all around the world easily, add your open source
          projects into the our list!
        </p>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 ">
        <h3 className="text-xl py-4 flex-wrap">Socials</h3>
        <ul>
          <li></li>
          <li>
            <a
              href="https://github.com/FurkanPortakal/opensourceadam"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            <a href="https://twitter.com/furkanportakalx" target="_blank">
              Twitter
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
        <h3 className="text-xl py-4 flex-wrap">Join our community</h3>
        <ul>
          <li>
            <a href="https://discord.gg/NKy8NuJCZ5" target="_blank">
              Discord
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="text bg-900 p-2 pl-6">
      <p className="bottom">© Copyright 2021 - Open Source Adam</p>
    </div>
  </div>
);

export default Footer;
