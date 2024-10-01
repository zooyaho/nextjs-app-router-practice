import { logout } from "@/actions/auth-actions";
import "../globals.css";

export const metadata = {
  title: "Next Auth",
  description: "Next.js Authentication",
};

export default function AuthRootLayout({ children }) {
  // app/layout.js와 같은 레벨로 되어 있어 html태그부터 작성 해야 함!!
  return (
    <html lang="en">
      <body>
        <header id="auth-header">
          <p>Welcome back!</p>
          <form action={logout}>
            <button>Logout</button>
          </form>
        </header>
        {children}
      </body>
    </html>
  );
}
