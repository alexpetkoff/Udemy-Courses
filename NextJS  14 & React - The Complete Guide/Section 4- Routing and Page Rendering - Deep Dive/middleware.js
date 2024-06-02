import { NextResponse } from "next/server";

export default function middleware(request) {
    return NextResponse.next();
}

//middleware is a function that takes a look at  incoming request and blocks/redirect etc...