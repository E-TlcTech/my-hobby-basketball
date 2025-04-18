import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

/**
 * Vérifie si l'utilisateur est authentifié pour les routes API
 */
export async function isAuthenticated(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return {
      authenticated: false,
      response: NextResponse.json(
        { error: "Non autorisé. Veuillez vous connecter." },
        { status: 401 }
      ),
    };
  }

  return { authenticated: true, session };
}

/**
 * Vérifie si l'utilisateur a le rôle admin
 */
export async function isAdmin(req) {
  const { authenticated, session, response } = await isAuthenticated(req);

  if (!authenticated) {
    return { authorized: false, response };
  }

  if (session.user.role !== "admin") {
    return {
      authorized: false,
      response: NextResponse.json(
        { error: "Vous n'avez pas les autorisations nécessaires." },
        { status: 403 }
      ),
    };
  }

  return { authorized: true, session };
}

/**
 * Pour utiliser dans les composants côté serveur
 */
export async function getAuthSession() {
  return await getServerSession(authOptions);
}

/**
 * Middleware pour vérifier l'authentification dans les pages
 */
export async function authMiddleware(context) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return { props: { session } };
}

/**
 * Vérifie si l'utilisateur est connecté (côté client)
 */
export function useRequireAuth(session, router) {
  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  return session;
}

/**
 * Middleware pour Next.js App Router
 */
export async function middleware(request) {
  // Protection des routes admin
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}
