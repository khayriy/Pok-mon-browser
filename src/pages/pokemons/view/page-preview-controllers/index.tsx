import { usePreviewMode } from "../../../../hooks/usePreviewMode";

const PagePreviewControllers = () => {
  const { previewMode, setPreviewMode } = usePreviewMode();

  return (
    <div className="flex gap-4 justify-center items-center my-6">
      <button
        className={`px-6 py-2 rounded  ${
          previewMode === "pagination"
            ? "bg-slate-900 text-white "
            : "bg-white hover:bg-gray-100 dark:text-gray-800"
        }`}
        onClick={() => setPreviewMode("pagination")}
      >
        Page Controls
      </button>
      <button
        className={`px-6 py-2 rounded  ${
          previewMode === "infinite"
            ? "bg-slate-900 text-white hover:bg-slate-800"
            : "bg-white hover:bg-gray-100 dark:text-gray-800"
        }`}
        onClick={() => setPreviewMode("infinite")}
      >
        Infinite Scroll
      </button>
    </div>
  );
};

export default PagePreviewControllers;
