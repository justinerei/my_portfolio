export default function Home() {
  return (
    <>
    <section className="hero-section">
      <span className="hero-section-title">
        i'm justine, <br />
        first year bs info student. <br />
        future ui/ux designer.
      </span>
    </section>

    <section>
    <div className="max-w-full p-4 flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4">
      <div
        className="w-full max-w-[546px] h-[444px] bg-primary shadow-xl border-secondary-300 border-[0.5px] overflow-hidden lg:w-[546px] lg:h-[444px] rounded-[40px]"
      >
        <div className="relative flex items-center justify-center h-full p-4">
          <img
            src="/recProj1.png" 
            alt="Descriptive Alt Text"
            className="w-full max-w-[436px] h-[303px] object-cover lg:w-[436px] lg:h-[303px] rounded-[29px]"
          />
        </div>
      </div>

      <div
        className="w-full max-w-[546px] h-[444px] bg-primary shadow-xl border-secondary-300 border-[0.5px] overflow-hidden lg:w-[546px] lg:h-[444px] rounded-[40px]"
      >
        <div className="relative flex items-center justify-center h-full p-4">
          <img
            src="/recProj2.png" 
            alt="Descriptive Alt Text"
            className="w-full max-w-[436px] h-[303px] object-cover lg:w-[436px] lg:h-[303px] rounded-[29px]"
          />
        </div>
      </div>
    </div>
    </section>

        <section className="bg-secondary w-full rounded-[50px] mt-[128px] flex justify-center items-center px-4 py-8 lg:py-16">
      <div className="flex flex-col items-center space-y-8">
        <div className="w-full flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full max-w-[354px] h-[400px] overflow-hidden rounded-[30px]">
            <img
              src="/usti.png"
              alt="Main Box Picture"
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
                  About Me <br />
                </span>
                <p className="text-16-jakarta mt-2">
                  I’m 18 years old. Lives in San Pablo City, Laguna, Philippines.
                </p>
              </div>

              <div>
                <span className="text-12-inter tracking-[0.15em] uppercase">
                  Socials <br />
                </span>
                <div className="">
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
          <p className="text-12-inter lg:text-base tracking-[0.15em] uppercase  lg:mt-12">
            Skills
          </p>
        </div>
        <div className="w-full max-w-[362px] h-auto">
          <img
            src="/skills.png"
            alt="Skills"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>

    
    </>
  );
}
