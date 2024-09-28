"use client";
import FormSubmit from "@/components/form-submit";
import { useFormState } from "react-dom";

export default function PostForm({ action }) {
  const [state, formAction] = useFormState(action, {});

  return (
    <form action={formAction}>
      <p className="form-control">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
      </p>
      <p className="form-control">
        <label htmlFor="image">Image URL</label>
        <input
          type="file"
          accept="image/png, image/jpeg"
          id="image"
          name="image"
        />
      </p>
      <p className="form-control">
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows="5" />
      </p>
      <p className="form-actions">
        <FormSubmit />
      </p>
      {state.errors && (
        <ul className="form-errors">
          {state.errors.map((error, idx) => (
            <li key={error + idx}>{error}</li>
          ))}
        </ul>
      )}
    </form>
  );
}
