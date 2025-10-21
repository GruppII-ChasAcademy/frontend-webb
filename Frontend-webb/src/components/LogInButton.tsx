
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
}

const LoginButton = ({ children, loading = false, ...props }: Props) => {
  return (
    <button
      className={`LoginButt ${loading ? "loading" : ""}`}
      disabled={loading}
      {...props}
    >
      {!loading && children}
    </button>
  );
};

export default LoginButton;
