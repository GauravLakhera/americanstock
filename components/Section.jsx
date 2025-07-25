import { cn } from '../lib/utils';

export default function Section({ children, className, ...props }) {
  return (
    <section 
      className={cn(
        "py-12 md:py-20 lg:py-24",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}