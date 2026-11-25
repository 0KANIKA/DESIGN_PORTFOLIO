# Kanika — Creative Archive

A static, GitHub Pages-friendly portfolio built with semantic HTML, CSS and vanilla JavaScript. The visual language is a vintage CRT broadcast: paper, burgundy ink, scanlines and channel cards.

## Run locally

Open `index.html` directly in a browser, or serve the folder for a more realistic static-host environment:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Google Drive links

The six verified folder links are defined in `script.js`. Each portfolio card is a standard external anchor that opens its corresponding Google Drive folder in a new tab with `noopener noreferrer`. No API key, OAuth credential, media manifest, or browser-side Drive integration is required.

## Update artwork

Update the artwork inside the corresponding Google Drive folder. The website will continue to link visitors directly to that folder.

## Deploy to GitHub Pages

1. Create a repository and add `index.html`, `style.css`, `script.js`, `README.md`, and any `assets/` files.
2. Push to the default branch.
3. In GitHub, open **Settings → Pages**.
4. Select **Deploy from a branch**, choose the default branch and `/ (root)`, then save.
5. GitHub will provide the public site URL.

## Included interactions

Keyboard-accessible external channel links, responsive layouts, smooth navigation, reduced-motion support, expandable story, and preserved retro hover interactions.
