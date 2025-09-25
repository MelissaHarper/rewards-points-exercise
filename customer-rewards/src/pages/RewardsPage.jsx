import { memo } from "react";
import { lazy, Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const RewardsPoints = lazy(() => import("../components/RewardsPoints"));

const RewardsPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-12 mx-auto"></div>

        <section className="rewards-section section-padding">
          <Suspense fallback={<LoadingSpinner />}>
            <RewardsPoints />
          </Suspense>
        </section>
      </div>
    </div>
  );
};
export default memo(RewardsPage);
