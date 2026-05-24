from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, HttpUrl
from github_utils import get_urls, save_urls

app = FastAPI(title="KeepAlive API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Restrict in production
    allow_methods=["*"],
    allow_headers=["*"]
)


class URLRequest(BaseModel):
    url: HttpUrl


@app.get("/")
def root():
    return {"message": "KeepAlive API is running"}


@app.post("/add-url")
def add_url(request: URLRequest):
    url = str(request.url)
    urls, sha = get_urls()

    if url in urls:
        raise HTTPException(status_code=400, detail="URL already exists")

    urls.append(url)
    success = save_urls(urls, sha)

    if not success:
        raise HTTPException(status_code=500, detail="Failed to save URL")

    return {"message": "URL added successfully", "url": url}


@app.get("/urls")
def list_urls():
    urls, _ = get_urls()
    return {"urls": urls, "count": len(urls)}