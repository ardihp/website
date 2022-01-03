import React from "react";
import LinkHref from "@/components/LinkHref";
import SocialLink from "@/components/SocialLink";

function About() {
  About.title = "About - Ardi";

  return (
    <div className="flex flex-col py-6 space-y-6 sm:py-10 sm:space-y-10 w-full">
      <p className="font-fredoka text-4xl md:text-5xl text-sky-500/50">
        Hey, it&apos;s a nice to meet you here {""}
        <span className="font-normal">⛄️</span>
      </p>
      <div className="flex flex-col space-y-3">
        <p className="font-fredoka text-xl md:text-2xl text-sky-500/50">
          About Me
        </p>
        <div className="flex flex-col space-y-6">
          <div className="font-manrope font-bold text-gray-600/70 space-y-3 leading-loose">
            <p>
              My name is{" "}
              <span className="text-gray-800">Ardiansyah Halim Putra</span>,
              people usualy call me <span className="text-gray-800">Ardi</span>.
              Born and rise in{" "}
              <LinkHref
                body="Jakarta, Indonesia"
                href="https://www.google.com/search?q=jakarta"
                target="_blank"
              />
              , currently live at{" "}
              <LinkHref
                body="Cengkareng, Jakarta Barat"
                href="https://www.google.com/search?q=cengkareng"
                target="_blank"
              />
              . Graduated from{" "}
              <LinkHref
                body="Cinta Kasih Tzu Chi"
                href="https://www.google.com/search?q=sekolah+cinta+kasih+tzu+chi"
                target="_blank"
              />{" "}
              Vocational High School majoring{" "}
              <span className="text-gray-800">Software Engineering</span> last
              year, 2021.
            </p>
            <p>
              I like things related to{" "}
              <span className="text-gray-800">design and technology</span>,
              including {""}
              <span className="text-gray-800">
                interaction design, accessibility, and technology design
              </span>
              . I started learning web development since 1st year at school
              using{" "}
              <LinkHref body="PHP" href="https://www.php.net" target="_blank" />
              , then continue with PHP framework called{" "}
              <LinkHref
                body="Laravel"
                href="https://laravel.com"
                target="_blank"
              />
              . Currently learning about frontend development using{" "}
              <LinkHref
                body="React.js"
                href="https://reactjs.org"
                target="_blank"
              />
              {""} and {""}
              <LinkHref
                body="Next.js"
                href="https://nextjs.org"
                target="_blank"
              />
              .
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="font-manrope font-bold text-gray-600/70">
              Feel free to get in touch with me via links below:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-flow-col md:auto-cols-fr gap-4 w-full">
              <SocialLink
                href="mailto:ardihp8@gmail.com"
                body="Email"
                icon="far fa-envelope"
              />
              <SocialLink
                href="https://linkedin.com/in/ardi-hp/"
                body="LinkedIn"
                icon="fab fa-linkedin-in"
              />
              <SocialLink
                href="https://github.com/ardihp"
                body="Github"
                icon="fab fa-github-alt"
              />
              <SocialLink
                href="https://medium.com/@ardihp8"
                body="Medium"
                icon="fab fa-medium-m"
              />
              <SocialLink
                href="https://www.instagram.com/ardi.hp/"
                body="Instagram"
                icon="fab fa-instagram"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
