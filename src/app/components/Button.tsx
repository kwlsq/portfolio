interface ButtonProps {
  href: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  wrapperClassName?: string;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <div className={props.wrapperClassName}>
      <a
        {...props}
        className={`px-6 py-3 bg-secondary border-2 border-solid border-white text-white font-semibold rounded-full drop-shadow-lg hover:bg-primary transition-colors animation duration-300 z-1 ${props.className} `}
      >
        {props.children}
      </a>
    </div>
  );
};
