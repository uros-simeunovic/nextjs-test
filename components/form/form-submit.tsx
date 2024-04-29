import { Button } from "../ui/button";

interface FormSubmitProps {
  children: React.ReactNode;
}
export const FormSubmit = ({ children }: FormSubmitProps) => {
  return <Button type="submit">{children}</Button>;
};
