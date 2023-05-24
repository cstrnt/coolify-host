import { NextResponse, type NextRequest } from "next/server";


export function GET(
  req: NextRequest,
  { params }: { params: { city: string } },
) {

  const newUrl = req.nextUrl.clone();

  newUrl.pathname = "/";
  return NextResponse.redirect(newUrl);
}
