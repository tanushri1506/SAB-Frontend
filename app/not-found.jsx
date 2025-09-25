import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
      <h1 className="text-6xl font-bold gradient-title mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">
        :( Oops! This page doesn't exist
      </h2>
      <Button
        asChild
        size={"lg"}
        className="bg-red-900 hover:bg-red-400 cursor-pointer"
      >
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
