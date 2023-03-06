import styled from "styled-components";

const Button = ({
  children,
  className,
  disabled = false,
  type = "button",
  onClick,
}) => {
  return (
    <ButtonComponent
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {children}
    </ButtonComponent>
  );
};

const ButtonComponent = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 700;
  max-height: 34px;
  cursor: pointer;

  &:is(:hover, :focus) {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.4;
    cursor: unset;
  }
`;

export default Button;
