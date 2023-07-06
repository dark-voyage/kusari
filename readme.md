<header>
<img src="https://www.orzklv.uz/favicons/logo.png" alt="logo" height="100" align="left">
<h1 style="display: inline">Kusari</h1>

Proof of concept URL Shortener using emoji domain

[![GitHub top language](https://img.shields.io/github/languages/top/orzklv/kusari?style=flat-square&logo=github)](https://github.com/orzklv/neko)
[![Channel](https://img.shields.io/badge/Chat-grey?style=flat-square&logo=telegram)](https://t.me/orzklvb)
[![Makefile CI](https://github.com/orzklv/kusari/actions/workflows/test.yml/badge.svg)](https://github.com/orzklv/kusari/actions/workflows/test.yml)

</header>

## About

There has been no good URL shortener that uses emoji domain.
So I made one.
It's not perfect, but it works.
It's still WIP.

> I host all contents statically, so you may correct me up by sending a pull request.

## Features

- Emoji domain
- Fast Prisma & Nextjs
- Vercel's builtin edge db

## Running

In order to rub the website, intall all required dependencies by running:

```bash
pnpm install # pwease, use pnpm
```

Then, change prisma db urls and start the development server:

```bash
pnpm run dev
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.