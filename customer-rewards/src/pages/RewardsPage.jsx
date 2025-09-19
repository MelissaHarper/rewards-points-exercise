import RewardsPoints from "../components/RewardsPoints";

const RewardsPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-12 mx-auto"></div>

        <section className="rewards-section section-padding">
          <RewardsPoints view={"Customer View"} />
          <RewardsPoints view={"Admin View"} />
        </section>
      </div>
    </div>
  );
};
export default RewardsPage;
