"use client";
import ImagePicker from "@/components/meals/image-picker";
import MealsFormSubmit from "@/components/meals/meals-form-submit";
import { shareMeal } from "@/lib/action";

export default function ShareMealPage() {
  return (
    <>
      <header className="flex flex-col gap-12 my-12 mx-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-xl">
        <h1 className="font-montserrat">
          Share your &nbsp;
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="w-[90%] max-w-[75rem] mx-auto my-12 text-white">
        <form className="max-w-[50rem] flex flex-col gap-4" action={shareMeal}>
          <div className="flex flex-col gap-4">
            <p className="w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-bold uppercase text-[#b3aea5] font-montserrat"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="block w-full p-2 rounded-md border border-[#454952] bg-[#1c2027] text-lg font-montserrat text-[#ddd6cb] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]"
              />
            </p>
            <p className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-bold uppercase text-[#b3aea5] font-montserrat"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="block w-full p-2 rounded-md border border-[#454952] bg-[#1c2027] text-lg font-montserrat text-[#ddd6cb] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]"
              />
            </p>
          </div>
          <p>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-bold uppercase text-[#b3aea5] font-montserrat"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="block w-full p-2 rounded-md border border-[#454952] bg-[#1c2027] text-lg font-montserrat text-[#ddd6cb] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]"
            />
          </p>
          <p>
            <label
              htmlFor="summary"
              className="block mb-2 text-sm font-bold uppercase text-[#b3aea5] font-montserrat"
            >
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              className="block w-full p-2 rounded-md border border-[#454952] bg-[#1c2027] text-lg font-montserrat text-[#ddd6cb] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]"
            />
          </p>
          <p>
            <label
              htmlFor="instructions"
              className="block mb-2 text-sm font-bold uppercase text-[#b3aea5] font-montserrat"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
              className="block w-full p-2 rounded-md border border-[#454952] bg-[#1c2027] text-lg font-montserrat text-[#ddd6cb] focus:outline-none focus:ring-2 focus:ring-[#f99f2a] focus:bg-[#1f252d]"
            ></textarea>
          </p>
          <ImagePicker label={"your image"} name={"image"} />
          <p className="text-right">
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
