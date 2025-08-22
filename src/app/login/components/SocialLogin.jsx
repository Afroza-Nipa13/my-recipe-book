"use client";
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useEffect } from "react";
export default function SocialLogin() {
  const router = useRouter();
  const session = useSession();

  const handleSocialLogin = (providerName) => {
    signIn(providerName);
  };

  useEffect(() => {
    if (session?.status == "authenticated") {
      router.push("/");
      toast("Successfully Logged IN");
    }
  }, [session?.status]);

  return (
    <div className="flex flex-col gap-8">
      <p
        onClick={() => handleSocialLogin("google")}
        className="bg-slate-200 rounded-lg p-3 flex justify-center items-center gap-2"
      >
        <FaGoogle type="button" />
        Continue With Google
      </p>
      <p
        onClick={() => handleSocialLogin("github")}
        className="bg-slate-200 rounded-lg p-3 flex justify-center items-center gap-2"
      >
        <FaGithub type="button" />
        Continue With Github
      </p>
    </div>
  );
}