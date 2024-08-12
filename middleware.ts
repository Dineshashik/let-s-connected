import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const cookieData = cookies().get("userData")?.value;
    const { pathname, searchParams } = request.nextUrl;
    if (searchParams.get("logout")) {
        const newUrl = new URL(pathname, request.url);
        newUrl.searchParams.delete("logout");
        const response = NextResponse.redirect(newUrl);
        response.cookies.delete("userData");
        return response;
    }
    const parseData = cookieData ? JSON.parse(cookieData) : null;

    const isInvestorLoggedIn =
        parseData && parseData.role === "INVESTOR" && parseData.token;
    const isFounderLoggedIn =
        parseData && parseData.role == "FOUNDER" && parseData.token;
    const isAdminLoggedIn =
        parseData && parseData.role == "ADMIN" && parseData.token;

    if (parseData) {
        if (isInvestorLoggedIn || isFounderLoggedIn || isAdminLoggedIn) {
            const isLoginPage = pathname.startsWith("/signin");
            const isRegisterPage = pathname.startsWith("/signup");
            const homePage = pathname.startsWith("/");

            if (isLoginPage || isRegisterPage || homePage) {
                return NextResponse.redirect(
                    new URL(
                        `${process.env.NEXT_PUBLIC_REDIRECT_URL
                        }/${parseData.role.toLowerCase()}?token=${parseData.token}` || '',
                        request.url,
                    ),
                );
            }
        }
    }
}

export const config = {
    matcher: ["/", "/signin", "/signup"],
};
