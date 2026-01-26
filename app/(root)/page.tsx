import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();

  console.log("Session:", session); // Improved logging

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white sm:text-6xl">
        Welcome to Next.js!
      </h1>
      {/* Show session info for debugging */}
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};

export default Home;
