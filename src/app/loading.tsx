export default function Loading() {
  return (
    <div className="container-x grid min-h-[60vh] content-center gap-4">
      <div className="skeleton h-8 w-56 rounded-md" />
      <div className="skeleton h-20 w-full max-w-2xl rounded-md" />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="skeleton h-44 rounded-md" />
        <div className="skeleton h-44 rounded-md" />
        <div className="skeleton h-44 rounded-md" />
      </div>
    </div>
  );
}
