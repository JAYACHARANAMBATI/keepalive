import requests
import json
import base64
import os
from datetime import datetime

GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
GITHUB_REPO = os.getenv("GITHUB_REPO")
GITHUB_FILE_PATH = os.getenv("GITHUB_FILE_PATH", "urls.json")

print(f"GITHUB_REPO: {GITHUB_REPO}")
print(f"GITHUB_FILE_PATH: {GITHUB_FILE_PATH}")
print(f"TOKEN exists: {bool(GITHUB_TOKEN)}")

HEADERS = {
    "Authorization": f"token {GITHUB_TOKEN}",
    "Accept": "application/vnd.github.v3+json"
}

def get_urls():
    url = f"https://api.github.com/repos/{GITHUB_REPO}/contents/{GITHUB_FILE_PATH}"
    response = requests.get(url, headers=HEADERS)
    print(f"GitHub API status: {response.status_code}")
    if response.status_code != 200:
        print(f"Error response: {response.text}")
        return []
    data = response.json()
    content = base64.b64decode(data["content"]).decode("utf-8")
    return json.loads(content)

def ping_url(url):
    try:
        response = requests.get(url, timeout=10)
        print(f"✅ {url} → {response.status_code}")
    except Exception as e:
        print(f"❌ {url} → Failed: {e}")

if __name__ == "__main__":
    print(f"\n🕐 Ping started at: {datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')} UTC")
    urls = get_urls()
    print(f"📋 Total URLs found: {len(urls)}")
    if len(urls) == 0:
        print("No URLs to ping. Add URLs first!")
    for url in urls:
        ping_url(url)
    print("✅ Done!")