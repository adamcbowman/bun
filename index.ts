import figlet from 'figlet'

const server = Bun.serve({
    port: 8000,
    fetch(req) {
        const body = figlet.textSync('Hello World!')        
        return new Response(body)
    }
})

console.log(`Server running at http://localhost:${server.port}`)