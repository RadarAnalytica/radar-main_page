import React from "react";
import "../pages/styles.css";
import Reviews from "./Reviews";

const ReviewsUsers = () => {
  return (
    <div>
      <div className='pb-3 mt-5 d-flex justify-content-center userReviewsMain'>
        <div className='userReviewsBlocksText'>
          <div className="userReviewsHeaderTitle">Более <span style={{ color: "rgba(83, 41, 255, 1)" }}>6 000</span> предпринимателей</div>
          <div className="userReviewsHeaderParag">уже используют для начала и развития бизнеса на маркетплейсах <span className="yellowLogoSpan">Radar Analytica</span></div>
        </div>

        {/* <div className='userReviewsBlocksText mobile-version'>
          Более 6 000 предпринимателей уже используют Radar Analytica
          для началаи развития бизнеса на маркетплейсах
        </div> */}
      </div>
      <div className='ReviewsUsersIP' style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
        <Reviews />
      </div>
    </div>
  );
};

export default ReviewsUsers;
