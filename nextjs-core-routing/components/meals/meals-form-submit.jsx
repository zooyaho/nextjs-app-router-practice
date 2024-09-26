import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="py-3 px-8 rounded-md bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold text-lg shadow-md hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241] focus:ring-2 focus:ring-offset-2 focus:ring-[#f99f2a] disabled:bg-[#ccc] disabled:text-[#979797] disabled:cursor-not-allowed"
    >
      {pending ? "submitting..." : "Share Meal"}
    </button>
  );
}
