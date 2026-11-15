# Agenda Hegel 2031

Hegel died on 14 November 1831. Agenda Hegel 2031 is an open, plural, weakly
centralised and yet-to-be-determined five-year plan in preparation for the
bicentenary of his death.

This repository is the website at <https://agendahegel2031.org>, served by
GitHub Pages.

## Structure

```
index.html          the page
assets/style.css    styles
assets/main.js      sends the mailing-list form to MailerLite
assets/favicon.svg  icon
CNAME               custom domain for GitHub Pages
```

Plain HTML, CSS and a few lines of JavaScript. No build step, no analytics.
The font (Schibsted Grotesk) is loaded from Google Fonts, and the mailing-list
form posts to MailerLite.

To preview locally, run `python3 -m http.server` in this folder and open
<http://localhost:8000>.

## Forks

Forks are welcome. To make your own version, edit the text in `index.html`,
replace the form action and the contact address, and delete `CNAME`.

## Licence

Texts: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
Code: MIT. See [LICENSE.md](LICENSE.md).
