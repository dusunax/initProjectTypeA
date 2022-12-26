import styled from "styled-components";

interface DefaultButtonProps {
  children?: React.ReactNode;
  type?: string;
}

export default function Button({ children, type }: DefaultButtonProps) {
  const buttonType = "primary";
  return <ButtonElement>{children}</ButtonElement>;
}

const ButtonElement = styled.button`
  padding: 0.5rem 1rem;
  border-style: solid;
  border-width: 2px;
  border-radius: 8px;

  color: ${({ theme }) => theme.styleGuide.buttonColors.primary.color};
  background-color: ${({ theme }) =>
    theme.styleGuide.buttonColors.primary.backgroundColor};
  border-color: ${({ theme }) => theme.styleGuide.buttonColors.primary.color};
`;
