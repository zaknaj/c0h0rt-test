import { MerchantType } from "../types/Merchant";

export const MerchantCard = ({ merchant }: { merchant: MerchantType }) => (
  <div className="merchant">
    <div className="banner">
      <img src={merchant.bannerUrl} alt="" />
    </div>
    <div className="info">
      <div
        className="logo"
        style={{ backgroundImage: `url(${merchant.logoUrl})` }}
      />
      <div className="name">{merchant.name}</div>
      <div className="campaigns">
        {merchant.campaigns === 1
          ? "1 Campaign"
          : merchant.campaigns + " Campaigns"}{" "}
        available
      </div>
    </div>
  </div>
);
