import MealsGrid from "@/components/meals/meals-grid";
import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <header className="flex flex-col gap-12 my-12 mx-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-xl">
        <h1 className="font-montserrat">
          Delicious meals, created{" "}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            by you
          </span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className="mt-0">
          <Link
            href={"/meals/share"}
            className="inline-block mt-4 py-2 px-4 rounded-md bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold text-decoration-none"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main className="main">
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
