import { FC } from 'react';
import { BaseButton } from '../buttons/BaseButton';
import { CampaignCategory, CampaignData } from '../types';
import { getDaysLeft } from '../daysLeft';

// const campaignData: Array<CampaignData> = [
//   {
//     category: 'education',
//     name: 'Give every kid free education',
//     expectedAmount: 5000,
//     amountRaised: 245,
//     endDate: 24,
//   },
//   {
//     category: 'personal',
//     name: 'I need to buy a house',
//     expectedAmount: 500,
//     amountRaised: 245,
//     endDate: 24,
//   },
//   {
//     category: 'community',
//     name: "Let's build a borehole",
//     expectedAmount: 1500,
//     amountRaised: 245,
//     endDate: 24,
//   },
//   {
//     category: 'health',
//     name: 'treat cancer',
//     expectedAmount: 2500,
//     amountRaised: 245,
//     endDate: 24,
//   },
//   {
//     category: 'project',
//     name: 'Build spaceship',
//     expectedAmount: 45000,
//     amountRaised: 2145,
//     endDate: 214,
//   },
// ];

type CampaignCardProps = {
  campaignData: CampaignData;
  onCardClick: () => void;
};
const CampaignCard: FC<CampaignCardProps> = ({ campaignData, onCardClick }) => {
  const getCategoryClass = (category: CampaignCategory) => {
    switch (category) {
      case 'education':
        return 'bg-education';
      case 'personal':
        return 'bg-personal';
      case 'community':
        return 'bg-community';
      case 'health':
        return 'bg-health';
      case 'project':
        return 'bg-project';
      default:
        return '';
    }
  };

  return (
    <div
      className={`w-full sm:max-w-[22rem] lg:max-w-[20rem] min-h-[16rem] rounded-2xl p-6 relative shadow-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 ${getCategoryClass(
        campaignData.account.category.toLowerCase() as CampaignCategory
      )}`}
      onClick={onCardClick}
    >
      <p className="text-sm font-light">{campaignData.account.category}</p>
      <p className="text-2xl font-bold mb-6">{campaignData.account.name}</p>
      <div className="mb-4">
        <p className="font-bold text-lg">
          ◎ {Number(campaignData.account.expectedAmount)}
        </p>
        <p className="font-light text-sm">
          ◎ {Number(campaignData.account.amountRaised)} raised
        </p>
        <p className="font-light text-sm">
          {getDaysLeft(campaignData.account.endDate)} days left
        </p>
      </div>
      <div className="absolute bottom-4 right-4">
        <BaseButton text={'Donate now'} onClick={onCardClick} />
      </div>
    </div>
  );
};

type CampaignCardListProps = {
  onCardClick: (currentData: CampaignData) => void;
  campaigns: CampaignData[];
};
export const CampaignCardView: FC<CampaignCardListProps> = ({
  onCardClick,
  campaigns,
}) => {
  return (
    <div className="lg:p-4 flex sm:flex-col justify-center  md:flex-row gap-4 overflow-y-scroll flex-wrap cursor-pointer font-mono">
      {campaigns.map((data, index) => (
        <CampaignCard
          key={index + 'str'}
          campaignData={data}
          onCardClick={() => onCardClick(data)}
          //onDonateClick={onDonateClick}
        />
      ))}
    </div>
  );
};
