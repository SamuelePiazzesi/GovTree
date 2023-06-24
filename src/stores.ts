import { atom } from "nanostores";

export const selectedLink = atom<Link | null>(null);

export const selectLink = (link: Link) => {
  selectedLink.set(link);
  console.log("selectedLink", selectedLink.get());
};

export const unSelectLink = () => selectedLink.set(null);

export const getSharedLinks = (link: Link) => [
  {
    name: "Whatsapp",
    href: `https://api.whatsapp.com/send?text=${link.title} ${link.url}`,
    icon: "/whatsapp.svg",
  },
  {
    name: "Telegram",
    href: `https://t.me/share/url?url=${link.url}&text=${link.title}`,
    icon: "/telegram.svg",
  },
  {
    name: "Twitter",
    href: `https://twitter.com/intent/tweet?url=${link.url}&text=${link.title}`,
    icon: "/twitter.svg",
  },
  {
    name: "Facebook",
    href: `https://www.facebook.com/sharer/sharer.php?u=${link.url}`,
    icon: "/facebook.svg",
  },
  {
    name: "Email",
    href: `mailto:?subject=${link.title}&body=${link.url}`,
    icon: "/email.svg",
  },
];
