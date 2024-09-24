import Link from "next/link";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className="flex gap-12 my-12 mx-auto w-[90%] max-w-[75rem]">
        <div className="w-[40rem] h-[25rem] slideshow">
          <ImageSlideshow />
        </div>
        <div>
          <div className="text-[#ddd6cb] text-xl">
            <h1 className="text-2xl font-bold font-montserrat tracking-wider uppercase bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className="flex gap-4 text-xl mt-4">
            <Link
              href="/community"
              className="inline-block mt-4 py-2 px-4 rounded-md bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241] text-center"
            >
              Join the Community
            </Link>
            <Link
              href="/meals"
              className="inline-block mt-4 py-2 px-4 rounded-md bg-transparent text-[#ff9b05] font-normal hover:text-[#f9b241] text-center"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col text-[#ddd6cb] text-xl max-w-[50rem] w-[90%] mx-auto my-8 text-center">
          <h2 className="text-2xl font-bold">How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="flex flex-col text-[#ddd6cb] text-xl max-w-[50rem] w-[90%] mx-auto my-8 text-center">
          <h2 className="text-2xl font-bold">Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
