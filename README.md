# Ovra website

The marketing site for [Ovra Browser](https://github.com/OvraBrowser/Ovra), built with Next.js and Tailwind CSS and exported as a static site for Cloudflare Pages.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
```

## Deploy

```bash
npm run build                                          # writes the static site to out/
npx wrangler pages deploy out --project-name ovra      # publishes to Cloudflare Pages
```

Screenshots in `public/shots` are real captures of the Ovra app's new tab page in each built-in theme.
