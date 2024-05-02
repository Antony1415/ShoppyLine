import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // console.log("------------------");

    const token = cookies().get('auth') ? JSON.parse(cookies().get('auth')!.value) : null
    const { pathname } = request.nextUrl;

    // console.log("TOKEN: ", token);

    // if (!token && pathname !== "/login/") {
    //     console.log("WOI");
    //     return NextResponse.redirect(new URL("/login", request.url));
    // }
}

// We can use this handle error middleware unfinite redirect, because Next.js read /_next, images, or any files
// Code below is from Next.js documentation
// export const config = {
//     matcher: [
//         /*
//          * Match all request paths except for the ones starting with:
//          * - api (API routes)
//          * - _next/static (static files)
//          * - _next/image (image optimization files)
//          * - favicon.ico (favicon file)
//          */
//         '/((?!api|_next/static|_next/image|favicon.ico).*)',
//     ],
// }

// We can use this handle error middleware unfinite redirect, because Next.js read /_next, images, or any files
// Code below is from stackoverflow
// export const config = {
//     // Skip all paths that should not be internationalized. This example skips the
//     // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
//     matcher: ['/((?!api|_next|.*\\..*).*)']
// };