import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/clerk-react";
import React from "react";
import toast from "react-hot-toast";

function HomePage() {
  return (
    <div>
      <button className="btn btn-primary" onClick={()=> toast.success("This is a success toast")}>oyaaa</button>

      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton />
    </div>
  );
}

export default HomePage;
