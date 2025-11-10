interface SectionsProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export default function Section({
  id,
  children,
  className = '',
  fullHeight = false,
}: SectionsProps) {
  const baseStyles = `
    ${fullHeight ? 'min-h-screen' : ''}
    m-auto flex flex-col items-center justify-center text-center
  `;

  return (
    <section id={id} className={`${baseStyles} ${className}`}>
      {children}
    </section>
  );
}
