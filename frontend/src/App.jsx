import "./App.css";
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/clerk-react";

function App() {
  return (
    <>
      <h1>Welcome to the App</h1>
      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton/>
      </SignedIn>
    </>
  );
}

export default App;
