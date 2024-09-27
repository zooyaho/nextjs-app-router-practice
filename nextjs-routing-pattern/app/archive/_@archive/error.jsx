"use client";

export default function FilterError({ error }) {
  return (
    <div className="text-center mt-[3rem]">
      <h2>error!!</h2>
      <p>{error.message || "Invalid path."}</p>
    </div>
  );
}
