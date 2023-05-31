import { SignIn } from "@clerk/nextjs";

function SignInPage() {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <SignIn />
      </div>
    </div>
  );
}

export default SignInPage;
