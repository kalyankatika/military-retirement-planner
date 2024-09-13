
import http.server
import socketserver

PORT = 8000
DIRECTORY = "static_site"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving static site at http://localhost:{PORT}")
    httpd.serve_forever()
