type Props = {
  error: string;
};

const ErrorMessage = ({ error }: Props) => {
  return <p>Oops! {error} - Something went wrong</p>;
};

export default ErrorMessage;
