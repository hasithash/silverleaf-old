import AppNavBar from "./components/app_nav_bar";
import FirebaseWrapper from "../components/context/app_wrapper";

export default function SignUpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <FirebaseWrapper>
    <div className="w-[100vw] h-[100vh] flex flex-col overflow-hidden">
      <AppNavBar/>
      <div className="flex-grow overflow-y-scroll">
        {children}
      </div>
    </div>
   </FirebaseWrapper>
  );
}
