const variantClasses = {
  primary: 'border border-white  text-white hover:opacity-65 text-xs',
  secondary: 'bg-white text-primary-base hover:text-primary-500 stroke-primary-base hover:stroke-primary-500 fill-primary-base hover:stroke-primary-base hover:bg-gray-200 text-xs',
  'secondary-text': 'text-primary-base stroke-primary-base  fill-primary-base',
  teriary: 'bg-tertiary-base text-primary-base hover:bg-gray-200',
};

interface Props {
  children: React.ReactNode;
  variant?: keyof typeof variantClasses;
  injectedClasses?: string;
}

export default function UiButton({
  children,
  variant = 'primary',
  injectedClasses
}: Props) {
  return (
    <button
      className={`flex gap-2 rounded-sm justify-center h-10 font-[400] items-center transition duration-120 ease-in  px-6 ${variantClasses[variant]} ${injectedClasses}`}
    >
      {children}
    </button>
  );
}