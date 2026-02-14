import { createRouter, RouterProvider, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import SiteLayout from './components/layout/SiteLayout';
import HomePage from './pages/HomePage';
import BouquetCollectionPage from './pages/BouquetCollectionPage';
import PolaroidCollectionPage from './pages/PolaroidCollectionPage';
import BookmarkCollectionPage from './pages/BookmarkCollectionPage';
import CustomizedCardCollectionPage from './pages/CustomizedCardCollectionPage';
import CustomOrdersPage from './pages/CustomOrdersPage';

const rootRoute = createRootRoute({
  component: () => (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const bouquetsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/bouquets',
  component: BouquetCollectionPage,
});

const polaroidsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/polaroids',
  component: PolaroidCollectionPage,
});

const bookmarksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/bookmarks',
  component: BookmarkCollectionPage,
});

const cardsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/customized-cards',
  component: CustomizedCardCollectionPage,
});

const customOrdersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/custom-orders',
  component: CustomOrdersPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  bouquetsRoute,
  polaroidsRoute,
  bookmarksRoute,
  cardsRoute,
  customOrdersRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
