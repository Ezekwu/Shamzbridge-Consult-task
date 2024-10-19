'use client';
import Analytics from './icons/graph-up-svgrepo-com.svg';
import ArrowRight from './icons/arrow-right.svg';
import Brain from './icons/brain-svgrepo-com.svg';
import Clock from './icons/clock-two-svgrepo-com.svg';
import Facebook from './icons/facebook-svgrepo-com.svg';
import Hamburger from './icons/Hamburger.svg';
import Instagram from './icons/instagram-svgrepo-com.svg';
import LinkedIn from './icons/linkedin-svgrepo-com.svg';
import ThreeUsers from './icons/ThreeUsers.svg';
import Twitter from './icons/twitter-154-svgrepo-com.svg';
import X from './icons/x.svg';



const icons = {
  Analytics,
  ArrowRight,
  Brain,
  Clock,
  Facebook,
  Instagram,
  Hamburger,
  LinkedIn,
  ThreeUsers,
  Twitter,
  X
};

export type Icons = keyof typeof icons;
interface Props {
  icon: Icons;
  size?: string;
}
export default function UiIcon({ icon, size = '16' }: Props) {
  const LazyLoadedIcon = icons[icon];
  return (
    <>
      {LazyLoadedIcon && (
        <LazyLoadedIcon style={{ width: size, height: size }} />
      )}
    </>
  );
}
