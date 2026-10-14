# MobileWorldStation

MobileWorldStation is a responsive front-end storefront concept for smartphones, tablets, wearables and accessories. Its visual direction pairs a curated shopping experience with the familiar category browsing and product discovery patterns found across modern online marketplaces.

## Features

- Responsive navigation and product catalogue
- Search, category filters and sorting
- Product detail dialog
- Shopping bag with quantity controls and saved cart state
- Account sign-in and registration interface with a disabled-by-default authentication scaffold
- Mobile-friendly layout and reduced-motion support

## Run locally

Open `index.html` in a browser, or serve this folder with a local web server. Product images are stored in `images/` and referenced with relative paths.

## Demo limitations

This is a front-end portfolio project. Checkout, payment processing, inventory, shipping, order management and account authentication are not connected to a back end. Account controls remain disabled while `enabled` is `false` in `auth-config.js`.

## Secure authentication integration

The browser scaffold expects a same-origin HTTPS API under `/api/auth`:

- `GET /csrf` returns a CSRF token for the current pre-authentication session.
- `POST /login` accepts `{ "email", "password" }`.
- `POST /register` accepts `{ "name", "email", "password" }`.
- `GET /google` starts Google OpenID Connect on the server and returns through a server-handled callback.

Before enabling the interface, implement these routes on a backend and keep the OAuth client secret there. The backend must validate Google signatures, issuer, audience, expiry, OAuth state and nonce; use exact registered redirect URIs; issue a rotated session in an `HttpOnly`, `Secure`, `SameSite` cookie; and enforce CSRF protection, rate limits, email verification and safe password hashing. Do not store passwords or bearer tokens in browser storage. Link Google to an existing account only after the user is signed in and explicitly confirms the link; do not link accounts from a matching email address alone.

GitHub Pages cannot run these authentication routes. The account interface stays disabled until the project is deployed with a secure backend on the same origin (or behind a same-origin API proxy).
