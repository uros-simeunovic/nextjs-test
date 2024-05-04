import { Button } from "../ui/button";

interface FormSubmitProps {
  children: React.ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}
export const FormSubmit = ({
  children,
  variant = "default",
}: FormSubmitProps) => {
  return (
    <Button type="submit" variant={variant}>
      {children}
    </Button>
  );
};
