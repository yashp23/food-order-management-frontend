import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./layouts/layout";
import ProtectedRoute from "./auth/ProtectedRoute";

// Dynamic imports for pages
const HomePage = lazy(() => import("./pages/HomePage"));
const AuthCallbackPage = lazy(() => import("./pages/AuthCallbackPage"));
const UserProfilePage = lazy(() => import("./pages/UserProfilePage"));
const ManageRestaurantPage = lazy(() => import("./pages/ManageRestaurantPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const DetailPage = lazy(() => import("./pages/DetailPage"));
const OrderStatusPage = lazy(() => import("./pages/OrderStatusPage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout showHero>
              <HomePage />
            </Layout>
          }
        />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route
          path="/search/:city"
          element={
            <Layout showHero={false}>
              <SearchPage />
            </Layout>
          }
        />
        <Route
          path="/detail/:restaurantId"
          element={
            <Layout showHero={false}>
              <DetailPage />
            </Layout>
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/order-status"
            element={
              <Layout>
                <OrderStatusPage />
              </Layout>
            }
          />
          <Route
            path="/user-profile"
            element={
              <Layout>
                <UserProfilePage />
              </Layout>
            }
          />
          <Route
            path="/manage-restaurant"
            element={
              <Layout>
                <ManageRestaurantPage />
              </Layout>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
