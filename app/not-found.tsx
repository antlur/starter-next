import Link from "next/link";

export default function NotFound() {
  console.log("404 page rendered");
  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}