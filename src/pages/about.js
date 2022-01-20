import React from "react";
import LinkHref from "@/components/LinkHref";
import SocialLink from "@/components/SocialLink";
import social from "@/data/social";
import { motion } from "framer-motion";

About.title = "About - Ardi";

function About() {
  return (
    <div className="flex flex-col py-6 space-y-6 lg:space-y-8 w-full">
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="font-fredoka text-4xl lg:text-5xl sm:w-2/3 md:w-7/12 dark:text-slate-200 text-sky-500/50"
      >
        Hey, it&apos;s a nice to meet you here {""}
        <span className="font-normal">⛄️</span>
      </motion.p>
      <div className="flex flex-col space-y-3">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="font-fredoka text-xl md:text-2xl dark:text-slate-200 text-sky-500/50"
        >
          About Me
        </motion.p>
        <div className="flex flex-col space-y-6">
          <div className="font-manrope font-bold dark:text-slate-400 text-gray-600/70 space-y-3 leading-loose">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              My name is{" "}
              <span className="dark:text-slate-200 text-gray-800">
                Ardiansyah Halim Putra
              </span>
              , people call me{" "}
              <span className="dark:text-slate-200 text-gray-800">Ardi</span>.
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
              <span className="dark:text-slate-200 text-gray-800">
                Software Engineering
              </span>{" "}
              last year, 2021.
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.45 }}
            >
              I like things related to{" "}
              <span className="dark:text-slate-200 text-gray-800">
                design and technology
              </span>
              , including {""}
              <span className="dark:text-slate-200 text-gray-800">
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
            </motion.p>
          </div>
          <div className="flex flex-col space-y-4">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="font-manrope font-bold dark:text-slate-200 text-gray-600/70"
            >
              Feel free to get in touch with me via links below:
            </motion.p>
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
    </div>
  );
}

export default About;
