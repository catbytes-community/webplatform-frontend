import Footer from "../shared/ui/Footer/Footer";
import Navbar from "../shared/ui/Navbar/Navbar";

export default function TandC() {
  return (
    <div>
      <Navbar />
      <div className="p-8 max-w-3xl mx-auto text-gray-800">
        <h1 className="text-3xl font-bold my-6">
          CatBytes Community - Terms and Conditions
        </h1>
        <p className="my-8 text-sm text-gray-500">
          Last updated: 2 November 2025
        </p>

        <p className="mb-4">
          Welcome to <strong>CatBytes Community</strong>, a global, women-only
          community supporting growth in tech. By using our platform (including
          the private Discord server), you agree to these Terms and Conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Eligibility</h2>
        <ul className="list-disc list-inside mb-4">
          <li>You must be 18 years of age or older.</li>
          <li>You must identify as a woman.</li>
          <li>
            You must not be affiliated with any terrorist organization or
            support war, hate speech or violence.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. Community Rules</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Be polite, respectful, and inclusive to all members.</li>
          <li>
            Racist, sexist, discriminatory, or harmful behavior will not be
            tolerated and will result in your account being banned and removed
            from the Discord server and CatBytes web platform.
          </li>
          <li>
            Members must not engage in harassment, intimidation, or hate speech.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          3. Application Process & Content
        </h2>
        <p className="mb-4">
          To join CatBytes Community, applicants must submit a video
          introduction explaining why they want to join. This video is used to
          verify identity and eligibility by one of our mentors. This video will
          be stored for 30 days and then deleted automatically. Or you can
          ensure video deletion when you decide to delete your CatBytes web
          platform account.
        </p>
        <p className="mb-4">
          To join CatBytes Community as a mentor, applicants must submit a
          separate application describing their experience, tech stack and
          preferred contact method.
        </p>
        <p className="mb-4 inline">
          Members may contribute content such as project collaborations,
          learning resources (mentors), or study buddy posts (members). You
          retain ownership of your content, but grant us permission to display
          it within the platform. Content will be displayed in accordance with
          our{" "}
        </p>
        <a href="/privacy_policy" className="underline text-blue-500">
          Privacy Policy
        </a>
        <p className="inline">.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          4. Emails and communication
        </h2>
        <p className="mb-4">
          By using the platform you agree that we can send occasional emails of
          transactional or informative nature. Examples of emails you may
          receive:
        </p>
        <ul className="list-disc ml-10 list-inside mb-4">
          <li>
            When you submit an application to join CatBytes web platform and it
            gets approved or rejected by a mentor
          </li>
          <li>
            When you submit an application to join CatBytes Mentors and it gets
            approved or rejected by an admin
          </li>
          <li>When you want to login to web platform using a sign-in link</li>
          <li>When you delete your account</li>
          <li>When there are changes in this Terms and Conditions</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          5. Account Suspension or Termination
        </h2>
        <p className="mb-4">
          As a platform user, you reserve the right to permanently delete your
          account and associated data, including the introductory video
          submitted initially.
        </p>
        <p className="mb-4">
          We reserve the right to suspend or permanently remove access to our
          platform or Discord server for any user who violates these terms or
          harms the community experience.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          6. Discord Community
        </h2>
        <p className="mb-4 inline">
          While the core platform is a web app, majority of our interactions
          takes place on a private Discord server. By joining our Discord, you
          also agree to follow the{" "}
        </p>
        <a
          href="https://discord.com/terms"
          target="_blank"
          className="underline text-blue-500"
        >
          Discord Terms of Service
        </a>
        <p className="inline">
          {" "}
          and our internal community guidelines, which are enforced by
          moderators and available on our Discord server.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">7. Privacy</h2>
        <p className="mb-4 inline">
          We collect limited personal information during registration, including
          your name, email, and Discord nickname. This data is used only for
          verifying identity and granting access to the community. We do not
          share your information with third parties. Please refer to our{" "}
        </p>
        <a href="/privacy_policy" className="underline text-blue-500">
          Privacy Policy
        </a>
        <p className="inline"> for details.</p>

        {/* <h2 className="text-2xl font-semibold mt-8 mb-2">7. Donations</h2> */}
        {/* <p className="mb-4">
          In the future, we may offer a donation option to support the
          community. All donations will be used to fund training, events, and
          resources that help women grow in tech. Donations are voluntary and
          non-refundable.
        </p> */}

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          8. Changes to These Terms
        </h2>
        <p className="mb-4">
          We may update these Terms from time to time. Registered users will
          receive a notification of the updated Terms and Conditions. Continued
          use of the platform means you accept the updated terms.
        </p>
        <Footer />
      </div>
    </div>
  );
}
