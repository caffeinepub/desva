import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SiteLayout from './components/layout/SiteLayout';
import HomePage from './pages/HomePage';
import BouquetCollectionPage from './pages/BouquetCollectionPage';
import PolaroidCollectionPage from './pages/PolaroidCollectionPage';
import PolaroidCollectionsPage from './pages/PolaroidCollectionsPage';
import MagazineCollectionPage from './pages/MagazineCollectionPage';
import BookmarkCollectionPage from './pages/BookmarkCollectionPage';
import CustomizedCardCollectionPage from './pages/CustomizedCardCollectionPage';
import CuteAccessoriesPage from './pages/CuteAccessoriesPage';
import CustomOrdersPage from './pages/CustomOrdersPage';

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: () => (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  ),
});

const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: HomePage });
const bouquetsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/bouquets', component: BouquetCollectionPage });
const polaroidsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/polaroids', component: PolaroidCollectionPage });
const polaroidCollectionsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/polaroid-collections', component: PolaroidCollectionsPage });
const magazinesRoute = createRoute({ getParentRoute: () => rootRoute, path: '/magazines', component: MagazineCollectionPage });
const bookmarksRoute = createRoute({ getParentRoute: () => rootRoute, path: '/bookmarks', component: BookmarkCollectionPage });
const cardsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/cards', component: CustomizedCardCollectionPage });
const accessoriesRoute = createRoute({ getParentRoute: () => rootRoute, path: '/accessories', component: CuteAccessoriesPage });
const ordersRoute = createRoute({ getParentRoute: () => rootRoute, path: '/order', component: CustomOrdersPage });

const routeTree = rootRoute.addChildren([
  indexRoute,
  bouquetsRoute,
  polaroidsRoute,
  polaroidCollectionsRoute,
  magazinesRoute,
  bookmarksRoute,
  cardsRoute,
  accessoriesRoute,
  ordersRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
