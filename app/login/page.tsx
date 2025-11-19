import { LoginForm } from "@/components/login-form";
import { BorderBeam } from "@/components/ui/border-beam";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 border border-dashed border-neutral-300 m-5">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start ">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-white text-primary-foreground flex  items-center justify-center rounded-2xl shadow-md shadow-zinc-300/20 dark:bg-gray-950 dark:shadow-none ">
              <img
                src="/companyLOGO.png"
                alt=""
                height={40}
                width={40}
                className="rounded-2xl bg-transparent"
              />
            </div>
            <div className="text-lg font-sans antialiased ">Theta-X</div>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center ">
          <div className="w-full max-w-sm relative  p-8 shadow-sm font-sans antialiased">
            <LoginForm />
            <BorderBeam
              size={60}
              initialOffset={20}
              className="from-transparent via-yellow-400 to-transparent"
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
              }}
            />
          </div>
        </div>
      </div>

      <div className="bg-neutral-100  hidden lg:block m-30 mb-20 border border-dashed border-neutral-300 relative">
        <img
          src="/dithered-image.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale m-3 shadow-sm  border-dashed border-neutral-300 "
        />
      </div>
    </div>
  );
}
