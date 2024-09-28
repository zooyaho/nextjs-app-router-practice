"use client";
import { notFound, useRouter } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

export default function InterceptedImagePage({ params }) {
  const router = useRouter();
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);

  if (!newsItem) notFound();

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
