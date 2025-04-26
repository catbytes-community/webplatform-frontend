import Navbar from "../shared/ui/Navbar/Navbar";

export default function TandC() {
  return (
    <div>
      <Navbar />
      <div className="p-8 max-w-3xl mx-auto text-gray-800">
        <h1 className="text-3xl font-bold my-6">
          CatBytes Community - Terms and Conditions
        </h1>

        <p className="mb-4">
          Welcome to <strong>CatBytes Community</strong>, a global, women-only
          community supporting growth in tech. By accessing or using our
          platform (including the private Discord server), you agree to these
          Terms and Conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Eligibility</h2>
        <ul className="list-disc list-inside mb-4">
          <li>You must be 18 years of age or older.</li>
          <li>You must identify as a woman.</li>
          <li>
            You must not be affiliated with any terrorist organization or
            support war, hate speech, or violence.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          2. Community Expectations
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>Be polite, respectful, and inclusive to all members.</li>
          <li>
            Racist, sexist, discriminatory, or harmful behavior will not be
            tolerated.
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
          verify identity and eligibility.
        </p>
        <p className="mb-4">
          Members may contribute content such as project collaborations,
          learning resources (mentors), or study buddy posts (members). You
          retain ownership of your content, but grant us permission to display
          it within the platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          4. Account Suspension or Termination
        </h2>
        <p className="mb-4">
          We reserve the right to suspend or permanently remove access to our
          platform or Discord server for any user who violates these terms or
          harms the community experience.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          5. Discord Community
        </h2>
        <p className="mb-4">
          While the core platform is a web app, much of our interaction takes
          place on a private Discord server. By joining our Discord, you also
          agree to follow the Discord Terms of Service and our internal
          community guidelines, which are enforced by moderators.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Privacy</h2>
        <p className="mb-4">
          We collect limited personal information during registration, including
          your name, email, and Discord nickname. This data is used only for
          verifying identity and granting access to the community. We do not
          share your information with third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">7. Donations</h2>
        <p className="mb-4">
          In the future, we may offer a donation option to support the
          community. All donations will be used to fund training, events, and
          resources that help women grow in tech. Donations are voluntary and
          non-refundable.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          8. Changes to These Terms
        </h2>
        <p className="mb-4">
          We may update these Terms from time to time. Continued use of the
          platform means you accept the updated terms.
        </p>

        <p className="mt-8 text-sm text-gray-500">
          Last updated: April 11, 2025
        </p>
      </div>
    </div>
  );
}
