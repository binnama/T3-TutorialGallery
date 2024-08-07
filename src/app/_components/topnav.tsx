"use client"

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation"; // NOT next/router
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
  const router = useRouter(); 

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallary</div>

      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton 
          endpoint="imageUploader" 
          onClientUploadComplete={() => {
            router.refresh(); // Reruns the current route you are on the server
            // and sends necessary data to update the pages content
            // When upload is completed, refresh page
          }}
          
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}