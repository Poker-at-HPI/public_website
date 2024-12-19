# Public Website

- Public website of the Poker Bot Competition at HPI

## Easy install and no configuration needed

- Run this command into your terminal

```sh

npx mugna-svelte-shadcn

```

- Navigate to your project directory via `cd` command and run `npm install` to install dependencies.
- Then run `npm run dev` to start the development server.
- Note that svelte dev builds are kind of slow to reload. This will be resolved once it is packaged and built.

- Happy Coding! :smiley:

Here are some development tips.

### New routes/pages
For a new route/page add it to the `lib/routes` directory.
In `MainNav.svelte` you can edit the Nav Bar. 

### Relative links
Links that point to a different route of the website you 
```svelte
<script>
    import { base } from '$app/paths';
</script>

<a href="{base}/page" />
```

### Static images etc.
Add them to the `static` directory. They can be accessed by using:
```svelte
<script>
    import { assets } from "$app/paths";
</script>

<img src="{assets}/my.svg" />
```

### Static pages
Make sure that your pages can be deployed statically. This is the only way to deploy it to github pages.
When you have dynamic code in your component add it to the `onMount` hook to run it dynamically - otherwise it will be precomputed at build time.

## Build to GitHub Pages
To run a test build run and see a preview
```sh
npm run build
```
or 
```sh
npm run predeploy
```
And open http://localhost:4173/public_website.
Checking the website before deploying it to production is optional but recommended.

To push it to github pages run 
```sh
npm run deploy
```
This will rebuild the page and lead to the new page being available on [poker-at-hpi.github.io/public_website](https://poker-at-hpi.github.io/public_website) and on [hpi-poker.de](https://hpi-poker.de).

Do NOT edit the content in the gh-pages branch as this is used by the build to deploy it.

## About Sveltekit

- More information [here](https://kit.svelte.dev/docs/introduction)

## About Shadcn-Svelte

- More information [here](https://www.shadcn-svelte.com/docs)


## Acknowledgements

This project uses the following MIT licensed project:

- [Svelte Shadcn Template](https://sveltethemes.dev/jhenbertgit/svelte-shadcn-template) - Svelte Shadcn Template by jhenbertgit.


## License
For license see the LICENSE file.

## Credits
For the Playing Cards we are using:
Vectorized Playing Cards 3.2
https://totalnonsense.com/open-source-vector-playing-cards/
Copyright 2011,2021 – Chris Aguilar – conjurenation@gmail.com
Licensed under: LGPL 3.0 - https://www.gnu.org/licenses/lgpl-3.0.html
