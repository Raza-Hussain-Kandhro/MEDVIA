#!/usr/bin/env bash
# One-command pre-flight. Run from FrontEnd/. Needs network and Chrome (for Lighthouse).
set -u
echo "== install =="; npm install --no-audit --no-fund || exit 1
echo "== typecheck =="; npm run typecheck || echo "TYPECHECK FAILED"
echo "== lint =="; npm run lint || echo "LINT FAILED"
echo "== build =="; npm run build || exit 1
echo "== bundle size (raw / gzip) =="
for f in dist/assets/*.js dist/assets/*.css; do printf "%s  %s raw  %s gzip\n" "$f" "$(wc -c <"$f")" "$(gzip -c "$f" | wc -c)"; done
echo "== leftovers =="
echo "raw hex outside index.css: $(grep -rnE '#[0-9a-fA-F]{3,8}\b' src | grep -v src/index.css | wc -l)"
echo "'biova' (expect domain/email/instagram only):"; grep -rniE 'biova' src index.html public | cut -c1-110
echo "== lighthouse (Home and a product page) =="
npm run preview -- --port 4173 >/dev/null 2>&1 & PID=$!; sleep 4
for u in "http://localhost:4173/" "http://localhost:4173/products"; do
  npx --yes lighthouse "$u" --quiet --chrome-flags="--headless=new --no-sandbox" --only-categories=performance,accessibility,best-practices,seo \
    --output=json --output-path=/tmp/lh.json >/dev/null 2>&1 && node -e '
    const r=require("/tmp/lh.json");const c=r.categories,a=r.audits;
    console.log(r.finalUrl,"perf",Math.round(c.performance.score*100),"a11y",Math.round(c.accessibility.score*100),"bp",Math.round(c["best-practices"].score*100),"seo",Math.round(c.seo.score*100),"CLS",a["cumulative-layout-shift"].displayValue,"LCP",a["largest-contentful-paint"].displayValue)'
done
kill $PID 2>/dev/null
echo "NOTE: also open a product page (/product-detail/<id>) with the API running and test widths 360, 768, 1280, 1536."
