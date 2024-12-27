import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Image from 'next/image'; // Import the Image component for optimized images

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <span className="hero-section-title">
        i&apos;m justine, <br />
          first year bs info student. <br />
          future ui/ux designer.
        </span>
      </section>
      {/* HERO SECTION */}

      {/* RECENT PROJECTS */}
      <section>
        <div className="max-w-full p-4 flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="w-full max-w-[546px] h-[444px] bg-primary shadow-xl border-secondary-300 border-[0.5px] overflow-hidden lg:w-[546px] lg:h-[444px] rounded-[40px] hover:shadow-xl hover:shadow-sd-color-100 duration-300 cursor-pointer">
            <div className="relative flex items-center justify-center h-full p-4">
              <Image
                src="/recProj1.png"
                alt="Descriptive Alt Text"
                width={436}
                height={303}
                quality={100}
                className="w-full max-w-[436px] h-[303px] object-cover lg:w-[436px] lg:h-[303px] rounded-[29px]"
              />
            </div>
          </div>
          <div className="w-full max-w-[546px] h-[444px] bg-primary shadow-xl border-secondary-300 border-[0.5px] overflow-hidden lg:w-[546px] lg:h-[444px] rounded-[40px] hover:shadow-xl hover:shadow-sd-color-200 duration-300 cursor-pointer">
            <div className="relative flex items-center justify-center h-full p-4">
              <Image
                src="/recProj2.png"
                alt="Descriptive Alt Text"
                width={436}
                height={303}
                quality={100}
                className="w-full max-w-[436px] h-[303px] object-cover lg:w-[436px] lg:h-[303px] rounded-[29px]"
              />
            </div>
          </div>
        </div>
      </section>
      {/* RECENT PROJECTS */}

      {/* ABOUT ME */}
      <section className="abt-me">
        <div className="flex flex-col items-center space-y-8">
          <div className="w-full flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="w-full max-w-[354px] h-[400px] overflow-hidden rounded-[30px]">
              <Image
                src="/usti.png"
                alt="Main Box Picture"
                width={354}
                height={400}
                quality={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full max-w-[440px] h-[400px] bg-secondary shadow-xl border-primary-100 border-[0.5px] overflow-hidden rounded-[20px] p-6">
              <div className="flex flex-col gap-6 mt-5 ml-3">
                <div>
                  <span className="text-22-jakarta">
                    Hi, I’m Justine Rei SA. Janolino —
                  </span>
                  <p className="text-14-jakarta">
                    Student from BS INFO-1D, aspiring to become a web or graphic designer.
                  </p>
                </div>
                <div>
                  <span className="text-12-inter tracking-[0.15em] uppercase">
                    About Me 
                  </span>
                  <p className="text-16-jakarta mt-2">
                    I’m 18 years old. Lives in San Pablo City, Laguna, Philippines.
                  </p>
                </div>
                <div>
                  <span className="text-12-inter tracking-[0.15em] uppercase">
                    Socials
                  </span>
                  <div>
                    <span className="text-10-inter mt-[10px] tracking-[0.15em] gap-[100px]">
                      facebook
                    </span>
                    <span className="text-10-inter mt-[10px] tracking-[0.15em] pl-[114px]">
                      instagram
                    </span>
                    <br />
                    <span className="text-16-jakarta mt-[10px]">Justine S. Janolino</span>
                    <span className="text-16-jakarta mt-[10px] pl-[32px]">
                      _justinereii
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-10">
            <p className="text-12-inter tracking-[0.15em] uppercase lg:mt-12">
              Skills
            </p>
          </div>
          <div className="w-full max-w-[362px] h-auto">
            <Image
              src="/skills.png"
              alt="Skills"
              width={362}
              height={106}
              quality={100}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
      {/* ABOUT ME */}

      {/* PROJECTS */}
      <section>
        <div className="recent-project">
          <div className="flex flex-col items-center space-y-8">
            <span className="text-16-inter tracking-[0.15em] uppercase">
              Projects  
            </span>
            <div className="w-full flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8 pt-[2rem]">
              <a href="https://justinerei.github.io/gym-buddy/"
              rel="noopener noreferrer">
                <div className="w-full max-w-[380px] h-[420px] overflow-hidden rounded-[50px] border-secondary-300 border-[0.5px] px-[45px] py-[45px] hover:shadow-xl hover:shadow-sd-color-100 duration-300 cursor-pointer">
                <Image
                  src="/recProj1.png"
                  alt="Main Box Picture"
                  width={290}
                  height={183}
                  quality={100}
                  className="w-[290px] h-[183px] rounded-[24px] shadow-xl shadow-sd-color-100 mb-[1rem]"
                />
                <span className="text-24-jakarta pl-[16px] mt-[2rem]">
                  gym buddy!
                </span> <br />
                <p className="text-12-inter uppercase tracking-[0.15em] leading-[18px] pl-[16px] pt-[60px]">
                  Final Project in <br /> Entrepreneur <span className="text-12-inter-white ml-[44px] lowercase">/ march 2024</span>
                </p>
              </div>
              </a>
              <a href="https://justinerei.github.io/tara_gym/" rel="noopener noreferrer">
              <div className="w-full max-w-[380px] h-[420px] overflow-hidden rounded-[50px] border-secondary-300 border-[0.5px] px-[45px] py-[45px] hover:shadow-xl hover:shadow-sd-color-200 duration-300 cursor-pointer">
                <Image
                  src="/recProj3.png"
                  alt="Main Box Picture"
                  width={290}
                  height={183}
                  quality={100}
                  className="w-[290px] h-[183px] rounded-[24px] shadow-xl shadow-sd-color-200 mb-[1rem]"
                />
                <span className="text-24-jakarta pl-[16px] mt-[2rem]">
                  tara gym!
                </span> <br />
                <p className="text-12-inter uppercase tracking-[0.15em] leading-[18px] pl-[16px] pt-[60px]">
                  Final Project in <br /> Comprog5 <span className="text-12-inter-white ml-[60px] lowercase">/ january 2024</span>
                </p>
              </div>
              </a>
              <div className="w-full max-w-[380px] h-[420px] overflow-hidden rounded-[50px] border-secondary-300 border-[0.5px] px-[45px] py-[45px] hover:shadow-xl hover:shadow-sd-color-300 duration-300 cursor-pointer">
                <Image
                  src="/recProj4.png"
                  alt="Main Box Picture"
                  width={290}
                  height={183}
                  quality={100}
                  className="w-[290px] h-[183px] rounded-[24px] shadow-xl shadow-sd-color-300 mb-[1rem]"
                />
                <span className="text-24-jakarta pl-[16px] mt-[2rem]">
                  new project
                </span> <br />
              </div>  
            </div>
          </div>
        </div>
      </section>
      {/* PROJECTS */}

      {/* CONTACT ME */}
      <section className="flex items-center justify-center mt-[100px]">
        <Contact/>
      </section>
      {/* CONTACT ME */}

      <footer>
        <Footer/>
      </footer>

    </>
  );
}
