import requests
import base64
import json
import os
from dotenv import load_dotenv

load_dotenv()

GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
GITHUB_REPO = os.getenv("GITHUB_REPO")
GITHUB_FILE_PATH = os.getenv("GITHUB_FILE_PATH")

HEADERS = {
    "Authorization": f"token {GITHUB_TOKEN}",
    "Accept": "application/vnd.github.v3+json"
}

BASE_URL = f"https://api.github.com/repos/{GITHUB_REPO}/contents/{GITHUB_FILE_PATH}"


def get_urls():
    response = requests.get(BASE_URL, headers=HEADERS)
    if response.status_code == 404:
        return [], None
    data = response.json()
    content = base64.b64decode(data["content"]).decode("utf-8")
    urls = json.loads(content)
    sha = data["sha"]
    return urls, sha


def save_urls(urls, sha=None):
    content = base64.b64encode(json.dumps(urls, indent=2).encode("utf-8")).decode("utf-8")
    payload = {
        "message": "Updated URLs - KeepAlive",
        "content": content
    }
    if sha:
        payload["sha"] = sha

    response = requests.put(BASE_URL, headers=HEADERS, json=payload)
    return response.status_code in [200, 201]