# Change image on home page in `src/app/page.tsx`

Change the src link here to something fun.
- Go to [unsplash.com](https://unsplash.com)
- Find a photo
- Download image
- Save image to `/public/images/{name-of-file}`
- Change the imageUrl
```jsx
// Change this url to change the image!
const imageUrl = '/images/snorlax.jpg';
// to
const imageUrl = '/images/{14996.png}';
```

## Bonus Challenge: 
We don't necessarily need to download an image and then host it on our server. 
How could we just use the web to embed an image?
