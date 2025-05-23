export default async function Cat({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] };
}) {
  console.log(searchParams['catId']);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Cat Page</h1>
      <p className="mt-4 text-lg">Welcome to the Cat Page!</p>
    </div>
  );
}
