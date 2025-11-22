import { cacheLife } from "next/cache";

async function getData({ page }: { page: number } = { page: 1 }) {
  "use cache";
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${page}`, {
    // Enable revalidation every 10 seconds
    // next: { revalidate: 10 },
  });
  console.log("getting data for page", page);
  const data = await res.json();
  return data;
}

export async function RemoteData({ page = 1 }: { page?: number } = {}) {
  const data = await getData({ page });

  return (
    <div>
      <h2>Remote Data with Revalidation</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
