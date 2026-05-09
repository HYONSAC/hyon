import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageMarquee } from "../components/ImageMarquee";
import { WhatsAppFloat } from "../components/WhatsAppFloat";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La ruta que buscas no existe.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-smooth"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "HYON — Ingeniería integrada" },
      { name: "description", content: "HYON ofrece consultoría e ingeniería integrada multidisciplinar: civil, mecánica, eléctrica, industrial y digital." },
      { property: "og:title", content: "HYON — Ingeniería integrada" },
      { property: "og:description", content: "HYON ofrece consultoría e ingeniería integrada multidisciplinar: civil, mecánica, eléctrica, industrial y digital." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "HYON — Ingeniería integrada" },
      { name: "twitter:description", content: "HYON ofrece consultoría e ingeniería integrada multidisciplinar: civil, mecánica, eléctrica, industrial y digital." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/088c3865-e4c7-44c8-a437-86a4aedd8fe4/id-preview-7ca7b9d3--4fddb928-e481-41fb-a123-aa6d9aae62af.lovable.app-1777383300568.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/088c3865-e4c7-44c8-a437-86a4aedd8fe4/id-preview-7ca7b9d3--4fddb928-e481-41fb-a123-aa6d9aae62af.lovable.app-1777383300568.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isEmbed = pathname.startsWith("/embed");

  if (isEmbed) {
    return (
      <main className="min-h-screen">
        <Outlet />
      </main>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <ImageMarquee />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
