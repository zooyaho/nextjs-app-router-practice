import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";
import ModalBackdrop from "@/components/modal-backdrop";

export default async function InterceptedImagePage({ params }) {
  const newsSlug = params.slug;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) notFound();

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
