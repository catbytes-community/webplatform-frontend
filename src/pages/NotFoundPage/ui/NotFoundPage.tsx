import Footer from "../../../shared/ui/Footer/Footer";
import Navbar from "../../../shared/ui/Navbar/Navbar";

export const NotFoundPage = () => {
  return (
    <div>
      <Navbar />
      <div className="p-10">
        <h1 className="font-bold text-xl text-center">404 - Page Not Found</h1>
        <p className="text-center">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
      <Footer />
    </div>
  );
};
