import { revalidateTag, revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // Check for the revalidation secret
  const secret = request.headers.get("x-revalidate-secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { tag, path } = body;

    if (tag) {
      revalidateTag(tag, "max");
      return NextResponse.json({ message: `Cache invalidated for tag: ${tag}` });
    } else if (path) {
      revalidatePath(path);
      return NextResponse.json({ message: `Cache invalidated for path: ${path}` });
    } else {
      return NextResponse.json({ error: "Missing tag or path in request body" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
