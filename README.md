# Will You Be My Valentine? 💖

A simple, cute, and romantic one-page Valentine's Day web app. Just one question, two buttons, and a whole lot of heart! 💌

## Features ✨

- 💖 **Simple & Sweet** - One page, one question, straight to the heart
- 🎨 **Floating Hearts** - Beautiful animated hearts in the background
- 😏 **Moving "No" Button** - The "No" button moves away when you try to hover (because there's only one right answer!)
- 🎉 **Confetti Celebration** - When "Yes" is clicked, confetti explodes everywhere!
- 📱 **Fully Responsive** - Looks perfect on all devices
- ✨ **Smooth Animations** - Everything fades in dramatically with Framer Motion

## Tech Stack

- **React 18** + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Vite** for fast development

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Adding Your Chibi Image

1. Place your chibi image in `/public/chibi-hug.png`
2. The image should show you holding a heart (cute chibi style!)
3. Recommended size: 256x256px to 512x512px
4. Format: PNG with transparent background (preferred)
5. The app will gracefully handle if the image is missing

## What It Does

1. **Welcome Screen**: Shows your chibi holding a heart, with the question "Hi… I have a very serious question 😳💖"
2. **Question Appears**: After 1.5 seconds, the main question fades in: "Would you do me the honor of being my Valentine? 🫶💌"
3. **Two Buttons**: 
   - **Yes 💖** - Clicking this triggers a confetti explosion and shows the celebration screen
   - **No 😌** - Hovering over this makes it move away (playfully!)
4. **Celebration**: When "Yes" is clicked, confetti rains down and shows "YAYYYYY 😭💖" with your chibi hugging

## Deployment

### Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy! 🚀

### Netlify

1. Push your code to GitHub
2. Import the project in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy! 🚀

## Customization

- Edit the text in `src/App.tsx` to personalize your message
- Change colors in `tailwind.config.js`
- Adjust animation timings in the component
- Modify the "No" button movement distance

## Structure

```
/src
  App.tsx           # Main app component (one page!)
  main.tsx          # Entry point
  index.css         # Global styles
/public
  chibi-hug.png    # Your chibi image (place here!)
```

## License

Made with 💖 for Valentine's Day
