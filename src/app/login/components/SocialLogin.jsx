"use client";
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export default function SocialLogin() {
  const router = useRouter();
  const session = useSession();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  // Get the redirect URL from the query parameter, default to the homepage
  const callbackUrl = searchParams.get("redirect") || "/";

  const handleSocialLogin = (providerName) => {
    setLoading(true);
    // Pass the callbackUrl to the signIn function
    signIn(providerName, { callbackUrl });
  };

  useEffect(() => {
    // Only redirect if the session status changes to 'authenticated'
    if (session?.status === "authenticated") {
      router.push(callbackUrl);
      toast("Successfully Logged In!");
    }
  }, [session?.status, router, callbackUrl]);

  return (
    <div className="flex flex-col gap-8">
      <button
        onClick={() => handleSocialLogin("google")}
        className="btn bg-slate-200 text-gray-800 rounded-lg p-3 flex justify-center items-center gap-2 w-full"
        disabled={loading}
      >
        <FaGoogle />
        Continue With Google
      </button>

      <button
        onClick={() => handleSocialLogin("github")}
        className="btn bg-slate-200 text-gray-800 rounded-lg p-3 flex justify-center items-center gap-2 w-full"
        disabled={loading}
      >
        <FaGithub />
        Continue With Github
      </button>
      {/* You can add a loading spinner here */}
      {loading && <p className="text-center">Loading...</p>}
    </div>
  );
}