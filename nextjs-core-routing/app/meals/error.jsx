"use client";

export default function Error({ error }) {
  return (
    <main className="mt-20 text-center">
      <h1 className="text-[5rem] m-0  uppercase bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent bg-cover bg-center font-montserrat">
        오류가 발생했습니다!
      </h1>
      <p className="text-6 text-[#ddd6cb]">나중에 다시 시도 하십시오.</p>
    </main>
  );
}
