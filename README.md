# Devinson Peña - Personal Website

A modern, Web3-friendly personal website built with Next.js and TailwindCSS. Showcasing experience across Web3/Blockchain and Web2/Strategy domains.

## 🚀 Features

- **Modern Design**: Clean, responsive layout with dark mode support
- **Web3 Integration**: NFT badges, blockchain experience showcase
- **Professional Branding**: Consistent with personal brand and messaging
- **Performance Optimized**: Built with Next.js 14 and optimized images
- **Mobile Responsive**: Works seamlessly across all devices

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Fonts**: Inter & Space Grotesk
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
personalsite/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── projects/          # Projects page
│   ├── experience/        # Experience page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
├── public/                # Static assets
│   ├── images/            # Image assets
│   └── Devinson_Pena_Resume_2025.pdf
├── package.json           # Dependencies
├── tailwind.config.js     # TailwindCSS config
├── next.config.js         # Next.js config
└── tsconfig.json          # TypeScript config
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd personalsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Content Updates

- **Home Page**: Edit `app/page.tsx` for hero content
- **Projects**: Update project data in `app/projects/page.tsx`
- **Experience**: Modify experience data in `app/experience/page.tsx`
- **Contact**: Update contact information in `app/contact/page.tsx`

### Styling

- **Colors**: Modify `tailwind.config.js` for brand colors
- **Components**: Update component styles in `app/globals.css`
- **Layout**: Adjust layout components in `components/` directory

### Images

Add your images to `public/images/`:
- `profile.jpg` - Profile photo
- `pbax-nft.jpg` - PBA-X NFT badge
- `ethzuri-nft.jpg` - EthereumZuri NFT badge
- Project preview images

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Push code to GitHub/GitLab
   - Connect repository to Vercel

2. **Deploy**
   - Vercel will auto-detect Next.js
   - Deploy with one click

3. **Custom Domain**
   - Add custom domain in Vercel dashboard
   - Configure DNS settings

### Other Platforms

The site is compatible with any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Content Management

### Adding New Projects

1. Edit `app/projects/page.tsx`
2. Add new project object to `projects` array
3. Include title, description, tech stack, and status

### Updating Experience

1. Edit `app/experience/page.tsx`
2. Modify `web3Experience` or `web2Experience` arrays
3. Add NFT badges by setting `hasNFT: true`

### Contact Information

Update contact details in:
- `app/contact/page.tsx`
- `components/Footer.tsx`
- `app/layout.tsx` (metadata)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- TailwindCSS for styling
- Component-based architecture
- Responsive design principles

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

This is a personal website, but suggestions and improvements are welcome!

## 📞 Contact

- **Email**: devinsonpena@gmail.com
- **LinkedIn**: [linkedin.com/in/devinsonpena](https://linkedin.com/in/devinsonpena)
- **Website**: [your-domain.com](https://your-domain.com)

---

Built with ❤️ using Next.js and TailwindCSS