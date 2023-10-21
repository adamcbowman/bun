const server = Bun.serve({
    port: 8000,
    fetch(req) {
        return new Response('Hello World!')
    }
})

console.log(`Server running at http://localhost:${server.port}`)