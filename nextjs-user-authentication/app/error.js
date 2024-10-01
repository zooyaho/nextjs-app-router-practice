"use client";
export default function ErrorPage({ error, reset }) {
  console.log("error >> ", error.message);
  return (
    <>
      <h1>{error.message}</h1>
      {/* {error.code && <p>{error.code}</p>} */}
    </>
  );
}
