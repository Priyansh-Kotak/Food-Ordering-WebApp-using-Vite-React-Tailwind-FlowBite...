import { Footer } from "flowbite-react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer
      container
      className="relative bottom-0 bg-white border-t border-gray-300 translate-y-2/3"   
    >
      <div className="w-full">
        <div className="w-full sm:flex sm:items-center sm:justify-between ">
          <Footer.Copyright by="Priyansh Kotak ™" href="#" year={2022} />
          <h4>Made with ❤️ Priyansh Kotak </h4>

          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.linkedin.com/in/priyanshkotak/"
              icon={BsLinkedin}
            />
            <Footer.Icon href="https://www.instagram.com/" icon={BsInstagram} />
            {/* <Footer.Icon href="https://www.codingninjas.com/studio/profile/Priyansh_Kotak" icon={BsCodeStudio} /> */}
            <Footer.Icon
              href="https://github.com/Priyansh-Kotak"
              icon={BsGithub}
            />
            <a href="https://www.codingninjas.com/studio/profile/Priyansh_Kotak">
              <img
                className="w-6 top-0 pb-3"
                src="https://files.codingninjas.in/article_images/favicon-and-cherrypy-1-1660924366.webp"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </Footer>
  );
}
