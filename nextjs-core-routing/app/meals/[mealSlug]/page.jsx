import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className="flex p-8 gap-12 mx-auto max-w-[80rem]">
        <div className="relative w-[30rem] h-[20rem]">
          <Image
            src={meal.image}
            alt={meal.title}
            fill
            className="object-cover rounded-lg shadow-md animate-fade-slide-in-left"
          />
        </div>
        <div className="px-4 py-2 text-[#ddd6cb] max-w-[40rem] animate-fade-slide-in-right">
          <h1 className="text-[3.5rem] uppercase font-montserrat text-shadow-md">
            {meal.title}
          </h1>
          <p className="text-[1.5rem] text-[#cfa69b] italic">
            by
            <a
              href={`mailto:${meal.creator_email}`}
              className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent hover:text-shadow-lg"
            >
              {meal.creator}
            </a>
          </p>
          <p className="text-[1.5rem]">{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className="text-[1.25rem] leading-6 bg-[#6e6464] text-[#13120f] rounded-lg shadow-md p-8 max-w-[60rem] mx-auto mt-8 animate-fade-slide-in-bottom"
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
