import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions =[
        {
          "id": 1,
          "name": "Starter Pack",
          "price": 20,
          "duration": "monthly",
          "features": [
            "Access to cardio and strength equipment",
            "Locker room access",
            "Basic workout plan"
          ],
          "description": "Ideal for beginners who want access to essential gym facilities."
        },
        {
          "id": 2,
          "name": "Essential Membership",
          "price": 45,
          "duration": "monthly",
          "features": [
            "Access to all gym equipment",
            "Locker and shower access",
            "1 group fitness class per week",
            "Basic fitness assessment"
          ],
          "description": "Standard membership with gym access and one group class per week."
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 75,
          "duration": "monthly",
          "features": [
            "Unlimited access to all gym equipment",
            "Locker and shower access",
            "Unlimited group fitness classes",
            "1 complimentary personal training session per month",
            "Advanced fitness assessment and customized plan"
          ],
          "description": "Premium membership with unlimited group classes and a monthly personal training session."
        },
        {
          "id": 4,
          "name": "All-Inclusive Package",
          "price": 100,
          "duration": "monthly",
          "features": [
            "24/7 gym access",
            "Unlimited group fitness and specialty classes",
            "5 personal training sessions per month",
            "Nutrition consultation",
            "Sauna and steam room access",
            "Priority booking for classes and events"
          ],
          "description": "Best for committed members who want complete access and personalized support."
        },
        {
          "id": 5,
          "name": "VIP Experience",
          "price": 150,
          "duration": "monthly",
          "features": [
            "24/7 exclusive gym access",
            "Private locker and reserved parking",
            "Unlimited access to group and specialty classes",
            "8 personal training sessions per month",
            "Monthly nutrition and wellness consultation",
            "Spa amenities: sauna, steam room, and jacuzzi",
            "Free gym merchandise and guest passes"
          ],
          "description": "A luxury option with personalized services, exclusive access, and added amenities."
        },
        {
          "id": 6,
          "name": "Annual Membership",
          "price": 500,
          "duration": "yearly",
          "features": [
            "Access to all gym equipment",
            "Unlimited group classes",
            "Free fitness assessment every 6 months",
            "Discount on personal training sessions"
          ],
          "description": "Annual membership with full access and savings on personal training."
        }
      ]
      
    return (
        <div className="text-center container mx-auto text-3x grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
            priceOptions.map(option => <PriceOption key={option.id} option={option} ></PriceOption>)
        }
        </div>
    );
};

export default PriceOptions;