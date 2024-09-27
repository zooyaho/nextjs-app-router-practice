export default function ArchiveLayout({ children, archive, latest }) {
  return (
    <div>
      <h1 className="text-[2rem]">News Archive</h1>
      {children}
      {/* /archive 및 /archive/[...filter] 경로 처리 */}
      <section className="mb-[2rem] pb-[2rem] border-b-2 border-[#b0b0a6]">
        {/* {archive} */}
      </section>
      {/* /archive/latest 경로 처리 (병렬 라우트) */}
      {/* <section id="archive-latest">{latest}</section> */}
    </div>
  );
}
