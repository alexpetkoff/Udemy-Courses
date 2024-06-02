//route handler - a file in which you can export various functions that must be GET, PATCH, DELETE(HTTP method names)

export function GET(request) {
    console.log(request);

    return new Response("Hello");
}
