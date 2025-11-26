export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-4 p-8">
        <h1 className="text-3xl font-bold">Congrats on your new site!</h1>
        <p>
          This is the default starter for{" "}
          <a href="https://antlur.co" className="text-primary underline">
            Antlur
          </a>
          . You can start editing this page by modifying{" "}
          <code className="bg-muted px-1 py-0.5 rounded">src/app/page.tsx</code>.
        </p>
        <p>
          If the project is exclusively using Backstage routes, change{" "}
          <code className="bg-muted px-1 py-0.5 rounded">src/app/[...slugs]/page.tsx</code> to{" "}
          <code className="bg-muted px-1 py-0.5 rounded">src/app/[[...slugs]]/page.tsx</code>.
        </p>
      </section>
    </div>
  );
}
