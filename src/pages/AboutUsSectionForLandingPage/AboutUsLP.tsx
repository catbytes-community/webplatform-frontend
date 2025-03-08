import catPic from "../../shared/assets/images/catImage.png";
import bookmarkImage from "../../shared/assets/images/bookmarkImage.png";
import humanImage from "../../shared/assets/images/humanImage.png";
import statsImage from "../../shared/assets/images/statsImage.png";
import pawImage from "../../shared/assets/images/pawImage.png";
import backgroundPawImage from "../../shared/assets/images/backgroundPawImage.png";
import membersIcon from "../../shared/assets/images/Group 2771.png";
import PawImageAboutUs from "../../shared/assets/images/PawImageAboutUs.png";
import PawImageAboutUs2 from "../../shared/assets/images/PawImageAboutUs2.png";
import Footer from "../../shared/ui/Footer/Footer";

const AboutUsLP = () => {
  return (
    <div className="bg-gradient-to-tr from-[#FACCD0] via-[#fdf2f4] to-[#FBD0D4] p-4 py-16 relative">
      {/*background paw*/}

      <img
        src={backgroundPawImage}
        alt="Background Image"
        className="absolute top-0 left-0 object-cover"
      />
      <img
        src={backgroundPawImage}
        alt="Background Image"
        className="absolute top-0 left-0 object-cover"
      />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2.4fr_1fr] gap-6">
          {/* About us block */}
          <div className="flex flex-col p-6 md:w-72 order-1 md:order-1 w-3/4">
            <h2 className="text-2xl md:text-5xl font-extrabold text-gray-900 mb-4">
              About us
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-3">
              CatBytes Community
            </p>
            <p className="text-gray-500 text-sm">
              CatBytes community was created in June 2025 as a private Discord
              server, where women who want to learn and grow in tech industry
              and tech professions can gather together and support each other in
              a comfortable, safe and non-toxic environment
            </p>
          </div>

          {/* Central block */}
          <div
            className="relative rounded-3xl shadow-lg shadow-rose-200 p-4 pl-6 md:pl-12 order-3 md:order-2"
            style={{ backgroundColor: "#fef6f7" }}
          >
            <img
              src={bookmarkImage}
              alt="Imagine"
              className="absolute top-0 -mt-6 right-4 md:right-8 w-20 md:w-40 h-20 md:h-40"
            />
            <h3 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 pt-12 md:pt-16">
              CatBytes
            </h3>
            <p className="text-gray-600 text-[12px] md:text-xl mr-0 md:mr-24 pb-10">
              Our community is a place where you will find amazing women,
              learning resources, mentors for personal and professional
              development in tech professions. Apply to be a part of CatBytes
            </p>
          </div>

          {/* Small blocks */}
          <div className="space-y-8 order-2 block">
            {/* Cat block */}
            <div className="flex justify-end md:block">
              <div
                className="rounded-3xl shadow-lg p-6 relative md:w-64 w-3/4"
                style={{ backgroundColor: "rgba(253, 202, 206, 0.7)" }}
              >
                <div className="absolute -top-14 md:-top-16 -right-4">
                  <img
                    src={catPic}
                    alt="logo"
                    className="h-26 md:h-30 w-32 md:w-40"
                  />
                </div>
                <p className="text-gray-800 font-bold text-base md:text-lg py-4 md:py-8 italic">
                  "Comfortable, safe and non-toxic tech space for women"
                </p>
              </div>
            </div>

            {/* Mission block */}
            <div className="rounded-3xl p-6 md:w-64 w-3/4">
              <h4 className="text-lg md:text-2xl font-bold text-gray-900">
                Our mission
              </h4>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                Increase the number of female professionals in the tech industry
              </p>
            </div>
          </div>
        </div>

        {/* 3 blocks below */}
        {/* 3 blocks below */}

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {/* members */}
          <div className="flex">
            <div
              className="rounded-3xl md:p-10 p-5 shadow-2xl shadow-rose-300 text-center flex items-center justify-center relative w-3/4 md:w-full"
              style={{
                backgroundColor: "#fef7f8",
                boxShadow: "0px 15px 20px rgba(248,112,112, 0.4)",
              }}
            >
              {/*2 images with people*/}
              <div className="flex items-center">
                <img
                  src={membersIcon}
                  alt="Small Mentor Icon"
                  className="md:h-20 h-14"
                />
                <img
                  src={PawImageAboutUs}
                  alt="Paw Icon"
                  className="w-15 md:w-14 h-15 md:h-14 absolute top-10 -mt-6 -right-24 md:hidden"
                />
                <img
                  src={pawImage}
                  alt="Your Small Icon"
                  className="w-10 md:w-14 h-10 md:h-14 absolute -top-2 -mt-6 -right-4 hidden md:block"
                />
                <div className="ml-4">
                  <h3 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                    800+
                  </h3>
                  <p className="text-lg md:text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                    members
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* mentors */}
          {/* mentors */}

          <div className="flex justify-end">
            <div
              className="rounded-3xl p-5 shadow-2xl shadow-rose-300 text-center flex items-center justify-center relative w-3/4 md:w-full"
              style={{
                backgroundColor: "#fef7f8",
                boxShadow: "0px 15px 20px rgba(248,112,112, 0.4)",
              }}
            >
              <img
                src={PawImageAboutUs2}
                alt="Paw Icon"
                className="w-15 md:w-14 h-15 md:h-14 absolute top-10 -mt-6 -left-24 md:hidden"
              />
              <img
                src={humanImage}
                alt="Mentor Icon"
                className="w-14 md:w-20 -ml-4"
              />
              <img
                src={pawImage}
                alt="Your Small Icon"
                className="w-10 md:w-14 h-10 md:h-14 absolute -top-2 -mt-6 -right-4 hidden md:block"
              />
              <div>
                <h3 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
                  20+
                </h3>
                <p className="text-lg md:text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                  mentors
                </p>
              </div>
            </div>
          </div>

          {/* areas of study */}
          {/* areas of study */}

          <div
            className="rounded-3xl p-5 text-center flex items-center justify-center relative w-3/4 md:w-full"
            style={{
              backgroundColor: "#fef7f8",
              boxShadow: "0px 15px 20px rgba(248,112,112, 0.4)",
            }}
          >
            <img
              src={PawImageAboutUs}
              alt="Paw Icon"
              className="w-15 md:w-14 h-15 md:h-14 absolute top-20 -mt-6 -right-24 md:hidden"
            />
            <img src={statsImage} alt="Mentor Icon" className="w-14 md:w-20" />
            <img
              src={pawImage}
              alt="Your Small Icon"
              className="w-10 md:w-14 h-10 md:h-14 absolute -top-2 -mt-6 -right-4 hidden md:block"
            />
            <div>
              <h3 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                &gt;10
              </h3>
              <p className="text-lg md:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                areas of study
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsLP;
