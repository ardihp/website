import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import social from "@/data/social";

const LinkHref = dynamic(() => import("@/components/LinkHref"));
const SocialLink = dynamic(() => import("@/components/SocialLink"));

About.title = "About - Ardi";
About.route = "about";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.15 }}
      className="flex flex-col justify-center py-6 space-y-6 lg:space-y-8 w-full"
    >
      <p className="font-fredoka font-medium text-4xl lg:text-5xl sm:w-2/3 md:w-7/12 dark:text-slate-100 text-sky-500/50">
        Hey, it&apos;s a nice to meet you here {""}
        <span className="font-normal">⛄️</span>
      </p>
      <div className="flex flex-col space-y-3">
        <p className="font-fredoka font-medium text-xl md:text-2xl dark:text-slate-100 text-sky-500/50">
          About Me
        </p>
        <div className="flex flex-col space-y-6">
          <div className="font-manrope font-bold dark:text-slate-300 text-gray-600/70 space-y-3 leading-loose">
            <p>
              My name is{" "}
              <span className="dark:text-slate-100 text-gray-800">
                Ardiansyah Halim Putra
              </span>
              , people call me{" "}
              <span className="dark:text-slate-100 text-gray-800">Ardi</span>.
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
              <span className="dark:text-slate-100 text-gray-800">
                Software Engineering
              </span>{" "}
              last year, 2021.
            </p>
            <p>
              I like things related to{" "}
              <span className="dark:text-slate-100 text-gray-800">
                design and technology
              </span>
              , including {""}
              <span className="dark:text-slate-100 text-gray-800">
                interaction design, accessibility, and technology design
              </span>
              . I&apos;m getting interested in web development since 1st year at
              Vocational High School when i first learn{" "}
              <LinkHref body="PHP" href="https://www.php.net" target="_blank" />
              , and then continue with PHP framework called{" "}
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
            <p className="font-manrope font-bold dark:text-slate-100 text-gray-600/70">
              Feel free to get in touch with me via links below:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-flow-col md:auto-cols-fr gap-4 w-full">
              {social.map((scl, i) => (
                <SocialLink
                  icon={scl.icon}
                  body={scl.body}
                  href={scl.href}
                  idx={i}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
