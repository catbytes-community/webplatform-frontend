import catPic from '../../shared/ui/Images/catImage.png';
import bookmarkImage from '../../shared/ui/Images/bookmarkImage.png';
import humanImage from '../../shared/ui/Images/humanImage.png';
import statsImage from '../../shared/ui/Images/statsImage.png';
import pawImage from '../../shared/ui/Images/pawImage.png';
import backgroundPawImage from '../../shared/ui/Images/backgroundPawImage.png';

const AboutUsLP = () => {
    return (
        <div className="bg-gradient-to-tr from-[#FACCD0] via-[#fdf2f4] to-[#FBD0D4] p-6 py-16 relative">

            {/*background paw*/}

            <img
                src={backgroundPawImage}
                alt="Background Image"
                className="absolute top-0 left-0 object-cover"
            />

            <div className="container mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-[1fr_2.4fr_1fr] gap-6">

                    {/* About us block */}
                    <div className="flex flex-col p-6 md:w-72">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">About us</h2>
                        <p className="text-gray-600 text-base md:text-lg mb-3">Lorem Ipsum</p>
                        <p className="text-gray-500 text-sm">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>

                    {/* Central block */}
                    <div
                        className="relative rounded-3xl shadow-lg shadow-rose-200 p-4 pl-6 md:pl-12 "
                        style={{ backgroundColor: "#fef6f7" }}
                    >
                        <img
                            src={bookmarkImage}
                            alt="Imagine"
                            className="absolute top-0 -mt-6 right-4 md:right-8 w-20 md:w-40 h-20 md:h-40"
                        />
                        <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 pt-12 md:pt-16">Lorem ipsum</h3>
                        <p className="text-gray-600 text-sm md:text-xl mr-0 md:mr-24">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the
                            industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>

                    {/* Small blocks */}

                    <div className="space-y-8">

                        {/* Cat block */}

                        <div className="rounded-3xl shadow-lg p-6 relative w-full md:w-64" style={{ backgroundColor: "#fdcace" }}>
                            <div className="absolute -top-8 md:-top-16 right-0">
                                <img src={catPic} alt="logo" className="h-26 md:h-30 w-24 md:w-40" />
                            </div>
                            <p className="text-gray-800 font-bold text-base md:text-lg py-4 md:py-8">
                                Lorem Ipsum is simply dummy text of the printing
                            </p>
                        </div>

                        {/* Mission block */}

                        <div className="rounded-3xl p-6 md:w-64">
                            <h4 className="text-lg md:text-2xl font-bold text-gray-900">Our mission</h4>
                            <p className="text-gray-600 mt-2 text-sm md:text-base">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3 blocks below */}

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    {/* members */}

                    <div
                        className="rounded-3xl p-8 shadow-2xl shadow-rose-300 text-center flex items-center justify-center relative"
                        style={{ backgroundColor: "#fef7f8" }}
                    >

                        {/*2 images with people*/}

                        <img
                            src={pawImage}
                            alt="Your Small Icon"
                            className="w-10 md:w-14 h-10 md:h-14 absolute -top-2 -mt-6 -right-4"
                        />
                        <div className="flex items-center">

                            <img
                                src={humanImage}
                                alt="Small Mentor Icon"
                                className="w-10 h-10 md:w-14 md:h-14 absolute left-1/4 md:left-20 md:top-8 md:mt-4 top-12"
                            />

                            <img
                                src={humanImage}
                                alt="Mentor Icon"
                                className="w-14 md:w-20"
                            />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                                1000+
                            </h3>
                            <p className="text-lg md:text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                                members
                            </p>
                        </div>
                    </div>

                    {/* mentors */}

                    <div
                        className="rounded-3xl p-8 shadow-2xl shadow-rose-300 text-center flex items-center justify-center relative"
                        style={{ backgroundColor: "#fef7f8" }}
                    >
                        <img
                            src={pawImage}
                            alt="Your Small Icon"
                            className="w-10 md:w-14 h-10 md:h-14 absolute -top-2 -mt-6 -right-4"
                        />
                        <img
                            src={humanImage}
                            alt="Mentor Icon"
                            className="w-14 md:w-20 -ml-4"
                        />
                        <div>
                            <h3 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                                100+
                            </h3>
                            <p className="text-lg md:text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                                mentors
                            </p>
                        </div>
                    </div>

                    {/* areas of study */}
                    <div
                        className="rounded-3xl p-8 shadow-2xl shadow-rose-300 text-center flex items-center justify-center relative"
                        style={{ backgroundColor: "#fef7f8" }}
                    >
                        <img
                            src={pawImage}
                            alt="Your Small Icon"
                            className="w-10 md:w-14 h-10 md:h-14 absolute -top-2 -mt-6 -right-4"
                        />
                        <img
                            src={statsImage}
                            alt="Mentor Icon"
                            className="w-14 md:w-20"
                        />
                        <div>
                            <h3 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                                &gt;10
                            </h3>
                            <p className="text-lg md:text-2xl font-bold bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
                                areas of study
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsLP;
