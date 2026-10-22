# Portfolio site

No build step. Four files do everything:

| File | What it does | Edit it? |
|---|---|---|
| content.js | All your text: name, projects, resume, form key | Yes, this is the only file you need |
| index.html | Page structure | No |
| style.css | Colours and layout | Only to change the look |
| script.js | Fills the page from content.js and sends the form | No |

## Edit your content
1. Open your repo on github.com, click content.js, then the pencil icon.
2. Change the text between the quote marks. Keep commas and brackets.
3. Click "Commit changes". Cloudflare Pages / Netlify / Vercel redeploys in about a minute.

To add a project, copy one project block (from `{` to `},`) in content.js and paste it below the last one.
To use a screenshot, upload it to the images folder and set `image: "images/yourfile.png"`.

## Set up the Request resume form
1. Go to https://web3forms.com, enter your email, and copy the access key.
2. Paste it into `formKey` in content.js.
3. Redeploy. Submissions arrive in your inbox with the visitor's name, email, and company.
The visitor's email address is not verified, so check it before replying.

## Preview on your computer
Double-click index.html. (The form only sends from the live site.)

## Deploy
Push these files to a GitHub repo. In Cloudflare Pages, Netlify, or Vercel, import the repo with no build command and the root folder as the output directory.
