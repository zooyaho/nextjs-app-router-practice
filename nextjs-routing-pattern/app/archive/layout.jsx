export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <h1 className="text-[2rem]">News Archive</h1>
      <section className="mb-[2rem] pb-[2rem] border-b-2 border-[#b0b0a6]">
        {archive}
      </section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
