import { SignUp } from "@clerk/nextjs";
function SignUpPage() {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <SignUp />
      </div>
    </div>
  );
}

export default SignUpPage;
